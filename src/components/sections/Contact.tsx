import { useState } from 'react';
import { motion } from 'framer-motion';
import { brand } from '../../config/brand';
import { Button } from '../ui/Button';
import { SectionHeading } from '../ui/SectionHeading';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';

interface FormData {
  name: string;
  company: string;
  contact: string;
  task: string;
}

export function Contact() {
  const ref = useScrollAnimation();
  const [form, setForm] = useState<FormData>({ name: '', company: '', contact: '', task: '' });
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<Partial<FormData>>({});

  function validate(): boolean {
    const e: Partial<FormData> = {};
    if (!form.name.trim()) e.name = 'Укажите имя';
    if (!form.contact.trim()) e.contact = 'Укажите контакт';
    setErrors(e);
    return Object.keys(e).length === 0;
  }

  function handleSubmit(ev: React.FormEvent) {
    ev.preventDefault();
    if (!validate()) return;
    console.log('Form submission:', form);
    setSubmitted(true);
  }

  const inputClass =
    'w-full bg-bg border border-border rounded-xl px-5 py-4 text-text-primary placeholder:text-text-muted/40 focus:outline-none focus:border-accent/50 focus:ring-1 focus:ring-accent/20 transition-all duration-300';

  return (
    <section id="contact" ref={ref} className="py-24 md:py-36 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-accent/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-6 relative">
        <SectionHeading
          label="Контакты"
          title="Обсудить проект"
          subtitle="Оставьте заявку — ответим в течение нескольких часов"
        />

        <div className="grid md:grid-cols-2 gap-12">
          <div className="gsap-reveal">
            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-bg-card border border-accent/30 rounded-2xl p-12 text-center glow"
              >
                <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-6">
                  <svg className="w-8 h-8 text-accent" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold mb-2">Заявка отправлена</h3>
                <p className="text-text-muted">Свяжемся с вами в ближайшее время</p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <input
                    type="text"
                    placeholder="Имя *"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className={`${inputClass} ${errors.name ? '!border-red-500/50' : ''}`}
                  />
                  {errors.name && <p className="text-red-400 text-sm mt-2">{errors.name}</p>}
                </div>
                <input
                  type="text"
                  placeholder="Компания"
                  value={form.company}
                  onChange={(e) => setForm({ ...form, company: e.target.value })}
                  className={inputClass}
                />
                <div>
                  <input
                    type="text"
                    placeholder="Телефон или Telegram *"
                    value={form.contact}
                    onChange={(e) => setForm({ ...form, contact: e.target.value })}
                    className={`${inputClass} ${errors.contact ? '!border-red-500/50' : ''}`}
                  />
                  {errors.contact && <p className="text-red-400 text-sm mt-2">{errors.contact}</p>}
                </div>
                <textarea
                  placeholder="Расскажите о задаче"
                  value={form.task}
                  onChange={(e) => setForm({ ...form, task: e.target.value })}
                  rows={4}
                  className={`${inputClass} resize-none`}
                />
                <Button type="submit" className="w-full !py-4 !text-base">
                  Отправить заявку
                </Button>
                <p className="text-text-muted/40 text-xs text-center">
                  Нажимая «Отправить», вы соглашаетесь на обработку данных
                </p>
              </form>
            )}
          </div>

          <div className="gsap-reveal space-y-8">
            {[
              { label: 'Телефон', value: brand.contacts.phone, href: `tel:${brand.contacts.phone.replace(/\D/g, '')}` },
              { label: 'Email', value: brand.contacts.email, href: `mailto:${brand.contacts.email}` },
              { label: 'Telegram', value: brand.contacts.telegram, href: brand.contacts.telegramLink },
            ].map((item) => (
              <div key={item.label} className="group">
                <h3 className="text-sm font-semibold text-text-muted/60 uppercase tracking-wider mb-2">{item.label}</h3>
                <a
                  href={item.href}
                  className="text-xl md:text-2xl font-medium text-text-primary hover:text-accent transition-colors"
                >
                  {item.value}
                </a>
              </div>
            ))}

            <div className="pt-8 border-t border-border/50">
              <p className="text-text-muted leading-relaxed">
                Напишите напрямую — обсудим задачу, покажем демо под ваш бизнес.
                <span className="text-accent font-medium"> Бесплатно, без обязательств.</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

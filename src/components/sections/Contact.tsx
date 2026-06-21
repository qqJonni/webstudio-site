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
    // TODO: подключить Formspree / Telegram-бот
    console.log('Form submission:', form);
    setSubmitted(true);
  }

  const inputClass =
    'w-full bg-bg-card border border-border rounded-xl px-4 py-3 text-text-primary placeholder:text-text-muted/50 focus:outline-none focus:border-accent transition-colors';

  return (
    <section id="contact" ref={ref} className="py-24 md:py-32 bg-bg-card/30">
      <div className="max-w-5xl mx-auto px-6">
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
                className="bg-bg-card border border-accent/30 rounded-2xl p-8 text-center"
              >
                <div className="text-4xl mb-4">✓</div>
                <h3 className="text-xl font-bold mb-2">Заявка отправлена</h3>
                <p className="text-text-muted">Свяжемся с вами в ближайшее время</p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <input
                    type="text"
                    placeholder="Имя *"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className={`${inputClass} ${errors.name ? 'border-red-500' : ''}`}
                  />
                  {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
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
                    className={`${inputClass} ${errors.contact ? 'border-red-500' : ''}`}
                  />
                  {errors.contact && <p className="text-red-500 text-sm mt-1">{errors.contact}</p>}
                </div>
                <textarea
                  placeholder="Расскажите о задаче"
                  value={form.task}
                  onChange={(e) => setForm({ ...form, task: e.target.value })}
                  rows={4}
                  className={`${inputClass} resize-none`}
                />
                <Button type="submit" className="w-full">
                  Отправить заявку
                </Button>
              </form>
            )}
          </div>

          <div className="gsap-reveal space-y-6">
            <div>
              <h3 className="font-bold mb-2">Телефон</h3>
              <a href={`tel:${brand.contacts.phone.replace(/\D/g, '')}`} className="text-text-muted hover:text-accent transition-colors text-lg">
                {brand.contacts.phone}
              </a>
            </div>
            <div>
              <h3 className="font-bold mb-2">Email</h3>
              <a href={`mailto:${brand.contacts.email}`} className="text-text-muted hover:text-accent transition-colors text-lg">
                {brand.contacts.email}
              </a>
            </div>
            <div>
              <h3 className="font-bold mb-2">Telegram</h3>
              <a href={brand.contacts.telegramLink} className="text-text-muted hover:text-accent transition-colors text-lg">
                {brand.contacts.telegram}
              </a>
            </div>
            <div className="pt-6 border-t border-border">
              <p className="text-text-muted text-sm leading-relaxed">
                Или напишите напрямую — обсудим задачу, покажем демо под ваш бизнес.
                Бесплатно, без обязательств.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

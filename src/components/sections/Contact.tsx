import { useState } from 'react';
import { motion } from 'framer-motion';
import { brand } from '../../config/brand';
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
    'w-full bg-transparent border-b border-border px-0 py-4 text-text-dark placeholder:text-text-dark/40 focus:outline-none focus:border-text-dark transition-colors duration-300 text-lg font-light';

  return (
    <section id="contact" ref={ref} className="py-24 md:py-40 bg-bg-light text-text-dark">
      <div className="max-w-[1400px] mx-auto px-6 md:px-10">
        <div className="grid md:grid-cols-2 gap-16 md:gap-24">
          <div>
            <p className="gsap-reveal text-accent text-sm font-semibold tracking-widest uppercase mb-6" style={{ color: '#222831' }}>
              Контакты
            </p>
            <h2 className="gsap-reveal text-4xl md:text-6xl font-extrabold tracking-tight leading-tight text-text-dark">
              Хотите обсудить задачу?
            </h2>

            <div className="gsap-reveal mt-12 space-y-8">
              {[
                { label: 'Телефон', value: brand.contacts.phone, href: `tel:${brand.contacts.phone.replace(/\D/g, '')}` },
                { label: 'Почта', value: brand.contacts.email, href: `mailto:${brand.contacts.email}` },
                { label: 'Telegram', value: brand.contacts.telegram, href: brand.contacts.telegramLink },
              ].map((item) => (
                <div key={item.label}>
                  <p className="text-text-dark/40 text-sm mb-1">{item.label}</p>
                  <a href={item.href} className="text-text-dark text-lg hover:opacity-60 transition-opacity">
                    {item.value}
                  </a>
                </div>
              ))}
            </div>
          </div>

          <div className="gsap-reveal">
            {submitted ? (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="flex flex-col items-start justify-center h-full"
              >
                <h3 className="text-3xl font-bold text-text-dark mb-3">Заявка отправлена</h3>
                <p className="text-text-dark/60 font-light">Свяжемся с вами в ближайшее время</p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-2">
                <div>
                  <input type="text" placeholder="Имя *" value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className={`${inputClass} ${errors.name ? '!border-red-500' : ''}`} />
                </div>
                <input type="text" placeholder="Компания" value={form.company}
                  onChange={(e) => setForm({ ...form, company: e.target.value })}
                  className={inputClass} />
                <div>
                  <input type="text" placeholder="Телефон или Telegram *" value={form.contact}
                    onChange={(e) => setForm({ ...form, contact: e.target.value })}
                    className={`${inputClass} ${errors.contact ? '!border-red-500' : ''}`} />
                </div>
                <textarea placeholder="Расскажите о задаче" value={form.task}
                  onChange={(e) => setForm({ ...form, task: e.target.value })}
                  rows={3} className={`${inputClass} resize-none`} />

                <button
                  type="submit"
                  className="mt-8 inline-flex items-center justify-center bg-text-dark text-white font-semibold px-8 py-4 rounded-lg hover:opacity-80 transition-opacity duration-300 cursor-pointer"
                >
                  Отправить заявку
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

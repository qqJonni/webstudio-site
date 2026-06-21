import { motion } from 'framer-motion';
import { brand } from '../../config/brand';
import { Button } from '../ui/Button';
import { SectionHeading } from '../ui/SectionHeading';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';

export function Pricing() {
  const ref = useScrollAnimation();

  return (
    <section id="pricing" ref={ref} className="py-24 md:py-36 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-bg-card/30 via-transparent to-bg-card/30 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative">
        <SectionHeading
          label="Пакеты"
          title="Прозрачные цены"
          subtitle="Три пакета — выберите подходящий. Или обсудим индивидуальное решение"
        />

        <div className="grid md:grid-cols-3 gap-6 items-start">
          {brand.pricing.map((plan) => (
            <motion.div
              key={plan.name}
              className={`gsap-reveal flex flex-col rounded-2xl p-8 md:p-10 relative overflow-hidden transition-all duration-300 ${
                plan.featured
                  ? 'bg-bg-card border-2 border-accent/50 glow-strong md:-mt-4 md:mb-4'
                  : 'bg-bg-card/60 border border-border/50 opacity-90 hover:opacity-100'
              }`}
              whileHover={plan.featured ? { y: -4 } : { y: -2 }}
            >
              {/* Featured glow background */}
              {plan.featured && (
                <div className="absolute inset-0 pointer-events-none">
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-1/2 bg-accent/8 blur-[60px]" />
                  <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1/2 h-1/3 bg-accent/5 blur-[40px]" />
                </div>
              )}

              {plan.featured && (
                <span className="absolute -top-px left-0 right-0 h-1 bg-gradient-to-r from-transparent via-accent to-transparent" />
              )}

              <div className="relative">
                {plan.featured && (
                  <span className="inline-block px-4 py-1 bg-accent text-white text-xs font-bold rounded-full uppercase tracking-wider mb-6">
                    Популярный выбор
                  </span>
                )}

                <h3 className="text-2xl md:text-3xl font-bold mb-1">{plan.name}</h3>
                <p className="text-text-muted text-sm mb-6">{plan.description}</p>

                <div className="mb-8">
                  <span className={`text-4xl font-extrabold ${plan.featured ? 'text-accent' : 'text-text-primary'}`}>
                    {plan.price}
                  </span>
                </div>

                <ul className="space-y-4 mb-10 flex-1">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <svg className={`w-5 h-5 mt-0.5 flex-shrink-0 ${plan.featured ? 'text-accent' : 'text-accent/60'}`} viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span className={`text-sm ${plan.featured ? 'text-text-primary' : 'text-text-muted'}`}>{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button
                  href="#contact"
                  variant={plan.featured ? 'primary' : 'outline'}
                  className={`w-full ${plan.featured ? '!py-4 !text-base' : ''}`}
                >
                  {plan.featured ? 'Выбрать Про' : 'Обсудить'}
                </Button>
              </div>
            </motion.div>
          ))}
        </div>

        <p className="gsap-reveal text-center mt-10 text-text-muted">
          Предоплата 50% до старта. Результат — за дни, а не месяцы.
        </p>
      </div>
    </section>
  );
}

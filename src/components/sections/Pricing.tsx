import { brand } from '../../config/brand';
import { Card } from '../ui/Card';
import { Button } from '../ui/Button';
import { SectionHeading } from '../ui/SectionHeading';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';

export function Pricing() {
  const ref = useScrollAnimation();

  return (
    <section id="pricing" ref={ref} className="py-24 md:py-32 bg-bg-card/30">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeading
          label="Пакеты"
          title="Прозрачные цены"
          subtitle="Три пакета — выберите подходящий. Или обсудим индивидуальное решение"
        />

        <div className="grid md:grid-cols-3 gap-6">
          {brand.pricing.map((plan) => (
            <Card
              key={plan.name}
              className={`gsap-reveal flex flex-col ${plan.featured ? 'border-accent/60 ring-1 ring-accent/20 relative' : ''}`}
            >
              {plan.featured && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 bg-accent text-white text-xs font-bold rounded-full uppercase tracking-wider">
                  Популярный
                </span>
              )}

              <div className="mb-6">
                <h3 className="text-2xl font-bold mb-1">{plan.name}</h3>
                <p className="text-text-muted text-sm">{plan.description}</p>
              </div>

              <div className="mb-8">
                <span className="text-3xl font-bold text-accent">{plan.price}</span>
              </div>

              <ul className="space-y-3 mb-8 flex-1">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className="text-text-muted text-sm">{feature}</span>
                  </li>
                ))}
              </ul>

              <Button
                href="#contact"
                variant={plan.featured ? 'primary' : 'outline'}
                className="w-full"
              >
                Обсудить
              </Button>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

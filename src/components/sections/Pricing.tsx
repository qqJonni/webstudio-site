import { brand } from '../../config/brand';
import { SectionHeading } from '../ui/SectionHeading';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';

export function Pricing() {
  const ref = useScrollAnimation();

  return (
    <section id="pricing" ref={ref} className="py-24 md:py-40">
      <div className="max-w-[1400px] mx-auto px-6 md:px-10">
        <SectionHeading label="Пакеты" title="Прозрачные цены" />

        <div className="grid md:grid-cols-3 gap-px bg-border rounded-2xl overflow-hidden mt-16">
          {brand.pricing.map((plan) => (
            <div
              key={plan.name}
              className={`gsap-reveal flex flex-col p-8 md:p-10 ${plan.featured ? 'bg-bg-card-hover' : 'bg-bg-card'}`}
            >
              {plan.featured && (
                <span className="text-accent text-xs font-semibold uppercase tracking-widest mb-4">
                  Популярный
                </span>
              )}

              <h3 className="text-2xl font-bold mb-1">{plan.name}</h3>
              <p className="text-text-muted text-sm font-light mb-6">{plan.description}</p>

              <span className={`text-3xl font-extrabold mb-8 ${plan.featured ? 'text-accent' : ''}`}>
                {plan.price}
              </span>

              <ul className="space-y-3 mb-10 flex-1">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <span className="text-accent/60 mt-1">—</span>
                    <span className="text-text-muted text-sm font-light">{feature}</span>
                  </li>
                ))}
              </ul>

              <a
                href="#contact"
                className={`inline-flex justify-center font-semibold px-6 py-4 rounded-lg transition-colors duration-300 text-sm ${
                  plan.featured
                    ? 'bg-accent text-text-dark hover:bg-accent-hover'
                    : 'border border-border text-text-primary hover:border-text-muted'
                }`}
              >
                {plan.featured ? 'Выбрать' : 'Обсудить'}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

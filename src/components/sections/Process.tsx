import { brand } from '../../config/brand';
import { SectionHeading } from '../ui/SectionHeading';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';

export function Process() {
  const ref = useScrollAnimation();

  return (
    <section id="process" ref={ref} className="py-24 md:py-32">
      <div className="max-w-5xl mx-auto px-6">
        <SectionHeading
          label="Процесс"
          title="Как мы работаем"
          subtitle="Четыре шага от первого знакомства до запуска"
        />

        <div className="space-y-0">
          {brand.process.map((item, i) => (
            <div
              key={item.step}
              className="gsap-reveal grid md:grid-cols-[80px_1fr] gap-6 md:gap-8 py-10 border-b border-border last:border-b-0"
            >
              <div className="text-5xl font-bold text-accent/20">{item.step}</div>
              <div>
                <h3 className="text-xl md:text-2xl font-bold mb-3">{item.title}</h3>
                <p className="text-text-muted text-lg leading-relaxed">{item.description}</p>
                {i === 0 && (
                  <span className="inline-block mt-4 px-3 py-1 bg-accent/10 text-accent text-sm font-medium rounded-full">
                    Бесплатно, без обязательств
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

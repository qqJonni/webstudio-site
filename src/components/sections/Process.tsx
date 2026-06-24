import { brand } from '../../config/brand';
import { SectionHeading } from '../ui/SectionHeading';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';

export function Process() {
  const ref = useScrollAnimation();

  return (
    <section id="process" ref={ref} className="py-24 md:py-40">
      <div className="max-w-[1400px] mx-auto px-6 md:px-10">
        <SectionHeading label="Процесс" title="Как мы работаем" />

        <div className="mt-16 space-y-0 border-t border-border">
          {brand.process.map((item, i) => (
            <div
              key={item.step}
              className="gsap-reveal grid md:grid-cols-[100px_1fr_1fr] gap-6 md:gap-12 py-10 border-b border-border items-start"
            >
              <span className="text-accent font-mono text-sm">{item.step}</span>
              <h3 className="text-xl md:text-2xl font-bold">{item.title}</h3>
              <p className="text-text-muted font-light leading-relaxed">
                {item.description}
                {i === 0 && (
                  <span className="text-accent font-medium"> Бесплатно.</span>
                )}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

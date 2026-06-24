import { SectionHeading } from '../ui/SectionHeading';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';

const points = [
  { title: 'Результат на экране', description: 'Показываем демо под ваш бизнес до договора. Вы видите, за что платите.' },
  { title: 'Скорость', description: 'Готовый продукт за дни, а не месяцы. Модульная сборка + современные технологии.' },
  { title: 'Понимание бизнеса', description: 'Мы из реального сектора. Говорим на языке ROI, а не «креатива».' },
  { title: '3D-уровень', description: 'Технологии, которые локальные студии не предлагают. Ваш сайт — на голову выше.' },
];

export function About() {
  const ref = useScrollAnimation();

  return (
    <section ref={ref} className="py-24 md:py-40">
      <div className="max-w-[1400px] mx-auto px-6 md:px-10">
        <SectionHeading label="О студии" title="Почему мы" />

        <div className="mt-16 grid md:grid-cols-2 gap-px bg-border rounded-2xl overflow-hidden">
          {points.map((point) => (
            <div key={point.title} className="gsap-reveal bg-bg p-8 md:p-10">
              <h3 className="text-lg font-bold mb-3">{point.title}</h3>
              <p className="text-text-muted font-light leading-relaxed">{point.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

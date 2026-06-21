import { SectionHeading } from '../ui/SectionHeading';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';

const points = [
  {
    title: 'Результат на экране',
    description: 'Показываем демо под ваш бизнес до договора. Вы видите, за что платите.',
  },
  {
    title: 'Скорость',
    description: 'Готовый продукт за дни, а не месяцы. Модульная сборка + современные технологии.',
  },
  {
    title: 'Понимание бизнеса',
    description: 'Мы из реального сектора. Говорим на языке ROI, а не «креатива».',
  },
  {
    title: '3D-уровень',
    description: 'Технологии, которые локальные студии не предлагают. Ваш сайт — на голову выше конкурентов.',
  },
];

export function About() {
  const ref = useScrollAnimation();

  return (
    <section ref={ref} className="py-24 md:py-32">
      <div className="max-w-5xl mx-auto px-6">
        <SectionHeading
          label="О студии"
          title="Почему мы"
          subtitle="Премиальный результат без лишних обещаний"
        />

        <div className="grid md:grid-cols-2 gap-8">
          {points.map((point) => (
            <div key={point.title} className="gsap-reveal">
              <h3 className="text-lg font-bold mb-2">{point.title}</h3>
              <p className="text-text-muted leading-relaxed">{point.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

import { motion } from 'framer-motion';
import { SectionHeading } from '../ui/SectionHeading';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';

const points = [
  {
    title: 'Результат на экране',
    description: 'Показываем демо под ваш бизнес до договора. Вы видите, за что платите.',
    icon: '◎',
  },
  {
    title: 'Скорость',
    description: 'Готовый продукт за дни, а не месяцы. Модульная сборка + современные технологии.',
    icon: '⚡',
  },
  {
    title: 'Понимание бизнеса',
    description: 'Мы из реального сектора. Говорим на языке ROI, а не «креатива».',
    icon: '◆',
  },
  {
    title: '3D-уровень',
    description: 'Технологии, которые локальные студии не предлагают. Ваш сайт — на голову выше.',
    icon: '△',
  },
];

export function About() {
  const ref = useScrollAnimation();

  return (
    <section ref={ref} className="py-24 md:py-36 relative">
      <div className="max-w-6xl mx-auto px-6">
        <SectionHeading
          label="О студии"
          title="Почему мы"
          subtitle="Премиальный результат без лишних обещаний"
        />

        <div className="grid md:grid-cols-2 gap-6">
          {points.map((point) => (
            <motion.div
              key={point.title}
              className="gsap-reveal group p-8 rounded-2xl bg-bg-card/40 border border-border/30 hover:border-accent/20 transition-all duration-300"
              whileHover={{ y: -2 }}
            >
              <span className="text-accent text-2xl mb-4 inline-block opacity-60 group-hover:opacity-100 transition-opacity">
                {point.icon}
              </span>
              <h3 className="text-lg font-bold mb-2">{point.title}</h3>
              <p className="text-text-muted leading-relaxed">{point.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

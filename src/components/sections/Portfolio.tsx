import { motion } from 'framer-motion';
import { SectionHeading } from '../ui/SectionHeading';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';

const placeholders = [
  { title: 'Проект 2', category: 'Промо-сайт', color: 'from-blue-900/40 to-indigo-900/40' },
  { title: 'Проект 3', category: '3D-презентация', color: 'from-purple-900/40 to-blue-900/40' },
  { title: 'Проект 4', category: 'Промо под объект', color: 'from-cyan-900/40 to-blue-900/40' },
];

export function Portfolio() {
  const ref = useScrollAnimation();

  return (
    <section ref={ref} className="py-24 md:py-32 bg-bg-card/30">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeading
          label="Портфолио"
          title="Другие проекты"
          subtitle="Скоро здесь появятся новые кейсы"
        />

        <div className="grid md:grid-cols-3 gap-6">
          {placeholders.map((p, i) => (
            <motion.div
              key={i}
              className={`gsap-reveal rounded-2xl border border-border bg-gradient-to-br ${p.color} aspect-[4/3] flex flex-col items-center justify-center p-8`}
              whileHover={{ y: -4, borderColor: 'rgba(59,130,246,0.4)' }}
            >
              <span className="text-xs text-accent font-medium uppercase tracking-wider mb-2">
                {p.category}
              </span>
              <span className="text-xl font-bold text-text-muted">{p.title}</span>
              <span className="mt-4 text-sm text-text-muted/60">В разработке</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

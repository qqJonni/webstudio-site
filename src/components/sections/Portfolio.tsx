import { motion } from 'framer-motion';
import { SectionHeading } from '../ui/SectionHeading';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';

const placeholders = [
  { title: 'Проект 2', category: 'Промо-сайт', gradient: 'from-blue-500/20 via-indigo-500/10 to-transparent' },
  { title: 'Проект 3', category: '3D-презентация', gradient: 'from-purple-500/20 via-blue-500/10 to-transparent' },
  { title: 'Проект 4', category: 'Промо под объект', gradient: 'from-cyan-500/20 via-blue-500/10 to-transparent' },
];

export function Portfolio() {
  const ref = useScrollAnimation();

  return (
    <section ref={ref} className="py-24 md:py-36 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-bg-card/20 to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative">
        <SectionHeading
          label="Портфолио"
          title="Другие проекты"
          subtitle="Скоро здесь появятся новые кейсы"
        />

        <div className="grid md:grid-cols-3 gap-6">
          {placeholders.map((p, i) => (
            <motion.div
              key={i}
              className="gsap-reveal rounded-2xl border border-border/30 bg-bg-card/40 aspect-[4/3] flex flex-col items-center justify-center p-8 relative overflow-hidden group cursor-pointer"
              whileHover={{ y: -6, borderColor: 'rgba(59,130,246,0.3)' }}
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${p.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
              <div className="relative text-center">
                <div className="w-12 h-12 rounded-xl border border-border/50 flex items-center justify-center mx-auto mb-4 group-hover:border-accent/30 transition-colors">
                  <span className="text-text-muted/30 text-lg group-hover:text-accent/50 transition-colors">+</span>
                </div>
                <span className="text-xs text-accent/60 font-medium uppercase tracking-wider mb-2 block">
                  {p.category}
                </span>
                <span className="text-lg font-bold text-text-muted/40 group-hover:text-text-muted/60 transition-colors">{p.title}</span>
                <span className="block mt-3 text-sm text-text-muted/30">Скоро</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

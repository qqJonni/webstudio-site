import { motion } from 'framer-motion';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';

const placeholders = [
  { title: 'Проект 02', category: 'Промо-сайт' },
  { title: 'Проект 03', category: '3D-презентация' },
];

export function Portfolio() {
  const ref = useScrollAnimation();

  return (
    <section ref={ref} className="py-24 md:py-40">
      <div className="max-w-[1400px] mx-auto px-6 md:px-10">
        <p className="gsap-reveal text-accent text-sm font-semibold tracking-widest uppercase mb-8">
          Ещё проекты
        </p>

        <div className="grid md:grid-cols-2 gap-6">
          {placeholders.map((p, i) => (
            <motion.div
              key={i}
              className="gsap-reveal rounded-xl bg-bg-card border border-border aspect-[4/3] flex flex-col justify-end p-8 md:p-10 group hover:border-border transition-colors duration-500 cursor-pointer"
              whileHover={{ y: -4 }}
            >
              <span className="text-text-muted/30 text-xs uppercase tracking-wider mb-2">
                {p.category}
              </span>
              <span className="text-3xl md:text-4xl font-extrabold text-text-muted/20 group-hover:text-text-muted/40 transition-colors duration-500">
                {p.title}
              </span>
              <span className="text-text-muted/20 text-sm mt-2">Скоро</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

import { motion } from 'framer-motion';
import { brand } from '../../config/brand';
import { SectionHeading } from '../ui/SectionHeading';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';

export function Process() {
  const ref = useScrollAnimation();

  return (
    <section id="process" ref={ref} className="py-24 md:py-36 relative">
      <div className="max-w-6xl mx-auto px-6">
        <SectionHeading
          label="Процесс"
          title="Как мы работаем"
          subtitle="Четыре шага от первого знакомства до запуска"
        />

        <div className="grid md:grid-cols-4 gap-6">
          {brand.process.map((item, i) => (
            <motion.div
              key={item.step}
              className="gsap-reveal relative group"
              whileHover={{ y: -4 }}
            >
              <div className="rounded-2xl bg-bg-card/60 border border-border/50 p-8 h-full relative overflow-hidden group-hover:border-accent/30 transition-colors duration-300">
                {/* Step number */}
                <div className="text-7xl font-black text-accent/[0.07] absolute -top-2 -right-2 leading-none select-none">
                  {item.step}
                </div>

                {/* Accent dot */}
                <div className="w-3 h-3 rounded-full bg-accent mb-6 relative">
                  <div className="absolute inset-0 rounded-full bg-accent animate-ping opacity-20" />
                </div>

                <h3 className="text-lg font-bold mb-3 relative">{item.title}</h3>
                <p className="text-text-muted text-sm leading-relaxed relative">{item.description}</p>

                {i === 0 && (
                  <span className="inline-block mt-4 px-3 py-1 bg-accent/10 text-accent text-xs font-semibold rounded-full">
                    Бесплатно
                  </span>
                )}
              </div>

              {/* Connector line */}
              {i < 3 && (
                <div className="hidden md:block absolute top-1/2 -right-3 w-6 h-px bg-gradient-to-r from-border to-transparent z-10" />
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

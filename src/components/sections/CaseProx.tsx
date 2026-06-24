import { motion } from 'framer-motion';
import { brand } from '../../config/brand';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';

export function CaseProx() {
  const ref = useScrollAnimation();
  const c = brand.caseProx;

  return (
    <section id="cases" ref={ref} className="py-24 md:py-40">
      <div className="max-w-[1400px] mx-auto px-6 md:px-10">
        <p className="gsap-reveal text-accent text-sm font-semibold tracking-widest uppercase mb-8">
          Кейс
        </p>

        <div className="gsap-reveal">
          <h2 className="text-[clamp(3rem,10vw,8rem)] font-extrabold leading-[0.9] tracking-tight uppercase">
            {c.title}
          </h2>
        </div>

        <div className="gsap-reveal grid md:grid-cols-[1fr_1fr] gap-16 mt-16">
          <div>
            <div className="flex items-center gap-3 mb-6">
              <span className="text-text-muted text-sm">{c.subtitle}</span>
              <span className="text-text-muted/30">·</span>
              <span className="text-text-muted text-sm">{c.location}</span>
            </div>

            <p className="text-text-muted text-lg leading-relaxed font-light mb-10">
              {c.description}
            </p>

            <ul className="space-y-4">
              {c.results.map((result, i) => (
                <li key={i} className="flex items-start gap-4">
                  <span className="text-accent text-sm font-mono mt-1">0{i + 1}</span>
                  <span className="text-text-primary text-lg font-light">{result}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-4">
            {['Главная страница', 'Мобильная версия', 'Страница проекта'].map((label, i) => (
              <motion.div
                key={i}
                className={`rounded-xl overflow-hidden bg-bg-card border border-border ${i === 0 ? 'aspect-[16/10]' : 'aspect-video'} flex items-center justify-center`}
                whileHover={{ scale: 1.01 }}
                transition={{ duration: 0.4 }}
              >
                <div className="text-center">
                  <span className="text-text-muted/30 text-sm">{label}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

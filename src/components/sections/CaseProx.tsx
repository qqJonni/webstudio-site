import { motion } from 'framer-motion';
import { brand } from '../../config/brand';
import { Button } from '../ui/Button';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';

export function CaseProx() {
  const ref = useScrollAnimation();
  const c = brand.caseProx;

  return (
    <section id="cases" ref={ref} className="py-24 md:py-36 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[600px] bg-accent/5 rounded-full blur-[150px]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative">
        <div className="text-center mb-16">
          <span className="gsap-reveal inline-flex items-center gap-2 px-4 py-2 rounded-full border border-accent/30 bg-accent/5 text-accent text-sm font-medium mb-6">
            <span className="w-1.5 h-1.5 bg-accent rounded-full" />
            Главный кейс
          </span>
          <h2 className="gsap-reveal text-4xl md:text-6xl font-extrabold tracking-tight">
            {c.title}
          </h2>
          <p className="gsap-reveal mt-4 text-text-muted text-xl">{c.subtitle} · {c.location}</p>
        </div>

        <div className="gsap-reveal grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div>
            <div className="flex items-center gap-3 mb-8">
              <span className="px-4 py-1.5 bg-accent/10 text-accent text-sm font-semibold rounded-full">
                Строительство
              </span>
              <span className="px-4 py-1.5 bg-bg-card text-text-muted text-sm font-medium rounded-full border border-border">
                {c.location}
              </span>
            </div>

            <p className="text-text-muted text-lg leading-relaxed mb-10">
              {c.description}
            </p>

            <div className="space-y-5 mb-10">
              {c.results.map((result, i) => (
                <motion.div
                  key={i}
                  className="flex items-start gap-4 p-4 rounded-xl bg-bg-card/50 border border-border/50"
                  whileHover={{ x: 4, borderColor: 'rgba(59,130,246,0.3)' }}
                >
                  <div className="w-8 h-8 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg className="w-4 h-4 text-accent" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-text-primary text-lg">{result}</span>
                </motion.div>
              ))}
            </div>

            {c.liveUrl !== '#' && (
              <Button href={c.liveUrl} variant="outline">
                Смотреть живой сайт →
              </Button>
            )}
          </div>

          <div className="space-y-4">
            {c.images.map((img, i) => (
              <motion.div
                key={i}
                className={`rounded-2xl overflow-hidden border border-border/50 bg-bg-card ${i === 0 ? 'aspect-[16/10] glow' : 'aspect-video'} flex items-center justify-center relative group`}
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <div className="absolute inset-0 bg-gradient-to-t from-bg/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity z-10" />
                <img
                  src={img}
                  alt={`${c.title} — скриншот ${i + 1}`}
                  className="w-full h-full object-cover"
                  loading="lazy"
                  onError={(e) => {
                    const target = e.currentTarget;
                    target.style.display = 'none';
                    const placeholder = document.createElement('div');
                    placeholder.className = 'w-full h-full flex items-center justify-center text-text-muted/40 text-sm absolute inset-0';
                    placeholder.innerHTML = `<div class="text-center"><div class="text-4xl mb-2 opacity-20">📷</div><div>Скриншот ${i + 1}</div></div>`;
                    target.parentElement?.appendChild(placeholder);
                  }}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

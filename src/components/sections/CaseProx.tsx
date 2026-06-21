import { motion } from 'framer-motion';
import { brand } from '../../config/brand';
import { Button } from '../ui/Button';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';

export function CaseProx() {
  const ref = useScrollAnimation();
  const c = brand.caseProx;

  return (
    <section id="cases" ref={ref} className="py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6">
        <p className="gsap-reveal text-accent text-sm font-semibold tracking-widest uppercase mb-4 text-center">
          Главный кейс
        </p>
        <h2 className="gsap-reveal text-3xl md:text-5xl font-bold tracking-tight text-center mb-16">
          {c.title} — {c.subtitle}
        </h2>

        <div className="gsap-reveal grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="flex items-center gap-3 mb-6">
              <span className="px-3 py-1 bg-accent/10 text-accent text-sm font-medium rounded-full">
                {c.location}
              </span>
              <span className="px-3 py-1 bg-bg-card text-text-muted text-sm font-medium rounded-full border border-border">
                Строительство
              </span>
            </div>

            <p className="text-text-muted text-lg leading-relaxed mb-8">
              {c.description}
            </p>

            <ul className="space-y-4 mb-8">
              {c.results.map((result, i) => (
                <li key={i} className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-text-primary">{result}</span>
                </li>
              ))}
            </ul>

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
                className="rounded-2xl overflow-hidden border border-border bg-bg-card aspect-video flex items-center justify-center"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <img
                  src={img}
                  alt={`${c.title} — скриншот ${i + 1}`}
                  className="w-full h-full object-cover"
                  loading="lazy"
                  onError={(e) => {
                    const target = e.currentTarget;
                    target.style.display = 'none';
                    const placeholder = document.createElement('div');
                    placeholder.className = 'w-full h-full flex items-center justify-center text-text-muted text-sm';
                    placeholder.textContent = `Скриншот ${i + 1}`;
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

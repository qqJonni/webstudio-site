import { motion } from 'framer-motion';
import { brand } from '../../config/brand';
import { Button } from '../ui/Button';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';

const placeholders = [
  { label: 'Главная страница', sublabel: 'Desktop · 3D-визуализация объектов', icon: 'desktop' },
  { label: 'Мобильная версия', sublabel: 'Адаптивный дизайн · 375px', icon: 'mobile' },
  { label: 'Страница проекта', sublabel: 'Детальная карточка объекта', icon: 'detail' },
];

function CasePlaceholder({ label, sublabel, icon, featured }: { label: string; sublabel: string; icon: string; featured: boolean }) {
  return (
    <div className={`w-full h-full flex flex-col items-center justify-center p-6 bg-gradient-to-br from-accent/[0.06] via-bg-card to-bg-card relative overflow-hidden`}>
      {/* Grid pattern */}
      <div className="absolute inset-0 opacity-[0.04]" style={{
        backgroundImage: 'linear-gradient(rgba(59,130,246,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(59,130,246,0.5) 1px, transparent 1px)',
        backgroundSize: '40px 40px',
      }} />

      {/* Icon */}
      <div className={`mb-4 ${featured ? 'w-16 h-16' : 'w-12 h-12'} rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center`}>
        {icon === 'desktop' && (
          <svg className="w-6 h-6 text-accent/60" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <rect x="2" y="3" width="20" height="14" rx="2" />
            <path d="M8 21h8M12 17v4" />
          </svg>
        )}
        {icon === 'mobile' && (
          <svg className="w-6 h-6 text-accent/60" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <rect x="5" y="2" width="14" height="20" rx="2" />
            <path d="M12 18h.01" />
          </svg>
        )}
        {icon === 'detail' && (
          <svg className="w-6 h-6 text-accent/60" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <rect x="3" y="3" width="18" height="18" rx="2" />
            <path d="M3 9h18M9 21V9" />
          </svg>
        )}
      </div>

      <span className="text-text-primary/70 text-sm font-medium mb-1">{label}</span>
      <span className="text-text-muted/40 text-xs">{sublabel}</span>

      {/* Corner accent */}
      <div className="absolute top-3 right-3 w-2 h-2 rounded-full bg-accent/30" />
      <div className="absolute bottom-3 left-3 text-[10px] text-text-muted/20 font-mono">ПРОКС</div>
    </div>
  );
}

export function CaseProx() {
  const ref = useScrollAnimation();
  const c = brand.caseProx;

  return (
    <section id="cases" ref={ref} className="py-24 md:py-36 relative overflow-hidden">
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
            {placeholders.map((p, i) => (
              <motion.div
                key={i}
                className={`rounded-2xl overflow-hidden border border-border/50 ${i === 0 ? 'aspect-[16/10] glow border-accent/20' : 'aspect-video'} relative group`}
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <div className="absolute inset-0 bg-gradient-to-t from-bg/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity z-10" />
                <CasePlaceholder label={p.label} sublabel={p.sublabel} icon={p.icon} featured={i === 0} />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

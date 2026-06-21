import { useScrollAnimation } from '../../hooks/useScrollAnimation';

export function Problem() {
  const ref = useScrollAnimation();

  return (
    <section ref={ref} className="py-24 md:py-36 relative overflow-hidden">
      {/* Background accents */}
      <div className="absolute top-0 left-0 w-1/2 h-full bg-gradient-to-r from-red-950/10 to-transparent pointer-events-none" />
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-blue-950/10 to-transparent pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-0">
          {/* Problem side */}
          <div className="gsap-reveal relative p-8 md:p-12 rounded-2xl md:rounded-r-none border border-border/50 bg-bg-card/30">
            <div className="absolute top-6 right-6 w-16 h-16 rounded-full bg-red-500/5 blur-xl" />
            <span className="inline-block px-3 py-1 rounded-full bg-red-500/10 text-red-400 text-xs font-bold uppercase tracking-widest mb-6">
              Проблема
            </span>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight mb-6 leading-tight">
              Ваш сайт теряет клиентов
              <span className="text-red-400"> прямо сейчас</span>
            </h2>
            <p className="text-text-muted text-lg leading-relaxed mb-6">
              Шаблонный сайт для компании, продающей квартиры за десятки миллионов — как визитка на салфетке.
            </p>
            <ul className="space-y-3">
              {['Не впечатляет — клиент уходит', 'Плохо на мобильном — минус 70% трафика', 'Нет 3D — вы невидимы среди конкурентов'].map((item) => (
                <li key={item} className="flex items-start gap-3 text-text-muted">
                  <svg className="w-5 h-5 text-red-400/60 mt-0.5 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Solution side */}
          <div className="gsap-reveal relative p-8 md:p-12 rounded-2xl md:rounded-l-none border border-accent/20 bg-accent/[0.03] gradient-border">
            <div className="absolute top-6 right-6 w-16 h-16 rounded-full bg-accent/10 blur-xl" />
            <span className="inline-block px-3 py-1 rounded-full bg-accent/10 text-accent text-xs font-bold uppercase tracking-widest mb-6">
              Решение
            </span>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight mb-6 leading-tight">
              Сайт, который
              <span className="text-accent"> продаёт за вас</span>
            </h2>
            <p className="text-text-muted text-lg leading-relaxed mb-6">
              Не «сайт», а инструмент продаж: 3D, кинематографичная анимация, презентация для переговоров.
            </p>
            <ul className="space-y-3">
              {['3D-визуализация — «вау» с первого экрана', 'Мобильный приоритет — ни один лид не потерян', 'Презентация для отдела продаж в комплекте'].map((item) => (
                <li key={item} className="flex items-start gap-3 text-text-primary">
                  <svg className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom stat line */}
        <div className="gsap-reveal mt-12 text-center">
          <p className="text-text-muted text-lg">
            Одна потерянная сделка стоит дороже, чем весь сайт.
            <span className="text-accent font-semibold"> Окупаемость — с первого клиента.</span>
          </p>
        </div>
      </div>
    </section>
  );
}

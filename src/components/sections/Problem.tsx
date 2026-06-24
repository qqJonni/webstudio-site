import { useScrollAnimation } from '../../hooks/useScrollAnimation';

export function Problem() {
  const ref = useScrollAnimation();

  return (
    <section ref={ref} className="py-24 md:py-40">
      <div className="max-w-[1400px] mx-auto px-6 md:px-10">
        <div className="grid md:grid-cols-2 gap-16 md:gap-24">
          <div className="gsap-reveal">
            <p className="text-accent text-sm font-semibold tracking-widest uppercase mb-6">
              Проблема
            </p>
            <h2 className="text-3xl md:text-5xl font-extrabold leading-tight tracking-tight">
              Ваш сайт теряет клиентов прямо сейчас
            </h2>
          </div>

          <div className="gsap-reveal flex flex-col justify-end">
            <p className="text-text-muted text-lg leading-relaxed font-light">
              Шаблонный сайт для компании, продающей квартиры за десятки миллионов —
              как визитка на салфетке. Клиент заходит, не впечатляется, уходит к конкуренту.
              Одна потерянная сделка стоит дороже, чем весь сайт.
            </p>
            <p className="mt-6 text-text-primary text-lg leading-relaxed">
              Мы делаем не «сайт», а инструмент продаж: 3D, кинематографичная анимация,
              презентация для переговоров. С первого экрана клиент понимает —
              здесь профессионалы.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

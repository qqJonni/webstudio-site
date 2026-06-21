import { useScrollAnimation } from '../../hooks/useScrollAnimation';

export function Problem() {
  const ref = useScrollAnimation();

  return (
    <section ref={ref} className="py-24 md:py-32">
      <div className="max-w-5xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-center">
          <div>
            <p className="gsap-reveal text-accent text-sm font-semibold tracking-widest uppercase mb-4">
              Проблема
            </p>
            <h2 className="gsap-reveal text-3xl md:text-4xl font-bold tracking-tight">
              Ваш сайт теряет клиентов прямо сейчас
            </h2>
            <p className="gsap-reveal mt-6 text-text-muted text-lg leading-relaxed">
              Шаблонный сайт для компании, продающей квартиры за десятки миллионов — как визитка на салфетке.
              Клиент заходит, не впечатляется и уходит к тому, кто показал объект красиво.
              Одна потерянная сделка стоит дороже, чем весь сайт.
            </p>
          </div>

          <div>
            <p className="gsap-reveal text-accent text-sm font-semibold tracking-widest uppercase mb-4">
              Решение
            </p>
            <h2 className="gsap-reveal text-3xl md:text-4xl font-bold tracking-tight">
              Сайт, который продаёт за вас
            </h2>
            <p className="gsap-reveal mt-6 text-text-muted text-lg leading-relaxed">
              Мы делаем не «сайт», а инструмент продаж: 3D-визуализация объектов,
              кинематографичная анимация, презентация для переговоров.
              Клиент с первого экрана понимает — здесь работают профессионалы,
              которым можно доверить десятки миллионов.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

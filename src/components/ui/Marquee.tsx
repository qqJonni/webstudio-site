const words = [
  '3D-визуализация',
  'Промо-сайты',
  'Презентации',
  'Архитектура',
  'Девелопмент',
  'Конверсия',
  'WebGL',
  'Анимация',
  'Продажи',
  'Премиум',
];

export function Marquee() {
  const items = [...words, ...words];

  return (
    <div className="py-8 overflow-hidden border-y border-border/50 bg-bg-card/20">
      <div className="marquee-track flex gap-8 whitespace-nowrap w-max">
        {items.map((word, i) => (
          <span key={i} className="flex items-center gap-8">
            <span className="text-2xl md:text-4xl font-bold text-text-muted/15 uppercase tracking-wider">
              {word}
            </span>
            <span className="text-accent/30 text-lg">◆</span>
          </span>
        ))}
      </div>
    </div>
  );
}

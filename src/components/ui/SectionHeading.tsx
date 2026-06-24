interface SectionHeadingProps {
  label?: string;
  title: string;
  subtitle?: string;
}

export function SectionHeading({ label, title, subtitle }: SectionHeadingProps) {
  return (
    <div className="mb-0">
      {label && (
        <span className="gsap-reveal text-accent text-sm font-semibold tracking-widest uppercase block mb-6">
          {label}
        </span>
      )}
      <h2 className="gsap-reveal text-3xl md:text-5xl font-extrabold tracking-tight">{title}</h2>
      {subtitle && (
        <p className="gsap-reveal mt-4 text-text-muted text-lg font-light">{subtitle}</p>
      )}
    </div>
  );
}

interface SectionHeadingProps {
  label?: string;
  title: string;
  subtitle?: string;
  className?: string;
}

export function SectionHeading({ label, title, subtitle, className = '' }: SectionHeadingProps) {
  return (
    <div className={`text-center mb-16 ${className}`}>
      {label && (
        <span className="gsap-reveal inline-block text-accent text-sm font-semibold tracking-widest uppercase mb-4">
          {label}
        </span>
      )}
      <h2 className="gsap-reveal text-3xl md:text-5xl font-bold tracking-tight">{title}</h2>
      {subtitle && (
        <p className="gsap-reveal mt-4 text-text-muted text-lg max-w-2xl mx-auto">{subtitle}</p>
      )}
    </div>
  );
}

import { brand } from '../../config/brand';

export function Footer() {
  return (
    <footer className="py-12 border-t border-border">
      <div className="max-w-[1400px] mx-auto px-6 md:px-10">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
          <div>
            <span className="text-lg font-bold">{brand.name}</span>
          </div>

          <div className="flex flex-wrap gap-8 text-sm text-text-muted">
            {brand.nav.map((item) => (
              <a key={item.href} href={item.href} className="hover:text-text-primary transition-colors">
                {item.label}
              </a>
            ))}
          </div>

          <div className="text-sm text-text-muted">
            <p>© {brand.legal.year} {brand.name}</p>
            <p>{brand.legal.entity} · ИНН {brand.legal.inn}</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

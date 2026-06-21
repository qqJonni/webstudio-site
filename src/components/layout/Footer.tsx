import { brand } from '../../config/brand';

export function Footer() {
  return (
    <footer className="border-t border-border bg-bg">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">{brand.name}</h3>
            <p className="text-text-muted text-sm leading-relaxed">
              {brand.tagline}
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-sm uppercase tracking-wider text-text-muted">
              Навигация
            </h4>
            <ul className="space-y-2">
              {brand.nav.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="text-text-muted hover:text-text-primary transition-colors text-sm"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-sm uppercase tracking-wider text-text-muted">
              Контакты
            </h4>
            <ul className="space-y-2 text-sm text-text-muted">
              <li>{brand.contacts.phone}</li>
              <li>
                <a href={`mailto:${brand.contacts.email}`} className="hover:text-text-primary transition-colors">
                  {brand.contacts.email}
                </a>
              </li>
              <li>
                <a href={brand.contacts.telegramLink} className="hover:text-text-primary transition-colors">
                  Telegram: {brand.contacts.telegram}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-text-muted">
          <p>© {brand.legal.year} {brand.name}. {brand.legal.entity}</p>
          <p>ИНН {brand.legal.inn}</p>
        </div>
      </div>
    </footer>
  );
}

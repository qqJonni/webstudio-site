import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { brand } from '../../config/brand';

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <nav className="max-w-[1400px] mx-auto px-6 md:px-10 h-20 flex items-center justify-between">
        <a href="#" className="text-lg font-bold tracking-tight text-text-primary">
          {brand.name}
        </a>

        <div className="hidden md:flex items-center gap-10">
          {brand.nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm text-text-muted hover:text-text-primary transition-colors duration-300"
            >
              {item.label}
            </a>
          ))}
        </div>

        <a
          href="#contact"
          className="hidden md:inline-flex text-sm font-semibold text-text-dark bg-accent hover:bg-accent-hover px-6 py-3 rounded-lg transition-colors duration-300"
        >
          Обсудить проект
        </a>

        <button
          type="button"
          className="md:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Меню"
        >
          <span className={`w-6 h-0.5 bg-text-primary transition-transform duration-300 ${isOpen ? 'rotate-45 translate-y-2' : ''}`} />
          <span className={`w-6 h-0.5 bg-text-primary transition-opacity duration-300 ${isOpen ? 'opacity-0' : ''}`} />
          <span className={`w-6 h-0.5 bg-text-primary transition-transform duration-300 ${isOpen ? '-rotate-45 -translate-y-2' : ''}`} />
        </button>
      </nav>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-bg border-b border-border overflow-hidden"
          >
            <div className="px-6 py-8 flex flex-col gap-6">
              {brand.nav.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="text-2xl font-light text-text-muted hover:text-text-primary transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </a>
              ))}
              <a
                href="#contact"
                className="inline-flex justify-center text-base font-semibold text-text-dark bg-accent px-6 py-4 rounded-lg mt-4"
                onClick={() => setIsOpen(false)}
              >
                Обсудить проект
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

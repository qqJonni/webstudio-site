import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { brand } from '../../config/brand';
import { Button } from '../ui/Button';

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl bg-bg/80 border-b border-border/50">
      <nav className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <a href="#" className="text-xl font-bold tracking-tight">
          {brand.name}
        </a>

        <div className="hidden md:flex items-center gap-8">
          {brand.nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm text-text-muted hover:text-text-primary transition-colors"
            >
              {item.label}
            </a>
          ))}
          <Button href="#contact" className="!py-2.5 !px-6 !text-sm">
            Обсудить проект
          </Button>
        </div>

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
            className="md:hidden bg-bg/95 backdrop-blur-xl border-b border-border overflow-hidden"
          >
            <div className="px-6 py-6 flex flex-col gap-4">
              {brand.nav.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="text-lg text-text-muted hover:text-text-primary transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </a>
              ))}
              <Button href="#contact" className="mt-2">
                Обсудить проект
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

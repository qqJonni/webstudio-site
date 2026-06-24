import { Suspense, lazy, useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { brand } from '../../config/brand';
import { WebGLFallback } from '../three/WebGLFallback';

const HeroScene = lazy(() =>
  import('../three/HeroScene').then((m) => ({ default: m.HeroScene }))
);

function hasWebGL(): boolean {
  try {
    const canvas = document.createElement('canvas');
    return !!(canvas.getContext('webgl2') || canvas.getContext('webgl'));
  } catch {
    return false;
  }
}

function useIsMobile() {
  const [mobile, setMobile] = useState(false);
  useEffect(() => {
    const check = () => setMobile(window.innerWidth < 768);
    check();
    window.addEventListener('resize', check);
    return () => window.removeEventListener('resize', check);
  }, []);
  return mobile;
}

export function Hero() {
  const webgl = hasWebGL();
  const isMobile = useIsMobile();

  return (
    <section className="relative min-h-screen flex items-end pb-20 md:pb-32 overflow-hidden">
      {webgl ? (
        <Suspense fallback={<WebGLFallback />}>
          <HeroScene mobile={isMobile} />
        </Suspense>
      ) : (
        <WebGLFallback />
      )}

      <div className="relative z-10 max-w-[1400px] mx-auto px-6 md:px-10 w-full">
        <div className="max-w-4xl">
          <motion.h1
            className="text-[clamp(2.5rem,8vw,7rem)] font-extrabold leading-[0.95] tracking-tight"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.25, 0.1, 0, 1] }}
          >
            {brand.tagline}
          </motion.h1>

          <motion.p
            className="mt-8 text-text-muted text-lg md:text-xl max-w-xl leading-relaxed font-light"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            {brand.description}
          </motion.p>

          <motion.div
            className="mt-10 flex flex-col sm:flex-row gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <a
              href="#contact"
              className="inline-flex items-center justify-center text-text-dark bg-accent hover:bg-accent-hover font-semibold px-8 py-4 rounded-lg transition-colors duration-300"
            >
              Обсудить проект
            </a>
            <a
              href="#cases"
              className="inline-flex items-center justify-center border border-border text-text-primary hover:border-text-muted font-medium px-8 py-4 rounded-lg transition-colors duration-300"
            >
              Смотреть кейсы
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

import { Suspense, lazy, useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { brand } from '../../config/brand';
import { Button } from '../ui/Button';
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
  const show3D = webgl && !isMobile;

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background gradient glow */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-accent/8 rounded-full blur-[150px]" />
        <div className="absolute top-1/3 left-1/3 w-[400px] h-[400px] bg-blue-600/5 rounded-full blur-[100px]" />
        <div className="absolute bottom-1/4 right-1/4 w-[300px] h-[300px] bg-indigo-500/5 rounded-full blur-[80px]" />
      </div>

      {show3D ? (
        <Suspense fallback={<WebGLFallback />}>
          <HeroScene />
        </Suspense>
      ) : (
        <WebGLFallback />
      )}

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-accent/30 bg-accent/5 text-accent text-sm font-medium backdrop-blur-sm">
            <span className="w-2 h-2 bg-accent rounded-full animate-pulse" />
            Демо до договора — бесплатно
          </span>
        </motion.div>

        <motion.h1
          className="text-5xl md:text-7xl lg:text-8xl font-extrabold leading-[1.05] tracking-tight"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <span className="bg-gradient-to-b from-white via-white to-white/60 bg-clip-text text-transparent">
            {brand.tagline}
          </span>
        </motion.h1>

        <motion.p
          className="mt-8 text-text-muted text-lg md:text-xl max-w-2xl mx-auto leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          {brand.description}
        </motion.p>

        <motion.div
          className="mt-12 flex flex-col sm:flex-row gap-4 justify-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
        >
          <Button href="#contact" className="!text-lg !px-10 !py-5">
            Обсудить проект
          </Button>
          <Button href="#cases" variant="outline" className="!text-lg !px-10 !py-5">
            Смотреть кейсы
          </Button>
        </motion.div>

        {/* Trust line */}
        <motion.p
          className="mt-8 text-text-muted/50 text-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1 }}
        >
          Результат за дни, а не месяцы · 3D-уровень · Понимаем бизнес
        </motion.p>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10">
        <motion.div
          className="w-6 h-10 border-2 border-text-muted/20 rounded-full flex justify-center pt-2"
          animate={{ opacity: [0.2, 0.6, 0.2] }}
          transition={{ duration: 2.5, repeat: Infinity }}
        >
          <motion.div
            className="w-1.5 h-1.5 bg-accent rounded-full"
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2.5, repeat: Infinity }}
          />
        </motion.div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-bg to-transparent z-[5]" />
    </section>
  );
}

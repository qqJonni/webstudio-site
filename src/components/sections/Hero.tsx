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
      {show3D ? (
        <Suspense fallback={<WebGLFallback />}>
          <HeroScene />
        </Suspense>
      ) : (
        <WebGLFallback />
      )}

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <motion.p
          className="text-accent text-sm font-semibold tracking-widest uppercase mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {brand.name}
        </motion.p>

        <motion.h1
          className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight tracking-tight"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {brand.tagline}
        </motion.h1>

        <motion.p
          className="mt-6 text-text-muted text-lg md:text-xl max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          {brand.description}
        </motion.p>

        <motion.div
          className="mt-10 flex flex-col sm:flex-row gap-4 justify-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
        >
          <Button href="#contact">Обсудить проект</Button>
          <Button href="#cases" variant="outline">Смотреть кейсы</Button>
        </motion.div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10">
        <motion.div
          className="w-6 h-10 border-2 border-text-muted/30 rounded-full flex justify-center pt-2"
          animate={{ opacity: [0.3, 0.8, 0.3] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <motion.div
            className="w-1.5 h-1.5 bg-text-muted rounded-full"
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </motion.div>
      </div>
    </section>
  );
}

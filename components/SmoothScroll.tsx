'use client';

import { useEffect } from 'react';

export default function SmoothScroll({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    let lenisInstance: any = null;
    let rafId: number;

    const initLenis = async () => {
      try {
        const Lenis = (await import('lenis')).default;
        lenisInstance = new Lenis({
          duration: 1.2,
          easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
          orientation: 'vertical',
          gestureOrientation: 'vertical',
          smoothWheel: true,
          wheelMultiplier: 1,
          touchMultiplier: 2,
        });

        function raf(time: number) {
          lenisInstance?.raf(time);
          rafId = requestAnimationFrame(raf);
        }

        rafId = requestAnimationFrame(raf);
      } catch (e) {
        console.warn('Lenis could not be initialized, falling back to standard scroll', e);
      }
    };

    initLenis();

    return () => {
      if (rafId) cancelAnimationFrame(rafId);
      if (lenisInstance) {
        lenisInstance.destroy();
      }
    };
  }, []);

  return <>{children}</>;
}
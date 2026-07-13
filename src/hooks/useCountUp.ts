import { useEffect, useRef, useState } from 'react';

export function useCountUp(target: number, options?: { duration?: number; decimals?: number; startOnView?: boolean }) {
  const duration = options?.duration ?? 1500;
  const decimals = options?.decimals ?? 0;
  const startOnView = options?.startOnView ?? true;
  const ref = useRef<HTMLDivElement | null>(null);
  const [value, setValue] = useState(0);
  const startedRef = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const start = () => {
      if (startedRef.current) return;
      startedRef.current = true;
      const startTime = performance.now();
      const step = (now: number) => {
        const t = Math.min(1, (now - startTime) / duration);
        // easeOutCubic
        const eased = 1 - Math.pow(1 - t, 3);
        setValue(target * eased);
        if (t < 1) requestAnimationFrame(step);
        else setValue(target);
      };
      requestAnimationFrame(step);
    };

    if (!startOnView) {
      start();
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            start();
            observer.disconnect();
          }
        });
      },
      { threshold: 0.3 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [target, duration, startOnView]);

  const formatted = value.toLocaleString('fr-FR', {
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals,
  });

  return { ref, value, formatted };
}

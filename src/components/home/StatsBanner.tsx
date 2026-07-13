import React, { useEffect, useRef, useState } from 'react';
import { ASSETS } from '@/lib/intendant-assets';

const kpis = [
  { target: 90, decimals: 0, suffix: '%', label: "Taux d'occupation par bien" },
  { target: 4.82, decimals: 2, suffix: '/5', label: 'Note moyenne voyageurs' },
  { target: 2, decimals: 0, suffix: ' ans', label: "Années d'expérience" },
];

const formatValue = (v: number, decimals: number, suffix: string) =>
  `${v.toFixed(decimals).replace('.', ',')}${suffix}`;

const StatsBanner = () => {
  const ref = useRef<HTMLDivElement>(null);
  const started = useRef(false);
  const [values, setValues] = useState(kpis.map(() => 0));

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          const duration = 1000;
          const start = performance.now();
          const tick = (now: number) => {
            const p = Math.min((now - start) / duration, 1);
            const eased = p * p * (3 - 2 * p);
            setValues(kpis.map((k) => k.target * eased));
            if (p < 1) requestAnimationFrame(tick);
            else setValues(kpis.map((k) => k.target));
          };
          requestAnimationFrame(tick);
        }
      },
      { threshold: 0.3 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={ref} className="relative overflow-hidden py-20 md:py-24 bg-elegant-black text-white">
      <img src={ASSETS.pontNeufHd} alt="" aria-hidden="true" className="absolute inset-0 w-full h-full object-cover grayscale" loading="lazy" decoding="async" />
      <div className="absolute inset-0 bg-black/70" aria-hidden="true" />
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-10 md:gap-8">
          {kpis.map((k, i) => (
            <div key={i} className="text-center">
              <div className="font-playfair text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-3">
                {formatValue(values[i], k.decimals, k.suffix)}
              </div>
              <div className="text-[10px] md:text-xs tracking-[0.25em] text-gray-300 uppercase">
                {k.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsBanner;

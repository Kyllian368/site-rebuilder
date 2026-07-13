import React from 'react';
import { ASSETS } from '@/lib/intendant-assets';
import { useCountUp, useInView } from '@/hooks/useCountUp';

const StatsBanner = () => {
  const { ref, inView } = useInView<HTMLDivElement>(0.3);

  const occupancy = useCountUp(90, inView, { decimals: 0 });
  const rating = useCountUp(4.82, inView, { decimals: 2 });
  const years = useCountUp(2, inView, { decimals: 0 });

  const kpis = [
    { value: `${occupancy.formatted}%`, label: "Taux d'occupation par bien" },
    { value: `${rating.formatted}/5`, label: 'Note moyenne voyageurs' },
    { value: `${years.formatted} ans`, label: "Années d'expérience" },
  ];

  return (
    <section ref={ref} className="relative overflow-hidden py-20 md:py-24 bg-elegant-black text-white">
      <img
        src={ASSETS.pontNeufHd}
        alt=""
        aria-hidden="true"
        className="absolute inset-0 w-full h-full object-cover grayscale"
        loading="lazy"
        decoding="async"
      />
      <div className="absolute inset-0 bg-black/70" aria-hidden="true" />
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-10 md:gap-8">
          {kpis.map((k, i) => (
            <div key={i} className="text-center">
              <div className="font-playfair text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-3 tabular-nums">
                {k.value}
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

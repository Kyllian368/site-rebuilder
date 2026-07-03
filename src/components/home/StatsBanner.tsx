import React from 'react';

const kpis = [
  { value: '[À COMPLÉTER]', label: 'Biens gérés' },
  { value: '[À COMPLÉTER]', label: "Taux d'occupation moyen" },
  { value: '[À COMPLÉTER]', label: 'Note moyenne voyageurs' },
  { value: '[À COMPLÉTER]', label: "Années d'expérience" },
];

const StatsBanner = () => {
  return (
    <section className="bg-elegant-black text-white py-16">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 md:gap-8">
          {kpis.map((k, i) => (
            <div key={i} className="text-center">
              <div className="font-playfair text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-3">
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

import React, { useEffect } from 'react';

const steps = [
  {
    n: '01',
    title: 'Vous nous confiez votre bien',
    text: "Un échange, une visite, et on définit ensemble la stratégie.",
  },
  {
    n: '02',
    title: 'On gère tout',
    text: "Mise en ligne, voyageurs, ménage, entretien : le quotidien, c'est nous.",
  },
  {
    n: '03',
    title: 'Vous suivez à distance',
    text: "Vous gardez le contrôle : revenus et logement suivis en toute transparence.",
  },
];

const HowItWorksHomeSection = () => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add('visible');
        });
      },
      { threshold: 0.1 }
    );
    document.querySelectorAll('.animate-on-scroll').forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 max-w-3xl mx-auto animate-on-scroll">
          <p className="text-xs tracking-[0.25em] text-[#941101] font-semibold mb-4">
            NOTRE MÉTHODE
          </p>
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-elegant-black mb-6">
            Comment ça marche
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-10 md:gap-8 mb-12">
          {steps.map((s, i) => (
            <div key={i} className="animate-on-scroll">
              <div className="font-playfair text-6xl md:text-7xl font-bold text-[#941101] mb-4 leading-none">
                {s.n}
              </div>
              <div className="h-px w-12 bg-gray-300 mb-5" />
              <h3 className="font-playfair text-xl font-semibold text-elegant-black mb-3">
                {s.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">{s.text}</p>
            </div>
          ))}
        </div>

        <p className="text-center font-playfair italic text-lg md:text-xl text-gray-700">
          Vous gardez la main, sans la charge.
        </p>
      </div>
    </section>
  );
};

export default HowItWorksHomeSection;

import React, { useEffect } from 'react';

const items = [
  {
    title: 'Gestion complète',
    text: "De A à Z : annonces, réservations, communication voyageurs, ménage et linge. Vous ne touchez à rien.",
  },
  {
    title: 'Ancrage local',
    text: 'Une équipe basée à Toulouse, réactive, qui connaît chaque quartier et le marché.',
  },
  {
    title: 'Disponibilité 7j/7',
    text: 'Un interlocuteur joignable pour vous et pour vos voyageurs, tous les jours.',
  },
  {
    title: 'Suivi du logement',
    text: 'États des lieux, maintenance, petits travaux : on veille sur votre bien comme sur le nôtre.',
  },
  {
    title: 'Revenus optimisés',
    text: 'Tarification dynamique et calendrier ajusté en continu pour remplir vos nuitées au meilleur prix.',
  },
  {
    title: 'Sérénité du propriétaire',
    text: 'Vous ne gérez rien au quotidien : vous encaissez et suivez tout à distance.',
  },
];


const WhyUsSection = () => {
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
    <section id="pourquoi" className="py-24 md:py-28 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 max-w-3xl mx-auto animate-on-scroll">
          <p className="text-xs tracking-[0.25em] text-gray-500 font-semibold mb-4 uppercase">
            POURQUOI L'INTENDANT
          </p>
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-elegant-black mb-6">
            Un partenaire complet pour votre location courte durée
          </h2>
          <p className="text-lg text-gray-600">
            Six engagements concrets qui font la différence au quotidien.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {items.map(({ Icon, title, text }, i) => (
            <div
              key={i}
              className="bg-white p-8 border border-gray-100 hover:border-gray-300 transition-colors duration-300 animate-on-scroll"
            >
              <Icon
                className="w-8 h-8 text-elegant-black mb-5"
                strokeWidth={1.5}
              />
              <h3 className="font-playfair text-xl font-semibold text-elegant-black mb-3">
                {title}
              </h3>
              <p className="text-gray-600 leading-relaxed">{text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyUsSection;

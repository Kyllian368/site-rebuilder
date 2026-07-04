import React, { useEffect } from 'react';
import {
  UserCheck,
  Users,
  Handshake,
  LineChart,
  Sparkles,
  ShieldCheck,
} from 'lucide-react';

const items = [
  {
    Icon: UserCheck,
    title: 'Un interlocuteur unique',
    text: "Vous échangez avec une personne qui connaît réellement votre logement.",
  },
  {
    Icon: Users,
    title: 'Une gestion à taille humaine',
    text: 'Nous privilégions la qualité du suivi plutôt que le volume de biens.',
  },
  {
    Icon: Handshake,
    title: 'Un réseau local fiable',
    text: "Décorateurs d'intérieur, artisans, agents immobiliers et partenaires de confiance.",
  },
  {
    Icon: LineChart,
    title: 'Un suivi transparent',
    text: 'Des revenus clairs, des retours réguliers et une visibilité sur les performances.',
  },
  {
    Icon: Sparkles,
    title: 'Un soin du détail',
    text: "Chaque séjour est préparé avec exigence pour préserver vos avis et votre bien.",
  },
  {
    Icon: ShieldCheck,
    title: 'Une vraie tranquillité',
    text: 'Vous déléguez sans perdre le contrôle.',
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
              className="group bg-white p-8 border border-gray-100 hover:border-[#941101] transition-colors duration-300 animate-on-scroll"
            >
              <Icon
                className="w-8 h-8 text-elegant-black group-hover:text-[#941101] group-hover:-translate-x-1 transition-all duration-300 mb-5"
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

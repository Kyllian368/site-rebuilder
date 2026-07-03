import React, { useEffect } from 'react';
import { MapPin } from 'lucide-react';
import { ASSETS } from '@/lib/intendant-assets';

const toulouse = [
  'Capitole',
  'Saint-Cyprien',
  'Les Carmes',
  'Saint-Étienne',
  'Jean Jaurès',
  'Compans-Caffarelli',
  'Les Chalets',
  'Saint-Michel',
  'Côte Pavée',
  'Rangueil',
  'Minimes',
  'Borderouge',
  'Purpan',
  'Croix-Daurade',
];

const metropole = [
  'Blagnac',
  'Colomiers',
  'Tournefeuille',
  'Brax',
  'Léguevin',
  'Pibrac',
];

const AreasSection = () => {
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
    <section id="secteurs" className="py-24 md:py-28 bg-elegant-gray">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center mb-14 animate-on-scroll">
          <p className="text-xs tracking-[0.25em] text-gray-500 font-semibold mb-4 uppercase">
            SECTEURS D'INTERVENTION
          </p>
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-elegant-black mb-6">
            Toulouse & sa métropole
          </h2>
          <p className="text-lg text-gray-600">
            Toulouse est l'un des marchés locatifs les plus porteurs de France :
            2ᵉ ville étudiante, écosystème Airbus/aéronautique, plus de 2,5 millions
            de visiteurs par an.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 items-stretch max-w-6xl mx-auto animate-on-scroll">
          <div className="rounded-sm overflow-hidden border border-gray-200 min-h-[320px]">
            <img
              src={ASSETS.saintSerninHd}
              alt="Basilique Saint-Sernin, Toulouse"
              className="w-full h-full object-cover grayscale"
              loading="lazy"
              decoding="async"
            />
          </div>

          <div className="flex flex-col gap-6">
            <div className="bg-white p-8 border border-gray-200">
              <div className="flex items-center gap-3 mb-6">
                <MapPin className="w-5 h-5 text-[#941101]" strokeWidth={1.5} />
                <h3 className="font-playfair text-2xl font-semibold text-elegant-black">
                  Toulouse intra-muros
                </h3>
              </div>
              <ul className="grid grid-cols-2 gap-x-6 gap-y-2 text-gray-700">
                {toulouse.map((q) => (
                  <li key={q} className="flex items-center gap-2">
                    <span className="w-1 h-1 rounded-full bg-[#941101]" />
                    {q}
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-white p-8 border border-gray-200">
              <div className="flex items-center gap-3 mb-6">
                <MapPin className="w-5 h-5 text-[#941101]" strokeWidth={1.5} />
                <h3 className="font-playfair text-2xl font-semibold text-elegant-black">
                  Métropole toulousaine
                </h3>
              </div>
              <ul className="grid grid-cols-2 gap-x-6 gap-y-2 text-gray-700">
                {metropole.map((v) => (
                  <li key={v} className="flex items-center gap-2">
                    <span className="w-1 h-1 rounded-full bg-[#941101]" />
                    {v}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <p className="text-center text-sm text-gray-500 mt-8">
          Votre commune n'est pas listée ? Contactez-nous, nous étudions chaque projet.
        </p>
      </div>
    </section>
  );
};

export default AreasSection;

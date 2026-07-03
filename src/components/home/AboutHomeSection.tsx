import React, { useEffect } from 'react';
import { ASSETS } from '@/lib/intendant-assets';

const AboutHomeSection = () => {
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
    <section id="apropos" className="py-24 md:py-28 bg-white">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="animate-on-scroll">
            <img
              src={ASSETS.interieurSalon1}
              alt="Intérieur soigné d'un logement géré par L'Intendant"
              className="w-full h-auto rounded-sm shadow-lg grayscale"
              loading="lazy"
              decoding="async"
            />
          </div>

          <div className="animate-on-scroll">
            <p className="text-xs tracking-[0.25em] text-gray-500 font-semibold mb-4 uppercase">
              QUI SOMMES-NOUS
            </p>
            <h2 className="font-playfair text-4xl md:text-5xl font-bold text-elegant-black mb-6">
              Une conciergerie toulousaine, à taille humaine
            </h2>
            <p className="text-lg text-gray-700 mb-5 leading-relaxed">
              Nous sommes une équipe locale, attachée à Toulouse et à sa région.
              Nous connaissons ses quartiers, ses rythmes, ses voyageurs — et
              nous mettons cette proximité au service des propriétaires qui nous
              font confiance.
            </p>
            <p className="text-gray-600 mb-5 leading-relaxed">
              L'idée est simple : gérer votre bien comme si c'était le nôtre,
              avec sérieux, disponibilité et un vrai souci du détail. Pas de
              plateforme impersonnelle, pas de standard téléphonique : un
              interlocuteur qui vous connaît, vous et votre logement.
            </p>
            <p className="text-gray-600 leading-relaxed">
              <strong className="font-playfair font-semibold text-elegant-black">Kyllian, fondateur</strong> — 3 ans d'expérience dans la location courte durée à Toulouse.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutHomeSection;

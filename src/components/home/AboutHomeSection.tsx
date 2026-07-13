import React, { useEffect } from 'react';
import { Link } from '@tanstack/react-router';
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
              Il y a près de deux ans, les premiers propriétaires m'ont fait confiance. Depuis, L'Intendant Conciergerie s'est construit sur cette même exigence : traiter chaque bien comme s'il était le nôtre.
            </p>
            <p className="text-gray-600 mb-5 leading-relaxed">
              Nous sommes une équipe locale, attachée à Toulouse et à sa région. Nous connaissons ses quartiers, ses rythmes, ses voyageurs — et nous mettons cette proximité au service des propriétaires qui nous font confiance. Pas de plateforme impersonnelle, pas de standard téléphonique : un interlocuteur qui vous connaît, vous et votre logement.
            </p>
            <p className="text-gray-600 mb-5 leading-relaxed">
              Nous nous appuyons également sur un réseau de partenaires locaux de confiance — décorateurs d'intérieur, artisans, agents immobiliers et autres professionnels de l'habitat — afin d'accompagner nos propriétaires bien au-delà de la simple gestion locative et de valoriser durablement leur bien.
            </p>

            <div className="flex items-center gap-4 mt-6">
              <img
                src={ASSETS.founderPhoto}
                alt="Kyllian, fondateur de L'Intendant"
                className="w-16 h-16 rounded-full object-cover object-top grayscale flex-shrink-0"
                loading="lazy"
                decoding="async"
              />
              <p className="text-gray-700 leading-relaxed">
                <strong className="font-playfair font-semibold text-elegant-black">Kyllian, fondateur.</strong>
              </p>
            </div>

            <div className="mt-6">
              <Link
                to="/qui-sommes-nous"
                className="inline-flex items-center gap-2 text-sm font-semibold text-elegant-black border-b border-elegant-black pb-0.5 hover:text-[#941101] hover:border-[#941101] transition-colors group"
              >
                <span>En savoir plus</span>
                <span className="transform group-hover:translate-x-1 transition-transform">→</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutHomeSection;

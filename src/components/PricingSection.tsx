import { useEffect } from 'react';
import { Link } from '@tanstack/react-router';

const PricingSection = () => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = document.querySelectorAll('.animate-on-scroll');
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const includedServices = [
    'Création et optimisation de vos annonces',
    'Shooting photo professionnel',
    'Tarification dynamique (yield management)',
    'Accueil des voyageurs 7j/7',
    'Ménage hôtelier & linge fourni',
    'Communication voyageurs 24/7',
    'Maintenance & gestion des imprévus',
    'Reporting mensuel détaillé',
  ];

  return (
    <section id="tarifs" className="py-20 bg-elegant-gray">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-on-scroll">
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-elegant-black mb-6">
            Une tarification simple et transparente
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Pas de frais cachés. Pas d'abonnement. Vous ne payez que lorsque votre bien génère des revenus.
          </p>
        </div>

        <div className="max-w-2xl mx-auto animate-on-scroll">
          <div className="bg-white p-10 md:p-12 shadow-lg border border-gray-100 text-center">
            <div className="mb-6">
              <span className="font-playfair text-7xl md:text-8xl font-bold text-elegant-black">
                20%
              </span>
              <p className="text-lg md:text-xl text-gray-700 mt-3">
                de commission sur les revenus locatifs générés
              </p>
            </div>

            <div className="flex justify-center mb-8">
              <span className="inline-block bg-elegant-black text-white text-sm font-semibold px-4 py-2 rounded-full tracking-wide">
                Sans engagement
              </span>
            </div>

            <div className="elegant-divider mb-8"></div>

            <ul className="text-left space-y-4 mb-10">
              {includedServices.map((service, index) => (
                <li key={index} className="flex items-start gap-3 text-gray-700">
                  <span className="text-elegant-black font-bold text-lg flex-shrink-0">✓</span>
                  <span>{service}</span>
                </li>
              ))}
            </ul>

            <div className="elegant-divider mb-8"></div>

            <Link
              to="/discutons"
              className="inline-flex items-center gap-2 bg-elegant-black text-white px-8 py-4 text-base font-semibold rounded-lg shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 group border border-gray-800"
            >
              <span>Discutons de votre projet</span>
              <svg
                className="w-4 h-4 transform group-hover:translate-x-1 transition-transform"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>

            <p className="text-sm text-gray-500 mt-5">
              Estimation gratuite et personnalisée sous 48h
            </p>
          </div>
        </div>

        <div className="text-center mt-14 animate-on-scroll">
          <p className="text-lg md:text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
            Nos optimisations couvrent largement notre commission — en moyenne, nos propriétaires gagnent{' '}
            <strong className="text-elegant-black">+25% de revenus</strong> par rapport à une gestion en autonomie.
          </p>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;

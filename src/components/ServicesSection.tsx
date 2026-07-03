import React, { useEffect } from 'react';
import { Link } from '@tanstack/react-router';
import { ClipboardList, Sparkles, LineChart, ArrowRight } from 'lucide-react';

const ServicesSection = () => {
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

  const services = [
    {
      Icon: ClipboardList,
      title: 'Gestion complète de votre location',
      description:
        'Mise en ligne, réservations, accueil voyageurs, ménage et linge : tout est pris en charge.',
    },
    {
      Icon: Sparkles,
      title: 'Entretien & valorisation du logement',
      description:
        'Ménage hôtelier, maintenance et petits travaux pour garder votre bien impeccable.',
    },
    {
      Icon: LineChart,
      title: 'Optimisation de la rentabilité',
      description:
        'Tarification dynamique et annonces optimisées pour maximiser vos revenus.',
    },
  ];

  return (
    <section id="services" className="py-24 md:py-28 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-on-scroll max-w-3xl mx-auto">
          <p className="text-xs tracking-[0.25em] text-gray-500 font-semibold mb-4 uppercase">
            NOS SERVICES
          </p>
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-elegant-black mb-6">
            Nos services principaux
          </h2>
          <p className="text-lg text-gray-600">
            Une prise en charge complète, pensée pour les propriétaires exigeants.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {services.map(({ Icon, title, description }, index) => (
            <div
              key={index}
              className="bg-white p-8 transition-colors duration-300 animate-on-scroll border border-gray-100 hover:border-red-500"
            >
              <Icon
                className="w-8 h-8 text-elegant-black mb-5"
                strokeWidth={1.5}
              />
              <h3 className="font-playfair text-xl font-semibold text-elegant-black mb-3">
                {title}
              </h3>
              <p className="text-gray-600 leading-relaxed">{description}</p>
            </div>
          ))}
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-on-scroll">
          <Link
            to="/services"
            className="inline-flex items-center gap-2 border border-elegant-black text-elegant-black px-8 py-4 text-base font-semibold rounded-lg hover:bg-elegant-black hover:text-white transition-all duration-300 group"
          >
            <span>Voir tous nos services</span>
            <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
          </Link>
          <Link
            to="/discutons"
            className="inline-flex items-center gap-2 bg-elegant-black text-white px-8 py-4 text-base font-semibold rounded-lg shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 group border border-gray-800"
          >
            <span>Demander une estimation gratuite</span>
            <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;

import React, { useEffect } from 'react';
import { Link } from '@tanstack/react-router';


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
      title: "Création & publication d'annonces",
      description: "Optimisation complète de vos annonces sur toutes les plateformes de location courte durée.",
      icon: "✦"
    },
    {
      title: "Tarification dynamique",
      description: "Yield management professionnel pour maximiser vos revenus selon la demande.",
      icon: "✦"
    },
    {
      title: "Communication locataires 24/7",
      description: "Accueil et assistance de vos hôtes à toute heure, dans toutes les langues.",
      icon: "✦"
    },
    {
      title: "Gestion complète des séjours",
      description: "Entrées/sorties, ménage professionnel, fourniture du linge de qualité hôtelière.",
      icon: "✦"
    },
    {
      title: "Suivi administratif",
      description: "Gestion des paiements, résolution des litiges, déclaration taxe de séjour.",
      icon: "✦"
    }
  ];

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-on-scroll">
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-elegant-black mb-6">
            Nos services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            <strong>Votre bien. Notre expertise. Vos revenus maximisés !</strong>
            <br />
            Notre connaissance du marché toulousain nous permet d'adapter nos stratégies 
            pour maximiser votre taux d'occupation et vos revenus locatifs.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <div 
              key={index}
              className="bg-white p-8 group hover:shadow-lg transition-all duration-300 animate-on-scroll border border-gray-100 hover:border-[#8B0000]/20"
            >
              <div className="text-3xl text-gray-700 mb-4 group-hover:scale-110 transition-transform duration-300 group-hover:text-[#8B0000]/80">
                {service.icon}
              </div>
              <h3 className="font-playfair text-xl font-semibold text-elegant-black mb-4 group-hover:text-[#8B0000]/90">
                {service.title}
              </h3>
              <p className="text-gray-600 leading-relaxed group-hover:text-gray-700">
                {service.description}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center animate-on-scroll">
          <p className="text-lg text-gray-700 mb-8 max-w-4xl mx-auto">
            Chaque propriétaire et chaque bien sont uniques. Nous adaptons nos services à vos besoins, 
            que vous soyez un investisseur aguerri ou un particulier souhaitant rentabiliser un logement.
          </p>
          
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-elegant-black text-white p-6 text-center border border-gray-200">
              <h4 className="font-playfair text-lg font-semibold mb-2">Assistance rapide et efficace</h4>
            </div>
            <div className="bg-elegant-black text-white p-6 text-center border border-gray-200">
              <h4 className="font-playfair text-lg font-semibold mb-2">Optimisation des annonces</h4>
            </div>
            <div className="bg-elegant-black text-white p-6 text-center border border-gray-200">
              <h4 className="font-playfair text-lg font-semibold mb-2">Gestion locative simplifiée</h4>
            </div>
          </div>

          <div className="mt-12">
            <Link
              to="/services"
              className="inline-flex items-center gap-2 bg-elegant-black text-white px-8 py-4 text-base font-semibold rounded-lg shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 group border border-gray-800"
            >
              <span>Découvrir tous nos services</span>
              <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </section>

  );
};

export default ServicesSection;

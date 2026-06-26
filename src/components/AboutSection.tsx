import React, { useEffect } from 'react';

const AboutSection = () => {
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

  return (
    <section id="apropos" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="animate-on-scroll">
            <img 
              src="/Capitile Opéra Toulouse noir et blanc.jpeg"
              alt="Capitole de Toulouse - Opéra architecture historique emblématique"
              className="w-full h-auto rounded-sm shadow-lg"
              loading="lazy"
              decoding="async"
            />
          </div>

          {/* Contenu */}
          <div className="animate-on-scroll">
            <h2 className="font-playfair text-4xl md:text-5xl font-bold text-elegant-black mb-6">
              À propos
            </h2>
            
            <p className="text-xl text-gray-700 mb-6 leading-relaxed">
              Conciergerie toulousaine, L'Intendant s'appuie sur son expertise et un réseau 
              de partenaires de confiance pour optimiser votre location courte durée.
            </p>
            
            <p className="text-gray-600 mb-8 leading-relaxed">
              Votre partenaire toulousain pour une location courte durée optimisée : 
              expertise locale, sérénité absolue, rentabilité maximisée.
            </p>

            {/* Services clés du dépliant */}
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-elegant-black rounded-full mt-2"></div>
                <p className="text-gray-700"><strong>Suivi rigoureux</strong> de votre bien et de vos revenus</p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-elegant-black rounded-full mt-2"></div>
                <p className="text-gray-700"><strong>Gestion des imprévus</strong> avec réactivité et professionnalisme</p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-elegant-black rounded-full mt-2"></div>
                <p className="text-gray-700"><strong>Partenaires locaux de confiance</strong> pour tous vos besoins</p>
              </div>
            </div>

            <div className="mt-8 p-6 bg-gray-50 border-l-4 border-elegant-black">
              <p className="text-gray-700 italic">
                "Chaque propriétaire et chaque bien sont uniques. Nous adaptons nos services à vos besoins, 
                que vous soyez un investisseur aguerri ou un particulier souhaitant rentabiliser un logement."
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection; 
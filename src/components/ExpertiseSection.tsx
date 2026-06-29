import React, { useEffect } from 'react';

const ExpertiseSection = () => {
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
    <section className="py-20 bg-elegant-gray">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="animate-on-scroll">
            <h2 className="font-playfair text-4xl md:text-5xl font-bold text-elegant-black mb-6">
              Expertise locale
            </h2>
            <p className="text-xl text-gray-700 mb-6 leading-relaxed">
              <strong>Location à court terme</strong>
            </p>
            <p className="text-gray-600 mb-6 leading-relaxed">
              La location courte durée est une alternative flexible et rentable à l'hôtellerie, 
              répondant aux besoins des voyageurs en quête de confort et d'indépendance. 
              Qu'il s'agisse de séjours touristiques ou professionnels, elle offre aux propriétaires 
              une opportunité d'optimiser leurs revenus, à condition d'une gestion rigoureuse et 
              adaptée au marché.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Conciergerie toulousaine, L'Intendant s'appuie sur son expertise et un réseau de 
              partenaires de confiance pour optimiser votre location courte durée. Votre partenaire toulousain 
              pour une location courte durée optimisée : expertise locale, sérénité absolue, rentabilité maximisée.
            </p>
          </div>

          <div className="animate-on-scroll">
            <img 
              src="/__l5e/assets-v1/1c4df8f1-fb8e-4f0b-a063-13ec7a281591/manege.png"
              alt="Architecture toulousaine"
              className="w-full h-auto rounded-sm shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExpertiseSection;

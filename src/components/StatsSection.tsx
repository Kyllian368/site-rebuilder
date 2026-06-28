import React, { useEffect, useRef, useState } from 'react';
import { Link } from '@tanstack/react-router';


const StatsSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  const [counters, setCounters] = useState([0, 0, 0]);

  const stats = [
    {
      number: 3,
      suffix: "x",
      description: "revenus vs location classique",
      detail: "À Toulouse, un appartement bien situé en location courte durée peut générer jusqu'à 3 fois plus de revenus qu'une location traditionnelle."
    },
    {
      number: 50,
      suffix: "%",
      description: "d'augmentation en haute demande",
      detail: "Lors d'événements majeurs (festivals, salons, matchs), les tarifs peuvent augmenter de 20 à 50% grâce à la tarification dynamique."
    },
    {
      number: 20,
      suffix: "h",
      description: "économisées par mois",
      detail: "Notre service de conciergerie vous fait économiser en moyenne 20h de gestion administrative et opérationnelle par mois."
    }
  ];

  const infoItems = [
    {
      icon: "🎓",
      title: "130 000 étudiants",
      description: "Toulouse est la 2ème ville universitaire de France avec 130 000 étudiants, dont 15 000 étudiants internationaux, créant une demande locative constante."
    },
    {
      icon: "✈️", 
      title: "Pôle aéronautique mondial",
      description: "Siège d'Airbus et capitale européenne de l'aéronautique, Toulouse attire de nombreux cadres et ingénieurs internationaux en déplacement professionnel."
    },
    {
      icon: "🏙️",
      title: "4ème métropole française", 
      description: "Avec plus d'1 million d'habitants dans l'aire urbaine, Toulouse connaît une croissance démographique soutenue de +1,1% par an."
    },
    {
      icon: "💼",
      title: "Économie dynamique",
      description: "Hub technologique et de recherche avec plus de 346 000 emplois, Toulouse attire entreprises et talents du monde entier."
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;
    const durations = [1800, 1800, 1800]; // Durée de l'animation en ms (plus lent)
    const increments = stats.map((stat, i) => stat.number / (durations[i] / 20));
    let current = [0, 0, 0];
    let start = Date.now();
    let animationFrame: number;

    function animate() {
      const now = Date.now();
      const elapsed = now - start;
      let updated = current.map((val, i) => {
        if (elapsed < durations[i]) {
          return Math.min(stats[i].number, val + increments[i]);
        } else {
          return stats[i].number;
        }
      });
      setCounters(updated.map((v, i) => (stats[i].suffix === '%' ? Math.round(v) : Math.floor(v))));
      current = updated;
      if (updated.some((val, i) => val < stats[i].number)) {
        animationFrame = requestAnimationFrame(animate);
      }
    }
    animate();
    return () => cancelAnimationFrame(animationFrame);
  }, [isVisible]);

  return (
    <section id="pourquoi" ref={sectionRef} className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="font-playfair text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6 text-elegant-black">
            Pourquoi L'Intendant ?
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            Des chiffres qui parlent d'eux-mêmes et une expertise reconnue sur le marché toulousain.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 md:gap-8 mb-12 md:mb-16">
          {stats.map((stat, index) => (
            <div key={index} className="text-center group bg-gray-50 p-4 sm:p-6 md:p-8 border border-gray-100 transition-transform duration-300 hover:shadow-lg hover:scale-105">
              <div className="mb-4 md:mb-6">
                <div className={`text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold font-playfair text-gray-800 transition-all duration-1000 ${
                  isVisible ? 'opacity-100 transform scale-100' : 'opacity-0 transform scale-75'
                }`}>
                  +{counters[index]}{stat.suffix}
                </div>
              </div>
              <h3 className="text-base sm:text-lg md:text-xl font-semibold mb-3 md:mb-4 text-elegant-black">{stat.description}</h3>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed">{stat.detail}</p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <div className="max-w-4xl mx-auto bg-gray-50 p-8 border border-gray-100">
            <h3 className="font-playfair text-2xl font-semibold mb-6 text-elegant-black">Le marché de la location courte durée</h3>
            <div className="grid md:grid-cols-2 gap-8 text-left">
              <div className="space-y-4">
                <p className="flex items-start">
                  <span className="text-gray-800 mr-3 text-xl">•</span>
                  Toulouse accueille plus de 2,5 millions de visiteurs par an, créant une demande constante pour les hébergements temporaires.
                </p>
                <p className="flex items-start">
                  <span className="text-gray-800 mr-3 text-xl">•</span>
                  Toulouse attire de nombreux voyageurs d'affaires grâce à son écosystème aéronautique, spatial et technologique, avec plus de 15 000 entreprises dans la métropole.
                </p>
              </div>
              <div className="space-y-4">
                <p className="flex items-start">
                  <span className="text-gray-800 mr-3 text-xl">•</span>
                  Les propriétaires délégant la gestion voient leur rentabilité augmenter de 25% en moyenne grâce à l'optimisation professionnelle.
                </p>
                <p className="flex items-start">
                  <span className="text-gray-800 mr-3 text-xl">•</span>
                  Un bien géré professionnellement obtient 4,8/5 de note moyenne, contre 4,2/5 pour une gestion amateur, impactant directement les réservations.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-10">
            <Link
              to="/comment-ca-marche"
              className="inline-flex items-center gap-2 text-elegant-black font-semibold border-b-2 border-elegant-black pb-1 hover:gap-3 transition-all duration-300"
            >
              <span>En savoir plus</span>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </section>

  );
};

export default StatsSection;

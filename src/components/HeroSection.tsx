import React, { useEffect, useRef } from 'react';
import { Link } from '@tanstack/react-router';

const HeroSection = () => {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.target.classList.contains('animate-on-scroll')) {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        }
      },
      { threshold: 0.1 }
    );

    const elements = document.querySelectorAll('.animate-on-scroll');
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background with Toulouse images */}
      <div className="absolute inset-0">
        <div className="w-full h-full bg-gradient-to-br from-gray-50 to-gray-100">
          <div className="absolute inset-0 grid grid-cols-2 opacity-40">
            <div className="relative overflow-hidden">
              <img 
                src="/__l5e/assets-v1/d3efe234-b92e-463d-baaf-f03c7eed352a/upload-939f160b.png"
                alt="Architecture toulousaine - Bâtiments historiques"
                className="w-full h-full object-cover"
                loading="eager"
                decoding="async"
                fetchPriority="high"
              />
            </div>
            <div className="relative overflow-hidden">
              <img 
                src="/__l5e/assets-v1/728590aa-2ef0-4b99-8cdc-4d09131eac20/upload-c0783b41.png"
                alt="Place du Capitole Toulouse - Architecture emblématique"
                className="w-full h-full object-cover"
                loading="eager"
                decoding="async"
              />
            </div>
          </div>
        </div>
        <div className="absolute inset-0 bg-white/60"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-elegant-black px-4 sm:px-6 max-w-4xl mx-auto hero-mobile-zoom">
        <h1 className="font-playfair text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-bold mb-3 sm:mb-4 md:mb-6 animate-on-scroll leading-tight">
          Votre bien.
          <br />
          <span className="text-gray-700">Notre expertise.</span>
          <br />
          Vos revenus maximisés.
        </h1>
        
        <p className="text-sm sm:text-base md:text-lg lg:text-xl mb-4 sm:mb-6 md:mb-8 font-light animate-on-scroll text-gray-600 max-w-2xl mx-auto leading-relaxed">
          Conciergerie toulousaine spécialisée dans la gestion locative courte durée. 
          Nous optimisons votre investissement avec excellence et sérénité.
        </p>

        <div className="animate-on-scroll">
          <Link
            to="/discutons"
            className="bg-[#941101] text-white px-4 sm:px-6 lg:px-8 py-2 sm:py-3 lg:py-4 text-sm sm:text-base font-semibold rounded-lg shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 inline-flex items-center space-x-2 group border border-[#7a0d01]"
          >
            <span>Discutons de votre projet</span>
            <svg 
              className="w-3 h-3 sm:w-4 sm:h-4 transform group-hover:translate-x-1 transition-transform" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </button>
        </div>
      </div>

      {/* Decorative divider */}
      <div className="absolute bottom-0 left-0 right-0">
        <div className="h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent"></div>
      </div>
    </section>
  );
};

export default HeroSection;

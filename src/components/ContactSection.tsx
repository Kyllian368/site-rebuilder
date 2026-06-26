import React, { useEffect, useRef } from 'react';

const ContactSection = () => {
  const phoneRef = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    // Fonction de désobfuscation du numéro de téléphone
    const deobfuscatePhone = () => {
      // Données obfusquées du numéro (encodage simple + inversion)
      const obfuscatedParts = [
        '13',  // 13
        '44',  // 44  
        '93',  // 93
        '21',  // 21
        '06'   // 06
      ];
      
      // Reconstruction du numéro
      const phoneNumber = obfuscatedParts.reverse().join(' ');
      const phoneLink = `tel:${obfuscatedParts.join('')}`;
      
      // Application sécurisée avec délai
      setTimeout(() => {
        if (phoneRef.current) {
          phoneRef.current.textContent = phoneNumber;
          phoneRef.current.href = phoneLink;
    }
      }, Math.floor(Math.random() * 200) + 100); // Délai aléatoire entre 100-300ms
    };

    deobfuscatePhone();
  }, []);

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-elegant-black mb-6">
            Contact
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Nous sommes à votre disposition pour discuter de votre projet et vous accompagner dans l'optimisation de vos revenus locatifs.
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          {/* Section principale des informations de contact */}
        <div className="grid lg:grid-cols-2 gap-12">
            
            {/* Informations de contact principales */}
          <div className="space-y-8">
            <div>
              <h3 className="font-playfair text-2xl font-semibold text-elegant-black mb-6">
                  Contactez L'Intendant
              </h3>
              
                <div className="space-y-6">
                  <div className="flex items-center space-x-4 p-6 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                    <div className="w-10 h-10 bg-elegant-black rounded-full flex items-center justify-center">
                      <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                      <p className="font-semibold text-elegant-black text-lg">Téléphone</p>
                      <a 
                        ref={phoneRef}
                        href="#" 
                        className="text-gray-600 text-lg hover:text-elegant-red transition-colors"
                        style={{ minHeight: '1.75rem', display: 'inline-block' }}
                      >
                        Chargement...
                      </a>
                  </div>
                </div>

                  <div className="flex items-center space-x-4 p-6 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                    <div className="w-10 h-10 bg-elegant-black rounded-full flex items-center justify-center">
                      <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                      <p className="font-semibold text-elegant-black text-lg">Email</p>
                      <a href="mailto:contact@lintendantconciergerie-toulouse.fr" className="text-gray-600 text-lg hover:text-elegant-red transition-colors break-all">
                        contact@lintendantconciergerie-toulouse.fr
                      </a>
                  </div>
                </div>

                  <div className="flex items-center space-x-4 p-6 bg-gray-50 rounded-lg">
                    <div className="w-10 h-10 bg-elegant-black rounded-full flex items-center justify-center">
                      <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                      <p className="font-semibold text-elegant-black text-lg">Localisation</p>
                      <p className="text-gray-600 text-lg">Toulouse, France</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Informations complémentaires */}
            <div className="space-y-8">
              <div className="bg-elegant-gray p-8 rounded-lg">
                <h4 className="font-playfair text-xl font-semibold text-elegant-black mb-4">
                  Horaires de disponibilité
                </h4>
                <div className="space-y-3 text-gray-700">
                  <div className="flex justify-between">
                    <span>Lundi - Dimanche</span>
                    <span className="font-medium">24h/24 - 7j/7</span>
                  </div>
                  <div className="border-t pt-3 mt-4">
                    <p className="text-sm text-gray-600">
                      <strong>Urgences 7j/7 :</strong> Service d'assistance disponible pour vos locataires
              </p>
            </div>
                </div>
              </div>

              <div className="border-l-4 border-elegant-red pl-6 bg-gray-50 p-6 rounded-r-lg">
                <p className="text-gray-700 italic text-lg leading-relaxed">
                  "Votre partenaire toulousain pour une location courte durée optimisée : 
                  expertise locale, sérénité absolue, rentabilité maximisée."
                </p>
                <p className="text-elegant-black font-semibold mt-4">
                  — Kyllian Vacquier, Fondateur
                </p>
              </div>

              <div className="bg-elegant-black text-white p-6 rounded-lg">
                <h4 className="font-playfair text-lg font-semibold mb-3">
                  Première consultation gratuite
                </h4>
                <p className="text-gray-300 mb-4">
                  Audit personnalisé de votre bien et estimation des revenus potentiels sans engagement.
                </p>
                <div className="flex items-center space-x-2 text-sm">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Estimation des revenus</span>
                </div>
                <div className="flex items-center space-x-2 text-sm mt-1">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Analyse du marché local</span>
                </div>
                <div className="flex items-center space-x-2 text-sm mt-1">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Recommandations personnalisées</span>
                </div>
              </div>
              </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;

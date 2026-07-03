import React from 'react';
import { Link } from '@tanstack/react-router';
import { ArrowRight } from 'lucide-react';

const FinalCTASection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="bg-elegant-black text-white rounded-2xl px-8 py-16 md:px-16 md:py-20 text-center max-w-5xl mx-auto shadow-xl">
          <p className="text-xs tracking-[0.25em] text-[#941101] font-semibold mb-5">
            CONTACTEZ-NOUS
          </p>
          <h2 className="font-playfair text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
            Prêt à confier votre bien et maximiser vos revenus&nbsp;?
          </h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto mb-10">
            Parlons de votre projet en quelques minutes. On vous propose ensuite
            une stratégie claire et une estimation adaptée à votre logement.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/discutons"
              className="inline-flex items-center gap-2 bg-white text-elegant-black px-8 py-4 text-base font-semibold rounded-lg shadow hover:shadow-xl hover:scale-105 transition-all duration-300 group"
            >
              <span>Nous contacter</span>
              <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              to="/discutons"
              hash="devis"
              className="inline-flex items-center gap-2 border border-white/40 text-white px-8 py-4 text-base font-semibold rounded-lg hover:bg-white hover:text-elegant-black transition-all duration-300 group"
            >
              <span>Demander une estimation</span>
              <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          <p className="text-sm text-gray-400 mt-8">
            Estimation gratuite et sans engagement — réponse sous 48h.
            Commission de 20%, sans frais cachés.
          </p>
        </div>
      </div>
    </section>
  );
};

export default FinalCTASection;

import React from 'react';
import { Link } from '@tanstack/react-router';

const Footer = () => {


  return (
    <footer className="bg-elegant-black text-white py-12">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-8">
          {/* Logo et description */}
          <div>
            <img
              src="/__l5e/assets-v1/c304b4f6-f6ff-4dc6-b32f-e2d3b86f5cb8/logo.png"
              alt="L'Intendant Toulouse"
              className="h-12 w-auto mb-4 brightness-0 invert"
            />
            <p className="text-gray-300 leading-relaxed">
              Conciergerie toulousaine spécialisée dans la gestion locative courte durée.
              Votre bien, notre expertise, vos revenus maximisés.
            </p>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-playfair text-xl font-semibold mb-4">Contact</h3>
            <div className="space-y-2 text-gray-300">
              <p>06.21.93.44.13</p>
              <p>contact@lintendantconciergerie-toulouse.fr</p>
              <p>Toulouse, France</p>
            </div>
          </div>
        </div>

        {/* Séparateur */}
        <div className="border-t border-gray-700 mt-8 pt-6">
          {/* Liens légaux */}
          <div className="text-center mb-4">
            <Link 
              to="/cgv" 
              className="text-gray-300 hover:text-white transition-colors duration-300 font-medium border-b border-gray-600 hover:border-white pb-1 mr-6"
            >

              Conditions générales de vente
            </Link>
            <Link 
              to="/politique-confidentialite"
              className="text-gray-300 hover:text-white transition-colors duration-300 font-medium border-b border-gray-600 hover:border-white pb-1"
            >
              Politique de confidentialité
            </Link>
          </div>
          
          {/* Copyright */}
          <div className="text-center">
            <p className="text-gray-400 text-sm">
              © 2024 L'Intendant Toulouse. Tous droits réservés.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

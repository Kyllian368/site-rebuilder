import React, { useState, useEffect } from 'react';
import { useRouterState, useNavigate, Link } from '@tanstack/react-router';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setIsMobileMenuOpen(false);

    if (pathname === '/') {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      navigate({ to: '/', hash: id });
    }
  };

  const handleLogoClick = () => {
    setIsMobileMenuOpen(false);
    if (pathname === '/') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      navigate({ to: '/' });
    }
  };

  const handleBlogClick = () => {
    setIsMobileMenuOpen(false);
    if (pathname === '/blog') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      navigate({ to: '/blog' });
    }
  };


  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-300 border-b border-gray-200 ${
      isScrolled ? 'bg-white/95 backdrop-blur-sm shadow-sm' : 'bg-white/90 backdrop-blur-sm'
    }`}>
      <div className="container mx-auto px-2 sm:px-4 lg:px-6 py-4 sm:py-5">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <button 
              onClick={handleLogoClick}
              className="transition-opacity hover:opacity-80 -ml-2 sm:-ml-4"
            >
            <img 
              src="/__l5e/assets-v1/c304b4f6-f6ff-4dc6-b32f-e2d3b86f5cb8/logo.png" 
              alt="L'Intendant Toulouse" 
                className="h-12 sm:h-16 w-auto"
            />
            </button>
          </div>
          
          {/* Navigation Desktop */}
          <nav className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection('apropos')}
              className="text-elegant-black hover:text-gray-600 transition-colors duration-300 font-medium"
            >
              À propos
            </button>
            <button 
              onClick={() => scrollToSection('services')}
              className="text-elegant-black hover:text-gray-600 transition-colors duration-300 font-medium"
            >
              Services
            </button>
            <button 
              onClick={() => scrollToSection('temoignages')}
              className="text-elegant-black hover:text-gray-600 transition-colors duration-300 font-medium"
            >
              Témoignages
            </button>
            <button 
              onClick={() => scrollToSection('pourquoi')}
              className="text-elegant-black hover:text-gray-600 transition-colors duration-300 font-medium"
            >
              Pourquoi nous ?
            </button>
            <button 
              onClick={handleBlogClick}
              className="text-elegant-black hover:text-gray-600 transition-colors duration-300 font-medium"
            >
              Blog
            </button>
            <Link
              to="/discutons"
              onClick={() => setIsMobileMenuOpen(false)}
              className="bg-elegant-black text-white px-6 py-2 rounded-sm hover:bg-gray-900 transition-all duration-300 font-medium"
            >
              Discutons de votre projet
            </Link>
          </nav>

          {/* Bouton Menu Mobile */}
          <button
            onClick={toggleMobileMenu}
            className="md:hidden flex flex-col justify-center items-center w-8 h-8 space-y-1"
            aria-label="Menu"
          >
            <span className={`block w-6 h-0.5 bg-elegant-black transition-all duration-300 ${
              isMobileMenuOpen ? 'rotate-45 translate-y-1.5' : ''
            }`}></span>
            <span className={`block w-6 h-0.5 bg-elegant-black transition-all duration-300 ${
              isMobileMenuOpen ? 'opacity-0' : ''
            }`}></span>
            <span className={`block w-6 h-0.5 bg-elegant-black transition-all duration-300 ${
              isMobileMenuOpen ? '-rotate-45 -translate-y-1.5' : ''
            }`}></span>
          </button>
        </div>

        {/* Menu Mobile */}
        <div className={`md:hidden transition-all duration-300 overflow-hidden ${
          isMobileMenuOpen ? 'max-h-[90vh] opacity-100' : 'max-h-0 opacity-0'
        }`}>
          <nav className="pt-4 pb-2 space-y-3">
            <button 
              onClick={() => scrollToSection('apropos')}
              className="block w-full text-left py-3 px-2 text-elegant-black hover:bg-gray-50 transition-colors duration-300 font-medium"
            >
              À propos
            </button>
            <button 
              onClick={() => scrollToSection('services')}
              className="block w-full text-left py-3 px-2 text-elegant-black hover:bg-gray-50 transition-colors duration-300 font-medium"
            >
              Services
            </button>
            <button 
              onClick={() => scrollToSection('temoignages')}
              className="block w-full text-left py-3 px-2 text-elegant-black hover:bg-gray-50 transition-colors duration-300 font-medium"
            >
              Témoignages
            </button>
            <button 
              onClick={() => scrollToSection('pourquoi')}
              className="block w-full text-left py-3 px-2 text-elegant-black hover:bg-gray-50 transition-colors duration-300 font-medium"
            >
              Pourquoi nous ?
            </button>
            <button 
              onClick={handleBlogClick}
              className="block w-full text-left py-3 px-2 text-elegant-black hover:bg-gray-50 transition-colors duration-300 font-medium"
            >
              Blog
            </button>
            <Link
              to="/discutons"
              onClick={() => setIsMobileMenuOpen(false)}
              className="block w-full text-left py-3 px-2 bg-elegant-black text-white hover:bg-gray-900 transition-colors duration-300 font-medium rounded-sm mt-2"
            >
              Discutons de votre projet
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
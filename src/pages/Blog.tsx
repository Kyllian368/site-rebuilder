import React, { useLayoutEffect, useState, useEffect } from 'react';
import { Link, useRouterState } from '@tanstack/react-router';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const Blog = () => {
  const [selectedCategory, setSelectedCategory] = useState('Tous les articles');
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  useLayoutEffect(() => {
    // Force le scroll en haut de manière plus agressive
    window.scrollTo(0, 0);
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
    
    // Force également après des délais de plus en plus longs
    setTimeout(() => {
      window.scrollTo(0, 0);
      document.documentElement.scrollTop = 0;
      document.body.scrollTop = 0;
    }, 50);
    
    setTimeout(() => {
      window.scrollTo(0, 0);
      document.documentElement.scrollTop = 0;
      document.body.scrollTop = 0;
    }, 150);
    
    setTimeout(() => {
      window.scrollTo(0, 0);
      document.documentElement.scrollTop = 0;
      document.body.scrollTop = 0;
    }, 300);
  }, []);

  // Effet supplémentaire qui se déclenche à chaque changement de route
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  const articles = [
    {
      id: 'guide-airbnb-toulouse-2024',
      title: 'Guide Complet Airbnb Toulouse 2024 : Maximisez Vos Revenus',
      excerpt: 'Découvrez tous les secrets pour réussir votre investissement locatif courte durée à Toulouse. Quartiers rentables, réglementation, conseils d\'experts.',
      readTime: '8 min',
      date: '1 décembre 2024',
      category: 'Guides',
      image: '/__l5e/assets-v1/63f66d92-1636-47fc-9a86-7b63366fe16e/capitole-toulouse-bw.jpeg'
    },
    {
      id: 'optimiser-revenus-location-courte-duree',
      title: '10 Astuces Éprouvées Pour Maximiser Vos Revenus Locatifs',
      excerpt: 'Augmentez vos revenus de 30% avec ces stratégies de tarification dynamique et d\'optimisation d\'annonces testées par nos experts.',
      readTime: '6 min',
      date: '28 novembre 2024',
      category: 'Optimisation',
      image: '/__l5e/assets-v1/969ea519-f260-41d6-ad94-c0cd2b574076/oh-toulouse.jpeg'
    },
    {
      id: 'reglementation-location-saisonniere-toulouse',
      title: 'Réglementation Location Saisonnière Toulouse : Guide Légal 2024',
      excerpt: 'Tout savoir sur les autorisations, déclarations et obligations légales pour exploiter une location courte durée à Toulouse en toute conformité.',
      readTime: '7 min',
      date: '25 novembre 2024',
      category: 'Réglementation',
      image: '/__l5e/assets-v1/1c4df8f1-fb8e-4f0b-a063-13ec7a281591/manege.png'
    }
  ];

  const categories = ['Tous les articles', 'Guides', 'Optimisation', 'Réglementation'];

  const filteredArticles = selectedCategory === 'Tous les articles' 
    ? articles 
    : articles.filter(article => article.category === selectedCategory);

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section Blog */}
      <section className="pt-32 pb-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="font-playfair text-4xl md:text-6xl font-bold text-elegant-black mb-6">
              Conseils d'Experts
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Découvrez nos guides, astuces et analyses pour optimiser votre investissement 
              locatif courte durée à Toulouse. L'expertise L'Intendant à votre service.
            </p>
            
            {/* Catégories */}
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-sm text-sm transition-colors ${
                    selectedCategory === category
                      ? 'bg-elegant-black text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredArticles.map((article) => (
              <Link 
                key={article.id}
                to={`/blog/${article.id}`}
                className="bg-white rounded-lg shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden group"
              >
                <div className="aspect-video overflow-hidden">
                  <img 
                    src={article.image}
                    alt={article.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    loading="lazy"
                    decoding="async"
                  />
                </div>
                
                <div className="p-6">
                  <div className="flex items-center gap-4 text-sm text-gray-500 mb-3">
                    <span className="bg-elegant-black text-white px-2 py-1 rounded text-xs">
                      {article.category}
                    </span>
                    <span>{article.readTime}</span>
                    <span>{article.date}</span>
                  </div>
                  
                  <h2 className="font-playfair text-xl font-semibold text-elegant-black mb-3 group-hover:text-gray-700 transition-colors">
                    {article.title}
                  </h2>
                  
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {article.excerpt}
                  </p>
                  
                  <div className="mt-4 flex items-center text-elegant-black text-sm font-medium">
                    Lire l'article
                    <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-elegant-black text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="font-playfair text-3xl md:text-4xl font-bold mb-6">
            Prêt à optimiser votre investissement ?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Laissez L'Intendant gérer votre bien pendant que vous profitez des revenus optimisés.
          </p>
          <Link 
            to="/"
            onClick={() => {
              setTimeout(() => {
                document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
              }, 100);
            }}
            className="bg-white text-elegant-black px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors inline-flex items-center gap-2"
          >
            Demander un devis gratuit
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Blog; 
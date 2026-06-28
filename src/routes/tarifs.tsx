import { createFileRoute, Link } from '@tanstack/react-router';
import { useEffect } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import CookieBanner from '@/components/CookieBanner';

export const Route = createFileRoute('/tarifs')({
  head: () => ({
    meta: [
      { title: "Tarifs conciergerie Airbnb Toulouse — 20% sans engagement | L'Intendant" },
      {
        name: 'description',
        content:
          "Commission de 20% sur les revenus générés, sans engagement ni frais cachés. Découvrez ce qui est inclus dans notre service de conciergerie à Toulouse.",
      },
      { property: 'og:title', content: "Tarifs conciergerie Airbnb Toulouse | L'Intendant" },
      {
        property: 'og:description',
        content:
          "Commission de 20% sur les revenus, sans engagement ni frais cachés. Tous les services inclus.",
      },
      { property: 'og:url', content: '/tarifs' },
    ],
    links: [{ rel: 'canonical', href: '/tarifs' }],
  }),
  component: TarifsPage,
});

const included = [
  'Création et optimisation de vos annonces',
  'Shooting photo professionnel',
  'Tarification dynamique (yield management)',
  'Accueil des voyageurs 7j/7',
  'Ménage hôtelier & linge fourni',
  'Communication voyageurs 24/7',
  'Maintenance & gestion des imprévus',
  'Reporting mensuel détaillé',
];

const faq = [
  {
    q: 'Y a-t-il des frais cachés ?',
    a: "Non, la commission de 20% couvre l'intégralité de nos services. Aucun abonnement, aucun frais d'entrée.",
  },
  {
    q: 'Quand suis-je payé ?',
    a: 'Vos revenus sont versés chaque mois, avec un reporting détaillé de chaque réservation.',
  },
  {
    q: 'Et si mon bien ne génère pas de revenus ?',
    a: 'Vous ne payez rien. Notre commission ne s\'applique que sur les revenus effectivement générés.',
  },
];

function TarifsPage() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' as ScrollBehavior });
  }, []);

  return (
    <div className="min-h-screen bg-white text-elegant-black">
      <Header />
      <main className="pt-28 sm:pt-32 pb-20">
        <div className="container mx-auto px-4 sm:px-6 max-w-5xl">
          <div className="text-center mb-14">
            <h1 className="font-playfair text-4xl sm:text-5xl md:text-6xl font-bold mb-5">
              Nos tarifs
            </h1>
            <div className="h-px w-16 bg-gray-300 mx-auto mb-5" />
            <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto font-light leading-relaxed">
              Une tarification transparente. Vous ne payez que lorsque votre bien génère des revenus.
            </p>
          </div>

          {/* Pricing card */}
          <div className="max-w-3xl mx-auto">
            <div className="bg-white p-10 md:p-14 shadow-lg border border-gray-100 text-center">
              <div className="mb-6">
                <span className="font-playfair text-7xl md:text-8xl font-bold text-elegant-black">20%</span>
                <p className="text-lg md:text-xl text-gray-700 mt-3">
                  de commission sur les revenus locatifs générés
                </p>
              </div>
              <div className="flex justify-center mb-8">
                <span className="inline-block bg-elegant-black text-white text-sm font-semibold px-4 py-2 rounded-full tracking-wide">
                  Sans engagement
                </span>
              </div>
              <div className="h-px w-16 bg-gray-300 mx-auto mb-8" />
              <ul className="text-left space-y-4 mb-10 max-w-md mx-auto">
                {included.map((s, i) => (
                  <li key={i} className="flex items-start gap-3 text-gray-700">
                    <span className="text-elegant-black font-bold text-lg flex-shrink-0">✓</span>
                    <span>{s}</span>
                  </li>
                ))}
              </ul>
              <Link
                to="/discutons"
                className="inline-flex items-center gap-2 bg-elegant-black text-white px-8 py-4 text-base font-semibold rounded-lg shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 group border border-gray-800"
              >
                <span>Demander une estimation gratuite</span>
                <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
          </div>

          {/* Comparatif */}
          <section className="mt-20">
            <h2 className="font-playfair text-3xl md:text-4xl font-bold text-center mb-10">
              Comparatif
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-gray-50 p-8 border border-gray-200">
                <h3 className="font-playfair text-xl font-bold mb-5 text-elegant-black">Gestion seule</h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex gap-2"><span className="text-gray-400">•</span>Annonces non optimisées</li>
                  <li className="flex gap-2"><span className="text-gray-400">•</span>Tarifs fixes (pas de yield management)</li>
                  <li className="flex gap-2"><span className="text-gray-400">•</span>Gestion des voyageurs par vous-même</li>
                  <li className="flex gap-2"><span className="text-gray-400">•</span>Ménage à organiser</li>
                  <li className="flex gap-2"><span className="text-gray-400">•</span>Pas de suivi des avis</li>
                  <li className="flex gap-2 pt-3 border-t border-gray-200 mt-3 font-semibold text-elegant-black"><span>Revenus estimés : X€/mois</span></li>
                </ul>
              </div>
              <div className="bg-elegant-black text-white p-8 border border-elegant-black">
                <h3 className="font-playfair text-xl font-bold mb-5">Avec L'Intendant</h3>
                <ul className="space-y-3 text-white/85">
                  <li className="flex gap-2"><span className="text-white">✓</span>Annonces pro multi-plateformes</li>
                  <li className="flex gap-2"><span className="text-white">✓</span>Tarification dynamique</li>
                  <li className="flex gap-2"><span className="text-white">✓</span>Accueil 24/7</li>
                  <li className="flex gap-2"><span className="text-white">✓</span>Ménage hôtelier inclus</li>
                  <li className="flex gap-2"><span className="text-white">✓</span>Gestion des avis</li>
                  <li className="flex gap-2 pt-3 border-t border-white/20 mt-3 font-semibold text-white"><span>Revenus estimés : X€/mois (+25%)</span></li>
                </ul>
              </div>
            </div>
          </section>

          {/* FAQ */}
          <section className="mt-20 max-w-3xl mx-auto">
            <h2 className="font-playfair text-3xl md:text-4xl font-bold text-center mb-10">
              Questions fréquentes
            </h2>
            <div className="space-y-5">
              {faq.map((item, i) => (
                <div key={i} className="bg-white p-6 md:p-7 border border-gray-200">
                  <h3 className="font-playfair text-lg font-bold mb-2 text-elegant-black">{item.q}</h3>
                  <p className="text-gray-600 leading-relaxed">{item.a}</p>
                </div>
              ))}
            </div>
          </section>

          <div className="text-center mt-14">
            <Link
              to="/discutons"
              className="inline-flex items-center gap-2 bg-elegant-black text-white px-8 py-4 text-base font-semibold rounded-lg shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 group border border-gray-800"
            >
              <span>Demander une estimation gratuite</span>
              <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </main>
      <Footer />
      <CookieBanner />
    </div>
  );
}

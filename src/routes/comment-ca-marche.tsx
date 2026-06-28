import { createFileRoute, Link } from '@tanstack/react-router';
import { useEffect } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import CookieBanner from '@/components/CookieBanner';

export const Route = createFileRoute('/comment-ca-marche')({
  head: () => ({
    meta: [
      { title: "Comment fonctionne notre conciergerie Airbnb à Toulouse | L'Intendant" },
      {
        name: 'description',
        content:
          "3 étapes simples : échange et estimation, mise en place clé en main, gestion complète. Découvrez comment L'Intendant gère votre location courte durée à Toulouse.",
      },
      { property: 'og:title', content: "Comment ça marche | L'Intendant Toulouse" },
      {
        property: 'og:description',
        content:
          "Trois étapes pour transformer votre logement en source de revenus : échange, mise en place clé en main, gestion complète.",
      },
      { property: 'og:url', content: '/comment-ca-marche' },
    ],
    links: [{ rel: 'canonical', href: '/comment-ca-marche' }],
  }),
  component: CommentCaMarchePage,
});

const steps = [
  {
    num: '01',
    title: 'Échange & estimation',
    text: "Un premier rendez-vous (en visio ou sur place) pour comprendre votre bien, votre situation et vos objectifs. Nous analysons le marché local et vous remettons une estimation de revenus personnalisée, claire et sans engagement.",
    sub: ['Appel découverte', 'Analyse du marché local', 'Estimation de revenus'],
  },
  {
    num: '02',
    title: 'Mise en place clé en main',
    text: "Shooting photo professionnel, home-staging léger si nécessaire, création ou reprise de vos annonces, mise en place de la tarification dynamique, équipement voyageurs (linge, produits d'accueil). Vous n'avez rien à faire.",
    sub: ['Shooting photo', 'Création des annonces', 'Configuration tarification', 'Équipement du logement'],
  },
  {
    num: '03',
    title: 'On gère, vous percevez',
    text: "Nous prenons tout en charge au quotidien : réservations, accueil, ménage, communication, maintenance. Vous suivez vos revenus depuis votre espace et percevez vos versements chaque mois en toute sérénité.",
    sub: ['Gestion quotidienne', 'Reporting mensuel', 'Versement des revenus'],
  },
];

function CommentCaMarchePage() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' as ScrollBehavior });
  }, []);

  return (
    <div className="min-h-screen bg-white text-elegant-black">
      <Header />
      <main className="pt-28 sm:pt-32 pb-20">
        <div className="container mx-auto px-4 sm:px-6 max-w-4xl">
          <div className="text-center mb-14">
            <h1 className="font-playfair text-4xl sm:text-5xl md:text-6xl font-bold mb-5">
              Comment ça marche
            </h1>
            <div className="h-px w-16 bg-gray-300 mx-auto mb-5" />
            <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto font-light leading-relaxed">
              Trois étapes suffisent pour transformer votre logement en source de revenus sereine.
            </p>
          </div>

          <div className="space-y-8">
            {steps.map((s) => (
              <article
                key={s.num}
                className="bg-white p-8 md:p-10 border border-gray-200 hover:shadow-lg transition-all duration-300"
              >
                <div className="flex items-start gap-6">
                  <div className="font-playfair text-5xl md:text-6xl font-bold text-gray-300 leading-none flex-shrink-0">
                    {s.num}
                  </div>
                  <div className="flex-1">
                    <h2 className="font-playfair text-2xl md:text-3xl font-bold mb-3 text-elegant-black">
                      {s.title}
                    </h2>
                    <p className="text-gray-600 leading-relaxed mb-5">{s.text}</p>
                    <ul className="flex flex-wrap gap-2">
                      {s.sub.map((item, i) => (
                        <li
                          key={i}
                          className="inline-flex items-center bg-gray-50 border border-gray-200 px-3 py-1.5 text-xs sm:text-sm text-gray-700"
                        >
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </article>
            ))}
          </div>

          <div className="text-center mt-14">
            <Link
              to="/discutons"
              className="inline-flex items-center gap-2 bg-elegant-black text-white px-8 py-4 text-base font-semibold rounded-lg shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 group border border-gray-800"
            >
              <span>Commencer par une estimation gratuite</span>
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

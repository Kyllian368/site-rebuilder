import { createFileRoute, Link } from '@tanstack/react-router';
import { useEffect } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import CookieBanner from '@/components/CookieBanner';
import { ASSETS } from '@/lib/intendant-assets';

export const Route = createFileRoute('/services')({
  head: () => ({
    meta: [
      { title: "Services de conciergerie Airbnb à Toulouse | L'Intendant" },
      {
        name: 'description',
        content:
          "Création d'annonces, tarification dynamique, accueil voyageurs, ménage hôtelier, suivi administratif. Découvrez tous les services de conciergerie L'Intendant à Toulouse.",
      },
      { property: 'og:title', content: "Services de conciergerie Airbnb à Toulouse | L'Intendant" },
      {
        property: 'og:description',
        content:
          "Création d'annonces, tarification dynamique, accueil voyageurs, ménage hôtelier, suivi administratif à Toulouse.",
      },
      { property: 'og:url', content: '/services' },
    ],
    links: [{ rel: 'canonical', href: '/services' }],
  }),
  component: ServicesPage,
});

const services = [
  {
    title: "Création & optimisation d'annonces",
    text: "Nous créons ou reprenons vos annonces sur toutes les plateformes (Airbnb, Booking, Abritel, Expedia). Photos professionnelles, descriptions optimisées pour le référencement, mise en valeur de votre bien pour maximiser les réservations.",
  },
  {
    title: "Tarification dynamique (yield management)",
    text: "Nos outils ajustent vos tarifs quotidiennement selon la saisonnalité, les événements locaux (Fête de la Violette, match du Stade Toulousain, Toulouse Tech Week) et la concurrence. Résultat : un taux d'occupation optimisé et des revenus maximisés.",
  },
  {
    title: "Accueil voyageurs 24/7",
    text: "Check-in et check-out gérés 7j/7, remise des clés en personne ou via boîte à clés sécurisée, état des lieux systématique. Vos voyageurs sont accueillis avec professionnalisme à toute heure.",
  },
  {
    title: "Ménage hôtelier & linge",
    text: "Protocole de ménage de niveau hôtelier après chaque départ. Linge de maison et serviettes fournis, lavés et repassés. Contrôle qualité avant chaque arrivée pour garantir une expérience 5 étoiles.",
  },
  {
    title: "Communication voyageurs",
    text: "Réponses en moins d'une heure, avant, pendant et après le séjour. Gestion des imprévus, assistance multilingue, suivi des avis pour maintenir une note d'excellence sur toutes les plateformes.",
  },
  {
    title: "Shooting photo & vidéo professionnel",
    text: "Nous faisons appel à des photographes et vidéastes professionnels pour sublimer votre bien. Photos HDR haute qualité, vidéo de présentation, visite virtuelle : chaque visuel est pensé pour déclencher la réservation. Un bien avec des photos professionnelles génère en moyenne 40% de réservations en plus.",
  },
  {
    title: "Home staging & conseil déco",
    text: "Nous vous conseillons sur l'aménagement et la décoration de votre bien pour maximiser son attractivité auprès des voyageurs. Du choix du linge de lit au positionnement du mobilier, chaque détail est pensé pour une expérience 5 étoiles et des avis qui boostent vos réservations.",
  },
  {
    title: "Suivi administratif & maintenance",
    text: "Gestion des paiements, résolution des litiges, déclaration de la taxe de séjour, coordination des réparations avec des prestataires qualifiés. Reporting mensuel détaillé de vos revenus.",
  },
];

function ServicesPage() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' as ScrollBehavior });
  }, []);

  return (
    <div className="min-h-screen bg-white text-elegant-black">
      <Header />
      <main className="pb-20">
        <section className="relative overflow-hidden h-[50vh] flex items-center justify-center mt-20">
          <img
            src={ASSETS.pontNeufHd}
            alt=""
            aria-hidden="true"
            className="absolute inset-0 w-full h-full object-cover grayscale"
            loading="eager"
            decoding="async"
          />
          <div className="absolute inset-0 bg-black/50" />
          <div className="relative z-10 text-center px-4 max-w-3xl mx-auto text-white">
            <h1 className="font-playfair text-4xl sm:text-5xl md:text-6xl font-bold mb-5">
              Nos services
            </h1>
            <div className="h-px w-16 bg-white/60 mx-auto mb-5" />
            <p className="text-base sm:text-lg font-light leading-relaxed">
              Une prise en charge complète de votre location courte durée, du premier contact
              voyageur au reporting mensuel.
            </p>
          </div>
        </section>

        <div className="container mx-auto px-4 sm:px-6 max-w-5xl pt-16">
          <div className="border-b border-gray-200">
            {services.map((s, i) => (
              <>
                <article
                  key={i}
                  className="grid md:grid-cols-12 gap-6 md:gap-10 py-8 md:py-10 border-t border-gray-200"
                >
                  <div className="md:col-span-5">
                    <p className="text-xs uppercase tracking-[0.25em] text-gray-500 mb-3 font-medium">
                      {String(i + 1).padStart(2, '0')}
                    </p>
                    <h2 className="font-playfair text-2xl md:text-3xl font-semibold text-elegant-black leading-tight">
                      {s.title}
                    </h2>
                  </div>
                  <div className="md:col-span-7">
                    <p className="text-gray-600 leading-relaxed">{s.text}</p>
                  </div>
                </article>
                {i === 3 && (
                  <div key="break" className="py-8 md:py-10 border-t border-gray-200">
                    <img
                      src={ASSETS.saintSerninHd}
                      alt="Basilique Saint-Sernin, Toulouse"
                      className="w-full h-[200px] md:h-[260px] object-cover grayscale rounded-sm"
                      loading="lazy"
                      decoding="async"
                    />
                  </div>
                )}
              </>
            ))}
          </div>

          <div className="text-center mt-16">
            <Link
              to="/discutons"
              className="inline-flex items-center gap-2 bg-elegant-black text-white px-8 py-4 text-base font-semibold rounded-lg shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 group border border-gray-800"
            >
              <span>Discutons de votre projet</span>
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

import { createFileRoute, Link } from '@tanstack/react-router';
import React, { useEffect } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import CookieBanner from '@/components/CookieBanner';
import { ASSETS } from '@/lib/intendant-assets';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const faq = [
  {
    q: 'Je suis déjà sur Airbnb, pouvez-vous reprendre la gestion ?',
    a: "Oui. Nous reprenons votre annonce existante, conservons votre historique et vos avis, puis optimisons le tout. La transition est transparente et sans interruption de vos réservations.",
  },
  {
    q: 'Comment gérez-vous le ménage et le linge ?',
    a: "Une équipe dédiée applique un protocole de niveau hôtelier après chaque départ. Le linge de maison et les serviettes sont fournis, lavés et repassés. Un contrôle qualité est réalisé avant chaque arrivée.",
  },
];

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
    scripts: [
      {
        type: 'application/ld+json',
        children: JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'FAQPage',
          mainEntity: faq.map((item) => ({
            '@type': 'Question',
            name: item.q,
            acceptedAnswer: { '@type': 'Answer', text: item.a },
          })),
        }),
      },
    ],
  }),
  component: ServicesPage,
});

const services = [
  {
    title: "Création & optimisation d'annonces",
    text: "Nous créons ou reprenons vos annonces sur toutes les plateformes (Airbnb, Booking, Abritel, Expedia). Photos professionnelles, descriptions optimisées pour le référencement, mise en valeur de votre bien pour maximiser les réservations.",
    img: ASSETS.serviceBureau,
  },
  {
    title: "Tarification dynamique",
    text: "Nos outils ajustent vos tarifs quotidiennement selon la saisonnalité, les événements locaux (Fête de la Violette, match du Stade Toulousain, Toulouse Tech Week) et la concurrence. Résultat : un taux d'occupation optimisé et des revenus maximisés.",
    img: ASSETS.interieurSalon2,
  },
  {
    title: "Accueil voyageurs 24/7",
    text: "Check-in et check-out gérés 7j/7, remise des clés en personne ou via boîte à clés sécurisée, état des lieux systématique. Vos voyageurs sont accueillis avec professionnalisme à toute heure.",
    img: ASSETS.serviceCles,
  },
  {
    title: "Ménage hôtelier & linge",
    text: "Protocole de ménage de niveau hôtelier après chaque départ. Linge de maison et serviettes fournis, lavés et repassés. Contrôle qualité avant chaque arrivée pour garantir une expérience 5 étoiles.",
    img: ASSETS.serviceLinge,
  },
  {
    title: "Communication voyageurs",
    text: "Réponses en moins d'une heure, avant, pendant et après le séjour. Gestion des imprévus, assistance multilingue, suivi des avis pour maintenir une note d'excellence sur toutes les plateformes.",
    img: ASSETS.interieurSalon1,
  },
  {
    title: "Photos au rendu professionnel",
    text: "Des visuels soignés, pensés pour donner envie de réserver : cadrage, lumière et mise en scène qui subliment votre bien et le font ressortir parmi les annonces. Un logement mis en valeur, c'est directement plus de clics — et plus de réservations.",
    img: ASSETS.interieurChambre1,
  },
  {
    title: "Home staging & conseil déco",
    text: "Nous vous conseillons sur l'aménagement et la décoration de votre bien pour maximiser son attractivité auprès des voyageurs. Du choix du linge de lit au positionnement du mobilier, chaque détail est pensé pour une expérience 5 étoiles et des avis qui boostent vos réservations.",
    img: ASSETS.serviceDeco,
  },
  {
    title: "Suivi administratif & maintenance",
    text: "Gestion des paiements, résolution des litiges, déclaration de la taxe de séjour, coordination des réparations avec des prestataires qualifiés. Reporting mensuel détaillé de vos revenus.",
    img: ASSETS.serviceCuisine,
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
          {services.map((s, i) => (
            <div
              key={i}
              className="grid lg:grid-cols-2 gap-8 lg:gap-14 items-center py-12 md:py-16 border-t border-gray-100 first:border-t-0 first:pt-0"
            >
              <div className={i % 2 === 1 ? 'lg:order-2' : ''}>
                <img
                  src={s.img}
                  alt={s.title}
                  className="w-full h-64 md:h-80 object-cover grayscale rounded-sm shadow-md"
                  loading="lazy"
                  decoding="async"
                />
              </div>
              <div className={i % 2 === 1 ? 'lg:order-1' : ''}>
                <p className="text-xs uppercase tracking-[0.25em] text-gray-500 mb-3 font-medium">
                  {String(i + 1).padStart(2, '0')}
                </p>
                <h2 className="font-playfair text-2xl md:text-3xl font-semibold text-elegant-black mb-4">
                  {s.title}
                </h2>
                <p className="text-gray-600 leading-relaxed">{s.text}</p>
              </div>
            </div>
          ))}

          {/* FAQ */}
          <section className="mt-20 max-w-3xl mx-auto">
            <h2 className="font-playfair text-3xl md:text-4xl font-bold text-center mb-10">
              Questions fréquentes
            </h2>
            <Accordion type="single" collapsible className="space-y-3">
              {faq.map((item, i) => (
                <AccordionItem key={i} value={`item-${i}`} className="bg-white border border-gray-200 px-5">
                  <AccordionTrigger className="font-playfair text-lg font-bold text-elegant-black text-left">
                    {item.q}
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-600 leading-relaxed">
                    {item.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </section>

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

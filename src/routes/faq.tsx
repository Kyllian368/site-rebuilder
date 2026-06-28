import { createFileRoute, Link } from '@tanstack/react-router';
import { useEffect } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import CookieBanner from '@/components/CookieBanner';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const faqItems = [
  {
    q: 'Quelle est votre commission ?',
    a: "Nous fonctionnons avec une commission de 20% sur les revenus locatifs générés, sans frais cachés ni abonnement. Vous ne payez que lorsque votre bien génère des revenus, et nos optimisations couvrent généralement bien plus que notre commission — en moyenne, nos propriétaires gagnent +25% par rapport à une gestion en autonomie.",
  },
  {
    q: 'Vais-je garder le contrôle de mon logement ?',
    a: "Totalement. Vous fixez vos périodes de blocage, vos règles et pouvez occuper votre bien quand vous le souhaitez. Vous disposez d'un suivi avec vos réservations, revenus et calendrier en temps réel.",
  },
  {
    q: 'Et si mon logement est dégradé ?',
    a: "Chaque réservation est couverte par les garanties des plateformes (jusqu'à 800 000€ sur Airbnb), un dépôt de garantie et notre processus de vérification des voyageurs. Nous réalisons un état des lieux entre chaque séjour.",
  },
  {
    q: 'Je suis déjà sur Airbnb, pouvez-vous reprendre la gestion ?',
    a: "Oui. Nous reprenons votre annonce existante, conservons votre historique et vos avis, puis optimisons le tout. La transition est transparente et sans interruption de vos réservations.",
  },
  {
    q: 'Quel niveau de revenus puis-je espérer ?',
    a: "Cela dépend de votre bien et de sa localisation. À Toulouse, un appartement bien situé peut générer jusqu'à 3 fois les revenus d'une location classique. Lors de notre premier échange, nous vous remettons une estimation personnalisée basée sur nos données locales.",
  },
  {
    q: "Y a-t-il une durée d'engagement ?",
    a: "Non. Nous privilégions une relation de confiance, sans engagement de longue durée imposé. Les conditions précises vous sont présentées en toute transparence lors du rendez-vous.",
  },
  {
    q: 'Comment gérez-vous le ménage et le linge ?',
    a: "Une équipe dédiée applique un protocole de niveau hôtelier après chaque départ. Le linge de maison et les serviettes sont fournis, lavés et repassés. Un contrôle qualité est réalisé avant chaque arrivée.",
  },
];

export const Route = createFileRoute('/faq')({
  head: () => ({
    meta: [
      { title: "FAQ — Questions sur la conciergerie Airbnb à Toulouse | L'Intendant" },
      {
        name: 'description',
        content:
          "Commission, contrôle de votre bien, dégradations, engagement, revenus, ménage… Toutes les réponses aux questions des propriétaires toulousains.",
      },
      { property: 'og:title', content: "FAQ — Conciergerie Airbnb Toulouse | L'Intendant" },
      {
        property: 'og:description',
        content:
          "Réponses aux questions des propriétaires : commission, contrôle, dégradations, engagement, revenus, ménage.",
      },
      { property: 'og:url', content: '/faq' },
    ],
    links: [{ rel: 'canonical', href: '/faq' }],
    scripts: [
      {
        type: 'application/ld+json',
        children: JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'FAQPage',
          mainEntity: faqItems.map((item) => ({
            '@type': 'Question',
            name: item.q,
            acceptedAnswer: {
              '@type': 'Answer',
              text: item.a,
            },
          })),
        }),
      },
    ],
  }),
  component: FaqPage,
});

function FaqPage() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' as ScrollBehavior });
  }, []);

  return (
    <div className="min-h-screen bg-white text-elegant-black">
      <Header />
      <main className="pt-28 sm:pt-32 pb-20">
        <div className="container mx-auto px-4 sm:px-6 max-w-3xl">
          <div className="text-center mb-14">
            <h1 className="font-playfair text-4xl sm:text-5xl md:text-6xl font-bold mb-5">
              Questions fréquentes
            </h1>
            <div className="h-px w-16 bg-gray-300 mx-auto mb-5" />
            <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto font-light leading-relaxed">
              Tout ce que vous devez savoir avant de nous confier votre bien.
            </p>
          </div>

          <Accordion type="single" collapsible className="w-full">
            {faqItems.map((item, i) => (
              <AccordionItem key={i} value={`item-${i}`} className="border-b border-gray-200">
                <AccordionTrigger className="font-playfair text-lg md:text-xl font-semibold text-elegant-black py-5 hover:no-underline text-left">
                  {item.q}
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 leading-relaxed text-base pb-5">
                  {item.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

          <div className="text-center mt-14">
            <Link
              to="/discutons"
              className="inline-flex items-center gap-2 bg-elegant-black text-white px-8 py-4 text-base font-semibold rounded-lg shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 group border border-gray-800"
            >
              <span>Une question sans réponse ? Parlons-en</span>
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

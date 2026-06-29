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
import heroVideo from '@/assets/toulouse-hero-3.mp4.asset.json';

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

const steps = [
  {
    n: '01',
    title: 'Échange & estimation',
    text: "Premier rendez-vous pour comprendre votre bien, vos objectifs et vos contraintes. Estimation personnalisée des revenus potentiels selon votre quartier et la saisonnalité.",
  },
  {
    n: '02',
    title: 'Mise en place clé en main',
    text: "Shooting photo professionnel, rédaction et publication des annonces, paramétrage de la tarification dynamique, équipement du bien (linge, accessoires, boîte à clés).",
  },
  {
    n: '03',
    title: 'On gère, vous percevez',
    text: "Gestion quotidienne des voyageurs, du ménage et de la maintenance. Reporting mensuel détaillé et versement de vos revenus chaque mois.",
  },
];

const compareLeft = [
  'Annonces basiques',
  'Tarifs fixes toute l\'année',
  'Vous gérez les voyageurs',
  'Ménage à organiser vous-même',
  'Aucun suivi des avis',
  'Revenus non optimisés',
];

const compareRight = [
  'Annonces optimisées multi-plateformes',
  'Tarification dynamique quotidienne',
  'Accueil 24/7 par notre équipe',
  'Ménage hôtelier inclus',
  'Gestion des avis et note d\'excellence',
  '+25% de revenus en moyenne',
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
    a: "Vous ne payez rien. Notre commission ne s'applique que sur les revenus effectivement générés.",
  },
];

function CtaButton({ label }: { label: string }) {
  return (
    <Link
      to="/discutons"
      className="inline-flex items-center gap-2 bg-elegant-black text-white px-8 py-4 text-base font-semibold rounded-lg shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 group border border-gray-800"
    >
      <span>{label}</span>
      <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
      </svg>
    </Link>
  );
}

function TarifsPage() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' as ScrollBehavior });
  }, []);

  return (
    <div className="min-h-screen bg-white text-elegant-black">
      <Header />
      <main className="pb-20">
        {/* Hero vidéo */}
        <section className="relative overflow-hidden h-[50vh] flex items-center justify-center mt-20">
          <video
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            controls={false}
            src={heroVideo.url}
            className="absolute inset-0 w-full h-full object-cover opacity-60"
            style={{ filter: 'grayscale(1)' }}
          />
          <div className="absolute inset-0 bg-black/50" />
          <div className="relative z-10 text-center px-4 max-w-3xl mx-auto text-white">
            <h1 className="font-playfair text-4xl sm:text-5xl md:text-6xl font-bold mb-5">
              Nos tarifs
            </h1>
            <div className="h-px w-16 bg-white/60 mx-auto mb-5" />
            <p className="text-base sm:text-lg font-light leading-relaxed">
              Une tarification transparente. Vous ne payez que lorsque votre bien génère des revenus.
            </p>
          </div>
        </section>

        {/* CTA immédiat */}
        <section className="bg-elegant-gray border-b border-gray-200">
          <div className="container mx-auto px-4 sm:px-6 max-w-3xl py-10 text-center">
            <h2 className="font-playfair text-2xl sm:text-3xl font-bold mb-5 text-elegant-black">
              Obtenez votre estimation gratuite en 48h
            </h2>
            <CtaButton label="Discutons de votre projet" />
          </div>
        </section>

        <div className="container mx-auto px-4 sm:px-6 max-w-5xl pt-16">
          {/* Carte tarif */}
          <div className="max-w-3xl mx-auto">
            <div className="bg-white p-10 md:p-14 shadow-lg border border-gray-100 text-center">
              <div className="mb-6">
                <span className="font-playfair text-7xl md:text-8xl font-bold text-elegant-black">20%</span>
                <p className="text-lg md:text-xl text-gray-700 mt-3">
                  de commission sur les revenus locatifs générés
                </p>
              </div>
              <div className="flex flex-wrap justify-center gap-3 mb-8">
                <span className="inline-block bg-elegant-black text-white text-sm font-semibold px-4 py-2 rounded-full tracking-wide">
                  Sans engagement
                </span>
                <span className="inline-block bg-elegant-black text-white text-sm font-semibold px-4 py-2 rounded-full tracking-wide">
                  Aucun frais caché
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
              <CtaButton label="Demander une estimation gratuite" />
            </div>
          </div>

          {/* Comment ça marche */}
          <section className="mt-20">
            <h2 className="font-playfair text-3xl md:text-4xl font-bold text-center mb-12">
              Comment ça marche
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              {steps.map((s) => (
                <div key={s.n} className="bg-white p-7 md:p-8 border border-gray-200">
                  <p className="font-playfair text-4xl font-bold text-elegant-black/20 mb-3">{s.n}</p>
                  <h3 className="font-playfair text-xl font-bold mb-3 text-elegant-black">{s.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{s.text}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Comparatif */}
          <section className="mt-20">
            <h2 className="font-playfair text-3xl md:text-4xl font-bold text-center mb-12">
              Comparatif
            </h2>
            <div className="grid md:grid-cols-2 gap-6 items-stretch">
              <div className="bg-gray-50 p-8 border border-gray-200 opacity-90">
                <h3 className="font-playfair text-xl font-bold mb-5 text-gray-600">Gestion seule</h3>
                <ul className="space-y-3 text-gray-500">
                  {compareLeft.map((t, i) => (
                    <li key={i} className="flex gap-2"><span className="text-gray-400">•</span>{t}</li>
                  ))}
                </ul>
              </div>
              <div className="relative bg-elegant-black text-white p-8 border-2 border-amber-400 shadow-xl">
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-amber-400 text-elegant-black text-xs font-bold px-3 py-1 rounded-full tracking-wider uppercase">
                  Recommandé
                </span>
                <h3 className="font-playfair text-xl font-bold mb-5 text-amber-400">Avec L'Intendant</h3>
                <ul className="space-y-3 text-white/90">
                  {compareRight.map((t, i) => (
                    <li key={i} className="flex gap-2"><span className="text-amber-400">✓</span>{t}</li>
                  ))}
                </ul>
              </div>
            </div>
          </section>

          {/* FAQ accordéon */}
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

          {/* CTA final */}
          <section className="mt-20 text-center bg-elegant-gray p-10 md:p-14 border border-gray-200">
            <h2 className="font-playfair text-3xl md:text-4xl font-bold mb-6 text-elegant-black">
              Prêt à maximiser vos revenus ?
            </h2>
            <CtaButton label="Discutons de votre projet" />
          </section>
        </div>
      </main>
      <Footer />
      <CookieBanner />
    </div>
  );
}

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
import { ASSETS } from '@/lib/intendant-assets';
import { useInView } from '@/hooks/useCountUp';

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
  component: TarifsPage,
});

const included = [
  'Création et optimisation de vos annonces',
  'Photos au rendu professionnel',
  'Optimisation dynamique des prix',
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
    text: "Des photos au rendu professionnel, rédaction et publication des annonces, paramétrage de l'optimisation dynamique des prix, équipement du bien (linge, accessoires, boîte à clés).",
  },
  {
    n: '03',
    title: 'On gère, vous percevez',
    text: "Gestion quotidienne des voyageurs, du ménage et de la maintenance. Reporting mensuel détaillé et versement de vos revenus chaque mois.",
  },
];

const partielIncluded = [
  'Création & optimisation de votre annonce (Airbnb, Booking…)',
  'Optimisation dynamique des prix',
  'Gestion du calendrier & des réservations',
  'Reporting mensuel détaillé',
];

const completeIncluded = [
  'Tout ce qui est inclus dans la Gestion partielle',
  'Accueil des voyageurs 7j/7',
  'Ménage hôtelier & linge fourni',
  'Communication voyageurs 24/7',
  'Maintenance & gestion des imprévus',
  'Photos au rendu professionnel',
];

const surMesureIncluded = [
  'Gestion des voyageurs uniquement',
  'Ménage & linge',
  'Check-in / Check-out',
  'Maintenance ponctuelle',
  'Shooting photo',
  'Optimisation de votre annonce',
  'Prestations à la carte',
];

const resultats = [
  { value: '×3', label: 'Revenus potentiels vs location classique à l\'année' },
  { value: '+25%', label: 'De revenus vs une gestion en autonomie' },
  { value: '90%', label: 'Taux d\'occupation moyen par bien' },
  { value: '4,82/5', label: 'Note moyenne voyageurs' },
];

const faq = [
  {
    q: 'Quelle est votre commission ?',
    a: "Nous fonctionnons avec une commission de 20% sur les revenus locatifs générés, sans frais cachés ni abonnement. Vous ne payez que lorsque votre bien génère des revenus, et nos optimisations couvrent généralement bien plus que notre commission — en moyenne, nos propriétaires gagnent +25% par rapport à une gestion en autonomie.",
  },
  {
    q: 'Y a-t-il des frais cachés ?',
    a: "Non, la commission couvre l'intégralité des services de la formule choisie. Aucun abonnement, aucun frais d'entrée.",
  },
  {
    q: 'Quand suis-je payé ?',
    a: 'Vos revenus sont versés chaque mois, avec un reporting détaillé de chaque réservation.',
  },
  {
    q: 'Et si mon bien ne génère pas de revenus ?',
    a: "Vous ne payez rien. Notre commission ne s'applique que sur les revenus effectivement générés.",
  },
  {
    q: 'Quel niveau de revenus puis-je espérer ?',
    a: "Cela dépend de votre bien et de sa localisation. À Toulouse, un appartement bien situé peut générer jusqu'à 3 fois les revenus d'une location classique. Lors de notre premier échange, nous vous remettons une estimation personnalisée basée sur nos données locales.",
  },
];

function CtaButton({ label, variant = 'dark' }: { label: string; variant?: 'dark' | 'outline' }) {
  const classes =
    variant === 'dark'
      ? 'bg-elegant-black text-white border border-gray-800 hover:shadow-xl'
      : 'bg-white text-elegant-black border border-elegant-black hover:bg-elegant-black hover:text-white';
  return (
    <Link
      to="/discutons"
      className={`inline-flex items-center gap-2 ${classes} px-8 py-4 text-base font-semibold rounded-lg shadow-md hover:scale-105 transition-all duration-300 group`}
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

  const { ref: pricingRef, inView: pricingInView } = useInView<HTMLDivElement>(0.2);

  return (
    <div className="min-h-screen bg-white text-elegant-black">
      <Header />
      <main className="pb-20">
        {/* Hero photo */}
        <section className="relative overflow-hidden h-[50vh] flex items-center justify-center mt-20">
          <img
            src={ASSETS.interieurSalon2}
            alt=""
            aria-hidden="true"
            className="absolute inset-0 w-full h-full object-cover grayscale"
            loading="eager"
            decoding="async"
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

        <div className="container mx-auto px-4 sm:px-6 max-w-6xl pt-16">
          {/* Trois offres */}
          <div ref={pricingRef} className="grid md:grid-cols-3 gap-6 md:gap-8 items-stretch">
            {/* Offre A - Gestion partielle */}
            <div className="bg-white p-8 md:p-10 border border-gray-200 flex flex-col text-center">
              <p className="text-xs uppercase tracking-[0.25em] text-gray-500 font-semibold mb-3">
                Gestion partielle
              </p>
              <div
                className="mb-4 transition-all duration-700"
                style={{ opacity: pricingInView ? 1 : 0, transform: pricingInView ? 'translateY(0)' : 'translateY(12px)', transitionDelay: '0ms' }}
              >
                <span className="font-playfair text-6xl md:text-7xl font-bold text-elegant-black tabular-nums">10%</span>
                <p className="text-sm md:text-base text-gray-600 mt-2">
                  de commission sur les revenus générés
                </p>
              </div>
              <p className="text-gray-600 mb-5 leading-relaxed">
                Vous gardez l'accueil et le ménage, on optimise toute la partie en ligne.
              </p>
              <div className="flex justify-center mb-6">
                <span className="inline-block border border-gray-300 text-gray-700 text-xs font-semibold px-3 py-1 rounded-full tracking-wide">
                  Sans engagement
                </span>
              </div>
              <div className="h-px w-12 bg-gray-200 mx-auto mb-6" />
              <ul className="text-left space-y-3 mb-8 flex-1">
                {partielIncluded.map((s, i) => (
                  <li key={i} className="flex items-start gap-3 text-gray-700">
                    <span className="text-elegant-black font-bold flex-shrink-0">✓</span>
                    <span>{s}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-auto">
                <CtaButton label="Obtenir mon estimation gratuite" variant="outline" />
              </div>
            </div>

            {/* Offre B - Gestion complète */}
            <div className="relative bg-white p-8 md:p-10 border-2 border-elegant-black shadow-lg flex flex-col text-center">
              <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-elegant-black text-white text-xs font-bold px-3 py-1 rounded-full tracking-wider uppercase">
                Recommandé
              </span>
              <p className="text-xs uppercase tracking-[0.25em] text-gray-500 font-semibold mb-3">
                Gestion complète
              </p>
              <div className="mb-4">
                <span className="font-playfair text-6xl md:text-7xl font-bold text-elegant-black tabular-nums">{complete.formatted}%</span>
                <p className="text-sm md:text-base text-gray-600 mt-2">
                  de commission sur les revenus générés
                </p>
              </div>
              <p className="text-gray-600 mb-5 leading-relaxed">
                On s'occupe de tout, de A à Z. Vous n'avez plus rien à gérer.
              </p>
              <div className="flex flex-wrap justify-center gap-2 mb-6">
                <span className="inline-block bg-elegant-black text-white text-xs font-semibold px-3 py-1 rounded-full tracking-wide">
                  Sans engagement
                </span>
              </div>
              <div className="h-px w-12 bg-gray-200 mx-auto mb-6" />
              <ul className="text-left space-y-3 mb-8 flex-1">
                {completeIncluded.map((s, i) => (
                  <li key={i} className="flex items-start gap-3 text-gray-700">
                    <span className="text-elegant-black font-bold flex-shrink-0">✓</span>
                    <span>{s}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-auto">
                <CtaButton label="Obtenir mon estimation gratuite" />
              </div>
            </div>

            {/* Offre C - Gestion sur mesure */}
            <div className="bg-white p-8 md:p-10 border border-gray-200 flex flex-col text-center">
              <p className="text-xs uppercase tracking-[0.25em] text-gray-500 font-semibold mb-3">
                Gestion sur mesure
              </p>
              <div
                className="mb-4 transition-opacity duration-700"
                style={{ opacity: pricingInView ? 1 : 0 }}
              >
                <span className="font-playfair text-5xl md:text-6xl font-bold text-elegant-black">Sur mesure</span>
                <p className="text-sm md:text-base text-gray-600 mt-2">
                  À partir de vos besoins
                </p>
              </div>
              <p className="text-gray-600 mb-5 leading-relaxed">
                Vous souhaitez uniquement le ménage, les check-in, la gestion des voyageurs, ou une combinaison de plusieurs services ? Nous construisons une offre adaptée à votre logement et à votre organisation.
              </p>
              <div className="flex justify-center mb-6">
                <span className="inline-block border border-gray-300 text-gray-700 text-xs font-semibold px-3 py-1 rounded-full tracking-wide">
                  Sans engagement
                </span>
              </div>
              <div className="h-px w-12 bg-gray-200 mx-auto mb-6" />
              <ul className="text-left space-y-3 mb-8 flex-1">
                {surMesureIncluded.map((s, i) => (
                  <li key={i} className="flex items-start gap-3 text-gray-700">
                    <span className="text-elegant-black font-bold flex-shrink-0">✓</span>
                    <span>{s}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-auto">
                <CtaButton label="Discutons de votre projet" variant="outline" />
              </div>
            </div>
          </div>




          {/* Détail des services inclus (garde pour référence globale) */}
          <p className="text-center text-sm text-gray-500 mt-10">
            Tous nos services : {included.join(' · ')}.
          </p>


          {/* Comment ça marche */}
          <section className="mt-20">
            <h2 className="font-playfair text-3xl md:text-4xl font-bold text-center mb-12">
              Comment ça marche
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              {steps.map((s) => (
              <div key={s.n} className="group p-6 border border-transparent hover:border-[#941101] transition-colors duration-300">
                  <div className="font-playfair text-6xl md:text-7xl font-normal text-elegant-black group-hover:text-[#941101] group-hover:-translate-x-1 transition-all duration-300 mb-4 leading-none">{s.n}</div>
                  <div className="h-px w-12 bg-gray-300 mb-5" />
                  <h3 className="font-playfair text-xl font-semibold text-elegant-black mb-3">{s.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{s.text}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Résultats chiffrés */}
          <section className="mt-20">
            <h2 className="font-playfair text-3xl md:text-4xl font-bold text-center mb-4">
              Ce que ça change pour vous
            </h2>
            <p className="text-center text-gray-600 max-w-2xl mx-auto mb-12">
              Des résultats concrets, mesurés sur les biens que nous gérons au quotidien.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 border-t border-b border-gray-200">
              {resultats.map((r, i) => (
                <div
                  key={i}
                  className={`text-center py-8 md:py-10 px-4 ${
                    i > 0 ? 'md:border-l border-gray-200' : ''
                  } ${i === 1 || i === 3 ? 'border-l border-gray-200' : ''} ${
                    i >= 2 ? 'border-t md:border-t-0 border-gray-200' : ''
                  }`}
                >
                  <p className="font-playfair text-5xl md:text-6xl font-bold text-elegant-black mb-3">
                    {r.value}
                  </p>
                  <p className="text-xs md:text-sm text-gray-500 uppercase tracking-wider leading-relaxed">
                    {r.label}
                  </p>
                </div>
              ))}
            </div>
          </section>

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

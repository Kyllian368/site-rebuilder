import { createFileRoute, Link } from '@tanstack/react-router';
import { useEffect } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import CookieBanner from '@/components/CookieBanner';
import { ASSETS } from '@/lib/intendant-assets';
import { ArrowRight } from 'lucide-react';

export const Route = createFileRoute('/qui-sommes-nous')({
  head: () => ({
    meta: [
      { title: "Qui sommes-nous — Conciergerie L'Intendant à Toulouse" },
      {
        name: 'description',
        content:
          "Découvrez L'Intendant, conciergerie toulousaine à taille humaine. Une équipe locale, un interlocuteur unique et un réseau de partenaires pour valoriser votre bien.",
      },
      { property: 'og:title', content: "Qui sommes-nous — L'Intendant Toulouse" },
      {
        property: 'og:description',
        content: "Une conciergerie toulousaine, à taille humaine. Rencontrez l'équipe qui gère votre bien comme si c'était le sien.",
      },
      { property: 'og:url', content: '/qui-sommes-nous' },
    ],
    links: [{ rel: 'canonical', href: '/qui-sommes-nous' }],
  }),
  component: QuiSommesNousPage,
});

function QuiSommesNousPage() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' as ScrollBehavior });
  }, []);

  return (
    <div className="min-h-screen bg-white text-elegant-black">
      <Header />
      <main className="pb-20">
        {/* Hero */}
        <section className="relative overflow-hidden h-[55vh] flex items-center justify-center mt-20">
          <img
            src={ASSETS.interieurSalon1}
            alt=""
            aria-hidden="true"
            className="absolute inset-0 w-full h-full object-cover grayscale"
            loading="eager"
            decoding="async"
          />
          <div className="absolute inset-0 bg-black/50" />
          <div className="relative z-10 text-center px-4 max-w-3xl mx-auto text-white">
            <h1 className="font-playfair text-4xl sm:text-5xl md:text-6xl font-bold mb-5">
              Qui sommes-nous
            </h1>
            <div className="h-px w-16 bg-white/60 mx-auto mb-5" />
            <p className="text-base sm:text-lg font-light leading-relaxed">
              Une conciergerie toulousaine, à taille humaine.
            </p>
          </div>
        </section>

        {/* Section Récit */}
        <section className="py-20 md:py-24 bg-white">
          <div className="container mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-12 items-start">
              <div className="lg:sticky lg:top-28">
                <img
                  src={ASSETS.capitoleHd}
                  alt="Le Capitole de Toulouse, ville d'origine de la conciergerie L'Intendant"
                  className="w-full h-auto rounded-sm shadow-lg grayscale"
                  loading="lazy"
                  decoding="async"
                />
              </div>
              <div>
                <p className="text-xs tracking-[0.25em] text-[#941101] font-semibold mb-4 uppercase">
                  Notre histoire
                </p>
                <h2 className="font-playfair text-3xl md:text-4xl font-bold text-elegant-black mb-6">
                  Une conciergerie toulousaine, à taille humaine
                </h2>
                <p className="text-lg text-gray-700 mb-5 leading-relaxed">
                  L'Intendant est né d'un constat simple.
                </p>
                <p className="text-gray-600 mb-5 leading-relaxed">
                  En observant le marché de la location courte durée à Toulouse, j'ai réalisé que beaucoup de propriétaires étaient livrés à eux-mêmes : des plateformes à gérer, des voyageurs à accueillir, des tarifs rarement optimisés — et souvent, des prestataires peu réactifs censés s'en occuper.
                </p>
                <p className="text-gray-600 mb-5 leading-relaxed">
                  Diplômé de la Faculté de Droit de Toulouse, j'ai voulu apporter une approche différente : rigoureuse, transparente, et vraiment orientée vers la performance du bien. Pas juste "gérer" un appartement, mais en tirer le meilleur rendement possible tout en offrant une expérience irréprochable aux voyageurs.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  Il y a près de deux ans, les premiers propriétaires m'ont fait confiance. Depuis, L'Intendant Conciergerie s'est construit sur cette même exigence : traiter chaque bien comme s'il était le nôtre.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Citation */}
        <section className="py-16 md:py-20 bg-white">
          <div className="container mx-auto px-6 text-center max-w-4xl">
            <div className="h-px w-16 bg-[#941101] mx-auto mb-8" />
            <blockquote className="font-playfair italic text-2xl md:text-3xl text-elegant-black leading-relaxed">
              « Traiter chaque bien comme s'il était le nôtre. »
            </blockquote>
          </div>
        </section>

        {/* Section Suite */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-6 max-w-3xl text-center">
            <p className="text-gray-600 mb-6 leading-relaxed">
              Nous sommes une équipe locale, attachée à Toulouse et à sa région. Nous connaissons ses quartiers, ses rythmes, ses voyageurs — et nous mettons cette proximité au service des propriétaires qui nous font confiance. Pas de plateforme impersonnelle, pas de standard téléphonique : un interlocuteur qui vous connaît, vous et votre logement.
            </p>
            <p className="text-gray-600 mb-10 leading-relaxed">
              Nous nous appuyons également sur un réseau de partenaires locaux de confiance — décorateurs d'intérieur, artisans, agents immobiliers et autres professionnels de l'habitat — afin d'accompagner nos propriétaires bien au-delà de la simple gestion locative et de valoriser durablement leur bien.
            </p>

            {/* Signature fondateur */}
            <div className="flex flex-col items-center mt-10">
              <img
                src={ASSETS.founderPhoto}
                alt="Kyllian, fondateur de L'Intendant"
                className="w-16 h-16 rounded-full object-cover object-top grayscale mb-4"
                loading="lazy"
                decoding="async"
              />
              <p className="text-gray-700 leading-relaxed">
                <strong className="font-playfair font-semibold text-elegant-black">Kyllian, fondateur</strong>{' '}
                — Diplômé de la Faculté de Droit de Toulouse, spécialisé en gestion locative courte durée.
              </p>
            </div>
          </div>
        </section>

        {/* CTA final */}
        <section className="bg-elegant-gray">
          <div className="container mx-auto px-6 py-16 md:py-20 text-center max-w-3xl">
            <h2 className="font-playfair text-3xl md:text-4xl font-bold mb-6 text-elegant-black">
              Parlons de votre projet
            </h2>
            <p className="text-gray-600 mb-8">
              Un échange simple pour comprendre vos besoins et vous proposer la formule la plus adaptée à votre bien.
            </p>
            <Link
              to="/discutons"
              className="inline-flex items-center gap-2 bg-elegant-black text-white px-8 py-4 text-base font-semibold rounded-lg shadow hover:shadow-xl transition-all duration-300 group border border-gray-800"
            >
              <span>Discutons de votre projet</span>
              <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </section>
      </main>
      <Footer />
      <CookieBanner />
    </div>
  );
}

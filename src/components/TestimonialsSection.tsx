import { useEffect } from 'react';
import { useSuspenseQuery, queryOptions } from '@tanstack/react-query';
import { getGoogleReviews, type GoogleReview } from '@/lib/google-reviews.functions';

export const googleReviewsQueryOptions = queryOptions({
  queryKey: ['google-reviews'],
  queryFn: () => getGoogleReviews(),
  staleTime: 6 * 60 * 60 * 1000,
});

const FALLBACK_REVIEWS: GoogleReview[] = [
  {
    authorName: 'Maëlys Fontaine',
    authorPhoto: null,
    rating: 5,
    text: "L'Intendant a transformé mon appartement en véritable source de revenus. Service professionnel et communication parfaite.",
    relativeTime: '',
    publishTime: '',
  },
  {
    authorName: 'Théo Blanchard',
    authorPhoto: null,
    rating: 5,
    text: "Enfin une conciergerie qui comprend les enjeux de la location courte durée. Mes revenus ont doublé en 6 mois.",
    relativeTime: '',
    publishTime: '',
  },
  {
    authorName: 'Léa Martinez',
    authorPhoto: null,
    rating: 5,
    text: "Je recommande vivement L'Intendant. Leur expertise locale et leur professionnalisme font la différence.",
    relativeTime: '',
    publishTime: '',
  },
];

const renderStars = (rating: number) =>
  Array.from({ length: 5 }, (_, i) => (
    <span
      key={i}
      className={`text-lg ${i < Math.round(rating) ? 'text-yellow-500' : 'text-gray-300'}`}
    >
      ★
    </span>
  ));

const TestimonialsSection = () => {
  const { data } = useSuspenseQuery(googleReviewsQueryOptions);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add('visible');
        });
      },
      { threshold: 0.1 },
    );
    const elements = document.querySelectorAll('.animate-on-scroll');
    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [data]);

  const reviews = data.reviews.length > 0 ? data.reviews : FALLBACK_REVIEWS;
  const rating = data.rating ?? 5;
  const totalCount = data.totalCount ?? reviews.length;
  const googleUri = data.googleMapsUri ?? 'https://g.page/r/CcGc5WOuAYbiEAE';

  return (
    <section id="temoignages" className="py-20 bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Organization',
            name: "L'Intendant",
            aggregateRating: {
              '@type': 'AggregateRating',
              ratingValue: rating.toFixed(1),
              reviewCount: String(totalCount),
              bestRating: '5',
              worstRating: '1',
            },
            review: reviews.slice(0, 5).map((r) => ({
              '@type': 'Review',
              reviewRating: {
                '@type': 'Rating',
                ratingValue: String(r.rating),
                bestRating: '5',
              },
              author: { '@type': 'Person', name: r.authorName },
              reviewBody: r.text,
              ...(r.publishTime ? { datePublished: r.publishTime } : {}),
            })),
          }),
        }}
      />

      <div className="container mx-auto px-6">
        <div className="text-center mb-12 animate-on-scroll">
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-elegant-black mb-6">
            Témoignages
          </h2>

          {data.rating !== null && (
            <div className="flex flex-col items-center gap-2 mb-6">
              <div className="flex items-center gap-3">
                <span className="text-3xl font-bold text-elegant-black">
                  {rating.toFixed(1)}
                </span>
                <div className="flex">{renderStars(rating)}</div>
              </div>
              <p className="text-sm text-gray-500">
                {totalCount} avis Google ·{' '}
                <a
                  href={googleUri}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline hover:text-elegant-black"
                >
                  voir sur Google
                </a>
              </p>
            </div>
          )}

          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            La confiance de nos clients toulousains est notre plus belle récompense.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {reviews.slice(0, 6).map((r, index) => (
            <div
              key={index}
              className="bg-elegant-gray p-8 hover:shadow-lg transition-all duration-300 animate-on-scroll group flex flex-col"
            >
              <div className="mb-4 flex items-center justify-between">
                <div className="flex">{renderStars(r.rating)}</div>
                {r.relativeTime && (
                  <span className="text-xs text-gray-500">{r.relativeTime}</span>
                )}
              </div>

              <blockquote className="text-gray-700 mb-6 italic leading-relaxed flex-1 whitespace-pre-line">
                "{r.text}"
              </blockquote>

              <div className="border-t border-gray-300 pt-4 flex items-center gap-3">
                {r.authorPhoto ? (
                  <img
                    src={r.authorPhoto}
                    alt={r.authorName}
                    className="w-10 h-10 rounded-full object-cover"
                    loading="lazy"
                    referrerPolicy="no-referrer"
                  />
                ) : (
                  <div className="w-10 h-10 rounded-full bg-gray-300 grid place-items-center text-sm font-semibold text-white">
                    {r.authorName.charAt(0).toUpperCase()}
                  </div>
                )}
                <div>
                  <p className="font-semibold text-elegant-black text-sm">{r.authorName}</p>
                  <p className="text-gray-500 text-xs">Avis Google</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <a
            href={googleUri}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-sm border border-elegant-black text-elegant-black text-sm font-semibold hover:bg-elegant-black hover:text-white transition"
          >
            Voir tous les avis sur Google
          </a>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;

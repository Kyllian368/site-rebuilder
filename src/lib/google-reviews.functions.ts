import { createServerFn } from '@tanstack/react-start';

const PLACE_ID = 'ChIJ2xvRcRZvZakRwZzlY64BhuI';
const GATEWAY_URL = 'https://connector-gateway.lovable.dev/google_maps';
const CACHE_TTL_MS = 6 * 60 * 60 * 1000; // 6h

export type GoogleReview = {
  authorName: string;
  authorPhoto: string | null;
  rating: number;
  text: string;
  relativeTime: string;
  publishTime: string;
};

export type GoogleReviewsData = {
  rating: number | null;
  totalCount: number | null;
  googleMapsUri: string | null;
  reviews: GoogleReview[];
};

type CacheEntry = { data: GoogleReviewsData; at: number };
let cache: CacheEntry | null = null;

const FALLBACK: GoogleReviewsData = {
  rating: null,
  totalCount: null,
  googleMapsUri: 'https://g.page/r/CcGc5WOuAYbiEAE',
  reviews: [],
};

export const getGoogleReviews = createServerFn({ method: 'GET' }).handler(
  async (): Promise<GoogleReviewsData> => {
    if (cache && Date.now() - cache.at < CACHE_TTL_MS) return cache.data;

    const lovableKey = process.env.LOVABLE_API_KEY;
    const mapsKey = process.env.GOOGLE_MAPS_API_KEY;
    if (!lovableKey || !mapsKey) return FALLBACK;

    try {
      const res = await fetch(
        `${GATEWAY_URL}/places/v1/places/${PLACE_ID}?languageCode=fr`,
        {
          headers: {
            Authorization: `Bearer ${lovableKey}`,
            'X-Connection-Api-Key': mapsKey,
            'X-Goog-FieldMask':
              'id,rating,userRatingCount,googleMapsUri,reviews',
          },
        },
      );
      if (!res.ok) return FALLBACK;
      const json = (await res.json()) as {
        rating?: number;
        userRatingCount?: number;
        googleMapsUri?: string;
        reviews?: Array<{
          rating?: number;
          text?: { text?: string };
          originalText?: { text?: string };
          relativePublishTimeDescription?: string;
          publishTime?: string;
          authorAttribution?: { displayName?: string; photoUri?: string };
        }>;
      };

      const data: GoogleReviewsData = {
        rating: json.rating ?? null,
        totalCount: json.userRatingCount ?? null,
        googleMapsUri: json.googleMapsUri ?? FALLBACK.googleMapsUri,
        reviews: (json.reviews ?? []).map((r) => ({
          authorName: r.authorAttribution?.displayName ?? 'Anonyme',
          authorPhoto: r.authorAttribution?.photoUri ?? null,
          rating: r.rating ?? 5,
          text: r.text?.text ?? r.originalText?.text ?? '',
          relativeTime: r.relativePublishTimeDescription ?? '',
          publishTime: r.publishTime ?? '',
        })),
      };

      cache = { data, at: Date.now() };
      return data;
    } catch {
      return FALLBACK;
    }
  },
);

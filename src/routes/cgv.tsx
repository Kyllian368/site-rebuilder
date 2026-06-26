import { createFileRoute } from '@tanstack/react-router';
import CGV from '@/pages/CGV';

export const Route = createFileRoute('/cgv')({
  component: CGV,
  head: () => ({
    meta: [
      { title: "Conditions générales de vente — L'Intendant Toulouse" },
      { name: 'description', content: "Conditions générales de vente de L'Intendant, conciergerie de gestion locative courte durée à Toulouse." },
      { property: 'og:title', content: "Conditions générales de vente — L'Intendant Toulouse" },
      { property: 'og:url', content: '/cgv' },
    ],
    links: [{ rel: 'canonical', href: '/cgv' }],
  }),
});

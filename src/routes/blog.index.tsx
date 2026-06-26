import { createFileRoute } from '@tanstack/react-router';
import Blog from '@/pages/Blog';

export const Route = createFileRoute('/blog/')({
  component: Blog,
  head: () => ({
    meta: [
      { title: "Blog — L'Intendant Toulouse" },
      { name: 'description', content: "Conseils et guides sur la gestion locative courte durée à Toulouse : Airbnb, fiscalité, optimisation de revenus." },
      { property: 'og:title', content: "Blog — L'Intendant Toulouse" },
      { property: 'og:url', content: '/blog' },
    ],
    links: [{ rel: 'canonical', href: '/blog' }],
  }),
});

import { createFileRoute } from '@tanstack/react-router';
import PrivacyPolicy from '@/pages/PrivacyPolicy';

export const Route = createFileRoute('/politique-confidentialite')({
  component: PrivacyPolicy,
  head: () => ({
    meta: [
      { title: "Politique de confidentialité — L'Intendant Toulouse" },
      { name: 'description', content: "Politique de confidentialité de L'Intendant Toulouse, conciergerie de gestion locative courte durée." },
      { property: 'og:title', content: "Politique de confidentialité — L'Intendant Toulouse" },
      { property: 'og:url', content: '/politique-confidentialite' },
    ],
    links: [{ rel: 'canonical', href: '/politique-confidentialite' }],
  }),
});

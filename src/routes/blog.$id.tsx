import { createFileRoute } from '@tanstack/react-router';
import BlogPost from '@/pages/BlogPost';

export const Route = createFileRoute('/blog/$id')({
  component: BlogPost,
  head: ({ params }) => ({
    meta: [
      { title: `Article — L'Intendant Toulouse` },
      { property: 'og:type', content: 'article' },
      { property: 'og:url', content: `/blog/${params.id}` },
    ],
    links: [{ rel: 'canonical', href: `/blog/${params.id}` }],
  }),
});

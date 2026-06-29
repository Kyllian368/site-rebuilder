import { createFileRoute, useRouterState } from '@tanstack/react-router';
import { useEffect } from 'react';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import ServicesSection from '@/components/ServicesSection';
import PricingSection from '@/components/PricingSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import StatsSection from '@/components/StatsSection';
import ExpertiseSection from '@/components/ExpertiseSection';

import Footer from '@/components/Footer';
import CookieBanner from '@/components/CookieBanner';

import { googleReviewsQueryOptions } from '@/components/TestimonialsSection';

export const Route = createFileRoute('/')({
  loader: ({ context }) => context.queryClient.ensureQueryData(googleReviewsQueryOptions),
  component: Index,
});

function Index() {
  const hash = useRouterState({ select: (s) => s.location.hash });

  useEffect(() => {
    if (hash) {
      setTimeout(() => {
        const el = document.getElementById(hash);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    }
  }, [hash]);

  return (
    <div className="min-h-screen home-root">
      <Header />
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <PricingSection />
      <TestimonialsSection />
      <StatsSection />
      <ExpertiseSection />
      <ContactSection />
      <Footer />
      <CookieBanner />
    </div>
  );
}

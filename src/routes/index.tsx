import { createFileRoute, useRouterState } from '@tanstack/react-router';
import { Link } from '@tanstack/react-router';
import { useEffect } from 'react';
import { ArrowRight } from 'lucide-react';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import ServicesSection from '@/components/ServicesSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import WhyUsSection from '@/components/home/WhyUsSection';
import StatsBanner from '@/components/home/StatsBanner';
import HowItWorksHomeSection from '@/components/home/HowItWorksHomeSection';
import AreasSection from '@/components/home/AreasSection';
import AboutHomeSection from '@/components/home/AboutHomeSection';
import FinalCTASection from '@/components/home/FinalCTASection';


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
      <WhyUsSection />
      <StatsBanner />
      <ServicesSection />
      <HowItWorksHomeSection />
      <AreasSection />
      <TestimonialsSection />

      <section className="py-16 bg-white">
        <div className="container mx-auto px-6 text-center">
          <Link
            to="/discutons"
            className="inline-flex items-center gap-2 bg-elegant-black text-white px-8 py-4 text-base font-semibold rounded-lg shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 group border border-gray-800"
          >
            <span>Demander une estimation gratuite</span>
            <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </section>

      <AboutHomeSection />
      <HomeFaqSection />
      <FinalCTASection />

      <Footer />
      <CookieBanner />
    </div>
  );
}

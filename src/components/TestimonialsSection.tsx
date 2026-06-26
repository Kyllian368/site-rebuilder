import React, { useEffect } from 'react';

const TestimonialsSection = () => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = document.querySelectorAll('.animate-on-scroll');
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const testimonials = [
    {
      name: "Maëlys Fontaine",
      location: "Toulouse Centre",
      rating: 5,
      comment: "L'Intendant a transformé mon appartement en véritable source de revenus. Service professionnel et communication parfaite."
    },
    {
      name: "Théo Blanchard",
      location: "Capitole",
      rating: 5,
      comment: "Enfin une conciergerie qui comprend les enjeux de la location courte durée. Mes revenus ont doublé en 6 mois."
    },
    {
      name: "Léa Martinez",
      location: "Saint-Cyprien",
      rating: 5,
      comment: "Je recommande vivement L'Intendant. Leur expertise locale et leur professionnalisme font la différence."
    }
  ];

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <span key={i} className={`text-lg ${i < rating ? 'text-yellow-500' : 'text-gray-300'}`}>
        ★
      </span>
    ));
  };

  return (
    <section id="temoignages" className="py-20 bg-white">
      {/* Schema markup pour les avis */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "L'Intendant",
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": "4.8",
              "reviewCount": "27",
              "bestRating": "5",
              "worstRating": "1"
            },
            "review": testimonials.map(testimonial => ({
              "@type": "Review",
              "reviewRating": {
                "@type": "Rating",
                "ratingValue": testimonial.rating.toString(),
                "bestRating": "5"
              },
              "author": {
                "@type": "Person",
                "name": testimonial.name
              },
              "reviewBody": testimonial.comment,
              "datePublished": "2024-11-01"
            }))
          })
        }}
      />
      
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-on-scroll">
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-elegant-black mb-6">
            Témoignages
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            La confiance de nos clients toulousains est notre plus belle récompense.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="bg-elegant-gray p-8 hover:shadow-lg transition-all duration-300 animate-on-scroll group"
            >
              <div className="mb-4">
                {renderStars(testimonial.rating)}
              </div>
              
              <blockquote className="text-gray-700 mb-6 italic leading-relaxed">
                "{testimonial.comment}"
              </blockquote>
              
              <div className="border-t border-gray-300 pt-4">
                <p className="font-semibold text-elegant-black">{testimonial.name}</p>
                <p className="text-gray-500 text-sm">{testimonial.location}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;

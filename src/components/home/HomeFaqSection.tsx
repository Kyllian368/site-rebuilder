import React from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const faq = [
  {
    q: 'Vais-je garder le contrôle de mon logement ?',
    a: "Totalement. Vous fixez vos périodes de blocage, vos règles et pouvez occuper votre bien quand vous le souhaitez. Vous disposez d'un suivi avec vos réservations, revenus et calendrier en temps réel.",
  },
  {
    q: 'Et si mon logement est dégradé ?',
    a: "Chaque réservation est couverte par les garanties des plateformes (jusqu'à 800 000€ sur Airbnb), un dépôt de garantie et notre processus de vérification des voyageurs. Nous réalisons un état des lieux entre chaque séjour.",
  },
];

const HomeFaqSection = () => {
  return (
    <section className="py-20 md:py-24 bg-white">
      <div className="container mx-auto px-6 max-w-3xl">
        <div className="text-center mb-12">
          <p className="text-xs tracking-[0.25em] font-semibold mb-4 uppercase" style={{ color: '#941101' }}>
            FAQ
          </p>
          <h2 className="font-playfair text-3xl md:text-4xl font-bold text-elegant-black">
            Questions fréquentes
          </h2>
        </div>
        <Accordion type="single" collapsible className="space-y-3">
          {faq.map((item, i) => (
            <AccordionItem
              key={i}
              value={`item-${i}`}
              className="bg-white border border-gray-200 px-5"
            >
              <AccordionTrigger className="font-playfair text-lg font-bold text-elegant-black text-left">
                {item.q}
              </AccordionTrigger>
              <AccordionContent className="text-gray-600 leading-relaxed">
                {item.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default HomeFaqSection;

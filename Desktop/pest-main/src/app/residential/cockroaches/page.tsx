"use client";

import CockroachControlContent from "@/components/content/CockroachControlContent";
import PestControlHero from "@/components/hero/PestControlHero";
import PestControlBanner from "@/components/banner/PestControlBanner";
import PestExterminationProcedure from "@/components/procedure/PestExterminationProcedure";
import PestControlFAQ from "@/components/faq/PestControlFAQ";

export default function CockroachControlPage() {
  // Cockroach-specific banner features
  const bannerFeatures = [
    "Same Day Service Available",
    "Fully Licensed & Insured",
    "Eco-Friendly Options",
    "100% Satisfaction Guarantee"
  ];

  // Cockroach-specific procedure steps
  const procedureSteps = [
    {
      title: "Inspection",
      description: "Our technicians conduct a thorough inspection to identify cockroach species, locate hiding spots, and determine the extent of the infestation.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
      )
    },
    {
      title: "Treatment",
      description: "We apply targeted treatments using gel baits, dusts, and liquid applications to eliminate cockroaches at all life stages.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
        </svg>
      )
    },
    {
      title: "Prevention",
      description: "We implement preventative measures including sealing entry points, recommending sanitation improvements, and providing ongoing protection strategies.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      )
    }
  ];

  // Cockroach-specific FAQs
  const faqs = [
    {
      question: "How do I know if I have a cockroach infestation?",
      answer: "Signs of a cockroach infestation include seeing live or dead cockroaches, cockroach droppings (which look like black pepper or coffee grounds), egg casings, a musty odor, and smear marks along walls or baseboards. Cockroaches are nocturnal, so seeing them during the day often indicates a severe infestation."
    },
    {
      question: "How long does cockroach treatment take to work?",
      answer: "You should notice a significant reduction in cockroach activity within 1-3 days after treatment. Complete elimination typically takes 1-2 weeks, depending on the severity of the infestation and the species involved. Our treatments target all life stages, including eggs, to ensure complete elimination."
    },
    {
      question: "Are your cockroach treatments safe for children and pets?",
      answer: "Yes, we use products that are safe for families and pets when applied according to label instructions. We carefully place treatments in areas inaccessible to children and pets. We'll provide specific safety instructions for each treatment, including any temporary precautions to take during and immediately after application."
    },
    {
      question: "How can I prevent cockroaches from returning?",
      answer: "To prevent cockroach reinfestation: 1) Keep your home clean and free of food debris, 2) Store food in airtight containers, 3) Fix leaky pipes and eliminate moisture sources, 4) Seal cracks and crevices around your home, 5) Keep trash in sealed containers and remove it regularly, and 6) Consider periodic professional treatments for ongoing protection."
    }
  ];

  return (
    <main className="min-h-screen">
      <PestControlHero
        title="Cockroach Control"
        subtitle="Effective"
        description="Expert cockroach control solutions to eliminate infestations and prevent future problems in your home or business."
        imageSrc="/cockroach-control-hero.webp"
        pestType="Cockroach"
      />
      <PestControlBanner
        pestType="Cockroach"
        features={bannerFeatures}
      />
      <CockroachControlContent />
      <PestExterminationProcedure
        pestType="Cockroach"
        steps={procedureSteps}
      />
      <PestControlFAQ
        pestType="Cockroach"
        faqs={faqs}
      />
    </main>
  );
}

"use client";

import { useState } from 'react';
import Image from 'next/image';

interface InfoCardProps {
  title: string;
  content: string[];
  image: string;
  isActive: boolean;
  onClick: () => void;
}

const InfoCard = ({ title, content, image, isActive, onClick }: InfoCardProps) => {
  return (
    <div
      className={`border rounded-xl overflow-hidden transition-all duration-300 cursor-pointer ${
        isActive ? 'shadow-lg border-purple-300 scale-[1.02]' : 'shadow-sm border-gray-200 hover:shadow-md'
      }`}
      onClick={onClick}
    >
      <div className="relative h-48 overflow-hidden">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover transition-transform duration-500 ease-in-out group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, 33vw"
          style={title === "Brushtail Possum" ? { objectPosition: 'center 80%' } : {}}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
        <div className="absolute bottom-0 left-0 p-4 w-full">
          <h3 className="text-white font-bold text-xl">{title}</h3>
        </div>
      </div>

      <div className={`transition-all duration-500 ease-in-out overflow-hidden ${
        isActive ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
      }`}>
        <div className="p-4 bg-purple-50/50">
          <ul className="space-y-2">
            {content.map((item, index) => (
              <li key={index} className="flex items-start">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-purple-600 mr-2 mt-0.5 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="text-gray-700">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default function PossumBehaviorGuide() {
  const [activeCard, setActiveCard] = useState<number | null>(null);

  const toggleCard = (index: number) => {
    setActiveCard(activeCard === index ? null : index);
  };

  const infoCards = [
    {
      title: "Brushtail Possum",
      image: "/brushtail-possum.jpg",
      content: [
        "One of the largest and most common possum species in Australia, growing to the size of a cat",
        "Distinctive bushy tail and thick fur ranging from silver-gray to brown or black",
        "Highly adaptable, found anywhere from eucalyptus forests to urban backyards",
        "Particularly intrusive in residential areas, often nesting in roof spaces and wall cavities",
        "Protected by law, making professional humane removal essential to avoid legal ramifications",
        "Excellent climbers with strong claws and prehensile tail for gripping branches",
        "Can cause significant damage to insulation, wiring, and ductwork in homes"
      ]
    },
    {
      title: "Ringtail Possum",
      image: "/ringtail-possum.jpg",
      content: [
        "Named for their distinctive tail shape, which helps them navigate tree branches",
        "As marsupials, they face unique challenges climbing while carrying joeys in their pouch",
        "Prefer living in tree hollows, making them less likely to intrude in homes",
        "May colonize trees in residential gardens, creating nests called 'dreys'",
        "Smaller than brushtails (30-35 cm) with rounded ears and large eyes adapted for night vision",
        "More selective diet, primarily feeding on eucalyptus leaves, flowers, and fruits",
        "Often travel in family groups with a male, female, and offspring"
      ]
    },
    {
      title: "Mountain Pygmy Possum",
      image: "/mountain-pygmy-possum.jpg",
      content: [
        "Exceptionally small at 5 to 12 cm in length and weighing around 50 grams",
        "Often mistaken for a mouse due to their tiny size and appearance",
        "Australia's only hibernating marsupial and one of the rarest possum species",
        "Omnivorous diet including fruits, nuts, insects, similar to mice",
        "Found exclusively in alpine and sub-alpine regions at high elevations",
        "Hibernate during winter months under snow cover in rock crevices",
        "Endangered species with highly specialized habitat requirements"
      ]
    },

  ];

  return (
    <section className="py-16 bg-white relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-purple-50/50 rounded-bl-[100px] z-0"></div>
        <div className="absolute bottom-0 left-0 w-1/4 h-1/4 bg-purple-50/30 rounded-tr-[100px] z-0"></div>
        <div className="absolute top-1/3 left-10 w-6 h-6 bg-purple-100 rounded-full z-0"></div>
        <div className="absolute bottom-1/4 right-20 w-4 h-4 bg-purple-200 rounded-full z-0"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <span className="inline-block px-3 py-1 bg-purple-100 text-purple-800 text-sm font-semibold rounded-full mb-3">
            UNDERSTANDING POSSUMS
          </span>
          <h2 className="text-4xl font-bold mb-4 text-gray-900">
            Possum <span className="text-purple-600">Behavior & Biology</span> Guide
          </h2>
          <div className="w-24 h-1 bg-purple-600 mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Understanding possum behavior and biology helps us develop effective, humane management strategies. Click on each card to learn more about these fascinating marsupials.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {infoCards.map((card, index) => (
            <InfoCard
              key={index}
              title={card.title}
              content={card.content}
              image={card.image}
              isActive={activeCard === index}
              onClick={() => toggleCard(index)}
            />
          ))}
        </div>

        <div className="bg-purple-50 rounded-xl p-8 max-w-4xl mx-auto">
          <div className="flex flex-col md:flex-row items-center gap-6">
            <div className="md:w-1/4 flex justify-center">
              <div className="w-20 h-20 bg-purple-100 rounded-full flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
            </div>
            <div className="md:w-3/4">
              <h3 className="text-2xl font-bold text-purple-800 mb-3 text-center md:text-left">The Ecological Importance of Possums</h3>
              <p className="text-gray-700 mb-4">
                While possums can become nuisance wildlife when they take up residence in homes, they play important ecological roles in their natural habitats. As omnivores, they help control insect populations and contribute to seed dispersal for many plant species. Their foraging habits can help maintain plant diversity, and they serve as prey for larger predators, contributing to the food web. Our possum management approach recognizes this ecological value, which is why we focus on humane removal and relocation rather than lethal methods. By safely relocating possums to appropriate habitats, we help maintain these ecological benefits while protecting your property from damage.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-12 text-center">
          <a href="/contact" className="inline-block bg-gradient-to-r from-purple-500 to-purple-600 hover:from-purple-600 hover:to-purple-700 text-white font-bold py-3 px-8 rounded-full transition-all duration-300 transform hover:scale-105 shadow-md">
            Schedule a Possum Inspection
          </a>
        </div>
      </div>
    </section>
  );
}

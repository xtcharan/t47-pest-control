"use client";

import { useState } from 'react';
import Image from 'next/image';

interface FleaStageProps {
  name: string;
  image: string;
  description: string;
}

const FleaStage = ({ name, image, description }: FleaStageProps) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="relative overflow-hidden rounded-xl shadow-lg group cursor-pointer transition-all duration-300 hover:shadow-xl"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative h-[220px] w-full overflow-hidden">
        <Image
          src={image}
          alt={`${name} - Flea Lifecycle Stage`}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-110"
          sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-60 transition-opacity duration-300 group-hover:opacity-80"></div>

        <div className="absolute bottom-3 left-3 z-10">
          <h3 className="text-white font-bold text-lg drop-shadow-md">{name}</h3>
        </div>

        <div
          className={`absolute inset-0 bg-gradient-to-br from-green-600/90 to-green-700/90 p-4 flex flex-col justify-center transition-all duration-500 ease-in-out ${
            isHovered ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'
          }`}
        >
          <div className="absolute top-0 right-0 w-20 h-20 bg-green-500/20 rounded-full blur-xl -mr-5 -mt-5"></div>
          <h3 className="text-white font-bold text-lg mb-2">{name}</h3>
          <p className="text-white/90 text-sm leading-relaxed">{description}</p>
          <div className="absolute bottom-2 right-2">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-200" viewBox="0 0 20 20" fill="currentColor">
              <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
              <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

export default function FleaLifecycleGallery() {
  const fleaStages: FleaStageProps[] = [
    {
      name: "Eggs",
      image: "/flea-eggs.jpg",
      description: "Flea eggs are tiny (0.5mm), oval, and pearly white. A female flea can lay up to 50 eggs per day, which fall off the host animal into carpets, bedding, and yard areas. These eggs represent about 50% of a flea population and are resistant to most insecticides, making them challenging to control with DIY treatments."
    },
    {
      name: "Larvae",
      image: "/flea-larvae.jpg",
      description: "Flea larvae are worm-like, translucent, and about 2-5mm long. They avoid light, burrowing deep into carpets, cracks, and soil. They feed on organic debris and adult flea feces ('flea dirt'). This stage lasts 5-20 days depending on environmental conditions and represents about 35% of the flea population in an infestation."
    },
    {
      name: "Pupae",
      image: "/flea-pupae.jpg",
      description: "The pupal stage is the most resilient part of the flea lifecycle. Larvae spin sticky cocoons that collect debris for camouflage. Pupae can remain dormant for up to 5 months, protected from most insecticides. They emerge in response to vibration, heat, and CO2, which signal a host is nearby. This stage represents about 10% of the flea population."
    },
    {
      name: "Adult Fleas",
      image: "/adult-fleas.jpg",
      description: "Adult fleas are small (1-4mm), wingless insects with powerful back legs for jumping. They begin feeding on host blood within minutes of emergence and can consume 15x their body weight daily. Female fleas begin laying eggs within 24-48 hours after their first blood meal. Adults represent only about 5% of the total flea population in an infestation."
    },
    {
      name: "Flea Dirt",
      image: "/flea-dirt.jpg",
      description: "Flea dirt is the dried blood excrement from adult fleas, appearing as small black specks on your pet's skin or bedding. When placed on a wet paper towel, it dissolves and creates a reddish-brown stain. The presence of flea dirt is a definitive sign of infestation, even when live fleas aren't visible, and serves as food for developing larvae."
    },
    {
      name: "Environmental Factors",
      image: "/flea-environment.jpg",
      description: "Fleas thrive in warm (70-85°F), humid (50-90% RH) environments. In ideal conditions, the entire lifecycle can complete in just 14 days, but typically takes 3-8 weeks. Outdoors, fleas concentrate in shaded, moist areas where pets rest. Indoors, they inhabit carpets, furniture, and bedding. Understanding these environmental preferences is crucial for effective control."
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-b from-green-50/30 to-white relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute -top-20 right-20 w-64 h-64 bg-green-100/30 rounded-full blur-3xl"></div>
        <div className="absolute bottom-40 -left-20 w-72 h-72 bg-green-100/20 rounded-full blur-3xl"></div>
        <div className="absolute top-1/3 left-1/2 w-40 h-40 bg-green-100/10 rounded-full blur-2xl"></div>
        <div className="absolute top-20 left-20 w-6 h-6 bg-green-400 rounded-full animate-pulse-slow"></div>
        <div className="absolute bottom-20 right-20 w-4 h-4 bg-green-400 rounded-full animate-pulse-slow"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <span className="inline-block px-3 py-1 bg-gradient-to-r from-green-100 to-green-200 text-green-700 text-sm font-semibold rounded-full mb-3">
            UNDERSTANDING THE ENEMY
          </span>
          <h2 className="text-4xl font-bold mb-4 text-gray-900">
            Flea <span className="bg-gradient-to-r from-green-600 to-green-700 bg-clip-text text-transparent">Lifecycle</span> Stages
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-green-600 to-green-700 mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Hover over or tap on each lifecycle stage to learn why professional treatment is essential to break the flea reproductive cycle at every phase.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {fleaStages.map((stage, index) => (
            <FleaStage
              key={index}
              name={stage.name}
              image={stage.image}
              description={stage.description}
            />
          ))}
        </div>

        <div className="mt-12 text-center">
          <div className="bg-white p-6 rounded-xl shadow-lg max-w-2xl mx-auto border border-green-100 transform hover:shadow-xl transition-all duration-300 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-16 h-16">
              <div className="absolute top-0 left-0 w-16 h-2 bg-gradient-to-r from-green-500 to-green-400"></div>
              <div className="absolute top-0 left-0 w-2 h-16 bg-gradient-to-b from-green-500 to-green-400"></div>
            </div>
            <div className="absolute top-0 right-0 w-16 h-16">
              <div className="absolute top-0 right-0 w-16 h-2 bg-gradient-to-l from-green-500 to-green-400"></div>
              <div className="absolute top-0 right-0 w-2 h-16 bg-gradient-to-b from-green-500 to-green-400"></div>
            </div>
            <div className="absolute bottom-0 left-0 w-16 h-16">
              <div className="absolute bottom-0 left-0 w-16 h-2 bg-gradient-to-r from-green-500 to-green-400"></div>
              <div className="absolute bottom-0 left-0 w-2 h-16 bg-gradient-to-t from-green-500 to-green-400"></div>
            </div>
            <div className="absolute bottom-0 right-0 w-16 h-16">
              <div className="absolute bottom-0 right-0 w-16 h-2 bg-gradient-to-l from-green-500 to-green-400"></div>
              <div className="absolute bottom-0 right-0 w-2 h-16 bg-gradient-to-t from-green-500 to-green-400"></div>
            </div>

            <div className="relative z-10 py-2">
              <h3 className="text-xl font-semibold mb-3 text-gray-900">Ready to break the flea lifecycle?</h3>
              <p className="text-gray-600 mb-4">Our multi-stage flea treatments target every phase of the flea lifecycle for complete elimination and long-lasting protection.</p>
              <a href="/contact" className="inline-block bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white font-bold py-3 px-8 rounded-full transition-all duration-300 transform hover:scale-105">
                Schedule Your Treatment
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

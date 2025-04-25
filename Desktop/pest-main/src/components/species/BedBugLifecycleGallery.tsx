"use client";

import { useState } from 'react';
import Image from 'next/image';

interface BedBugStageProps {
  name: string;
  image: string;
  description: string;
}

const BedBugStage = ({ name, image, description }: BedBugStageProps) => {
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
          alt={`${name} - Bed Bug Lifecycle Stage`}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-110"
          sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-60 transition-opacity duration-300 group-hover:opacity-80"></div>

        <div className="absolute bottom-3 left-3 z-10">
          <h3 className="text-white font-bold text-lg drop-shadow-md">{name}</h3>
        </div>

        <div
          className={`absolute inset-0 bg-gradient-to-br from-blue-600/90 to-red-600/90 p-4 flex flex-col justify-center transition-all duration-500 ease-in-out ${
            isHovered ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'
          }`}
        >
          <div className="absolute top-0 right-0 w-20 h-20 bg-red-500/20 rounded-full blur-xl -mr-5 -mt-5"></div>
          <h3 className="text-white font-bold text-lg mb-2">{name}</h3>
          <p className="text-white/90 text-sm leading-relaxed">{description}</p>
          <div className="absolute bottom-2 right-2">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-red-200" viewBox="0 0 20 20" fill="currentColor">
              <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
              <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

export default function BedBugLifecycleGallery() {
  const bedBugStages: BedBugStageProps[] = [
    {
      name: "Eggs",
      image: "/bed-bug-eggs.jpg",
      description: "Bed bug eggs are tiny (1mm), pearly white, and barrel-shaped with a distinctive 'eye spot' if more than 5 days old. Females lay 1-5 eggs daily (200-500 in a lifetime), securing them in cracks and crevices with a sticky substance. Eggs hatch in 6-10 days under optimal conditions."
    },
    {
      name: "First Instar Nymph",
      image: "/bed-bug-first-instar.jpg",
      description: "First instar nymphs are translucent, light yellow, and approximately 1.5mm long. These newly hatched bed bugs require a blood meal to molt to the next stage. Despite their tiny size, they're capable of feeding immediately after hatching and are often overlooked during visual inspections."
    },
    {
      name: "Second Instar Nymph",
      image: "/bed-bug-second-instar.jpg",
      description: "Second instar nymphs grow to about 2mm and develop a darker yellowish-brown coloration after feeding. They become more active in seeking hosts and hiding places. This stage lasts approximately 5-8 days before molting to the third instar, assuming regular blood meals are available."
    },
    {
      name: "Third & Fourth Instar Nymphs",
      image: "/bed-bug-third-fourth-instar.jpg",
      description: "These middle-stage nymphs (2.5-3.5mm) become increasingly darker and more elongated. Their feeding patterns become more regular, and they develop enhanced hiding behaviors. These stages are more readily visible during inspections and leave more noticeable evidence including shed skins and fecal spots."
    },
    {
      name: "Fifth Instar Nymph",
      image: "/bed-bug-fifth-instar.jpg",
      description: "The final nymph stage before adulthood, fifth instar nymphs reach 4.5mm and have a distinctly reddish-brown appearance. They're quite active in seeking blood meals and will travel significant distances from harborage areas to feed. After a final blood meal, they undergo their last molt to become reproductive adults."
    },
    {
      name: "Adult Bed Bug",
      image: "/bed-bug-adult.jpg",
      description: "Adult bed bugs are mahogany to rusty brown, oval-shaped, and 4.5-7mm long (about the size of an apple seed). After feeding, they swell and elongate, turning a deep red color. Adults can survive for 6-12 months without feeding and can withstand extreme temperatures. Females produce eggs throughout their lifetime, perpetuating the infestation cycle."
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-b from-blue-50/30 to-white relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute -top-20 right-20 w-64 h-64 bg-blue-100/30 rounded-full blur-3xl"></div>
        <div className="absolute bottom-40 -left-20 w-72 h-72 bg-red-100/20 rounded-full blur-3xl"></div>
        <div className="absolute top-1/3 left-1/2 w-40 h-40 bg-red-100/10 rounded-full blur-2xl"></div>
        <div className="absolute top-20 left-20 w-6 h-6 bg-red-400 rounded-full animate-pulse-slow"></div>
        <div className="absolute bottom-20 right-20 w-4 h-4 bg-blue-400 rounded-full animate-pulse-slow"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <span className="inline-block px-3 py-1 bg-gradient-to-r from-blue-100 to-red-100 text-blue-700 text-sm font-semibold rounded-full mb-3">
            UNDERSTANDING THE ENEMY
          </span>
          <h2 className="text-4xl font-bold mb-4 text-gray-900">
            Bed Bug <span className="bg-gradient-to-r from-blue-600 to-red-600 bg-clip-text text-transparent">Lifecycle</span> Stages
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-red-600 mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Hover over or tap on each lifecycle stage to learn how bed bugs develop from eggs to adults, and why professional treatment is essential to break this reproductive cycle.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {bedBugStages.map((stage, index) => (
            <BedBugStage
              key={index}
              name={stage.name}
              image={stage.image}
              description={stage.description}
            />
          ))}
        </div>

        <div className="mt-12 text-center">
          <div className="bg-white p-6 rounded-xl shadow-lg max-w-2xl mx-auto border border-blue-100 transform hover:shadow-xl transition-all duration-300 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-16 h-16">
              <div className="absolute top-0 left-0 w-16 h-2 bg-gradient-to-r from-red-500 to-red-400"></div>
              <div className="absolute top-0 left-0 w-2 h-16 bg-gradient-to-b from-red-500 to-red-400"></div>
            </div>
            <div className="absolute top-0 right-0 w-16 h-16">
              <div className="absolute top-0 right-0 w-16 h-2 bg-gradient-to-l from-blue-500 to-blue-400"></div>
              <div className="absolute top-0 right-0 w-2 h-16 bg-gradient-to-b from-blue-500 to-blue-400"></div>
            </div>
            <div className="absolute bottom-0 left-0 w-16 h-16">
              <div className="absolute bottom-0 left-0 w-16 h-2 bg-gradient-to-r from-blue-500 to-blue-400"></div>
              <div className="absolute bottom-0 left-0 w-2 h-16 bg-gradient-to-t from-blue-500 to-blue-400"></div>
            </div>
            <div className="absolute bottom-0 right-0 w-16 h-16">
              <div className="absolute bottom-0 right-0 w-16 h-2 bg-gradient-to-l from-red-500 to-red-400"></div>
              <div className="absolute bottom-0 right-0 w-2 h-16 bg-gradient-to-t from-red-500 to-red-400"></div>
            </div>

            <div className="relative z-10 py-2">
              <h3 className="text-xl font-semibold mb-3 text-gray-900">Suspect a bed bug infestation?</h3>
              <p className="text-gray-600 mb-4">Our bed bug specialists can identify infestations at any stage and implement targeted treatments to break the reproductive cycle.</p>
              <a href="/contact" className="inline-block bg-gradient-to-r from-blue-600 to-red-600 hover:from-blue-700 hover:to-red-700 text-white font-bold py-3 px-8 rounded-full transition-all duration-300 transform hover:scale-105">
                Schedule a Discreet Inspection
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

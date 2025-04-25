"use client";

import { useState } from 'react';
import Image from 'next/image';

interface BeeSpeciesProps {
  name: string;
  image: string;
  description: string;
}

const BeeSpecies = ({ name, image, description }: BeeSpeciesProps) => {
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
          alt={`${name} - Professional Bee Management Services`}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-110"
          sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-60 transition-opacity duration-300 group-hover:opacity-80"></div>

        <div className="absolute bottom-3 left-3 z-10">
          <h3 className="text-white font-bold text-lg drop-shadow-md">{name}</h3>
        </div>

        <div
          className={`absolute inset-0 bg-gradient-to-br from-amber-600/90 to-amber-700/90 p-4 flex flex-col justify-center transition-all duration-500 ease-in-out ${
            isHovered ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'
          }`}
        >
          <div className="absolute top-0 right-0 w-20 h-20 bg-amber-500/20 rounded-full blur-xl -mr-5 -mt-5"></div>
          <h3 className="text-white font-bold text-lg mb-2">{name}</h3>
          <p className="text-white/90 text-sm leading-relaxed">{description}</p>
          <div className="absolute bottom-2 right-2">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-amber-200" viewBox="0 0 20 20" fill="currentColor">
              <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
              <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

export default function BeeSpeciesGallery() {
  const beeSpecies: BeeSpeciesProps[] = [
    {
      name: "Honey Bees",
      image: "/honey-bees.jpg",
      description: "Honey bees are social insects that live in colonies of up to 60,000 individuals. They're essential pollinators for agriculture and produce honey from flower nectar. When they establish hives in structures, professional relocation is recommended to preserve these beneficial insects while protecting your property."
    },
    {
      name: "Bumble Bees",
      image: "/bumble-bees.jpg",
      description: "Bumble bees are large, fuzzy pollinators that nest in small colonies (50-400 bees) in ground cavities or dense grass. They're generally docile unless their nest is disturbed. As important native pollinators, bumble bee nests should be left alone when possible or professionally relocated if they pose risks."
    },
    {
      name: "Carpenter Bees",
      image: "/carpenter-bees.jpg",
      description: "Carpenter bees are solitary bees that drill perfectly round holes in wood to create nesting galleries. While they're beneficial pollinators, they can cause structural damage over time. Males lack stingers but may hover aggressively; females rarely sting unless handled. Management typically involves treating and sealing existing holes."
    },
    {
      name: "Sweat Bees",
      image: "/sweat-bees.jpg",
      description: "Sweat bees are small, metallic-colored bees attracted to human perspiration. They nest in the ground and are important pollinators for many plants. Their sting is mild compared to other bees. Management is rarely necessary unless nests are in high-traffic areas, in which case professional relocation is recommended."
    },
    {
      name: "Mason Bees",
      image: "/mason-bees.jpg",
      description: "Mason bees are solitary, gentle pollinators that nest in hollow stems or holes in wood. They're excellent orchard pollinators, working in cooler and wetter conditions than honey bees. They rarely sting and pose minimal threat to structures. Many gardeners actually encourage mason bees by providing nesting blocks."
    },
    {
      name: "Africanized Honey Bees",
      image: "/africanized-honey-bees.jpg",
      description: "Africanized honey bees (sometimes called 'killer bees') are a hybrid strain that looks identical to European honey bees but are more defensive of their colonies. They respond faster and in greater numbers when threatened. Professional removal is essential for these colonies, as their aggressive defense behavior can pose serious risks."
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-b from-amber-50/30 to-white relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute -top-20 right-20 w-64 h-64 bg-amber-100/30 rounded-full blur-3xl"></div>
        <div className="absolute bottom-40 -left-20 w-72 h-72 bg-amber-100/20 rounded-full blur-3xl"></div>
        <div className="absolute top-1/3 left-1/2 w-40 h-40 bg-amber-100/10 rounded-full blur-2xl"></div>
        <div className="absolute top-20 left-20 w-6 h-6 bg-amber-400 rounded-full animate-pulse-slow"></div>
        <div className="absolute bottom-20 right-20 w-4 h-4 bg-amber-400 rounded-full animate-pulse-slow"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <span className="inline-block px-3 py-1 bg-gradient-to-r from-amber-100 to-amber-200 text-amber-700 text-sm font-semibold rounded-full mb-3">
            BEE IDENTIFICATION GUIDE
          </span>
          <h2 className="text-4xl font-bold mb-4 text-gray-900">
            Common Bee <span className="bg-gradient-to-r from-amber-600 to-amber-700 bg-clip-text text-transparent">Species</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-amber-600 to-amber-700 mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Hover over or tap on each bee species to learn about their characteristics, behaviors, and the appropriate management approaches for these important pollinators.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {beeSpecies.map((species, index) => (
            <BeeSpecies
              key={index}
              name={species.name}
              image={species.image}
              description={species.description}
            />
          ))}
        </div>

        <div className="mt-12 text-center">
          <div className="bg-white p-6 rounded-xl shadow-lg max-w-2xl mx-auto border border-amber-100 transform hover:shadow-xl transition-all duration-300 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-16 h-16">
              <div className="absolute top-0 left-0 w-16 h-2 bg-gradient-to-r from-amber-500 to-amber-400"></div>
              <div className="absolute top-0 left-0 w-2 h-16 bg-gradient-to-b from-amber-500 to-amber-400"></div>
            </div>
            <div className="absolute top-0 right-0 w-16 h-16">
              <div className="absolute top-0 right-0 w-16 h-2 bg-gradient-to-l from-amber-500 to-amber-400"></div>
              <div className="absolute top-0 right-0 w-2 h-16 bg-gradient-to-b from-amber-500 to-amber-400"></div>
            </div>
            <div className="absolute bottom-0 left-0 w-16 h-16">
              <div className="absolute bottom-0 left-0 w-16 h-2 bg-gradient-to-r from-amber-500 to-amber-400"></div>
              <div className="absolute bottom-0 left-0 w-2 h-16 bg-gradient-to-t from-amber-500 to-amber-400"></div>
            </div>
            <div className="absolute bottom-0 right-0 w-16 h-16">
              <div className="absolute bottom-0 right-0 w-16 h-2 bg-gradient-to-l from-amber-500 to-amber-400"></div>
              <div className="absolute bottom-0 right-0 w-2 h-16 bg-gradient-to-t from-amber-500 to-amber-400"></div>
            </div>

            <div className="relative z-10 py-2">
              <h3 className="text-xl font-semibold mb-3 text-gray-900">Need help with bee identification or removal?</h3>
              <p className="text-gray-600 mb-4">Our bee specialists can identify the species on your property and recommend the most appropriate, environmentally responsible solution.</p>
              <a href="/contact" className="inline-block bg-gradient-to-r from-amber-600 to-amber-700 hover:from-amber-700 hover:to-amber-800 text-white font-bold py-3 px-8 rounded-full transition-all duration-300 transform hover:scale-105">
                Schedule a Consultation
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

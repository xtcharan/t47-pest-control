"use client";

import { useState } from 'react';
import Image from 'next/image';

interface SilverfishSpeciesProps {
  name: string;
  scientificName: string;
  image: string;
  description: string;
}

const SilverfishSpecies = ({ species }: { species: SilverfishSpeciesProps }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="relative overflow-hidden rounded-xl shadow-lg group cursor-pointer transition-all duration-300 hover:shadow-xl"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative h-[220px] w-full overflow-hidden">
        <Image
          src={species.image}
          alt={`${species.name} - T47 Pest Control`}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-110"
          sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
        />

        {/* Gradient overlay that's always visible */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-60 transition-opacity duration-300 group-hover:opacity-80"></div>

        {/* Species name - always visible */}
        <div className="absolute bottom-3 left-3 z-10">
          <h3 className="text-white font-bold text-lg drop-shadow-md">{species.name}</h3>
          <p className="text-white/70 text-sm italic">{species.scientificName}</p>
        </div>

        {/* Description panel that slides up on hover */}
        <div
          className={`absolute inset-0 bg-gradient-to-br from-gray-600/90 to-gray-700/90 p-5 flex flex-col justify-center transition-all duration-500 ease-in-out ${
            isHovered ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'
          }`}
        >
          <div className="absolute top-0 right-0 w-20 h-20 bg-gray-500/20 rounded-full blur-xl -mr-5 -mt-5"></div>

          <h3 className="text-white font-bold text-xl mb-1">{species.name}</h3>
          <p className="text-white/80 text-xs italic mb-3">{species.scientificName}</p>

          <p className="text-white/90 text-sm leading-relaxed mb-3">
            {species.description}
          </p>

          <div className="absolute bottom-2 right-2">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-200" viewBox="0 0 20 20" fill="currentColor">
              <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
              <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

export default function SilverfishSpeciesGuide() {
  const silverfishSpecies: SilverfishSpeciesProps[] = [
    {
      name: "Common Silverfish",
      scientificName: "Lepisma saccharina",
      image: "/common-silverfish.jpg",
      description: "Professional silverfish control in Melbourne protects your belongings from these destructive pests. These small, wingless insects have a silvery-blue appearance and fish-like movements. They prefer dark, damp environments and feed on cellulose, damaging books and clothing. Our treatments eliminate pests and address moisture conditions."
    },
    {
      name: "Firebrat",
      scientificName: "Thermobia domestica",
      image: "/firebrat-species.jpg",
      description: "Expert firebrat elimination in Victoria targets these heat-loving pests. Close relatives of silverfish with a mottled gray-brown appearance, firebrats prefer hot environments near heat sources like ovens and furnaces. They damage paper products and textiles. Our treatments focus on heat sources where these pests congregate."
    },
    {
      name: "Four-Lined Silverfish",
      scientificName: "Ctenolepisma lineata",
      image: "/four-lined-silverfish.jpg",
      description: "Professional four-lined silverfish control protects libraries and museums from these adaptable pests. Larger than common silverfish with dark lines down their bodies, they thrive in varying humidity levels. They damage book collections, archives, and fabrics. Our integrated approach provides protection for valuable collections."
    }
  ];

  return (
    <section className="py-16 bg-gray-50 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-1/3 h-1/3 bg-gray-100/50 rounded-br-[100px] z-0"></div>
        <div className="absolute bottom-0 right-0 w-1/4 h-1/4 bg-gray-100/30 rounded-tl-[100px] z-0"></div>
        <div className="absolute top-1/3 right-10 w-6 h-6 bg-gray-200 rounded-full z-0"></div>
        <div className="absolute bottom-1/4 left-20 w-4 h-4 bg-gray-300 rounded-full z-0"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <span className="inline-block px-3 py-1 bg-gray-200 text-gray-700 text-sm font-semibold rounded-full mb-3">
            IDENTIFICATION GUIDE
          </span>
          <h2 className="text-4xl font-bold mb-4 text-gray-900">
            Common Silverfish <span className="text-gray-600">Species</span>
          </h2>
          <div className="w-24 h-1 bg-gray-600 mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Hover over or tap on each silverfish species to learn more about their characteristics, behaviors, and the most effective control methods for each.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {silverfishSpecies.map((species, index) => (
            <SilverfishSpecies
              key={index}
              species={species}
            />
          ))}
        </div>

        <div className="bg-gray-100 rounded-xl p-8 max-w-4xl mx-auto">
          <div className="flex flex-col md:flex-row items-center gap-6">
            <div className="md:w-1/4 flex justify-center">
              <div className="w-20 h-20 bg-gray-200 rounded-full flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
            </div>
            <div className="md:w-3/4">
              <h3 className="text-2xl font-bold text-gray-800 mb-3 text-center md:text-left">Why Silverfish Control Matters</h3>
              <p className="text-gray-700 mb-4">
                While silverfish don't bite or transmit diseases, they can cause significant damage to valuable items in your home. Their preference for starchy materials puts books, documents, photos, wallpaper, and clothing at risk. Additionally, their presence often indicates moisture issues that could lead to more serious problems like mold or structural damage. Our professional silverfish control not only eliminates these pests but also helps identify and address the underlying conditions that attract them, providing comprehensive protection for your home and belongings.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-12 text-center">
          <a href="/contact" className="inline-block bg-gradient-to-r from-gray-600 to-gray-700 hover:from-gray-700 hover:to-gray-800 text-white font-bold py-3 px-8 rounded-full transition-all duration-300 transform hover:scale-105 shadow-md">
            Schedule Your Silverfish Control Consultation
          </a>
        </div>
      </div>
    </section>
  );
}

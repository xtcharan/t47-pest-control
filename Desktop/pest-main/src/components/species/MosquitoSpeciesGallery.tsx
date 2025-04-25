"use client";

import { useState } from 'react';
import Image from 'next/image';

interface MosquitoSpeciesProps {
  name: string;
  image: string;
  description: string;
}

const MosquitoSpecies = ({ name, image, description }: MosquitoSpeciesProps) => {
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
          alt={`${name} - T47 Pest Control`}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-110"
          sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
        <div className="absolute bottom-0 left-0 right-0 p-4">
          <h3 className="text-white font-bold text-lg">{name}</h3>
        </div>

        {/* Description panel that slides up on hover */}
        <div
          className={`absolute inset-0 bg-gradient-to-br from-red-600/90 to-red-700/90 p-4 flex flex-col justify-center transition-all duration-500 ease-in-out ${
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

export default function MosquitoSpeciesGallery() {
  const mosquitoSpecies: MosquitoSpeciesProps[] = [
    {
      name: "Aedes Mosquitoes",
      image: "/aedes-mosquito.jpg",
      description: "Aedes mosquitoes are known for transmitting diseases like dengue, Zika, and yellow fever. They're aggressive daytime biters with distinctive black and white markings. They breed in small containers of water and are common in urban areas."
    },
    {
      name: "Anopheles Mosquitoes",
      image: "/anopheles-mosquito.jpg",
      description: "Anopheles mosquitoes are the primary vectors of malaria. They're most active at dusk and dawn, and can be identified by their resting position, where their abdomen is raised at an angle to the surface. They breed in clean, still water."
    },
    {
      name: "Culex Mosquitoes",
      image: "/culex-mosquito.jpg",
      description: "Culex mosquitoes are common throughout Australia and can transmit West Nile virus and Japanese encephalitis. They're primarily active at night and breed in stagnant, polluted water sources like storm drains and neglected pools."
    },
    {
      name: "Asian Tiger Mosquitoes",
      image: "/tiger-mosquito.jpg",
      description: "Asian Tiger mosquitoes are aggressive daytime biters with distinctive black and white striped legs and body. They can transmit dengue, chikungunya, and Zika viruses. They breed in small containers and are highly adaptable to urban environments."
    },
    {
      name: "Salt Marsh Mosquitoes",
      image: "/salt-marsh-mosquito.jpg",
      description: "Salt marsh mosquitoes breed in coastal areas and can travel up to 10 kilometers from their breeding sites. They're aggressive biters and can be a significant nuisance in coastal communities. They're most active at dawn and dusk."
    },
    {
      name: "House Mosquitoes",
      image: "/house-mosquito.jpg",
      description: "House mosquitoes are common indoor pests that breed in standing water around homes. They're primarily active at night and can transmit various diseases. They're known for their distinctive high-pitched buzzing sound."
    }
  ];

  return (
    <section className="py-16 bg-white relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-red-50/50 rounded-bl-[100px] z-0"></div>
        <div className="absolute bottom-0 left-0 w-1/4 h-1/4 bg-red-50/30 rounded-tr-[100px] z-0"></div>
        <div className="absolute top-1/3 left-10 w-6 h-6 bg-red-100 rounded-full z-0"></div>
        <div className="absolute bottom-1/4 right-20 w-4 h-4 bg-red-200 rounded-full z-0"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <span className="inline-block px-3 py-1 bg-gradient-to-r from-red-100 to-red-200 text-red-700 text-sm font-semibold rounded-full mb-3">
            IDENTIFICATION GUIDE
          </span>
          <h2 className="text-4xl font-bold mb-4 text-gray-900">
            Common Mosquito <span className="bg-gradient-to-r from-red-500 to-red-600 bg-clip-text text-transparent">Species</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-red-500 to-red-600 mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Hover over or tap on each mosquito species to learn more about their characteristics, behaviors, and the threats they pose to your health and comfort.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {mosquitoSpecies.map((species, index) => (
            <MosquitoSpecies
              key={index}
              name={species.name}
              image={species.image}
              description={species.description}
            />
          ))}
        </div>

        {/* Additional information box */}
        <div className="mt-16 bg-gray-50 rounded-xl overflow-hidden shadow-md">
          <div className="grid grid-cols-1 md:grid-cols-2">
            <div className="p-8 flex items-center">
              <div className="max-w-md">
                <h3 className="text-2xl font-bold mb-4 text-gray-900">Mosquito-Borne Disease Prevention</h3>
                <p className="text-gray-600 mb-6">
                  Mosquitoes are vectors for numerous diseases including dengue fever, Ross River virus, Barmah Forest virus, and potentially malaria. Professional mosquito control is essential for protecting your family's health.
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start">
                    <span className="inline-flex items-center justify-center w-5 h-5 mr-2 mt-1 bg-gradient-to-r from-red-500 to-red-600 rounded-full flex-shrink-0">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 text-white" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </span>
                    <span className="text-gray-600">Eliminate standing water around your property</span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-flex items-center justify-center w-5 h-5 mr-2 mt-1 bg-gradient-to-r from-red-500 to-red-600 rounded-full flex-shrink-0">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 text-white" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </span>
                    <span className="text-gray-600">Use screens on windows and doors</span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-flex items-center justify-center w-5 h-5 mr-2 mt-1 bg-gradient-to-r from-red-500 to-red-600 rounded-full flex-shrink-0">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 text-white" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </span>
                    <span className="text-gray-600">Apply mosquito repellent when outdoors</span>
                  </li>
                </ul>
                <a href="/contact" className="inline-block bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white font-bold py-3 px-8 rounded-full transition-all duration-300 transform hover:scale-105">
                  Schedule Mosquito Control
                </a>
              </div>
            </div>
            <div className="relative h-[300px] md:h-auto">
              <Image
                src="/mosquito-prevention.jpg"
                alt="Mosquito Prevention"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black/40 to-transparent"></div>
            </div>
          </div>
        </div>

        {/* Not sure what type of mosquitoes you have? */}
        <div className="mt-16 text-center">
          <div className="bg-white p-8 rounded-xl shadow-md max-w-2xl mx-auto border border-gray-100">
            <div className="relative z-10 py-2">
              <h3 className="text-xl font-semibold mb-3 text-gray-900">Not sure what type of mosquitoes you have?</h3>
              <p className="text-gray-600 mb-4">Our expert technicians can identify any mosquito species and provide targeted treatment solutions.</p>
              <a href="/contact" className="inline-block bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white font-bold py-3 px-8 rounded-full transition-all duration-300 transform hover:scale-105">
                Schedule an Inspection
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

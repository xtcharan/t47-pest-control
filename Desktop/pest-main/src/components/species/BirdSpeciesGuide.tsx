"use client";

import { useState } from 'react';
import Image from 'next/image';

interface BirdSpeciesProps {
  name: string;
  scientificName: string;
  image: string;
  description: string;
}

const BirdSpecies = ({ species }: { species: BirdSpeciesProps }) => {
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
          className={`absolute inset-0 bg-gradient-to-br from-blue-600/90 to-blue-700/90 p-5 flex flex-col justify-center transition-all duration-500 ease-in-out ${
            isHovered ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'
          }`}
        >
          <div className="absolute top-0 right-0 w-20 h-20 bg-blue-500/20 rounded-full blur-xl -mr-5 -mt-5"></div>

          <h3 className="text-white font-bold text-xl mb-1">{species.name}</h3>
          <p className="text-white/80 text-xs italic mb-3">{species.scientificName}</p>

          <p className="text-white/90 text-sm leading-relaxed mb-3">
            {species.description}
          </p>

          <div className="absolute bottom-2 right-2">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-200" viewBox="0 0 20 20" fill="currentColor">
              <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
              <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

export default function BirdSpeciesGuide() {

  const birdSpecies: BirdSpeciesProps[] = [
    {
      name: "Pigeons (Rock Doves)",
      scientificName: "Columba livia",
      image: "/pigeon-species.jpg",
      description: "Professional pigeon control services in Melbourne protect properties from these common urban pests. Pigeons breed year-round, producing up to 6 broods annually. Their acidic droppings damage buildings, while nests block drainage systems. Our humane exclusion methods prevent property damage and health risks."
    },
    {
      name: "European Starlings",
      scientificName: "Sturnus vulgaris",
      image: "/starling-species.jpg",
      description: "Expert starling control in Victoria manages these invasive birds that form massive flocks. Starlings displace native species and create significant noise and mess. Their acidic droppings damage buildings and vehicles. Our exclusion systems protect commercial and residential properties."
    },
    {
      name: "House Sparrows",
      scientificName: "Passer domesticus",
      image: "/sparrow-species.jpg",
      description: "Professional sparrow control in Melbourne prevents damage from these small birds. Sparrows nest in building cavities and vents, producing up to 4 broods yearly. Their nests block ventilation and create fire hazards near electrical equipment. Our vent protection systems prevent costly damage."
    },
    {
      name: "Seagulls",
      scientificName: "Larus species",
      image: "/seagull-species.jpg",
      description: "Humane seagull management in coastal Victoria protects properties while complying with wildlife laws. These protected birds cause problems with aggressive behavior during nesting season. Their droppings damage roofing materials and create slip hazards on walkways."
    },
    {
      name: "Woodpeckers",
      scientificName: "Picidae family",
      image: "/woodpecker-species.jpg",
      description: "Specialized woodpecker deterrents in Melbourne protect wooden structures from these protected birds. Woodpeckers drill holes in buildings for nesting or feeding on insects. Their damage concentrates on wood siding, trim, and eaves, allowing moisture intrusion and structural damage."
    },
    {
      name: "Canadian Geese",
      scientificName: "Branta canadensis",
      image: "/geese-species.jpg",
      description: "Professional geese management in Victoria protects commercial properties and public spaces. Geese create problems in parks and corporate campuses with droppings that contaminate water and create slip hazards. They become aggressive during nesting season, posing risks to people."
    }
  ];

  return (
    <section className="py-16 bg-white relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-blue-50/50 rounded-bl-[100px] z-0"></div>
        <div className="absolute bottom-0 left-0 w-1/4 h-1/4 bg-blue-50/30 rounded-tr-[100px] z-0"></div>
        <div className="absolute top-1/3 left-10 w-6 h-6 bg-blue-100 rounded-full z-0"></div>
        <div className="absolute bottom-1/4 right-20 w-4 h-4 bg-blue-200 rounded-full z-0"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <span className="inline-block px-3 py-1 bg-blue-100 text-blue-800 text-sm font-semibold rounded-full mb-3">
            KNOW YOUR PEST BIRDS
          </span>
          <h2 className="text-4xl font-bold mb-4 text-gray-900">
            Common Nuisance <span className="text-blue-600">Bird Species</span>
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Understanding the specific bird species causing problems is essential for effective control. Each species has unique behaviors and requires tailored management approaches.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {birdSpecies.map((species, index) => (
            <BirdSpecies
              key={index}
              species={species}
            />
          ))}
        </div>

        <div className="bg-blue-50 rounded-xl p-8 max-w-4xl mx-auto">
          <div className="flex flex-col md:flex-row items-center gap-6">
            <div className="md:w-1/4 flex justify-center">
              <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
            </div>
            <div className="md:w-3/4">
              <h3 className="text-2xl font-bold text-blue-800 mb-3 text-center md:text-left">Wildlife Protection Compliance</h3>
              <p className="text-gray-700 mb-4">
                Many bird species are protected under federal, state, or local wildlife laws, including the Migratory Bird Treaty Act. Our bird management approaches comply with all applicable regulations while effectively addressing bird problems. We use only humane, non-lethal methods that discourage birds from using your property without causing harm. Our specialists stay current on wildlife protection laws to ensure all control methods are legally compliant while still providing effective results.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-12 text-center">
          <a href="/contact" className="inline-block bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white font-bold py-3 px-8 rounded-full transition-all duration-300 transform hover:scale-105 shadow-md">
            Schedule Your Bird Control Consultation
          </a>
        </div>
      </div>
    </section>
  );
}

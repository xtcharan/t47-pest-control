"use client";

import { useState } from 'react';
import Image from 'next/image';

interface FlySpeciesProps {
  name: string;
  scientificName: string;
  image: string;
  description: string;
}

const FlySpecies = ({ species }: { species: FlySpeciesProps }) => {
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
          className={`absolute inset-0 bg-gradient-to-br from-amber-600/90 to-amber-700/90 p-5 flex flex-col justify-center transition-all duration-500 ease-in-out ${
            isHovered ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'
          }`}
        >
          <div className="absolute top-0 right-0 w-20 h-20 bg-amber-500/20 rounded-full blur-xl -mr-5 -mt-5"></div>

          <h3 className="text-white font-bold text-xl mb-1">{species.name}</h3>
          <p className="text-white/80 text-xs italic mb-3">{species.scientificName}</p>

          <p className="text-white/90 text-sm leading-relaxed mb-3">
            {species.description}
          </p>

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

export default function FlySpeciesGuide() {
  const flySpecies: FlySpeciesProps[] = [
    {
      name: "House Flies",
      scientificName: "Musca domestica",
      image: "/house-fly-species.jpg",
      description: "Professional house fly control for Melbourne homes and businesses. These medium-sized flies spread over 100 pathogens including salmonella and E. coli. They reproduce rapidly, with females laying up to 500 eggs, completing their lifecycle in just 7-10 days. Our treatments eliminate breeding sites and prevent food contamination."
    },
    {
      name: "Fruit Flies",
      scientificName: "Drosophila species",
      image: "/fruit-fly-species.jpg",
      description: "Expert fruit fly extermination in Victoria targets these small kitchen pests. Just 3-4mm with red eyes, they're attracted to fermenting fruits and vegetables. Their short lifecycle (8-10 days) allows rapid population growth. Our eco-friendly solutions eliminate breeding sites and protect food storage areas."
    },
    {
      name: "Drain Flies",
      scientificName: "Psychodidae family",
      image: "/drain-fly-species.jpg",
      description: "Professional drain fly removal in Melbourne eliminates these bathroom and kitchen pests. These small insects (2-5mm) have a fuzzy, moth-like appearance and breed in organic matter in drains. They indicate plumbing issues or blockages. Our drain treatments remove breeding material and prevent reinfestation."
    },
    {
      name: "Blow Flies",
      scientificName: "Calliphoridae family",
      image: "/blow-fly-species.jpg",
      description: "Expert blow fly control in Victoria targets these metallic flies. Larger than house flies with a blue-green sheen, they're attracted to decaying meat and animal carcasses. They indicate dead animals in walls or crawl spaces. We locate and remove decay sources while eliminating adult flies."
    },
    {
      name: "Cluster Flies",
      scientificName: "Pollenia species",
      image: "/cluster-fly-species.jpg",
      description: "Professional cluster fly control in Melbourne prevents seasonal invasions. These flies parasitize earthworms during their larval stage and enter homes in large numbers during fall to overwinter in attics and wall voids. Our preventative treatments protect your property before invasion season."
    },
    {
      name: "Phorid Flies",
      scientificName: "Phoridae family",
      image: "/phorid-fly-species.jpg",
      description: "Expert phorid fly elimination in Victoria targets these small humpbacked flies. At just 2-4mm, they run across surfaces rather than flying and breed in moist, decaying matter. They signal hidden moisture problems or plumbing leaks. Our inspections identify and treat concealed breeding sources."
    }
  ];

  return (
    <section className="py-16 bg-gray-50 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-1/3 h-1/3 bg-amber-50/50 rounded-br-[100px] z-0"></div>
        <div className="absolute bottom-0 right-0 w-1/4 h-1/4 bg-amber-50/30 rounded-tl-[100px] z-0"></div>
        <div className="absolute top-1/3 right-10 w-6 h-6 bg-amber-100 rounded-full z-0"></div>
        <div className="absolute bottom-1/4 left-20 w-4 h-4 bg-amber-200 rounded-full z-0"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <span className="inline-block px-3 py-1 bg-amber-100 text-amber-800 text-sm font-semibold rounded-full mb-3">
            KNOW YOUR ENEMY
          </span>
          <h2 className="text-4xl font-bold mb-4 text-gray-900">
            Common Fly <span className="text-amber-600">Species Guide</span>
          </h2>
          <div className="w-24 h-1 bg-amber-600 mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Different fly species require different control approaches. Learn to identify common fly species, the problems they cause, and the most effective control methods for each.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {flySpecies.map((species, index) => (
            <FlySpecies
              key={index}
              species={species}
            />
          ))}
        </div>

        <div className="bg-amber-50 rounded-xl p-8 max-w-4xl mx-auto">
          <div className="flex flex-col md:flex-row items-center gap-6">
            <div className="md:w-1/4 flex justify-center">
              <div className="w-20 h-20 bg-amber-100 rounded-full flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-amber-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
            </div>
            <div className="md:w-3/4">
              <h3 className="text-2xl font-bold text-amber-800 mb-3 text-center md:text-left">The Importance of Proper Fly Identification</h3>
              <p className="text-gray-700 mb-4">
                Accurate fly identification is crucial for effective control. Different fly species have distinct breeding habits, food preferences, and behavior patterns that require targeted treatment approaches. For example, fruit fly control focuses on eliminating fermenting food sources, while drain fly management requires addressing organic buildup in plumbing. House flies need broader sanitation improvements and exclusion methods. Our pest control specialists are trained to identify specific fly species and implement customized treatment plans that address the unique challenges each species presents. This targeted approach provides more effective, longer-lasting results than generic fly control methods.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-12 text-center">
          <a href="/contact" className="inline-block bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white font-bold py-3 px-8 rounded-full transition-all duration-300 transform hover:scale-105 shadow-md">
            Schedule Your Fly Control Consultation
          </a>
        </div>
      </div>
    </section>
  );
}

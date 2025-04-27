"use client";

import { useState } from 'react';
import Image from 'next/image';
import ServiceImage from '@/components/common/ServiceImage';

interface CockroachSpeciesProps {
  name: string;
  image: string;
  description: string;
}

const CockroachSpecies = ({ name, image, description }: CockroachSpeciesProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isTapped, setIsTapped] = useState(false);

  // Handle tap for mobile devices
  const handleTap = () => {
    setIsTapped(!isTapped);
  };

  return (
    <div
      className="relative overflow-hidden rounded-xl shadow-lg group cursor-pointer transition-all duration-300 hover:shadow-xl"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={handleTap}
    >
      <div className="relative h-[220px] w-full overflow-hidden">
        <ServiceImage
          serviceName={image}
          alt={`${name} - T47 Pest Control`}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-110"
          sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
          lazyLoad={true}
          threshold={0.1}
          rootMargin="200px"
          placeholderColor="#e8f0f9"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
        <div className="absolute bottom-0 left-0 right-0 p-4 flex justify-between items-center">
          <h3 className="text-white font-bold text-lg">{name}</h3>
          {/* Touch indicator for mobile */}
          <div className="md:hidden flex items-center">
            <span className="text-xs text-white/80 mr-1">Tap</span>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-white/80" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M6.672 1.911a1 1 0 10-1.932.518l.259.966a1 1 0 001.932-.518l-.26-.966zM2.429 4.74a1 1 0 10-.517 1.932l.966.259a1 1 0 00.517-1.932l-.966-.26zm8.814-.569a1 1 0 00-1.415-1.414l-.707.707a1 1 0 101.415 1.415l.707-.708zm-7.071 7.072l.707-.707A1 1 0 003.465 9.12l-.708.707a1 1 0 001.415 1.415zm3.2-5.171a1 1 0 00-1.3 1.3l4 10a1 1 0 001.823.075l1.38-2.759 3.018 3.02a1 1 0 001.414-1.415l-3.019-3.02 2.76-1.379a1 1 0 00-.076-1.822l-10-4z" clipRule="evenodd" />
            </svg>
          </div>
        </div>

        {/* Desktop hover effect */}
        <div
          className={`absolute inset-0 bg-gradient-to-br from-blue-600/90 to-red-600/90 p-4 flex-col justify-center transition-all duration-500 ease-in-out hidden md:flex ${
            isHovered ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'
          }`}
        >
          <div className="absolute top-0 right-0 w-20 h-20 bg-blue-500/20 rounded-full blur-xl -mr-5 -mt-5"></div>
          <h3 className="text-white font-bold text-lg mb-2">{name}</h3>
          <p className="text-white/90 text-sm leading-relaxed">{description}</p>
          <div className="absolute bottom-2 right-2">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-200" viewBox="0 0 20 20" fill="currentColor">
              <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
              <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd" />
            </svg>
          </div>
        </div>

        {/* Mobile tap effect - optimized for performance */}
        <div
          className={`absolute inset-0 bg-gradient-to-br from-blue-600/90 to-red-600/90 p-4 flex flex-col justify-center transition-all duration-300 ease-in-out md:hidden ${
            isTapped ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'
          }`}
        >
          <h3 className="text-white font-bold text-lg mb-2">{name}</h3>
          <p className="text-white/90 text-sm leading-relaxed">{description}</p>
          <div className="absolute top-2 right-2">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white/80" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

export default function CockroachSpeciesGallery() {
  const [showMoreSpecies, setShowMoreSpecies] = useState(false);

  const cockroachSpecies: CockroachSpeciesProps[] = [
    {
      name: "German Cockroach",
      image: "german-cockroach",
      description: "German cockroaches are small (1/2 to 5/8 inch) with two dark parallel stripes on their pronotum. They're the most common indoor species, reproduce rapidly, and are difficult to control. They prefer warm, humid environments like kitchens and bathrooms."
    },
    {
      name: "American Cockroach",
      image: "american-cockroach",
      description: "American cockroaches are large (1.5 to 2 inches) with a reddish-brown color and yellowish figure-8 pattern on their pronotum. They prefer warm, moist areas like basements, sewers, and steam tunnels. They can fly short distances and are commonly found in commercial buildings."
    },
    {
      name: "Oriental Cockroach",
      image: "oriental-cockroach",
      description: "Oriental cockroaches are dark brown to black, about 1 inch long, and have a greasy appearance. They prefer cool, damp areas like basements, crawl spaces, and drains. They move slowly and emit a strong, unpleasant odor. They're often called 'water bugs' or 'black beetles'."
    },
    {
      name: "Brown-Banded Cockroach",
      image: "brown-banded-cockroach",
      description: "Brown-banded cockroaches are small (1/2 inch) with distinctive light brown bands across their wings and abdomen. Unlike other species, they prefer warm, dry areas at higher elevations in rooms, like upper cabinets, behind picture frames, and near ceilings."
    },
    {
      name: "Australian Cockroach",
      image: "australian-cockroach",
      description: "Australian cockroaches are similar to American cockroaches but slightly smaller (1.25 inches) with yellow margins on their thorax and yellow streaks on their wings. They prefer warm, humid environments and are often found in greenhouses, around plants, and in moist areas."
    },
    {
      name: "Smoky Brown Cockroach",
      image: "smoky-brown-cockroach",
      description: "Smoky brown cockroaches are large (1.25 to 1.5 inches) with a uniform mahogany brown color. They require high humidity and are often found outdoors in flowerbeds, tree holes, and mulch. They enter homes during dry conditions or cold weather and are attracted to lights."
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-b from-blue-50/30 to-white relative overflow-hidden">
      {/* Decorative elements */}
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
            IDENTIFICATION GUIDE
          </span>
          <h2 className="text-4xl font-bold mb-4 text-gray-900">
            Common Cockroach <span className="bg-gradient-to-r from-blue-600 to-red-600 bg-clip-text text-transparent">Species</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-red-600 mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-3xl mx-auto">
            <span className="hidden md:inline">Hover over</span><span className="md:hidden">Tap</span> on each cockroach species to learn more about their characteristics, behaviors, and the threats they pose to your home or business.
          </p>
        </div>

        {/* Desktop and tablet grid */}
        <div className="hidden sm:grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {cockroachSpecies.map((species, index) => (
            <CockroachSpecies
              key={index}
              name={species.name}
              image={species.image}
              description={species.description}
            />
          ))}
        </div>

        {/* Mobile optimized grid - only show first 3 species initially */}
        <div className="sm:hidden">
          <div className="grid grid-cols-1 gap-4">
            {cockroachSpecies.slice(0, 3).map((species, index) => (
              <CockroachSpecies
                key={index}
                name={species.name}
                image={species.image}
                description={species.description}
              />
            ))}
          </div>

          {/* Load more button for mobile */}
          <div className="mt-4 text-center">
            <button
              type="button"
              onClick={() => {
                // Toggle state
                setShowMoreSpecies(!showMoreSpecies);

                // If showing more species, scroll to the button after a short delay
                // to allow the new content to render
                if (!showMoreSpecies) {
                  setTimeout(() => {
                    const moreSpeciesBtn = document.getElementById('more-species-btn');
                    if (moreSpeciesBtn) {
                      moreSpeciesBtn.scrollIntoView({ behavior: 'smooth', block: 'center' });
                    }
                  }, 100);
                }
              }}
              id="more-species-btn"
              className="px-4 py-2 bg-gradient-to-r from-blue-100 to-red-100 text-blue-700 rounded-lg font-medium hover:from-blue-200 hover:to-red-200 transition-colors"
            >
              {showMoreSpecies ? 'Show Less' : 'Show More Species'}
            </button>
          </div>

          {/* Additional species for mobile that can be toggled */}
          {showMoreSpecies && (
            <div className="mt-4">
              <div className="grid grid-cols-1 gap-4">
                {cockroachSpecies.slice(3).map((species, index) => (
                  <CockroachSpecies
                    key={index + 3}
                    name={species.name}
                    image={species.image}
                    description={species.description}
                  />
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Call to action */}
        <div className="mt-12">
          {/* Desktop version */}
          <div className="hidden md:block">
            <div className="bg-white p-6 rounded-xl shadow-lg max-w-2xl mx-auto border border-blue-100 transform hover:shadow-xl transition-all duration-300 relative overflow-hidden">
              {/* Decorative corner accents */}
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
                <h3 className="text-xl font-semibold mb-3 text-gray-900">Not sure what type of cockroaches you have?</h3>
                <p className="text-gray-600 mb-4">Our expert technicians can identify any cockroach species and provide targeted treatment solutions.</p>
                <a href="/contact" className="inline-block bg-gradient-to-r from-blue-600 to-red-600 hover:from-blue-700 hover:to-red-700 text-white font-bold py-3 px-8 rounded-full transition-all duration-300 transform hover:scale-105">
                  Schedule an Inspection
                </a>
              </div>
            </div>
          </div>

          {/* Mobile version - modern and professional design */}
          <div className="md:hidden">
            <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100">
              {/* Modern card layout with image on the left */}
              <div className="flex flex-row">
                {/* Image section - takes 40% width */}
                <div className="w-2/5 relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-600/90 to-red-600/90">
                    {/* Abstract pattern overlay */}
                    <div className="absolute inset-0 opacity-20">
                      <div className="absolute top-0 right-0 w-16 h-16 bg-white/30 rounded-full -mr-8 -mt-8"></div>
                      <div className="absolute bottom-0 left-0 w-16 h-16 bg-white/20 rounded-full -ml-8 -mb-8"></div>
                    </div>
                    {/* Cockroach icon */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="w-12 h-12 text-white/40">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.5 9.75a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="m8.25 12.75-3.375 3.375M12.75 12.75l3.375 3.375M12 13.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 13.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                      </svg>
                    </div>
                  </div>
                </div>

                {/* Content section - takes 60% width */}
                <div className="w-3/5 p-4">
                  <h3 className="text-base font-bold text-gray-900 mb-2">Not sure what type of cockroaches you have?</h3>
                  <p className="text-gray-700 text-xs mb-3 leading-tight">Our experts can identify any species and provide targeted solutions.</p>
                  <a
                    href="/contact"
                    className="block w-full text-center bg-gradient-to-r from-blue-600 to-red-600 text-white font-semibold text-sm py-2 px-3 rounded-md transition-all duration-300 shadow-sm hover:from-blue-700 hover:to-red-700"
                  >
                    Schedule Inspection
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

"use client";

import { useState } from 'react';
import Image from 'next/image';
import ServiceImage from '@/components/common/ServiceImage';

interface CockroachStageProps {
  name: string;
  image: string;
  description: string;
}

const CockroachStage = ({ name, image, description }: CockroachStageProps) => {
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
          alt={`${name} - Cockroach Lifecycle Stage`}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-110"
          sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
          lazyLoad={true}
          threshold={0.1}
          rootMargin="200px"
          placeholderColor="#f9e8e8"
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
          className={`absolute inset-0 bg-gradient-to-br from-red-600/90 to-red-700/90 p-4 flex-col justify-center transition-all duration-500 ease-in-out hidden md:flex ${
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

        {/* Mobile tap effect - optimized for performance */}
        <div
          className={`absolute inset-0 bg-gradient-to-br from-red-600/90 to-red-700/90 p-4 flex flex-col justify-center transition-all duration-300 ease-in-out md:hidden ${
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

export default function CockroachLifecycleGallery() {
  const [showMoreStages, setShowMoreStages] = useState(false);

  const cockroachStages: CockroachStageProps[] = [
    {
      name: "Ootheca (Egg Case)",
      image: "cockroach-ootheca",
      description: "Cockroaches produce egg cases called oothecae, containing 14-48 eggs depending on the species. These protective capsules are resistant to many pesticides and can remain viable for months. A single female can produce multiple oothecae in her lifetime, contributing to rapid population growth."
    },
    {
      name: "Hatching",
      image: "cockroach-hatching",
      description: "When conditions are favorable, nymphs emerge from the ootheca. This hatching process typically occurs in warm, humid environments. Newly hatched nymphs are small, pale versions of adults and immediately begin searching for food and shelter in your home."
    },
    {
      name: "Nymph Stage 1",
      image: "cockroach-nymph1",
      description: "Early-stage nymphs are smaller and lighter in color than adults. They undergo a series of molts as they grow, shedding their exoskeleton to accommodate their increasing size. These young cockroaches are already capable of spreading bacteria and contaminating surfaces."
    },
    {
      name: "Nymph Stage 2",
      image: "cockroach-nymph2",
      description: "Middle-stage nymphs develop darker coloration and grow larger with each molt. They become more mobile and venture further from harborage areas in search of food and water. Their small size allows them to access tight spaces that adult cockroaches cannot reach."
    },
    {
      name: "Nymph Stage 3",
      image: "cockroach-nymph3",
      description: "Late-stage nymphs closely resemble adults but lack fully developed wings and reproductive capabilities. They continue to molt and grow, with wing pads becoming more visible. These older nymphs are increasingly resilient and can survive harsher conditions."
    },
    {
      name: "Adult",
      image: "cockroach-adult",
      description: "Fully mature cockroaches have completed their final molt and developed wings (in most species). Adults are reproductive-capable and focus on breeding to continue the infestation cycle. A single female can produce hundreds of offspring in her lifetime, making professional control essential."
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-b from-red-50/30 to-white relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute -top-20 right-20 w-64 h-64 bg-red-100/30 rounded-full blur-3xl"></div>
        <div className="absolute bottom-40 -left-20 w-72 h-72 bg-red-100/20 rounded-full blur-3xl"></div>
        <div className="absolute top-1/3 left-1/2 w-40 h-40 bg-red-100/10 rounded-full blur-2xl"></div>
        <div className="absolute top-20 left-20 w-6 h-6 bg-red-400 rounded-full animate-pulse-slow"></div>
        <div className="absolute bottom-20 right-20 w-4 h-4 bg-red-400 rounded-full animate-pulse-slow"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <span className="inline-block px-3 py-1 bg-gradient-to-r from-red-100 to-red-200 text-red-700 text-sm font-semibold rounded-full mb-3">
            UNDERSTANDING THE ENEMY
          </span>
          <h2 className="text-4xl font-bold mb-4 text-gray-900">
            Cockroach <span className="bg-gradient-to-r from-red-600 to-red-700 bg-clip-text text-transparent">Life Cycle</span> Stages
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-red-600 to-red-700 mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-3xl mx-auto">
            <span className="hidden md:inline">Hover over</span><span className="md:hidden">Tap</span> on each lifecycle stage to learn how cockroaches develop from eggs to adults, and why professional treatment is essential to break this reproductive cycle.
          </p>
        </div>

        {/* Desktop and tablet grid */}
        <div className="hidden sm:grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {cockroachStages.map((stage, index) => (
            <CockroachStage
              key={index}
              name={stage.name}
              image={stage.image}
              description={stage.description}
            />
          ))}
        </div>

        {/* Mobile optimized grid - only show first 3 stages initially */}
        <div className="sm:hidden">
          <div className="grid grid-cols-1 gap-4">
            {cockroachStages.slice(0, 3).map((stage, index) => (
              <CockroachStage
                key={index}
                name={stage.name}
                image={stage.image}
                description={stage.description}
              />
            ))}
          </div>

          {/* Load more button for mobile */}
          <div className="mt-4 text-center">
            <button
              type="button"
              onClick={() => {
                // Toggle state
                setShowMoreStages(!showMoreStages);

                // If showing more stages, scroll to the button after a short delay
                // to allow the new content to render
                if (!showMoreStages) {
                  setTimeout(() => {
                    const moreStagesBtn = document.getElementById('more-stages-btn');
                    if (moreStagesBtn) {
                      moreStagesBtn.scrollIntoView({ behavior: 'smooth', block: 'center' });
                    }
                  }, 100);
                }
              }}
              id="more-stages-btn"
              className="px-4 py-2 bg-red-100 text-red-700 rounded-lg font-medium hover:bg-red-200 transition-colors"
            >
              {showMoreStages ? 'Show Less' : 'Show More Stages'}
            </button>
          </div>

          {/* Additional stages for mobile that can be toggled */}
          {showMoreStages && (
            <div className="mt-4">
              <div className="grid grid-cols-1 gap-4">
                {cockroachStages.slice(3).map((stage, index) => (
                  <CockroachStage
                    key={index + 3}
                    name={stage.name}
                    image={stage.image}
                    description={stage.description}
                  />
                ))}
              </div>
            </div>
          )}
        </div>

        <div className="mt-12">
          {/* Desktop version */}
          <div className="hidden md:block">
            <div className="bg-gradient-to-r from-red-50 to-red-100 rounded-xl p-6 shadow-lg">
              <div className="flex flex-row items-center gap-6">
                <div className="w-1/3 relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-red-500/20 to-red-600/20 rounded-xl transform rotate-3"></div>
                  <div className="relative z-10 bg-white p-1 rounded-xl shadow-md transform -rotate-2">
                    <div className="relative h-[200px] rounded-lg overflow-hidden">
                      <ServiceImage
                        serviceName="cockroach-lifecycle-diagram"
                        alt="Cockroach Lifecycle Diagram"
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, 33vw"
                        lazyLoad={true}
                        threshold={0.1}
                        rootMargin="100px"
                        placeholderColor="#f9e8e8"
                      />
                    </div>
                  </div>
                </div>

                <div className="w-2/3 relative z-10 py-2">
                  <h3 className="text-xl font-semibold mb-3 text-gray-900">Dealing with a cockroach infestation?</h3>
                  <p className="text-gray-600 mb-4">Our cockroach specialists can identify infestations at any stage and implement targeted treatments to break the reproductive cycle.</p>
                  <a href="/contact" className="inline-block bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white font-bold py-3 px-8 rounded-full transition-all duration-300 transform hover:scale-105">
                    Schedule a Professional Treatment
                  </a>
                </div>
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
                  <div className="absolute inset-0">
                    <ServiceImage
                      serviceName="cockroach-lifecycle-diagram"
                      alt="Cockroach Lifecycle Diagram"
                      fill
                      className="object-cover"
                      sizes="40vw"
                      lazyLoad={true}
                      threshold={0.1}
                      rootMargin="50px"
                      placeholderColor="#f9e8e8"
                    />
                    {/* Overlay gradient */}
                    <div className="absolute inset-0 bg-gradient-to-r from-black/40 to-transparent"></div>
                  </div>
                </div>

                {/* Content section - takes 60% width */}
                <div className="w-3/5 p-4">
                  <h3 className="text-base font-bold text-gray-900 mb-2">Dealing with a cockroach infestation?</h3>
                  <p className="text-gray-700 text-xs mb-3 leading-tight">Our specialists can identify and treat infestations at any stage.</p>
                  <a
                    href="/contact"
                    className="block w-full text-center bg-red-600 text-white font-semibold text-sm py-2 px-3 rounded-md transition-all duration-300 shadow-sm hover:bg-red-700"
                  >
                    Schedule Treatment
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

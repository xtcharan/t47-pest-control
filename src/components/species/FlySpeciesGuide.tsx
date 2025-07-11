"use client";

import { useState } from 'react';
import Image from 'next/image';

interface FlySpeciesProps {
  id: string;
  name: string;
  tabName: string;
  scientificName: string;
  image: string;
  description: string;
  appearance: string;
  lifestyle?: string;
  habits?: string;
}

export default function FlySpeciesGuide() {
  const [activeSpecies, setActiveSpecies] = useState(0);

  const flySpecies: FlySpeciesProps[] = [
    {
      id: "house-fly",
      name: "House Fly",
      tabName: "HOUSE FLY",
      scientificName: "Musca domestica",
      image: "/house-fly-species.jpg",
      description: "Professional house fly control for Melbourne homes and businesses. These medium-sized flies spread over 100 pathogens including salmonella and E. coli.",
      appearance: "House flies are medium-sized flies, about 6mm. They are usually black or dark gray and have a unique pattern of veins on their wings, as well as numerous hairs.",
      lifestyle: "Commonly found in homes, restaurants, and areas with food waste. House flies are attracted to decaying organic matter, garbage, and food sources. They reproduce rapidly, with females laying up to 500 eggs.",
      habits: "House flies are commonly found around garbage bins, kitchens, and dining areas. They can spread over 100 pathogens including salmonella and E. coli. They have a powdery appearance when crushed and are active during daylight hours."
    },
    {
      id: "blowfly",
      name: "Blowfly",
      tabName: "BLOWFLY",
      scientificName: "Calliphoridae family",
      image: "/blow-fly-species.jpg",
      description: "Expert blow fly control in Victoria targets these metallic flies. Larger than house flies with a blue-green sheen, they're attracted to decaying meat and animal carcasses.",
      appearance: "Blowflies are larger than house flies with a distinctive metallic blue-green sheen. They have robust bodies and are typically 6-14mm in length.",
      lifestyle: "These flies are attracted to decaying organic matter, particularly meat and animal carcasses. They play a role in decomposition but can be problematic in homes.",
      habits: "Blowflies indicate the presence of dead animals in walls or crawl spaces. They can quickly locate and colonize decaying matter, making them important indicators of sanitation issues."
    },
    {
      id: "fruit-fly",
      name: "Fruit Fly",
      tabName: "FRUIT FLY",
      scientificName: "Drosophila species",
      image: "/fruit-fly-species.jpg",
      description: "Expert fruit fly extermination in Victoria targets these small kitchen pests. Just 3-4mm with red eyes, they're attracted to fermenting fruits and vegetables.",
      appearance: "Fruit flies are very small (3-4mm) with distinctive red eyes. They have tan to brownish bodies and are often seen hovering around ripe or rotting fruit.",
      lifestyle: "These flies have a very short lifecycle (8-10 days) which allows for rapid population growth. They thrive in warm, moist environments with fermenting organic matter.",
      habits: "Fruit flies are commonly found in kitchens, around garbage disposals, and near overripe fruit. They can also breed in drains, mops, and cleaning rags."
    },
    {
      id: "moth-fly",
      name: "Moth Fly",
      tabName: "MOTH FLY",
      scientificName: "Psychodidae family",
      image: "/drain-fly-species.jpg",
      description: "Professional drain fly removal in Melbourne eliminates these bathroom and kitchen pests. These small insects have a fuzzy, moth-like appearance.",
      appearance: "Moth flies (or Drain flies) are small, about 3mm. They are usually black or brown and have a unique pattern of veins on their wings, as well as numerous hairs.",
      lifestyle: "Commonly found in damp environments, often mistaken for gnats. Moth flies can be found in moist, highly organic debris areas and also around standing water.",
      habits: "Moth flies are commonly found in grease traps and sewage treatment works, where they breed their larvae. When they're in homes, they can be found in bathrooms, damp cupboards, and other locations where moisture and debris are present."
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-1/3 h-1/3 bg-blue-700/20 rounded-br-[100px] z-0"></div>
        <div className="absolute bottom-0 right-0 w-1/4 h-1/4 bg-blue-600/10 rounded-tl-[100px] z-0"></div>
        <div className="absolute top-1/3 right-10 w-6 h-6 bg-blue-400/30 rounded-full z-0"></div>
        <div className="absolute bottom-1/4 left-20 w-4 h-4 bg-blue-300/40 rounded-full z-0"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4 text-white">
            Common Fly Species in Melbourne
          </h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            Identify and understand the different fly species commonly found in Melbourne homes and businesses
          </p>
        </div>

        {/* Desktop Layout */}
        <div className="hidden md:block">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {/* Species List */}
            <div className="lg:col-span-1">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 sticky top-8">
                <h3 className="text-xl font-bold text-white mb-6">Common Fly Species</h3>
                <div className="space-y-2">
                  {flySpecies.map((species, index) => (
                    <button
                      key={species.id}
                      type="button"
                      onClick={() => setActiveSpecies(index)}
                      className={`w-full text-left px-4 py-3 rounded-lg font-semibold text-sm transition-all duration-300 ${
                        activeSpecies === index
                          ? 'bg-white text-blue-900 shadow-lg'
                          : 'text-white hover:bg-white/20'
                      }`}
                    >
                      {species.name.toUpperCase()}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Main Content */}
            <div className="lg:col-span-2">
              <div className="space-y-8">
                {/* Image Section - Full Width Landscape */}
                <div className="relative h-[300px] lg:h-[400px] rounded-xl overflow-hidden shadow-xl">
                  <Image
                    src={flySpecies[activeSpecies].image}
                    alt={`${flySpecies[activeSpecies].name} - T47 Pest Control`}
                    fill
                    className="object-cover"
                    style={flySpecies[activeSpecies].id === 'blowfly' ? { objectPosition: 'center 60%' } : {}}
                    sizes="(max-width: 1024px) 100vw, 66vw"
                  />
                </div>

                {/* Content Section - Full Width Below Image */}
                <div className="text-white">
                  <div className="text-center mb-8">
                    <h3 className="text-4xl font-bold mb-3">
                      {flySpecies[activeSpecies].name.toUpperCase()}
                    </h3>
                    <p className="text-blue-200 italic text-xl">
                      {flySpecies[activeSpecies].scientificName}
                    </p>
                  </div>

                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    <div>
                      <h4 className="text-lg font-semibold text-blue-200 mb-3">DESCRIPTION</h4>
                      <p className="text-white/90 leading-relaxed mb-6">
                        {flySpecies[activeSpecies].description}
                      </p>

                      <h4 className="text-lg font-semibold text-blue-200 mb-3">APPEARANCE</h4>
                      <p className="text-white/90 leading-relaxed">
                        {flySpecies[activeSpecies].appearance}
                      </p>
                    </div>

                    <div>
                      {flySpecies[activeSpecies].lifestyle && (
                        <div className="mb-6">
                          <h4 className="text-lg font-semibold text-blue-200 mb-3">LIFESTYLE</h4>
                          <p className="text-white/90 leading-relaxed">
                            {flySpecies[activeSpecies].lifestyle}
                          </p>
                        </div>
                      )}

                      {flySpecies[activeSpecies].habits && (
                        <div>
                          <h4 className="text-lg font-semibold text-blue-200 mb-3">HABITS</h4>
                          <p className="text-white/90 leading-relaxed">
                            {flySpecies[activeSpecies].habits}
                          </p>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Layout */}
        <div className="md:hidden">
          {/* Species Selector */}
          <div className="mb-8 px-4">
            <div className="relative">
              <label className="block text-white/80 text-sm font-medium mb-3 text-center">
                Select Fly Species to Learn More
              </label>
              <div className="relative">
                <select
                  value={activeSpecies}
                  onChange={(e) => setActiveSpecies(Number(e.target.value))}
                  className="w-full bg-white/95 backdrop-blur-sm text-blue-900 font-semibold py-4 px-5 pr-12 rounded-xl border-2 border-white/20 shadow-lg appearance-none focus:outline-none focus:ring-2 focus:ring-blue-300 focus:border-transparent transition-all duration-300"
                  aria-label="Select fly species"
                >
                  {flySpecies.map((species, index) => (
                    <option key={species.id} value={index} className="py-2">
                      {species.name}
                    </option>
                  ))}
                </select>
                {/* Custom dropdown arrow */}
                <div className="absolute inset-y-0 right-0 flex items-center pr-4 pointer-events-none">
                  <svg className="w-5 h-5 text-blue-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </div>
            </div>
          </div>

          {/* Content Area */}
          <div className="mx-4">
            {/* Image Section - Landscape */}
            <div className="relative h-[250px] rounded-xl overflow-hidden shadow-xl mb-6">
              <Image
                src={flySpecies[activeSpecies].image}
                alt={`${flySpecies[activeSpecies].name} - T47 Pest Control`}
                fill
                className="object-cover"
                sizes="100vw"
              />
            </div>

            {/* Content Section */}
            <div className="text-white">
              <h3 className="text-2xl font-bold mb-2">
                {flySpecies[activeSpecies].name.toUpperCase()}
              </h3>
              <p className="text-blue-200 italic mb-4 text-base">
                {flySpecies[activeSpecies].scientificName}
              </p>

              <div className="space-y-4">
                <div>
                  <p className="text-white/90 text-sm leading-relaxed mb-4">
                    {flySpecies[activeSpecies].description}
                  </p>
                </div>

                <div>
                  <h4 className="text-base font-semibold text-blue-200 mb-2">APPEARANCE</h4>
                  <p className="text-white/90 text-sm leading-relaxed">
                    {flySpecies[activeSpecies].appearance}
                  </p>
                </div>

                {flySpecies[activeSpecies].lifestyle && (
                  <div>
                    <h4 className="text-base font-semibold text-blue-200 mb-2">LIFESTYLE</h4>
                    <p className="text-white/90 text-sm leading-relaxed">
                      {flySpecies[activeSpecies].lifestyle}
                    </p>
                  </div>
                )}

                {flySpecies[activeSpecies].habits && (
                  <div>
                    <h4 className="text-base font-semibold text-blue-200 mb-2">HABITS</h4>
                    <p className="text-white/90 text-sm leading-relaxed">
                      {flySpecies[activeSpecies].habits}
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-12 text-center">
          <a href="/contact" className="inline-block bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white font-bold py-3 px-8 rounded-full transition-all duration-300 transform hover:scale-105 shadow-md">
            Schedule Your Fly Control Consultation
          </a>
        </div>
      </div>
    </section>
  );
}

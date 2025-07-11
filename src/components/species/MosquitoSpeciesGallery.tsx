"use client";

import { useState } from 'react';
import Image from 'next/image';

interface MosquitoSpeciesProps {
  id: string;
  name: string;
  tabName: string;
  scientificName: string;
  image: string;
  description: string;
  appearance: string;
  behavior: string;
  habitat: string;
  risks: string;
}

export default function MosquitoSpeciesGallery() {
  const [activeSpecies, setActiveSpecies] = useState(0);
  const mosquitoSpecies: MosquitoSpeciesProps[] = [
    {
      id: "house-mosquito",
      name: "House Mosquitoes",
      tabName: "HOUSE",
      scientificName: "Culex pipiens",
      image: "/house-mosquito.jpg",
      description: "Professional house mosquito control in Melbourne eliminates these common indoor pests. Our treatment programs target breeding sites and provide long-term protection from nuisance biting.",
      appearance: "Medium-sized brown mosquitoes (3-6mm) with no distinctive markings. Have short palps and relatively broad wings. Females slightly larger than males.",
      behavior: "Primarily nocturnal with peak activity at night. Known for their distinctive high-pitched buzzing sound. Prefer to rest indoors during daylight hours.",
      habitat: "Breed in standing water around homes including gutters, water tanks, and ornamental ponds. Can develop in relatively small amounts of water.",
      risks: "Vectors for West Nile virus and other encephalitis viruses. Significant nuisance pest causing sleep disruption and allergic reactions. Can transmit heartworm to pets."
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-blue-700/20 rounded-bl-[100px] z-0"></div>
        <div className="absolute bottom-0 left-0 w-1/4 h-1/4 bg-blue-600/10 rounded-tr-[100px] z-0"></div>
        <div className="absolute top-1/3 left-10 w-6 h-6 bg-blue-400/30 rounded-full z-0"></div>
        <div className="absolute bottom-1/4 right-20 w-4 h-4 bg-blue-300/40 rounded-full z-0"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="inline-block px-3 py-1 bg-blue-100/20 text-blue-100 text-sm font-semibold rounded-full mb-3">
            MOSQUITO SPECIES IDENTIFICATION GUIDE
          </span>
          <h2 className="text-4xl font-bold mb-4 text-white">
            Common Mosquito <span className="text-blue-300">Species</span> in Australia
          </h2>
          <div className="w-24 h-1 bg-blue-400 mx-auto mb-6"></div>
          <p className="text-blue-100 max-w-3xl mx-auto">
            Understanding the specific mosquito species in your area is crucial for effective control and disease prevention. Each species requires targeted management approaches.
          </p>
        </div>

        {/* Desktop Layout */}
        <div className="hidden md:block">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {/* Species List */}
            <div className="lg:col-span-1">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 sticky top-8">
                <h3 className="text-xl font-bold text-white mb-6">Common Mosquito Species</h3>
                <div className="space-y-2">
                  {mosquitoSpecies.map((species, index) => (
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
                      {species.tabName}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Main Content */}
            <div className="lg:col-span-2">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
                {/* Image Section */}
                <div className="relative h-[400px] lg:h-[500px] rounded-xl overflow-hidden shadow-xl">
                  <Image
                    src={mosquitoSpecies[activeSpecies].image}
                    alt={`${mosquitoSpecies[activeSpecies].name} - T47 Pest Control`}
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                </div>

                {/* Content Section */}
                <div className="text-white">
                  <h3 className="text-3xl font-bold mb-2">
                    {mosquitoSpecies[activeSpecies].name.toUpperCase()}
                  </h3>
                  <p className="text-blue-200 italic mb-6 text-lg">
                    {mosquitoSpecies[activeSpecies].scientificName}
                  </p>

                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-blue-300 mb-2">Description</h4>
                      <p className="text-white/90 text-sm leading-relaxed">
                        {mosquitoSpecies[activeSpecies].description}
                      </p>
                    </div>

                    <div>
                      <h4 className="font-semibold text-blue-300 mb-2">Appearance</h4>
                      <p className="text-white/90 text-sm leading-relaxed">
                        {mosquitoSpecies[activeSpecies].appearance}
                      </p>
                    </div>

                    <div>
                      <h4 className="font-semibold text-blue-300 mb-2">Behavior</h4>
                      <p className="text-white/90 text-sm leading-relaxed">
                        {mosquitoSpecies[activeSpecies].behavior}
                      </p>
                    </div>

                    <div>
                      <h4 className="font-semibold text-blue-300 mb-2">Habitat</h4>
                      <p className="text-white/90 text-sm leading-relaxed">
                        {mosquitoSpecies[activeSpecies].habitat}
                      </p>
                    </div>

                    <div>
                      <h4 className="font-semibold text-blue-300 mb-2">Health Risks</h4>
                      <p className="text-white/90 text-sm leading-relaxed">
                        {mosquitoSpecies[activeSpecies].risks}
                      </p>
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
                Select Mosquito Species to Learn More
              </label>
              <div className="relative">
                <select
                  value={activeSpecies}
                  onChange={(e) => setActiveSpecies(Number(e.target.value))}
                  className="w-full bg-white/95 backdrop-blur-sm text-blue-900 font-semibold py-4 px-5 pr-12 rounded-xl border-2 border-white/20 shadow-lg appearance-none focus:outline-none focus:ring-2 focus:ring-blue-300 focus:border-transparent transition-all duration-300"
                  aria-label="Select mosquito species"
                >
                  {mosquitoSpecies.map((species, index) => (
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
            {/* Image Section */}
            <div className="relative h-[300px] rounded-xl overflow-hidden shadow-xl mb-6">
              <Image
                src={mosquitoSpecies[activeSpecies].image}
                alt={`${mosquitoSpecies[activeSpecies].name} - T47 Pest Control`}
                fill
                className="object-cover"
                sizes="100vw"
              />
            </div>

            {/* Content Section */}
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-white">
              <h3 className="text-2xl font-bold mb-2">
                {mosquitoSpecies[activeSpecies].name.toUpperCase()}
              </h3>
              <p className="text-blue-200 italic mb-6">
                {mosquitoSpecies[activeSpecies].scientificName}
              </p>

              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-blue-300 mb-2">Description</h4>
                  <p className="text-white/90 text-sm leading-relaxed">
                    {mosquitoSpecies[activeSpecies].description}
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold text-blue-300 mb-2">Appearance</h4>
                  <p className="text-white/90 text-sm leading-relaxed">
                    {mosquitoSpecies[activeSpecies].appearance}
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold text-blue-300 mb-2">Behavior</h4>
                  <p className="text-white/90 text-sm leading-relaxed">
                    {mosquitoSpecies[activeSpecies].behavior}
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold text-blue-300 mb-2">Habitat</h4>
                  <p className="text-white/90 text-sm leading-relaxed">
                    {mosquitoSpecies[activeSpecies].habitat}
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold text-blue-300 mb-2">Health Risks</h4>
                  <p className="text-white/90 text-sm leading-relaxed">
                    {mosquitoSpecies[activeSpecies].risks}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-12 text-center">
          <a href="/contact" className="inline-block bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white font-bold py-3 px-8 rounded-full transition-all duration-300 transform hover:scale-105 shadow-md">
            Schedule Your Mosquito Control
          </a>
        </div>
      </div>
    </section>
  );
}

"use client";

import { useState } from 'react';
import Image from 'next/image';

interface RodentSpeciesProps {
  id: string;
  name: string;
  scientificName: string;
  image: string;
  description: string;
  appearance: string;
  lifestyle: string;
  habits: string;
}

export default function RatsMiceSpeciesGallery() {
  const [activeSpecies, setActiveSpecies] = useState(0);

  const rodentSpecies: RodentSpeciesProps[] = [
    {
      id: "norway-rat",
      name: "Norway Rat",
      scientificName: "Rattus norvegicus",
      image: "/norway rat.jpg",
      description: "Professional Norway rat control in Melbourne eliminates these common urban pests that pose serious health risks and property damage.",
      appearance: "Norway rats have blunt snouts, small ears, and thick bodies reaching 7-10 inches in length with 6-8 inch tails. They're brown or gray in color with coarse fur.",
      lifestyle: "Excellent burrowers that typically nest at ground level or below. They're strong swimmers and prefer to live near water sources in sewers, basements, and ground floors.",
      habits: "Known for their cautious behavior and preference for protein-rich foods. They're nocturnal and can produce up to 7 litters per year with 8-12 pups each."
    },
    {
      id: "roof-rat",
      name: "Roof Rat",
      scientificName: "Rattus rattus",
      image: "/roof rat.jpg",
      description: "Expert roof rat removal in Victoria targets these agile climbers that infest attics, upper floors, and elevated areas of buildings.",
      appearance: "Sleeker bodies than Norway rats with pointed snouts and larger ears. Their tails are longer than their bodies, and they're typically black or dark brown.",
      lifestyle: "Excellent climbers that prefer elevated nesting areas like attics, trees, and upper building levels. They're more common in coastal and warmer regions.",
      habits: "Feed primarily on fruits, nuts, and seeds. They're less cautious than Norway rats and are excellent at accessing food sources in high places."
    },
    {
      id: "house-mouse",
      name: "House Mouse",
      scientificName: "Mus musculus",
      image: "/house mouse.jpg",
      description: "Professional house mouse control in Melbourne prevents contamination and damage from these prolific breeding pests found in homes and businesses.",
      appearance: "Small, slender bodies (2-4 inches) with relatively large ears and pointed snouts. Their tails are thin and about as long as their bodies.",
      lifestyle: "Curious by nature and excellent climbers that can squeeze through openings as small as a pencil (¼ inch). They prefer warm, hidden areas near food sources.",
      habits: "Primarily feed on grains and seeds but will eat almost anything available. They're prolific breeders, producing 5-10 litters per year."
    },
    {
      id: "field-mouse",
      name: "Field Mouse",
      scientificName: "Peromyscus maniculatus",
      image: "/field mouse.jpg",
      description: "Expert field mouse management in Victoria addresses these disease-carrying rodents that enter homes during colder months seeking shelter.",
      appearance: "Distinctively bi-colored tails (dark on top, light underneath) with larger eyes and ears compared to house mice. Bodies typically 3-4 inches long.",
      lifestyle: "Prefer outdoor habitats but often enter homes during colder months. They're excellent climbers and jumpers, capable of accessing elevated areas.",
      habits: "Known vectors for hantavirus. They primarily feed on seeds, nuts, insects, and berries. They're more active at night and less social than house mice."
    },
    {
      id: "pack-rat",
      name: "Pack Rat",
      scientificName: "Neotoma species",
      image: "/pack rat.jpg",
      description: "Professional pack rat control in Melbourne eliminates these collecting rodents that build large nests and hoard objects in homes and sheds.",
      appearance: "Larger rodents with furry tails, large ears, and prominent eyes. They have soft, dense fur and are typically gray-brown in color.",
      lifestyle: "Known for collecting or 'trading' objects, often leaving a new item in place of something they've taken. They build large, complex nests called middens.",
      habits: "These nests can be used for generations and contain food caches, debris, and collected items. They primarily feed on plants, fruits, and seeds."
    },
    {
      id: "juvenile-rats",
      name: "Juvenile Rats",
      scientificName: "Rattus species (young)",
      image: "/juvelinerats.jpg",
      description: "Early identification of juvenile rats is crucial for effective control before they reach sexual maturity and begin rapid reproduction cycles.",
      appearance: "Young rats can be mistaken for mice due to their smaller size, but they have proportionally smaller ears and feet compared to their body size than mice do.",
      lifestyle: "Grow rapidly, reaching sexual maturity in just 5-6 weeks. They follow similar patterns to adult rats but are more vulnerable to control measures.",
      habits: "Early identification is crucial for effective control, as a single pair of rats can produce up to 2,000 descendants in a year if left unchecked."
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-400/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-300/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4 text-white">
            Common Rodent Species in Melbourne
          </h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            Identify and understand the different rodent species commonly found in Melbourne homes and businesses
          </p>
        </div>

        {/* Desktop Layout */}
        <div className="hidden md:block">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {/* Species List */}
            <div className="lg:col-span-1">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 sticky top-8">
                <h3 className="text-xl font-bold text-white mb-6">Common Rodent Species</h3>
                <div className="space-y-2">
                  {rodentSpecies.map((species, index) => (
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
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
                {/* Image Section */}
                <div className="relative h-[400px] lg:h-[500px] rounded-xl overflow-hidden shadow-xl">
                  <Image
                    src={rodentSpecies[activeSpecies].image}
                    alt={`${rodentSpecies[activeSpecies].name} - T47 Pest Control`}
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                </div>

                {/* Content Section */}
                <div className="text-white">
                  <h3 className="text-3xl font-bold mb-2">
                    {rodentSpecies[activeSpecies].name.toUpperCase()}
                  </h3>
                  <p className="text-blue-200 italic mb-6 text-lg">
                    {rodentSpecies[activeSpecies].scientificName}
                  </p>

                  <div className="space-y-6">
                    <div>
                      <p className="text-white/90 leading-relaxed mb-4">
                        {rodentSpecies[activeSpecies].description}
                      </p>
                    </div>

                    <div>
                      <h4 className="text-lg font-semibold text-blue-200 mb-2">APPEARANCE</h4>
                      <p className="text-white/90 leading-relaxed">
                        {rodentSpecies[activeSpecies].appearance}
                      </p>
                    </div>

                    <div>
                      <h4 className="text-lg font-semibold text-blue-200 mb-2">LIFESTYLE</h4>
                      <p className="text-white/90 leading-relaxed">
                        {rodentSpecies[activeSpecies].lifestyle}
                      </p>
                    </div>

                    <div>
                      <h4 className="text-lg font-semibold text-blue-200 mb-2">HABITS</h4>
                      <p className="text-white/90 leading-relaxed">
                        {rodentSpecies[activeSpecies].habits}
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
                Select Rodent Species to Learn More
              </label>
              <div className="relative">
                <select
                  value={activeSpecies}
                  onChange={(e) => setActiveSpecies(Number(e.target.value))}
                  className="w-full bg-white/95 backdrop-blur-sm text-blue-900 font-semibold py-4 px-5 pr-12 rounded-xl border-2 border-white/20 shadow-lg appearance-none focus:outline-none focus:ring-2 focus:ring-blue-300 focus:border-transparent transition-all duration-300"
                  aria-label="Select rodent species"
                >
                  {rodentSpecies.map((species, index) => (
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
                src={rodentSpecies[activeSpecies].image}
                alt={`${rodentSpecies[activeSpecies].name} - T47 Pest Control`}
                fill
                className="object-cover"
                sizes="100vw"
              />
            </div>

            {/* Content Section */}
            <div className="text-white">
              <h3 className="text-2xl font-bold mb-2">
                {rodentSpecies[activeSpecies].name.toUpperCase()}
              </h3>
              <p className="text-blue-200 italic mb-4 text-base">
                {rodentSpecies[activeSpecies].scientificName}
              </p>

              <div className="space-y-4">
                <div>
                  <p className="text-white/90 text-sm leading-relaxed mb-4">
                    {rodentSpecies[activeSpecies].description}
                  </p>
                </div>

                <div>
                  <h4 className="text-base font-semibold text-blue-200 mb-2">APPEARANCE</h4>
                  <p className="text-white/90 text-sm leading-relaxed">
                    {rodentSpecies[activeSpecies].appearance}
                  </p>
                </div>

                <div>
                  <h4 className="text-base font-semibold text-blue-200 mb-2">LIFESTYLE</h4>
                  <p className="text-white/90 text-sm leading-relaxed">
                    {rodentSpecies[activeSpecies].lifestyle}
                  </p>
                </div>

                <div>
                  <h4 className="text-base font-semibold text-blue-200 mb-2">HABITS</h4>
                  <p className="text-white/90 text-sm leading-relaxed">
                    {rodentSpecies[activeSpecies].habits}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <div className="bg-white/10 backdrop-blur-sm p-8 rounded-xl shadow-xl max-w-2xl mx-auto border border-white/20">
            <h3 className="text-2xl font-bold mb-4 text-white">Schedule Your Rodent Control Consultation</h3>
            <p className="text-white/90 mb-6 leading-relaxed">
              Don't let rodents threaten your family's health and property. Our expert technicians provide comprehensive rodent elimination and prevention services.
            </p>
            <a
              href="/contact"
              className="inline-block bg-white text-blue-900 font-bold py-4 px-8 rounded-full hover:bg-blue-50 transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              Get Free Quote Today
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

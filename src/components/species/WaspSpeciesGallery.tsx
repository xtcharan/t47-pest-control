"use client";

import { useState } from 'react';
import Image from 'next/image';

interface WaspSpeciesProps {
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

export default function WaspSpeciesGuide() {
  const [activeSpecies, setActiveSpecies] = useState(0);

  const waspSpecies: WaspSpeciesProps[] = [
    {
      id: "paper-wasp",
      name: "Paper Wasp",
      tabName: "PAPER WASP",
      scientificName: "Polistes species",
      image: "/paper-wasps.jpg",
      description: "Professional paper wasp control for Melbourne homes and businesses. These semi-social wasps build distinctive umbrella-shaped nests with visible cells.",
      appearance: "Paper wasps are slender with long legs that dangle during flight. They're typically brown with yellow markings and have a narrow waist. Their wings fold lengthwise when at rest, and they measure 16-20mm in length.",
      lifestyle: "Paper wasps are semi-social insects that build open, umbrella-shaped nests from chewed wood pulp. They're less aggressive than other wasps but will defend their nests vigorously when threatened.",
      habits: "They feed on nectar, tree sap, and other insects, making them beneficial for gardens. However, they become problematic when nesting near human activity areas. They're most active during warm months and abandon nests in winter."
    },
    {
      id: "yellow-jacket",
      name: "Yellow Jacket",
      tabName: "YELLOW JACKET",
      scientificName: "Vespula species",
      image: "/yellow-jackets.jpg",
      description: "Expert yellow jacket extermination in Victoria targets these aggressive social wasps. Known for their distinctive yellow and black markings and painful stings.",
      appearance: "Yellow jackets are robust wasps with bright yellow and black stripes. They have a smooth, hairless body with a defined waist and measure 10-16mm in length. Their wings don't fold when at rest.",
      lifestyle: "Highly social wasps that build large colonies with thousands of individuals. They construct nests in ground cavities, wall voids, or attics using chewed wood pulp mixed with saliva.",
      habits: "Extremely aggressive when defending their nest and can sting multiple times. They're attracted to sweet foods, proteins, and garbage, making them common picnic and outdoor dining pests."
    },
    {
      id: "hornet",
      name: "Hornet",
      tabName: "HORNET",
      scientificName: "Vespa species",
      image: "/hornets.jpg",
      description: "Professional hornet removal in Melbourne targets these large, aggressive wasps that build dangerous nests in trees and building eaves.",
      appearance: "Hornets are the largest wasps, measuring 25-35mm in length. They have robust bodies with yellow and black markings, large heads, and prominent eyes. Their size makes them easily distinguishable from other wasps.",
      lifestyle: "Social wasps that build large, enclosed paper nests in trees, shrubs, or building eaves. Colonies can contain several hundred individuals with a complex social structure.",
      habits: "Extremely territorial and aggressive when their nest is threatened. They can sting multiple times and their venom is more potent than other wasps, making professional removal essential."
    },
    {
      id: "mud-dauber",
      name: "Mud Dauber",
      tabName: "MUD DAUBER",
      scientificName: "Sphecidae family",
      image: "/mud-daubers.jpg",
      description: "Professional mud dauber control in Melbourne addresses these solitary wasps that build distinctive mud tube nests on building structures.",
      appearance: "Mud daubers are slender wasps with a pronounced waist and long legs. They're typically black or metallic blue-black, measuring 12-25mm in length with a thread-like connection between thorax and abdomen.",
      lifestyle: "Solitary wasps that don't form colonies. Females build individual mud tube nests where they lay eggs and provision them with paralyzed spiders for their larvae.",
      habits: "Generally non-aggressive and rarely sting unless directly handled. They're beneficial as they control spider populations, but their mud nests can be unsightly on buildings."
    },
    {
      id: "european-wasp",
      name: "European Wasp",
      tabName: "EUROPEAN WASP",
      scientificName: "Vespula germanica",
      image: "/european-wasps.jpg",
      description: "Professional European wasp removal in Melbourne eliminates these invasive and highly aggressive pests that pose significant health risks to families.",
      appearance: "European wasps are similar to yellow jackets but slightly larger (12-17mm) with more defined yellow and black markings. They have distinctive anchor-shaped black markings on their face.",
      lifestyle: "Invasive social wasps that build massive underground or wall cavity nests. Colonies can contain up to 100,000 individuals, making them extremely dangerous when disturbed.",
      habits: "Highly aggressive and territorial, they can sting multiple times and release pheromones that attract other wasps to attack. They're attracted to meat, sweet foods, and pet food."
    },
    {
      id: "potter-wasp",
      name: "Potter Wasp",
      tabName: "POTTER WASP",
      scientificName: "Eumeninae subfamily",
      image: "/potter-wasps.jpg",
      description: "Professional potter wasp management in Melbourne addresses these beneficial solitary wasps that create distinctive pot-shaped mud nests.",
      appearance: "Potter wasps are small to medium-sized (8-20mm) with black bodies and yellow markings. They have a narrow waist and distinctive pot-shaped abdomen that gives them their name.",
      lifestyle: "Solitary wasps that create small, pot-like nests from mud. Each female builds her own nest and provisions it with paralyzed caterpillars for her offspring.",
      habits: "Generally non-aggressive and beneficial as they prey on caterpillars and other garden pests. Their distinctive pot-shaped nests are often found on plant stems or building structures."
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
            Common Wasp Species in Melbourne
          </h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            Identify and understand the different wasp species commonly found in Melbourne homes and businesses
          </p>
        </div>

        {/* Desktop Layout */}
        <div className="hidden md:block">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {/* Species List */}
            <div className="lg:col-span-1">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 sticky top-8">
                <h3 className="text-xl font-bold text-white mb-6">Common Wasp Species</h3>
                <div className="space-y-2">
                  {waspSpecies.map((species, index) => (
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
                    src={waspSpecies[activeSpecies].image}
                    alt={`${waspSpecies[activeSpecies].name} - T47 Pest Control`}
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                </div>

                {/* Content Section */}
                <div className="text-white">
                  <h3 className="text-3xl font-bold mb-2">
                    {waspSpecies[activeSpecies].name.toUpperCase()}
                  </h3>
                  <p className="text-blue-200 italic mb-6 text-lg">
                    {waspSpecies[activeSpecies].scientificName}
                  </p>

                  <div className="space-y-6">
                    <div>
                      <p className="text-white/90 leading-relaxed mb-4">
                        {waspSpecies[activeSpecies].description}
                      </p>
                    </div>

                    <div>
                      <h4 className="text-lg font-semibold text-blue-200 mb-2">APPEARANCE</h4>
                      <p className="text-white/90 leading-relaxed">
                        {waspSpecies[activeSpecies].appearance}
                      </p>
                    </div>

                    {waspSpecies[activeSpecies].lifestyle && (
                      <div>
                        <h4 className="text-lg font-semibold text-blue-200 mb-2">LIFESTYLE</h4>
                        <p className="text-white/90 leading-relaxed">
                          {waspSpecies[activeSpecies].lifestyle}
                        </p>
                      </div>
                    )}

                    {waspSpecies[activeSpecies].habits && (
                      <div>
                        <h4 className="text-lg font-semibold text-blue-200 mb-2">HABITS</h4>
                        <p className="text-white/90 leading-relaxed">
                          {waspSpecies[activeSpecies].habits}
                        </p>
                      </div>
                    )}
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
                Select Wasp Species to Learn More
              </label>
              <div className="relative">
                <select
                  value={activeSpecies}
                  onChange={(e) => setActiveSpecies(Number(e.target.value))}
                  className="w-full bg-white/95 backdrop-blur-sm text-blue-900 font-semibold py-4 px-5 pr-12 rounded-xl border-2 border-white/20 shadow-lg appearance-none focus:outline-none focus:ring-2 focus:ring-blue-300 focus:border-transparent transition-all duration-300"
                  aria-label="Select wasp species"
                >
                  {waspSpecies.map((species, index) => (
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
                src={waspSpecies[activeSpecies].image}
                alt={`${waspSpecies[activeSpecies].name} - T47 Pest Control`}
                fill
                className="object-cover"
                sizes="100vw"
              />
            </div>

            {/* Content Section */}
            <div className="text-white">
              <h3 className="text-2xl font-bold mb-2">
                {waspSpecies[activeSpecies].name.toUpperCase()}
              </h3>
              <p className="text-blue-200 italic mb-4 text-base">
                {waspSpecies[activeSpecies].scientificName}
              </p>

              <div className="space-y-4">
                <div>
                  <p className="text-white/90 text-sm leading-relaxed mb-4">
                    {waspSpecies[activeSpecies].description}
                  </p>
                </div>

                <div>
                  <h4 className="text-base font-semibold text-blue-200 mb-2">APPEARANCE</h4>
                  <p className="text-white/90 text-sm leading-relaxed">
                    {waspSpecies[activeSpecies].appearance}
                  </p>
                </div>

                {waspSpecies[activeSpecies].lifestyle && (
                  <div>
                    <h4 className="text-base font-semibold text-blue-200 mb-2">LIFESTYLE</h4>
                    <p className="text-white/90 text-sm leading-relaxed">
                      {waspSpecies[activeSpecies].lifestyle}
                    </p>
                  </div>
                )}

                {waspSpecies[activeSpecies].habits && (
                  <div>
                    <h4 className="text-base font-semibold text-blue-200 mb-2">HABITS</h4>
                    <p className="text-white/90 text-sm leading-relaxed">
                      {waspSpecies[activeSpecies].habits}
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <div className="bg-white/10 backdrop-blur-sm p-8 rounded-xl shadow-xl max-w-2xl mx-auto border border-white/20">
            <h3 className="text-2xl font-bold mb-4 text-white">Schedule Your Wasp Control Consultation</h3>
            <p className="text-white/90 mb-6 leading-relaxed">
              Don't let wasps threaten your family's safety. Our expert technicians provide safe, effective wasp removal and prevention services.
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

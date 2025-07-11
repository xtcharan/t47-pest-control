"use client";

import { useState } from 'react';
import Image from 'next/image';

interface CockroachSpeciesProps {
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

export default function CockroachSpeciesGuide() {
  const [activeSpecies, setActiveSpecies] = useState(0);

  const cockroachSpecies: CockroachSpeciesProps[] = [
    {
      id: "german-cockroach",
      name: "German Cockroach",
      tabName: "GERMAN",
      scientificName: "Blattella germanica",
      image: "/german-cockroach.jpg",
      description: "Professional German cockroach control for Melbourne homes and businesses. These small, prolific pests are the most common indoor cockroach species.",
      appearance: "German cockroaches are small (12-15mm) with two distinctive dark parallel stripes running down their pronotum. They're light brown to tan in color with a flattened, oval body and long antennae.",
      lifestyle: "Highly social insects that reproduce rapidly in warm, humid environments. They prefer temperatures around 30°C and are most active at night when they forage for food and water.",
      habits: "They're commonly found in kitchens, bathrooms, and areas with food waste. German cockroaches can spread over 30 types of bacteria and are known to trigger asthma and allergies."
    },
    {
      id: "american-cockroach",
      name: "American Cockroach",
      tabName: "AMERICAN",
      scientificName: "Periplaneta americana",
      image: "/american-cockroach.jpg",
      description: "Expert American cockroach extermination in Victoria targets these large, flying pests commonly found in commercial buildings and sewers.",
      appearance: "American cockroaches are large (35-40mm) with a reddish-brown color and distinctive yellowish figure-8 pattern on their pronotum. They have fully developed wings and can fly short distances.",
      lifestyle: "Prefer warm, moist environments like basements, sewers, steam tunnels, and boiler rooms. They can survive for months without food and up to a week without water.",
      habits: "Often called 'palmetto bugs,' they're attracted to fermenting foods and can fly toward light sources. They're excellent climbers and can enter buildings through drains and pipes."
    },
    {
      id: "oriental-cockroach",
      name: "Oriental Cockroach",
      tabName: "ORIENTAL",
      scientificName: "Blatta orientalis",
      image: "/oriental-cockroach.jpg",
      description: "Professional Oriental cockroach removal in Melbourne eliminates these water-loving pests that emit strong, unpleasant odors in your home.",
      appearance: "Oriental cockroaches are medium-sized (20-25mm) with a dark brown to black, glossy appearance. Males have wings covering 3/4 of their body, while females have wing stubs.",
      lifestyle: "Prefer cool, damp environments and are often found in basements, crawl spaces, drains, and around water pipes. They move more slowly than other cockroach species.",
      habits: "Often called 'water bugs' or 'black beetles,' they emit a strong, musty odor. They feed on garbage, sewage, and decaying organic matter, making them significant disease carriers."
    },
    {
      id: "brown-banded-cockroach",
      name: "Brown-Banded Cockroach",
      tabName: "BROWN-BANDED",
      scientificName: "Supella longipalpa",
      image: "/brown-banded-cockroach.jpg",
      description: "Professional brown-banded cockroach control in Melbourne targets these small pests that prefer warm, dry areas at higher elevations in rooms.",
      appearance: "Brown-banded cockroaches are small (10-14mm) with distinctive light brown bands across their wings and abdomen. Males have fully developed wings while females have shorter wings.",
      lifestyle: "Unlike other cockroach species, they prefer warm, dry areas and are often found at higher elevations in rooms, such as upper cabinets, behind picture frames, and near ceilings.",
      habits: "They're less dependent on moisture than other species and can be found throughout the home. They feed on starchy materials, book bindings, wallpaper paste, and fabric."
    },
    {
      id: "australian-cockroach",
      name: "Australian Cockroach",
      tabName: "AUSTRALIAN",
      scientificName: "Periplaneta australasiae",
      image: "/australian-cockroach.jpg",
      description: "Expert Australian cockroach extermination in Victoria addresses these outdoor pests that often invade homes seeking moisture and food sources.",
      appearance: "Australian cockroaches are similar to American cockroaches but slightly smaller (30-35mm) with yellow margins on their thorax and distinctive yellow streaks on their wings.",
      lifestyle: "Prefer warm, humid environments and are often found outdoors in greenhouses, around plants, and in moist garden areas. They enter homes during dry conditions.",
      habits: "They're attracted to plant materials and are often found in greenhouses, around potted plants, and in areas with high humidity. They can fly and are attracted to lights."
    },
    {
      id: "smoky-brown-cockroach",
      name: "Smoky Brown Cockroach",
      tabName: "SMOKY BROWN",
      scientificName: "Periplaneta fuliginosa",
      image: "/smoky-brown-cockroach.jpg",
      description: "Professional smoky brown cockroach removal in Melbourne eliminates these outdoor pests that require high humidity and enter homes during adverse weather.",
      appearance: "Smoky brown cockroaches are large (25-38mm) with a uniform mahogany brown color. They have a glossy appearance and fully developed wings that extend beyond their abdomen.",
      lifestyle: "Require high humidity to survive and are often found outdoors in flowerbeds, tree holes, mulch, and woodpiles. They enter homes during dry conditions or cold weather.",
      habits: "They're attracted to lights and can fly considerable distances. They feed on decaying organic matter and are often found around gutters, attics, and areas with moisture problems."
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
            Common Cockroach Species in Melbourne
          </h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            Identify and understand the different cockroach species commonly found in Melbourne homes and businesses
          </p>
        </div>

        {/* Desktop Layout */}
        <div className="hidden md:block">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {/* Species List */}
            <div className="lg:col-span-1">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 sticky top-8">
                <h3 className="text-xl font-bold text-white mb-6">Common Cockroach Species</h3>
                <div className="space-y-2">
                  {cockroachSpecies.map((species, index) => (
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
                    src={cockroachSpecies[activeSpecies].image}
                    alt={`${cockroachSpecies[activeSpecies].name} - T47 Pest Control`}
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                </div>

                {/* Content Section */}
                <div className="text-white">
                  <h3 className="text-3xl font-bold mb-2">
                    {cockroachSpecies[activeSpecies].name.toUpperCase()}
                  </h3>
                  <p className="text-blue-200 italic mb-6 text-lg">
                    {cockroachSpecies[activeSpecies].scientificName}
                  </p>

                  <div className="space-y-6">
                    <div>
                      <p className="text-white/90 leading-relaxed mb-4">
                        {cockroachSpecies[activeSpecies].description}
                      </p>
                    </div>

                    <div>
                      <h4 className="text-lg font-semibold text-blue-200 mb-2">APPEARANCE</h4>
                      <p className="text-white/90 leading-relaxed">
                        {cockroachSpecies[activeSpecies].appearance}
                      </p>
                    </div>

                    {cockroachSpecies[activeSpecies].lifestyle && (
                      <div>
                        <h4 className="text-lg font-semibold text-blue-200 mb-2">LIFESTYLE</h4>
                        <p className="text-white/90 leading-relaxed">
                          {cockroachSpecies[activeSpecies].lifestyle}
                        </p>
                      </div>
                    )}

                    {cockroachSpecies[activeSpecies].habits && (
                      <div>
                        <h4 className="text-lg font-semibold text-blue-200 mb-2">HABITS</h4>
                        <p className="text-white/90 leading-relaxed">
                          {cockroachSpecies[activeSpecies].habits}
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
                Select Cockroach Species to Learn More
              </label>
              <div className="relative">
                <select
                  value={activeSpecies}
                  onChange={(e) => setActiveSpecies(Number(e.target.value))}
                  className="w-full bg-white/95 backdrop-blur-sm text-blue-900 font-semibold py-4 px-5 pr-12 rounded-xl border-2 border-white/20 shadow-lg appearance-none focus:outline-none focus:ring-2 focus:ring-blue-300 focus:border-transparent transition-all duration-300"
                  aria-label="Select cockroach species"
                >
                  {cockroachSpecies.map((species, index) => (
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
                src={cockroachSpecies[activeSpecies].image}
                alt={`${cockroachSpecies[activeSpecies].name} - T47 Pest Control`}
                fill
                className="object-cover"
                sizes="100vw"
              />
            </div>

            {/* Content Section */}
            <div className="text-white">
              <h3 className="text-2xl font-bold mb-2">
                {cockroachSpecies[activeSpecies].name.toUpperCase()}
              </h3>
              <p className="text-blue-200 italic mb-4 text-base">
                {cockroachSpecies[activeSpecies].scientificName}
              </p>

              <div className="space-y-4">
                <div>
                  <p className="text-white/90 text-sm leading-relaxed mb-4">
                    {cockroachSpecies[activeSpecies].description}
                  </p>
                </div>

                <div>
                  <h4 className="text-base font-semibold text-blue-200 mb-2">APPEARANCE</h4>
                  <p className="text-white/90 text-sm leading-relaxed">
                    {cockroachSpecies[activeSpecies].appearance}
                  </p>
                </div>

                {cockroachSpecies[activeSpecies].lifestyle && (
                  <div>
                    <h4 className="text-base font-semibold text-blue-200 mb-2">LIFESTYLE</h4>
                    <p className="text-white/90 text-sm leading-relaxed">
                      {cockroachSpecies[activeSpecies].lifestyle}
                    </p>
                  </div>
                )}

                {cockroachSpecies[activeSpecies].habits && (
                  <div>
                    <h4 className="text-base font-semibold text-blue-200 mb-2">HABITS</h4>
                    <p className="text-white/90 text-sm leading-relaxed">
                      {cockroachSpecies[activeSpecies].habits}
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
            <h3 className="text-2xl font-bold mb-4 text-white">Schedule Your Cockroach Control Consultation</h3>
            <p className="text-white/90 mb-6 leading-relaxed">
              Don't let cockroaches contaminate your home. Our expert technicians provide comprehensive cockroach elimination and prevention services.
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

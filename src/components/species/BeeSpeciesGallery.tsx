"use client";

import { useState } from 'react';
import Image from 'next/image';

interface BeeSpeciesProps {
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

export default function BeeSpeciesGallery() {
  const [activeSpecies, setActiveSpecies] = useState(0);

  const beeSpecies: BeeSpeciesProps[] = [
    {
      id: "honey-bees",
      name: "Honey Bees",
      tabName: "HONEY BEES",
      scientificName: "Apis mellifera",
      image: "/honey-bees.jpg",
      description: "Professional honey bee management in Melbourne protects these essential pollinators while addressing structural concerns. Our specialists provide humane relocation services that preserve bee colonies while protecting your property.",
      appearance: "Golden-brown with darker bands, fuzzy bodies, and clear wings. Worker bees are 12-15mm long with pollen baskets on their hind legs. They have a distinctive amber coloration and are less aggressive than other bee species.",
      behavior: "Live in large colonies of 20,000-80,000 individuals with complex social structure. They communicate through dance language and produce honey and beeswax. Swarm when establishing new colonies, typically in spring.",
      habitat: "Prefer enclosed spaces like wall cavities, roof voids, and tree hollows. They need access to water and diverse flowering plants within 3km of their hive. Often found in suburban areas with gardens.",
      risks: "Generally docile but will defend their hive when threatened. Stings can cause allergic reactions in sensitive individuals. Structural damage from honey and wax buildup in wall cavities over time."
    },
    {
      id: "bumble-bees",
      name: "Bumble Bees",
      tabName: "BUMBLE BEES",
      scientificName: "Bombus species",
      image: "/bumble-bees.jpg",
      description: "Expert bumble bee management in Victoria focuses on conservation of these important native pollinators. Our approach prioritizes relocation and habitat preservation while addressing safety concerns.",
      appearance: "Large, robust, and very fuzzy with black and yellow stripes. Queens can reach 25mm, workers 15-20mm. They have a distinctive loud buzzing sound and appear more rounded than other bees.",
      behavior: "Form small colonies of 50-400 bees that last only one season. Queens hibernate over winter and establish new colonies in spring. They're excellent pollinators, working in cooler weather than honey bees.",
      habitat: "Nest in ground cavities, compost piles, dense grass, or abandoned rodent burrows. Prefer areas with diverse flowering plants and some shelter from wind and rain.",
      risks: "Generally very docile and rarely sting unless directly handled or nest is disturbed. Can sting multiple times unlike honey bees. Important pollinators that should be preserved when possible."
    },
    {
      id: "carpenter-bees",
      name: "Carpenter Bees",
      tabName: "CARPENTER BEES",
      scientificName: "Xylocopa species",
      image: "/carpenter-bees.jpg",
      description: "Specialized carpenter bee control in Melbourne addresses structural damage while preserving these beneficial pollinators. Our treatments focus on prevention and targeted management of problem areas.",
      appearance: "Large, robust bees (20-25mm) with shiny black abdomens and yellow thorax. They resemble bumble bees but have hairless, metallic-looking abdomens that reflect light.",
      behavior: "Solitary bees that drill perfectly round 16mm holes in wood for nesting. Males are territorial but cannot sting. Females rarely sting unless handled. Active from spring to early fall.",
      habitat: "Prefer unpainted, weathered softwood like pine, cedar, and redwood. Common in deck railings, eaves, window trim, and outdoor furniture. Avoid hardwoods and painted surfaces.",
      risks: "Structural damage from tunneling in wood over multiple seasons. Holes can weaken wooden structures and allow moisture intrusion. Staining from excrement below nest holes."
    },
    {
      id: "leafcutter-bees",
      name: "Leafcutter Bees",
      tabName: "LEAFCUTTER BEES",
      scientificName: "Megachile species",
      image: "/leafcutter-bees.jpg",
      description: "Professional leafcutter bee management in Victoria balances property protection with conservation of these efficient pollinators. Our approach focuses on habitat modification and targeted treatments.",
      appearance: "Medium-sized bees (10-15mm) with dark bodies and distinctive pollen-carrying brushes under their abdomens. They have large mandibles for cutting leaves and appear more slender than honey bees.",
      behavior: "Solitary bees that cut circular pieces from leaves to line their nests. Excellent pollinators that work quickly and efficiently. Active during warm months, with peak activity in summer.",
      habitat: "Nest in hollow stems, wood cavities, or gaps in structures. Use cut leaves to create individual brood cells. Prefer areas with diverse flowering plants and suitable nesting materials.",
      risks: "Minimal structural risk but can damage ornamental plants by cutting leaves. Generally beneficial insects that rarely require control measures. Non-aggressive and rarely sting."
    },
    {
      id: "mason-bees",
      name: "Mason Bees",
      tabName: "MASON BEES",
      scientificName: "Osmia species",
      image: "/mason-bees.jpg",
      description: "Expert mason bee management in Melbourne promotes these excellent pollinators while addressing any structural concerns. Our specialists provide guidance on encouraging beneficial bee populations.",
      appearance: "Small to medium bees (8-15mm) with dark metallic bodies, often with blue or green tints. Females carry pollen on their abdomens rather than legs, giving them a dusty appearance when active.",
      behavior: "Solitary bees that use mud or clay to build nest partitions. Extremely efficient pollinators, especially for fruit trees. Active in early spring when few other pollinators are available.",
      habitat: "Nest in hollow stems, holes in wood, or artificial bee houses. Prefer areas near mud sources and diverse flowering plants. Often found in gardens and orchards.",
      risks: "Virtually no risk to structures or humans. Very docile and rarely sting. Highly beneficial insects that many gardeners actively encourage through bee house installation."
    },
    {
      id: "africanized-honey-bees",
      name: "Africanized Honey Bees",
      tabName: "AFRICANIZED BEES",
      scientificName: "Apis mellifera scutellata hybrid",
      image: "/africanized-honey-bees.jpg",
      description: "Emergency Africanized bee control in Melbourne requires immediate professional intervention. Our specialists are trained in safe removal techniques for these highly defensive bee colonies.",
      appearance: "Virtually identical to European honey bees but slightly smaller. Cannot be reliably identified by appearance alone - behavioral differences and laboratory analysis are required for positive identification.",
      behavior: "Extremely defensive of their colonies, responding faster and in greater numbers to threats. They pursue perceived threats much farther than European honey bees and remain agitated longer after disturbance.",
      habitat: "Similar nesting preferences to honey bees but more likely to establish colonies in smaller spaces and unusual locations. They swarm more frequently and may abandon hives more readily.",
      risks: "Significantly higher risk of multiple stings due to aggressive defense behavior. Can pose serious danger to humans and pets. Require immediate professional removal - never attempt DIY control."
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
            BEE SPECIES IDENTIFICATION GUIDE
          </span>
          <h2 className="text-4xl font-bold mb-4 text-white">
            Common Bee <span className="text-blue-300">Species</span> in Australia
          </h2>
          <div className="w-24 h-1 bg-blue-400 mx-auto mb-6"></div>
          <p className="text-blue-100 max-w-3xl mx-auto">
            Understanding the specific bee species on your property is essential for appropriate management. Each species has unique behaviors and requires tailored approaches.
          </p>
        </div>

        {/* Desktop Layout */}
        <div className="hidden md:block">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {/* Species List */}
            <div className="lg:col-span-1">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 sticky top-8">
                <h3 className="text-xl font-bold text-white mb-6">Common Bee Species</h3>
                <div className="space-y-2">
                  {beeSpecies.map((species, index) => (
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
                    src={beeSpecies[activeSpecies].image}
                    alt={`${beeSpecies[activeSpecies].name} - T47 Pest Control`}
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                </div>

                {/* Content Section */}
                <div className="text-white">
                  <h3 className="text-3xl font-bold mb-2">
                    {beeSpecies[activeSpecies].name.toUpperCase()}
                  </h3>
                  <p className="text-blue-200 italic mb-6 text-lg">
                    {beeSpecies[activeSpecies].scientificName}
                  </p>

                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-blue-300 mb-2">Description</h4>
                      <p className="text-white/90 text-sm leading-relaxed">
                        {beeSpecies[activeSpecies].description}
                      </p>
                    </div>

                    <div>
                      <h4 className="font-semibold text-blue-300 mb-2">Appearance</h4>
                      <p className="text-white/90 text-sm leading-relaxed">
                        {beeSpecies[activeSpecies].appearance}
                      </p>
                    </div>

                    <div>
                      <h4 className="font-semibold text-blue-300 mb-2">Behavior</h4>
                      <p className="text-white/90 text-sm leading-relaxed">
                        {beeSpecies[activeSpecies].behavior}
                      </p>
                    </div>

                    <div>
                      <h4 className="font-semibold text-blue-300 mb-2">Habitat</h4>
                      <p className="text-white/90 text-sm leading-relaxed">
                        {beeSpecies[activeSpecies].habitat}
                      </p>
                    </div>

                    <div>
                      <h4 className="font-semibold text-blue-300 mb-2">Risks & Management</h4>
                      <p className="text-white/90 text-sm leading-relaxed">
                        {beeSpecies[activeSpecies].risks}
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
                Select Bee Species to Learn More
              </label>
              <div className="relative">
                <select
                  value={activeSpecies}
                  onChange={(e) => setActiveSpecies(Number(e.target.value))}
                  className="w-full bg-white/95 backdrop-blur-sm text-blue-900 font-semibold py-4 px-5 pr-12 rounded-xl border-2 border-white/20 shadow-lg appearance-none focus:outline-none focus:ring-2 focus:ring-blue-300 focus:border-transparent transition-all duration-300"
                  aria-label="Select bee species"
                >
                  {beeSpecies.map((species, index) => (
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
                src={beeSpecies[activeSpecies].image}
                alt={`${beeSpecies[activeSpecies].name} - T47 Pest Control`}
                fill
                className="object-cover"
                sizes="100vw"
              />
            </div>

            {/* Content Section */}
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-white">
              <h3 className="text-2xl font-bold mb-2">
                {beeSpecies[activeSpecies].name.toUpperCase()}
              </h3>
              <p className="text-blue-200 italic mb-6">
                {beeSpecies[activeSpecies].scientificName}
              </p>

              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-blue-300 mb-2">Description</h4>
                  <p className="text-white/90 text-sm leading-relaxed">
                    {beeSpecies[activeSpecies].description}
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold text-blue-300 mb-2">Appearance</h4>
                  <p className="text-white/90 text-sm leading-relaxed">
                    {beeSpecies[activeSpecies].appearance}
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold text-blue-300 mb-2">Behavior</h4>
                  <p className="text-white/90 text-sm leading-relaxed">
                    {beeSpecies[activeSpecies].behavior}
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold text-blue-300 mb-2">Habitat</h4>
                  <p className="text-white/90 text-sm leading-relaxed">
                    {beeSpecies[activeSpecies].habitat}
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold text-blue-300 mb-2">Risks & Management</h4>
                  <p className="text-white/90 text-sm leading-relaxed">
                    {beeSpecies[activeSpecies].risks}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-12 text-center">
          <a href="/contact" className="inline-block bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white font-bold py-3 px-8 rounded-full transition-all duration-300 transform hover:scale-105 shadow-md">
            Schedule Your Bee Control Consultation
          </a>
        </div>
      </div>
    </section>
  );
}

"use client";

import { useState } from 'react';
import Image from 'next/image';

interface BirdSpeciesProps {
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

export default function BirdSpeciesGuide() {
  const [activeSpecies, setActiveSpecies] = useState(0);

  const birdSpecies: BirdSpeciesProps[] = [
    {
      id: "pigeon-species",
      name: "Pigeons (Rock Doves)",
      tabName: "PIGEONS",
      scientificName: "Columba livia",
      image: "/pigeon-species.jpg",
      description: "Professional pigeon control services in Melbourne protect properties from these persistent urban pests. Our humane exclusion methods prevent property damage while complying with wildlife protection laws.",
      appearance: "Medium-sized birds (25-35cm) with blue-grey plumage, darker head and neck, and iridescent green/purple neck feathers. Have orange or red eyes and orange feet. Show considerable color variation from pure white to dark brown.",
      behavior: "Highly social, forming large flocks. Breed year-round in urban environments, producing up to 6 broods annually. Excellent navigators with strong homing instincts. Feed on grains, seeds, and human food scraps.",
      habitat: "Prefer urban environments with tall buildings that mimic their natural cliff habitats. Nest on building ledges, under bridges, in roof spaces, and on air conditioning units. Require access to water and food sources.",
      risks: "Acidic droppings damage buildings, vehicles, and equipment. Nests block drainage systems and ventilation. Can transmit diseases including salmonella and E. coli. Create slip hazards on walkways and fire hazards near electrical equipment."
    },
    {
      id: "starling-species",
      name: "European Starlings",
      tabName: "STARLINGS",
      scientificName: "Sturnus vulgaris",
      image: "/starling-species.jpg",
      description: "Expert starling control in Victoria manages these invasive birds that form massive flocks. Our exclusion systems protect commercial and residential properties from damage and contamination.",
      appearance: "Medium-sized birds (20-25cm) with black plumage that shows green and purple iridescence. Have long, pointed yellow bills and short tails. Winter plumage appears speckled with white spots.",
      behavior: "Highly social, forming enormous flocks (murmurations) of thousands of birds. Aggressive competitors that displace native species. Roost communally in large numbers, creating significant noise and mess.",
      habitat: "Prefer urban and suburban areas with access to food sources. Nest in cavities including building vents, signs, and roof spaces. Form large roosting sites in trees, buildings, and industrial structures.",
      risks: "Massive flocks create overwhelming amounts of droppings that damage buildings and contaminate areas. Displace native bird species. Can transmit diseases and parasites. Create noise pollution and slip hazards."
    },
    {
      id: "sparrow-species",
      name: "House Sparrows",
      tabName: "SPARROWS",
      scientificName: "Passer domesticus",
      image: "/sparrow-species.jpg",
      description: "Professional sparrow control in Melbourne prevents damage from these small but persistent birds. Our vent protection systems prevent costly damage and fire hazards.",
      appearance: "Small birds (14-16cm) with brown and grey plumage. Males have black bibs, white cheeks, and chestnut crowns. Females are more subdued with brown and buff coloring. Have thick, seed-cracking bills.",
      behavior: "Live in close association with humans. Nest in building cavities, vents, and signs. Produce up to 4 broods yearly with 3-6 eggs per clutch. Form small flocks and are highly adaptable to urban environments.",
      habitat: "Prefer areas around human habitation including residential neighborhoods, shopping centers, and industrial areas. Nest in building cavities, vents, signs, and outdoor equipment.",
      risks: "Nests block ventilation systems and create fire hazards near electrical equipment. Droppings contaminate areas and damage surfaces. Can transmit diseases and parasites. Nesting materials can clog drainage systems."
    },
    {
      id: "seagull-species",
      name: "Seagulls",
      tabName: "SEAGULLS",
      scientificName: "Larus species",
      image: "/seagull-species.jpg",
      description: "Humane seagull management in coastal Victoria protects properties while complying with wildlife protection laws. Our deterrent systems prevent damage without harming these protected birds.",
      appearance: "Large birds (35-65cm depending on species) with white and grey plumage, yellow bills, and webbed feet. Have strong, hooked bills adapted for scavenging. Show seasonal plumage changes.",
      behavior: "Highly intelligent and adaptable scavengers. Become aggressive during nesting season (spring/summer). Form large colonies and are very territorial around nesting sites. Excellent fliers and swimmers.",
      habitat: "Coastal areas, harbors, landfills, and urban areas near water. Nest on rooftops, cliffs, and ground sites. Require access to water and abundant food sources including garbage and fish.",
      risks: "Aggressive behavior during nesting season can pose risks to people. Large amounts of acidic droppings damage roofing materials. Create slip hazards on walkways. Can be very noisy and disruptive."
    },
    {
      id: "woodpecker-species",
      name: "Woodpeckers",
      tabName: "WOODPECKERS",
      scientificName: "Picidae family",
      image: "/woodpecker-species.jpg",
      description: "Specialized woodpecker deterrents in Melbourne protect wooden structures from these protected birds. Our non-harmful methods prevent damage while preserving these beneficial insect-eating birds.",
      appearance: "Medium-sized birds (15-30cm) with strong, chisel-like bills and stiff tail feathers for bracing. Most species have black and white plumage with red markings. Have zygodactyl feet (two toes forward, two back).",
      behavior: "Drill holes in wood for nesting, roosting, and feeding on insects. Most active in early morning and late afternoon. Territorial and will defend drilling sites aggressively. Some species store food in drilled holes.",
      habitat: "Prefer areas with mature trees and wooden structures. Will use building siding, trim, eaves, and wooden fences. Require access to insects living in wood and suitable nesting sites.",
      risks: "Drill holes in wooden structures allowing moisture intrusion and structural damage. Damage concentrates on wood siding, trim, and eaves. Can create entry points for other pests. Noise from drilling can be disruptive."
    },
    {
      id: "geese-species",
      name: "Canadian Geese",
      tabName: "GEESE",
      scientificName: "Branta canadensis",
      image: "/geese-species.jpg",
      description: "Professional geese management in Victoria protects commercial properties and public spaces. Our humane deterrent methods prevent damage while respecting these protected waterfowl.",
      appearance: "Large waterfowl (75-110cm) with brown bodies, black heads and necks, and distinctive white chin straps. Have webbed feet and broad, flat bills. Males (ganders) are typically larger than females.",
      behavior: "Highly social, traveling in V-formations during migration. Become very aggressive during nesting season (spring). Graze on grass and aquatic plants. Form strong pair bonds and return to familiar nesting sites.",
      habitat: "Areas near water including parks, golf courses, corporate campuses, and residential areas with ponds. Prefer open areas with short grass for grazing and nearby water for safety.",
      risks: "Produce large amounts of droppings that contaminate water and create slip hazards. Become aggressive during nesting season, potentially injuring people. Can damage landscaping through overgrazing. Create noise pollution."
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-br from-blue-900 via-indigo-900 to-blue-900 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-indigo-700/20 rounded-bl-[100px] z-0"></div>
        <div className="absolute bottom-0 left-0 w-1/4 h-1/4 bg-blue-600/10 rounded-tr-[100px] z-0"></div>
        <div className="absolute top-1/3 left-10 w-6 h-6 bg-indigo-400/30 rounded-full z-0"></div>
        <div className="absolute bottom-1/4 right-20 w-4 h-4 bg-blue-300/40 rounded-full z-0"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="inline-block px-3 py-1 bg-blue-100/20 text-blue-100 text-sm font-semibold rounded-full mb-3">
            BIRD SPECIES IDENTIFICATION GUIDE
          </span>
          <h2 className="text-4xl font-bold mb-4 text-white">
            Common Nuisance <span className="text-indigo-300">Bird Species</span> in Australia
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-indigo-400 mx-auto mb-6"></div>
          <p className="text-blue-100 max-w-3xl mx-auto">
            Understanding the specific bird species causing problems is essential for effective, humane control. Each species requires tailored management approaches that comply with wildlife protection laws.
          </p>
        </div>

        {/* Desktop Layout */}
        <div className="hidden md:block">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {/* Species List */}
            <div className="lg:col-span-1">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 sticky top-8">
                <h3 className="text-xl font-bold text-white mb-6">Common Bird Species</h3>
                <div className="space-y-2">
                  {birdSpecies.map((species, index) => (
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
                    src={birdSpecies[activeSpecies].image}
                    alt={`${birdSpecies[activeSpecies].name} - T47 Pest Control`}
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                </div>

                {/* Content Section */}
                <div className="text-white">
                  <h3 className="text-3xl font-bold mb-2">
                    {birdSpecies[activeSpecies].name.toUpperCase()}
                  </h3>
                  <p className="text-indigo-200 italic mb-6 text-lg">
                    {birdSpecies[activeSpecies].scientificName}
                  </p>

                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-indigo-300 mb-2">Description</h4>
                      <p className="text-white/90 text-sm leading-relaxed">
                        {birdSpecies[activeSpecies].description}
                      </p>
                    </div>

                    <div>
                      <h4 className="font-semibold text-indigo-300 mb-2">Appearance</h4>
                      <p className="text-white/90 text-sm leading-relaxed">
                        {birdSpecies[activeSpecies].appearance}
                      </p>
                    </div>

                    <div>
                      <h4 className="font-semibold text-indigo-300 mb-2">Behavior</h4>
                      <p className="text-white/90 text-sm leading-relaxed">
                        {birdSpecies[activeSpecies].behavior}
                      </p>
                    </div>

                    <div>
                      <h4 className="font-semibold text-indigo-300 mb-2">Habitat</h4>
                      <p className="text-white/90 text-sm leading-relaxed">
                        {birdSpecies[activeSpecies].habitat}
                      </p>
                    </div>

                    <div>
                      <h4 className="font-semibold text-indigo-300 mb-2">Risks & Problems</h4>
                      <p className="text-white/90 text-sm leading-relaxed">
                        {birdSpecies[activeSpecies].risks}
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
                Select Bird Species to Learn More
              </label>
              <div className="relative">
                <select
                  value={activeSpecies}
                  onChange={(e) => setActiveSpecies(Number(e.target.value))}
                  className="w-full bg-white/95 backdrop-blur-sm text-blue-900 font-semibold py-4 px-5 pr-12 rounded-xl border-2 border-white/20 shadow-lg appearance-none focus:outline-none focus:ring-2 focus:ring-indigo-300 focus:border-transparent transition-all duration-300"
                  aria-label="Select bird species"
                >
                  {birdSpecies.map((species, index) => (
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
                src={birdSpecies[activeSpecies].image}
                alt={`${birdSpecies[activeSpecies].name} - T47 Pest Control`}
                fill
                className="object-cover"
                sizes="100vw"
              />
            </div>

            {/* Content Section */}
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-white">
              <h3 className="text-2xl font-bold mb-2">
                {birdSpecies[activeSpecies].name.toUpperCase()}
              </h3>
              <p className="text-indigo-200 italic mb-6">
                {birdSpecies[activeSpecies].scientificName}
              </p>

              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-indigo-300 mb-2">Description</h4>
                  <p className="text-white/90 text-sm leading-relaxed">
                    {birdSpecies[activeSpecies].description}
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold text-indigo-300 mb-2">Appearance</h4>
                  <p className="text-white/90 text-sm leading-relaxed">
                    {birdSpecies[activeSpecies].appearance}
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold text-indigo-300 mb-2">Behavior</h4>
                  <p className="text-white/90 text-sm leading-relaxed">
                    {birdSpecies[activeSpecies].behavior}
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold text-indigo-300 mb-2">Habitat</h4>
                  <p className="text-white/90 text-sm leading-relaxed">
                    {birdSpecies[activeSpecies].habitat}
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold text-indigo-300 mb-2">Risks & Problems</h4>
                  <p className="text-white/90 text-sm leading-relaxed">
                    {birdSpecies[activeSpecies].risks}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Wildlife Protection Notice */}
        <div className="mt-12 bg-white/10 backdrop-blur-sm rounded-xl p-8 max-w-4xl mx-auto">
          <div className="flex flex-col md:flex-row items-center gap-6">
            <div className="md:w-1/4 flex justify-center">
              <div className="w-20 h-20 bg-indigo-100/20 rounded-full flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-indigo-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
            </div>
            <div className="md:w-3/4">
              <h3 className="text-2xl font-bold text-white mb-3 text-center md:text-left">Wildlife Protection Compliance</h3>
              <p className="text-white/90 mb-4">
                Many bird species are protected under federal, state, or local wildlife laws. Our bird management approaches comply with all applicable regulations while effectively addressing bird problems. We use only humane, non-lethal methods that discourage birds without causing harm.
              </p>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-12 text-center">
          <a href="/contact" className="inline-block bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 text-white font-bold py-3 px-8 rounded-full transition-all duration-300 transform hover:scale-105 shadow-md">
            Schedule Your Bird Control Consultation
          </a>
        </div>
      </div>
    </section>
  );
}

"use client";

import { useState } from 'react';
import Image from 'next/image';

interface SpiderSpeciesProps {
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

export default function SpiderSpeciesGuide() {
  const [activeSpecies, setActiveSpecies] = useState(0);

  const spiderSpecies: SpiderSpeciesProps[] = [
    {
      id: "black-widow",
      name: "Black Widow Spider",
      tabName: "BLACK WIDOW",
      scientificName: "Latrodectus species",
      image: "/black-widow-spider.jpg",
      description: "Professional black widow spider control in Melbourne eliminates these dangerous venomous spiders that pose serious health risks to families.",
      appearance: "Black widow spiders are identified by their shiny black bodies and distinctive red hourglass marking on the underside of their abdomen. Females are larger than males and more dangerous.",
      lifestyle: "They prefer dark, undisturbed areas like garages, sheds, and woodpiles. Black widows build irregular, messy webs close to the ground where they wait for prey.",
      habits: "Their venom is neurotoxic and can cause severe pain, muscle cramps, and in rare cases, more serious symptoms requiring immediate medical attention."
    },
    {
      id: "brown-recluse",
      name: "Brown Recluse Spider",
      tabName: "BROWN RECLUSE",
      scientificName: "Loxosceles reclusa",
      image: "/brown-recluse-spider.jpg",
      description: "Expert brown recluse spider removal in Victoria targets these venomous spiders whose bites can cause severe necrotic lesions.",
      appearance: "Brown recluse spiders have a distinctive violin-shaped marking on their back. They're brown in color with long, thin legs and measure about 6-20mm in body length.",
      lifestyle: "They prefer dark, undisturbed areas like closets, attics, storage areas, and behind furniture. Brown recluses are nocturnal and avoid human contact.",
      habits: "Their bite can cause necrotic lesions that may take months to heal. They're not aggressive but will bite when trapped against skin or in clothing."
    },
    {
      id: "huntsman",
      name: "Huntsman Spider",
      tabName: "HUNTSMAN",
      scientificName: "Sparassidae family",
      image: "/huntsman-spider.jpg",
      description: "Professional huntsman spider control in Melbourne addresses these large, fast-moving spiders that can be intimidating despite being relatively harmless.",
      appearance: "Huntsman spiders are large, fast-moving spiders with a leg span that can reach up to 15cm. They have a flattened body and legs that extend sideways like a crab.",
      lifestyle: "Despite their intimidating size, they're generally not dangerous to humans. They don't build webs but actively hunt their prey, using speed and agility.",
      habits: "Often found on walls and ceilings, they can move very quickly when disturbed. They're beneficial for controlling other pest insects but can be alarming due to their size."
    },
    {
      id: "wolf-spider",
      name: "Wolf Spider",
      tabName: "WOLF SPIDER",
      scientificName: "Lycosidae family",
      image: "/wolf-spider.jpg",
      description: "Expert wolf spider management in Melbourne controls these robust ground-dwelling hunters that can be mistaken for more dangerous species.",
      appearance: "Wolf spiders are robust, ground-dwelling hunters with excellent vision. They have hairy bodies and legs, typically brown or gray with distinctive markings.",
      lifestyle: "They don't spin webs but chase down their prey using their excellent eyesight and speed. They're solitary hunters that prefer ground-level habitats.",
      habits: "Female wolf spiders carry their egg sacs attached to their spinnerets and later carry their spiderlings on their backs. They can bite if threatened but are not dangerous."
    },
    {
      id: "redback",
      name: "Redback Spider",
      tabName: "REDBACK",
      scientificName: "Latrodectus hasselti",
      image: "/redback-spider.jpg",
      description: "Professional redback spider control in Melbourne eliminates these highly venomous Australian spiders that pose significant health risks.",
      appearance: "Redback spiders are easily identified by the distinctive red stripe on their abdomen. Females are black with the red marking, while males are smaller and less dangerous.",
      lifestyle: "They build messy webs in sheltered locations around homes and gardens, particularly in dry, warm areas like sheds, mailboxes, and outdoor furniture.",
      habits: "Their venom is neurotoxic and can cause severe pain, sweating, nausea, and muscle weakness. Redback bites require immediate medical attention and antivenom treatment."
    },
    {
      id: "orb-weaver",
      name: "Orb-Weaving Spider",
      tabName: "ORB-WEAVER",
      scientificName: "Araneidae family",
      image: "/orb-weaving-spider.jpg",
      description: "Professional orb-weaver spider management in Melbourne addresses these web-building spiders that are generally beneficial but can be problematic in large numbers.",
      appearance: "Orb-weaving spiders come in various colors and patterns, with some species being quite large and colorful. They have rounded abdomens and relatively short legs.",
      lifestyle: "They create the classic circular web design, rebuilding their webs daily or every few days. Most are active at night when they construct and maintain their webs.",
      habits: "They're generally harmless to humans and beneficial for controlling flying insects. However, their large webs can be problematic around doorways and walkways."
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
            Common Spider Species in Melbourne
          </h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            Identify and understand the different spider species commonly found in Melbourne homes and businesses
          </p>
        </div>

        {/* Desktop Layout */}
        <div className="hidden md:block">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {/* Species List */}
            <div className="lg:col-span-1">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 sticky top-8">
                <h3 className="text-xl font-bold text-white mb-6">Common Spider Species</h3>
                <div className="space-y-2">
                  {spiderSpecies.map((species, index) => (
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
                    src={spiderSpecies[activeSpecies].image}
                    alt={`${spiderSpecies[activeSpecies].name} - T47 Pest Control`}
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                </div>

                {/* Content Section */}
                <div className="text-white">
                  <h3 className="text-3xl font-bold mb-2">
                    {spiderSpecies[activeSpecies].name.toUpperCase()}
                  </h3>
                  <p className="text-blue-200 italic mb-6 text-lg">
                    {spiderSpecies[activeSpecies].scientificName}
                  </p>

                  <div className="space-y-6">
                    <div>
                      <p className="text-white/90 leading-relaxed mb-4">
                        {spiderSpecies[activeSpecies].description}
                      </p>
                    </div>

                    <div>
                      <h4 className="text-lg font-semibold text-blue-200 mb-2">APPEARANCE</h4>
                      <p className="text-white/90 leading-relaxed">
                        {spiderSpecies[activeSpecies].appearance}
                      </p>
                    </div>

                    {spiderSpecies[activeSpecies].lifestyle && (
                      <div>
                        <h4 className="text-lg font-semibold text-blue-200 mb-2">LIFESTYLE</h4>
                        <p className="text-white/90 leading-relaxed">
                          {spiderSpecies[activeSpecies].lifestyle}
                        </p>
                      </div>
                    )}

                    {spiderSpecies[activeSpecies].habits && (
                      <div>
                        <h4 className="text-lg font-semibold text-blue-200 mb-2">HABITS</h4>
                        <p className="text-white/90 leading-relaxed">
                          {spiderSpecies[activeSpecies].habits}
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
                Select Spider Species to Learn More
              </label>
              <div className="relative">
                <select
                  value={activeSpecies}
                  onChange={(e) => setActiveSpecies(Number(e.target.value))}
                  className="w-full bg-white/95 backdrop-blur-sm text-blue-900 font-semibold py-4 px-5 pr-12 rounded-xl border-2 border-white/20 shadow-lg appearance-none focus:outline-none focus:ring-2 focus:ring-blue-300 focus:border-transparent transition-all duration-300"
                  aria-label="Select spider species"
                >
                  {spiderSpecies.map((species, index) => (
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
                src={spiderSpecies[activeSpecies].image}
                alt={`${spiderSpecies[activeSpecies].name} - T47 Pest Control`}
                fill
                className="object-cover"
                sizes="100vw"
              />
            </div>

            {/* Content Section */}
            <div className="text-white">
              <h3 className="text-2xl font-bold mb-2">
                {spiderSpecies[activeSpecies].name.toUpperCase()}
              </h3>
              <p className="text-blue-200 italic mb-4 text-base">
                {spiderSpecies[activeSpecies].scientificName}
              </p>

              <div className="space-y-4">
                <div>
                  <p className="text-white/90 text-sm leading-relaxed mb-4">
                    {spiderSpecies[activeSpecies].description}
                  </p>
                </div>

                <div>
                  <h4 className="text-base font-semibold text-blue-200 mb-2">APPEARANCE</h4>
                  <p className="text-white/90 text-sm leading-relaxed">
                    {spiderSpecies[activeSpecies].appearance}
                  </p>
                </div>

                {spiderSpecies[activeSpecies].lifestyle && (
                  <div>
                    <h4 className="text-base font-semibold text-blue-200 mb-2">LIFESTYLE</h4>
                    <p className="text-white/90 text-sm leading-relaxed">
                      {spiderSpecies[activeSpecies].lifestyle}
                    </p>
                  </div>
                )}

                {spiderSpecies[activeSpecies].habits && (
                  <div>
                    <h4 className="text-base font-semibold text-blue-200 mb-2">HABITS</h4>
                    <p className="text-white/90 text-sm leading-relaxed">
                      {spiderSpecies[activeSpecies].habits}
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
            <h3 className="text-2xl font-bold mb-4 text-white">Schedule Your Spider Control Consultation</h3>
            <p className="text-white/90 mb-6 leading-relaxed">
              Don't let dangerous spiders threaten your family's safety. Our expert technicians provide safe, effective spider removal and prevention services.
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

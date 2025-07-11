"use client";

import { useState } from 'react';
import Image from 'next/image';

interface TermiteSpeciesProps {
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

export default function TermiteSpeciesGallery() {
  const [activeSpecies, setActiveSpecies] = useState(0);
  const termiteSpecies: TermiteSpeciesProps[] = [
    {
      id: "subterranean-termites",
      name: "Subterranean Termites",
      tabName: "SUBTERRANEAN",
      scientificName: "Reticulitermes species",
      image: "/subterranean-termites.jpg",
      description: "Professional subterranean termite control in Melbourne targets Australia's most destructive termite species. Our comprehensive treatment systems create long-lasting barriers to protect your property investment.",
      appearance: "Creamy white to dark brown workers (3-4mm) with soft bodies. Soldiers have enlarged heads with powerful mandibles. Swarmers are dark brown to black with two pairs of equal-length wings that break off after swarming.",
      behavior: "Live in underground colonies of 60,000-1 million individuals. Build distinctive mud tubes to travel between soil and wood sources. Swarm in spring and fall, typically after rain when humidity is high.",
      habitat: "Require soil contact and moisture. Build extensive underground tunnel systems and mud tubes on foundations, walls, and wooden structures. Prefer softwoods but will attack any cellulose material.",
      risks: "Cause 80% of termite damage in Australia. Can consume structural timbers rapidly, leading to costly repairs. Often remain undetected until significant damage occurs. Annual damage costs exceed $1.5 billion nationally."
    },
    {
      id: "drywood-termites",
      name: "Drywood Termites",
      tabName: "DRYWOOD",
      scientificName: "Cryptotermes species",
      image: "/drywood-termites.jpg",
      description: "Specialized drywood termite treatment in Victoria eliminates these wood-boring pests that infest structural timbers without soil contact. Our targeted approach protects valuable wooden assets.",
      appearance: "Larger than subterranean termites (6-12mm), with harder bodies ranging from cream to light brown. Soldiers have large, dark heads with prominent mandibles. Produce distinctive hexagonal fecal pellets.",
      behavior: "Form smaller colonies (1,000-2,500 members) entirely within wood. Don't require soil contact or external moisture. Swarm during warm, dry periods, often in late summer or early fall.",
      habitat: "Infest dry, sound wood including furniture, flooring, structural beams, and window frames. Prefer hardwoods but will attack softwoods. Common in attics, wall voids, and wooden fixtures.",
      risks: "Difficult to detect until extensive damage occurs. Create hollow galleries within wood, weakening structural integrity. Damage often discovered during renovations or when wood fails under stress."
    },
    {
      id: "dampwood-termites",
      name: "Dampwood Termites",
      tabName: "DAMPWOOD",
      scientificName: "Porotermes species",
      image: "/dampwood-termites.jpg",
      description: "Expert dampwood termite management in Melbourne addresses these moisture-loving pests that indicate underlying water problems. Our approach combines termite control with moisture management.",
      appearance: "Largest termite species (up to 20mm), with robust bodies ranging from cream to reddish-brown. Soldiers have massive heads and powerful mandibles. Workers are notably larger than other termite species.",
      behavior: "Form moderate-sized colonies (4,000-10,000 members) in moisture-damaged wood. Don't build mud tubes but require high moisture content. Less aggressive than other species but persistent in suitable conditions.",
      habitat: "Target water-damaged wood, leaky areas, and high-moisture environments. Common in basements, crawl spaces, bathrooms, and areas with plumbing leaks. Prefer softwoods with 20%+ moisture content.",
      risks: "Indicate serious moisture problems that can lead to mold and structural issues. While less common in well-maintained buildings, they can cause significant damage to water-compromised structures."
    },
    {
      id: "formosan-termites",
      name: "Formosan Termites",
      tabName: "FORMOSAN",
      scientificName: "Coptotermes formosanus",
      image: "/formosan-termites.jpg",
      description: "Emergency Formosan termite control in Victoria targets these 'super termites' with aggressive treatment protocols. Our rapid response prevents catastrophic structural damage from these voracious pests.",
      appearance: "Similar size to subterranean termites but more aggressive. Soldiers have oval heads with curved mandibles. Swarmers are yellowish-brown with hairy wings. Workers are cream-colored with slightly larger heads.",
      behavior: "Form massive colonies (up to 3 million members) with multiple satellite nests. Extremely aggressive feeders that can consume wood 10 times faster than native species. Build carton nests within structures.",
      habitat: "Highly adaptable, infesting both ground-contact and above-ground wood. Build secondary nests in wall voids, attics, and other protected areas. Can survive in drier conditions than native subterranean species.",
      risks: "Cause rapid, extensive structural damage due to large colony sizes and aggressive feeding. Can compromise building integrity within months. Extremely difficult to eliminate once established."
    },
    {
      id: "conehead-termites",
      name: "Conehead Termites",
      tabName: "CONEHEAD",
      scientificName: "Nasutitermes species",
      image: "/conehead-termites.jpg",
      description: "Specialized conehead termite control in Melbourne targets these aggressive above-ground foragers. Our comprehensive approach prevents rapid spread across your property.",
      appearance: "Distinctive cone-shaped heads on soldiers with pointed snouts for chemical defense. Workers are cream-colored (4-6mm). Soldiers can spray defensive chemicals up to several centimeters.",
      behavior: "Forage above ground like ants, making them visible during daylight. Build extensive mud foraging tubes and can spread rapidly across properties. Form large colonies with aggressive expansion patterns.",
      habitat: "Build nests in trees, stumps, and wooden structures. Create extensive foraging networks across properties. Can attack multiple wooden structures simultaneously from central nest locations.",
      risks: "Rapid spread potential across entire properties. Visible foraging makes early detection possible but also indicates established colonies. Can cause widespread damage to multiple structures quickly."
    },
    {
      id: "desert-termites",
      name: "Desert Termites",
      tabName: "DESERT",
      scientificName: "Heterotermes species",
      image: "/desert-termites.jpg",
      description: "Professional desert termite management in arid regions of Victoria addresses these drought-adapted pests. Our specialized treatments account for their unique survival strategies.",
      appearance: "Small, pale termites (3-5mm) adapted to arid conditions. Soldiers have rectangular heads with strong mandibles. Workers have thicker cuticles to prevent water loss in dry environments.",
      behavior: "Adapted to survive in low-moisture environments. Form smaller colonies (10,000-50,000 members) but can be persistent in suitable conditions. Active during cooler, more humid periods.",
      habitat: "Target any available cellulose in arid environments including dead plant material, wooden structures, and paper products. Can survive in conditions too dry for other termite species.",
      risks: "Often overlooked due to arid environment assumptions. Can cause significant damage to wooden structures in desert and semi-arid regions. Particularly problematic during drought conditions."
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
            TERMITE SPECIES IDENTIFICATION GUIDE
          </span>
          <h2 className="text-4xl font-bold mb-4 text-white">
            Common Termite <span className="text-blue-300">Species</span> in Australia
          </h2>
          <div className="w-24 h-1 bg-blue-400 mx-auto mb-6"></div>
          <p className="text-blue-100 max-w-3xl mx-auto">
            Understanding the specific termite species threatening your property is crucial for effective treatment. Each species requires specialized control approaches.
          </p>
        </div>

        {/* Desktop Layout */}
        <div className="hidden md:block">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {/* Species List */}
            <div className="lg:col-span-1">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 sticky top-8">
                <h3 className="text-xl font-bold text-white mb-6">Common Termite Species</h3>
                <div className="space-y-2">
                  {termiteSpecies.map((species, index) => (
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
                    src={termiteSpecies[activeSpecies].image}
                    alt={`${termiteSpecies[activeSpecies].name} - T47 Pest Control`}
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                </div>

                {/* Content Section */}
                <div className="text-white">
                  <h3 className="text-3xl font-bold mb-2">
                    {termiteSpecies[activeSpecies].name.toUpperCase()}
                  </h3>
                  <p className="text-blue-200 italic mb-6 text-lg">
                    {termiteSpecies[activeSpecies].scientificName}
                  </p>

                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-blue-300 mb-2">Description</h4>
                      <p className="text-white/90 text-sm leading-relaxed">
                        {termiteSpecies[activeSpecies].description}
                      </p>
                    </div>

                    <div>
                      <h4 className="font-semibold text-blue-300 mb-2">Appearance</h4>
                      <p className="text-white/90 text-sm leading-relaxed">
                        {termiteSpecies[activeSpecies].appearance}
                      </p>
                    </div>

                    <div>
                      <h4 className="font-semibold text-blue-300 mb-2">Behavior</h4>
                      <p className="text-white/90 text-sm leading-relaxed">
                        {termiteSpecies[activeSpecies].behavior}
                      </p>
                    </div>

                    <div>
                      <h4 className="font-semibold text-blue-300 mb-2">Habitat</h4>
                      <p className="text-white/90 text-sm leading-relaxed">
                        {termiteSpecies[activeSpecies].habitat}
                      </p>
                    </div>

                    <div>
                      <h4 className="font-semibold text-blue-300 mb-2">Risks & Damage</h4>
                      <p className="text-white/90 text-sm leading-relaxed">
                        {termiteSpecies[activeSpecies].risks}
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
                Select Termite Species to Learn More
              </label>
              <div className="relative">
                <select
                  value={activeSpecies}
                  onChange={(e) => setActiveSpecies(Number(e.target.value))}
                  className="w-full bg-white/95 backdrop-blur-sm text-blue-900 font-semibold py-4 px-5 pr-12 rounded-xl border-2 border-white/20 shadow-lg appearance-none focus:outline-none focus:ring-2 focus:ring-blue-300 focus:border-transparent transition-all duration-300"
                  aria-label="Select termite species"
                >
                  {termiteSpecies.map((species, index) => (
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
                src={termiteSpecies[activeSpecies].image}
                alt={`${termiteSpecies[activeSpecies].name} - T47 Pest Control`}
                fill
                className="object-cover"
                sizes="100vw"
              />
            </div>

            {/* Content Section */}
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-white">
              <h3 className="text-2xl font-bold mb-2">
                {termiteSpecies[activeSpecies].name.toUpperCase()}
              </h3>
              <p className="text-blue-200 italic mb-6">
                {termiteSpecies[activeSpecies].scientificName}
              </p>

              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-blue-300 mb-2">Description</h4>
                  <p className="text-white/90 text-sm leading-relaxed">
                    {termiteSpecies[activeSpecies].description}
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold text-blue-300 mb-2">Appearance</h4>
                  <p className="text-white/90 text-sm leading-relaxed">
                    {termiteSpecies[activeSpecies].appearance}
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold text-blue-300 mb-2">Behavior</h4>
                  <p className="text-white/90 text-sm leading-relaxed">
                    {termiteSpecies[activeSpecies].behavior}
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold text-blue-300 mb-2">Habitat</h4>
                  <p className="text-white/90 text-sm leading-relaxed">
                    {termiteSpecies[activeSpecies].habitat}
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold text-blue-300 mb-2">Risks & Damage</h4>
                  <p className="text-white/90 text-sm leading-relaxed">
                    {termiteSpecies[activeSpecies].risks}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-12 text-center">
          <a href="/contact" className="inline-block bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white font-bold py-3 px-8 rounded-full transition-all duration-300 transform hover:scale-105 shadow-md">
            Schedule Your Termite Inspection
          </a>
        </div>
      </div>
    </section>
  );
}

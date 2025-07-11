"use client";

import { useState } from 'react';
import Image from 'next/image';

interface FleaSpeciesProps {
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

export default function FleaSpeciesGallery() {
  const [activeSpecies, setActiveSpecies] = useState(0);
  const fleaSpecies: FleaSpeciesProps[] = [
    {
      id: "cat-flea",
      name: "Cat Flea",
      tabName: "CAT FLEA",
      scientificName: "Ctenocephalides felis",
      image: "/cat-flea.jpg",
      description: "Professional cat flea control in Melbourne targets the most common household flea species. Our comprehensive treatment eliminates fleas from pets and homes while preventing re-infestation.",
      appearance: "Small, dark brown to black insects (1-3mm) with laterally compressed bodies. Have powerful hind legs for jumping up to 150 times their body length. Females are larger than males and have rounded abdomens.",
      behavior: "Spend most of their adult life on host animals, feeding on blood. Can jump between hosts and survive 2-3 months without feeding. Lay 20-50 eggs daily that fall off pets into carpets and furniture.",
      habitat: "Prefer warm, humid environments with temperatures 65-80°F. Eggs develop in carpets, pet bedding, upholstery, and cracks in flooring. Adults live on cats, dogs, and occasionally humans.",
      risks: "Cause intense itching and allergic reactions in pets and humans. Can transmit tapeworms and bacterial infections. Heavy infestations can cause anemia in young or small animals. Responsible for 95% of pet flea problems."
    },
    {
      id: "dog-flea",
      name: "Dog Flea",
      tabName: "DOG FLEA",
      scientificName: "Ctenocephalides canis",
      image: "/dog-flea.jpg",
      description: "Expert dog flea treatment in Victoria addresses these less common but persistent parasites. Our targeted approach eliminates dog fleas while protecting your pets from re-infestation.",
      appearance: "Slightly larger than cat fleas (2-4mm) with similar dark brown coloration. Have distinctive rounded heads and longer legs. Females have more pronounced curved abdomens for egg production.",
      behavior: "Prefer dogs as hosts but will feed on cats and humans. More cold-tolerant than cat fleas and can survive longer without feeding. Less prolific egg layers but more persistent in cooler climates.",
      habitat: "Thrive in cooler, less humid conditions than cat fleas. Common in outdoor kennels, dog runs, and areas where dogs spend time. Can establish populations in basements and cooler areas of homes.",
      risks: "Can transmit dog tapeworm and various bacterial pathogens. More likely to bite humans than cat fleas. Can cause severe allergic dermatitis in sensitive dogs. Harder to eliminate due to cold tolerance."
    },
    {
      id: "human-flea",
      name: "Human Flea",
      tabName: "HUMAN FLEA",
      scientificName: "Pulex irritans",
      image: "/human-flea.jpg",
      description: "Specialized human flea control in Melbourne addresses these versatile parasites that readily feed on humans. Our treatment protocols target both the fleas and their breeding environments.",
      appearance: "Larger than pet fleas (2-4mm) with less pronounced combs on their heads. Dark brown to black with powerful jumping legs. Have broader heads and more robust bodies than cat or dog fleas.",
      behavior: "Less host-specific, readily feeding on humans, pigs, dogs, and other mammals. Can survive 125 days without feeding. Adults spend time both on and off hosts, hiding in bedding and furniture.",
      habitat: "Found in human living areas, particularly bedrooms and areas with poor sanitation. Common in rural areas and developing regions. Breed in organic debris, dust, and cracks in floors.",
      risks: "Primary vector for bubonic plague transmission. Can transmit murine typhus and other serious diseases. Cause painful, itchy bites that can become infected. More medically significant than pet fleas."
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
            FLEA SPECIES IDENTIFICATION GUIDE
          </span>
          <h2 className="text-4xl font-bold mb-4 text-white">
            Common Flea <span className="text-blue-300">Species</span> in Australia
          </h2>
          <div className="w-24 h-1 bg-blue-400 mx-auto mb-6"></div>
          <p className="text-blue-100 max-w-3xl mx-auto">
            Understanding the specific flea species affecting your pets and home is crucial for effective treatment. Each species requires targeted control approaches.
          </p>
        </div>

        {/* Desktop Layout */}
        <div className="hidden md:block">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {/* Species List */}
            <div className="lg:col-span-1">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 sticky top-8">
                <h3 className="text-xl font-bold text-white mb-6">Common Flea Species</h3>
                <div className="space-y-2">
                  {fleaSpecies.map((species, index) => (
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
                <div className="relative h-[250px] lg:h-[300px] rounded-xl overflow-hidden shadow-xl">
                  <Image
                    src={fleaSpecies[activeSpecies].image}
                    alt={`${fleaSpecies[activeSpecies].name} - T47 Pest Control`}
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                </div>

                {/* Content Section */}
                <div className="text-white">
                  <h3 className="text-3xl font-bold mb-2">
                    {fleaSpecies[activeSpecies].name.toUpperCase()}
                  </h3>
                  <p className="text-blue-200 italic mb-6 text-lg">
                    {fleaSpecies[activeSpecies].scientificName}
                  </p>

                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-blue-300 mb-2">Description</h4>
                      <p className="text-white/90 text-sm leading-relaxed">
                        {fleaSpecies[activeSpecies].description}
                      </p>
                    </div>

                    <div>
                      <h4 className="font-semibold text-blue-300 mb-2">Appearance</h4>
                      <p className="text-white/90 text-sm leading-relaxed">
                        {fleaSpecies[activeSpecies].appearance}
                      </p>
                    </div>

                    <div>
                      <h4 className="font-semibold text-blue-300 mb-2">Behavior</h4>
                      <p className="text-white/90 text-sm leading-relaxed">
                        {fleaSpecies[activeSpecies].behavior}
                      </p>
                    </div>

                    <div>
                      <h4 className="font-semibold text-blue-300 mb-2">Habitat</h4>
                      <p className="text-white/90 text-sm leading-relaxed">
                        {fleaSpecies[activeSpecies].habitat}
                      </p>
                    </div>

                    <div>
                      <h4 className="font-semibold text-blue-300 mb-2">Risks & Health Concerns</h4>
                      <p className="text-white/90 text-sm leading-relaxed">
                        {fleaSpecies[activeSpecies].risks}
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
                Select Flea Species to Learn More
              </label>
              <div className="relative">
                <select
                  value={activeSpecies}
                  onChange={(e) => setActiveSpecies(Number(e.target.value))}
                  className="w-full bg-white/95 backdrop-blur-sm text-blue-900 font-semibold py-4 px-5 pr-12 rounded-xl border-2 border-white/20 shadow-lg appearance-none focus:outline-none focus:ring-2 focus:ring-blue-300 focus:border-transparent transition-all duration-300"
                  aria-label="Select flea species"
                >
                  {fleaSpecies.map((species, index) => (
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
            <div className="relative h-[200px] rounded-xl overflow-hidden shadow-xl mb-6">
              <Image
                src={fleaSpecies[activeSpecies].image}
                alt={`${fleaSpecies[activeSpecies].name} - T47 Pest Control`}
                fill
                className="object-cover"
                sizes="100vw"
              />
            </div>

            {/* Content Section */}
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-white">
              <h3 className="text-2xl font-bold mb-2">
                {fleaSpecies[activeSpecies].name.toUpperCase()}
              </h3>
              <p className="text-blue-200 italic mb-6">
                {fleaSpecies[activeSpecies].scientificName}
              </p>

              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-blue-300 mb-2">Description</h4>
                  <p className="text-white/90 text-sm leading-relaxed">
                    {fleaSpecies[activeSpecies].description}
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold text-blue-300 mb-2">Appearance</h4>
                  <p className="text-white/90 text-sm leading-relaxed">
                    {fleaSpecies[activeSpecies].appearance}
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold text-blue-300 mb-2">Behavior</h4>
                  <p className="text-white/90 text-sm leading-relaxed">
                    {fleaSpecies[activeSpecies].behavior}
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold text-blue-300 mb-2">Habitat</h4>
                  <p className="text-white/90 text-sm leading-relaxed">
                    {fleaSpecies[activeSpecies].habitat}
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold text-blue-300 mb-2">Risks & Health Concerns</h4>
                  <p className="text-white/90 text-sm leading-relaxed">
                    {fleaSpecies[activeSpecies].risks}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-12 text-center">
          <a href="/contact" className="inline-block bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white font-bold py-3 px-8 rounded-full transition-all duration-300 transform hover:scale-105 shadow-md">
            Schedule Your Flea Treatment
          </a>
        </div>
      </div>
    </section>
  );
}

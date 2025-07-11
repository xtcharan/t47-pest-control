"use client";

import { useState } from 'react';
import Image from 'next/image';

interface AntSpeciesProps {
  id: string;
  name: string;
  scientificName: string;
  image: string;
  description: string;
  appearance: string;
  lifestyle: string;
  habits: string;
}

export default function AntSpeciesGuide() {
  const [activeSpecies, setActiveSpecies] = useState(0);

  const antSpecies: AntSpeciesProps[] = [
    {
      id: "bulldog-ant",
      name: "Australian Bulldog Ant",

      scientificName: "Myrmecia gulosa",
      image: "/bull-ants.jpg",
      description: "Professional bulldog ant control in Melbourne targets these large, aggressive ants that pose significant stinging risks to families and pets.",
      appearance: "Australian Bulldog Ants are large, aggressive ants that can grow to 40mm. They're black with some red tones on their abdomen and have strong, large mandibles.",
      lifestyle: "These ants are highly territorial and aggressive, living in colonies with complex social structures. They're active hunters that prey on other insects and small animals.",
      habits: "They have powerful stings that can cause severe allergic reactions. Bulldog ants are excellent jumpers and can leap several times their body length when threatened."
    },
    {
      id: "black-house-ant",
      name: "Black House Ant",

      scientificName: "Ochetellus glaber",
      image: "/black-house-ants.jpg",
      description: "Expert black house ant extermination in Victoria eliminates these common indoor pests that contaminate food and establish large colonies.",
      appearance: "Black house ants are black in color with a glossy body that can reach 5mm. They have a distinctive shiny appearance and move in organized trails.",
      lifestyle: "A colony of black ants can consist of up to 7000 ants. The older the colony, the bigger the ants become, with multiple queens possible in mature colonies.",
      habits: "They're attracted to sweet foods and moisture, commonly found in kitchens and bathrooms. Black ants can bite when threatened and leave pheromone trails for other ants to follow."
    },
    {
      id: "pharaoh-ant",
      name: "Pharaoh Ant",

      scientificName: "Monomorium pharaonis",
      image: "/pharaoh-ants.jpg",
      description: "Professional pharaoh ant control in Melbourne addresses these disease-carrying pests that are particularly problematic in hospitals and food facilities.",
      appearance: "Pharaoh ants are yellow, almost transparent ants that can reach up to 2mm. Their small size and pale coloration make them difficult to detect initially.",
      lifestyle: "Their colonies consist of many queens, which allows them to fragment into smaller colonies quickly when attacked, making them extremely difficult to eliminate.",
      habits: "These ants can carry various diseases and are particularly problematic in healthcare facilities. They're attracted to protein-rich foods and can nest in very small spaces."
    },
    {
      id: "sugar-ant",
      name: "Banded Sugar Ant",

      scientificName: "Camponotus consobrinus",
      image: "/sugar-ants.jpg",
      description: "Expert banded sugar ant removal in Melbourne targets these native Australian ants that invade homes seeking sweet foods and moisture.",
      appearance: "Banded sugar ants have a black head, orange-brown thorax and can grow to 15mm. They're among the larger ant species commonly found in Australian homes.",
      lifestyle: "These ants are native to Australia and can be mainly found in forests and woodlands. They're omnivorous and prey on other insects while also seeking sweet substances.",
      habits: "They're particularly attracted to sugary foods and drinks, often found in kitchens and dining areas. They're active both day and night and can establish satellite colonies."
    },
    {
      id: "fire-ant",
      name: "Red Fire Ant",

      scientificName: "Solenopsis species",
      image: "/fire-ants.jpg",
      description: "Professional fire ant control in Melbourne eliminates these dangerous invasive pests known for their painful stings and aggressive behavior.",
      appearance: "Fire ants have brown heads and darker bodies and can grow to 6mm. They're easily identified by their reddish-brown coloration and aggressive behavior.",
      lifestyle: "They build large mound nests in open areas and are highly aggressive when their colony is disturbed. Fire ants are social insects with complex colony structures.",
      habits: "They sting rather than bite, and their venom is powerful and can cause severe allergic reactions. In some cases, medical attention may be required for fire ant stings."
    },
    {
      id: "green-head-ant",
      name: "Green Head Ant",

      scientificName: "Rhytidoponera metallica",
      image: "/green-head-ants.jpg",
      description: "Professional green head ant control in Melbourne addresses these native Australian ants with distinctive metallic appearance and resilient colonies.",
      appearance: "Green-head ants have a distinct metallic look and get up to 5-7mm in size. They have a greenish-metallic sheen on their head and thorax that makes them easily identifiable.",
      lifestyle: "All the females are fertile, which makes their colonies more resilient than other ant species. They're native to Australia and well-adapted to local conditions.",
      habits: "They're aggressive defenders of their territory and can deliver painful stings. Green head ants are active foragers and can establish multiple nesting sites."
    },
    {
      id: "meat-ant",
      name: "Meat Ant",

      scientificName: "Iridomyrmex purpureus",
      image: "/meat-ants.jpg",
      description: "Expert meat ant control in Melbourne targets these dominant native Australian ants known for their aggressive behavior and large colonies.",
      appearance: "Meat ants are characterized by their red head, dark body, and mean attitude. At 6-12mm, they are mid-size ants, but their sheer numbers make them impressive.",
      lifestyle: "They are mostly distributed along the East Coast and the inland wilderness. Meat ants are a dominant native Australian ant species with highly organized colonies.",
      habits: "They're extremely territorial and aggressive, often engaging in warfare with other ant species. Their large numbers and coordinated attacks make them formidable opponents."
    },
    {
      id: "carpenter-ant",
      name: "Carpenter Ant",

      scientificName: "Camponotus species",
      image: "/carpenter-ants.jpg",
      description: "Professional carpenter ant removal in Melbourne eliminates these wood-nesting pests that can cause structural damage to homes and buildings.",
      appearance: "Carpenter ants are dark brown or black, spanning anywhere from 3 to 12 mm. They have a distinctive narrow waist and elbowed antennae.",
      lifestyle: "They create their colonies inside of wood, but throw the debris outside rather than eat it. It's a popular misconception that they have a huge appetite for wood.",
      habits: "They prefer moist, decaying wood for nesting but can also infest sound wood. Carpenter ants are most active at night and leave behind sawdust-like debris called frass."
    },
    {
      id: "jack-jumper-ant",
      name: "Jack Jumper Ant",

      scientificName: "Myrmecia pilosula",
      image: "/jack-jumper-ants.jpg",
      description: "Professional jack jumper ant control in Melbourne addresses these venomous native Australian ants known for their jumping ability and dangerous stings.",
      appearance: "Jack jumper ants are relatively large at 12-14mm with a black body and distinctive orange-red mandibles. They have excellent vision and can jump considerable distances.",
      lifestyle: "Despite their relatively large size, they have the ability to jump long distances when threatened or hunting. They're native to Australia and well-adapted to local environments.",
      habits: "They're venomous and their stings can cause severe allergic reactions in sensitive individuals. Jack jumpers are aggressive hunters and excellent at detecting movement."
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
            Common Ant Species in Melbourne
          </h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            Identify and understand the different ant species commonly found in Melbourne homes and businesses
          </p>
        </div>

        {/* Desktop Layout */}
        <div className="hidden md:block">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {/* Species List */}
            <div className="lg:col-span-1">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 sticky top-8">
                <h3 className="text-xl font-bold text-white mb-6">Common Ant Species</h3>
                <div className="space-y-2">
                  {antSpecies.map((species, index) => (
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
                    src={antSpecies[activeSpecies].image}
                    alt={`${antSpecies[activeSpecies].name} - T47 Pest Control`}
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                </div>

                {/* Content Section */}
                <div className="text-white">
                  <h3 className="text-3xl font-bold mb-2">
                    {antSpecies[activeSpecies].name.toUpperCase()}
                  </h3>
                  <p className="text-blue-200 italic mb-6 text-lg">
                    {antSpecies[activeSpecies].scientificName}
                  </p>

                  <div className="space-y-6">
                    <div>
                      <p className="text-white/90 leading-relaxed mb-4">
                        {antSpecies[activeSpecies].description}
                      </p>
                    </div>

                    <div>
                      <h4 className="text-lg font-semibold text-blue-200 mb-2">APPEARANCE</h4>
                      <p className="text-white/90 leading-relaxed">
                        {antSpecies[activeSpecies].appearance}
                      </p>
                    </div>

                    <div>
                      <h4 className="text-lg font-semibold text-blue-200 mb-2">LIFESTYLE</h4>
                      <p className="text-white/90 leading-relaxed">
                        {antSpecies[activeSpecies].lifestyle}
                      </p>
                    </div>

                    <div>
                      <h4 className="text-lg font-semibold text-blue-200 mb-2">HABITS</h4>
                      <p className="text-white/90 leading-relaxed">
                        {antSpecies[activeSpecies].habits}
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
                Select Ant Species to Learn More
              </label>
              <div className="relative">
                <select
                  value={activeSpecies}
                  onChange={(e) => setActiveSpecies(Number(e.target.value))}
                  className="w-full bg-white/95 backdrop-blur-sm text-blue-900 font-semibold py-4 px-5 pr-12 rounded-xl border-2 border-white/20 shadow-lg appearance-none focus:outline-none focus:ring-2 focus:ring-blue-300 focus:border-transparent transition-all duration-300"
                  aria-label="Select ant species"
                >
                  {antSpecies.map((species, index) => (
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
                src={antSpecies[activeSpecies].image}
                alt={`${antSpecies[activeSpecies].name} - T47 Pest Control`}
                fill
                className="object-cover"
                sizes="100vw"
              />
            </div>

            {/* Content Section */}
            <div className="text-white">
              <h3 className="text-2xl font-bold mb-2">
                {antSpecies[activeSpecies].name.toUpperCase()}
              </h3>
              <p className="text-blue-200 italic mb-4 text-base">
                {antSpecies[activeSpecies].scientificName}
              </p>

              <div className="space-y-4">
                <div>
                  <p className="text-white/90 text-sm leading-relaxed mb-4">
                    {antSpecies[activeSpecies].description}
                  </p>
                </div>

                <div>
                  <h4 className="text-base font-semibold text-blue-200 mb-2">APPEARANCE</h4>
                  <p className="text-white/90 text-sm leading-relaxed">
                    {antSpecies[activeSpecies].appearance}
                  </p>
                </div>

                <div>
                  <h4 className="text-base font-semibold text-blue-200 mb-2">LIFESTYLE</h4>
                  <p className="text-white/90 text-sm leading-relaxed">
                    {antSpecies[activeSpecies].lifestyle}
                  </p>
                </div>

                <div>
                  <h4 className="text-base font-semibold text-blue-200 mb-2">HABITS</h4>
                  <p className="text-white/90 text-sm leading-relaxed">
                    {antSpecies[activeSpecies].habits}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <div className="bg-white/10 backdrop-blur-sm p-8 rounded-xl shadow-xl max-w-2xl mx-auto border border-white/20">
            <h3 className="text-2xl font-bold mb-4 text-white">Schedule Your Ant Control Consultation</h3>
            <p className="text-white/90 mb-6 leading-relaxed">
              Don't let ants invade your home. Our expert technicians provide comprehensive ant elimination and prevention services.
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

"use client";

import { useState } from 'react';
import Image from 'next/image';

interface MothSpeciesProps {
  id: string;
  name: string;
  scientificName: string;
  image: string;
  description: string;
  appearance: string;
  lifestyle: string;
  habits: string;
}

export default function MothSpeciesGallery() {
  const [activeSpecies, setActiveSpecies] = useState(0);

  const mothSpecies: MothSpeciesProps[] = [
    {
      id: "clothes-moths",
      name: "Clothes Moths",
      scientificName: "Tineola bisselliella",
      image: "/clothes-moth-species.jpg",
      description: "Professional clothes moth control in Melbourne protects your valuable clothing and textiles from these destructive fabric-feeding pests.",
      appearance: "Small, light-colored moths (7-8mm wingspan) with golden or buff-colored wings. They avoid light and are rarely seen flying around lights.",
      lifestyle: "Hide in closets, wardrobes, and dark areas where natural fiber clothing is stored. They prefer undisturbed areas with keratin-rich materials.",
      habits: "Their larvae feed on natural fibers like wool, silk, fur, and feathers, causing irreparable damage to clothing and textiles."
    },
    {
      id: "pantry-moths",
      name: "Pantry Moths",
      scientificName: "Plodia interpunctella",
      image: "/pantry-moth-species.jpg",
      description: "Expert pantry moth elimination in Victoria targets these food-infesting pests that contaminate stored food products.",
      appearance: "Also called Indian meal moths, they have distinctive two-toned wings - copper-colored outer portions and pale inner portions.",
      lifestyle: "Found in kitchens, pantries, and food storage areas where they infest grains, cereals, nuts, and dried fruits.",
      habits: "Adult moths lay eggs directly in food products, where larvae develop and feed, contaminating entire food supplies."
    },
    {
      id: "carpet-moths",
      name: "Carpet Moths",
      scientificName: "Trichophaga tapetzella",
      image: "/carpet-moth-species.jpg",
      description: "Professional carpet moth control services in Melbourne prevent extensive damage to carpets and rugs from these destructive pests.",
      appearance: "Small moths with mottled brown and white wings. Their larvae are cream-colored with brown heads.",
      lifestyle: "Target natural fiber carpets, particularly in undisturbed areas under furniture and along edges of rooms.",
      habits: "Their larvae create bare patches and tunnels in carpeting, causing extensive damage that often goes unnoticed until significant harm is done."
    },
    {
      id: "case-bearing-moths",
      name: "Case-Bearing Moths",
      scientificName: "Tinea pellionella",
      image: "/case-bearing-moth-species.jpg",
      description: "Specialized case-bearing moth treatments in Victoria eliminate these destructive pests that create protective cases while feeding.",
      appearance: "Small brown moths with darker spots on their wings. Their larvae create distinctive portable cases from fabric fibers.",
      lifestyle: "Found in areas with natural fiber materials, particularly clothing, upholstery, and carpets.",
      habits: "Larvae create protective cases from fabric fibers and silk, which they carry as they feed. Cases often match the color of infested material."
    },
    {
      id: "brown-house-moths",
      name: "Brown House Moths",
      scientificName: "Hofmannophila pseudospretella",
      image: "/brown-house-moth-species.jpg",
      description: "Expert brown house moth control in Melbourne targets these common household pests that feed on various organic materials.",
      appearance: "Larger than clothes moths with bronze-brown wings marked with darker spots. They have a wingspan of 15-26mm.",
      lifestyle: "Thrive in dark, undisturbed areas of homes including basements, attics, and storage areas.",
      habits: "Feed on a wider range of materials including clothing, carpets, stored foods, book bindings, and even dead insects."
    },
    {
      id: "white-shouldered-moths",
      name: "White-Shouldered House Moths",
      scientificName: "Endrosis sarcitrella",
      image: "/white-shouldered-moth-species.jpg",
      description: "Professional white-shouldered house moth elimination in Victoria protects homes from these scavenging pests.",
      appearance: "Distinctive white head and shoulder markings with brown wings. They're smaller than brown house moths with a 16-20mm wingspan.",
      lifestyle: "Commonly found in kitchens, pantries, and food storage areas where they scavenge on various organic materials.",
      habits: "Scavengers that feed on a variety of organic materials including food debris, dead insects, and organic matter in bird nests."
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
            Common Moth Species in Melbourne
          </h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            Identify and understand the different moth species commonly found in Melbourne homes and businesses
          </p>
        </div>

        {/* Desktop Layout */}
        <div className="hidden md:block">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {/* Species List */}
            <div className="lg:col-span-1">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 sticky top-8">
                <h3 className="text-xl font-bold text-white mb-6">Common Moth Species</h3>
                <div className="space-y-2">
                  {mothSpecies.map((species, index) => (
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
                    src={mothSpecies[activeSpecies].image}
                    alt={`${mothSpecies[activeSpecies].name} - T47 Pest Control`}
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                </div>

                {/* Content Section */}
                <div className="text-white">
                  <h3 className="text-3xl font-bold mb-2">
                    {mothSpecies[activeSpecies].name.toUpperCase()}
                  </h3>
                  <p className="text-blue-200 italic mb-6 text-lg">
                    {mothSpecies[activeSpecies].scientificName}
                  </p>

                  <div className="space-y-6">
                    <div>
                      <p className="text-white/90 leading-relaxed mb-4">
                        {mothSpecies[activeSpecies].description}
                      </p>
                    </div>

                    <div>
                      <h4 className="text-lg font-semibold text-blue-200 mb-2">APPEARANCE</h4>
                      <p className="text-white/90 leading-relaxed">
                        {mothSpecies[activeSpecies].appearance}
                      </p>
                    </div>

                    <div>
                      <h4 className="text-lg font-semibold text-blue-200 mb-2">LIFESTYLE</h4>
                      <p className="text-white/90 leading-relaxed">
                        {mothSpecies[activeSpecies].lifestyle}
                      </p>
                    </div>

                    <div>
                      <h4 className="text-lg font-semibold text-blue-200 mb-2">HABITS</h4>
                      <p className="text-white/90 leading-relaxed">
                        {mothSpecies[activeSpecies].habits}
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
                Select Moth Species to Learn More
              </label>
              <div className="relative">
                <select
                  value={activeSpecies}
                  onChange={(e) => setActiveSpecies(Number(e.target.value))}
                  className="w-full bg-white/95 backdrop-blur-sm text-blue-900 font-semibold py-4 px-5 pr-12 rounded-xl border-2 border-white/20 shadow-lg appearance-none focus:outline-none focus:ring-2 focus:ring-blue-300 focus:border-transparent transition-all duration-300"
                  aria-label="Select moth species"
                >
                  {mothSpecies.map((species, index) => (
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
                src={mothSpecies[activeSpecies].image}
                alt={`${mothSpecies[activeSpecies].name} - T47 Pest Control`}
                fill
                className="object-cover"
                sizes="100vw"
              />
            </div>

            {/* Content Section */}
            <div className="text-white">
              <h3 className="text-2xl font-bold mb-2">
                {mothSpecies[activeSpecies].name.toUpperCase()}
              </h3>
              <p className="text-blue-200 italic mb-4 text-base">
                {mothSpecies[activeSpecies].scientificName}
              </p>

              <div className="space-y-4">
                <div>
                  <p className="text-white/90 text-sm leading-relaxed mb-4">
                    {mothSpecies[activeSpecies].description}
                  </p>
                </div>

                <div>
                  <h4 className="text-base font-semibold text-blue-200 mb-2">APPEARANCE</h4>
                  <p className="text-white/90 text-sm leading-relaxed">
                    {mothSpecies[activeSpecies].appearance}
                  </p>
                </div>

                <div>
                  <h4 className="text-base font-semibold text-blue-200 mb-2">LIFESTYLE</h4>
                  <p className="text-white/90 text-sm leading-relaxed">
                    {mothSpecies[activeSpecies].lifestyle}
                  </p>
                </div>

                <div>
                  <h4 className="text-base font-semibold text-blue-200 mb-2">HABITS</h4>
                  <p className="text-white/90 text-sm leading-relaxed">
                    {mothSpecies[activeSpecies].habits}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <div className="bg-white/10 backdrop-blur-sm p-8 rounded-xl shadow-xl max-w-2xl mx-auto border border-white/20">
            <h3 className="text-2xl font-bold mb-4 text-white">Professional Moth Control Services</h3>
            <p className="text-white/90 mb-6 leading-relaxed">
              Protect your clothing, carpets, and stored foods from destructive moth infestations with our comprehensive moth control solutions.
            </p>
            <a
              href="/contact"
              className="inline-block bg-white text-blue-900 font-bold py-4 px-8 rounded-full hover:bg-blue-50 transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              Schedule Moth Treatment
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

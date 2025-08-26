"use client";
import { useState } from 'react';
import OptimizedImage from '../common/OptimizedImage';

interface TermiteSpeciesProps {
  id: string;
  name: string;
  tabName: string;
  scientificName: string;
  image: string;
  description: string;
  characteristics: string[];
  riskLevel: string;
  treatment: string;
}

export default function PrePurchaseTermiteSpeciesGallery() {
  const [activeSpecies, setActiveSpecies] = useState(0);
  const termiteSpecies: TermiteSpeciesProps[] = [
    {
      id: "subterranean-termites",
      name: "Subterranean Termites",
      tabName: "SUBTERRANEAN",
      scientificName: "Reticulitermes species",
      image: "/subterranean-termites.jpg",
      description: "Professional subterranean termite control in Melbourne targets Australia's most destructive termite species. Our comprehensive treatment systems create long-lasting barriers to protect your property investment.",
      characteristics: [
        "Live in underground colonies",
        "Build mud tubes for protection",
        "Most destructive termite species",
        "Attack structural timber"
      ],
      riskLevel: "Very High",
      treatment: "Soil treatment, baiting systems, monitoring"
    },
    {
      id: "drywood-termites",
      name: "Drywood Termites",
      tabName: "DRYWOOD",
      scientificName: "Cryptotermes species",
      image: "/drywood-termites.jpg",
      description: "Drywood termites infest dry wood directly without soil contact. These termites are particularly concerning for furniture, window frames, and structural timber in Melbourne properties.",
      characteristics: [
        "No soil contact required",
        "Infest dry timber directly",
        "Leave distinctive pellet droppings",
        "Harder to detect early"
      ],
      riskLevel: "High",
      treatment: "Localized treatment, fumigation, timber replacement"
    },
    {
      id: "dampwood-termites",
      name: "Dampwood Termites",
      tabName: "DAMPWOOD",
      scientificName: "Porotermes species",
      image: "/dampwood-termites.jpg",
      description: "Dampwood termites target moisture-damaged timber in Melbourne homes. While less aggressive than subterranean species, they indicate serious moisture problems requiring immediate attention.",
      characteristics: [
        "Require high moisture content",
        "Larger than other termite species",
        "Indicate moisture problems",
        "Less aggressive than subterranean"
      ],
      riskLevel: "Medium",
      treatment: "Moisture control, timber replacement, ventilation improvement"
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-br from-red-900 via-red-800 to-red-700 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-red-700/20 rounded-bl-[100px] z-0"></div>
        <div className="absolute bottom-0 left-0 w-1/4 h-1/4 bg-red-600/10 rounded-tr-[100px] z-0"></div>
        <div className="absolute top-1/3 left-10 w-6 h-6 bg-red-400/30 rounded-full z-0"></div>
        <div className="absolute bottom-1/4 right-20 w-4 h-4 bg-red-300/40 rounded-full z-0"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="inline-block px-3 py-1 bg-red-100/20 text-red-100 text-sm font-semibold rounded-full mb-3">
            TERMITE SPECIES IDENTIFICATION GUIDE
          </span>
          <h2 className="text-4xl font-bold mb-4 text-white">
            Common Termite <span className="text-red-300">Species</span> in Australia
          </h2>
          <div className="w-24 h-1 bg-red-400 mx-auto mb-6"></div>
          <p className="text-red-100 max-w-3xl mx-auto">
            Understanding the specific termite species threatening your property is crucial for effective treatment. Each species requires specialized control approaches.
          </p>
        </div>

        {/* Species Tabs */}
        <div className="flex flex-wrap justify-center mb-8 gap-2">
          {termiteSpecies.map((species, index) => (
            <button
              key={species.id}
              onClick={() => setActiveSpecies(index)}
              className={`px-6 py-3 rounded-full font-semibold text-sm transition-all duration-300 ${
                activeSpecies === index
                  ? 'bg-white text-red-800 shadow-lg transform scale-105'
                  : 'bg-red-800/50 text-red-100 hover:bg-red-700/70 hover:text-white'
              }`}
            >
              {species.tabName}
            </button>
          ))}
        </div>

        {/* Species Content */}
        <div className="max-w-6xl mx-auto">
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 shadow-2xl border border-red-400/20">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              {/* Image */}
              <div className="relative">
                <div className="relative h-80 rounded-xl overflow-hidden shadow-xl">
                  <OptimizedImage
                    src={termiteSpecies[activeSpecies].image}
                    fallbackSrc="/termite-species-default.jpg"
                    alt={termiteSpecies[activeSpecies].name}
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                </div>
                
                {/* Risk Level Badge */}
                <div className="absolute top-4 right-4">
                  <span className={`px-3 py-1 rounded-full text-xs font-bold ${
                    termiteSpecies[activeSpecies].riskLevel === 'Very High' ? 'bg-red-600 text-white' :
                    termiteSpecies[activeSpecies].riskLevel === 'High' ? 'bg-orange-500 text-white' :
                    'bg-yellow-500 text-black'
                  }`}>
                    {termiteSpecies[activeSpecies].riskLevel} Risk
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="text-white">
                <h3 className="text-3xl font-bold mb-2">{termiteSpecies[activeSpecies].name}</h3>
                <p className="text-red-200 italic mb-4">{termiteSpecies[activeSpecies].scientificName}</p>
                <p className="text-red-100 mb-6 leading-relaxed">{termiteSpecies[activeSpecies].description}</p>

                {/* Characteristics */}
                <div className="mb-6">
                  <h4 className="text-xl font-semibold mb-3 text-red-200">Key Characteristics:</h4>
                  <ul className="space-y-2">
                    {termiteSpecies[activeSpecies].characteristics.map((char, index) => (
                      <li key={index} className="flex items-start">
                        <span className="text-red-400 mr-2 mt-1">•</span>
                        <span className="text-red-100">{char}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Treatment */}
                <div className="bg-red-800/30 rounded-lg p-4 border border-red-400/30">
                  <h4 className="text-lg font-semibold mb-2 text-red-200">Treatment Options:</h4>
                  <p className="text-red-100 text-sm">{termiteSpecies[activeSpecies].treatment}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 max-w-2xl mx-auto border border-red-400/20">
            <h3 className="text-2xl font-bold text-white mb-3">Protect Your Property Investment</h3>
            <p className="text-red-100 mb-4">
              Early identification and professional treatment are crucial for preventing costly termite damage.
            </p>
            <a 
              href="/contact" 
              className="inline-block bg-white text-red-800 hover:bg-red-50 font-bold py-3 px-8 rounded-full transition-colors shadow-lg"
            >
              Get Professional Inspection
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

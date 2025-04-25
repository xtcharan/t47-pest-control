"use client";

import { useState } from 'react';
import Image from 'next/image';

interface ConstructionSitePestProps {
  name: string;
  image: string;
  description: string;
  link: string;
}

const ConstructionSitePest = ({ name, image, description, link }: ConstructionSitePestProps) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="relative overflow-hidden rounded-xl shadow-lg group cursor-pointer transition-all duration-300 hover:shadow-xl"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative h-[220px] w-full overflow-hidden">
        <Image
          src={image}
          alt={`${name} - Construction Site Pest Control`}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-110"
          sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
        />
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="absolute bottom-0 left-0 w-full p-4">
          <h3 className="text-white font-bold text-lg">{name}</h3>
        </div>

        {/* Description panel that slides up on hover */}
        <div
          className={`absolute inset-0 bg-yellow-600 p-4 flex flex-col justify-center transition-all duration-500 ease-in-out ${
            isHovered ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'
          }`}
        >
          <h3 className="text-white font-bold text-lg mb-2">{name}</h3>
          <p className="text-white/90 text-sm leading-relaxed">{description}</p>
          <a 
            href={link} 
            className="mt-3 inline-flex items-center text-white font-medium hover:underline"
          >
            Learn more about {name.toLowerCase()}
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
};

export default function ConstructionSitePestGallery() {
  const constructionSitePests: ConstructionSitePestProps[] = [
    {
      name: "Termites",
      image: "/termites-construction.jpg",
      description: "Termites pose a significant threat to construction projects, particularly during foundation work and framing stages. They can infest lumber and other wood materials before they're even incorporated into the structure. Pre-construction termite treatments are essential for preventing future infestations and structural damage.",
      link: "/residential/termites"
    },
    {
      name: "Rodents",
      image: "/rodent-construction.jpg",
      description: "Mice and rats are common on construction sites, attracted by food waste, building materials, and shelter opportunities. They can damage electrical wiring, insulation, and other components, creating fire hazards and compromising structural integrity. They also pose health risks to workers through disease transmission.",
      link: "/residential/rodents"
    },
    {
      name: "Wasps & Hornets",
      image: "/wasps-construction.jpg",
      description: "Stinging insects frequently establish nests on construction sites, particularly in partially completed structures. They pose a significant safety risk to workers, especially those working at heights who may be startled by encounters. Professional removal is essential to prevent painful and potentially dangerous stings.",
      link: "/residential/wasps"
    },
    {
      name: "Venomous Spiders",
      image: "/spiders-construction.jpg",
      description: "Construction sites provide ideal habitats for venomous spiders like black widows and brown recluses. They hide in building materials, equipment, and worker facilities, posing serious health risks. Professional management focuses on habitat modification and targeted treatments to reduce worker exposure.",
      link: "/residential/spiders"
    },
    {
      name: "Carpenter Ants",
      image: "/carpenter-ants-construction.jpg",
      description: "Carpenter ants can damage wooden structural elements on construction sites, particularly if the wood has been exposed to moisture. They excavate galleries in wood for nesting, potentially compromising structural integrity. Early detection and treatment are essential to prevent established colonies in new construction.",
      link: "/residential/ants"
    },
    {
      name: "Wood-Boring Beetles",
      image: "/wood-boring-beetles-construction.jpg",
      description: "Various species of wood-boring beetles can infest lumber and other wood materials used in construction. They lay eggs in wood, and their larvae tunnel through the material, potentially weakening structural elements. Proper material inspection and treatment are crucial for prevention.",
      link: "/residential/wood-boring-beetles"
    }
  ];

  return (
    <section className="py-16 bg-gray-50 relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <span className="inline-block px-3 py-1 bg-yellow-100 text-yellow-700 text-sm font-semibold rounded-full mb-3">
            COMMON CONSTRUCTION SITE PESTS
          </span>
          <h2 className="text-4xl font-bold mb-4 text-gray-900">
            Construction Site <span className="text-yellow-600">Pest Guide</span>
          </h2>
          <div className="w-24 h-1 bg-yellow-600 mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Identify and understand the most common pests that threaten construction sites, worker safety, and project timelines.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {constructionSitePests.map((pest, index) => (
            <ConstructionSitePest
              key={index}
              name={pest.name}
              image={pest.image}
              description={pest.description}
              link={pest.link}
            />
          ))}
        </div>

        <div className="mt-12">
          <div className="bg-white p-8 rounded-xl shadow-lg relative overflow-hidden">
            <div className="relative z-10 py-2">
              <h3 className="text-xl font-semibold mb-3">Dealing with construction site pest problems?</h3>
              <p className="text-gray-600 mb-4">Our expert technicians specialize in construction-grade pest control solutions that protect worker safety and project timelines while effectively managing pest issues.</p>
              <a href="/contact" className="inline-block bg-yellow-600 hover:bg-yellow-700 text-white font-bold py-3 px-8 rounded-full transition-all duration-300">
                Schedule a Consultation
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

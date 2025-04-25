"use client";

import { useState } from 'react';
import Image from 'next/image';

interface SpiderSpeciesProps {
  name: string;
  image: string;
  description: string;
}

const SpiderSpecies = ({ name, image, description }: SpiderSpeciesProps) => {
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
          alt={`${name} - T47 Pest Control`}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-110"
          sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-60 transition-opacity duration-300 group-hover:opacity-80"></div>

        <div className="absolute bottom-3 left-3 z-10">
          <h3 className="text-white font-bold text-lg drop-shadow-md">{name}</h3>
        </div>

        <div
          className={`absolute inset-0 bg-gradient-to-br from-blue-600/90 to-red-600/90 p-4 flex flex-col justify-center transition-all duration-500 ease-in-out ${
            isHovered ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'
          }`}
        >
          <div className="absolute top-0 right-0 w-20 h-20 bg-red-500/20 rounded-full blur-xl -mr-5 -mt-5"></div>
          <h3 className="text-white font-bold text-lg mb-2">{name}</h3>
          <p className="text-white/90 text-sm leading-relaxed">{description}</p>
          <div className="absolute bottom-2 right-2">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-red-200" viewBox="0 0 20 20" fill="currentColor">
              <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
              <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

export default function SpiderSpeciesGallery() {
  const spiderSpecies: SpiderSpeciesProps[] = [
    {
      name: "Black Widow Spider",
      image: "/black-widow-spider.jpg",
      description: "Black widow spiders are identified by their shiny black bodies and distinctive red hourglass marking on the underside of their abdomen. Their venom is neurotoxic and can cause severe pain, muscle cramps, and in rare cases, more serious symptoms requiring medical attention."
    },
    {
      name: "Brown Recluse Spider",
      image: "/brown-recluse-spider.jpg",
      description: "Brown recluse spiders have a distinctive violin-shaped marking on their back. Their bite can cause necrotic lesions that may take months to heal. They prefer dark, undisturbed areas like closets, attics, and storage areas."
    },
    {
      name: "Huntsman Spider",
      image: "/huntsman-spider.jpg",
      description: "Huntsman spiders are large, fast-moving spiders with a leg span that can reach up to 15cm. Despite their intimidating size, they're generally not dangerous to humans. They don't build webs but actively hunt their prey, often found on walls and ceilings."
    },
    {
      name: "Wolf Spider",
      image: "/wolf-spider.jpg",
      description: "Wolf spiders are robust, ground-dwelling hunters with excellent vision. They don't spin webs but chase down their prey. Female wolf spiders carry their egg sacs attached to their spinnerets and later carry their spiderlings on their backs."
    },
    {
      name: "Redback Spider",
      image: "/redback-spider.jpg",
      description: "Redback spiders are easily identified by the distinctive red stripe on their abdomen. Their venom is neurotoxic and can cause severe pain, sweating, and nausea. They build messy webs in sheltered locations around homes and gardens."
    },
    {
      name: "Orb-Weaving Spider",
      image: "/orb-weaving-spider.jpg",
      description: "Orb-weaving spiders create the classic circular web design. They're generally harmless to humans and beneficial for controlling flying insects. These spiders come in various colors and patterns, with some species being quite large and colorful."
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-b from-blue-50/30 to-white relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute -top-20 right-20 w-64 h-64 bg-blue-100/30 rounded-full blur-3xl"></div>
        <div className="absolute bottom-40 -left-20 w-72 h-72 bg-red-100/20 rounded-full blur-3xl"></div>
        <div className="absolute top-1/3 left-1/2 w-40 h-40 bg-red-100/10 rounded-full blur-2xl"></div>
        <div className="absolute top-20 left-20 w-6 h-6 bg-red-400 rounded-full animate-pulse-slow"></div>
        <div className="absolute bottom-20 right-20 w-4 h-4 bg-blue-400 rounded-full animate-pulse-slow"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <span className="inline-block px-3 py-1 bg-gradient-to-r from-blue-100 to-red-100 text-blue-700 text-sm font-semibold rounded-full mb-3">
            IDENTIFICATION GUIDE
          </span>
          <h2 className="text-4xl font-bold mb-4 text-gray-900">
            Common Spider <span className="bg-gradient-to-r from-blue-600 to-red-600 bg-clip-text text-transparent">Species</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-red-600 mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Hover over or tap on each spider species to learn more about their characteristics, behaviors, and the potential risks they pose.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {spiderSpecies.map((species, index) => (
            <SpiderSpecies
              key={index}
              name={species.name}
              image={species.image}
              description={species.description}
            />
          ))}
        </div>

        <div className="mt-12 text-center">
          <div className="bg-white p-6 rounded-xl shadow-lg max-w-2xl mx-auto border border-blue-100 transform hover:shadow-xl transition-all duration-300 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-16 h-16">
              <div className="absolute top-0 left-0 w-16 h-2 bg-gradient-to-r from-red-500 to-red-400"></div>
              <div className="absolute top-0 left-0 w-2 h-16 bg-gradient-to-b from-red-500 to-red-400"></div>
            </div>
            <div className="absolute top-0 right-0 w-16 h-16">
              <div className="absolute top-0 right-0 w-16 h-2 bg-gradient-to-l from-blue-500 to-blue-400"></div>
              <div className="absolute top-0 right-0 w-2 h-16 bg-gradient-to-b from-blue-500 to-blue-400"></div>
            </div>
            <div className="absolute bottom-0 left-0 w-16 h-16">
              <div className="absolute bottom-0 left-0 w-16 h-2 bg-gradient-to-r from-blue-500 to-blue-400"></div>
              <div className="absolute bottom-0 left-0 w-2 h-16 bg-gradient-to-t from-blue-500 to-blue-400"></div>
            </div>
            <div className="absolute bottom-0 right-0 w-16 h-16">
              <div className="absolute bottom-0 right-0 w-16 h-2 bg-gradient-to-l from-red-500 to-red-400"></div>
              <div className="absolute bottom-0 right-0 w-2 h-16 bg-gradient-to-t from-red-500 to-red-400"></div>
            </div>

            <div className="relative z-10 py-2">
              <h3 className="text-xl font-semibold mb-3 text-gray-900">Not sure what type of spiders you have?</h3>
              <p className="text-gray-600 mb-4">Our expert technicians can identify any spider species and provide targeted treatment solutions.</p>
              <a href="/contact" className="inline-block bg-gradient-to-r from-blue-600 to-red-600 hover:from-blue-700 hover:to-red-700 text-white font-bold py-3 px-8 rounded-full transition-all duration-300 transform hover:scale-105">
                Schedule an Inspection
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

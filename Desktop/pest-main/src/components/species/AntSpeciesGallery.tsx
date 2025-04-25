"use client";

import { useState } from 'react';
import Image from 'next/image';

interface AntSpeciesProps {
  name: string;
  image: string;
  description: string;
}

const AntSpecies = ({ name, image, description }: AntSpeciesProps) => {
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

        {/* Gradient overlay that's always visible */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-60 transition-opacity duration-300 group-hover:opacity-80"></div>

        {/* Species name - always visible */}
        <div className="absolute bottom-3 left-3 z-10">
          <h3 className="text-white font-bold text-lg drop-shadow-md">{name}</h3>
        </div>

        {/* Description panel that slides up on hover */}
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

export default function AntSpeciesGallery() {
  const antSpecies: AntSpeciesProps[] = [
    {
      name: "Argentine Ants",
      image: "/argentine-ants.jpg",
      description: "Argentine ants form super colonies with multiple queens. They're invasive and can displace native ant species. These ants are attracted to sweet foods and often enter homes through tiny cracks seeking food and water."
    },
    {
      name: "Black Garden Ants",
      image: "/black-garden-ants.jpg",
      description: "Black garden ants are common, everyday insects that you are likely to see daily and largely ignore. They live in gardens and lawns but will keep trying to invade your house and they literally live food sources. Their colonies are extremely large and regular ant treatment is essential to keep them at bay."
    },
    {
      name: "Coastal Brown Ants",
      image: "/coastal-brown-ants.jpg",
      description: "Coastal brown ants (also known as big-headed ants) are small but destructive pests. They build extensive colonies with multiple queens and can damage lawns and gardens with their soil mounds. They're attracted to both sweet and protein-based foods."
    },
    {
      name: "Carpenter Ants",
      image: "/carpenter-ants.jpg",
      description: "Carpenter ants are large ants that excavate wood to build nests, causing structural damage over time. Unlike termites, they don't eat wood but remove it to create galleries. They're most active at night and are attracted to moisture-damaged wood."
    },
    {
      name: "White-Footed House Ants",
      image: "/white-footed-house-ants.jpg",
      description: "White-footed house ants are small with distinctive pale legs. They form large colonies with multiple queens and are difficult to control. These ants are attracted to sweet foods and are commonly found in kitchens and bathrooms."
    },
    {
      name: "Bull Ants",
      image: "/bull-ants.jpg",
      description: "Bull ants are large, aggressive ants with powerful stings that can cause severe allergic reactions. They have excellent vision and will actively defend their nests. Bull ants build underground nests with a small mound entrance, often near trees or logs."
    },
    {
      name: "Singapore Ants",
      image: "/singapore-ants.jpg",
      description: "Singapore ants are tiny but form massive colonies with multiple queens. They're highly adaptable and can nest in various locations. These ants are attracted to both sweet and protein foods and can contaminate food sources in homes and businesses."
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-b from-blue-50/30 to-white relative overflow-hidden">
      {/* Decorative elements */}
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
            Common Ant <span className="bg-gradient-to-r from-blue-600 to-red-600 bg-clip-text text-transparent">Species</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-red-600 mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Hover over or tap on each ant species to learn more about their characteristics, behaviors, and the threats they pose to your home or business.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {antSpecies.slice(0, 6).map((species, index) => (
            <AntSpecies
              key={index}
              name={species.name}
              image={species.image}
              description={species.description}
            />
          ))}
        </div>

        {/* Last row centered */}
        <div className="mt-6 flex justify-center">
          {antSpecies.slice(6).map((species, index) => (
            <div key={index} className="w-full max-w-md">
              <AntSpecies
                name={species.name}
                image={species.image}
                description={species.description}
              />
            </div>
          ))}
        </div>

        {/* Call to action */}
        <div className="mt-12 text-center">
          <div className="bg-white p-6 rounded-xl shadow-lg max-w-2xl mx-auto border border-blue-100 transform hover:shadow-xl transition-all duration-300 relative overflow-hidden">
            {/* Decorative corner accents */}
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
              <h3 className="text-xl font-semibold mb-3 text-gray-900">Not sure what type of ants you have?</h3>
              <p className="text-gray-600 mb-4">Our expert technicians can identify any ant species and provide targeted treatment solutions.</p>
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

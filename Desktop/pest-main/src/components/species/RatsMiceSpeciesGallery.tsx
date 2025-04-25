"use client";

import { useState } from 'react';
import Image from 'next/image';

interface RodentSpeciesProps {
  name: string;
  image: string;
  description: string;
}

const RodentSpecies = ({ name, image, description }: RodentSpeciesProps) => {
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
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
        <div className="absolute bottom-0 left-0 right-0 p-4">
          <h3 className="text-white font-bold text-lg">{name}</h3>
        </div>

        {/* Description panel that slides up on hover */}
        <div
          className={`absolute inset-0 bg-gradient-to-br from-red-600/90 to-red-700/90 p-4 flex flex-col justify-center transition-all duration-500 ease-in-out ${
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

export default function RatsMiceSpeciesGallery() {
  const rodentSpecies: RodentSpeciesProps[] = [
    {
      name: "Norway Rat",
      image: "/norway-rat.jpg",
      description: "Also known as brown rats, these are the most common rat species in urban areas. They have blunt snouts, small ears, and thick bodies reaching 7-10 inches in length with 6-8 inch tails. They're excellent burrowers, typically nesting at ground level or below, and are strong swimmers. They're known for their cautious behavior and preference for protein-rich foods."
    },
    {
      name: "Roof Rat",
      image: "/roof-rat.jpg",
      description: "Also called black rats, these rodents have sleeker bodies, pointed snouts, and larger ears compared to Norway rats. They're excellent climbers, preferring to nest in elevated areas like attics, trees, and upper building levels. Their tails are longer than their bodies, and they typically feed on fruits, nuts, and seeds. They're more common in coastal and warmer regions."
    },
    {
      name: "House Mouse",
      image: "/house-mouse.jpg",
      description: "The most common mouse species in homes, house mice have small, slender bodies (2-4 inches) with relatively large ears and pointed snouts. Their tails are thin and about as long as their bodies. They're curious by nature, excellent climbers, and can squeeze through openings as small as a pencil (¼ inch). They primarily feed on grains and seeds but will eat almost anything available."
    },
    {
      name: "Field Mouse",
      image: "/field-mouse.jpg",
      description: "Also known as deer mice, these rodents have distinctively bi-colored tails (dark on top, light underneath). They have larger eyes and ears compared to house mice, with bodies typically 3-4 inches long. While they prefer outdoor habitats, they often enter homes during colder months. They're known vectors for hantavirus and primarily feed on seeds, nuts, insects, and berries."
    },
    {
      name: "Pack Rat",
      image: "/pack-rat.jpg",
      description: "Also called wood rats, these larger rodents have furry tails, large ears, and prominent eyes. They're known for collecting or 'trading' objects, often leaving a new item in place of something they've taken. They build large, complex nests called middens, which can be used for generations. They primarily feed on plants, fruits, and seeds."
    },
    {
      name: "Juvenile Rats",
      image: "/juvenile-rat.jpg",
      description: "Young rats can be mistaken for mice due to their smaller size, but they have proportionally smaller ears and feet compared to their body size than mice do. They grow rapidly, reaching sexual maturity in just 5-6 weeks. Early identification is crucial for effective control, as a single pair of rats can produce up to 2,000 descendants in a year if left unchecked."
    }
  ];

  return (
    <section className="py-16 bg-white relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-red-50/50 rounded-bl-[100px] z-0"></div>
        <div className="absolute bottom-0 left-0 w-1/4 h-1/4 bg-red-50/30 rounded-tr-[100px] z-0"></div>
        <div className="absolute top-1/3 left-10 w-6 h-6 bg-red-100 rounded-full z-0"></div>
        <div className="absolute bottom-1/4 right-20 w-4 h-4 bg-red-200 rounded-full z-0"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <span className="inline-block px-3 py-1 bg-gradient-to-r from-red-100 to-red-200 text-red-700 text-sm font-semibold rounded-full mb-3">
            IDENTIFICATION GUIDE
          </span>
          <h2 className="text-4xl font-bold mb-4 text-gray-900">
            Common Rodent <span className="bg-gradient-to-r from-red-500 to-red-600 bg-clip-text text-transparent">Species</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-red-500 to-red-600 mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Hover over or tap on each rodent species to learn more about their characteristics, behaviors, and the specific threats they pose to your home and family.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {rodentSpecies.map((species, index) => (
            <RodentSpecies
              key={index}
              name={species.name}
              image={species.image}
              description={species.description}
            />
          ))}
        </div>

        {/* Rat vs Mouse Comparison */}
        <div className="mt-16 bg-gray-50 rounded-xl overflow-hidden shadow-md">
          <div className="grid grid-cols-1 md:grid-cols-2">
            <div className="p-8 flex items-center">
              <div className="max-w-md">
                <h3 className="text-2xl font-bold mb-4 text-gray-900">Rats vs. Mice: Key Differences</h3>
                <p className="text-gray-600 mb-6">
                  Understanding the differences between rats and mice is crucial for effective control. These rodents require different treatment approaches due to their distinct behaviors, habitats, and physical characteristics.
                </p>
                <div className="space-y-4">
                  <div className="bg-white p-4 rounded-lg shadow-sm">
                    <h4 className="font-semibold text-gray-800 mb-2">Size & Appearance</h4>
                    <p className="text-gray-600 text-sm">Rats are significantly larger (7-10 inches) with thicker bodies, while mice are much smaller (2-4 inches) with slender bodies and proportionally larger ears.</p>
                  </div>
                  <div className="bg-white p-4 rounded-lg shadow-sm">
                    <h4 className="font-semibold text-gray-800 mb-2">Behavior & Habitat</h4>
                    <p className="text-gray-600 text-sm">Rats are cautious and neophobic (fear new objects), while mice are curious and exploratory. Rats need larger territories (100-150 foot radius), while mice operate in smaller areas (10-30 foot radius).</p>
                  </div>
                  <div className="bg-white p-4 rounded-lg shadow-sm">
                    <h4 className="font-semibold text-gray-800 mb-2">Entry Points</h4>
                    <p className="text-gray-600 text-sm">Rats need openings of ½ inch or larger, while mice can squeeze through gaps as small as ¼ inch (the size of a pencil), making them more difficult to exclude.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative h-[400px] md:h-auto">
              <Image
                src="/rat-vs-mouse.jpg"
                alt="Rat vs Mouse Comparison"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black/40 to-transparent"></div>
              <div className="absolute bottom-0 left-0 p-6">
                <h4 className="text-white font-bold text-xl mb-2">Different Species, Different Solutions</h4>
                <p className="text-white/80 max-w-xs">Our technicians are trained to identify exactly which rodent species you're dealing with and implement the most effective control strategies.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Not sure what type of rodents you have? */}
        <div className="mt-16 text-center">
          <div className="bg-white p-8 rounded-xl shadow-md max-w-2xl mx-auto border border-gray-100">
            <div className="relative z-10 py-2">
              <h3 className="text-xl font-semibold mb-3 text-gray-900">Not sure what type of rodents you have?</h3>
              <p className="text-gray-600 mb-4">Our expert technicians can identify the specific rodent species in your home and provide targeted treatment solutions.</p>
              <a href="/contact" className="inline-block bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white font-bold py-3 px-8 rounded-full transition-all duration-300 transform hover:scale-105">
                Schedule an Inspection
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

"use client";

import { useState } from 'react';
import Image from 'next/image';

interface MothSpeciesProps {
  name: string;
  image: string;
  description: string;
}

const MothSpecies = ({ name, image, description }: MothSpeciesProps) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="relative rounded-xl overflow-hidden shadow-md h-64 group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Image */}
      <div className="absolute inset-0 bg-gray-200">
        <Image
          src={image}
          alt={name}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover transition-transform duration-500 ease-in-out group-hover:scale-110"
        />
      </div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>

      {/* Title */}
      <div className="absolute bottom-0 left-0 w-full p-4 z-10">
        <h3 className="text-white font-bold text-xl">{name}</h3>
      </div>

      {/* Description panel that slides up on hover */}
      <div
        className={`absolute inset-0 bg-gradient-to-br from-green-light/90 to-green-dark/90 p-5 flex flex-col justify-center transition-all duration-500 ease-in-out ${
          isHovered ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'
        }`}
      >
        <div className="absolute top-0 right-0 w-20 h-20 bg-green-light/20 rounded-full blur-xl -mr-5 -mt-5"></div>

        <h3 className="text-white font-bold text-xl mb-1">{name}</h3>

        <p className="text-white/90 text-sm leading-relaxed mb-3">
          {description}
        </p>

        <div className="absolute bottom-2 right-2">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-200" viewBox="0 0 20 20" fill="currentColor">
            <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
            <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd" />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default function MothSpeciesGallery() {
  const mothSpecies: MothSpeciesProps[] = [
    {
      name: "Clothes Moths",
      image: "/clothes-moth-species.jpg",
      description: "Professional clothes moth control in Melbourne protects your valuable clothing and textiles. These small, light-colored moths (7-8mm) avoid light and hide in closets and wardrobes. Their larvae feed on natural fibers like wool, silk, and fur, causing irreparable damage to clothing and textiles."
    },
    {
      name: "Pantry Moths",
      image: "/pantry-moth-species.jpg",
      description: "Expert pantry moth elimination in Victoria targets these food-infesting pests. Also called Indian meal moths, they contaminate stored foods like grains, cereals, nuts, and dried fruits. Adult moths have distinctive two-toned wings and lay eggs directly in food products, where larvae develop and feed."
    },
    {
      name: "Carpet Moths",
      image: "/carpet-moth-species.jpg",
      description: "Professional carpet moth control services in Melbourne prevent damage to carpets and rugs. These moths target natural fiber carpets, particularly in undisturbed areas. Their larvae create bare patches and tunnels in carpeting, causing extensive damage that often goes unnoticed until significant harm is done."
    },
    {
      name: "Case-Bearing Moths",
      image: "/case-bearing-moth-species.jpg",
      description: "Specialized case-bearing moth treatments in Victoria eliminate these destructive pests. Their larvae create protective cases from fabric fibers and their own silk, which they carry as they feed. These cases often match the color of the infested material, making them difficult to spot on clothing and textiles."
    },
    {
      name: "Brown House Moths",
      image: "/brown-house-moth-species.jpg",
      description: "Expert brown house moth control in Melbourne targets these common household pests. Larger than clothes moths with bronze-brown wings, they feed on a wider range of materials including clothing, carpets, stored foods, and even book bindings. They thrive in dark, undisturbed areas of homes."
    },
    {
      name: "White-Shouldered House Moths",
      image: "/white-shouldered-moth-species.jpg",
      description: "Professional white-shouldered house moth elimination in Victoria protects your home. These moths have distinctive white head and shoulder markings with brown wings. They're scavengers that feed on a variety of organic materials and are commonly found in kitchens, pantries, and food storage areas."
    }
  ];

  return (
    <section className="py-16 bg-white relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-green-50 rounded-full blur-3xl opacity-70 -mr-32 -mt-32"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-green-50 rounded-full blur-3xl opacity-70 -ml-32 -mb-32"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <span className="inline-block px-3 py-1 bg-green-light/10 text-green-dark text-sm font-semibold rounded-full mb-3">
            IDENTIFICATION GUIDE
          </span>
          <h2 className="text-4xl font-bold mb-4 text-gray-900">
            Common Moth <span className="bg-gradient-to-r from-green-light to-green-dark bg-clip-text text-transparent">Species</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-green-light to-green-dark mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Hover over or tap on each moth species to learn more about their characteristics, behaviors, and the threats they pose to your home or business.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {mothSpecies.slice(0, 6).map((species, index) => (
            <MothSpecies
              key={index}
              name={species.name}
              image={species.image}
              description={species.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

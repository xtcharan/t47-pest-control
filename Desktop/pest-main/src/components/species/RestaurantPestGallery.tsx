"use client";

import { useState } from 'react';
import Image from 'next/image';

interface RestaurantPestProps {
  name: string;
  image: string;
  description: string;
  link: string;
}

const RestaurantPest = ({ name, image, description, link }: RestaurantPestProps) => {
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
          alt={`${name} - Restaurant Pest Control`}
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
          className={`absolute inset-0 bg-blue-600 p-4 flex flex-col justify-center transition-all duration-500 ease-in-out ${
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

export default function RestaurantPestGallery() {
  const restaurantPests: RestaurantPestProps[] = [
    {
      name: "Cockroaches",
      image: "/cockroach-restaurant.jpg",
      description: "Cockroaches are one of the most common restaurant pests and can spread bacteria like Salmonella and E. coli. They contaminate food preparation surfaces and can trigger allergic reactions. These nocturnal pests can enter through tiny cracks and reproduce rapidly, making professional control essential for restaurants.",
      link: "/residential/cockroaches"
    },
    {
      name: "Rodents",
      image: "/rodent-restaurant.jpg",
      description: "Mice and rats pose serious health risks in restaurant environments. They contaminate food with droppings, urine, and hair, and can spread diseases like Salmonella and Hantavirus. Rodents can damage property by gnawing on structures and wiring, creating fire hazards. Their presence can lead to health code violations and reputation damage.",
      link: "/residential/rodents"
    },
    {
      name: "Flies",
      image: "/flies-restaurant.jpg",
      description: "Flies are more than just a nuisance in restaurants—they're serious disease vectors. They can transfer over 100 pathogens as they move between waste and food surfaces. Fruit flies, house flies, and drain flies are common in food service establishments, attracted to food waste, drains, and moist environments.",
      link: "/residential/flies"
    },
    {
      name: "Stored Product Pests",
      image: "/stored-product-pests.jpg",
      description: "Beetles, weevils, and moths can infest dry goods storage areas in restaurants. These pests contaminate food products, leading to inventory loss and potential health code violations. They can enter through infested deliveries or find their way into improperly sealed containers.",
      link: "/residential/stored-product-pests"
    },
    {
      name: "Ants",
      image: "/ants-restaurant.jpg",
      description: "Ants are persistent restaurant invaders attracted to food residues and sugary substances. Different species require different treatment approaches. They can contaminate food and preparation surfaces, and their presence suggests sanitation issues to health inspectors and customers.",
      link: "/residential/ants"
    },
    {
      name: "Pantry Moths",
      image: "/pantry-moths.jpg",
      description: "Indian meal moths and other pantry pests infest stored dry goods like flour, grains, and spices. They lay eggs in food products, which hatch into larvae that contaminate ingredients. Regular inventory rotation and proper storage are essential for prevention.",
      link: "/residential/pantry-moths"
    }
  ];

  return (
    <section className="py-16 bg-gray-50 relative overflow-hidden">

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <span className="inline-block px-3 py-1 bg-blue-100 text-blue-700 text-sm font-semibold rounded-full mb-3">
            COMMON RESTAURANT PESTS
          </span>
          <h2 className="text-4xl font-bold mb-4 text-gray-900">
            Restaurant <span className="text-blue-600">Pest Guide</span>
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Hover over or tap on each pest to learn more about the threats they pose to your restaurant and how our professional pest control services can help protect your business.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {restaurantPests.map((pest, index) => (
            <RestaurantPest
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
              <h3 className="text-xl font-semibold mb-3 text-gray-900">Dealing with restaurant pest problems?</h3>
              <p className="text-gray-600 mb-4">Our expert technicians specialize in discreet, effective pest control solutions for restaurants and food service establishments.</p>
              <a href="/contact" className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-full transition-all duration-300">
                Schedule a Consultation
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

"use client";

import { useState } from 'react';
import Image from 'next/image';

interface ChildcarePestProps {
  name: string;
  image: string;
  description: string;
  link: string;
}

const ChildcarePest = ({ name, image, description, link }: ChildcarePestProps) => {
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
          alt={`${name} - Child Care Pest Control`}
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
          className={`absolute inset-0 bg-pink-600 p-4 flex flex-col justify-center transition-all duration-500 ease-in-out ${
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

export default function ChildcarePestGallery() {
  const childcarePests: ChildcarePestProps[] = [
    {
      name: "Cockroaches",
      image: "/cockroach-childcare.jpg",
      description: "Cockroaches pose serious health risks in childcare environments as they can trigger asthma and allergies in children. They spread bacteria by contaminating surfaces, toys, and food preparation areas. Their presence can indicate sanitation issues and may lead to regulatory violations.",
      link: "/residential/cockroaches"
    },
    {
      name: "Rodents",
      image: "/rodent-childcare.jpg",
      description: "Mice and rats in childcare facilities can spread diseases through their droppings, urine, and hair. They can contaminate food and surfaces, damage property, and potentially bite children. Their presence creates significant health hazards and can lead to facility closure if not properly addressed.",
      link: "/residential/rodents"
    },
    {
      name: "Ants",
      image: "/ants-childcare.jpg",
      description: "Ants are common invaders in childcare settings, attracted to food residues and crumbs left by children. While most species are primarily a nuisance, some can bite or sting, potentially causing allergic reactions in sensitive children. Their persistent nature makes professional management necessary.",
      link: "/residential/ants"
    },
    {
      name: "Flies",
      image: "/flies-childcare.jpg",
      description: "Flies in childcare environments can spread over 100 pathogens as they move between waste areas and food surfaces. They're particularly problematic in diaper changing areas, kitchens, and dining spaces. Professional management focuses on sanitation improvements and targeted treatments.",
      link: "/residential/flies"
    },
    {
      name: "Bed Bugs",
      image: "/bed-bugs-childcare.jpg",
      description: "Bed bugs can be inadvertently brought into childcare centers through backpacks, clothing, and nap time bedding. While they don't transmit diseases, their bites cause itchy welts and their presence can create significant anxiety among parents. Early detection and professional treatment are essential.",
      link: "/residential/bed-bugs"
    },
    {
      name: "Spiders",
      image: "/spiders-childcare.jpg",
      description: "While most spiders are harmless, some species can deliver painful or potentially dangerous bites. In childcare settings, they often establish webs in quiet corners, storage areas, and playground equipment. Professional management focuses on removing harborage areas and applying targeted treatments.",
      link: "/residential/spiders"
    }
  ];

  return (
    <section className="py-16 bg-gray-50 relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <span className="inline-block px-3 py-1 bg-pink-100 text-pink-700 text-sm font-semibold rounded-full mb-3">
            COMMON CHILDCARE FACILITY PESTS
          </span>
          <h2 className="text-4xl font-bold mb-4 text-gray-900">
            Child Care <span className="text-pink-600">Pest Guide</span>
          </h2>
          <div className="w-24 h-1 bg-pink-600 mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Identify and understand the most common pests that threaten childcare environments, children's health, and facility compliance.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {childcarePests.map((pest, index) => (
            <ChildcarePest
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
              <h3 className="text-xl font-semibold mb-3">Dealing with childcare facility pest problems?</h3>
              <p className="text-gray-600 mb-4">Our expert technicians specialize in safe, effective pest control solutions for childcare environments that prioritize children's health and safety.</p>
              <a href="/contact" className="inline-block bg-pink-600 hover:bg-pink-700 text-white font-bold py-3 px-8 rounded-full transition-all duration-300">
                Schedule a Consultation
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

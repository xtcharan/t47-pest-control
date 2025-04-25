"use client";

import { useState } from 'react';
import Image from 'next/image';

interface ElderlyCarePestProps {
  name: string;
  image: string;
  description: string;
  link: string;
}

const ElderlyCarePest = ({ name, image, description, link }: ElderlyCarePestProps) => {
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
          alt={`${name} - Elderly Care Pest Control`}
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
          className={`absolute inset-0 bg-teal-600 p-4 flex flex-col justify-center transition-all duration-500 ease-in-out ${
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

export default function ElderlyCarePestGallery() {
  const elderlyCarePests: ElderlyCarePestProps[] = [
    {
      name: "Bed Bugs",
      image: "/bed-bugs-elderly-care.jpg",
      description: "Bed bugs are a significant concern in elderly care facilities, causing discomfort, sleep disturbance, and potential skin infections for residents. They can spread quickly between rooms and are difficult to detect, especially for residents with limited mobility or vision. Professional management is essential for early detection and complete elimination.",
      link: "/residential/bed-bugs"
    },
    {
      name: "Cockroaches",
      image: "/cockroach-elderly-care.jpg",
      description: "Cockroaches in aged care facilities can trigger asthma and allergies in elderly residents with respiratory conditions. They spread bacteria and pathogens that can compromise resident health, particularly in food service areas. Their nocturnal nature means infestations can grow significantly before being detected.",
      link: "/residential/cockroaches"
    },
    {
      name: "Rodents",
      image: "/rodent-elderly-care.jpg",
      description: "Mice and rats in elderly care facilities pose serious health risks through disease transmission and contamination. They can damage facility infrastructure, including electrical wiring, potentially creating fire hazards. Their presence can cause significant distress to residents and compromise facility compliance with healthcare regulations.",
      link: "/residential/rodents"
    },
    {
      name: "Ants",
      image: "/ants-elderly-care.jpg",
      description: "Certain ant species are attracted to medications, food, and moisture commonly found in elderly care facilities. They can contaminate sterile environments, food preparation areas, and resident rooms. Some species can bite, causing discomfort for residents with sensitive skin or limited mobility.",
      link: "/residential/ants"
    },
    {
      name: "Flies",
      image: "/flies-elderly-care.jpg",
      description: "Flies in healthcare environments can spread pathogens and bacteria, posing infection risks to vulnerable elderly residents. They're particularly problematic in dining areas, waste management zones, and areas with immobile residents. Different species require different control approaches in healthcare settings.",
      link: "/residential/flies"
    },
    {
      name: "Silverfish",
      image: "/silverfish-elderly-care.jpg",
      description: "Silverfish are attracted to the paper, glue, and starch found in medical records, books, and other materials in elderly care facilities. While they don't pose direct health risks, their presence can indicate moisture issues that may affect resident health. They're often found in storage areas, bathrooms, and areas with high humidity.",
      link: "/residential/silverfish"
    }
  ];

  return (
    <section className="py-16 bg-gray-50 relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <span className="inline-block px-3 py-1 bg-teal-100 text-teal-700 text-sm font-semibold rounded-full mb-3">
            COMMON ELDERLY CARE FACILITY PESTS
          </span>
          <h2 className="text-4xl font-bold mb-4 text-gray-900">
            Elderly Care <span className="text-teal-600">Pest Guide</span>
          </h2>
          <div className="w-24 h-1 bg-teal-600 mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Identify and understand the most common pests that threaten elderly care environments, resident health, and facility compliance.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {elderlyCarePests.map((pest, index) => (
            <ElderlyCarePest
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
              <h3 className="text-xl font-semibold mb-3">Dealing with elderly care facility pest problems?</h3>
              <p className="text-gray-600 mb-4">Our expert technicians specialize in healthcare-grade pest control solutions for aged care environments that protect resident health and facility compliance.</p>
              <a href="/contact" className="inline-block bg-teal-600 hover:bg-teal-700 text-white font-bold py-3 px-8 rounded-full transition-all duration-300">
                Schedule a Consultation
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

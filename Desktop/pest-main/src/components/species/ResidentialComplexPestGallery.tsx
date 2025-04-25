"use client";

import { useState } from 'react';
import Image from 'next/image';

interface ResidentialComplexPestProps {
  name: string;
  image: string;
  description: string;
  link: string;
}

const ResidentialComplexPest = ({ name, image, description, link }: ResidentialComplexPestProps) => {
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
          alt={`${name} - Residential Complex Pest Control`}
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
          className={`absolute inset-0 bg-purple-600 p-4 flex flex-col justify-center transition-all duration-500 ease-in-out ${
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

export default function ResidentialComplexPestGallery() {
  const residentialComplexPests: ResidentialComplexPestProps[] = [
    {
      name: "Bed Bugs",
      image: "/bed-bugs-residential.jpg",
      description: "Bed bugs are a significant concern in multi-unit residential properties due to their ability to spread between units. They cause tenant distress, potential legal issues, and can damage your property's reputation. Professional management focuses on thorough inspections, targeted treatments, and preventative measures to stop spread between units.",
      link: "/residential/bed-bugs"
    },
    {
      name: "Cockroaches",
      image: "/cockroach-residential.jpg",
      description: "Cockroaches in residential complexes can spread rapidly through shared walls, utility lines, and common areas. They trigger tenant complaints, pose health risks, and can indicate maintenance issues. Professional management focuses on building-wide approaches that address harborage areas and prevent spread between units.",
      link: "/residential/cockroaches"
    },
    {
      name: "Rodents",
      image: "/rodent-residential.jpg",
      description: "Mice and rats in residential complexes can damage building infrastructure, spread diseases, and generate significant tenant complaints. They often enter through exterior vulnerabilities and travel between units through wall voids and utility lines. Professional management focuses on exclusion, targeted baiting, and comprehensive monitoring.",
      link: "/residential/rodents"
    },
    {
      name: "Ants",
      image: "/ants-residential.jpg",
      description: "Various ant species can infest residential complexes, creating trails through common areas and multiple units. They're attracted to food sources and moisture, often entering through tiny cracks in building exteriors. Different species require different control approaches in multi-unit environments.",
      link: "/residential/ants"
    },
    {
      name: "Wasps & Hornets",
      image: "/wasps-residential.jpg",
      description: "Stinging insects frequently establish nests on residential building exteriors, balconies, and common areas. They pose safety risks to tenants and maintenance staff, particularly those with allergies. Professional removal is essential to prevent painful and potentially dangerous stings.",
      link: "/residential/wasps"
    },
    {
      name: "Stored Product Pests",
      image: "/stored-product-pests-residential.jpg",
      description: "Pantry moths, beetles, and weevils can infest food storage areas in residential units. While they don't pose direct health risks, they contaminate food and cause tenant dissatisfaction. They can spread between units through shared walls and ventilation systems, requiring coordinated management approaches.",
      link: "/residential/stored-product-pests"
    }
  ];

  return (
    <section className="py-16 bg-gray-50 relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <span className="inline-block px-3 py-1 bg-purple-100 text-purple-700 text-sm font-semibold rounded-full mb-3">
            COMMON RESIDENTIAL COMPLEX PESTS
          </span>
          <h2 className="text-4xl font-bold mb-4 text-gray-900">
            Multi-Unit Property <span className="text-purple-600">Pest Guide</span>
          </h2>
          <div className="w-24 h-1 bg-purple-600 mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Identify and understand the most common pests that threaten residential complexes, tenant satisfaction, and property value.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {residentialComplexPests.map((pest, index) => (
            <ResidentialComplexPest
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
              <h3 className="text-xl font-semibold mb-3">Dealing with residential complex pest problems?</h3>
              <p className="text-gray-600 mb-4">Our expert technicians specialize in multi-unit property pest control solutions that protect tenant satisfaction and property value.</p>
              <a href="/contact" className="inline-block bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 px-8 rounded-full transition-all duration-300">
                Schedule a Consultation
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

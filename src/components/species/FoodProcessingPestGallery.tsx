"use client";

import { useState } from 'react';
import Image from 'next/image';

interface FoodProcessingPestProps {
  name: string;
  image: string;
  description: string;
  link: string;
}

const FoodProcessingPest = ({ name, image, description, link }: FoodProcessingPestProps) => {
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
          alt={`${name} - Food Processing Pest Control`}
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
          className={`absolute inset-0 bg-green-600 p-4 flex flex-col justify-center transition-all duration-500 ease-in-out ${
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

export default function FoodProcessingPestGallery() {
  const foodProcessingPests: FoodProcessingPestProps[] = [
    {
      name: "Stored Product Pests",
      image: "/stored-product-pests.jpg",
      description: "Beetles, weevils, and moths can infest raw ingredients and finished products in food processing facilities. These pests contaminate food products, leading to product recalls and regulatory violations. They can enter through infested deliveries or find their way into improperly sealed packaging lines.",
      link: "/residential/stored-product-pests"
    },
    {
      name: "Rodents",
      image: "/rodent-food-processing.jpg",
      description: "Mice and rats pose serious threats to food processing operations. They contaminate products with droppings, urine, and hair, and can spread diseases like Salmonella. They damage packaging, infrastructure, and equipment, creating both food safety risks and operational disruptions.",
      link: "/residential/rodents"
    },
    {
      name: "Cockroaches",
      image: "/cockroach-food-processing.jpg",
      description: "Cockroaches in food processing facilities can spread bacteria like E. coli and Salmonella. They contaminate surfaces, equipment, and products, potentially leading to foodborne illness outbreaks. Their presence is a serious violation during audits and inspections.",
      link: "/residential/cockroaches"
    },
    {
      name: "Flies",
      image: "/flies-food-processing.jpg",
      description: "Flies are particularly problematic in food processing as they can transfer over 100 pathogens. They move between waste areas and production zones, potentially contaminating products and equipment. Different species require different control approaches in food manufacturing settings.",
      link: "/residential/flies"
    },
    {
      name: "Ants",
      image: "/ants-food-processing.jpg",
      description: "Certain ant species are attracted to food processing facilities, particularly those handling sweet ingredients. They can contaminate products and create sanitation issues. Their persistent nature and ability to enter through tiny openings makes professional management essential.",
      link: "/residential/ants"
    },
    {
      name: "Birds",
      image: "/birds-food-processing.jpg",
      description: "Birds nesting in or around food processing facilities create significant contamination risks. Their droppings can harbor harmful pathogens and damage equipment. They can enter through loading docks, vents, and other openings, requiring specialized exclusion methods.",
      link: "/residential/birds"
    }
  ];

  return (
    <section className="py-16 bg-gray-50 relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <span className="inline-block px-3 py-1 bg-green-100 text-green-700 text-sm font-semibold rounded-full mb-3">
            COMMON FOOD PROCESSING FACILITY PESTS
          </span>
          <h2 className="text-4xl font-bold mb-4 text-gray-900">
            Food Processing <span className="text-green-600">Pest Guide</span>
          </h2>
          <div className="w-24 h-1 bg-green-600 mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Identify and understand the most common pests that threaten food processing operations, product safety, and regulatory compliance.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {foodProcessingPests.map((pest, index) => (
            <FoodProcessingPest
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
              <h3 className="text-xl font-semibold mb-3">Dealing with food processing facility pest problems?</h3>
              <p className="text-gray-600 mb-4">Our expert technicians specialize in food-grade, audit-ready pest control solutions for food manufacturing environments.</p>
              <a href="/contact" className="inline-block bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-8 rounded-full transition-all duration-300">
                Schedule a Consultation
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

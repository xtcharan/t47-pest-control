"use client";

import { useState } from 'react';
import Image from 'next/image';

interface WarehousePestProps {
  name: string;
  image: string;
  description: string;
  link: string;
}

const WarehousePest = ({ name, image, description, link }: WarehousePestProps) => {
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
          alt={`${name} - Warehouse Pest Control`}
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
          className={`absolute inset-0 bg-orange-600 p-4 flex flex-col justify-center transition-all duration-500 ease-in-out ${
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

export default function WarehousePestGallery() {
  const warehousePests: WarehousePestProps[] = [
    {
      name: "Stored Product Pests",
      image: "/stored-product-pests-warehouse.jpg",
      description: "Beetles, weevils, and moths can infest stored products in warehouses, causing significant inventory damage and contamination. These pests reproduce rapidly in undisturbed storage areas and can spread between different product types. Professional management focuses on monitoring, targeted treatments, and preventative measures.",
      link: "/residential/stored-product-pests"
    },
    {
      name: "Rodents",
      image: "/rodent-warehouse.jpg",
      description: "Mice and rats in warehouse environments can damage inventory, contaminate products, and create health hazards. They chew through packaging, electrical wiring, and structural elements, potentially causing fire hazards and operational disruptions. Their presence can lead to regulatory violations and failed inspections.",
      link: "/residential/rodents"
    },
    {
      name: "Cockroaches",
      image: "/cockroach-warehouse.jpg",
      description: "Cockroaches in warehouses can contaminate inventory and spread bacteria. They're attracted to cardboard, paper products, and food storage areas. Their nocturnal nature means infestations can grow significantly before being detected, requiring specialized management approaches for industrial environments.",
      link: "/residential/cockroaches"
    },
    {
      name: "Birds",
      image: "/birds-warehouse.jpg",
      description: "Birds nesting in warehouse rafters and loading dock areas create significant contamination risks. Their droppings can damage inventory and equipment while posing health hazards to workers. Professional management focuses on exclusion methods, deterrents, and habitat modification to prevent nesting and roosting.",
      link: "/residential/birds"
    },
    {
      name: "Flies",
      image: "/flies-warehouse.jpg",
      description: "Flies in warehouse environments can contaminate products and create unsanitary conditions. They're attracted to waste areas, loading docks, and food storage zones. Different species require different control approaches in industrial settings, with proper waste management being a key component.",
      link: "/residential/flies"
    },
    {
      name: "Ants",
      image: "/ants-warehouse.jpg",
      description: "Certain ant species are attracted to warehouses, particularly those storing food products or using cardboard packaging. They can contaminate inventory and establish large colonies within building structures. Their persistent nature and ability to enter through tiny openings makes professional management essential.",
      link: "/residential/ants"
    }
  ];

  return (
    <section className="py-16 bg-gray-50 relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <span className="inline-block px-3 py-1 bg-orange-100 text-orange-700 text-sm font-semibold rounded-full mb-3">
            COMMON WAREHOUSE PESTS
          </span>
          <h2 className="text-4xl font-bold mb-4 text-gray-900">
            Warehouse <span className="text-orange-600">Pest Guide</span>
          </h2>
          <div className="w-24 h-1 bg-orange-600 mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Identify and understand the most common pests that threaten warehouse environments, inventory integrity, and operational efficiency.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {warehousePests.map((pest, index) => (
            <WarehousePest
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
              <h3 className="text-xl font-semibold mb-3">Dealing with warehouse pest problems?</h3>
              <p className="text-gray-600 mb-4">Our expert technicians specialize in industrial-grade pest control solutions for warehouse environments that protect inventory integrity and operational efficiency.</p>
              <a href="/contact" className="inline-block bg-orange-600 hover:bg-orange-700 text-white font-bold py-3 px-8 rounded-full transition-all duration-300">
                Schedule a Consultation
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

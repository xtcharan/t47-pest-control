"use client";

import { useState } from 'react';
import Image from 'next/image';

interface RetailPestProps {
  name: string;
  image: string;
  description: string;
  link: string;
}

const RetailPest = ({ name, image, description, link }: RetailPestProps) => {
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
          alt={`${name} - Retail Pest Control`}
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

export default function RetailPestGallery() {
  const retailPests: RetailPestProps[] = [
    {
      name: "Rodents",
      image: "/rodent-retail.jpg",
      description: "Mice and rats in retail environments can damage merchandise, contaminate products, and create health hazards. They chew through packaging, electrical wiring, and structural elements, potentially causing fire hazards and property damage. Their presence can severely damage your brand reputation if spotted by customers.",
      link: "/residential/rodents"
    },
    {
      name: "Cockroaches",
      image: "/cockroach-retail.jpg",
      description: "Cockroaches in retail stores can spread bacteria, trigger allergic reactions, and damage your brand image. They're attracted to food residues in break rooms, food service areas, and even cosmetic products. Their nocturnal nature means infestations can grow significantly before being detected during business hours.",
      link: "/residential/cockroaches"
    },
    {
      name: "Flies",
      image: "/flies-retail.jpg",
      description: "Flies in retail environments create negative customer experiences and can contaminate products, particularly in stores with food sections. They're attracted to waste areas, food displays, and floral departments. Different species require different control approaches in retail settings.",
      link: "/residential/flies"
    },
    {
      name: "Ants",
      image: "/ants-retail.jpg",
      description: "Ants are common invaders in retail stores, particularly those with food products or food service areas. They can contaminate merchandise and create unsightly trails visible to customers. Their persistent nature and ability to enter through tiny openings makes professional management essential.",
      link: "/residential/ants"
    },
    {
      name: "Moths",
      image: "/moths-retail.jpg",
      description: "Clothing and pantry moths can cause significant damage in retail environments. Clothing moths damage textile merchandise like wool, silk, and fur, while pantry moths infest food products. Both can lead to inventory losses and customer complaints if not properly managed.",
      link: "/residential/moths"
    },
    {
      name: "Stored Product Pests",
      image: "/stored-product-pests-retail.jpg",
      description: "Beetles, weevils, and other stored product pests can infest food items, pet supplies, and certain non-food merchandise in retail stores. They can enter through infested deliveries or find their way into improperly sealed packages, potentially leading to customer returns and complaints.",
      link: "/residential/stored-product-pests"
    }
  ];

  return (
    <section className="py-16 bg-gray-50 relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <span className="inline-block px-3 py-1 bg-purple-100 text-purple-700 text-sm font-semibold rounded-full mb-3">
            COMMON RETAIL FACILITY PESTS
          </span>
          <h2 className="text-4xl font-bold mb-4 text-gray-900">
            Retail <span className="text-purple-600">Pest Guide</span>
          </h2>
          <div className="w-24 h-1 bg-purple-600 mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Identify and understand the most common pests that threaten retail environments, merchandise integrity, and customer experience.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {retailPests.map((pest, index) => (
            <RetailPest
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
              <h3 className="text-xl font-semibold mb-3">Dealing with retail store pest problems?</h3>
              <p className="text-gray-600 mb-4">Our expert technicians specialize in discreet, effective pest control solutions for retail environments that protect your brand reputation and customer experience.</p>
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

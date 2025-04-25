"use client";

import { useState } from 'react';
import Image from 'next/image';

interface HotelPestProps {
  name: string;
  image: string;
  description: string;
  link: string;
}

const HotelPest = ({ name, image, description, link }: HotelPestProps) => {
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
          alt={`${name} - Hotel Pest Control`}
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
          className={`absolute inset-0 bg-amber-600 p-4 flex flex-col justify-center transition-all duration-500 ease-in-out ${
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

export default function HotelPestGallery() {
  const hotelPests: HotelPestProps[] = [
    {
      name: "Bed Bugs",
      image: "/bed-bugs-hotel.jpg",
      description: "Bed bugs are one of the most significant threats to hotels, capable of severely damaging your reputation through negative reviews. These nocturnal pests feed on human blood and can spread quickly between rooms. Professional detection and elimination are essential to protect your guests and business.",
      link: "/residential/bed-bugs"
    },
    {
      name: "Cockroaches",
      image: "/cockroach-hotel.jpg",
      description: "Cockroaches in hotels can spread bacteria, trigger allergic reactions, and damage your reputation. They're attracted to food residues in guest rooms, restaurants, and kitchens. Their nocturnal nature means infestations can grow significantly before being detected, making professional management essential.",
      link: "/residential/cockroaches"
    },
    {
      name: "Rodents",
      image: "/rodent-hotel.jpg",
      description: "Mice and rats in hotels can damage property, contaminate food, and create health hazards. They chew through wiring, plumbing, and structural elements, potentially causing fire hazards and property damage. Their presence can severely damage your reputation if spotted by guests.",
      link: "/residential/rodents"
    },
    {
      name: "Ants",
      image: "/ants-hotel.jpg",
      description: "Ants are common invaders in hotels, particularly in food service areas and guest rooms where food residues may be present. They can contaminate food and create unsightly trails visible to guests. Their persistent nature and ability to enter through tiny openings makes professional management essential.",
      link: "/residential/ants"
    },
    {
      name: "Flies",
      image: "/flies-hotel.jpg",
      description: "Flies in hotel environments create negative guest experiences and can contaminate food in restaurants and room service. They're attracted to waste areas, food preparation zones, and outdoor dining spaces. Different species require different control approaches in hospitality settings.",
      link: "/residential/flies"
    },
    {
      name: "Stored Product Pests",
      image: "/stored-product-pests-hotel.jpg",
      description: "Moths, beetles, and weevils can infest dry goods in hotel kitchens and pantries. These pests contaminate food products and can lead to inventory losses. They can enter through infested deliveries or find their way into improperly sealed containers, requiring specialized management approaches.",
      link: "/residential/stored-product-pests"
    }
  ];

  return (
    <section className="py-16 bg-gray-50 relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <span className="inline-block px-3 py-1 bg-amber-100 text-amber-700 text-sm font-semibold rounded-full mb-3">
            COMMON HOTEL PESTS
          </span>
          <h2 className="text-4xl font-bold mb-4 text-gray-900">
            Hotel <span className="text-amber-600">Pest Guide</span>
          </h2>
          <div className="w-24 h-1 bg-amber-600 mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Identify and understand the most common pests that threaten hotel environments, guest experience, and your reputation.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {hotelPests.map((pest, index) => (
            <HotelPest
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
              <h3 className="text-xl font-semibold mb-3">Dealing with hotel pest problems?</h3>
              <p className="text-gray-600 mb-4">Our expert technicians specialize in discreet, effective pest control solutions for hotels that protect your reputation and guest experience.</p>
              <a href="/contact" className="inline-block bg-amber-600 hover:bg-amber-700 text-white font-bold py-3 px-8 rounded-full transition-all duration-300">
                Schedule a Consultation
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

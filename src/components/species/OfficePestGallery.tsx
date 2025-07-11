"use client";

import { useState } from 'react';
import Image from 'next/image';

interface OfficePestProps {
  name: string;
  image: string;
  description: string;
  link: string;
}

const OfficePest = ({ name, image, description, link }: OfficePestProps) => {
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
          alt={`${name} - Office Pest Control`}
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
          className={`absolute inset-0 bg-indigo-600 p-4 flex flex-col justify-center transition-all duration-500 ease-in-out ${
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

export default function OfficePestGallery() {
  const officePests: OfficePestProps[] = [
    {
      name: "Rodents",
      image: "/rodent-office.jpg",
      description: "Mice and rats in office environments can damage property, contaminate surfaces, and create health hazards. They chew through wiring, documents, and structural elements, potentially causing fire hazards and data loss. Their presence can severely disrupt workplace productivity and employee morale.",
      link: "/residential/rodents"
    },
    {
      name: "Cockroaches",
      image: "/cockroach-office.jpg",
      description: "Cockroaches in offices can spread bacteria, trigger allergic reactions, and damage your professional image. They're attracted to food residues in break rooms, kitchenettes, and desk areas. Their nocturnal nature means infestations can grow significantly before being detected during business hours.",
      link: "/residential/cockroaches"
    },
    {
      name: "Ants",
      image: "/ants-office.jpg",
      description: "Ants are common invaders in office buildings, particularly in break rooms and areas where food is consumed. They can contaminate food and create unsightly trails visible to employees and clients. Their persistent nature and ability to enter through tiny openings makes professional management essential.",
      link: "/residential/ants"
    },
    {
      name: "Flies",
      image: "/flies-office.jpg",
      description: "Flies in office environments create negative impressions for clients and employees. They're attracted to waste areas, food preparation zones, and outdoor eating spaces. Different species require different control approaches in workplace settings, with proper sanitation being a key component.",
      link: "/residential/flies"
    },
    {
      name: "Pantry Pests",
      image: "/pantry-pests-office.jpg",
      description: "Moths, beetles, and weevils can infest dry goods in office kitchenettes and break rooms. These pests contaminate communal food supplies and can spread throughout the workplace. They often enter through infested products brought in by employees, requiring specialized management approaches.",
      link: "/residential/stored-product-pests"
    },
    {
      name: "Spiders",
      image: "/spiders-office.jpg",
      description: "While most spiders are harmless, their presence in offices can cause anxiety among employees. They often establish webs in quiet corners, storage areas, and ceiling spaces. Professional management focuses on removing harborage areas and applying targeted treatments to prevent their establishment.",
      link: "/residential/spiders"
    }
  ];

  return (
    <section className="py-16 bg-gray-50 relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <span className="inline-block px-3 py-1 bg-indigo-100 text-indigo-700 text-sm font-semibold rounded-full mb-3">
            COMMON OFFICE PESTS
          </span>
          <h2 className="text-4xl font-bold mb-4 text-gray-900">
            Office <span className="text-indigo-600">Pest Guide</span>
          </h2>
          <div className="w-24 h-1 bg-indigo-600 mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Identify and understand the most common pests that threaten office environments, employee productivity, and workplace health.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {officePests.map((pest, index) => (
            <OfficePest
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
              <h3 className="text-xl font-semibold mb-3">Dealing with office pest problems?</h3>
              <p className="text-gray-600 mb-4">Our expert technicians specialize in discreet, effective pest control solutions for office environments that protect employee productivity and workplace health.</p>
              <a href="/contact" className="inline-block bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 px-8 rounded-full transition-all duration-300">
                Schedule a Consultation
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

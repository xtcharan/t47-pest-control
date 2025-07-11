"use client";

import { useState } from 'react';
import Image from 'next/image';

interface SchoolPestProps {
  name: string;
  image: string;
  description: string;
  link: string;
}

const SchoolPest = ({ name, image, description, link }: SchoolPestProps) => {
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
          alt={`${name} - School Pest Control`}
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

export default function SchoolPestGallery() {
  const schoolPests: SchoolPestProps[] = [
    {
      name: "Rodents",
      image: "/rodent-school.jpg",
      description: "Mice and rats pose serious health risks in school environments. They can contaminate surfaces, damage property by gnawing on structures and wiring, and spread diseases. Their presence can disrupt learning environments and create safety hazards for students and staff.",
      link: "/residential/rodents"
    },
    {
      name: "Cockroaches",
      image: "/cockroach-school.jpg",
      description: "Cockroaches in schools can trigger asthma and allergies in students and staff. They spread bacteria like Salmonella and E. coli by contaminating surfaces. These resilient pests can enter through tiny cracks and reproduce rapidly, requiring professional control methods.",
      link: "/residential/cockroaches"
    },
    {
      name: "Ants",
      image: "/ants-school.jpg",
      description: "Ants are common invaders in school settings, attracted to food residues in classrooms, cafeterias, and break rooms. While most species are primarily a nuisance, some can contaminate food or even cause structural damage. Their persistent nature makes professional management necessary.",
      link: "/residential/ants"
    },
    {
      name: "Bed Bugs",
      image: "/bed-bugs-school.jpg",
      description: "Bed bugs can be inadvertently brought into schools through backpacks and clothing. While they don't transmit diseases, their bites cause itchy welts and their presence can create significant anxiety and disruption. Early detection and professional treatment are essential to prevent widespread infestations.",
      link: "/residential/bed-bugs"
    },
    {
      name: "Flies",
      image: "/flies-school.jpg",
      description: "Flies in school environments can spread over 100 pathogens as they move between waste areas and food surfaces. They're particularly problematic in cafeterias and food preparation areas. Professional management focuses on sanitation improvements and targeted treatments.",
      link: "/residential/flies"
    },
    {
      name: "Mosquitoes",
      image: "/mosquitoes-school.jpg",
      description: "Mosquitoes can be a significant problem in schools with outdoor activity areas, especially during warmer months. Beyond the nuisance of itchy bites, they can potentially transmit diseases. Effective management includes eliminating standing water and treating breeding sites around school grounds.",
      link: "/residential/mosquitoes"
    }
  ];

  return (
    <section className="py-16 bg-gray-50 relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <span className="inline-block px-3 py-1 bg-blue-100 text-blue-700 text-sm font-semibold rounded-full mb-3">
            COMMON SCHOOL PESTS
          </span>
          <h2 className="text-4xl font-bold mb-4 text-gray-900">
            School <span className="text-blue-600">Pest Guide</span>
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Identify and understand the most common pests that threaten educational environments, student health, and school facilities.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {schoolPests.map((pest, index) => (
            <SchoolPest
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
              <h3 className="text-xl font-semibold mb-3">Dealing with school pest problems?</h3>
              <p className="text-gray-600 mb-4">Our expert technicians specialize in safe, effective pest control solutions for educational facilities that prioritize student and staff safety.</p>
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

"use client";

import { useState } from 'react';
import Image from 'next/image';

interface GymFitnessPestProps {
  name: string;
  image: string;
  description: string;
  link: string;
}

const GymFitnessPest = ({ name, image, description, link }: GymFitnessPestProps) => {
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
          alt={`${name} - Gym & Fitness Pest Control`}
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

export default function GymFitnessPestGallery() {
  const gymFitnessPests: GymFitnessPestProps[] = [
    {
      name: "Cockroaches",
      image: "/cockroach-gym.jpg",
      description: "Cockroaches thrive in the warm, moist environments found in fitness facilities, particularly in locker rooms and shower areas. They can spread bacteria and pathogens that may affect member health, and their presence can severely damage your facility's reputation. Professional management focuses on moisture control and targeted treatments for these resilient pests.",
      link: "/residential/cockroaches"
    },
    {
      name: "Drain Flies",
      image: "/drain-flies-gym.jpg",
      description: "Drain flies are common in fitness facilities due to the numerous drains in shower areas, locker rooms, and water fountains. They breed in the organic matter that builds up in drains and can create unsightly infestations that concern members. Professional management focuses on drain cleaning and specialized treatments that eliminate breeding sites.",
      link: "/residential/flies"
    },
    {
      name: "Silverfish",
      image: "/silverfish-gym.jpg",
      description: "Silverfish are attracted to the high moisture levels in fitness facility shower areas and locker rooms. While they don't pose direct health risks, their presence indicates moisture issues and can concern members. They're often found in dark, humid areas and require specialized management approaches focused on moisture control.",
      link: "/residential/silverfish"
    },
    {
      name: "Rodents",
      image: "/rodent-gym.jpg",
      description: "Mice and rats can be attracted to fitness facilities, particularly those with juice bars or food service areas. They can damage equipment by chewing on wires and contaminate surfaces with droppings and urine. Their presence can severely impact member experience and facility reputation, requiring comprehensive management approaches.",
      link: "/residential/rodents"
    },
    {
      name: "Ants",
      image: "/ants-gym.jpg",
      description: "Certain ant species are attracted to fitness facilities, particularly areas where protein supplements or energy drinks may be consumed. They can create unsightly trails visible to members and contaminate food service areas. Different species require different control approaches in fitness environments.",
      link: "/residential/ants"
    },
    {
      name: "Fruit Flies",
      image: "/fruit-flies-gym.jpg",
      description: "Fruit flies are common in fitness facilities with juice bars or areas where members consume protein shakes and energy drinks. They breed rapidly in drains and around organic residues, creating visible infestations that can concern members. Professional management focuses on sanitation practices and targeted treatments.",
      link: "/residential/flies"
    }
  ];

  return (
    <section className="py-16 bg-gray-50 relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <span className="inline-block px-3 py-1 bg-pink-100 text-pink-700 text-sm font-semibold rounded-full mb-3">
            COMMON GYM & FITNESS PESTS
          </span>
          <h2 className="text-4xl font-bold mb-4 text-gray-900">
            Fitness Facility <span className="text-pink-600">Pest Guide</span>
          </h2>
          <div className="w-24 h-1 bg-pink-600 mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Identify and understand the most common pests that threaten fitness environments, member health, and facility reputation.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {gymFitnessPests.map((pest, index) => (
            <GymFitnessPest
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
              <h3 className="text-xl font-semibold mb-3">Dealing with fitness facility pest problems?</h3>
              <p className="text-gray-600 mb-4">Our expert technicians specialize in health-focused pest control solutions for gym environments that protect member health and facility reputation.</p>
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

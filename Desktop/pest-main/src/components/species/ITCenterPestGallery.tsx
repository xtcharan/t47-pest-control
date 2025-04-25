"use client";

import { useState } from 'react';
import Image from 'next/image';

interface ITCenterPestProps {
  name: string;
  image: string;
  description: string;
  link: string;
}

const ITCenterPest = ({ name, image, description, link }: ITCenterPestProps) => {
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
          alt={`${name} - IT Center Pest Control`}
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
          className={`absolute inset-0 bg-cyan-600 p-4 flex flex-col justify-center transition-all duration-500 ease-in-out ${
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

export default function ITCenterPestGallery() {
  const itCenterPests: ITCenterPestProps[] = [
    {
      name: "Rodents",
      image: "/rodent-it-center.jpg",
      description: "Mice and rats pose serious threats to IT infrastructure by chewing through cables, fiber optics, and insulation. They can cause system failures, data loss, and even fires by damaging electrical components. Their presence in data centers requires specialized management approaches that protect sensitive equipment.",
      link: "/residential/rodents"
    },
    {
      name: "Ants",
      image: "/ants-it-center.jpg",
      description: "Certain ant species are attracted to electronic equipment and can nest inside server casings and other hardware. They can cause short circuits and equipment failures when they contact electrical components. Professional management focuses on eliminating colonies and creating barriers around sensitive equipment.",
      link: "/residential/ants"
    },
    {
      name: "Cockroaches",
      image: "/cockroach-it-center.jpg",
      description: "Cockroaches in IT environments can damage equipment by leaving debris and excrement on circuit boards and other components. They're attracted to the warmth of electronic equipment and can establish populations in raised floor systems and cable runs, requiring specialized management approaches.",
      link: "/residential/cockroaches"
    },
    {
      name: "Birds",
      image: "/birds-it-center.jpg",
      description: "Birds nesting near air intake systems or cooling equipment can introduce debris and contaminants into sensitive IT environments. Their droppings are corrosive and can damage equipment if they enter through ventilation systems. Professional management focuses on exclusion methods and deterrents.",
      link: "/residential/birds"
    },
    {
      name: "Spiders",
      image: "/spiders-it-center.jpg",
      description: "While spiders don't typically damage equipment directly, their webs can collect dust that impedes airflow and cooling in server rooms. They often establish themselves in quiet, undisturbed areas like cable trays and raised floor systems. Professional management focuses on regular cleaning and targeted treatments.",
      link: "/residential/spiders"
    },
    {
      name: "Silverfish",
      image: "/silverfish-it-center.jpg",
      description: "Silverfish are attracted to the paper components found in IT documentation, cable insulation, and cardboard packaging. They can damage these materials and potentially affect equipment functionality. Their preference for dark, humid environments makes them common in server rooms with improper humidity control.",
      link: "/residential/silverfish"
    }
  ];

  return (
    <section className="py-16 bg-gray-50 relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <span className="inline-block px-3 py-1 bg-cyan-100 text-cyan-700 text-sm font-semibold rounded-full mb-3">
            COMMON IT CENTER PESTS
          </span>
          <h2 className="text-4xl font-bold mb-4 text-gray-900">
            IT Center <span className="text-cyan-600">Pest Guide</span>
          </h2>
          <div className="w-24 h-1 bg-cyan-600 mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Identify and understand the most common pests that threaten IT environments, sensitive equipment, and operational continuity.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {itCenterPests.map((pest, index) => (
            <ITCenterPest
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
              <h3 className="text-xl font-semibold mb-3">Dealing with IT center pest problems?</h3>
              <p className="text-gray-600 mb-4">Our expert technicians specialize in technology-safe pest control solutions for IT environments that protect sensitive equipment and operational continuity.</p>
              <a href="/contact" className="inline-block bg-cyan-600 hover:bg-cyan-700 text-white font-bold py-3 px-8 rounded-full transition-all duration-300">
                Schedule a Consultation
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

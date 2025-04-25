"use client";

import { useState } from 'react';
import Image from 'next/image';

interface HospitalPestProps {
  name: string;
  image: string;
  description: string;
  link: string;
}

const HospitalPest = ({ name, image, description, link }: HospitalPestProps) => {
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
          alt={`${name} - Hospital Pest Control`}
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

export default function HospitalPestGallery() {
  const hospitalPests: HospitalPestProps[] = [
    {
      name: "Cockroaches",
      image: "/cockroach-hospital.jpg",
      description: "Cockroaches pose serious health risks in healthcare environments as they can spread bacteria like MRSA and E. coli. They contaminate surfaces and equipment, potentially compromising sterile environments. Their presence can trigger allergic reactions and asthma in patients with respiratory sensitivities.",
      link: "/residential/cockroaches"
    },
    {
      name: "Rodents",
      image: "/rodent-hospital.jpg",
      description: "Mice and rats in healthcare facilities can spread pathogens, contaminate sterile supplies, and damage critical infrastructure including electrical wiring and medical equipment. They can introduce disease-causing organisms that pose significant risks to immunocompromised patients and compromise infection control protocols.",
      link: "/residential/rodents"
    },
    {
      name: "Flies",
      image: "/flies-hospital.jpg",
      description: "Flies are particularly problematic in healthcare settings as they can transfer over 100 pathogens, including those that cause healthcare-associated infections. They move between waste areas and sterile environments, potentially contaminating medical equipment, supplies, and patient care areas.",
      link: "/residential/flies"
    },
    {
      name: "Ants",
      image: "/ants-hospital.jpg",
      description: "Certain ant species in hospitals can be attracted to medical equipment, IV fluids, and medications. They can contaminate sterile environments and potentially interfere with medical devices. Pharaoh ants, in particular, are known to seek out moisture in patient care areas.",
      link: "/residential/ants"
    },
    {
      name: "Bed Bugs",
      image: "/bed-bugs-hospital.jpg",
      description: "Bed bugs can be inadvertently brought into healthcare facilities by patients, visitors, or staff. They can spread between rooms and departments, causing discomfort to patients and potentially complicating recovery. Their presence can damage a hospital's reputation and create significant control challenges.",
      link: "/residential/bed-bugs"
    },
    {
      name: "Birds",
      image: "/birds-hospital.jpg",
      description: "Birds nesting near hospital air intakes or ventilation systems can introduce pathogens and allergens into the facility. Their droppings can harbor fungi and bacteria that pose risks to immunocompromised patients. They can also create maintenance issues and damage building exteriors.",
      link: "/residential/birds"
    }
  ];

  return (
    <section className="py-16 bg-gray-50 relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <span className="inline-block px-3 py-1 bg-blue-100 text-blue-700 text-sm font-semibold rounded-full mb-3">
            COMMON HEALTHCARE FACILITY PESTS
          </span>
          <h2 className="text-4xl font-bold mb-4 text-gray-900">
            Hospital <span className="text-blue-600">Pest Guide</span>
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Identify and understand the most common pests that threaten healthcare environments, patient safety, and regulatory compliance.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {hospitalPests.map((pest, index) => (
            <HospitalPest
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
              <h3 className="text-xl font-semibold mb-3">Dealing with healthcare facility pest problems?</h3>
              <p className="text-gray-600 mb-4">Our expert technicians specialize in discreet, effective pest control solutions for hospitals and healthcare environments.</p>
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

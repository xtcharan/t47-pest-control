"use client";

import { useState } from 'react';
import Image from 'next/image';

interface InfoSectionProps {
  title: string;
  content: string;
  image: string;
  isActive: boolean;
  onClick: () => void;
}

const InfoSection = ({ title, content, image, isActive, onClick }: InfoSectionProps) => {
  return (
    <div 
      className={`border rounded-xl overflow-hidden transition-all duration-300 cursor-pointer ${
        isActive ? 'shadow-lg border-blue-300' : 'shadow-sm border-gray-200 hover:shadow-md'
      }`}
      onClick={onClick}
    >
      <div className="relative h-48 overflow-hidden">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover transition-transform duration-500 ease-in-out group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, 33vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
        <h3 className="absolute bottom-3 left-4 text-white font-bold text-xl drop-shadow-md">{title}</h3>
      </div>
      
      <div className={`transition-all duration-500 ease-in-out overflow-hidden ${
        isActive ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
      }`}>
        <div className="p-4 bg-blue-50/50">
          <p className="text-gray-700">{content}</p>
        </div>
      </div>
    </div>
  );
};

export default function SilverfishIdentificationGuide() {
  const [activeSection, setActiveSection] = useState<number | null>(null);

  const toggleSection = (index: number) => {
    setActiveSection(activeSection === index ? null : index);
  };

  const infoSections = [
    {
      title: "Physical Characteristics",
      content: "Silverfish are wingless insects with distinctive teardrop-shaped bodies that taper from head to tail. They typically measure 1/2 to 3/4 inch (12-19mm) in length when fully grown. Their bodies are covered with silvery-blue scales that give them a metallic appearance and their name. They have two long antennae at the front and three tail-like appendages at the rear (two cerci and one median caudal filament), creating their characteristic fish-like appearance and movement. Silverfish have flat bodies that allow them to hide in extremely narrow spaces and move quickly when disturbed.",
      image: "/silverfish-characteristics.jpg"
    },
    {
      title: "Habitat & Behavior",
      content: "Silverfish thrive in dark, damp environments with high humidity (70-90%). They're commonly found in bathrooms, basements, attics, kitchens, and laundry rooms. They hide in cracks, crevices, behind baseboards, under sinks, and in cluttered storage areas. Silverfish are nocturnal, emerging at night to feed and quickly retreating to hiding spots when exposed to light. They can survive long periods without food but require moisture to survive. Silverfish are solitary insects but may congregate in areas with favorable conditions and food sources. They're extremely long-lived for insects, with lifespans of 2-8 years.",
      image: "/silverfish-habitat.jpg"
    },
    {
      title: "Diet & Damage",
      content: "Silverfish feed primarily on carbohydrates and proteins, particularly starch and cellulose. Their diet includes paper, books, photographs, wallpaper (especially the paste), clothing (particularly items with starch or sizing), dried food items, and even mold. They can damage valuable documents, family photos, book bindings, and textiles by creating irregular holes, notches, and yellow stains. Silverfish are particularly destructive to stored items that aren't regularly examined, as damage can accumulate over time before being discovered. They're also attracted to food debris, so kitchens and pantries can be vulnerable to infestation.",
      image: "/silverfish-damage.jpg"
    },
    {
      title: "Lifecycle & Reproduction",
      content: "Unlike most insects, silverfish undergo gradual metamorphosis with no distinct larval or pupal stages. Young silverfish look like smaller versions of adults. Females lay eggs in cracks and crevices, depositing 1-3 eggs daily or up to 100 eggs in their lifetime. Eggs are oval, whitish, and about 1mm in size. Nymphs hatch in 2-8 weeks depending on environmental conditions and molt 4-5 times before reaching adulthood. Silverfish continue to molt throughout their lives, even as adults (unusual among insects). Under ideal conditions, silverfish can develop from egg to adult in 3-4 months, but development typically takes longer in home environments.",
      image: "/silverfish-lifecycle.jpg"
    },
    {
      title: "Signs of Infestation",
      content: "Common signs of silverfish infestation include: 1) Sightings of the insects themselves, especially at night in bathrooms or kitchens; 2) Small, pepper-like fecal pellets in areas where silverfish are active; 3) Yellow stains, scales, or shed skins on surfaces; 4) Damage to paper, books, wallpaper, or clothing with irregular holes or etchings; 5) Holes or notches along the edges of paper or fabric; and 6) Damage to food packaging, especially items containing starch like flour or cereal. Since silverfish are nocturnal and quick to hide, damage to materials is often noticed before the insects themselves are spotted.",
      image: "/silverfish-signs.jpg"
    },
    {
      title: "Prevention Strategies",
      content: "Effective silverfish prevention includes: 1) Reducing humidity with dehumidifiers and proper ventilation; 2) Fixing leaks and addressing moisture issues promptly; 3) Storing books, papers, and textiles in sealed plastic containers with desiccant packets; 4) Reducing clutter, especially paper piles and cardboard boxes; 5) Regular vacuuming and dusting, particularly in cracks and crevices; 6) Sealing entry points around pipes, windows, doors, and foundation; 7) Storing food in airtight containers; 8) Using cedar or lavender as natural deterrents in closets and storage areas; and 9) Scheduling professional inspections and treatments, especially if you have valuable books or documents that need protection.",
      image: "/silverfish-prevention.jpg"
    }
  ];

  return (
    <section className="py-16 bg-white relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-blue-50/50 rounded-bl-[100px] z-0"></div>
        <div className="absolute bottom-0 left-0 w-1/4 h-1/4 bg-blue-50/30 rounded-tr-[100px] z-0"></div>
        <div className="absolute top-1/3 left-10 w-6 h-6 bg-blue-100 rounded-full z-0"></div>
        <div className="absolute bottom-1/4 right-20 w-4 h-4 bg-blue-200 rounded-full z-0"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <span className="inline-block px-3 py-1 bg-blue-100 text-blue-700 text-sm font-semibold rounded-full mb-3">
            KNOW YOUR ENEMY
          </span>
          <h2 className="text-4xl font-bold mb-4 text-gray-900">
            Silverfish <span className="text-blue-600">Identification</span> Guide
          </h2>
          <div className="w-24 h-1 bg-blue-500 mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Learn to identify silverfish, understand their behavior, and recognize the signs of infestation to protect your home and belongings.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {infoSections.map((section, index) => (
            <InfoSection
              key={index}
              title={section.title}
              content={section.content}
              image={section.image}
              isActive={activeSection === index}
              onClick={() => toggleSection(index)}
            />
          ))}
        </div>

        <div className="bg-blue-50 rounded-xl p-8 max-w-4xl mx-auto">
          <div className="flex flex-col md:flex-row items-center gap-6">
            <div className="md:w-1/4 flex justify-center">
              <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
            </div>
            <div className="md:w-3/4">
              <h3 className="text-2xl font-bold text-blue-800 mb-3 text-center md:text-left">Silverfish vs. Other Household Pests</h3>
              <p className="text-gray-700 mb-4">
                Silverfish are sometimes confused with other household pests. They differ from firebrats, which prefer hot, dry areas and have a mottled gray-brown appearance. Silverfish are also distinct from house centipedes, which have numerous long legs and move much faster. Unlike booklice, which are tiny (1-2mm) and pale, silverfish are larger (12-19mm) with a distinctive metallic appearance. While both damage paper materials, silverfish cause more extensive damage. If you're unsure what pest you're dealing with, our professional inspection can provide accurate identification and appropriate treatment recommendations.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-12 text-center">
          <a href="/contact" className="inline-block bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white font-bold py-3 px-8 rounded-full transition-all duration-300 transform hover:scale-105 shadow-md hover:shadow-lg">
            Schedule a Professional Inspection
          </a>
        </div>
      </div>
    </section>
  );
}

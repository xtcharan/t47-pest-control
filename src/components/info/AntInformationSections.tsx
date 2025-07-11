"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { COMPANY_INFO } from '../lib/constants';

interface SectionProps {
  title: string;
  content: React.ReactNode;
  isActive: boolean;
  onClick: () => void;
  index: number;
}

const InfoSection = ({ title, content, isActive, onClick, index }: SectionProps) => {
  return (
    <div className={`mb-4 ${isActive ? 'bg-gray-100 rounded-lg' : ''}`}>
      <div
        className={`flex items-center cursor-pointer p-4 ${isActive ? 'bg-gray-100 rounded-t-lg' : 'hover:bg-gray-50 rounded-lg'}`}
        onClick={onClick}
      >
        <div className="w-full">
          <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
        </div>
      </div>

      {isActive && (
        <div className="p-4 pt-0">
          <div className="bg-white border-l-4 border-red-500 pl-4 py-3">
            {content}
          </div>
        </div>
      )}
    </div>
  );
};

export default function AntInformationSections() {
  const [activeSection, setActiveSection] = useState<number | null>(null);

  const toggleSection = (index: number) => {
    setActiveSection(activeSection === index ? null : index);
  };

  const sections = [
    {
      title: "Castes and behavior",
      content: (
        <ul className="list-disc pl-5 space-y-2 text-gray-700">
          <li>Ants are highly organized social insects with complex colony structures divided into distinct castes.</li>
          <li>The queen is responsible for reproduction, while worker ants handle foraging, nest maintenance, and brood care.</li>
          <li>This sophisticated social organization allows ant colonies to efficiently allocate resources and respond to environmental challenges.</li>
        </ul>
      )
    },
    {
      title: "What do ants eat?",
      content: (
        <ul className="list-disc pl-5 space-y-2 text-gray-700">
          <li>Ants have diverse dietary preferences depending on species.</li>
          <li>Many are attracted to sweet substances like nectar, honeydew, and sugary foods in your home.</li>
          <li>Others prefer protein-rich foods including insects, seeds, and food scraps.</li>
          <li>This dietary flexibility explains why they're commonly found in kitchens and pantries.</li>
        </ul>
      )
    },
    {
      title: "Potential threats from Australian ants",
      content: (
        <ul className="list-disc pl-5 space-y-2 text-gray-700">
          <li>Some species like the jack jumper ants are particularly venomous. So venomous, in fact, that they are the prevalent cause for allergic reactions due to ant stings in Australia. They are responsible for about 90% of the cases of allergic reactions.</li>
          <li>The likes of carpenter ants can deal just as much damage as termites to your wooden foundations. Your home might be the perfect place for their new colony.</li>
          <li>They can damage wiring and electronics. If they find their way into your computer, they may cause serious damage.</li>
        </ul>
      )
    },
    {
      title: "Allergies",
      content: (
        <ul className="list-disc pl-5 space-y-2 text-gray-700">
          <li>As much as 3% of people can be allergic to ants in some areas that are overrun with these venomous buggers.</li>
          <li>If they get stung, they will go into anaphylaxis.</li>
          <li>Their sting can be quite painful even if you're not allergic.</li>
          <li>Once you get stung, the ant usually leaves a chemical trail warning its brethren you're a threat, so you might get a lot more stings if there are lots of ants around.</li>
        </ul>
      )
    },
    {
      title: "Ecological significance",
      content: (
        <ul className="list-disc pl-5 space-y-2 text-gray-700">
          <li>There is strength in numbers! No one proves that better than ants. They affect the environment around them in very profound ways, despite their small size.</li>
          <li>When they create their nests and go about their daily business underground, they inadvertently affect the nutrient content of the soil. They can also help to remove detritus and manage natural waste.</li>
          <li>Another distinct characteristic is their predatorial behaviour toward some species. Because of this, they are also a natural form of pest control and control the populations of certain species that might be dangerous for your garden.</li>
          <li>In high enough numbers, they have no problem hunting down larger prey.</li>
        </ul>
      )
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <span className="inline-block px-3 py-1 bg-red-100 text-red-700 text-sm font-semibold rounded-full mb-3">
              ANT INFORMATION
            </span>
            <h2 className="text-4xl font-bold mb-4 text-gray-900">
              Understanding <span className="text-red-600">Ants</span> and Their Impact
            </h2>
            <div className="w-24 h-1 bg-red-500 mx-auto mb-6"></div>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Learn more about these fascinating insects, their behavior, and why professional ant control is essential for your home and business.
            </p>
          </div>

          {/* Mobile view - accordion style with + symbols */}
          <div className="md:hidden space-y-3">
            {sections.map((section, index) => (
              <div key={index} className="border border-gray-200 rounded-lg overflow-hidden">
                <div
                  className="flex justify-between items-center p-4 cursor-pointer bg-gray-50 hover:bg-gray-100"
                  onClick={() => toggleSection(index)}
                >
                  <h3 className="font-medium text-gray-800">{section.title}</h3>
                  <span className="text-red-600 text-xl font-bold">
                    {activeSection === index ? '−' : '+'}
                  </span>
                </div>

                {activeSection === index && (
                  <div className="p-4 bg-white border-t border-gray-200">
                    <div className="border-l-4 border-red-500 pl-4 py-2">
                      {section.content}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Desktop view - two column layout */}
          <div className="hidden md:flex flex-col md:flex-row gap-8">
            {/* Left column with section titles */}
            <div className="md:w-1/3">
              <div className="bg-gray-50 p-5 rounded-lg shadow-sm">
                {sections.map((section, index) => (
                  <div
                    key={index}
                    className={`flex justify-between items-center py-3 px-4 mb-2 cursor-pointer rounded-md transition-all ${activeSection === index ? 'bg-red-50 text-red-700 font-medium shadow-sm' : 'hover:bg-gray-100'}`}
                    onClick={() => toggleSection(index)}
                  >
                    <h3 className="text-md">{section.title}</h3>
                    <span className={`text-sm ${activeSection === index ? 'text-red-600' : 'text-gray-400'}`}>
                      {activeSection === index ? '−' : '+'}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right column with content */}
            <div className="md:w-2/3">
              <div className="bg-white border border-gray-200 rounded-lg p-5 shadow-sm min-h-[300px]">
                {activeSection !== null ? (
                  <div>
                    <h3 className="text-xl font-semibold text-red-600 mb-4">{sections[activeSection].title}</h3>
                    <div>{sections[activeSection].content}</div>
                  </div>
                ) : (
                  <div className="flex items-center justify-center h-full text-gray-500 text-center p-8">
                    <p>Select a topic on the left to learn more about ants and their impact.</p>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* CTA section */}
          <div className="mt-12 bg-gradient-to-r from-red-500 to-red-700 p-8 rounded-lg text-center text-white">
            <h3 className="text-2xl font-bold mb-4">Experiencing an Ant Infestation?</h3>
            <p className="mb-6 max-w-2xl mx-auto">
              Our professional ant control services provide fast, effective, and long-lasting results with same-day service available 7 days a week, including public holidays.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/contact" className="bg-white text-red-600 hover:bg-gray-100 font-bold py-3 px-6 rounded-full transition-colors">
                Book a Treatment
              </Link>
              <Link href={`tel:${COMPANY_INFO.phone}`} className="bg-transparent border-2 border-white hover:bg-white/10 text-white font-bold py-3 px-6 rounded-full transition-colors">
                Call Us Now
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

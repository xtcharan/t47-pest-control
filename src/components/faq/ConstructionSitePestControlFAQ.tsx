"use client";

import { useState } from 'react';

interface FAQItemProps {
  question: string;
  answer: string;
  isOpen: boolean;
  toggleAccordion: () => void;
  index: number;
}

const FAQItem = ({ question, answer, isOpen, toggleAccordion, index }: FAQItemProps) => {
  return (
    <div className="mb-3">
      <button
        type="button"
        className={`flex justify-between items-center w-full py-5 px-5 text-left rounded-lg shadow-sm transition-all duration-300 ${
          isOpen ? 'bg-yellow-50 shadow-md' : 'bg-gray-50 hover:bg-gray-100'
        }`}
        onClick={toggleAccordion}
      >
        <div className="flex items-center gap-4">
          <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
            isOpen
              ? 'bg-yellow-600 text-white'
              : 'bg-gray-200 text-gray-700'
          } transition-all duration-300`}>
            <span className="font-semibold">{index + 1}</span>
          </div>
          <span className={`text-lg font-medium ${isOpen ? 'text-yellow-600' : 'text-gray-900'}`}>{question}</span>
        </div>
        <svg
          className={`w-6 h-6 text-yellow-600 transform transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ${
          isOpen ? 'max-h-[1000px] opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="p-5 text-gray-600 bg-white border border-gray-100 rounded-b-lg">
          <p>{answer}</p>
        </div>
      </div>
    </div>
  );
};

export default function ConstructionSitePestControlFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqItems = [
    {
      question: "When is the best time to implement pest control measures during construction?",
      answer: "The optimal timing for pest control measures varies depending on the construction phase and target pests. For termite prevention, pre-construction treatments should be applied after site preparation but before concrete slabs are poured. For general pest management, we recommend implementing basic measures at the beginning of construction to prevent initial infestations, with phase-specific treatments as the project progresses. Material protection treatments should be applied as materials arrive on site. Worker safety measures should be implemented continuously throughout the project. We develop a customized timeline for each construction project based on the specific building schedule, site conditions, and pest pressures, ensuring protection at every stage from groundbreaking to completion."
    },
    {
      question: "What is pre-construction termite treatment and why is it important?",
      answer: "Pre-construction termite treatment is a specialized preventative measure applied during the early phases of construction to create a long-lasting barrier against termite infestation. It typically involves treating the soil beneath and around foundation elements before concrete is poured, applying termiticides to critical areas, and establishing a continuous chemical barrier that prevents termite entry. This treatment is important because: 1) It's significantly more effective and cost-efficient than post-construction treatments; 2) It provides comprehensive protection that's difficult to achieve after the building is completed; 3) It can be a requirement for building warranties and insurance policies; 4) It adds value to the completed structure by providing long-term termite protection; and 5) It helps prevent future structural damage and costly repairs. Many building codes and lenders now require pre-construction termite treatments in termite-prone areas."
    },
    {
      question: "How do you ensure pest control treatments don't interfere with construction activities?",
      answer: "We understand the importance of maintaining construction schedules and minimizing disruptions. Our approach to ensuring pest control treatments don't interfere with construction activities includes: 1) Coordinating closely with project managers and site supervisors to schedule treatments during appropriate windows in the construction timeline; 2) Implementing treatments during off-hours or weekends when possible; 3) Dividing the site into treatment zones that allow work to continue in untreated areas; 4) Using application methods and products with minimal re-entry intervals; 5) Providing clear communication about treatment areas and any temporary access restrictions; and 6) Training our technicians to work efficiently around construction activities. Our goal is to provide effective pest management while maintaining the flow of your construction project."
    },
    {
      question: "What measures do you take to protect construction materials from pest damage?",
      answer: "We implement several key measures to protect construction materials from pest damage: 1) Conducting treatments of lumber and other vulnerable materials upon delivery to the site; 2) Providing recommendations for proper material storage, including elevated storage platforms and protective coverings; 3) Implementing monitoring systems in material staging areas to detect pest activity early; 4) Establishing protocols for inspection of incoming materials for signs of existing infestation; 5) Creating buffer zones between outdoor storage areas and the construction site; 6) Applying targeted treatments to high-risk materials like structural wood, insulation, and wiring; and 7) Providing guidance on material rotation practices to minimize extended storage periods. These measures help prevent pest infestations in materials before they're incorporated into the structure, reducing the risk of introducing pests into the building."
    },
    {
      question: "How do you address worker safety concerns related to pest control on construction sites?",
      answer: "Worker safety is a top priority in our construction site pest management approach. We address safety concerns through several key practices: 1) Using low-toxicity products and application methods that minimize worker exposure; 2) Scheduling treatments during off-hours when workers are not present whenever possible; 3) Providing clear communication about treated areas, including appropriate signage and re-entry information; 4) Targeting treatments to specific pest harborage areas rather than broad applications; 5) Offering worker education on pest identification and safe practices; 6) Coordinating with site safety officers to integrate pest management into overall site safety protocols; and 7) Maintaining detailed documentation of all treatments for reference. All our technicians are trained in construction site safety protocols and wear appropriate PPE when working on active construction sites."
    },
    {
      question: "What types of pests are most common on construction sites?",
      answer: "The most common pests found on construction sites include: 1) Termites, which are attracted to exposed wood and soil disturbance; 2) Rodents (mice and rats), which find shelter in partially completed structures and material storage areas; 3) Stinging insects like wasps and hornets, which establish nests in framework and other sheltered areas; 4) Venomous spiders, which are attracted to the numerous hiding places created during construction; 5) Carpenter ants, which can damage wooden structural elements, particularly if exposed to moisture; 6) Wood-boring beetles, which can infest lumber and other wood materials; and 7) Various wildlife species that may be displaced by construction activity. Each construction site has a unique pest profile based on location, surrounding environment, construction phase, and materials being used. Our comprehensive assessment identifies the specific pest pressures affecting your project."
    },
    {
      question: "How quickly can you respond to pest emergencies on construction sites?",
      answer: "We understand that pest issues on construction sites require immediate attention to prevent project delays and safety hazards. We offer emergency response services for construction sites with same-day or next-day appointments depending on the severity and nature of the issue. Our construction clients receive priority scheduling, and we maintain dedicated technicians trained specifically for construction environments who can respond quickly. For critical situations that threaten worker safety or project timelines, we have after-hours emergency response teams available. We also provide guidance on immediate containment measures that site personnel can implement until our technicians arrive, helping to minimize the impact of the pest issue on your construction project."
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <span className="inline-block px-3 py-1 bg-yellow-100 text-yellow-700 text-sm font-semibold rounded-full mb-3">
            CONSTRUCTION SITE PEST CONTROL FAQ
          </span>
          <h2 className="text-4xl font-bold mb-4 text-gray-900">
            Frequently Asked <span className="text-yellow-600">Questions</span>
          </h2>
          <div className="w-24 h-1 bg-yellow-600 mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Find answers to common questions about our professional pest control services for construction sites and building projects.
          </p>
        </div>

        <div className="max-w-3xl mx-auto px-4">
          {faqItems.map((item, index) => (
            <FAQItem
              key={index}
              question={item.question}
              answer={item.answer}
              isOpen={openIndex === index}
              toggleAccordion={() => toggleAccordion(index)}
              index={index}
            />
          ))}
        </div>

        {/* Additional help section */}
        <div className="mt-12 text-center">
          <div className="bg-white p-6 rounded-xl shadow-md max-w-2xl mx-auto border border-gray-100">
            <h3 className="text-xl font-semibold mb-3">Have more questions about construction site pest control?</h3>
            <p className="text-gray-600 mb-4">Our construction site pest control specialists are ready to answer any other questions you might have about our services for building projects.</p>
            <a href="/contact" className="modern-button bg-yellow-600 hover:bg-yellow-700 text-white transition-colors">
              Schedule a Consultation
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

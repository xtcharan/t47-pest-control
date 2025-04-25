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
          isOpen ? 'bg-pink-50 shadow-md' : 'bg-gray-50 hover:bg-gray-100'
        }`}
        onClick={toggleAccordion}
      >
        <div className="flex items-center gap-4">
          <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
            isOpen
              ? 'bg-pink-600 text-white'
              : 'bg-gray-200 text-gray-700'
          } transition-all duration-300`}>
            <span className="font-semibold">{index + 1}</span>
          </div>
          <span className={`text-lg font-medium ${isOpen ? 'text-pink-600' : 'text-gray-900'}`}>{question}</span>
        </div>
        <svg
          className={`w-6 h-6 text-pink-600 transform transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
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

export default function GymFitnessPestControlFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqItems = [
    {
      question: "How do you ensure pest control treatments don't disrupt our fitness facility operations?",
      answer: "We understand that maintaining normal operations is crucial for fitness facilities. Our services are designed to be completely non-disruptive through several key approaches: 1) We schedule treatments during off-hours, typically early mornings before opening or evenings after closing, to ensure zero impact on your members; 2) We use low-odor, quick-drying products that leave no residues that could affect member experience; 3) We coordinate closely with facility management to identify optimal treatment windows; 4) We segment larger facilities into treatment zones that allow for efficient service while ensuring all treatments are fully dry and settled before your facility reopens; 5) We provide clear communication about treatment schedules and any temporary access restrictions; and 6) We adapt our approach to accommodate your specific operational requirements and peak periods."
    },
    {
      question: "How do you address pest issues in high-moisture areas like locker rooms and showers?",
      answer: "High-moisture areas in fitness facilities present unique pest control challenges. Our approach to these areas includes: 1) Specialized drain treatments that eliminate breeding sites for drain flies and other moisture-loving pests; 2) Application of targeted products designed specifically for high-moisture environments; 3) Implementation of moisture management recommendations to reduce conditions that attract pests; 4) Installation of monitoring devices designed for humid environments; 5) More frequent service visits to these high-risk areas; and 6) Staff education on proper cleaning and maintenance practices that reduce pest pressure. We understand the sensitivity of these areas and implement our treatments with member privacy and comfort in mind, while effectively addressing the unique pest challenges these environments present."
    },
    {
      question: "Are your pest control products safe for use in health-focused environments?",
      answer: "Yes, we prioritize member safety in all our fitness facility pest control services. Our approach includes: 1) Selecting low-toxicity products specifically formulated for use in health-focused environments; 2) Prioritizing non-chemical control methods like exclusion, monitoring, and habitat modification wherever possible; 3) Using precise application methods that target pest harborage areas while minimizing human exposure; 4) Applying treatments during off-hours to allow for proper drying and settling before member arrival; 5) Following all manufacturer guidelines and regulatory requirements for product use in public facilities; and 6) Maintaining detailed documentation of all products used. Our goal is to provide effective pest management while ensuring the health and safety of your members and staff."
    },
    {
      question: "How do you handle pest issues in food service areas like juice bars?",
      answer: "Our approach to pest management in fitness facility food service areas includes: 1) Implementing specialized protocols that meet food safety regulations and standards; 2) Using food-grade products and application methods in and around food preparation and storage areas; 3) Providing more frequent service visits to these high-risk areas; 4) Offering staff training on proper food storage, waste management, and sanitation practices that reduce pest pressure; 5) Installing specialized monitoring devices designed for food service environments; and 6) Implementing enhanced exclusion measures to prevent pest entry. We understand the importance of maintaining proper sanitation in these areas and work closely with your staff to implement effective pest management practices that protect both food safety and member health."
    },
    {
      question: "What preventative measures do you recommend for fitness facilities?",
      answer: "We recommend several key preventative measures for fitness facilities: 1) Implementing comprehensive exclusion strategies to seal potential entry points around the building exterior; 2) Installing door sweeps and air curtains on all exterior doors; 3) Establishing enhanced cleaning protocols for locker rooms, shower areas, and other high-moisture zones; 4) Maintaining proper waste management practices with frequent removal and sealed containers; 5) Implementing proper food storage and handling procedures in juice bars and member lounge areas; 6) Regular drain cleaning and maintenance to prevent drain fly breeding; 7) Designing and maintaining proper ventilation systems to control humidity; and 8) Regular staff training on pest identification and prevention. We can help develop customized preventative protocols specific to your facility's needs, layout, and operational requirements."
    },
    {
      question: "How quickly can you respond to pest emergencies in fitness facilities?",
      answer: "We understand that pest issues in fitness environments require immediate attention due to the potential impact on member experience and facility reputation. We offer emergency response services for fitness facilities with same-day or next-day appointments depending on the severity and nature of the issue. Our fitness facility clients receive priority scheduling, and we maintain dedicated technicians trained specifically for these environments who can respond quickly. For critical situations, we have after-hours emergency response teams available. We also provide guidance on immediate containment measures that facility staff can implement until our technicians arrive, helping to minimize the impact of the pest issue on your members and operations."
    },
    {
      question: "How can fitness facility staff help support effective pest management?",
      answer: "Fitness facility staff play a crucial role in supporting effective pest management through several key practices: 1) Maintaining proper cleaning protocols in locker rooms, shower areas, and other high-moisture zones; 2) Promptly reporting any pest sightings or evidence to management; 3) Following proper food storage and handling procedures in juice bars and break rooms; 4) Properly managing waste with frequent removal and sealed containers; 5) Ensuring proper drainage in shower areas and around water fountains; 6) Keeping exterior doors closed when not in use; 7) Properly storing towels and linens; and 8) Participating in pest prevention training. We provide comprehensive staff training sessions and educational materials to help your team understand these important practices and recognize early warning signs of pest activity that could affect member experience."
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <span className="inline-block px-3 py-1 bg-pink-100 text-pink-700 text-sm font-semibold rounded-full mb-3">
            GYM & FITNESS PEST CONTROL FAQ
          </span>
          <h2 className="text-4xl font-bold mb-4 text-gray-900">
            Frequently Asked <span className="text-pink-600">Questions</span>
          </h2>
          <div className="w-24 h-1 bg-pink-600 mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Find answers to common questions about our professional pest control services for gyms, fitness centers, and sports facilities.
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
            <h3 className="text-xl font-semibold mb-3">Have more questions about gym & fitness pest control?</h3>
            <p className="text-gray-600 mb-4">Our fitness facility pest control specialists are ready to answer any other questions you might have about our services for gyms and sports centers.</p>
            <a href="/contact" className="modern-button bg-pink-600 hover:bg-pink-700 text-white transition-colors">
              Schedule a Consultation
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

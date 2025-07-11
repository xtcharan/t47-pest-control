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
          isOpen ? 'bg-cyan-50 shadow-md' : 'bg-gray-50 hover:bg-gray-100'
        }`}
        onClick={toggleAccordion}
      >
        <div className="flex items-center gap-4">
          <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
            isOpen
              ? 'bg-cyan-600 text-white'
              : 'bg-gray-200 text-gray-700'
          } transition-all duration-300`}>
            <span className="font-semibold">{index + 1}</span>
          </div>
          <span className={`text-lg font-medium ${isOpen ? 'text-cyan-600' : 'text-gray-900'}`}>{question}</span>
        </div>
        <svg
          className={`w-6 h-6 text-cyan-600 transform transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
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

export default function ITCenterPestControlFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqItems = [
    {
      question: "Are your pest control methods safe for sensitive electronic equipment?",
      answer: "Yes, our pest control methods are specifically designed to be safe for sensitive electronic equipment in IT environments. We use several approaches to ensure equipment safety: 1) We prioritize non-chemical control methods like exclusion, monitoring, and habitat modification; 2) When treatments are necessary, we select products that won't damage electronic components and are safe for use around sensitive equipment; 3) We use precise application methods that target pest harborage areas while avoiding contact with equipment; 4) We never use foggers, misters, or other broadcast application methods that could introduce moisture or residues into equipment; 5) All treatments are applied by technicians with specialized training in IT facility pest management; and 6) We coordinate closely with your IT staff to ensure our methods align with your equipment protection protocols."
    },
    {
      question: "How do you ensure pest control services don't disrupt our IT operations?",
      answer: "We understand that maintaining operational continuity is critical for IT facilities. Our services are designed to be completely non-disruptive through several key approaches: 1) We schedule treatments during planned maintenance windows or other times identified by your IT team; 2) We coordinate closely with facility management to identify optimal treatment times; 3) We use application methods that don't require equipment shutdown or relocation; 4) We implement treatments in ways that don't interfere with cooling systems, airflow, or other critical infrastructure; 5) We provide clear communication about treatment schedules and any temporary access restrictions; and 6) We adapt our approach to accommodate your specific operational requirements and critical systems. Our goal is to provide effective pest management without any impact on your IT operations."
    },
    {
      question: "What preventative measures do you recommend for data centers and server rooms?",
      answer: "We recommend several key preventative measures for data centers and server rooms: 1) Implementing comprehensive exclusion strategies to seal potential entry points around the building exterior and at cable entry points; 2) Installing specialized door sweeps and air curtains on all exterior doors; 3) Establishing protocols for inspection of equipment and packaging materials before they enter sensitive areas; 4) Maintaining proper waste management practices with frequent removal and sealed containers; 5) Implementing cable management systems that minimize harborage areas; 6) Creating buffer zones between exterior and server areas; 7) Maintaining proper environmental controls, as fluctuations can attract certain pests; and 8) Training staff to recognize and report early signs of pest activity. We can help develop customized preventative protocols specific to your IT facility's needs and configuration."
    },
    {
      question: "How do you protect cable runs and infrastructure from rodent damage?",
      answer: "Our approach to protecting cable runs and infrastructure from rodent damage includes: 1) Implementing comprehensive exclusion measures at cable entry points using specialized materials that prevent rodent access; 2) Installing targeted monitoring systems along cable pathways to detect rodent activity before damage occurs; 3) Applying rodent-repellent treatments to cable trays and conduits where appropriate; 4) Sealing penetration points in walls, floors, and ceilings where cables run; 5) Implementing specialized baiting and trapping programs in areas adjacent to critical cable runs; 6) Regular inspection of cable infrastructure for early signs of rodent activity; and 7) Providing recommendations for rodent-resistant cable materials and installation methods. Our goal is to create multiple layers of protection for your critical cabling infrastructure."
    },
    {
      question: "How quickly can you respond to pest emergencies in IT facilities?",
      answer: "We understand that pest issues in IT environments require immediate attention due to the potential for equipment damage and operational disruptions. We offer emergency response services for IT facilities with same-day or next-day appointments depending on the severity and nature of the issue. Our IT center clients receive priority scheduling, and we maintain dedicated technicians trained specifically for technology environments who can respond quickly. For critical situations involving immediate threats to equipment, we have after-hours emergency response teams available. We also provide guidance on immediate containment measures that IT staff can implement until our technicians arrive, helping to minimize the risk to your equipment and operations."
    },
    {
      question: "What documentation do you provide for IT center pest control services?",
      answer: "We provide comprehensive documentation for all IT center pest control services, including: 1) Detailed service reports outlining findings, treatments performed, products used, and application locations; 2) Pest monitoring logs showing activity trends over time; 3) Digital documentation accessible through our client portal for easy reference; 4) Safety Data Sheets for all products used; 5) Pest management recommendations for ongoing prevention; 6) Staff training records; and 7) Annual program assessment reports. This documentation helps IT facility managers demonstrate due diligence in maintaining a safe, pest-free environment for sensitive equipment. We can also provide specialized documentation for compliance with data center certification requirements or other regulatory standards."
    },
    {
      question: "How can IT staff help support effective pest management?",
      answer: "IT staff play a crucial role in supporting effective pest management through several key practices: 1) Promptly reporting any pest sightings or evidence to facility management; 2) Maintaining good housekeeping in break rooms and office areas adjacent to server rooms; 3) Following proper protocols for food and beverage consumption in IT facilities; 4) Inspecting packaging materials and equipment before bringing them into sensitive areas; 5) Properly sealing cable penetrations during installation or maintenance; 6) Keeping exterior doors closed when not in use; 7) Maintaining appropriate environmental controls; and 8) Participating in pest prevention training. We provide staff training sessions and educational materials to help your team understand these important practices and recognize early warning signs of pest activity that could threaten your IT infrastructure."
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <span className="inline-block px-3 py-1 bg-cyan-100 text-cyan-700 text-sm font-semibold rounded-full mb-3">
            IT CENTER PEST CONTROL FAQ
          </span>
          <h2 className="text-4xl font-bold mb-4 text-gray-900">
            Frequently Asked <span className="text-cyan-600">Questions</span>
          </h2>
          <div className="w-24 h-1 bg-cyan-600 mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Find answers to common questions about our professional pest control services for data centers and IT facilities.
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
            <h3 className="text-xl font-semibold mb-3">Have more questions about IT center pest control?</h3>
            <p className="text-gray-600 mb-4">Our IT center pest control specialists are ready to answer any other questions you might have about our services for technology facilities.</p>
            <a href="/contact" className="modern-button bg-cyan-600 hover:bg-cyan-700 text-white transition-colors">
              Schedule a Consultation
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

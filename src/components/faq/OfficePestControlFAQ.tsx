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
          isOpen ? 'bg-indigo-50 shadow-md' : 'bg-gray-50 hover:bg-gray-100'
        }`}
        onClick={toggleAccordion}
      >
        <div className="flex items-center gap-4">
          <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
            isOpen
              ? 'bg-indigo-600 text-white'
              : 'bg-gray-200 text-gray-700'
          } transition-all duration-300`}>
            <span className="font-semibold">{index + 1}</span>
          </div>
          <span className={`text-lg font-medium ${isOpen ? 'text-indigo-600' : 'text-gray-900'}`}>{question}</span>
        </div>
        <svg
          className={`w-6 h-6 text-indigo-600 transform transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
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

export default function OfficePestControlFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqItems = [
    {
      question: "How do you ensure pest control services don't disrupt our office operations?",
      answer: "We understand that maintaining a professional work environment is crucial for your business. Our services are designed to be completely non-disruptive through several key approaches: 1) We schedule treatments during evenings, weekends, or other off-hours when the office is unoccupied; 2) We use low-odor, quick-drying products that leave no visible residues or lingering smells; 3) Our technicians can arrive in unmarked vehicles and plain clothes or maintenance uniforms if preferred; 4) We keep all equipment and products out of sight during treatments; 5) We coordinate closely with office management to work around special events or business operations; and 6) We can segment larger office buildings into zones, treating different areas on different days to minimize any potential impact on your business."
    },
    {
      question: "What preventative measures do you recommend for office buildings?",
      answer: "We recommend several key preventative measures for office environments: 1) Implementing comprehensive exclusion strategies to seal potential entry points around the building exterior; 2) Installing appropriate door sweeps and door closers on all exterior doors; 3) Establishing clear policies for food storage and consumption in break rooms and at desks; 4) Maintaining proper waste management practices with frequent removal and sealed containers; 5) Regular cleaning of break rooms, kitchenettes, and communal eating areas; 6) Proper storage of paper materials and office supplies to reduce harborage areas; 7) Addressing moisture issues promptly; and 8) Training staff to recognize and report early signs of pest activity. We can help develop customized preventative protocols specific to your office's needs and challenges."
    },
    {
      question: "How quickly can you respond to pest emergencies in office buildings?",
      answer: "We understand that pest sightings in office environments require immediate attention due to potential disruption to your business operations and employee morale. We offer emergency response services for office buildings with same-day or next-day appointments depending on the severity and nature of the issue. Our commercial clients receive priority scheduling, and we maintain dedicated technicians trained specifically for office environments who can respond quickly. For critical situations, we have after-hours emergency response teams available. We also provide guidance on immediate containment measures that office staff can implement until our technicians arrive, helping to minimize the impact of the pest issue on your operations."
    },
    {
      question: "What types of pests are most common in office buildings?",
      answer: "The most common pests found in office buildings include: 1) Rodents (mice and rats), which are attracted to food residues and can damage wiring and documents; 2) Cockroaches, which thrive in break rooms and kitchenettes; 3) Ants, which are drawn to food and water sources throughout the office; 4) Flies, which can enter through doors and windows and breed in waste areas; 5) Pantry pests like moths and beetles, which infest dry goods in break rooms; and 6) Occasional invaders like spiders, which establish themselves in quiet, undisturbed areas. Each pest presents unique challenges in office environments and requires specific management approaches. Our comprehensive pest control programs target all these common pests with integrated approaches tailored to your specific office layout and operations."
    },
    {
      question: "How do you handle pest control in server rooms and areas with sensitive equipment?",
      answer: "We implement specialized protocols for server rooms and areas with sensitive electronic equipment: 1) We use primarily non-chemical control methods in these areas, focusing on exclusion, monitoring, and targeted treatments; 2) When treatments are necessary, we select products and application methods that pose no risk to electronic equipment; 3) We coordinate closely with IT staff to ensure proper precautions are taken; 4) We pay special attention to cable entry points and utility penetrations, which are common pest entry routes; 5) We implement more intensive monitoring in these areas to detect issues early; and 6) We provide specific recommendations for preventing pest access to these critical areas. Our technicians are trained in the special considerations required for pest management around sensitive electronic equipment."
    },
    {
      question: "What documentation do you provide for office pest control services?",
      answer: "We provide comprehensive documentation for all office pest control services, including: 1) Detailed service reports outlining findings, treatments performed, products used, and application locations; 2) Pest monitoring logs showing activity trends over time; 3) Digital documentation accessible through our client portal for easy reference; 4) Safety Data Sheets for all products used; 5) Pest management recommendations for ongoing prevention; 6) Staff education materials; and 7) Annual program assessment reports. This documentation helps office managers demonstrate due diligence in maintaining a safe, pest-free environment for employees. For multi-location businesses, we can provide standardized reporting across all properties to help maintain consistent pest management standards."
    },
    {
      question: "How can office staff help support effective pest management?",
      answer: "Office staff play a crucial role in supporting effective pest management through several key practices: 1) Promptly reporting any pest sightings to management; 2) Maintaining clean workspaces and properly storing food items in sealed containers; 3) Cleaning up food residues in break rooms and at desks; 4) Properly disposing of food waste in sealed containers; 5) Keeping exterior doors closed when not in use; 6) Maintaining organized storage areas and reducing clutter; 7) Following proper protocols for incoming deliveries and packages; and 8) Participating in pest prevention training. We provide educational resources and training sessions to help your team understand these important practices and recognize early warning signs of pest activity."
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <span className="inline-block px-3 py-1 bg-indigo-100 text-indigo-700 text-sm font-semibold rounded-full mb-3">
            OFFICE PEST CONTROL FAQ
          </span>
          <h2 className="text-4xl font-bold mb-4 text-gray-900">
            Frequently Asked <span className="text-indigo-600">Questions</span>
          </h2>
          <div className="w-24 h-1 bg-indigo-600 mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Find answers to common questions about our professional pest control services for office buildings and workspaces.
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
            <h3 className="text-xl font-semibold mb-3">Have more questions about office pest control?</h3>
            <p className="text-gray-600 mb-4">Our office pest control specialists are ready to answer any other questions you might have about our services for commercial workspaces.</p>
            <a href="/contact" className="modern-button bg-indigo-600 hover:bg-indigo-700 text-white transition-colors">
              Schedule a Consultation
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

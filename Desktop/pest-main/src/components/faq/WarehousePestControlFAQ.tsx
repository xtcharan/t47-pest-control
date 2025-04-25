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
          isOpen ? 'bg-orange-50 shadow-md' : 'bg-gray-50 hover:bg-gray-100'
        }`}
        onClick={toggleAccordion}
      >
        <div className="flex items-center gap-4">
          <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
            isOpen
              ? 'bg-orange-600 text-white'
              : 'bg-gray-200 text-gray-700'
          } transition-all duration-300`}>
            <span className="font-semibold">{index + 1}</span>
          </div>
          <span className={`text-lg font-medium ${isOpen ? 'text-orange-600' : 'text-gray-900'}`}>{question}</span>
        </div>
        <svg
          className={`w-6 h-6 text-orange-600 transform transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
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

export default function WarehousePestControlFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqItems = [
    {
      question: "How do you ensure pest control services don't disrupt our warehouse operations?",
      answer: "We understand that maintaining operational efficiency is crucial for warehouse facilities. Our services are designed to be completely non-disruptive through several key approaches: 1) We schedule treatments during off-hours, shift changes, or planned downtime when operational impact will be minimal; 2) We coordinate closely with warehouse management to identify optimal treatment windows; 3) We can segment larger facilities into zones, treating different areas on different days to ensure continuous operations; 4) We use application methods that minimize drying times and allow for quick re-entry to treated areas; 5) We provide clear communication about treatment schedules and any temporary access restrictions; and 6) We adapt our approach to accommodate your specific operational requirements and peak periods."
    },
    {
      question: "How do you handle pest control for sensitive inventory and products?",
      answer: "We implement specialized protocols for sensitive inventory and products: 1) We conduct a thorough assessment to understand the specific sensitivity of your inventory; 2) We select products and application methods that pose no risk to stored goods; 3) We create buffer zones around sensitive inventory areas; 4) We emphasize non-chemical control methods like exclusion, monitoring, and habitat modification in these areas; 5) When treatments are necessary, we use targeted applications rather than broadcast treatments; 6) We provide specific recommendations for inventory storage and rotation practices that reduce pest pressure; and 7) We implement more intensive monitoring in sensitive inventory areas to detect issues early. Our technicians are trained in the special considerations required for pest management around various types of inventory."
    },
    {
      question: "What preventative measures do you recommend for warehouses?",
      answer: "We recommend several key preventative measures for warehouse environments: 1) Implementing comprehensive exclusion strategies to seal potential entry points around the building exterior; 2) Installing appropriate door sweeps, air curtains, and dock seals on all exterior doors and loading docks; 3) Establishing strict protocols for inspection of incoming shipments; 4) Maintaining proper waste management practices with frequent removal and sealed containers; 5) Implementing proper inventory storage and rotation practices following FIFO principles; 6) Creating buffer zones between exterior and storage areas; 7) Designing and maintaining proper drainage systems; and 8) Training staff to recognize and report early signs of pest activity. We can help develop customized preventative protocols specific to your warehouse's needs and inventory types."
    },
    {
      question: "How do you handle stored product pests in warehouses?",
      answer: "Our approach to stored product pests in warehouses includes: 1) Specialized monitoring using pheromone traps and other detection methods to identify infestations early; 2) Targeted treatments for affected inventory areas using appropriate products for the specific pest species; 3) Establishing quarantine protocols for potentially infested shipments; 4) Implementing proper inventory rotation practices to reduce pest development; 5) Temperature management recommendations where appropriate, as many stored product pests have specific temperature requirements for development; 6) Staff training on early identification of these often-subtle pests; and 7) Regular inspections of high-risk inventory. We understand the unique challenges of stored product pests and have specialized expertise in managing these inventory-threatening pests."
    },
    {
      question: "How quickly can you respond to pest emergencies in warehouses?",
      answer: "We understand that pest issues in warehouse environments require immediate attention due to potential inventory damage and operational disruptions. We offer emergency response services for warehouses with same-day or next-day appointments depending on the severity and nature of the issue. Our warehouse clients receive priority scheduling, and we maintain dedicated technicians trained specifically for industrial environments who can respond quickly. For critical situations, we have after-hours emergency response teams available. We also provide guidance on immediate containment measures that warehouse staff can implement until our technicians arrive, helping to minimize the impact of the pest issue on your inventory and operations."
    },
    {
      question: "What documentation do you provide for warehouse pest control services?",
      answer: "We provide comprehensive documentation for all warehouse pest control services, including: 1) Detailed service reports outlining findings, treatments performed, products used, and application locations; 2) Pest monitoring logs showing activity trends over time; 3) Digital documentation accessible through our client portal for easy reference; 4) Safety Data Sheets for all products used; 5) Pest management recommendations for ongoing prevention; 6) Staff training records; and 7) Annual program assessment reports. This documentation helps warehouse managers demonstrate due diligence in maintaining a safe, pest-free environment for inventory and employees. For distribution networks with multiple facilities, we can provide standardized reporting across all locations to help maintain consistent pest management standards."
    },
    {
      question: "How can warehouse staff help support effective pest management?",
      answer: "Warehouse staff play a crucial role in supporting effective pest management through several key practices: 1) Promptly reporting any pest sightings or evidence to management; 2) Conducting thorough inspections of incoming shipments for signs of pest activity; 3) Following proper inventory rotation practices using FIFO (first in, first out) principles; 4) Maintaining good housekeeping in break rooms and office areas; 5) Properly storing and disposing of waste materials; 6) Keeping exterior doors closed when not in use; 7) Maintaining organized, clutter-free storage areas with proper spacing between inventory and walls; and 8) Following established protocols for handling potentially infested products. We provide staff training sessions and educational materials to help your team understand these important practices and recognize early warning signs of pest activity."
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <span className="inline-block px-3 py-1 bg-orange-100 text-orange-700 text-sm font-semibold rounded-full mb-3">
            WAREHOUSE PEST CONTROL FAQ
          </span>
          <h2 className="text-4xl font-bold mb-4 text-gray-900">
            Frequently Asked <span className="text-orange-600">Questions</span>
          </h2>
          <div className="w-24 h-1 bg-orange-600 mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Find answers to common questions about our professional pest control services for warehouses and distribution centers.
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
            <h3 className="text-xl font-semibold mb-3">Have more questions about warehouse pest control?</h3>
            <p className="text-gray-600 mb-4">Our warehouse pest control specialists are ready to answer any other questions you might have about our services for industrial storage facilities.</p>
            <a href="/contact" className="modern-button bg-orange-600 hover:bg-orange-700 text-white transition-colors">
              Schedule a Consultation
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

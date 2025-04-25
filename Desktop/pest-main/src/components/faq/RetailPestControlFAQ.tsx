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
          isOpen ? 'bg-purple-50 shadow-md' : 'bg-gray-50 hover:bg-gray-100'
        }`}
        onClick={toggleAccordion}
      >
        <div className="flex items-center gap-4">
          <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
            isOpen
              ? 'bg-purple-600 text-white'
              : 'bg-gray-200 text-gray-700'
          } transition-all duration-300`}>
            <span className="font-semibold">{index + 1}</span>
          </div>
          <span className={`text-lg font-medium ${isOpen ? 'text-purple-600' : 'text-gray-900'}`}>{question}</span>
        </div>
        <svg
          className={`w-6 h-6 text-purple-600 transform transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
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

export default function RetailPestControlFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqItems = [
    {
      question: "How do you ensure pest control services don't disrupt our retail operations?",
      answer: "We understand that maintaining a positive shopping environment is crucial for retail businesses. Our services are designed to be completely non-disruptive through several key approaches: 1) We schedule treatments during off-hours, before opening, or after closing when customers are not present; 2) We use low-odor, quick-drying products that leave no visible residues; 3) Our technicians can arrive in unmarked vehicles and plain clothes or your store uniform if preferred; 4) We keep all equipment and products out of sight during treatments; 5) We coordinate closely with store management to work around special events, promotions, or high-traffic periods; and 6) We can segment larger stores into zones, treating different areas on different days to minimize any potential impact on operations."
    },
    {
      question: "What preventative measures do you recommend for retail stores?",
      answer: "We recommend several key preventative measures for retail environments: 1) Implementing comprehensive exclusion strategies to seal potential entry points around the building exterior; 2) Installing appropriate door sweeps, air curtains, and door closers on all exterior doors; 3) Establishing strict protocols for inspection of incoming merchandise and deliveries; 4) Maintaining proper waste management practices with frequent removal and sealed containers; 5) Implementing proper storage practices for merchandise, particularly food items; 6) Creating buffer zones between exterior and sales floor areas; 7) Designing and maintaining proper drainage systems; and 8) Training staff to recognize and report early signs of pest activity. We can help develop customized preventative protocols specific to your retail operation's needs and challenges."
    },
    {
      question: "How quickly can you respond to pest emergencies in retail stores?",
      answer: "We understand that pest sightings in retail environments require immediate attention due to potential damage to your brand reputation and customer experience. We offer emergency response services for retail businesses with same-day or next-day appointments depending on the severity and nature of the issue. Our retail clients receive priority scheduling, and we maintain dedicated technicians trained specifically for retail environments who can respond quickly. For critical situations, we have after-hours emergency response teams available. We also provide guidance on immediate containment measures that store staff can implement until our technicians arrive, helping to minimize the impact of the pest issue on your customers and operations."
    },
    {
      question: "What special considerations do you have for retail stores with food sections?",
      answer: "Retail stores with food sections require specialized pest management approaches that address the unique challenges of these environments. Our approach includes: 1) Creating zone-based treatment protocols with more intensive monitoring and preventative measures in food areas; 2) Using food-grade products and application methods in and around food sections; 3) Implementing more frequent service visits for these areas; 4) Providing specialized staff training for employees working in food sections; 5) Establishing enhanced receiving protocols for food deliveries; 6) Recommending proper storage and rotation practices for food products; and 7) Implementing additional monitoring devices in these high-risk areas. We understand the regulatory requirements for food retail and ensure our services help you maintain compliance while protecting your products and customers."
    },
    {
      question: "How do you handle pest control differently for various types of retail stores?",
      answer: "We customize our pest control approach based on the specific type of retail store and the unique challenges it presents: 1) For clothing retailers, we focus on fabric pests like moths and implement specialized monitoring for these threats; 2) For electronics retailers, we emphasize rodent prevention due to the risk of wire damage; 3) For grocery and food retailers, we implement food-safe protocols and more intensive monitoring; 4) For department stores, we create zone-based approaches with different protocols for different departments; 5) For home goods retailers, we pay special attention to stored product pests that can infest certain merchandise; and 6) For shopping malls, we coordinate with property management to address common areas while providing specialized service for individual stores. Each retail environment receives a customized program designed for its specific merchandise, layout, and pest pressures."
    },
    {
      question: "What documentation do you provide for retail pest control services?",
      answer: "We provide comprehensive documentation for all retail pest control services, including: 1) Detailed service reports outlining findings, treatments performed, products used, and application locations; 2) Pest monitoring logs showing activity trends over time; 3) Digital documentation accessible through our client portal for easy reference; 4) Safety Data Sheets for all products used; 5) Pest management recommendations for ongoing prevention; 6) Staff training records; and 7) Annual program assessment reports. This documentation helps retail businesses demonstrate due diligence in maintaining a safe, pest-free environment for customers and employees. For retail chains, we can provide standardized reporting across all locations to help maintain consistent pest management standards."
    },
    {
      question: "How can retail staff help support effective pest management?",
      answer: "Retail staff play a crucial role in supporting effective pest management through several key practices: 1) Promptly reporting any pest sightings or evidence to management; 2) Maintaining proper housekeeping in break rooms, under displays, and in stockrooms; 3) Properly storing food items in break areas in sealed containers; 4) Following proper waste management protocols, including keeping exterior dumpster areas clean; 5) Inspecting incoming merchandise for signs of pest activity; 6) Properly rotating stock using FIFO (first in, first out) principles; 7) Keeping exterior doors closed when not in use; and 8) Maintaining organized, clutter-free storage areas. We provide staff training sessions and educational materials to help your team understand these important practices and recognize early warning signs of pest activity."
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <span className="inline-block px-3 py-1 bg-purple-100 text-purple-700 text-sm font-semibold rounded-full mb-3">
            RETAIL PEST CONTROL FAQ
          </span>
          <h2 className="text-4xl font-bold mb-4 text-gray-900">
            Frequently Asked <span className="text-purple-600">Questions</span>
          </h2>
          <div className="w-24 h-1 bg-purple-600 mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Find answers to common questions about our professional pest control services for retail stores and shopping centers.
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
            <h3 className="text-xl font-semibold mb-3">Have more questions about retail pest control?</h3>
            <p className="text-gray-600 mb-4">Our retail pest control specialists are ready to answer any other questions you might have about our services for stores and shopping centers.</p>
            <a href="/contact" className="modern-button bg-purple-600 hover:bg-purple-700 text-white transition-colors">
              Schedule a Consultation
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

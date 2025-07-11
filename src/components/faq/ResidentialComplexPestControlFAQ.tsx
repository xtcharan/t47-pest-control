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

export default function ResidentialComplexPestControlFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqItems = [
    {
      question: "How do you handle pest issues that affect multiple units in a residential complex?",
      answer: "Our approach to multi-unit pest issues includes: 1) Conducting comprehensive inspections to determine the full extent of the infestation across affected and adjacent units; 2) Implementing coordinated treatments that address all affected areas simultaneously to prevent pests from simply moving between units; 3) Treating common areas, wall voids, utility chases, and other pathways that allow pests to travel between units; 4) Creating buffer zones around affected units to prevent spread; 5) Coordinating with property management to ensure proper tenant notification and preparation; and 6) Conducting follow-up inspections of all potentially affected units to verify complete resolution. This building-wide approach is essential for effectively managing pests in multi-unit environments and preventing recurring issues."
    },
    {
      question: "How do you minimize disruption to tenants during pest control treatments?",
      answer: "We understand the importance of minimizing disruption to your tenants' daily lives. Our approach includes: 1) Scheduling treatments during optimal times identified by property management; 2) Providing clear communication materials about preparation requirements and re-entry times; 3) Using application methods that minimize disruption to tenant belongings and activities; 4) Implementing zone-based treatment approaches that limit the number of units requiring access at any given time; 5) Training our technicians to work efficiently while respecting tenant property and privacy; 6) Offering flexible scheduling options for individual unit treatments; and 7) Coordinating closely with property management to address tenant concerns and special circumstances. Our goal is to provide effective pest management while maintaining tenant satisfaction throughout the process."
    },
    {
      question: "What preventative measures do you recommend for residential complexes?",
      answer: "We recommend several key preventative measures for residential complexes: 1) Implementing comprehensive exclusion strategies to seal potential entry points around the building exterior; 2) Installing door sweeps and air curtains on all exterior doors; 3) Establishing enhanced waste management protocols with frequent removal and sealed containers; 4) Implementing proper landscaping practices that reduce harborage areas near building foundations; 5) Regular maintenance of building envelope, including sealing cracks and gaps; 6) Proper drainage systems to prevent moisture accumulation; 7) Regular cleaning and maintenance of common areas; 8) Tenant education on proper waste disposal and food storage; and 9) Implementing a scheduled monitoring program to detect issues early. We can help develop customized preventative protocols specific to your property's needs, construction type, and tenant population."
    },
    {
      question: "How do you handle bed bug infestations in multi-unit properties?",
      answer: "Our approach to bed bug management in residential complexes includes: 1) Comprehensive inspections of affected units, adjacent units, and common areas using visual techniques and specialized detection tools; 2) Implementing a building-wide treatment strategy that addresses all affected and high-risk areas simultaneously; 3) Using a combination of treatment methods including heat treatments, targeted applications, and non-chemical approaches based on infestation severity; 4) Creating buffer zones around affected units to prevent spread; 5) Implementing specialized protocols for common areas and shared laundry facilities; 6) Providing tenant education on prevention and early detection; 7) Establishing clear communication protocols for reporting new activity; and 8) Conducting follow-up inspections to ensure complete elimination. Our comprehensive approach addresses the unique challenges of bed bug management in multi-unit environments."
    },
    {
      question: "How quickly can you respond to pest emergencies in residential complexes?",
      answer: "We understand that pest issues in residential complexes require immediate attention due to the potential for spread between units and impact on multiple tenants. We offer emergency response services for residential properties with same-day or next-day appointments depending on the severity and nature of the issue. Our multi-unit residential clients receive priority scheduling, and we maintain dedicated technicians trained specifically for these environments who can respond quickly. For critical situations involving health risks or rapidly spreading infestations, we have after-hours emergency response teams available. We also provide guidance on immediate containment measures that property management can implement until our technicians arrive, helping to minimize the spread of the pest issue throughout your property."
    },
    {
      question: "What documentation do you provide for property management records?",
      answer: "We provide comprehensive documentation for all residential complex pest control services, including: 1) Detailed service reports outlining findings, treatments performed, products used, and application locations; 2) Unit-specific treatment records for individual apartments or condominiums; 3) Digital documentation accessible through our client portal for easy reference; 4) Safety Data Sheets for all products used; 5) Pest monitoring logs showing activity trends over time; 6) Tenant notification templates and educational materials; 7) Annual program assessment reports; and 8) Recommendations for ongoing prevention. This documentation helps property managers maintain proper records for regulatory compliance, tenant communications, and maintenance planning. Our detailed reporting also helps track the effectiveness of treatments over time and identify recurring issues that may require structural or maintenance solutions."
    },
    {
      question: "How can property management staff help support effective pest management?",
      answer: "Property management staff play a crucial role in supporting effective pest management through several key practices: 1) Promptly addressing maintenance issues that create pest-friendly conditions, such as leaks, cracks, and gaps; 2) Implementing proper waste management protocols with frequent removal and sealed containers; 3) Establishing clear procedures for tenant pest complaints and maintenance requests; 4) Coordinating access to units requiring treatment; 5) Distributing tenant education materials about pest prevention; 6) Conducting regular inspections of common areas and building exteriors; 7) Maintaining proper landscaping practices that reduce harborage areas; and 8) Participating in pest prevention training. We provide comprehensive staff training sessions and educational materials to help your team understand these important practices and recognize early warning signs of pest activity that could affect multiple units."
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <span className="inline-block px-3 py-1 bg-purple-100 text-purple-700 text-sm font-semibold rounded-full mb-3">
            RESIDENTIAL COMPLEX PEST CONTROL FAQ
          </span>
          <h2 className="text-4xl font-bold mb-4 text-gray-900">
            Frequently Asked <span className="text-purple-600">Questions</span>
          </h2>
          <div className="w-24 h-1 bg-purple-600 mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Find answers to common questions about our professional pest control services for apartment buildings, condominiums, and residential complexes.
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
            <h3 className="text-xl font-semibold mb-3">Have more questions about residential complex pest control?</h3>
            <p className="text-gray-600 mb-4">Our multi-unit property pest control specialists are ready to answer any other questions you might have about our services for apartment buildings and condominiums.</p>
            <a href="/contact" className="modern-button bg-purple-600 hover:bg-purple-700 text-white transition-colors">
              Schedule a Consultation
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

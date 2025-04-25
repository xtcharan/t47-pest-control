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
          isOpen ? 'bg-blue-50 shadow-md' : 'bg-gray-50 hover:bg-gray-100'
        }`}
        onClick={toggleAccordion}
      >
        <div className="flex items-center gap-4">
          <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
            isOpen
              ? 'bg-blue-600 text-white'
              : 'bg-gray-200 text-gray-700'
          } transition-all duration-300`}>
            <span className="font-semibold">{index + 1}</span>
          </div>
          <span className={`text-lg font-medium ${isOpen ? 'text-blue-600' : 'text-gray-900'}`}>{question}</span>
        </div>
        <svg
          className={`w-6 h-6 text-blue-600 transform transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
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

export default function RestaurantPestControlFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqItems = [
    {
      question: "How often should restaurants schedule professional pest control services?",
      answer: "For most restaurants, we recommend professional pest control services at least once a month, with more frequent visits for high-risk establishments or those with previous pest issues. The frequency depends on several factors including the type of restaurant, location, building structure, and pest pressure in the area. Quick-service restaurants with high customer turnover may need bi-weekly service, while fine dining establishments might maintain effectiveness with monthly treatments. We create customized service schedules based on your specific needs and adjust the frequency as necessary based on monitoring results and seasonal pest activity."
    },
    {
      question: "Will pest control treatments disrupt my restaurant operations?",
      answer: "Our restaurant pest control services are designed to minimize disruption to your business operations. We typically schedule treatments during off-hours or closed periods to avoid customer exposure and food preparation conflicts. Our technicians use discreet, targeted application methods that allow for quick re-entry in most cases. For more extensive treatments, we provide clear timelines and re-entry protocols. We also offer emergency services that can be performed after closing hours if an urgent pest situation arises. Our goal is to protect your restaurant from pests while ensuring your business can continue to operate smoothly."
    },
    {
      question: "Are the pest control products used in restaurants safe for food preparation areas?",
      answer: "Yes, we use only food-safe, EPA-approved products specifically designed for use in food service environments. Our treatments for restaurants utilize low-toxicity formulations with targeted application methods that minimize any risk to food safety. We implement strict protocols for treating different zones within restaurants, with special considerations for food preparation and storage areas. Our technicians are specially trained in food safety regulations and proper application techniques for restaurant environments. After treatment, we provide clear guidelines for cleaning and sanitizing surfaces before food preparation resumes, ensuring complete safety for your staff and customers."
    },
    {
      question: "How can pest control help my restaurant pass health inspections?",
      answer: "Our professional pest control services help restaurants pass health inspections by implementing comprehensive pest management programs that address both active infestations and preventative measures. We provide detailed documentation of all services performed, including treatment records, monitoring reports, and pest activity logs—documentation that health inspectors often request. Our technicians can identify potential pest harborage areas and structural issues that might concern inspectors and recommend corrections before inspections occur. We also offer pre-inspection walkthroughs to identify and address any potential issues, and can provide staff training on proper sanitation and pest prevention practices that align with health code requirements."
    },
    {
      question: "What are the most common pests found in restaurants?",
      answer: "The most common pests found in restaurants include cockroaches, rodents (mice and rats), flies (house flies, fruit flies, and drain flies), stored product pests (beetles and moths), and ants. Each presents unique challenges in food service environments: cockroaches spread bacteria and allergens; rodents contaminate food and damage structures; flies transfer pathogens between surfaces; stored product pests infest dry goods; and ants contaminate food and indicate sanitation issues. Our restaurant pest control programs target all these common pests with integrated approaches that combine monitoring, sanitation recommendations, exclusion methods, and targeted treatments to provide comprehensive protection for your establishment."
    },
    {
      question: "How can my restaurant staff help prevent pest problems between professional treatments?",
      answer: "Restaurant staff play a crucial role in pest prevention between professional treatments. Key practices include maintaining rigorous cleaning protocols (especially in hard-to-reach areas), promptly cleaning food spills, proper waste management with regular removal and sealed containers, proper food storage in airtight containers off the floor, regular inspection of deliveries for signs of pests, reporting pest sightings immediately, maintaining building integrity by reporting leaks or cracks, and following the specific recommendations provided by our pest control technicians. We offer staff training sessions on pest identification and prevention practices tailored to restaurant environments, empowering your team to be part of the pest management solution."
    },
    {
      question: "What makes restaurant pest control different from residential pest control?",
      answer: "Restaurant pest control differs significantly from residential pest control in several key ways. Restaurants face stricter regulatory requirements and health code compliance issues that demand specialized knowledge. The treatments must be food-safe and consider different zones (food prep areas vs. dining areas). Restaurants typically have higher pest pressure due to constant food handling, waste generation, and frequent deliveries. Our commercial restaurant services include comprehensive documentation for health inspections, staff training components, and often require after-hours service to avoid business disruption. We use specialized equipment and products designed specifically for food service environments, and implement more intensive monitoring programs to detect issues before they become visible to customers or inspectors."
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <span className="inline-block px-3 py-1 bg-blue-100 text-blue-700 text-sm font-semibold rounded-full mb-3">
            RESTAURANT PEST CONTROL FAQ
          </span>
          <h2 className="text-4xl font-bold mb-4 text-gray-900">
            Frequently Asked <span className="text-blue-600">Questions</span>
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Find answers to common questions about our professional pest control services for restaurants and food service establishments.
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
            <h3 className="text-xl font-semibold mb-3">Have more questions about restaurant pest control?</h3>
            <p className="text-gray-600 mb-4">Our commercial pest control specialists are ready to answer any other questions you might have about our services for restaurants.</p>
            <a href="/contact" className="modern-button bg-blue-600 hover:bg-blue-700 text-white transition-colors">
              Schedule a Consultation
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

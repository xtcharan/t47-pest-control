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

export default function SchoolPestControlFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqItems = [
    {
      question: "How often should schools schedule professional pest control services?",
      answer: "Most schools benefit from quarterly pest control services as part of a preventative maintenance program, with additional targeted treatments as needed. The optimal frequency depends on several factors including the school's size, location, building structure, and history of pest issues. Schools with cafeterias or food preparation areas may require more frequent service, typically monthly, for these specific zones. We create customized service schedules based on your school's specific needs and adjust the frequency as necessary based on monitoring results, seasonal pest activity, and any emerging pest pressures."
    },
    {
      question: "Are the pest control products used in schools safe for children?",
      answer: "Yes, we use only low-toxicity, child-safe products specifically designed for use in sensitive environments like schools. Our approach emphasizes non-chemical control methods first, using physical barriers, habitat modification, and exclusion techniques whenever possible. When treatments are necessary, we select the least toxic effective options and apply them using precise targeting methods that minimize exposure. All products are EPA-approved for use in schools and applied according to strict safety guidelines. Treatments are scheduled during non-school hours with appropriate re-entry intervals to ensure no exposure to students and staff."
    },
    {
      question: "How can schools prevent pest problems between professional treatments?",
      answer: "Schools can implement several key practices to prevent pest problems between professional treatments: 1) Maintain rigorous cleaning protocols, especially in cafeterias and food preparation areas; 2) Promptly address food spills and ensure proper waste management with regular removal and sealed containers; 3) Keep food stored in airtight containers; 4) Reduce clutter in classrooms and storage areas that can provide harborage for pests; 5) Report maintenance issues like leaky pipes or cracks in walls promptly; 6) Educate staff and students about pest prevention practices; and 7) Implement a pest sighting reporting system to catch problems early. We provide staff training and educational resources to support these preventative efforts."
    },
    {
      question: "When are pest control treatments performed in schools?",
      answer: "We schedule pest control treatments in schools during non-operational hours to ensure zero exposure to students and staff. This typically means after school hours, during weekends, or holiday breaks. For more extensive treatments, we work with school administrators to plan services during longer breaks like summer vacation. Our technicians coordinate closely with facility managers to ensure treatments don't interfere with after-school activities or other scheduled events. We provide clear documentation of all treatments, including re-entry times and any special instructions, to ensure complete safety and transparency."
    },
    {
      question: "What are the most common pests found in schools?",
      answer: "The most common pests found in schools include rodents (mice and rats), cockroaches, ants, flies, and occasionally bed bugs. Each presents unique challenges in educational environments: rodents can spread diseases and damage property; cockroaches trigger allergies and asthma in students; ants invade food storage areas; flies contaminate surfaces in cafeterias; and bed bugs can be inadvertently brought in by students or staff. Our school pest control programs target all these common pests with integrated approaches that combine monitoring, sanitation recommendations, exclusion methods, and targeted treatments to provide comprehensive protection for your educational facility."
    },
    {
      question: "How do you handle pest emergencies in schools?",
      answer: "For pest emergencies in schools, we offer rapid response services with same-day or next-day appointments depending on the severity and nature of the issue. Our emergency protocol includes: 1) Immediate assessment of the situation to identify the pest and extent of the problem; 2) Development of a targeted action plan that prioritizes student safety; 3) Implementation of appropriate control measures during non-school hours whenever possible; 4) Clear communication with school administrators about treatment methods, safety protocols, and re-entry guidelines; and 5) Follow-up inspections to ensure the issue has been resolved. We also provide guidance on immediate steps school staff can take to contain the situation until our technicians arrive."
    },
    {
      question: "What documentation do you provide for school pest control services?",
      answer: "We provide comprehensive documentation for all school pest control services, including: 1) Detailed service reports outlining findings, treatments performed, products used, and application methods; 2) Pest monitoring logs showing activity trends over time; 3) Treatment certificates with re-entry information; 4) Safety Data Sheets (SDS) for all products used; 5) Pest management recommendations for ongoing prevention; and 6) Annual summary reports for budget planning and program evaluation. This documentation helps schools demonstrate compliance with health department requirements and school district policies, and provides transparency for parents and staff about pest management practices."
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <span className="inline-block px-3 py-1 bg-blue-100 text-blue-700 text-sm font-semibold rounded-full mb-3">
            SCHOOL PEST CONTROL FAQ
          </span>
          <h2 className="text-4xl font-bold mb-4 text-gray-900">
            Frequently Asked <span className="text-blue-600">Questions</span>
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Find answers to common questions about our professional pest control services for schools and educational facilities.
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
            <h3 className="text-xl font-semibold mb-3">Have more questions about school pest control?</h3>
            <p className="text-gray-600 mb-4">Our commercial pest control specialists are ready to answer any other questions you might have about our services for educational facilities.</p>
            <a href="/contact" className="modern-button bg-blue-600 hover:bg-blue-700 text-white transition-colors">
              Schedule a Consultation
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

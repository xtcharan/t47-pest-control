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
      answer: "Most schools benefit from quarterly pest control services. Schools with cafeterias may need monthly treatments. We customize service schedules based on your school's size, location, and pest history to ensure optimal protection year-round."
    },
    {
      question: "Are school pest control products safe for children?",
      answer: "Yes, we use only EPA-approved, child-safe products designed for educational facilities. Our approach prioritizes non-chemical methods first, with treatments scheduled during non-school hours to ensure zero student exposure."
    },
    {
      question: "What are the most common school pests?",
      answer: "Common school pests include rodents, cockroaches, ants, flies, and bed bugs. Each poses unique health and safety risks in educational environments. Our integrated pest management targets all these pests with comprehensive prevention and treatment strategies."
    },
    {
      question: "When are pest control treatments performed in schools?",
      answer: "All treatments are scheduled during non-operational hours - after school, weekends, or holiday breaks. This ensures complete safety for students and staff while maintaining effective pest control without disrupting educational activities."
    },
    {
      question: "How can schools prevent pest problems?",
      answer: "Key prevention strategies include: maintaining clean cafeterias, proper waste management, sealing food in airtight containers, reducing clutter, fixing leaks promptly, and implementing staff training programs. We provide comprehensive prevention guidance."
    },
    {
      question: "Do you offer emergency pest control for schools?",
      answer: "Yes, we provide rapid response emergency services with same-day or next-day appointments. Our emergency protocol prioritizes student safety with immediate assessment, targeted action plans, and clear communication with school administrators."
    },
    {
      question: "What documentation is provided for school pest control?",
      answer: "We provide detailed service reports, pest monitoring logs, treatment certificates, Safety Data Sheets, and annual summaries. This documentation ensures compliance with health department requirements and school district policies."
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

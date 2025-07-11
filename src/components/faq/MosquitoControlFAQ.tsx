"use client";

import { useState } from 'react';

interface FAQItemProps {
  question: string;
  answer: string;
  index: number;
  isOpen: boolean;
  toggleAccordion: (index: number) => void;
}

const FAQItem = ({ question, answer, index, isOpen, toggleAccordion }: FAQItemProps) => {
  // Create unique IDs for accessibility
  const contentId = `mosquito-faq-content-${index}`;

  return (
    <div className="mb-4 modern-card overflow-hidden transition-all duration-300 hover:shadow-lg">
      <div
        className={`flex justify-between items-center p-5 cursor-pointer transition-colors duration-300 ${isOpen ? 'bg-red-500/10' : 'bg-white'}`}
        onClick={() => toggleAccordion(index)}
      >
        <div className="flex items-center pr-4">
          <div className="w-8 h-8 rounded-full bg-gradient-to-r from-red-500 to-red-600 flex items-center justify-center mr-4 text-white text-sm shadow-sm">
            {index}
          </div>
          <h3 className={`font-medium text-lg transition-colors duration-300 ${isOpen ? 'text-red-600' : 'text-gray-800'}`}>{question}</h3>
        </div>
        {/* Toggle button with animation */}
        <div
          role="button"
          className={`text-gray-600 focus:outline-none transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
          aria-expanded={isOpen}
          aria-controls={contentId}
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </div>

      {/* Answer panel with smooth animation */}
      <div
        id={contentId}
        className={`overflow-hidden transition-all duration-500 ease-in-out ${isOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'}`}
      >
        <div className="p-5 bg-white border-t border-gray-100">
          <p className="text-gray-700 leading-relaxed">{answer}</p>
        </div>
      </div>
    </div>
  );
};

export default function MosquitoControlFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqItems = [
    {
      question: "How long does a mosquito treatment last?",
      answer: "Our standard mosquito treatments typically provide protection for 3-4 weeks, depending on weather conditions and the severity of the infestation. For continuous protection, we recommend our seasonal mosquito control program, which includes regular treatments throughout the mosquito season to maintain a mosquito-free environment."
    },
    {
      question: "Are your mosquito treatments safe for children and pets?",
      answer: "Yes, our mosquito treatments are formulated to be safe for families and pets when applied according to label instructions by our trained professionals. We use targeted application methods that minimize exposure to non-target areas. As a precaution, we recommend keeping children and pets indoors during the treatment and until the application has dried, typically 30-60 minutes."
    },
    {
      question: "What areas of my property will you treat for mosquitoes?",
      answer: "Our comprehensive mosquito control service targets all the areas where mosquitoes rest, breed, and feed. This includes treating vegetation, shrubs, trees, under decks, around patios, along fences, and other shaded areas where mosquitoes harbor during the day. We also identify and treat or recommend elimination of breeding sites such as standing water in bird baths, gutters, and other containers."
    },
    {
      question: "Can you treat for mosquitoes before an outdoor event?",
      answer: "Absolutely! We offer special event mosquito treatments that can be scheduled 24-48 hours before your outdoor gathering. These treatments provide immediate relief from mosquitoes and will help ensure your guests can enjoy your event without the annoyance of mosquito bites. Contact us at least a week in advance to schedule this service."
    },
    {
      question: "Do you offer natural or organic mosquito control options?",
      answer: "Yes, we offer environmentally friendly mosquito control options that use botanical-based ingredients. While these treatments may require more frequent application than traditional methods, they provide an effective alternative for environmentally conscious customers. Our technicians can discuss these options during your consultation."
    },
    {
      question: "How soon after treatment will I notice a reduction in mosquitoes?",
      answer: "Most customers notice a significant reduction in mosquito activity within 24-48 hours after treatment. The effectiveness increases over the first few days as mosquitoes come into contact with the treated areas. For severe infestations, a second treatment may be recommended to achieve optimal results."
    },
    {
      question: "Will your treatments affect beneficial insects like bees and butterflies?",
      answer: "Our targeted mosquito control treatments are designed to minimize impact on beneficial insects. We apply treatments to areas where mosquitoes rest and harbor, avoiding flowering plants when possible to protect pollinators. We also time our applications to reduce exposure to beneficial insects. If you have specific concerns about certain areas of your garden, please let our technicians know."
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute -top-20 -left-20 w-64 h-64 bg-red-500/5 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-red-500/5 rounded-full blur-3xl"></div>

      {/* Question mark decorations */}
      <div className="absolute top-20 right-10 text-8xl text-red-500/10 font-serif">?</div>
      <div className="absolute bottom-20 left-10 text-6xl text-red-500/10 font-serif">?</div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <span className="inline-block px-3 py-1 bg-red-500/10 text-red-600 text-sm font-semibold rounded-full mb-3">
            MOSQUITO CONTROL FAQ
          </span>
          <h2 className="text-4xl font-bold mb-4 text-gray-900">
            Frequently Asked <span className="text-red-600">Mosquito Control Questions</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-red-500 to-red-600 mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Find answers to common questions about our professional mosquito control services, treatment methods, and prevention strategies.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          {faqItems.map((item, index) => (
            <FAQItem
              key={index}
              question={item.question}
              answer={item.answer}
              index={index + 1}
              isOpen={openIndex === index}
              toggleAccordion={() => toggleAccordion(index)}
            />
          ))}
        </div>

        {/* Additional help section */}
        <div className="mt-12 text-center">
          <div className="bg-white p-6 rounded-xl shadow-md max-w-2xl mx-auto border border-gray-100">
            <h3 className="text-xl font-semibold mb-3">Have more questions about mosquito control?</h3>
            <p className="text-gray-600 mb-4">Our mosquito control specialists are ready to answer any other questions you might have about our services.</p>
            <a href="/contact" className="modern-button bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white transition-colors">
              Schedule a Consultation
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

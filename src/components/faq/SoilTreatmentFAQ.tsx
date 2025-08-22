"use client";

import { useState } from 'react';

interface FAQItemProps {
  question: string;
  answer: string;
  isOpen: boolean;
  toggleOpen: () => void;
  number: number;
}

const FAQItem = ({ question, answer, isOpen, toggleOpen, number }: FAQItemProps) => {
  return (
    <div className="border-b border-gray-200 last:border-b-0">
      <button
        className="w-full text-left py-6 px-6 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-inset"
        onClick={toggleOpen}
      >
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-4">
            <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold ${isOpen ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-600'}`}>
              {number}
            </div>
            <h3 className="text-lg font-semibold text-gray-900 pr-4">{question}</h3>
          </div>
          <div className={`transform transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}>
            <svg className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </div>
        </div>
      </button>
      <div className={`overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-96 pb-6' : 'max-h-0'}`}>
        <div className="px-6">
          <p className="text-gray-600 leading-relaxed">{answer}</p>
        </div>
      </div>
    </div>
  );
};

export default function SoilTreatmentFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqItems = [
    {
      question: "How much does chemical soil treatment cost in Australia?",
      answer: "Many homeowners want to know the average price of soil treatment in Melbourne and other cities. Costs usually depend on property size, foundation perimeter, and soil conditions. Generally, soil treatments range from $1,500-$4,000 for complete barrier installation. While this may seem like a significant investment, it's minimal compared to the potential cost of termite damage, which can reach tens of thousands of dollars."
    },
    {
      question: "How long does chemical soil treatment last?",
      answer: "This is one of the most common questions people search for in Australia. Professional soil treatments typically provide protection for 5-8 years, depending on soil conditions, chemical type, and environmental factors. The treatment creates a long-lasting barrier that continues to repel termites throughout its effective period, providing excellent long-term value."
    },
    {
      question: "Is chemical soil treatment safe for my family and garden?",
      answer: "Australians frequently ask about safety concerns regarding soil treatments. Modern termiticides are specifically designed to target termites while being safe for humans, pets, and plants when applied correctly. Our technicians use precise application methods and follow strict safety protocols to ensure treatments are contained within the treatment zone."
    },
    {
      question: "Will soil treatment affect my landscaping or garden?",
      answer: "A big concern for property owners is potential impact on existing landscaping. Professional soil treatment is applied using injection methods that minimize disruption to gardens and landscaping. Our technicians work carefully around plants and restore any disturbed areas, ensuring your property maintains its appearance while gaining termite protection."
    },
    {
      question: "Can I install soil treatment myself, or do I need a professional?",
      answer: "Many Australians search whether DIY soil treatment is effective or if professional installation is necessary. The truth is, professional installation is essential because it requires specialized equipment, proper chemical mixing, precise application techniques, and compliance with Australian standards. Professional treatment ensures complete barrier integrity, safety compliance, and warranty protection that DIY alternatives cannot provide."
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <span className="inline-block px-3 py-1 bg-blue-100 text-blue-700 text-sm font-semibold rounded-full mb-3">
              FREQUENTLY ASKED QUESTIONS
            </span>
            <h2 className="text-4xl font-bold mb-4 text-gray-900">
              Chemical Soil <span className="text-blue-600">Treatment</span> Questions
            </h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto mb-6"></div>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Get answers to common questions about our chemical soil treatments and how they create protective barriers around your property.
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden">
            {faqItems.map((item, index) => (
              <FAQItem
                key={index}
                question={item.question}
                answer={item.answer}
                isOpen={openIndex === index}
                toggleOpen={() => toggleFAQ(index)}
                number={index + 1}
              />
            ))}
          </div>

          {/* Contact CTA */}
          <div className="mt-12 text-center">
            <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-4">Still Have Questions?</h3>
              <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
                Our soil treatment specialists are here to help. Contact us for personalized advice and a free property assessment.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="/contact" 
                  className="bg-white text-blue-600 hover:bg-gray-100 font-bold py-3 px-8 rounded-full transition-colors shadow-lg"
                >
                  Get Free Assessment
                </a>
                <a 
                  href="tel:+61434300216" 
                  className="border-2 border-white text-white hover:bg-white/10 font-bold py-3 px-8 rounded-full transition-colors"
                >
                  Call +61 434 300 216
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

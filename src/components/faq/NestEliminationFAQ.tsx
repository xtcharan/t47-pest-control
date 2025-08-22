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

export default function NestEliminationFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqItems = [
    {
      question: "How much does termite nest elimination cost in Australia?",
      answer: "Many homeowners want to know the average price of nest elimination services in Melbourne and other cities. Costs usually depend on nest size, location accessibility, and treatment complexity. Generally, nest elimination ranges from $800-$2,500 per treatment. While this may seem like a significant investment, it's minimal compared to the potential cost of ongoing termite damage, which can reach tens of thousands of dollars."
    },
    {
      question: "How long does it take to completely eliminate a termite nest?",
      answer: "This is one of the most common questions people search for in Australia. Complete nest elimination typically takes 1-3 weeks depending on colony size and treatment method used. Our technicians ensure all colony members including the queen are eliminated before considering the treatment complete, providing guaranteed results."
    },
    {
      question: "Will eliminating one nest prevent future termite problems?",
      answer: "Australians frequently ask whether nest elimination provides long-term protection. While eliminating active nests removes immediate threats, termites can establish new colonies from neighboring areas. Our comprehensive approach includes nest elimination plus prevention measures to protect against future infestations and provide ongoing monitoring."
    },
    {
      question: "Is nest elimination safe for my property and family?",
      answer: "A big concern for property owners is safety during nest elimination procedures. Professional nest elimination uses targeted treatments that focus on the colony while minimizing impact on your property and family. Our technicians use precise application methods and follow strict safety protocols to ensure effective treatment with minimal disruption."
    },
    {
      question: "Can I eliminate termite nests myself, or do I need a professional?",
      answer: "Many Australians search whether DIY nest elimination is effective or if professional service is necessary. The truth is, professional elimination is essential because it requires specialized equipment, expert knowledge of termite behavior, and comprehensive treatment strategies. Professional service ensures complete colony destruction, safety compliance, and guaranteed results that DIY methods cannot achieve."
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
              Termite Nest <span className="text-blue-600">Elimination</span> Questions
            </h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto mb-6"></div>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Get answers to common questions about our termite nest elimination services and how we completely remove termite colonies.
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
                Our nest elimination specialists are here to help. Contact us for personalized advice and a free property assessment.
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

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

export default function TermiteDustingFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqItems = [
    {
      question: "Is termite dusting enough on its own?",
      answer: "Generally no. It's designed to suppress active termites quickly but usually needs baiting or a chemical soil treatment to achieve elimination or long‑term prevention."
    },
    {
      question: "Does dusting kill the Queen?",
      answer: "Not reliably as a stand‑alone. Non‑repellent dusts spread within workings but a predictable Queen/colony kill is better achieved with a baiting program."
    },
    {
      question: "Is dusting safe inside homes?",
      answer: "We use professional products and targeted application according to Australian standards and product labels to minimise exposure and maximise efficacy."
    },
    {
      question: "Dusting or foaming—how do you choose?",
      answer: "Dusting suits dry, accessible galleries; foaming excels in damp or tight voids. Both are tactical steps ahead of a long‑term management system."
    },
    {
      question: "How soon will termite activity drop?",
      answer: "Often within days to weeks at the treated strike points, followed by installation of baiting or soil treatment for lasting protection."
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
              Termite <span className="text-blue-600">Dusting</span> Questions
            </h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto mb-6"></div>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Get answers to common questions about our termite dusting treatments and how they work as part of a comprehensive management system.
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
                Our termite dusting specialists are here to help. Contact us for personalized advice and a free assessment with same‑week inspection in Melbourne.
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

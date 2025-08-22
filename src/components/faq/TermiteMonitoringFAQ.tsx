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

export default function TermiteMonitoringFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqItems = [
    {
      question: "How much does a termite monitoring system cost in Australia?",
      answer: "Many homeowners want to know the average price of installing termite monitors in Melbourne and other cities. Costs usually depend on property size, number of stations required, and ongoing servicing. Generally, installation costs range from $800-$2,500, with annual monitoring fees of $300-$800. While this may seem like a significant investment, it's minimal compared to the potential cost of termite damage, which can reach tens of thousands of dollars."
    },
    {
      question: "Are termite monitoring systems better than chemical barriers?",
      answer: "This is one of the most common comparisons people search for in Australia. Both systems have their pros and cons, and many homeowners want to know which provides the best long-term protection. Monitoring systems offer early detection and targeted treatment, while chemical barriers provide immediate protection. Many experts recommend a combination approach for maximum protection, especially in high-risk areas."
    },
    {
      question: "How often should termite monitoring stations be checked?",
      answer: "Australians frequently ask about maintenance schedules. The standard servicing interval is every 10–12 weeks, ensuring any termite activity is detected early. Regular inspections are crucial because termites can establish colonies quickly, and early detection dramatically reduces potential damage and treatment costs."
    },
    {
      question: "Do termite monitoring systems really eliminate termite colonies?",
      answer: "A big concern for property owners is whether monitors just detect termites or if they actually kill the colony. The answer is that when bait is added, the system can wipe out the entire nest. The monitoring stations detect termite activity, and once confirmed, highly effective baits are introduced that termites carry back to the colony, eliminating the entire population including the queen."
    },
    {
      question: "Can I install termite monitoring stations myself, or do I need a professional?",
      answer: "Many Australians search whether DIY termite monitors are effective or if professional installation is necessary. The truth is, professional systems are more reliable because technicians know where to place and how to manage them for maximum effectiveness. Professional installation ensures proper placement, regular monitoring, and immediate response when activity is detected, providing far superior protection than DIY alternatives."
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
              Termite <span className="text-blue-600">Monitoring</span> Questions
            </h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto mb-6"></div>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Get answers to common questions about our advanced termite monitoring systems and how they protect your property.
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
                Our termite monitoring specialists are here to help. Contact us for personalized advice and a free property assessment.
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

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
        className="w-full text-left py-6 px-6 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-inset"
        onClick={toggleOpen}
      >
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-4">
            <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold ${isOpen ? 'bg-purple-600 text-white' : 'bg-gray-200 text-gray-600'}`}>
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

export default function TermiteBaitingFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqItems = [
    {
      question: "What is a termite baiting system?",
      answer: "A network of stations with cellulose bait and a slow‑acting active. Termites feed at stations and share the active throughout the colony until it collapses."
    },
    {
      question: "Is termite baiting effective?",
      answer: "Yes. It is our preferred method for predictable colony elimination in Victoria because progress is directly observable and documented."
    },
    {
      question: "Is termite baiting safe for pets and families?",
      answer: "Stations are secured and placed professionally to minimise access. Follow technician guidance for placement and site‑specific precautions."
    },
    {
      question: "Can termites return after baiting?",
      answer: "The treated colony is eliminated, but new colonies can establish in the future. Maintain monitoring or consider a soil treated zone for ongoing protection."
    },
    {
      question: "Are baiting stations obvious around the home?",
      answer: "External stations are low‑profile at ground level. Internal placements are discreet and temporary, removed after elimination."
    },
    {
      question: "How long does it take?",
      answer: "Most projects complete in 5–8 months; some faster, some slower, depending on species, colony size, and season."
    },
    {
      question: "Do inspections still matter?",
      answer: "Yes. Routine inspections confirm protection, catch new risks (moisture, landscaping changes), and keep the system effective."
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <span className="inline-block px-3 py-1 bg-purple-100 text-purple-700 text-sm font-semibold rounded-full mb-3">
              FREQUENTLY ASKED QUESTIONS
            </span>
            <h2 className="text-4xl font-bold mb-4 text-gray-900">
              Termite <span className="text-purple-600">Baiting</span> Questions
            </h2>
            <div className="w-24 h-1 bg-purple-600 mx-auto mb-6"></div>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Get answers to common questions about our termite baiting systems and how they eliminate entire termite colonies.
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
            <div className="bg-gradient-to-r from-purple-600 to-purple-700 rounded-xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-4">Still Have Questions?</h3>
              <p className="text-purple-100 mb-6 max-w-2xl mx-auto">
                Our termite baiting specialists are here to help. Contact us for personalized advice and a free property assessment.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="bg-white text-purple-600 hover:bg-gray-100 font-bold py-3 px-8 rounded-full transition-colors shadow-lg"
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

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
      question: "Will a soil treatment kill the nest?",
      answer: "No. It blocks concealed soil entry to the treated structure. Off‑site nests may persist unless directly targeted or eliminated via baiting."
    },
    {
      question: "Can termites still get in after treatment?",
      answer: "They can sometimes bridge the zone using soil build‑up, garden timbers, or services. Regular inspections identify and correct these risks early."
    },
    {
      question: "Is a partial treated zone better than nothing?",
      answer: "We don't recommend partial barriers. Any gap can be exploited and creates false reassurance. If continuity isn't achievable, consider a monitoring/baiting system."
    },
    {
      question: "Which is better, repellent or non‑repellent?",
      answer: "It depends on construction, soil moisture, durability goals, environmental sensitivities, and budget. We'll recommend the best fit for the site."
    },
    {
      question: "How long does a soil treatment last?",
      answer: "Service life depends on product, soil type, moisture, and application quality. Repellents like bifenthrin are known for longevity; non‑repellents vary by label and conditions."
    },
    {
      question: "What's the difference between a barrier and treated zone?",
      answer: "Historically, repellent chemicals created an invisible 'barrier' that termites avoided. Modern non‑repellent products create a 'treated zone' termites can enter without detecting—becoming affected and transferring the active to nestmates."
    },
    {
      question: "How do you ensure the treated zone is continuous?",
      answer: "We map construction details, footings/slab interfaces, soil type, moisture, and services to design a continuous treated zone. High‑volume application ensures saturation and continuity, integrating with footings and slab edges."
    },
    {
      question: "What precautions should I take during and after treatment?",
      answer: "Advise us of pets, allergies, or sensitivities. Keep pets secured during application. Avoid contact with treated soil until dry. Follow technician advice on landscaping levels, weep holes, and timber‑to‑ground separation."
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
              Get answers to common questions about chemical soil treatments, continuous treated zones, and termite protection in Melbourne and Victoria.
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

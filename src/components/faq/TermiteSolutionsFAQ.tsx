"use client";

import { useState } from 'react';

export default function TermiteSolutionsFAQ() {
  const [openItems, setOpenItems] = useState<number[]>([]);

  const toggleItem = (index: number) => {
    setOpenItems(prev => 
      prev.includes(index) 
        ? prev.filter(item => item !== index)
        : [...prev, index]
    );
  };

  const faqItems = [
    {
      question: "How often should I have my property inspected for termites?",
      answer: "Australian standards recommend annual termite inspections for most properties. However, high-risk areas or properties with previous termite activity may require more frequent inspections every 6 months. Pre-purchase inspections are essential when buying property."
    },
    {
      question: "What's the difference between termite inspection and termite treatment?",
      answer: "Termite inspection is a comprehensive assessment to detect current or potential termite activity using specialized equipment. Treatment involves actively eliminating existing termite colonies and may include baiting systems, liquid treatments, or fumigation depending on the infestation severity."
    },
    {
      question: "How long do termite prevention barriers last?",
      answer: "Chemical barriers typically last 8-10 years, while physical barriers can provide lifetime protection. Our advanced prevention systems come with warranties up to 25 years, depending on the system installed and property conditions."
    },
    {
      question: "Are termite treatments safe for my family and pets?",
      answer: "Yes, we use eco-friendly, low-toxicity treatments that are safe when applied by certified professionals. We follow strict safety protocols and can provide pet and family-safe treatment options. All treatments comply with Australian safety standards."
    },
    {
      question: "What should I do if I find termites in my home?",
      answer: "Don't disturb the termites or attempt DIY treatments, as this can cause them to relocate and make professional treatment more difficult. Contact us immediately for an emergency inspection. We provide same-day service for active termite situations."
    },
    {
      question: "Does insurance cover termite damage?",
      answer: "Most standard home insurance policies do not cover termite damage, as it's considered preventable with proper maintenance. However, some policies may cover sudden and accidental damage. This is why prevention and regular inspections are crucial."
    },
    {
      question: "How much does termite damage repair cost?",
      answer: "Repair costs vary significantly depending on the extent of damage, from hundreds to tens of thousands of dollars. Structural damage to load-bearing timbers is most expensive. Early detection through regular inspections can prevent costly repairs."
    },
    {
      question: "Can I prevent termites myself?",
      answer: "While you can reduce risk factors like moisture and wood-to-ground contact, professional prevention systems are essential for comprehensive protection. DIY treatments are often ineffective and may void professional warranties."
    },
    {
      question: "What's included in a pre-purchase termite inspection?",
      answer: "Our pre-purchase inspection includes visual assessment of accessible areas, moisture detection, timber probing, identification of conducive conditions, detailed report with photos, and recommendations for treatment or further investigation if needed."
    },
    {
      question: "How quickly can you respond to a termite emergency?",
      answer: "We provide same-day emergency response for active termite situations across Victoria. Our certified technicians are available 7 days a week and can typically arrive within 2-4 hours of your call during business hours."
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <span className="inline-block px-3 py-1 bg-orange-100 text-orange-700 text-sm font-semibold rounded-full mb-3">
            FREQUENTLY ASKED QUESTIONS
          </span>
          <h2 className="text-4xl font-bold mb-4 text-gray-900">
            Termite Solutions <span className="text-orange-600">Questions & Answers</span>
          </h2>
          <div className="w-24 h-1 bg-orange-600 mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-3xl mx-auto text-lg">
            Get answers to common questions about termite inspection, treatment, prevention, and protection for your property.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="space-y-4">
            {faqItems.map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden transition-all duration-300 hover:shadow-md"
              >
                <button
                  onClick={() => toggleItem(index)}
                  className="w-full px-6 py-5 text-left flex justify-between items-center hover:bg-gray-50 transition-colors"
                >
                  <h3 className="text-lg font-semibold text-gray-900 pr-4">
                    {item.question}
                  </h3>
                  <div className={`flex-shrink-0 w-6 h-6 flex items-center justify-center transition-transform duration-300 ${
                    openItems.includes(index) ? 'rotate-180' : ''
                  }`}>
                    <svg className="w-4 h-4 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </button>
                
                <div className={`transition-all duration-300 ease-in-out ${
                  openItems.includes(index) 
                    ? 'max-h-96 opacity-100' 
                    : 'max-h-0 opacity-0'
                } overflow-hidden`}>
                  <div className="px-6 pb-5">
                    <div className="w-full h-px bg-gray-200 mb-4"></div>
                    <p className="text-gray-600 leading-relaxed">
                      {item.answer}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Additional help section */}
        <div className="mt-12 text-center">
          <div className="bg-white p-6 rounded-xl shadow-md max-w-2xl mx-auto border border-gray-100">
            <h3 className="text-xl font-semibold mb-3">Have more questions about termite protection?</h3>
            <p className="text-gray-600 mb-4">Our certified termite specialists are ready to answer any other questions you might have about protecting your property from termite damage.</p>
            <a href="/contact" className="inline-flex items-center bg-orange-600 hover:bg-orange-700 text-white font-bold py-3 px-6 rounded-full transition-colors">
              Get Free Inspection
              <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

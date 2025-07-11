"use client";

import { useState } from 'react';

export default function CommercialControlFAQ() {
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
      question: "What makes commercial pest control different from residential?",
      answer: "Commercial pest control requires specialized knowledge of industry regulations, compliance standards, and business-specific pest challenges. We provide discreet service, detailed documentation, flexible scheduling, and treatments tailored to your industry's unique requirements."
    },
    {
      question: "How often should commercial pest control services be performed?",
      answer: "Service frequency depends on your industry, facility type, and risk factors. Most businesses benefit from monthly or quarterly services, while high-risk facilities like restaurants or healthcare may require more frequent visits. We'll create a customized schedule based on your specific needs."
    },
    {
      question: "Do you provide documentation for compliance purposes?",
      answer: "Yes, we provide comprehensive documentation including service reports, treatment records, pest monitoring logs, and compliance certificates. Our reporting meets the requirements for health department inspections, audits, and industry certifications."
    },
    {
      question: "Can you work around our business hours?",
      answer: "Absolutely. We understand that business operations can't be disrupted. We offer flexible scheduling including after-hours, early morning, weekend, and holiday service options to minimize impact on your operations and customers."
    },
    {
      question: "What industries do you specialize in?",
      answer: "We serve all commercial sectors including restaurants, hotels, offices, schools, hospitals, warehouses, retail stores, food processing facilities, childcare centers, elderly care facilities, gyms, and IT centers. Each industry receives specialized treatment protocols."
    },
    {
      question: "How do you ensure treatments are safe for employees and customers?",
      answer: "We use integrated pest management (IPM) approaches that prioritize non-chemical methods first. When treatments are necessary, we use the safest, most targeted products available and follow strict application protocols to ensure the safety of all occupants."
    },
    {
      question: "What happens if pests return between scheduled services?",
      answer: "Our commercial contracts include callback services at no additional charge. If pest activity returns between scheduled visits, we'll respond promptly to address the issue and adjust our treatment plan as needed to prevent future occurrences."
    },
    {
      question: "Do you offer emergency pest control services?",
      answer: "Yes, we provide 24/7 emergency pest control services for urgent situations that could impact your business operations, health department inspections, or customer safety. Emergency response is available for all our commercial clients."
    },
    {
      question: "How do you handle pest control in food service establishments?",
      answer: "We follow strict HACCP protocols and food safety guidelines. Our treatments are designed to eliminate pests while maintaining food safety standards. We work closely with management to ensure all procedures meet health department requirements and industry best practices."
    },
    {
      question: "What's included in a commercial pest control assessment?",
      answer: "Our comprehensive assessment includes facility inspection, pest identification, risk factor analysis, entry point evaluation, sanitation review, regulatory compliance check, and development of a customized integrated pest management plan specific to your business needs."
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <span className="inline-block px-3 py-1 bg-blue-100 text-blue-700 text-sm font-semibold rounded-full mb-3">
            FREQUENTLY ASKED QUESTIONS
          </span>
          <h2 className="text-4xl font-bold mb-4 text-gray-900">
            Commercial Pest Control <span className="text-blue-600">Questions & Answers</span>
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-3xl mx-auto text-lg">
            Get answers to common questions about our commercial pest control services and how we can protect your business.
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
                    <svg className="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
            <h3 className="text-xl font-semibold mb-3">Have more questions about commercial pest control?</h3>
            <p className="text-gray-600 mb-4">Our commercial pest control specialists are ready to answer any other questions you might have about protecting your business.</p>
            <a href="/contact" className="inline-flex items-center bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-full transition-colors">
              Schedule a Consultation
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

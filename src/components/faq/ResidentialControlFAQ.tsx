"use client";

import { useState } from 'react';

export default function ResidentialControlFAQ() {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  const faqs = [
    {
      question: "How often should I have my home treated for pests?",
      answer: "For most homes, we recommend quarterly treatments to maintain optimal protection. However, the frequency may vary based on your location, pest pressure, and specific needs. Our technicians will assess your property and recommend the best schedule for your situation."
    },
    {
      question: "Are your treatments safe for children and pets?",
      answer: "Absolutely. We use eco-friendly, family-safe products that are highly effective against pests but safe for your loved ones. Our technicians are trained in the latest application methods to minimize exposure while maximizing effectiveness."
    },
    {
      question: "What should I do to prepare for a pest control treatment?",
      answer: "Preparation is minimal. We recommend clearing areas where treatment will occur, storing food in sealed containers, and ensuring access to treatment areas. Our team will provide specific instructions based on your service type when scheduling."
    },
    {
      question: "How long does a typical residential pest control treatment take?",
      answer: "Most residential treatments take 30-60 minutes, depending on the size of your property and the type of service. Our technicians work efficiently while ensuring thorough coverage of all necessary areas."
    },
    {
      question: "What happens if pests return after treatment?",
      answer: "We stand behind our work with a satisfaction guarantee. If pests return between scheduled services, we'll come back at no additional charge to re-treat the affected areas. Your satisfaction is our priority."
    },
    {
      question: "Do you offer emergency pest control services?",
      answer: "Yes, we provide same-day emergency services for urgent pest situations. Whether it's a wasp nest, rodent infestation, or other immediate threat, our team is ready to respond quickly to protect your family."
    },
    {
      question: "How much does residential pest control cost?",
      answer: "Costs vary based on property size, pest type, and treatment frequency. We offer free inspections and quotes, so you'll know exactly what to expect. We also provide various service packages to fit different budgets and needs."
    },
    {
      question: "Can you treat specific pest problems or do you only offer general treatments?",
      answer: "We offer both targeted treatments for specific pest issues and comprehensive general pest control services. Our technicians can customize treatments based on your exact needs, whether it's ants in the kitchen or termites in the foundation."
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <span className="inline-block px-3 py-1 bg-green-100 text-green-700 text-sm font-semibold rounded-full mb-3">
              FREQUENTLY ASKED QUESTIONS
            </span>
            <h2 className="text-4xl font-bold mb-4 text-gray-900">
              Common Questions About <span className="text-green-dark">Residential Pest Control</span>
            </h2>
            <div className="w-24 h-1 bg-green-dark mx-auto mb-6"></div>
            <p className="text-gray-600 max-w-3xl mx-auto text-lg">
              Get answers to the most common questions about our residential pest control services.
            </p>
          </div>

          {/* FAQ Items */}
          <div className="space-y-4 mb-12">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden"
              >
                <button
                  type="button"
                  className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50 transition-colors"
                  onClick={() => toggleFAQ(index)}
                >
                  <span className="font-semibold text-gray-900 pr-4">
                    {faq.question}
                  </span>
                  <svg
                    className={`w-5 h-5 text-green-dark transition-transform duration-200 flex-shrink-0 ${
                      openFAQ === index ? 'rotate-180' : ''
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>
                {openFAQ === index && (
                  <div className="px-6 pb-4">
                    <p className="text-gray-600 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* CTA Section */}
          <div className="text-center bg-gradient-to-r from-green-light to-green-dark p-8 rounded-2xl text-white">
            <h3 className="text-2xl font-bold mb-4">Still Have Questions?</h3>
            <p className="text-lg mb-6 max-w-2xl mx-auto">
              Our pest control experts are here to help. Contact us for personalized advice and a free consultation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="bg-white text-green-dark hover:bg-gray-100 font-bold py-3 px-8 rounded-full transition-colors text-lg"
              >
                Contact Us
              </a>
              <a
                href="tel:+61434900216"
                className="border-2 border-white text-white hover:bg-white hover:text-green-dark font-bold py-3 px-8 rounded-full transition-colors text-lg"
              >
                Call: +61 434 900 216
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

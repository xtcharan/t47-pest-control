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
  const contentId = `ant-faq-content-${index}`;

  return (
    <div className="mb-4 modern-card overflow-hidden transition-all duration-300 hover:shadow-lg">
      <div
        className={`flex justify-between items-center p-5 cursor-pointer transition-colors duration-300 ${isOpen ? 'bg-green-light/10' : 'bg-white'}`}
        onClick={() => toggleAccordion(index)}
      >
        <div className="flex items-center pr-4">
          <div className="w-8 h-8 rounded-full bg-gradient-to-r from-green-light to-green-dark flex items-center justify-center mr-4 text-white text-sm shadow-sm">
            {index}
          </div>
          <h3 className={`font-medium text-lg transition-colors duration-300 ${isOpen ? 'text-green-dark' : 'text-gray-800'}`}>{question}</h3>
        </div>
        {/* Toggle button with animation */}
        <div
          role="button"
          className={`text-gray-600 focus:outline-none transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
          tabIndex={0}
          aria-label={isOpen ? "Collapse answer" : "Expand answer"}
        >
          <div className={`w-8 h-8 rounded-full flex items-center justify-center transition-colors duration-300 ${isOpen ? 'bg-green-light/20 text-green-dark' : 'bg-gray-100'}`}>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </div>
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

export default function AntControlFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqItems = [
    {
      question: "What types of ants do you treat?",
      answer: "We treat all common ant species found in residential and commercial properties, including carpenter ants, sugar ants, pavement ants, fire ants, pharaoh ants, and odorous house ants. Our technicians are trained to identify different ant species and implement the most effective treatment strategies for each type of infestation."
    },
    {
      question: "How do I know if I have an ant infestation?",
      answer: "Signs of an ant infestation include: visible ant trails in or around your home; small piles of sawdust-like material (frass) near wooden structures, which may indicate carpenter ants; ant nests or mounds in your yard; ants in food storage areas; and small holes or cracks where ants are entering your home. If you notice any of these signs, it's best to contact a professional for an assessment."
    },
    {
      question: "Are your ant treatments safe for children and pets?",
      answer: "Yes, we prioritize the safety of your family and pets. We offer a range of treatment options, including eco-friendly and low-toxicity solutions. Our technicians are trained to apply treatments in a way that minimizes exposure to humans and pets. We'll provide clear instructions on any precautions to take during and after treatment, such as temporary evacuation times and when it's safe to re-enter treated areas."
    },
    {
      question: "How long does it take to eliminate an ant infestation?",
      answer: "The time required to eliminate an ant infestation depends on several factors, including the type of ants, the size of the colony, and the extent of the infestation. Some treatments show results within days, while complete elimination might take 1-2 weeks. For severe infestations or certain species like carpenter ants, multiple treatments may be necessary. Our technicians will provide a timeline based on your specific situation."
    },
    {
      question: "Do you just treat visible ants or the entire colony?",
      answer: "We focus on eliminating the entire colony, not just the visible ants. Treating only visible ants provides temporary relief but doesn't solve the underlying problem. Our treatment methods are designed to reach the queen and the entire colony, ensuring complete elimination of the infestation. We use baits and other products that worker ants carry back to the nest, affecting the entire colony including the queen."
    },
    {
      question: "How can I prevent ants from returning after treatment?",
      answer: "To prevent ants from returning after treatment: keep your home clean, especially kitchen areas; store food in airtight containers; seal cracks and entry points around your home's exterior; trim trees and shrubs away from your home; fix leaky pipes and eliminate moisture problems; and maintain a regular pest control maintenance schedule. We provide detailed prevention advice specific to your property as part of our service."
    },
    {
      question: "Do you offer ongoing ant prevention services?",
      answer: "Yes, we offer ongoing ant prevention services through our regular maintenance programs. These programs include scheduled inspections and preventative treatments to maintain a protective barrier around your home. Regular maintenance is particularly important in areas prone to ant problems or for properties that have experienced infestations in the past. Our maintenance plans can be customized based on your specific needs and the level of protection required."
    },
    {
      question: "What should I do to prepare for an ant treatment service?",
      answer: "Before our ant treatment service: clear clutter from areas where ants have been seen; clean kitchen surfaces and floors to remove food residue; store food in sealed containers; move furniture slightly away from walls if possible; ensure our technicians have access to all areas of concern; and secure pets in a safe area during treatment. Our team will provide specific preparation instructions when you schedule your appointment, as requirements may vary depending on the treatment method being used."
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute -top-20 -left-20 w-64 h-64 bg-green-light/5 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-green-light/5 rounded-full blur-3xl"></div>

      {/* Question mark decorations */}
      <div className="absolute top-20 right-10 text-8xl text-green-light/10 font-serif">?</div>
      <div className="absolute bottom-20 left-10 text-6xl text-green-light/10 font-serif">?</div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <span className="inline-block px-3 py-1 bg-green-light/10 text-green-dark text-sm font-semibold rounded-full mb-3">
            ANT CONTROL FAQ
          </span>
          <h2 className="text-4xl font-bold mb-4 text-gray-900">
            Frequently Asked <span className="text-green-dark">Ant Control Questions</span>
          </h2>
          <div className="w-24 h-1 bg-green-light mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Find answers to common questions about our professional ant control services, treatment methods, and prevention strategies.
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
            <h3 className="text-xl font-semibold mb-3">Have more questions about ant control?</h3>
            <p className="text-gray-600 mb-4">Our ant control specialists are ready to answer any other questions you might have about our services.</p>
            <a href="/contact" className="modern-button bg-gradient-to-r from-green-light to-green-dark text-white transition-colors">
              Schedule a Consultation
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

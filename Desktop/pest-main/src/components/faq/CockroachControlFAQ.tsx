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
  const contentId = `cockroach-faq-content-${index}`;

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

export default function CockroachControlFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqItems = [
    {
      question: "How do I know if I have a cockroach infestation?",
      answer: "Signs of a cockroach infestation include: seeing live or dead cockroaches; cockroach droppings (which look like black pepper or coffee grounds); egg casings (oothecae); a musty, oily odor; smear marks along walls or baseboards; and shed skins. Cockroaches are nocturnal, so seeing them during the day often indicates a severe infestation. If you notice any of these signs, it's best to contact a professional for an assessment."
    },
    {
      question: "What types of cockroaches do you treat?",
      answer: "We treat all common cockroach species found in residential and commercial properties, including German cockroaches, American cockroaches, Oriental cockroaches, Brown-banded cockroaches, Australian cockroaches, and Smoky Brown cockroaches. Our technicians are trained to identify different cockroach species and implement the most effective treatment strategies for each type of infestation."
    },
    {
      question: "Are your cockroach treatments safe for children and pets?",
      answer: "Yes, we prioritize the safety of your family and pets. We offer a range of treatment options, including eco-friendly and low-toxicity solutions. Our technicians are trained to apply treatments in a way that minimizes exposure to humans and pets. We'll provide clear instructions on any precautions to take during and after treatment, such as temporary evacuation times and when it's safe to re-enter treated areas."
    },
    {
      question: "How long does it take to eliminate a cockroach infestation?",
      answer: "The time required to eliminate a cockroach infestation depends on several factors, including the species, the size of the infestation, and the extent of the affected area. Initial treatments typically show significant results within 1-3 days, but complete elimination may take 2-3 weeks, especially for severe infestations. German cockroaches, in particular, may require multiple treatments due to their rapid reproduction rate. Our technicians will provide a timeline based on your specific situation."
    },
    {
      question: "Why do I need professional cockroach control?",
      answer: "Professional cockroach control is necessary because: 1) Cockroaches are resilient and adaptable, making DIY methods often ineffective; 2) Professionals have access to commercial-grade products not available to consumers; 3) Experts can identify the specific species and tailor treatments accordingly; 4) Professionals target hidden harborage areas you might miss; 5) Complete elimination requires addressing the entire life cycle, including eggs; and 6) Professionals can implement preventative measures to ensure cockroaches don't return."
    },
    {
      question: "How can I prevent cockroaches from returning after treatment?",
      answer: "To prevent cockroaches from returning after treatment: keep your home clean, especially kitchen areas; store food in airtight containers; fix leaky pipes and eliminate moisture sources; seal cracks and entry points around your home's exterior; reduce clutter where cockroaches can hide; empty garbage regularly; vacuum frequently, especially in food preparation areas; and maintain a regular pest control maintenance schedule. We provide detailed prevention advice specific to your property as part of our service."
    },
    {
      question: "Do you offer ongoing cockroach prevention services?",
      answer: "Yes, we offer ongoing cockroach prevention services through our regular maintenance programs. These programs include scheduled inspections and preventative treatments to maintain a protective barrier around your home. Regular maintenance is particularly important in multi-unit buildings, properties that have experienced infestations in the past, or areas prone to cockroach problems. Our maintenance plans can be customized based on your specific needs and the level of protection required."
    },
    {
      question: "What should I do to prepare for a cockroach treatment service?",
      answer: "Before our cockroach treatment service: clean kitchen surfaces and floors to remove food residue; store food in sealed containers; clear clutter from floors, countertops, and under sinks; empty kitchen and bathroom cabinets if requested; move furniture slightly away from walls if possible; ensure our technicians have access to all areas of concern; and secure pets in a safe area during treatment. Our team will provide specific preparation instructions when you schedule your appointment, as requirements may vary depending on the treatment method being used."
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
            COCKROACH CONTROL FAQ
          </span>
          <h2 className="text-4xl font-bold mb-4 text-gray-900">
            Frequently Asked <span className="text-green-dark">Cockroach Control Questions</span>
          </h2>
          <div className="w-24 h-1 bg-green-light mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Find answers to common questions about our professional cockroach control services, treatment methods, and prevention strategies.
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
            <h3 className="text-xl font-semibold mb-3">Have more questions about cockroach control?</h3>
            <p className="text-gray-600 mb-4">Our cockroach control specialists are ready to answer any other questions you might have about our services.</p>
            <a href="/contact" className="modern-button bg-gradient-to-r from-green-light to-green-dark text-white transition-colors">
              Schedule a Consultation
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

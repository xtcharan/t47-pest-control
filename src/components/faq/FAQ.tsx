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
  const contentId = `faq-content-${index}`;

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

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqItems = [
    {
      question: "How often should I get pest control services?",
      answer: "Typically, pest control treatments should be administered every three to six months, depending on the severity of infestation and the type of pest problem. Additionally, annual inspections can help prevent a resurgence from happening altogether. Some factors to consider when deciding on the frequency of pest control services include climate, the age of the home, and previous pest infestations. We will assess your home's needs and recommend a schedule accordingly, knowing that regular pest control services can not only save you money in the long run but also prevent potential health risks."
    },
    {
      question: "How long does a pest control treatment last?",
      answer: "The duration of effectiveness for pest control treatments varies depending on the type of pest, the severity of the infestation, and the treatment method used. Generally, most residential treatments remain effective for 2-3 months. However, for severe infestations or certain pests like termites, treatments may last up to a year or more. Regular follow-up treatments are recommended to maintain a pest-free environment and prevent re-infestations."
    },
    {
      question: "Is pest control safe for children and pets?",
      answer: "Yes, our pest control treatments are formulated to be safe for families and pets when used as directed. We use environmentally friendly products and targeted application methods that minimize risk. However, as a precaution, we recommend that children and pets stay away from treated areas until the application has dried completely (typically 2-4 hours). Our technicians will provide specific safety instructions based on the treatment performed."
    },
    {
      question: "Is it necessary for me to leave my house during the treatment?",
      answer: "In most cases, you don't need to leave your home during treatment. Our technicians use targeted application methods and low-toxicity products that are safe when properly applied. However, for certain treatments like fumigation or extensive spraying, temporary evacuation might be necessary. We'll always inform you in advance if you need to make arrangements to be away from your home, and provide clear instructions on when it's safe to return."
    },
    {
      question: "What should I do before and after a pest control service?",
      answer: "Before treatment: Remove pets and cover fish tanks, store food and utensils, clear clutter from areas to be treated, and inform the technician of any specific concerns or health issues. After treatment: Wait for sprayed areas to dry before touching (usually 2-4 hours), ventilate the home by opening windows if advised, clean countertops before food preparation, and observe the pest activity over the next few days. Follow any specific instructions provided by your technician for maximum effectiveness."
    },
    {
      question: "How quickly can I expect to see results?",
      answer: "You may begin to see results within 24-48 hours for most common pests like ants, roaches, and spiders. However, complete elimination, especially for severe infestations or resilient pests like bed bugs or termites, may take 1-3 weeks. Multiple treatments might be necessary for complete control. The timeline varies based on the pest type, infestation severity, and environmental factors. We'll provide you with a more specific timeframe based on your particular situation."
    },
    {
      question: "Do I need to empty my kitchen cabinets before treatment?",
      answer: "For standard pest control treatments, you typically don't need to empty all kitchen cabinets. However, we recommend removing items from under sinks and areas where pests have been specifically observed. For certain infestations like German cockroaches or pantry pests, more extensive preparation may be necessary. Your technician will provide detailed preparation instructions prior to your appointment based on your specific pest issues."
    },
    {
      question: "Can I prevent pests without professional help?",
      answer: "While DIY methods can help manage minor pest issues, they often address only visible pests rather than the source of the infestation. Professional pest control offers comprehensive solutions including proper identification, targeted treatments, preventative measures, and access to commercial-grade products not available to consumers. For serious infestations or persistent problems, professional intervention is usually more effective and economical in the long run."
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute -top-20 -left-20 w-64 h-64 bg-red-light/5 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-green-light/5 rounded-full blur-3xl"></div>

      {/* Question mark decorations */}
      <div className="absolute top-20 right-10 text-8xl text-red-light/10 font-serif">?</div>
      <div className="absolute bottom-20 left-10 text-6xl text-green-light/10 font-serif">?</div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <span className="inline-block px-3 py-1 bg-red-light/10 text-red-dark text-sm font-semibold rounded-full mb-3">
            COMMON QUESTIONS
          </span>
          <h2 className="text-4xl font-bold mb-4 text-gray-900">
            Frequently <span className="text-red-dark">Asked Questions</span>
          </h2>
          <div className="w-24 h-1 bg-red-light mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Find answers to the most common questions about our pest control services, treatments, and safety measures.
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
            <h3 className="text-xl font-semibold mb-3">Still have questions?</h3>
            <p className="text-gray-600 mb-4">Our team is ready to answer any other questions you might have about our pest control services.</p>
            <button type="button" className="modern-button bg-gradient-to-r from-green-light to-green-dark text-white transition-colors">
              Contact Our Support Team
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

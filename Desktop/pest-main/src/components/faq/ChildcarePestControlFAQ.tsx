"use client";

import { useState } from 'react';

interface FAQItemProps {
  question: string;
  answer: string;
  isOpen: boolean;
  toggleAccordion: () => void;
  index: number;
}

const FAQItem = ({ question, answer, isOpen, toggleAccordion, index }: FAQItemProps) => {
  return (
    <div className="mb-3">
      <button
        type="button"
        className={`flex justify-between items-center w-full py-5 px-5 text-left rounded-lg shadow-sm transition-all duration-300 ${
          isOpen ? 'bg-pink-50 shadow-md' : 'bg-gray-50 hover:bg-gray-100'
        }`}
        onClick={toggleAccordion}
      >
        <div className="flex items-center gap-4">
          <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
            isOpen
              ? 'bg-pink-600 text-white'
              : 'bg-gray-200 text-gray-700'
          } transition-all duration-300`}>
            <span className="font-semibold">{index + 1}</span>
          </div>
          <span className={`text-lg font-medium ${isOpen ? 'text-pink-600' : 'text-gray-900'}`}>{question}</span>
        </div>
        <svg
          className={`w-6 h-6 text-pink-600 transform transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ${
          isOpen ? 'max-h-[1000px] opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="p-5 text-gray-600 bg-white border border-gray-100 rounded-b-lg">
          <p>{answer}</p>
        </div>
      </div>
    </div>
  );
};

export default function ChildcarePestControlFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqItems = [
    {
      question: "Are the pest control products you use safe for children?",
      answer: "Yes, we use only child-safe products specifically formulated for use in childcare environments. Our approach prioritizes non-chemical control methods first, using physical barriers, habitat modification, and exclusion techniques whenever possible. When treatments are necessary, we select the least toxic effective options and apply them using precise targeting methods that minimize exposure. All products are EPA-approved for use around children and applied according to strict safety guidelines. Treatments are scheduled during non-operational hours with appropriate re-entry intervals to ensure zero exposure to children."
    },
    {
      question: "How do you schedule pest control services to avoid disrupting childcare operations?",
      answer: "We understand the importance of uninterrupted childcare services. Our technicians work exclusively after hours, during weekends, or scheduled closures to ensure pest control activities never interfere with your daily operations. We coordinate closely with facility directors to identify the best treatment windows, such as after closing time, during weekend breaks, or holiday closures. For more extensive treatments, we can work with you to plan services during longer breaks. We provide clear documentation of all treatments, including re-entry times and any special instructions, to ensure complete safety when children return."
    },
    {
      question: "How can our childcare facility prevent pest problems between professional treatments?",
      answer: "Childcare facilities can implement several key practices to prevent pest problems between professional treatments: 1) Maintain rigorous cleaning protocols, especially in food preparation, dining, and diaper changing areas; 2) Promptly clean up food spills and crumbs; 3) Store food in airtight containers; 4) Ensure proper waste management with frequent removal and sealed containers; 5) Reduce clutter in classrooms and storage areas; 6) Regularly inspect outdoor play equipment and areas for pest activity; 7) Implement proper storage practices for nap mats, toys, and other items; and 8) Report maintenance issues like leaky pipes or cracks in walls promptly. We provide staff training and educational resources to support these preventative efforts."
    },
    {
      question: "How do your pest control services help childcare facilities maintain regulatory compliance?",
      answer: "Our childcare pest control services are designed to help you meet and exceed regulatory requirements from childcare licensing agencies and health departments. We provide comprehensive documentation including detailed service reports, monitoring logs, and treatment records that demonstrate your proactive pest management program. Our technicians are trained in childcare regulations and can help identify potential compliance issues before they become problems. We also offer pre-inspection walkthroughs to ensure your facility is prepared for regulatory visits, and can provide specialized reports for licensing renewals and other regulatory requirements."
    },
    {
      question: "What are the most common pests found in childcare facilities?",
      answer: "The most common pests found in childcare facilities include cockroaches, rodents (mice and rats), ants, flies, and occasionally bed bugs. Each presents unique challenges in childcare environments: cockroaches can trigger asthma and allergies in children; rodents can spread diseases and damage property; ants invade food storage and preparation areas; flies contaminate surfaces in dining and diaper changing areas; and bed bugs can be inadvertently brought in by children or staff. Our childcare pest control programs target all these common pests with integrated approaches that combine monitoring, sanitation recommendations, exclusion methods, and targeted treatments to provide comprehensive protection for your facility."
    },
    {
      question: "How quickly can you respond to pest emergencies in childcare facilities?",
      answer: "We understand that pest issues in childcare settings require immediate attention. We offer emergency response services for childcare facilities with same-day or next-day appointments depending on the severity and nature of the issue. Our childcare clients receive priority scheduling, and we maintain dedicated technicians trained specifically for childcare environments who can respond quickly. For critical situations, we have after-hours emergency response teams available. We also provide guidance on immediate containment measures that childcare staff can implement until our technicians arrive, helping to minimize the impact of the pest issue on your operations."
    },
    {
      question: "Do you provide any educational resources for childcare staff about pest prevention?",
      answer: "Yes, we offer comprehensive educational resources for childcare staff as part of our service. This includes training sessions on pest identification, prevention practices, and proper reporting procedures. We provide illustrated guides specifically designed for childcare environments that help staff recognize early signs of pest activity. We also offer age-appropriate educational materials about beneficial insects and pest prevention that can be incorporated into children's learning activities. Our goal is to empower your staff with the knowledge and tools they need to be active partners in maintaining a pest-free environment for the children in your care."
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <span className="inline-block px-3 py-1 bg-pink-100 text-pink-700 text-sm font-semibold rounded-full mb-3">
            CHILDCARE PEST CONTROL FAQ
          </span>
          <h2 className="text-4xl font-bold mb-4 text-gray-900">
            Frequently Asked <span className="text-pink-600">Questions</span>
          </h2>
          <div className="w-24 h-1 bg-pink-600 mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Find answers to common questions about our professional pest control services for childcare centers and daycare facilities.
          </p>
        </div>

        <div className="max-w-3xl mx-auto px-4">
          {faqItems.map((item, index) => (
            <FAQItem
              key={index}
              question={item.question}
              answer={item.answer}
              isOpen={openIndex === index}
              toggleAccordion={() => toggleAccordion(index)}
              index={index}
            />
          ))}
        </div>

        {/* Additional help section */}
        <div className="mt-12 text-center">
          <div className="bg-white p-6 rounded-xl shadow-md max-w-2xl mx-auto border border-gray-100">
            <h3 className="text-xl font-semibold mb-3">Have more questions about childcare pest control?</h3>
            <p className="text-gray-600 mb-4">Our childcare pest control specialists are ready to answer any other questions you might have about our services for daycare centers and childcare facilities.</p>
            <a href="/contact" className="modern-button bg-pink-600 hover:bg-pink-700 text-white transition-colors">
              Schedule a Consultation
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

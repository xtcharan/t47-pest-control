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
  const contentId = `termite-inspection-faq-content-${index}`;

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
          aria-expanded={isOpen}
          aria-controls={contentId}
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
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

export default function TermiteInspectionFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqItems = [
    {
      question: "How often should I have my property inspected for termites?",
      answer: "Australian Standard AS3660.2 recommends annual termite inspections for all properties, regardless of whether you have a termite management system in place. In high-risk areas or properties with previous termite activity, inspections every 6-9 months may be advisable. Regular inspections are crucial because: 1) Termites can cause significant damage in just 3-6 months; 2) Early detection dramatically reduces repair costs; 3) Most insurance policies don't cover termite damage; and 4) Inspections help identify and address conducive conditions before termites establish. We provide detailed inspection reports and recommendations after each visit."
    },
    {
      question: "What's involved in a professional termite inspection?",
      answer: "A professional termite inspection includes a thorough examination of all accessible areas of your property, including the building interior, roof void, subfloor (if applicable), and external perimeter. Our inspectors use specialized equipment including thermal imaging cameras, moisture meters, and acoustic detection devices to identify termite activity, damage, and conducive conditions. We check for live termites, mud tubes, damaged timber, and conditions that attract termites such as excess moisture and wood-to-soil contact. Following the inspection, we provide a detailed report with photographs documenting our findings and specific recommendations."
    },
    {
      question: "How long does a termite inspection take?",
      answer: "The duration of a termite inspection depends on several factors including the size and complexity of your property, accessibility of different areas, and whether any termite activity is found. For an average-sized home, a thorough inspection typically takes 1-2 hours. Larger properties, those with extensive gardens, or properties with limited access to certain areas may take longer. If active termites are found, additional time may be needed to determine the extent of the infestation. We never rush our inspections as thoroughness is essential for accurate assessment and recommendations."
    },
    {
      question: "What's the difference between a termite inspection and a general pest inspection?",
      answer: "While there is some overlap, a termite inspection specifically focuses on identifying termite activity, damage, and conditions conducive to termite infestation. It involves specialized techniques and equipment such as thermal imaging cameras, moisture meters, and acoustic detection devices designed to detect hidden termite activity. A general pest inspection covers a broader range of common household pests including rodents, cockroaches, ants, and spiders, but may not include the specialized termite detection methods. For comprehensive protection, we recommend both inspections, which can often be conducted simultaneously for convenience and cost savings."
    },
    {
      question: "Do I need to prepare my home before a termite inspection?",
      answer: "To ensure a thorough inspection, we recommend: 1) Providing clear access to all areas including the perimeter of your home, subfloor, roof void, and built-in cupboards; 2) Moving stored items away from walls in garages, storage rooms, and cupboards; 3) Ensuring that inspection points such as subfloor access hatches are accessible; 4) Trimming back vegetation that may obstruct access to external walls; 5) Securing pets during the inspection; and 6) Having information ready about any previous termite activity or treatments. Our inspector will advise if any specific preparations are needed when scheduling your appointment."
    },
    {
      question: "What happens if termites are found during the inspection?",
      answer: "If termites are found during the inspection, our technician will: 1) Document the location and extent of the infestation with photographs; 2) Identify the termite species involved; 3) Assess the damage and determine if the colony is active; 4) Provide immediate advice on containment measures if necessary; 5) Include detailed findings in your inspection report; and 6) Recommend appropriate treatment options based on the specific situation. We'll explain the various treatment methods available, their effectiveness, costs, and timelines, allowing you to make an informed decision about how to proceed. We can often schedule treatment promptly if immediate action is required."
    },
    {
      question: "Does my home insurance cover termite damage?",
      answer: "Most standard home insurance policies in Australia do not cover damage caused by termites or other wood-destroying organisms. Insurers typically classify termite damage as preventable through regular maintenance and inspections, rather than as a sudden or accidental event. This is why regular professional termite inspections are so important—they're your financial protection against potentially costly termite damage. Some specialized insurance policies may offer limited coverage for termite damage, but these are uncommon and often have significant limitations. We recommend checking your specific policy details and considering regular inspections as your best protection."
    },
    {
      question: "How can I prevent termites between inspections?",
      answer: "Between professional inspections, you can reduce termite risk by: 1) Eliminating wood-to-soil contact around your home; 2) Keeping mulch, woodpiles, and garden beds at least 30cm away from foundations; 3) Ensuring proper drainage around your property to prevent moisture accumulation; 4) Fixing leaking taps, pipes, air conditioning units, and blocked gutters promptly; 5) Maintaining adequate ventilation in subfloor areas; 6) Regularly inspecting the visible perimeter of your home for mud tubes or termite activity; 7) Removing tree stumps and dead trees near your home; and 8) Considering using termite-resistant materials for any renovations. These preventative measures significantly reduce your property's attractiveness to termites."
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute -top-20 -left-20 w-64 h-64 bg-green-500/5 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-green-500/5 rounded-full blur-3xl"></div>

      {/* Question mark decorations */}
      <div className="absolute top-20 right-10 text-8xl text-green-500/10 font-serif">?</div>
      <div className="absolute bottom-20 left-10 text-6xl text-green-500/10 font-serif">?</div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <span className="inline-block px-3 py-1 bg-green-light/10 text-green-dark text-sm font-semibold rounded-full mb-3">
            TERMITE INSPECTION FAQ
          </span>
          <h2 className="text-4xl font-bold mb-4 text-gray-900">
            Frequently Asked <span className="text-green-dark">Inspection Questions</span>
          </h2>
          <div className="w-24 h-1 bg-green-light mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Find answers to common questions about our professional termite inspection services, process, and what to expect.
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
            <h3 className="text-xl font-semibold mb-3">Have more questions about termite inspections?</h3>
            <p className="text-gray-600 mb-4">Our termite specialists are ready to answer any other questions you might have about our inspection services.</p>
            <a href="/contact" className="modern-button bg-gradient-to-r from-green-light to-green-dark text-white transition-colors">
              Schedule a Consultation
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

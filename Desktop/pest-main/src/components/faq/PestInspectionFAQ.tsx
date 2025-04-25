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
  const contentId = `inspection-faq-content-${index}`;

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

export default function PestInspectionFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqItems = [
    {
      question: "What is included in a professional pest inspection?",
      answer: "Our professional pest inspections include a thorough examination of your property's interior and exterior, focusing on areas where pests commonly hide or enter. We check for active infestations, signs of past pest activity, potential entry points, conducive conditions, and structural vulnerabilities. The inspection covers all accessible areas including attics, basements, crawl spaces, kitchens, bathrooms, and perimeter areas. After the inspection, you'll receive a detailed report of our findings along with recommended treatment options if necessary."
    },
    {
      question: "How long does a pest inspection take?",
      answer: "A typical pest inspection takes approximately 1-2 hours for an average-sized home. However, the duration can vary depending on the size of the property, its accessibility, the complexity of the structure, and the extent of any pest issues discovered. Larger properties or those with extensive pest problems may require more time. Commercial property inspections may take longer depending on the size and type of facility. We always take the necessary time to ensure a thorough and comprehensive inspection."
    },
    {
      question: "How often should I have a pest inspection?",
      answer: "We recommend having a professional pest inspection at least once a year as a preventative measure, even if you don't notice any signs of pests. For properties in high-risk areas (near wooded areas, water sources, or with previous infestations), more frequent inspections every 6 months may be advisable. Additionally, it's wise to schedule an inspection before buying or selling a property, after severe weather events that might damage your home, or if you notice any signs of pest activity such as droppings, unusual odors, or structural damage."
    },
    {
      question: "Do I need to prepare my home before a pest inspection?",
      answer: "To ensure a thorough inspection, we recommend some basic preparation: ensure access to all areas of your home including attics, crawl spaces, and storage areas; move stored items away from walls where possible; clear clutter that might obstruct inspection of baseboards and corners; and secure pets in a safe area. You don't need to clean extensively—in fact, some pest evidence might be inadvertently removed with aggressive cleaning. Our inspectors are looking for signs that might indicate pest problems, so maintaining your home in its normal state is often best."
    },
    {
      question: "What's the difference between a pest inspection and a termite inspection?",
      answer: "While there is some overlap, a general pest inspection focuses on identifying a wide range of common household pests such as rodents, cockroaches, ants, spiders, and bed bugs. A termite inspection specifically targets termites and other wood-destroying organisms, using specialized tools like moisture meters, infrared cameras, and sounding techniques to detect hidden termite activity within structures. Our comprehensive pest inspections include checking for termites, but if you're specifically concerned about termites or need a termite clearance report for real estate purposes, we recommend our specialized termite inspection service."
    },
    {
      question: "Will the inspector provide treatment during the inspection?",
      answer: "Typically, our inspectors focus solely on assessment during the inspection visit and don't provide treatment at that time. This allows us to thoroughly evaluate the situation, identify all pest issues, and develop a comprehensive treatment plan tailored to your specific needs. After the inspection, we'll provide a detailed report with our findings and treatment recommendations. If immediate treatment is necessary for severe infestations, we can often schedule it promptly, sometimes even the same day or the following day, depending on our availability and the urgency of the situation."
    },
    {
      question: "What information is included in the pest inspection report?",
      answer: "Our detailed pest inspection reports include: identification of any pest species found on the property; locations and extent of infestations; assessment of damage caused by pests; identification of conditions that may attract pests or allow them entry; photographic documentation of findings; recommendations for treatment options; preventative measures to reduce future pest problems; and cost estimates for recommended services. The report is typically delivered within 24-48 hours after the inspection and can be provided in digital format, hard copy, or both, according to your preference."
    },
    {
      question: "Are your pest inspections covered by insurance or guarantees?",
      answer: "Yes, all our pest inspection services are fully insured, and we stand behind our work with a satisfaction guarantee. If you're not satisfied with the thoroughness of our inspection, we'll return to re-inspect at no additional cost. However, it's important to note that while our inspections are comprehensive, they are limited to accessible areas of the property. We cannot guarantee the detection of pests in inaccessible areas or predict future infestations. For added protection, we offer ongoing pest management programs that include regular inspections and preventative treatments with extended warranties."
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
            PEST INSPECTION FAQ
          </span>
          <h2 className="text-4xl font-bold mb-4 text-gray-900">
            Frequently Asked <span className="text-green-dark">Inspection Questions</span>
          </h2>
          <div className="w-24 h-1 bg-green-light mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Find answers to common questions about our professional pest inspection services, process, and what to expect.
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
            <h3 className="text-xl font-semibold mb-3">Have more questions about pest inspections?</h3>
            <p className="text-gray-600 mb-4">Our inspection specialists are ready to answer any other questions you might have about our pest inspection services.</p>
            <a href="/contact" className="modern-button bg-gradient-to-r from-green-light to-green-dark text-white transition-colors">
              Schedule a Consultation
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

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
          isOpen ? 'bg-green-50 shadow-md' : 'bg-gray-50 hover:bg-gray-100'
        }`}
        onClick={toggleAccordion}
      >
        <div className="flex items-center gap-4">
          <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
            isOpen
              ? 'bg-green-600 text-white'
              : 'bg-gray-200 text-gray-700'
          } transition-all duration-300`}>
            <span className="font-semibold">{index + 1}</span>
          </div>
          <span className={`text-lg font-medium ${isOpen ? 'text-green-600' : 'text-gray-900'}`}>{question}</span>
        </div>
        <svg
          className={`w-6 h-6 text-green-600 transform transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
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

export default function FoodProcessingPestControlFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqItems = [
    {
      question: "How do your pest control services help food processing facilities maintain HACCP compliance?",
      answer: "Our pest control services are specifically designed to support HACCP compliance in food processing facilities. We integrate our pest management program with your HACCP plan by: 1) Identifying and monitoring Critical Control Points related to pest activity; 2) Implementing preventative measures at these points; 3) Establishing critical limits for pest activity; 4) Creating corrective action protocols for when limits are exceeded; 5) Maintaining comprehensive documentation that satisfies HACCP verification requirements; and 6) Providing trend analyses and regular reviews to support continuous improvement. Our technicians are trained in HACCP principles and understand how pest management fits into your overall food safety system."
    },
    {
      question: "Are the pest control products you use safe for food processing environments?",
      answer: "Yes, we use only food-grade products specifically formulated and approved for use in food processing environments. Our approach prioritizes non-chemical control methods first, using physical barriers, habitat modification, and exclusion techniques whenever possible. When treatments are necessary, we select the least toxic effective options and apply them using precise targeting methods that minimize product exposure. All products are EPA-approved for food facilities and applied according to strict safety guidelines. We maintain detailed records of all products used, including Safety Data Sheets, and can provide this documentation for your audits and inspections."
    },
    {
      question: "How do you schedule pest control services to avoid disrupting food production?",
      answer: "We understand the importance of uninterrupted production in food processing facilities. Our service scheduling is highly flexible and designed to work around your production schedule. We can perform treatments during planned downtime, between production shifts, or during maintenance periods. For facilities that operate continuously, we develop zone-based treatment schedules that allow production to continue in some areas while others are being serviced. We coordinate closely with your production and quality assurance teams to identify the optimal treatment windows that minimize disruption while ensuring effective pest control."
    },
    {
      question: "What documentation do you provide for third-party audits?",
      answer: "We provide comprehensive, audit-ready documentation that meets the requirements of all major third-party auditing schemes including SQF, BRC, AIB, and FSSC 22000. Our documentation package includes: 1) Detailed service reports for each visit; 2) Pest monitoring logs with trend analyses; 3) Corrective action reports; 4) Material Safety Data Sheets for all products used; 5) Technician credentials and training certificates; 6) Facility maps showing placement of monitoring devices; 7) Pest management scope of service; and 8) Annual program assessment reports. We organize these documents in audit-ready binders or digital formats, and can provide on-site support during audits to help you demonstrate your robust pest management program."
    },
    {
      question: "How quickly can you respond to pest emergencies in food processing facilities?",
      answer: "We understand that pest issues in food processing environments require immediate attention due to food safety implications and potential production disruptions. We offer emergency response services for food processing facilities with same-day or next-day appointments depending on the severity and nature of the issue. Our food processing clients receive priority scheduling, and we maintain dedicated technicians trained specifically for food manufacturing environments who can respond quickly. For critical situations, we have after-hours emergency response teams available. We also provide guidance on immediate containment measures that facility staff can implement until our technicians arrive."
    },
    {
      question: "What preventative measures do you recommend for food processing facilities?",
      answer: "We recommend several key preventative measures for food processing facilities: 1) Implementing comprehensive exclusion strategies to seal potential entry points around the building exterior; 2) Installing appropriate door sweeps, air curtains, and dock seals at all exterior doors and loading docks; 3) Establishing strict protocols for inspection of incoming ingredients and materials; 4) Maintaining proper waste management practices with frequent removal and sealed containers; 5) Implementing proper ingredient storage practices following FIFO principles; 6) Creating buffer zones between exterior and production areas; 7) Designing and maintaining proper drainage systems; and 8) Training staff to recognize and report early signs of pest activity. We can help develop customized preventative protocols specific to your facility's needs and challenges."
    },
    {
      question: "How do you handle pest control in different zones of a food processing facility?",
      answer: "We implement a zone-based approach to pest management in food processing facilities, recognizing that different areas require different treatment protocols. Typically, we establish four zones: 1) Non-food areas (offices, maintenance rooms) where conventional pest control methods can be used; 2) Sensitive non-production areas (warehouses, packaging storage) where limited product exposure requires more careful application methods; 3) Production-adjacent areas (hallways, changing rooms) where highly targeted, low-impact methods are used; and 4) Production areas (processing lines, exposed product areas) where only the most stringent, food-safe methods are employed. Each zone has its own monitoring program, treatment protocols, and documentation requirements, creating multiple layers of protection for your products."
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <span className="inline-block px-3 py-1 bg-green-100 text-green-700 text-sm font-semibold rounded-full mb-3">
            FOOD PROCESSING PEST CONTROL FAQ
          </span>
          <h2 className="text-4xl font-bold mb-4 text-gray-900">
            Frequently Asked <span className="text-green-600">Questions</span>
          </h2>
          <div className="w-24 h-1 bg-green-600 mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Find answers to common questions about our professional pest control services for food processing facilities.
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
            <h3 className="text-xl font-semibold mb-3">Have more questions about food processing pest control?</h3>
            <p className="text-gray-600 mb-4">Our food processing pest control specialists are ready to answer any other questions you might have about our services for food manufacturing facilities.</p>
            <a href="/contact" className="modern-button bg-green-600 hover:bg-green-700 text-white transition-colors">
              Schedule a Consultation
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

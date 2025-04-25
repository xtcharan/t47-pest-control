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
          isOpen ? 'bg-blue-50 shadow-md' : 'bg-gray-50 hover:bg-gray-100'
        }`}
        onClick={toggleAccordion}
      >
        <div className="flex items-center gap-4">
          <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
            isOpen
              ? 'bg-blue-600 text-white'
              : 'bg-gray-200 text-gray-700'
          } transition-all duration-300`}>
            <span className="font-semibold">{index + 1}</span>
          </div>
          <span className={`text-lg font-medium ${isOpen ? 'text-blue-600' : 'text-gray-900'}`}>{question}</span>
        </div>
        <svg
          className={`w-6 h-6 text-blue-600 transform transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
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

export default function HospitalPestControlFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqItems = [
    {
      question: "How do you ensure patient safety during pest control treatments in hospitals?",
      answer: "Patient safety is our highest priority when performing pest control in healthcare environments. We implement multiple safeguards including: 1) Using only hospital-grade, low-toxicity products specifically approved for healthcare settings; 2) Scheduling treatments during low-activity periods or in coordination with facility management to minimize exposure; 3) Employing targeted application methods that reduce the amount of product used while maximizing effectiveness; 4) Establishing appropriate re-entry intervals based on product guidelines and hospital protocols; 5) Providing clear communication about treated areas and safety precautions; and 6) Working closely with infection control and environmental services teams to ensure all treatments align with hospital safety protocols."
    },
    {
      question: "How do your pest control services help hospitals maintain regulatory compliance?",
      answer: "Our hospital pest control services are designed to help you meet and exceed regulatory requirements from organizations like the Department of Health, Joint Commission, and other accreditation bodies. We provide comprehensive documentation including detailed service reports, monitoring logs, and treatment records that demonstrate your proactive pest management program. Our technicians are trained in healthcare regulations and can help identify potential compliance issues before they become problems. We also offer pre-inspection walkthroughs to ensure your facility is prepared for regulatory visits, and can provide specialized reports for infection control committees and other oversight groups."
    },
    {
      question: "What areas of a hospital require special consideration for pest control?",
      answer: "Several areas in hospitals require specialized pest control approaches: 1) Operating rooms and sterile processing departments require ultra-low-impact methods that maintain sterility; 2) Pharmacies and medication storage areas need treatments that ensure no contamination of medical supplies; 3) Intensive care units and isolation rooms require careful scheduling and coordination with medical staff; 4) Food service areas need food-safe treatments that comply with both healthcare and food safety regulations; 5) Mechanical rooms and utility areas often need more intensive treatments as they can be primary entry points for pests; and 6) Exterior grounds require preventative treatments that create a protective barrier. We customize our approach for each area based on its specific function, sensitivity, and pest pressure."
    },
    {
      question: "How quickly can you respond to pest emergencies in healthcare facilities?",
      answer: "We understand that pest issues in healthcare settings require immediate attention. We offer emergency response services for hospitals with same-day or next-day appointments depending on the severity and nature of the issue. Our healthcare clients receive priority scheduling, and we maintain dedicated technicians trained specifically for medical environments who can respond quickly. For critical situations, we have after-hours emergency response teams available. We also provide guidance on immediate containment measures that hospital staff can implement until our technicians arrive, helping to minimize the impact of the pest issue on patient care and facility operations."
    },
    {
      question: "What preventative measures do you recommend for hospitals to avoid pest problems?",
      answer: "We recommend several key preventative measures for healthcare facilities: 1) Implementing comprehensive exclusion strategies to seal potential entry points around the building exterior; 2) Establishing strict protocols for inspection of incoming supplies and materials; 3) Maintaining proper waste management practices with frequent removal and sealed containers; 4) Installing appropriate door sweeps, air curtains, and screens on all exterior doors and windows; 5) Implementing proper food storage and handling procedures in cafeterias and break rooms; 6) Maintaining regular cleaning schedules for all areas, especially those prone to moisture or food debris; and 7) Training staff to recognize and report early signs of pest activity. We can help develop customized preventative protocols specific to your facility's needs and challenges."
    },
    {
      question: "How do you handle pest control in sensitive hospital departments like ICUs or operating rooms?",
      answer: "For highly sensitive areas like ICUs and operating rooms, we implement specialized protocols: 1) Treatments are scheduled during planned downtime or in coordination with department heads to ensure zero impact on patient care; 2) We primarily use non-chemical control methods such as monitoring devices, exclusion techniques, and physical removal in these areas; 3) When treatments are necessary, we select ultra-low-impact formulations with minimal odor and residue; 4) Application methods focus on crack and crevice treatments rather than broadcast applications; 5) We work closely with infection control teams to ensure all methods meet sterility requirements; and 6) We provide detailed documentation of all activities performed for inclusion in department logs and regulatory records."
    },
    {
      question: "What makes hospital pest control different from other commercial pest control services?",
      answer: "Hospital pest control differs significantly from standard commercial services in several key ways: 1) We use only hospital-grade products specifically approved for healthcare environments; 2) Our technicians receive specialized training in healthcare protocols, infection control principles, and regulatory requirements; 3) We implement more stringent safety measures and application techniques to ensure patient and staff safety; 4) Our service scheduling is more flexible to accommodate the 24/7 nature of hospital operations; 5) We provide more comprehensive documentation to support regulatory compliance; 6) Our monitoring systems are more intensive and discreet; and 7) We coordinate closely with multiple hospital departments including facilities management, environmental services, and infection control to ensure our services integrate seamlessly with healthcare operations."
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <span className="inline-block px-3 py-1 bg-blue-100 text-blue-700 text-sm font-semibold rounded-full mb-3">
            HOSPITAL PEST CONTROL FAQ
          </span>
          <h2 className="text-4xl font-bold mb-4 text-gray-900">
            Frequently Asked <span className="text-blue-600">Questions</span>
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Find answers to common questions about our professional pest control services for hospitals and healthcare facilities.
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
            <h3 className="text-xl font-semibold mb-3">Have more questions about hospital pest control?</h3>
            <p className="text-gray-600 mb-4">Our healthcare pest control specialists are ready to answer any other questions you might have about our services for hospitals and medical facilities.</p>
            <a href="/contact" className="modern-button bg-blue-600 hover:bg-blue-700 text-white transition-colors">
              Schedule a Consultation
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

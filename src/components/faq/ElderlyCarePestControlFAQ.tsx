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
          isOpen ? 'bg-teal-50 shadow-md' : 'bg-gray-50 hover:bg-gray-100'
        }`}
        onClick={toggleAccordion}
      >
        <div className="flex items-center gap-4">
          <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
            isOpen
              ? 'bg-teal-600 text-white'
              : 'bg-gray-200 text-gray-700'
          } transition-all duration-300`}>
            <span className="font-semibold">{index + 1}</span>
          </div>
          <span className={`text-lg font-medium ${isOpen ? 'text-teal-600' : 'text-gray-900'}`}>{question}</span>
        </div>
        <svg
          className={`w-6 h-6 text-teal-600 transform transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
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

export default function ElderlyCarePestControlFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqItems = [
    {
      question: "How do you ensure pest control treatments are safe for elderly residents?",
      answer: "We implement several key measures to ensure pest control treatments are safe for elderly residents: 1) We prioritize non-chemical control methods like exclusion, monitoring, and habitat modification wherever possible; 2) When treatments are necessary, we select low-toxicity products specifically formulated for use in healthcare environments; 3) We use precise application methods that target pest harborage areas while minimizing resident exposure; 4) We schedule treatments during optimal times to reduce resident interaction with treated areas; 5) We provide clear communication about treatment areas and re-entry times; 6) We coordinate closely with facility staff to accommodate residents with specific health concerns or sensitivities; and 7) Our technicians receive specialized training in healthcare facility pest management. Our approach balances effective pest control with the unique health considerations of elderly residents."
    },
    {
      question: "How do you ensure pest control services don't disrupt elderly residents?",
      answer: "We understand that maintaining a calm, consistent environment is crucial for elderly residents. Our services are designed to be completely non-disruptive through several key approaches: 1) We schedule treatments during optimal times identified by facility management, such as during activities or meal times when residents are not in their rooms; 2) Our technicians use quiet equipment and discreet application methods that don't create alarming noises or disturbances; 3) We coordinate closely with facility staff to ensure residents with dementia or anxiety are properly supported during service visits; 4) We maintain a consistent service team so residents see familiar faces; 5) We provide advance notification materials that can be shared with residents and families; and 6) We adapt our approach based on feedback from facility staff about resident needs and concerns."
    },
    {
      question: "What documentation do you provide for healthcare facility compliance?",
      answer: "We provide comprehensive documentation to support your facility's compliance with healthcare regulations and accreditation standards: 1) Detailed service reports outlining findings, treatments performed, products used, and application locations; 2) Safety Data Sheets for all products used in your facility; 3) Pest monitoring logs showing activity trends over time; 4) Digital documentation accessible through our client portal for easy reference during inspections; 5) Annual program assessment reports; 6) Staff training records; 7) Pest management recommendations for ongoing prevention; and 8) Customized documentation to meet specific regulatory requirements for your facility type. This documentation helps demonstrate due diligence in maintaining a safe, pest-free environment for residents and can be invaluable during health department inspections and accreditation reviews."
    },
    {
      question: "How quickly can you respond to pest emergencies in elderly care facilities?",
      answer: "We understand that pest issues in healthcare environments require immediate attention due to the vulnerability of elderly residents and regulatory compliance requirements. We offer emergency response services for elderly care facilities with same-day or next-day appointments depending on the severity and nature of the issue. Our healthcare clients receive priority scheduling, and we maintain dedicated technicians trained specifically for healthcare environments who can respond quickly. For critical situations involving resident health or compliance concerns, we have after-hours emergency response teams available. We also provide guidance on immediate containment measures that facility staff can implement until our technicians arrive, helping to minimize the impact of the pest issue on your residents and operations."
    },
    {
      question: "What preventative measures do you recommend for elderly care facilities?",
      answer: "We recommend several key preventative measures for elderly care facilities: 1) Implementing comprehensive exclusion strategies to seal potential entry points around the building exterior; 2) Installing door sweeps and air curtains on all exterior doors; 3) Establishing enhanced protocols for inspection of incoming supplies, resident belongings, and laundry; 4) Maintaining proper waste management practices with frequent removal and sealed containers; 5) Implementing proper food storage and handling procedures in kitchens and dining areas; 6) Creating buffer zones between exterior and resident areas; 7) Designing and maintaining proper drainage systems; 8) Regular staff training on pest identification and prevention; and 9) Implementing a scheduled monitoring program to detect issues early. We can help develop customized preventative protocols specific to your facility's needs, resident population, and regulatory requirements."
    },
    {
      question: "How do you handle bed bug issues in elderly care facilities?",
      answer: "Our approach to bed bug management in elderly care facilities includes: 1) Comprehensive inspections using visual techniques and specialized detection tools to identify the extent of the issue; 2) Implementing immediate containment measures to prevent spread between rooms; 3) Using a combination of treatment methods including heat treatments, targeted applications, and non-chemical approaches based on resident needs; 4) Treating adjacent rooms and common areas to create buffer zones; 5) Implementing specialized protocols for resident belongings and facility laundry; 6) Providing staff training on early identification and prevention; 7) Establishing clear communication protocols for resident and family notification; and 8) Conducting follow-up inspections to ensure complete elimination. We understand the sensitivity of bed bug issues in healthcare settings and implement our protocols with resident dignity and facility reputation in mind."
    },
    {
      question: "How can facility staff help support effective pest management?",
      answer: "Facility staff play a crucial role in supporting effective pest management through several key practices: 1) Promptly reporting any pest sightings or evidence to management; 2) Maintaining proper sanitation in resident rooms, common areas, and dining facilities; 3) Following proper food storage and handling procedures; 4) Properly managing resident belongings, particularly during move-in; 5) Implementing proper protocols for laundry handling and storage; 6) Keeping exterior doors closed when not in use; 7) Properly sealing and storing food items in break rooms and kitchenettes; and 8) Participating in pest prevention training. We provide comprehensive staff training sessions and educational materials to help your team understand these important practices and recognize early warning signs of pest activity that could affect resident health or facility compliance."
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <span className="inline-block px-3 py-1 bg-teal-100 text-teal-700 text-sm font-semibold rounded-full mb-3">
            ELDERLY CARE PEST CONTROL FAQ
          </span>
          <h2 className="text-4xl font-bold mb-4 text-gray-900">
            Frequently Asked <span className="text-teal-600">Questions</span>
          </h2>
          <div className="w-24 h-1 bg-teal-600 mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Find answers to common questions about our professional pest control services for elderly care facilities and nursing homes.
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
            <h3 className="text-xl font-semibold mb-3">Have more questions about elderly care pest control?</h3>
            <p className="text-gray-600 mb-4">Our elderly care pest control specialists are ready to answer any other questions you might have about our services for aged care facilities.</p>
            <a href="/contact" className="modern-button bg-teal-600 hover:bg-teal-700 text-white transition-colors">
              Schedule a Consultation
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

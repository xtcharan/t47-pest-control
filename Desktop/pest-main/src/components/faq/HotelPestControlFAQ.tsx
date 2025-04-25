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
          isOpen ? 'bg-amber-50 shadow-md' : 'bg-gray-50 hover:bg-gray-100'
        }`}
        onClick={toggleAccordion}
      >
        <div className="flex items-center gap-4">
          <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
            isOpen
              ? 'bg-amber-600 text-white'
              : 'bg-gray-200 text-gray-700'
          } transition-all duration-300`}>
            <span className="font-semibold">{index + 1}</span>
          </div>
          <span className={`text-lg font-medium ${isOpen ? 'text-amber-600' : 'text-gray-900'}`}>{question}</span>
        </div>
        <svg
          className={`w-6 h-6 text-amber-600 transform transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
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

export default function HotelPestControlFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqItems = [
    {
      question: "How do you ensure pest control services don't disrupt our hotel guests?",
      answer: "We understand that maintaining a positive guest experience is paramount for hotels. Our services are designed to be completely non-disruptive through several key approaches: 1) We schedule treatments during low-occupancy periods, between check-out and check-in times, or in coordination with housekeeping schedules; 2) We use low-odor, quick-drying products that leave no visible residues; 3) Our technicians can arrive in unmarked vehicles and plain clothes or hotel uniforms if preferred; 4) We keep all equipment and products out of sight during treatments; 5) We coordinate closely with hotel management to work around special events or high-occupancy periods; and 6) We can segment larger properties into zones, treating different areas on different days to minimize any potential impact on guest experience."
    },
    {
      question: "What is your approach to bed bug control in hotels?",
      answer: "Our comprehensive bed bug management program for hotels includes: 1) Proactive monitoring with specialized detection devices in guest rooms to identify problems early; 2) Staff training on identification and inspection procedures during routine housekeeping; 3) Multiple treatment options including heat treatments, targeted chemical applications, and preventative measures; 4) Rapid response protocols for guest complaints with discreet inspection and treatment; 5) Specialized mattress and box spring encasements for prevention; 6) Treatment of adjacent rooms to prevent spread; and 7) Documentation and tracking systems to identify patterns and prevent future issues. Our bed bug program is designed to minimize room downtime while ensuring complete elimination, protecting both your guests and your reputation."
    },
    {
      question: "How quickly can you respond to pest emergencies in hotels?",
      answer: "We understand that pest sightings in hotels require immediate attention due to potential damage to your reputation and guest experience. We offer emergency response services for hotels with same-day or next-day appointments depending on the severity and nature of the issue. Our hotel clients receive priority scheduling, and we maintain dedicated technicians trained specifically for hospitality environments who can respond quickly. For critical situations like bed bug complaints, we have after-hours emergency response teams available. We also provide guidance on immediate containment measures that hotel staff can implement until our technicians arrive, helping to minimize the impact of the pest issue on your guests."
    },
    {
      question: "What preventative measures do you recommend for hotels?",
      answer: "We recommend several key preventative measures for hotels: 1) Implementing comprehensive exclusion strategies to seal potential entry points around the building exterior; 2) Installing appropriate door sweeps, air curtains, and door closers on all exterior doors; 3) Establishing protocols for inspection of luggage storage areas and laundry facilities; 4) Maintaining proper waste management practices with frequent removal and sealed containers; 5) Implementing proper food storage and handling procedures in restaurants and kitchens; 6) Creating buffer zones between exterior and guest areas; 7) Designing and maintaining proper drainage systems; and 8) Training housekeeping and maintenance staff to recognize and report early signs of pest activity. We can help develop customized preventative protocols specific to your hotel's needs and challenges."
    },
    {
      question: "How do you handle pest control in food service areas of hotels?",
      answer: "Hotel food service areas require specialized pest management approaches that address the unique challenges of these environments. Our approach includes: 1) Creating zone-based treatment protocols with more intensive monitoring and preventative measures in kitchens and restaurants; 2) Using food-grade products and application methods in and around food preparation and storage areas; 3) Implementing more frequent service visits for these areas; 4) Providing specialized staff training for food service employees; 5) Establishing enhanced receiving protocols for food deliveries; 6) Recommending proper storage and rotation practices for food products; and 7) Implementing additional monitoring devices in these high-risk areas. We understand the regulatory requirements for food service and ensure our services help you maintain compliance while protecting your guests and reputation."
    },
    {
      question: "What documentation do you provide for hotel pest control services?",
      answer: "We provide comprehensive documentation for all hotel pest control services, including: 1) Detailed service reports outlining findings, treatments performed, products used, and application locations; 2) Pest monitoring logs showing activity trends over time; 3) Digital documentation accessible through our client portal for easy reference; 4) Safety Data Sheets for all products used; 5) Pest management recommendations for ongoing prevention; 6) Staff training records; and 7) Annual program assessment reports. This documentation helps hotels demonstrate due diligence in maintaining a safe, pest-free environment for guests and employees. For hotel chains, we can provide standardized reporting across all properties to help maintain consistent pest management standards."
    },
    {
      question: "How can hotel staff help support effective pest management?",
      answer: "Hotel staff play a crucial role in supporting effective pest management through several key practices: 1) Housekeeping staff promptly reporting any pest sightings or evidence during room cleaning; 2) Maintenance staff sealing potential entry points and addressing moisture issues; 3) Food service staff maintaining proper sanitation in kitchens and dining areas; 4) Front desk staff appropriately handling and documenting guest complaints related to pests; 5) Laundry staff inspecting linens and properly handling potentially infested bedding; 6) Groundskeeping staff maintaining exterior areas to reduce harborage sites; and 7) Management implementing proper protocols for new guest room furniture and equipment. We provide comprehensive staff training sessions and educational materials to help your team understand these important practices and recognize early warning signs of pest activity."
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <span className="inline-block px-3 py-1 bg-amber-100 text-amber-700 text-sm font-semibold rounded-full mb-3">
            HOTEL PEST CONTROL FAQ
          </span>
          <h2 className="text-4xl font-bold mb-4 text-gray-900">
            Frequently Asked <span className="text-amber-600">Questions</span>
          </h2>
          <div className="w-24 h-1 bg-amber-600 mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Find answers to common questions about our professional pest control services for hotels and hospitality facilities.
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
            <h3 className="text-xl font-semibold mb-3">Have more questions about hotel pest control?</h3>
            <p className="text-gray-600 mb-4">Our hotel pest control specialists are ready to answer any other questions you might have about our services for hospitality facilities.</p>
            <a href="/contact" className="modern-button bg-amber-600 hover:bg-amber-700 text-white transition-colors">
              Schedule a Consultation
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

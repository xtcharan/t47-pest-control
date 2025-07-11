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
  const contentId = `wasp-faq-content-${index}`;

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

export default function WaspControlFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqItems = [
    {
      question: "How do I know if I have a wasp nest on my property?",
      answer: "Signs of a wasp nest include: frequent wasp sightings around your property; wasps entering and exiting from the same area (like a hole in the ground, wall void, or hanging nest); visible paper-like or mud structures in sheltered areas like eaves, attics, or trees; and increased wasp activity, especially during warmer months. If you notice these signs, it's best to have a professional inspection to confirm the presence and location of nests."
    },
    {
      question: "Are wasp stings dangerous?",
      answer: "Wasp stings can be painful for everyone, but their danger level varies by individual. For most people, stings cause temporary pain, swelling, and itching that resolves within a few days. However, for those with allergies to wasp venom, stings can trigger severe allergic reactions (anaphylaxis) that may be life-threatening and require immediate medical attention. Additionally, multiple stings, even for non-allergic individuals, can be dangerous and may require medical treatment."
    },
    {
      question: "Can I remove a wasp nest myself?",
      answer: "While DIY wasp nest removal is possible for very small nests in accessible locations, we strongly recommend professional removal for several reasons: 1) Wasps can be aggressive when their nest is threatened; 2) Some species can sting multiple times; 3) Professionals have protective equipment and specialized products not available to consumers; 4) Improper removal can lead to increased aggression and scattered colonies; and 5) Professionals can identify and address conditions that attracted wasps in the first place."
    },
    {
      question: "What's the difference between wasps, hornets, and yellow jackets?",
      answer: "These are all types of stinging insects with some key differences: Wasps is a broad category that includes both hornets and yellow jackets. Paper wasps build open, umbrella-shaped nests and are less aggressive. Yellow jackets are a type of wasp with distinctive yellow and black markings that build nests in the ground or enclosed spaces and are highly aggressive when disturbed. Hornets are larger wasps that build large, enclosed paper nests, often in trees or building eaves, and can be extremely territorial and aggressive."
    },
    {
      question: "When is wasp season and when should I be concerned?",
      answer: "Wasp season typically runs from late spring through early fall, with peak activity in mid to late summer. Wasp colonies start small in spring and grow throughout summer, reaching maximum size and activity in late summer/early fall. You should be concerned if you notice: multiple wasps consistently in the same area; wasps entering/exiting a specific location; visible nests on your property; or aggressive behavior from wasps. Early intervention is key, as smaller colonies in spring are easier and safer to remove than larger colonies later in the season."
    },
    {
      question: "How do you safely remove wasp nests?",
      answer: "Our professional wasp nest removal process includes: 1) Thorough inspection to identify all nests and wasp species; 2) Technicians wearing appropriate protective equipment; 3) Treatment with specialized products that quickly eliminate the colony; 4) Physical removal of the nest when safe and appropriate; 5) Application of residual treatments to prevent returning wasps from rebuilding; and 6) Recommendations for preventing future nests. We time our treatments for maximum effectiveness, often at dusk or dawn when most wasps are in the nest."
    },
    {
      question: "How can I prevent wasps from building nests on my property?",
      answer: "To prevent wasp nests: 1) Seal holes and cracks in building exteriors, especially eaves and soffits; 2) Keep food covered when outdoors and clean up spills promptly; 3) Keep garbage cans tightly sealed; 4) Reduce sweet attractants like fallen fruit or open soda cans; 5) Trim vegetation away from your home; 6) Consider preventative treatments in spring before nesting season; 7) Remove old or abandoned nests completely (after ensuring they're inactive); and 8) Consider professional preventative treatments for properties with recurring wasp problems."
    },
    {
      question: "Do you offer emergency wasp nest removal services?",
      answer: "Yes, we offer emergency wasp nest removal services for situations that pose immediate risks, such as nests near entrances, children's play areas, or when someone in the household has a known wasp allergy. Our emergency services include priority scheduling, rapid response times, and immediate action to secure the area and safely remove the threat. For emergency situations, please call our direct line rather than booking online to ensure the fastest possible response."
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden">
      <div className="absolute -top-20 -left-20 w-64 h-64 bg-green-light/5 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-green-light/5 rounded-full blur-3xl"></div>
      <div className="absolute top-20 right-10 text-8xl text-green-light/10 font-serif">?</div>
      <div className="absolute bottom-20 left-10 text-6xl text-green-light/10 font-serif">?</div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <span className="inline-block px-3 py-1 bg-green-light/10 text-green-dark text-sm font-semibold rounded-full mb-3">
            WASP CONTROL FAQ
          </span>
          <h2 className="text-4xl font-bold mb-4 text-gray-900">
            Frequently Asked <span className="text-green-dark">Wasp Control Questions</span>
          </h2>
          <div className="w-24 h-1 bg-green-light mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Find answers to common questions about our professional wasp control services, nest removal methods, and prevention strategies.
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

        <div className="mt-12 text-center">
          <div className="bg-white p-6 rounded-xl shadow-md max-w-2xl mx-auto border border-gray-100">
            <h3 className="text-xl font-semibold mb-3">Have more questions about wasp control?</h3>
            <p className="text-gray-600 mb-4">Our wasp control specialists are ready to answer any other questions you might have about our services.</p>
            <a href="/contact" className="modern-button bg-gradient-to-r from-green-light to-green-dark text-white transition-colors">
              Schedule a Consultation
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

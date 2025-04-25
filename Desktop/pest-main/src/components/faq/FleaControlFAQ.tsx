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
  const contentId = `flea-faq-content-${index}`;

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

export default function FleaControlFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqItems = [
    {
      question: "How can I tell if I have fleas in my home?",
      answer: "Common signs of a flea infestation include: 1) Pets scratching, biting, or licking themselves excessively; 2) Small, dark insects jumping on carpets, furniture, or pet bedding; 3) Tiny black specks (flea dirt) on your pet's skin, bedding, or furniture; 4) Red, itchy bites on humans, typically around ankles and lower legs; 5) Seeing fleas in pet fur when using a flea comb; and 6) White, pearl-like flea eggs or tiny, worm-like larvae in carpets or pet bedding. If you notice any of these signs, it's important to act quickly as flea populations can multiply rapidly."
    },
    {
      question: "Why do I need professional flea control if I'm already treating my pets?",
      answer: "While treating your pets is essential, it's only part of effective flea control. Adult fleas spend most of their time on pets, but eggs, larvae, and pupae—which make up 95% of a flea population—develop in your home environment. These immature stages live in carpets, furniture, cracks, and outdoor areas. DIY treatments often fail to address all life stages or reach all hiding places. Our professional treatments target the entire flea lifecycle throughout your home and yard, using professional-grade products and application methods not available to consumers. We also apply growth regulators that prevent immature fleas from developing, breaking the reproductive cycle for long-term control."
    },
    {
      question: "How long does it take to eliminate a flea infestation?",
      answer: "Complete flea elimination typically takes 2-4 weeks, even with professional treatment. This timeline reflects the flea lifecycle—pupae can remain dormant for months and are resistant to most insecticides. After our initial treatment, which eliminates adult fleas and prevents eggs and larvae from developing, we typically schedule a follow-up treatment 2-3 weeks later to target newly emerged adults before they can reproduce. You may continue to see some flea activity during this period as protected pupae hatch, but these emerging fleas will be eliminated before they can reproduce. For severe infestations, additional treatments may be necessary to achieve complete control."
    },
    {
      question: "Are your flea treatments safe for my family and pets?",
      answer: "Yes, our flea treatments prioritize safety while delivering effective results. We use products specifically formulated for residential use with low toxicity to mammals when applied according to label instructions. We carefully apply treatments to minimize exposure to people and pets, focusing on areas where fleas live but family members and pets don't directly contact. We provide clear guidance on temporary evacuation times (typically 2-4 hours) and when it's safe to return. For pet safety, we recommend coordinating our treatments with your veterinarian's flea control recommendations. We're happy to discuss any specific health concerns or sensitivities during your consultation."
    },
    {
      question: "How should I prepare my home for flea treatment?",
      answer: "To maximize treatment effectiveness: 1) Vacuum thoroughly before treatment, focusing on carpets, furniture, pet areas, and along baseboards—dispose of the vacuum bag immediately; 2) Wash all pet bedding, throw rugs, and removable furniture covers in hot water; 3) Clear floors of toys, clothing, and items that might prevent treatment access; 4) Mop hard floors to remove flea eggs and larvae; 5) Arrange for pets to receive veterinary-approved flea treatment on or before our service; 6) Plan for family and pets to be away during treatment and for 2-4 hours afterward; and 7) Trim outdoor vegetation and clear debris from yard areas where pets frequent. We'll provide detailed preparation instructions when you schedule your service."
    },
    {
      question: "Will I need to leave my home during the flea treatment?",
      answer: "Yes, you and your pets should leave your home during treatment and remain away for 2-4 hours afterward (we'll provide specific timing based on your situation). This allows the treatment to dry completely and ensures your safety. Before returning, we recommend ventilating the home by opening windows for 15-20 minutes. Upon re-entry, you may notice a mild odor that will dissipate quickly with continued ventilation. For sensitive individuals such as pregnant women, infants, elderly, or those with respiratory conditions, we recommend staying away for an additional 2 hours. Fish tanks should be covered and air pumps turned off during treatment."
    },
    {
      question: "How can I prevent future flea infestations?",
      answer: "To prevent future flea problems: 1) Maintain year-round flea prevention for all pets—consult your veterinarian for the most effective options; 2) Vacuum frequently, especially in pet resting areas, under furniture, and along baseboards; 3) Wash pet bedding weekly in hot water; 4) Keep your yard maintained by mowing regularly, trimming vegetation, and removing debris where fleas can hide; 5) Limit wildlife access to your yard, as animals like opossums, raccoons, and feral cats can introduce fleas; 6) Consider our preventative treatment program for properties in high-risk areas or with a history of flea problems; and 7) Act quickly at the first sign of fleas to prevent a small problem from becoming a full infestation."
    },
    {
      question: "Do you offer any guarantees for your flea control services?",
      answer: "Yes, we stand behind our flea control services with a 30-day satisfaction guarantee. If you continue to experience flea activity within 30 days of our complete treatment program (initial treatment plus follow-up), we'll return to re-treat at no additional cost. This guarantee applies when all recommended treatments have been completed and preparation instructions followed. For optimal protection, we offer ongoing preventative programs that provide regular treatments to maintain a flea-free environment. These programs include quarterly treatments and come with an extended guarantee—if fleas return between scheduled services, we'll re-treat at no extra charge."
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
            FLEA CONTROL KNOWLEDGE CENTER
          </span>
          <h2 className="text-4xl font-bold mb-4 text-gray-900">
            Frequently Asked <span className="text-green-dark">Flea Questions</span>
          </h2>
          <div className="w-24 h-1 bg-green-light mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Find expert answers to common questions about flea detection, treatment options, prevention strategies, and protecting your family and pets.
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
            <h3 className="text-xl font-semibold mb-3">Have more questions about flea control?</h3>
            <p className="text-gray-600 mb-4">Our flea control specialists are ready to answer your questions and provide expert guidance for your specific situation.</p>
            <a href="/contact" className="modern-button bg-gradient-to-r from-green-light to-green-dark text-white transition-colors">
              Schedule a Consultation
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

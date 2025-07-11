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
  const contentId = `silverfish-faq-content-${index}`;

  return (
    <div className="mb-4 modern-card overflow-hidden transition-all duration-300 hover:shadow-lg">
      <div
        className={`flex justify-between items-center p-5 cursor-pointer transition-colors duration-300 ${isOpen ? 'bg-blue-50' : 'bg-white'}`}
        onClick={() => toggleAccordion(index)}
      >
        <div className="flex items-center pr-4">
          <div className="w-8 h-8 rounded-full bg-gradient-to-r from-blue-500 to-blue-600 flex items-center justify-center mr-4 text-white text-sm shadow-sm">
            {index}
          </div>
          <h3 className={`font-medium text-lg transition-colors duration-300 ${isOpen ? 'text-blue-700' : 'text-gray-800'}`}>{question}</h3>
        </div>
        <div
          role="button"
          className={`text-gray-600 focus:outline-none transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
          tabIndex={0}
          aria-label={isOpen ? "Collapse answer" : "Expand answer"}
        >
          <div className={`w-8 h-8 rounded-full flex items-center justify-center transition-colors duration-300 ${isOpen ? 'bg-blue-100 text-blue-600' : 'bg-gray-100'}`}>
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

export default function SilverfishControlFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqItems = [
    {
      question: "How can I tell if I have silverfish in my home?",
      answer: "Common signs of a silverfish infestation include: 1) Seeing the insects themselves—silverfish are silvery-blue, teardrop-shaped, and about 1/2 to 3/4 inch long with long antennae and three tail-like appendages; 2) Yellow stains, scales, or shed skins on surfaces; 3) Small holes, notches, or irregular etchings on paper, books, wallpaper, or clothing; 4) Black pepper-like feces in areas where silverfish are active; and 5) Damage to book bindings, photos, or paper with starchy glues. Silverfish are nocturnal and fast-moving, so they're often spotted when lights are turned on in dark, humid areas like bathrooms, basements, attics, and closets."
    },
    {
      question: "Why are silverfish attracted to my home?",
      answer: "Silverfish are primarily attracted to homes due to three factors: moisture, food sources, and hiding places. They require high humidity (70-90%) to survive and thrive in damp areas like bathrooms, basements, laundry rooms, and kitchens. Silverfish feed on carbohydrates and proteins found in paper, books, photos, wallpaper paste, clothing (especially items with starch or sizing), dried food items, and even mold. They're also attracted to homes with plenty of dark, undisturbed hiding spots in cracks, crevices, and cluttered storage areas. Older homes with paper-backed insulation, aging books, or accumulated paper items are particularly vulnerable to silverfish infestations."
    },
    {
      question: "What damage can silverfish cause to my belongings?",
      answer: "Silverfish can cause significant damage to valuable and irreplaceable items. They feed on paper products, damaging books, important documents, photographs, and wallpaper by creating irregular holes and yellow stains. They're particularly attracted to items with starchy glues or pastes, including book bindings and photo albums. Silverfish also damage textiles containing natural fibers, starch, or sizing, including clothing, linens, and upholstery. They can contaminate food items like flour, cereal, pasta, and dried goods. While the damage occurs gradually, it's often discovered only after significant harm has been done, especially to stored items that aren't regularly examined. Our professional silverfish control helps protect these valuable belongings from further damage."
    },
    {
      question: "Are silverfish harmful to humans or pets?",
      answer: "Silverfish don't bite, sting, or transmit diseases to humans or pets, making them less directly harmful than many other pests. However, they can trigger allergic reactions in sensitive individuals, as their shed skins and scales become airborne and may contribute to dust allergies. The primary concern with silverfish is the damage they cause to personal belongings, particularly items of sentimental or historical value like family photos, important documents, and heirloom books or textiles. Additionally, their presence often indicates moisture issues that could lead to more serious problems like mold growth or structural damage. While not a health threat, silverfish should still be addressed promptly to prevent damage to your home and possessions."
    },
    {
      question: "How can I prevent silverfish infestations?",
      answer: "To prevent silverfish infestations: 1) Control humidity by using dehumidifiers in damp areas and maintaining humidity levels below 50%; 2) Fix leaky pipes, faucets, and other moisture sources; 3) Improve ventilation in bathrooms, basements, and attics; 4) Store books, papers, photos, and textiles in sealed plastic containers with desiccant packets; 5) Reduce clutter, especially paper piles and cardboard boxes; 6) Vacuum and dust regularly, paying special attention to cracks, crevices, and baseboards; 7) Seal cracks and crevices in walls, floors, and foundations; 8) Store food in airtight containers and clean up spills promptly; and 9) Consider periodic professional treatments in vulnerable areas, especially if you have valuable books or documents. Our technicians can provide customized prevention recommendations based on your specific home conditions."
    },
    {
      question: "Why do DIY silverfish treatments often fail?",
      answer: "DIY silverfish treatments frequently fail for several reasons: 1) Silverfish are nocturnal and excellent at hiding in inaccessible areas like wall voids, behind baseboards, and under insulation, making them difficult to target with consumer products; 2) Most DIY treatments address only visible silverfish but not their eggs or the conditions attracting them; 3) Consumer products often lack the residual effectiveness needed for long-term control; 4) Silverfish can develop resistance to repeatedly used over-the-counter insecticides; 5) DIY approaches rarely address the critical moisture issues that support silverfish populations; and 6) Without proper application equipment, it's difficult to treat cracks, crevices, and voids where silverfish hide. Our professional approach combines targeted treatments, moisture management, and preventative measures for comprehensive, long-lasting silverfish control."
    },
    {
      question: "How long does it take to eliminate a silverfish infestation?",
      answer: "Eliminating a silverfish infestation typically takes 2-4 weeks, though this timeline varies based on infestation severity, home conditions, and the comprehensiveness of the treatment plan. Our initial treatment provides immediate reduction by eliminating visible silverfish, but complete control requires addressing eggs and nymphs as they develop. Since silverfish can live 2-8 years and females lay eggs continuously, breaking this lifecycle is essential. We typically schedule a follow-up inspection 2-3 weeks after initial treatment to assess progress and apply additional treatments if needed. For severe infestations or homes with ongoing moisture issues, complete elimination may take longer and may require our maintenance program for continued protection. Throughout the process, implementing our recommended moisture control and prevention strategies significantly improves both the speed and longevity of results."
    },
    {
      question: "Are your silverfish treatments safe for my family and belongings?",
      answer: "Yes, our silverfish treatments prioritize safety while delivering effective results. We use products specifically formulated for residential use with low toxicity to humans and pets when applied according to label instructions. Our technicians are trained to apply treatments precisely to areas where silverfish hide but family members and pets don't directly contact. For areas containing valuable books, documents, or textiles, we use specialized treatments that eliminate silverfish without damaging these items. We provide clear guidance on temporary evacuation times (typically 2-4 hours) and when it's safe to return. All treatments are applied by licensed professionals who follow strict safety protocols. We're happy to address any specific health concerns or sensitivities during your consultation and can adjust our treatment approach accordingly."
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden">
      <div className="absolute -top-20 -left-20 w-64 h-64 bg-blue-100/10 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-blue-100/10 rounded-full blur-3xl"></div>
      <div className="absolute top-20 right-10 text-8xl text-blue-200 font-serif">?</div>
      <div className="absolute bottom-20 left-10 text-6xl text-blue-200 font-serif">?</div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <span className="inline-block px-3 py-1 bg-blue-100 text-blue-700 text-sm font-semibold rounded-full mb-3">
            SILVERFISH CONTROL KNOWLEDGE CENTER
          </span>
          <h2 className="text-4xl font-bold mb-4 text-gray-900">
            Frequently Asked <span className="text-blue-600">Silverfish Questions</span>
          </h2>
          <div className="w-24 h-1 bg-blue-500 mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Find expert answers to common questions about silverfish identification, the damage they cause, treatment options, and prevention strategies.
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
            <h3 className="text-xl font-semibold mb-3">Have more questions about silverfish control?</h3>
            <p className="text-gray-600 mb-4">Our silverfish control specialists are ready to answer your questions and provide expert guidance for your specific situation.</p>
            <a href="/contact" className="modern-button bg-gradient-to-r from-blue-500 to-blue-600 text-white transition-colors">
              Schedule a Consultation
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

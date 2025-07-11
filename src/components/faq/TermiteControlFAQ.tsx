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
  const contentId = `termite-faq-content-${index}`;

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

export default function TermiteControlFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqItems = [
    {
      question: "How do I know if I have termites in my home?",
      answer: "Common signs of termite infestation include: mud tubes (pencil-width tunnels) on foundation walls or support beams; hollow-sounding timber when tapped; tight-fitting doors or windows due to warping; papery or bubbling paint that resembles water damage; small piles of termite droppings (looks like fine sawdust or coffee grounds); discarded wings near windowsills or door frames; and damaged timber with a honeycomb interior but intact surface. If you notice any of these signs, it's crucial to arrange a professional termite inspection immediately, as visible damage often indicates an advanced infestation."
    },
    {
      question: "How often should I have my property inspected for termites?",
      answer: "Australian Standard AS3660.2 recommends annual termite inspections for all properties, regardless of whether you have a termite management system in place. In high-risk areas or properties with previous termite activity, inspections every 6-9 months may be advisable. Regular inspections are crucial because: 1) Termites can cause significant damage in just 3-6 months; 2) Early detection dramatically reduces repair costs; 3) Most insurance policies don't cover termite damage; and 4) Inspections help identify and address conducive conditions before termites establish. We provide detailed inspection reports and recommendations after each visit."
    },
    {
      question: "What's the difference between a termite barrier and a baiting system?",
      answer: "Chemical barriers involve creating a continuous treated zone in the soil around your property that termites cannot cross without being eliminated. These provide immediate protection and typically last 5-8 years. Baiting systems use strategically placed stations containing cellulose material that attracts termites, which then carry the slow-acting bait back to the colony, eventually eliminating it. Baiting systems require regular monitoring but are less invasive to install. Each system has advantages: barriers provide comprehensive protection without requiring termite activity to be effective, while baiting systems can eliminate colonies at their source. We often recommend a combined approach for maximum protection."
    },
    {
      question: "How long does termite treatment last?",
      answer: "The longevity of termite treatments varies by method: Chemical soil barriers typically provide 5-8 years of protection, depending on soil type, environmental factors, and the specific product used. Physical barriers (such as stainless steel mesh or crushed granite) can last the lifetime of the building if properly installed and maintained. Baiting systems remain effective as long as they're regularly monitored and maintained, typically requiring quarterly service visits. For all systems, annual termite inspections are essential to verify continued effectiveness and identify any new termite activity or conducive conditions."
    },
    {
      question: "Are termite treatments safe for my family and pets?",
      answer: "Modern termite treatments are designed with safety in mind when applied by licensed professionals. Chemical barriers use termiticides that target insects' unique physiological processes, making them much more toxic to termites than to mammals. These products are applied to soil around the building's perimeter and under slabs, minimizing exposure to occupants. Baiting systems contain minimal amounts of active ingredient in sealed, tamper-resistant stations. Physical barriers are non-toxic alternatives. During treatment, we implement appropriate safety protocols, including temporary evacuation if necessary, and provide clear guidance on when it's safe to return. All products we use are registered with the Australian Pesticides and Veterinary Medicines Authority (APVMA)."
    },
    {
      question: "What can I do to reduce termite risk around my property?",
      answer: "To reduce termite risk: 1) Eliminate wood-to-soil contact around your home; 2) Keep mulch, woodpiles, and garden beds at least 30cm away from foundations; 3) Ensure proper drainage around your property to prevent moisture accumulation; 4) Fix leaking taps, pipes, air conditioning units, and blocked gutters promptly; 5) Maintain adequate ventilation in subfloor areas; 6) Regularly inspect and maintain any termite management system; 7) Remove tree stumps and dead trees near your home; 8) Consider using termite-resistant materials for any renovations; and 9) Schedule annual professional termite inspections. These preventative measures significantly reduce your property's attractiveness to termites."
    },
    {
      question: "What's involved in a professional termite inspection?",
      answer: "Our comprehensive termite inspections follow Australian Standard AS3660.2 and include: 1) Thorough examination of all accessible areas including the building interior, roof void, subfloor space, and external perimeter; 2) Use of advanced technology such as thermal imaging cameras, moisture meters, and acoustic detection devices to locate hidden termite activity; 3) Identification of any termite species present and assessment of active infestations; 4) Evaluation of previous termite damage; 5) Assessment of termite risk factors and conducive conditions; 6) Review of existing termite management systems; 7) Detailed written report with findings and recommendations; and 8) Clear explanation of treatment options if termites are found. The inspection typically takes 1-2 hours depending on property size and complexity."
    },
    {
      question: "Does my home insurance cover termite damage?",
      answer: "Most standard home insurance policies in Australia specifically exclude damage caused by termites and other pests. This exclusion exists because termite damage is considered preventable through proper maintenance and regular inspections. The gradual nature of termite damage also conflicts with insurance principles that typically cover sudden, unexpected events. Given this lack of coverage, proactive termite management is essential financial protection for homeowners. The cost of professional termite protection is minimal compared to potential repair costs, which can range from thousands to tens of thousands of dollars. Some specialized insurance products may offer limited termite coverage, but these typically require proof of regular professional inspections and maintenance."
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
            TERMITE PROTECTION KNOWLEDGE CENTER
          </span>
          <h2 className="text-4xl font-bold mb-4 text-gray-900">
            Frequently Asked <span className="text-green-dark">Termite Control Questions</span>
          </h2>
          <div className="w-24 h-1 bg-green-light mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Find expert answers to common questions about termite detection, treatment options, prevention strategies, and protecting your property investment.
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
            <h3 className="text-xl font-semibold mb-3">Have more questions about termite protection?</h3>
            <p className="text-gray-600 mb-4">Our licensed termite specialists are ready to answer your questions and provide expert guidance for your specific situation.</p>
            <a href="/contact" className="modern-button bg-gradient-to-r from-green-light to-green-dark text-white transition-colors">
              Schedule a Consultation
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

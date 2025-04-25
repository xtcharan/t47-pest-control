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
  const contentId = `rodent-faq-content-${index}`;

  return (
    <div className="mb-4 modern-card overflow-hidden transition-all duration-300 hover:shadow-lg">
      <div
        className={`flex justify-between items-center p-5 cursor-pointer transition-colors duration-300 ${isOpen ? 'bg-red-500/10' : 'bg-white'}`}
        onClick={() => toggleAccordion(index)}
      >
        <div className="flex items-center pr-4">
          <div className="w-8 h-8 rounded-full bg-gradient-to-r from-red-500 to-red-600 flex items-center justify-center mr-4 text-white text-sm shadow-sm">
            {index}
          </div>
          <h3 className={`font-medium text-lg transition-colors duration-300 ${isOpen ? 'text-red-600' : 'text-gray-800'}`}>{question}</h3>
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

export default function RatsMiceControlFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqItems = [
    {
      question: "How can I tell if I have rats or mice in my home?",
      answer: "Identifying whether you have rats or mice requires looking for specific signs. Rats leave larger droppings (½-¾ inch, capsule-shaped) typically found along walls or in concentrated areas, while mice leave smaller droppings (⅛-¼ inch, rod-shaped) scattered widely throughout activity areas. Rats create larger gnaw marks with rough edges on wood and hard materials, while mice leave smaller, clean-cut gnaw marks often on food packaging. Rats produce heavy scratching or scurrying sounds, particularly at night, while mice create lighter, quicker sounds. Rats leave greasy rub marks along baseboards from their oily fur, while mice leave lighter marks. If you're unsure which rodent you're dealing with, our technicians can provide expert identification during an inspection."
    },
    {
      question: "What health risks do rats and mice pose to my family?",
      answer: "Rodents pose significant health risks through multiple transmission routes. They can spread over 35 diseases to humans through direct contact with rodents or their urine, droppings, or saliva, including Hantavirus Pulmonary Syndrome, Leptospirosis, Lymphocytic Choriomeningitis (LCMV), Rat-bite Fever, and Salmonellosis. They can also transmit diseases indirectly through ticks, mites, and fleas that have fed on infected rodents. Additionally, rodent droppings and urine can contaminate food preparation surfaces and trigger allergies and asthma, particularly in children. Their gnawing on electrical wires creates fire hazards, and their burrowing can damage foundations and insulation. Professional rodent control is essential for protecting your family from these health risks."
    },
    {
      question: "How do rats and mice get into homes?",
      answer: "Rats and mice enter homes through different-sized openings due to their physical differences. Mice can squeeze through gaps as small as ¼ inch (the size of a pencil), while rats need slightly larger openings of about ½ inch. Common entry points include gaps around utility pipes, vents, and cables entering your home; cracks in foundations or walls; spaces under doors without proper sweeps; damaged roof vents or soffits; chimney openings without caps; and gaps around windows. Rodents are excellent climbers—mice can scale rough vertical surfaces, while rats can climb wires, pipes, and rough walls to access upper levels of buildings. They're also known to enter through connected structures like garages or sheds. Our comprehensive inspection identifies all potential entry points specific to the rodent species in your home."
    },
    {
      question: "How quickly can you eliminate a rodent infestation?",
      answer: "The timeline for complete rodent elimination varies based on several factors: the rodent species (rats typically take longer to control than mice), infestation severity (larger populations require more time), property size and complexity (larger properties with more hiding places take longer), the number and accessibility of entry points, and whether you're dealing with both rats and mice simultaneously. Typically, you'll notice a significant reduction in rodent activity within 1-2 weeks after initial treatment. Complete elimination, including breaking the breeding cycle, generally takes 2-4 weeks for mice and 3-6 weeks for rats. For severe or complex infestations, the process may take up to 8 weeks. Our technicians provide a specific timeline estimate after the initial inspection based on your unique situation and implement a comprehensive approach to achieve the fastest possible results."
    },
    {
      question: "Are your rodent control methods safe for children and pets?",
      answer: "Yes, our rodent control methods prioritize the safety of your family and pets while effectively eliminating rodents. We use a multi-layered approach to ensure safety: 1) Tamper-resistant bait stations that are securely locked and anchored to prevent access by children and pets; 2) Strategic placement of all traps and bait stations in areas inaccessible to children and pets; 3) Careful selection of products with the lowest toxicity necessary for effectiveness; 4) Emphasis on exclusion and trapping methods over chemical treatments when appropriate; 5) Clear communication about any temporary precautions needed during treatment; and 6) Proper cleanup and disposal of rodent carcasses and contaminated materials to prevent secondary exposure. All products we use are registered with appropriate regulatory agencies and applied according to label instructions by our licensed technicians."
    },
    {
      question: "What's included in your rat and mouse control service?",
      answer: "Our comprehensive rodent control service includes: 1) Thorough inspection to identify rodent species, entry points, nesting areas, and contributing factors; 2) Customized treatment plan based on whether you have rats, mice, or both; 3) Installation of appropriate trapping systems and/or tamper-resistant bait stations; 4) Sealing of entry points—even those as small as ¼ inch for mice; 5) Removal and disposal of trapped rodents and contaminated materials; 6) Sanitization of affected areas to eliminate odors and disease-causing pathogens; 7) Identification and repair of rodent damage; 8) Recommendations for preventing future infestations; 9) Follow-up visits to monitor and adjust treatment as needed; and 10) Detailed documentation of all findings and services performed. We also offer ongoing maintenance programs for continued protection, especially for properties in high-risk areas or with a history of rodent problems."
    },
    {
      question: "How can I prevent rats and mice from returning after treatment?",
      answer: "To maintain a rodent-free environment after professional treatment: 1) Seal all potential entry points—gaps as small as ¼ inch for mice and ½ inch for rats—using durable materials like steel wool, metal flashing, and specialized sealants; 2) Maintain proper food storage in airtight containers and promptly clean up crumbs and spills; 3) Keep outdoor garbage in tightly sealed containers and maintain distance from your home; 4) Eliminate water sources by fixing leaks and addressing drainage issues; 5) Reduce clutter both inside and outside your home that could provide nesting sites; 6) Maintain your yard by keeping grass short, trimming vegetation away from your home's foundation, and storing firewood at least 20 feet away from structures; 7) Install door sweeps on exterior doors and repair damaged screens; 8) Regularly inspect your home for new signs of rodent activity or potential entry points; and 9) Consider our maintenance program with regular inspections and preventative treatments, especially for properties in high-risk areas."
    },
    {
      question: "Do you offer commercial rodent control for businesses?",
      answer: "Yes, we offer specialized commercial rodent control services tailored to the unique needs of businesses, including restaurants, food processing facilities, warehouses, healthcare settings, and retail establishments. Our commercial services include: 1) Comprehensive inspection and monitoring programs that comply with industry regulations; 2) Discreet service scheduling that minimizes disruption to your operations; 3) HACCP-compatible treatments suitable for food handling areas; 4) Documentation for health inspections and audit requirements; 5) Staff training on rodent prevention practices; 6) Custom-designed exclusion solutions for complex commercial structures; 7) Emergency response for sudden infestations; 8) Regular maintenance programs with scheduled inspections and treatments; and 9) Risk assessment and prevention planning. Our commercial rodent control helps protect your reputation, maintain regulatory compliance, and provide a safe environment for customers and employees."
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute -top-20 -left-20 w-64 h-64 bg-red-500/5 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-red-500/5 rounded-full blur-3xl"></div>

      {/* Question mark decorations */}
      <div className="absolute top-20 right-10 text-8xl text-red-500/10 font-serif">?</div>
      <div className="absolute bottom-20 left-10 text-6xl text-red-500/10 font-serif">?</div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <span className="inline-block px-3 py-1 bg-red-500/10 text-red-600 text-sm font-semibold rounded-full mb-3">
            RODENT CONTROL FAQ
          </span>
          <h2 className="text-4xl font-bold mb-4 text-gray-900">
            Frequently Asked <span className="text-red-600">Rodent Control Questions</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-red-500 to-red-600 mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Find answers to common questions about our professional rat and mouse control services, treatment methods, and prevention strategies.
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
            <h3 className="text-xl font-semibold mb-3">Have more questions about rodent control?</h3>
            <p className="text-gray-600 mb-4">Our rodent control specialists are ready to answer any other questions you might have about our services.</p>
            <a href="/contact" className="modern-button bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white transition-colors">
              Schedule a Consultation
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

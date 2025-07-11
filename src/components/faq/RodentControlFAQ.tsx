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
  const contentId = `rodent-faq-content-${index}`;

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

export default function RodentControlFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqItems = [
    {
      question: "How can I tell if I have a rodent infestation?",
      answer: "Common signs of rodent infestation include: 1) Droppings (rat droppings are larger, about ½-¾ inch, while mouse droppings are smaller, about ¼ inch); 2) Gnaw marks on food packaging, furniture, wires, or structural elements; 3) Scratching or scurrying sounds in walls, ceilings, or under floors, especially at night; 4) Nests made of shredded paper, fabric, or insulation in secluded areas; 5) Grease marks or rub marks along baseboards and walls from rodents' oily fur; 6) Footprints or tail marks in dusty areas; 7) Pet behavior changes, such as alertness or excitement near certain walls or areas; and 8) Unusual odors, particularly a strong, musky smell in enclosed spaces. If you notice any of these signs, it's important to act quickly as rodent populations can grow rapidly."
    },
    {
      question: "What health risks do rodents pose to my family?",
      answer: "Rodents pose significant health risks through multiple transmission routes: 1) Direct disease transmission through bites or scratches, which can cause rat-bite fever and other infections; 2) Indirect transmission through contact with urine, droppings, or saliva, which can spread Hantavirus, Leptospirosis, and Salmonellosis; 3) Vector-borne transmission, as rodents carry fleas, ticks, and mites that can spread plague, typhus, and Lyme disease; 4) Food contamination through droppings, urine, and hair, which can cause food poisoning; 5) Allergic reactions and asthma triggers from rodent dander, urine proteins, and decomposing bodies; and 6) Secondary infections from scratching rodent-related insect bites. Children, elderly individuals, pregnant women, and those with compromised immune systems are particularly vulnerable to these health risks, making professional rodent control essential for protecting your family's health."
    },
    {
      question: "What's the difference between DIY and professional rodent control?",
      answer: "DIY rodent control often falls short for several reasons: 1) Limited identification skills—homeowners may misidentify the rodent species or underestimate the infestation size; 2) Incomplete approach—DIY methods typically focus only on visible rodents rather than addressing entry points, nesting areas, and attractants; 3) Safety concerns—improper handling of traps or baits can pose risks to children, pets, and non-target wildlife; 4) Ineffective product selection—consumer-grade products are often less effective than professional-grade solutions; and 5) Lack of follow-up—one-time treatments rarely solve rodent problems completely. Professional rodent control provides comprehensive inspection, species-specific treatment strategies, exclusion services to prevent re-entry, safe application of professional-grade products, proper removal of rodents and contaminated materials, and ongoing monitoring to ensure complete elimination. This integrated approach is more effective and provides longer-lasting results than DIY methods."
    },
    {
      question: "How do you keep rodents out of my home?",
      answer: "Our exclusion process involves several key steps: 1) Comprehensive inspection to identify all actual and potential entry points—rats can squeeze through ½-inch openings while mice need only ¼-inch gaps; 2) Sealing exterior entry points using durable materials that rodents cannot gnaw through, such as steel wool, metal flashing, hardware cloth, concrete, and specialized sealants; 3) Addressing common entry areas including foundation cracks, gaps around pipes and utility lines, vents, roof junctions, door and window frames, and crawl space openings; 4) Installing door sweeps and weather stripping to eliminate gaps under doors; 5) Repairing damaged vents and installing rodent-proof vent covers; 6) Recommending modifications to landscaping and exterior storage practices to reduce harborage areas near the home; and 7) Providing guidance on proper food storage and waste management to eliminate attractants. This comprehensive exclusion approach is the most effective long-term solution for preventing rodent entry."
    },
    {
      question: "Are your rodent control methods safe for my family and pets?",
      answer: "Yes, our rodent control methods prioritize the safety of your family and pets while effectively eliminating rodents. We use a multi-layered approach to ensure safety: 1) Tamper-resistant bait stations are used when baiting is necessary, with stations secured and placed in locations inaccessible to children and pets; 2) Traps are strategically positioned in areas where family members and pets cannot access them, such as behind appliances, in attics, or in sealed crawl spaces; 3) When using rodenticides, we select products with the lowest toxicity necessary for effectiveness and include bittering agents to deter accidental consumption; 4) We provide clear guidance on temporary restrictions for certain areas during treatment; 5) Our technicians are licensed and trained in proper application techniques that minimize risk; and 6) We offer alternative treatment options for households with special concerns, such as homes with young children, individuals with compromised immune systems, or multiple pets. Your family's safety is our top priority throughout the rodent control process."
    },
    {
      question: "How long does it take to eliminate a rodent infestation?",
      answer: "The timeline for complete rodent elimination varies based on several factors: 1) Infestation severity—larger populations require more time to control; 2) Rodent species—rats are often more cautious and may take longer to eliminate than mice; 3) Property size and complexity—larger homes with more potential entry points and hiding places require more extensive treatment; 4) Structural issues—homes with numerous entry points or accessibility challenges may require additional time for proper exclusion; and 5) Environmental factors—properties with abundant food sources or neighboring infestations may experience longer treatment timelines. Typically, initial results are seen within 1-2 weeks, with complete control achieved in 3-6 weeks for most residential infestations. Our process includes initial treatment, follow-up visits to monitor progress and adjust strategies as needed, and final inspection to confirm complete elimination. For severe infestations, our ongoing maintenance program may be recommended to prevent reinfestation."
    },
    {
      question: "What should I do to prepare for rodent treatment?",
      answer: "To maximize treatment effectiveness, we recommend: 1) Clear access to key areas including attics, crawl spaces, utility rooms, garage, and storage areas where rodents may hide; 2) Reduce clutter in these areas to improve inspection and treatment access; 3) Store food in airtight containers and clean up crumbs and spills promptly; 4) Secure pet food in sealed containers and avoid leaving pet food out overnight; 5) Trim vegetation away from the home's exterior and move woodpiles and debris away from the foundation; 6) Repair leaky pipes and address moisture issues that attract rodents; 7) Follow any specific instructions provided by our technicians regarding temporary removal of items from certain areas; and 8) Keep children and pets away from treated areas as directed. Our technicians will provide detailed preparation instructions specific to your situation when scheduling your service. Proper preparation significantly improves treatment outcomes and helps achieve faster results."
    },
    {
      question: "How can I prevent future rodent problems?",
      answer: "To maintain a rodent-free environment: 1) Seal all potential entry points around your home's exterior, including small gaps around pipes, vents, and utility lines; 2) Install door sweeps on exterior doors and repair damaged screens on windows and vents; 3) Keep food in sealed containers and promptly clean up crumbs and spills; 4) Store pet food in airtight containers and avoid leaving pet food out overnight; 5) Maintain proper garbage management with secure, covered trash cans; 6) Eliminate water sources by fixing leaky pipes and addressing drainage issues; 7) Reduce harborage areas by keeping your yard well-maintained, trimming vegetation away from your home, and storing firewood and building materials at least 18 inches off the ground and 12 feet from structures; 8) Regularly inspect your home for new signs of rodent activity, particularly during fall and winter when rodents seek shelter; and 9) Consider our preventative maintenance program with regular inspections and preventative treatments, especially if you live in an area with high rodent pressure or have had previous infestations."
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
            RODENT CONTROL KNOWLEDGE CENTER
          </span>
          <h2 className="text-4xl font-bold mb-4 text-gray-900">
            Frequently Asked <span className="text-green-dark">Rodent Questions</span>
          </h2>
          <div className="w-24 h-1 bg-green-light mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Find expert answers to common questions about rodent identification, health risks, control methods, prevention strategies, and protecting your home.
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
            <h3 className="text-xl font-semibold mb-3">Have more questions about rodent control?</h3>
            <p className="text-gray-600 mb-4">Our rodent control specialists are ready to answer your questions and provide expert guidance for your specific situation.</p>
            <a href="/contact" className="modern-button bg-gradient-to-r from-green-light to-green-dark text-white transition-colors">
              Schedule a Consultation
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

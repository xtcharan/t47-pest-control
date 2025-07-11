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
  const contentId = `possum-faq-content-${index}`;

  return (
    <div className="mb-4 modern-card overflow-hidden transition-all duration-300 hover:shadow-lg">
      <div
        className={`flex justify-between items-center p-5 cursor-pointer transition-colors duration-300 ${isOpen ? 'bg-purple-50' : 'bg-white'}`}
        onClick={() => toggleAccordion(index)}
      >
        <div className="flex items-center pr-4">
          <div className="w-8 h-8 rounded-full bg-gradient-to-r from-purple-500 to-purple-600 flex items-center justify-center mr-4 text-white text-sm shadow-sm">
            {index}
          </div>
          <h3 className={`font-medium text-lg transition-colors duration-300 ${isOpen ? 'text-purple-700' : 'text-gray-800'}`}>{question}</h3>
        </div>
        <div
          role="button"
          className={`text-gray-600 focus:outline-none transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
          tabIndex={0}
          aria-label={isOpen ? "Collapse answer" : "Expand answer"}
        >
          <div className={`w-8 h-8 rounded-full flex items-center justify-center transition-colors duration-300 ${isOpen ? 'bg-purple-100 text-purple-600' : 'bg-gray-100'}`}>
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

export default function PossumControlFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqItems = [
    {
      question: "How can I tell if I have possums in my roof or walls?",
      answer: "Common signs of possum activity include: 1) Loud thumping, scratching, or scurrying noises in your ceiling, walls, or roof space, particularly at night when possums are most active; 2) Distinctive droppings that are dark, cylindrical, and approximately 2cm long, often found in roof spaces or near entry points; 3) Damaged insulation, wiring, or ductwork in your attic; 4) Visible entry holes in your roof, eaves, or exterior walls, often 10-15cm in diameter; 5) A distinctive musky odor from possum urine and scent marking; 6) Greasy rub marks along frequently used paths where the possum's fur contacts surfaces; and 7) Unexplained damage to fruit trees or vegetable gardens. If you notice any of these signs, it's advisable to arrange a professional inspection to confirm possum activity and assess the extent of the problem."
    },
    {
      question: "Are possums dangerous to humans or pets?",
      answer: "Possums generally aren't dangerous to humans or pets when unprovoked, but they can become defensive when cornered or threatened. They may hiss, growl, bare their teeth, or adopt a defensive posture when they feel threatened. While they prefer to escape rather than attack, they can scratch or bite if handled or cornered, potentially causing injury and risking disease transmission. Possums can carry parasites like ticks and fleas that may affect pets, and their droppings can contain harmful bacteria. They rarely directly attack pets but may defend themselves if cornered by a dog or cat. The greatest risks from possums are typically property damage and the diseases their droppings can harbor. Our wildlife specialists are trained in safe, humane handling techniques to remove possums without harm to the animals, your family, or your pets."
    },
    {
      question: "Is it legal to remove possums from my property?",
      answer: "Possum management is regulated by wildlife protection laws that vary by location. In most areas, possums are protected native wildlife, and there are specific regulations governing their management. While it's typically legal to remove possums from your home, there are important restrictions: 1) Permits may be required for trapping and relocation; 2) Only humane, non-lethal methods are generally permitted; 3) Regulations often specify how far possums can be relocated from the capture site; 4) In some jurisdictions, only licensed wildlife handlers can legally trap and relocate possums; and 5) Penalties for improper handling or harm to possums can be significant. Our possum control services comply with all relevant wildlife protection laws, ensuring humane and legal management. We maintain all necessary permits and follow strict protocols for ethical handling and appropriate relocation."
    },
    {
      question: "What damage can possums cause to my home?",
      answer: "Possums can cause various types of damage to homes: 1) Structural damage to roof spaces, including torn insulation, damaged ductwork, and displaced roof tiles or shingles; 2) Electrical hazards from chewed wiring, which can create fire risks; 3) Water damage from blocked gutters or downspouts with nesting materials; 4) Contamination from urine and droppings, which can stain ceilings, create odors, and potentially harbor harmful bacteria; 5) Entry holes in roofing, eaves, or exterior walls that can allow water intrusion and access for other pests; 6) Damage to HVAC systems and vents; and 7) Noise disturbances from movement and vocalizations, particularly at night. The longer possums remain in your home, the more extensive the damage typically becomes. Our possum management services not only remove the animals but also address existing damage and implement preventative measures to protect your home from future problems."
    },
    {
      question: "How do you humanely remove possums?",
      answer: "Our humane possum removal process follows strict ethical guidelines: 1) We conduct a thorough inspection to identify possum activity, entry points, and the number of animals present; 2) We use specially designed, humane traps placed in strategic locations based on possum movement patterns; 3) Traps are baited with appropriate foods that attract possums without endangering other wildlife; 4) We check traps regularly to minimize stress to captured animals; 5) Captured possums are carefully handled by our trained specialists using appropriate protective equipment; 6) We conduct health assessments to ensure the animals are fit for relocation; 7) In accordance with wildlife regulations, possums are relocated to suitable habitats within the permitted distance from the capture site; and 8) We ensure relocated possums have access to food, water, and shelter in their new environment. This comprehensive approach ensures effective removal while prioritizing animal welfare and complying with wildlife protection laws."
    },
    {
      question: "How do you prevent possums from returning after removal?",
      answer: "Our comprehensive prevention strategy includes: 1) Identifying and sealing all potential entry points using durable materials that resist possum attempts to re-enter; 2) Installing heavy-gauge metal mesh over vents and openings that need airflow while preventing possum access; 3) Sealing gaps in roofing, soffits, and fascia boards with appropriate materials that match your home's appearance; 4) Installing specially designed caps and covers for chimneys and other large openings; 5) Recommending landscaping modifications, such as trimming tree branches that provide roof access; 6) Suggesting secure garbage storage solutions to eliminate food sources; 7) Installing possum deterrents such as motion-activated lights in strategic locations; and 8) Offering ongoing maintenance programs with regular inspections to identify and address new vulnerabilities. This multi-faceted approach creates effective, long-term protection against possum re-entry while maintaining your home's aesthetic appeal."
    },
    {
      question: "How long does possum removal typically take?",
      answer: "The timeline for complete possum removal varies based on several factors: 1) The number of possums present—multiple animals require more time to trap and relocate; 2) The complexity of your property—larger homes with multiple potential entry points require more extensive work; 3) The accessibility of possum hiding places—animals in difficult-to-reach areas may take longer to trap; 4) The extent of preventative measures needed—comprehensive exclusion work takes additional time; and 5) Weather conditions, which can affect trapping success and the ability to complete exterior repairs. Typically, the trapping phase takes 3-7 days, while complete exclusion and prevention work may take an additional 1-2 days. For complex situations or larger properties, the process may extend to 2 weeks. We provide a specific timeline estimate after our initial inspection based on your unique situation."
    },
    {
      question: "Do you offer any guarantees for your possum control services?",
      answer: "Yes, we stand behind our possum control services with a satisfaction guarantee. If possums re-enter your home through any entry points we've sealed within 6 months of our service, we'll return to re-seal those areas at no additional cost. This guarantee applies when all our recommended prevention measures have been implemented. For comprehensive protection, we offer maintenance programs that include regular inspections to identify and address potential vulnerabilities before possums can exploit them. These programs include extended guarantees—if possums return during the maintenance program period, we'll provide additional trapping and exclusion services as needed at no extra charge. We're committed to providing effective, long-term solutions to your possum problems and will work with you until those problems are fully resolved."
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden">
      <div className="absolute -top-20 -left-20 w-64 h-64 bg-purple-100/10 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-purple-100/10 rounded-full blur-3xl"></div>
      <div className="absolute top-20 right-10 text-8xl text-purple-200 font-serif">?</div>
      <div className="absolute bottom-20 left-10 text-6xl text-purple-200 font-serif">?</div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <span className="inline-block px-3 py-1 bg-purple-100 text-purple-700 text-sm font-semibold rounded-full mb-3">
            POSSUM CONTROL KNOWLEDGE CENTER
          </span>
          <h2 className="text-4xl font-bold mb-4 text-gray-900">
            Frequently Asked <span className="text-purple-600">Possum Questions</span>
          </h2>
          <div className="w-24 h-1 bg-purple-500 mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Find expert answers to common questions about possum problems, humane removal methods, prevention strategies, and wildlife regulations.
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
            <h3 className="text-xl font-semibold mb-3">Have more questions about possum control?</h3>
            <p className="text-gray-600 mb-4">Our wildlife specialists are ready to answer your questions and provide expert guidance for your specific situation.</p>
            <a href="/contact" className="modern-button bg-gradient-to-r from-purple-500 to-purple-600 text-white transition-colors">
              Schedule a Consultation
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

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
  const contentId = `bird-faq-content-${index}`;

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

export default function BirdControlFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqItems = [
    {
      question: "What damage can birds cause to my property?",
      answer: "Birds can cause significant damage to buildings and properties in several ways: 1) Their droppings are highly acidic and can corrode building materials, damage paint finishes, and stain surfaces; 2) Nesting materials can block gutters, downspouts, and ventilation systems, leading to water damage and reduced HVAC efficiency; 3) Some species like woodpeckers can directly damage wooden structures by drilling holes; 4) Nests built near electrical equipment can create fire hazards; 5) Large accumulations of droppings create slip-and-fall hazards on walkways; and 6) Bird droppings can accelerate the deterioration of roofing materials, potentially shortening roof lifespan. Beyond property damage, bird infestations can also create health hazards through disease transmission and contamination of food preparation areas."
    },
    {
      question: "Are your bird control methods humane?",
      answer: "Yes, all our bird control methods are humane and comply with wildlife protection laws. We exclusively use non-lethal deterrent and exclusion techniques that discourage birds from roosting or nesting on your property without causing harm. Our physical barriers like netting, spikes, and wire systems prevent birds from accessing protected areas but don't trap or injure them. Visual and sensory deterrents modify bird behavior through discomfort rather than harm. We're committed to ethical pest management and stay current on wildlife protection regulations to ensure our methods are both effective and humane. For protected species, we obtain any necessary permits and follow strict protocols to ensure compliance with all applicable laws."
    },
    {
      question: "How long do bird control solutions last?",
      answer: "The longevity of bird control solutions varies based on several factors: 1) Physical exclusion systems like bird netting, spikes, and wire systems typically last 5-10+ years with proper installation and maintenance; 2) Electric track systems generally last 5-8 years before components may need replacement; 3) Visual deterrents like reflective materials may need replacement every 1-3 years as they weather and lose effectiveness; 4) The specific bird species being deterred affects longevity, as some birds are more persistent than others; and 5) Environmental factors like weather exposure, pollution levels, and UV radiation impact durability. We use commercial-grade materials designed for long-term outdoor use and offer maintenance programs to ensure continued effectiveness. Our solutions are designed to provide lasting protection with minimal ongoing maintenance requirements."
    },
    {
      question: "What's involved in a bird control assessment?",
      answer: "Our comprehensive bird control assessment includes: 1) Identifying the specific bird species causing problems through direct observation and evidence analysis; 2) Documenting all areas where birds are roosting, nesting, or feeding on your property; 3) Assessing building features that attract birds, such as ledges, signs, HVAC equipment, and architectural elements; 4) Evaluating environmental factors like nearby food sources, water access, and surrounding habitat; 5) Documenting existing damage from droppings, nesting materials, and direct bird activity; 6) Identifying health and safety concerns related to the infestation; 7) Reviewing any previous control attempts and their outcomes; and 8) Considering aesthetic requirements, budget constraints, and maintenance capabilities. This thorough assessment allows us to develop a customized management plan that addresses your specific bird problem effectively while considering your property's unique characteristics."
    },
    {
      question: "Can birds carry diseases that affect humans?",
      answer: "Yes, birds and their droppings can transmit several diseases to humans: 1) Histoplasmosis, a respiratory disease caused by a fungus that grows in bird droppings, particularly in accumulated droppings; 2) Cryptococcosis, another fungal disease associated with pigeon droppings that can cause serious lung infections; 3) Psittacosis (Ornithosis), a bacterial infection transmitted by infected birds, especially pigeons, causing flu-like symptoms and pneumonia; 4) Salmonellosis, which can be contracted from handling birds or surfaces contaminated with their droppings; 5) E. coli infections from contaminated water sources; and 6) West Nile Virus, which birds can carry and transmit to humans through mosquito vectors. Additionally, birds host ectoparasites like mites, ticks, and fleas that can infest buildings and bite humans. Professional bird management and proper cleanup of contaminated areas are essential for reducing these health risks."
    },
    {
      question: "How do you clean up bird droppings after control measures are installed?",
      answer: "Our bird dropping cleanup process follows strict safety and sanitation protocols: 1) Technicians wear appropriate personal protective equipment (PPE) including respirators, gloves, and protective clothing to prevent exposure to pathogens; 2) We apply EPA-approved disinfectants to kill bacteria, fungi, and viruses before removal begins; 3) For large accumulations, we use specialized vacuum equipment with HEPA filtration to safely collect and contain droppings; 4) All contaminated materials are properly bagged and disposed of according to local regulations; 5) After removal, surfaces are thoroughly cleaned with appropriate cleaning agents based on the surface material; 6) For porous surfaces that have absorbed droppings, we use specialized treatments to neutralize odors and stains; 7) Finally, we apply sanitizing treatments to eliminate any remaining pathogens. This comprehensive approach ensures that health hazards are properly addressed after the birds have been excluded from the area."
    },
    {
      question: "Are there any bird species you cannot control due to legal protections?",
      answer: "Most bird species in the United States are protected under the Migratory Bird Treaty Act and other wildlife laws, which prohibit harming birds, their nests, eggs, or young without proper permits. However, these regulations generally allow for non-lethal deterrent methods that don't directly harm the birds. Three non-native species—European starlings, house sparrows, and pigeons (rock doves)—have fewer protections and can be managed with greater flexibility. For protected native species like woodpeckers, swallows, and raptors, we use only exclusion and deterrent methods that comply with all regulations. In some cases involving protected species, permits may be required from wildlife authorities before implementing certain control measures, particularly if active nests are present. Our specialists are knowledgeable about these regulations and ensure all our bird management approaches are legally compliant while still effectively addressing your bird problems."
    },
    {
      question: "How quickly can you implement bird control solutions?",
      answer: "Our implementation timeline depends on several factors: 1) The size and complexity of your property—larger commercial buildings typically require more extensive preparations than smaller structures; 2) The severity of the infestation—heavy infestations with significant accumulations of droppings may require cleanup before installation; 3) The specific control methods being implemented—netting installations for large areas require more time than installing spikes or wire systems; 4) Weather conditions, as some installations require appropriate weather for proper application; 5) Material availability, though we maintain stock of common materials to minimize delays; and 6) Permit requirements for protected species, which may add time to the process. Typically, smaller residential projects can be completed within 1-3 days, while larger commercial projects may take 1-2 weeks. For urgent situations, we offer expedited services when possible. During your consultation, we'll provide a specific timeline based on your unique situation."
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
            BIRD CONTROL KNOWLEDGE CENTER
          </span>
          <h2 className="text-4xl font-bold mb-4 text-gray-900">
            Frequently Asked <span className="text-blue-600">Bird Questions</span>
          </h2>
          <div className="w-24 h-1 bg-blue-500 mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Find expert answers to common questions about bird problems, control methods, health concerns, and protecting your property from bird damage.
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
            <h3 className="text-xl font-semibold mb-3">Have more questions about bird control?</h3>
            <p className="text-gray-600 mb-4">Our bird management specialists are ready to answer your questions and provide expert guidance for your specific situation.</p>
            <a href="/contact" className="modern-button bg-gradient-to-r from-blue-500 to-blue-600 text-white transition-colors">
              Schedule a Consultation
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

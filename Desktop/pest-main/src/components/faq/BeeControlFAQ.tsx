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
  const contentId = `bee-faq-content-${index}`;

  return (
    <div className="mb-4 modern-card overflow-hidden transition-all duration-300 hover:shadow-lg">
      <div
        className={`flex justify-between items-center p-5 cursor-pointer transition-colors duration-300 ${isOpen ? 'bg-amber-50' : 'bg-white'}`}
        onClick={() => toggleAccordion(index)}
      >
        <div className="flex items-center pr-4">
          <div className="w-8 h-8 rounded-full bg-gradient-to-r from-amber-500 to-amber-600 flex items-center justify-center mr-4 text-white text-sm shadow-sm">
            {index}
          </div>
          <h3 className={`font-medium text-lg transition-colors duration-300 ${isOpen ? 'text-amber-700' : 'text-gray-800'}`}>{question}</h3>
        </div>
        <div
          role="button"
          className={`text-gray-600 focus:outline-none transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
          tabIndex={0}
          aria-label={isOpen ? "Collapse answer" : "Expand answer"}
        >
          <div className={`w-8 h-8 rounded-full flex items-center justify-center transition-colors duration-300 ${isOpen ? 'bg-amber-100 text-amber-600' : 'bg-gray-100'}`}>
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

export default function BeeControlFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqItems = [
    {
      question: "What's the difference between bees, wasps, and hornets?",
      answer: "Bees, wasps, and hornets have distinct characteristics: Bees are typically robust and hairy with flat rear legs for carrying pollen. They're generally non-aggressive unless defending their hive and can only sting once. Honey bees and bumble bees are important pollinators. Wasps are sleeker with narrow waists and smooth, shiny bodies. They're more aggressive, can sting multiple times, and include paper wasps and yellow jackets. Hornets are a type of wasp, but larger, with black and white (rather than yellow and black) markings. They build paper nests in trees or structures and can be highly aggressive when disturbed. Our specialists can accurately identify which type of stinging insect you're dealing with and recommend appropriate management strategies."
    },
    {
      question: "Why shouldn't I just kill bees on my property?",
      answer: "Honey bees and native bee species are essential pollinators that support our ecosystem and food supply—approximately one-third of the food we eat depends on bee pollination. Bee populations have been declining globally due to habitat loss, pesticides, climate change, and disease. When you choose humane bee removal and relocation instead of extermination, you're helping preserve these vital insects while still protecting your property. Additionally, killing honey bees often doesn't solve the problem, as abandoned honeycomb can attract other pests and cause structural damage. Our professional bee management services safely relocate colonies to appropriate environments where they can continue their important ecological role."
    },
    {
      question: "What's the difference between a swarm and an established colony?",
      answer: "Bee swarms and established colonies represent different stages of honey bee colony development and require different management approaches. A swarm is a temporary cluster of bees with a queen that has left an existing hive to establish a new colony. Swarms typically hang from tree branches or structures for 24-72 hours while scout bees search for a permanent home. They're generally docile as they have no hive to defend. Swarms can be easily captured and relocated by professionals. An established colony has found a permanent location (often within a structure) and built honeycomb for brood rearing and honey storage. These colonies are more defensive and require specialized extraction techniques to remove the entire colony, including honeycomb. Our bee specialists can determine whether you're dealing with a temporary swarm or established colony and implement the appropriate management strategy."
    },
    {
      question: "How do you safely remove bees without killing them?",
      answer: "Our humane bee removal process varies based on whether we're dealing with a swarm or established colony. For swarms, our specialists wear protective gear and carefully collect the entire cluster, including the queen, using specialized equipment. The captured swarm is then transferred to a new hive box and relocated to a local apiary. For established colonies in structures, we may use several techniques: 1) Bee vacuums that safely collect bees without harming them; 2) Trap-outs that allow bees to exit but not return to the hive; or 3) Controlled cut-outs where we carefully open the structure, remove the honeycomb with brood, secure it in frames, and collect the bees. In all cases, the captured bees are relocated to apiaries where they can continue their essential pollination work."
    },
    {
      question: "What happens to the bees after you remove them?",
      answer: "After removal, we transport the bees to local beekeepers and apiaries who have agreed to accept and care for the relocated colonies. For swarms, this typically involves transferring them directly into new hive boxes where they can establish themselves. For established colonies, we carefully secure any brood comb (containing developing bees) into frames that fit standard hive boxes, allowing the colony to continue developing. The beekeepers then monitor the relocated colonies, ensuring they have adequate resources and treating for any pests or diseases. These relocated bees become part of managed apiaries where they produce honey and provide pollination services for local agriculture and ecosystems. This approach benefits both property owners and the environment by resolving the immediate issue while preserving these essential pollinators."
    },
    {
      question: "How can I prevent bees from establishing on my property?",
      answer: "To discourage bees from establishing on your property: 1) Seal potential entry points in structures, including gaps around pipes, vents, and utility penetrations, cracks in siding, and openings under eaves; 2) Regularly inspect your property for early signs of bee activity, especially in spring and early summer when swarms are most active; 3) Remove or properly maintain hollow trees that might attract nesting bees; 4) Consider applying bee-deterrent treatments to areas that have previously attracted bees; 5) Keep garbage containers tightly sealed to avoid attracting wasps; and 6) Schedule annual preventative inspections with our specialists to identify and address potential bee attractants. While these measures can significantly reduce the likelihood of bee colonies establishing on your property, they're not guaranteed to prevent all bee activity, especially in areas with high bee populations."
    },
    {
      question: "What should I do if I find a bee swarm or hive?",
      answer: "If you discover a bee swarm or hive on your property: 1) Keep a safe distance—at least 20 feet from the bees; 2) Keep children and pets away from the area; 3) Do NOT disturb the bees by throwing objects, spraying water, or using store-bought insecticides, as this may provoke defensive behavior; 4) Contact our professional bee management team immediately for assessment; 5) If the bees are inside a structure, note any bee flight patterns to help our specialists locate the colony; and 6) If someone is stung and shows signs of an allergic reaction (difficulty breathing, swelling beyond the sting site, dizziness), seek emergency medical attention immediately. Our specialists will respond promptly to assess the situation and recommend the most appropriate, environmentally responsible management approach."
    },
    {
      question: "Are your bee management services available for emergencies?",
      answer: "Yes, we offer emergency bee management services for situations that require immediate attention, such as: 1) Swarms or colonies in high-traffic areas where people cannot avoid proximity; 2) Bees inside living spaces; 3) Individuals with known bee allergies on the property; and 4) Aggressive bee behavior that poses an immediate safety risk. Our emergency response team is available 7 days a week and can typically respond within 2-4 hours of your call. For emergency situations, please call our direct line rather than booking online to ensure the fastest possible response. We'll provide guidance on temporary safety measures until our specialists arrive and implement a permanent solution."
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden">
      <div className="absolute -top-20 -left-20 w-64 h-64 bg-amber-100/10 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-amber-100/10 rounded-full blur-3xl"></div>
      <div className="absolute top-20 right-10 text-8xl text-amber-200 font-serif">?</div>
      <div className="absolute bottom-20 left-10 text-6xl text-amber-200 font-serif">?</div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <span className="inline-block px-3 py-1 bg-amber-100 text-amber-700 text-sm font-semibold rounded-full mb-3">
            BEE MANAGEMENT KNOWLEDGE CENTER
          </span>
          <h2 className="text-4xl font-bold mb-4 text-gray-900">
            Frequently Asked <span className="text-amber-600">Bee Questions</span>
          </h2>
          <div className="w-24 h-1 bg-amber-500 mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Find expert answers to common questions about bee identification, humane removal methods, relocation processes, and prevention strategies.
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
            <h3 className="text-xl font-semibold mb-3">Have more questions about bee management?</h3>
            <p className="text-gray-600 mb-4">Our bee specialists are ready to answer your questions and provide expert guidance for your specific situation.</p>
            <a href="/contact" className="modern-button bg-gradient-to-r from-amber-500 to-amber-600 text-white transition-colors">
              Schedule a Consultation
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

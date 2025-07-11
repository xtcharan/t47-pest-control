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
  const contentId = `bedbug-faq-content-${index}`;

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

export default function BedBugControlFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqItems = [
    {
      question: "How can I tell if I have bed bugs?",
      answer: "Common signs of bed bug infestation include: unexplained bite marks typically in lines or clusters on exposed skin; small blood spots on sheets from crushed bugs; dark fecal spots (about the size of a period) on mattresses, box springs, or nearby walls; shed skins and eggshells in seams and crevices; a sweet, musty odor in heavily infested areas; and live bed bugs, which are reddish-brown, oval-shaped, and about the size of an apple seed. If you're experiencing these signs, we recommend scheduling a professional inspection immediately, as early detection significantly improves treatment outcomes."
    },
    {
      question: "How do bed bugs get into homes?",
      answer: "Bed bugs are expert hitchhikers that enter homes through various pathways: 1) Used furniture, particularly beds and couches; 2) Luggage and clothing after staying in infested hotels or vacation rentals; 3) Visitors who unknowingly bring them from infested locations; 4) Adjacent units in multi-family housing through wall voids, electrical outlets, and pipe chases; 5) Public transportation; 6) Schools, offices, and other public spaces; and 7) Secondhand items like books, purses, and electronics. Bed bugs don't discriminate based on cleanliness—even immaculate homes can become infested through these introduction methods."
    },
    {
      question: "Why is heat treatment effective against bed bugs?",
      answer: "Heat treatment is highly effective against bed bugs for several reasons: 1) It penetrates deep into furniture, wall voids, and other hiding spots that chemical treatments might miss; 2) It kills bed bugs at ALL life stages, including eggs, which are resistant to many insecticides; 3) Bed bugs cannot develop resistance to heat, unlike chemical treatments; 4) It provides immediate results in a single treatment; 5) It's non-toxic and doesn't leave chemical residues; and 6) It can treat an entire room or home at once, eliminating the need to locate every hiding spot. Our professional heat treatment raises temperatures to 135-145°F, well above the thermal death point for bed bugs (around 120°F), ensuring complete elimination."
    },
    {
      question: "How should I prepare for bed bug treatment?",
      answer: "Preparation requirements vary based on treatment method, but generally include: 1) Removing pets, plants, and heat-sensitive items (candles, medications, etc.); 2) Laundering and heat-treating clothing and linens (wash and dry on high heat for at least 30 minutes); 3) Reducing clutter to minimize hiding spots; 4) Moving furniture away from walls; 5) Emptying dressers and nightstands; 6) Removing wall hangings; and 7) Vacuuming thoroughly. For heat treatments specifically, additional preparation may include removing electronics and items that could melt. We provide detailed, customized preparation instructions before your scheduled treatment to ensure optimal effectiveness."
    },
    {
      question: "How long does bed bug treatment take?",
      answer: "Treatment duration varies based on infestation severity, property size, and treatment method. Heat treatments typically take 6-8 hours for a standard apartment or 8-12 hours for larger homes, as we must maintain lethal temperatures throughout the treatment area for several hours. Traditional chemical treatments may require less time initially (2-4 hours) but often necessitate follow-up treatments 2-3 weeks apart. Our comprehensive approach may combine multiple treatment methods for optimal results. Most properties can be treated in a single day, though severe infestations in large properties might require multiple days. You can typically return home the same day treatment is completed."
    },
    {
      question: "Are your bed bug treatments safe for my family and pets?",
      answer: "Yes, our bed bug treatments prioritize safety while delivering effective results. Our heat treatments are completely non-toxic, using only high temperatures to eliminate bed bugs without chemical residues. When targeted chemical applications are necessary, we use products specifically formulated for indoor use with low toxicity to humans and pets. We apply these products precisely to areas where bed bugs hide, minimizing exposure. All treatments include appropriate safety protocols, including temporary evacuation during the process and clear guidance on when it's safe to return. We're happy to address any specific health concerns or sensitivities during your consultation."
    },
    {
      question: "How can I prevent bed bugs when traveling?",
      answer: "To prevent bringing bed bugs home while traveling: 1) Inspect hotel rooms before unpacking—check mattress seams, headboards, and furniture for bugs, shed skins, and fecal spots; 2) Keep luggage elevated on luggage racks or in the bathroom, away from beds and upholstered furniture; 3) Store clothing in sealed plastic bags within your suitcase; 4) Use protective luggage covers or large plastic bags to encase suitcases during your stay; 5) Upon returning home, unpack directly into washing machine and launder all clothing on high heat; 6) Vacuum suitcases thoroughly and store them away from bedrooms; and 7) Consider using a portable heating device designed to treat luggage. These precautions significantly reduce the risk of introducing bed bugs to your home."
    },
    {
      question: "Do you guarantee your bed bug treatments?",
      answer: "Yes, we stand behind our bed bug elimination services with a 90-day guarantee. If live bed bugs reappear within 90 days of our treatment, we'll return to re-treat at no additional cost. This guarantee applies to our comprehensive treatment packages and requires that you've followed all preparation instructions and post-treatment recommendations. For optimal protection, we recommend our follow-up inspection service, where we return 2-3 weeks after treatment to verify elimination success. Some properties, particularly in multi-unit buildings where neighboring units may be infested, may benefit from our extended protection plans. We're confident in our ability to solve your bed bug problem completely."
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
            BED BUG ELIMINATION KNOWLEDGE CENTER
          </span>
          <h2 className="text-4xl font-bold mb-4 text-gray-900">
            Frequently Asked <span className="text-green-dark">Bed Bug Questions</span>
          </h2>
          <div className="w-24 h-1 bg-green-light mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Find expert answers to common questions about bed bug detection, treatment options, prevention strategies, and how to reclaim your peace of mind.
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
            <h3 className="text-xl font-semibold mb-3">Have more questions about bed bug elimination?</h3>
            <p className="text-gray-600 mb-4">Our bed bug specialists are ready to answer your questions and provide expert guidance for your specific situation.</p>
            <a href="/contact" className="modern-button bg-gradient-to-r from-green-light to-green-dark text-white transition-colors">
              Schedule a Consultation
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

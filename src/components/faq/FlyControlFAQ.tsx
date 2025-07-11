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
  const contentId = `fly-faq-content-${index}`;

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

export default function FlyControlFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqItems = [
    {
      question: "What health risks do flies pose?",
      answer: "Flies pose significant health risks through multiple transmission routes: 1) Mechanical transmission—flies pick up pathogens on their body parts and leg hairs when landing on waste, then transfer these to food and surfaces; 2) Regurgitation—flies partially digest food by regurgitating digestive juices onto it, potentially contaminating surfaces with pathogens; 3) Defecation—fly droppings can contain harmful bacteria and pathogens; and 4) Direct food contamination when flies land on food items. Flies can transmit over 65 diseases including typhoid fever, cholera, salmonellosis, dysentery, and E. coli infections. They can also spread parasites like roundworms and tapeworms. In commercial settings, fly infestations can lead to failed health inspections, damaged reputation, and lost business. Our professional fly control helps protect your family or customers from these health risks."
    },
    {
      question: "How can I tell what type of flies I have?",
      answer: "Different fly species have distinctive characteristics: 1) House flies (6-7mm) have gray bodies with four dark stripes on the thorax and sponging mouthparts; 2) Fruit flies (3-4mm) are tan or brownish with distinctive red eyes and are found near fermenting fruits and vegetables; 3) Drain flies (2-5mm) have a fuzzy, moth-like appearance with light gray or tan coloration and are found near drains and moist areas; 4) Blow flies (8-10mm) have a distinctive metallic blue or green sheen and are attracted to decaying meat; 5) Cluster flies (8-10mm) have yellowish hairs on their thorax and cluster in large numbers during fall; and 6) Phorid flies (2-4mm) have a distinctive humped thorax and tend to run across surfaces rather than fly. Our technicians can provide accurate identification during an inspection, which is crucial for effective treatment since different species require different control approaches."
    },
    {
      question: "Why do I have flies in my clean house?",
      answer: "Even in clean homes, flies can become a problem for several reasons: 1) Hidden breeding sources—small amounts of organic matter in drains, garbage disposals, or recycling bins can support fly development; 2) Entry from outside—flies can enter through open doors, windows without screens, or small gaps around windows and doors; 3) Potted plants—overwatering can create conditions for fungus gnats, while decaying plant matter can attract fruit flies; 4) Pet areas—even well-maintained pet areas can attract flies if waste isn't removed promptly; 5) Fruit and produce—even fresh produce can attract fruit flies, especially as it ripens; 6) Recycling bins—residue in bottles and cans can provide breeding sites; and 7) Neighboring properties—fly problems nearby can affect your home. Our comprehensive inspection identifies these hidden sources and entry points, allowing us to develop an effective treatment plan even for well-maintained homes."
    },
    {
      question: "How quickly can you eliminate a fly infestation?",
      answer: "The timeline for complete fly elimination varies based on several factors: 1) Fly species—different species have different lifecycle lengths and breeding habits; 2) Infestation severity—larger populations require more time to control; 3) Source accessibility—hidden breeding sources may take longer to locate and eliminate; 4) Property characteristics—larger properties or those with multiple potential breeding sites require more extensive treatment; and 5) Environmental factors—warm weather can accelerate fly reproduction, potentially extending the treatment timeline. Typically, you'll notice a significant reduction in adult flies within 1-3 days after initial treatment. Complete elimination, including breaking the breeding cycle, generally takes 1-2 weeks. For severe infestations or those involving multiple species, the process may take up to 3-4 weeks. Our technicians provide a specific timeline estimate after the initial inspection based on your unique situation."
    },
    {
      question: "What's included in your fly control service?",
      answer: "Our comprehensive fly control service includes: 1) Thorough inspection to identify fly species, breeding sources, entry points, and contributing factors; 2) Source elimination to remove breeding materials and habitats; 3) Targeted treatments using appropriate products for the specific fly species and situation; 4) Drain treatments for drain flies and other species breeding in plumbing; 5) Residual surface treatments to control adult flies; 6) Installation of monitoring devices to track fly activity and treatment effectiveness; 7) Exclusion recommendations to prevent flies from entering your home or business; 8) Sanitation and waste management guidance to prevent future infestations; 9) Follow-up inspections to ensure complete elimination; and 10) Ongoing maintenance programs for continued protection. All treatments are performed by licensed technicians using products and methods that prioritize the safety of your family, pets, and customers while effectively eliminating flies."
    },
    {
      question: "Are your fly control methods safe for my family and pets?",
      answer: "Yes, our fly control methods prioritize the safety of your family and pets while effectively eliminating flies. We use a multi-layered approach to ensure safety: 1) Targeted application—we apply products only where needed, focusing on areas where flies breed and rest; 2) Low-toxicity formulations—we select products with the lowest toxicity necessary for effectiveness; 3) Precise application methods—our technicians are trained in application techniques that minimize exposure to non-target areas; 4) Integrated approach—we emphasize non-chemical methods like source elimination and exclusion whenever possible; 5) Food-safe products—in kitchens and food preparation areas, we use only products approved for use around food; 6) Pet-friendly considerations—we provide guidance on temporary restrictions for pets during and after treatment; and 7) EPA-registered products—all products we use are registered with the Environmental Protection Agency and applied according to label instructions. We're happy to address any specific health concerns or sensitivities during your consultation."
    },
    {
      question: "How can I prevent flies from returning after treatment?",
      answer: "To maintain a fly-free environment after professional treatment: 1) Manage waste properly by using tightly sealed garbage containers, emptying them regularly, and cleaning them periodically; 2) Clean drains regularly using bacterial drain treatments or a mixture of baking soda, salt, and vinegar followed by boiling water; 3) Store food in sealed containers and promptly clean up spills and crumbs; 4) Keep fruits and vegetables refrigerated or in sealed containers once ripe; 5) Maintain proper moisture control by fixing leaks, ensuring proper drainage, and avoiding overwatering plants; 6) Install and maintain screens on windows and doors; 7) Use weather stripping and door sweeps to seal gaps around doors and windows; 8) Clean pet areas daily and dispose of waste properly; 9) Maintain your yard by removing fallen fruits, keeping grass short, and eliminating standing water; and 10) Consider our maintenance program with regular inspections and preventative treatments, especially for commercial properties or homes in areas with high fly pressure."
    },
    {
      question: "Do you offer commercial fly control for restaurants and businesses?",
      answer: "Yes, we offer specialized commercial fly control services tailored to the unique needs of restaurants, food processing facilities, healthcare settings, and other businesses. Our commercial services include: 1) Discreet scheduling options that minimize disruption to your operations; 2) Compliance with health department regulations and industry standards; 3) HACCP-compatible treatments suitable for food handling areas; 4) Installation and maintenance of commercial-grade fly light traps and other monitoring devices; 5) Staff training on fly prevention practices; 6) Documentation for health inspections and audit requirements; 7) Regular maintenance programs with scheduled inspections and treatments; 8) Emergency response for sudden infestations; 9) Comprehensive reporting on fly activity, treatment methods, and results; and 10) Customized solutions based on your specific business type, facility layout, and operational needs. Our commercial fly control helps protect your reputation, maintain regulatory compliance, and provide a pleasant environment for customers and employees."
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
            FLY CONTROL KNOWLEDGE CENTER
          </span>
          <h2 className="text-4xl font-bold mb-4 text-gray-900">
            Frequently Asked <span className="text-blue-600">Fly Questions</span>
          </h2>
          <div className="w-24 h-1 bg-blue-500 mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Find expert answers to common questions about fly identification, health risks, control methods, prevention strategies, and protecting your home or business.
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
            <h3 className="text-xl font-semibold mb-3">Have more questions about fly control?</h3>
            <p className="text-gray-600 mb-4">Our fly control specialists are ready to answer your questions and provide expert guidance for your specific situation.</p>
            <a href="/contact" className="modern-button bg-gradient-to-r from-blue-500 to-blue-600 text-white transition-colors">
              Schedule a Consultation
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

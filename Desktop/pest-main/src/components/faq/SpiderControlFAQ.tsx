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
  const contentId = `spider-faq-content-${index}`;

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

export default function SpiderControlFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqItems = [
    {
      question: "How do I know if I have a spider infestation?",
      answer: "Signs of a spider infestation include: frequent sightings of spiders in your home; numerous webs in corners, ceilings, windows, or other areas; egg sacs (small silk-wrapped bundles) in hidden areas; shed spider skins; and increased presence of other insects that serve as food for spiders. If you're seeing multiple spiders daily, especially of the same species, it likely indicates an established population rather than occasional wanderers."
    },
    {
      question: "Are all spiders dangerous?",
      answer: "No, most spiders found in homes are not dangerous to humans. In fact, the vast majority of spiders are beneficial as they help control other insect populations. However, certain species like black widows and brown recluses have venom that can cause serious reactions in some people. Even with non-venomous spiders, some individuals may experience allergic reactions to spider bites. Our professional spider control services can identify potentially dangerous species and implement appropriate treatment strategies."
    },
    {
      question: "How do you treat for spiders?",
      answer: "Our spider treatment approach includes: 1) Thorough inspection to identify spider species and harborage areas; 2) Removal of existing webs, egg sacs, and spiders; 3) Targeted applications to cracks, crevices, and other hiding spots; 4) Perimeter treatments to create a protective barrier; 5) Dust applications in void areas where spiders may hide; and 6) Implementation of preventative measures to discourage future infestations. We use a combination of methods tailored to your specific situation and the spider species present."
    },
    {
      question: "How long does spider treatment take to work?",
      answer: "You should notice a significant reduction in spider activity within 1-2 days after treatment. Complete elimination typically takes 1-2 weeks as spiders encounter the treated areas. For severe infestations or certain species, follow-up treatments may be necessary. Our treatments target both adult spiders and their egg sacs to break the reproductive cycle and provide long-term control."
    },
    {
      question: "Are your spider treatments safe for children and pets?",
      answer: "Yes, we prioritize the safety of your family and pets. We offer a range of treatment options, including eco-friendly and low-toxicity solutions. Our technicians are trained to apply treatments in a way that minimizes exposure to humans and pets. We'll provide clear instructions on any precautions to take during and after treatment, such as temporary evacuation times and when it's safe to re-enter treated areas."
    },
    {
      question: "How can I prevent spiders from entering my home?",
      answer: "To prevent spiders from entering your home: 1) Seal cracks and gaps around windows, doors, and foundations; 2) Install door sweeps and weather stripping; 3) Keep vegetation trimmed away from your home; 4) Reduce clutter where spiders can hide; 5) Regularly clean and vacuum, especially in corners and under furniture; 6) Remove webs as soon as you spot them; 7) Control other insects that serve as food sources; and 8) Consider regular professional treatments, especially if you live in an area prone to venomous spider species."
    },
    {
      question: "Do you offer ongoing spider prevention services?",
      answer: "Yes, we offer ongoing spider prevention services through our regular maintenance programs. These programs include scheduled inspections and preventative treatments to maintain a protective barrier around your home. Regular maintenance is particularly important in areas prone to spider problems or for properties that have experienced infestations in the past. Our maintenance plans can be customized based on your specific needs and the level of protection required."
    },
    {
      question: "What should I do if I find a venomous spider in my home?",
      answer: "If you find what you believe to be a venomous spider: 1) Do not attempt to handle it; 2) If possible, trap it under a clear container for identification (without touching it); 3) Take a photo from a safe distance if you can't trap it; 4) Keep children and pets away from the area; 5) Contact us immediately for emergency spider control services. Our technicians are trained to identify venomous species and can implement immediate treatment to ensure your family's safety."
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
            SPIDER CONTROL FAQ
          </span>
          <h2 className="text-4xl font-bold mb-4 text-gray-900">
            Frequently Asked <span className="text-green-dark">Spider Control Questions</span>
          </h2>
          <div className="w-24 h-1 bg-green-light mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Find answers to common questions about our professional spider control services, treatment methods, and prevention strategies.
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
            <h3 className="text-xl font-semibold mb-3">Have more questions about spider control?</h3>
            <p className="text-gray-600 mb-4">Our spider control specialists are ready to answer any other questions you might have about our services.</p>
            <a href="/contact" className="modern-button bg-gradient-to-r from-green-light to-green-dark text-white transition-colors">
              Schedule a Consultation
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

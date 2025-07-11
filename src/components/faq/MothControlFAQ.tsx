"use client";

import { useState } from 'react';

interface FAQItemProps {
  question: string;
  answer: string;
  index: number;
  isOpen: boolean;
  toggleAccordion: () => void;
}

const FAQItem = ({ question, answer, index, isOpen, toggleAccordion }: FAQItemProps) => {
  return (
    <div className="mb-4 modern-card overflow-hidden transition-all duration-300 hover:shadow-lg">
      <div
        className={`flex justify-between items-center p-5 cursor-pointer transition-colors duration-300 ${isOpen ? 'bg-green-light/10' : 'bg-white'}`}
        onClick={toggleAccordion}
      >
        <div className="flex items-center pr-4">
          <div className="w-8 h-8 rounded-full bg-gradient-to-r from-green-light to-green-dark flex items-center justify-center mr-4 text-white text-sm shadow-sm">
            {index}
          </div>
          <h3 className={`font-medium text-lg transition-colors duration-300 ${isOpen ? 'text-green-dark' : 'text-gray-800'}`}>{question}</h3>
        </div>
        {/* Toggle button with animation */}
        <div
          role="button"
          className={`flex items-center justify-center w-8 h-8 rounded-full border border-gray-200 transition-all duration-300 ${isOpen ? 'bg-green-dark border-green-dark rotate-180' : 'bg-white'}`}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className={`h-4 w-4 transition-colors duration-300 ${isOpen ? 'text-white' : 'text-gray-500'}`}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </div>
      <div
        className={`overflow-hidden transition-all duration-300 ${
          isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="p-5 bg-white border-t border-gray-100">
          <p className="text-gray-600">{answer}</p>
        </div>
      </div>
    </div>
  );
};

export default function MothControlFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqItems = [
    {
      question: "What types of moths do you treat?",
      answer: "We treat all common moth species found in residential and commercial properties, including clothes moths (webbing and case-bearing), pantry moths (Indian meal moths), carpet moths, brown house moths, and white-shouldered house moths. Our technicians are trained to identify different moth species and implement the most effective treatment strategies for each type of infestation."
    },
    {
      question: "How can I tell if I have a moth infestation?",
      answer: "Signs of a moth infestation include: 1) Visible adult moths flying or resting on walls and ceilings; 2) Small holes or irregular damage in clothing, fabrics, or carpets; 3) Silky tubes or webbing on fabrics or in food storage areas; 4) Small cream-colored larvae (caterpillars) in closets, carpets, or pantries; 5) Cocoons in hidden areas like corners or folds of fabric; 6) Unusual musty odor in closets or food storage areas; and 7) Damaged food products in pantries or cupboards."
    },
    {
      question: "How do moths get into my home?",
      answer: "Moths can enter your home through: 1) Open doors and windows, especially at night when they're attracted to light; 2) Gaps around doors, windows, and utility penetrations; 3) Infested items brought into the home, such as secondhand clothing, furniture, or food products; 4) Grocery items that already contain moth eggs or larvae; 5) Attached garages or storage areas; and 6) Natural migration from outdoor areas, particularly during warmer months."
    },
    {
      question: "Are moth treatments safe for my family and pets?",
      answer: "Yes, our moth treatments are designed with your family's safety in mind. We use targeted application methods and products that are approved for residential use when applied according to label instructions. During treatment, we'll advise you on any temporary precautions, such as staying out of treated areas until products have dried. We also offer alternative treatment options for sensitive environments or individuals with specific health concerns. Your technician will discuss all safety aspects before beginning treatment."
    },
    {
      question: "How long does a moth treatment take?",
      answer: "The duration of a moth treatment depends on several factors, including the type of moths, the extent of the infestation, and the size of the area being treated. A typical residential treatment takes approximately 1-2 hours to complete. More extensive infestations or larger properties may require additional time. Your technician will provide a time estimate during the initial inspection. In some cases, follow-up treatments may be necessary to ensure complete elimination of the infestation."
    },
    {
      question: "How can I prevent moths from returning after treatment?",
      answer: "To prevent moths from returning after treatment: 1) Store clothing and textiles in sealed containers or garment bags; 2) Clean clothing before storage, as moths are attracted to body oils and food stains; 3) Regularly vacuum carpets, upholstery, and dark corners where moths may hide; 4) Store food products in airtight containers; 5) Keep pantry areas clean and free of spilled food; 6) Use cedar blocks or moth repellents in closets and drawers; 7) Inspect secondhand items before bringing them into your home; and 8) Consider regular professional inspections and preventative treatments, especially if you've had previous infestations."
    },
    {
      question: "Do I need to prepare my home before moth treatment?",
      answer: "Yes, some preparation is typically required before moth treatment. We'll provide specific instructions based on your situation, but general preparation steps include: 1) Removing items from affected closets, drawers, or pantries; 2) Laundering or dry cleaning infested clothing items; 3) Discarding heavily infested food products; 4) Vacuuming carpets, upholstery, and cracks and crevices; 5) Removing pets and covering fish tanks; and 6) Ensuring good access to areas requiring treatment. Our goal is to make the preparation process as straightforward as possible while ensuring effective treatment."
    }
  ];

  return (
    <section className="py-16 bg-gray-50 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-green-50 rounded-full blur-3xl opacity-70 -ml-32 -mt-32"></div>
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-green-50 rounded-full blur-3xl opacity-70 -mr-32 -mb-32"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <span className="inline-block px-3 py-1 bg-green-light/10 text-green-dark text-sm font-semibold rounded-full mb-3">
            MOTH CONTROL FAQ
          </span>
          <h2 className="text-4xl font-bold mb-4 text-gray-900">
            Frequently Asked <span className="text-green-dark">Moth Control Questions</span>
          </h2>
          <div className="w-24 h-1 bg-green-light mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Find answers to common questions about our professional moth control services, treatment methods, and prevention strategies.
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
            <h3 className="text-xl font-semibold mb-3">Have more questions about moth control?</h3>
            <p className="text-gray-600 mb-4">Our moth control specialists are ready to answer any other questions you might have about our services.</p>
            <a href="/contact" className="modern-button bg-gradient-to-r from-green-light to-green-dark text-white transition-colors">
              Schedule a Consultation
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

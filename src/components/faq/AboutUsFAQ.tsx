"use client";

import { useState, useEffect } from 'react';

interface FAQItemProps {
  question: string;
  answer: string;
  index: number;
  isOpen: boolean;
  toggleAccordion: (index: number) => void;
}

const FAQItem = ({ question, answer, index, isOpen, toggleAccordion }: FAQItemProps) => {
  const contentId = `about-faq-content-${index}`;

  return (
    <div className="mb-4 modern-card overflow-hidden transition-all duration-300 hover:shadow-lg">
      <div
        className={`flex justify-between items-center p-6 cursor-pointer transition-colors duration-300 ${
          isOpen ? 'bg-green-light/10' : 'bg-white'
        }`}
        onClick={() => toggleAccordion(index)}
        role="button"
        tabIndex={0}
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            toggleAccordion(index);
          }
        }}
        aria-expanded={isOpen ? 'true' : 'false'}
        aria-controls={contentId}
      >
        <div className="flex items-center pr-4">
          <div className="w-10 h-10 rounded-full bg-gradient-to-r from-primary to-secondary flex items-center justify-center mr-4 text-white text-sm font-bold shadow-sm">
            {index}
          </div>
          <h3 className={`font-semibold text-lg transition-colors duration-300 ${
            isOpen ? 'text-primary' : 'text-gray-800'
          }`}>
            {question}
          </h3>
        </div>
        <div
          className={`text-gray-600 focus:outline-none transition-transform duration-300 ${
            isOpen ? 'rotate-180' : ''
          }`}
          aria-label={isOpen ? "Collapse answer" : "Expand answer"}
        >
          <div className={`w-10 h-10 rounded-full flex items-center justify-center transition-colors duration-300 ${
            isOpen ? 'bg-primary/20 text-primary' : 'bg-gray-100'
          }`}>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </div>
        </div>
      </div>

      <div
        id={contentId}
        className={`overflow-hidden transition-all duration-500 ease-in-out ${
          isOpen ? 'max-h-[800px] opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="p-6 bg-white border-t border-gray-100">
          <div className="text-gray-700 leading-relaxed space-y-3">
            {answer.split('\n\n').map((paragraph, idx) => (
              <p key={idx}>{paragraph}</p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default function AboutUsFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0); // First item open by default

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqItems = [
    {
      question: "What makes T47 Pest Control different from other pest control companies in Australia?",
      answer: "T47 Pest Control stands out through our comprehensive approach combining same-day emergency service, eco-friendly treatments, and advanced technology. We're fully licensed and insured with $20 million public liability coverage, use thermal imaging for termite detection, and offer 7-day availability including public holidays.\n\nOur technicians undergo continuous training on Australian pest species and the latest control methods. We provide transparent pricing with no hidden fees, comprehensive warranties, and free follow-up treatments if pests return within the guarantee period. Our commitment to environmental responsibility and family safety sets us apart in the industry."
    },
    {
      question: "Are T47 Pest Control's treatments safe for children, pets, and the environment?",
      answer: "Absolutely. Safety is our top priority at T47 Pest Control. We use low-toxicity, eco-friendly products that are safe for families and pets when applied correctly. Our Integrated Pest Management (IPM) approach minimizes environmental impact while maximizing effectiveness.\n\nWe follow strict safety protocols and provide detailed instructions for each treatment. Typically, we recommend keeping children and pets away from treated areas for 2-4 hours until applications dry completely. All our products are approved by the Australian Pesticides & Veterinary Medicines Authority (APVMA) and meet environmental protection standards."
    },
    {
      question: "What areas does T47 Pest Control service across Australia?",
      answer: "T47 Pest Control provides comprehensive coverage across Australia's major metropolitan areas, regional centers, and remote locations. We service all major cities including Sydney, Melbourne, Brisbane, Perth, Adelaide, and surrounding suburbs.\n\nOur extensive network allows us to offer same-day service in metropolitan areas, with emergency response within 2 hours for urgent situations. We also provide specialized services to regional towns and rural communities, with flexible scheduling to accommodate remote properties and businesses. Contact us to confirm service availability in your specific location."
    },
    {
      question: "What certifications and licenses does T47 Pest Control hold?",
      answer: "T47 Pest Control holds all required professional certifications and licenses for pest control operations across Australia. We are members of the Australian Pest Control Association (APCA) and maintain current pest control operator licenses in all states where we operate.\n\nOur certifications include licensed pest control technicians, certified termite inspection specialists, chemical application certificates, and workplace health & safety compliance. We carry $20 million public liability insurance, professional indemnity coverage, and comprehensive business insurance. All our operations comply with APVMA regulations, state government licensing requirements, and Australian Standards AS 3660 for termite management."
    },
    {
      question: "How quickly can T47 Pest Control respond to emergency pest situations?",
      answer: "T47 Pest Control offers industry-leading response times with same-day service availability 7 days a week, including public holidays. For emergency situations involving dangerous pests like wasps, spiders, or severe infestations, we provide response within 2 hours in metropolitan areas.\n\nOur standard same-day service is available within 4 hours for most situations, while scheduled appointments can be arranged for the next business day. We maintain 24/7 phone support for urgent situations and have mobile units strategically positioned across our service areas to ensure rapid response times. Emergency situations are prioritized based on safety risks and infestation severity."
    },
    {
      question: "What types of pests does T47 Pest Control specialize in treating?",
      answer: "T47 Pest Control specializes in comprehensive treatment of all major Australian pest species. Our expertise covers termites (subterranean, drywood, dampwood), cockroaches (German, American, Oriental), ants (Argentine, bull, carpenter), spiders (redback, huntsman, wolf), wasps and bees, rodents (rats and mice), and flying insects (flies, mosquitoes, moths).\n\nWe also provide specialized services for bed bugs, fleas, silverfish, bird control, and possum management. Our technicians are trained in species identification, behavior patterns, and targeted treatment methods specific to Australian conditions. We use advanced detection technology including thermal imaging for termites and moisture meters for identifying conducive conditions."
    }
  ];

  // Add structured data for SEO
  useEffect(() => {
    const structuredData = {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": faqItems.map((item) => ({
        "@type": "Question",
        "name": item.question,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": item.answer.replace(/\n\n/g, ' ')
        }
      }))
    };

    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify(structuredData);
    document.head.appendChild(script);

    return () => {
      // Cleanup: remove the script when component unmounts
      const scripts = document.head.querySelectorAll('script[type="application/ld+json"]');
      scripts.forEach(script => {
        if (script.textContent?.includes('"@type":"FAQPage"')) {
          script.remove();
        }
      });
    };
  }, [faqItems]);

  return (
    <div className="space-y-4">
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
  );
}

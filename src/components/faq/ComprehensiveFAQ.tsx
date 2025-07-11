"use client";

import { useState, useEffect } from 'react';

interface FAQItemProps {
  question: string;
  answer: string;
  index: number;
  isOpen: boolean;
  toggleAccordion: (index: number) => void;
  category: string;
}

const FAQItem = ({ question, answer, index, isOpen, toggleAccordion, category }: FAQItemProps) => {
  const contentId = `faq-content-${index}`;

  const getCategoryColor = (cat: string) => {
    switch (cat) {
      case 'general': return 'from-blue-500 to-blue-600';
      case 'safety': return 'from-green-500 to-green-600';
      case 'service': return 'from-red-500 to-red-600';
      case 'pricing': return 'from-purple-500 to-purple-600';
      case 'pests': return 'from-orange-500 to-orange-600';
      default: return 'from-gray-500 to-gray-600';
    }
  };

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
          <div className={`w-10 h-10 rounded-full bg-gradient-to-r ${getCategoryColor(category)} flex items-center justify-center mr-4 text-white text-sm font-bold shadow-sm`}>
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
          isOpen ? 'max-h-[1000px] opacity-100' : 'max-h-0 opacity-0'
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

export default function ComprehensiveFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const categories = [
    { key: 'all', name: 'All Questions', icon: '📋' },
    { key: 'general', name: 'General Info', icon: '🏢' },
    { key: 'safety', name: 'Safety & Environment', icon: '🛡️' },
    { key: 'service', name: 'Services & Process', icon: '🔧' },
    { key: 'pricing', name: 'Pricing & Guarantees', icon: '💰' },
    { key: 'pests', name: 'Pest Information', icon: '🐛' }
  ];

  const faqItems = [
    // General Information
    {
      category: 'general',
      question: "What makes T47 Pest Control different from other pest control companies?",
      answer: "T47 Pest Control stands out through our comprehensive approach combining same-day emergency service, eco-friendly treatments, and advanced technology. We're fully licensed and insured with $20 million public liability coverage, use thermal imaging for termite detection, and offer 7-day availability including public holidays.\n\nOur technicians undergo continuous training on Australian pest species and the latest control methods. We provide transparent pricing with no hidden fees, comprehensive warranties, and free follow-up treatments if pests return within the guarantee period."
    },
    {
      category: 'general',
      question: "What areas does T47 Pest Control service across Australia?",
      answer: "T47 Pest Control provides comprehensive coverage across Australia's major metropolitan areas, regional centers, and remote locations. We service all major cities including Sydney, Melbourne, Brisbane, Perth, Adelaide, and surrounding suburbs.\n\nOur extensive network allows us to offer same-day service in metropolitan areas, with emergency response within 2 hours for urgent situations. We also provide specialized services to regional towns and rural communities."
    },
    {
      category: 'general',
      question: "What certifications and licenses does T47 Pest Control hold?",
      answer: "T47 Pest Control holds all required professional certifications and licenses for pest control operations across Australia. We are members of the Australian Pest Control Association (APCA) and maintain current pest control operator licenses in all states where we operate.\n\nOur certifications include licensed pest control technicians, certified termite inspection specialists, chemical application certificates, and workplace health & safety compliance. We carry $20 million public liability insurance, professional indemnity coverage, and comprehensive business insurance."
    },
    {
      category: 'general',
      question: "How quickly can T47 Pest Control respond to emergency situations?",
      answer: "T47 Pest Control offers industry-leading response times with same-day service availability 7 days a week, including public holidays. For emergency situations involving dangerous pests like wasps, spiders, or severe infestations, we provide response within 2 hours in metropolitan areas.\n\nOur standard same-day service is available within 4 hours for most situations, while scheduled appointments can be arranged for the next business day. We maintain 24/7 phone support for urgent situations."
    },
    {
      category: 'general',
      question: "Do you provide services for both residential and commercial properties?",
      answer: "Yes, T47 Pest Control provides comprehensive pest management services for both residential and commercial properties. Our residential services include general pest control, termite inspections, and specialized treatments for homes and apartments.\n\nFor commercial clients, we offer tailored pest management programs for offices, restaurants, hotels, hospitals, schools, warehouses, and other business facilities. We understand the unique requirements of different industries and provide discreet, effective solutions that comply with health and safety regulations."
    },

    // Safety & Environment
    {
      category: 'safety',
      question: "Are your pest control treatments safe for children and pets?",
      answer: "Absolutely. The safety of your family and pets is our top priority. We use eco-friendly, low-toxicity treatments that are specifically designed to be safe around children and pets when applied correctly by our trained professionals.\n\nOur technicians follow strict safety protocols and will provide you with detailed instructions about any precautions to take during and after treatment. We use Integrated Pest Management (IPM) approaches that minimize chemical use while maximizing effectiveness."
    },
    {
      category: 'safety',
      question: "What safety measures do you take during pest control treatments?",
      answer: "T47 Pest Control follows comprehensive safety protocols for every treatment. Our technicians wear appropriate protective equipment, use precise application methods to minimize exposure, and clearly mark treated areas.\n\nWe provide detailed safety instructions to clients, including recommended waiting periods before re-entering treated areas. All our chemicals are approved by the Australian Pesticides & Veterinary Medicines Authority (APVMA) and applied according to strict guidelines."
    },
    {
      category: 'safety',
      question: "How do you protect the environment during pest control treatments?",
      answer: "Environmental responsibility is core to our operations. We use eco-friendly products and sustainable pest management practices that minimize impact on beneficial insects, wildlife, and the ecosystem.\n\nOur treatments are precisely targeted to affected areas only, reducing unnecessary chemical use. We also focus on prevention strategies and habitat modification to reduce the need for ongoing treatments, supporting long-term environmental health."
    },
    {
      category: 'safety',
      question: "What should I do to prepare my property before treatment?",
      answer: "Preparation requirements vary depending on the type of treatment. Generally, we recommend removing food items from areas to be treated, ensuring access to all areas requiring treatment, and temporarily relocating pets if necessary.\n\nOur technicians will provide specific preparation instructions when booking your service. For most treatments, minimal preparation is required, and we'll guide you through everything needed to ensure safe and effective treatment."
    },

    // Services & Process
    {
      category: 'service',
      question: "What types of pests do you control?",
      answer: "T47 Pest Control handles all common Australian pests including ants, cockroaches, spiders, termites, wasps, bees, flies, mosquitoes, fleas, bed bugs, rodents (mice and rats), possums, and moths. We also provide specialized services for less common pests.\n\nOur technicians are trained in the identification and control of Australian pest species, understanding their behavior patterns and the most effective treatment methods for each type of pest."
    },
    {
      category: 'service',
      question: "How long does a typical pest control treatment take?",
      answer: "Treatment duration varies depending on property size, pest type, and infestation severity. Most residential treatments take 1-3 hours, while commercial properties may require longer depending on size and complexity.\n\nTermite inspections typically take 1-2 hours for average homes. Our technicians will provide an estimated timeframe when scheduling your service and keep you informed throughout the process."
    },
    {
      category: 'service',
      question: "Do you provide ongoing pest control maintenance programs?",
      answer: "Yes, we offer comprehensive ongoing pest control programs tailored to your property's needs. Our maintenance programs include regular inspections, preventive treatments, and immediate response to any pest issues that arise.\n\nThese programs are particularly beneficial for commercial properties and homes in high-risk areas. We'll work with you to develop a schedule that provides optimal protection while being cost-effective."
    },
    {
      category: 'service',
      question: "What happens if pests return after treatment?",
      answer: "All our treatments come with comprehensive warranties. If pests return within the warranty period, we provide free follow-up treatments at no additional cost. Warranty periods vary depending on the type of treatment and pest species.\n\nWe stand behind our work and are committed to ensuring your complete satisfaction. Our goal is not just to eliminate current pest problems but to provide long-term protection for your property."
    },

    // Pricing & Guarantees
    {
      category: 'pricing',
      question: "How much do your pest control services cost?",
      answer: "Our pricing varies depending on property size, pest type, treatment complexity, and location. We provide transparent, upfront pricing with no hidden fees or surprise charges.\n\nWe offer free quotes and consultations to assess your specific needs and provide accurate pricing. Our competitive rates reflect the high quality of our services, advanced technology, and comprehensive warranties."
    },
    {
      category: 'pricing',
      question: "Do you offer free quotes and inspections?",
      answer: "Yes, T47 Pest Control provides free quotes and consultations for all our services. Our experienced technicians will assess your property, identify pest issues, and recommend the most effective treatment approach.\n\nDuring the free consultation, we'll explain our recommended treatment plan, provide detailed pricing, and answer any questions you may have. There's no obligation to proceed with treatment after receiving your free quote."
    },
    {
      category: 'pricing',
      question: "What payment methods do you accept?",
      answer: "We accept various payment methods for your convenience, including cash, credit cards (Visa, MasterCard, American Express), bank transfers, and electronic payment systems.\n\nPayment is typically due upon completion of service, though we can arrange alternative payment schedules for larger commercial contracts. We provide detailed invoices for all services performed."
    },
    {
      category: 'pricing',
      question: "Do you offer discounts for regular customers or multiple services?",
      answer: "Yes, we offer various discounts and package deals. Regular maintenance customers receive discounted rates for ongoing services. We also provide package pricing for multiple services performed during the same visit.\n\nCommercial clients and customers requiring multiple properties serviced may be eligible for volume discounts. Contact us to discuss pricing options that best suit your needs."
    },

    // Pest Information
    {
      category: 'pests',
      question: "How can I tell if I have a termite problem?",
      answer: "Common signs of termite activity include mud tubes on walls or foundations, hollow-sounding timber when tapped, discarded wings near windows or doors, and visible damage to wooden structures.\n\nYou might also notice small holes in walls, sagging floors or ceilings, or a musty odor in affected areas. If you suspect termite activity, it's crucial to have a professional inspection immediately, as termites can cause significant structural damage quickly."
    },
    {
      category: 'pests',
      question: "What attracts pests to my property?",
      answer: "Pests are typically attracted by food sources, water, and shelter. Common attractants include food scraps, pet food, standing water, moisture problems, cracks and gaps in structures, and overgrown vegetation.\n\nPoor sanitation, cluttered areas, and entry points like gaps under doors or around windows also invite pest problems. Our technicians can identify and help you address these attractants as part of our comprehensive pest management approach."
    },
    {
      category: 'pests',
      question: "Are Australian spiders dangerous, and how do you handle them?",
      answer: "While most Australian spiders are harmless, some species like funnel-web spiders and redback spiders can be dangerous. Our technicians are trained to identify dangerous species and use appropriate safety measures during treatment.\n\nWe use targeted treatments that effectively control spider populations while being safe for your family. If you encounter a potentially dangerous spider, avoid contact and call us immediately for safe removal and treatment."
    },
    {
      category: 'pests',
      question: "How do you prevent pest problems from recurring?",
      answer: "Prevention involves a combination of professional treatments and ongoing maintenance. We seal entry points, eliminate food and water sources, and apply preventive treatments to create barriers against pest intrusion.\n\nWe also provide detailed advice on maintaining a pest-free environment, including proper sanitation practices, moisture control, and landscape management. Regular inspections and maintenance treatments help ensure long-term protection."
    }
  ];

  const filteredFAQs = activeCategory === 'all'
    ? faqItems
    : faqItems.filter(item => item.category === activeCategory);

  return (
    <div className="space-y-6">
      {/* Category Filter */}
      <div className="flex flex-wrap gap-3 justify-center mb-8">
        {categories.map((category) => (
          <button
            type="button"
            key={category.key}
            onClick={() => setActiveCategory(category.key)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
              activeCategory === category.key
                ? 'bg-primary text-white shadow-lg'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            <span className="mr-2">{category.icon}</span>
            {category.name}
          </button>
        ))}
      </div>

      {/* FAQ Items */}
      <div className="space-y-4">
        {filteredFAQs.map((item, index) => (
          <FAQItem
            key={index}
            question={item.question}
            answer={item.answer}
            index={index + 1}
            isOpen={openIndex === index}
            toggleAccordion={() => toggleAccordion(index)}
            category={item.category}
          />
        ))}
      </div>

      {filteredFAQs.length === 0 && (
        <div className="text-center py-12">
          <p className="text-gray-500 text-lg">No questions found in this category.</p>
        </div>
      )}
    </div>
  );
}

"use client";
import { useState } from 'react';

export default function TermiteBusinessInspectionFAQ() {
  const [openItems, setOpenItems] = useState<number[]>([]);

  const toggleItem = (index: number) => {
    setOpenItems(prev => 
      prev.includes(index) 
        ? prev.filter(item => item !== index)
        : [...prev, index]
    );
  };

  const faqCategories = [
    {
      category: "Business Operations & Scheduling",
      questions: [
        {
          question: "How do you minimize disruption to our business operations?",
          answer: "We offer flexible scheduling including after-hours and weekend inspections, work around your business schedule and customer hours, use quiet, professional equipment that doesn't disturb operations, coordinate with management to avoid peak business times, and maintain professional appearance and conduct throughout the process. Our goal is to protect your business without impacting your revenue."
        },
        {
          question: "Can you perform inspections outside of business hours?",
          answer: "Yes, we offer after-hours, weekend, and holiday inspections to accommodate your business needs. This is often preferred for retail stores, restaurants, and customer-facing businesses. We coordinate with your security systems and access requirements, and provide the same comprehensive service regardless of timing."
        },
        {
          question: "How long does a commercial termite inspection take?",
          answer: "Commercial inspections typically take 3-6 hours depending on building size and complexity. Large warehouses or multi-story buildings may require longer. We provide accurate time estimates during scheduling and work efficiently to minimize business impact while ensuring comprehensive coverage."
        },
        {
          question: "Do you need access to all areas of our business?",
          answer: "We need access to all accessible areas for comprehensive protection, but we work around operational requirements. Critical business areas can often be inspected during off-peak hours, and we coordinate with management to ensure minimal disruption to essential operations."
        }
      ]
    },
    {
      category: "Industry-Specific Concerns",
      questions: [
        {
          question: "Do you have experience with our specific type of business?",
          answer: "Yes, we service all commercial sectors including offices and corporate buildings, retail stores and shopping centers, restaurants and food service, warehouses and distribution centers, manufacturing facilities, hotels and hospitality, healthcare facilities, and educational institutions. Each industry has unique requirements that we understand and address."
        },
        {
          question: "How do you handle food safety requirements in restaurants?",
          answer: "For food service businesses, we follow strict hygiene protocols including using food-safe inspection methods, coordinating with health and safety requirements, avoiding contamination of food preparation areas, providing documentation for health inspectors, and ensuring all equipment meets food industry standards. We understand the critical importance of food safety compliance."
        },
        {
          question: "What about customer-facing areas like retail stores?",
          answer: "In retail environments, we use discrete inspection methods, work around customer traffic patterns, maintain professional appearance at all times, minimize visual impact of our activities, and coordinate with store management to ensure customer experience isn't affected. We can often work during closed hours or low-traffic periods."
        },
        {
          question: "How do you handle sensitive areas like server rooms or laboratories?",
          answer: "For sensitive business areas, we follow strict protocols including coordinating with IT or facility management, using appropriate safety equipment, following contamination control procedures, documenting all activities for compliance, and ensuring no interference with critical systems or processes."
        }
      ]
    },
    {
      category: "Compliance & Documentation",
      questions: [
        {
          question: "Do your inspections meet commercial compliance requirements?",
          answer: "Yes, our commercial inspections meet all relevant standards including Australian Standard AS3660.2, workplace health and safety requirements, industry-specific regulations, insurance policy requirements, and local council regulations. We provide comprehensive compliance documentation with each inspection."
        },
        {
          question: "What documentation do we receive for our business records?",
          answer: "You receive comprehensive business documentation including detailed inspection report with executive summary, photographic evidence of all findings, compliance certificates, risk assessment and management recommendations, maintenance scheduling, and insurance-ready documentation. All reports are professionally formatted for business use."
        },
        {
          question: "Can you help with insurance and liability requirements?",
          answer: "Yes, we provide documentation that meets insurance requirements, help demonstrate due diligence for liability protection, provide compliance certificates for policy requirements, and offer guidance on risk management strategies. Our reports are accepted by all major commercial insurers."
        },
        {
          question: "Do you provide ongoing compliance monitoring?",
          answer: "Yes, we offer ongoing compliance programs including scheduled annual inspections, quarterly monitoring visits, emergency response services, compliance tracking and reporting, and maintenance scheduling. This ensures continuous protection and regulatory compliance for your business."
        }
      ]
    },
    {
      category: "Cost & Business Value",
      questions: [
        {
          question: "How much do commercial termite inspections cost?",
          answer: "Commercial inspection costs vary based on building size, complexity, and specific requirements, typically ranging from $800-$3,000. This investment protects against potential damage costs of $50,000+ and business disruption. We provide detailed quotes based on your specific needs and offer competitive pricing for ongoing service contracts."
        },
        {
          question: "What's the ROI of regular commercial termite inspections?",
          answer: "The ROI is substantial: annual inspection costs ($1,000-$3,000) versus potential damage and business disruption costs ($50,000+), plus protection of business continuity, asset values, and reputation. Regular inspections also reduce insurance premiums and demonstrate responsible business management to stakeholders."
        },
        {
          question: "Do you offer service contracts for multiple locations?",
          answer: "Yes, we provide comprehensive service contracts for multi-location businesses including coordinated scheduling across all sites, consistent reporting and documentation, volume pricing discounts, centralized billing and administration, and dedicated account management. This ensures consistent protection across your entire business portfolio."
        },
        {
          question: "How do termite issues impact business operations?",
          answer: "Termite issues can cause forced business closure, expensive emergency repairs, equipment and inventory damage, safety hazards for employees and customers, insurance and liability issues, and significant reputation damage. Regular inspections prevent these costly disruptions and protect your business investment."
        }
      ]
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <span className="inline-block px-3 py-1 bg-secondary/10 text-secondary text-sm font-semibold rounded-full mb-3">
              FREQUENTLY ASKED QUESTIONS
            </span>
            <h2 className="text-4xl font-bold mb-4 text-gray-900">
              Business Inspection <span className="text-secondary">FAQ</span>
            </h2>
            <div className="w-24 h-1 bg-secondary mx-auto mb-6"></div>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Essential information about commercial termite inspections and protecting your business assets from termite damage.
            </p>
          </div>

          {/* FAQ Categories */}
          {faqCategories.map((category, categoryIndex) => (
            <div key={categoryIndex} className="mb-12">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 pb-2 border-b-2 border-secondary">
                {category.category}
              </h3>
              
              <div className="space-y-4">
                {category.questions.map((faq, questionIndex) => {
                  const globalIndex = categoryIndex * 100 + questionIndex;
                  const isOpen = openItems.includes(globalIndex);
                  
                  return (
                    <div key={questionIndex} className="border border-gray-200 rounded-lg overflow-hidden">
                      <button
                        onClick={() => toggleItem(globalIndex)}
                        className="w-full px-6 py-4 text-left bg-gray-50 hover:bg-gray-100 transition-colors focus:outline-none focus:bg-gray-100"
                      >
                        <div className="flex justify-between items-center">
                          <h4 className="font-semibold text-gray-900 pr-4">
                            {faq.question}
                          </h4>
                          <div className={`transform transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}>
                            <svg className="w-5 h-5 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                            </svg>
                          </div>
                        </div>
                      </button>
                      
                      {isOpen && (
                        <div className="px-6 py-4 bg-white border-t border-gray-200">
                          <p className="text-gray-600 leading-relaxed">
                            {faq.answer}
                          </p>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          ))}

          {/* Contact CTA */}
          <div className="bg-gradient-to-r from-secondary to-primary p-8 rounded-lg text-center text-white">
            <h3 className="text-2xl font-bold mb-4">Protect Your Business Assets</h3>
            <p className="mb-6 max-w-2xl mx-auto">
              Don't let termites threaten your business operations. Contact us for professional commercial termite inspection services.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a href="/contact" className="bg-white text-secondary hover:bg-gray-100 font-bold py-3 px-8 rounded-full transition-all duration-300 transform hover:scale-105">
                Protect Your Business
              </a>
              <a href="tel:1300000000" className="bg-transparent border-2 border-white hover:bg-white/10 text-white font-bold py-3 px-8 rounded-full transition-all duration-300">
                Call Now
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

"use client";
import { useState } from 'react';

export default function PrePurchaseTermiteInspectionFAQ() {
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
      category: "Pre-Purchase Inspection Basics",
      questions: [
        {
          question: "What is a pre-purchase termite inspection and why do I need one?",
          answer: "A pre-purchase termite inspection is a comprehensive assessment of a property's termite risk and any existing termite activity or damage before you buy. It's essential because termites cause over $1.5 billion in damage annually in Australia, and most insurance policies don't cover termite damage. The inspection helps you make an informed decision, negotiate the purchase price, and avoid costly surprises after settlement."
        },
        {
          question: "When should I schedule a pre-purchase termite inspection?",
          answer: "Schedule your inspection as soon as your offer is accepted and you have access to the property. Ideally, include a termite inspection clause in your purchase contract with a specific timeframe (usually 7-14 days). This gives you time to review the report and negotiate or withdraw if significant issues are found. Don't wait until just before settlement as this limits your options."
        },
        {
          question: "How long does a pre-purchase termite inspection take?",
          answer: "A comprehensive pre-purchase inspection typically takes 2-4 hours depending on the property size and complexity. This includes exterior assessment (45-60 minutes), interior inspection (60-90 minutes), subfloor and roof void inspection (45-60 minutes), and documentation (30-45 minutes). We provide same-day reports for urgent settlement deadlines."
        },
        {
          question: "What areas of the property are inspected during a pre-purchase inspection?",
          answer: "We inspect all accessible areas including: exterior foundations and walls, garden beds and landscaping, interior living spaces and storage areas, subfloor spaces and basements, roof voids and attics, timber structures and decking, moisture sources and plumbing areas, and previous treatment zones. We use thermal imaging, moisture meters, and acoustic detection devices for comprehensive coverage."
        }
      ]
    },
    {
      category: "Inspection Process & Methods",
      questions: [
        {
          question: "What technology and methods do you use for pre-purchase inspections?",
          answer: "We use advanced detection technology including thermal imaging cameras to identify temperature variations indicating termite activity, moisture meters to detect conducive conditions, acoustic listening devices to hear termite sounds, digital photography for documentation, and specialized probes for timber testing. Our certified inspectors combine technology with visual inspection expertise for comprehensive assessment."
        },
        {
          question: "Can you detect all termite activity during an inspection?",
          answer: "While our inspections are comprehensive, we can only inspect accessible areas and cannot guarantee detection of all termite activity. Termites may be present in concealed areas like wall cavities or underground. However, our advanced technology and systematic approach detect the vast majority of termite activity and damage. We clearly outline any limitations in our reports."
        },
        {
          question: "What if the property has limited access to certain areas?",
          answer: "We inspect all reasonably accessible areas and clearly document any limitations in our report. If critical areas like subfloor or roof void are inaccessible, we note this as a limitation and may recommend further investigation after purchase. We can often arrange return visits if access becomes available during the inspection period."
        },
        {
          question: "Do you provide same-day inspection reports?",
          answer: "Yes, we provide same-day reports for urgent situations. Our digital reporting system allows us to deliver comprehensive reports within hours of completing the inspection. Standard reports are delivered within 24 hours and include detailed findings, photographs, recommendations, and cost estimates for any required treatments."
        }
      ]
    },
    {
      category: "Report & Findings",
      questions: [
        {
          question: "What information is included in the pre-purchase inspection report?",
          answer: "Our comprehensive report includes: executive summary of key findings, detailed inspection methodology, photographic evidence of all findings, termite activity assessment (active/inactive/damage), risk factor analysis, treatment recommendations with cost estimates, property negotiation guidance, compliance with Australian Standards, and warranty information. The report is designed to support your purchase decision and negotiations."
        },
        {
          question: "What happens if termites or damage are found during the inspection?",
          answer: "If we find termite activity or damage, we document the extent, assess the severity, and provide treatment recommendations with cost estimates. This information helps you negotiate with the seller for repairs, price reduction, or treatment before settlement. We can also provide quotes for treatment and connect you with qualified repair contractors. Many buyers successfully negotiate based on our findings."
        },
        {
          question: "How do I use the inspection report for property negotiations?",
          answer: "Our report provides objective evidence for negotiations. If issues are found, you can: request the seller to treat termites and repair damage before settlement, negotiate a price reduction based on our cost estimates, require the seller to provide warranties for completed work, or in severe cases, withdraw from the purchase. We provide guidance on negotiation strategies based on our findings."
        },
        {
          question: "Is the inspection report accepted by banks and insurance companies?",
          answer: "Yes, our reports meet Australian Standard AS3660.2 requirements and are accepted by banks, insurance companies, and legal professionals. Many lenders require termite inspections for loan approval, and insurance companies may require evidence of professional inspection for coverage. Our certified inspectors and comprehensive reporting meet all industry standards."
        }
      ]
    },
    {
      category: "Costs & Value",
      questions: [
        {
          question: "How much does a pre-purchase termite inspection cost?",
          answer: "Pre-purchase termite inspections typically cost $500-$800 depending on property size and complexity. This investment can save you thousands in potential damage costs - the average termite damage repair exceeds $15,000. Consider it insurance for your largest investment. We provide upfront pricing with no hidden fees and offer same-day service for urgent situations."
        },
        {
          question: "Is a pre-purchase termite inspection worth the cost?",
          answer: "Absolutely. With average termite damage costs exceeding $15,000 and severe cases reaching $50,000+, a $500-800 inspection provides exceptional value. The inspection can help you avoid buying a problem property, negotiate a better price, or budget for necessary treatments. It's a small cost for peace of mind on your largest investment."
        },
        {
          question: "What's the difference between a pre-purchase inspection and a regular termite inspection?",
          answer: "Pre-purchase inspections are more comprehensive and focused on providing information for purchase decisions. They include detailed cost estimates for any required treatments, negotiation guidance, and assessment of the property's overall termite risk profile. Regular inspections focus on ongoing monitoring and maintenance of existing protection systems."
        },
        {
          question: "Can I get a refund if no termites are found?",
          answer: "Our fee covers the professional inspection service, advanced technology use, and comprehensive reporting regardless of findings. A 'clear' report is actually valuable as it confirms the property's good condition and supports your purchase decision. Many buyers consider a clear report worth the investment for peace of mind alone."
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
            <span className="inline-block px-3 py-1 bg-red-light/10 text-red-dark text-sm font-semibold rounded-full mb-3">
              FREQUENTLY ASKED QUESTIONS
            </span>
            <h2 className="text-4xl font-bold mb-4 text-gray-900">
              Pre-Purchase Inspection <span className="text-red-dark">FAQ</span>
            </h2>
            <div className="w-24 h-1 bg-red-light mx-auto mb-6"></div>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Get answers to common questions about pre-purchase termite inspections and make informed decisions about your property investment.
            </p>
          </div>

          {/* FAQ Categories */}
          {faqCategories.map((category, categoryIndex) => (
            <div key={categoryIndex} className="mb-12">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 pb-2 border-b-2 border-red-light">
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
                            <svg className="w-5 h-5 text-red-dark" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
          <div className="bg-gradient-to-r from-red-light to-red-dark p-8 rounded-lg text-center text-white">
            <h3 className="text-2xl font-bold mb-4">Still Have Questions?</h3>
            <p className="mb-6 max-w-2xl mx-auto">
              Our termite inspection specialists are here to help. Contact us for personalized advice about your pre-purchase inspection needs.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a href="/contact" className="bg-white text-red-dark hover:bg-gray-100 font-bold py-3 px-8 rounded-full transition-all duration-300 transform hover:scale-105">
                Get Expert Advice
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

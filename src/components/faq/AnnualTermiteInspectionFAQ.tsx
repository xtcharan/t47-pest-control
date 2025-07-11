"use client";
import { useState } from 'react';

export default function AnnualTermiteInspectionFAQ() {
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
      category: "Annual Inspection Requirements",
      questions: [
        {
          question: "Why are annual termite inspections required in Australia?",
          answer: "Australian Standard AS3660.2 mandates annual termite inspections for all properties to maintain ongoing protection and early detection. Annual inspections are crucial because termites can cause significant damage in just 3-6 months, treatment systems can degrade over time, and early detection dramatically reduces repair costs. Most insurance policies and treatment warranties also require annual inspections for coverage."
        },
        {
          question: "Do I need annual inspections if my property has termite protection?",
          answer: "Yes, annual inspections are required regardless of existing protection systems. Chemical barriers can degrade, physical barriers may be compromised, and monitoring systems need regular checking. Annual inspections ensure your protection remains effective, identify any new risk factors, and maintain warranty compliance. Even the best protection systems require ongoing monitoring."
        },
        {
          question: "What happens if I skip my annual termite inspection?",
          answer: "Skipping annual inspections can void treatment warranties, affect insurance coverage, allow undetected termite activity to cause major damage, and result in non-compliance with Australian Standards. The cost of an annual inspection ($400-600) is minimal compared to potential damage costs ($15,000+) and the peace of mind it provides."
        },
        {
          question: "When is the best time to schedule my annual inspection?",
          answer: "Schedule your annual inspection around the same time each year, ideally during peak termite activity seasons (September-March in most areas). Consider your property's specific risk factors, previous inspection findings, and local termite activity patterns. We can help determine the optimal timing based on your property's history and location."
        }
      ]
    },
    {
      category: "Inspection Process & Coverage",
      questions: [
        {
          question: "What's included in an annual termite inspection?",
          answer: "Annual inspections include: comprehensive property assessment following AS3660.2 standards, evaluation of existing treatment systems, identification of new risk factors or conducive conditions, comparison with previous inspection findings, detailed documentation with photographs, trend analysis over multiple inspections, and recommendations for maintenance or additional protection measures."
        },
        {
          question: "How does an annual inspection differ from the initial inspection?",
          answer: "Annual inspections build on previous findings by comparing current conditions with historical data, tracking trends over time, evaluating treatment system effectiveness, and focusing on areas of previous concern. They include trend analysis, system maintenance assessment, and long-term protection planning that initial inspections don't provide."
        },
        {
          question: "Do you inspect the same areas every year?",
          answer: "Yes, we inspect all accessible areas annually to ensure comprehensive coverage, but we also adapt our focus based on previous findings, seasonal conditions, property changes, and emerging risk factors. This systematic approach ensures nothing is missed while allowing for targeted attention to areas of concern."
        },
        {
          question: "What if new areas become accessible since the last inspection?",
          answer: "We inspect any newly accessible areas and update our records accordingly. Property modifications, renovations, or improved access are documented and incorporated into our ongoing assessment. This ensures our protection strategy evolves with your property."
        }
      ]
    },
    {
      category: "Treatment System Monitoring",
      questions: [
        {
          question: "How do you check if my termite treatment is still effective?",
          answer: "We evaluate treatment effectiveness through visual inspection of treated areas, testing chemical barrier integrity where possible, checking monitoring station status and bait consumption, assessing physical barrier condition, and comparing current findings with treatment baseline data. We provide recommendations for maintenance or reapplication as needed."
        },
        {
          question: "What if my termite treatment needs maintenance or renewal?",
          answer: "If treatment maintenance is needed, we provide detailed recommendations including specific areas requiring attention, estimated costs for maintenance or renewal, timing recommendations for optimal effectiveness, and coordination with treatment providers. We help you maintain continuous protection through proper system maintenance."
        },
        {
          question: "Can annual inspections extend the life of my termite treatment?",
          answer: "Yes, regular monitoring helps maximize treatment effectiveness by identifying maintenance needs early, addressing conducive conditions that stress treatment systems, ensuring proper system function, and preventing small issues from becoming major problems. This proactive approach often extends treatment life and effectiveness."
        },
        {
          question: "Do you service all types of termite management systems?",
          answer: "Yes, we inspect and evaluate all types of termite management systems including chemical soil barriers, physical barriers, monitoring and baiting systems, and combination approaches. Our inspectors are trained on all major system types and manufacturers."
        }
      ]
    },
    {
      category: "Compliance & Documentation",
      questions: [
        {
          question: "Do annual inspections meet Australian Standard requirements?",
          answer: "Yes, our annual inspections fully comply with AS3660.2 requirements including qualified inspector certification, comprehensive area coverage, detailed documentation and reporting, risk assessment and recommendations, and proper record keeping. We provide compliance certificates with each inspection."
        },
        {
          question: "What documentation do I receive after an annual inspection?",
          answer: "You receive a comprehensive annual report including current inspection findings with photographs, comparison with previous inspections, treatment system evaluation, risk factor assessment, maintenance recommendations, compliance certification, and updated property protection plan. All reports are digitally archived for easy access."
        },
        {
          question: "How long should I keep annual inspection reports?",
          answer: "Keep all inspection reports for the life of your property ownership. These records demonstrate ongoing compliance, support insurance claims if needed, provide valuable information for future buyers, and help track long-term trends. We maintain digital copies for easy access to historical data."
        },
        {
          question: "Can annual inspection reports help with insurance claims?",
          answer: "Yes, regular inspection reports demonstrate due diligence and proper property maintenance, which can support insurance claims. While most policies don't cover termite damage, having current inspections shows responsible property management and may help with related claims like water damage from termite-related leaks."
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
            <span className="inline-block px-3 py-1 bg-green-light/10 text-green-dark text-sm font-semibold rounded-full mb-3">
              FREQUENTLY ASKED QUESTIONS
            </span>
            <h2 className="text-4xl font-bold mb-4 text-gray-900">
              Annual Inspection <span className="text-green-dark">FAQ</span>
            </h2>
            <div className="w-24 h-1 bg-green-light mx-auto mb-6"></div>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Everything you need to know about annual termite inspections and maintaining ongoing protection for your property.
            </p>
          </div>

          {/* FAQ Categories */}
          {faqCategories.map((category, categoryIndex) => (
            <div key={categoryIndex} className="mb-12">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 pb-2 border-b-2 border-green-light">
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
                            <svg className="w-5 h-5 text-green-dark" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
          <div className="bg-gradient-to-r from-green-light to-green-dark p-8 rounded-lg text-center text-white">
            <h3 className="text-2xl font-bold mb-4">Ready to Schedule Your Annual Inspection?</h3>
            <p className="mb-6 max-w-2xl mx-auto">
              Stay compliant with AS3660.2 standards and maintain your property's protection with our comprehensive annual inspection program.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a href="/contact" className="bg-white text-green-dark hover:bg-gray-100 font-bold py-3 px-8 rounded-full transition-all duration-300 transform hover:scale-105">
                Schedule Inspection
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

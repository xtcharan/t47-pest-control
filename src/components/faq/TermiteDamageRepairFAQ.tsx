"use client";

import { useState } from 'react';
import { COMPANY_INFO } from '../lib/constants';

export default function TermiteDamageRepairFAQ() {
  const [openItems, setOpenItems] = useState<number[]>([]);

  const toggleItem = (index: number) => {
    setOpenItems(prev =>
      prev.includes(index)
        ? prev.filter(item => item !== index)
        : [...prev, index]
    );
  };

  const faqItems = [
    {
      question: "How quickly can you respond to termite damage emergencies?",
      answer: "We provide 24/7 emergency response for termite damage situations. Our emergency team can typically be on-site within 2-4 hours for critical situations in metropolitan areas, and within 24 hours for regional locations. We prioritize safety assessment and emergency stabilization to prevent further damage and ensure occupant safety."
    },
    {
      question: "Will my insurance cover termite damage repairs?",
      answer: "Most standard home insurance policies do not cover termite damage as it's considered preventable maintenance. However, if the termite damage leads to other covered perils (like water damage from compromised structures), those secondary damages may be covered. We provide detailed documentation and work with insurance companies to maximize any potential coverage. We recommend checking your specific policy and considering specialized termite insurance."
    },
    {
      question: "How do you determine the extent of termite damage?",
      answer: "We use a comprehensive assessment process including visual inspection, thermal imaging cameras, moisture meters, acoustic detection devices, and borescope cameras to examine inside wall cavities. Our certified building inspectors evaluate structural integrity and document all findings with detailed photography and 3D mapping. This thorough approach ensures we identify all damage, including hidden areas that may not be immediately visible."
    },
    {
      question: "What's the difference between surface damage and structural damage?",
      answer: "Surface damage affects non-load-bearing elements like skirting boards, door frames, and decorative timber. This typically costs $500-$2,000 to repair and doesn't compromise building safety. Structural damage affects load-bearing elements like floor joists, wall studs, and roof beams, potentially compromising building integrity. Structural repairs typically cost $5,000-$25,000+ and require immediate attention for safety reasons."
    },
    {
      question: "How long do termite damage repairs typically take?",
      answer: "Repair timeframes depend on damage extent: Surface damage repairs typically take 1-3 days, structural damage repairs take 1-3 weeks, and extensive damage requiring major reconstruction can take 1-3 months. We provide detailed timelines during assessment and coordinate with you to minimize disruption. Emergency stabilization is always completed within 24-48 hours to ensure safety."
    },
    {
      question: "Do you provide warranties on repair work?",
      answer: "Yes, we provide comprehensive warranties on all repair work. Structural repairs come with a 10-year warranty, general repairs have a 5-year warranty, and prevention systems installed during repair have up to 25-year warranties. All warranties are backed by our insurance and cover both materials and workmanship. We also provide ongoing maintenance support throughout the warranty period."
    },
    {
      question: "Can you repair damage while I'm living in the home?",
      answer: "In most cases, yes. We work around your schedule and living arrangements to minimize disruption. For minor to moderate damage, we can often complete repairs while you remain in the home. For extensive damage requiring major reconstruction, temporary relocation may be necessary for safety and efficiency. We coordinate with you to find the best solution and can assist with temporary accommodation arrangements if needed."
    },
    {
      question: "What materials do you use for termite damage repairs?",
      answer: "We use only premium, termite-resistant materials that meet or exceed Australian building standards. This includes treated timber, engineered lumber, steel reinforcements where appropriate, and termite-resistant composite materials. All materials come with manufacturer warranties and are specifically chosen for their durability and resistance to future termite attack. We can also incorporate eco-friendly and sustainable material options upon request."
    },
    {
      question: "Do you install termite prevention during repairs?",
      answer: "Absolutely. Repair work provides an ideal opportunity to install comprehensive termite prevention systems. We can integrate chemical barriers, physical barriers, and monitoring systems during the repair process, often at reduced cost compared to separate installation. This approach ensures your property is protected against future termite attacks and provides long-term peace of mind."
    },
    {
      question: "How much do termite damage repairs typically cost?",
      answer: "Repair costs vary significantly based on damage extent, location, accessibility, materials required, and local building requirements. Surface damage to non-structural elements is the most affordable to repair, while structural damage requires more extensive work and investment. Extensive damage requiring major reconstruction represents the highest investment. We provide detailed written quotes after thorough assessment, with no hidden fees. Contact us for a personalized assessment and quote based on your specific situation."
    },
    {
      question: "Can termite damage affect my property's value?",
      answer: "Yes, termite damage can significantly impact property value, especially if not properly repaired. Unrepaired damage can reduce value by 10-25% or more. However, professional repairs with proper documentation and warranties can restore full property value. In fact, properties with recent professional repairs and new termite prevention systems often have enhanced marketability and may command premium prices due to buyer confidence in the property's protection."
    },
    {
      question: "What should I do immediately after discovering termite damage?",
      answer: "First, ensure safety by avoiding damaged areas that may be structurally compromised. Document the damage with photos for insurance purposes. Contact our emergency response team immediately for professional assessment. Avoid disturbing the area further, as this can worsen damage or interfere with treatment of any remaining termites. Don't attempt DIY repairs on structural elements, as this can compromise safety and insurance coverage."
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 bg-orange-100 text-orange-700 rounded-full font-semibold mb-4">
            <span className="mr-2">❓</span>TERMITE DAMAGE REPAIR FAQ
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Your Questions About <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-orange-600">Damage Repair</span> Answered
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Get expert answers to the most common questions about termite damage assessment, repair processes, costs, and insurance coverage.
          </p>
        </div>

        {/* FAQ Items */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden">
            <div className="bg-gradient-to-r from-red-600 to-orange-600 px-8 py-6">
              <h3 className="text-2xl font-bold text-white">Frequently Asked Questions</h3>
            </div>

            <div className="divide-y divide-gray-100">
              {faqItems.map((item, index) => {
                const isOpen = openItems.includes(index);

                return (
                  <div key={index}>
                    <button
                      type="button"
                      onClick={() => toggleItem(index)}
                      className="w-full px-8 py-6 text-left hover:bg-gray-50 transition-colors focus:outline-none focus:bg-gray-50"
                    >
                      <div className="flex items-center justify-between">
                        <h4 className="text-lg font-semibold text-gray-900 pr-4">{item.question}</h4>
                        <svg
                          className={`w-6 h-6 text-orange-600 transform transition-transform ${isOpen ? 'rotate-180' : ''}`}
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </div>
                    </button>

                    {isOpen && (
                      <div className="px-8 pb-6">
                        <div className="bg-gray-50 rounded-lg p-6">
                          <p className="text-gray-700 leading-relaxed">{item.answer}</p>
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Emergency Contact CTA */}
        <div className="mt-16 bg-gradient-to-r from-red-600 to-orange-600 rounded-2xl p-8 text-white text-center">
          <div className="flex items-center justify-center mb-4">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2 animate-pulse" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
            </svg>
            <h3 className="text-3xl font-bold">Emergency Damage? Get Immediate Help</h3>
          </div>
          <p className="text-xl mb-8 text-red-100 max-w-3xl mx-auto">
            Don't wait when dealing with termite damage. Our emergency response team is available 24/7 for immediate assessment and stabilization.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button type="button" className="px-8 py-4 bg-white text-red-600 rounded-full font-bold text-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105">
              Emergency Response
            </button>
            <a href={`tel:${COMPANY_INFO.phone}`} className="px-8 py-4 border-2 border-white rounded-full font-bold text-lg hover:bg-white/10 transition-all duration-300 inline-block">
              Call {COMPANY_INFO.phone}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

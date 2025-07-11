"use client";
import { useState } from 'react';

export default function TermiteHomesInspectionFAQ() {
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
      category: "Family Safety & Health",
      questions: [
        {
          question: "Are your termite inspection methods safe for children and pets?",
          answer: "Absolutely. Our residential inspection methods are completely non-toxic and family-safe. We use advanced detection technology like thermal imaging, moisture meters, and acoustic devices that pose no health risks. All equipment is child-safe, and our inspectors follow strict safety protocols. Children and pets can remain in the home during the inspection without any concerns."
        },
        {
          question: "Do you use any chemicals during the inspection process?",
          answer: "No, our inspection process is completely chemical-free. We use only non-invasive detection methods including thermal imaging cameras, moisture detection meters, acoustic listening devices, and visual inspection techniques. If treatment is needed after the inspection, we discuss family-safe treatment options separately."
        },
        {
          question: "Will the inspection disrupt our family's daily routine?",
          answer: "We minimize disruption by using quiet equipment, working around family schedules, completing inspections efficiently (typically 2-3 hours), and maintaining clean, professional work practices. Most families continue their normal activities during the inspection. We coordinate timing to work around nap times, meals, and other family priorities."
        },
        {
          question: "What should we do with our pets during the inspection?",
          answer: "Pets can remain in the home during our inspection as our methods are completely pet-safe. However, some pets may be curious about our equipment or stressed by strangers in the home. We're happy to work around pet schedules and can provide guidance on keeping pets comfortable during the process."
        }
      ]
    },
    {
      category: "Home-Specific Concerns",
      questions: [
        {
          question: "Which areas of my home are most at risk for termite activity?",
          answer: "High-risk areas in homes include kitchens and bathrooms (moisture sources), laundry rooms and utility areas, basements and subfloor spaces, areas with timber construction, garden beds near foundations, and outdoor timber structures like decks. We pay special attention to these areas during our comprehensive inspection."
        },
        {
          question: "How do you inspect areas where children play or sleep?",
          answer: "We inspect children's areas with extra care using completely safe, non-invasive methods. We can work around nap times and play schedules, use quiet equipment in bedrooms and nurseries, ensure all areas are left exactly as found, and provide parents with full information about our findings and any recommendations for these sensitive areas."
        },
        {
          question: "What if we have a home garden or vegetable patch?",
          answer: "We inspect garden areas carefully as they can create conducive conditions for termites. We check for proper clearance between garden beds and house foundations, assess irrigation and moisture management, examine mulch and organic matter placement, and provide recommendations for termite-safe gardening practices that protect both your plants and your home."
        },
        {
          question: "Do you inspect outdoor play equipment and structures?",
          answer: "Yes, we inspect all outdoor timber structures including playgrounds, cubby houses, decks and pergolas, fences and retaining walls, and garden structures. These areas are often overlooked but can be entry points for termites or show early signs of activity. We ensure your entire property is protected."
        }
      ]
    },
    {
      category: "Inspection Process for Homes",
      questions: [
        {
          question: "How long does a residential termite inspection take?",
          answer: "A comprehensive residential inspection typically takes 2-3 hours depending on home size and complexity. This includes exterior assessment (45 minutes), interior inspection (60 minutes), subfloor and roof void inspection (30-45 minutes), and documentation (15-20 minutes). We work efficiently to minimize disruption to your family's day."
        },
        {
          question: "Do you need access to all rooms in the house?",
          answer: "We need access to all accessible areas for a comprehensive inspection, but we work around your family's needs. If certain rooms are occupied (sleeping children, home offices in use), we can often return to those areas later or schedule a brief follow-up. We clearly document any areas we cannot access."
        },
        {
          question: "What preparation is needed before the inspection?",
          answer: "Minimal preparation is required: ensure access to subfloor and roof void areas, clear stored items from around the house perimeter where possible, inform us of any known moisture issues or previous termite activity, and let us know about any family scheduling considerations (nap times, work-from-home schedules, etc.)."
        },
        {
          question: "Can you explain your findings in family-friendly terms?",
          answer: "Absolutely. We present all findings in clear, non-technical language that families can easily understand. We explain what we found, what it means for your home and family, what actions (if any) are needed, and how to prevent future problems. We also provide educational materials about termite prevention for families."
        }
      ]
    },
    {
      category: "Prevention & Education",
      questions: [
        {
          question: "How can we teach our children about termite prevention?",
          answer: "We provide family education including simple prevention tips children can understand, warning signs to watch for, the importance of not storing wood against the house, and how to report moisture problems or unusual sounds. We make termite awareness a positive learning experience rather than something to fear."
        },
        {
          question: "What ongoing maintenance can families do to prevent termites?",
          answer: "Family-friendly prevention includes keeping garden beds away from the house foundation, fixing leaks promptly, ensuring good ventilation in bathrooms and laundry, storing firewood away from the house, regular cleaning of gutters, and annual professional inspections. We provide a simple maintenance checklist for families."
        },
        {
          question: "How often should families have termite inspections?",
          answer: "Australian Standard AS3660.2 recommends annual inspections for all homes. Families in high-risk areas or with previous termite activity may benefit from more frequent inspections (every 6-9 months). We help families establish an appropriate inspection schedule based on their specific circumstances and risk factors."
        },
        {
          question: "What should families do if they suspect termite activity between inspections?",
          answer: "Contact us immediately if you notice mud tubes on walls, hollow-sounding timber, discarded wings near windows, or unusual sounds in walls. Don't disturb suspected areas as this can cause termites to relocate. We provide emergency inspection services and guidance for families who discover potential termite activity."
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
            <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-sm font-semibold rounded-full mb-3">
              FREQUENTLY ASKED QUESTIONS
            </span>
            <h2 className="text-4xl font-bold mb-4 text-gray-900">
              Home Inspection <span className="text-primary">FAQ</span>
            </h2>
            <div className="w-24 h-1 bg-primary mx-auto mb-6"></div>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Common questions about family-safe termite inspections and protecting your home with children and pets in mind.
            </p>
          </div>

          {/* FAQ Categories */}
          {faqCategories.map((category, categoryIndex) => (
            <div key={categoryIndex} className="mb-12">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 pb-2 border-b-2 border-primary">
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
                            <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
          <div className="bg-gradient-to-r from-primary to-secondary p-8 rounded-lg text-center text-white">
            <h3 className="text-2xl font-bold mb-4">Protect Your Family Home Today</h3>
            <p className="mb-6 max-w-2xl mx-auto">
              Schedule a family-safe termite inspection and ensure your home remains a safe haven for your loved ones.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a href="/contact" className="bg-white text-primary hover:bg-gray-100 font-bold py-3 px-8 rounded-full transition-all duration-300 transform hover:scale-105">
                Protect Your Home
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

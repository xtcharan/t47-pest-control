"use client";

import { useState } from 'react';
import { COMPANY_INFO } from '../lib/constants';

export default function TermitePreventionFAQ() {
  const [openItems, setOpenItems] = useState<number[]>([]);
  const [searchTerm, setSearchTerm] = useState('');

  const toggleItem = (index: number) => {
    setOpenItems(prev =>
      prev.includes(index)
        ? prev.filter(item => item !== index)
        : [...prev, index]
    );
  };

  const faqCategories = [
    {
      category: "General Prevention",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
      questions: [
        {
          question: "Why is termite prevention better than treatment after infestation?",
          answer: "Prevention is significantly more cost-effective and less disruptive than treating an active infestation. Prevention typically costs $2,000-$5,000 and provides 25+ years of protection, while termite damage repairs can cost $15,000-$50,000+ and cause major disruption to your home. Prevention also protects your property value and ensures insurance compliance, as most policies don't cover termite damage."
        },
        {
          question: "How long do termite prevention systems last?",
          answer: "The duration depends on the system type: Chemical barriers typically last 25+ years with proper maintenance, physical barriers can last the lifetime of the building, smart monitoring systems require ongoing maintenance but provide continuous protection, and hybrid systems offer 30+ years of comprehensive protection. All systems come with warranties and regular inspection schedules."
        },
        {
          question: "Are termite prevention treatments safe for my family and pets?",
          answer: "Yes, modern termite prevention systems are designed to be safe for families and pets. Chemical barriers use low-toxicity formulations that are specifically designed to target termites while being safe for humans and animals. Physical barriers contain no chemicals at all. All treatments are applied by licensed professionals following strict safety protocols and Australian Standards."
        }
      ]
    },
    {
      category: "Chemical Barriers",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
        </svg>
      ),
      questions: [
        {
          question: "How do chemical termite barriers work?",
          answer: "Chemical barriers create an invisible protective zone around your property by treating the soil with premium termiticides. When termites encounter the treated soil, they either die or are repelled, preventing them from reaching your home's structure. The chemicals bind to soil particles and remain effective for 25+ years, creating a continuous barrier that termites cannot cross."
        },
        {
          question: "What chemicals are used in termite prevention?",
          answer: "We use only premium, eco-friendly termiticides that are approved by the Australian Pesticides and Veterinary Medicines Authority (APVMA). These include advanced formulations like bifenthrin, imidacloprid, and fipronil, which are specifically designed for long-term soil application. All chemicals are low-toxicity to humans and pets but highly effective against termites."
        },
        {
          question: "How is a chemical barrier installed?",
          answer: "Installation involves drilling holes around your home's perimeter and injecting termiticide into the soil to create a continuous barrier. We also treat under concrete slabs through strategic drilling points. The process typically takes 1-2 days and includes thorough preparation, precise application, and quality control testing to ensure complete coverage."
        }
      ]
    },
    {
      category: "Physical Barriers",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      ),
      questions: [
        {
          question: "What are physical termite barriers made of?",
          answer: "Physical barriers use materials that termites cannot penetrate, including stainless steel mesh with apertures smaller than termite bodies (0.66mm), crushed granite particles of specific sizes, and specially designed plastic sheeting. These materials are corrosion-resistant, durable, and provide permanent protection without any chemicals."
        },
        {
          question: "Can physical barriers be installed in existing homes?",
          answer: "Yes, physical barriers can be retrofitted to existing homes, though the process is more complex than new construction installation. We assess each property individually to determine the best approach, which may involve excavation around foundations, installation under existing structures, or combination with other barrier types for complete protection."
        },
        {
          question: "Do physical barriers require maintenance?",
          answer: "Physical barriers require minimal maintenance compared to chemical systems. Regular inspections ensure the barrier remains intact and hasn't been damaged by landscaping, construction, or natural settling. Any damage can be easily repaired, and the barrier continues to provide protection indefinitely when properly maintained."
        }
      ]
    },
    {
      category: "Smart Monitoring",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
        </svg>
      ),
      questions: [
        {
          question: "How do smart termite monitoring systems work?",
          answer: "Smart monitoring systems use strategically placed sensors and monitoring stations around your property that detect termite activity 24/7. These systems use advanced technology including acoustic sensors, moisture detection, and movement sensors to identify termite presence. When activity is detected, you receive instant alerts via mobile app, and our technicians respond immediately."
        },
        {
          question: "What happens when the monitoring system detects termites?",
          answer: "When termites are detected, you receive immediate alerts through our mobile app and SMS. Our emergency response team is automatically notified and will contact you within hours to schedule immediate treatment. The system provides precise location data, allowing for targeted treatment that eliminates the colony quickly and effectively."
        },
        {
          question: "Can I monitor my property remotely?",
          answer: "Yes, our smart monitoring systems include mobile app access that allows you to check your property's protection status anytime, anywhere. You can view real-time data, receive alerts, schedule inspections, and access historical reports. The system also provides predictive analytics to identify potential risk factors before they become problems."
        }
      ]
    },
    {
      category: "Cost & Value",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
        </svg>
      ),
      questions: [
        {
          question: "How much does termite prevention cost?",
          answer: "Prevention costs vary based on property size, system type, and specific requirements: Chemical barriers typically range from $2,500-$4,500, physical barriers from $3,500-$6,000, smart monitoring from $1,800-$3,000, and hybrid systems from $5,500-$8,500. While this may seem significant, it's 80-90% less expensive than repairing termite damage, which averages $15,000-$50,000+."
        },
        {
          question: "Is termite prevention tax deductible?",
          answer: "For investment properties, termite prevention may be tax deductible as a property maintenance expense. For owner-occupied homes, prevention costs are generally not deductible, but they can add to your property's cost base for capital gains purposes. We recommend consulting with your accountant for specific tax advice based on your situation."
        },
        {
          question: "Does termite prevention increase property value?",
          answer: "Yes, having a current termite prevention system significantly increases property value and marketability. Properties with active termite protection sell faster and for higher prices because buyers have confidence in the property's structural integrity. Many buyers specifically look for homes with termite protection, and it's often a requirement for property financing."
        }
      ]
    }
  ];

  const allQuestions = faqCategories.flatMap((category, categoryIndex) =>
    category.questions.map((q, questionIndex) => ({
      ...q,
      categoryIndex,
      questionIndex,
      category: category.category,
      icon: category.icon
    }))
  );

  const filteredQuestions = allQuestions.filter(
    item =>
      item.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.answer.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 bg-red-100 text-red-700 rounded-full font-semibold mb-4">
            <span className="mr-2">❓</span>FREQUENTLY ASKED QUESTIONS
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Everything About <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-red-800">Termite Prevention</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Get expert answers to the most common questions about termite prevention systems, costs, and effectiveness.
          </p>
        </div>

        {/* Search Bar */}
        <div className="max-w-2xl mx-auto mb-12">
          <div className="relative">
            <input
              type="text"
              placeholder="Search questions about termite prevention..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full px-6 py-4 text-lg border-2 border-gray-200 rounded-full focus:border-red-500 focus:outline-none transition-colors"
            />
            <svg className="absolute right-6 top-1/2 transform -translate-y-1/2 w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>
        </div>

        {/* FAQ Categories */}
        {searchTerm === '' ? (
          <div className="space-y-8">
            {faqCategories.map((category, categoryIndex) => (
              <div key={categoryIndex} className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden">
                <div className="bg-gradient-to-r from-red-600 to-red-700 px-8 py-6">
                  <div className="flex items-center">
                    <span className="w-8 h-8 mr-4 text-white inline-flex items-center justify-center">{category.icon}</span>
                    <h3 className="text-2xl font-bold text-white">{category.category}</h3>
                  </div>
                </div>

                <div className="divide-y divide-gray-100">
                  {category.questions.map((item, questionIndex) => {
                    const globalIndex = categoryIndex * 1000 + questionIndex;
                    const isOpen = openItems.includes(globalIndex);

                    return (
                      <div key={questionIndex}>
                        <button
                          type="button"
                          onClick={() => toggleItem(globalIndex)}
                          className="w-full px-8 py-6 text-left hover:bg-gray-50 transition-colors focus:outline-none focus:bg-gray-50"
                        >
                          <div className="flex items-center justify-between">
                            <h4 className="text-lg font-semibold text-gray-900 pr-4">{item.question}</h4>
                            <svg
                              className={`w-6 h-6 text-red-600 transform transition-transform ${isOpen ? 'rotate-180' : ''}`}
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
            ))}
          </div>
        ) : (
          /* Search Results */
          <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden">
            <div className="bg-gradient-to-r from-blue-600 to-cyan-600 px-8 py-6">
              <h3 className="text-2xl font-bold text-white">
                Search Results ({filteredQuestions.length} found)
              </h3>
            </div>

            <div className="divide-y divide-gray-100">
              {filteredQuestions.length > 0 ? (
                filteredQuestions.map((item, index) => {
                  const globalIndex = item.categoryIndex * 1000 + item.questionIndex;
                  const isOpen = openItems.includes(globalIndex);

                  return (
                    <div key={index}>
                      <button
                        type="button"
                        onClick={() => toggleItem(globalIndex)}
                        className="w-full px-8 py-6 text-left hover:bg-gray-50 transition-colors focus:outline-none focus:bg-gray-50"
                      >
                        <div className="flex items-center justify-between">
                          <div>
                            <div className="flex items-center mb-2">
                              <span className="w-5 h-5 mr-2 text-red-600 inline-flex items-center justify-center">{item.icon}</span>
                              <span className="text-sm text-red-600 font-semibold">{item.category}</span>
                            </div>
                            <h4 className="text-lg font-semibold text-gray-900 pr-4">{item.question}</h4>
                          </div>
                          <svg
                            className={`w-6 h-6 text-red-600 transform transition-transform ${isOpen ? 'rotate-180' : ''}`}
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
                })
              ) : (
                <div className="px-8 py-12 text-center">
                  <div className="w-16 h-16 mx-auto mb-4 text-gray-400 flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">No results found</h3>
                  <p className="text-gray-600">Try searching with different keywords or browse our categories above.</p>
                </div>
              )}
            </div>
          </div>
        )}

        {/* Contact CTA */}
        <div className="mt-16 bg-gradient-to-r from-red-600 to-red-700 rounded-2xl p-8 text-white text-center">
          <h3 className="text-3xl font-bold mb-4">Still Have Questions?</h3>
          <p className="text-xl mb-8 text-red-100 max-w-3xl mx-auto">
            Our termite prevention experts are here to help. Get personalized answers and free consultation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button type="button" className="px-8 py-4 bg-white text-red-600 rounded-full font-bold text-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105">
              Ask Our Experts
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

"use client";

import { useState, useEffect } from 'react';
import Image from 'next/image';

export default function TermitePreventionContent() {
  const [activeTab, setActiveTab] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [expandedCard, setExpandedCard] = useState<number | null>(null);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const tabs = [
    {
      id: 0,
      title: "Chemical Barriers",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
        </svg>
      )
    },
    {
      id: 1,
      title: "Physical Barriers",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      )
    },

    {
      id: 2,
      title: "Eco Solutions",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
        </svg>
      )
    }
  ];

  const preventionMethods = [
    {
      title: "Advanced Chemical Barriers",
      description: "State-of-the-art liquid termiticides that create an invisible protective zone around your property",
      features: ["25-year protection guarantee", "Eco-friendly formulations", "Soil-applied technology", "Continuous barrier protection"],
      image: "/termite-chemical-barrier.jpg",
      effectiveness: "99.9%",
      duration: "25 Years"
    },
    {
      title: "Physical Barrier Systems",
      description: "Engineered physical barriers using stainless steel mesh and crushed granite technology",
      features: ["Lifetime protection", "No chemicals required", "Environmentally safe", "Building code compliant"],
      image: "/termite-physical-barrier.jpg",
      effectiveness: "100%",
      duration: "Lifetime"
    },

    {
      title: "Eco-Friendly Solutions",
      description: "Environmentally conscious prevention methods safe for families, pets, and the ecosystem",
      features: ["Non-toxic to humans", "Pet-safe formulations", "Biodegradable options", "Sustainable practices"],
      image: "/termite-eco-solutions.jpg",
      effectiveness: "99.5%",
      duration: "20 Years"
    }
  ];

  const riskFactors = [
    { factor: "Moisture Issues", risk: "High", description: "Leaking pipes, poor drainage, or high humidity" },
    { factor: "Wood-to-Soil Contact", risk: "Critical", description: "Direct contact between timber and soil" },
    { factor: "Landscaping", risk: "Medium", description: "Mulch, gardens, or trees too close to foundations" },
    { factor: "Construction Type", risk: "Variable", description: "Building materials and construction methods" },
    { factor: "Geographic Location", risk: "High", description: "Australia's high termite activity zones" },
    { factor: "Previous Activity", risk: "Critical", description: "History of termite problems in the area" }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-red-100 text-red-700 rounded-full font-semibold mb-4">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
            </svg>
            SCIENTIFICALLY PROVEN PREVENTION METHODS
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Advanced <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-red-800">Termite Prevention</span> Systems
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Our comprehensive prevention approach combines cutting-edge technology, eco-friendly solutions, and decades of expertise to create an impenetrable defense against Australia's most destructive pests.
          </p>
        </div>

        {/* Interactive Tabs */}
        <div className="mb-16">
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                type="button"
                onClick={() => setActiveTab(tab.id)}
                className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                  activeTab === tab.id
                    ? 'bg-gradient-to-r from-red-600 to-red-700 text-white shadow-lg scale-105'
                    : 'bg-white text-gray-700 hover:bg-red-50 border border-gray-200'
                }`}
              >
                <span className="mr-2 inline-flex">{tab.icon}</span>
                {tab.title}
              </button>
            ))}
          </div>

          {/* Tab Content */}
          <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                <div className="flex items-center mb-4">
                  <span className="w-10 h-10 mr-3 text-red-600 inline-flex items-center justify-center">{tabs[activeTab].icon}</span>
                  <h3 className="text-3xl font-bold text-gray-900">{preventionMethods[activeTab].title}</h3>
                </div>
                <p className="text-gray-600 text-lg mb-6 leading-relaxed">
                  {preventionMethods[activeTab].description}
                </p>

                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="bg-green-50 p-4 rounded-lg text-center">
                    <div className="text-2xl font-bold text-green-600">{preventionMethods[activeTab].effectiveness}</div>
                    <div className="text-sm text-green-700">Effectiveness Rate</div>
                  </div>
                  <div className="bg-blue-50 p-4 rounded-lg text-center">
                    <div className="text-2xl font-bold text-blue-600">{preventionMethods[activeTab].duration}</div>
                    <div className="text-sm text-blue-700">Protection Duration</div>
                  </div>
                </div>

                <ul className="space-y-3">
                  {preventionMethods[activeTab].features.map((feature, index) => (
                    <li key={index} className="flex items-center text-gray-700">
                      <svg className="w-5 h-5 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="relative">
                <div className="aspect-w-16 aspect-h-12 rounded-xl overflow-hidden shadow-lg">
                  <Image
                    src={preventionMethods[activeTab].image}
                    alt={preventionMethods[activeTab].title}
                    width={600}
                    height={400}
                    className="object-cover w-full h-full"
                    loading="lazy"
                    quality={75}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Risk Assessment Section */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              Property Risk Assessment
            </h3>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Understanding your property's risk factors is crucial for implementing the most effective prevention strategy.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {riskFactors.map((item, index) => (
              <div
                key={index}
                className={`bg-white rounded-lg p-6 shadow-lg border-l-4 cursor-pointer transition-all duration-300 hover:shadow-xl transform hover:-translate-y-1 ${
                  item.risk === 'Critical' ? 'border-red-500' :
                  item.risk === 'High' ? 'border-orange-500' : 'border-yellow-500'
                } ${expandedCard === index ? 'scale-105' : ''}`}
                onClick={() => setExpandedCard(expandedCard === index ? null : index)}
              >
                <div className="flex items-center justify-between mb-3">
                  <h4 className="font-semibold text-gray-900">{item.factor}</h4>
                  <span className={`px-2 py-1 rounded-full text-xs font-semibold ${
                    item.risk === 'Critical' ? 'bg-red-100 text-red-700' :
                    item.risk === 'High' ? 'bg-orange-100 text-orange-700' : 'bg-yellow-100 text-yellow-700'
                  }`}>
                    {item.risk}
                  </span>
                </div>
                <p className={`text-gray-600 text-sm transition-all duration-300 ${
                  expandedCard === index ? 'opacity-100' : 'opacity-70'
                }`}>
                  {item.description}
                </p>
                {expandedCard === index && (
                  <div className="mt-4 p-3 bg-gray-50 rounded-lg">
                    <p className="text-sm text-gray-700">
                      Click to schedule a professional risk assessment for your property.
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Prevention vs Repair Comparison */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              Prevention vs. Repair: The Smart Choice
            </h3>
            <p className="text-gray-600 max-w-3xl mx-auto">
              See why prevention is always the smarter approach for Australian property owners.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Prevention Side */}
            <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-2xl p-8 border-2 border-green-200">
              <div className="text-center mb-6">
                <div className="w-16 h-16 mx-auto mb-3 text-green-600 flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h4 className="text-2xl font-bold text-green-800 mb-2">Prevention Approach</h4>
                <div className="text-lg font-bold text-green-600">Smart Investment</div>
                <div className="text-green-700">Long-term protection</div>
              </div>

              <ul className="space-y-3">
                {[
                  "25-year protection guarantee",
                  "No structural damage",
                  "Peace of mind",
                  "Increased property value",
                  "Insurance compliance",
                  "Eco-friendly options"
                ].map((benefit, index) => (
                  <li key={index} className="flex items-center text-green-800">
                    <svg className="w-5 h-5 text-green-600 mr-3" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                    </svg>
                    {benefit}
                  </li>
                ))}
              </ul>
            </div>

            {/* Repair Side */}
            <div className="bg-gradient-to-br from-red-50 to-red-100 rounded-2xl p-8 border-2 border-red-200">
              <div className="text-center mb-6">
                <div className="w-16 h-16 mx-auto mb-3 text-red-600 flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                  </svg>
                </div>
                <h4 className="text-2xl font-bold text-red-800 mb-2">Repair Approach</h4>
                <div className="text-lg font-bold text-red-600">Costly Consequence</div>
                <div className="text-red-700">Expensive repairs needed</div>
              </div>

              <ul className="space-y-3">
                {[
                  "Extensive structural repairs",
                  "Replacement of damaged timber",
                  "Disruption to daily life",
                  "Decreased property value",
                  "Insurance may not cover",
                  "Ongoing treatment costs"
                ].map((issue, index) => (
                  <li key={index} className="flex items-center text-red-800">
                    <svg className="w-5 h-5 text-red-600 mr-3" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"/>
                    </svg>
                    {issue}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="text-center mt-8">
            <div className="bg-yellow-100 border border-yellow-300 rounded-lg p-4 inline-flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-yellow-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
              </svg>
              <p className="text-yellow-800 font-semibold">
                Prevention is significantly more cost-effective than repairs!
              </p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-red-600 to-red-700 rounded-2xl p-8 text-white text-center">
          <h3 className="text-3xl font-bold mb-4">Ready to Protect Your Property?</h3>
          <p className="text-xl mb-8 text-red-100 max-w-3xl mx-auto">
            Don't wait for termites to cause thousands in damage. Our prevention systems cost a fraction of repair costs and provide decades of protection.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button type="button" className="px-8 py-4 bg-white text-red-600 rounded-full font-bold text-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105">
              Get Free Prevention Quote
            </button>
            <button type="button" className="px-8 py-4 border-2 border-white rounded-full font-bold text-lg hover:bg-white/10 transition-all duration-300">
              Schedule Assessment
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

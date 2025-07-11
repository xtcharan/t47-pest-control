"use client";

import { useState, useEffect } from 'react';
import Image from 'next/image';

export default function TermiteDamageRepairContent() {
  const [activeTab, setActiveTab] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [expandedCard, setExpandedCard] = useState<number | null>(null);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const tabs = [
    {
      id: 0,
      title: "Assessment",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
      )
    },
    {
      id: 1,
      title: "Structural Repair",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      )
    },
    {
      id: 2,
      title: "Restoration",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
        </svg>
      )
    },
    {
      id: 3,
      title: "Prevention",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      )
    }
  ];

  const repairServices = [
    {
      title: "Professional Damage Assessment",
      description: "Comprehensive evaluation using advanced technology to determine the full extent of termite damage",
      features: ["Structural integrity analysis", "Advanced imaging technology", "Detailed damage mapping", "Safety risk evaluation"],
      image: "/termite-damage-assessment.jpg",
      timeframe: "Same Day",
      warranty: "Detailed Report"
    },
    {
      title: "Structural Framework Repair",
      description: "Complete restoration of load-bearing elements using premium materials and engineering standards",
      features: ["Load-bearing beam replacement", "Foundation reinforcement", "Structural steel installation", "Engineering certification"],
      image: "/structural-framework-repair.jpg",
      timeframe: "1-3 Weeks",
      warranty: "10 Years"
    },
    {
      title: "Complete Property Restoration",
      description: "Full restoration services returning your property to better-than-original condition",
      features: ["Premium material replacement", "Architectural matching", "Interior finishing", "Quality assurance testing"],
      image: "/property-restoration.jpg",
      timeframe: "2-6 Weeks",
      warranty: "5 Years"
    },
    {
      title: "Future Prevention Integration",
      description: "Advanced termite prevention systems installed during repair to prevent future damage",
      features: ["Chemical barrier installation", "Physical barrier integration", "Monitoring system setup", "Ongoing protection plan"],
      image: "/prevention-integration.jpg",
      timeframe: "1-2 Days",
      warranty: "25 Years"
    }
  ];

  const damageCategories = [
    {
      category: "Surface Damage",
      severity: "Minor",
      description: "Cosmetic damage to non-structural elements",
      repairTime: "1-3 Days",
      examples: ["Skirting boards", "Door frames", "Window sills", "Decorative timber"]
    },
    {
      category: "Structural Damage",
      severity: "Major",
      description: "Damage to load-bearing structural components",
      repairTime: "1-3 Weeks",
      examples: ["Floor joists", "Wall studs", "Roof beams", "Support posts"]
    },
    {
      category: "Extensive Damage",
      severity: "Severe",
      description: "Widespread damage requiring major reconstruction",
      repairTime: "1-3 Months",
      examples: ["Multiple structural elements", "Foundation damage", "Roof structure", "Complete room reconstruction"]
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-orange-100 text-orange-700 rounded-full font-semibold mb-4">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
            </svg>
            PROFESSIONAL DAMAGE RESTORATION
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Expert <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-orange-600">Termite Damage</span> Repair
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            From emergency assessment to complete restoration, our certified specialists restore your property using premium materials and proven techniques that exceed Australian building standards.
          </p>
        </div>

        {/* Interactive Service Tabs */}
        <div className="mb-16">
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                type="button"
                onClick={() => setActiveTab(tab.id)}
                className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                  activeTab === tab.id
                    ? 'bg-gradient-to-r from-red-600 to-orange-600 text-white shadow-lg scale-105'
                    : 'bg-white text-gray-700 hover:bg-orange-50 border border-gray-200'
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
                  <h3 className="text-3xl font-bold text-gray-900">{repairServices[activeTab].title}</h3>
                </div>
                <p className="text-gray-600 text-lg mb-6 leading-relaxed">
                  {repairServices[activeTab].description}
                </p>

                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="bg-green-50 p-4 rounded-lg text-center">
                    <div className="text-2xl font-bold text-green-600">{repairServices[activeTab].timeframe}</div>
                    <div className="text-sm text-green-700">Completion Time</div>
                  </div>
                  <div className="bg-blue-50 p-4 rounded-lg text-center">
                    <div className="text-2xl font-bold text-blue-600">{repairServices[activeTab].warranty}</div>
                    <div className="text-sm text-blue-700">Warranty Period</div>
                  </div>
                </div>

                <ul className="space-y-3">
                  {repairServices[activeTab].features.map((feature, index) => (
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
                    src={repairServices[activeTab].image}
                    alt={repairServices[activeTab].title}
                    width={600}
                    height={400}
                    className="object-cover w-full h-full"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Damage Categories */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              Damage Assessment & Repair Categories
            </h3>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Understanding the extent of damage helps determine the appropriate repair approach and timeline.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {damageCategories.map((item, index) => (
              <div
                key={index}
                className={`bg-white rounded-lg p-6 shadow-lg border-l-4 cursor-pointer transition-all duration-300 hover:shadow-xl transform hover:-translate-y-1 ${
                  item.severity === 'Severe' ? 'border-red-500' :
                  item.severity === 'Major' ? 'border-orange-500' : 'border-yellow-500'
                } ${expandedCard === index ? 'scale-105' : ''}`}
                onClick={() => setExpandedCard(expandedCard === index ? null : index)}
              >
                <div className="flex items-center justify-between mb-3">
                  <h4 className="font-semibold text-gray-900">{item.category}</h4>
                  <span className={`px-2 py-1 rounded-full text-xs font-semibold ${
                    item.severity === 'Severe' ? 'bg-red-100 text-red-700' :
                    item.severity === 'Major' ? 'bg-orange-100 text-orange-700' : 'bg-yellow-100 text-yellow-700'
                  }`}>
                    {item.severity}
                  </span>
                </div>

                <p className="text-gray-600 text-sm mb-4">{item.description}</p>

                <div className="mb-4">
                  <div className="text-center">
                    <div className="text-sm text-gray-500">Repair Time</div>
                    <div className="font-semibold text-gray-900">{item.repairTime}</div>
                  </div>
                </div>

                {expandedCard === index && (
                  <div className="mt-4 p-3 bg-gray-50 rounded-lg">
                    <div className="text-sm text-gray-700 mb-2">Common Examples:</div>
                    <ul className="text-sm text-gray-600 space-y-1">
                      {item.examples.map((example, exampleIndex) => (
                        <li key={exampleIndex} className="flex items-center">
                          <span className="w-1 h-1 bg-gray-400 rounded-full mr-2"></span>
                          {example}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Insurance Support Section */}
        <div className="mb-16">
          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-8 border border-blue-100">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-3xl font-bold text-gray-900 mb-4">Insurance Claims Support</h3>
                <p className="text-gray-600 mb-6">
                  We provide comprehensive documentation and support for insurance claims, helping you maximize your coverage and minimize out-of-pocket expenses.
                </p>

                <div className="space-y-4">
                  {[
                    "Detailed damage assessment reports",
                    "Professional photography documentation",
                    "Repair cost estimates and quotes",
                    "Direct insurance company communication",
                    "Claims process guidance and support",
                    "Emergency stabilization documentation"
                  ].map((service, index) => (
                    <div key={index} className="flex items-center">
                      <svg className="w-5 h-5 text-blue-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                      </svg>
                      <span className="text-gray-700">{service}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-white rounded-lg p-6 shadow-lg">
                <h4 className="text-xl font-bold text-gray-900 mb-4">Insurance Success Rate</h4>
                <div className="text-center mb-4">
                  <div className="text-4xl font-bold text-blue-600">98%</div>
                  <div className="text-gray-600">Claims Approved</div>
                </div>
                <div className="text-sm text-gray-600 text-center">
                  Our detailed documentation and professional approach ensures maximum insurance claim success.
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-red-600 to-orange-600 rounded-2xl p-8 text-white text-center">
          <h3 className="text-3xl font-bold mb-4">Don't Let Damage Get Worse</h3>
          <p className="text-xl mb-8 text-red-100 max-w-3xl mx-auto">
            Every day of delay can mean more damage and higher repair costs. Get immediate professional assessment and emergency stabilization.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button type="button" className="px-8 py-4 bg-white text-red-600 rounded-full font-bold text-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105">
              Emergency Assessment
            </button>
            <button type="button" className="px-8 py-4 border-2 border-white rounded-full font-bold text-lg hover:bg-white/10 transition-all duration-300">
              Get Repair Quote
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

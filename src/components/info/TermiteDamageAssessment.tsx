"use client";

import { useState } from 'react';

export default function TermiteDamageAssessment() {
  const [selectedDamage, setSelectedDamage] = useState(0);

  const damageTypes = [
    {
      type: "Surface Damage",
      severity: "Minor",
      color: "yellow",
      description: "Cosmetic damage to non-structural elements that doesn't affect building integrity",
      signs: [
        "Hollow-sounding timber when tapped",
        "Small holes in wood surfaces",
        "Peeling paint or wallpaper",
        "Visible termite mud tubes",
        "Sawdust-like frass around timber"
      ],
      timeframe: "1-3 Days",
      urgency: "Low",
      examples: ["Skirting boards", "Door frames", "Window sills", "Decorative timber"]
    },
    {
      type: "Structural Damage",
      severity: "Major",
      color: "orange",
      description: "Damage to load-bearing elements that affects structural integrity and safety",
      signs: [
        "Sagging floors or ceilings",
        "Doors and windows not closing properly",
        "Visible cracks in walls",
        "Buckling or warped timber",
        "Soft or spongy floor areas"
      ],
      timeframe: "1-3 Weeks",
      urgency: "High",
      examples: ["Floor joists", "Wall studs", "Roof beams", "Support posts"]
    },
    {
      type: "Extensive Damage",
      severity: "Severe",
      color: "red",
      description: "Widespread damage requiring major reconstruction and immediate safety measures",
      signs: [
        "Significant structural movement",
        "Multiple rooms affected",
        "Foundation damage visible",
        "Roof structure compromised",
        "Building safety concerns"
      ],
      timeframe: "1-3 Months",
      urgency: "Critical",
      examples: ["Multiple structural elements", "Foundation damage", "Roof structure", "Complete reconstruction"]
    }
  ];

  const assessmentTools = [
    {
      tool: "Thermal Imaging Camera",
      purpose: "Detect moisture and hidden damage",
      accuracy: "95%",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      )
    },
    {
      tool: "Moisture Meter",
      purpose: "Measure moisture content in timber",
      accuracy: "98%",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
        </svg>
      )
    },
    {
      tool: "Acoustic Detection",
      purpose: "Listen for termite activity",
      accuracy: "90%",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" />
        </svg>
      )
    },
    {
      tool: "Borescope Camera",
      purpose: "Inspect inside wall cavities",
      accuracy: "99%",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
      )
    },
    {
      tool: "Structural Analysis",
      purpose: "Assess load-bearing capacity",
      accuracy: "100%",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
        </svg>
      )
    },
    {
      tool: "3D Mapping",
      purpose: "Document damage extent",
      accuracy: "99%",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
        </svg>
      )
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 to-indigo-50">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-700 rounded-full font-semibold mb-4">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
            PROFESSIONAL DAMAGE ASSESSMENT
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Comprehensive <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Damage Evaluation</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Our certified specialists use advanced technology and proven methodologies to accurately assess termite damage and develop the most effective repair strategy.
          </p>
        </div>

        {/* Damage Type Selector */}
        <div className="mb-16">
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            {damageTypes.map((damage, index) => (
              <button
                key={index}
                type="button"
                onClick={() => setSelectedDamage(index)}
                className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                  selectedDamage === index
                    ? `bg-gradient-to-r ${
                        damage.color === 'red' ? 'from-red-600 to-red-700' :
                        damage.color === 'orange' ? 'from-orange-600 to-orange-700' : 'from-yellow-600 to-yellow-700'
                      } text-white shadow-lg scale-105`
                    : 'bg-white text-gray-700 hover:bg-gray-50 border border-gray-200'
                }`}
              >
                {damage.type}
              </button>
            ))}
          </div>

          {/* Selected Damage Details */}
          <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Damage Information */}
              <div>
                <div className="flex items-center mb-4">
                  <h3 className="text-3xl font-bold text-gray-900 mr-4">{damageTypes[selectedDamage].type}</h3>
                  <span className={`px-3 py-1 rounded-full text-sm font-semibold ${
                    damageTypes[selectedDamage].color === 'red' ? 'bg-red-100 text-red-700' :
                    damageTypes[selectedDamage].color === 'orange' ? 'bg-orange-100 text-orange-700' : 'bg-yellow-100 text-yellow-700'
                  }`}>
                    {damageTypes[selectedDamage].severity}
                  </span>
                </div>

                <p className="text-gray-600 text-lg mb-6 leading-relaxed">
                  {damageTypes[selectedDamage].description}
                </p>

                {/* Key Metrics */}
                <div className="mb-6">
                  <div className="bg-gray-50 p-4 rounded-lg text-center">
                    <div className="text-sm text-gray-500 mb-1">Repair Timeframe</div>
                    <div className="text-lg font-bold text-gray-900">{damageTypes[selectedDamage].timeframe}</div>
                  </div>
                </div>

                {/* Urgency Indicator */}
                <div className={`p-4 rounded-lg mb-6 ${
                  damageTypes[selectedDamage].urgency === 'Critical' ? 'bg-red-50 border border-red-200' :
                  damageTypes[selectedDamage].urgency === 'High' ? 'bg-orange-50 border border-orange-200' : 'bg-yellow-50 border border-yellow-200'
                }`}>
                  <div className="flex items-center">
                    <span className="w-8 h-8 mr-3 inline-flex items-center justify-center">
                      {damageTypes[selectedDamage].urgency === 'Critical' ? (
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                        </svg>
                      ) : damageTypes[selectedDamage].urgency === 'High' ? (
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                        </svg>
                      ) : (
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                        </svg>
                      )}
                    </span>
                    <div>
                      <div className="font-semibold text-gray-900">Urgency Level: {damageTypes[selectedDamage].urgency}</div>
                      <div className="text-sm text-gray-600">
                        {damageTypes[selectedDamage].urgency === 'Critical' ? 'Immediate action required for safety' :
                         damageTypes[selectedDamage].urgency === 'High' ? 'Prompt repair needed to prevent escalation' : 'Schedule repair within reasonable timeframe'}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Warning Signs & Examples */}
              <div>
                <h4 className="text-xl font-bold text-gray-900 mb-4">Warning Signs to Look For:</h4>
                <ul className="space-y-3 mb-6">
                  {damageTypes[selectedDamage].signs.map((sign, index) => (
                    <li key={index} className="flex items-start">
                      <svg className="w-5 h-5 text-red-500 mr-3 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd"/>
                      </svg>
                      <span className="text-gray-700">{sign}</span>
                    </li>
                  ))}
                </ul>

                <h4 className="text-xl font-bold text-gray-900 mb-4">Common Examples:</h4>
                <div className="grid grid-cols-2 gap-2">
                  {damageTypes[selectedDamage].examples.map((example, index) => (
                    <div key={index} className="bg-gray-50 rounded-lg p-3 text-center text-sm text-gray-700">
                      {example}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Assessment Tools */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">Advanced Assessment Technology</h3>
            <p className="text-gray-600 max-w-3xl mx-auto">
              We use state-of-the-art equipment to ensure accurate damage assessment and comprehensive documentation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {assessmentTools.map((tool, index) => (
              <div key={index} className="bg-white rounded-lg p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                <div className="text-center mb-4">
                  <div className="w-16 h-16 mx-auto mb-3 text-blue-600 flex items-center justify-center">{tool.icon}</div>
                  <h4 className="text-lg font-bold text-gray-900 mb-2">{tool.tool}</h4>
                  <p className="text-gray-600 text-sm mb-3">{tool.purpose}</p>
                </div>

                <div className="bg-green-50 rounded-lg p-3 text-center">
                  <div className="text-2xl font-bold text-green-600">{tool.accuracy}</div>
                  <div className="text-sm text-green-700">Accuracy Rate</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Assessment Process */}
        <div className="mb-16">
          <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
            <h3 className="text-3xl font-bold text-gray-900 text-center mb-8">Our Assessment Process</h3>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  step: "1",
                  title: "Initial Inspection",
                  description: "Visual examination and safety assessment",
                  duration: "30-60 mins"
                },
                {
                  step: "2",
                  title: "Technology Scan",
                  description: "Advanced equipment detection and mapping",
                  duration: "60-90 mins"
                },
                {
                  step: "3",
                  title: "Damage Analysis",
                  description: "Detailed evaluation and documentation",
                  duration: "30-45 mins"
                },
                {
                  step: "4",
                  title: "Report & Quote",
                  description: "Comprehensive report with repair plan",
                  duration: "24 hours"
                }
              ].map((process, index) => (
                <div key={index} className="text-center">
                  <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-blue-600">{process.step}</span>
                  </div>
                  <h4 className="text-lg font-bold text-gray-900 mb-2">{process.title}</h4>
                  <p className="text-gray-600 text-sm mb-2">{process.description}</p>
                  <div className="text-blue-600 font-semibold text-sm">{process.duration}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl p-8 text-white text-center">
          <h3 className="text-3xl font-bold mb-4">Get Professional Damage Assessment</h3>
          <p className="text-xl mb-8 text-blue-100 max-w-3xl mx-auto">
            Don't guess about the extent of damage. Get accurate assessment and detailed repair planning from certified specialists.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button type="button" className="px-8 py-4 bg-white text-blue-600 rounded-full font-bold text-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105">
              Schedule Assessment
            </button>
            <button type="button" className="px-8 py-4 border-2 border-white rounded-full font-bold text-lg hover:bg-white/10 transition-all duration-300">
              Emergency Evaluation
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

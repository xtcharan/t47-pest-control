"use client";
import { useState } from 'react';

export default function TermiteBusinessInspectionProcedure() {
  const [activeStep, setActiveStep] = useState(0);


  const procedureSteps = [
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z" />
        </svg>
      ),
      title: "Business Consultation",
      description: "Initial consultation to understand business operations and scheduling requirements.",
      duration: "20 minutes",
      tools: ["Business assessment", "Operational schedule", "Compliance requirements", "Risk evaluation"],
      details: "We work with management to understand your business operations, identify optimal inspection times, and ensure minimal disruption to daily activities and customer service.",
      image: "/business-consultation.jpg"
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      ),
      title: "Facility Perimeter Assessment",
      description: "Comprehensive inspection of building exterior and surrounding commercial areas.",
      duration: "60 minutes",
      tools: ["Commercial-grade equipment", "Structural analysis tools", "Moisture detection", "Risk mapping"],
      details: "Thorough inspection of building perimeter, loading docks, storage areas, and external structures. We focus on commercial-specific risk factors and entry points.",
      image: "/facility-perimeter.jpg"
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m8 0H8m8 0v6a2 2 0 01-2 2H10a2 2 0 01-2-2V6m8 0H8" />
        </svg>
      ),
      title: "Operational Area Inspection",
      description: "Discrete inspection of work areas, offices, and customer-facing spaces.",
      duration: "90 minutes",
      tools: ["Quiet operation equipment", "Professional protocols", "Minimal-impact methods", "Discrete documentation"],
      details: "Systematic inspection of offices, workspaces, and customer areas using professional, discrete methods that maintain business operations and professional appearance.",
      image: "/operational-inspection.jpg"
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
        </svg>
      ),
      title: "Storage & Utility Assessment",
      description: "Detailed inspection of storage areas, utility rooms, and high-risk commercial zones.",
      duration: "45 minutes",
      tools: ["Industrial equipment", "Safety protocols", "Compliance tools", "Hazard assessment"],
      details: "Comprehensive inspection of storage areas, utility rooms, basements, and other high-risk zones. We follow all safety protocols and compliance requirements.",
      image: "/storage-assessment.jpg"
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
      title: "Infrastructure Evaluation",
      description: "Assessment of building infrastructure, HVAC systems, and structural elements.",
      duration: "30 minutes",
      tools: ["Structural analysis", "System diagnostics", "Infrastructure mapping", "Compliance checking"],
      details: "Evaluation of building infrastructure including HVAC systems, electrical areas, plumbing zones, and structural elements that may be vulnerable to termite activity.",
      image: "/infrastructure-evaluation.jpg"
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      ),
      title: "Business Report & Compliance",
      description: "Comprehensive business report with compliance documentation and recommendations.",
      duration: "25 minutes",
      tools: ["Business report template", "Compliance certificates", "Risk management plan", "Maintenance schedule"],
      details: "Professional business report including compliance documentation, risk management recommendations, and maintenance planning to protect your commercial investment.",
      image: "/business-report.jpg"
    }
  ];

  const businessFeatures = [
    {
      title: "Minimal Disruption",
      description: "Inspection scheduled around business operations",
      icon: "⏰",
      details: ["Flexible scheduling", "Off-hours availability", "Quick setup/breakdown", "Professional discretion"]
    },
    {
      title: "Compliance Focus",
      description: "Meeting all regulatory and industry standards",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      details: ["Industry compliance", "Safety regulations", "Documentation standards", "Certification requirements"]
    },
    {
      title: "Professional Service",
      description: "Business-appropriate methods and presentation",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
        </svg>
      ),
      details: ["Professional appearance", "Discrete operations", "Confidentiality assured", "Business etiquette"]
    },
    {
      title: "Risk Management",
      description: "Comprehensive business risk assessment and planning",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
      details: ["Asset protection", "Liability management", "Insurance compliance", "Emergency planning"]
    }
  ];

  const totalDuration = procedureSteps.reduce((total, step) => {
    const duration = step.duration.split('-')[0];
    return total + parseInt(duration);
  }, 0);

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <span className="inline-block px-3 py-1 bg-secondary/10 text-secondary text-sm font-semibold rounded-full mb-3">
              COMMERCIAL INSPECTION PROCEDURE
            </span>
            <h2 className="text-4xl font-bold mb-4 text-gray-900">
              Business Inspection <span className="text-secondary">Process</span>
            </h2>
            <div className="w-24 h-1 bg-secondary mx-auto mb-6"></div>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Our professional commercial inspection process is designed to protect your business assets while maintaining operational continuity and professional standards.
            </p>
            <div className="mt-4 text-secondary font-semibold">
              Total Duration: {totalDuration}-{totalDuration + 45} minutes
            </div>
          </div>

          {/* Process Timeline */}
          <div className="mb-12">
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              {procedureSteps.map((step, index) => (
                <button
                  key={index}
                  onClick={() => setActiveStep(index)}
                  className={`flex flex-col items-center p-4 rounded-lg transition-all duration-300 ${
                    activeStep === index
                      ? 'bg-secondary text-white shadow-lg transform scale-105'
                      : 'bg-white text-gray-700 hover:bg-secondary/10 shadow-md'
                  }`}
                >
                  <div className="text-2xl mb-2">{step.icon}</div>
                  <div className="text-sm font-semibold text-center">{step.title}</div>
                  <div className={`text-xs mt-1 ${activeStep === index ? 'text-gray-200' : 'text-gray-500'}`}>
                    {step.duration}
                  </div>
                </button>
              ))}
            </div>

            {/* Active Step Details */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="p-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  <div>
                    <div className="flex items-center mb-4">
                      <div className="text-4xl mr-4">{procedureSteps[activeStep].icon}</div>
                      <div>
                        <h3 className="text-2xl font-bold text-secondary">
                          Step {activeStep + 1}: {procedureSteps[activeStep].title}
                        </h3>
                        <div className="text-gray-600">Duration: {procedureSteps[activeStep].duration}</div>
                      </div>
                    </div>
                    
                    <p className="text-gray-600 mb-6 text-lg">
                      {procedureSteps[activeStep].description}
                    </p>
                    
                    <div className="mb-6">
                      <h4 className="font-semibold text-gray-900 mb-3">Professional Methods:</h4>
                      <div className="grid grid-cols-2 gap-2">
                        {procedureSteps[activeStep].tools.map((tool, index) => (
                          <div key={index} className="flex items-center">
                            <span className="text-secondary mr-2">•</span>
                            <span className="text-gray-600 text-sm">{tool}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                    

                  </div>
                  
                  <div className="bg-secondary/10 p-6 rounded-lg">
                    <h4 className="font-semibold text-gray-900 mb-4">Business Considerations:</h4>
                    <ul className="space-y-2 text-gray-600 text-sm">
                      {activeStep === 0 && (
                        <>
                          <li>• Operational schedule coordination</li>
                          <li>• Customer impact minimization</li>
                          <li>• Staff notification protocols</li>
                          <li>• Compliance requirement review</li>
                        </>
                      )}
                      {activeStep === 1 && (
                        <>
                          <li>• Loading dock accessibility</li>
                          <li>• External storage areas</li>
                          <li>• Parking and access routes</li>
                          <li>• Perimeter security systems</li>
                        </>
                      )}
                      {activeStep === 2 && (
                        <>
                          <li>• Customer service continuity</li>
                          <li>• Employee workspace protection</li>
                          <li>• Equipment and asset safety</li>
                          <li>• Professional appearance maintenance</li>
                        </>
                      )}
                      {activeStep === 3 && (
                        <>
                          <li>• Inventory protection protocols</li>
                          <li>• Safety compliance measures</li>
                          <li>• Utility system assessment</li>
                          <li>• Storage area optimization</li>
                        </>
                      )}
                      {activeStep === 4 && (
                        <>
                          <li>• HVAC system evaluation</li>
                          <li>• Structural integrity assessment</li>
                          <li>• Electrical system protection</li>
                          <li>• Plumbing zone inspection</li>
                        </>
                      )}
                      {activeStep === 5 && (
                        <>
                          <li>• Compliance documentation</li>
                          <li>• Risk management planning</li>
                          <li>• Insurance requirement fulfillment</li>
                          <li>• Maintenance scheduling</li>
                        </>
                      )}
                    </ul>
                  </div>
                </div>
                

              </div>
            </div>
          </div>

          {/* Business Features */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold text-center mb-8 text-gray-900">
              Commercial Service <span className="text-secondary">Features</span>
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {businessFeatures.map((feature, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
                  <div className="text-center mb-4">
                    <div className="text-4xl mb-2">{feature.icon}</div>
                    <h4 className="font-bold text-lg text-gray-900">{feature.title}</h4>
                  </div>
                  <p className="text-gray-600 text-sm mb-4 text-center">{feature.description}</p>
                  <ul className="space-y-1">
                    {feature.details.map((detail, idx) => (
                      <li key={idx} className="text-gray-600 text-xs flex items-start">
                        <span className="text-secondary mr-1">•</span>
                        {detail}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Key Benefits */}
          <div className="bg-gradient-to-r from-secondary to-primary p-8 rounded-lg text-white text-center">
            <h3 className="text-2xl font-bold mb-4">Why Businesses Trust Our Service</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <div className="w-12 h-12 mx-auto mb-2 text-white flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m8 0H8m8 0v6a2 2 0 01-2 2H10a2 2 0 01-2-2V6m8 0H8" />
                  </svg>
                </div>
                <h4 className="font-semibold mb-2">Professional Standards</h4>
                <p className="text-gray-200 text-sm">Business-appropriate methods and presentation</p>
              </div>
              <div>
                <div className="w-12 h-12 mx-auto mb-2 text-white flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h4 className="font-semibold mb-2">Operational Continuity</h4>
                <p className="text-gray-200 text-sm">Minimal disruption to business operations</p>
              </div>
              <div>
                <div className="w-12 h-12 mx-auto mb-2 text-white flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h4 className="font-semibold mb-2">Asset Protection</h4>
                <p className="text-gray-200 text-sm">Comprehensive protection for valuable business assets</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

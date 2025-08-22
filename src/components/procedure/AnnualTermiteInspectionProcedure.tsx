"use client";
import { useState } from 'react';

export default function AnnualTermiteInspectionProcedure() {
  const [activeStep, setActiveStep] = useState(0);


  const procedureSteps = [
    {
      icon: "📅",
      title: "Scheduled Assessment",
      description: "Review of previous inspection records and current property status.",
      duration: "15 minutes",
      tools: ["Previous reports", "Treatment records", "Property history", "Risk assessment"],
      details: "We review all previous inspection reports, treatment history, and any changes to the property since the last inspection. This helps us focus on areas of concern and track long-term trends.",
      image: "/scheduled-assessment.jpg"
    },
    {
      icon: "🔍",
      title: "Systematic Property Inspection",
      description: "Comprehensive inspection following AS3660.2 standards for annual monitoring.",
      duration: "90-120 minutes",
      tools: ["Thermal imaging", "Moisture meters", "Acoustic devices", "Digital documentation"],
      details: "Systematic inspection of all accessible areas including interior, exterior, subfloor, and roof void. We follow Australian Standard AS3660.2 protocols for annual inspections.",
      image: "/systematic-inspection.jpg"
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
      title: "Treatment System Evaluation",
      description: "Assessment of existing termite management systems and their effectiveness.",
      duration: "30-45 minutes",
      tools: ["System diagnostics", "Barrier testing", "Monitoring stations", "Effectiveness meters"],
      details: "Thorough evaluation of chemical barriers, physical barriers, or monitoring systems. We check for system integrity, effectiveness, and any required maintenance or reapplication.",
      image: "/treatment-evaluation.jpg"
    },
    {
      icon: "⚠️",
      title: "Risk Factor Analysis",
      description: "Identification and assessment of conducive conditions and new risk factors.",
      duration: "20-30 minutes",
      tools: ["Environmental assessment", "Moisture detection", "Structural analysis", "Risk matrices"],
      details: "We identify any new conducive conditions, changes in moisture patterns, landscaping modifications, or structural alterations that may affect termite risk.",
      image: "/risk-analysis.jpg"
    },
    {
      icon: "📊",
      title: "Trend Analysis & Documentation",
      description: "Comparison with previous inspections and documentation of changes over time.",
      duration: "20 minutes",
      tools: ["Historical data", "Trend analysis software", "Comparative photography", "Digital records"],
      details: "Analysis of trends over multiple inspections, identification of developing issues, and documentation of any changes in termite activity or risk factors.",
      image: "/trend-analysis.jpg"
    },
    {
      icon: "📋",
      title: "Report & Recommendations",
      description: "Comprehensive annual report with maintenance recommendations and future planning.",
      duration: "15 minutes",
      tools: ["Annual report template", "Recommendation matrix", "Maintenance schedule", "Compliance certificates"],
      details: "Detailed annual report including compliance certification, maintenance recommendations, and planning for the next inspection cycle.",
      image: "/annual-report.jpg"
    }
  ];

  const complianceFeatures = [
    {
      title: "AS3660.2 Compliance",
      description: "Full compliance with Australian Standard requirements",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    },
    {
      title: "Certified Inspectors",
      description: "Licensed professionals with ongoing training",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
        </svg>
      )
    },
    {
      title: "Digital Documentation",
      description: "Comprehensive digital records and reporting",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
        </svg>
      )
    },
    {
      title: "Warranty Maintenance",
      description: "Maintains treatment warranties and insurance compliance",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      )
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
            <span className="inline-block px-3 py-1 bg-green-light/10 text-green-dark text-sm font-semibold rounded-full mb-3">
              ANNUAL INSPECTION PROCEDURE
            </span>
            <h2 className="text-4xl font-bold mb-4 text-gray-900">
              Annual Inspection <span className="text-green-dark">Process</span>
            </h2>
            <div className="w-24 h-1 bg-green-light mx-auto mb-6"></div>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Our systematic annual inspection process ensures ongoing protection and compliance with Australian Standard AS3660.2 requirements.
            </p>
            <div className="mt-4 text-green-dark font-semibold">
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
                      ? 'bg-green-dark text-white shadow-lg transform scale-105'
                      : 'bg-white text-gray-700 hover:bg-green-light/10 shadow-md'
                  }`}
                >
                  <div className="w-8 h-8 mb-2 flex items-center justify-center">{step.icon}</div>
                  <div className="text-sm font-semibold text-center">{step.title}</div>
                  <div className={`text-xs mt-1 ${activeStep === index ? 'text-green-100' : 'text-gray-500'}`}>
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
                      <div className="w-12 h-12 mr-4 text-green-dark flex items-center justify-center">{procedureSteps[activeStep].icon}</div>
                      <div>
                        <h3 className="text-2xl font-bold text-green-dark">
                          Step {activeStep + 1}: {procedureSteps[activeStep].title}
                        </h3>
                        <div className="text-gray-600">Duration: {procedureSteps[activeStep].duration}</div>
                      </div>
                    </div>
                    
                    <p className="text-gray-600 mb-6 text-lg">
                      {procedureSteps[activeStep].description}
                    </p>
                    
                    <div className="mb-6">
                      <h4 className="font-semibold text-gray-900 mb-3">Tools & Methods:</h4>
                      <div className="grid grid-cols-2 gap-2">
                        {procedureSteps[activeStep].tools.map((tool, index) => (
                          <div key={index} className="flex items-center">
                            <span className="text-green-dark mr-2">•</span>
                            <span className="text-gray-600 text-sm">{tool}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                    

                  </div>
                  
                  <div className="bg-green-light/10 p-6 rounded-lg">
                    <h4 className="font-semibold text-gray-900 mb-4">Focus Areas:</h4>
                    <ul className="space-y-2 text-gray-600 text-sm">
                      {activeStep === 0 && (
                        <>
                          <li>• Previous inspection findings</li>
                          <li>• Treatment history review</li>
                          <li>• Property modifications</li>
                          <li>• Risk factor changes</li>
                        </>
                      )}
                      {activeStep === 1 && (
                        <>
                          <li>• All accessible areas</li>
                          <li>• High-risk zones</li>
                          <li>• Previous problem areas</li>
                          <li>• New construction areas</li>
                        </>
                      )}
                      {activeStep === 2 && (
                        <>
                          <li>• Chemical barrier integrity</li>
                          <li>• Physical barrier condition</li>
                          <li>• Monitoring station status</li>
                          <li>• Treatment effectiveness</li>
                        </>
                      )}
                      {activeStep === 3 && (
                        <>
                          <li>• Moisture level changes</li>
                          <li>• New conducive conditions</li>
                          <li>• Landscaping modifications</li>
                          <li>• Structural alterations</li>
                        </>
                      )}
                      {activeStep === 4 && (
                        <>
                          <li>• Multi-year trend analysis</li>
                          <li>• Risk progression tracking</li>
                          <li>• Treatment effectiveness trends</li>
                          <li>• Seasonal pattern analysis</li>
                        </>
                      )}
                      {activeStep === 5 && (
                        <>
                          <li>• Compliance certification</li>
                          <li>• Maintenance recommendations</li>
                          <li>• Next inspection scheduling</li>
                          <li>• Warranty documentation</li>
                        </>
                      )}
                    </ul>
                  </div>
                </div>
                

              </div>
            </div>
          </div>

          {/* Compliance Features */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold text-center mb-8 text-gray-900">
              Compliance & <span className="text-green-dark">Standards</span>
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {complianceFeatures.map((feature, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-lg text-center hover:shadow-xl transition-shadow">
                  <div className="w-12 h-12 mx-auto mb-4 text-green-dark flex items-center justify-center">{feature.icon}</div>
                  <h4 className="font-bold text-lg text-gray-900 mb-2">{feature.title}</h4>
                  <p className="text-gray-600 text-sm">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Key Benefits */}
          <div className="bg-gradient-to-r from-green-light to-green-dark p-8 rounded-lg text-white text-center">
            <h3 className="text-2xl font-bold mb-4">Annual Inspection Benefits</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <div className="w-12 h-12 mx-auto mb-2 text-white flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                  </svg>
                </div>
                <h4 className="font-semibold mb-2">Ongoing Protection</h4>
                <p className="text-green-100 text-sm">Continuous monitoring ensures early detection and prevention</p>
              </div>
              <div>
                <div className="w-12 h-12 mx-auto mb-2 text-white flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
                <h4 className="font-semibold mb-2">Trend Analysis</h4>
                <p className="text-green-100 text-sm">Track changes over time for proactive management</p>
              </div>
              <div>
                <div className="w-12 h-12 mx-auto mb-2 text-white flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h4 className="font-semibold mb-2">Warranty Compliance</h4>
                <p className="text-green-100 text-sm">Maintain treatment warranties and insurance requirements</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

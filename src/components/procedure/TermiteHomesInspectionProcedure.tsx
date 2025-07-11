"use client";
import { useState } from 'react';

export default function TermiteHomesInspectionProcedure() {
  const [activeStep, setActiveStep] = useState(0);
  const [isExpanded, setIsExpanded] = useState(false);

  const procedureSteps = [
    {
      icon: "👨‍👩‍👧‍👦",
      title: "Family Consultation",
      description: "Initial consultation to understand family needs and safety requirements.",
      duration: "15 minutes",
      tools: ["Family questionnaire", "Safety protocols", "Scheduling coordination", "Special requirements"],
      details: "We discuss your family's specific needs, any health concerns, pet safety requirements, and schedule the inspection to minimize disruption to your daily routines.",
      image: "/family-consultation.jpg"
    },
    {
      icon: "🏡",
      title: "Family-Safe Exterior Inspection",
      description: "Child and pet-safe inspection of outdoor areas and home exterior.",
      duration: "45 minutes",
      tools: ["Non-invasive equipment", "Safety barriers", "Child-safe tools", "Pet-friendly methods"],
      details: "Comprehensive exterior inspection using family-safe methods. We ensure children and pets can remain in outdoor areas safely while we conduct our thorough assessment.",
      image: "/family-safe-exterior.jpg"
    },
    {
      icon: "🏠",
      title: "Living Space Assessment",
      description: "Careful inspection of family living areas with minimal disruption.",
      duration: "60 minutes",
      tools: ["Quiet equipment", "Non-toxic methods", "Protective covers", "Minimal-impact tools"],
      details: "Room-by-room inspection of living spaces, bedrooms, and common areas. We use quiet, non-invasive methods that allow family activities to continue with minimal interruption.",
      image: "/living-space-assessment.jpg"
    },
    {
      icon: "🔧",
      title: "Utility Area Inspection",
      description: "Thorough inspection of kitchens, bathrooms, and utility areas.",
      duration: "45 minutes",
      tools: ["Moisture meters", "Thermal imaging", "Hygiene protocols", "Safe detection methods"],
      details: "Detailed inspection of high-risk areas like kitchens and bathrooms, focusing on moisture sources and potential entry points while maintaining hygiene standards.",
      image: "/utility-inspection.jpg"
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
      title: "Concealed Area Assessment",
      description: "Safe inspection of subfloor, roof void, and storage areas.",
      duration: "30 minutes",
      tools: ["Safety equipment", "Protective gear", "Secure access methods", "Family notification"],
      details: "Inspection of concealed areas with full safety protocols. Family members are informed of our activities and any areas that should be avoided during this phase.",
      image: "/concealed-assessment.jpg"
    },
    {
      icon: "📋",
      title: "Family Report & Education",
      description: "Comprehensive report presentation with family education and prevention tips.",
      duration: "20 minutes",
      tools: ["Family-friendly report", "Educational materials", "Prevention guides", "Maintenance tips"],
      details: "We present findings in family-friendly language, provide educational materials about termite prevention, and offer practical tips for maintaining a termite-free home.",
      image: "/family-education.jpg"
    }
  ];

  const familySafetyFeatures = [
    {
      title: "Child Safety First",
      description: "All methods designed to be completely safe around children",
      icon: "👶",
      details: ["Non-toxic inspection methods", "Child-safe equipment", "Protective barriers when needed", "Quiet operation"]
    },
    {
      title: "Pet-Friendly Approach",
      description: "Inspection methods that ensure pet comfort and safety",
      icon: "🐕",
      details: ["Pet-safe detection methods", "Stress-free environment", "No harmful chemicals", "Minimal noise levels"]
    },
    {
      title: "Minimal Disruption",
      description: "Designed around family routines and daily activities",
      icon: "🏡",
      details: ["Flexible scheduling", "Quick setup/cleanup", "Quiet equipment", "Respectful approach"]
    },
    {
      title: "Educational Focus",
      description: "Teaching families about termite prevention and awareness",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
        </svg>
      ),
      details: ["Prevention education", "Warning sign awareness", "Maintenance guidance", "Family involvement"]
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
            <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-sm font-semibold rounded-full mb-3">
              FAMILY-SAFE INSPECTION PROCEDURE
            </span>
            <h2 className="text-4xl font-bold mb-4 text-gray-900">
              Home Inspection <span className="text-primary">Process</span>
            </h2>
            <div className="w-24 h-1 bg-primary mx-auto mb-6"></div>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Our family-focused inspection process prioritizes safety, minimal disruption, and education while providing comprehensive termite protection for your home.
            </p>
            <div className="mt-4 text-primary font-semibold">
              Total Duration: {totalDuration}-{totalDuration + 30} minutes
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
                      ? 'bg-primary text-white shadow-lg transform scale-105'
                      : 'bg-white text-gray-700 hover:bg-primary/10 shadow-md'
                  }`}
                >
                  <div className="text-2xl mb-2">{step.icon}</div>
                  <div className="text-sm font-semibold text-center">{step.title}</div>
                  <div className={`text-xs mt-1 ${activeStep === index ? 'text-blue-100' : 'text-gray-500'}`}>
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
                        <h3 className="text-2xl font-bold text-primary">
                          Step {activeStep + 1}: {procedureSteps[activeStep].title}
                        </h3>
                        <div className="text-gray-600">Duration: {procedureSteps[activeStep].duration}</div>
                      </div>
                    </div>
                    
                    <p className="text-gray-600 mb-6 text-lg">
                      {procedureSteps[activeStep].description}
                    </p>
                    
                    <div className="mb-6">
                      <h4 className="font-semibold text-gray-900 mb-3">Family-Safe Methods:</h4>
                      <div className="grid grid-cols-2 gap-2">
                        {procedureSteps[activeStep].tools.map((tool, index) => (
                          <div key={index} className="flex items-center">
                            <span className="text-primary mr-2">•</span>
                            <span className="text-gray-600 text-sm">{tool}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    <button
                      onClick={() => setIsExpanded(!isExpanded)}
                      className="text-primary hover:text-secondary font-semibold transition-colors"
                    >
                      {isExpanded ? 'Show Less' : 'Show More Details'} →
                    </button>
                  </div>
                  
                  <div className="bg-primary/10 p-6 rounded-lg">
                    <h4 className="font-semibold text-gray-900 mb-4">Family Considerations:</h4>
                    <ul className="space-y-2 text-gray-600 text-sm">
                      {activeStep === 0 && (
                        <>
                          <li>• Family schedule coordination</li>
                          <li>• Special health considerations</li>
                          <li>• Pet safety requirements</li>
                          <li>• Child activity planning</li>
                        </>
                      )}
                      {activeStep === 1 && (
                        <>
                          <li>• Safe outdoor play areas</li>
                          <li>• Pet containment if needed</li>
                          <li>• Garden bed inspection</li>
                          <li>• Playground equipment check</li>
                        </>
                      )}
                      {activeStep === 2 && (
                        <>
                          <li>• Quiet operation methods</li>
                          <li>• Furniture protection</li>
                          <li>• Child-safe equipment</li>
                          <li>• Minimal room disruption</li>
                        </>
                      )}
                      {activeStep === 3 && (
                        <>
                          <li>• Food safety protocols</li>
                          <li>• Hygiene maintenance</li>
                          <li>• Water source protection</li>
                          <li>• Kitchen safety measures</li>
                        </>
                      )}
                      {activeStep === 4 && (
                        <>
                          <li>• Secure access methods</li>
                          <li>• Safety barrier installation</li>
                          <li>• Family notification protocols</li>
                          <li>• Emergency procedures</li>
                        </>
                      )}
                      {activeStep === 5 && (
                        <>
                          <li>• Child-friendly explanations</li>
                          <li>• Family prevention education</li>
                          <li>• Maintenance guidance</li>
                          <li>• Follow-up scheduling</li>
                        </>
                      )}
                    </ul>
                  </div>
                </div>
                
                {isExpanded && (
                  <div className="mt-8 pt-8 border-t border-gray-200">
                    <h4 className="font-semibold text-gray-900 mb-4">Detailed Process:</h4>
                    <p className="text-gray-600 leading-relaxed">
                      {procedureSteps[activeStep].details}
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Family Safety Features */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold text-center mb-8 text-gray-900">
              Family Safety <span className="text-primary">Features</span>
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {familySafetyFeatures.map((feature, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
                  <div className="text-center mb-4">
                    <div className="text-4xl mb-2">{feature.icon}</div>
                    <h4 className="font-bold text-lg text-gray-900">{feature.title}</h4>
                  </div>
                  <p className="text-gray-600 text-sm mb-4 text-center">{feature.description}</p>
                  <ul className="space-y-1">
                    {feature.details.map((detail, idx) => (
                      <li key={idx} className="text-gray-600 text-xs flex items-start">
                        <span className="text-primary mr-1">•</span>
                        {detail}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Key Benefits */}
          <div className="bg-gradient-to-r from-primary to-secondary p-8 rounded-lg text-white text-center">
            <h3 className="text-2xl font-bold mb-4">Why Families Choose Our Service</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <div className="w-12 h-12 mx-auto mb-2 text-white flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h4 className="font-semibold mb-2">Complete Safety</h4>
                <p className="text-blue-100 text-sm">Non-toxic methods safe for children and pets</p>
              </div>
              <div>
                <div className="w-12 h-12 mx-auto mb-2 text-white flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                  </svg>
                </div>
                <h4 className="font-semibold mb-2">Minimal Disruption</h4>
                <p className="text-blue-100 text-sm">Family routines continue with minimal interruption</p>
              </div>
              <div>
                <div className="w-12 h-12 mx-auto mb-2 text-white flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                </div>
                <h4 className="font-semibold mb-2">Education Focused</h4>
                <p className="text-blue-100 text-sm">Learn how to protect your home long-term</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

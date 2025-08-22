"use client";
import { useState } from 'react';

export default function PrePurchaseInspectionInfoGraphic() {
  const [activeStep, setActiveStep] = useState(0);

  const inspectionSteps = [
    {
      id: 0,
      title: "Property Assessment",
      description: "Comprehensive evaluation of the property's termite risk factors",
      details: [
        "Structural timber inspection",
        "Moisture level assessment", 
        "Landscaping risk evaluation",
        "Previous treatment history review"
      ],
      icon: "🏠",
      color: "red"
    },
    {
      id: 1,
      title: "Advanced Detection",
      description: "Using cutting-edge technology to identify termite activity",
      details: [
        "Thermal imaging cameras",
        "Moisture detection meters",
        "Acoustic listening devices",
        "Visual inspection techniques"
      ],
      icon: "🔍",
      color: "red"
    },
    {
      id: 2,
      title: "Detailed Analysis",
      description: "Thorough examination and documentation of findings",
      details: [
        "Damage extent mapping",
        "Species identification",
        "Risk level assessment",
        "Photographic documentation"
      ],
      icon: "📊",
      color: "red"
    },
    {
      id: 3,
      title: "Comprehensive Report",
      description: "Professional report with recommendations and cost estimates",
      details: [
        "Detailed findings summary",
        "Treatment recommendations",
        "Cost estimates provided",
        "Negotiation support data"
      ],
      icon: "📋",
      color: "red"
    }
  ];

  const riskFactors = [
    { factor: "Timber Construction", risk: "High", percentage: 85 },
    { factor: "Garden Beds Near Foundation", risk: "Medium", percentage: 65 },
    { factor: "Moisture Issues", risk: "High", percentage: 90 },
    { factor: "Previous Termite Activity", risk: "Very High", percentage: 95 },
    { factor: "Untreated Timber", risk: "High", percentage: 80 },
    { factor: "Poor Ventilation", risk: "Medium", percentage: 60 }
  ];

  return (
    <section className="py-16 bg-gradient-to-br from-red-light/5 to-red-dark/5">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 text-gray-900">
              Pre-Purchase Inspection <span className="text-red-dark">Process</span>
            </h2>
            <div className="w-24 h-1 bg-red-light mx-auto mb-6"></div>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Our systematic approach ensures you have all the information needed to make an informed property purchase decision.
            </p>
          </div>

          {/* Interactive Process Steps */}
          <div className="mb-16">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
              {inspectionSteps.map((step, index) => (
                <div
                  key={step.id}
                  className={`cursor-pointer p-6 rounded-lg transition-all duration-300 ${
                    activeStep === index
                      ? 'bg-red-dark text-white shadow-lg transform scale-105'
                      : 'bg-white text-gray-700 hover:bg-red-light/10 shadow-md'
                  }`}
                  onClick={() => setActiveStep(index)}
                >
                  <div className="text-center">
                    <div className="text-3xl mb-3">{step.icon}</div>
                    <h3 className="font-bold text-lg mb-2">{step.title}</h3>
                    <p className={`text-sm ${activeStep === index ? 'text-red-100' : 'text-gray-600'}`}>
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Active Step Details */}
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold text-red-dark mb-4">
                {inspectionSteps[activeStep].title} Details
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-3">What We Do:</h4>
                  <ul className="space-y-2">
                    {inspectionSteps[activeStep].details.map((detail, index) => (
                      <li key={index} className="flex items-start">
                        <span className="text-red-dark mr-2">•</span>
                        <span className="text-gray-600">{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="bg-red-light/10 p-6 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-3">Why It Matters:</h4>
                  <p className="text-gray-600">
                    {activeStep === 0 && "Understanding the property's risk profile helps identify potential problem areas before they become costly issues."}
                    {activeStep === 1 && "Advanced technology allows us to detect termite activity that might be missed by visual inspection alone."}
                    {activeStep === 2 && "Detailed analysis provides the comprehensive information needed for informed decision-making."}
                    {activeStep === 3 && "Professional reporting gives you the documentation needed for negotiations and future planning."}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Risk Factors Visualization */}
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h3 className="text-2xl font-bold text-center mb-8 text-gray-900">
              Common Property <span className="text-red-dark">Risk Factors</span>
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {riskFactors.map((item, index) => (
                <div key={index} className="mb-4">
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-medium text-gray-900">{item.factor}</span>
                    <span className={`px-2 py-1 rounded text-sm font-semibold ${
                      item.risk === 'Very High' ? 'bg-red-dark text-white' :
                      item.risk === 'High' ? 'bg-red-light text-white' :
                      'bg-yellow-400 text-gray-900'
                    }`}>
                      {item.risk}
                    </span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-3">
                    <div
                      className={`h-3 rounded-full transition-all duration-1000 ${
                        item.risk === 'Very High' ? 'bg-red-dark' :
                        item.risk === 'High' ? 'bg-red-light' :
                        'bg-yellow-400'
                      }`}
                      style={{ width: `${item.percentage}%` }}
                    ></div>
                  </div>
                  <div className="text-right text-sm text-gray-600 mt-1">
                    {item.percentage}% risk factor
                  </div>
                </div>
              ))}
            </div>
          </div>


        </div>
      </div>
    </section>
  );
}

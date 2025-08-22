"use client";
import { useState } from 'react';
import Image from 'next/image';

export default function PrePurchaseTermiteInspectionProcedure() {
  const [activeStep, setActiveStep] = useState(0);


  const procedureSteps = [
    {
      icon: "📋",
      title: "Pre-Inspection Planning",
      description: "Comprehensive preparation and property research before the inspection begins.",
      duration: "30 minutes",
      tools: ["Property plans", "Historical records", "Risk assessment forms", "Equipment checklist"],
      details: "Our certified inspectors review property documents, previous inspection reports, and conduct initial risk assessment. We prepare specialized equipment based on property type and identified risk factors.",
      image: "/pre-inspection-planning.jpg"
    },
    {
      icon: "🔍",
      title: "Exterior Property Assessment",
      description: "Thorough examination of the property's exterior for termite entry points and conducive conditions.",
      duration: "45-60 minutes",
      tools: ["Thermal imaging camera", "Moisture meter", "Inspection torch", "Documentation camera"],
      details: "Systematic inspection of foundations, external walls, garden beds, timber structures, and potential moisture sources. We identify and document all risk factors and conducive conditions.",
      image: "/exterior-assessment.jpg"
    },
    {
      icon: "🏠",
      title: "Interior Inspection",
      description: "Detailed examination of all accessible interior areas including living spaces and storage areas.",
      duration: "60-90 minutes",
      tools: ["Acoustic detection device", "Moisture meter", "Thermal camera", "Inspection probe"],
      details: "Room-by-room inspection focusing on high-risk areas like kitchens, bathrooms, and areas with timber structures. We check for active termite signs, damage, and conducive conditions.",
      image: "/interior-inspection.jpg"
    },
    {
      icon: "🔧",
      title: "Subfloor & Roof Void Inspection",
      description: "Comprehensive examination of concealed areas where termite activity often begins.",
      duration: "45-60 minutes",
      tools: ["Inspection torch", "Moisture meter", "Thermal imaging", "Safety equipment"],
      details: "Detailed inspection of subfloor areas, roof voids, and other concealed spaces. These areas are critical as they often show the first signs of termite activity.",
      image: "/subfloor-inspection.jpg"
    },
    {
      icon: "📊",
      title: "Analysis & Documentation",
      description: "Thorough analysis of findings and preparation of comprehensive inspection report.",
      duration: "30-45 minutes",
      tools: ["Digital reporting system", "Photo documentation", "Risk assessment tools", "Report templates"],
      details: "All findings are analyzed, photographed, and documented. We prepare a detailed report with recommendations, cost estimates, and negotiation support information.",
      image: "/analysis-documentation.jpg"
    },
    {
      icon: "📋",
      title: "Report Delivery & Consultation",
      description: "Presentation of findings with detailed explanations and recommendations for the buyer.",
      duration: "30 minutes",
      tools: ["Detailed report", "Photographic evidence", "Recommendation summary", "Cost estimates"],
      details: "We present the comprehensive report, explain all findings, provide treatment recommendations, and offer guidance for property negotiations based on our findings.",
      image: "/report-delivery.jpg"
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
            <span className="inline-block px-3 py-1 bg-red-light/10 text-red-dark text-sm font-semibold rounded-full mb-3">
              INSPECTION PROCEDURE
            </span>
            <h2 className="text-4xl font-bold mb-4 text-gray-900">
              Pre-Purchase Inspection <span className="text-red-dark">Process</span>
            </h2>
            <div className="w-24 h-1 bg-red-light mx-auto mb-6"></div>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Our systematic 6-step process ensures comprehensive coverage and detailed documentation for informed property purchase decisions.
            </p>
            <div className="mt-4 text-red-dark font-semibold">
              Total Duration: {totalDuration}-{totalDuration + 60} minutes
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
                      ? 'bg-red-dark text-white shadow-lg transform scale-105'
                      : 'bg-white text-gray-700 hover:bg-red-light/10 shadow-md'
                  }`}
                >
                  <div className="text-2xl mb-2">{step.icon}</div>
                  <div className="text-sm font-semibold text-center">{step.title}</div>
                  <div className={`text-xs mt-1 ${activeStep === index ? 'text-red-100' : 'text-gray-500'}`}>
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
                        <h3 className="text-2xl font-bold text-red-dark">
                          Step {activeStep + 1}: {procedureSteps[activeStep].title}
                        </h3>
                        <div className="text-gray-600">Duration: {procedureSteps[activeStep].duration}</div>
                      </div>
                    </div>

                    <p className="text-gray-600 mb-6 text-lg">
                      {procedureSteps[activeStep].description}
                    </p>

                    <div className="mb-6">
                      <h4 className="font-semibold text-gray-900 mb-3">Equipment Used:</h4>
                      <div className="grid grid-cols-2 gap-2">
                        {procedureSteps[activeStep].tools.map((tool, index) => (
                          <div key={index} className="flex items-center">
                            <span className="text-red-dark mr-2">•</span>
                            <span className="text-gray-600 text-sm">{tool}</span>
                          </div>
                        ))}
                      </div>
                    </div>


                  </div>

                  {/* Process Image */}
                  <div className="relative">
                    <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-2xl">
                      <Image
                        src={procedureSteps[activeStep].image}
                        alt={procedureSteps[activeStep].title}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, 50vw"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                      <div className="absolute bottom-4 left-4 right-4">
                        <div className="bg-white/90 backdrop-blur-sm rounded-lg p-4">
                          <h4 className="font-bold text-gray-900 mb-1">{procedureSteps[activeStep].title}</h4>
                          <p className="text-sm text-gray-700">Professional {procedureSteps[activeStep].title.toLowerCase()} using industry-leading equipment</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* What We Look For Section - moved below the main grid */}
                <div className="mt-8 bg-red-light/10 p-6 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-4">What We Look For:</h4>
                  <ul className="space-y-2 text-gray-600 text-sm">
                    {activeStep === 0 && (
                      <>
                        <li>• Property construction details</li>
                        <li>• Previous termite history</li>
                        <li>• Environmental risk factors</li>
                        <li>• Access requirements</li>
                      </>
                    )}
                    {activeStep === 1 && (
                      <>
                        <li>• Foundation cracks and gaps</li>
                        <li>• Moisture sources and drainage</li>
                        <li>• Timber structures and decking</li>
                        <li>• Garden beds and landscaping</li>
                      </>
                    )}
                    {activeStep === 2 && (
                      <>
                        <li>• Active termite signs</li>
                        <li>• Timber damage indicators</li>
                        <li>• Moisture problems</li>
                        <li>• Conducive conditions</li>
                      </>
                    )}
                    {activeStep === 3 && (
                      <>
                        <li>• Structural timber condition</li>
                        <li>• Termite mud tubes</li>
                        <li>• Moisture accumulation</li>
                        <li>• Ventilation adequacy</li>
                      </>
                    )}
                    {activeStep === 4 && (
                      <>
                        <li>• Damage extent mapping</li>
                        <li>• Risk level assessment</li>
                        <li>• Treatment requirements</li>
                        <li>• Cost implications</li>
                      </>
                    )}
                    {activeStep === 5 && (
                      <>
                        <li>• Comprehensive findings summary</li>
                        <li>• Treatment recommendations</li>
                        <li>• Negotiation support data</li>
                        <li>• Future monitoring advice</li>
                      </>
                    )}
                  </ul>
                </div>
                

              </div>
            </div>
          </div>

          {/* Key Benefits */}
          <div className="bg-gradient-to-r from-red-light to-red-dark p-8 rounded-lg text-white text-center">
            <h3 className="text-2xl font-bold mb-4">Why Our Process Works</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <div className="text-3xl mb-2">🎯</div>
                <h4 className="font-semibold mb-2">Comprehensive Coverage</h4>
                <p className="text-red-100 text-sm">Every accessible area inspected using advanced technology</p>
              </div>
              <div>
                <div className="text-3xl mb-2">📊</div>
                <h4 className="font-semibold mb-2">Detailed Documentation</h4>
                <p className="text-red-100 text-sm">Professional reports with photographic evidence</p>
              </div>
              <div>
                <div className="text-3xl mb-2">💡</div>
                <h4 className="font-semibold mb-2">Expert Analysis</h4>
                <p className="text-red-100 text-sm">Certified specialists with years of experience</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

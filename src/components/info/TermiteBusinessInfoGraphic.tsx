"use client";
import { useState } from 'react';

export default function TermiteBusinessInfoGraphic() {
  const [activeBusinessType, setActiveBusinessType] = useState(0);

  const businessTypes = [
    {
      id: 0,
      name: "Office Buildings",
      riskLevel: "Medium",
      description: "Workspaces with valuable equipment and important documents",
      risks: ["Document storage", "Computer equipment", "Structural timber", "HVAC systems"],
      impacts: ["Equipment damage", "Document loss", "Productivity loss", "Structural repairs"],
      solutions: ["Regular inspections", "Climate control", "Moisture management", "Barrier treatments"],
      icon: "🏢"
    },
    {
      id: 1,
      name: "Warehouses",
      riskLevel: "High",
      description: "Large storage facilities with extensive timber structures",
      risks: ["Timber racking", "Stored goods", "Loading docks", "Poor ventilation"],
      impacts: ["Inventory damage", "Structural collapse", "Safety hazards", "Insurance claims"],
      solutions: ["Comprehensive monitoring", "Structural treatments", "Ventilation systems", "Regular maintenance"],
      icon: "🏭"
    },
    {
      id: 2,
      name: "Retail Stores",
      riskLevel: "Medium",
      description: "Customer-facing businesses with valuable inventory",
      risks: ["Display fixtures", "Storage areas", "Customer safety", "Structural elements"],
      impacts: ["Inventory loss", "Customer safety", "Business closure", "Reputation damage"],
      solutions: ["Discrete inspections", "Preventive treatments", "Regular monitoring", "Emergency protocols"],
      icon: "🏪"
    },
    {
      id: 3,
      name: "Restaurants",
      riskLevel: "High",
      description: "Food service establishments with moisture and hygiene concerns",
      risks: ["Kitchen moisture", "Food storage", "Health regulations", "Timber structures"],
      impacts: ["Health violations", "Food contamination", "Equipment damage", "Closure orders"],
      solutions: ["Moisture control", "Regular inspections", "Hygiene protocols", "Preventive treatments"],
      icon: "🍽️"
    },
    {
      id: 4,
      name: "Hotels",
      riskLevel: "High",
      description: "Hospitality venues with guest safety and reputation concerns",
      risks: ["Guest rooms", "Common areas", "Kitchen facilities", "Structural timber"],
      impacts: ["Guest complaints", "Reputation damage", "Revenue loss", "Structural repairs"],
      solutions: ["Comprehensive programs", "Regular monitoring", "Guest area protection", "Emergency response"],
      icon: "🏨"
    },
    {
      id: 5,
      name: "Manufacturing",
      riskLevel: "Very High",
      description: "Industrial facilities with expensive equipment and processes",
      risks: ["Production equipment", "Raw materials", "Structural supports", "Safety systems"],
      impacts: ["Production shutdown", "Equipment damage", "Safety hazards", "Supply chain disruption"],
      solutions: ["Industrial treatments", "Continuous monitoring", "Preventive maintenance", "Emergency protocols"],
      icon: "🏭"
    }
  ];

  const businessImpacts = [
    {
      category: "Financial",
      impacts: ["Repair costs", "Lost revenue", "Insurance claims", "Legal liability"],
      averageCost: "$50,000+",
      icon: "💰"
    },
    {
      category: "Operational",
      impacts: ["Business disruption", "Productivity loss", "Safety concerns", "Compliance issues"],
      averageCost: "Variable",
      icon: "⚙️"
    },
    {
      category: "Reputational",
      impacts: ["Customer confidence", "Brand damage", "Media attention", "Market position"],
      averageCost: "Immeasurable",
      icon: "📈"
    },
    {
      category: "Legal",
      impacts: ["Regulatory violations", "Safety breaches", "Insurance disputes", "Liability claims"],
      averageCost: "$25,000+",
      icon: "⚖️"
    }
  ];

  const getRiskColor = (risk: string) => {
    switch (risk) {
      case 'Very High': return 'bg-red-600 text-white';
      case 'High': return 'bg-red-400 text-white';
      case 'Medium': return 'bg-yellow-400 text-gray-900';
      case 'Low': return 'bg-green-400 text-gray-900';
      default: return 'bg-gray-400 text-white';
    }
  };

  return (
    <section className="py-16 bg-gradient-to-br from-red-light/5 to-red-dark/5">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 text-gray-900">
              Business Protection <span className="text-red-dark">Strategies</span>
            </h2>
            <div className="w-24 h-1 bg-red-light mx-auto mb-6"></div>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Different business types face unique termite risks. Our specialized approach addresses the specific needs of your industry.
            </p>
          </div>

          {/* Interactive Business Types */}
          <div className="mb-16">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-8">
              {businessTypes.map((business, index) => (
                <div
                  key={business.id}
                  className={`cursor-pointer p-4 rounded-lg transition-all duration-300 text-center ${
                    activeBusinessType === index
                      ? 'bg-red-dark text-white shadow-lg transform scale-105'
                      : 'bg-white text-gray-700 hover:bg-red-light/10 shadow-md'
                  }`}
                  onClick={() => setActiveBusinessType(index)}
                >
                  <div className="text-3xl mb-2">{business.icon}</div>
                  <div className="font-bold text-sm mb-2">{business.name}</div>
                  <div className={`text-xs px-2 py-1 rounded-full ${
                    activeBusinessType === index ? 'bg-white/20' : getRiskColor(business.riskLevel)
                  }`}>
                    {business.riskLevel}
                  </div>
                </div>
              ))}
            </div>

            {/* Active Business Details */}
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div>
                  <h3 className="text-2xl font-bold text-red-dark mb-4">
                    {businessTypes[activeBusinessType].icon} {businessTypes[activeBusinessType].name}
                  </h3>
                  <div className="mb-4">
                    <span className={`px-3 py-1 rounded-full text-sm font-semibold ${getRiskColor(businessTypes[activeBusinessType].riskLevel)}`}>
                      {businessTypes[activeBusinessType].riskLevel} Risk
                    </span>
                  </div>
                  <p className="text-gray-600 mb-6">
                    {businessTypes[activeBusinessType].description}
                  </p>

                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3">Key Risk Areas:</h4>
                    <ul className="space-y-2">
                      {businessTypes[activeBusinessType].risks.map((risk, index) => (
                        <li key={index} className="flex items-start">
                          <span className="text-red-500 mr-2">⚠️</span>
                          <span className="text-gray-600 text-sm">{risk}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold text-gray-900 mb-4">Potential Impacts:</h4>
                  <ul className="space-y-2 mb-6">
                    {businessTypes[activeBusinessType].impacts.map((impact, index) => (
                      <li key={index} className="flex items-start">
                        <span className="text-red-600 mr-2">💥</span>
                        <span className="text-gray-600 text-sm">{impact}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="bg-red-50 p-4 rounded-lg">
                    <h5 className="font-semibold text-red-800 mb-2">Business Continuity Risk</h5>
                    <p className="text-red-700 text-sm">
                      Termite damage can force temporary or permanent business closure, resulting in significant revenue loss and customer defection.
                    </p>
                  </div>
                </div>

                <div className="bg-red-light/10 p-6 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-4">Protection Solutions:</h4>
                  <ul className="space-y-2 mb-6">
                    {businessTypes[activeBusinessType].solutions.map((solution, index) => (
                      <li key={index} className="flex items-start">
                        <span className="text-green-600 mr-2">✓</span>
                        <span className="text-gray-600 text-sm">{solution}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="bg-white p-4 rounded-lg">
                    <h5 className="font-semibold text-gray-900 mb-2">Customized Approach:</h5>
                    <p className="text-gray-600 text-sm">
                      Our specialists develop industry-specific protection plans that address your unique business requirements and operational constraints.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Business Impact Analysis */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-center mb-8 text-gray-900">
              Business Impact <span className="text-red-dark">Analysis</span>
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {businessImpacts.map((impact, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
                  <div className="text-center mb-4">
                    <div className="text-4xl mb-2">{impact.icon}</div>
                    <h4 className="font-bold text-lg text-gray-900">{impact.category} Impact</h4>
                  </div>

                  <ul className="space-y-2 mb-4">
                    {impact.impacts.map((item, idx) => (
                      <li key={idx} className="text-gray-600 text-sm">• {item}</li>
                    ))}
                  </ul>

                  <div className="text-center">
                    <div className="text-secondary font-bold text-lg">
                      {impact.averageCost}
                    </div>
                    <div className="text-gray-500 text-xs">Average cost impact</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* ROI Calculator */}
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h3 className="text-2xl font-bold text-center mb-8 text-gray-900">
              Protection Investment <span className="text-secondary">ROI</span>
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div className="bg-green-50 p-6 rounded-lg">
                <div className="text-3xl font-bold text-green-600 mb-2">$2,000-5,000</div>
                <div className="text-lg font-semibold text-gray-900 mb-2">Annual Protection Cost</div>
                <p className="text-gray-600 text-sm">Comprehensive commercial termite protection program</p>
              </div>

              <div className="bg-red-50 p-6 rounded-lg">
                <div className="text-3xl font-bold text-red-600 mb-2">$50,000+</div>
                <div className="text-lg font-semibold text-gray-900 mb-2">Average Damage Cost</div>
                <p className="text-gray-600 text-sm">Typical commercial termite damage and business disruption</p>
              </div>

              <div className="bg-blue-50 p-6 rounded-lg">
                <div className="text-3xl font-bold text-blue-600 mb-2">1,000%+</div>
                <div className="text-lg font-semibold text-gray-900 mb-2">ROI Protection</div>
                <p className="text-gray-600 text-sm">Return on investment for prevention vs. damage costs</p>
              </div>
            </div>

            <div className="text-center mt-8 p-6 bg-secondary/10 rounded-lg">
              <h4 className="font-bold text-gray-900 mb-2">Business Continuity Value</h4>
              <p className="text-gray-600">
                Beyond direct costs, termite protection ensures uninterrupted business operations,
                maintains customer confidence, and protects your company's reputation and market position.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

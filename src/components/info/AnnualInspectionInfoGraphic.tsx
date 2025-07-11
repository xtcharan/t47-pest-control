"use client";
import { useState } from 'react';

export default function AnnualInspectionInfoGraphic() {
  const [activeMonth, setActiveMonth] = useState(0);

  const monthlyActivities = [
    { month: "Jan", activity: "Post-Holiday Check", risk: "Medium", description: "Check for moisture damage from holiday decorations" },
    { month: "Feb", activity: "Summer Peak", risk: "High", description: "Peak termite activity season begins" },
    { month: "Mar", activity: "Autumn Prep", risk: "High", description: "Termites prepare for cooler months" },
    { month: "Apr", activity: "Moisture Season", risk: "Medium", description: "Increased moisture from autumn rains" },
    { month: "May", activity: "Winter Prep", risk: "Low", description: "Termites seek shelter for winter" },
    { month: "Jun", activity: "Winter Activity", risk: "Low", description: "Reduced but ongoing activity" },
    { month: "Jul", activity: "Mid-Winter", risk: "Low", description: "Lowest activity period" },
    { month: "Aug", activity: "Spring Prep", risk: "Medium", description: "Colonies prepare for spring expansion" },
    { month: "Sep", activity: "Spring Emergence", risk: "High", description: "Increased activity as weather warms" },
    { month: "Oct", activity: "Peak Season", risk: "Very High", description: "Highest termite activity period" },
    { month: "Nov", activity: "Swarming Season", risk: "Very High", description: "Reproductive termites establish new colonies" },
    { month: "Dec", activity: "Holiday Season", risk: "Medium", description: "Continued activity with holiday moisture risks" }
  ];

  const inspectionBenefits = [
    {
      title: "Early Detection",
      description: "Identify termite activity before significant damage occurs",
      savings: "$10,000+",
      icon: "🔍"
    },
    {
      title: "Treatment Monitoring",
      description: "Ensure existing treatments remain effective",
      savings: "$5,000+",
      icon: "🛡️"
    },
    {
      title: "Risk Assessment",
      description: "Identify and address conducive conditions",
      savings: "$3,000+",
      icon: "⚠️"
    },
    {
      title: "Compliance",
      description: "Meet AS3660.2 standards and warranty requirements",
      savings: "Warranty",
      icon: "✅"
    }
  ];

  const getRiskColor = (risk: string) => {
    switch (risk) {
      case 'Very High': return 'bg-red-600';
      case 'High': return 'bg-red-400';
      case 'Medium': return 'bg-yellow-400';
      case 'Low': return 'bg-green-400';
      default: return 'bg-gray-400';
    }
  };

  return (
    <section className="py-16 bg-gradient-to-br from-green-light/5 to-green-dark/5">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 text-gray-900">
              Annual Inspection <span className="text-green-dark">Calendar</span>
            </h2>
            <div className="w-24 h-1 bg-green-light mx-auto mb-6"></div>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Understanding termite activity patterns throughout the year helps optimize inspection timing and protection strategies.
            </p>
          </div>

          {/* Interactive Calendar */}
          <div className="mb-16">
            <div className="grid grid-cols-3 md:grid-cols-6 lg:grid-cols-12 gap-2 mb-8">
              {monthlyActivities.map((month, index) => (
                <div
                  key={index}
                  className={`cursor-pointer p-4 rounded-lg transition-all duration-300 text-center ${
                    activeMonth === index
                      ? 'bg-green-dark text-white shadow-lg transform scale-105'
                      : 'bg-white text-gray-700 hover:bg-green-light/10 shadow-md'
                  }`}
                  onClick={() => setActiveMonth(index)}
                >
                  <div className="font-bold text-lg mb-2">{month.month}</div>
                  <div className={`w-full h-2 rounded-full mb-2 ${getRiskColor(month.risk)}`}></div>
                  <div className="text-xs">{month.risk}</div>
                </div>
              ))}
            </div>

            {/* Active Month Details */}
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-2xl font-bold text-green-dark mb-4">
                    {monthlyActivities[activeMonth].month} - {monthlyActivities[activeMonth].activity}
                  </h3>
                  <div className="mb-4">
                    <span className="inline-block px-3 py-1 rounded-full text-sm font-semibold text-white">
                      <span className={`px-3 py-1 rounded-full ${getRiskColor(monthlyActivities[activeMonth].risk)}`}>
                        {monthlyActivities[activeMonth].risk} Risk
                      </span>
                    </span>
                  </div>
                  <p className="text-gray-600 mb-6">
                    {monthlyActivities[activeMonth].description}
                  </p>
                  
                  <div className="bg-green-light/10 p-4 rounded-lg">
                    <h4 className="font-semibold text-gray-900 mb-2">Recommended Actions:</h4>
                    <ul className="space-y-1 text-gray-600 text-sm">
                      {activeMonth < 3 && (
                        <>
                          <li>• Increase monitoring frequency</li>
                          <li>• Check moisture levels around property</li>
                          <li>• Inspect outdoor timber structures</li>
                        </>
                      )}
                      {activeMonth >= 3 && activeMonth < 6 && (
                        <>
                          <li>• Monitor for swarming activity</li>
                          <li>• Check treatment barriers</li>
                          <li>• Clear vegetation from foundations</li>
                        </>
                      )}
                      {activeMonth >= 6 && activeMonth < 9 && (
                        <>
                          <li>• Routine maintenance checks</li>
                          <li>• Ensure adequate ventilation</li>
                          <li>• Plan for spring preparation</li>
                        </>
                      )}
                      {activeMonth >= 9 && (
                        <>
                          <li>• Peak season vigilance</li>
                          <li>• Professional inspection recommended</li>
                          <li>• Monitor for new colony establishment</li>
                        </>
                      )}
                    </ul>
                  </div>
                </div>
                
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-4">Termite Activity Indicators</h4>
                  <div className="space-y-3">
                    <div className="flex items-center">
                      <div className="w-3 h-3 bg-red-600 rounded-full mr-3"></div>
                      <span className="text-sm text-gray-600">Very High - Peak activity, swarming likely</span>
                    </div>
                    <div className="flex items-center">
                      <div className="w-3 h-3 bg-red-400 rounded-full mr-3"></div>
                      <span className="text-sm text-gray-600">High - Active foraging and feeding</span>
                    </div>
                    <div className="flex items-center">
                      <div className="w-3 h-3 bg-yellow-400 rounded-full mr-3"></div>
                      <span className="text-sm text-gray-600">Medium - Moderate activity levels</span>
                    </div>
                    <div className="flex items-center">
                      <div className="w-3 h-3 bg-green-400 rounded-full mr-3"></div>
                      <span className="text-sm text-gray-600">Low - Reduced activity, shelter-seeking</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Inspection Benefits */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-center mb-8 text-gray-900">
              Annual Inspection <span className="text-green-dark">Benefits</span>
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {inspectionBenefits.map((benefit, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-lg text-center hover:shadow-xl transition-shadow">
                  <div className="text-4xl mb-4">{benefit.icon}</div>
                  <h4 className="font-bold text-lg text-gray-900 mb-2">{benefit.title}</h4>
                  <p className="text-gray-600 text-sm mb-4">{benefit.description}</p>
                  <div className="text-green-dark font-bold text-lg">
                    Saves: {benefit.savings}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* AS3660.2 Compliance */}
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h3 className="text-2xl font-bold text-center mb-8 text-gray-900">
              AS3660.2 <span className="text-green-dark">Compliance</span>
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h4 className="font-semibold text-gray-900 mb-4">Standard Requirements:</h4>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="text-green-dark mr-2">✓</span>
                    <span className="text-gray-600">Annual inspections for all properties</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-dark mr-2">✓</span>
                    <span className="text-gray-600">Qualified inspector certification</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-dark mr-2">✓</span>
                    <span className="text-gray-600">Comprehensive documentation</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-dark mr-2">✓</span>
                    <span className="text-gray-600">Risk assessment reporting</span>
                  </li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-semibold text-gray-900 mb-4">Compliance Benefits:</h4>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="text-green-dark mr-2">•</span>
                    <span className="text-gray-600">Maintain treatment warranties</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-dark mr-2">•</span>
                    <span className="text-gray-600">Insurance policy compliance</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-dark mr-2">•</span>
                    <span className="text-gray-600">Legal protection assurance</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-dark mr-2">•</span>
                    <span className="text-gray-600">Property value protection</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

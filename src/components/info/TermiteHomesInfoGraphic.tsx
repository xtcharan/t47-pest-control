"use client";
import { useState } from 'react';

export default function TermiteHomesInfoGraphic() {
  const [activeRoom, setActiveRoom] = useState(0);

  const homeAreas = [
    {
      id: 0,
      name: "Kitchen",
      riskLevel: "High",
      description: "Moisture from plumbing and appliances creates ideal conditions",
      risks: ["Leaking pipes", "Dishwasher moisture", "Sink areas", "Timber cabinets"],
      prevention: ["Regular leak checks", "Proper ventilation", "Moisture barriers", "Sealed entry points"],
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
        </svg>
      )
    },
    {
      id: 1,
      name: "Bathroom",
      riskLevel: "Very High",
      description: "High humidity and water sources make bathrooms prime targets",
      risks: ["Shower leaks", "Toilet base moisture", "Ventilation issues", "Timber flooring"],
      prevention: ["Exhaust fan usage", "Leak detection", "Waterproofing", "Regular inspections"],
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3a2 2 0 012-2h4a2 2 0 012 2v4m-6 9a2 2 0 11-4 0 2 2 0 014 0zm8 0a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      )
    },
    {
      id: 2,
      name: "Basement/Subfloor",
      riskLevel: "Very High",
      description: "Dark, moist conditions perfect for termite colonies",
      risks: ["Poor ventilation", "Moisture buildup", "Timber structures", "Soil contact"],
      prevention: ["Adequate ventilation", "Moisture control", "Regular monitoring", "Barrier treatments"],
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
        </svg>
      )
    },
    {
      id: 3,
      name: "Laundry",
      riskLevel: "High",
      description: "Water usage and humidity create conducive conditions",
      risks: ["Washing machine leaks", "Dryer moisture", "Plumbing issues", "Storage areas"],
      prevention: ["Leak monitoring", "Proper drainage", "Ventilation", "Moisture barriers"],
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
        </svg>
      )
    },
    {
      id: 4,
      name: "Outdoor Areas",
      riskLevel: "Medium",
      description: "Garden beds and timber structures near the home",
      risks: ["Mulch against walls", "Timber decking", "Garden irrigation", "Tree roots"],
      prevention: ["Clearance zones", "Proper drainage", "Regular inspections", "Barrier maintenance"],
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
        </svg>
      )
    },
    {
      id: 5,
      name: "Roof/Attic",
      riskLevel: "Medium",
      description: "Roof leaks and timber structures can attract termites",
      risks: ["Roof leaks", "Timber framing", "Insulation moisture", "Ventilation issues"],
      prevention: ["Roof maintenance", "Leak repairs", "Proper ventilation", "Regular checks"],
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
        </svg>
      )
    }
  ];

  const familySafetyFeatures = [
    {
      title: "Non-Toxic Methods",
      description: "Safe inspection techniques that don't use harmful chemicals",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
        </svg>
      )
    },
    {
      title: "Child-Safe Equipment",
      description: "All equipment designed to be safe around children",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      )
    },
    {
      title: "Pet-Friendly Approach",
      description: "Methods that ensure your pets' safety and comfort",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg>
      )
    },
    {
      title: "Minimal Disruption",
      description: "Inspection process designed around family routines",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
        </svg>
      )
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
    <section className="py-16 bg-gradient-to-br from-green-light/5 to-green-dark/5">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 text-gray-900">
              Home Protection <span className="text-green-dark">Zones</span>
            </h2>
            <div className="w-24 h-1 bg-green-light mx-auto mb-6"></div>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Understanding termite risk areas in your home helps prioritize protection and early detection efforts.
            </p>
          </div>

          {/* Interactive Home Areas */}
          <div className="mb-16">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-8">
              {homeAreas.map((area, index) => (
                <div
                  key={area.id}
                  className={`cursor-pointer p-4 rounded-lg transition-all duration-300 text-center ${
                    activeRoom === index
                      ? 'bg-green-dark text-white shadow-lg transform scale-105'
                      : 'bg-white text-gray-700 hover:bg-green-light/10 shadow-md'
                  }`}
                  onClick={() => setActiveRoom(index)}
                >
                  <div className="w-8 h-8 mx-auto mb-2 flex items-center justify-center">{area.icon}</div>
                  <div className="font-bold text-sm mb-2">{area.name}</div>
                  <div className={`text-xs px-2 py-1 rounded-full ${
                    activeRoom === index ? 'bg-white/20' : getRiskColor(area.riskLevel)
                  }`}>
                    {area.riskLevel}
                  </div>
                </div>
              ))}
            </div>

            {/* Active Room Details */}
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <div className="flex items-center mb-4">
                    <span className="w-8 h-8 mr-3 text-green-dark inline-flex items-center justify-center">{homeAreas[activeRoom].icon}</span>
                    <h3 className="text-2xl font-bold text-green-dark">{homeAreas[activeRoom].name}</h3>
                  </div>
                  <div className="mb-4">
                    <span className={`px-3 py-1 rounded-full text-sm font-semibold ${getRiskColor(homeAreas[activeRoom].riskLevel)}`}>
                      {homeAreas[activeRoom].riskLevel} Risk
                    </span>
                  </div>
                  <p className="text-gray-600 mb-6">
                    {homeAreas[activeRoom].description}
                  </p>

                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 mb-3">Common Risk Factors:</h4>
                    <ul className="space-y-2">
                      {homeAreas[activeRoom].risks.map((risk, index) => (
                        <li key={index} className="flex items-start">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-red-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                          </svg>
                          <span className="text-gray-600 text-sm">{risk}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="bg-green-light/10 p-6 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-4">Prevention Strategies:</h4>
                  <ul className="space-y-2">
                    {homeAreas[activeRoom].prevention.map((strategy, index) => (
                      <li key={index} className="flex items-start">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-green-600 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-gray-600 text-sm">{strategy}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-6 p-4 bg-white rounded-lg">
                    <h5 className="font-semibold text-gray-900 mb-2">Inspection Focus:</h5>
                    <p className="text-gray-600 text-sm">
                      Our specialists pay special attention to this area during inspections, using targeted detection methods appropriate for the specific risks present.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Family Safety Features */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-center mb-8 text-gray-900">
              Family-Safe <span className="text-green-dark">Inspection Methods</span>
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {familySafetyFeatures.map((feature, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-lg text-center hover:shadow-xl transition-shadow">
                  <div className="w-12 h-12 mx-auto mb-4 text-green-600 flex items-center justify-center">{feature.icon}</div>
                  <h4 className="font-bold text-lg text-gray-900 mb-2">{feature.title}</h4>
                  <p className="text-gray-600 text-sm">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Home Protection Timeline */}
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h3 className="text-2xl font-bold text-center mb-8 text-gray-900">
              Home Protection <span className="text-green-dark">Timeline</span>
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="bg-green-light/20 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                  </svg>
                </div>
                <h4 className="font-bold text-gray-900 mb-2">Initial Inspection</h4>
                <p className="text-gray-600 text-sm">Comprehensive baseline assessment of your home's termite risk profile</p>
              </div>

              <div className="text-center">
                <div className="bg-green-light/20 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h4 className="font-bold text-gray-900 mb-2">Protection Plan</h4>
                <p className="text-gray-600 text-sm">Customized protection strategy based on your home's specific needs</p>
              </div>

              <div className="text-center">
                <div className="bg-green-light/20 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3a2 2 0 012-2h4a2 2 0 012 2v4m-6 9a2 2 0 11-4 0 2 2 0 014 0zm8 0a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h4 className="font-bold text-gray-900 mb-2">Regular Monitoring</h4>
                <p className="text-gray-600 text-sm">Ongoing inspections to ensure continued protection and early detection</p>
              </div>

              <div className="text-center">
                <div className="bg-green-light/20 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </div>
                <h4 className="font-bold text-gray-900 mb-2">Family Peace of Mind</h4>
                <p className="text-gray-600 text-sm">Confidence that your family home is protected from termite damage</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

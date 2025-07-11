"use client";

import { useState, useEffect } from 'react';

export default function TermiteDamageRepairBanner() {
  const [currentFeature, setCurrentFeature] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setCurrentFeature((prev) => (prev + 1) % features.length);
    }, 8000); // Slower for better performance
    return () => clearInterval(interval);
  }, []);

  const features = [
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
        </svg>
      ),
      title: "Emergency Response",
      description: "24/7 emergency damage assessment and immediate safety measures to protect your property",
      highlight: "Same Day"
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
      ),
      title: "Professional Assessment",
      description: "Comprehensive damage evaluation using advanced technology and certified building inspectors",
      highlight: "Free Quote"
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
        </svg>
      ),
      title: "Expert Restoration",
      description: "Complete structural repairs using premium materials and proven restoration techniques",
      highlight: "10-Year Warranty"
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
        </svg>
      ),
      title: "Insurance Support",
      description: "Full documentation and support for insurance claims with detailed damage reports",
      highlight: "Claims Approved"
    }
  ];

  const urgencyStats = [
    {
      number: "2,500+",
      label: "Repairs Completed",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      )
    },
    {
      number: "24/7",
      label: "Emergency Service",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
        </svg>
      )
    },
    {
      number: "98%",
      label: "Insurance Approved",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    },
    {
      number: "10",
      label: "Year Warranty",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      )
    }
  ];

  return (
    <section className="relative py-16 bg-gradient-to-br from-orange-50 via-white to-red-50 overflow-hidden">
      {/* Emergency Alert Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-96 h-96 bg-red-500 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-orange-600 rounded-full blur-3xl animate-pulse animate-delay-2s"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Emergency Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-red-100 to-orange-200 rounded-full text-red-700 font-semibold mb-4">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2 animate-pulse" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
            </svg>
            EMERGENCY TERMITE DAMAGE REPAIR SPECIALISTS
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Restore Your Property <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-orange-600">Back to Perfect</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Don't let termite damage compromise your property's safety and value. Our certified repair specialists restore your home to better-than-original condition.
          </p>
        </div>

        {/* Dynamic Features Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Feature Display */}
          <div className="relative">
            <div className="bg-white rounded-2xl shadow-2xl p-8 border border-orange-100 transform hover:scale-105 transition-all duration-500">
              <div className="text-center mb-6">
                <div className="w-16 h-16 mx-auto mb-4 text-red-600 animate-bounce flex items-center justify-center">{features[currentFeature].icon}</div>
                <div className="inline-block px-3 py-1 bg-orange-100 text-orange-700 rounded-full text-sm font-semibold mb-3">
                  {features[currentFeature].highlight}
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">{features[currentFeature].title}</h3>
                <p className="text-gray-600 leading-relaxed">{features[currentFeature].description}</p>
              </div>

              {/* Progress Bar */}
              <div className="w-full bg-gray-200 rounded-full h-2 mb-4">
                <div
                  className="bg-gradient-to-r from-red-500 to-orange-600 h-2 rounded-full transition-all duration-4000 ease-linear"
                  style={{ width: `${((currentFeature + 1) / features.length) * 100}%` }}
                ></div>
              </div>

              {/* Feature Navigation */}
              <div className="flex justify-center space-x-2">
                {features.map((_, index) => (
                  <button
                    key={index}
                    type="button"
                    onClick={() => setCurrentFeature(index)}
                    aria-label={`Go to feature ${index + 1}`}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      currentFeature === index ? 'bg-red-500 scale-125' : 'bg-gray-300 hover:bg-red-300'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Damage Types List */}
          <div className="space-y-6">
            <h3 className="text-3xl font-bold text-gray-900 mb-8">We Repair All Damage Types</h3>

            {[
              {
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                ),
                title: "Structural Framework",
                desc: "Load-bearing beams, joists, and foundation repairs",
                severity: "Critical"
              },
              {
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10v11M20 10v11" />
                  </svg>
                ),
                title: "Doors & Windows",
                desc: "Frame replacement and structural integrity restoration",
                severity: "Major"
              },
              {
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2H5a2 2 0 00-2-2z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 21l4-4 4 4" />
                  </svg>
                ),
                title: "Flooring Systems",
                desc: "Subfloor replacement and structural floor repairs",
                severity: "Major"
              },
              {
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                  </svg>
                ),
                title: "Stairs & Railings",
                desc: "Complete staircase and safety railing reconstruction",
                severity: "High"
              },
              {
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
                  </svg>
                ),
                title: "Wall Structures",
                desc: "Internal wall framing and load-bearing wall repairs",
                severity: "Major"
              },
              {
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
                  </svg>
                ),
                title: "Roof Components",
                desc: "Roof frame repairs and structural ceiling restoration",
                severity: "Critical"
              }
            ].map((damage, index) => (
              <div
                key={index}
                className={`flex items-start space-x-4 p-4 rounded-lg hover:bg-orange-50 transition-all duration-300 transform border-l-4 ${
                  damage.severity === 'Critical' ? 'border-red-500 bg-red-50/30' :
                  damage.severity === 'Major' ? 'border-orange-500 bg-orange-50/30' : 'border-yellow-500 bg-yellow-50/30'
                } ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'}`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="w-8 h-8 text-gray-700 flex items-center justify-center">{damage.icon}</div>
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-1">
                    <h4 className="font-semibold text-gray-900">{damage.title}</h4>
                    <span className={`px-2 py-1 rounded-full text-xs font-semibold ${
                      damage.severity === 'Critical' ? 'bg-red-100 text-red-700' :
                      damage.severity === 'Major' ? 'bg-orange-100 text-orange-700' : 'bg-yellow-100 text-yellow-700'
                    }`}>
                      {damage.severity}
                    </span>
                  </div>
                  <p className="text-gray-600 text-sm">{damage.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Urgency Stats Section */}
        <div className="bg-gradient-to-r from-red-600 to-orange-600 rounded-2xl p-8 text-white">
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold mb-4">Trusted by Thousands Across Australia</h3>
            <p className="text-red-100">When termite damage strikes, property owners choose our proven repair expertise</p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {urgencyStats.map((stat, index) => (
              <div
                key={index}
                className="text-center p-4 bg-white/10 rounded-lg backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-all duration-300"
              >
                <div className="w-10 h-10 mx-auto mb-2 text-white flex items-center justify-center">{stat.icon}</div>
                <div className="text-3xl font-bold mb-1">{stat.number}</div>
                <div className="text-red-100 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Emergency Response CTA */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-red-500 to-orange-600 rounded-2xl p-8 text-white shadow-2xl">
            <div className="flex items-center justify-center mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2 animate-pulse" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
              <h3 className="text-2xl font-bold">Emergency Damage Assessment Available Now!</h3>
            </div>
            <p className="text-lg mb-6 text-orange-100">
              Every hour counts when dealing with termite damage. Get immediate professional assessment and emergency stabilization.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button type="button" className="px-8 py-4 bg-white text-red-600 rounded-full font-bold text-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105">
                Emergency Assessment
              </button>
              <button type="button" className="px-8 py-4 border-2 border-white rounded-full font-bold text-lg hover:bg-white/10 transition-all duration-300">
                Call (04) 3430 0216
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

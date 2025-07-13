"use client";

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { COMPANY_INFO } from '../lib/constants';

export default function TermiteDamageRepairProcedure() {
  const [activeStep, setActiveStep] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % procedureSteps.length);
    }, 10000); // Much slower for better performance
    return () => clearInterval(interval);
  }, []);

  const procedureSteps = [
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
        </svg>
      ),
      title: "Emergency Response & Safety Assessment",
      description: "Immediate response to assess safety risks and implement emergency stabilization measures to prevent further damage and ensure occupant safety.",
      duration: "Same Day",
      tools: ["Safety equipment", "Structural supports", "Emergency barriers", "Documentation cameras"],
      image: "/emergency-response.jpg"
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
      ),
      title: "Comprehensive Damage Evaluation",
      description: "Detailed assessment using advanced technology to map all damage, evaluate structural integrity, and document findings for insurance and repair planning.",
      duration: "1-2 Days",
      tools: ["Thermal imaging", "Moisture meters", "Structural analysis tools", "3D mapping technology"],
      image: "/damage-evaluation.jpg"
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
        </svg>
      ),
      title: "Repair Planning & Documentation",
      description: "Development of detailed repair plans, material specifications, and timeline coordination with insurance companies and regulatory authorities.",
      duration: "2-3 Days",
      tools: ["CAD software", "Engineering calculations", "Material specifications", "Permit applications"],
      image: "/repair-planning.jpg"
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
        </svg>
      ),
      title: "Structural Repair & Restoration",
      description: "Professional repair work using premium materials and certified techniques to restore structural integrity and exceed original building standards.",
      duration: "1-6 Weeks",
      tools: ["Construction equipment", "Premium materials", "Precision tools", "Quality control instruments"],
      image: "/structural-repair.jpg"
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: "Quality Assurance & Certification",
      description: "Comprehensive testing and inspection to ensure all repairs meet Australian building standards with full certification and warranty documentation.",
      duration: "1-2 Days",
      tools: ["Testing equipment", "Inspection tools", "Certification documents", "Warranty paperwork"],
      image: "/quality-assurance.jpg"
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
      title: "Prevention System Installation",
      description: "Installation of advanced termite prevention systems during repair to protect against future infestations and provide long-term peace of mind.",
      duration: "1-2 Days",
      tools: ["Barrier materials", "Monitoring systems", "Application equipment", "Testing devices"],
      image: "/prevention-installation.jpg"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-900 via-red-900 to-orange-900 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full bg-[url('/dot-pattern.svg')] animate-pulse"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-red-600/20 to-orange-600/20 animate-float"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-orange-100 text-orange-700 rounded-full font-semibold mb-4">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            PROFESSIONAL REPAIR PROCESS
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-400">6-Step Repair</span> Process
          </h2>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            From emergency response to complete restoration, our systematic approach ensures your property is restored to better-than-original condition with comprehensive warranties.
          </p>
        </div>

        {/* Interactive Process Display */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Process Visualization */}
          <div className="relative">
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 shadow-2xl">
              <div className="text-center mb-6">
                <div className="w-16 h-16 mx-auto mb-4 text-orange-400 animate-bounce flex items-center justify-center">{procedureSteps[activeStep].icon}</div>
                <div className="inline-block px-3 py-1 bg-orange-100 text-orange-700 rounded-full text-sm font-semibold mb-3">
                  STEP {activeStep + 1} OF {procedureSteps.length}
                </div>
                <h3 className="text-2xl font-bold text-white mb-3">{procedureSteps[activeStep].title}</h3>
                <div className="text-orange-300 font-semibold mb-4">Duration: {procedureSteps[activeStep].duration}</div>
                <p className="text-gray-300 leading-relaxed mb-6">{procedureSteps[activeStep].description}</p>
              </div>

              {/* Tools & Equipment */}
              <div className="mb-6">
                <h4 className="text-lg font-semibold text-white mb-3">Tools & Equipment:</h4>
                <div className="grid grid-cols-2 gap-2">
                  {procedureSteps[activeStep].tools.map((tool, index) => (
                    <div key={index} className="bg-white/10 rounded-lg p-2 text-sm text-gray-300 text-center">
                      {tool}
                    </div>
                  ))}
                </div>
              </div>

              {/* Progress Bar */}
              <div className="w-full bg-gray-700 rounded-full h-3 mb-4">
                <div
                  className="bg-gradient-to-r from-red-500 to-orange-500 h-3 rounded-full transition-all duration-6000 ease-linear"
                  style={{ width: `${((activeStep + 1) / procedureSteps.length) * 100}%` }}
                ></div>
              </div>

              {/* Step Navigation */}
              <div className="flex justify-center space-x-2">
                {procedureSteps.map((_, index) => (
                  <button
                    key={index}
                    type="button"
                    onClick={() => setActiveStep(index)}
                    aria-label={`Go to step ${index + 1}`}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      activeStep === index ? 'bg-orange-500 scale-125' : 'bg-gray-500 hover:bg-orange-400'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Process Image */}
          <div className="relative">
            <div className="aspect-w-16 aspect-h-12 rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src={procedureSteps[activeStep].image}
                alt={procedureSteps[activeStep].title}
                width={600}
                height={400}
                className="object-cover w-full h-full"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
              <div className="absolute bottom-4 left-4 right-4">
                <div className="bg-white/90 backdrop-blur-sm rounded-lg p-4">
                  <h4 className="font-bold text-gray-900 mb-1">{procedureSteps[activeStep].title}</h4>
                  <p className="text-sm text-gray-700">Professional repair using industry-leading techniques</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Emergency Response Features */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-white text-center mb-12">Emergency Response Capabilities</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                ),
                title: "24/7 Availability",
                description: "Emergency response team available around the clock for urgent damage situations"
              },
              {
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                  </svg>
                ),
                title: "Same-Day Assessment",
                description: "Immediate professional evaluation and emergency stabilization within hours"
              },
              {
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                ),
                title: "Safety First",
                description: "Immediate safety measures to protect occupants and prevent further damage"
              },
              {
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                ),
                title: "Direct Communication",
                description: "Direct line to our emergency response team for immediate assistance"
              },
              {
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                ),
                title: "Emergency Repairs",
                description: "Immediate temporary repairs to prevent further damage and ensure safety"
              },
              {
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                  </svg>
                ),
                title: "Insurance Coordination",
                description: "Immediate documentation and coordination with insurance companies"
              }
            ].map((feature, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-lg rounded-lg p-6 border border-white/20">
                <div className="w-12 h-12 mx-auto mb-4 text-orange-400 flex items-center justify-center">{feature.icon}</div>
                <h4 className="text-lg font-bold text-white mb-2 text-center">{feature.title}</h4>
                <p className="text-gray-300 text-sm text-center">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-red-600 to-orange-600 rounded-2xl p-8 text-white text-center">
          <h3 className="text-3xl font-bold mb-4">Emergency Damage? We're Here to Help</h3>
          <p className="text-xl mb-8 text-red-100 max-w-3xl mx-auto">
            Don't wait for damage to get worse. Our emergency response team is ready to assess, stabilize, and begin repairs immediately.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button type="button" className="px-8 py-4 bg-white text-red-600 rounded-full font-bold text-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105">
              Emergency Response
            </button>
            <a href={`tel:${COMPANY_INFO.phone}`} className="px-8 py-4 border-2 border-white rounded-full font-bold text-lg hover:bg-white/10 transition-all duration-300 inline-block">
              Call {COMPANY_INFO.phone}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

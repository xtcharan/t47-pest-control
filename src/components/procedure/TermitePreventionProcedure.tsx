"use client";

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { COMPANY_INFO } from '../lib/constants';

export default function TermitePreventionProcedure() {
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
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
      ),
      title: "Comprehensive Property Assessment",
      description: "Our certified specialists conduct a thorough 360-degree assessment of your property using advanced technology including thermal imaging, moisture meters, and ground-penetrating radar to identify all potential termite entry points and risk factors.",
      duration: "2-3 hours",
      tools: ["Thermal imaging cameras", "Moisture detection meters", "Ground-penetrating radar", "Digital inspection tools"],
      image: "/termite-assessment.jpg"
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
        </svg>
      ),
      title: "Custom Prevention Strategy Design",
      description: "Based on assessment findings, we design a tailored prevention strategy that combines the most effective methods for your specific property type, soil conditions, and risk profile. Every plan is unique and scientifically optimized.",
      duration: "1-2 days",
      tools: ["CAD design software", "Soil analysis reports", "Risk assessment algorithms", "Australian Standards compliance"],
      image: "/termite-strategy-design.jpg"
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
      title: "Professional Installation Process",
      description: "Our licensed technicians install your prevention system using industry-leading equipment and techniques. All work is performed to Australian Standards with minimal disruption to your property and daily routine.",
      duration: "1-3 days",
      tools: ["Professional drilling equipment", "Chemical injection systems", "Barrier installation tools", "Quality control instruments"],
      image: "/termite-installation.jpg"
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
        </svg>
      ),
      title: "Advanced Treatment Application",
      description: "We apply premium-grade termiticides or install physical barriers using the latest eco-friendly formulations that provide maximum protection while being safe for your family, pets, and the environment.",
      duration: "4-8 hours",
      tools: ["Precision application equipment", "Eco-friendly termiticides", "Physical barrier materials", "Safety monitoring devices"],
      image: "/termite-treatment.jpg"
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: "Quality Assurance & Testing",
      description: "Every installation undergoes rigorous quality control testing to ensure complete coverage and effectiveness. We use specialized detection equipment to verify barrier integrity and treatment distribution.",
      duration: "2-4 hours",
      tools: ["Barrier integrity testers", "Chemical concentration meters", "Coverage verification tools", "Digital documentation systems"],
      image: "/termite-testing.jpg"
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
        </svg>
      ),
      title: "Smart Monitoring Setup",
      description: "We install state-of-the-art monitoring systems that provide 24/7 surveillance of your property's termite protection status. You'll receive real-time alerts and regular status updates via our mobile app.",
      duration: "1-2 hours",
      tools: ["Smart monitoring stations", "Wireless sensors", "Mobile app integration", "Cloud-based monitoring platform"],
      image: "/termite-monitoring.jpg"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full bg-[url('/dot-pattern.svg')] animate-pulse"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-transparent animate-float"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-700 rounded-full font-semibold mb-4">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
            ADVANCED PREVENTION METHODOLOGY
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">6-Step Prevention</span> Process
          </h2>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            From initial assessment to ongoing monitoring, our comprehensive process ensures your property receives the most advanced termite prevention available in Australia.
          </p>
        </div>

        {/* Interactive Process Display */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Process Visualization */}
          <div className="relative">
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 shadow-2xl">
              <div className="text-center mb-6">
                <div className="w-16 h-16 mx-auto mb-4 text-blue-400 animate-bounce flex items-center justify-center">{procedureSteps[activeStep].icon}</div>
                <div className="inline-block px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-semibold mb-3">
                  STEP {activeStep + 1} OF {procedureSteps.length}
                </div>
                <h3 className="text-2xl font-bold text-white mb-3">{procedureSteps[activeStep].title}</h3>
                <div className="text-blue-300 font-semibold mb-4">Duration: {procedureSteps[activeStep].duration}</div>
                <p className="text-gray-300 leading-relaxed mb-6">{procedureSteps[activeStep].description}</p>
              </div>

              {/* Tools & Equipment */}
              <div className="mb-6">
                <h4 className="text-lg font-semibold text-white mb-3">Tools & Technology:</h4>
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
                  className="bg-gradient-to-r from-blue-500 to-cyan-500 h-3 rounded-full transition-all duration-6000 ease-linear"
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
                      activeStep === index ? 'bg-blue-500 scale-125' : 'bg-gray-500 hover:bg-blue-400'
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
                  <p className="text-sm text-gray-700">Professional installation using industry-leading equipment</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Process Timeline */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-white text-center mb-12">Complete Process Timeline</h3>
          <div className="relative">
            {/* Timeline Line - Hidden on mobile, visible on desktop */}
            <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-blue-500 to-cyan-500 rounded-full"></div>
            {/* Mobile Timeline Line - Left aligned */}
            <div className="lg:hidden absolute left-6 top-0 w-1 h-full bg-gradient-to-b from-blue-500 to-cyan-500 rounded-full"></div>

            <div className="space-y-8 lg:space-y-12">
              {procedureSteps.map((step, index) => (
                <div key={index} className={`flex items-start lg:items-center ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} flex-row`}>
                  {/* Mobile Layout - Always left aligned */}
                  <div className="lg:hidden flex items-start w-full">
                    {/* Timeline Node for Mobile */}
                    <div className="relative z-10 mr-4 mt-1">
                      <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full border-4 border-white shadow-lg flex items-center justify-center">
                        <span className="text-white font-bold text-sm">{index + 1}</span>
                      </div>
                    </div>

                    {/* Content for Mobile */}
                    <div className="flex-1">
                      <div className="bg-white/10 backdrop-blur-lg rounded-lg p-6 border border-white/20">
                        <div className="flex items-center mb-3">
                          <span className="w-8 h-8 mr-3 text-blue-400 inline-flex items-center justify-center">{step.icon}</span>
                          <h4 className="text-lg font-bold text-white">{step.title}</h4>
                        </div>
                        <p className="text-gray-300 text-sm mb-2">{step.description}</p>
                        <div className="text-blue-300 font-semibold text-sm">{step.duration}</div>
                      </div>
                    </div>
                  </div>

                  {/* Desktop Layout */}
                  <div className={`hidden lg:block w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                    <div className="bg-white/10 backdrop-blur-lg rounded-lg p-6 border border-white/20">
                      <div className={`flex items-center mb-3 ${index % 2 === 0 ? 'justify-end' : 'justify-start'}`}>
                        <span className="w-8 h-8 mr-3 text-blue-400 inline-flex items-center justify-center">{step.icon}</span>
                        <h4 className="text-lg font-bold text-white">{step.title}</h4>
                      </div>
                      <p className="text-gray-300 text-sm mb-2">{step.description}</p>
                      <div className="text-blue-300 font-semibold text-sm">{step.duration}</div>
                    </div>
                  </div>

                  {/* Timeline Node for Desktop */}
                  <div className="hidden lg:block relative z-10">
                    <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full border-4 border-white shadow-lg flex items-center justify-center">
                      <span className="text-white font-bold text-sm">{index + 1}</span>
                    </div>
                  </div>

                  <div className="hidden lg:block w-1/2"></div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-blue-600 to-cyan-600 rounded-2xl p-8 text-white text-center">
          <h3 className="text-3xl font-bold mb-4">Ready to Start Your Prevention Journey?</h3>
          <p className="text-xl mb-8 text-blue-100 max-w-3xl mx-auto">
            Our expert team is ready to protect your property with Australia's most advanced termite prevention systems.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button type="button" className="px-8 py-4 bg-white text-blue-600 rounded-full font-bold text-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105">
              Schedule Free Assessment
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

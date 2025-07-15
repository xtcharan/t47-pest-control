"use client";

import { useState, useEffect } from 'react';
import Image from 'next/image';

export default function TermitePreventionSolutions() {
  const [activeSolution, setActiveSolution] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const solutions = [
    {
      id: 0,
      title: "Chemical Barrier Systems",
      subtitle: "Advanced Liquid Protection",
      description: "State-of-the-art chemical barriers using premium termiticides that create an invisible protective zone around your entire property.",
      features: [
        "25-year protection guarantee",
        "Eco-friendly formulations",
        "Continuous soil barrier",
        "Professional installation",
        "Australian Standards compliant",
        "Safe for family & pets"
      ],
      benefits: [
        "99.9% effectiveness rate",
        "Long-lasting protection",
        "Cost-effective solution",
        "Minimal property disruption"
      ],
      image: "/chemical-barrier-system.jpg",
      warranty: "25 Years",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
        </svg>
      )
    },
    {
      id: 1,
      title: "Physical Barrier Systems",
      subtitle: "Engineered Protection",
      description: "Permanent physical barriers using stainless steel mesh and crushed granite technology that termites cannot penetrate.",
      features: [
        "Lifetime protection",
        "No chemicals required",
        "Environmentally safe",
        "Building code compliant",
        "Corrosion resistant",
        "Zero maintenance"
      ],
      benefits: [
        "100% chemical-free",
        "Permanent solution",
        "Eco-friendly option",
        "No ongoing treatments"
      ],
      image: "/physical-barrier-system.jpg",
      warranty: "Lifetime",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      )
    },

    {
      id: 3,
      title: "Hybrid Protection Systems",
      subtitle: "Ultimate Defense",
      description: "Combination of chemical barriers, physical barriers, and smart monitoring for the ultimate termite protection solution.",
      features: [
        "Multi-layer protection",
        "Chemical + physical barriers",
        "Smart monitoring included",
        "Comprehensive coverage",
        "Maximum effectiveness",
        "Premium warranty"
      ],
      benefits: [
        "99.99% protection rate",
        "Complete peace of mind",
        "Future-proof solution",
        "Maximum property value"
      ],
      image: "/hybrid-protection-system.jpg",
      warranty: "30 Years",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2m0 0l2-2m-2 2V6m6 6l2 2m0 0l2-2m-2 2V6" />
        </svg>
      )
    }
  ];

  const comparisonData = [
    { feature: "Protection Duration", chemical: "25 Years", physical: "Lifetime", hybrid: "30 Years" },
    { feature: "Effectiveness Rate", chemical: "99.9%", physical: "100%", hybrid: "99.99%" },
    { feature: "Environmental Impact", chemical: "Low", physical: "None", hybrid: "Low" },
    { feature: "Maintenance Required", chemical: "Minimal", physical: "None", hybrid: "Minimal" },
    { feature: "Installation Time", chemical: "1-2 Days", physical: "2-3 Days", hybrid: "3-4 Days" },
    { feature: "Monitoring Included", chemical: "Optional", physical: "Optional", hybrid: "Yes" }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-white via-gray-50 to-blue-50">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-700 rounded-full font-semibold mb-4">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
            </svg>
            ADVANCED PROTECTION SOLUTIONS
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Choose Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-600">Protection System</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            From basic chemical barriers to advanced hybrid systems, we offer the most comprehensive range of termite prevention solutions in Australia.
          </p>
        </div>

        {/* Solution Selector */}
        <div className="mb-16">
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            {solutions.map((solution) => (
              <button
                key={solution.id}
                type="button"
                onClick={() => setActiveSolution(solution.id)}
                className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                  activeSolution === solution.id
                    ? 'bg-gradient-to-r from-blue-600 to-cyan-600 text-white shadow-lg scale-105'
                    : 'bg-white text-gray-700 hover:bg-blue-50 border border-gray-200 shadow-sm'
                }`}
              >
                <span className="mr-2 inline-flex">{solution.icon}</span>
                {solution.title}
              </button>
            ))}
          </div>

          {/* Active Solution Display */}
          <div className="bg-white rounded-2xl shadow-2xl overflow-hidden border border-gray-100">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              {/* Content Side */}
              <div className="p-8 lg:p-12">
                <div className="flex items-center mb-4">
                  <span className="w-12 h-12 mr-4 text-blue-600 inline-flex items-center justify-center">{solutions[activeSolution].icon}</span>
                  <div>
                    <h3 className="text-3xl font-bold text-gray-900">{solutions[activeSolution].title}</h3>
                    <p className="text-blue-600 font-semibold">{solutions[activeSolution].subtitle}</p>
                  </div>
                </div>

                <p className="text-gray-600 text-lg mb-6 leading-relaxed">
                  {solutions[activeSolution].description}
                </p>

                {/* Warranty */}
                <div className="mb-6">
                  <div className="bg-blue-50 p-4 rounded-lg text-center">
                    <div className="text-2xl font-bold text-blue-600">{solutions[activeSolution].warranty}</div>
                    <div className="text-sm text-blue-700">Warranty Period</div>
                  </div>
                </div>

                {/* Features */}
                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-gray-900 mb-3">Key Features:</h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {solutions[activeSolution].features.map((feature, index) => (
                      <div key={index} className="flex items-center text-gray-700">
                        <svg className="w-4 h-4 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                        </svg>
                        <span className="text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Benefits */}
                <div className="mb-8">
                  <h4 className="text-lg font-semibold text-gray-900 mb-3">Benefits:</h4>
                  <div className="space-y-2">
                    {solutions[activeSolution].benefits.map((benefit, index) => (
                      <div key={index} className="flex items-center text-gray-700">
                        <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                        <span className="text-sm">{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-3">
                  <button type="button" className="flex-1 px-6 py-3 bg-gradient-to-r from-blue-600 to-cyan-600 text-white rounded-lg font-semibold hover:shadow-lg transition-all duration-300">
                    Get Quote for This System
                  </button>
                  <button type="button" className="flex-1 px-6 py-3 border-2 border-blue-600 text-blue-600 rounded-lg font-semibold hover:bg-blue-50 transition-all duration-300">
                    Learn More
                  </button>
                </div>
              </div>

              {/* Image Side */}
              <div className="relative">
                <div className="aspect-w-16 aspect-h-12 lg:h-full">
                  <Image
                    src={solutions[activeSolution].image}
                    alt={solutions[activeSolution].title}
                    width={600}
                    height={400}
                    className="object-cover w-full h-full"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Comparison Table */}
        <div className="mb-16">
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">Solution Comparison</h3>
            <p className="text-gray-600">Compare features across all our protection systems</p>
          </div>

          <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white">
                  <tr>
                    <th className="px-6 py-4 text-left font-semibold">Feature</th>
                    <th className="px-6 py-4 text-center font-semibold">Chemical</th>
                    <th className="px-6 py-4 text-center font-semibold">Physical</th>
                    <th className="px-6 py-4 text-center font-semibold">Hybrid</th>
                  </tr>
                </thead>
                <tbody>
                  {comparisonData.map((row, index) => (
                    <tr key={index} className={index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
                      <td className="px-6 py-4 font-semibold text-gray-900">{row.feature}</td>
                      <td className="px-6 py-4 text-center text-gray-700">{row.chemical}</td>
                      <td className="px-6 py-4 text-center text-gray-700">{row.physical}</td>
                      <td className="px-6 py-4 text-center text-gray-700 font-semibold">{row.hybrid}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-blue-600 to-cyan-600 rounded-2xl p-8 text-white text-center">
          <h3 className="text-3xl font-bold mb-4">Need Help Choosing the Right System?</h3>
          <p className="text-xl mb-8 text-blue-100 max-w-3xl mx-auto">
            Our experts will assess your property and recommend the perfect protection system for your specific needs and budget.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button type="button" className="px-8 py-4 bg-white text-blue-600 rounded-full font-bold text-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105">
              Get Free Consultation
            </button>
            <button type="button" className="px-8 py-4 border-2 border-white rounded-full font-bold text-lg hover:bg-white/10 transition-all duration-300">
              Compare All Systems
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

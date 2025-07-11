"use client";

import OptimizedImage from '../common/OptimizedImage';
import { useState } from 'react';

export default function CommercialControlContent() {
  const [activeTab, setActiveTab] = useState('approach');

  const tabs = [
    {
      id: 'approach',
      label: 'Our Approach',
      content: {
        title: 'Integrated Pest Management for Business',
        description: 'Our comprehensive approach combines prevention, monitoring, and targeted treatments to ensure your business remains pest-free while maintaining operational efficiency.',
        points: [
          'Thorough site assessment and risk analysis',
          'Customized treatment plans for your industry',
          'Regular monitoring and documentation',
          'Preventive measures and staff training',
          'Emergency response protocols'
        ]
      }
    },
    {
      id: 'compliance',
      label: 'Compliance & Standards',
      content: {
        title: 'Meeting Industry Regulations',
        description: 'We understand the strict compliance requirements across different industries and ensure all treatments meet or exceed regulatory standards.',
        points: [
          'HACCP compliance for food industries',
          'Healthcare facility regulations',
          'Educational institution safety standards',
          'Hospitality industry requirements',
          'Complete documentation and reporting'
        ]
      }
    },
    {
      id: 'benefits',
      label: 'Business Benefits',
      content: {
        title: 'Protecting Your Business Investment',
        description: 'Professional pest control is essential for maintaining business reputation, ensuring compliance, and protecting your bottom line.',
        points: [
          'Protect brand reputation and customer trust',
          'Avoid costly regulatory fines and shutdowns',
          'Prevent product contamination and loss',
          'Maintain employee health and safety',
          'Ensure operational continuity'
        ]
      }
    }
  ];

  const currentTab = tabs.find(tab => tab.id === activeTab);

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <span className="inline-block px-3 py-1 bg-blue-100 text-blue-700 text-sm font-semibold rounded-full mb-3">
            WHY CHOOSE US
          </span>
          <h2 className="text-4xl font-bold mb-4 text-gray-900">
            Professional <span className="text-blue-600">Commercial Pest Control</span>
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-3xl mx-auto text-lg">
            Protecting your business with industry-leading pest management solutions that prioritize compliance, discretion, and results.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Image */}
          <div className="relative">
            <div className="relative h-[500px] rounded-2xl overflow-hidden shadow-xl">
              <OptimizedImage
                src="/commercial-pest-control-content.webp"
                fallbackSrc="/commercial-pest-control-content.jpg"
                alt="Commercial Pest Control Professional"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
              
              {/* Overlay with stats */}
              <div className="absolute bottom-6 left-6 right-6">
                <div className="bg-white/95 backdrop-blur-sm rounded-xl p-6 shadow-lg">
                  <div className="grid grid-cols-3 gap-4 text-center">
                    <div>
                      <div className="text-2xl font-bold text-blue-600">500+</div>
                      <div className="text-sm text-gray-600">Businesses Served</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-blue-600">24/7</div>
                      <div className="text-sm text-gray-600">Emergency Service</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-blue-600">100%</div>
                      <div className="text-sm text-gray-600">Compliance Rate</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right side - Content */}
          <div>
            {/* Tab Navigation */}
            <div className="flex flex-wrap gap-2 mb-8">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`px-4 py-2 rounded-full text-sm font-semibold transition-all duration-300 ${
                    activeTab === tab.id
                      ? 'bg-blue-600 text-white shadow-lg'
                      : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            {/* Tab Content */}
            {currentTab && (
              <div className="space-y-6">
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    {currentTab.content.title}
                  </h3>
                  <p className="text-gray-600 text-lg leading-relaxed mb-6">
                    {currentTab.content.description}
                  </p>
                </div>

                <div className="space-y-3">
                  {currentTab.content.points.map((point, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        <svg className="w-3 h-3 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <span className="text-gray-700">{point}</span>
                    </div>
                  ))}
                </div>

                {/* CTA Button */}
                <div className="pt-6">
                  <a
                    href="/contact"
                    className="inline-flex items-center bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-full transition-colors"
                  >
                    Schedule Consultation
                    <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </a>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Additional Features Section */}
        <div className="mt-16 grid md:grid-cols-3 gap-8">
          <div className="text-center p-6 bg-gray-50 rounded-xl">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Licensed & Insured</h3>
            <p className="text-gray-600">Fully licensed professionals with comprehensive insurance coverage for your peace of mind.</p>
          </div>

          <div className="text-center p-6 bg-gray-50 rounded-xl">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Flexible Scheduling</h3>
            <p className="text-gray-600">Service times that work around your business operations, including after-hours and weekend availability.</p>
          </div>

          <div className="text-center p-6 bg-gray-50 rounded-xl">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Detailed Reporting</h3>
            <p className="text-gray-600">Comprehensive documentation and reporting to meet compliance requirements and audit standards.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

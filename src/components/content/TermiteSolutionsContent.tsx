"use client";

import OptimizedImage from '../common/OptimizedImage';
import { useState } from 'react';

export default function TermiteSolutionsContent() {
  const [activeTab, setActiveTab] = useState('approach');

  const tabs = [
    {
      id: 'approach',
      label: 'Our Approach',
      content: {
        title: 'Comprehensive Termite Management',
        description: 'Our integrated approach combines advanced detection technology, proven treatment methods, and long-term prevention strategies to provide complete termite protection.',
        points: [
          'Thorough property assessment using thermal imaging',
          'Species identification and colony mapping',
          'Customized treatment plans for your property',
          'Advanced barrier installation with warranties',
          'Ongoing monitoring and maintenance programs'
        ]
      }
    },
    {
      id: 'technology',
      label: 'Advanced Technology',
      content: {
        title: 'Cutting-Edge Detection & Treatment',
        description: 'We utilize the latest technology and proven methods to ensure accurate detection and effective treatment of termite infestations.',
        points: [
          'Thermal imaging cameras for hidden detection',
          'Moisture meters and acoustic detection devices',
          'Advanced chemical and physical barrier systems',
          'Smart monitoring stations with real-time alerts',
          'Eco-friendly treatment options available'
        ]
      }
    },
    {
      id: 'protection',
      label: 'Long-Term Protection',
      content: {
        title: 'Guaranteed Peace of Mind',
        description: 'Our comprehensive protection plans ensure your property remains termite-free with industry-leading warranties and ongoing support.',
        points: [
          'Up to 25-year warranty on prevention systems',
          'Annual inspection and monitoring services',
          'Immediate response to any termite activity',
          'Damage repair and restoration services',
          'Insurance-approved documentation and reporting'
        ]
      }
    }
  ];

  const currentTab = tabs.find(tab => tab.id === activeTab);

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <span className="inline-block px-3 py-1 bg-orange-100 text-orange-700 text-sm font-semibold rounded-full mb-3">
            WHY CHOOSE US
          </span>
          <h2 className="text-4xl font-bold mb-4 text-gray-900">
            Expert <span className="text-orange-600">Termite Solutions</span> You Can Trust
          </h2>
          <div className="w-24 h-1 bg-orange-600 mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-3xl mx-auto text-lg">
            Protecting Australian properties from termite damage with proven expertise, advanced technology, and comprehensive solutions.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Image */}
          <div className="relative">
            <div className="relative h-[500px] rounded-2xl overflow-hidden shadow-xl">
              <OptimizedImage
                src="/termite-solutions-optimized.jpg"
                fallbackSrc="/termite-solutions.jpg"
                alt="Professional Termite Solutions"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
              
              {/* Overlay with stats */}
              <div className="absolute bottom-6 left-6 right-6">
                <div className="bg-white/95 backdrop-blur-sm rounded-xl p-6 shadow-lg">
                  <div className="grid grid-cols-3 gap-4 text-center">
                    <div>
                      <div className="text-2xl font-bold text-orange-600">15+</div>
                      <div className="text-sm text-gray-600">Years Experience</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-orange-600">5000+</div>
                      <div className="text-sm text-gray-600">Properties Protected</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-orange-600">99.9%</div>
                      <div className="text-sm text-gray-600">Success Rate</div>
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
                      ? 'bg-orange-600 text-white shadow-lg'
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
                      <div className="w-6 h-6 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        <svg className="w-3 h-3 text-orange-600" fill="currentColor" viewBox="0 0 20 20">
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
                    className="inline-flex items-center bg-orange-600 hover:bg-orange-700 text-white font-bold py-3 px-6 rounded-full transition-colors"
                  >
                    Get Free Inspection
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
            <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Certified Experts</h3>
            <p className="text-gray-600">Licensed and certified termite specialists with extensive training and experience in Australian conditions.</p>
          </div>

          <div className="text-center p-6 bg-gray-50 rounded-xl">
            <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Same-Day Service</h3>
            <p className="text-gray-600">Emergency termite inspections and treatments available with same-day service across Victoria.</p>
          </div>

          <div className="text-center p-6 bg-gray-50 rounded-xl">
            <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Comprehensive Reports</h3>
            <p className="text-gray-600">Detailed inspection reports with photos, recommendations, and treatment plans for insurance and peace of mind.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

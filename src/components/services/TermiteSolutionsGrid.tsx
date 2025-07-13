"use client";

import Link from 'next/link';
import OptimizedImage from '../common/OptimizedImage';
import { useState } from 'react';
import { COMPANY_INFO } from '../lib/constants';

export default function TermiteSolutionsGrid() {
  const [hoveredService, setHoveredService] = useState<string | null>(null);

  const services = [
    {
      name: 'Termite Inspection',
      href: '/termite-solutions/inspection',
      image: '/termite-inspection.webp',
      fallback: '/termite-inspection.jpg',
      description: 'Comprehensive termite detection using advanced technology'
    },
    {
      name: 'Termite Treatment',
      href: '/termite-solutions/treatment',
      image: '/termite-treatment.jpg',
      fallback: '/termite-solutions.jpg',
      description: 'Expert elimination of active termite infestations'
    },
    {
      name: 'Termite Prevention',
      href: '/termite-solutions/prevention',
      image: '/termite-chemical-barrier.jpg',
      fallback: '/termite-physical-barrier.jpg',
      description: 'Advanced barrier systems with 25-year warranties'
    },
    {
      name: 'Pre-Purchase Inspection',
      href: '/termite-solutions/pre-purchase',
      image: '/termite-assessment.jpg',
      fallback: '/termite-inspection.jpg',
      description: 'Essential property inspections before buying'
    },
    {
      name: 'Annual Inspection',
      href: '/termite-solutions/annual',
      image: '/termite-monitoring.jpg',
      fallback: '/termite-monitoring-system.jpg',
      description: 'Regular monitoring for ongoing protection'
    },
    {
      name: 'Business Inspection',
      href: '/termite-solutions/business',
      image: '/termites-construction.jpg',
      fallback: '/termite-inspection.jpg',
      description: 'Commercial property termite assessments'
    },
    {
      name: 'Home Protection',
      href: '/termite-solutions/homes',
      image: '/termite-solutions-optimized.jpg',
      fallback: '/termite-solutions.jpg',
      description: 'Residential termite management solutions'
    },
    {
      name: 'Damage Repair',
      href: '/termite-solutions/damage-repair',
      image: '/termite-testing.jpg',
      fallback: '/termite-installation.jpg',
      description: 'Professional restoration of termite damage'
    }
  ];

  return (
    <section id="services" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <span className="inline-block px-3 py-1 bg-orange-100 text-orange-700 text-sm font-semibold rounded-full mb-3">
            OUR TERMITE SOLUTIONS
          </span>
          <h2 className="text-4xl font-bold mb-4 text-gray-900">
            Complete <span className="text-orange-600">Termite Protection Services</span>
          </h2>
          <div className="w-24 h-1 bg-orange-600 mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-3xl mx-auto text-lg">
            From initial inspection to long-term protection, we provide comprehensive termite solutions tailored to your specific needs and property requirements.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-12">
          {services.map((service, index) => (
            <Link
              key={service.name}
              href={service.href}
              className="group relative bg-white rounded-xl shadow-card hover:shadow-card-hover transition-all duration-300 overflow-hidden transform hover:-translate-y-1"
              onMouseEnter={() => setHoveredService(service.name)}
              onMouseLeave={() => setHoveredService(null)}
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <OptimizedImage
                  src={service.image}
                  fallbackSrc={service.fallback}
                  alt={service.name}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, (max-width: 1280px) 33vw, 25vw"
                  className="object-cover group-hover:scale-110 transition-transform duration-300"
                />
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-orange-600 transition-colors">
                  {service.name}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {service.description}
                </p>
                
                {/* Hover indicator */}
                <div className={`mt-4 flex items-center text-orange-600 font-semibold transition-all duration-300 ${
                  hoveredService === service.name ? 'translate-x-2' : ''
                }`}>
                  <span className="text-sm">Learn More</span>
                  <svg 
                    className="w-4 h-4 ml-2 transition-transform duration-300 group-hover:translate-x-1" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-orange-500 to-orange-600 p-8 rounded-2xl text-white">
            <h3 className="text-2xl font-bold mb-4">Protect Your Property from Termite Damage</h3>
            <p className="text-lg mb-6 max-w-2xl mx-auto">
              Don't wait until it's too late. Termites cause billions in damage annually. Get your comprehensive termite assessment today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-white text-orange-600 hover:bg-gray-100 font-bold py-3 px-8 rounded-full transition-colors text-lg"
              >
                Schedule Inspection
              </Link>
              <Link
                href={`tel:${COMPANY_INFO.phone}`}
                className="border-2 border-white text-white hover:bg-white hover:text-orange-600 font-bold py-3 px-8 rounded-full transition-colors text-lg"
              >
                Call Now: {COMPANY_INFO.phone}
              </Link>
            </div>
          </div>
        </div>

        {/* Statistics Section */}
        <div className="mt-16 grid md:grid-cols-4 gap-8">
          <div className="text-center p-6 bg-white rounded-xl shadow-md">
            <div className="text-3xl font-bold text-orange-600 mb-2">$1.5B+</div>
            <div className="text-gray-600">Annual termite damage in Australia</div>
          </div>
          <div className="text-center p-6 bg-white rounded-xl shadow-md">
            <div className="text-3xl font-bold text-orange-600 mb-2">1 in 3</div>
            <div className="text-gray-600">Homes affected by termites</div>
          </div>
          <div className="text-center p-6 bg-white rounded-xl shadow-md">
            <div className="text-3xl font-bold text-orange-600 mb-2">25-Year</div>
            <div className="text-gray-600">Warranty available</div>
          </div>
          <div className="text-center p-6 bg-white rounded-xl shadow-md">
            <div className="text-3xl font-bold text-orange-600 mb-2">Same-Day</div>
            <div className="text-gray-600">Service available</div>
          </div>
        </div>
      </div>
    </section>
  );
}

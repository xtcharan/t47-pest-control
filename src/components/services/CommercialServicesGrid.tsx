"use client";

import Link from 'next/link';
import OptimizedImage from '../common/OptimizedImage';
import { useState } from 'react';
import { COMPANY_INFO } from '../lib/constants';

export default function CommercialServicesGrid() {
  const [hoveredService, setHoveredService] = useState<string | null>(null);

  const services = [
    {
      name: 'Restaurant Pest Control',
      href: '/commercial/restaurants',
      image: '/restaurant-pest-control-hero.webp',
      fallback: '/restaurant-pest-control-hero.jpg',
      description: 'Food safety compliance and reputation protection'
    },
    {
      name: 'Office Pest Control',
      href: '/commercial/offices',
      image: '/office-pest-control-hero.webp',
      fallback: '/office-pest-control-hero.jpg',
      description: 'Professional workplace pest management solutions'
    },
    {
      name: 'Hotel Pest Control',
      href: '/commercial/hotels',
      image: '/hotel-pest-control-hero.webp',
      fallback: '/hotel-pest-control-hero.jpg',
      description: 'Guest satisfaction and hospitality excellence'
    },
    {
      name: 'School Pest Control',
      href: '/commercial/schools',
      image: '/school-pest-control-hero.webp',
      fallback: '/school-pest-control-hero.jpg',
      description: 'Safe learning environments for students'
    },
    {
      name: 'Hospital Pest Control',
      href: '/commercial/hospitals',
      image: '/hospital-pest-control-hero.webp',
      fallback: '/hospital-pest-control-hero.jpg',
      description: 'Healthcare facility compliance and patient safety'
    },
    {
      name: 'Warehouse Pest Control',
      href: '/commercial/warehouses',
      image: '/warehouse-pest-control-hero.webp',
      fallback: '/warehouse-pest-control-hero.jpg',
      description: 'Inventory protection and supply chain security'
    },
    {
      name: 'Retail Pest Control',
      href: '/commercial/retail',
      image: '/retail-pest-control-hero.webp',
      fallback: '/retail-pest-control-hero.jpg',
      description: 'Customer experience and product protection'
    },
    {
      name: 'Food Processing',
      href: '/commercial/food-processing',
      image: '/food-processing-pest-control-hero.webp',
      fallback: '/food-processing-pest-control-hero.jpg',
      description: 'HACCP compliance and food safety standards'
    },
    {
      name: 'Childcare Centers',
      href: '/commercial/childcare',
      image: '/childcare-pest-control-hero.webp',
      fallback: '/childcare-pest-control-hero.jpg',
      description: 'Child-safe pest control solutions'
    },
    {
      name: 'Elderly Care Facilities',
      href: '/commercial/elderly-care',
      image: '/elderly-care-pest-control-hero.webp',
      fallback: '/elderly-care-pest-control-hero.jpg',
      description: 'Sensitive environment pest management'
    },
    {
      name: 'Gym & Fitness Centers',
      href: '/commercial/gym-fitness',
      image: '/gym-pest-control-hero.webp',
      fallback: '/gym-pest-control-hero.jpg',
      description: 'Hygiene and member satisfaction focus'
    },
    {
      name: 'IT Centers',
      href: '/commercial/it-centers',
      image: '/it-center-pest-control-hero.webp',
      fallback: '/it-center-pest-control-hero.jpg',
      description: 'Equipment protection and operational continuity'
    }
  ];

  return (
    <section id="services" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <span className="inline-block px-3 py-1 bg-blue-100 text-blue-700 text-sm font-semibold rounded-full mb-3">
            OUR COMMERCIAL SERVICES
          </span>
          <h2 className="text-4xl font-bold mb-4 text-gray-900">
            Industry-Specific <span className="text-blue-600">Pest Control Solutions</span>
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-3xl mx-auto text-lg">
            Specialized pest management services tailored to meet the unique requirements and compliance standards of your industry.
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
                <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                  {service.name}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {service.description}
                </p>
                
                {/* Hover indicator */}
                <div className={`mt-4 flex items-center text-blue-600 font-semibold transition-all duration-300 ${
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
          <div className="bg-gradient-to-r from-blue-500 to-blue-600 p-8 rounded-2xl text-white">
            <h3 className="text-2xl font-bold mb-4">Need Pest Control for a Different Industry?</h3>
            <p className="text-lg mb-6 max-w-2xl mx-auto">
              We provide customized pest management solutions for all types of commercial facilities. Contact us for a specialized consultation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-white text-blue-600 hover:bg-gray-100 font-bold py-3 px-8 rounded-full transition-colors text-lg"
              >
                Get Free Quote
              </Link>
              <Link
                href={`tel:${COMPANY_INFO.phone}`}
                className="border-2 border-white text-white hover:bg-white hover:text-blue-600 font-bold py-3 px-8 rounded-full transition-colors text-lg"
              >
                Call Now: {COMPANY_INFO.phone}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

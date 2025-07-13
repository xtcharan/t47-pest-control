"use client";

import Link from 'next/link';
import OptimizedImage from '../common/OptimizedImage';
import { useState } from 'react';
import { COMPANY_INFO } from '../lib/constants';

export default function ResidentialServicesGrid() {
  const [hoveredService, setHoveredService] = useState<string | null>(null);

  const services = [
    {
      name: 'Ant Control',
      href: '/residential/ants',
      image: '/pest-control-hero.webp',
      fallback: '/pest-control-hero.jpg',
      description: 'Eliminate ant colonies and prevent future infestations'
    },
    {
      name: 'Spider Control',
      href: '/residential/spiders',
      image: '/spider-control-hero.webp',
      fallback: '/spider-control-hero.jpg',
      description: 'Safe removal of spiders and web prevention'
    },
    {
      name: 'Cockroach Control',
      href: '/residential/cockroaches',
      image: '/cockroach-control-hero.webp',
      fallback: '/cockroach-control-hero.jpg',
      description: 'Complete cockroach elimination and prevention'
    },
    {
      name: 'Termite Control',
      href: '/residential/termites',
      image: '/residential-pest-control.webp',
      fallback: '/residential-pest-control.jpg',
      description: 'Protect your home from structural damage'
    },
    {
      name: 'Rodent Control',
      href: '/residential/rats-mice',
      image: '/rodent-control-hero.webp',
      fallback: '/rodent-control-hero.jpg',
      description: 'Mice and rat removal and exclusion services'
    },
    {
      name: 'Wasp Control',
      href: '/residential/wasps',
      image: '/wasp-control-hero.webp',
      fallback: '/wasp-control-hero.jpg',
      description: 'Safe wasp nest removal and prevention'
    },
    {
      name: 'Bed Bug Control',
      href: '/residential/bed-bugs',
      image: '/bed-bug-control-hero.webp',
      fallback: '/bed-bug-control-hero.jpg',
      description: 'Complete bed bug elimination treatment'
    },
    {
      name: 'Flea Control',
      href: '/residential/fleas',
      image: '/residential-complex-pest-control-hero.webp',
      fallback: '/residential-complex-pest-control-hero.jpg',
      description: 'Flea treatment for homes and pets'
    },
    {
      name: 'Mosquito Control',
      href: '/residential/mosquitoes',
      image: '/hospital-pest-control-hero.webp',
      fallback: '/hospital-pest-control-hero.jpg',
      description: 'Reduce mosquito populations around your home'
    },
    {
      name: 'Fly Control',
      href: '/residential/flies',
      image: '/restaurant-pest-control-hero.webp',
      fallback: '/restaurant-pest-control-hero.jpg',
      description: 'Effective fly control and prevention'
    },
    {
      name: 'Possum Control',
      href: '/residential/possums',
      image: '/silverfish-control-hero.webp',
      fallback: '/silverfish-control-hero.jpg',
      description: 'Humane possum removal and exclusion'
    },
    {
      name: 'Bird Control',
      href: '/residential/bird-control',
      image: '/bird-control-hero.webp',
      fallback: '/bird-control-hero.jpg',
      description: 'Bird deterrent and nesting prevention'
    }
  ];

  return (
    <section id="services" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <span className="inline-block px-3 py-1 bg-green-100 text-green-700 text-sm font-semibold rounded-full mb-3">
            OUR RESIDENTIAL SERVICES
          </span>
          <h2 className="text-4xl font-bold mb-4 text-gray-900">
            Complete <span className="text-green-dark">Pest Control Solutions</span> for Your Home
          </h2>
          <div className="w-24 h-1 bg-green-dark mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-3xl mx-auto text-lg">
            From common household pests to specialized treatments, we provide comprehensive pest control services to keep your home safe and pest-free.
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
                <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-green-dark transition-colors">
                  {service.name}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {service.description}
                </p>
                
                {/* Hover indicator */}
                <div className={`mt-4 flex items-center text-green-dark font-semibold transition-all duration-300 ${
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
          <div className="bg-gradient-to-r from-green-light to-green-dark p-8 rounded-2xl text-white">
            <h3 className="text-2xl font-bold mb-4">Don't See Your Pest Problem Listed?</h3>
            <p className="text-lg mb-6 max-w-2xl mx-auto">
              We handle all types of pest issues. Contact us for a free consultation and customized treatment plan.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-white text-green-dark hover:bg-gray-100 font-bold py-3 px-8 rounded-full transition-colors text-lg"
              >
                Get Free Quote
              </Link>
              <Link
                href={`tel:${COMPANY_INFO.phone}`}
                className="border-2 border-white text-white hover:bg-white hover:text-green-dark font-bold py-3 px-8 rounded-full transition-colors text-lg"
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

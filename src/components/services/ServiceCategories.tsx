"use client";

import { useState } from 'react';
import Link from 'next/link';
import OptimizedImage from '../common/OptimizedImage';
import { COMPANY_INFO } from '../lib/constants';

interface ServiceCategory {
  title: string;
  description: string;
  image: string;
  fallback: string;
  href: string;
  icon: string;
  features: string[];
}

export default function ServiceCategories() {
  const [hoveredCategory, setHoveredCategory] = useState<string | null>(null);

  const serviceCategories: ServiceCategory[] = [
    {
      title: "Residential Pest Control",
      description: "Protecting your home from unwanted pests is essential and easy with FMCS your Home Protection Plans, household pest control and termite can cause damage to your property and more importantly pose health risks to your family and pets.",
      image: "/residential-pest-control.webp",
      fallback: "/residential-pest-control.jpg",
      href: "/residential",
      icon: "🏠",
      features: [
        "Comprehensive home protection",
        "Safe for family and pets",
        "Regular maintenance plans",
        "Emergency response available"
      ]
    },
    {
      title: "Commercial Pest Control",
      description: "From creepy crawlies, stored product and flying insects to rodents and bad bugs, we analyze each site, the environment and risks before developing a tailored pest control plan. Our integrated pest control services use the latest technology and tailored solutions.",
      image: "/commercial-pest-control.webp",
      fallback: "/commercial-pest-control.jpg",
      href: "/commercial",
      icon: "🏢",
      features: [
        "Industry-specific solutions",
        "Compliance with regulations",
        "Minimal business disruption",
        "Professional documentation"
      ]
    },
    {
      title: "Termite Solutions",
      description: "Despite their size, termites are by far the most damaging pest that Aussie homes face. Termite surveys find that 1 in 3 properties in Australia will be affected by termites at some stage, which causes greater damage than fire, storms, and floods combined, costing up to $1 billion in damage to homes each year.",
      image: "/termite-solutions-optimized.jpg",
      fallback: "/termite-solutions.jpg",
      href: "/termite-solutions",
      icon: "🐛",
      features: [
        "Advanced detection methods",
        "Comprehensive treatment plans",
        "Structural damage prevention",
        "Long-term protection"
      ]
    }
  ];

  return (
    <section id="service-categories" className="py-16 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-2 bg-green-light/10 text-green-dark text-sm font-semibold rounded-full mb-4">
            Victoria's Pest Control Leaders
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
            Staying At The Forefront Of Pest Control <span className="text-green-dark">for Decades !</span>
          </h2>
          <div className="w-24 h-1 bg-green-light mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-3xl mx-auto text-lg">
            Professional pest control services tailored to your specific needs. From residential homes to commercial properties, we provide comprehensive solutions that protect what matters most.
          </p>
        </div>

        {/* Service Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {serviceCategories.map((category, index) => (
            <div
              key={category.title}
              className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden transform hover:-translate-y-2"
              onMouseEnter={() => setHoveredCategory(category.title)}
              onMouseLeave={() => setHoveredCategory(null)}
            >
              {/* Image Container */}
              <div className="relative h-64 overflow-hidden">
                <OptimizedImage
                  src={category.image}
                  fallbackSrc={category.fallback}
                  alt={category.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                  quality={85}
                />
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>

                {/* Category Title on Image */}
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="text-white text-xl font-bold mb-2 group-hover:text-green-light transition-colors">
                    {category.title}
                  </h3>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <p className="text-gray-600 text-sm leading-relaxed mb-6 line-clamp-4">
                  {category.description}
                </p>

                {/* Features List */}
                <div className="mb-6">
                  <ul className="space-y-2">
                    {category.features.slice(0, 2).map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm text-gray-600">
                        <svg className="w-4 h-4 text-green-dark mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Learn More Button */}
                <Link
                  href={category.href}
                  className={`inline-flex items-center justify-center w-full py-3 px-6 rounded-full font-semibold text-sm transition-all duration-300 ${
                    hoveredCategory === category.title
                      ? 'bg-green-dark text-white shadow-lg transform translate-x-1'
                      : 'bg-green-light text-black hover:bg-green-dark hover:text-white'
                  }`}
                >
                  <span>Learn more</span>
                  <svg 
                    className={`w-4 h-4 ml-2 transition-transform duration-300 ${
                      hoveredCategory === category.title ? 'translate-x-1' : ''
                    }`} 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>

              {/* Decorative Elements */}
              <div className="absolute top-0 right-0 w-20 h-20 bg-green-light/10 rounded-full -translate-y-10 translate-x-10 group-hover:scale-150 transition-transform duration-700"></div>
              <div className="absolute bottom-0 left-0 w-16 h-16 bg-green-dark/5 rounded-full translate-y-8 -translate-x-8 group-hover:scale-125 transition-transform duration-700"></div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-green-light to-green-dark p-8 rounded-2xl text-white max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">Need Immediate Pest Control Assistance?</h3>
            <p className="text-lg mb-6 opacity-90">
              Our expert team is available 24/7 to handle your pest control emergencies. Get a free quote today!
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
                className="bg-transparent border-2 border-white hover:bg-white/10 text-white font-bold py-3 px-8 rounded-full transition-colors text-lg"
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

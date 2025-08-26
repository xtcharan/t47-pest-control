"use client";

import { useState } from 'react';
import Link from 'next/link';
import OptimizedSvgIcon from '@/components/common/OptimizedSvgIcon';

export default function AlburyPestSolutions() {
  const [showAllPests, setShowAllPests] = useState(false);
  const [showAllIndustries, setShowAllIndustries] = useState(false);

  const pests = [
    { name: 'Termites', icon: '/icons/termite.svg', href: '/termite-solutions', scientificName: 'Isoptera' },
    { name: 'Cockroaches', icon: '/icons/cockroach.svg', href: '/pest-control/cockroach-control', scientificName: 'Blattodea' },
    { name: 'Ants', icon: '/icons/ant.svg', href: '/pest-control/ant-control', scientificName: 'Formicidae' },
    { name: 'Spiders', icon: '/icons/spider.svg', href: '/pest-control/spider-control', scientificName: 'Araneae' },
    { name: 'Rodents', icon: '/icons/rodent.svg', href: '/pest-control/rodent-control', scientificName: 'Rodentia' },
    { name: 'Fleas', icon: '/icons/flea.svg', href: '/pest-control/flea-control', scientificName: 'Siphonaptera' },
    { name: 'Bed Bugs', icon: '/icons/bedbug.svg', href: '/pest-control/bed-bug-control', scientificName: 'Cimex lectularius' },
    { name: 'Wasps', icon: '/icons/wasp.svg', href: '/pest-control/wasp-control', scientificName: 'Vespidae' },
    { name: 'Moths', icon: '/icons/moth.svg', href: '/pest-control/moth-control', scientificName: 'Lepidoptera' },
    { name: 'Silverfish', icon: '/icons/silverfish.svg', href: '/pest-control/silverfish-control', scientificName: 'Lepisma saccharina' },
    { name: 'Beetles', icon: '/icons/beetle.svg', href: '/pest-control/beetle-control', scientificName: 'Coleoptera' },
    { name: 'Flies', icon: '/icons/fly.svg', href: '/pest-control/fly-control', scientificName: 'Diptera' },
    { name: 'Millipedes', icon: '/icons/millipede.svg', href: '/pest-control/millipede-control', scientificName: 'Diplopoda' },
    { name: 'Earwigs', icon: '/icons/earwig.svg', href: '/pest-control/earwig-control', scientificName: 'Dermaptera' },
    { name: 'Birds', icon: '/icons/bird.svg', href: '/pest-control/bird-control', scientificName: 'Aves' }
  ];

  const industries = [
    { name: 'Restaurants', icon: '/icons/restaurant.svg', href: '/commercial/restaurants' },
    { name: 'Hotels', icon: '/icons/hotel.svg', href: '/commercial/hotels' },
    { name: 'Hospitals', icon: '/icons/hospital.svg', href: '/commercial/hospitals' },
    { name: 'Schools', icon: '/icons/school.svg', href: '/commercial/schools' },
    { name: 'Offices', icon: '/icons/office.svg', href: '/commercial/offices' },
    { name: 'Warehouses', icon: '/icons/warehouse.svg', href: '/commercial/warehouses' },
    { name: 'Retail Stores', icon: '/icons/retail.svg', href: '/commercial/retail' },
    { name: 'Food Processing', icon: '/icons/food-processing.svg', href: '/commercial/food-processing' },
    { name: 'Aged Care', icon: '/icons/aged-care.svg', href: '/commercial/aged-care' },
    { name: 'Childcare', icon: '/icons/childcare.svg', href: '/commercial/childcare' }
  ];

  const renderPests = () => {
    const pestsToShow = showAllPests ? pests : pests.slice(0, 10);

    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
        {pestsToShow.map((pest, index) => (
          <Link
            href={pest.href || '/contact'}
            key={index}
            className="bg-white p-4 rounded-md shadow-sm flex flex-col items-center justify-center text-center hover:shadow-md transition-shadow h-44 w-full cursor-pointer"
          >
            <div className="w-24 h-24 relative mb-2 bg-transparent">
              <div className="w-24 h-24 flex items-center justify-center bg-transparent">
                <OptimizedSvgIcon
                  src={pest.icon}
                  alt={pest.name}
                  className="w-20 h-20 hover:scale-110 transition-transform duration-300"
                  rootMargin="200px"
                />
              </div>
            </div>
            <p className="text-sm font-medium text-gray-700">{pest.name}</p>
            {pest.scientificName && (
              <p className="text-xs text-gray-500 italic mt-1">{pest.scientificName}</p>
            )}
          </Link>
        ))}
        
        {!showAllPests && pests.length > 10 && (
          <button
            onClick={() => setShowAllPests(true)}
            className="bg-gray-100 p-4 rounded-md shadow-sm flex flex-col items-center justify-center text-center hover:shadow-md transition-shadow h-44 w-full cursor-pointer border-2 border-dashed border-gray-300 hover:border-gray-400"
          >
            <div className="text-4xl mb-2">➕</div>
            <p className="text-sm font-medium text-gray-600">View More Pests</p>
            <p className="text-xs text-gray-500 mt-1">+{pests.length - 10} more</p>
          </button>
        )}
      </div>
    );
  };

  const renderIndustries = () => {
    const industriesToShow = showAllIndustries ? industries : industries.slice(0, 10);

    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
        {industriesToShow.map((industry, index) => (
          <Link
            href={industry.href || '/contact'}
            key={index}
            className="bg-white p-4 rounded-md shadow-sm flex flex-col items-center justify-center text-center hover:shadow-md transition-shadow h-44 w-full cursor-pointer"
          >
            <div className="w-24 h-24 relative mb-2 bg-transparent">
              <div className="w-24 h-24 flex items-center justify-center bg-transparent">
                <OptimizedSvgIcon
                  src={industry.icon}
                  alt={industry.name}
                  className="w-20 h-20 hover:scale-110 transition-transform duration-300"
                  rootMargin="200px"
                />
              </div>
            </div>
            <p className="text-sm font-medium text-gray-700">{industry.name}</p>
          </Link>
        ))}
        
        {!showAllIndustries && industries.length > 10 && (
          <button
            onClick={() => setShowAllIndustries(true)}
            className="bg-gray-100 p-4 rounded-md shadow-sm flex flex-col items-center justify-center text-center hover:shadow-md transition-shadow h-44 w-full cursor-pointer border-2 border-dashed border-gray-300 hover:border-gray-400"
          >
            <div className="text-4xl mb-2">➕</div>
            <p className="text-sm font-medium text-gray-600">View More Industries</p>
            <p className="text-xs text-gray-500 mt-1">+{industries.length - 10} more</p>
          </button>
        )}
      </div>
    );
  };

  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Specialized pest solutions */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-center mb-2 text-red-dark">Our Specialised Pest Solutions in Albury</h2>
          <p className="text-center text-gray-600 mb-8">
            T47 Pest Control delivers customized pest control solutions designed to effectively eliminate and prevent pest issues in your Albury home or business, ensuring a pest-free environment 24/7 across Albury, Wodonga, Wagga Wagga, Orange, Shepparton, Dubbo, and Griffith.
          </p>

          {renderPests()}
        </div>

        {/* Industry-tailored solutions */}
        <div>
          <h2 className="text-2xl font-bold text-center mb-2 text-primary">Industry-tailored pest control solutions in Albury</h2>
          <p className="text-center text-gray-600 mb-8">
            T47 Pest Control provides comprehensive pest management solutions across various Albury industries, using proven methods and industry-leading practices. Our experienced team delivers specialized pest control services that protect your staff, property, and reputation with reliable 24/7 service across all Albury locations.
          </p>

          {renderIndustries()}
        </div>

        {/* Local Albury Information */}
        <div className="mt-16 bg-white rounded-lg p-8 shadow-md">
          <h3 className="text-2xl font-bold text-center mb-6 text-primary">Why Choose T47 Pest Control in Albury?</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="text-4xl mb-3">🏆</div>
              <h4 className="font-bold text-lg mb-2">Local Expertise</h4>
              <p className="text-gray-600 text-sm">Deep understanding of Albury's unique pest challenges and climate conditions</p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-3">⚡</div>
              <h4 className="font-bold text-lg mb-2">Rapid Response</h4>
              <p className="text-gray-600 text-sm">Fast emergency services across Albury, Wodonga, and surrounding areas</p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-3">🛡️</div>
              <h4 className="font-bold text-lg mb-2">Guaranteed Results</h4>
              <p className="text-gray-600 text-sm">Comprehensive warranties and follow-up services for lasting protection</p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-3">🌿</div>
              <h4 className="font-bold text-lg mb-2">Eco-Friendly</h4>
              <p className="text-gray-600 text-sm">Safe, environmentally responsible treatments for Albury families and businesses</p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-3">📋</div>
              <h4 className="font-bold text-lg mb-2">Licensed & Insured</h4>
              <p className="text-gray-600 text-sm">Fully qualified technicians with comprehensive insurance coverage</p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-3">💰</div>
              <h4 className="font-bold text-lg mb-2">Competitive Pricing</h4>
              <p className="text-gray-600 text-sm">Transparent, fair pricing with no hidden costs for Albury residents</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

"use client";

import { useState } from 'react';
import Link from 'next/link';
import OptimizedSvgIcon from '@/components/common/OptimizedSvgIcon';

export default function AdelaidePestSolutions() {
  const [showAllPests, setShowAllPests] = useState(false);
  const [showAllIndustries, setShowAllIndustries] = useState(false);

  // Pest types data (matching home page)
  const pestTypes = [
    { name: 'Termites', scientificName: 'Isoptera', icon: '/termites.svg', href: '/residential/termites' },
    { name: 'Wasps', scientificName: 'Vespidae', icon: '/wasps.svg', href: '/residential/wasps' },
    { name: 'Cockroaches', scientificName: 'Blattodea', icon: '/cockroaches.svg', href: '/residential/cockroaches' },
    { name: 'Mice & Rats', scientificName: 'Muridae', icon: '/mice.svg', href: '/residential/rats-mice' },
    { name: 'Spiders', scientificName: 'Araneae', icon: '/spiders.svg', href: '/residential/spiders' },
    { name: 'Possum', scientificName: 'Phalangeridae', icon: '/possum.svg', href: '/residential/possums' },
    { name: 'Ants', scientificName: 'Formicidae', icon: '/ants.svg', href: '/residential/ants' },
    { name: 'Bed bugs', scientificName: 'Cimex lectularius', icon: '/bug.svg', href: '/residential/bed-bugs' },
    { name: 'Fleas', scientificName: 'Siphonaptera', icon: '/fleas.svg', href: '/residential/fleas' },
    { name: 'Mosquitoes', scientificName: 'Culicidae', icon: '/mosquitoes.svg', href: '/residential/mosquitoes' },
    { name: 'Flies', scientificName: 'Diptera', icon: '/flies.svg', href: '/residential/flies' },
    { name: 'Moths', scientificName: 'Lepidoptera', icon: '/moths.svg', href: '/residential/moths' },
    { name: 'Rodents', scientificName: 'Rodentia', icon: '/mice.svg', href: '/residential/rodents' },
    { name: 'Silverfish', scientificName: 'Lepisma saccharina', icon: '/silverfish.svg', href: '/residential/silverfish' },
    { name: 'Bird Control', scientificName: 'Aves', icon: '/birds.svg', href: '/residential/bird-control' },
  ];

  // Industry types data (matching home page)
  const industryTypes = [
    { name: 'Restaurants', icon: '/restaurants.svg', href: '/commercial/restaurants' },
    { name: 'Schools', icon: '/schools.svg', href: '/commercial/schools' },
    { name: 'Hospitals', icon: '/hospitals.svg', href: '/commercial/healthcare' },
    { name: 'Child care', icon: '/childcare.svg', href: '/commercial/childcare' },
    { name: 'Food processing', icon: '/food-processing.svg', href: '/commercial/food-processing' },
    { name: 'Retail', icon: '/retail.svg', href: '/commercial/retail' },
    { name: 'Hotels', icon: '/hotels.svg', href: '/commercial/hotels' },
    { name: 'Offices', icon: '/offices.svg', href: '/commercial/offices' },
    { name: 'Warehouses', icon: '/warehouses.svg', href: '/commercial/logistics' },
    { name: 'IT Centers', icon: '/it.svg', href: '/commercial/it' },
    { name: 'Residential', icon: '/residential.svg', href: '/residential' },
    { name: 'Elderly Care Homes', icon: '/elderly.svg', href: '/commercial/elderly-care' },
    { name: 'Gym & Fitness', icon: '/gym.svg', href: '/commercial/fitness' },
    { name: 'Construction Sites', icon: '/construction.svg', href: '/commercial/construction' },
  ];

  // Function to display pests in a grid, 5 per row
  const renderPests = () => {
    const pestsToShow = showAllPests ? pestTypes : pestTypes.slice(0, 4);

    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
        {pestsToShow.map((pest, index) => (
          <Link
            href={pest.href}
            key={index}
            className="bg-white p-4 rounded-md shadow-sm flex flex-col items-center justify-center text-center hover:shadow-md transition-shadow h-44 w-full cursor-pointer"
          >
            <div className="w-24 h-24 relative mb-2 bg-transparent">
              <div className="w-24 h-24 flex items-center justify-center bg-transparent">
                <OptimizedSvgIcon
                  src={pest.icon}
                  alt={pest.name}
                  className="w-20 h-20 hover:scale-110 transition-transform duration-300 text-red-light hover:text-red-dark"
                  rootMargin="200px"
                />
              </div>
            </div>
            <p className="text-sm font-medium text-gray-700">{pest.name}</p>
            {pest.scientificName && (
              <p className="text-xs text-gray-500 mt-0.5">{pest.scientificName}</p>
            )}
          </Link>
        ))}

        {/* Show all/less pests button */}
        {!showAllPests ? (
          <div
            className="bg-red-light p-4 rounded-md shadow-sm flex flex-col items-center justify-center text-center cursor-pointer hover:bg-red-dark transition-colors h-44 w-full"
            onClick={() => setShowAllPests(true)}
          >
            <div className="w-24 h-24 relative mb-2 flex items-center justify-center">
              <svg className="w-12 h-12 text-white" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z" fill="currentColor" />
              </svg>
            </div>
            <p className="text-sm font-medium text-white">Show all pests</p>
          </div>
        ) : (
          <div
            className="bg-red-600 p-4 rounded-md shadow-sm flex flex-col items-center justify-center text-center cursor-pointer hover:bg-red-700 transition-colors h-44 w-full"
            onClick={() => setShowAllPests(false)}
          >
            <div className="w-24 h-24 relative mb-2 flex items-center justify-center">
              <svg className="w-12 h-12 text-white" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M19 13H5v-2h14v2z" fill="currentColor" />
              </svg>
            </div>
            <p className="text-sm font-medium text-white">Show less pests</p>
          </div>
        )}
      </div>
    );
  };

  // Function to display industries in a grid
  const renderIndustries = () => {
    const industriesToShow = showAllIndustries ? industryTypes : industryTypes.slice(0, 4);

    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
        {industriesToShow.map((industry, index) => (
          <Link
            href={industry.href}
            key={index}
            className="bg-white p-4 rounded-md shadow-sm flex flex-col items-center justify-center text-center hover:shadow-md transition-shadow h-44 w-full cursor-pointer"
          >
            <div className="w-24 h-24 relative mb-2 bg-transparent">
              <div className="w-24 h-24 flex items-center justify-center bg-transparent">
                <OptimizedSvgIcon
                  src={industry.icon}
                  alt={industry.name}
                  className="w-20 h-20 hover:scale-110 transition-transform duration-300 text-primary hover:text-primary/80"
                  rootMargin="200px"
                />
              </div>
            </div>
            <p className="text-sm font-medium text-gray-700">{industry.name}</p>
          </Link>
        ))}

        {/* Show all/less industries button */}
        {!showAllIndustries ? (
          <div
            className="bg-primary p-4 rounded-md shadow-sm flex flex-col items-center justify-center text-center cursor-pointer hover:bg-primary/80 transition-colors h-44 w-full"
            onClick={() => setShowAllIndustries(true)}
          >
            <div className="w-24 h-24 relative mb-2 flex items-center justify-center">
              <svg className="w-12 h-12 text-white" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z" fill="currentColor" />
              </svg>
            </div>
            <p className="text-sm font-medium text-white">Show all industries</p>
          </div>
        ) : (
          <div
            className="bg-blue-600 p-4 rounded-md shadow-sm flex flex-col items-center justify-center text-center cursor-pointer hover:bg-blue-700 transition-colors h-44 w-full"
            onClick={() => setShowAllIndustries(false)}
          >
            <div className="w-24 h-24 relative mb-2 flex items-center justify-center">
              <svg className="w-12 h-12 text-white" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M19 13H5v-2h14v2z" fill="currentColor" />
              </svg>
            </div>
            <p className="text-sm font-medium text-white">Show less industries</p>
          </div>
        )}
      </div>
    );
  };

  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Specialized pest solutions */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-center mb-2 text-red-dark">Our Specialised Pest Solutions</h2>
          <p className="text-center text-gray-600 mb-8">
            T47 Pest Control delivers customized pest control solutions designed to effectively eliminate and prevent pest issues in your Adelaide home or business, ensuring a pest-free environment 24/7.
          </p>

          {renderPests()}
        </div>

        {/* Industry-tailored solutions */}
        <div>
          <h2 className="text-2xl font-bold text-center mb-2 text-primary">Industry-tailored pest control solutions</h2>
          <p className="text-center text-gray-600 mb-8">
            T47 Pest Control provides comprehensive pest management solutions across various Adelaide industries, using proven methods and industry-leading practices. Our experienced team delivers specialized pest control services that protect your staff, property, and reputation with reliable 24/7 service across all Adelaide locations.
          </p>

          {renderIndustries()}
        </div>
      </div>
    </section>
  );
}

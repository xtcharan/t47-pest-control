"use client";

import { useState } from 'react';

// Define the pest and industry types
interface PestType {
  name: string;
  icon: string;
}

interface IndustryType {
  name: string;
  icon: string;
}

export default function PestSolutions() {
  const [showAllPests, setShowAllPests] = useState(false);
  const [showAllIndustries, setShowAllIndustries] = useState(false);

  // Pest types data
  const pestTypes: PestType[] = [
    { name: 'Termites', icon: '/termites.svg' },
    { name: 'Wasps', icon: '/wasps.svg' },
    { name: 'Cockroaches', icon: '/cockroaches.svg' },
    { name: 'Mice & Rats', icon: '/mice.svg' },
    { name: 'Spiders', icon: '/spiders.svg' },
    { name: 'Possum', icon: '/possum.svg' },
    { name: 'Ants', icon: '/ants.svg' },
    { name: 'Bed bugs', icon: '/bug.svg' },
    { name: 'Fleas', icon: '/fleas.svg' },
    { name: 'Mosquitoes', icon: '/mosquitoes.svg' },
    { name: 'Flies', icon: '/flies.svg' },
    { name: 'Moths', icon: '/moths.svg' },
    { name: 'Silverfish', icon: '/silverfish.svg' },
    { name: 'Bird Control', icon: '/birds.svg' },
  ];

  // Industry types data
  const industryTypes: IndustryType[] = [
    { name: 'Restaurants', icon: '/restaurants.svg' },
    { name: 'Schools', icon: '/schools.svg' },
    { name: 'Hospitals', icon: '/hospitals.svg' },
    { name: 'Child care', icon: '/childcare.svg' },
    { name: 'Food processing', icon: '/food-processing.svg' },
    { name: 'Retail', icon: '/retail.svg' },
    { name: 'Hotels', icon: '/hotels.svg' },
    { name: 'Offices', icon: '/offices.svg' },
    { name: 'Warehouses', icon: '/warehouses.svg' },
    { name: 'IT Centers', icon: '/it.svg' },
    { name: 'Residential', icon: '/residential.svg' },
    { name: 'Elderly Care Homes', icon: '/elderly.svg' },
    { name: 'Gym & Fitness', icon: '/gym.svg' },
    { name: 'Construction Sites', icon: '/construction.svg' },
  ];

  // Function to display pests in a grid, 5 per row
  const renderPests = () => {
    const pestsToShow = showAllPests ? pestTypes : pestTypes.slice(0, 4);

    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
        {pestsToShow.map((pest, index) => (
          <div key={index} className="bg-white p-4 rounded-md shadow-sm flex flex-col items-center justify-center text-center hover:shadow-md transition-shadow h-40 w-full">
            <div className="w-24 h-24 relative mb-2">
              <div className="w-24 h-24 flex items-center justify-center">
                <img src={pest.icon} alt={pest.name} className="w-20 h-20 object-contain" />
              </div>
            </div>
            <p className="text-sm font-medium text-gray-700">{pest.name}</p>
          </div>
        ))}

        {/* Show all/less pests button */}
        {!showAllPests ? (
          <div
            className="bg-red-600 p-4 rounded-md shadow-sm flex flex-col items-center justify-center text-center cursor-pointer hover:bg-red-700 transition-colors h-40 w-full"
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
            className="bg-red-600 p-4 rounded-md shadow-sm flex flex-col items-center justify-center text-center cursor-pointer hover:bg-red-700 transition-colors h-40 w-full"
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
          <div key={index} className="bg-white p-4 rounded-md shadow-sm flex flex-col items-center justify-center text-center hover:shadow-md transition-shadow h-40 w-full">
            <div className="w-24 h-24 relative mb-2">
              <div className="w-24 h-24 flex items-center justify-center">
                <img src={industry.icon} alt={industry.name} className="w-20 h-20 object-contain" />
              </div>
            </div>
            <p className="text-sm font-medium text-gray-700">{industry.name}</p>
          </div>
        ))}

        {/* Show all/less industries button */}
        {!showAllIndustries ? (
          <div
            className="bg-gray-800 p-4 rounded-md shadow-sm flex flex-col items-center justify-center text-center cursor-pointer hover:bg-gray-900 transition-colors h-40 w-full"
            onClick={() => setShowAllIndustries(true)}
          >
            <div className="w-24 h-24 relative mb-2 flex items-center justify-center">
              <svg className="w-12 h-12 text-white" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z" fill="currentColor" />
              </svg>
            </div>
            <p className="text-sm font-medium text-white">Show all sectors</p>
          </div>
        ) : (
          <div
            className="bg-gray-800 p-4 rounded-md shadow-sm flex flex-col items-center justify-center text-center cursor-pointer hover:bg-gray-900 transition-colors h-40 w-full"
            onClick={() => setShowAllIndustries(false)}
          >
            <div className="w-24 h-24 relative mb-2 flex items-center justify-center">
              <svg className="w-12 h-12 text-white" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M19 13H5v-2h14v2z" fill="currentColor" />
              </svg>
            </div>
            <p className="text-sm font-medium text-white">Show less sectors</p>
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
          <h2 className="text-2xl font-bold text-center mb-2 text-red-600">Our Specialised Pest Solutions</h2>
          <p className="text-center text-gray-600 mb-8">
            T47 Pest Control delivers customized pest control solutions designed to effectively eliminate and prevent pest issues in your home or business, ensuring a pest-free environment 24/7.
          </p>

          {renderPests()}
        </div>

        {/* Industry-tailored solutions */}
        <div>
          <h2 className="text-2xl font-bold text-center mb-2 text-blue-600">Industry-tailored pest control solutions</h2>
          <p className="text-center text-gray-600 mb-8">
            T47 Pest Control provides comprehensive pest management solutions across various industries, using proven methods and industry-leading practices. Our experienced team delivers specialized pest control services that protect your staff, property, and reputation with reliable 24/7 service across all locations.
          </p>

          {renderIndustries()}
        </div>
      </div>
    </section>
  );
}





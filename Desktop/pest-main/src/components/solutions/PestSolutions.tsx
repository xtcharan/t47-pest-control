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
    { name: 'Bed bugs', icon: '/images/pests/bed-bugs.svg' },
    { name: 'Cockroaches', icon: '/images/pests/cockroaches.svg' },
    { name: 'Mice', icon: '/images/pests/mice.svg' },
    { name: 'Rats', icon: '/images/pests/rats.svg' },
    { name: 'Termites', icon: '/images/pests/termites.svg' },
    { name: 'Ants', icon: '/images/pests/ants.svg' },
    { name: 'Spiders', icon: '/images/pests/spiders.svg' },
    { name: 'Wasps', icon: '/images/pests/wasps.svg' },
    { name: 'Fleas', icon: '/images/pests/fleas.svg' },
    { name: 'Mosquitoes', icon: '/images/pests/mosquitoes.svg' },
    { name: 'Flies', icon: '/images/pests/flies.svg' },
    { name: 'Moths', icon: '/images/pests/moths.svg' },
    { name: 'Silverfish', icon: '/images/pests/silverfish.svg' },
    { name: 'Possums', icon: '/images/pests/possums.svg' },
    { name: 'Birds', icon: '/images/pests/birds.svg' },
  ];

  // Industry types data
  const industryTypes: IndustryType[] = [
    { name: 'Food processing', icon: '/images/industries/food-processing.svg' },
    { name: 'Education', icon: '/images/industries/education.svg' },
    { name: 'Healthcare', icon: '/images/industries/healthcare.svg' },
    { name: 'Hotels', icon: '/images/industries/hotels.svg' },
    { name: 'Retail', icon: '/images/industries/retail.svg' },
    { name: 'Restaurants', icon: '/images/industries/restaurants.svg' },
    { name: 'Offices', icon: '/images/industries/offices.svg' },
    { name: 'Warehouses', icon: '/images/industries/warehouses.svg' },
    { name: 'Manufacturing', icon: '/images/industries/manufacturing.svg' },
    { name: 'Residential', icon: '/images/industries/residential.svg' },
  ];

  // Function to display pests in a grid, 5 per row
  const renderPests = () => {
    const pestsToShow = showAllPests ? pestTypes : pestTypes.slice(0, 4);

    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
        {pestsToShow.map((pest, index) => (
          <div key={index} className="bg-white p-4 rounded-md shadow-sm flex flex-col items-center justify-center text-center hover:shadow-md transition-shadow">
            <div className="w-16 h-16 relative mb-2">
              <div className="w-16 h-16 flex items-center justify-center">
                <svg className="w-12 h-12 text-red-600" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  {pest.name === 'Bed bugs' && (
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-5-9c.83 0 1.5-.67 1.5-1.5S7.83 8 7 8s-1.5.67-1.5 1.5S6.17 11 7 11zm10 0c.83 0 1.5-.67 1.5-1.5S17.83 8 17 8s-1.5.67-1.5 1.5.67 1.5 1.5 1.5zM12 17.5c2.33 0 4.31-1.46 5.11-3.5H6.89c.8 2.04 2.78 3.5 5.11 3.5z" fill="currentColor" />
                  )}
                  {pest.name === 'Cockroaches' && (
                    <path d="M10.5 14.5c0 .83-.67 1.5-1.5 1.5s-1.5-.67-1.5-1.5.67-1.5 1.5-1.5 1.5.67 1.5 1.5zm3.5-1.5c-.83 0-1.5.67-1.5 1.5s.67 1.5 1.5 1.5 1.5-.67 1.5-1.5-.67-1.5-1.5-1.5zm5-8H5C3.9 5 3 5.9 3 7v10c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm-7 12c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5z" fill="currentColor" />
                  )}
                  {pest.name === 'Mice' && (
                    <path d="M13 3C9.23 3 6.19 5.95 6 9.66l-1.92 2.53c-.24.31 0 .81.42.81H6v3c0 1.1.9 2 2 2h1v3h7v-4.69c2.37-1.12 4-3.51 4-6.31 0-3.86-3.12-7-7-7zm0 13c-1.65 0-3-1.35-3-3s1.35-3 3-3 3 1.35 3 3-1.35 3-3 3z" fill="currentColor" />
                  )}
                  {pest.name === 'Rats' && (
                    <path d="M15.5 14c-1.25 0-2.45-.2-3.57-.57-.1-.03-.21-.05-.31-.05-.26 0-.51.1-.7.29l-1.83 1.83c-2.91-1.47-5.29-3.85-6.76-6.76l1.83-1.83c.28-.28.36-.67.25-1.02C4.01 4.77 3.8 3.57 3.8 2.32c0-.41-.34-.75-.75-.75H1c-.41 0-.75.34-.75.75 0 10.35 8.4 18.75 18.75 18.75.41 0 .75-.34.75-.75v-2.05c0-.41-.34-.75-.75-.75-1.25 0-2.45-.2-3.57-.57-.1-.03-.21-.05-.31-.05-.26 0-.51.1-.7.29l-1.83 1.83c-2.91-1.47-5.29-3.85-6.76-6.76l1.83-1.83c.28-.28.36-.67.25-1.02C7.01 9.77 6.8 8.57 6.8 7.32c0-.41-.34-.75-.75-.75H4c-.41 0-.75.34-.75.75 0 10.35 8.4 18.75 18.75 18.75.41 0 .75-.34.75-.75v-2.05c0-.41-.34-.75-.75-.75z" fill="currentColor" />
                  )}
                  {pest.name === 'Termites' && (
                    <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 14h-2v-2h2v2zm0-4h-2V7h2v6z" fill="currentColor" />
                  )}
                  {pest.name === 'Ants' && (
                    <path d="M12 8c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4zm8.94 3c-.46-4.17-3.77-7.48-7.94-7.94V1h-2v2.06C6.83 3.52 3.52 6.83 3.06 11H1v2h2.06c.46 4.17 3.77 7.48 7.94 7.94V23h2v-2.06c4.17-.46 7.48-3.77 7.94-7.94H23v-2h-2.06zM12 19c-3.87 0-7-3.13-7-7s3.13-7 7-7 7 3.13 7 7-3.13 7-7 7z" fill="currentColor" />
                  )}
                  {/* Default icon for other pests */}
                  {!['Bed bugs', 'Cockroaches', 'Mice', 'Rats', 'Termites', 'Ants'].includes(pest.name) && (
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-5-9c.83 0 1.5-.67 1.5-1.5S7.83 8 7 8s-1.5.67-1.5 1.5S6.17 11 7 11zm10 0c.83 0 1.5-.67 1.5-1.5S17.83 8 17 8s-1.5.67-1.5 1.5.67 1.5 1.5 1.5zM12 17.5c2.33 0 4.31-1.46 5.11-3.5H6.89c.8 2.04 2.78 3.5 5.11 3.5z" fill="currentColor" />
                  )}
                </svg>
              </div>
            </div>
            <p className="text-sm font-medium text-gray-700">{pest.name}</p>
          </div>
        ))}

        {/* Show all/less pests button */}
        {!showAllPests ? (
          <div
            className="bg-red-600 p-4 rounded-md shadow-sm flex flex-col items-center justify-center text-center cursor-pointer hover:bg-red-700 transition-colors"
            onClick={() => setShowAllPests(true)}
          >
            <div className="w-16 h-16 relative mb-2 flex items-center justify-center">
              <svg className="w-8 h-8 text-white" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z" fill="currentColor" />
              </svg>
            </div>
            <p className="text-sm font-medium text-white">Show all pests</p>
          </div>
        ) : (
          <div
            className="bg-red-600 p-4 rounded-md shadow-sm flex flex-col items-center justify-center text-center cursor-pointer hover:bg-red-700 transition-colors"
            onClick={() => setShowAllPests(false)}
          >
            <div className="w-16 h-16 relative mb-2 flex items-center justify-center">
              <svg className="w-8 h-8 text-white" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
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
          <div key={index} className="bg-white p-4 rounded-md shadow-sm flex flex-col items-center justify-center text-center hover:shadow-md transition-shadow">
            <div className="w-16 h-16 relative mb-2">
              <div className="w-16 h-16 flex items-center justify-center">
                <svg className="w-12 h-12 text-blue-600" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  {industry.name === 'Food processing' && (
                    <path d="M18 2H6c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 18H6V4h12v16zM8 6h8v2H8V6zm0 4h8v2H8v-2zm0 4h8v2H8v-2z" fill="currentColor" />
                  )}
                  {industry.name === 'Education' && (
                    <path d="M5 13.18v4L12 21l7-3.82v-4L12 17l-7-3.82zM12 3L1 9l11 6 9-4.91V17h2V9L12 3z" fill="currentColor" />
                  )}
                  {industry.name === 'Healthcare' && (
                    <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-8 14h-2v-4H5v-2h4V7h2v4h4v2h-4v4z" fill="currentColor" />
                  )}
                  {industry.name === 'Hotels' && (
                    <path d="M7 13c1.66 0 3-1.34 3-3S8.66 7 7 7s-3 1.34-3 3 1.34 3 3 3zm12-6h-8v7H3V5H1v15h2v-3h18v3h2v-9c0-2.21-1.79-4-4-4z" fill="currentColor" />
                  )}
                  {industry.name === 'Retail' && (
                    <path d="M18 6h-2c0-2.21-1.79-4-4-4S8 3.79 8 6H6c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2zm-8 4c0 .55-.45 1-1 1s-1-.45-1-1V8h2v2zm2-6c1.1 0 2 .9 2 2h-4c0-1.1.9-2 2-2zm4 6c0 .55-.45 1-1 1s-1-.45-1-1V8h2v2z" fill="currentColor" />
                  )}
                  {/* Default icon for other industries */}
                  {!['Food processing', 'Education', 'Healthcare', 'Hotels', 'Retail'].includes(industry.name) && (
                    <path d="M12 7V3H2v18h20V7H12zM6 19H4v-2h2v2zm0-4H4v-2h2v2zm0-4H4V9h2v2zm0-4H4V5h2v2zm4 12H8v-2h2v2zm0-4H8v-2h2v2zm0-4H8V9h2v2zm0-4H8V5h2v2zm10 12h-8v-2h2v-2h-2v-2h2v-2h-2V9h8v10zm-2-8h-2v2h2v-2zm0 4h-2v2h2v-2z" fill="currentColor" />
                  )}
                </svg>
              </div>
            </div>
            <p className="text-sm font-medium text-gray-700">{industry.name}</p>
          </div>
        ))}

        {/* Show all/less industries button */}
        {!showAllIndustries ? (
          <div
            className="bg-gray-800 p-4 rounded-md shadow-sm flex flex-col items-center justify-center text-center cursor-pointer hover:bg-gray-900 transition-colors"
            onClick={() => setShowAllIndustries(true)}
          >
            <div className="w-16 h-16 relative mb-2 flex items-center justify-center">
              <svg className="w-8 h-8 text-white" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z" fill="currentColor" />
              </svg>
            </div>
            <p className="text-sm font-medium text-white">Show all sectors</p>
          </div>
        ) : (
          <div
            className="bg-gray-800 p-4 rounded-md shadow-sm flex flex-col items-center justify-center text-center cursor-pointer hover:bg-gray-900 transition-colors"
            onClick={() => setShowAllIndustries(false)}
          >
            <div className="w-16 h-16 relative mb-2 flex items-center justify-center">
              <svg className="w-8 h-8 text-white" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
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




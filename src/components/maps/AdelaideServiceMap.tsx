"use client";

import React, { useState } from 'react';

interface ServiceArea {
  name: string;
  position: { x: number; y: number };
  description: string;
  services: string[];
}

const AdelaideServiceMap: React.FC = () => {
  const [selectedArea, setSelectedArea] = useState<ServiceArea | null>(null);

  // Adelaide service areas with approximate positions on a visual map
  const serviceAreas: ServiceArea[] = [
    {
      name: 'Adelaide CBD',
      position: { x: 50, y: 45 },
      description: 'Central business district and surrounding areas',
      services: ['Commercial pest control', 'Office buildings', 'Retail spaces']
    },
    {
      name: 'Glenelg',
      position: { x: 35, y: 55 },
      description: 'Coastal suburb and beachside areas',
      services: ['Residential pest control', 'Holiday rentals', 'Coastal properties']
    },
    {
      name: 'Elizabeth',
      position: { x: 55, y: 25 },
      description: 'Northern suburbs and industrial areas',
      services: ['Industrial pest control', 'Residential services', 'Warehouse facilities']
    },
    {
      name: 'Modbury',
      position: { x: 65, y: 35 },
      description: 'North-eastern suburbs',
      services: ['Residential pest control', 'Shopping centers', 'Schools']
    },
    {
      name: 'Morphett Vale',
      position: { x: 40, y: 70 },
      description: 'Southern suburbs',
      services: ['Residential pest control', 'Family homes', 'Local businesses']
    },
    {
      name: 'Salisbury',
      position: { x: 50, y: 20 },
      description: 'Northern Adelaide region',
      services: ['Residential pest control', 'Industrial facilities', 'Community centers']
    },
    {
      name: 'Gawler',
      position: { x: 60, y: 15 },
      description: 'Historic town north of Adelaide',
      services: ['Rural pest control', 'Heritage buildings', 'Agricultural properties']
    },
    {
      name: 'McLaren Vale',
      position: { x: 30, y: 75 },
      description: 'Wine region south of Adelaide',
      services: ['Vineyard pest control', 'Rural properties', 'Tourism facilities']
    }
  ];

  return (
    <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-200">
      <h3 className="text-2xl font-bold text-primary mb-6 text-center">
        Adelaide Service Areas
      </h3>
      
      {/* Visual Map Container */}
      <div className="relative bg-gradient-to-br from-blue-50 to-green-50 rounded-lg p-8 mb-6 min-h-[400px]">
        {/* Map Background */}
        <div className="absolute inset-0 rounded-lg overflow-hidden">
          <div className="w-full h-full bg-gradient-to-br from-blue-100/30 to-green-100/30"></div>
          {/* Decorative elements to represent Adelaide geography */}
          <div className="absolute bottom-0 left-0 w-full h-16 bg-gradient-to-t from-blue-200/40 to-transparent"></div>
          <div className="absolute top-1/4 right-1/4 w-32 h-32 bg-green-200/20 rounded-full blur-xl"></div>
          <div className="absolute bottom-1/3 left-1/3 w-24 h-24 bg-blue-200/20 rounded-full blur-xl"></div>
        </div>

        {/* Service Area Markers */}
        {serviceAreas.map((area, index) => (
          <div
            key={index}
            className="absolute transform -translate-x-1/2 -translate-y-1/2 cursor-pointer group"
            style={{
              left: `${area.position.x}%`,
              top: `${area.position.y}%`
            }}
            onClick={() => setSelectedArea(selectedArea?.name === area.name ? null : area)}
          >
            {/* Marker */}
            <div className="relative">
              <div className="w-4 h-4 bg-green-600 rounded-full border-2 border-white shadow-lg group-hover:scale-125 transition-transform duration-200 z-10 relative"></div>
              <div className="absolute inset-0 w-4 h-4 bg-green-400 rounded-full animate-ping opacity-75"></div>
            </div>
            
            {/* Area Label */}
            <div className="absolute top-6 left-1/2 transform -translate-x-1/2 bg-white px-2 py-1 rounded shadow-md text-xs font-medium text-gray-800 whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200 z-20">
              {area.name}
            </div>
          </div>
        ))}

        {/* Legend */}
        <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm rounded-lg p-3 shadow-md">
          <div className="flex items-center space-x-2 text-sm">
            <div className="w-3 h-3 bg-green-600 rounded-full"></div>
            <span className="text-gray-700 font-medium">Service Areas</span>
          </div>
          <p className="text-xs text-gray-600 mt-1">Click markers for details</p>
        </div>
      </div>

      {/* Selected Area Details */}
      {selectedArea && (
        <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-lg p-6 border border-green-200">
          <h4 className="text-xl font-bold text-primary mb-3">{selectedArea.name}</h4>
          <p className="text-gray-700 mb-4">{selectedArea.description}</p>
          <div>
            <h5 className="font-semibold text-gray-800 mb-2">Available Services:</h5>
            <ul className="space-y-1">
              {selectedArea.services.map((service, index) => (
                <li key={index} className="flex items-center text-sm text-gray-600">
                  <span className="text-green-600 mr-2">✓</span>
                  {service}
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}

      {/* Service Areas Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mt-6">
        {serviceAreas.map((area, index) => (
          <button
            key={index}
            onClick={() => setSelectedArea(selectedArea?.name === area.name ? null : area)}
            className={`p-3 rounded-lg text-sm font-medium transition-colors duration-200 ${
              selectedArea?.name === area.name
                ? 'bg-green-600 text-white'
                : 'bg-gray-100 text-gray-700 hover:bg-green-100 hover:text-green-800'
            }`}
          >
            {area.name}
          </button>
        ))}
      </div>

      {/* Contact Information */}
      <div className="mt-6 text-center p-4 bg-gray-50 rounded-lg">
        <p className="text-gray-700 mb-2">
          <strong>Serving all Adelaide metropolitan areas</strong>
        </p>
        <p className="text-sm text-gray-600 mb-3">
          Professional pest control services available across greater Adelaide
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <a
            href="tel:+61434300216"
            className="bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700 transition-colors font-medium"
          >
            📞 Call Adelaide: +61 434 300 216
          </a>
          <a
            href="mailto:adelaide@t47pestcontrol.com.au"
            className="border border-green-600 text-green-600 px-6 py-2 rounded-lg hover:bg-green-50 transition-colors font-medium"
          >
            ✉️ Email Adelaide Team
          </a>
        </div>
      </div>
    </div>
  );
};

export default AdelaideServiceMap;

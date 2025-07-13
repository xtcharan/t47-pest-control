"use client";

import { COMPANY_INFO } from '../lib/constants';

export default function ResidentialComplexPestControlContent() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <span className="inline-block px-3 py-1 bg-purple-100 text-purple-700 text-sm font-semibold rounded-full mb-3">
              MULTI-UNIT RESIDENTIAL PEST MANAGEMENT
            </span>
            <h2 className="text-4xl font-bold mb-4 text-gray-900">
              Why Choose Our <span className="text-purple-600">Residential Complex Pest Control</span> Services?
            </h2>
            <div className="w-24 h-1 bg-purple-600 mx-auto mb-6"></div>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Our specialized pest control services for apartment buildings, condominiums, and residential complexes are designed to protect tenant satisfaction, maintain property value, and ensure a clean, comfortable living environment.
            </p>
          </div>

          {/* Content blocks */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {/* Block 1 */}
            <div className="bg-gray-50 p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-start mb-4">
                <div className="bg-purple-100 p-3 rounded-full mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-purple-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Tenant Satisfaction Protection</h3>
                  <p className="text-gray-600">
                    Pest issues are one of the leading causes of tenant complaints and dissatisfaction in multi-unit residential properties. Our residential complex pest control services focus on creating a pest-free living environment that improves tenant satisfaction and retention. We implement comprehensive treatment programs that address current pest issues while preventing future infestations, helping you maintain positive tenant relationships and reduce turnover rates.
                  </p>
                </div>
              </div>
            </div>

            {/* Block 2 */}
            <div className="bg-gray-50 p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-start mb-4">
                <div className="bg-purple-100 p-3 rounded-full mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-purple-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Property Value Preservation</h3>
                  <p className="text-gray-600">
                    Pest infestations can cause significant damage to building structures, electrical systems, and aesthetic elements, potentially reducing property value and increasing maintenance costs. Our residential complex pest control services help preserve your property value by preventing pest-related damage and maintaining the overall condition of your building. We identify and address potential vulnerabilities before they lead to costly repairs, protecting your investment for the long term.
                  </p>
                </div>
              </div>
            </div>

            {/* Block 3 */}
            <div className="bg-gray-50 p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-start mb-4">
                <div className="bg-purple-100 p-3 rounded-full mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-purple-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Common Area Protection</h3>
                  <p className="text-gray-600">
                    Common areas in residential complexes, such as lobbies, hallways, laundry facilities, and recreational spaces, are particularly vulnerable to pest issues due to high traffic and multiple entry points. Our specialized treatments for these areas focus on creating protective barriers and implementing targeted applications that address specific pest pressures. We pay particular attention to waste management areas, utility rooms, and other high-risk zones to ensure comprehensive protection throughout your property.
                  </p>
                </div>
              </div>
            </div>

            {/* Block 4 */}
            <div className="bg-gray-50 p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-start mb-4">
                <div className="bg-purple-100 p-3 rounded-full mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-purple-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Minimal Disruption Service</h3>
                  <p className="text-gray-600">
                    We understand the importance of minimizing disruption to your tenants' daily lives. Our pest control services for residential complexes are designed to be completely non-disruptive, with treatments scheduled during optimal times and coordinated with property management. We use discreet application methods, provide clear communication about treatment schedules, and implement protocols that respect tenant privacy while effectively managing pest issues throughout your property.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* CTA section */}
          <div className="bg-gradient-to-r from-purple-500 to-purple-700 p-8 rounded-lg text-center text-white">
            <h3 className="text-2xl font-bold mb-4">Protect Your Residential Complex</h3>
            <p className="mb-6 max-w-2xl mx-auto">
              Don't let pest problems compromise tenant satisfaction or damage your property value. Our professional pest control services provide effective, comprehensive solutions tailored specifically for multi-unit residential environments.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a href="/contact" className="bg-white text-purple-700 hover:bg-gray-100 font-bold py-3 px-6 rounded-full transition-colors">
                Schedule Inspection
              </a>
              <a href={`tel:${COMPANY_INFO.phone}`} className="bg-transparent border-2 border-white hover:bg-white/10 text-white font-bold py-3 px-6 rounded-full transition-colors">
                Call Us Now
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

"use client";

import { COMPANY_INFO } from '../lib/constants';

export default function WarehousePestControlContent() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <span className="inline-block px-3 py-1 bg-orange-100 text-orange-700 text-sm font-semibold rounded-full mb-3">
              WAREHOUSE FACILITY PEST MANAGEMENT
            </span>
            <h2 className="text-4xl font-bold mb-4 text-gray-900">
              Why Choose Our <span className="text-orange-600">Warehouse Pest Control</span> Services?
            </h2>
            <div className="w-24 h-1 bg-orange-600 mx-auto mb-6"></div>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Our specialized pest control services for warehouses and distribution centers are designed to protect inventory integrity, maintain operational efficiency, and ensure supply chain continuity.
            </p>
          </div>

          {/* Content blocks */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {/* Block 1 */}
            <div className="bg-gray-50 p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-start mb-4">
                <div className="bg-orange-100 p-3 rounded-full mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-orange-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Inventory Protection</h3>
                  <p className="text-gray-600">
                    Pests can cause significant damage to stored products and inventory, leading to financial losses and potential supply chain disruptions. Our warehouse pest control services focus on protecting your valuable inventory from pest damage and contamination. We implement comprehensive monitoring and treatment strategies that identify and address potential problems early, safeguarding your products and maintaining their integrity throughout storage and distribution.
                  </p>
                </div>
              </div>
            </div>

            {/* Block 2 */}
            <div className="bg-gray-50 p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-start mb-4">
                <div className="bg-orange-100 p-3 rounded-full mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-orange-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Stored Product Pest Specialists</h3>
                  <p className="text-gray-600">
                    Warehouses are particularly vulnerable to stored product pests like beetles, weevils, and moths that can infest and damage inventory. Our technicians are specialists in identifying and eliminating these challenging pests. We use advanced monitoring techniques and targeted treatments specifically designed for stored product pests, along with preventative measures to protect your inventory from infestation and cross-contamination between product shipments.
                  </p>
                </div>
              </div>
            </div>

            {/* Block 3 */}
            <div className="bg-gray-50 p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-start mb-4">
                <div className="bg-orange-100 p-3 rounded-full mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-orange-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Comprehensive IPM Approach</h3>
                  <p className="text-gray-600">
                    Our Integrated Pest Management (IPM) approach for warehouse environments focuses on prevention, monitoring, and targeted treatments. We identify and seal entry points, eliminate harborage areas, and implement sanitation protocols. This comprehensive strategy reduces the need for chemical treatments while providing more effective long-term pest control for your warehouse facility, creating multiple layers of protection for storage areas, loading docks, and processing zones.
                  </p>
                </div>
              </div>
            </div>

            {/* Block 4 */}
            <div className="bg-gray-50 p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-start mb-4">
                <div className="bg-orange-100 p-3 rounded-full mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-orange-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Operational Efficiency</h3>
                  <p className="text-gray-600">
                    Pest problems in warehouses can significantly disrupt operations, leading to downtime, product recalls, and potential regulatory issues. Our warehouse pest control services are designed to maintain operational efficiency by preventing pest-related disruptions. We schedule treatments around your operational needs, implement protocols that minimize interference with daily activities, and provide rapid response services for urgent pest issues to keep your warehouse running smoothly.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* CTA section */}
          <div className="bg-gradient-to-r from-orange-500 to-orange-700 p-8 rounded-lg text-center text-white">
            <h3 className="text-2xl font-bold mb-4">Protect Your Warehouse Operations</h3>
            <p className="mb-6 max-w-2xl mx-auto">
              Don't let pest problems disrupt your operations or damage your inventory. Our professional pest control services provide effective, industrial-grade solutions tailored specifically for warehouse environments.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a href="/contact" className="bg-white text-orange-700 hover:bg-gray-100 font-bold py-3 px-6 rounded-full transition-colors">
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

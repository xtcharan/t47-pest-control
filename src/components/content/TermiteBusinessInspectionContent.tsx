"use client";

export default function TermiteBusinessInspectionContent() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <span className="inline-block px-3 py-1 bg-red-light/10 text-red-dark text-sm font-semibold rounded-full mb-3">
              COMMERCIAL TERMITE INSPECTIONS
            </span>
            <h2 className="text-4xl font-bold mb-4 text-gray-900">
              Why Choose Our <span className="text-red-dark">Business Inspection</span> Services?
            </h2>
            <div className="w-24 h-1 bg-red-light mx-auto mb-6"></div>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Protect your business assets with our specialized commercial termite inspection services. Minimize operational disruption while maximizing protection for your valuable commercial property.
            </p>
          </div>

          {/* Content blocks */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {/* Block 1 */}
            <div className="bg-gray-50 p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-start mb-4">
                <div className="bg-red-light/20 p-3 rounded-full mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-red-dark" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Minimal Business Disruption</h3>
                  <p className="text-gray-600">
                    Flexible scheduling and efficient inspection methods designed to minimize impact on your daily business operations.
                  </p>
                </div>
              </div>
            </div>

            {/* Block 2 */}
            <div className="bg-gray-50 p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-start mb-4">
                <div className="bg-secondary/20 p-3 rounded-full mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Asset Protection</h3>
                  <p className="text-gray-600">
                    Comprehensive protection for your valuable business assets, equipment, inventory, and structural investments.
                  </p>
                </div>
              </div>
            </div>

            {/* Block 3 */}
            <div className="bg-gray-50 p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-start mb-4">
                <div className="bg-secondary/20 p-3 rounded-full mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Compliance Assurance</h3>
                  <p className="text-gray-600">
                    Meet regulatory requirements and industry standards for commercial property maintenance and pest management.
                  </p>
                </div>
              </div>
            </div>

            {/* Block 4 */}
            <div className="bg-gray-50 p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-start mb-4">
                <div className="bg-secondary/20 p-3 rounded-full mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Professional Service</h3>
                  <p className="text-gray-600">
                    Experienced commercial specialists who understand business environments and professional service requirements.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Business protection statistics */}
          <div className="bg-gradient-to-r from-red-light/10 to-red-dark/10 p-8 rounded-lg mb-12">
            <h3 className="text-2xl font-bold text-center mb-8 text-gray-900">Commercial Property Statistics</h3>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div>
                <div className="text-3xl font-bold text-red-dark mb-2">$50,000+</div>
                <p className="text-gray-600">Average commercial termite damage cost</p>
              </div>
              <div>
                <div className="text-3xl font-bold text-red-dark mb-2">30%</div>
                <p className="text-gray-600">Of commercial buildings affected annually</p>
              </div>
              <div>
                <div className="text-3xl font-bold text-red-dark mb-2">6 Months</div>
                <p className="text-gray-600">Time for significant structural damage</p>
              </div>
            </div>
          </div>

          {/* Why businesses need specialized inspections */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-12">
            <div className="space-y-6">
              <h3 className="text-3xl font-bold text-gray-900">Why Businesses Need Specialized Termite Inspections</h3>

              <p className="text-gray-600">
                Commercial properties face unique termite risks due to their size, complexity, and operational requirements. Our business-focused services address:
              </p>

              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start">
                  <span className="text-red-dark mr-2">•</span>
                  <span><strong>Operational continuity</strong> - Minimize business disruption</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-dark mr-2">•</span>
                  <span><strong>Asset protection</strong> - Safeguard valuable equipment and inventory</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-dark mr-2">•</span>
                  <span><strong>Regulatory compliance</strong> - Meet industry standards</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-dark mr-2">•</span>
                  <span><strong>Risk management</strong> - Protect against liability issues</span>
                </li>
              </ul>
            </div>

            <div className="space-y-6">
              <p className="text-gray-600">
                Commercial buildings often have complex structures, multiple entry points, and conditions that can attract termites. Our specialists understand these challenges.
              </p>

              <p className="text-gray-600">
                We work around your business schedule, providing thorough inspections during off-hours or low-activity periods to minimize operational impact.
              </p>

              <p className="text-gray-600">
                <strong>High-risk commercial areas include:</strong> Loading docks, storage areas, basement levels, and areas with plumbing or HVAC systems.
              </p>
            </div>
          </div>

          {/* Commercial inspection features */}
          <div className="bg-gray-50 p-8 rounded-lg mb-12">
            <h3 className="text-2xl font-bold text-center mb-8 text-gray-900">Commercial Inspection Features</h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <h4 className="font-semibold text-gray-900">Business-Focused Approach</h4>
                <ul className="space-y-2 text-gray-600">
                  <li>• Flexible scheduling options</li>
                  <li>• Minimal operational disruption</li>
                  <li>• Professional service standards</li>
                  <li>• Confidentiality assurance</li>
                </ul>
              </div>
              <div className="space-y-4">
                <h4 className="font-semibold text-gray-900">Comprehensive Coverage</h4>
                <ul className="space-y-2 text-gray-600">
                  <li>• All commercial areas and structures</li>
                  <li>• Equipment and storage protection</li>
                  <li>• Compliance documentation</li>
                  <li>• Risk assessment reporting</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Industry-specific considerations */}
          <div className="bg-gradient-to-r from-gray-50 to-gray-100 p-8 rounded-lg mb-12">
            <h3 className="text-2xl font-bold text-center mb-8 text-gray-900">Industry-Specific Considerations</h3>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="bg-secondary/20 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">Offices</h4>
                <p className="text-gray-600 text-sm">Protect workspaces and equipment with minimal staff disruption</p>
              </div>
              <div className="text-center">
                <div className="bg-secondary/20 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                  </svg>
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">Warehouses</h4>
                <p className="text-gray-600 text-sm">Comprehensive coverage for large storage and distribution facilities</p>
              </div>
              <div className="text-center">
                <div className="bg-secondary/20 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M8 11v6h8v-6M8 11h8" />
                  </svg>
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">Retail</h4>
                <p className="text-gray-600 text-sm">Protect customer areas and inventory with discrete service</p>
              </div>
            </div>
          </div>

          {/* CTA section */}
          <div className="bg-gradient-to-r from-red-light to-red-dark p-8 rounded-lg text-center text-white">
            <h3 className="text-2xl font-bold mb-4">Protect Your Business Assets Today</h3>
            <p className="mb-6 max-w-2xl mx-auto">
              Don't let termites threaten your business operations. Our specialized commercial inspection services provide the protection your business needs.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a href="/contact" className="bg-white text-red-dark hover:bg-gray-100 font-bold py-3 px-8 rounded-full transition-all duration-300 transform hover:scale-105">
                Protect Your Business
              </a>
              <a href="/contact" className="bg-transparent border-2 border-white hover:bg-white/10 text-white font-bold py-3 px-8 rounded-full transition-all duration-300">
                Get Quote
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

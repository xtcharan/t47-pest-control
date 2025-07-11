"use client";

export default function TermiteHomesInspectionContent() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <span className="inline-block px-3 py-1 bg-green-light/10 text-green-dark text-sm font-semibold rounded-full mb-3">
              RESIDENTIAL TERMITE INSPECTIONS
            </span>
            <h2 className="text-4xl font-bold mb-4 text-gray-900">
              Why Choose Our <span className="text-green-dark">Home Inspection</span> Services?
            </h2>
            <div className="w-24 h-1 bg-green-light mx-auto mb-6"></div>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Protect your family's most valuable asset with our specialized residential termite inspection services. Family-safe methods, comprehensive coverage, and detailed reporting.
            </p>
          </div>

          {/* Content blocks */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {/* Block 1 */}
            <div className="bg-gray-50 p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-start mb-4">
                <div className="bg-green-light/20 p-3 rounded-full mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-dark" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Family-Safe Methods</h3>
                  <p className="text-gray-600">
                    Our inspection methods are completely safe for children and pets, using non-invasive detection technology and eco-friendly approaches.
                  </p>
                </div>
              </div>
            </div>

            {/* Block 2 */}
            <div className="bg-gray-50 p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-start mb-4">
                <div className="bg-primary/20 p-3 rounded-full mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Comprehensive Home Coverage</h3>
                  <p className="text-gray-600">
                    Complete inspection of all living areas, storage spaces, roof voids, subfloors, and outdoor structures to ensure total protection.
                  </p>
                </div>
              </div>
            </div>

            {/* Block 3 */}
            <div className="bg-gray-50 p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-start mb-4">
                <div className="bg-primary/20 p-3 rounded-full mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Eco-Friendly Approach</h3>
                  <p className="text-gray-600">
                    Environmentally responsible inspection methods that protect your family's health and the surrounding ecosystem.
                  </p>
                </div>
              </div>
            </div>

            {/* Block 4 */}
            <div className="bg-gray-50 p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-start mb-4">
                <div className="bg-primary/20 p-3 rounded-full mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Free Follow-up Appointments</h3>
                  <p className="text-gray-600">
                    Complimentary follow-up visits to monitor treatment progress and ensure your family's continued protection.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Home protection statistics */}
          <div className="bg-gradient-to-r from-green-light/10 to-green-dark/10 p-8 rounded-lg mb-12">
            <h3 className="text-2xl font-bold text-center mb-8 text-gray-900">Home Protection Statistics</h3>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div>
                <div className="text-3xl font-bold text-green-dark mb-2">1 in 3</div>
                <p className="text-gray-600">Australian homes will be affected by termites</p>
              </div>
              <div>
                <div className="text-3xl font-bold text-green-dark mb-2">$20,000+</div>
                <p className="text-gray-600">Average cost of termite damage to homes</p>
              </div>
              <div>
                <div className="text-3xl font-bold text-green-dark mb-2">24/7</div>
                <p className="text-gray-600">Hours termites work to damage your home</p>
              </div>
            </div>
          </div>

          {/* Why homes need special attention */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-12">
            <div className="space-y-6">
              <h3 className="text-3xl font-bold text-gray-900">Why Homes Need Specialized Termite Inspections</h3>

              <p className="text-gray-600">
                Residential properties have unique characteristics that require specialized inspection approaches. Our home-focused services address:
              </p>

              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start">
                  <span className="text-green-dark mr-2">•</span>
                  <span><strong>Family safety</strong> - Child and pet-safe inspection methods</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-dark mr-2">•</span>
                  <span><strong>Living space protection</strong> - Minimal disruption to daily routines</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-dark mr-2">•</span>
                  <span><strong>Structural integrity</strong> - Focus on load-bearing elements</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-dark mr-2">•</span>
                  <span><strong>Moisture management</strong> - Identify conducive conditions</span>
                </li>
              </ul>
            </div>

            <div className="space-y-6">
              <p className="text-gray-600">
                Homes are particularly vulnerable to termite attack due to their construction materials, landscaping, and daily activities that can create conducive conditions.
              </p>

              <p className="text-gray-600">
                Our residential specialists understand the unique challenges of home inspections and use family-friendly methods that ensure thorough coverage without compromising safety.
              </p>

              <p className="text-gray-600">
                <strong>Special focus areas include:</strong> Kitchen and bathroom moisture sources, garden beds near foundations, timber decking, and storage areas.
              </p>
            </div>
          </div>

          {/* Home inspection features */}
          <div className="bg-gray-50 p-8 rounded-lg mb-12">
            <h3 className="text-2xl font-bold text-center mb-8 text-gray-900">Residential Inspection Features</h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <h4 className="font-semibold text-gray-900">Family-Focused Approach</h4>
                <ul className="space-y-2 text-gray-600">
                  <li>• Non-toxic inspection methods</li>
                  <li>• Child and pet safety protocols</li>
                  <li>• Minimal household disruption</li>
                  <li>• Flexible scheduling options</li>
                </ul>
              </div>
              <div className="space-y-4">
                <h4 className="font-semibold text-gray-900">Comprehensive Coverage</h4>
                <ul className="space-y-2 text-gray-600">
                  <li>• All living and storage areas</li>
                  <li>• Outdoor structures and landscaping</li>
                  <li>• Moisture source identification</li>
                  <li>• Prevention recommendations</li>
                </ul>
              </div>
            </div>
          </div>

          {/* CTA section */}
          <div className="bg-gradient-to-r from-green-light to-green-dark p-8 rounded-lg text-center text-white">
            <h3 className="text-2xl font-bold mb-4">Protect Your Family Home Today</h3>
            <p className="mb-6 max-w-2xl mx-auto">
              Your home is your family's sanctuary. Ensure it stays protected with our specialized residential termite inspection services.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a href="/contact" className="bg-white text-green-dark hover:bg-gray-100 font-bold py-3 px-8 rounded-full transition-all duration-300 transform hover:scale-105">
                Protect Your Home
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

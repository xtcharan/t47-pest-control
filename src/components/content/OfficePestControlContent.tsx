"use client";

export default function OfficePestControlContent() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <span className="inline-block px-3 py-1 bg-indigo-100 text-indigo-700 text-sm font-semibold rounded-full mb-3">
              OFFICE BUILDING PEST MANAGEMENT
            </span>
            <h2 className="text-4xl font-bold mb-4 text-gray-900">
              Why Choose Our <span className="text-indigo-600">Office Pest Control</span> Services?
            </h2>
            <div className="w-24 h-1 bg-indigo-600 mx-auto mb-6"></div>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Our specialized pest control services for office buildings and workspaces are designed to protect employee productivity, maintain workplace health, and ensure business continuity.
            </p>
          </div>

          {/* Content blocks */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {/* Block 1 */}
            <div className="bg-gray-50 p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-start mb-4">
                <div className="bg-indigo-100 p-3 rounded-full mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-indigo-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 11V7a4 4 0 118 0m-4 8v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Discreet, Non-Disruptive Service</h3>
                  <p className="text-gray-600">
                    We understand the importance of maintaining a professional work environment. Our office pest control services are designed to be completely discreet, with treatments scheduled during off-hours, evenings, or weekends to ensure zero disruption to your business operations. Our technicians arrive in unmarked vehicles when requested and use unobtrusive equipment and methods that won't alarm your employees or clients.
                  </p>
                </div>
              </div>
            </div>

            {/* Block 2 */}
            <div className="bg-gray-50 p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-start mb-4">
                <div className="bg-indigo-100 p-3 rounded-full mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-indigo-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Employee Health Protection</h3>
                  <p className="text-gray-600">
                    Pest problems in offices can impact employee health through allergens, asthma triggers, and stress. Our office pest control services focus on creating a healthy work environment by eliminating pests that can affect air quality and employee wellbeing. We use low-toxicity products and application methods that prioritize human safety while effectively controlling pest populations.
                  </p>
                </div>
              </div>
            </div>

            {/* Block 3 */}
            <div className="bg-gray-50 p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-start mb-4">
                <div className="bg-indigo-100 p-3 rounded-full mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-indigo-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Comprehensive IPM Approach</h3>
                  <p className="text-gray-600">
                    Our Integrated Pest Management (IPM) approach for office environments focuses on prevention, monitoring, and targeted treatments. We identify and seal entry points, eliminate harborage areas, and implement sanitation protocols. This comprehensive strategy reduces the need for chemical treatments while providing more effective long-term pest control for your office building, creating multiple layers of protection for workspaces, break rooms, and common areas.
                  </p>
                </div>
              </div>
            </div>

            {/* Block 4 */}
            <div className="bg-gray-50 p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-start mb-4">
                <div className="bg-indigo-100 p-3 rounded-full mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-indigo-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Productivity Protection</h3>
                  <p className="text-gray-600">
                    Pest sightings in the workplace can significantly disrupt productivity and employee morale. Our office pest control services focus on preventing pest issues before they impact your business operations. We implement proactive monitoring and treatment strategies that identify and address potential problems early, protecting your workplace productivity and maintaining a professional environment for your employees and clients.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* CTA section */}
          <div className="bg-gradient-to-r from-indigo-500 to-indigo-700 p-8 rounded-lg text-center text-white">
            <h3 className="text-2xl font-bold mb-4">Protect Your Office Environment</h3>
            <p className="mb-6 max-w-2xl mx-auto">
              Don't let pest problems disrupt your business operations or affect employee health. Our professional pest control services provide effective, discreet solutions tailored specifically for office environments.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a href="/contact" className="bg-white text-indigo-700 hover:bg-gray-100 font-bold py-3 px-6 rounded-full transition-colors">
                Schedule Inspection
              </a>
              <a href="tel:+61434300216" className="bg-transparent border-2 border-white hover:bg-white/10 text-white font-bold py-3 px-6 rounded-full transition-colors">
                Call Us Now
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

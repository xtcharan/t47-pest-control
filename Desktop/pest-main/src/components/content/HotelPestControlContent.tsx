"use client";

export default function HotelPestControlContent() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <span className="inline-block px-3 py-1 bg-amber-100 text-amber-700 text-sm font-semibold rounded-full mb-3">
              HOSPITALITY FACILITY PEST MANAGEMENT
            </span>
            <h2 className="text-4xl font-bold mb-4 text-gray-900">
              Why Choose Our <span className="text-amber-600">Hotel Pest Control</span> Services?
            </h2>
            <div className="w-24 h-1 bg-amber-600 mx-auto mb-6"></div>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Our specialized pest control services for hotels and hospitality facilities are designed to protect guest experience, maintain your reputation, and ensure business continuity.
            </p>
          </div>

          {/* Content blocks */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {/* Block 1 */}
            <div className="bg-gray-50 p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-start mb-4">
                <div className="bg-amber-100 p-3 rounded-full mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-amber-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 11V7a4 4 0 118 0m-4 8v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Discreet, Guest-Friendly Service</h3>
                  <p className="text-gray-600">
                    We understand the importance of maintaining a positive guest experience. Our hotel pest control services are designed to be completely discreet, with treatments scheduled during low-occupancy periods or in coordination with housekeeping schedules. Our technicians arrive in unmarked vehicles when requested and use unobtrusive equipment and methods that won't alarm your guests or disrupt their stay.
                  </p>
                </div>
              </div>
            </div>

            {/* Block 2 */}
            <div className="bg-gray-50 p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-start mb-4">
                <div className="bg-amber-100 p-3 rounded-full mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-amber-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Bed Bug Specialists</h3>
                  <p className="text-gray-600">
                    Bed bugs are one of the most significant pest threats to hotels, with the potential to severely damage your reputation through negative reviews. Our technicians are specialists in bed bug detection and elimination, using the latest technologies including thermal treatments, targeted chemical applications, and preventative measures. We also offer staff training on early detection and proactive monitoring programs to prevent infestations before they occur.
                  </p>
                </div>
              </div>
            </div>

            {/* Block 3 */}
            <div className="bg-gray-50 p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-start mb-4">
                <div className="bg-amber-100 p-3 rounded-full mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-amber-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Comprehensive IPM Approach</h3>
                  <p className="text-gray-600">
                    Our Integrated Pest Management (IPM) approach for hotels focuses on prevention, monitoring, and targeted treatments. We identify and seal entry points, eliminate harborage areas, and implement sanitation protocols. This comprehensive strategy reduces the need for chemical treatments while providing more effective long-term pest control for your hotel, creating multiple layers of protection for guest rooms, dining areas, kitchens, and public spaces.
                  </p>
                </div>
              </div>
            </div>

            {/* Block 4 */}
            <div className="bg-gray-50 p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-start mb-4">
                <div className="bg-amber-100 p-3 rounded-full mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-amber-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Reputation Protection</h3>
                  <p className="text-gray-600">
                    In the age of online reviews, a single pest sighting can severely damage your hotel's reputation. Our hotel pest control services focus on preventing pest issues before they impact guests. We implement proactive monitoring and treatment strategies that identify and address potential problems early, protecting your online ratings and maintaining guest confidence in your establishment. Our emergency response services ensure that any issues that do arise are addressed immediately.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* CTA section */}
          <div className="bg-gradient-to-r from-amber-500 to-amber-700 p-8 rounded-lg text-center text-white">
            <h3 className="text-2xl font-bold mb-4">Protect Your Hotel's Reputation</h3>
            <p className="mb-6 max-w-2xl mx-auto">
              Don't let pest problems damage your reputation or disrupt your guests' experience. Our professional pest control services provide effective, discreet solutions tailored specifically for hospitality environments.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a href="/contact" className="bg-white text-amber-700 hover:bg-gray-100 font-bold py-3 px-6 rounded-full transition-colors">
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

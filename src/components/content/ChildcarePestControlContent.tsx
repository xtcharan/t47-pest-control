"use client";

export default function ChildcarePestControlContent() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <span className="inline-block px-3 py-1 bg-pink-100 text-pink-700 text-sm font-semibold rounded-full mb-3">
              CHILDCARE FACILITY PEST MANAGEMENT
            </span>
            <h2 className="text-4xl font-bold mb-4 text-gray-900">
              Why Choose Our <span className="text-pink-600">Child Care Pest Control</span> Services?
            </h2>
            <div className="w-24 h-1 bg-pink-600 mx-auto mb-6"></div>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Our specialized pest control services for daycare centers and childcare facilities are designed to create safe, healthy environments for children while ensuring regulatory compliance.
            </p>
          </div>

          {/* Content blocks */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {/* Block 1 */}
            <div className="bg-gray-50 p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-start mb-4">
                <div className="bg-pink-100 p-3 rounded-full mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-pink-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Child-Safe Solutions</h3>
                  <p className="text-gray-600">
                    Our childcare pest control services prioritize the safety of children above all else. We use only non-toxic and low-toxicity products specifically formulated for use around children. Our treatments are applied using methods that minimize exposure and ensure quick, safe re-entry to treated areas. All our products and methods comply with strict safety guidelines for childcare environments.
                  </p>
                </div>
              </div>
            </div>

            {/* Block 2 */}
            <div className="bg-gray-50 p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-start mb-4">
                <div className="bg-pink-100 p-3 rounded-full mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-pink-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Minimal Disruption</h3>
                  <p className="text-gray-600">
                    We understand the importance of uninterrupted childcare services. Our technicians work after hours, during weekends, or scheduled closures to ensure pest control activities never interfere with your daily operations. Our treatments are designed to be quick-drying and low-odor, allowing for safe re-entry when children return to the facility.
                  </p>
                </div>
              </div>
            </div>

            {/* Block 3 */}
            <div className="bg-gray-50 p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-start mb-4">
                <div className="bg-pink-100 p-3 rounded-full mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-pink-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Comprehensive IPM Approach</h3>
                  <p className="text-gray-600">
                    Our Integrated Pest Management (IPM) approach for childcare facilities focuses on prevention, monitoring, and targeted treatments. We identify and seal entry points, eliminate harborage areas, and implement sanitation protocols. This comprehensive strategy reduces the need for chemical treatments while providing more effective long-term pest control for your childcare facility.
                  </p>
                </div>
              </div>
            </div>

            {/* Block 4 */}
            <div className="bg-gray-50 p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-start mb-4">
                <div className="bg-pink-100 p-3 rounded-full mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-pink-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Regulatory Compliance</h3>
                  <p className="text-gray-600">
                    Our childcare pest control services ensure compliance with all local, state, and federal regulations regarding pest management in childcare settings. We maintain detailed documentation of all services performed, including treatment records and monitoring reports, to help you meet regulatory requirements and pass inspections with confidence.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* CTA section */}
          <div className="bg-gradient-to-r from-pink-500 to-pink-700 p-8 rounded-lg text-center text-white">
            <h3 className="text-2xl font-bold mb-4">Create a Healthier Environment for Children</h3>
            <p className="mb-6 max-w-2xl mx-auto">
              Don't let pest problems compromise children's health and safety. Our professional pest control services provide effective, safe solutions tailored specifically for childcare facilities.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a href="/contact" className="bg-white text-pink-700 hover:bg-gray-100 font-bold py-3 px-6 rounded-full transition-colors">
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

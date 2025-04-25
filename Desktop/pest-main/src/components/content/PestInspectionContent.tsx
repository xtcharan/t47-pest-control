"use client";

export default function PestInspectionContent() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <span className="inline-block px-3 py-1 bg-green-light/10 text-green-dark text-sm font-semibold rounded-full mb-3">
              PROFESSIONAL PEST INSPECTIONS
            </span>
            <h2 className="text-4xl font-bold mb-4 text-gray-900">
              Why Choose Our <span className="text-green-dark">Pest Inspection</span> Services?
            </h2>
            <div className="w-24 h-1 bg-green-light mx-auto mb-6"></div>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Our comprehensive pest inspection services are designed to identify existing pest problems and potential vulnerabilities in your home or business.
            </p>
          </div>

          {/* Content blocks */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {/* Block 1 */}
            <div className="bg-gray-50 p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-start mb-4">
                <div className="bg-green-light/20 p-3 rounded-full mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-dark" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Thorough Inspection</h3>
                  <p className="text-gray-600">
                    Our certified inspectors conduct a comprehensive examination of your property, checking all potential entry points, nesting areas, and signs of pest activity.
                  </p>
                </div>
              </div>
            </div>

            {/* Block 2 */}
            <div className="bg-gray-50 p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-start mb-4">
                <div className="bg-green-light/20 p-3 rounded-full mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-dark" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Detailed Reports</h3>
                  <p className="text-gray-600">
                    After the inspection, you'll receive a comprehensive report detailing our findings, including pest activity, damage assessment, and recommended treatment options.
                  </p>
                </div>
              </div>
            </div>

            {/* Block 3 */}
            <div className="bg-gray-50 p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-start mb-4">
                <div className="bg-green-light/20 p-3 rounded-full mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-dark" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Customized Solutions</h3>
                  <p className="text-gray-600">
                    Based on our inspection findings, we'll provide tailored treatment recommendations specific to your property's needs and the types of pests identified.
                  </p>
                </div>
              </div>
            </div>

            {/* Block 4 */}
            <div className="bg-gray-50 p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-start mb-4">
                <div className="bg-green-light/20 p-3 rounded-full mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-dark" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Preventative Advice</h3>
                  <p className="text-gray-600">
                    We don't just identify current problems – we provide expert advice on preventing future pest issues, helping you protect your property long-term.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Process section */}
          <div className="bg-gray-50 p-8 rounded-lg shadow-sm mb-12">
            <h3 className="text-2xl font-bold mb-6 text-center text-gray-900">Our Inspection Process</h3>
            
            <div className="space-y-6">
              {/* Step 1 */}
              <div className="flex">
                <div className="flex-shrink-0 flex items-center justify-center w-10 h-10 rounded-full bg-green-light text-white font-bold text-lg mr-4">
                  1
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-1">Initial Assessment</h4>
                  <p className="text-gray-600">
                    We begin with a thorough examination of your property's exterior, identifying potential entry points and signs of pest activity.
                  </p>
                </div>
              </div>
              
              {/* Step 2 */}
              <div className="flex">
                <div className="flex-shrink-0 flex items-center justify-center w-10 h-10 rounded-full bg-green-light text-white font-bold text-lg mr-4">
                  2
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-1">Interior Inspection</h4>
                  <p className="text-gray-600">
                    Our inspectors carefully check all interior spaces, including attics, basements, crawl spaces, and other areas where pests commonly hide.
                  </p>
                </div>
              </div>
              
              {/* Step 3 */}
              <div className="flex">
                <div className="flex-shrink-0 flex items-center justify-center w-10 h-10 rounded-full bg-green-light text-white font-bold text-lg mr-4">
                  3
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-1">Documentation</h4>
                  <p className="text-gray-600">
                    We document all findings with detailed notes and photographs to provide a comprehensive record of any pest issues or damage.
                  </p>
                </div>
              </div>
              
              {/* Step 4 */}
              <div className="flex">
                <div className="flex-shrink-0 flex items-center justify-center w-10 h-10 rounded-full bg-green-light text-white font-bold text-lg mr-4">
                  4
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-1">Report & Recommendations</h4>
                  <p className="text-gray-600">
                    We provide a detailed report of our findings along with customized treatment recommendations and preventative measures.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* CTA section */}
          <div className="bg-gradient-to-r from-green-light to-green-dark p-8 rounded-lg text-center text-white">
            <h3 className="text-2xl font-bold mb-4">Ready to Schedule Your Pest Inspection?</h3>
            <p className="mb-6 max-w-2xl mx-auto">
              Don't wait until pest problems become severe. Our professional inspection services can identify issues early and save you time and money.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a href="/contact" className="bg-white text-green-dark hover:bg-gray-100 font-bold py-3 px-6 rounded-full transition-colors">
                Book an Inspection
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

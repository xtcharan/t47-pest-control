"use client";

export default function TermiteInspectionContent() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <span className="inline-block px-3 py-1 bg-green-light/10 text-green-dark text-sm font-semibold rounded-full mb-3">
              PROFESSIONAL TERMITE INSPECTIONS
            </span>
            <h2 className="text-4xl font-bold mb-4 text-gray-900">
              Why Choose Our <span className="text-green-dark">Termite Inspection</span> Services?
            </h2>
            <div className="w-24 h-1 bg-green-light mx-auto mb-6"></div>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Our comprehensive termite inspection services are designed to identify existing termite activity, damage, and conditions that make your property vulnerable to termite attack.
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
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Advanced Detection Technology</h3>
                  <p className="text-gray-600">
                    Our inspectors use thermal imaging cameras, moisture meters, and acoustic detection devices to identify termite activity that would be missed in a visual-only inspection.
                  </p>
                </div>
              </div>
            </div>

            {/* Block 2 */}
            <div className="bg-gray-50 p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-start mb-4">
                <div className="bg-green-light/20 p-3 rounded-full mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-dark" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Licensed & Experienced Inspectors</h3>
                  <p className="text-gray-600">
                    All our termite inspectors are fully licensed, insured, and have extensive experience identifying the subtle signs of termite activity specific to Australian termite species.
                  </p>
                </div>
              </div>
            </div>

            {/* Block 3 */}
            <div className="bg-gray-50 p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-start mb-4">
                <div className="bg-green-light/20 p-3 rounded-full mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-dark" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Comprehensive Reports</h3>
                  <p className="text-gray-600">
                    You'll receive a detailed report with photos documenting our findings, including any termite activity, damage, conducive conditions, and specific recommendations for treatment or prevention.
                  </p>
                </div>
              </div>
            </div>

            {/* Block 4 */}
            <div className="bg-gray-50 p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-start mb-4">
                <div className="bg-green-light/20 p-3 rounded-full mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-dark" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Prevention Recommendations</h3>
                  <p className="text-gray-600">
                    Beyond identifying existing problems, we provide expert advice on how to make your property less attractive to termites and recommend appropriate termite management systems.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* The Importance of Regular Termite Inspections */}
          <div className="bg-gray-50 p-8 rounded-lg shadow-sm mb-12">
            <h3 className="text-2xl font-bold mb-6 text-center text-gray-900">The Importance of Regular Termite Inspections</h3>
            
            <div className="space-y-6">
              <p className="text-gray-600">
                Termites cause over $1.5 billion in property damage annually in Australia, with the average repair cost for termite damage exceeding $10,000. Most home insurance policies <strong>do not cover termite damage</strong>, making regular inspections your best financial protection.
              </p>
              
              <p className="text-gray-600">
                Australian Standard AS3660.2 recommends annual termite inspections for all properties. In high-risk areas or properties with previous termite activity, inspections every 6-9 months may be advisable.
              </p>
              
              <p className="text-gray-600">
                Regular inspections are crucial because:
              </p>
              
              <ul className="list-disc pl-6 text-gray-600 space-y-2">
                <li>Termites can cause significant damage in just 3-6 months</li>
                <li>Early detection dramatically reduces repair costs</li>
                <li>Most insurance policies don't cover termite damage</li>
                <li>Inspections help identify and address conducive conditions before termites establish</li>
              </ul>
            </div>
          </div>

          {/* CTA section */}
          <div className="bg-gradient-to-r from-green-light to-green-dark p-8 rounded-lg text-center text-white">
            <h3 className="text-2xl font-bold mb-4">Protect Your Property from Termite Damage</h3>
            <p className="mb-6 max-w-2xl mx-auto">
              Don't wait until termites cause thousands in structural damage. Our professional termite inspection services provide early detection and peace of mind.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a href="/contact" className="bg-white text-green-dark hover:bg-gray-100 font-bold py-3 px-6 rounded-full transition-colors">
                Book an Inspection
              </a>
              <a href="/contact" className="bg-transparent border-2 border-white hover:bg-white/10 text-white font-bold py-3 px-6 rounded-full transition-colors">
                Request a Quote
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

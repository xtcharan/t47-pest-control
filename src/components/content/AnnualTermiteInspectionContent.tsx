"use client";

export default function AnnualTermiteInspectionContent() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <span className="inline-block px-3 py-1 bg-green-light/10 text-green-dark text-sm font-semibold rounded-full mb-3">
              ANNUAL TERMITE INSPECTIONS
            </span>
            <h2 className="text-4xl font-bold mb-4 text-gray-900">
              Why Choose Our <span className="text-green-dark">Annual Inspection</span> Program?
            </h2>
            <div className="w-24 h-1 bg-green-light mx-auto mb-6"></div>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Stay ahead of termite threats with our comprehensive annual inspection program. Australian Standard AS3660.2 recommends annual inspections for all properties to ensure ongoing protection.
            </p>
          </div>

          {/* Content blocks */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {/* Block 1 */}
            <div className="bg-gray-50 p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-start mb-4">
                <div className="bg-green-light/20 p-3 rounded-full mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-dark" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Regular Monitoring System</h3>
                  <p className="text-gray-600">
                    Systematic annual inspections track changes in your property's termite risk profile and identify new threats before they become problems.
                  </p>
                </div>
              </div>
            </div>

            {/* Block 2 */}
            <div className="bg-gray-50 p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-start mb-4">
                <div className="bg-green-light/20 p-3 rounded-full mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-dark" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Early Detection Technology</h3>
                  <p className="text-gray-600">
                    Advanced thermal imaging, moisture detection, and acoustic monitoring identify termite activity in its earliest stages.
                  </p>
                </div>
              </div>
            </div>

            {/* Block 3 */}
            <div className="bg-gray-50 p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-start mb-4">
                <div className="bg-green-light/20 p-3 rounded-full mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-dark" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Cost-Effective Prevention</h3>
                  <p className="text-gray-600">
                    Annual inspections cost a fraction of termite damage repairs, saving you thousands in potential structural damage costs.
                  </p>
                </div>
              </div>
            </div>

            {/* Block 4 */}
            <div className="bg-gray-50 p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-start mb-4">
                <div className="bg-green-light/20 p-3 rounded-full mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-dark" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">AS3660.2 Compliance</h3>
                  <p className="text-gray-600">
                    Meet Australian Standard requirements for termite management and maintain your property's protection warranty.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Annual inspection benefits */}
          <div className="bg-gradient-to-r from-green-light/10 to-green-dark/10 p-8 rounded-lg mb-12">
            <h3 className="text-2xl font-bold text-center mb-8 text-gray-900">Annual Inspection Benefits</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div>
                <div className="text-3xl font-bold text-green-dark mb-2">3-6 Months</div>
                <p className="text-gray-600">Time termites need to cause major damage</p>
              </div>
              <div>
                <div className="text-3xl font-bold text-green-dark mb-2">95%</div>
                <p className="text-gray-600">Success rate of early intervention</p>
              </div>
              <div>
                <div className="text-3xl font-bold text-green-dark mb-2">$500+</div>
                <p className="text-gray-600">Average annual inspection cost vs $15,000+ repairs</p>
              </div>
            </div>
          </div>

          {/* Why annual inspections matter */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-12">
            <div className="space-y-6">
              <h3 className="text-3xl font-bold text-gray-900">The Importance of Annual Inspections</h3>
              
              <p className="text-gray-600">
                Termites are active year-round in Australia, and their colonies can establish quickly. Annual inspections are your best defense against costly damage because:
              </p>
              
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start">
                  <span className="text-green-dark mr-2">•</span>
                  <span><strong>Early detection saves money</strong> - Catch problems before major damage occurs</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-dark mr-2">•</span>
                  <span><strong>Maintain protection systems</strong> - Ensure barriers and treatments remain effective</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-dark mr-2">•</span>
                  <span><strong>Insurance compliance</strong> - Meet policy requirements for coverage</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-dark mr-2">•</span>
                  <span><strong>Property value protection</strong> - Maintain your investment's worth</span>
                </li>
              </ul>
            </div>
            
            <div className="space-y-6">
              <p className="text-gray-600">
                Australian Standard AS3660.2 specifically recommends annual termite inspections for all properties, regardless of whether you have a termite management system in place.
              </p>
              
              <p className="text-gray-600">
                Our annual inspection program includes comprehensive documentation, trend analysis, and proactive recommendations to keep your property protected year after year.
              </p>
              
              <p className="text-gray-600">
                <strong>Remember:</strong> Most home insurance policies do not cover termite damage, making regular inspections your most important protection strategy.
              </p>
            </div>
          </div>

          {/* What's included section */}
          <div className="bg-gray-50 p-8 rounded-lg mb-12">
            <h3 className="text-2xl font-bold text-center mb-8 text-gray-900">What's Included in Your Annual Inspection</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <h4 className="font-semibold text-gray-900">Comprehensive Assessment</h4>
                <ul className="space-y-2 text-gray-600">
                  <li>• Interior and exterior inspection</li>
                  <li>• Roof void and subfloor examination</li>
                  <li>• Moisture and conducive conditions check</li>
                  <li>• Previous treatment area review</li>
                </ul>
              </div>
              <div className="space-y-4">
                <h4 className="font-semibold text-gray-900">Detailed Reporting</h4>
                <ul className="space-y-2 text-gray-600">
                  <li>• Digital inspection report with photos</li>
                  <li>• Risk assessment and recommendations</li>
                  <li>• Treatment status updates</li>
                  <li>• Maintenance schedule planning</li>
                </ul>
              </div>
            </div>
          </div>

          {/* CTA section */}
          <div className="bg-gradient-to-r from-green-light to-green-dark p-8 rounded-lg text-center text-white">
            <h3 className="text-2xl font-bold mb-4">Schedule Your Annual Inspection Today</h3>
            <p className="mb-6 max-w-2xl mx-auto">
              Don't wait for termites to cause damage. Our annual inspection program provides ongoing protection and peace of mind.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a href="/contact" className="bg-white text-green-dark hover:bg-gray-100 font-bold py-3 px-8 rounded-full transition-all duration-300 transform hover:scale-105">
                Schedule Annual Inspection
              </a>
              <a href="/contact" className="bg-transparent border-2 border-white hover:bg-white/10 text-white font-bold py-3 px-8 rounded-full transition-all duration-300">
                Learn More
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

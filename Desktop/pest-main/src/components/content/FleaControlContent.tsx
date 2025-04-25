"use client";

export default function FleaControlContent() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <span className="inline-block px-3 py-1 bg-green-light/10 text-green-dark text-sm font-semibold rounded-full mb-3">
              PROFESSIONAL FLEA CONTROL
            </span>
            <h2 className="text-4xl font-bold mb-4 text-gray-900">
              Why Choose Our <span className="text-green-dark">Flea Control</span> Services?
            </h2>
            <div className="w-24 h-1 bg-green-light mx-auto mb-6"></div>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Our professional flea control services are designed to eliminate fleas at all life stages and prevent reinfestation in your home.
            </p>
          </div>

          {/* Content blocks */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {/* Block 1 */}
            <div className="bg-gray-50 p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-start mb-4">
                <div className="bg-green-light/20 p-3 rounded-full mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-dark" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Comprehensive Assessment</h3>
                  <p className="text-gray-600">
                    Our technicians conduct thorough inspections to identify flea hotspots, determine the extent of the infestation, and develop a targeted treatment plan.
                  </p>
                </div>
              </div>
            </div>

            {/* Block 2 */}
            <div className="bg-gray-50 p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-start mb-4">
                <div className="bg-green-light/20 p-3 rounded-full mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-dark" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Complete Life Cycle Treatment</h3>
                  <p className="text-gray-600">
                    Our treatments target adult fleas, larvae, pupae, and eggs using a combination of adulticides and insect growth regulators for complete elimination.
                  </p>
                </div>
              </div>
            </div>

            {/* Block 3 */}
            <div className="bg-gray-50 p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-start mb-4">
                <div className="bg-green-light/20 p-3 rounded-full mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-dark" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Pet-Friendly Approach</h3>
                  <p className="text-gray-600">
                    We coordinate with your veterinarian's flea treatments for pets, ensuring a comprehensive approach that protects both your home and your furry family members.
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
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Long-Term Prevention</h3>
                  <p className="text-gray-600">
                    We provide guidance on ongoing prevention strategies, including regular pet treatments, proper cleaning practices, and environmental modifications to prevent future infestations.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* CTA section */}
          <div className="bg-gradient-to-r from-green-light to-green-dark p-8 rounded-lg text-center text-white">
            <h3 className="text-2xl font-bold mb-4">Ready to Eliminate Your Flea Problem?</h3>
            <p className="mb-6 max-w-2xl mx-auto">
              Don't let fleas bite you and your pets. Our professional flea control services provide fast, effective, and long-lasting relief from these irritating pests.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a href="/contact" className="bg-white text-green-dark hover:bg-gray-100 font-bold py-3 px-6 rounded-full transition-colors">
                Book a Treatment
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

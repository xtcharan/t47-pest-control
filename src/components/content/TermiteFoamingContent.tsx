"use client";

export default function TermiteFoamingContent() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <span className="inline-block px-3 py-1 bg-blue-100 text-blue-700 text-sm font-semibold rounded-full mb-3">
              TERMITE FOAMING IN MELBOURNE
            </span>
            <h2 className="text-4xl font-bold mb-4 text-gray-900">
              Termite Foaming Solutions for Homes & Businesses – <span className="text-blue-600">T47 Pest Control</span>
            </h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto mb-6"></div>
          </div>

          {/* Main Content with Image */}
          <div className="max-w-6xl mx-auto mb-16">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Text Content */}
              <div className="prose prose-lg max-w-none">


                <h3 className="text-2xl font-bold text-gray-900 mb-4 mt-8">What Is Termite Foaming Treatment?</h3>
                <p className="text-gray-700 leading-relaxed mb-6">
                  Termite foaming treatment involves the injection of specialized foam formulations into wall cavities, timber voids, and inaccessible areas where termites are active. This expanding foam reaches areas that other treatments cannot access.
                </p>

                <p className="text-gray-700 leading-relaxed mb-8">
                  Our technicians use professional foaming equipment to inject the treatment directly into termite galleries and voids. The foam expands to fill cavities completely, ensuring comprehensive coverage and elimination.
                </p>
              </div>

              {/* Image */}
              <div className="relative">
                <div className="relative rounded-xl overflow-hidden shadow-xl">
                  <img
                    src="/termite-foaming-treatment.jpg"
                    alt="Professional termite foaming treatment application"
                    className="w-full h-[400px] object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>

                  {/* Image overlay text */}
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <h4 className="text-lg font-bold mb-2">Professional Application</h4>
                    <p className="text-sm text-white/90">Precision foam injection into wall cavities and voids</p>
                  </div>
                </div>

                {/* Decorative elements */}
                <div className="absolute -top-4 -right-4 w-24 h-24 bg-blue-100 rounded-full opacity-20"></div>
                <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-blue-200 rounded-full opacity-30"></div>
              </div>
            </div>
          </div>




          {/* CTA section */}
          <div className="bg-gradient-to-r from-blue-600 to-blue-700 p-8 rounded-lg text-center text-white">
            <h3 className="text-2xl font-bold mb-4">Protect Your Property with Precision Treatment</h3>
            <p className="mb-6 max-w-2xl mx-auto">
              Don't wait for termites to cause damage. Our advanced foaming treatment provides deep penetration 
              and effective protection for your most valuable investment.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a href="/contact" className="bg-white text-blue-600 hover:bg-gray-100 font-bold py-3 px-6 rounded-full transition-colors">
                Get Free Assessment
              </a>
              <a href="tel:+61434300216" className="bg-transparent border-2 border-white hover:bg-white/10 text-white font-bold py-3 px-6 rounded-full transition-colors">
                Call +61 434 300 216
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

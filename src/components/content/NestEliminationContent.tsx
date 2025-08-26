"use client";
import Link from 'next/link';
import OptimizedImage from '../common/OptimizedImage';

export default function NestEliminationContent() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <span className="inline-block px-3 py-1 bg-green-100 text-green-700 text-sm font-semibold rounded-full mb-3">
              TERMITE NEST ELIMINATION IN MELBOURNE & VICTORIA
            </span>
            <h1 className="text-4xl font-bold mb-4 text-gray-900">
              Termite Nest Elimination in Melbourne and Across Victoria
            </h1>
            <div className="w-24 h-1 bg-green-dark mx-auto mb-6"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Find the source fast, choose the right control strategy, and prevent re‑attack.
            </p>
          </div>

          {/* Why Nest Location Matters */}
          <div className="mb-16">
            <div className="bg-gradient-to-r from-green-50 to-green-100 rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Why Nest Location Matters</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="w-16 h-16 bg-green-dark rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.94-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/>
                    </svg>
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-2">Confirms True Source</h4>
                  <p className="text-gray-600 text-sm">Confirms the true source driving an attack on a building.</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-green-dark rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M9 11H7v2h2v-2zm4 0h-2v2h2v-2zm4 0h-2v2h2v-2zm2-7h-1V2h-2v2H8V2H6v2H5c-1.1 0-1.99.9-1.99 2L3 20c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 16H5V9h14v11z"/>
                    </svg>
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-2">Enables Decisive Treatment</h4>
                  <p className="text-gray-600 text-sm">Enables decisive treatment choices: direct nest treatment when soil protection is planned, or a staged approach when baiting inside the building is preferred.</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-green-dark rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                    </svg>
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-2">Reduces Guesswork</h4>
                  <p className="text-gray-600 text-sm">Reduces guesswork and shortens time to full control in treed suburbs and reserves.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Visual vs Intrusive Nest Searches */}
          <div className="max-w-6xl mx-auto mb-16">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Text Content */}
              <div className="prose prose-lg max-w-none">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Visual vs Intrusive Nest Searches</h2>
                <div className="mb-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Visual Inspection (AS 3660.2)</h3>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    Non‑intrusive survey of buildings, surrounds, trees, and garden features to identify activity and habitat. In urban Melbourne, this method alone isn't optimised for finding concealed nests.
                  </p>
                </div>

                <div className="mb-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Intrusive Nest Search (Separate Service)</h3>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    Drilling and temperature probing of selected trees and stumps near the infested building to follow heat signatures and confirm a true nest with Queen(s) versus incidental feeders. Includes photo/temperature evidence.
                  </p>
                </div>
              </div>

              {/* Image */}
              <div className="relative">
                <div className="relative rounded-xl overflow-hidden shadow-xl">
                  <img
                    src="/termite-nest-location-melbourne.avif"
                    alt="Technician using temperature probe to locate termite nest in a tree base near a Melbourne home"
                    className="w-full h-[400px] object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>

                  {/* Image overlay text */}
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <h4 className="text-lg font-bold mb-2">Intrusive Probing</h4>
                    <p className="text-sm text-white/90">Intrusive probing confirms a true nest with Queen vs incidental feeding.</p>
                  </div>
                </div>

                {/* Decorative elements */}
                <div className="absolute -top-4 -right-4 w-24 h-24 bg-green-100 rounded-full opacity-20"></div>
                <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-green-200 rounded-full opacity-30"></div>
              </div>
            </div>
          </div>




          {/* Where We're Most Successful */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Where We're Most Successful</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white rounded-xl shadow-lg p-6 border-l-4 border-green-dark">
                <h4 className="font-bold text-gray-900 mb-3">Treed Outer Melbourne Suburbs and Country Areas</h4>
                <p className="text-gray-600 text-sm mb-4">Most nest finds involve Coptotermes frenchi, which often builds a large single nest in a void at the base of mature trees and forages widely through soil tubes.</p>
                <div className="flex items-center text-green-dark text-sm font-medium">
                  <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                  </svg>
                  High Success Rate
                </div>
              </div>
              <div className="bg-white rounded-xl shadow-lg p-6 border-l-4 border-orange-500">
                <h4 className="font-bold text-gray-900 mb-3">Inner‑Urban Melbourne and CBD</h4>
                <p className="text-gray-600 text-sm mb-4">Coptotermes acinaciformis commonly nests underground or under structures (e.g., under slabs/steps), so confirmed nest location is less common even when trees are present.</p>
                <div className="flex items-center text-orange-500 text-sm font-medium">
                  <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd"/>
                  </svg>
                  Limited Success
                </div>
              </div>
            </div>
          </div>



          {/* Key Species in Melbourne and Victoria */}
          <div className="mb-16">
            <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">Key Species in Melbourne and Victoria</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white rounded-xl shadow-lg p-6 border-l-4 border-red-500">
                <h4 className="font-bold text-gray-900 mb-3">Coptotermes acinaciformis (Urban termite)</h4>
                <p className="text-gray-600 text-sm mb-4">Inflicts the most building damage nationally; nests are seldom found in urban Melbourne as they often occur in the ground or under structures. Even after documented elimination, re‑infestation years later can occur—ongoing protection is essential.</p>
                <div className="flex items-center text-red-500 text-sm font-medium">
                  <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd"/>
                  </svg>
                  High Damage Risk
                </div>
              </div>
              <div className="bg-white rounded-xl shadow-lg p-6 border-l-4 border-green-dark">
                <h4 className="font-bold text-gray-900 mb-3">Coptotermes frenchi (Country/outer suburbs)</h4>
                <p className="text-gray-600 text-sm mb-4">Usually a single, large nest in the base of older trees with foraging networks that can extend tens of metres (often around 90 m). Frequently located and reliably managed when found.</p>
                <div className="flex items-center text-green-dark text-sm font-medium">
                  <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                  </svg>
                  Easily Located
                </div>
              </div>
              <div className="bg-white rounded-xl shadow-lg p-6 border-l-4 border-blue-500">
                <h4 className="font-bold text-gray-900 mb-3">Nasutitermes (various species)</h4>
                <p className="text-gray-600 text-sm mb-4">Common in landscaping timbers across Melbourne; most metro species rarely damage buildings. Some country Victoria species build soft mud mounds and can harm structures; their mudding often shows a distinct dark stain.</p>
                <div className="flex items-center text-blue-500 text-sm font-medium">
                  <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd"/>
                  </svg>
                  Low Building Risk
                </div>
              </div>
              <div className="bg-white rounded-xl shadow-lg p-6 border-l-4 border-purple-500">
                <h4 className="font-bold text-gray-900 mb-3">Dampwood termites</h4>
                <p className="text-gray-600 text-sm mb-4">No large central nest: small family groups live within decaying timber at the feeding site. Standard termite products are ineffective; management is primarily cultural—replace affected timber, improve ventilation, and maintain timber-to-ground separation.</p>
                <div className="flex items-center text-purple-500 text-sm font-medium">
                  <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"/>
                  </svg>
                  Cultural Management
                </div>
              </div>
            </div>
          </div>

          {/* If No Nest Is Found */}
          <div className="mb-16">
            <div className="bg-gradient-to-r from-yellow-50 to-orange-50 rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">If No Nest Is Found</h2>
              <p className="text-gray-700 leading-relaxed text-center max-w-4xl mx-auto">
                Nest location isn't always practical—especially in dense inner city areas with little tree habitat. Modern baiting and monitoring can still eliminate the attacking colony and protect the building without physically finding the nest.
              </p>
            </div>
          </div>

          {/* What's Next After Colony Control */}
          <div className="mb-16">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">What's Next After Colony Control?</h2>
            <div className="bg-gray-50 rounded-2xl p-8">
              <p className="text-gray-700 leading-relaxed mb-6 text-center max-w-4xl mx-auto">
                Eliminating termites from the structure and neutralising nests ends the current event, but future colonies can establish nearby. Long‑term management typically includes:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-green-dark rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white font-bold text-sm">1</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">
                      <Link href="/termite-solutions/baiting" className="text-gray-900 hover:text-green-dark transition-colors">
                        Perimeter Termite Monitoring/Baiting System
                      </Link>
                    </h4>
                    <p className="text-gray-600 text-sm">Early warning and rapid elimination.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-green-dark rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white font-bold text-sm">2</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">
                      <Link href="/termite-solutions/soil-treatment" className="text-gray-900 hover:text-green-dark transition-colors">
                        Chemical Soil Treated Zone
                      </Link>
                    </h4>
                    <p className="text-gray-600 text-sm">Integrated with slab/footings to prevent concealed entry.</p>
                  </div>
                </div>
              </div>
              <div className="text-center mt-6">
                <p className="text-gray-600 text-sm">Plus regular inspections to detect bridging and new risks.</p>
              </div>
            </div>
          </div>

          {/* Council and Reserve Services */}
          <div className="mb-16">
            <div className="bg-blue-50 rounded-2xl p-8 text-center">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Council and Reserve Services</h2>
              <p className="text-gray-700 leading-relaxed max-w-4xl mx-auto">
                We provide intrusive nest location in parks and reserves—particularly where residents report alates (flying termites) emerging from trees—so councils can remove hazards and protect nearby properties.
              </p>
            </div>
          </div>

          {/* Related Services */}
          <div className="mb-16">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Related Termite Services</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              <Link
                href="/termite-solutions/inspection"
                className="group relative bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden transform hover:-translate-y-1 border border-gray-100"
              >
                {/* Image */}
                <div className="relative h-48 overflow-hidden">
                  <OptimizedImage
                    src="/termite-assessment.jpg"
                    fallbackSrc="/termite-inspection.jpg"
                    alt="Termite Inspection"
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    className="object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="font-bold text-gray-900 mb-2 text-lg">Termite Inspection</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">Comprehensive termite detection and assessment</p>
                </div>
              </Link>

              <Link
                href="/termite-solutions/baiting"
                className="group relative bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden transform hover:-translate-y-1 border border-gray-100"
              >
                {/* Image */}
                <div className="relative h-48 overflow-hidden">
                  <OptimizedImage
                    src="/termite-treatment.jpg"
                    fallbackSrc="/termite-solutions.jpg"
                    alt="Termite Baiting"
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    className="object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="font-bold text-gray-900 mb-2 text-lg">Termite Baiting</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">Colony elimination through targeted baiting systems</p>
                </div>
              </Link>

              <Link
                href="/termite-solutions/soil-treatment"
                className="group relative bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden transform hover:-translate-y-1 border border-gray-100"
              >
                {/* Image */}
                <div className="relative h-48 overflow-hidden">
                  <OptimizedImage
                    src="/termite-chemical-barrier.jpg"
                    fallbackSrc="/termite-physical-barrier.jpg"
                    alt="Soil Treatment"
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    className="object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="font-bold text-gray-900 mb-2 text-lg">Soil Treatment</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">Chemical soil barriers for long-term protection</p>
                </div>
              </Link>

              <Link
                href="/contact"
                className="group relative bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden transform hover:-translate-y-1 border border-gray-100"
              >
                {/* Image */}
                <div className="relative h-48 overflow-hidden">
                  <OptimizedImage
                    src="/termite-solutions-optimized.jpg"
                    fallbackSrc="/termite-solutions.jpg"
                    alt="Free Assessment"
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    className="object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="font-bold text-gray-900 mb-2 text-lg">Free Assessment</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">Complimentary property evaluation and consultation</p>
                </div>
              </Link>
            </div>
          </div>

          {/* Service Areas */}
          <div className="mb-16">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Service Areas</h2>
            <div className="bg-green-50 rounded-2xl p-8 text-center">
              <p className="text-gray-700 mb-6">Melbourne Metro, Geelong, Ballarat, Bendigo, Mornington Peninsula, and surrounding regions across Victoria.</p>
              <div className="flex flex-wrap justify-center gap-3">
                {['Melbourne', 'Geelong', 'Ballarat', 'Bendigo', 'Mornington Peninsula', 'Frankston', 'Dandenong', 'Pakenham'].map((area, index) => (
                  <span key={index} className="bg-white text-green-800 px-4 py-2 rounded-full text-sm font-medium shadow-sm">
                    {area}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* CTA section */}
          <div className="bg-gradient-to-r from-green-dark to-green-light p-8 rounded-lg text-center text-white">
            <h2 className="text-2xl font-bold mb-4">Book an Intrusive Nest Search and Inspection in Melbourne's Treed Suburbs</h2>
            <p className="mb-6 max-w-2xl mx-auto">
              Not sure a nest search applies? Request a baiting/monitoring assessment to eliminate the attacking colony and protect long‑term.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a href="/contact" className="bg-white text-green-dark hover:bg-gray-100 font-bold py-3 px-6 rounded-full transition-colors">
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

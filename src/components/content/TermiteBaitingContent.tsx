"use client";
import Link from 'next/link';
import OptimizedImage from '../common/OptimizedImage';

export default function TermiteBaitingContent() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <span className="inline-block px-3 py-1 bg-purple-100 text-purple-700 text-sm font-semibold rounded-full mb-3">
              TERMITE BAITING IN MELBOURNE & VICTORIA
            </span>
            <h1 className="text-4xl font-bold mb-4 text-gray-900">
              Termite Baiting in Melbourne and Across Victoria
            </h1>
            <div className="w-24 h-1 bg-purple-600 mx-auto mb-6"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Modern, documentable colony elimination with minimal disruption—inside structures and around the perimeter.
            </p>
          </div>

          {/* Why Choose Termite Baiting */}
          <div className="mb-16">
            <div className="bg-gradient-to-r from-purple-50 to-purple-100 rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Why Choose Termite Baiting</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="text-center">
                  <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.94-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/>
                    </svg>
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-2">Colony Elimination</h4>
                  <p className="text-gray-600 text-sm">Uses termites' own foraging and food‑sharing to spread a slow‑acting active through workers, soldiers, and the Queen.</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                    </svg>
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-2">Documented Evidence</h4>
                  <p className="text-gray-600 text-sm">Provides clear, staged visual evidence (milestones) during services, giving a defendable basis for declaring colony elimination.</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M13 10V3L4 14h7v7l9-11h-7z"/>
                    </svg>
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-2">Predictable Pathway</h4>
                  <p className="text-gray-600 text-sm">Predictable pathway to control compared with older, condition‑dependent dusting methods.</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12,1L3,5V11C3,16.55 6.84,21.74 12,23C17.16,21.74 21,16.55 21,11V5L12,1M12,7C13.4,7 14.8,8.6 14.8,10V11.5C15.4,11.5 16,12.4 16,13V16C16,17.4 15.4,18 14.8,18H9.2C8.6,18 8,17.4 8,16V13C8,12.4 8.6,11.5 9.2,11.5V10C9.2,8.6 10.6,7 12,7M12,8.2C11.2,8.2 10.5,8.7 10.5,10V11.5H13.5V10C13.5,8.7 12.8,8.2 12,8.2Z"/>
                    </svg>
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-2">Low‑Impact Approach</h4>
                  <p className="text-gray-600 text-sm">Low‑impact, station‑based approach suitable for families, pets, gardens, and sensitive sites when installed and serviced correctly.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Main Content with Image */}
          <div className="max-w-6xl mx-auto mb-16">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Text Content */}
              <div className="prose prose-lg max-w-none">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">What Is a Termite Baiting System?</h2>
                <p className="text-gray-700 leading-relaxed mb-6">
                  A network of stations containing highly attractive cellulose and a slow‑acting termiticide is placed at live feeding sites and in the soil where foragers travel. Workers feed, then share food via trophallaxis, steadily distributing the active throughout the colony. Because the active is delayed and non‑repellent, termites continue normal behaviour long enough for colony‑wide impact before decline.
                </p>

                <h3 className="text-2xl font-bold text-gray-900 mb-4 mt-8">Where Baiting Fits in an Integrated Plan</h3>
                <ul className="text-gray-700 leading-relaxed mb-8 space-y-2">
                  <li className="flex items-start">
                    <span className="text-purple-600 mr-2">•</span>
                    Best choice when the goal is full colony elimination with documentation.
                  </li>
                  <li className="flex items-start">
                    <span className="text-purple-600 mr-2">•</span>
                    Complements tactical dusting/foaming used to quickly suppress local activity at specific strike points.
                  </li>
                  <li className="flex items-start">
                    <span className="text-purple-600 mr-2">•</span>
                    Can be paired with a chemical soil treated zone later to prevent new concealed entries from future colonies.
                  </li>
                </ul>
              </div>

              {/* Image */}
              <div className="relative">
                <div className="relative rounded-xl overflow-hidden shadow-xl">
                  <img
                    src="/termite-bait-stations-melbourne.avif"
                    alt="Technician servicing an in‑ground termite bait station at a Melbourne home"
                    className="w-full h-[400px] object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>

                  {/* Image overlay text */}
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <h4 className="text-lg font-bold mb-2">Professional Baiting System</h4>
                    <p className="text-sm text-white/90">Baiting provides clear, staged evidence of colony decline and elimination.</p>
                  </div>
                </div>

                {/* Decorative elements */}
                <div className="absolute -top-4 -right-4 w-24 h-24 bg-purple-100 rounded-full opacity-20"></div>
                <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-purple-200 rounded-full opacity-30"></div>
              </div>
            </div>
          </div>



          {/* Baiting Inside Buildings and Monitoring */}
          <div className="mb-16">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-2xl p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Baiting Inside Buildings</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  For live termites in walls, floors, or joinery, stations placed directly at feeding sites allow direct observation of progress. This removes termites from the building and eliminates the external colony driving the attack.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  After elimination, in‑structure stations are removed and the site transitions to prevention mode.
                </p>
              </div>
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Monitoring to Prevent Future Attacks</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Most Victorian properties have termites in surrounding soils. In‑ground monitors around the building act as an early warning system.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  When activity is detected, bait is added to the same monitor to eliminate the colony before it reaches the home.
                </p>
              </div>
            </div>
          </div>

          {/* How Long Does Baiting Take */}
          <div className="mb-16">
            <div className="bg-gradient-to-r from-orange-50 to-orange-100 rounded-2xl p-8 text-center">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">How Long Does Baiting Take?</h2>
              <p className="text-gray-700 leading-relaxed mb-6 max-w-4xl mx-auto">
                Timeframes vary by species, colony size, temperature, and site conditions. Typical elimination is about 5–8 months; some jobs resolve in a month, a few may approach a year. The positive trade‑off: while baiting is underway, termites generally prefer the bait over building timbers.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <span className="bg-orange-200 text-orange-800 px-4 py-2 rounded-full text-sm font-medium">5-8 Months Typical</span>
                <span className="bg-green-200 text-green-800 px-4 py-2 rounded-full text-sm font-medium">Some in 1 Month</span>
                <span className="bg-blue-200 text-blue-800 px-4 py-2 rounded-full text-sm font-medium">Few up to 1 Year</span>
              </div>
            </div>
          </div>

          {/* Tools and Technology */}
          <div className="mb-16">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Tools and Technology We Use</h2>
            <div className="bg-gray-50 rounded-2xl p-8">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="w-16 h-16 bg-red-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.94-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/>
                    </svg>
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-2">Infrared Thermal Scanning</h4>
                  <p className="text-gray-600 text-sm">To locate activity behind surfaces</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                    </svg>
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-2">Moisture Meters</h4>
                  <p className="text-gray-600 text-sm">To pinpoint conducive conditions and likely galleries</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                    </svg>
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-2">Digital Service Records</h4>
                  <p className="text-gray-600 text-sm">For transparent tracking of feed rates and milestones</p>
                </div>
              </div>
            </div>
          </div>

          {/* Environmental Considerations */}
          <div className="mb-16">
            <div className="bg-gradient-to-r from-green-50 to-green-100 rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Environmental Considerations</h2>
              <p className="text-gray-700 leading-relaxed text-center max-w-4xl mx-auto">
                Baiting relies on targeted, contained stations rather than broad soil saturation. It minimises disturbance to gardens and hardscapes. We avoid absolute "non‑toxic" claims; instead, we emphasise label‑compliant, low‑disruption methods and professional placement that's family‑ and pet‑friendly.
              </p>
            </div>
          </div>

          {/* Baiting vs Other Methods */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Baiting vs Dusting vs Chemical Soil Treatments</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white rounded-xl shadow-lg p-6 border-l-4 border-purple-600">
                <h4 className="font-bold text-gray-900 mb-3">
                  <span className="text-purple-600">Baiting</span>
                </h4>
                <p className="text-gray-600 text-sm">Predictable colony elimination with documented milestones.</p>
              </div>
              <div className="bg-white rounded-xl shadow-lg p-6 border-l-4 border-blue-600">
                <h4 className="font-bold text-gray-900 mb-3">
                  <Link href="/termite-solutions/dusting" className="text-gray-900 hover:text-blue-600 transition-colors">
                    Dusting/Foaming
                  </Link>
                </h4>
                <p className="text-gray-600 text-sm">Tactical suppression at active strike points; typically Step 1 before baiting or a soil system.</p>
              </div>
              <div className="bg-white rounded-xl shadow-lg p-6 border-l-4 border-orange-600">
                <h4 className="font-bold text-gray-900 mb-3">
                  <Link href="/termite-solutions/soil-treatment" className="text-gray-900 hover:text-orange-600 transition-colors">
                    Chemical Soil Treatment
                  </Link>
                </h4>
                <p className="text-gray-600 text-sm">Continuous treated zone to block concealed entry; inspections still required to detect bridging.</p>
              </div>
            </div>
          </div>



          {/* Service Areas */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Service Areas</h3>
            <div className="bg-blue-50 rounded-2xl p-8 text-center">
              <p className="text-gray-700 mb-6">Melbourne Metro, Geelong, Ballarat, Bendigo, Mornington Peninsula, and surrounding regions across Victoria.</p>
              <div className="flex flex-wrap justify-center gap-3">
                {['Melbourne', 'Geelong', 'Ballarat', 'Bendigo', 'Mornington Peninsula', 'Frankston', 'Dandenong', 'Pakenham'].map((area, index) => (
                  <span key={index} className="bg-white text-blue-800 px-4 py-2 rounded-full text-sm font-medium shadow-sm">
                    {area}
                  </span>
                ))}
              </div>
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
                href="/termite-solutions/pre-purchase"
                className="group relative bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden transform hover:-translate-y-1 border border-gray-100"
              >
                {/* Image */}
                <div className="relative h-48 overflow-hidden">
                  <OptimizedImage
                    src="/termite-assessment.jpg"
                    fallbackSrc="/termite-inspection.jpg"
                    alt="Pre-Purchase Inspection"
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    className="object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="font-bold text-gray-900 mb-2 text-lg">Pre-Purchase Inspection</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">Essential property inspections before buying</p>
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

          {/* CTA section */}
          <div className="bg-gradient-to-r from-purple-600 to-purple-700 p-8 rounded-lg text-center text-white">
            <h2 className="text-2xl font-bold mb-4">Book a Same‑Week Inspection and Site‑Specific Baiting Plan in Melbourne</h2>
            <p className="mb-6 max-w-2xl mx-auto">
              Ask about integrated Dusting/Foaming + Baiting packages and optional soil treated zones for long‑term protection.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a href="/contact" className="bg-white text-purple-600 hover:bg-gray-100 font-bold py-3 px-6 rounded-full transition-colors">
                Book Inspection
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

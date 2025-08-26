"use client";
import Link from 'next/link';

export default function TermiteDustingContent() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <span className="inline-block px-3 py-1 bg-blue-100 text-blue-700 text-sm font-semibold rounded-full mb-3">
              TERMITE DUSTING IN MELBOURNE & VICTORIA
            </span>
            <h2 className="text-4xl font-bold mb-4 text-gray-900">
              Termite Dusting Treatment in Melbourne and Across Victoria
            </h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto mb-6"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Modern, targeted dusting to suppress active termites fast—then lock in long‑term protection with baiting or soil treatments.
            </p>
          </div>

          {/* Why Choose Termite Dusting */}
          <div className="mb-16">
            <div className="bg-gradient-to-r from-blue-50 to-blue-100 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Why Choose Termite Dusting</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                    </svg>
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-2">Targeted Dust Reaches Concealed Galleries</h4>
                  <p className="text-gray-600 text-sm">Targeted dust reaches concealed galleries for rapid activity reduction.</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/>
                    </svg>
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-2">Delayed, Non‑Repellent Action</h4>
                  <p className="text-gray-600 text-sm">Delayed, non‑repellent action leverages trophallaxis (grooming/food sharing) to spread within the workings.</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12,1L3,5V11C3,16.55 6.84,21.74 12,23C17.16,21.74 21,16.55 21,11V5L12,1M12,7C13.4,7 14.8,8.6 14.8,10V11.5C15.4,11.5 16,12.4 16,13V16C16,17.4 15.4,18 14.8,18H9.2C8.6,18 8,17.4 8,16V13C8,12.4 8.6,11.5 9.2,11.5V10C9.2,8.6 10.6,7 12,7M12,8.2C11.2,8.2 10.5,8.7 10.5,10V11.5H13.5V10C13.5,8.7 12.8,8.2 12,8.2Z"/>
                    </svg>
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-2">Step 1 Before Comprehensive Management</h4>
                  <p className="text-gray-600 text-sm">Best used as Step 1 before a comprehensive management system for lasting protection.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Main Content with Image */}
          <div className="max-w-6xl mx-auto mb-16">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Text Content */}
              <div className="prose prose-lg max-w-none">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">What Is Termite Dusting?</h3>
                <p className="text-gray-700 leading-relaxed mb-6">
                  Termite dusting involves gently applying a fine professional dust into active termite workings, mud tubes, or infested timbers. The dust adheres to damp termite bodies and surrounding surfaces. Because it is non‑repellent and slow‑acting, termites continue normal movement and share contamination through the colony pathways before mortality occurs. In Victoria, dusting is a tactical knockdown—most reliable when paired with baiting (for colony elimination) or a chemical soil treatment (for ongoing ingress prevention).
                </p>

                <h3 className="text-2xl font-bold text-gray-900 mb-4 mt-8">When We Recommend Dusting</h3>
                <ul className="text-gray-700 leading-relaxed mb-8 space-y-2">
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    Confirmed active termites during inspection.
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    Warm periods with strong activity for better transfer.
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    As a precursor to a full baiting program or a chemical soil "treated zone" around the structure.
                  </li>
                </ul>
              </div>

              {/* Image */}
              <div className="relative">
                <div className="relative rounded-xl overflow-hidden shadow-xl">
                  <img
                    src="/termite-dusting-melbourne.avif"
                    alt="Technician applying termite dust into active gallery in a Melbourne home"
                    className="w-full h-[400px] object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>

                  {/* Image overlay text */}
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <h4 className="text-lg font-bold mb-2">Professional Application</h4>
                    <p className="text-sm text-white/90">Dusting reduces activity fast; follow with baiting or a treated zone for long‑term protection.</p>
                  </div>
                </div>

                {/* Decorative elements */}
                <div className="absolute -top-4 -right-4 w-24 h-24 bg-blue-100 rounded-full opacity-20"></div>
                <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-blue-200 rounded-full opacity-30"></div>
              </div>
            </div>
          </div>



          {/* Dusting vs Other Methods */}
          <div className="mb-16">
            <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">Dusting vs Other Methods</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-white rounded-xl shadow-lg p-6 border-l-4 border-blue-600">
                <h4 className="font-bold text-gray-900 mb-3">Dusting</h4>
                <p className="text-gray-600 text-sm">Quick, targeted knockdown at known activity sites; not a guaranteed colony kill on its own.</p>
              </div>
              <div className="bg-white rounded-xl shadow-lg p-6 border-l-4 border-green-600">
                <h4 className="font-bold text-gray-900 mb-3">
                  <Link href="/termite-solutions/foaming" className="text-gray-900 hover:text-green-600 transition-colors">
                    Foaming
                  </Link>
                </h4>
                <p className="text-gray-600 text-sm">Better for damp, enclosed voids (bathrooms, subfloors) where dust adherence is reduced.</p>
              </div>
              <div className="bg-white rounded-xl shadow-lg p-6 border-l-4 border-purple-600">
                <h4 className="font-bold text-gray-900 mb-3">
                  <Link href="/termite-solutions/baiting" className="text-gray-900 hover:text-purple-600 transition-colors">
                    Baiting
                  </Link>
                </h4>
                <p className="text-gray-600 text-sm">Preferred pathway to eliminate the colony (including the Queen) with clear milestones.</p>
              </div>
              <div className="bg-white rounded-xl shadow-lg p-6 border-l-4 border-orange-600">
                <h4 className="font-bold text-gray-900 mb-3">
                  <Link href="/termite-solutions/soil-treatment" className="text-gray-900 hover:text-orange-600 transition-colors">
                    Chemical Soil Treatment
                  </Link>
                </h4>
                <p className="text-gray-600 text-sm">Creates a continuous treated zone to block concealed entry; inspections still required to detect bridging.</p>
              </div>
            </div>
          </div>

          {/* Products We Use */}
          <div className="mb-16">
            <div className="bg-gray-50 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Products We Use</h3>
              <div className="max-w-3xl mx-auto text-center">
                <p className="text-gray-700 leading-relaxed mb-6">
                  Modern, professional non‑repellent dusts (commonly fipronil‑based) applied with precision equipment. These are far more effective and lower‑odour than legacy arsenic formulations used historically.
                </p>
                <div className="flex flex-wrap justify-center gap-4">
                  <span className="bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium">Fipronil‑Based</span>
                  <span className="bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-medium">Non‑Repellent</span>
                  <span className="bg-purple-100 text-purple-800 px-4 py-2 rounded-full text-sm font-medium">Precision Equipment</span>
                  <span className="bg-orange-100 text-orange-800 px-4 py-2 rounded-full text-sm font-medium">Low‑Odour</span>
                </div>
              </div>
            </div>
          </div>

          {/* What To Expect After Dusting */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">What To Expect After Dusting</h3>
            <div className="bg-gradient-to-r from-yellow-50 to-orange-50 rounded-2xl p-8">
              <p className="text-gray-700 leading-relaxed mb-6 text-center max-w-4xl mx-auto">
                Dusting and foaming clear local activity but typically do not eliminate the whole colony. For lasting security, a termite management system is installed:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white font-bold text-sm">1</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">
                      <Link href="/termite-solutions/baiting" className="text-gray-900 hover:text-blue-600 transition-colors">
                        Termite Baiting and Monitoring
                      </Link>
                    </h4>
                    <p className="text-gray-600 text-sm">To achieve colony elimination.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white font-bold text-sm">2</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">
                      <Link href="/termite-solutions/soil-treatment" className="text-gray-900 hover:text-blue-600 transition-colors">
                        Chemical Soil Treatment
                      </Link>
                    </h4>
                    <p className="text-gray-600 text-sm">Forming a continuous treated zone around the building.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Related Services */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Related Termite Services</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Link href="/termite-solutions/inspection" className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow border border-gray-100">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-green-600" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/>
                  </svg>
                </div>
                <h4 className="font-bold text-gray-900 mb-2">Termite Inspections</h4>
                <p className="text-gray-600 text-sm">Comprehensive detection before treatment</p>
              </Link>
              <Link href="/termite-solutions/foaming" className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow border border-gray-100">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-blue-600" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.94-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/>
                  </svg>
                </div>
                <h4 className="font-bold text-gray-900 mb-2">Termite Foaming</h4>
                <p className="text-gray-600 text-sm">For damp and concealed areas</p>
              </Link>
              <Link href="/termite-solutions/baiting" className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow border border-gray-100">
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-purple-600" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                  </svg>
                </div>
                <h4 className="font-bold text-gray-900 mb-2">Termite Baiting</h4>
                <p className="text-gray-600 text-sm">Complete colony elimination</p>
              </Link>
              <Link href="/termite-solutions/soil-treatment" className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow border border-gray-100">
                <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-orange-600" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12,1L3,5V11C3,16.55 6.84,21.74 12,23C17.16,21.74 21,16.55 21,11V5L12,1M12,7C13.4,7 14.8,8.6 14.8,10V11.5C15.4,11.5 16,12.4 16,13V16C16,17.4 15.4,18 14.8,18H9.2C8.6,18 8,17.4 8,16V13C8,12.4 8.6,11.5 9.2,11.5V10C9.2,8.6 10.6,7 12,7M12,8.2C11.2,8.2 10.5,8.7 10.5,10V11.5H13.5V10C13.5,8.7 12.8,8.2 12,8.2Z"/>
                  </svg>
                </div>
                <h4 className="font-bold text-gray-900 mb-2">Chemical Soil Treatment</h4>
                <p className="text-gray-600 text-sm">Long‑term protection systems</p>
              </Link>
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

          {/* CTA section */}
          <div className="bg-gradient-to-r from-blue-600 to-blue-700 p-8 rounded-lg text-center text-white">
            <h3 className="text-2xl font-bold mb-4">Get a Free Assessment and Same‑Week Inspection in Melbourne</h3>
            <p className="mb-6 max-w-2xl mx-auto">
              Ask about combined Dusting + Baiting or Dusting + Soil Treatment packages tailored to Victorian conditions.
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
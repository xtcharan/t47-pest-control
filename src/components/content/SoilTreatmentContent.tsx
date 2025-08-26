"use client";
import Link from 'next/link';
import { useState } from 'react';
import OptimizedImage from '../common/OptimizedImage';

export default function SoilTreatmentContent() {
  const [expandedCard, setExpandedCard] = useState<number | null>(null);

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <span className="inline-block px-3 py-1 bg-blue-100 text-blue-700 text-sm font-semibold rounded-full mb-3">
              CHEMICAL SOIL TREATMENTS IN MELBOURNE & VICTORIA
            </span>
            <h1 className="text-4xl font-bold mb-4 text-gray-900">
              Chemical Soil Treatments in Melbourne and Across Victoria
            </h1>
            <div className="w-24 h-1 bg-blue-600 mx-auto mb-6"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Create a continuous treated zone that blocks concealed termite entry and protects the structure long‑term.
            </p>
          </div>

          {/* Why Choose Chemical Soil Treatment */}
          <div className="mb-16">
            <div className="bg-gradient-to-r from-blue-50 to-blue-100 rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Why Choose a Chemical Soil Treatment</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12,1L3,5V11C3,16.55 6.84,21.74 12,23C17.16,21.74 21,16.55 21,11V5L12,1M12,7C13.4,7 14.8,8.6 14.8,10V11.5C15.4,11.5 16,12.4 16,13V16C16,17.4 15.4,18 14.8,18H9.2C8.6,18 8,17.4 8,16V13C8,12.4 8.6,11.5 9.2,11.5V10C9.2,8.6 10.6,7 12,7M12,8.2C11.2,8.2 10.5,8.7 10.5,10V11.5H13.5V10C13.5,8.7 12.8,8.2 12,8.2Z"/>
                    </svg>
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">Continuous Treated Zone</h3>
                  <p className="text-gray-600 text-sm">Forms a continuous treated zone tied into slab edges and footings to prevent hidden soil entry.</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                    </svg>
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">Low‑Visibility Perimeter Solution</h3>
                  <p className="text-gray-600 text-sm">Works as a durable, low‑visibility perimeter solution around existing buildings.</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                    </svg>
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">Complements Baiting</h3>
                  <p className="text-gray-600 text-sm">Soil treatment prevents new ingress; baiting eliminates active colonies.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Main Content with Image */}
          <div className="max-w-6xl mx-auto mb-16">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Text Content */}
              <div className="prose prose-lg max-w-none">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">What Is a Chemical Soil Treatment?</h2>
                <p className="text-gray-700 leading-relaxed mb-6">
                  A chemical soil treatment floods termiticide into the soil around and, where accessible, beneath a building to saturate the soil and form a continuous treated zone. The timbers inside the home are not treated; the soil around the structure is. When the treated zone is complete and in contact with footings/slab, concealed termite entry is prevented.
                </p>
                <p className="text-gray-700 leading-relaxed mb-6">
                  Regular inspections remain essential to detect any "bridging" (e.g., soil build‑up, garden timbers, or conduits that provide a path over or around the zone).
                </p>

                <h3 className="text-xl font-bold text-gray-900 mb-4 mt-8">"Barrier" vs "Treated Zone"</h3>
                <p className="text-gray-700 leading-relaxed mb-6">
                  Historically, repellent chemicals created an invisible "barrier" that termites avoided. Modern non‑repellent products create a "treated zone" termites can enter without detecting—becoming affected and transferring the active to nestmates. Both aim to prevent concealed access; neither can stop above‑ground bridging. Annual inspections are recommended.
                </p>
              </div>

              {/* Image */}
              <div className="relative">
                <div className="relative rounded-xl overflow-hidden shadow-xl">
                  <img
                    src="/chemical-soil-treatment-melbourne.avif"
                    alt="Applying liquid termiticide to soil along slab edge to form a continuous treated zone"
                    className="w-full h-[400px] object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>

                  {/* Image overlay text */}
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <h4 className="text-lg font-bold mb-2">Professional Application</h4>
                    <p className="text-sm text-white/90">Continuous treated zones integrate with footings and slab edges to block concealed termite entry.</p>
                  </div>
                </div>

                {/* Decorative elements */}
                <div className="absolute -top-4 -right-4 w-24 h-24 bg-blue-100 rounded-full opacity-20"></div>
                <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-blue-200 rounded-full opacity-30"></div>
              </div>
            </div>
          </div>

          {/* Repellent vs Non-Repellent Termiticides */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Repellent vs Non‑Repellent Termiticides</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white rounded-xl shadow-lg p-8 border-l-4 border-green-600">
                <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                  <span className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center text-white text-sm font-bold mr-3 flex-shrink-0">R</span>
                  Repellent (e.g., bifenthrin/Biflex)
                </h3>
                <p className="text-gray-700 mb-4">Termites detect and avoid the treated soil.</p>

                <div className="mb-4">
                  <h4 className="font-semibold text-green-700 mb-2">Pros:</h4>
                  <ul className="text-gray-600 text-sm space-y-1">
                    <li className="flex items-start"><span className="text-green-600 mr-2">•</span>Robust when the zone is continuous</li>
                    <li className="flex items-start"><span className="text-green-600 mr-2">•</span>Long service life</li>
                    <li className="flex items-start"><span className="text-green-600 mr-2">•</span>Cost‑effective</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold text-orange-700 mb-2">Watch‑outs:</h4>
                  <p className="text-gray-600 text-sm">If a gap exists, termites may locate and exploit it.</p>
                </div>
              </div>

              <div className="bg-white rounded-xl shadow-lg p-8 border-l-4 border-blue-600">
                <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                  <span className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white text-sm font-bold mr-3 flex-shrink-0">N</span>
                  Non‑Repellent (e.g., chlorantraniliprole/Altriset, fipronil/Termidor, imidacloprid/Premise)
                </h3>
                <p className="text-gray-700 mb-4">Termites cannot detect the treatment and pass through, becoming contaminated and sharing it.</p>

                <div className="mb-4">
                  <h4 className="font-semibold text-blue-700 mb-2">Pros:</h4>
                  <ul className="text-gray-600 text-sm space-y-1">
                    <li className="flex items-start"><span className="text-blue-600 mr-2">•</span>More forgiving of small gaps</li>
                    <li className="flex items-start"><span className="text-blue-600 mr-2">•</span>Strong transfer</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold text-orange-700 mb-2">Watch‑outs:</h4>
                  <ul className="text-gray-600 text-sm space-y-1">
                    <li className="flex items-start"><span className="text-orange-600 mr-2">•</span>Typically higher cost</li>
                    <li className="flex items-start"><span className="text-orange-600 mr-2">•</span>Still depends on achieving the most continuous treated zone possible</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* When Soil Treatments Are Suitable */}
          <div className="mb-16">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">When Soil Treatments Are Suitable</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-green-50 rounded-xl p-6">
                <h3 className="text-lg font-bold text-green-800 mb-4 flex items-center">
                  <svg className="w-6 h-6 text-green-600 mr-2" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                  </svg>
                  Suitable When:
                </h3>
                <ul className="text-gray-700 space-y-2">
                  <li className="flex items-start"><span className="text-green-600 mr-2">•</span>Clear access for trenching/rodding along the perimeter</li>
                  <li className="flex items-start"><span className="text-green-600 mr-2">•</span>Construction allows continuity (minimal slab joins/extensions; accessible subfloor)</li>
                  <li className="flex items-start"><span className="text-green-600 mr-2">•</span>Client prefers a perimeter solution to block new concealed entry</li>
                </ul>
              </div>

              <div className="bg-red-50 rounded-xl p-6">
                <h3 className="text-lg font-bold text-red-800 mb-4 flex items-center">
                  <svg className="w-6 h-6 text-red-600 mr-2" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/>
                  </svg>
                  Not Suitable When:
                </h3>
                <ul className="text-gray-700 space-y-2">
                  <li className="flex items-start"><span className="text-red-600 mr-2">•</span>Multiple slab joins/extensions that prevent continuity</li>
                  <li className="flex items-start"><span className="text-red-600 mr-2">•</span>Inaccessible or unsafe subfloors</li>
                  <li className="flex items-start"><span className="text-red-600 mr-2">•</span>Situations where achieving a complete zone would be overly intrusive or damaging</li>
                </ul>
              </div>
            </div>

            <div className="bg-yellow-50 rounded-xl p-6 mt-6">
              <h3 className="text-lg font-bold text-yellow-800 mb-3 flex items-center">
                <svg className="w-6 h-6 text-yellow-600 mr-2" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M1 21h22L12 2 1 21zm12-3h-2v-2h2v2zm0-4h-2v-4h2v4z"/>
                </svg>
                Policy Note:
              </h3>
              <p className="text-gray-700">
                We don't install partial "90% barriers." If a continuous zone can't be achieved, we recommend a termite monitoring/baiting system to avoid a false sense of security.
              </p>
            </div>
          </div>



          {/* Product Options We Use */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Product Options We Use</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                {
                  name: "Biflex (bifenthrin)",
                  type: "Repellent",
                  description: "Longest‑lasting repellent; excellent for robust, cost‑effective protection where a continuous zone is achievable.",
                  color: "green",
                  features: ["Longest-lasting", "Cost-effective", "Robust protection"]
                },
                {
                  name: "Altriset (chlorantraniliprole)",
                  type: "Non‑repellent",
                  description: "Low‑toxicity profile and strong transfer; label indicates multi‑year protection; preferred where reduced hazard profile is important.",
                  color: "blue",
                  features: ["Low-toxicity", "Strong transfer", "Multi-year protection"]
                },
                {
                  name: "Termidor (fipronil)",
                  type: "Non‑repellent",
                  description: "Extremely effective with excellent soil binding; widely used where moisture movement is present. Environmental considerations apply near waterways.",
                  color: "purple",
                  features: ["Extremely effective", "Excellent soil binding", "Moisture resistant"]
                },
                {
                  name: "Premise (imidacloprid)",
                  type: "Non‑repellent",
                  description: "Effective transfer and penetration; less durable in wet soils and can be absorbed by plants, so site conditions drive selection.",
                  color: "orange",
                  features: ["Effective transfer", "Good penetration", "Site-specific use"]
                }
              ].map((product, index) => {
                const borderClasses = {
                  green: 'border-green-600',
                  blue: 'border-blue-600',
                  purple: 'border-purple-600',
                  orange: 'border-orange-600'
                };
                const bgClasses = {
                  green: 'bg-green-100',
                  blue: 'bg-blue-100',
                  purple: 'bg-purple-100',
                  orange: 'bg-orange-100'
                };
                const textClasses = {
                  green: 'text-green-800',
                  blue: 'text-blue-800',
                  purple: 'text-purple-800',
                  orange: 'text-orange-800'
                };
                return (
                  <div key={index} className={`bg-white rounded-xl shadow-lg p-6 border-l-4 ${borderClasses[product.color as keyof typeof borderClasses]} hover:shadow-xl transition-shadow`}>
                    <div className="flex items-center justify-between mb-3">
                      <h3 className="text-lg font-bold text-gray-900">{product.name}</h3>
                      <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                        product.type === 'Repellent' ? 'bg-green-100 text-green-800' : 'bg-blue-100 text-blue-800'
                      }`}>
                        {product.type}
                      </span>
                    </div>
                    <p className="text-gray-700 text-sm mb-4">{product.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {product.features.map((feature, featureIndex) => (
                        <span key={featureIndex} className={`${bgClasses[product.color as keyof typeof bgClasses]} ${textClasses[product.color as keyof typeof textClasses]} px-2 py-1 rounded text-xs font-medium`}>
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
            <div className="bg-gray-50 rounded-xl p-6 mt-6 text-center">
              <p className="text-gray-700">
                <strong>Note:</strong> We use water‑based, low‑odour formulations and avoid solvent‑based products.
              </p>
            </div>
          </div>

          {/* What a Soil Treatment Can and Cannot Do */}
          <div className="mb-16">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">What a Soil Treatment Can and Cannot Do</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-green-50 rounded-xl p-6">
                <h3 className="text-lg font-bold text-green-800 mb-4 flex items-center">
                  <svg className="w-6 h-6 text-green-600 mr-2" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                  </svg>
                  What It Can Do:
                </h3>
                <ul className="text-gray-700 space-y-2">
                  <li className="flex items-start"><span className="text-green-600 mr-2">•</span>Designed to prevent concealed termite ingress into the treated building</li>
                  <li className="flex items-start"><span className="text-green-600 mr-2">•</span>Creates long-lasting protection when properly installed</li>
                  <li className="flex items-start"><span className="text-green-600 mr-2">•</span>Integrates with building foundations for comprehensive coverage</li>
                </ul>
              </div>

              <div className="bg-red-50 rounded-xl p-6">
                <h3 className="text-lg font-bold text-red-800 mb-4 flex items-center">
                  <svg className="w-6 h-6 text-red-600 mr-2" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/>
                  </svg>
                  What It Cannot Do:
                </h3>
                <ul className="text-gray-700 space-y-2">
                  <li className="flex items-start"><span className="text-red-600 mr-2">•</span>Not intended to kill distant nests or stop termites appearing in untreated landscaping</li>
                  <li className="flex items-start"><span className="text-red-600 mr-2">•</span>Cannot prevent termites from "bridging" the zone via garden materials or structural elements</li>
                </ul>
              </div>
            </div>

            <div className="bg-yellow-50 rounded-xl p-6 mt-6">
              <h3 className="text-lg font-bold text-yellow-800 mb-3 flex items-center">
                <svg className="w-6 h-6 text-yellow-600 mr-2" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M1 21h22L12 2 1 21zm12-3h-2v-2h2v2zm0-4h-2v-4h2v4z"/>
                </svg>
                Important Note:
              </h3>
              <p className="text-gray-700">
                Termites can sometimes "bridge" the zone via garden materials or structural elements. Scheduled inspections are critical to find and fix bridging early.
              </p>
            </div>
          </div>

          {/* Precautions Before and After Treatment */}
          <div className="mb-16">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Precautions Before and After Treatment</h2>
            <div className="bg-gradient-to-r from-orange-50 to-red-50 rounded-2xl p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-lg font-bold text-orange-800 mb-4 flex items-center">
                    <svg className="w-6 h-6 text-orange-600 mr-2" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                    </svg>
                    Before Treatment:
                  </h3>
                  <ul className="text-gray-700 space-y-2">
                    <li className="flex items-start"><span className="text-orange-600 mr-2">•</span>Advise us of pets, allergies, or sensitivities</li>
                    <li className="flex items-start"><span className="text-orange-600 mr-2">•</span>Keep pets secured during application</li>
                    <li className="flex items-start"><span className="text-orange-600 mr-2">•</span>Clear access areas around the perimeter</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-bold text-red-800 mb-4 flex items-center">
                    <svg className="w-6 h-6 text-red-600 mr-2" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                    </svg>
                    After Treatment:
                  </h3>
                  <ul className="text-gray-700 space-y-2">
                    <li className="flex items-start"><span className="text-red-600 mr-2">•</span>Avoid contact with treated soil until dry</li>
                    <li className="flex items-start"><span className="text-red-600 mr-2">•</span>Follow technician advice on landscaping levels</li>
                    <li className="flex items-start"><span className="text-red-600 mr-2">•</span>Maintain weep holes and timber‑to‑ground separation</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Soil Treatments vs Monitoring/Baiting */}
          <div className="mb-16">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Soil Treatments vs Monitoring/Baiting — How to Choose</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-blue-50 rounded-xl p-6 border-l-4 border-blue-600">
                <h3 className="text-lg font-bold text-blue-800 mb-4 flex items-center">
                  <svg className="w-6 h-6 text-blue-600 mr-2" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12,1L3,5V11C3,16.55 6.84,21.74 12,23C17.16,21.74 21,16.55 21,11V5L12,1M12,7C13.4,7 14.8,8.6 14.8,10V11.5C15.4,11.5 16,12.4 16,13V16C16,17.4 15.4,18 14.8,18H9.2C8.6,18 8,17.4 8,16V13C8,12.4 8.6,11.5 9.2,11.5V10C9.2,8.6 10.6,7 12,7M12,8.2C11.2,8.2 10.5,8.7 10.5,10V11.5H13.5V10C13.5,8.7 12.8,8.2 12,8.2Z"/>
                  </svg>
                  Choose Soil Treatments When:
                </h3>
                <p className="text-gray-700">
                  A continuous treated zone is feasible and desired for ongoing ingress prevention.
                </p>
              </div>

              <div className="bg-green-50 rounded-xl p-6 border-l-4 border-green-600">
                <h3 className="text-lg font-bold text-green-800 mb-4 flex items-center">
                  <svg className="w-6 h-6 text-green-600 mr-2" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                  </svg>
                  Choose Monitoring/Baiting When:
                </h3>
                <p className="text-gray-700">
                  Continuity is impractical, access is limited, or colony elimination with documented milestones is the priority.
                </p>
              </div>
            </div>
          </div>

          {/* Service Areas */}
          <div className="mb-16">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Service Areas</h2>
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
                  <p className="text-gray-600 text-sm leading-relaxed">Colony elimination with documented milestones</p>
                </div>
              </Link>

              <Link
                href="/termite-solutions/dusting"
                className="group relative bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden transform hover:-translate-y-1 border border-gray-100"
              >
                {/* Image */}
                <div className="relative h-48 overflow-hidden">
                  <OptimizedImage
                    src="/termite-dusting.jpg"
                    fallbackSrc="/termite-solutions.jpg"
                    alt="Termite Dusting"
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    className="object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="font-bold text-gray-900 mb-2 text-lg">Termite Dusting</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">Targeted dust for rapid activity reduction</p>
                </div>
              </Link>

              <Link
                href="/termite-solutions/foaming"
                className="group relative bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden transform hover:-translate-y-1 border border-gray-100"
              >
                {/* Image */}
                <div className="relative h-48 overflow-hidden">
                  <OptimizedImage
                    src="/termite-foaming.jpg"
                    fallbackSrc="/termite-solutions.jpg"
                    alt="Termite Foaming"
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    className="object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="font-bold text-gray-900 mb-2 text-lg">Termite Foaming</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">Foam treatment for enclosed voids</p>
                </div>
              </Link>

              <Link
                href="/termite-solutions/inspection"
                className="group relative bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden transform hover:-translate-y-1 border border-gray-100"
              >
                {/* Image */}
                <div className="relative h-48 overflow-hidden">
                  <OptimizedImage
                    src="/termite-assessment.jpg"
                    fallbackSrc="/termite-inspection.jpg"
                    alt="Termite Inspections"
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    className="object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="font-bold text-gray-900 mb-2 text-lg">Termite Inspections</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">Comprehensive detection and assessment</p>
                </div>
              </Link>
            </div>
          </div>

          {/* CTA section */}
          <div className="bg-gradient-to-r from-blue-600 to-blue-700 p-8 rounded-lg text-center text-white">
            <h2 className="text-2xl font-bold mb-4">Book a Site Assessment for Chemical Soil Treatment</h2>
            <p className="mb-6 max-w-2xl mx-auto">
              Determine if a continuous treated zone is feasible for your property. Ask about options that pair soil treatment with baiting or monitoring for comprehensive protection.
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

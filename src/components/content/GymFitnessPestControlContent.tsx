"use client";

import { COMPANY_INFO } from '../lib/constants';

export default function GymFitnessPestControlContent() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <span className="inline-block px-3 py-1 bg-pink-100 text-pink-700 text-sm font-semibold rounded-full mb-3">
              FITNESS FACILITY PEST MANAGEMENT
            </span>
            <h2 className="text-4xl font-bold mb-4 text-gray-900">
              Why Choose Our <span className="text-pink-600">Gym & Fitness Pest Control</span> Services?
            </h2>
            <div className="w-24 h-1 bg-pink-600 mx-auto mb-6"></div>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Our specialized pest control services for gyms, fitness centers, and sports facilities are designed to protect member health, maintain facility reputation, and ensure a clean, hygienic environment.
            </p>
          </div>

          {/* Content blocks */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {/* Block 1 */}
            <div className="bg-gray-50 p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-start mb-4">
                <div className="bg-pink-100 p-3 rounded-full mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-pink-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Member Health Protection</h3>
                  <p className="text-gray-600">
                    Fitness facilities can create ideal conditions for certain pests due to moisture, food residues, and high traffic. Our gym pest control services focus on creating a healthier environment by eliminating pests that can impact member wellbeing, including those that spread bacteria or trigger allergic reactions. We use low-toxicity products and application methods that prioritize human safety while effectively controlling pest populations in exercise areas, locker rooms, and other sensitive zones.
                  </p>
                </div>
              </div>
            </div>

            {/* Block 2 */}
            <div className="bg-gray-50 p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-start mb-4">
                <div className="bg-pink-100 p-3 rounded-full mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-pink-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 11V7a4 4 0 118 0m-4 8v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Locker Room & Shower Area Protection</h3>
                  <p className="text-gray-600">
                    Locker rooms and shower areas present unique pest control challenges due to high moisture levels and warm temperatures. These conditions can attract pests like cockroaches, silverfish, and drain flies. Our specialized treatments for these areas focus on moisture management, drain treatments, and targeted applications that address these specific challenges. We implement protocols that maintain sanitation standards while protecting member health and comfort in these sensitive areas.
                  </p>
                </div>
              </div>
            </div>

            {/* Block 3 */}
            <div className="bg-gray-50 p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-start mb-4">
                <div className="bg-pink-100 p-3 rounded-full mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-pink-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Non-Disruptive After-Hours Service</h3>
                  <p className="text-gray-600">
                    We understand that maintaining normal operations is crucial for fitness facilities. Our pest control services are designed to be completely non-disruptive, with treatments scheduled during off-hours or when your facility is closed to ensure zero impact on your members' experience. Our technicians work efficiently to complete treatments before your facility reopens, allowing you to maintain your regular schedule without interruptions or inconvenience to your members.
                  </p>
                </div>
              </div>
            </div>

            {/* Block 4 */}
            <div className="bg-gray-50 p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-start mb-4">
                <div className="bg-pink-100 p-3 rounded-full mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-pink-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Reputation Protection</h3>
                  <p className="text-gray-600">
                    In the competitive fitness industry, maintaining a clean, pest-free environment is essential for member retention and reputation management. Our gym pest control services focus on preventing pest issues before they impact your members or become visible problems. We implement proactive monitoring and treatment strategies that identify and address potential problems early, protecting your facility's reputation and ensuring a positive experience for your members.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* CTA section */}
          <div className="bg-gradient-to-r from-pink-500 to-pink-700 p-8 rounded-lg text-center text-white">
            <h3 className="text-2xl font-bold mb-4">Protect Your Fitness Facility</h3>
            <p className="mb-6 max-w-2xl mx-auto">
              Don't let pest problems compromise member health or damage your facility's reputation. Our professional pest control services provide effective, health-focused solutions tailored specifically for fitness environments.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a href="/contact" className="bg-white text-pink-700 hover:bg-gray-100 font-bold py-3 px-6 rounded-full transition-colors">
                Schedule Inspection
              </a>
              <a href={`tel:${COMPANY_INFO.phone}`} className="bg-transparent border-2 border-white hover:bg-white/10 text-white font-bold py-3 px-6 rounded-full transition-colors">
                Call Us Now
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

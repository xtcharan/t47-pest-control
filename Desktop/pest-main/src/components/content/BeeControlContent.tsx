"use client";

import Image from 'next/image';
import Link from 'next/link';

export default function BeeControlContent() {
  return (
    <section className="py-16 bg-white relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-green-50/50 rounded-bl-[100px] z-0"></div>
        <div className="absolute bottom-0 left-0 w-1/4 h-1/4 bg-green-50/30 rounded-tr-[100px] z-0"></div>
        <div className="absolute top-1/3 left-10 w-6 h-6 bg-green-100 rounded-full z-0"></div>
        <div className="absolute bottom-1/4 right-20 w-4 h-4 bg-green-200 rounded-full z-0"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <span className="inline-block px-3 py-1 bg-green-100 text-green-800 text-sm font-semibold rounded-full mb-3">
            ENVIRONMENTALLY RESPONSIBLE SOLUTIONS
          </span>
          <h2 className="text-4xl font-bold mb-4 text-gray-900">
            Our <span className="text-green-600">Bee Management</span> Approach
          </h2>
          <div className="w-24 h-1 bg-green-600 mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-3xl mx-auto">
            We specialize in humane bee removal and relocation services that protect both your property and these essential pollinators that are vital to our ecosystem.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
          <div className="relative rounded-xl overflow-hidden shadow-xl h-[400px] group">
            <div className="absolute inset-0">
              <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-transparent z-10"></div>
              <Image
                src="/bee-relocation.jpg"
                alt="Humane Bee Relocation Services"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>

            <div className="absolute inset-0 z-20 p-8 flex flex-col justify-end">
              <h3 className="text-2xl font-bold text-white mb-2">Bee Conservation Specialists</h3>
              <p className="text-white/90 max-w-md">
                Our trained apiarists safely remove and relocate honey bee colonies to local apiaries where they can continue their essential role as pollinators.
              </p>
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100 hover:shadow-lg transition-shadow duration-300">
              <div className="flex items-start mb-4">
                <div className="bg-green-100 p-3 rounded-full mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-gray-800">Swarm Capture & Relocation</h3>
                  <p className="text-gray-600">
                    We safely capture temporary bee swarms and relocate them to suitable environments where they can establish new colonies and continue their vital pollination work.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100 hover:shadow-lg transition-shadow duration-300">
              <div className="flex items-start mb-4">
                <div className="bg-green-100 p-3 rounded-full mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-gray-800">Established Hive Removal</h3>
                  <p className="text-gray-600">
                    For established hives in structures, we carefully extract the entire colony, including the queen, brood, and honeycomb, then safely relocate them to a new hive box maintained by local beekeepers.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100 hover:shadow-lg transition-shadow duration-300">
              <div className="flex items-start mb-4">
                <div className="bg-green-100 p-3 rounded-full mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-gray-800">Structural Repairs & Prevention</h3>
                  <p className="text-gray-600">
                    After removal, we repair entry points and damage caused by the hive, then implement preventative measures to discourage future bee colonies from establishing in your structures.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-amber-50/70 rounded-xl p-8 mb-16">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/4 mb-6 md:mb-0 flex justify-center">
              <div className="w-20 h-20 bg-amber-100 rounded-full flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-amber-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
            </div>
            <div className="md:w-3/4">
              <h3 className="text-2xl font-bold text-amber-800 mb-3">The Importance of Professional Bee Management</h3>
              <p className="text-gray-700 mb-4">
                While bees are essential pollinators that support our ecosystem and food supply, colonies in or near structures can pose risks to people, especially those with allergies. DIY removal attempts often result in bee aggression, incomplete removal, or harm to the colony. Our professional approach ensures both your safety and the preservation of these vital pollinators.
              </p>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                <li className="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-amber-600 mr-2" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-700">Protects people with bee allergies</span>
                </li>
                <li className="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-amber-600 mr-2" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-700">Preserves bee colonies</span>
                </li>
                <li className="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-amber-600 mr-2" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-700">Prevents structural damage</span>
                </li>
                <li className="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-amber-600 mr-2" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-700">Supports local beekeeping</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="text-center">
          <div className="bg-gradient-to-r from-amber-500 to-amber-600 text-white p-8 rounded-xl shadow-lg max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">Need Professional Bee Management?</h3>
            <p className="text-white/90 mb-6 max-w-2xl mx-auto">
              Our bee specialists provide safe, humane solutions for bee swarms and established hives while protecting these essential pollinators.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/contact" className="bg-white text-amber-600 hover:bg-amber-50 font-bold py-3 px-6 rounded-full transition-colors duration-300">
                Schedule Service
              </Link>
              <Link href="/contact" className="bg-transparent border-2 border-white text-white hover:bg-white/10 font-bold py-3 px-6 rounded-full transition-colors duration-300">
                Emergency Response
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

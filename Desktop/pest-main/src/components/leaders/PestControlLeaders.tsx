"use client";

import Image from 'next/image';
import Link from 'next/link';

export default function PestControlLeaders() {
  return (
    <section className="py-20 bg-white text-gray-800 relative">
      {/* Background pattern - using a subtle dot pattern */}
      <div className="absolute inset-0 opacity-5 bg-[url('/images/safety/dot-pattern.svg')] bg-[length:20px_20px]"></div>
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-3 relative inline-block text-gray-900">
            Victoria&apos;s Pest Control Leaders
            <span className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-red-600"></span>
          </h2>
          <p className="text-xl text-gray-700 mt-6">
            Staying At The Forefront Of Pest Control <span className="font-bold text-gray-900"> for Decades !</span>
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Residential Pest Control */}
          <div className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-200 group">
            <div className="relative h-64 w-full">
              <Image
                src="/images/services/residential-pest-control.jpg" // Updated image
                alt="Residential Pest Control"
                fill
                style={{ objectFit: 'cover' }}
                className="transition-transform duration-200 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-70"></div>
              <div className="absolute bottom-0 left-0 w-full p-4">
                <div className="flex items-center space-x-2">
                  <div className="w-10 h-10 rounded-full bg-red-600 flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-white">Residential Pest Control</h3>
                </div>
              </div>
            </div>
            <div className="p-6">
              <p className="text-gray-700 mb-5 leading-relaxed">
                Protecting your home from unwanted pests is essential and easy with FMCS&apos;s your Home Protection Plans. Household pests like cockroaches, ants, rats, mice, spiders, fleas, flying insects, bed bugs, bird control and termites can cause costly damage to your property and more importantly pose health risks to your family and pets.
              </p>
              <Link href="/services/residential" className="inline-flex items-center px-4 py-2 bg-red-600 text-white rounded-lg transition-colors duration-200 hover:bg-red-700">
                <span>Learn more</span>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </Link>
            </div>
          </div>

          {/* Commercial Pest Control */}
          <div className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-200 group">
            <div className="relative h-64 w-full">
              <Image
                src="/images/services/commercial-pest-control.jpg" // Updated image
                alt="Commercial Pest Control"
                fill
                style={{ objectFit: 'cover' }}
                className="transition-transform duration-200 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-70"></div>
              <div className="absolute bottom-0 left-0 w-full p-4">
                <div className="flex items-center space-x-2">
                  <div className="w-10 h-10 rounded-full bg-red-600 flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-white">Commercial Pest Control</h3>
                </div>
              </div>
            </div>
            <div className="p-6">
              <p className="text-gray-700 mb-5 leading-relaxed">
                From creepy crawlies, stored product and flying insects to rodents and bed bugs, 
                we analyze each site, the environment and risks before developing a tailored pest control plan. 
                Our integrated pest control services use the latest technology and tailored solutions.
              </p>
              <Link href="/services/commercial" className="inline-flex items-center px-4 py-2 bg-red-600 text-white rounded-lg transition-colors duration-200 hover:bg-red-700">
                <span>Learn more</span>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </Link>
            </div>
          </div>

          {/* Termite Solutions */}
          <div className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-200 group">
            <div className="relative h-64 w-full">
              <Image
                src="/images/services/termite-solutions.jpg" // Updated image
                alt="Termite Solutions"
                fill
                style={{ objectFit: 'cover' }}
                className="transition-transform duration-200 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-70"></div>
              <div className="absolute bottom-0 left-0 w-full p-4">
                <div className="flex items-center space-x-2">
                  <div className="w-10 h-10 rounded-full bg-red-600 flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-white">Termite Solutions</h3>
                </div>
              </div>
            </div>
            <div className="p-6">
              <p className="text-gray-700 mb-5 leading-relaxed">
                Despite their size, termites are by far the most damaging pest that Aussie homes face. Termite surveys find that 1 in 3 properties in Australia will be affected by termites at some stage, which causes greater damage than fires, storms, and floods combined, causing up to $1 billion in damage to homes each year.
              </p>
              <Link href="/services/termite" className="inline-flex items-center px-4 py-2 bg-red-600 text-white rounded-lg transition-colors duration-200 hover:bg-red-700">
                <span>Learn more</span>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Simple decorative element */}
      <div className="w-full h-1 bg-gradient-to-r from-transparent via-red-600 to-transparent opacity-30 mt-10"></div>
    </section>
  );
}


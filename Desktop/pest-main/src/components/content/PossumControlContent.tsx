"use client";

import Image from 'next/image';
import Link from 'next/link';

export default function PossumControlContent() {
  return (
    <section className="py-16 bg-white relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-purple-50/50 rounded-bl-[100px] z-0"></div>
        <div className="absolute bottom-0 left-0 w-1/4 h-1/4 bg-purple-50/30 rounded-tr-[100px] z-0"></div>
        <div className="absolute top-1/3 left-10 w-6 h-6 bg-purple-100 rounded-full z-0"></div>
        <div className="absolute bottom-1/4 right-20 w-4 h-4 bg-purple-200 rounded-full z-0"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <span className="inline-block px-3 py-1 bg-purple-100 text-purple-800 text-sm font-semibold rounded-full mb-3">
            HUMANE POSSUM MANAGEMENT SOLUTIONS
          </span>
          <h2 className="text-4xl font-bold mb-4 text-gray-900">
            Why Choose Our <span className="text-purple-600">Possum Control</span> Services?
          </h2>
          <div className="w-24 h-1 bg-purple-600 mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Our professional possum management approach combines humane removal techniques with effective prevention strategies to solve your possum problems while respecting wildlife.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
          <div className="relative rounded-xl overflow-hidden shadow-xl h-[400px] group">
            <div className="absolute inset-0">
              <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-transparent z-10"></div>
              <Image
                src="/possum-control-service.jpg"
                alt="Professional Possum Control Services"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>

            <div className="absolute inset-0 z-20 p-8 flex flex-col justify-end">
              <h3 className="text-2xl font-bold text-white mb-2">Humane Possum Management</h3>
              <p className="text-white/90 max-w-md">
                Our wildlife specialists use ethical, non-lethal methods to safely remove possums and prevent their return to your property.
              </p>
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100 hover:shadow-lg transition-shadow duration-300">
              <div className="flex items-start mb-4">
                <div className="bg-purple-100 p-3 rounded-full mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-gray-800">Wildlife-Friendly Approach</h3>
                  <p className="text-gray-600">
                    We use humane trapping and relocation methods that comply with wildlife protection laws, ensuring possums are safely removed without harm.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100 hover:shadow-lg transition-shadow duration-300">
              <div className="flex items-start mb-4">
                <div className="bg-purple-100 p-3 rounded-full mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-gray-800">Comprehensive Solutions</h3>
                  <p className="text-gray-600">
                    We don't just remove possums—we identify and seal entry points, repair damage, clean affected areas, and implement prevention strategies for long-term protection.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100 hover:shadow-lg transition-shadow duration-300">
              <div className="flex items-start mb-4">
                <div className="bg-purple-100 p-3 rounded-full mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-gray-800">Licensed Wildlife Specialists</h3>
                  <p className="text-gray-600">
                    Our technicians are trained in possum behavior, biology, and ethical handling techniques, ensuring safe and effective management that complies with all regulations.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-purple-50/50 rounded-xl p-8 mb-16">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/4 mb-6 md:mb-0 flex justify-center">
              <div className="w-20 h-20 bg-purple-100 rounded-full flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                </svg>
              </div>
            </div>
            <div className="md:w-3/4">
              <h3 className="text-2xl font-bold text-purple-800 mb-3">The Problems Possums Can Cause</h3>
              <p className="text-gray-700 mb-4">
                While possums are an important part of our ecosystem, they can create significant problems when they take up residence in your home or business. Possums can damage insulation, wiring, and ductwork in attics and crawl spaces, creating fire hazards and reducing energy efficiency. Their droppings and urine can cause unpleasant odors, stain ceilings, and potentially spread diseases like leptospirosis and salmonellosis. Possums may also damage gardens and landscaping, raid garbage bins, and disturb pets. Additionally, their nocturnal activities can create disruptive noises in walls and ceilings. Our humane possum management addresses these issues while respecting wildlife.
              </p>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                <li className="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-purple-600 mr-2" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-700">Structural damage</span>
                </li>
                <li className="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-purple-600 mr-2" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-700">Health concerns</span>
                </li>
                <li className="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-purple-600 mr-2" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-700">Noise disturbances</span>
                </li>
                <li className="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-purple-600 mr-2" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-700">Property contamination</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="text-center">
          <div className="bg-gradient-to-r from-purple-600 to-purple-700 text-white p-8 rounded-xl shadow-lg max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">Humane Possum Management Solutions</h3>
            <p className="text-white/90 mb-6 max-w-2xl mx-auto">
              Our wildlife specialists provide effective, ethical possum control that protects your property while respecting these important native animals.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/contact" className="bg-white text-purple-700 hover:bg-purple-50 font-bold py-3 px-6 rounded-full transition-colors duration-300">
                Schedule Inspection
              </Link>
              <Link href="/contact" className="bg-transparent border-2 border-white text-white hover:bg-white/10 font-bold py-3 px-6 rounded-full transition-colors duration-300">
                Get Free Quote
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

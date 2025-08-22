"use client";

import Image from 'next/image';
import Link from 'next/link';
import { COMPANY_INFO } from '../lib/constants';

export default function PrePurchaseTermiteSpecialists() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <span className="inline-block px-3 py-1 bg-red-light/10 text-red-dark text-sm font-semibold rounded-full mb-3">
              EXPERT TERMITE SPECIALISTS
            </span>
            <h2 className="text-4xl font-bold mb-4 text-gray-900">
              Why Choose Our <span className="text-red-dark">Termite Specialists</span> For Pre-Purchase Inspection?
            </h2>
            <div className="w-24 h-1 bg-red-light mx-auto mb-6"></div>
          </div>

          {/* Main Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            {/* Left Content */}
            <div className="space-y-6">
              <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Three Decades of Melbourne Expertise</h3>
                
                <div className="space-y-4">
                  <p className="text-gray-700 leading-relaxed">
                    With over <strong>30 years of experience</strong> protecting Melbourne homes from destructive termites, 
                    our team has developed an unparalleled understanding of termite behavior, habitats, and the unique 
                    challenges posed by Australia's most costly pest.
                  </p>
                  
                  <p className="text-gray-700 leading-relaxed">
                    Having completed over <strong>10,000 successful jobs</strong>, we've earned recognition as 
                    <strong> National Specialist Pest Manager Of The Year</strong> and <strong>Victorian Pest Manager of the Year</strong> 
                    through our unwavering commitment to excellence, expertise, and results.
                  </p>
                  
                  <p className="text-gray-700 leading-relaxed">
                    Our team consists of fully <strong>insured, accredited, and licensed</strong> pre-purchase building 
                    and pest inspection experts who are passionate about helping prospective Melbourne homeowners 
                    make informed decisions with their investment.
                  </p>
                </div>

                {/* Key Stats */}
                <div className="grid grid-cols-3 gap-4 mt-8 pt-6 border-t border-gray-100">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-red-dark mb-1">30+</div>
                    <div className="text-sm text-gray-600">Years Experience</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-red-dark mb-1">10,000+</div>
                    <div className="text-sm text-gray-600">Jobs Completed</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-red-dark mb-1">2</div>
                    <div className="text-sm text-gray-600">Major Awards</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Image */}
            <div className="relative">
              <div className="relative rounded-xl overflow-hidden shadow-xl h-[500px] group">
                <div className="absolute inset-0 p-0.5 rounded-xl bg-red-light z-10 opacity-70 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                <div className="absolute inset-0.5 rounded-xl overflow-hidden z-20">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent z-10"></div>
                  <Image
                    src="/termite-inspection-process.jpg"
                    alt="Professional Termite Inspection Specialists"
                    fill
                    className="object-cover transform group-hover:scale-105 transition-transform duration-700"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>

                <div className="absolute bottom-0 left-0 p-6 z-30">
                  <h3 className="text-white font-bold text-xl mb-2">Award-Winning Excellence</h3>
                  <p className="text-white/80 max-w-xs">
                    Recognized nationally for our expertise and commitment to protecting Melbourne properties.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Why Choose Us Features */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow border border-gray-100">
              <div className="bg-red-light/20 p-3 rounded-full w-fit mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-red-dark" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Fully Licensed & Insured</h4>
              <p className="text-gray-600 text-sm">Complete peace of mind with comprehensive insurance and professional accreditation.</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow border border-gray-100">
              <div className="bg-red-light/20 p-3 rounded-full w-fit mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-red-dark" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Same-Day Reports</h4>
              <p className="text-gray-600 text-sm">Fast turnaround times to meet your settlement deadlines and purchase decisions.</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow border border-gray-100">
              <div className="bg-red-light/20 p-3 rounded-full w-fit mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-red-dark" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Advanced Technology</h4>
              <p className="text-gray-600 text-sm">Thermal imaging, moisture detection, and acoustic equipment for comprehensive assessment.</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow border border-gray-100">
              <div className="bg-red-light/20 p-3 rounded-full w-fit mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-red-dark" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Expert Team</h4>
              <p className="text-gray-600 text-sm">Award-winning specialists with decades of Melbourne termite inspection experience.</p>
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center">
            <div className="bg-gradient-to-r from-red-light to-red-dark p-8 rounded-xl text-white shadow-lg max-w-3xl mx-auto">
              <h3 className="text-2xl font-bold mb-4">Ready to Protect Your Investment?</h3>
              <p className="mb-6 text-white/90">
                Don't let termites turn your dream home into a costly nightmare. Book your comprehensive pre-purchase inspection today.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href={`tel:${COMPANY_INFO.phone}`}
                  className="bg-white text-red-dark hover:bg-gray-100 font-bold py-3 px-8 rounded-full transition-colors text-lg flex items-center justify-center"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                  </svg>
                  Call {COMPANY_INFO.phone}
                </Link>
                <Link
                  href="/contact"
                  className="border-2 border-white text-white hover:bg-white hover:text-red-dark font-bold py-3 px-8 rounded-full transition-colors text-lg"
                >
                  Book Inspection Online
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

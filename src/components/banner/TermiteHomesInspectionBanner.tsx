"use client";
import styles from './TopBanner.module.css';

export default function TermiteHomesInspectionBanner() {
  return (
    <section className="bg-[linear-gradient(135deg,_#8BC34A_50%,_#4CAF50_50%)] pt-6 pb-10 relative overflow-hidden z-20 -mt-2">
      {/* Diagonal pattern background */}
      <div className={`absolute inset-0 z-10 opacity-15 ${styles.patternBackground}`}></div>

      {/* Diagonal overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#2E7D32]/10 to-transparent z-20"></div>

      <div className="container mx-auto px-4 relative z-30">
        {/* Title section */}
        <div className="flex flex-col items-center justify-center mb-8">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4 tracking-wide text-center drop-shadow-md">
            Residential Termite Inspection Services
          </h2>
          <p className="text-xl md:text-2xl text-white max-w-4xl mx-auto text-center font-light">
            Specialized termite inspections for family homes with eco-friendly, family-safe methods
          </p>
        </div>

        {/* Icons section */}
        <div className="flex flex-wrap justify-center items-center gap-4 md:gap-6 lg:gap-8 mb-2">
          {/* Family-Safe Methods */}
          <div className="flex flex-col items-center text-center px-3 py-2 w-32">
            <div className="w-12 h-12 bg-black rounded-md flex items-center justify-center mb-3">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
              </svg>
            </div>
            <div className="h-10 flex items-center justify-center">
              <span className="text-white font-semibold text-base">Family-Safe Methods</span>
            </div>
          </div>

          {/* Eco-Friendly */}
          <div className="flex flex-col items-center text-center px-3 py-2 w-32">
            <div className="w-12 h-12 bg-black rounded-md flex items-center justify-center mb-3">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
              </svg>
            </div>
            <div className="h-10 flex items-center justify-center">
              <span className="text-white font-semibold text-base">Eco-Friendly</span>
            </div>
          </div>

          {/* Comprehensive Coverage */}
          <div className="flex flex-col items-center text-center px-3 py-2 w-32">
            <div className="w-12 h-12 bg-black rounded-md flex items-center justify-center mb-3">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <div className="h-10 flex items-center justify-center">
              <span className="text-white font-semibold text-base">Complete Coverage</span>
            </div>
          </div>

          {/* Same-Day Service */}
          <div className="flex flex-col items-center text-center px-3 py-2 w-32">
            <div className="w-12 h-12 bg-black rounded-md flex items-center justify-center mb-3">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <div className="h-10 flex items-center justify-center">
              <span className="text-white font-semibold text-base">Same-Day Service</span>
            </div>
          </div>

          {/* Detailed Reporting */}
          <div className="flex flex-col items-center text-center px-3 py-2 w-32">
            <div className="w-12 h-12 bg-black rounded-md flex items-center justify-center mb-3">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
            </div>
            <div className="h-10 flex items-center justify-center">
              <span className="text-white font-semibold text-base">Detailed Reports</span>
            </div>
          </div>

          {/* Free Follow-up */}
          <div className="flex flex-col items-center text-center px-3 py-2 w-32">
            <div className="w-12 h-12 bg-black rounded-md flex items-center justify-center mb-3">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
            </div>
            <div className="h-10 flex items-center justify-center">
              <span className="text-white font-semibold text-base">Free Follow-up</span>
            </div>
          </div>
        </div>

        {/* CTA button */}
        <div className="flex justify-center mt-8">
          <a
            href="/contact"
            className="bg-white text-green-dark hover:bg-gray-100 font-bold py-3 px-8 rounded-full transition-all duration-300 transform hover:scale-105 shadow-md"
          >
            Protect Your Home
          </a>
        </div>
      </div>
    </section>
  );
}

"use client";
import styles from './TopBanner.module.css';

export default function AnnualTermiteInspectionBanner() {
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
            Annual Termite Inspection Services
          </h2>
          <p className="text-xl md:text-2xl text-white max-w-4xl mx-auto text-center font-light">
            Ongoing protection with regular annual termite monitoring and early detection
          </p>
        </div>

        {/* Icons section */}
        <div className="flex flex-wrap justify-center items-center gap-4 md:gap-6 lg:gap-8 mb-2">
          {/* Regular Monitoring */}
          <div className="flex flex-col items-center text-center px-3 py-2 w-32">
            <div className="w-12 h-12 bg-black rounded-md flex items-center justify-center mb-3">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
              </svg>
            </div>
            <div className="h-10 flex items-center justify-center">
              <span className="text-white font-semibold text-base">Regular Monitoring</span>
            </div>
          </div>

          {/* Early Detection */}
          <div className="flex flex-col items-center text-center px-3 py-2 w-32">
            <div className="w-12 h-12 bg-black rounded-md flex items-center justify-center mb-3">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
            <div className="h-10 flex items-center justify-center">
              <span className="text-white font-semibold text-base">Early Detection</span>
            </div>
          </div>

          {/* Cost Prevention */}
          <div className="flex flex-col items-center text-center px-3 py-2 w-32">
            <div className="w-12 h-12 bg-black rounded-md flex items-center justify-center mb-3">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
              </svg>
            </div>
            <div className="h-10 flex items-center justify-center">
              <span className="text-white font-semibold text-base">Cost Prevention</span>
            </div>
          </div>

          {/* AS3660.2 Compliant */}
          <div className="flex flex-col items-center text-center px-3 py-2 w-32">
            <div className="w-12 h-12 bg-black rounded-md flex items-center justify-center mb-3">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <div className="h-10 flex items-center justify-center">
              <span className="text-white font-semibold text-base">AS3660.2 Compliant</span>
            </div>
          </div>

          {/* Comprehensive Reports */}
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

          {/* 7-Day Availability */}
          <div className="flex flex-col items-center text-center px-3 py-2 w-32">
            <div className="w-12 h-12 bg-black rounded-md flex items-center justify-center mb-3">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
            </div>
            <div className="h-10 flex items-center justify-center">
              <span className="text-white font-semibold text-base">7-Day Availability</span>
            </div>
          </div>
        </div>

        {/* CTA button */}
        <div className="flex justify-center mt-8">
          <a
            href="/contact"
            className="bg-white text-green-dark hover:bg-gray-100 font-bold py-3 px-8 rounded-full transition-all duration-300 transform hover:scale-105 shadow-md"
          >
            Schedule Annual Inspection
          </a>
        </div>
      </div>
    </section>
  );
}

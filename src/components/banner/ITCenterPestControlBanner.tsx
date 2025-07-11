"use client";
import styles from './TopBanner.module.css';

export default function ITCenterPestControlBanner() {
  return (
    <section className="bg-[linear-gradient(135deg,_#00BCD4_50%,_#00ACC1_50%)] pt-6 pb-10 relative overflow-hidden z-20 -mt-2">
      {/* Diagonal pattern background */}
      <div className={`absolute inset-0 z-10 opacity-15 ${styles.patternBackground}`}
      ></div>

      {/* Diagonal overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#006064]/10 to-transparent z-20"></div>

      <div className="container mx-auto px-4 relative z-30">
        {/* Title section */}
        <div className="flex flex-col items-center justify-center mb-8">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4 tracking-wide text-center drop-shadow-md">
            IT Center Pest Control Services
          </h2>
          <p className="text-xl md:text-2xl text-white max-w-4xl mx-auto text-center font-light">
            Protecting sensitive equipment and operational continuity with specialized pest management solutions
          </p>
        </div>

        {/* Icons section */}
        <div className="flex flex-wrap justify-center items-center gap-4 md:gap-6 lg:gap-8 mb-2">
          {/* Equipment Protection */}
          <div className="flex flex-col items-center text-center px-3 py-2 w-32">
            <div className="w-12 h-12 bg-black rounded-md flex items-center justify-center mb-3">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
              </svg>
            </div>
            <div className="h-10 flex items-center justify-center">
              <span className="text-white font-semibold text-base">Equipment<br />Protection</span>
            </div>
          </div>

          {/* Non-Disruptive */}
          <div className="flex flex-col items-center text-center px-3 py-2 w-32">
            <div className="w-12 h-12 bg-black rounded-md flex items-center justify-center mb-3">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <div className="h-10 flex items-center justify-center">
              <span className="text-white font-semibold text-base">Non-Disruptive<br />Service</span>
            </div>
          </div>

          {/* Cable Protection */}
          <div className="flex flex-col items-center text-center px-3 py-2 w-32">
            <div className="w-12 h-12 bg-black rounded-md flex items-center justify-center mb-3">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
              </svg>
            </div>
            <div className="h-10 flex items-center justify-center">
              <span className="text-white font-semibold text-base">Cable<br />Protection</span>
            </div>
          </div>

          {/* 24/7 Response */}
          <div className="flex flex-col items-center text-center px-3 py-2 w-32">
            <div className="w-12 h-12 bg-black rounded-md flex items-center justify-center mb-3">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <div className="h-10 flex items-center justify-center">
              <span className="text-white font-semibold text-base">24/7<br />Response</span>
            </div>
          </div>

          {/* Preventative Programs */}
          <div className="flex flex-col items-center text-center px-3 py-2 w-32">
            <div className="w-12 h-12 bg-black rounded-md flex items-center justify-center mb-3">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <div className="h-10 flex items-center justify-center">
              <span className="text-white font-semibold text-base">Preventative<br />Programs</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

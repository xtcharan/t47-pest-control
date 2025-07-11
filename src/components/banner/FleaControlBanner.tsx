"use client";
import styles from './TopBanner.module.css';

export default function FleaControlBanner() {
  return (
    <section className="bg-[linear-gradient(135deg,_#8BC34A_50%,_#4CAF50_50%)] pt-6 pb-10 relative overflow-hidden z-20 -mt-2">
      <div className={`absolute inset-0 z-10 opacity-15 ${styles.patternBackground}`}></div>
      <div className="absolute inset-0 bg-gradient-to-br from-[#2E7D32]/10 to-transparent z-20"></div>

      <div className="container mx-auto px-4 relative z-30">
        <div className="flex flex-col items-center justify-center mb-8">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4 tracking-wide text-center drop-shadow-md">
            Complete Flea Elimination Solutions
          </h2>
          <p className="text-xl md:text-2xl text-white max-w-4xl mx-auto text-center font-light">
            Multi-stage treatments targeting all flea life stages for long-lasting protection
          </p>
        </div>

        <div className="flex flex-wrap justify-center items-center gap-4 md:gap-6 lg:gap-8 mb-2">
          <div className="flex flex-col items-center text-center px-3 py-2 w-32">
            <div className="w-12 h-12 bg-black rounded-md flex items-center justify-center mb-3">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
            <div className="h-10 flex items-center justify-center">
              <span className="text-white font-semibold text-base">Thorough<br />Inspection</span>
            </div>
          </div>

          <div className="flex flex-col items-center text-center px-3 py-2 w-32">
            <div className="w-12 h-12 bg-black rounded-md flex items-center justify-center mb-3">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
              </svg>
            </div>
            <div className="h-10 flex items-center justify-center">
              <span className="text-white font-semibold text-base">Adult Flea<br />Elimination</span>
            </div>
          </div>

          <div className="flex flex-col items-center text-center px-3 py-2 w-32">
            <div className="w-12 h-12 bg-black rounded-md flex items-center justify-center mb-3">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <div className="h-10 flex items-center justify-center">
              <span className="text-white font-semibold text-base">Larval<br />Control</span>
            </div>
          </div>

          <div className="flex flex-col items-center text-center px-3 py-2 w-32">
            <div className="w-12 h-12 bg-black rounded-md flex items-center justify-center mb-3">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
            </div>
            <div className="h-10 flex items-center justify-center">
              <span className="text-white font-semibold text-base">Pet-Safe<br />Treatments</span>
            </div>
          </div>

          <div className="flex flex-col items-center text-center px-3 py-2 w-32">
            <div className="w-12 h-12 bg-black rounded-md flex items-center justify-center mb-3">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 9v2m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <div className="h-10 flex items-center justify-center">
              <span className="text-white font-semibold text-base">Egg<br />Inhibitors</span>
            </div>
          </div>

          <div className="flex flex-col items-center text-center px-3 py-2 w-32">
            <div className="w-12 h-12 bg-black rounded-md flex items-center justify-center mb-3">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <div className="h-10 flex items-center justify-center">
              <span className="text-white font-semibold text-base">Indoor &<br />Outdoor</span>
            </div>
          </div>

          <div className="flex flex-col items-center text-center px-3 py-2 w-32">
            <div className="w-12 h-12 bg-black rounded-md flex items-center justify-center mb-3">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
              </svg>
            </div>
            <div className="h-10 flex items-center justify-center">
              <span className="text-white font-semibold text-base">Prevention<br />Strategies</span>
            </div>
          </div>

          <div className="flex flex-col items-center text-center px-3 py-2 w-32">
            <div className="w-12 h-12 bg-black rounded-md flex items-center justify-center mb-3">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <div className="h-10 flex items-center justify-center">
              <span className="text-white font-semibold text-base">Follow-Up<br />Treatments</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

"use client";
import styles from './TopBanner.module.css';

export default function TermiteDustingBanner() {
  return (
    <section className="bg-[linear-gradient(135deg,_#3B82F6_50%,_#1E40AF_50%)] pt-6 pb-10 relative overflow-hidden z-20 -mt-2">
      {/* Diagonal pattern background */}
      <div className={`absolute inset-0 z-10 opacity-15 ${styles.patternBackground}`}></div>

      {/* Diagonal overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#1E3A8A]/10 to-transparent z-20"></div>

      <div className="container mx-auto px-4 relative z-30">
        {/* Title section */}
        <div className="flex flex-col items-center justify-center mb-8">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4 tracking-wide text-center drop-shadow-md">
            Termite Dusting Treatment in Melbourne
          </h2>
          <p className="text-xl md:text-2xl text-white max-w-4xl mx-auto text-center font-light">
            Targeted application and effective elimination technology for complete termite protection
          </p>
        </div>




      </div>
    </section>
  );
}

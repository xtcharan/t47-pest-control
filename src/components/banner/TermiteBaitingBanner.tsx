"use client";
import styles from './TopBanner.module.css';

export default function TermiteBaitingBanner() {
  return (
    <section className="bg-[linear-gradient(135deg,_#9333EA_50%,_#7C3AED_50%)] pt-6 pb-10 relative overflow-hidden z-20 -mt-2">
      {/* Diagonal pattern background */}
      <div className={`absolute inset-0 z-10 opacity-15 ${styles.patternBackground}`}></div>

      {/* Diagonal overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#6B21A8]/10 to-transparent z-20"></div>

      <div className="container mx-auto px-4 relative z-30">
        {/* Title section */}
        <div className="flex flex-col items-center justify-center mb-8">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4 tracking-wide text-center drop-shadow-md">
            Termite Baiting in Melbourne and Across Victoria
          </h2>
          <p className="text-xl md:text-2xl text-white max-w-4xl mx-auto text-center font-light">
            Modern, documentable colony elimination with minimal disruption—inside structures and around the perimeter
          </p>
        </div>




      </div>
    </section>
  );
}

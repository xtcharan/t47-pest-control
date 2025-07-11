"use client";
import QuoteForm from './NewQuoteForm';
import AlertBanner from './AlertBanner';
import OptimizedImage from '../common/OptimizedImage';
import { useEffect, useState } from 'react';
import Link from 'next/link';

export default function TermiteHomesInspectionHero() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <div className="relative min-h-[600px] md:min-h-[650px] bg-[#0a0a0a] overflow-hidden">
      <AlertBanner />

      {/* Mobile layout - Stacked */}
      <div className="md:hidden relative z-10">
        {/* Background image for mobile */}
        <div className="relative h-[400px] overflow-hidden">
          <OptimizedImage
            src="/home-termite-inspection.jpg"
            fallbackSrc="/termite-inspection.jpg"
            alt="Home Termite Inspection"
            fill
            priority
            sizes="100vw"
            className="object-cover"
            style={{ objectPosition: '50% 30%' }}
            quality={85}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/60 to-transparent"></div>
        </div>

        {/* Content below image for mobile */}
        <div className={`w-full bg-[#0a0a0a] px-6 py-10 -mt-10 rounded-t-3xl shadow-lg transition-all duration-1000 ease-out ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h1 className="text-3xl sm:text-4xl font-bold mb-5 leading-tight text-center">
            <span className="text-green-light block mb-2">TERMITE INSPECTION</span>
            <span className="text-white block">FOR HOMES</span>
          </h1>

          <div className="w-24 h-1 bg-green-light mb-6 mx-auto"></div>

          <p className="text-lg mb-8 text-white text-center max-w-md mx-auto">
            Protect your family home with specialized residential termite inspections. Family-safe methods and comprehensive coverage.
          </p>

          <div className="flex flex-col gap-4 items-center">
            <Link href="/contact" className="modern-button bg-green-light hover:bg-green-dark text-black transition-colors w-full max-w-xs text-center">
              Protect Your Home
            </Link>
            <Link href="/contact" className="modern-button bg-transparent border-2 border-white hover:bg-white/10 text-white transition-colors w-full max-w-xs text-center">
              Get Quote
            </Link>
          </div>
        </div>

        {/* Quote form for mobile */}
        <div className="px-6 pb-10 bg-[#0a0a0a]">
          <QuoteForm />
        </div>
      </div>

      {/* Desktop layout - Side by side */}
      <div className="hidden md:block">
        {/* Background image */}
        <div className="absolute inset-0 z-0">
          <OptimizedImage
            src="/home-termite-inspection.jpg"
            fallbackSrc="/termite-inspection.jpg"
            alt="Home Termite Inspection"
            fill
            priority
            sizes="100vw"
            className="object-cover scale-85 transition-transform duration-10000 ease-in-out"
            style={{ objectPosition: '65% 10%' }}
            quality={85}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0a0a0a]/95 via-[#0a0a0a]/70 to-[#0a0a0a]/30"></div>
        </div>

        {/* Content overlay */}
        <div className="relative z-20 flex items-center min-h-[650px] pt-20">
          {/* Left side - Content */}
          <div className={`w-1/2 px-8 lg:px-16 transition-all duration-1000 ease-out ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight">
              <span className="text-green-light block mb-2">TERMITE INSPECTION</span>
              <span className="text-white block">FOR HOMES</span>
            </h1>

            <div className="w-32 h-1 bg-green-light mb-8"></div>

            <p className="text-xl mb-8 text-white max-w-lg leading-relaxed">
              Safeguard your family's most valuable asset with our specialized residential termite inspection services. Eco-friendly, family-safe methods.
            </p>

            <div className="flex flex-wrap gap-4 mt-2">
              <Link href="/contact" className="modern-button bg-green-light hover:bg-green-dark text-black transition-colors">
                Protect Your Home
              </Link>
              <Link href="/contact" className="modern-button bg-transparent border-2 border-white hover:bg-white/10 text-white transition-colors">
                Contact Us
              </Link>
            </div>
          </div>

          {/* Right side - Quote form */}
          <div className={`w-1/2 flex justify-center items-center transition-all duration-1000 delay-300 ease-out ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="w-full max-w-xs ml-80">
              <QuoteForm />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

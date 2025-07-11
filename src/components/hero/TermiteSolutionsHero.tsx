"use client";
import QuoteForm from './NewQuoteForm';
import AlertBanner from './AlertBanner';
import OptimizedImage from '../common/OptimizedImage';
import { useEffect, useState } from 'react';
import Link from 'next/link';

export default function TermiteSolutionsHero() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <div className="relative min-h-[600px] md:min-h-[650px] bg-[#0a0a0a] overflow-hidden">
      <AlertBanner />

      {/* Mobile layout - Image first, then content below */}
      <div className="md:hidden flex flex-col">
        {/* Full image with subtle overlay for mobile */}
        <div className="relative h-[480px] w-full overflow-hidden">
          <OptimizedImage
            src="/termite-solutions-optimized.jpg"
            fallbackSrc="/termite-solutions.jpg"
            alt="Complete Termite Solutions"
            fill
            priority
            sizes="100vw"
            className="object-cover scale-105 transition-transform duration-10000 ease-in-out"
            style={{ objectPosition: '65% 10%' }}
            quality={90}
          />
          {/* Very subtle gradient at the bottom for text readability */}
          <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black/90 to-transparent"></div>

          {/* Subtle vignette effect */}
          <div className="absolute inset-0 box-border border-[20px] border-black/10"></div>
        </div>

        {/* Content below image for mobile - with card-like appearance */}
        <div className={`w-full bg-[#0a0a0a] px-6 py-10 -mt-10 rounded-t-3xl shadow-lg transition-all duration-1000 ease-out ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h1 className="text-3xl sm:text-4xl font-bold mb-5 leading-tight text-center">
            <span className="text-orange-400 block mb-2">COMPLETE</span>
            <span className="text-white block">TERMITE SOLUTIONS</span>
          </h1>

          <div className="w-24 h-1 bg-orange-400 mb-6 mx-auto"></div>

          <p className="text-lg mb-8 text-white text-center max-w-md mx-auto">
            Comprehensive termite protection from inspection to treatment, prevention, and damage repair. Your complete termite solution provider.
          </p>

          {/* Mobile CTA buttons */}
          <div className="flex flex-col gap-4 mb-8">
            <Link
              href="#quote-form"
              className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-4 px-8 rounded-full text-center transition-colors text-lg shadow-lg"
            >
              Get Free Inspection
            </Link>
            <Link
              href="#services"
              className="border-2 border-orange-400 text-orange-400 hover:bg-orange-400 hover:text-white font-bold py-4 px-8 rounded-full text-center transition-colors text-lg"
            >
              View Solutions
            </Link>
          </div>

          {/* Trust indicators for mobile */}
          <div className="flex justify-center items-center gap-6 text-white text-sm">
            <div className="text-center">
              <div className="text-orange-400 font-bold text-lg">25-Year</div>
              <div>Warranty</div>
            </div>
            <div className="text-center">
              <div className="text-orange-400 font-bold text-lg">Certified</div>
              <div>Inspectors</div>
            </div>
            <div className="text-center">
              <div className="text-orange-400 font-bold text-lg">Same-Day</div>
              <div>Service</div>
            </div>
          </div>
        </div>
      </div>

      {/* Desktop layout - Side by side */}
      <div className="hidden md:flex h-full">
        {/* Left side - Content */}
        <div className="w-1/2 flex items-center justify-center p-8 lg:p-12 bg-[#0a0a0a] relative z-10">
          <div className={`max-w-lg transition-all duration-1000 ease-out ${isLoaded ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
            <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold mb-6 leading-tight">
              <span className="text-orange-400 block mb-2">COMPLETE</span>
              <span className="text-white block">TERMITE</span>
              <span className="text-white block">SOLUTIONS</span>
            </h1>

            <div className="w-24 h-1 bg-orange-400 mb-6"></div>

            <p className="text-xl text-white mb-8 leading-relaxed">
              Comprehensive termite protection from inspection to treatment, prevention, and damage repair. Your complete termite solution provider with 25-year warranties.
            </p>

            {/* Desktop CTA buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Link
                href="#quote-form"
                className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-4 px-8 rounded-full text-center transition-colors text-lg shadow-lg"
              >
                Get Free Inspection
              </Link>
              <Link
                href="#services"
                className="border-2 border-orange-400 text-orange-400 hover:bg-orange-400 hover:text-white font-bold py-4 px-8 rounded-full text-center transition-colors text-lg"
              >
                View Solutions
              </Link>
            </div>

            {/* Trust indicators for desktop */}
            <div className="flex gap-8 text-white">
              <div>
                <div className="text-orange-400 font-bold text-xl">25-Year</div>
                <div className="text-sm">Warranty Available</div>
              </div>
              <div>
                <div className="text-orange-400 font-bold text-xl">Certified</div>
                <div className="text-sm">Inspectors</div>
              </div>
              <div>
                <div className="text-orange-400 font-bold text-xl">Same-Day</div>
                <div className="text-sm">Service Available</div>
              </div>
            </div>
          </div>
        </div>

        {/* Right side - Image and Quote Form */}
        <div className="w-1/2 relative">
          <OptimizedImage
            src="/termite-solutions-optimized.jpg"
            fallbackSrc="/termite-solutions.jpg"
            alt="Complete Termite Solutions"
            fill
            priority
            sizes="50vw"
            className="object-cover"
            style={{ objectPosition: '65% 10%' }}
            quality={90}
          />
          
          {/* Overlay for form */}
          <div className="absolute inset-0 bg-black/20"></div>
          
          {/* Quote form overlay */}
          <div className={`absolute top-8 right-8 w-80 transition-all duration-1000 ease-out delay-500 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <QuoteForm />
          </div>
        </div>
      </div>
    </div>
  );
}

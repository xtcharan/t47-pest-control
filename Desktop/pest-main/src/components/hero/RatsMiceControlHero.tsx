"use client";
import QuoteForm from './NewQuoteForm';
import AlertBanner from './AlertBanner';
import OptimizedImage from '../common/OptimizedImage';
import { useEffect, useState } from 'react';
import Link from 'next/link';

export default function RatsMiceControlHero() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Trigger animation after component mounts
    setIsLoaded(true);
  }, []);

  return (
    <div className="relative min-h-[600px] md:min-h-[650px] bg-[#0a0a0a] overflow-hidden">
      {/* Alert Banner */}
      <AlertBanner />

      {/* Background image with pest control technician */}
      <div className="absolute inset-0 z-0">
        <OptimizedImage
          src="/rodent-control-hero.webp"
          fallbackSrc="/pest-control-hero.jpg"
          alt="Rat and Mouse Control Hero"
          fill
          priority
          sizes="100vw"
          className="object-cover scale-85 transition-transform duration-10000 ease-in-out"
          style={{ objectPosition: '65% 10%' }}
          quality={85}
        />

        {/* Enhanced overlay with multiple gradients for depth */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/15 to-transparent"></div>

        {/* Subtle pattern overlay */}
        <div className="absolute inset-0 opacity-10 diagonal-pattern-bg"></div>
      </div>

      <div className="container mx-auto px-4 py-16 md:py-20 relative z-10 flex flex-col md:flex-row items-center">
        {/* Left side - Enhanced hero content with animations */}
        <div
          className={`w-full md:w-1/2 flex flex-col justify-center text-white mb-10 md:mb-0 pl-0 md:pl-8 lg:pl-16 transition-all duration-1000 ease-out ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
        >
          <div className="mb-6 inline-block">
            <span className="inline-block px-4 py-1 bg-gradient-to-r from-red-500 to-red-600 text-white text-sm font-bold rounded-full mb-4 animate-float">
              PROFESSIONAL RAT & MOUSE CONTROL SERVICES
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight">
            Effective Rodent <span className="text-gradient-red">Control</span> Solutions
          </h1>
          <p className="text-lg md:text-xl text-gray-200 mb-6 max-w-xl">
            Protect your family and property from the health risks and damage caused by rats and mice with our professional rodent control services.
          </p>

          <ul className="mb-8 space-y-2">
            <li className="flex items-center">
              <span className="inline-flex items-center justify-center w-6 h-6 mr-2 bg-gradient-to-r from-red-500 to-red-600 rounded-full">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-white" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </span>
              <span>Complete rodent elimination guaranteed</span>
            </li>
            <li className="flex items-center">
              <span className="inline-flex items-center justify-center w-6 h-6 mr-2 bg-gradient-to-r from-red-500 to-red-600 rounded-full">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-white" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </span>
              <span>Entry point identification and sealing</span>
            </li>
            <li className="flex items-center">
              <span className="inline-flex items-center justify-center w-6 h-6 mr-2 bg-gradient-to-r from-red-500 to-red-600 rounded-full">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-white" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </span>
              <span>Safe, family-friendly treatment methods</span>
            </li>
          </ul>

          <div className="flex flex-wrap gap-4 mt-2">
            <Link href="/contact" className="modern-button bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white transition-colors">
              Book Treatment
            </Link>
            <Link href="/contact" className="modern-button bg-transparent border-2 border-white hover:bg-white/10 text-white transition-colors">
              Contact Us
            </Link>
          </div>
        </div>

        {/* Right side - Enhanced quote form */}
        <div
          className={`w-full md:w-1/2 flex justify-center items-start md:items-center transition-all duration-1000 delay-300 ease-out ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
        >
          {/* to move the quote form from left to right  */}
          <div className="w-full max-w-xs mt-4 md:mt-0 ml-5 md:ml-80">
            <QuoteForm />
          </div>
        </div>
      </div>
    </div>
  );
}

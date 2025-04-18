"use client";
import QuoteForm from './NewQuoteForm';
import AlertBanner from './AlertBanner';
import Image from 'next/image';
import { useEffect, useState } from 'react';

export default function Hero() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Trigger animation after component mounts
    setIsLoaded(true);
  }, []);

  return (
    <div className="relative min-h-[650px] bg-[#0a0a0a] overflow-hidden">
      {/* Alert Banner */}
      <AlertBanner />

      {/* Background image with pest control technician */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero/pest-control-hero.jpg"
          alt="Pest Control Hero"
          fill
          priority
          className="object-cover object-center scale-105 transition-transform duration-10000 ease-in-out"
          quality={100}
        />

        {/* Enhanced overlay with multiple gradients for depth */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/70 to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>

        {/* Subtle pattern overlay */}
        <div className="absolute inset-0 opacity-10 diagonal-pattern-bg"></div>
      </div>

      {/* Animated particles or decorative elements */}
      <div className="absolute inset-0 z-[1] pointer-events-none">
        <div className="absolute top-1/4 left-1/5 w-2 h-2 rounded-full bg-green-light/50 animate-pulse-slow"></div>
        <div className="absolute top-1/3 right-1/4 w-3 h-3 rounded-full bg-accent/40 animate-pulse-slow delay-300"></div>
        <div className="absolute bottom-1/4 left-1/3 w-2 h-2 rounded-full bg-green-dark/50 animate-pulse-slow delay-700"></div>
      </div>

      <div className="container mx-auto px-4 py-20 relative z-10 flex flex-col md:flex-row items-center">
        {/* Left side - Enhanced hero content with animations */}
        <div
          className={`w-full md:w-1/2 flex flex-col justify-center text-white mb-10 md:mb-0 pl-0 md:pl-8 lg:pl-16 transition-all duration-1000 ease-out ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
        >
          <div className="mb-6 inline-block">
            <span className="inline-block px-4 py-1 bg-green-light/90 text-black text-sm font-bold rounded-full mb-4 animate-float">
              PROFESSIONAL PEST CONTROL SERVICES
            </span>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            <span className="text-accent block mb-2">PEST DONT SLEEP</span>
            <span className="text-white block">NEITHER DO WE</span>
          </h1>

          <div className="w-20 h-1 bg-green-light mb-6"></div>

          <p className="text-xl md:text-2xl mb-8 text-gray-200 max-w-lg">
            T47 Pest Control – 24/7 Protection, Zero Compromise
          </p>

          <div className="flex flex-wrap gap-4 mt-2">
            <button type="button" className="modern-button bg-green-light hover:bg-green-dark text-black transition-colors">
              Our Services
            </button>
            <button type="button" className="modern-button bg-transparent border-2 border-white hover:bg-white/10 text-white transition-colors">
              Contact Us
            </button>
          </div>
        </div>

        {/* Right side - Enhanced quote form */}
        <div
          className={`w-full md:w-1/2 flex justify-center items-center transition-all duration-1000 delay-300 ease-out ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
        >
          <div className="w-full max-w-xs">
            <QuoteForm />
          </div>
        </div>
      </div>
    </div>
  );
}




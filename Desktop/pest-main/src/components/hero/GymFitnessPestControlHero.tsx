"use client";
import QuoteForm from './NewQuoteForm';
import AlertBanner from './AlertBanner';
import OptimizedImage from '../common/OptimizedImage';
import { useEffect, useState } from 'react';
import Link from 'next/link';

export default function GymFitnessPestControlHero() {
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
          src="/gym-fitness-pest-control-hero.webp"
          fallbackSrc="/pest-control-hero.jpg"
          alt="Gym & Fitness Pest Control Services"
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
            <span className="inline-block px-4 py-1 bg-pink-500/90 text-white text-sm font-bold rounded-full mb-4 animate-float">
              GYM & FITNESS PEST CONTROL SERVICES
            </span>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            <span className="text-pink-400 block mb-2">HEALTH-FOCUSED</span>
            <span className="text-white block">FITNESS FACILITY PEST CONTROL</span>
          </h1>

          <div className="w-20 h-1 bg-pink-500 mb-6"></div>

          <p className="text-xl md:text-2xl mb-8 text-gray-200 max-w-lg">
            Specialized pest management solutions for gyms and fitness centers that protect member health and facility reputation.
          </p>

          <div className="flex flex-wrap gap-4 mt-2">
            <Link href="/contact" className="modern-button bg-pink-600 hover:bg-pink-700 text-white transition-colors">
              Book Inspection
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

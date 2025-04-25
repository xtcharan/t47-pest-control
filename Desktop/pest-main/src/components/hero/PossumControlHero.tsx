"use client";
import QuoteForm from './NewQuoteForm';
import AlertBanner from './AlertBanner';
import OptimizedImage from '../common/OptimizedImage';
import { useEffect, useState } from 'react';
import Link from 'next/link';

export default function PossumControlHero() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <div className="relative min-h-[600px] md:min-h-[650px] bg-[#0a0a0a] overflow-hidden">
      <AlertBanner />
      <div className="absolute inset-0 z-0">
        <OptimizedImage
          src="/possum-control-hero.webp"
          fallbackSrc="/pest-control-hero.jpg"
          alt="Professional Possum Control and Removal Services"
          fill
          priority
          sizes="100vw"
          className="object-cover scale-85 transition-transform duration-10000 ease-in-out"
          style={{ objectPosition: '65% 10%' }}
          quality={85}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/15 to-transparent"></div>
        <div className="absolute inset-0 opacity-10 diagonal-pattern-bg"></div>
      </div>

      <div className="absolute inset-0 z-[1] pointer-events-none">
        <div className="absolute top-1/4 left-1/5 w-2 h-2 rounded-full bg-purple-400/50 animate-pulse-slow"></div>
        <div className="absolute top-1/3 right-1/4 w-3 h-3 rounded-full bg-accent/40 animate-pulse-slow delay-300"></div>
        <div className="absolute bottom-1/4 left-1/3 w-2 h-2 rounded-full bg-purple-500/50 animate-pulse-slow delay-700"></div>
      </div>

      <div className="container mx-auto px-4 py-16 md:py-20 relative z-10 flex flex-col md:flex-row items-center">
        <div
          className={`w-full md:w-1/2 flex flex-col justify-center text-white mb-10 md:mb-0 pl-0 md:pl-8 lg:pl-16 transition-all duration-1000 ease-out ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
        >
          <div className="mb-6 inline-block">
            <span className="inline-block px-4 py-1 bg-purple-500/90 text-white text-sm font-bold rounded-full mb-4 animate-float">
              HUMANE POSSUM MANAGEMENT
            </span>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            <span className="text-accent block mb-2">PROFESSIONAL</span>
            <span className="text-white block">POSSUM CONTROL</span>
          </h1>

          <div className="w-20 h-1 bg-purple-500 mb-6"></div>

          <p className="text-xl md:text-2xl mb-8 text-gray-200 max-w-lg">
            Effective, humane solutions to safely remove possums from your property and prevent their return with wildlife-friendly methods.
          </p>

          <div className="flex flex-wrap gap-4 mt-2">
            <Link href="/contact" className="modern-button bg-purple-500 hover:bg-purple-600 text-white transition-colors">
              Schedule Inspection
            </Link>
            <Link href="/contact" className="modern-button bg-transparent border-2 border-white hover:bg-white/10 text-white transition-colors">
              Get Free Quote
            </Link>
          </div>
        </div>

        <div
          className={`w-full md:w-1/2 flex justify-center items-start md:items-center transition-all duration-1000 delay-300 ease-out ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
        >
          <div className="w-full max-w-xs mt-4 md:mt-0 ml-5 md:ml-80">
            <QuoteForm />
          </div>
        </div>
      </div>
    </div>
  );
}

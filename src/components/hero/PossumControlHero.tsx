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

      {/* Mobile layout - Image first, then content below */}
      <div className="md:hidden flex flex-col">
        {/* Full image with subtle overlay for mobile */}
        <div className="relative h-[480px] w-full overflow-hidden">
          <OptimizedImage
            src="/possum-control-hero.webp"
            fallbackSrc="/possum-control-hero.jpg"
            alt="Professional Possum Control and Removal Services"
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

          {/* Floating badge at the top with improved styling */}
          <div className="absolute top-6 left-0 right-0 flex justify-center">
            <span className="px-5 py-2 bg-purple-500/95 text-white text-sm font-bold rounded-full shadow-lg animate-float">
              HUMANE POSSUM MANAGEMENT
            </span>
          </div>

          {/* Small decorative elements */}
          <div className="absolute bottom-16 left-6 w-2 h-2 rounded-full bg-purple-400/70 animate-pulse-slow"></div>
          <div className="absolute bottom-24 right-8 w-3 h-3 rounded-full bg-purple-500/60 animate-pulse-slow delay-300"></div>
        </div>

        {/* Content below image for mobile - with card-like appearance */}
        <div className={`w-full bg-[#0a0a0a] px-6 py-10 -mt-10 rounded-t-3xl shadow-lg transition-all duration-1000 ease-out ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h1 className="text-3xl sm:text-4xl font-bold mb-5 leading-tight text-center">
            <span className="text-accent block mb-2">PROFESSIONAL</span>
            <span className="text-white block">POSSUM CONTROL</span>
          </h1>

          <div className="w-24 h-1 bg-purple-500 mb-6 mx-auto"></div>

          <p className="text-lg mb-8 text-white text-center max-w-md mx-auto">
            Effective, humane solutions to safely remove possums from your property and prevent their return with wildlife-friendly methods.
          </p>

          <div className="flex justify-center gap-4 mt-2 mb-12">
            <Link href="/contact" className="modern-button bg-purple-500 hover:bg-purple-600 text-white transition-colors shadow-md">
              Schedule Inspection
            </Link>
            <Link href="/contact" className="modern-button bg-transparent border-2 border-white hover:bg-white/10 text-white transition-colors shadow-md">
              Get Free Quote
            </Link>
          </div>

          {/* Quote form for mobile - with improved card-like styling */}
            <div className="w-full max-w-md mx-auto bg-[#111] p-6 rounded-xl shadow-lg border border-purple-500/20">
            <h3 className="text-xl font-semibold text-white mb-5 text-center">Get a Free Quote Now</h3>
            <QuoteForm />
          </div>
        </div>
      </div>

      {/* Desktop layout - Side by side with overlays */}
      <div className="hidden md:block">
        <div className="absolute inset-0 z-0">
          <OptimizedImage
            src="/possum-control-hero.webp"
            fallbackSrc="/possum-control-hero.jpg"
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

        <div className="container mx-auto px-4 py-16 md:py-20 relative z-10 flex flex-row items-center">
          <div
            className={`w-1/2 flex flex-col justify-center text-white pl-16 lg:pl-24 transition-all duration-1000 ease-out ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
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

            <p className="text-xl md:text-2xl mb-8 text-white max-w-lg">
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
            className={`w-1/2 flex justify-center items-center transition-all duration-1000 delay-300 ease-out ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
          >
            <div className="w-full max-w-xs ml-80">
              <QuoteForm />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

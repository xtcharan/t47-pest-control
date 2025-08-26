"use client";

import dynamic from 'next/dynamic';
import Link from 'next/link';
import { COMPANY_INFO } from '@/components/lib/constants';
import OptimizedImage from '@/components/common/OptimizedImage';
import { useEffect, useState } from 'react';

// Dynamic imports for performance
const QuoteForm = dynamic(() => import('@/components/hero/NewQuoteForm'), { ssr: false });
const AlertBanner = dynamic(() => import('@/components/hero/AlertBanner'), { ssr: false });

export default function AlburyHeroClient() {
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
            src="/pest-control-hero.webp"
            fallbackSrc="/pest-control-hero.jpg"
            alt="Pest Control Albury Hero"
            fill
            priority
            sizes="(max-width: 640px) 100vw, (max-width: 750px) 100vw, (max-width: 828px) 100vw, 100vw"
            className="object-cover scale-105 transition-transform duration-10000 ease-in-out"
            style={{ objectPosition: '65% 10%' }}
            quality={75}
          />
          {/* Very subtle gradient at the bottom for text readability */}
          <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black/90 to-transparent"></div>
          
          {/* Floating contact info for mobile */}
          <div className="absolute top-4 left-4 right-4 z-10">
            <div className="bg-black/70 backdrop-blur-sm rounded-lg p-3 text-center border border-green-light/30">
              <p className="text-white text-sm font-medium">
                📞 Call Albury: <Link href={`tel:${COMPANY_INFO.phone}`} className="text-green-light hover:underline">{COMPANY_INFO.phone}</Link>
              </p>
            </div>
          </div>
        </div>

        {/* Content below image for mobile - with card-like appearance */}
        <div className={`w-full bg-[#0a0a0a] px-6 py-10 -mt-10 rounded-t-3xl shadow-lg transition-all duration-1000 ease-out ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h1 className="text-3xl sm:text-4xl font-sans font-bold mb-5 leading-tight text-center">
            <span className="text-accent block mb-2">PEST DONT SLEEP</span>
            <span className="text-white block">NEITHER DO WE</span>
            <span className="text-green-light block text-2xl mt-2">ALBURY</span>
          </h1>

          <div className="w-24 h-1 bg-green-light mb-6 mx-auto"></div>

          <p className="text-lg mb-8 text-white text-center max-w-md mx-auto">
            T47 Pest Control Albury – 24/7 Protection, Zero Compromise across Albury, Wodonga, and surrounding regions
          </p>

          <div className="flex justify-center gap-4 mt-2 mb-12">
            <Link
              href="#service-categories"
              className="modern-button bg-green-light hover:bg-green-dark text-black transition-colors shadow-md inline-flex items-center justify-center"
            >
              Our Services
            </Link>
            <Link
              href="/contact"
              className="modern-button bg-transparent border-2 border-white hover:bg-white/10 text-white transition-colors shadow-md inline-flex items-center justify-center"
            >
              Contact Us
            </Link>
          </div>

          {/* Quote form for mobile - with improved card-like styling */}
            <div className="w-full max-w-md mx-auto bg-[#111] p-6 rounded-xl shadow-lg border border-green-light/20">
            <h3 className="text-xl font-semibold text-white mb-5 text-center">Get a Free Quote Now</h3>
            <QuoteForm />
          </div>
        </div>
      </div>

      {/* Desktop layout - Side by side with overlays */}
      <div className="hidden md:block">
        {/* Background image with pest control technician */}
        <div className="absolute inset-0 z-0">
          <OptimizedImage
            src="/pest-control-hero.webp"
            fallbackSrc="/pest-control-hero.jpg"
            alt="Pest Control Albury Hero"
            fill
            priority
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 100vw"
            className="object-cover scale-85 transition-transform duration-10000 ease-in-out"
            style={{ objectPosition: '65% 10%' }}
            quality={75}
          />
          {/* Enhanced gradient overlays for better text contrast */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/15 to-transparent"></div>
          {/* Subtle diagonal pattern overlay */}
          <div className="absolute inset-0 opacity-10 diagonal-pattern-bg"></div>
        </div>

        <div className="container mx-auto px-4 py-16 md:py-20 relative z-10 flex flex-row items-center">
          {/* Left side - Enhanced hero content with animations */}
          <div
            className={`w-1/2 flex flex-col justify-center text-white pl-8 lg:pl-16 transition-all duration-1000 ease-out ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
          >
            <div className="mb-6 inline-block">
              <span className="inline-block px-4 py-1 bg-green-light/90 text-black text-sm font-bold rounded-full mb-4 animate-float">
                PROFESSIONAL PEST CONTROL SERVICES ALBURY
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-sans font-bold mb-6 leading-tight">
              <span className="text-accent block mb-2">PEST DONT SLEEP</span>
              <span className="text-white block">NEITHER DO WE</span>
              <span className="text-green-light block text-3xl md:text-4xl mt-2">ALBURY</span>
            </h1>

            <div className="w-20 h-1 bg-green-light mb-6"></div>

            <p className="text-xl md:text-2xl mb-8 text-white max-w-lg">
              T47 Pest Control Albury – 24/7 Protection, Zero Compromise across Albury, Wodonga, and surrounding regions
            </p>

            <div className="flex gap-4 mt-2">
              <Link
                href="#service-categories"
                className="modern-button bg-green-light hover:bg-green-dark text-black transition-colors shadow-md inline-flex items-center justify-center"
              >
                Our Services
              </Link>
              <Link
                href="/contact"
                className="modern-button bg-transparent border-2 border-white hover:bg-white/10 text-white transition-colors shadow-md inline-flex items-center justify-center"
              >
                Contact Us
              </Link>
            </div>
          </div>

          {/* Right side - Enhanced quote form */}
          <div
            className={`w-1/2 flex justify-center items-center transition-all duration-1000 delay-300 ease-out ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
          >
            {/* to move the quote form from left to right  */}
            <div className="w-full max-w-xs ml-80">
              <QuoteForm />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

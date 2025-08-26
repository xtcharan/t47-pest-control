"use client";

import dynamic from 'next/dynamic';
import Link from 'next/link';
import { COMPANY_INFO } from '@/components/lib/constants';
import OptimizedImage from '@/components/common/OptimizedImage';
import { useEffect, useState } from 'react';

// Dynamic imports for performance
const QuoteForm = dynamic(() => import('@/components/hero/NewQuoteForm'), { ssr: false });
const AlertBanner = dynamic(() => import('@/components/hero/AlertBanner'), { ssr: false });

export default function AdelaideHeroClient() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <div className="relative min-h-[600px] md:min-h-[650px] bg-[#0a0a0a] overflow-hidden">
      <AlertBanner />

      {/* Mobile layout */}
      <div className="md:hidden flex flex-col">
        <div className="relative h-[480px] w-full overflow-hidden">
          <OptimizedImage
            src="/adelaide.webp"
            fallbackSrc="/adelaide.jpg"
            alt="Adelaide Pest Control Services"
            fill
            priority
            sizes="(max-width: 640px) 100vw, (max-width: 750px) 100vw, (max-width: 828px) 100vw, 100vw"
            className="object-cover scale-105 transition-transform duration-10000 ease-in-out"
            style={{ objectPosition: '50% 30%' }}
            quality={75}
            placeholder="blur"
            blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
          />
          <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black/90 to-transparent"></div>
          <div className="absolute inset-0 box-border border-[20px] border-black/10"></div>
          
          <div className="absolute top-6 left-0 right-0 flex justify-center">
            <span className="px-5 py-2 bg-green-light/95 text-black text-sm font-bold rounded-full shadow-lg animate-float">
              ADELAIDE PEST CONTROL EXPERTS
            </span>
          </div>
        </div>

        <div className={`w-full bg-[#0a0a0a] px-6 py-10 -mt-10 rounded-t-3xl shadow-lg transition-all duration-1000 ease-out ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h1 className="text-3xl sm:text-4xl font-sans font-bold mb-5 leading-tight text-center">
            <span className="text-green-light block mb-2">PEST CONTROL</span>
            <span className="text-white block">ADELAIDE</span>
          </h1>

          <div className="w-24 h-1 bg-green-light mb-6 mx-auto"></div>

          <p className="text-lg mb-4 text-white text-center max-w-md mx-auto">
            Expert pest control Adelaide services ensure safe and effective solutions for homes and businesses facing pest infestations.
          </p>

          <div className="flex items-center justify-center mb-8">
            <div className="flex text-yellow-400 mr-3">
              {[...Array(5)].map((_, i) => (
                <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
            <span className="text-white font-medium">4.8 out of 636 reviews</span>
          </div>

          <div className="flex justify-center gap-4 mt-2 mb-6">
            <Link href={`tel:${COMPANY_INFO.phone}`} className="modern-button bg-green-light hover:bg-green-dark text-black transition-colors shadow-md">
              Call Now
            </Link>
            <Link href="/contact" className="modern-button bg-transparent border-2 border-white hover:bg-white/10 text-white transition-colors shadow-md">
              Get Quote
            </Link>
          </div>

          {/* Adelaide-specific email contact */}
          <div className="flex justify-center mb-12">
            <div className="bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full border border-white/20">
              <div className="flex items-center gap-3">
                <svg className="w-5 h-5 text-red-light" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <Link
                  href="mailto:adelaide@t47pestcontrol.com.au"
                  className="text-white hover:text-red-light transition-colors font-medium"
                >
                  adelaide@t47pestcontrol.com.au
                </Link>
              </div>
            </div>
          </div>

          <div className="w-full max-w-md mx-auto bg-[#111] p-6 rounded-xl shadow-lg border border-green-light/20">
            <h3 className="text-xl font-semibold text-white mb-5 text-center">Get a Free Quote Now</h3>
            <QuoteForm />
          </div>
        </div>
      </div>

      {/* Desktop layout */}
      <div className="hidden md:block">
        <div className="absolute inset-0 z-0">
          <OptimizedImage
            src="/adelaide.webp"
            fallbackSrc="/adelaide.jpg"
            alt="Adelaide Pest Control Services"
            fill
            priority
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 100vw"
            className="object-cover scale-85 transition-transform duration-10000 ease-in-out"
            style={{ objectPosition: '50% 30%' }}
            quality={75}
            placeholder="blur"
            blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/15 to-transparent"></div>
          <div className="absolute inset-0 opacity-10 diagonal-pattern-bg"></div>
        </div>

        <div className="absolute inset-0 z-[1] pointer-events-none">
          <div className="absolute top-1/4 left-1/5 w-2 h-2 rounded-full bg-green-light/50 animate-pulse-slow"></div>
          <div className="absolute top-1/3 right-1/4 w-3 h-3 rounded-full bg-accent/40 animate-pulse-slow delay-300"></div>
          <div className="absolute bottom-1/4 left-1/3 w-2 h-2 rounded-full bg-green-dark/50 animate-pulse-slow delay-700"></div>
        </div>

        <div className="container mx-auto px-4 py-16 md:py-20 relative z-10 flex flex-row items-center">
          <div className={`w-1/2 flex flex-col justify-center text-white pl-8 lg:pl-16 transition-all duration-1000 ease-out ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="mb-6 inline-block">
              <span className="inline-block px-4 py-1 bg-green-light/90 text-black text-sm font-bold rounded-full mb-4 animate-float">
                ADELAIDE PEST CONTROL EXPERTS
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-sans font-bold mb-6 leading-tight">
              <span className="text-green-light block mb-2">PEST CONTROL</span>
              <span className="text-white block">ADELAIDE</span>
            </h1>

            <div className="w-20 h-1 bg-green-light mb-6"></div>

            <p className="text-xl md:text-2xl mb-4 text-white max-w-lg">
              Expert pest control Adelaide services ensure safe and effective solutions for homes and businesses facing pest infestations.
            </p>

            <div className="flex items-center mb-8">
              <div className="flex text-yellow-400 mr-3">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <span className="text-white font-medium">4.8 out of 636 reviews</span>
            </div>

            <div className="flex flex-wrap gap-4 mt-2 mb-4">
              <Link href={`tel:${COMPANY_INFO.phone}`} className="modern-button bg-green-light hover:bg-green-dark text-black transition-colors inline-flex items-center justify-center">
                Call Now: {COMPANY_INFO.phone}
              </Link>
              <Link href="/contact" className="modern-button bg-transparent border-2 border-white hover:bg-white/10 text-white transition-colors inline-flex items-center justify-center">
                Get Free Quote
              </Link>
            </div>

            {/* Adelaide-specific email contact for desktop */}
            <div className="flex justify-start">
              <div className="bg-white/10 backdrop-blur-sm px-4 py-2 rounded-lg border border-white/20">
                <div className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-red-light" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <Link
                    href="mailto:adelaide@t47pestcontrol.com.au"
                    className="text-white hover:text-red-light transition-colors text-sm font-medium"
                  >
                    adelaide@t47pestcontrol.com.au
                  </Link>
                </div>
              </div>
            </div>
          </div>

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

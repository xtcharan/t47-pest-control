"use client";

import { useRef, useEffect, useState, useCallback } from 'react';
import { PRICING_DATA } from '@/data/pricingData';

// Animation state types for better type safety
type OfferRedemptionState = 'idle' | 'processing' | 'redeemed' | 'navigating';

interface ServiceTileProps {
  title: string;
  price: string;
  startingFrom?: boolean;
  reportOnly?: boolean;
}

// Animation configuration constants
const ANIMATION_TIMINGS = {
  PROCESSING_DURATION: 1000,
  REDEEMED_DISPLAY_DURATION: 1500,
  NAVIGATION_DELAY: 500,
} as const;

const ServiceTile = ({ title, price, startingFrom = true, reportOnly = false }: ServiceTileProps) => {
  // Animation state management
  const [redemptionState, setRedemptionState] = useState<OfferRedemptionState>('idle');
  const [isAnimating, setIsAnimating] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout>();

  // Cleanup timeouts on unmount
  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  // Detect user preferences for animations
  const prefersReducedMotion = useCallback(() => {
    if (typeof window === 'undefined') return false;
    return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  }, []);

  // Detect mobile devices
  const isMobile = useCallback(() => {
    if (typeof window === 'undefined') return false;
    return window.innerWidth <= 768;
  }, []);

  // Optimized scroll to service form with cached selectors
  const scrollToServiceForm = useCallback(() => {
    // Use cached selectors to reduce DOM queries
    const selectors = [
      '#service-form',
      'section[class*="bg-gradient-to-r from-green-light to-green-dark"]',
      'form',
      '#contact, [id*="contact"], [class*="contact"]'
    ];

    let targetElement: Element | null = null;

    // Find first matching element
    for (const selector of selectors) {
      targetElement = document.querySelector(selector);
      if (targetElement) break;
    }

    if (targetElement) {
      // Use requestAnimationFrame for smooth DOM operations
      requestAnimationFrame(() => {
        if (!targetElement) return;

        // Calculate offset for better positioning (account for fixed headers)
        const headerHeight = 80;
        const rect = targetElement.getBoundingClientRect();
        const offsetPosition = rect.top + window.pageYOffset - headerHeight;

        // Smooth scroll with custom offset
        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });

        // Add highlight effect to form with optimized class manipulation
        targetElement.classList.add('offer-redeemed-highlight');

        // Focus first input with enhanced targeting
        setTimeout(() => {
          const firstInput = targetElement!.querySelector('input:not([type="hidden"]):not([disabled])') as HTMLInputElement;

          if (firstInput) {
            // Ensure element is visible and focusable
            firstInput.scrollIntoView({ behavior: 'smooth', block: 'center' });
            firstInput.focus();

            // Add visual indication that this field is focused due to offer redemption
            firstInput.classList.add('offer-focus-highlight');
            setTimeout(() => {
              firstInput!.classList.remove('offer-focus-highlight');
            }, 3000);
          }

          // Remove highlight after animation
          setTimeout(() => {
            targetElement!.classList.remove('offer-redeemed-highlight');
          }, 2000);
        }, 1000); // Increased delay to ensure scroll completes
      });
    } else {
      // Ultimate fallback: scroll to bottom of page where forms typically are
      window.scrollTo({
        top: document.body.scrollHeight - window.innerHeight,
        behavior: 'smooth'
      });
    }
  }, []);

  // Screen reader announcements for accessibility
  const announceToScreenReader = useCallback((message: string) => {
    const announcement = document.createElement('div');
    announcement.setAttribute('aria-live', 'polite');
    announcement.setAttribute('aria-atomic', 'true');
    announcement.className = 'sr-only';
    announcement.textContent = message;
    document.body.appendChild(announcement);
    setTimeout(() => document.body.removeChild(announcement), 1000);
  }, []);

  const handleOfferRedemption = useCallback(async () => {
    if (isAnimating) return;

    setIsAnimating(true);
    announceToScreenReader('Processing your offer redemption');

    // Phase 1: Processing state
    setRedemptionState('processing');
    timeoutRef.current = setTimeout(() => {
      // Phase 2: Success state
      setRedemptionState('redeemed');
      announceToScreenReader('Offer successfully redeemed! Taking you to the quote form.');

      // Phase 3: Navigate to form
      timeoutRef.current = setTimeout(() => {
        setRedemptionState('navigating');
        announceToScreenReader('Navigating to quote form');

        // Dispatch offer redemption event for form integration
        const offerEvent = new CustomEvent('offerRedeemed', {
          detail: {
            title,
            price,
            timestamp: new Date().toISOString()
          }
        });
        window.dispatchEvent(offerEvent);

        scrollToServiceForm();

        // Reset state after navigation
        timeoutRef.current = setTimeout(() => {
          setRedemptionState('idle');
          setIsAnimating(false);
        }, ANIMATION_TIMINGS.NAVIGATION_DELAY);
      }, ANIMATION_TIMINGS.REDEEMED_DISPLAY_DURATION);
    }, ANIMATION_TIMINGS.PROCESSING_DURATION);
  }, [isAnimating, scrollToServiceForm, title, announceToScreenReader]);

  // Enhanced button content with icons and loading states
  const getButtonContent = () => {
    switch (redemptionState) {
      case 'processing':
        return (
          <>
            {!prefersReducedMotion() && (
              <div className="inline-block w-4 h-4 mr-2 border-2 border-white border-t-transparent rounded-full animate-spin" />
            )}
            Processing...
          </>
        );
      case 'redeemed':
        return (
          <>
            <div className="inline-block w-4 h-4 mr-2">
              <svg viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
            </div>
            Offer Redeemed!
          </>
        );
      case 'navigating':
        return 'Taking you to form...';
      default:
        return 'Redeem Offer';
    }
  };

  // Enhanced button styling with modern glass morphism design
  const getButtonClassName = () => {
    const baseClasses = "w-full py-4 px-6 rounded-xl font-bold text-sm transition-all duration-500 transform relative overflow-hidden focus:outline-none focus:ring-2 focus:ring-white/50 focus:ring-offset-2 focus:ring-offset-transparent backdrop-blur-sm border border-white/20";

    switch (redemptionState) {
      case 'processing':
        return `${baseClasses} bg-white/20 text-white cursor-wait scale-95 shadow-xl animate-pulse border-white/30`;
      case 'redeemed':
        return `${baseClasses} bg-green-500/30 text-white cursor-default scale-105 shadow-2xl border-green-400/50 animate-bounce`;
      case 'navigating':
        return `${baseClasses} bg-blue-500/30 text-white cursor-default shadow-xl border-blue-400/50`;
      default:
        return `${baseClasses} bg-white/10 text-white hover:bg-white/25 hover:scale-105 hover:shadow-2xl active:scale-95 cursor-pointer shadow-lg hover:border-white/40 group`;
    }
  };

  return (
    <div className="min-w-[320px] h-[280px] rounded-2xl shadow-2xl overflow-hidden relative flex flex-col modern-card group transform transition-all duration-500 hover:-translate-y-3 hover:rotate-1 hover:scale-105">
      {/* Dynamic gradient background with animated overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-emerald-500 via-teal-600 to-cyan-700 opacity-95 group-hover:opacity-100 transition-all duration-500"></div>
      <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-white/20 group-hover:via-white/10 group-hover:to-white/30 transition-all duration-700"></div>

      {/* Animated geometric patterns */}
      <div className="absolute top-0 right-0 w-20 h-20 bg-white/10 transform rotate-45 translate-x-10 -translate-y-10 group-hover:rotate-90 group-hover:scale-110 transition-all duration-700"></div>
      <div className="absolute bottom-0 left-0 w-16 h-16 bg-white/5 rounded-full transform -translate-x-8 translate-y-8 group-hover:scale-150 group-hover:bg-white/10 transition-all duration-500"></div>

      {/* Floating particles effect */}
      <div className="absolute inset-0 opacity-30 group-hover:opacity-60 transition-opacity duration-500">
        <div className="absolute top-4 left-4 w-2 h-2 bg-white/40 rounded-full animate-pulse"></div>
        <div className="absolute top-8 right-8 w-1 h-1 bg-white/60 rounded-full animate-bounce" style={{animationDelay: '0.5s'}}></div>
        <div className="absolute bottom-12 left-8 w-1.5 h-1.5 bg-white/50 rounded-full animate-pulse" style={{animationDelay: '1s'}}></div>
        <div className="absolute bottom-6 right-6 w-1 h-1 bg-white/40 rounded-full animate-bounce" style={{animationDelay: '1.5s'}}></div>
      </div>

      {/* Main content container */}
      <div className="p-6 z-10 flex flex-col h-full relative">
        {/* Service icon placeholder */}
        <div className="w-12 h-12 bg-white/20 rounded-xl mb-3 flex items-center justify-center group-hover:bg-white/30 group-hover:scale-110 transition-all duration-300">
          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </div>

        {/* Service title with enhanced styling */}
        <h3 className="text-white font-bold text-xl mb-3 leading-tight group-hover:text-white/95 transition-colors duration-300">
          {title}
          <div className="h-1 w-16 bg-gradient-to-r from-white/40 to-transparent mt-2 group-hover:w-full group-hover:from-white/60 group-hover:to-white/20 transition-all duration-700 rounded-full"></div>
        </h3>

        {/* Service type badge */}
        <div className="mb-3">
          {startingFrom && (
            <span className="inline-block px-3 py-1 bg-white/20 text-white/90 text-xs font-semibold rounded-full backdrop-blur-sm">
              Starting from
            </span>
          )}
          {reportOnly && (
            <span className="inline-block px-3 py-1 bg-amber-400/20 text-amber-100 text-xs font-semibold rounded-full backdrop-blur-sm">
              Report only
            </span>
          )}
        </div>

        {/* Price with dramatic styling */}
        <div className="mb-4">
          <div className="flex items-baseline">
            <span className="text-white/80 text-2xl font-light mr-1">$</span>
            <span className="text-white text-5xl font-black tracking-tight">{price}</span>
            <span className="text-white/60 text-lg ml-1 font-medium">*</span>
          </div>
          <div className="w-full h-px bg-gradient-to-r from-white/30 via-white/60 to-transparent mt-2"></div>
        </div>

        {/* Spacer to push button to bottom */}
        <div className="flex-grow"></div>

        {/* Enhanced CTA button with modern design */}
        <div className="relative">
          <button
            type="button"
            onClick={handleOfferRedemption}
            disabled={isAnimating}
            className={getButtonClassName()}
            aria-label={`Redeem offer for ${title} starting from $${price}. Current status: ${
              redemptionState === 'idle' ? 'Ready to redeem' :
              redemptionState === 'processing' ? 'Processing your offer' :
              redemptionState === 'redeemed' ? 'Offer successfully redeemed' :
              'Taking you to the quote form'
            }`}
            aria-live="polite"
            aria-describedby={`offer-description-${title.replace(/\s+/g, '-').toLowerCase()}`}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                handleOfferRedemption();
              }
            }}
          >
            <span className="relative z-10 flex items-center justify-center">{getButtonContent()}</span>
            {redemptionState === 'idle' && !prefersReducedMotion() && (
              <div className="absolute inset-0 h-full w-full bg-gradient-to-r from-transparent via-white/20 to-transparent transform -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
            )}
          </button>

          {/* Hidden description for screen readers */}
          <div
            id={`offer-description-${title.replace(/\s+/g, '-').toLowerCase()}`}
            className="sr-only"
          >
            {title} service offer starting from ${price}. Limited time offer includes full inspection.
            Clicking this button will process your offer redemption and take you to the quote form.
          </div>

          {/* Success celebration effect */}
          {redemptionState === 'redeemed' && !prefersReducedMotion() && !isMobile() && (
            <div className="absolute inset-0 pointer-events-none">
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-green-400 rounded-full animate-ping"></div>
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-2 h-2 bg-green-300 rounded-full animate-pulse"></div>
            </div>
          )}
        </div>
      </div>

      {/* Hover glow effect */}
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-white/0 via-white/0 to-white/0 group-hover:from-white/5 group-hover:via-white/10 group-hover:to-white/5 transition-all duration-500 pointer-events-none"></div>
    </div>
  );
};

export default function AdelaideServiceTiles() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  // Services data from shared source
  const services = PRICING_DATA;

  // Check scroll position and update button states
  const checkScrollPosition = () => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 1);
    }
  };

  // Scroll functions for navigation buttons
  const scrollToLeft = () => {
    if (scrollContainerRef.current) {
      const cardWidth = 320; // Approximate card width + gap
      scrollContainerRef.current.scrollBy({
        left: -cardWidth * 2,
        behavior: 'smooth'
      });
    }
  };

  const scrollToRight = () => {
    if (scrollContainerRef.current) {
      const cardWidth = 320; // Approximate card width + gap
      scrollContainerRef.current.scrollBy({
        left: cardWidth * 2,
        behavior: 'smooth'
      });
    }
  };

  // Mouse drag handlers
  const handleMouseDown = (e: React.MouseEvent) => {
    if (!scrollContainerRef.current) return;
    setIsDragging(true);
    setStartX(e.pageX - scrollContainerRef.current.offsetLeft);
    setScrollLeft(scrollContainerRef.current.scrollLeft);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || !scrollContainerRef.current) return;
    e.preventDefault();
    const x = e.pageX - scrollContainerRef.current.offsetLeft;
    const walk = (x - startX) * 2;
    scrollContainerRef.current.scrollLeft = scrollLeft - walk;
  };

  const handleMouseEnter = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.style.cursor = 'grab';
    }
  };

  const handleMouseLeave = () => {
    setIsDragging(false);
    if (scrollContainerRef.current) {
      scrollContainerRef.current.style.cursor = 'default';
    }
  };

  // Touch handlers
  const handleTouchStart = (e: React.TouchEvent) => {
    if (!scrollContainerRef.current) return;
    setIsDragging(true);
    setStartX(e.touches[0].pageX - scrollContainerRef.current.offsetLeft);
    setScrollLeft(scrollContainerRef.current.scrollLeft);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging || !scrollContainerRef.current) return;
    const x = e.touches[0].pageX - scrollContainerRef.current.offsetLeft;
    const walk = (x - startX) * 2;
    scrollContainerRef.current.scrollLeft = scrollLeft - walk;
  };

  // Add scroll event listener to update button states
  const handleScroll = () => {
    checkScrollPosition();
  };

  // Initialize scroll position check
  useEffect(() => {
    checkScrollPosition();
    // Add resize listener to recheck on window resize
    const handleResize = () => checkScrollPosition();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <>
      <style dangerouslySetInnerHTML={{
        __html: `
          .hide-scrollbar {
            -ms-overflow-style: none;
            scrollbar-width: none;
          }
          .hide-scrollbar::-webkit-scrollbar {
            display: none;
          }
          .horizontal-scroll-container {
            scroll-behavior: smooth;
          }
          .modern-card {
            backdrop-filter: blur(10px);
            background: linear-gradient(135deg, rgba(255,255,255,0.1), rgba(255,255,255,0.05));
            border: 1px solid rgba(255,255,255,0.1);
          }
          .modern-card:hover {
            box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25), 0 0 0 1px rgba(255,255,255,0.2);
          }
          .offer-redeemed-highlight {
            animation: highlightPulse 2s ease-in-out;
            border: 3px solid #10b981 !important;
            box-shadow: 0 0 30px rgba(16, 185, 129, 0.4) !important;
          }
          .offer-focus-highlight {
            box-shadow: 0 0 0 3px rgba(16, 185, 129, 0.5) !important;
            border-color: #10b981 !important;
          }
          @keyframes highlightPulse {
            0%, 100% {
              box-shadow: 0 0 0 0 rgba(16, 185, 129, 0.7);
            }
            50% {
              box-shadow: 0 0 0 20px rgba(16, 185, 129, 0);
            }
          }
          @keyframes float {
            0%, 100% { transform: translateY(0px); }
            50% { transform: translateY(-10px); }
          }
          @keyframes shimmer {
            0% { background-position: -200% 0; }
            100% { background-position: 200% 0; }
          }
          .modern-card:hover .shimmer-effect {
            background: linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent);
            background-size: 200% 100%;
            animation: shimmer 1.5s ease-in-out infinite;
          }
          /* Enhanced button hover effects */
          .modern-card button:hover {
            transform: translateY(-2px);
            box-shadow: 0 10px 25px rgba(0,0,0,0.2);
          }
          /* Fix white text overlapping issues */
          #service-form input,
          #service-form textarea,
          #service-form select {
            color: #1f2937 !important;
            background-color: white !important;
          }
          #service-form label {
            color: #374151 !important;
          }
          #service-form .text-white {
            color: #1f2937 !important;
          }
        `
      }} />
      <section className="py-20 bg-gradient-to-br from-slate-50 via-blue-50 to-emerald-50 relative overflow-hidden">
        {/* Enhanced background decorative elements */}
        <div className="absolute top-0 left-0 w-full h-40 bg-gradient-to-b from-blue-100/50 to-transparent"></div>
        <div className="absolute -top-20 -right-20 w-80 h-80 bg-gradient-to-br from-emerald-200/30 to-teal-300/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-gradient-to-tr from-blue-200/30 to-cyan-300/20 rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-transparent via-white/10 to-transparent rounded-full blur-2xl"></div>

        <div className="px-4 sm:px-6 lg:px-8 relative z-10 w-full">
          {/* Enhanced section header with modern styling */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-emerald-500/10 to-teal-500/10 backdrop-blur-sm border border-emerald-200/30 text-emerald-700 text-sm font-bold rounded-full mb-6 shadow-lg">
              <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              ADELAIDE SERVICES
            </div>
            <h2 className="text-5xl font-black mb-6 text-gray-900 leading-tight">
              Cost Effective{' '}
              <span className="bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
                Pest Control
              </span>{' '}
              Services
            </h2>
            <div className="flex justify-center mb-8">
              <div className="w-32 h-1 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full shadow-lg"></div>
            </div>
            <p className="text-gray-700 max-w-3xl mx-auto text-lg leading-relaxed">
              Professional pest control solutions for Adelaide homes and businesses.
              <span className="font-semibold text-emerald-700"> Transparent pricing</span> with no hidden fees and
              <span className="font-semibold text-teal-700"> guaranteed results</span>.
            </p>
          </div>
          
          {/* Horizontal scrolling container */}
          <div className="w-full py-8 overflow-hidden relative">
            {/* Enhanced navigation buttons for desktop */}
            <div className="hidden lg:block">
              <button
                onClick={scrollToLeft}
                disabled={!canScrollLeft}
                className={`absolute left-2 top-1/2 transform -translate-y-1/2 z-20 w-14 h-14 rounded-full shadow-2xl transition-all duration-500 backdrop-blur-sm border ${
                  canScrollLeft
                    ? 'bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 text-white cursor-pointer hover:scale-110 hover:shadow-emerald-500/25 border-white/20'
                    : 'bg-gray-200/50 text-gray-400 cursor-not-allowed border-gray-300/30'
                }`}
                aria-label="Scroll left"
              >
                <svg className="w-6 h-6 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
                </svg>
              </button>

              <button
                onClick={scrollToRight}
                disabled={!canScrollRight}
                className={`absolute right-2 top-1/2 transform -translate-y-1/2 z-20 w-14 h-14 rounded-full shadow-2xl transition-all duration-500 backdrop-blur-sm border ${
                  canScrollRight
                    ? 'bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 text-white cursor-pointer hover:scale-110 hover:shadow-emerald-500/25 border-white/20'
                    : 'bg-gray-200/50 text-gray-400 cursor-not-allowed border-gray-300/30'
                }`}
                aria-label="Scroll right"
              >
                <svg className="w-6 h-6 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>

            <div
              className="flex space-x-8 overflow-x-auto hide-scrollbar py-2 horizontal-scroll-container cursor-grab active:cursor-grabbing"
              ref={scrollContainerRef}
              onMouseDown={handleMouseDown}
              onMouseUp={handleMouseUp}
              onMouseMove={handleMouseMove}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              onTouchStart={handleTouchStart}
              onTouchMove={handleTouchMove}
              onTouchEnd={handleMouseUp}
              onTouchCancel={handleMouseLeave}
              onScroll={handleScroll}
            >
              {services.map((service, index) => (
                <ServiceTile
                  key={index}
                  title={service.title}
                  price={service.price}
                  startingFrom={service.startingFrom}
                  reportOnly={service.reportOnly}
                />
              ))}
            </div>
          </div>
          {/* Enhanced disclaimer with modern styling */}
          <div className="flex justify-center mt-12">
            <div className="bg-gradient-to-r from-white/60 to-white/80 backdrop-blur-sm px-6 py-3 rounded-2xl shadow-lg border border-white/30">
              <p className="text-sm text-gray-700 flex items-center font-medium">
                <svg className="w-5 h-5 mr-3 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span className="text-emerald-700">*</span> Prices may vary based on property size and infestation level
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

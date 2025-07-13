"use client";

import { useRef, useEffect, useState, useCallback } from 'react';

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

  // Scroll to service form with proper focus management and enhanced fallbacks
  const scrollToServiceForm = useCallback(() => {
    // Primary target: service form by ID
    let targetElement = document.getElementById('service-form');

    // Fallback 1: Look for ServiceForm component by class
    if (!targetElement) {
      targetElement = document.querySelector('section[class*="bg-gradient-to-r from-green-light to-green-dark"]');
    }

    // Fallback 2: Look for any form element
    if (!targetElement) {
      targetElement = document.querySelector('form');
    }

    // Fallback 3: Look for contact section
    if (!targetElement) {
      targetElement = document.querySelector('#contact, [id*="contact"], [class*="contact"]');
    }

    if (targetElement) {
      // Calculate offset for better positioning (account for fixed headers)
      const headerHeight = 80; // Approximate header height
      const elementPosition = targetElement.getBoundingClientRect().top + window.pageYOffset;
      const offsetPosition = elementPosition - headerHeight;

      // Smooth scroll with custom offset
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });

      // Add highlight effect to form
      targetElement.classList.add('offer-redeemed-highlight');

      // Enhanced focus management
      setTimeout(() => {
        // Try to find the first focusable input
        const focusableSelectors = [
          'input:not([disabled]):not([type="hidden"])',
          'select:not([disabled])',
          'textarea:not([disabled])',
          'button:not([disabled])'
        ];

        let firstInput: HTMLElement | null = null;

        for (const selector of focusableSelectors) {
          firstInput = targetElement!.querySelector(selector) as HTMLElement;
          if (firstInput) break;
        }

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
    } else {
      // Ultimate fallback: scroll to bottom of page where forms typically are
      window.scrollTo({
        top: document.body.scrollHeight - window.innerHeight,
        behavior: 'smooth'
      });

      // Announce fallback to screen readers
      announceToScreenReader('Form not found. Scrolled to bottom of page. Please look for the contact form.');
    }
  }, []);

  // Announce state changes to screen readers
  const announceToScreenReader = useCallback((message: string) => {
    const announcement = document.createElement('div');
    announcement.setAttribute('aria-live', 'polite');
    announcement.setAttribute('aria-atomic', 'true');
    announcement.className = 'sr-only';
    announcement.textContent = message;
    document.body.appendChild(announcement);

    // Remove after announcement
    setTimeout(() => {
      document.body.removeChild(announcement);
    }, 1000);
  }, []);

  // Handle offer redemption with animation sequence
  const handleRedeemOffer = useCallback(async () => {
    if (isAnimating) return; // Prevent double clicks

    setIsAnimating(true);

    // Phase 1: Processing state
    setRedemptionState('processing');
    announceToScreenReader(`Processing offer redemption for ${title}`);

    // Phase 2: Success state after processing
    timeoutRef.current = setTimeout(() => {
      setRedemptionState('redeemed');
      announceToScreenReader(`Offer successfully redeemed for ${title}! Taking you to the quote form.`);

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

  // Get button content based on state
  const getButtonContent = () => {
    switch (redemptionState) {
      case 'processing':
        return (
          <span className="flex items-center justify-center gap-2">
            <svg className="animate-spin h-4 w-4" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
            PROCESSING...
          </span>
        );
      case 'redeemed':
        return (
          <span className="flex items-center justify-center gap-2">
            <svg className="h-4 w-4 animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
            OFFER REDEEMED!
          </span>
        );
      case 'navigating':
        return (
          <span className="flex items-center justify-center gap-2">
            <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
            TAKING YOU TO FORM...
          </span>
        );
      default:
        return 'REDEEM OFFER';
    }
  };

  // Get button styling based on state with mobile optimizations
  const getButtonClassName = () => {
    const baseClasses = `py-2.5 px-4 rounded-lg text-sm font-bold transition-all duration-300 relative overflow-hidden w-full ${
      isTouch ? 'touch-manipulation' : ''
    }`;

    switch (redemptionState) {
      case 'processing':
        return `${baseClasses} bg-blue-600 text-white cursor-wait ${!prefersReducedMotion ? 'transform scale-95' : ''}`;
      case 'redeemed':
        return `${baseClasses} bg-green-600 text-white ${!prefersReducedMotion ? 'success-pulse' : ''}`;
      case 'navigating':
        return `${baseClasses} bg-purple-600 text-white`;
      default:
        return `${baseClasses} bg-black/80 text-white group-hover:bg-black cursor-pointer ${
          !prefersReducedMotion && !isMobile ? 'hover:scale-105' : ''
        } ${isTouch ? 'active:scale-95' : ''}`;
    }
  };

  // Check if user prefers reduced motion and device capabilities
  const prefersReducedMotion = typeof window !== 'undefined' &&
    window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  const isMobile = typeof window !== 'undefined' &&
    window.matchMedia('(max-width: 768px)').matches;

  const isTouch = typeof window !== 'undefined' &&
    ('ontouchstart' in window || navigator.maxTouchPoints > 0);

  return (
    <div className="min-w-[300px] h-[250px] rounded-xl shadow-xl overflow-hidden relative flex flex-col modern-card group transform transition-all duration-300 hover:-translate-y-2">
      {/* Gradient background with subtle pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-red-light to-red-dark opacity-90 group-hover:opacity-100 transition-opacity duration-300"></div>
      <div className="absolute inset-0 diagonal-pattern-bg opacity-5"></div>

      {/* Corner accent */}
      <div className="absolute top-0 right-0 w-16 h-16 bg-black/20 transform rotate-45 translate-x-8 -translate-y-8"></div>

      <div className="p-5 z-10 flex flex-col h-full relative">
        {/* Service title with fancy underline */}
        <h3 className="text-white font-bold text-xl mb-2 group-hover:text-white/90 transition-colors">
          {title}
          <div className="h-1 w-12 bg-white/30 mt-2 group-hover:w-full transition-all duration-500"></div>
        </h3>

        {/* Starting from text */}
        {startingFrom && <p className="text-white/80 text-xs font-medium">Starting from</p>}
        {reportOnly && <p className="text-white/80 text-xs font-medium">Report only</p>}

        {/* Price with enhanced styling */}
        <div className="mt-2 mb-4">
          <span className="text-white text-5xl font-bold flex items-start">
            <span className="text-2xl mt-1 mr-1 opacity-80">$</span>{price}<span className="text-sm align-top ml-1">*</span>
          </span>
        </div>

        {/* Offer text */}
        <p className="text-white/70 text-xs mt-auto mb-4 italic">Limited time offer - Includes full inspection</p>

        {/* Enhanced button with animation states and accessibility */}
        <div className="relative">
          <button
            type="button"
            onClick={handleRedeemOffer}
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
              // Enhanced keyboard support
              if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                handleRedeemOffer();
              }
            }}
          >
            <span className="relative z-10">{getButtonContent()}</span>
            {redemptionState === 'idle' && !prefersReducedMotion && (
              <div className="absolute inset-0 h-full w-full bg-white/10 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300"></div>
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

          {/* Celebration particles for success state */}
          {redemptionState === 'redeemed' && !prefersReducedMotion && !isMobile && (
            <div className="celebration-particles" />
          )}
        </div>
      </div>
    </div>
  );
};

export default function ServiceTiles() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const animationRef = useRef<number>();
  const scrollPosition = useRef(0);
  const scrollDirection = useRef(1); // 1 for right, -1 for left
  const isDragging = useRef(false);
  const startX = useRef(0);
  const scrollLeft = useRef(0);
  const isPaused = useRef(false);
  const isHovering = useRef(false);

  // Services data
  const services = [
    { title: 'Complete Pest Protection', price: '189', startingFrom: true },
    { title: 'Termite Inspection', price: '145', reportOnly: true, startingFrom: false },
    { title: 'Cockroach Elimination', price: '149', startingFrom: true },
    { title: 'Ant Infestation Control', price: '129', startingFrom: true },
    { title: 'Spider Control', price: '159', startingFrom: true },
    { title: 'Rodent Control', price: '175', startingFrom: true },
    { title: 'Bed Bug Treatment', price: '199', startingFrom: true },
    { title: 'Flea Extermination', price: '169', startingFrom: true },
    { title: 'Wasp & Bee Removal', price: '135', startingFrom: true },
    { title: 'Termite Treatment', price: '299', startingFrom: true },
  ];

  // Mouse and touch event handlers
  const handleMouseDown = (e: React.MouseEvent) => {
    if (!scrollContainerRef.current) return;

    isDragging.current = true;
    isPaused.current = true; // Pause auto-scrolling
    startX.current = e.pageX - scrollContainerRef.current.offsetLeft;
    scrollLeft.current = scrollContainerRef.current.scrollLeft;
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    if (!scrollContainerRef.current || e.touches.length !== 1) return;

    isDragging.current = true;
    isPaused.current = true; // Pause auto-scrolling
    startX.current = e.touches[0].clientX - scrollContainerRef.current.offsetLeft;
    scrollLeft.current = scrollContainerRef.current.scrollLeft;
  };

  const handleMouseUp = () => {
    isDragging.current = false;
    // Resume auto-scrolling after a delay
    setTimeout(() => {
      isPaused.current = false;
      // Update the scroll position to match the current scroll position
      if (scrollContainerRef.current) {
        scrollPosition.current = scrollContainerRef.current.scrollLeft;
      }
    }, 1000);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging.current || !scrollContainerRef.current) return;

    const x = e.pageX - scrollContainerRef.current.offsetLeft;
    const walk = (x - startX.current) * 2; // Scroll speed multiplier
    scrollContainerRef.current.scrollLeft = scrollLeft.current - walk;
    // Update the scroll position for auto-scrolling
    scrollPosition.current = scrollContainerRef.current.scrollLeft;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging.current || !scrollContainerRef.current || e.touches.length !== 1) return;
    // Note: We're not calling preventDefault() to avoid issues with passive event listeners

    const x = e.touches[0].clientX - scrollContainerRef.current.offsetLeft;
    const walk = (x - startX.current) * 2; // Scroll speed multiplier
    scrollContainerRef.current.scrollLeft = scrollLeft.current - walk;
    // Update the scroll position for auto-scrolling
    scrollPosition.current = scrollContainerRef.current.scrollLeft;
  };

  const handleMouseLeave = () => {
    isHovering.current = false;
    if (isDragging.current) {
      isDragging.current = false;
    }
    // Resume auto-scrolling after a short delay
    setTimeout(() => {
      if (!isHovering.current) { // Only resume if still not hovering
        isPaused.current = false;
        // Update the scroll position to match the current scroll position
        if (scrollContainerRef.current) {
          scrollPosition.current = scrollContainerRef.current.scrollLeft;
        }
      }
    }, 500);
  };

  const handleMouseEnter = () => {
    isHovering.current = true;
    isPaused.current = true; // Pause auto-scrolling when mouse enters
  };

  // Auto-scroll animation
  useEffect(() => {
    const scrollContainer = scrollContainerRef.current;
    if (!scrollContainer) return;

    const scrollWidth = scrollContainer.scrollWidth;
    const clientWidth = scrollContainer.clientWidth;

    const animate = () => {
      if (!scrollContainer || isPaused.current) {
        // If paused, just continue the animation loop without scrolling
        animationRef.current = requestAnimationFrame(animate);
        return;
      }

      // Change direction when reaching the end or beginning
      if (scrollPosition.current >= scrollWidth - clientWidth) {
        scrollDirection.current = -1; // scroll left
      } else if (scrollPosition.current <= 0) {
        scrollDirection.current = 1; // scroll right
      }

      // Update scroll position
      scrollPosition.current += scrollDirection.current * 1.0;
      scrollContainer.scrollLeft = scrollPosition.current;

      // Continue animation
      animationRef.current = requestAnimationFrame(animate);
    };

    // Start animation
    animationRef.current = requestAnimationFrame(animate);

    // Cleanup
    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [])

  return (
    <section className="py-16 bg-gradient-to-b from-gray-100 to-white relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-gray-200 to-transparent opacity-50"></div>
      <div className="absolute -top-10 -right-10 w-40 h-40 bg-red-light/10 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-green-light/10 rounded-full blur-3xl"></div>

      <div className="px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        {/* Enhanced section header */}
        <div className="text-center mb-12">
          <span className="inline-block px-3 py-1 bg-red-light/10 text-red-dark text-sm font-semibold rounded-full mb-3">
            PROFESSIONAL SERVICES
          </span>
          <h2 className="text-4xl font-bold mb-4 text-gray-900">
            Cost Effective <span className="text-red-dark">Pest Control</span> Services
          </h2>
          <div className="w-24 h-1 bg-red-light mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Our professional pest control services are designed to effectively eliminate and prevent pest issues in your home or business at competitive prices.
          </p>
        </div>

        {/* Horizontal scrolling container */}
        <div className="w-full py-6 overflow-hidden relative">
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

        {/* Enhanced disclaimer */}
        <div className="flex justify-center mt-8">
          <div className="bg-gray-50 px-4 py-2 rounded-full shadow-sm">
            <p className="text-sm text-gray-600 flex items-center">
              <svg className="w-4 h-4 mr-2 text-red-dark" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              * Prices may vary based on property size and infestation level
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}


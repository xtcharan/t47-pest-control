"use client";

import { useState, useRef, useEffect } from 'react';
import { PRICING_DATA } from '@/data/pricingData';
import { COMPANY_INFO } from '@/components/lib/constants';

type OfferRedemptionState = 'idle' | 'redeeming' | 'redeemed' | 'error';

interface ServiceTileProps {
  title: string;
  price: string;
  startingFrom?: boolean;
  reportOnly?: boolean;
}

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

  // Detect reduced motion preference
  const prefersReducedMotion = useRef(false);
  const isMobile = useRef(false);

  useEffect(() => {
    // Check for reduced motion preference
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    prefersReducedMotion.current = mediaQuery.matches;

    // Check if mobile
    isMobile.current = window.innerWidth < 768;

    const handleChange = () => {
      prefersReducedMotion.current = mediaQuery.matches;
    };

    const handleResize = () => {
      isMobile.current = window.innerWidth < 768;
    };

    mediaQuery.addEventListener('change', handleChange);
    window.addEventListener('resize', handleResize);

    return () => {
      mediaQuery.removeEventListener('change', handleChange);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const handleOfferRedeem = () => {
    if (redemptionState !== 'idle') return;

    setRedemptionState('redeeming');
    setIsAnimating(true);

    // Simulate API call
    timeoutRef.current = setTimeout(() => {
      setRedemptionState('redeemed');
      
      // Reset after showing success
      timeoutRef.current = setTimeout(() => {
        setRedemptionState('idle');
        setIsAnimating(false);
      }, 2000);
    }, 1500);
  };

  const getButtonText = () => {
    switch (redemptionState) {
      case 'redeeming':
        return 'Processing...';
      case 'redeemed':
        return 'Offer Claimed!';
      case 'error':
        return 'Try Again';
      default:
        return 'Claim Offer';
    }
  };

  const getButtonClass = () => {
    const baseClass = "w-full py-3 px-4 rounded-lg font-bold text-sm transition-all duration-300 transform";
    
    switch (redemptionState) {
      case 'redeeming':
        return `${baseClass} bg-yellow-500 text-black cursor-not-allowed scale-95`;
      case 'redeemed':
        return `${baseClass} bg-green-500 text-white cursor-not-allowed scale-105 shadow-lg`;
      case 'error':
        return `${baseClass} bg-red-500 text-white hover:bg-red-600 hover:scale-105`;
      default:
        return `${baseClass} bg-white text-red-dark hover:bg-gray-100 hover:scale-105 shadow-md hover:shadow-lg`;
    }
  };

  return (
    <div className="min-w-[300px] h-[250px] rounded-xl shadow-xl overflow-hidden relative flex flex-col modern-card group transform transition-all duration-300 hover:-translate-y-2">
      {/* Gradient background with subtle pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-red-light to-red-dark opacity-90 group-hover:opacity-100 transition-opacity duration-300"></div>
      <div className="absolute inset-0 diagonal-pattern-bg opacity-5"></div>

      {/* Corner accent */}
      <div className="absolute top-0 right-0 w-16 h-16 bg-black/20 transform rotate-45 translate-x-8 -translate-y-8"></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col h-full p-6">
        {/* Header */}
        <div className="flex-1">
          <h3 className="text-white text-lg font-bold mb-3 leading-tight">
            {title} - Albury
          </h3>
          
          <div className="mb-4">
            {startingFrom && !reportOnly && (
              <p className="text-white/80 text-sm mb-1">Starting from</p>
            )}
            <p className="text-white text-2xl font-bold">
              {price}
              {reportOnly && <span className="text-sm font-normal ml-1">report only</span>}
            </p>
          </div>
        </div>

        {/* Action button */}
        <div className="mt-auto">
          <button
            onClick={handleOfferRedeem}
            disabled={redemptionState === 'redeeming' || redemptionState === 'redeemed'}
            className={getButtonClass()}
            aria-label={`Claim offer for ${title} in Albury`}
          >
            <span className="relative z-10">
              {getButtonText()}
            </span>
          </button>

          {/* Celebration particles for success state */}
          {redemptionState === 'redeemed' && !prefersReducedMotion.current && !isMobile.current && (
            <div className="celebration-particles" />
          )}
        </div>
      </div>
    </div>
  );
};

export default function AlburyServiceTiles() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLElement>(null);
  const animationRef = useRef<number>();
  const scrollPosition = useRef(0);
  const scrollDirection = useRef(1); // 1 for right, -1 for left
  const isDragging = useRef(false);
  const startX = useRef(0);
  const scrollLeft = useRef(0);
  const isPaused = useRef(false);
  const isHovering = useRef(false);
  const isVisible = useRef(true);

  // Services data from shared source
  const services = PRICING_DATA;

  // Auto-scroll functionality
  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container) return;

    const scroll = () => {
      if (isDragging.current || isPaused.current || !isVisible.current) {
        animationRef.current = requestAnimationFrame(scroll);
        return;
      }

      const maxScroll = container.scrollWidth - container.clientWidth;
      
      if (scrollPosition.current >= maxScroll) {
        scrollDirection.current = -1;
      } else if (scrollPosition.current <= 0) {
        scrollDirection.current = 1;
      }

      scrollPosition.current += scrollDirection.current * 0.5;
      container.scrollLeft = scrollPosition.current;

      animationRef.current = requestAnimationFrame(scroll);
    };

    // Intersection Observer for visibility
    const observer = new IntersectionObserver(
      ([entry]) => {
        isVisible.current = entry.isIntersecting;
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    animationRef.current = requestAnimationFrame(scroll);

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
      observer.disconnect();
    };
  }, []);

  // Mouse event handlers
  const handleMouseDown = (e: React.MouseEvent) => {
    isDragging.current = true;
    startX.current = e.pageX - (scrollContainerRef.current?.offsetLeft || 0);
    scrollLeft.current = scrollContainerRef.current?.scrollLeft || 0;
  };

  const handleMouseUp = () => {
    isDragging.current = false;
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging.current || !scrollContainerRef.current) return;
    e.preventDefault();
    const x = e.pageX - (scrollContainerRef.current.offsetLeft || 0);
    const walk = (x - startX.current) * 2;
    scrollContainerRef.current.scrollLeft = scrollLeft.current - walk;
    scrollPosition.current = scrollContainerRef.current.scrollLeft;
  };

  const handleMouseEnter = () => {
    isHovering.current = true;
    isPaused.current = true;
  };

  const handleMouseLeave = () => {
    isHovering.current = false;
    isPaused.current = false;
    isDragging.current = false;
  };

  // Touch event handlers
  const handleTouchStart = (e: React.TouchEvent) => {
    isDragging.current = true;
    startX.current = e.touches[0].pageX - (scrollContainerRef.current?.offsetLeft || 0);
    scrollLeft.current = scrollContainerRef.current?.scrollLeft || 0;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging.current || !scrollContainerRef.current) return;
    const x = e.touches[0].pageX - (scrollContainerRef.current.offsetLeft || 0);
    const walk = (x - startX.current) * 2;
    scrollContainerRef.current.scrollLeft = scrollLeft.current - walk;
    scrollPosition.current = scrollContainerRef.current.scrollLeft;
  };

  return (
    <section 
      ref={sectionRef}
      className="py-16 bg-gray-50 overflow-hidden"
      id="service-categories"
    >
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            Our Albury Pest Control Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Professional pest control solutions for Albury, Wodonga, Wagga Wagga, Orange, Shepparton, Dubbo, and Griffith. 
            Competitive pricing with guaranteed results.
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

        {/* Call to action */}
        <div className="text-center mt-12">
          <p className="text-gray-600 mb-6">
            Need a custom quote for your Albury property? Contact our local experts today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={`tel:${COMPANY_INFO.phone}`}
              className="bg-green-light hover:bg-green-dark text-black font-bold py-3 px-8 rounded-lg transition-colors shadow-md hover:shadow-lg transform hover:-translate-y-1"
            >
              📞 Call Albury Now
            </a>
            <a
              href="/contact"
              className="bg-primary hover:bg-primary-dark text-white font-bold py-3 px-8 rounded-lg transition-colors shadow-md hover:shadow-lg transform hover:-translate-y-1"
            >
              Get Free Quote
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

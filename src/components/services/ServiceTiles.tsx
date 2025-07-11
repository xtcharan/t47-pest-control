"use client";

import { useRef, useEffect } from 'react';

interface ServiceTileProps {
  title: string;
  price: string;
  startingFrom?: boolean;
  reportOnly?: boolean;
}

const ServiceTile = ({ title, price, startingFrom = true, reportOnly = false }: ServiceTileProps) => {
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

        {/* Enhanced button with hover effect */}
        <button
          type="button"
          className="bg-black/80 text-white py-2.5 px-4 rounded-lg text-sm font-bold group-hover:bg-black transition-all duration-300 relative overflow-hidden w-full"
        >
          <span className="relative z-10">REDEEM OFFER</span>
          <div className="absolute inset-0 h-full w-full bg-white/10 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300"></div>
        </button>
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


"use client";

import { useState, useEffect } from 'react';
import { COMPANY_INFO } from '../lib/constants';

// Scroll to Top Button Component
function ScrollToTopButton({ isVisible }: { isVisible: boolean }) {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  if (!isVisible) {
    return null;
  }

  return (
    <button
      onClick={scrollToTop}
      className="hidden lg:block fixed bottom-8 right-8 z-40 bg-green-600 hover:bg-green-700 text-white p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50 group"
      aria-label="Scroll to top"
    >
      <svg
        className="w-5 h-5 group-hover:-translate-y-0.5 transition-transform duration-300"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
      </svg>
    </button>
  );
}

// Call Button Component with Ringing Animation - Desktop Only (Always Visible)
function CallButton() {
  const handleCall = () => {
    window.location.href = `tel:${COMPANY_INFO.phone}`;
  };

  return (
    <button
      onClick={handleCall}
      className="hidden lg:block fixed bottom-8 left-8 z-50 bg-green-600 hover:bg-green-700 text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50 group relative animate-pulse hover:animate-none"
      aria-label="Call us now"
      style={{ zIndex: 50 }}
    >
      {/* Ringing animation rings */}
      <div className="absolute inset-0 rounded-full">
        <div className="absolute inset-0 rounded-full border-2 border-green-300 animate-ping opacity-75"></div>
        <div className="absolute inset-0 rounded-full border-2 border-green-400 animate-ping opacity-50" style={{ animationDelay: '0.5s' }}></div>
        <div className="absolute inset-0 rounded-full border-2 border-green-500 animate-ping opacity-25" style={{ animationDelay: '1s' }}></div>
      </div>

      {/* Phone icon */}
      <svg
        className="w-6 h-6 relative z-10 group-hover:scale-110 group-hover:rotate-12 transition-transform duration-300"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
      </svg>
    </button>
  );
}

export default function StickyQuoteButton() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      // Show all buttons after scrolling down 300px (synchronized)
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToServiceForm = () => {
    // First try to find by ID
    const serviceFormSection = document.getElementById('service-form');

    if (serviceFormSection) {
      serviceFormSection.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    } else {
      // Fallback: try to find by class
      const fallbackSection = document.querySelector('section[class*="bg-gradient-to-r from-green-light to-green-dark"]');
      if (fallbackSection) {
        fallbackSection.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    }
  };

  if (!isVisible) {
    return null;
  }

  return (
    <>
      {/* Sticky Quote Button */}
      <button
        onClick={scrollToServiceForm}
        className="hidden lg:block fixed right-0 top-1/2 transform -translate-y-1/2 z-50 bg-green-600 text-white font-bold py-4 px-2 shadow-lg hover:shadow-xl transition-all duration-300 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50 group"
        style={{
          writingMode: 'vertical-rl',
          textOrientation: 'mixed',
          borderRadius: '6px 0 0 6px',
          minHeight: '120px',
          width: '40px',
          letterSpacing: '1px'
        }}
        aria-label="Get Free Quote - Scroll to service form"
      >
        <div className="flex flex-col items-center justify-center h-full">
          <span className="text-xs font-semibold tracking-wide mb-2">
            GET FREE QUOTE
          </span>
          <svg
            className="w-3 h-3 transform rotate-90 group-hover:translate-y-1 transition-transform duration-300"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
          </svg>
        </div>
      </button>

      {/* Call Button - Always visible on desktop */}
      <CallButton />

      {/* Scroll to Top Button */}
      <ScrollToTopButton isVisible={isVisible} />
    </>
  );
}

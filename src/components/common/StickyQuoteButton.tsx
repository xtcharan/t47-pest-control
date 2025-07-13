"use client";

import { useState, useEffect } from 'react';

export default function StickyQuoteButton() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      // Show button after scrolling down 100px
      if (window.pageYOffset > 100) {
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
  );
}

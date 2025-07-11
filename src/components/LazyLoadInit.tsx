"use client";

import { useEffect } from 'react';
import { setupLazyLoading } from '@/utils/lazyLoadImages';

/**
 * Component to initialize lazy loading
 * This is used in the layout to ensure lazy loading is set up on all pages
 */
export default function LazyLoadInit() {
  useEffect(() => {
    // Initialize lazy loading
    setupLazyLoading();
    
    // Re-initialize when route changes (for SPA navigation)
    const handleRouteChange = () => {
      setTimeout(() => {
        setupLazyLoading();
      }, 100);
    };
    
    // Listen for route changes in Next.js
    if (typeof window !== 'undefined') {
      window.addEventListener('popstate', handleRouteChange);
    }
    
    return () => {
      if (typeof window !== 'undefined') {
        window.removeEventListener('popstate', handleRouteChange);
      }
    };
  }, []);
  
  // This component doesn't render anything visible
  return null;
}

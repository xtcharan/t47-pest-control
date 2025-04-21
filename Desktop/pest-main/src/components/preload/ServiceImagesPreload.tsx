"use client";

import { useEffect } from 'react';

/**
 * Component to preload service images
 * This helps improve performance by loading images before they're needed
 */
export default function ServiceImagesPreload() {
  useEffect(() => {
    // Only run in browser environment
    if (typeof window === 'undefined' || typeof document === 'undefined') {
      return;
    }

    try {
      // Preload WebP images
      const preloadWebP = [
        '/images/services/optimized/residential-pest-control.webp',
        '/images/services/optimized/commercial-pest-control.webp',
        '/images/services/optimized/termite-solutions.webp'
      ];

      // Preload JPG fallback images
      const preloadJPG = [
        '/images/services/optimized/residential-pest-control.jpg',
        '/images/services/optimized/commercial-pest-control.jpg',
        '/images/services/optimized/termite-solutions.jpg'
      ];

      // Create link elements for WebP images
      preloadWebP.forEach(src => {
        const link = document.createElement('link');
        link.rel = 'preload';
        link.as = 'image';
        link.type = 'image/webp';
        link.href = src;
        document.head.appendChild(link);
      });

      // Create link elements for JPG images
      preloadJPG.forEach(src => {
        const link = document.createElement('link');
        link.rel = 'preload';
        link.as = 'image';
        link.type = 'image/jpeg';
        link.href = src;
        document.head.appendChild(link);
      });

      // Clean up function to remove preload links when component unmounts
      return () => {
        try {
          document.querySelectorAll('link[rel="preload"][as="image"]').forEach(link => {
            if (link && link.parentNode) {
              link.parentNode.removeChild(link);
            }
          });
        } catch (error) {
          console.error('Error cleaning up preload links:', error);
        }
      };
    } catch (error) {
      console.error('Error in ServiceImagesPreload:', error);
      return () => {}; // Return empty cleanup function
    }
  }, []);

  // This component doesn't render anything visible
  return null;
}

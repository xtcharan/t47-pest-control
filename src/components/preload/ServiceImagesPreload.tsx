"use client";

import { useEffect, useState } from 'react';

/**
 * Component to intelligently preload service images
 * Only preloads images when they're likely to be needed soon
 * Uses IntersectionObserver to detect when to start preloading
 */
export default function ServiceImagesPreload() {
  const [shouldPreload, setShouldPreload] = useState(false);

  // Set up observer to detect when user scrolls near where service images will be needed
  useEffect(() => {
    // Only run in browser environment
    if (typeof window === 'undefined' || typeof document === 'undefined') {
      return;
    }

    // Find an element that appears before the service images section
    const triggerElement = document.querySelector('#safety-features');
    if (!triggerElement) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          // When trigger element is about to enter viewport, start preloading
          if (entry.isIntersecting) {
            setShouldPreload(true);
            observer.disconnect();
          }
        });
      },
      {
        rootMargin: '200px 0px', // Start preloading when within 200px of viewport
        threshold: 0.1,
      }
    );

    observer.observe(triggerElement);

    return () => {
      observer.disconnect();
    };
  }, []);

  // Preload images when shouldPreload becomes true
  useEffect(() => {
    if (!shouldPreload || typeof window === 'undefined' || typeof document === 'undefined') {
      return;
    }

    try {
      // Only preload the first service image to reduce initial load
      const preloadWebP = [
        '/residential-pest-control.webp'
      ];

      // Only preload the first JPG fallback
      const preloadJPG = [
        '/residential-pest-control.jpg'
      ];

      // Create link elements for WebP images with low priority
      preloadWebP.forEach(src => {
        const link = document.createElement('link');
        link.rel = 'preload';
        link.as = 'image';
        link.type = 'image/webp';
        link.href = src;
        // Add low priority hint
        if ('fetchPriority' in link) {
          // @ts-ignore - fetchPriority is not in the types yet
          link.fetchPriority = 'low';
        }
        document.head.appendChild(link);
      });

      // Create link elements for JPG images with low priority
      preloadJPG.forEach(src => {
        const link = document.createElement('link');
        link.rel = 'preload';
        link.as = 'image';
        link.type = 'image/jpeg';
        link.href = src;
        // Add low priority hint
        if ('fetchPriority' in link) {
          // @ts-ignore - fetchPriority is not in the types yet
          link.fetchPriority = 'low';
        }
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
  }, [shouldPreload]);

  // This component doesn't render anything visible
  return null;
}

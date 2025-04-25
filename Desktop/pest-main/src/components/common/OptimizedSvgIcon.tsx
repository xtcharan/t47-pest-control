"use client";

import { useState, useEffect, useRef } from 'react';

interface OptimizedSvgIconProps {
  src: string;
  alt: string;
  className?: string;
  width?: number | string;
  height?: number | string;
  rootMargin?: string;
  threshold?: number;
  placeholderColor?: string;
}

/**
 * OptimizedSvgIcon component for efficiently loading SVG icons
 * - Lazy loads SVGs when they're about to enter the viewport
 * - Provides a clean transparent background
 * - Optimizes rendering performance
 */
export default function OptimizedSvgIcon({
  src,
  alt,
  className = '',
  width = '100%',
  height = '100%',
  rootMargin = '200px',
  threshold = 0.1,
  placeholderColor = 'transparent',
}: OptimizedSvgIconProps) {
  const [isLoaded, setIsLoaded] = useState(false);
  const [shouldLoad, setShouldLoad] = useState(false);
  const [svgContent, setSvgContent] = useState<string | null>(null);
  const iconRef = useRef<HTMLDivElement>(null);

  // Set up intersection observer to detect when the icon is about to be visible
  useEffect(() => {
    if (!iconRef.current) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setShouldLoad(true);
            observer.disconnect();
          }
        });
      },
      {
        threshold,
        rootMargin,
      }
    );

    observer.observe(iconRef.current);

    return () => {
      observer.disconnect();
    };
  }, [threshold, rootMargin]);

  // Load SVG content when it should be visible
  useEffect(() => {
    if (!shouldLoad) return;

    const fetchSvg = async () => {
      try {
        const response = await fetch(src);
        const text = await response.text();

        // Simple validation that it's an SVG
        if (text.includes('<svg') && text.includes('</svg>')) {
          setSvgContent(text);
          setIsLoaded(true);
        } else {
          console.error('Invalid SVG content:', text);
          // Fallback to regular image tag
          setSvgContent(null);
          setIsLoaded(true);
        }
      } catch (error) {
        console.error('Error loading SVG:', error);
        setIsLoaded(true);
      }
    };

    fetchSvg();
  }, [shouldLoad, src]);

  return (
    <div
      ref={iconRef}
      className={`relative overflow-hidden svg-icon-container ${className}`}
      style={{
        width,
        height,
        backgroundColor: 'transparent',
        transition: 'opacity 0.3s ease-in-out, transform 0.3s ease-in-out',
      }}
      aria-label={alt}
      role="img"
    >
      {shouldLoad ? (
        svgContent ? (
          // If we have SVG content, render it inline for better performance
          <div
            className={`w-full h-full ${isLoaded ? 'opacity-100' : 'opacity-0'}`}
            style={{ transition: 'opacity 0.3s ease-in-out' }}
            dangerouslySetInnerHTML={{
              __html: svgContent
                // Remove any background rectangles or paths
                .replace(/rect fill="#[fF]3[fF]4[fF]6"/g, 'rect fill="transparent"')
                .replace(/path fill="#[fF]3[fF]4[fF]6"/g, 'path fill="transparent"')
            }}
          />
        ) : (
          // Fallback to regular image if SVG loading fails
          <img
            src={src}
            alt={alt}
            className={`w-full h-full object-contain ${isLoaded ? 'opacity-100' : 'opacity-0'}`}
            style={{ transition: 'opacity 0.3s ease-in-out' }}
            onLoad={() => setIsLoaded(true)}
          />
        )
      ) : (
        // Placeholder while waiting to load
        <div className="w-full h-full flex items-center justify-center bg-transparent">
          {/* No placeholder for cleaner look */}
        </div>
      )}
    </div>
  );
}

"use client";

import Image, { ImageProps } from 'next/image';
import { useState, useEffect, useRef } from 'react';
import styles from './ImageStyles.module.css';

interface LazyImageProps extends Omit<ImageProps, 'src'> {
  src: string;
  fallbackSrc?: string;
  onLoad?: () => void;
  threshold?: number; // Intersection observer threshold
  rootMargin?: string; // Intersection observer root margin
  placeholderColor?: string; // Background color while loading
  blurDataURL?: string; // Optional blur data URL for blur-up effect
}

/**
 * LazyImage component that only loads images when they're about to enter the viewport
 * Supports WebP with JPEG fallback and loading optimization features
 */
export default function LazyImage({
  src,
  fallbackSrc,
  alt,
  onLoad,
  threshold = 0.1,
  rootMargin = "200px 0px", // Start loading images 200px before they enter the viewport
  placeholderColor = "#f3f4f6", // Light gray placeholder
  blurDataURL,
  ...props
}: LazyImageProps) {
  const [isLoading, setIsLoading] = useState(true);
  const [shouldLoad, setShouldLoad] = useState(false);
  const imageRef = useRef<HTMLDivElement>(null);

  // If the src is already a WebP, use it directly
  // Otherwise, try to use the WebP version if available
  const webpSrc = src.endsWith('.webp')
    ? src
    : src.replace(/\.(jpe?g|png)$/i, '.webp');

  // Use the provided fallback or default to the original src
  const jpgSrc = fallbackSrc || (src.endsWith('.webp')
    ? src.replace('.webp', '.jpg')
    : src);

  // Set up intersection observer to detect when the image is about to be visible
  useEffect(() => {
    if (!imageRef.current) return;

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

    observer.observe(imageRef.current);

    return () => {
      observer.disconnect();
    };
  }, [threshold, rootMargin]);

  const handleLoad = () => {
    setIsLoading(false);
    if (onLoad) onLoad();
  };

  return (
    <div 
      ref={imageRef} 
      className={`relative overflow-hidden ${props.className || ''}`}
      style={{ 
        backgroundColor: placeholderColor,
        width: '100%',
        height: '100%',
        ...props.style
      }}
    >
      {shouldLoad ? (
        <>
          <Image
            src={webpSrc}
            alt={alt || ''}
            onLoad={handleLoad}
            className={`${isLoading ? 'opacity-0' : 'opacity-100'} transition-opacity duration-500`}
            placeholder={blurDataURL ? "blur" : "empty"}
            blurDataURL={blurDataURL}
            {...props}
          />
          <noscript>
            <img
              src={jpgSrc}
              alt={alt || ''}
              className={`${props.objectFit === 'contain' ? styles.fallbackImageContain : styles.fallbackImage}`}
            />
          </noscript>
        </>
      ) : (
        // Placeholder while image is not yet in viewport
        <div 
          className="w-full h-full flex items-center justify-center"
          style={{ backgroundColor: placeholderColor }}
        >
          {/* Optional: Add a lightweight SVG placeholder icon here */}
        </div>
      )}
    </div>
  );
}

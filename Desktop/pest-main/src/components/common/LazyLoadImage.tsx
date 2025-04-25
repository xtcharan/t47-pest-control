"use client";

import { useState, useEffect, useRef } from 'react';

interface LazyLoadImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
  placeholderColor?: string;
  threshold?: number;
  rootMargin?: string;
}

/**
 * LazyLoadImage component for regular HTML img elements
 * Only loads images when they're about to enter the viewport
 */
export default function LazyLoadImage({
  src,
  alt,
  placeholderColor = "#f3f4f6",
  threshold = 0.1,
  rootMargin = "200px 0px",
  className,
  ...props
}: LazyLoadImageProps) {
  const [isLoaded, setIsLoaded] = useState(false);
  const [shouldLoad, setShouldLoad] = useState(false);
  const imageRef = useRef<HTMLDivElement>(null);

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

  return (
    <div
      ref={imageRef}
      className={`relative overflow-hidden ${className || ''}`}
      style={{
        backgroundColor: placeholderColor,
        width: props.width || '100%',
        height: props.height || '100%',
      }}
    >
      {shouldLoad ? (
        <img
          src={src}
          alt={alt}
          onLoad={() => setIsLoaded(true)}
          className={`${className || ''} ${isLoaded ? 'opacity-100' : 'opacity-0'} transition-opacity duration-500`}
          {...props}
        />
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

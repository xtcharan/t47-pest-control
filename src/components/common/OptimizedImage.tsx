"use client";

import Image, { ImageProps } from 'next/image';
import { useState } from 'react';
import LazyImage from './LazyImage';

interface OptimizedImageProps extends Omit<ImageProps, 'src'> {
  src: string;
  fallbackSrc?: string;
  onLoad?: () => void;
  lazyLoad?: boolean;
  threshold?: number;
  rootMargin?: string;
  placeholderColor?: string;
}

/**
 * OptimizedImage component that leverages Next.js Image optimization
 * with proper lazy loading and performance optimizations
 */
export default function OptimizedImage({
  src,
  fallbackSrc,
  alt,
  onLoad,
  lazyLoad = false,
  threshold,
  rootMargin,
  placeholderColor,
  ...props
}: OptimizedImageProps) {
  const [isLoading, setIsLoading] = useState(true);

  // Let Next.js handle format optimization automatically
  // Use the original src and let Next.js optimize it
  const optimizedSrc = src;

  // Fallback src for error handling
  const errorFallbackSrc = fallbackSrc || src;

  const handleLoad = () => {
    setIsLoading(false);
    if (onLoad) onLoad();
  };

  // Use LazyImage for non-critical images
  if (lazyLoad) {
    return (
      <LazyImage
        src={optimizedSrc}
        fallbackSrc={errorFallbackSrc}
        alt={alt || ''}
        onLoad={handleLoad}
        threshold={threshold}
        rootMargin={rootMargin}
        placeholderColor={placeholderColor}
        {...props}
      />
    );
  }

  // Use Next.js Image with proper optimization for critical images
  return (
    <Image
      src={optimizedSrc}
      alt={alt || ''}
      onLoad={handleLoad}
      loading={props.priority ? 'eager' : 'lazy'}
      placeholder={props.blurDataURL ? 'blur' : 'empty'}
      className={`${props.className || ''} ${isLoading ? 'opacity-0' : 'opacity-100'} transition-opacity duration-300`}
      {...props}
    />
  );
}

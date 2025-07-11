"use client";

import Image, { ImageProps } from 'next/image';
import { useState } from 'react';
import styles from './ImageStyles.module.css';
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
 * OptimizedImage component that provides WebP with JPEG fallback
 * and loading optimization features
 * Now supports lazy loading for non-critical images
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
  const [hasError, setHasError] = useState(false);

  // Use JPG images as primary source due to WebP compatibility issues
  // Use the provided fallback or default to the original src
  const jpgSrc = fallbackSrc || (src.endsWith('.webp')
    ? src.replace('.webp', '.jpg')
    : src);

  // If the src is already a WebP, use it directly
  // Otherwise, try to use the WebP version if available
  const webpSrc = src.endsWith('.webp')
    ? src
    : src.replace(/\.(jpe?g|png)$/i, '.webp');

  // Use JPG as primary, WebP as fallback for better compatibility
  const primarySrc = jpgSrc;
  const secondarySrc = webpSrc;

  const handleLoad = () => {
    setIsLoading(false);
    if (onLoad) onLoad();
  };

  const handleError = () => {
    if (!hasError) {
      setHasError(true);
      // The component will re-render with fallback
    }
  };

  // Use LazyImage for non-critical images
  if (lazyLoad) {
    return (
      <LazyImage
        src={primarySrc}
        fallbackSrc={secondarySrc}
        alt={alt || ''}
        onLoad={handleLoad}
        threshold={threshold}
        rootMargin={rootMargin}
        placeholderColor={placeholderColor}
        {...props}
      />
    );
  }

  // Use regular Image with priority for critical above-the-fold images
  // Use JPG as primary source with error handling
  const imageSrc = hasError ? secondarySrc : primarySrc;

  return (
    <>
      <Image
        src={imageSrc}
        alt={alt || ''}
        onLoad={handleLoad}
        onError={handleError}
        className={`${props.className || ''} ${isLoading ? 'opacity-0' : 'opacity-100'} transition-opacity duration-500`}
        {...props}
      />
      <noscript>
        <img
          src={jpgSrc}
          alt={alt || ''}
          className={`${props.className || ''} ${props.objectFit === 'contain' ? styles.fallbackImageContain : styles.fallbackImage}`}
        />
      </noscript>
    </>
  );
}

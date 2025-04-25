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

  // If the src is already a WebP, use it directly
  // Otherwise, try to use the WebP version if available
  const webpSrc = src.endsWith('.webp')
    ? src
    : src.replace(/\.(jpe?g|png)$/i, '.webp');

  // Use the provided fallback or default to the original src
  const jpgSrc = fallbackSrc || (src.endsWith('.webp')
    ? src.replace('.webp', '.jpg')
    : src);

  const handleLoad = () => {
    setIsLoading(false);
    if (onLoad) onLoad();
  };

  // Use LazyImage for non-critical images
  if (lazyLoad) {
    return (
      <LazyImage
        src={webpSrc}
        fallbackSrc={jpgSrc}
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
  return (
    <>
      <Image
        src={webpSrc}
        alt={alt || ''}
        onLoad={handleLoad}
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

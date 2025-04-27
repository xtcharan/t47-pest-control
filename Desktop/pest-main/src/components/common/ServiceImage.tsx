"use client";

import Image, { ImageProps } from 'next/image';
import { useState } from 'react';
import styles from './ImageStyles.module.css';
import LazyImage from './LazyImage';

interface ServiceImageProps extends Omit<ImageProps, 'src'> {
  serviceName: string;
  onLoad?: () => void;
  lazyLoad?: boolean;
  threshold?: number;
  rootMargin?: string;
  placeholderColor?: string;
}

/**
 * ServiceImage component that provides optimized images for service cards
 * with WebP format and JPEG fallback
 * Now supports lazy loading for non-critical images
 */
export default function ServiceImage({
  serviceName,
  alt,
  onLoad,
  lazyLoad = false,
  threshold,
  rootMargin,
  placeholderColor,
  ...props
}: ServiceImageProps) {
  const [isLoading, setIsLoading] = useState(true);

  // Use JPG images as primary source due to WebP issues
  const jpgSrc = `/${serviceName}.jpg`;
  const webpSrc = `/${serviceName}.webp`;

  const handleLoad = () => {
    setIsLoading(false);
    if (onLoad) onLoad();
  };

  // Fallback to original image paths if optimized images don't exist
  const fallbackSrc = `/${serviceName}.jpg`;

  // Use LazyImage for non-critical images
  if (lazyLoad) {
    return (
      <LazyImage
        src={jpgSrc}
        fallbackSrc={fallbackSrc}
        alt={alt || `${serviceName.replace(/-/g, ' ')} image`}
        onLoad={handleLoad}
        threshold={threshold}
        rootMargin={rootMargin}
        placeholderColor={placeholderColor}
        {...props}
      />
    );
  }

  // Use regular Image for critical above-the-fold images
  return (
    <>
      <Image
        src={jpgSrc}
        alt={alt || `${serviceName.replace(/-/g, ' ')} image`}
        onLoad={handleLoad}
        onError={(e) => {
          // If JPG fails, try fallback
          const imgElement = e.currentTarget as HTMLImageElement;
          if (imgElement.src !== fallbackSrc) {
            imgElement.src = fallbackSrc;
          }
        }}
        className={`${props.className || ''} ${isLoading ? 'opacity-0' : 'opacity-100'} transition-opacity duration-500`}
        {...props}
      />
      <noscript>
        <img
          src={jpgSrc}
          alt={alt || `${serviceName.replace(/-/g, ' ')} image`}
          className={`${props.className || ''} ${props.objectFit === 'contain' ? styles.fallbackImageContain : styles.fallbackImage}`}
        />
      </noscript>
    </>
  );
}

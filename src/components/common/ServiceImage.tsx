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

  // Let Next.js handle image optimization automatically
  const optimizedSrc = `/${serviceName}.jpg`;

  const handleLoad = () => {
    setIsLoading(false);
    if (onLoad) onLoad();
  };

  // Use LazyImage for non-critical images
  if (lazyLoad) {
    return (
      <LazyImage
        src={optimizedSrc}
        alt={alt || `${serviceName.replace(/-/g, ' ')} image`}
        onLoad={handleLoad}
        threshold={threshold}
        rootMargin={rootMargin}
        placeholderColor={placeholderColor}
        {...props}
      />
    );
  }

  // Use Next.js Image with optimization for critical images
  return (
    <Image
      src={optimizedSrc}
      alt={alt || `${serviceName.replace(/-/g, ' ')} image`}
      onLoad={handleLoad}
      loading={props.priority ? 'eager' : 'lazy'}
      className={`${props.className || ''} ${isLoading ? 'opacity-0' : 'opacity-100'} transition-opacity duration-300`}
      {...props}
    />
  );
}

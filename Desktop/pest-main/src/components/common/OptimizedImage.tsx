"use client";

import Image, { ImageProps } from 'next/image';
import { useState } from 'react';
import styles from './ImageStyles.module.css';

interface OptimizedImageProps extends Omit<ImageProps, 'src'> {
  src: string;
  fallbackSrc?: string;
  onLoad?: () => void;
}

/**
 * OptimizedImage component that provides WebP with JPEG fallback
 * and loading optimization features
 */
export default function OptimizedImage({
  src,
  fallbackSrc,
  alt,
  onLoad,
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

  return (
    <>
      <Image
        src={webpSrc}
        alt={alt}
        onLoad={handleLoad}
        className={`${props.className || ''} ${isLoading ? 'opacity-0' : 'opacity-100'} transition-opacity duration-500`}
        {...props}
      />
      <noscript>
        <img
          src={jpgSrc}
          alt={alt}
          className={`${props.className || ''} ${props.objectFit === 'contain' ? styles.fallbackImageContain : styles.fallbackImage}`}
        />
      </noscript>
    </>
  );
}

"use client";

import Image, { ImageProps } from 'next/image';
import { useState } from 'react';
import styles from './ImageStyles.module.css';

interface ServiceImageProps extends Omit<ImageProps, 'src'> {
  serviceName: 'residential-pest-control' | 'commercial-pest-control' | 'termite-solutions';
  onLoad?: () => void;
}

/**
 * ServiceImage component that provides optimized images for service cards
 * with WebP format and JPEG fallback
 */
export default function ServiceImage({
  serviceName,
  alt,
  onLoad,
  ...props
}: ServiceImageProps) {
  const [isLoading, setIsLoading] = useState(true);

  // Use optimized WebP images with JPG fallback
  const webpSrc = `/${serviceName}.webp`;
  const jpgSrc = `/${serviceName}.jpg`;

  const handleLoad = () => {
    setIsLoading(false);
    if (onLoad) onLoad();
  };

  // Fallback to original image paths if optimized images don't exist
  const fallbackSrc = `/${serviceName}.jpg`;

  return (
    <>
      <Image
        src={webpSrc}
        alt={alt || `${serviceName.replace(/-/g, ' ')} image`}
        onLoad={handleLoad}
        onError={(e) => {
          // If WebP fails, try JPG, then fallback
          const imgElement = e.currentTarget as HTMLImageElement;
          if (imgElement.src !== jpgSrc && imgElement.src !== fallbackSrc) {
            imgElement.src = jpgSrc;
          } else if (imgElement.src !== fallbackSrc) {
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

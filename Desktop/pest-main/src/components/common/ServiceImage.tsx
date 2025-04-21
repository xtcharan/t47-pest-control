"use client";

import Image, { ImageProps } from 'next/image';
import { useState } from 'react';

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
  const webpSrc = `/images/services/optimized/${serviceName}.webp`;
  const jpgSrc = `/images/services/optimized/${serviceName}.jpg`;

  const handleLoad = () => {
    setIsLoading(false);
    if (onLoad) onLoad();
  };

  // Fallback to original image paths if optimized images don't exist
  const fallbackSrc = `/images/services/${serviceName}.jpg`;

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
          className={props.className || ''}
          style={{
            objectFit: props.objectFit as any || 'cover',
            width: '100%',
            height: '100%'
          }}
        />
      </noscript>
    </>
  );
}

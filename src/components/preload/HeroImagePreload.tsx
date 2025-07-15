"use client";

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

interface HeroImagePreloadProps {
  imagePath: string;
  priority?: boolean;
}

export default function HeroImagePreload({ imagePath, priority = true }: HeroImagePreloadProps) {
  const pathname = usePathname();

  useEffect(() => {
    // Only preload if this is a priority image and we're on the right page
    if (!priority) return;

    // Create preload link
    const link = document.createElement('link');
    link.rel = 'preload';
    link.as = 'image';
    link.href = imagePath;
    link.type = 'image/webp';
    
    // Add responsive sizes for better optimization
    link.setAttribute('imagesrcset', `
      /_next/image?url=${encodeURIComponent(imagePath)}&w=640&q=75 640w,
      /_next/image?url=${encodeURIComponent(imagePath)}&w=750&q=75 750w,
      /_next/image?url=${encodeURIComponent(imagePath)}&w=828&q=75 828w,
      /_next/image?url=${encodeURIComponent(imagePath)}&w=1080&q=75 1080w
    `.replace(/\s+/g, ' ').trim());
    
    link.setAttribute('imagesizes', '(max-width: 640px) 100vw, (max-width: 750px) 100vw, (max-width: 828px) 100vw, 1080px');
    
    if (priority) {
      link.setAttribute('fetchpriority', 'high');
    }

    document.head.appendChild(link);

    // Cleanup function
    return () => {
      if (link && link.parentNode) {
        link.parentNode.removeChild(link);
      }
    };
  }, [imagePath, priority, pathname]);

  return null; // This component doesn't render anything
}

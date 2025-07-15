"use client";

import { useEffect } from 'react';

export default function AnimationPerformanceMonitor() {
  useEffect(() => {
    // Only run in development for debugging
    if (process.env.NODE_ENV !== 'development') return;

    let frameCount = 0;
    let lastTime = performance.now();
    let longFrameCount = 0;
    const targetFrameTime = 16.67; // 60 FPS = 16.67ms per frame

    const originalRAF = window.requestAnimationFrame;
    
    // Wrap requestAnimationFrame to monitor performance
    window.requestAnimationFrame = function(callback) {
      return originalRAF.call(window, function(timestamp) {
        const frameTime = timestamp - lastTime;
        frameCount++;

        // Track long frames (over 16.67ms for 60fps)
        if (frameTime > targetFrameTime) {
          longFrameCount++;
          
          // Log warning for very long frames
          if (frameTime > 50) {
            console.warn(`[Animation Performance] Long frame detected: ${frameTime.toFixed(2)}ms`);
          }
        }

        // Log performance stats every 5 seconds
        if (frameCount % 300 === 0) { // ~5 seconds at 60fps
          const longFramePercentage = (longFrameCount / frameCount) * 100;
          console.log(`[Animation Performance] Stats:`, {
            totalFrames: frameCount,
            longFrames: longFrameCount,
            longFramePercentage: `${longFramePercentage.toFixed(1)}%`,
            averageFrameTime: `${(frameTime).toFixed(2)}ms`
          });
        }

        lastTime = timestamp;
        return callback(timestamp);
      });
    };

    // Monitor for requestAnimationFrame violations
    const observer = new PerformanceObserver((list) => {
      list.getEntries().forEach((entry) => {
        if (entry.entryType === 'measure' && entry.duration > 16) {
          console.warn(`[Performance] Long task detected: ${entry.name} took ${entry.duration.toFixed(2)}ms`);
        }
      });
    });

    // Start observing long tasks
    try {
      observer.observe({ entryTypes: ['longtask'] });
    } catch (e) {
      // longtask not supported in all browsers
      console.log('[Performance] Long task monitoring not supported');
    }

    // Cleanup
    return () => {
      window.requestAnimationFrame = originalRAF;
      observer.disconnect();
    };
  }, []);

  return null; // This component doesn't render anything
}

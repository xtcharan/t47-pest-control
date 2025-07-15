'use client';

import { useEffect } from 'react';

interface PerformanceMetrics {
  fcp?: number;
  lcp?: number;
  fid?: number;
  cls?: number;
  ttfb?: number;
}

export default function PerformanceMonitor() {
  useEffect(() => {
    // Only run in production and if performance API is available
    if (process.env.NODE_ENV !== 'production' || typeof window === 'undefined') {
      return;
    }

    const metrics: PerformanceMetrics = {};

    // Measure First Contentful Paint (FCP)
    const measureFCP = () => {
      const fcpEntry = performance.getEntriesByName('first-contentful-paint')[0] as PerformanceEntry;
      if (fcpEntry) {
        metrics.fcp = fcpEntry.startTime;
      }
    };

    // Measure Largest Contentful Paint (LCP)
    const measureLCP = () => {
      if ('PerformanceObserver' in window) {
        const observer = new PerformanceObserver((list) => {
          const entries = list.getEntries();
          const lastEntry = entries[entries.length - 1] as any;
          if (lastEntry) {
            metrics.lcp = lastEntry.startTime;
          }
        });
        observer.observe({ entryTypes: ['largest-contentful-paint'] });
      }
    };

    // Measure First Input Delay (FID)
    const measureFID = () => {
      if ('PerformanceObserver' in window) {
        const observer = new PerformanceObserver((list) => {
          const entries = list.getEntries();
          entries.forEach((entry: any) => {
            if (entry.processingStart && entry.startTime) {
              metrics.fid = entry.processingStart - entry.startTime;
            }
          });
        });
        observer.observe({ entryTypes: ['first-input'] });
      }
    };

    // Measure Cumulative Layout Shift (CLS)
    const measureCLS = () => {
      if ('PerformanceObserver' in window) {
        let clsValue = 0;
        const observer = new PerformanceObserver((list) => {
          const entries = list.getEntries();
          entries.forEach((entry: any) => {
            if (!entry.hadRecentInput) {
              clsValue += entry.value;
            }
          });
          metrics.cls = clsValue;
        });
        observer.observe({ entryTypes: ['layout-shift'] });
      }
    };

    // Measure Time to First Byte (TTFB)
    const measureTTFB = () => {
      const navigationEntry = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
      if (navigationEntry) {
        metrics.ttfb = navigationEntry.responseStart - navigationEntry.requestStart;
      }
    };

    // Initialize measurements
    measureFCP();
    measureLCP();
    measureFID();
    measureCLS();
    measureTTFB();

    // Report metrics after page load
    const reportMetrics = () => {
      // Only report if we have meaningful data
      if (Object.keys(metrics).length > 0) {
        console.log('Performance Metrics:', metrics);
        
        // Send to analytics if available
        if (typeof window !== 'undefined' && (window as any).gtag) {
          Object.entries(metrics).forEach(([metric, value]) => {
            if (value !== undefined) {
              (window as any).gtag('event', 'web_vitals', {
                metric_name: metric.toUpperCase(),
                metric_value: Math.round(value),
                custom_parameter: 'performance_monitoring'
              });
            }
          });
        }
      }
    };

    // Report metrics after a delay to ensure all measurements are captured
    const timeoutId = setTimeout(reportMetrics, 5000);

    return () => {
      clearTimeout(timeoutId);
    };
  }, []);

  return null; // This component doesn't render anything
}

// Hook for manual performance tracking
export const usePerformanceTracking = () => {
  const trackCustomMetric = (name: string, value: number) => {
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', 'custom_metric', {
        metric_name: name,
        metric_value: Math.round(value),
        custom_parameter: 'custom_tracking'
      });
    }
  };

  const trackPageLoad = (pageName: string) => {
    const startTime = performance.now();
    
    return () => {
      const loadTime = performance.now() - startTime;
      trackCustomMetric(`page_load_${pageName}`, loadTime);
    };
  };

  return {
    trackCustomMetric,
    trackPageLoad
  };
};

'use client';

import Script from 'next/script';
import { useEffect } from 'react';

interface GoogleAnalyticsProps {
  measurementId: string;
}

// Google Analytics 4 component with privacy compliance
export default function GoogleAnalytics({ measurementId }: GoogleAnalyticsProps) {
  useEffect(() => {
    // Initialize Google Analytics with privacy-friendly settings
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('config', measurementId, {
        // Privacy-friendly settings
        anonymize_ip: true,
        allow_google_signals: false,
        allow_ad_personalization_signals: false,
        // Performance settings
        page_title: document.title,
        page_location: window.location.href,
        // Cookie settings
        cookie_flags: 'SameSite=None;Secure',
        // Data retention
        storage: 'none', // Disable automatic storage
      });
    }
  }, [measurementId]);

  return (
    <>
      {/* Google Analytics 4 Global Site Tag */}
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${measurementId}`}
        strategy="afterInteractive"
      />
      <Script
        id="google-analytics"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            
            // Configure Google Analytics with privacy settings
            gtag('config', '${measurementId}', {
              // Privacy compliance
              anonymize_ip: true,
              allow_google_signals: false,
              allow_ad_personalization_signals: false,
              // Cookie consent (will be managed by cookie banner)
              cookie_flags: 'SameSite=None;Secure',
              // Custom dimensions for pest control business
              custom_map: {
                'custom_dimension_1': 'service_type',
                'custom_dimension_2': 'location',
                'custom_dimension_3': 'pest_type'
              }
            });
            
            // Track page views
            gtag('event', 'page_view', {
              page_title: document.title,
              page_location: window.location.href
            });
          `,
        }}
      />
    </>
  );
}

// Analytics utility functions
export const trackEvent = (eventName: string, parameters?: Record<string, any>) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', eventName, parameters);
  }
};

// Pest control specific tracking functions
export const trackServiceInquiry = (serviceType: string, pestType?: string) => {
  trackEvent('service_inquiry', {
    service_type: serviceType,
    pest_type: pestType,
    value: 1
  });
};

export const trackQuoteRequest = (serviceType: string, location?: string) => {
  trackEvent('quote_request', {
    service_type: serviceType,
    location: location,
    value: 1
  });
};

export const trackPhoneCall = () => {
  trackEvent('phone_call', {
    event_category: 'engagement',
    event_label: 'phone_click',
    value: 1
  });
};

export const trackFormSubmission = (formType: string) => {
  trackEvent('form_submit', {
    form_type: formType,
    event_category: 'engagement',
    value: 1
  });
};

// Enhanced ecommerce tracking for service bookings
export const trackServiceBooking = (serviceDetails: {
  serviceId: string;
  serviceName: string;
  category: string;
  value: number;
  currency?: string;
}) => {
  trackEvent('purchase', {
    transaction_id: `booking_${Date.now()}`,
    value: serviceDetails.value,
    currency: serviceDetails.currency || 'AUD',
    items: [{
      item_id: serviceDetails.serviceId,
      item_name: serviceDetails.serviceName,
      category: serviceDetails.category,
      quantity: 1,
      price: serviceDetails.value
    }]
  });
};

// Declare gtag function for TypeScript
declare global {
  interface Window {
    gtag?: (
      command: 'config' | 'event' | 'js' | 'consent',
      targetId: string | Date | 'update',
      config?: Record<string, any>
    ) => void;
  }
}

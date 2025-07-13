// Google Analytics configuration for T47 Pest Control

// Environment-based configuration
export const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID || 'G-XXXXXXXXXX';

// Analytics configuration
export const analyticsConfig = {
  // Google Analytics 4 Measurement ID
  measurementId: GA_MEASUREMENT_ID,
  
  // Privacy settings
  privacy: {
    anonymizeIp: true,
    allowGoogleSignals: false,
    allowAdPersonalization: false,
    cookieFlags: 'SameSite=None;Secure',
  },
  
  // Custom dimensions for pest control business
  customDimensions: {
    serviceType: 'custom_dimension_1',
    location: 'custom_dimension_2',
    pestType: 'custom_dimension_3',
    customerType: 'custom_dimension_4', // residential/commercial
    urgency: 'custom_dimension_5', // emergency/scheduled
  },
  
  // Event tracking configuration
  events: {
    // Core business events
    serviceInquiry: 'service_inquiry',
    quoteRequest: 'quote_request',
    phoneCall: 'phone_call',
    formSubmit: 'form_submit',
    serviceBooking: 'purchase',
    
    // Engagement events
    pageView: 'page_view',
    scrollDepth: 'scroll',
    fileDownload: 'file_download',
    outboundClick: 'click',
    
    // Pest control specific events
    pestIdentification: 'pest_identification',
    emergencyRequest: 'emergency_request',
    inspectionBooking: 'inspection_booking',
    treatmentBooking: 'treatment_booking',
  },
  
  // Enhanced ecommerce settings
  ecommerce: {
    currency: 'AUD',
    // Service categories for tracking
    categories: {
      residential: 'Residential Pest Control',
      commercial: 'Commercial Pest Control',
      termite: 'Termite Solutions',
      inspection: 'Pest Inspections',
      emergency: 'Emergency Services',
    }
  }
};

// Utility function to check if analytics should be loaded
export const shouldLoadAnalytics = (): boolean => {
  // Don't load in development unless explicitly enabled
  if (process.env.NODE_ENV === 'development') {
    return process.env.NEXT_PUBLIC_ENABLE_ANALYTICS === 'true';
  }
  
  // Load in production if measurement ID is configured
  return GA_MEASUREMENT_ID !== 'G-XXXXXXXXXX' && GA_MEASUREMENT_ID.startsWith('G-');
};

// Cookie consent management
export const hasAnalyticsConsent = (): boolean => {
  if (typeof window === 'undefined') return false;
  
  // Check for cookie consent (implement based on your cookie banner)
  const consent = localStorage.getItem('cookie-consent');
  return consent === 'accepted' || consent === 'analytics-accepted';
};

// Initialize analytics with consent
export const initializeAnalytics = () => {
  if (!shouldLoadAnalytics() || !hasAnalyticsConsent()) {
    return;
  }
  
  // Analytics will be initialized by the GoogleAnalytics component
  console.log('Google Analytics initialized for T47 Pest Control');
};

// GDPR compliance helper
export const updateAnalyticsConsent = (hasConsent: boolean) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('consent', 'update', {
      analytics_storage: hasConsent ? 'granted' : 'denied',
      ad_storage: 'denied', // Always deny ad storage for privacy
    });
  }
};

// Setup instructions for Google Analytics
export const setupInstructions = {
  steps: [
    '1. Go to https://analytics.google.com/',
    '2. Create a new Google Analytics 4 property',
    '3. Set up a data stream for your website',
    '4. Copy the Measurement ID (starts with G-)',
    '5. Add NEXT_PUBLIC_GA_MEASUREMENT_ID=your-measurement-id to .env.local',
    '6. Deploy the application',
    '7. Verify tracking is working in Google Analytics Real-time reports'
  ],
  
  environmentVariable: 'NEXT_PUBLIC_GA_MEASUREMENT_ID',
  
  testingInDevelopment: [
    'Set NEXT_PUBLIC_ENABLE_ANALYTICS=true in .env.local for development testing',
    'Use Google Analytics DebugView to verify events',
    'Check browser console for tracking confirmations'
  ],
  
  privacyCompliance: [
    'IP anonymization is enabled by default',
    'Google Signals are disabled',
    'Ad personalization is disabled',
    'Cookie consent should be implemented',
    'Data retention is set to minimal'
  ]
};

export default analyticsConfig;

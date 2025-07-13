'use client';

import { COMPANY_INFO } from '../lib/constants';

interface SchemaMarkupProps {
  type?: 'organization' | 'localBusiness' | 'service' | 'article' | 'faq';
  data?: any;
}

// Main Schema Markup component
export default function SchemaMarkup({ type = 'organization', data }: SchemaMarkupProps) {
  const getSchemaData = () => {
    switch (type) {
      case 'organization':
        return getOrganizationSchema();
      case 'localBusiness':
        return getLocalBusinessSchema();
      case 'service':
        return getServiceSchema(data);
      case 'article':
        return getArticleSchema(data);
      case 'faq':
        return getFAQSchema(data);
      default:
        return getOrganizationSchema();
    }
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(getSchemaData(), null, 2)
      }}
    />
  );
}

// Organization Schema for main business information
function getOrganizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": COMPANY_INFO.name,
    "alternateName": "T47 Pest Control",
    "url": "https://www.t47pestcontrol.com",
    "logo": "https://www.t47pestcontrol.com/logo.png",
    "image": "https://www.t47pestcontrol.com/pest-control-hero.webp",
    "description": "Professional pest control services across Australia. Specializing in residential and commercial pest management, termite control, and emergency pest removal. Available 24/7 with same-day service.",
    "telephone": COMPANY_INFO.phone,
    "email": COMPANY_INFO.email,
    "foundingDate": "2020",
    "slogan": COMPANY_INFO.tagline,
    "knowsAbout": [
      "Pest Control",
      "Termite Control",
      "Ant Control",
      "Spider Control",
      "Cockroach Control",
      "Bed Bug Treatment",
      "Rodent Control",
      "Commercial Pest Control",
      "Residential Pest Control",
      "Emergency Pest Control"
    ],
    "serviceArea": {
      "@type": "Country",
      "name": "Australia"
    },
    "areaServed": [
      {
        "@type": "City",
        "name": "Sydney",
        "addressRegion": "NSW",
        "addressCountry": "AU"
      },
      {
        "@type": "City",
        "name": "Melbourne",
        "addressRegion": "VIC",
        "addressCountry": "AU"
      },
      {
        "@type": "City",
        "name": "Brisbane",
        "addressRegion": "QLD",
        "addressCountry": "AU"
      }
    ],
    "sameAs": [
      COMPANY_INFO.social.facebook,
      COMPANY_INFO.social.instagram,
      COMPANY_INFO.social.linkedin,
      COMPANY_INFO.social.twitter,
      COMPANY_INFO.social.youtube
    ],
    "contactPoint": [
      {
        "@type": "ContactPoint",
        "telephone": COMPANY_INFO.phone,
        "contactType": "customer service",
        "availableLanguage": "English",
        "areaServed": "AU",
        "hoursAvailable": {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": [
            "Monday",
            "Tuesday", 
            "Wednesday",
            "Thursday",
            "Friday",
            "Saturday",
            "Sunday"
          ],
          "opens": "00:00",
          "closes": "23:59"
        }
      },
      {
        "@type": "ContactPoint",
        "email": COMPANY_INFO.email,
        "contactType": "customer service",
        "availableLanguage": "English",
        "areaServed": "AU"
      }
    ],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Pest Control Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Residential Pest Control",
            "description": "Comprehensive pest control services for homes and residential properties"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Commercial Pest Control",
            "description": "Professional pest management for businesses and commercial properties"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Termite Control",
            "description": "Termite inspection, treatment, and prevention services"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Emergency Pest Control",
            "description": "24/7 emergency pest control services"
          }
        }
      ]
    }
  };
}

// Local Business Schema for location-specific pages
function getLocalBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": "https://www.t47pestcontrol.com/#localbusiness",
    "name": COMPANY_INFO.name,
    "image": "https://www.t47pestcontrol.com/pest-control-hero.webp",
    "telephone": COMPANY_INFO.phone,
    "email": COMPANY_INFO.email,
    "url": "https://www.t47pestcontrol.com",
    "description": "Professional pest control services across Australia. Licensed and insured pest management specialists providing residential and commercial services.",
    "priceRange": "$$",
    "currenciesAccepted": "AUD",
    "paymentAccepted": "Cash, Credit Card, Bank Transfer",
    "openingHours": "Mo-Su 00:00-23:59",
    "serviceArea": {
      "@type": "Country",
      "name": "Australia"
    },
    "hasMap": "https://maps.google.com/",
    "isAccessibleForFree": false,
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.8",
      "reviewCount": "150",
      "bestRating": "5",
      "worstRating": "1"
    },
    "review": [
      {
        "@type": "Review",
        "author": {
          "@type": "Person",
          "name": "Sarah Johnson"
        },
        "reviewRating": {
          "@type": "Rating",
          "ratingValue": "5",
          "bestRating": "5"
        },
        "reviewBody": "Excellent service! T47 Pest Control solved our ant problem quickly and professionally. Highly recommended for anyone needing reliable pest control."
      }
    ]
  };
}

// Service Schema for individual service pages
function getServiceSchema(serviceData: any) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": serviceData?.name || "Pest Control Service",
    "description": serviceData?.description || "Professional pest control service",
    "provider": {
      "@type": "Organization",
      "name": COMPANY_INFO.name,
      "telephone": COMPANY_INFO.phone,
      "url": "https://www.t47pestcontrol.com"
    },
    "areaServed": {
      "@type": "Country",
      "name": "Australia"
    },
    "availableChannel": {
      "@type": "ServiceChannel",
      "serviceUrl": "https://www.t47pestcontrol.com/contact",
      "servicePhone": COMPANY_INFO.phone,
      "availableLanguage": "English"
    },
    "category": "Pest Control",
    "serviceType": serviceData?.type || "Pest Control",
    "hoursAvailable": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"
      ],
      "opens": "00:00",
      "closes": "23:59"
    }
  };
}

// Article Schema for blog posts
function getArticleSchema(articleData: any) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": articleData?.title,
    "description": articleData?.description,
    "image": articleData?.image,
    "author": {
      "@type": "Organization",
      "name": COMPANY_INFO.name,
      "url": "https://www.t47pestcontrol.com"
    },
    "publisher": {
      "@type": "Organization",
      "name": COMPANY_INFO.name,
      "logo": {
        "@type": "ImageObject",
        "url": "https://www.t47pestcontrol.com/logo.png"
      }
    },
    "datePublished": articleData?.publishDate,
    "dateModified": articleData?.modifiedDate || articleData?.publishDate,
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": articleData?.url
    },
    "articleSection": "Pest Control",
    "keywords": articleData?.keywords?.join(", "),
    "about": {
      "@type": "Thing",
      "name": "Pest Control"
    }
  };
}

// FAQ Schema for FAQ pages
function getFAQSchema(faqData: any) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqData?.questions?.map((faq: any) => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    })) || []
  };
}

// Breadcrumb Schema component
export function BreadcrumbSchema({ items }: { items: Array<{ name: string; url: string }> }) {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": items.map((item, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": item.name,
      "item": item.url
    }))
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(breadcrumbSchema, null, 2)
      }}
    />
  );
}

// Website Schema for homepage
export function WebsiteSchema() {
  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": COMPANY_INFO.name,
    "url": "https://www.t47pestcontrol.com",
    "description": "Professional pest control services across Australia. 24/7 emergency service available.",
    "publisher": {
      "@type": "Organization",
      "name": COMPANY_INFO.name
    },
    "potentialAction": {
      "@type": "SearchAction",
      "target": "https://www.t47pestcontrol.com/search?q={search_term_string}",
      "query-input": "required name=search_term_string"
    }
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(websiteSchema, null, 2)
      }}
    />
  );
}

// Professional Service Schema for service pages
export function ProfessionalServiceSchema({ service }: { service: any }) {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "name": `${service.name} - ${COMPANY_INFO.name}`,
    "description": service.description,
    "url": service.url,
    "telephone": COMPANY_INFO.phone,
    "email": COMPANY_INFO.email,
    "image": service.image,
    "priceRange": "$$",
    "currenciesAccepted": "AUD",
    "paymentAccepted": ["Cash", "Credit Card", "Bank Transfer"],
    "areaServed": {
      "@type": "Country",
      "name": "Australia"
    },
    "serviceArea": {
      "@type": "Country",
      "name": "Australia"
    },
    "provider": {
      "@type": "Organization",
      "name": COMPANY_INFO.name,
      "telephone": COMPANY_INFO.phone,
      "url": "https://www.t47pestcontrol.com"
    },
    "category": "Pest Control Service",
    "serviceType": service.type,
    "availableChannel": {
      "@type": "ServiceChannel",
      "serviceUrl": "https://www.t47pestcontrol.com/contact",
      "servicePhone": COMPANY_INFO.phone
    },
    "hoursAvailable": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
      "opens": "00:00",
      "closes": "23:59"
    },
    "offers": {
      "@type": "Offer",
      "description": `Professional ${service.name} services`,
      "priceCurrency": "AUD",
      "availability": "https://schema.org/InStock",
      "validFrom": new Date().toISOString().split('T')[0]
    }
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(serviceSchema, null, 2)
      }}
    />
  );
}

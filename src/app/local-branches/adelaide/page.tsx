import dynamic from 'next/dynamic';
import Link from 'next/link';
import { COMPANY_INFO } from '@/components/lib/constants';
import ClientReviews from '@/components/reviews/ClientReviews';
import ServiceForm from '@/components/forms/ServiceForm';
import AdelaideFAQ from '@/components/faq/AdelaideFAQ';
import SchemaMarkup, { BreadcrumbSchema } from '@/components/seo/SchemaMarkup';
import OptimizedImage from '@/components/common/OptimizedImage';
import HeroImagePreload from '@/components/preload/HeroImagePreload';
import AdelaideServiceMap from '@/components/maps/AdelaideServiceMap';
import GoogleReviewPrompt from '@/components/reviews/GoogleReviewPrompt';
import type { Metadata } from "next";

// Dynamic imports for performance
const QuoteForm = dynamic(() => import('@/components/hero/NewQuoteForm'), { ssr: false });
const AlertBanner = dynamic(() => import('@/components/hero/AlertBanner'), { ssr: false });
const AdelaideHeroClient = dynamic(() => import('./AdelaideHeroClient'), { ssr: false });
const AdelaideServiceTiles = dynamic(() => import('./AdelaideServiceTiles'), { ssr: false });
const AdelaidePestSolutions = dynamic(() => import('./AdelaidePestSolutions'), { ssr: false });

export const metadata: Metadata = {
  title: "Pest Control Adelaide | Termite, Rodent & Spider Experts | T47 Pest Control",
  description: "Safe, effective pest control in Adelaide. T47 Pest Control handles termites, rodents, spiders, cockroaches and more. Local technicians, trusted service, fast response. Call 1300 307 576.",
  keywords: "pest control Adelaide, termite inspection Adelaide, rodent control Adelaide, spider control Adelaide, cockroach control Adelaide, pest removal Adelaide, exterminator Adelaide, pest management Adelaide",
  openGraph: {
    title: "Pest Control Adelaide | Termite, Rodent & Spider Experts | T47 Pest Control",
    description: "Safe, effective pest control in Adelaide. T47 Pest Control handles termites, rodents, spiders, cockroaches and more. Local technicians, trusted service, fast response.",
    type: "website",
    locale: "en_AU",
    url: "https://www.t47pestcontrol.com/local-branches/adelaide",
    images: [
      {
        url: "https://www.t47pestcontrol.com/adelaide-pest-control.webp",
        width: 1200,
        height: 630,
        alt: "Professional pest control services in Adelaide"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Pest Control Adelaide | Termite, Rodent & Spider Experts | T47 Pest Control",
    description: "Safe, effective pest control in Adelaide. T47 Pest Control handles termites, rodents, spiders, cockroaches and more. Local technicians, trusted service, fast response.",
    images: ["https://www.t47pestcontrol.com/adelaide-pest-control.webp"]
  },
  alternates: {
    canonical: "https://www.t47pestcontrol.com/local-branches/adelaide"
  }
};



export default function AdelaideBranchPage() {
  const serviceAreas = [
    'Aldinga', 'Athelstone', 'Blakeview', 'Davoren Park', 'Elizabeth',
    'Gawler', 'Glenelg', 'Glenunga', 'Golden Grove', 'Hallett Cove',
    'Henley Beach', 'Mawson Lakes', 'McLaren Vale', 'Medindie', 'Modbury',
    'Morphett Vale', 'Parafield Gardens', 'Paralowie', 'Salisbury', 'West Lake'
  ];

  // Adelaide Top Banner Component
  function AdelaideTopBanner() {
    return (
      <section className="bg-[linear-gradient(135deg,_#8BC34A_50%,_#4CAF50_50%)] pt-6 pb-10 relative overflow-hidden z-20 -mt-2">
        <div className="absolute inset-0 z-10 opacity-15 bg-[url('/subtle-dots.svg')]"></div>
        <div className="absolute inset-0 bg-gradient-to-br from-[#2E7D32]/10 to-transparent z-20"></div>

        <div className="container mx-auto px-4 relative z-30">
          <div className="flex flex-col items-center justify-center mb-8">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4 tracking-wide text-center drop-shadow-md">
              Adelaide's Most Trusted Pest Control Service
            </h2>
            <p className="text-xl md:text-2xl text-white max-w-4xl mx-auto text-center font-light">
              Protecting Adelaide homes and businesses with 50+ years of expertise
            </p>
          </div>

          <div className="flex flex-wrap justify-center items-center gap-4 md:gap-6 lg:gap-8 mb-2">
            {/* Local Adelaide Experts */}
            <div className="flex flex-col items-center text-center px-3 py-2 w-32">
              <div className="w-12 h-12 bg-black rounded-md flex items-center justify-center mb-3">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25s-7.5-4.108-7.5-11.25a7.5 7.5 0 1115 0z" />
                </svg>
              </div>
              <div className="h-10 flex items-center justify-center">
                <span className="text-white font-semibold text-base">Local Adelaide<br />Experts</span>
              </div>
            </div>

            {/* Same Day Service */}
            <div className="flex flex-col items-center text-center px-3 py-2 w-32">
              <div className="w-12 h-12 bg-black rounded-md flex items-center justify-center mb-3">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div className="h-10 flex items-center justify-center">
                <span className="text-white font-semibold text-base">Same Day<br />Service</span>
              </div>
            </div>

            {/* Customer Rating */}
            <div className="flex flex-col items-center text-center px-3 py-2 w-32">
              <div className="w-12 h-12 bg-black rounded-md flex items-center justify-center mb-3">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" />
                </svg>
              </div>
              <div className="h-10 flex items-center justify-center">
                <span className="text-white font-semibold text-base">Trusted Service<br />600+ Reviews</span>
              </div>
            </div>

            {/* 50+ Years Experience */}
            <div className="flex flex-col items-center text-center px-3 py-2 w-32">
              <div className="w-12 h-12 bg-black rounded-md flex items-center justify-center mb-3">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16.5 18.75h-9m9 0a3 3 0 013 3h-15a3 3 0 013-3m9 0v-3.375c0-.621-.503-1.125-1.125-1.125h-.871M7.5 18.75v-3.375c0-.621.504-1.125 1.125-1.125h.872m5.007 0H9.497m5.007 0a7.454 7.454 0 01-.982-3.172M9.497 14.25a7.454 7.454 0 00.981-3.172M5.25 4.236c-.982.143-1.954.317-2.916.52A6.003 6.003 0 007.73 9.728M5.25 4.236V4.5c0 2.108.966 3.99 2.48 5.228M5.25 4.236V2.721C7.456 2.41 9.71 2.25 12 2.25c2.291 0 4.545.16 6.75.47v1.516M7.73 9.728a6.726 6.726 0 002.748 1.35m8.272-6.842V4.5c0 2.108-.966 3.99-2.48 5.228m2.48-5.492a46.32 46.32 0 012.916.52 6.003 6.003 0 01-5.395 4.972m0 0a6.726 6.726 0 01-2.749 1.35m0 0a6.772 6.772 0 01-3.044 0" />
                </svg>
              </div>
              <div className="h-10 flex items-center justify-center">
                <span className="text-white font-semibold text-base">50+ Years<br />Experience</span>
              </div>
            </div>

            {/* Licensed & Insured */}
            <div className="flex flex-col items-center text-center px-3 py-2 w-32">
              <div className="w-12 h-12 bg-black rounded-md flex items-center justify-center mb-3">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
                </svg>
              </div>
              <div className="h-10 flex items-center justify-center">
                <span className="text-white font-semibold text-base">Licensed &<br />Insured</span>
              </div>
            </div>

            {/* Eco-Friendly */}
            <div className="flex flex-col items-center text-center px-3 py-2 w-32">
              <div className="w-12 h-12 bg-black rounded-md flex items-center justify-center mb-3">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20.893 13.393l-1.135-1.135a2.252 2.252 0 01-.421-.585l-1.08-2.16a.414.414 0 00-.663-.107.827.827 0 01-.812.21l-1.273-.363a.89.89 0 00-.738 1.595l.587.39c.59.395.674 1.23.172 1.732l-.2.2c-.212.212-.33.498-.33.796v.41c0 .409-.11.809-.32 1.158l-1.315 2.191a2.11 2.11 0 01-1.81 1.025 1.055 1.055 0 01-1.055-1.055v-1.172c0-.92-.56-1.747-1.414-2.089l-.655-.261a2.25 2.25 0 01-1.383-2.46l.007-.042a2.25 2.25 0 01.29-.787l.09-.15a2.25 2.25 0 012.37-1.048l1.178.236a1.125 1.125 0 001.302-.795l.208-.73a1.125 1.125 0 00-.578-1.315l-.665-.332-.091.091a2.25 2.25 0 01-1.591.659h-.18c-.249 0-.487.1-.662.274a.931.931 0 01-1.458-1.137l1.411-2.353a2.25 2.25 0 00.286-.76m11.928 9.869A9 9 0 008.965 3.525m11.928 9.868A9 9 0 118.965 3.525" />
                </svg>
              </div>
              <div className="h-10 flex items-center justify-center">
                <span className="text-white font-semibold text-base">Eco-Friendly<br />Treatments</span>
              </div>
            </div>

            {/* Adelaide Coverage */}
            <div className="flex flex-col items-center text-center px-3 py-2 w-32">
              <div className="w-12 h-12 bg-black rounded-md flex items-center justify-center mb-3">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008z" />
                </svg>
              </div>
              <div className="h-10 flex items-center justify-center">
                <span className="text-white font-semibold text-base">All Adelaide<br />Suburbs</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  const services = [
    {
      name: 'Termite Inspection & Treatment',
      description: 'Advanced termite detection and elimination for Adelaide properties. 1 in 4 Adelaide homes are affected by termites.',
      icon: '🐛',
      link: '/residential/termites'
    },
    {
      name: 'Rodent Control & Removal',
      description: 'Comprehensive rat and mice control solutions for Adelaide homes and businesses.',
      icon: '🐭',
      link: '/residential/rodents'
    },
    {
      name: 'Spider Control',
      description: 'Professional spider identification and targeted treatments for Adelaide\'s unique spider species.',
      icon: '🕷️',
      link: '/residential/spiders'
    },
    {
      name: 'Cockroach Control',
      description: 'Effective cockroach elimination and prevention for Adelaide properties.',
      icon: '🪳',
      link: '/residential/cockroaches'
    },
    {
      name: 'Ant Control',
      description: 'Targeted ant control solutions for Adelaide\'s common ant species.',
      icon: '🐜',
      link: '/residential/ants'
    },
    {
      name: 'Digital Pest Monitoring',
      description: 'PestConnect intelligent monitoring with real-time detection and alerts.',
      icon: '📱',
      link: '/contact'
    }
  ];



  const adelaidePests = [
    'Subterranean Termites',
    'German Cockroaches',
    'Redback Spiders',
    'Black House Ants',
    'European Wasps',
    'Norway Rats',
    'House Mice',
    'Silverfish',
    'Bed Bugs',
    'Fleas'
  ];



  const whyChooseT47 = [
    '50+ years of experience',
    'Local Adelaide technicians',
    'Same-day service available',
    'Eco-friendly treatments',
    'Licensed and insured',
    'Trusted by 600+ customers',
    'Free follow-up visits',
    'Emergency response team',
    'Digital monitoring solutions',
    'Transparent pricing'
  ];

  // Schema markup data
  const localBusinessData = {
    name: "T47 Pest Control Adelaide",
    address: {
      streetAddress: "19 Aruma Street",
      addressLocality: "Regency Park",
      addressRegion: "SA",
      postalCode: "5010",
      addressCountry: "AU"
    },
    telephone: "+61 434300216",
    openingHours: [
      "Mo-Fr 07:00-17:30",
      "Sa 07:00-12:30"
    ],
    areaServed: serviceAreas,
    aggregateRating: {
      ratingValue: 4.5,
      reviewCount: 600
    }
  };

  const breadcrumbItems = [
    { name: "Home", url: "https://www.t47pestcontrol.com" },
    { name: "About", url: "https://www.t47pestcontrol.com/about" },
    { name: "Local Branches", url: "https://www.t47pestcontrol.com/local-branches" },
    { name: "Pest Control Adelaide", url: "https://www.t47pestcontrol.com/local-branches/adelaide" }
  ];

  const adelaideFAQs = [
    {
      question: "What pests does T47 Pest Control handle in Adelaide?",
      answer: "T47 treats termites, rodents, spiders, cockroaches, ants, bed bugs, silverfish, fleas, and other common Adelaide pests. Our local technicians understand Adelaide's unique pest challenges and climate conditions."
    },
    {
      question: "Do you provide same-day or next-day service in Adelaide?",
      answer: "Yes. For most metro Adelaide locations we offer same-day or next-day appointments, subject to technician availability. Emergency services are available 7 days a week."
    },
    {
      question: "Are your treatments safe for children and pets?",
      answer: "Treatments are selected and applied to be safe when used as directed. Our technicians advise any short ventilation or re-entry periods. We use eco-friendly solutions wherever possible."
    },
    {
      question: "How much does pest control cost in Adelaide?",
      answer: "Pricing depends on pest type, infestation severity, property size, and treatment method. We provide transparent quotes after assessment with no hidden fees."
    },
    {
      question: "Do you offer ongoing prevention plans?",
      answer: "Yes. We provide scheduled inspections, monitoring, and preventative treatments tailored to Adelaide homes and businesses, including our digital PestConnect monitoring system."
    },
    {
      question: "What suburbs around Adelaide do you service?",
      answer: "We cover Aldinga, Athelstone, Blakeview, Davoren Park, Elizabeth, Gawler, Glenelg, Glenunga, Golden Grove, Hallett Cove, Henley Beach, Mawson Lakes, McLaren Vale, Medindie, Modbury, Morphett Vale, Parafield Gardens, Paralowie, Salisbury, West Lake, and more across greater Adelaide."
    },
    {
      question: "Can you detect termite activity before damage occurs?",
      answer: "Our termite inspections and monitoring can identify early signs and high-risk conditions to reduce the chance of structural damage. We use advanced detection methods including thermal imaging."
    },
    {
      question: "What is myT47 and digital monitoring?",
      answer: "myT47 is our client portal; paired with sensor-based monitoring, it provides real-time alerts, service history, and recommendations for ongoing pest management."
    },
    {
      question: "Do you offer business/commercial compliance support?",
      answer: "Yes. We create programs aligned with workplace health and safety and audit requirements, including documentation and site logs for Adelaide businesses."
    },
    {
      question: "How do I book a service in Adelaide?",
      answer: "Call +61 434 300 216 or submit the contact form with name, phone, email, postcode, customer type, and enquiry details. Our Adelaide team will respond within 24 hours."
    }
  ];

  return (
    <>
      <HeroImagePreload imagePath="/adelaide.webp" priority={true} />
      {/* Schema Markup */}
      <SchemaMarkup type="localBusiness" data={localBusinessData} />
      <SchemaMarkup type="faq" data={adelaideFAQs} />
      <BreadcrumbSchema items={breadcrumbItems} />

      <main className="min-h-screen">
        {/* Breadcrumb Navigation */}
        <nav className="bg-gray-50 py-4 border-b border-gray-200">
          <div className="container mx-auto px-4">
            <div className="flex items-center space-x-2 text-sm">
              <Link href="/" className="text-green-dark hover:text-green-light hover:underline transition-colors">
                Home
              </Link>
              <span className="text-gray-400">/</span>
              <Link href="/about" className="text-green-dark hover:text-green-light hover:underline transition-colors">
                About
              </Link>
              <span className="text-gray-400">/</span>
              <Link href="/local-branches" className="text-green-dark hover:text-green-light hover:underline transition-colors">
                Local branches
              </Link>
              <span className="text-gray-400">/</span>
              <span className="text-gray-700 font-medium">Pest control Adelaide</span>
            </div>
          </div>
        </nav>

        <AdelaideHeroClient />
        <AdelaideTopBanner />

        {/* Intro Section with Rating */}
        <section className="py-12 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <p className="text-lg md:text-xl text-gray-700 mb-6 leading-relaxed">
                T47 Pest Control provides complete pest control services in Adelaide, specialising in preventing and removing rats, bed bugs, silverfish, fleas, cockroaches, termites, spiders, ants, and other common pests.
              </p>
              <div className="flex items-center justify-center mb-8">
                <div className="flex text-yellow-400 mr-3">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-6 h-6 fill-current" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <span className="text-xl font-semibold text-gray-800">4.8 out of 636 reviews</span>
              </div>
            </div>
          </div>
        </section>

        <AdelaideServiceTiles />

        {/* Need Pest Control in Adelaide - Blue and White Section */}
        <section className="py-16 bg-white relative overflow-hidden">
          {/* Background decorative elements */}
          <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-white"></div>
          <div className="absolute -top-20 -left-20 w-64 h-64 bg-blue-200/20 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-blue-300/20 rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>

          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-6xl mx-auto">
              {/* Header */}
              <div className="text-center mb-12">
                <h2 className="text-4xl md:text-5xl font-bold mb-6">
                  <span className="bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
                    Need Pest Control in Adelaide?
                  </span>
                </h2>
                <p className="text-xl text-blue-700 max-w-3xl mx-auto leading-relaxed">
                  Adelaide's trusted pest control experts are here to protect your home and business with safe, effective solutions
                </p>
              </div>

              {/* Service grid - Blue and White theme */}
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
                {/* Termite Control */}
                <div className="bg-gradient-to-br from-blue-600 to-blue-800 p-8 rounded-2xl shadow-xl text-white transform hover:scale-105 transition-all duration-300">
                  <h3 className="text-2xl font-bold mb-4">Termite Control</h3>
                  <p className="text-blue-50 mb-6 leading-relaxed">
                    Protect your Adelaide property from Australia's most destructive pest. Advanced detection and treatment systems.
                  </p>
                  <div className="bg-white/20 p-4 rounded-lg">
                    <p className="text-sm font-medium">✓ 1 in 4 Adelaide homes affected</p>
                    <p className="text-sm font-medium">✓ $30,000+ average damage cost</p>
                    <p className="text-sm font-medium">✓ Early detection saves thousands</p>
                  </div>
                </div>

                {/* Rodent Control */}
                <div className="bg-white border-2 border-blue-200 p-8 rounded-2xl shadow-xl text-blue-800 transform hover:scale-105 transition-all duration-300">
                  <h3 className="text-2xl font-bold mb-4">Rodent Control</h3>
                  <p className="text-blue-700 mb-6 leading-relaxed">
                    Fast, effective rodent removal and prevention for Adelaide homes. Safe for families and pets.
                  </p>
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <p className="text-sm font-medium">✓ Same-day service available</p>
                    <p className="text-sm font-medium">✓ Humane removal methods</p>
                    <p className="text-sm font-medium">✓ Entry point sealing included</p>
                  </div>
                </div>

                {/* Spider Control */}
                <div className="bg-gradient-to-br from-blue-600 to-blue-800 p-8 rounded-2xl shadow-xl text-white transform hover:scale-105 transition-all duration-300">
                  <h3 className="text-2xl font-bold mb-4">Spider Control</h3>
                  <p className="text-blue-50 mb-6 leading-relaxed">
                    Professional spider identification and targeted treatments for Adelaide's unique spider species.
                  </p>
                  <div className="bg-white/20 p-4 rounded-lg">
                    <p className="text-sm font-medium">✓ Redback spider specialists</p>
                    <p className="text-sm font-medium">✓ Safe for children & pets</p>
                    <p className="text-sm font-medium">✓ Long-lasting protection</p>
                  </div>
                </div>

                {/* Cockroach Control */}
                <div className="bg-white border-2 border-blue-200 p-8 rounded-2xl shadow-xl text-blue-800 transform hover:scale-105 transition-all duration-300">
                  <h3 className="text-2xl font-bold mb-4">Cockroach Control</h3>
                  <p className="text-blue-700 mb-6 leading-relaxed">
                    Eliminate cockroach infestations with targeted treatments designed for Adelaide conditions.
                  </p>
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <p className="text-sm font-medium">✓ German cockroach experts</p>
                    <p className="text-sm font-medium">✓ Kitchen & bathroom focus</p>
                    <p className="text-sm font-medium">✓ Ongoing prevention plans</p>
                  </div>
                </div>

                {/* Ant Control */}
                <div className="bg-gradient-to-br from-blue-600 to-blue-800 p-8 rounded-2xl shadow-xl text-white transform hover:scale-105 transition-all duration-300">
                  <h3 className="text-2xl font-bold mb-4">Ant Control</h3>
                  <p className="text-blue-50 mb-6 leading-relaxed">
                    Targeted ant control solutions for Adelaide's common ant species and seasonal patterns.
                  </p>
                  <div className="bg-white/20 p-4 rounded-lg">
                    <p className="text-sm font-medium">✓ Black house ant specialists</p>
                    <p className="text-sm font-medium">✓ Colony elimination focus</p>
                    <p className="text-sm font-medium">✓ Seasonal treatment plans</p>
                  </div>
                </div>

                {/* Emergency Services */}
                <div className="bg-white border-2 border-blue-200 p-8 rounded-2xl shadow-xl text-blue-800 transform hover:scale-105 transition-all duration-300">
                  <h3 className="text-2xl font-bold mb-4">Emergency Services</h3>
                  <p className="text-blue-700 mb-6 leading-relaxed">
                    24/7 emergency pest control response for urgent situations across Adelaide.
                  </p>
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <p className="text-sm font-medium">✓ Same-day emergency response</p>
                    <p className="text-sm font-medium">✓ Weekend & holiday service</p>
                    <p className="text-sm font-medium">✓ Rapid assessment & treatment</p>
                  </div>
                </div>
              </div>

              {/* Call to action */}
              <div className="text-center">
                <div className="bg-gradient-to-r from-blue-600 to-blue-800 p-8 rounded-2xl shadow-xl">
                  <h3 className="text-3xl font-bold text-white mb-4">
                    Ready to Protect Your Adelaide Property?
                  </h3>
                  <p className="text-white/90 text-lg mb-6 max-w-2xl mx-auto">
                    Contact our local Adelaide team for fast, professional pest control solutions
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Link
                      href="tel:+61434300216"
                      className="bg-white text-gray-800 px-8 py-4 rounded-lg hover:bg-gray-100 transition-colors font-bold text-lg shadow-lg"
                    >
                      📞 Call Adelaide: +61 434 300 216
                    </Link>
                    <Link
                      href="#service-form"
                      className="border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white hover:text-gray-800 transition-colors font-bold text-lg"
                    >
                      📝 Get Free Quote
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <AdelaidePestSolutions />

        {/* Reviews Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4 text-center">
                Reviews from Adelaide Customers
              </h2>
              <p className="text-lg text-gray-600 text-center mb-12">
                See what our Adelaide customers say about our pest control services
              </p>
              <ClientReviews />

              {/* Google Review Prompt */}
              <div className="mt-16 max-w-2xl mx-auto">
                <GoogleReviewPrompt
                  googleReviewUrl="https://g.page/r/CTDEnTM5oHZVEBI/review"
                  businessName="T47 Pest Control"
                  location="Adelaide"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Trusted Local Pest Control Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-8 text-center">
                Trusted Local Pest Control in Adelaide
              </h2>
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div>
                  <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                    Adelaide's unique climate with hot summers and milder winters creates ideal conditions for various pest species. Our local team understands these challenges and provides tailored strategies for effective pest management across the Adelaide metropolitan area.
                  </p>
                  <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                    With over 50 years of experience, our locally based team delivers customised solutions that address Adelaide's specific pest pressures while ensuring the safety of your family, pets, and property.
                  </p>

                  <div className="space-y-4">
                    <div className="flex items-start">
                      <div className="bg-green-light p-2 rounded-full mr-4 mt-1">
                        <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-primary mb-2">Customised Solutions</h3>
                        <p className="text-gray-600">Tailored treatments for Adelaide's unique pest challenges and climate conditions.</p>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <div className="bg-green-light p-2 rounded-full mr-4 mt-1">
                        <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-primary mb-2">Safe and Effective Treatments</h3>
                        <p className="text-gray-600">Environmentally responsible treatments that deliver fast results while protecting your family.</p>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <div className="bg-green-light p-2 rounded-full mr-4 mt-1">
                        <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-primary mb-2">Proactive Prevention</h3>
                        <p className="text-gray-600">Ongoing monitoring and prevention strategies to keep pests away long-term.</p>
                      </div>
                    </div>
                  </div>
                </div>

                <AdelaideServiceMap />
              </div>
            </div>
          </div>
        </section>



        {/* Specific Pest Control Sections */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-12 text-center">
                Expert Pest Control Near You in Adelaide
              </h2>

              <div className="grid lg:grid-cols-2 gap-12 mb-16">
                {/* Rodent Control */}
                <div className="bg-gray-50 p-8 rounded-xl shadow-lg">
                  {/* Hero Image */}
                  <div className="relative h-48 mb-6 rounded-lg overflow-hidden">
                    <OptimizedImage
                      src="/rodent-control-hero.webp"
                      fallbackSrc="/rodent-control-hero.jpg"
                      alt="Professional rodent control services in Adelaide"
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                    <div className="absolute bottom-4 left-4 text-white">
                      <h4 className="text-lg font-bold">Professional Rodent Control</h4>
                      <p className="text-sm opacity-90">Safe & Effective Solutions</p>
                    </div>
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold text-primary mb-6">
                    Rodent Control and Removal in Adelaide
                  </h3>
                  <p className="text-gray-700 mb-6 leading-relaxed">
                    Rodents pose significant risks through gnawing damage, electrical wiring hazards, and rapid breeding cycles. Our Adelaide team focuses on comprehensive waste management, securing food sources, and sealing entry points for long-term control.
                  </p>
                  <div className="space-y-3 mb-6">
                    <div className="flex items-center text-gray-600">
                      <span className="text-red-500 mr-2">⚠️</span>
                      Property damage from gnawing
                    </div>
                    <div className="flex items-center text-gray-600">
                      <span className="text-red-500 mr-2">⚠️</span>
                      Electrical fire hazards
                    </div>
                    <div className="flex items-center text-gray-600">
                      <span className="text-red-500 mr-2">⚠️</span>
                      Rapid population growth
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-2 mb-6">
                    <Link href="/residential/rodents" className="text-green-dark hover:text-green-light hover:underline text-sm font-medium">
                      Identify rodent problems
                    </Link>
                    <span className="text-gray-400">|</span>
                    <Link href="/residential/rats-mice" className="text-green-dark hover:text-green-light hover:underline text-sm font-medium">
                      How to get rid of rodents
                    </Link>
                    <span className="text-gray-400">|</span>
                    <Link href="/blog" className="text-green-dark hover:text-green-light hover:underline text-sm font-medium">
                      Rodent prevention tips
                    </Link>
                  </div>
                  <Link
                    href="/residential/rodents"
                    className="bg-green-light text-black px-6 py-3 rounded-lg hover:bg-green-dark hover:text-white transition-colors font-medium inline-block"
                  >
                    Learn More About Rodent Control
                  </Link>
                </div>

                {/* Termite Control */}
                <div className="bg-gray-50 p-8 rounded-xl shadow-lg">
                  {/* Hero Image */}
                  <div className="relative h-48 mb-6 rounded-lg overflow-hidden">
                    <OptimizedImage
                      src="/termite-inspection-hero.webp"
                      fallbackSrc="/termite-inspection-hero.jpg"
                      alt="Professional termite inspection services in Adelaide"
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                    <div className="absolute bottom-4 left-4 text-white">
                      <h4 className="text-lg font-bold">Termite Inspection</h4>
                      <p className="text-sm opacity-90">Protect Your Investment</p>
                    </div>
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold text-primary mb-6">
                    Termite Inspection and Treatment in Adelaide
                  </h3>
                  <p className="text-gray-700 mb-6 leading-relaxed">
                    <strong className="text-red-600">1 in 4 Adelaide homes</strong> are affected by termites, causing silent damage to structural integrity. Early detection through professional inspections and ongoing monitoring is crucial for protecting your investment.
                  </p>
                  <div className="space-y-3 mb-6">
                    <div className="flex items-center text-gray-600">
                      <span className="text-green-light mr-2">✓</span>
                      Chemical barrier treatments
                    </div>
                    <div className="flex items-center text-gray-600">
                      <span className="text-green-light mr-2">✓</span>
                      Advanced baiting systems
                    </div>
                    <div className="flex items-center text-gray-600">
                      <span className="text-green-light mr-2">✓</span>
                      Regular monitoring inspections
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-2 mb-6">
                    <Link href="/residential/termites" className="text-green-dark hover:text-green-light hover:underline text-sm font-medium">
                      Identify termites
                    </Link>
                    <span className="text-gray-400">|</span>
                    <Link href="/termite-solutions" className="text-green-dark hover:text-green-light hover:underline text-sm font-medium">
                      How to get rid of termites
                    </Link>
                    <span className="text-gray-400">|</span>
                    <Link href="/residential/termite-prevention" className="text-green-dark hover:text-green-light hover:underline text-sm font-medium">
                      Termite prevention tips
                    </Link>
                  </div>
                  <Link
                    href="/residential/termites"
                    className="bg-green-light text-black px-6 py-3 rounded-lg hover:bg-green-dark hover:text-white transition-colors font-medium inline-block"
                  >
                    Learn More About Termite Control
                  </Link>
                </div>
              </div>

              {/* Pest Proofing and Spider Control */}
              <div className="grid lg:grid-cols-2 gap-12">
                {/* Pest Proofing */}
                <div className="bg-gray-50 p-8 rounded-xl shadow-lg">
                  {/* Hero Image */}
                  <div className="relative h-48 mb-6 rounded-lg overflow-hidden">
                    <OptimizedImage
                      src="/pest-proofing-hero.webp"
                      fallbackSrc="/pest-proofing-hero.jpg"
                      alt="Professional pest proofing services in Adelaide"
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                    <div className="absolute bottom-4 left-4 text-white">
                      <h4 className="text-lg font-bold">Pest Proofing</h4>
                      <p className="text-sm opacity-90">Prevention Solutions</p>
                    </div>
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold text-primary mb-6">
                    Pest Proofing and Prevention Solutions
                  </h3>
                  <p className="text-gray-700 mb-6 leading-relaxed">
                    Our comprehensive pest proofing techniques include sealing entry points, reinforcing vulnerable areas, and using advanced products like Flexi Armour to create durable barriers against Adelaide's common pests.
                  </p>
                  <div className="space-y-3 mb-6">
                    <div className="flex items-center text-gray-600">
                      <span className="text-green-light mr-2">🏠</span>
                      Entry point sealing and reinforcement
                    </div>
                    <div className="flex items-center text-gray-600">
                      <span className="text-green-light mr-2">🛡️</span>
                      Durable barrier installation
                    </div>
                    <div className="flex items-center text-gray-600">
                      <span className="text-green-light mr-2">📋</span>
                      Business compliance support
                    </div>
                  </div>
                  <p className="text-gray-600 text-sm mb-6">
                    For businesses: compliance programs, regular inspections, ongoing monitoring, and expert advice to meet workplace health and safety requirements.
                  </p>
                  <Link
                    href="/contact"
                    className="bg-green-light text-black px-6 py-3 rounded-lg hover:bg-green-dark hover:text-white transition-colors font-medium inline-block"
                  >
                    Get Pest Proofing Quote
                  </Link>
                </div>

                {/* Spider Control */}
                <div className="bg-gray-50 p-8 rounded-xl shadow-lg">
                  {/* Hero Image */}
                  <div className="relative h-48 mb-6 rounded-lg overflow-hidden">
                    <OptimizedImage
                      src="/spider-control-hero.webp"
                      fallbackSrc="/spider-control-hero.jpg"
                      alt="Professional spider control services in Adelaide"
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                    <div className="absolute bottom-4 left-4 text-white">
                      <h4 className="text-lg font-bold">Spider Control</h4>
                      <p className="text-sm opacity-90">Safe & Effective Treatment</p>
                    </div>
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold text-primary mb-6">
                    Spider Control in Adelaide
                  </h3>
                  <p className="text-gray-700 mb-6 leading-relaxed">
                    Our Adelaide spider control specialists identify species and hiding spots, apply targeted treatments, and implement prevention strategies through entry-point control and removal of attractants.
                  </p>
                  <div className="space-y-3 mb-6">
                    <div className="flex items-center text-gray-600">
                      <span className="text-green-light mr-2">🔍</span>
                      Species identification and assessment
                    </div>
                    <div className="flex items-center text-gray-600">
                      <span className="text-green-light mr-2">🎯</span>
                      Targeted treatment applications
                    </div>
                    <div className="flex items-center text-gray-600">
                      <span className="text-green-light mr-2">🚫</span>
                      Entry point control and prevention
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-2 mb-6">
                    <Link href="/residential/spiders" className="text-green-dark hover:text-green-light hover:underline text-sm font-medium">
                      Identify spiders
                    </Link>
                    <span className="text-gray-400">|</span>
                    <Link href="/blog/dangerous-australian-spiders-identification-control" className="text-green-dark hover:text-green-light hover:underline text-sm font-medium">
                      Common Australian spiders
                    </Link>
                    <span className="text-gray-400">|</span>
                    <Link href="/blog" className="text-green-dark hover:text-green-light hover:underline text-sm font-medium">
                      How to deter spiders
                    </Link>
                  </div>
                  <Link
                    href="/residential/spiders"
                    className="bg-green-light text-black px-6 py-3 rounded-lg hover:bg-green-dark hover:text-white transition-colors font-medium inline-block"
                  >
                    Learn More About Spider Control
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose T47 Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-8 text-center">
                Why Choose T47 Pest Control in Adelaide?
              </h2>
              <div className="grid lg:grid-cols-3 gap-8">
                <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-200 text-center">
                  <div className="bg-green-light p-4 rounded-full w-16 h-16 mx-auto mb-6 flex items-center justify-center">
                    <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-primary mb-4">Trust the Experts</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Local, accredited pest controllers with award-winning service standards and comprehensive insurance coverage.
                  </p>
                </div>

                <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-200 text-center">
                  <div className="bg-green-light p-4 rounded-full w-16 h-16 mx-auto mb-6 flex items-center justify-center">
                    <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-primary mb-4">Pest Control Expertise</h3>
                  <p className="text-gray-600 leading-relaxed">
                    50+ years protecting properties across Australia with advanced techniques and continuous training.
                  </p>
                </div>

                <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-200 text-center">
                  <div className="bg-green-light p-4 rounded-full w-16 h-16 mx-auto mb-6 flex items-center justify-center">
                    <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-primary mb-4">Safe, Effective Solutions</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Environmentally responsible treatments designed for fast results while protecting your family and pets.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>



        {/* Contact Form Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-8 text-center">
                Contact Us
              </h2>
              <p className="text-lg text-gray-600 text-center mb-12">
                Ready to protect your Adelaide property? Get in touch with our local pest control experts today.
              </p>
              <ServiceForm />
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <AdelaideFAQ faqData={adelaideFAQs} />

        {/* Final CTA Section */}
        <section className="py-16 bg-gradient-to-br from-blue-600 to-blue-800 text-white relative overflow-hidden">
          {/* Background decorative elements */}
          <div className="absolute -top-10 -left-10 w-40 h-40 bg-white/10 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-white/10 rounded-full blur-3xl"></div>

          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-6xl mx-auto text-center">
              {/* Phone number banner */}
              <div className="bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 inline-block mb-6 border border-white/20">
                <div className="flex items-center gap-3">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <span className="text-white font-bold text-lg">Adelaide Direct: +61 434 300 216</span>
                </div>
              </div>

              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Need Pest Control in Adelaide?
              </h2>
              <p className="text-xl mb-8">
                Contact our Adelaide team for immediate assistance and professional pest control solutions.
              </p>

              <div className="grid md:grid-cols-3 gap-8 mb-12">
                <div className="bg-white/10 p-6 rounded-lg backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-colors">
                  <h3 className="text-lg font-bold mb-2">📞 Call Adelaide Direct</h3>
                  <p className="text-sm mb-3">Speak with our local Adelaide experts</p>
                  <Link
                    href="tel:+61434300216"
                    className="text-white font-bold hover:underline text-lg block"
                  >
                    +61 434 300 216
                  </Link>
                  <p className="text-xs text-white/80 mt-2">Mon-Fri 7am-5:30pm | Sat 7am-12:30pm</p>
                </div>

                <div className="bg-white/10 p-6 rounded-lg backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-colors">
                  <h3 className="text-lg font-bold mb-2">📧 Email Adelaide Team</h3>
                  <p className="text-sm mb-3">Get a detailed Adelaide quote</p>
                  <Link
                    href="mailto:adelaide@t47pestcontrol.com.au"
                    className="text-white font-bold hover:underline block"
                  >
                    adelaide@t47pestcontrol.com.au
                  </Link>
                  <p className="text-xs text-white/80 mt-2">24-hour response guaranteed</p>
                </div>

                <div className="bg-white/10 p-6 rounded-lg backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-colors">
                  <h3 className="text-lg font-bold mb-2">🌐 Online Adelaide Quote</h3>
                  <p className="text-sm mb-3">Quick and easy Adelaide booking</p>
                  <Link
                    href="#service-form"
                    className="text-white font-bold hover:underline block"
                  >
                    Get Free Adelaide Quote
                  </Link>
                  <p className="text-xs text-white/80 mt-2">Instant online booking available</p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="tel:+61434300216"
                  className="bg-white text-blue-800 px-8 py-4 rounded-lg hover:bg-gray-100 transition-colors font-bold text-lg shadow-lg"
                >
                  📞 Call Adelaide Now
                </Link>
                <Link
                  href="#service-form"
                  className="border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white hover:text-blue-800 transition-colors font-bold text-lg"
                >
                  📝 Book Adelaide Service
                </Link>
              </div>

              {/* Additional CTA banner */}
              <div className="mt-8 bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
                <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                  <div className="text-center md:text-left">
                    <h3 className="text-xl font-bold mb-2">🚨 Emergency Adelaide Pest Control</h3>
                    <p className="text-white/90">Same-day service available for urgent pest situations</p>
                  </div>
                  <Link
                    href="tel:+61434300216"
                    className="bg-white text-blue-800 hover:bg-gray-100 px-6 py-3 rounded-lg font-bold transition-colors whitespace-nowrap"
                  >
                    Emergency Call: +61 434 300 216
                  </Link>
                </div>
              </div>

              <div className="mt-12 pt-8 border-t border-white/20">
                <p className="text-sm text-white/80">
                  T47 Pest Control Adelaide | 19 Aruma Street, Regency Park SA 5010 | Licensed & Insured | adelaide@t47pestcontrol.com.au
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

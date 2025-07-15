import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Advanced Termite Prevention Services | T47 Pest Control - Protect Your Property',
  description: 'Comprehensive termite prevention solutions in Australia. Advanced barrier systems, eco-friendly treatments, and regular inspections. Same-day service, 7-day availability. Protect your investment with T47\'s proven prevention methods.',
  keywords: [
    'termite prevention Australia',
    'termite barrier installation',
    'termite protection systems',
    'eco-friendly termite prevention',
    'advanced termite barriers',

    'property protection termites',
    'termite prevention specialists',
    'chemical termite barriers',
    'physical termite barriers',
    'termite prevention cost',
    'best termite prevention',
    'residential termite prevention',
    'commercial termite prevention',
    'termite prevention methods'
  ].join(', '),
  openGraph: {
    title: 'Advanced Termite Prevention Services | T47 Pest Control',
    description: 'Eco-friendly solutions, regular inspections, and guaranteed protection.',
    type: 'website',
    locale: 'en_AU',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Advanced Termite Prevention Services | T47 Pest Control',
    description: 'Eco-friendly solutions and guaranteed protection.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: 'https://t47pestcontrol.com.au/residential/termite-prevention',
  },
};

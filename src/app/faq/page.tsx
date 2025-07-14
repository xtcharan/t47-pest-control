import { Metadata } from 'next';
import Link from 'next/link';
import ComprehensiveFAQ from '@/components/faq/ComprehensiveFAQ';
import ServiceForm from '@/components/forms/ServiceForm';
import { COMPANY_INFO } from '@/components/lib/constants';

export const metadata: Metadata = {
  title: 'Frequently Asked Questions - T47 Pest Control | Australia',
  description: 'Get answers to all your pest control questions. Learn about our services, safety measures, pricing, and what makes T47 Pest Control Australia\'s trusted pest management experts.',
  keywords: 'pest control FAQ, frequently asked questions, pest control safety, eco-friendly pest control, same-day pest control, emergency pest control, termite control, australian pest species, pest control pricing, pest control guarantee, licensed pest control, insured pest control',
  openGraph: {
    title: 'Frequently Asked Questions - T47 Pest Control',
    description: 'Get answers to all your pest control questions from Australia\'s trusted pest management experts.',
    type: 'website',
    url: 'https://www.t47pestcontrol.com/faq',
    images: [
      {
        url: 'https://www.t47pestcontrol.com/pest-control-faq.webp',
        width: 1200,
        height: 630,
        alt: 'T47 Pest Control FAQ'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Frequently Asked Questions - T47 Pest Control',
    description: 'Get answers to all your pest control questions from Australia\'s trusted experts.',
    images: ['https://www.t47pestcontrol.com/pest-control-faq.webp']
  },
  alternates: {
    canonical: 'https://www.t47pestcontrol.com/faq'
  }
};

export default function FAQPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Breadcrumb */}
      <nav className="bg-gray-50 py-4">
        <div className="container mx-auto px-4">
          <div className="flex items-center space-x-2 text-sm">
            <Link href="/" className="text-[#ed8936] hover:underline">Home</Link>
            <span className="text-gray-500">/</span>
            <Link href="/about" className="text-[#ed8936] hover:underline">About Us</Link>
            <span className="text-gray-500">/</span>
            <span className="text-gray-700">FAQ</span>
          </div>
        </div>
      </nav>

      {/* Service Form Section */}
      <ServiceForm />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary via-secondary to-nav-dark text-white py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Frequently Asked
              <span className="block text-green-light mt-2">Questions</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
              Get expert answers to all your pest control questions from Australia's 
              most trusted pest management professionals.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm md:text-base">
              <span className="bg-green-light text-black px-4 py-2 rounded-full font-medium">Expert Answers</span>
              <span className="bg-green-light text-black px-4 py-2 rounded-full font-medium">Safety Information</span>
              <span className="bg-green-light text-black px-4 py-2 rounded-full font-medium">Service Details</span>
              <span className="bg-green-light text-black px-4 py-2 rounded-full font-medium">Pricing Guide</span>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Content Section */}
      <section className="py-16 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute -top-20 -left-20 w-64 h-64 bg-red-light/5 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-green-light/5 rounded-full blur-3xl"></div>

        {/* Question mark decorations */}
        <div className="absolute top-20 right-10 text-8xl text-red-light/10 font-serif">?</div>
        <div className="absolute bottom-20 left-10 text-6xl text-green-light/10 font-serif">?</div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-12">
            <span className="inline-block px-3 py-1 bg-red-light/10 text-red-dark text-sm font-semibold rounded-full mb-3">
              COMPREHENSIVE GUIDE
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-primary">
              Everything You Need to Know About
              <span className="block text-green-light mt-2">Professional Pest Control</span>
            </h2>
            <div className="w-24 h-1 bg-red-light mx-auto mb-6"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From safety concerns to service details, pricing information to pest identification - 
              find comprehensive answers to all your pest control questions.
            </p>
          </div>

          <div className="max-w-5xl mx-auto">
            <ComprehensiveFAQ />
          </div>
        </div>
      </section>

      {/* Contact CTA Section */}
      <section className="py-16 bg-gradient-to-r from-green-light to-green-dark">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Still Have Questions?
            </h2>
            <p className="text-xl mb-8 leading-relaxed">
              Our expert team is ready to provide personalized answers and help you choose 
              the right pest control solution for your specific needs.
            </p>

            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="bg-white/10 p-6 rounded-lg">
                <h3 className="text-lg font-bold mb-2">📞 Call Our Experts</h3>
                <p className="text-sm mb-3">Speak directly with our specialists</p>
                <Link
                  href={`tel:${COMPANY_INFO.phone}`}
                  className="text-white font-bold hover:underline"
                >
                  {COMPANY_INFO.phone}
                </Link>
              </div>

              <div className="bg-white/10 p-6 rounded-lg">
                <h3 className="text-lg font-bold mb-2">📧 Email Support</h3>
                <p className="text-sm mb-3">Get detailed written responses</p>
                <Link
                  href={`mailto:${COMPANY_INFO.email}`}
                  className="text-white font-bold hover:underline"
                >
                  {COMPANY_INFO.email}
                </Link>
              </div>

              <div className="bg-white/10 p-6 rounded-lg">
                <h3 className="text-lg font-bold mb-2">🌐 Free Quote</h3>
                <p className="text-sm mb-3">Get personalized service quote</p>
                <Link
                  href="/contact"
                  className="text-white font-bold hover:underline"
                >
                  Request Quote
                </Link>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/residential"
                className="bg-white text-green-dark px-8 py-4 rounded-lg hover:bg-gray-100 transition-colors font-bold text-lg"
              >
                Residential Services
              </Link>
              <Link
                href="/commercial"
                className="border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white hover:text-green-dark transition-colors font-bold text-lg"
              >
                Commercial Services
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

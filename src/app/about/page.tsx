import { Metadata } from 'next';
import Link from 'next/link';
import OptimizedImage from '@/components/common/OptimizedImage';
import ServiceForm from '@/components/forms/ServiceForm';
import AboutUsFAQ from '@/components/faq/AboutUsFAQ';
import { COMPANY_INFO } from '@/components/lib/constants';

export const metadata: Metadata = {
  title: 'About T47 Pest Control - Professional Pest Management Experts | Australia',
  description: 'Learn about T47 Pest Control, Australia\'s trusted pest management experts. Professional, licensed, and insured pest control services with same-day availability and eco-friendly solutions. FAQ included.',
  keywords: 'about T47 pest control, professional pest control company, licensed pest control, insured pest control, australian pest control experts, pest management team, pest control history, pest control FAQ, frequently asked questions, pest control safety, eco-friendly pest control, same-day pest control, emergency pest control, termite control specialists, australian pest species',
  openGraph: {
    title: 'About T47 Pest Control - Professional Pest Management Experts',
    description: 'Learn about T47 Pest Control, Australia\'s trusted pest management experts with professional, eco-friendly solutions.',
    type: 'website',
    url: 'https://www.t47pestcontrol.com/about',
    images: [
      {
        url: 'https://www.t47pestcontrol.com/pest-control-team.webp',
        width: 1200,
        height: 630,
        alt: 'T47 Pest Control Professional Team'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'About T47 Pest Control - Professional Pest Management Experts',
    description: 'Learn about T47 Pest Control, Australia\'s trusted pest management experts.',
    images: ['https://www.t47pestcontrol.com/pest-control-team.webp']
  },
  alternates: {
    canonical: 'https://www.t47pestcontrol.com/about'
  }
};

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Breadcrumb */}
      <nav className="bg-gray-50 py-4">
        <div className="container mx-auto px-4">
          <div className="flex items-center space-x-2 text-sm">
            <Link href="/" className="text-[#ed8936] hover:underline">Home</Link>
            <span className="text-gray-500">/</span>
            <span className="text-gray-700">About Us</span>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary via-secondary to-nav-dark text-white py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              About
              <span className="block text-green-light mt-2">T47 Pest Control</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
              Australia's trusted pest management experts, delivering professional solutions
              with same-day service and eco-friendly methods since our founding.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm md:text-base">
              <span className="bg-green-light text-black px-4 py-2 rounded-full font-medium">Licensed & Insured</span>
              <span className="bg-green-light text-black px-4 py-2 rounded-full font-medium">Same-Day Service</span>
              <span className="bg-green-light text-black px-4 py-2 rounded-full font-medium">Eco-Friendly</span>
              <span className="bg-green-light text-black px-4 py-2 rounded-full font-medium">7-Day Availability</span>
            </div>
          </div>
        </div>
      </section>

      {/* Company Story Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
                  Our Story: Protecting Australian Homes & Businesses
                </h2>
                <div className="space-y-4 text-gray-700 leading-relaxed">
                  <p>
                    T47 Pest Control was founded with a simple mission: to provide Australia with the most
                    effective, safe, and reliable pest management solutions available. What started as a
                    commitment to excellence has grown into a trusted name across the country.
                  </p>
                  <p>
                    Our journey began when we recognized the need for a pest control company that truly
                    understood Australian pest challenges. From the aggressive European wasps to the
                    destructive subterranean termites, we've dedicated ourselves to mastering the control
                    of every pest species that threatens Australian properties.
                  </p>
                  <p>
                    Today, T47 Pest Control stands as a leader in the industry, combining cutting-edge
                    technology with time-tested methods to deliver results that exceed expectations.
                    Our commitment to same-day service and eco-friendly solutions sets us apart in
                    an industry where quick, safe action is paramount.
                  </p>
                </div>
              </div>
              <div>
                <OptimizedImage
                  src="/pest-control-team.webp"
                  alt="T47 Pest Control professional team in action"
                  width={600}
                  height={400}
                  className="w-full rounded-xl shadow-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
                Our Core Values
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                These principles guide every decision we make and every service we provide
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
                <div className="w-16 h-16 bg-green-light rounded-full flex items-center justify-center mb-6">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-primary mb-4">Excellence</h3>
                <p className="text-gray-700">
                  We strive for perfection in every service, using the latest technology and proven methods
                  to deliver results that exceed expectations every time.
                </p>
              </div>

              <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
                <div className="w-16 h-16 bg-green-light rounded-full flex items-center justify-center mb-6">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-primary mb-4">Safety First</h3>
                <p className="text-gray-700">
                  The safety of your family, pets, and environment is our top priority. We use eco-friendly
                  methods and follow strict safety protocols in every treatment.
                </p>
              </div>

              <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
                <div className="w-16 h-16 bg-green-light rounded-full flex items-center justify-center mb-6">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-primary mb-4">Reliability</h3>
                <p className="text-gray-700">
                  When you need us, we're there. Our same-day service and 7-day availability ensure
                  that pest problems are addressed quickly and effectively.
                </p>
              </div>

              <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
                <div className="w-16 h-16 bg-green-light rounded-full flex items-center justify-center mb-6">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-primary mb-4">Integrity</h3>
                <p className="text-gray-700">
                  Honest communication, transparent pricing, and ethical business practices form
                  the foundation of our relationships with every client.
                </p>
              </div>

              <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
                <div className="w-16 h-16 bg-green-light rounded-full flex items-center justify-center mb-6">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-primary mb-4">Innovation</h3>
                <p className="text-gray-700">
                  We continuously invest in the latest pest control technology and methods to
                  provide more effective, efficient, and environmentally responsible solutions.
                </p>
              </div>

              <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
                <div className="w-16 h-16 bg-green-light rounded-full flex items-center justify-center mb-6">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-primary mb-4">Environmental Responsibility</h3>
                <p className="text-gray-700">
                  We're committed to protecting Australia's unique environment through sustainable
                  practices and eco-friendly pest control solutions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose T47 Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
                Why Choose T47 Pest Control?
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                We're not just another pest control company. Here's what makes us Australia's preferred choice
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="bg-gradient-to-r from-red-light to-red-dark text-white p-8 rounded-xl">
                <h3 className="text-2xl font-bold mb-6">🚀 Same-Day Emergency Service</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="text-white mr-3">•</span>
                    <span>Available 7 days a week including public holidays</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-white mr-3">•</span>
                    <span>Emergency response for dangerous pest situations</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-white mr-3">•</span>
                    <span>Fast response times across all service areas</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-white mr-3">•</span>
                    <span>24/7 phone support for urgent situations</span>
                  </li>
                </ul>
              </div>

              <div className="bg-gradient-to-r from-green-light to-green-dark text-white p-8 rounded-xl">
                <h3 className="text-2xl font-bold mb-6">🌿 Eco-Friendly Solutions</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="text-white mr-3">•</span>
                    <span>Low-toxicity treatments safe for families and pets</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-white mr-3">•</span>
                    <span>Integrated Pest Management (IPM) approaches</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-white mr-3">•</span>
                    <span>Minimal environmental impact methods</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-white mr-3">•</span>
                    <span>Sustainable pest prevention strategies</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
                <h4 className="text-lg font-bold text-primary mb-3">✅ Guaranteed Results</h4>
                <p className="text-gray-700 text-sm">
                  We stand behind our work with comprehensive warranties and free follow-up treatments
                  if pests return within the guarantee period.
                </p>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
                <h4 className="text-lg font-bold text-primary mb-3">🎓 Expert Technicians</h4>
                <p className="text-gray-700 text-sm">
                  Our fully licensed and certified technicians undergo continuous training on the
                  latest pest control methods and Australian pest species.
                </p>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
                <h4 className="text-lg font-bold text-primary mb-3">💰 Transparent Pricing</h4>
                <p className="text-gray-700 text-sm">
                  No hidden fees or surprise charges. We provide detailed quotes upfront and
                  honor our pricing commitments.
                </p>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
                <h4 className="text-lg font-bold text-primary mb-3">🔬 Advanced Technology</h4>
                <p className="text-gray-700 text-sm">
                  We use the latest pest detection and treatment technology, including thermal
                  imaging for termite detection and precision application equipment.
                </p>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
                <h4 className="text-lg font-bold text-primary mb-3">🛡️ Fully Insured</h4>
                <p className="text-gray-700 text-sm">
                  Comprehensive public liability insurance protects you and your property
                  during all pest control treatments and inspections.
                </p>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
                <h4 className="text-lg font-bold text-primary mb-3">📞 Ongoing Support</h4>
                <p className="text-gray-700 text-sm">
                  Our relationship doesn't end with treatment. We provide ongoing advice,
                  monitoring, and support to keep your property pest-free.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Team Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
                Meet Our Expert Team
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Our qualified professionals bring years of experience and specialized knowledge to every job
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-12 items-center mb-12">
              <div>
                <h3 className="text-2xl font-bold text-primary mb-6">Professional Qualifications</h3>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="w-6 h-6 bg-green-light rounded-full flex items-center justify-center mr-4 mt-1">
                      <span className="text-white text-xs">✓</span>
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-800">Licensed Pest Control Technicians</h4>
                      <p className="text-gray-600 text-sm">All technicians hold current pest control licenses and certifications</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="w-6 h-6 bg-green-light rounded-full flex items-center justify-center mr-4 mt-1">
                      <span className="text-white text-xs">✓</span>
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-800">Termite Inspection Specialists</h4>
                      <p className="text-gray-600 text-sm">Certified termite inspectors with advanced detection training</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="w-6 h-6 bg-green-light rounded-full flex items-center justify-center mr-4 mt-1">
                      <span className="text-white text-xs">✓</span>
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-800">Ongoing Professional Development</h4>
                      <p className="text-gray-600 text-sm">Regular training on new methods, products, and Australian pest species</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="w-6 h-6 bg-green-light rounded-full flex items-center justify-center mr-4 mt-1">
                      <span className="text-white text-xs">✓</span>
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-800">Safety Certified</h4>
                      <p className="text-gray-600 text-sm">Workplace safety and chemical handling certifications</p>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <OptimizedImage
                  src="/pest-control-technician.webp"
                  alt="T47 Pest Control certified technician"
                  width={500}
                  height={400}
                  className="w-full rounded-xl shadow-lg"
                />
              </div>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-200">
              <h3 className="text-2xl font-bold text-primary mb-6 text-center">Our Expertise Areas</h3>
              <div className="grid md:grid-cols-4 gap-6">
                <div className="text-center">
                  <div className="w-16 h-16 bg-green-light rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2L2 7v10c0 5.55 3.84 9.74 9 11 5.16-1.26 9-5.45 9-11V7l-10-5z"/>
                    </svg>
                  </div>
                  <h4 className="font-bold text-primary mb-2">Termite Control</h4>
                  <p className="text-gray-600 text-sm">Advanced termite detection, treatment, and prevention systems</p>
                </div>

                <div className="text-center">
                  <div className="w-16 h-16 bg-green-light rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                    </svg>
                  </div>
                  <h4 className="font-bold text-primary mb-2">General Pest Control</h4>
                  <p className="text-gray-600 text-sm">Comprehensive treatment for ants, cockroaches, spiders, and more</p>
                </div>

                <div className="text-center">
                  <div className="w-16 h-16 bg-green-light rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z"/>
                    </svg>
                  </div>
                  <h4 className="font-bold text-primary mb-2">Commercial Services</h4>
                  <p className="text-gray-600 text-sm">Specialized pest management for businesses and institutions</p>
                </div>

                <div className="text-center">
                  <div className="w-16 h-16 bg-green-light rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"/>
                    </svg>
                  </div>
                  <h4 className="font-bold text-primary mb-2">Residential Protection</h4>
                  <p className="text-gray-600 text-sm">Complete home pest protection and prevention programs</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Areas & Availability Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
                Service Areas & Availability
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Comprehensive pest control coverage across Australia with rapid response times
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-2xl font-bold text-primary mb-6">Extensive Coverage</h3>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="w-8 h-8 bg-green-light rounded-full flex items-center justify-center mr-4 mt-1">
                      <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-800">Metropolitan Areas</h4>
                      <p className="text-gray-600 text-sm">Complete coverage of major cities and surrounding suburbs</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="w-8 h-8 bg-green-light rounded-full flex items-center justify-center mr-4 mt-1">
                      <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-800">Regional Centers</h4>
                      <p className="text-gray-600 text-sm">Service to major regional towns and rural communities</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="w-8 h-8 bg-green-light rounded-full flex items-center justify-center mr-4 mt-1">
                      <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-800">Remote Areas</h4>
                      <p className="text-gray-600 text-sm">Specialized service for remote properties and rural businesses</p>
                    </div>
                  </div>
                </div>

                <div className="mt-8 p-6 bg-gradient-to-r from-red-light to-red-dark text-white rounded-lg">
                  <h4 className="text-lg font-bold mb-3">🕐 24/7 Availability</h4>
                  <ul className="space-y-2 text-sm">
                    <li>• Same-day service for emergency situations</li>
                    <li>• Weekend and public holiday availability</li>
                    <li>• After-hours emergency response</li>
                    <li>• Flexible scheduling to suit your needs</li>
                  </ul>
                </div>
              </div>

              <div>
                <div className="bg-gray-50 p-8 rounded-xl border border-gray-200">
                  <h3 className="text-2xl font-bold text-primary mb-6">Response Times</h3>
                  <div className="space-y-6">
                    <div className="flex justify-between items-center">
                      <span className="font-semibold text-gray-800">Emergency Calls</span>
                      <span className="text-green-light font-bold">Within 2 hours</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-green-light h-2 rounded-full" style={{width: '95%'}}></div>
                    </div>

                    <div className="flex justify-between items-center">
                      <span className="font-semibold text-gray-800">Same-Day Service</span>
                      <span className="text-green-light font-bold">Within 4 hours</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-green-light h-2 rounded-full" style={{width: '90%'}}></div>
                    </div>

                    <div className="flex justify-between items-center">
                      <span className="font-semibold text-gray-800">Scheduled Appointments</span>
                      <span className="text-green-light font-bold">Next business day</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-green-light h-2 rounded-full" style={{width: '100%'}}></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Certifications & Customer Promise Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12">
              {/* Certifications */}
              <div>
                <h2 className="text-3xl font-bold text-primary mb-8">
                  Certifications & Licenses
                </h2>
                <div className="space-y-6">
                  <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                    <h3 className="text-lg font-bold text-primary mb-3">🏆 Professional Certifications</h3>
                    <ul className="space-y-2 text-gray-700 text-sm">
                      <li>• Australian Pest Control Association (APCA) Member</li>
                      <li>• Licensed Pest Control Operators</li>
                      <li>• Certified Termite Inspection Specialists</li>
                      <li>• Chemical Application Certificates</li>
                      <li>• Workplace Health & Safety Compliance</li>
                    </ul>
                  </div>

                  <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                    <h3 className="text-lg font-bold text-primary mb-3">🛡️ Insurance & Liability</h3>
                    <ul className="space-y-2 text-gray-700 text-sm">
                      <li>• $20 Million Public Liability Insurance</li>
                      <li>• Professional Indemnity Coverage</li>
                      <li>• Workers Compensation Insurance</li>
                      <li>• Product Liability Protection</li>
                      <li>• Comprehensive Business Insurance</li>
                    </ul>
                  </div>

                  <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                    <h3 className="text-lg font-bold text-primary mb-3">📋 Compliance Standards</h3>
                    <ul className="space-y-2 text-gray-700 text-sm">
                      <li>• Australian Pesticides & Veterinary Medicines Authority (APVMA)</li>
                      <li>• State Government Licensing Requirements</li>
                      <li>• Environmental Protection Standards</li>
                      <li>• Australian Standards AS 3660 (Termite Management)</li>
                      <li>• Quality Management Systems</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Customer Promise */}
              <div>
                <h2 className="text-3xl font-bold text-primary mb-8">
                  Our Customer Promise
                </h2>
                <div className="bg-primary text-white p-8 rounded-xl mb-6">
                  <h3 className="text-2xl font-bold mb-6">The T47 Guarantee</h3>
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <span className="text-green-light mr-3 text-lg">✓</span>
                      <span>100% satisfaction guarantee on all services</span>
                    </div>
                    <div className="flex items-start">
                      <span className="text-green-light mr-3 text-lg">✓</span>
                      <span>Free follow-up treatments if pests return</span>
                    </div>
                    <div className="flex items-start">
                      <span className="text-green-light mr-3 text-lg">✓</span>
                      <span>Transparent pricing with no hidden costs</span>
                    </div>
                    <div className="flex items-start">
                      <span className="text-green-light mr-3 text-lg">✓</span>
                      <span>Professional, courteous service every time</span>
                    </div>
                    <div className="flex items-start">
                      <span className="text-green-light mr-3 text-lg">✓</span>
                      <span>Eco-friendly solutions that protect your family</span>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                    <h4 className="font-bold text-primary mb-2">🎯 Our Mission</h4>
                    <p className="text-gray-700 text-sm">
                      To provide Australia with the most effective, safe, and reliable pest management
                      solutions while protecting families, businesses, and the environment.
                    </p>
                  </div>

                  <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                    <h4 className="font-bold text-primary mb-2">👁️ Our Vision</h4>
                    <p className="text-gray-700 text-sm">
                      To be Australia's most trusted pest control company, setting the standard
                      for excellence in pest management and customer service.
                    </p>
                  </div>

                  <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                    <h4 className="font-bold text-primary mb-2">💪 Our Commitment</h4>
                    <p className="text-gray-700 text-sm">
                      Continuous improvement, ongoing education, and unwavering dedication to
                      protecting Australian homes and businesses from pest threats.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Form Section */}
      <ServiceForm />

      {/* FAQ Section */}
      <section id="faq" className="py-16 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute -top-20 -left-20 w-64 h-64 bg-red-light/5 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-green-light/5 rounded-full blur-3xl"></div>

        {/* Question mark decorations */}
        <div className="absolute top-20 right-10 text-8xl text-red-light/10 font-serif">?</div>
        <div className="absolute bottom-20 left-10 text-6xl text-green-light/10 font-serif">?</div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-12">
            <span className="inline-block px-3 py-1 bg-red-light/10 text-red-dark text-sm font-semibold rounded-full mb-3">
              FREQUENTLY ASKED QUESTIONS
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-primary">
              Everything You Need to Know About
              <span className="block text-green-light mt-2">T47 Pest Control</span>
            </h2>
            <div className="w-24 h-1 bg-red-light mx-auto mb-6"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Get answers to the most common questions about our professional pest control services,
              safety measures, and what makes us Australia's trusted pest management experts.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <AboutUsFAQ />
          </div>

          {/* Additional help section */}
          <div className="mt-12 text-center">
            <div className="bg-white p-8 rounded-xl shadow-lg max-w-3xl mx-auto border border-gray-100">
              <h3 className="text-2xl font-bold text-primary mb-4">Still Have Questions?</h3>
              <p className="text-gray-600 mb-6 text-lg">
                Our expert team is ready to provide personalized answers about our pest control services,
                treatment options, and how we can protect your property.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href={`tel:${COMPANY_INFO.phone}`}
                  className="bg-gradient-to-r from-red-light to-red-dark text-white px-8 py-4 rounded-lg hover:from-red-600 hover:to-red-800 transition-colors font-bold text-lg flex items-center justify-center"
                >
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  Call Our Experts
                </Link>
                <Link
                  href="/contact"
                  className="bg-white text-primary border-2 border-primary px-8 py-4 rounded-lg hover:bg-primary hover:text-white transition-colors font-bold text-lg flex items-center justify-center"
                >
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                  </svg>
                  Get Free Quote
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-16 bg-gradient-to-r from-green-light to-green-dark">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Experience the T47 Difference?
            </h2>
            <p className="text-xl mb-8 leading-relaxed">
              Join thousands of satisfied customers who trust T47 Pest Control for their pest management needs.
              Contact us today for a free consultation and discover why we're Australia's preferred choice.
            </p>

            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="bg-white/10 p-6 rounded-lg">
                <h3 className="text-lg font-bold mb-2">📞 Call Us Now</h3>
                <p className="text-sm mb-3">Speak directly with our experts</p>
                <Link
                  href={`tel:${COMPANY_INFO.phone}`}
                  className="text-white font-bold hover:underline"
                >
                  {COMPANY_INFO.phone}
                </Link>
              </div>

              <div className="bg-white/10 p-6 rounded-lg">
                <h3 className="text-lg font-bold mb-2">📧 Email Us</h3>
                <p className="text-sm mb-3">Get a detailed quote</p>
                <Link
                  href="mailto:t47pestcontrol@gmail.com"
                  className="text-white font-bold hover:underline"
                >
                  t47pestcontrol@gmail.com
                </Link>
              </div>

              <div className="bg-white/10 p-6 rounded-lg">
                <h3 className="text-lg font-bold mb-2">🌐 Online Quote</h3>
                <p className="text-sm mb-3">Quick and easy booking</p>
                <Link
                  href="/contact"
                  className="text-white font-bold hover:underline"
                >
                  Get Free Quote
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

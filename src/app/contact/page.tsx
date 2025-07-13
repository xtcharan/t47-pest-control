import Link from 'next/link';
import Image from 'next/image';
import { COMPANY_INFO } from '@/components/lib/constants';
import ClientReviews from '@/components/reviews/ClientReviews';

export default function ContactPage() {
  const locations = [
    {
      id: 'adelaide',
      name: 'Adelaide',
      image: '/adelaide.webp',
      areas: 'Adelaide, Tea Tree Gully, Torrens Park, Blackwood, Glenelg, Salisbury and Edinburgh, south to Victor Harbor, north to Barossa Valley, east to Mount Pleasant.',
      slug: 'adelaide'
    },
    {
      id: 'brisbane',
      name: 'Brisbane',
      image: '/brisbane.webp',
      areas: 'Brisbane, Redbank South, Redbank Plains, North Lakes, Ipswich, Springwood, Gold Coast to the Tweed Heads border, northern New South Wales (NSW).',
      slug: 'brisbane'
    },
    {
      id: 'melbourne',
      name: 'Melbourne',
      image: '/melborune.webp',
      areas: 'Melbourne, Dandenong, Frankston, Werribee, Pakenham, Cranbourne, Ringwood.',
      slug: 'melbourne'
    },
    {
      id: 'sydney',
      name: 'Sydney',
      image: '/sydeny.webp',
      areas: 'Sydney, Sutherland Shire, Northern Beaches, Western Sydney, Blue Mountains.',
      slug: 'sydney'
    },
    {
      id: 'perth',
      name: 'Perth',
      image: '/perth.webp',
      areas: 'Perth, Fremantle, Subiaco, Osborne Park, Kalgoorlie, Joondalup, Midland, south-west WA including Mandurah, Busselton, Margaret River, and the south-west region, Pilbara.',
      slug: 'perth'
    },
    {
      id: 'canberra',
      name: 'Canberra',
      image: '/canberra.webp',
      areas: 'Canberra, Queanbeyan, Belconnen, Fyshwick, Deakin, Barton.',
      slug: 'canberra'
    }
  ];

  return (
    <main className="min-h-screen">
      {/* Breadcrumb */}
      <nav className="bg-gray-50 py-4">
        <div className="container mx-auto px-4">
          <div className="flex items-center space-x-2 text-sm">
            <Link href="/" className="text-green-light hover:underline">Home</Link>
            <span className="text-gray-500">/</span>
            <span className="text-gray-700">Contact Us</span>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary via-secondary to-nav-dark text-white py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Contact
              <span className="block text-green-light mt-2">T47 Pest Control</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
              Get in touch with Australia's leading pest control experts. 
              We're here to help with all your pest management needs.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm md:text-base">
              <span className="bg-green-light text-black px-4 py-2 rounded-full font-medium">24/7 Support</span>
              <span className="bg-green-light text-black px-4 py-2 rounded-full font-medium">Same-Day Service</span>
              <span className="bg-green-light text-black px-4 py-2 rounded-full font-medium">Free Quotes</span>
              <span className="bg-green-light text-black px-4 py-2 rounded-full font-medium">Licensed Experts</span>
            </div>
          </div>
        </div>
      </section>

      {/* Call Us Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
              Call Us Now
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Speak directly with our pest control experts for immediate assistance
            </p>
            
            <div className="bg-gradient-to-r from-green-light to-green-dark p-8 rounded-xl text-white mb-8">
              <div className="flex flex-col md:flex-row items-center justify-center gap-6">
                <div className="flex items-center">
                  <div className="bg-white/20 p-4 rounded-full mr-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                    </svg>
                  </div>
                  <div className="text-left">
                    <p className="text-sm opacity-90">Call us anytime</p>
                    <p className="text-2xl font-bold">{COMPANY_INFO.phone}</p>
                  </div>
                </div>
                <Link
                  href={`tel:${COMPANY_INFO.phone}`}
                  className="bg-white text-green-dark px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors font-bold text-lg flex items-center"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                  </svg>
                  Call Now
                </Link>
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-lg font-bold mb-2">📞 Emergency Service</h3>
                <p className="text-sm mb-3">24/7 emergency pest control</p>
                <p className="text-green-dark font-bold">{COMPANY_INFO.phone}</p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-lg font-bold mb-2">📧 Email Us</h3>
                <p className="text-sm mb-3">Get a detailed quote</p>
                <Link
                  href={`mailto:${COMPANY_INFO.email}`}
                  className="text-green-dark font-bold hover:underline"
                >
                  {COMPANY_INFO.email}
                </Link>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-lg font-bold mb-2">🌐 Online Quote</h3>
                <p className="text-sm mb-3">Quick and easy booking</p>
                <a
                  href="#quote-form"
                  className="text-green-dark font-bold hover:underline"
                >
                  Get Free Quote
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Get a Fast Quote Form */}
      <section id="quote-form" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
                Get a Fast Quote
              </h2>
              <p className="text-xl text-gray-600">
                Fill out the form below and we'll get back to you within 24 hours with a detailed quote
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-8">
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-light focus:border-transparent"
                      placeholder="Enter your full name"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-light focus:border-transparent"
                      placeholder="Enter your phone number"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-light focus:border-transparent"
                      placeholder="Enter your email address"
                    />
                  </div>
                  <div>
                    <label htmlFor="suburb" className="block text-sm font-medium text-gray-700 mb-2">
                      Suburb *
                    </label>
                    <input
                      type="text"
                      id="suburb"
                      name="suburb"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-light focus:border-transparent"
                      placeholder="Enter your suburb"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-2">
                    Service Required *
                  </label>
                  <select
                    id="service"
                    name="service"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-light focus:border-transparent"
                  >
                    <option value="">Select a service</option>
                    <option value="general-pest-control">General Pest Control</option>
                    <option value="termite-control">Termite Control</option>
                    <option value="cockroach-control">Cockroach Control</option>
                    <option value="rodent-control">Rodent Control</option>
                    <option value="spider-control">Spider Control</option>
                    <option value="ant-control">Ant Control</option>
                    <option value="wasp-control">Wasp Control</option>
                    <option value="commercial-services">Commercial Services</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Additional Details
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-light focus:border-transparent"
                    placeholder="Tell us more about your pest problem..."
                  ></textarea>
                </div>

                <div className="text-center">
                  <button
                    type="submit"
                    className="bg-green-light text-black px-8 py-3 rounded-lg hover:bg-green-dark hover:text-white transition-colors font-bold text-lg"
                  >
                    Get Free Quote
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Our Local Offices */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Our Local Offices
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Find your nearest T47 Pest Control office for personalized service and local expertise
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {locations.map((location) => (
              <div key={location.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <div className="relative h-48">
                  <Image
                    src={location.image}
                    alt={`${location.name} pest control office`}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-primary mb-3">{location.name}</h3>
                  <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                    {location.areas}
                  </p>
                  <div className="flex flex-col sm:flex-row gap-2">
                    <Link
                      href={`/local-branches/${location.slug}`}
                      className="inline-block bg-green-light text-black px-4 py-2 rounded-lg hover:bg-green-dark hover:text-white transition-colors font-medium text-sm text-center"
                    >
                      Office Details
                    </Link>
                    <Link
                      href={`tel:${COMPANY_INFO.phone}`}
                      className="inline-block border border-green-light text-green-dark px-4 py-2 rounded-lg hover:bg-green-light hover:text-black transition-colors font-medium text-sm text-center"
                    >
                      Call Office
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              href="/local-branches"
              className="bg-primary text-white px-8 py-3 rounded-lg hover:bg-secondary transition-colors font-bold text-lg"
            >
              View All Offices
            </Link>
          </div>
        </div>
      </section>

      {/* Google Reviews Section */}
      <ClientReviews />

      {/* Book a Service Now */}
      <section className="py-16 bg-gradient-to-r from-primary to-secondary text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Book a Service Now
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Ready to solve your pest problem? Book our professional pest control service today
            </p>

            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="bg-white/10 p-6 rounded-lg">
                <div className="bg-white/20 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold mb-2">Same-Day Service</h3>
                <p className="text-sm opacity-90">Available for urgent pest problems</p>
              </div>
              <div className="bg-white/10 p-6 rounded-lg">
                <div className="bg-white/20 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold mb-2">Licensed Experts</h3>
                <p className="text-sm opacity-90">Fully qualified pest control technicians</p>
              </div>
              <div className="bg-white/10 p-6 rounded-lg">
                <div className="bg-white/20 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold mb-2">Guaranteed Results</h3>
                <p className="text-sm opacity-90">100% satisfaction guarantee</p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="#quote-form"
                className="bg-green-light text-black px-8 py-3 rounded-lg hover:bg-green-dark hover:text-white transition-colors font-bold text-lg"
              >
                Book Service Online
              </Link>
              <Link
                href={`tel:${COMPANY_INFO.phone}`}
                className="border-2 border-white text-white px-8 py-3 rounded-lg hover:bg-white hover:text-primary transition-colors font-bold text-lg"
              >
                Call to Book: {COMPANY_INFO.phone}
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Information Summary */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
                Get in Touch
              </h2>
              <p className="text-xl text-gray-600">
                Multiple ways to reach our pest control experts
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-md text-center">
                <div className="bg-green-light/10 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-green-dark" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-primary mb-2">Phone</h3>
                <p className="text-gray-600 mb-3">Call us anytime</p>
                <Link
                  href={`tel:${COMPANY_INFO.phone}`}
                  className="text-green-dark font-bold hover:underline"
                >
                  {COMPANY_INFO.phone}
                </Link>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md text-center">
                <div className="bg-green-light/10 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-green-dark" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-primary mb-2">Email</h3>
                <p className="text-gray-600 mb-3">Send us a message</p>
                <Link
                  href={`mailto:${COMPANY_INFO.email}`}
                  className="text-green-dark font-bold hover:underline break-all"
                >
                  {COMPANY_INFO.email}
                </Link>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md text-center">
                <div className="bg-green-light/10 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-green-dark" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-primary mb-2">Location</h3>
                <p className="text-gray-600 mb-3">Service area</p>
                <p className="text-green-dark font-bold">Victoria, Australia</p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md text-center">
                <div className="bg-green-light/10 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-green-dark" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-primary mb-2">Hours</h3>
                <p className="text-gray-600 mb-3">We're available</p>
                <p className="text-green-dark font-bold">24/7</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

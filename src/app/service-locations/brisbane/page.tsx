import Link from 'next/link';
import { COMPANY_INFO } from '@/components/lib/constants';

export default function BrisbaneServicePage() {
  const serviceAreas = [
    'Brisbane CBD', 'Redbank South', 'Redbank Plains', 'North Lakes', 'Ipswich',
    'Springwood', 'Gold Coast', 'Tweed Heads', 'Logan', 'Caboolture'
  ];

  const services = [
    {
      name: 'Termite Inspection & Treatment',
      description: 'Specialized termite control for Queensland\'s high-risk termite zones.',
      icon: '🐛'
    },
    {
      name: 'General Pest Control',
      description: 'Comprehensive treatment for Brisbane\'s tropical pest challenges.',
      icon: '🕷️'
    },
    {
      name: 'Commercial Pest Management',
      description: 'Professional solutions for Queensland businesses and tourism industry.',
      icon: '🏢'
    },
    {
      name: 'Emergency Pest Control',
      description: 'Rapid response for urgent pest situations across Brisbane region.',
      icon: '🚨'
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
            <Link href="/service-locations" className="text-green-light hover:underline">Service Locations</Link>
            <span className="text-gray-500">/</span>
            <span className="text-gray-700">Brisbane</span>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary via-secondary to-nav-dark text-white py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Pest Control
              <span className="block text-green-light mt-2">Brisbane</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
              Expert pest control services across Brisbane, Redbank South, North Lakes, Ipswich, 
              Springwood, and Gold Coast. Specialized solutions for Queensland's tropical climate.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm md:text-base">
              <span className="bg-green-light text-black px-4 py-2 rounded-full font-medium">Same-Day Service</span>
              <span className="bg-green-light text-black px-4 py-2 rounded-full font-medium">Licensed Technicians</span>
              <span className="bg-green-light text-black px-4 py-2 rounded-full font-medium">7-Day Availability</span>
            </div>
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-8 text-center">
              Brisbane Service Areas
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-4 mb-12">
              {serviceAreas.map((area, index) => (
                <div key={index} className="bg-white p-4 rounded-lg shadow-sm border border-gray-200 text-center">
                  <span className="text-gray-700 font-medium">{area}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-12 text-center">
              Our Brisbane Services
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              {services.map((service, index) => (
                <div key={index} className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
                  <div className="flex items-start">
                    <span className="text-3xl mr-4">{service.icon}</span>
                    <div>
                      <h3 className="text-xl font-bold text-primary mb-2">{service.name}</h3>
                      <p className="text-gray-600">{service.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Local Information */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-8 text-center">
              Brisbane Pest Control Expertise
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
                <h3 className="text-xl font-bold text-primary mb-4">Common Brisbane Pests</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Subterranean Termites</li>
                  <li>• American Cockroaches</li>
                  <li>• Huntsman Spiders</li>
                  <li>• Green Head Ants</li>
                  <li>• Paper Wasps</li>
                  <li>• Fruit Flies</li>
                </ul>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
                <h3 className="text-xl font-bold text-primary mb-4">Why Choose T47 Brisbane</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Tropical climate specialists</li>
                  <li>• Humidity-resistant treatments</li>
                  <li>• Gold Coast coverage</li>
                  <li>• Tourism industry expertise</li>
                  <li>• Free follow-up visits</li>
                  <li>• Storm season preparation</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-gradient-to-r from-green-light to-green-dark text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Need Pest Control in Brisbane?
            </h2>
            <p className="text-xl mb-8">
              Contact our Brisbane team for immediate assistance and professional pest control solutions.
            </p>
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="bg-white/10 p-6 rounded-lg">
                <h3 className="text-lg font-bold mb-2">📞 Call Brisbane</h3>
                <p className="text-sm mb-3">Speak with our local experts</p>
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
                  href={`mailto:${COMPANY_INFO.email}`}
                  className="text-white font-bold hover:underline"
                >
                  {COMPANY_INFO.email}
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
                href="/contact"
                className="bg-white text-green-dark px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors font-bold text-lg"
              >
                Book Service Now
              </Link>
              <Link
                href="/residential"
                className="border-2 border-white text-white px-8 py-3 rounded-lg hover:bg-white hover:text-green-dark transition-colors font-bold text-lg"
              >
                View Services
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

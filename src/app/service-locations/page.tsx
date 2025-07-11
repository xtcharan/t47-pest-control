import Link from 'next/link';
import Image from 'next/image';
import { COMPANY_INFO } from '@/components/lib/constants';

export default function ServiceLocationsPage() {
  const locations = [
    {
      id: 'adelaide',
      name: 'Adelaide',
      image: '/images/locations/adelaide.jpg',
      areas: 'Adelaide, Tea Tree Gully, Torrens Park, Blackwood, Glenelg, Salisbury and Edinburgh, south to Victor Harbor, north to Barossa Valley, east to Mount Pleasant.',
      slug: 'adelaide'
    },
    {
      id: 'albury',
      name: 'Albury',
      image: '/images/locations/albury.jpg',
      areas: 'Albury, Wodonga, Wagga Wagga, Orange, Shepparton, Dubbo, Griffith.',
      slug: 'albury'
    },
    {
      id: 'brisbane',
      name: 'Brisbane',
      image: '/images/locations/brisbane.jpg',
      areas: 'Brisbane, Redbank South, Redbank Plains, North Lakes, Ipswich, Springwood, Gold Coast to the Tweed Heads border, northern New South Wales (NSW).',
      slug: 'brisbane'
    },
    {
      id: 'cairns',
      name: 'Cairns',
      image: '/images/locations/cairns.jpg',
      areas: 'Cairns, Port Douglas, Palm Cove, Gordonvale, Mareeba.',
      slug: 'cairns'
    },
    {
      id: 'canberra',
      name: 'Canberra',
      image: '/images/locations/canberra.jpg',
      areas: 'Canberra, Queanbeyan, Belconnen, Fyshwick, Deakin, Barton.',
      slug: 'canberra'
    },
    {
      id: 'darling-downs',
      name: 'Darling Downs',
      image: '/images/locations/darling-downs.jpg',
      areas: 'Darling Downs, surrounding areas of Goondiwindi, St George, Warwick, Moree.',
      slug: 'darling-downs'
    },
    {
      id: 'darwin',
      name: 'Darwin',
      image: '/images/locations/darwin.jpg',
      areas: 'Darwin, Berrimah, Casuarina, Palmerston, Katherine.',
      slug: 'darwin'
    },
    {
      id: 'hobart',
      name: 'Hobart',
      image: '/images/locations/hobart.jpg',
      areas: 'Hobart, Launceston, Devonport, Burnie.',
      slug: 'hobart'
    },
    {
      id: 'melbourne',
      name: 'Melbourne',
      image: '/images/locations/melbourne.jpg',
      areas: 'Melbourne, Dandenong, Frankston, Werribee, Geelong.',
      slug: 'melbourne'
    },
    {
      id: 'mackay',
      name: 'Mackay',
      image: '/images/locations/mackay.jpg',
      areas: 'Mackay, Airlie Beach, Cannonvale Beach, Proserpine, Bowen, Moranbah.',
      slug: 'mackay'
    },
    {
      id: 'newcastle',
      name: 'Newcastle',
      image: '/images/locations/newcastle.jpg',
      areas: 'Newcastle, Lake Macquarie, Maitland, Cessnock, Macquarie, Hunter Valley, Port Stephens, Mid North Coast, New England.',
      slug: 'newcastle'
    },
    {
      id: 'perth',
      name: 'Perth',
      image: '/images/locations/perth.jpg',
      areas: 'Perth, Fremantle, Subiaco, Osborne Park, Kalgoorlie, Joondalup, Midland, south-west WA including Mandurah, Busselton, Margaret River, and the south-west region, Pilbara.',
      slug: 'perth'
    },
    {
      id: 'rockhampton',
      name: 'Rockhampton',
      image: '/images/locations/rockhampton.jpg',
      areas: 'Rockhampton, Gladstone, Yeppoon, Mackay Emerald, Airlie Beach.',
      slug: 'rockhampton'
    },
    {
      id: 'sydney',
      name: 'Sydney',
      image: '/images/locations/sydney.jpg',
      areas: 'Sydney, Sutherland Shire, Northern Beaches, Western Sydney, Blue Mountains.',
      slug: 'sydney'
    },
    {
      id: 'townsville',
      name: 'Townsville',
      image: '/images/locations/townsville.jpg',
      areas: 'Townsville, Charters Towers, Ingham, Ayr.',
      slug: 'townsville'
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
            <span className="text-gray-700">Service Locations</span>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary via-secondary to-nav-dark text-white py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              T47 Pest Control
              <span className="block text-green-light mt-2">Service Locations</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
              Professional pest control services across Australia. Find your local T47 expert 
              for same-day service and comprehensive pest management solutions.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm md:text-base">
              <span className="bg-green-light text-black px-4 py-2 rounded-full font-medium">Same-Day Service</span>
              <span className="bg-green-light text-black px-4 py-2 rounded-full font-medium">Licensed Technicians</span>
              <span className="bg-green-light text-black px-4 py-2 rounded-full font-medium">7-Day Availability</span>
              <span className="bg-green-light text-black px-4 py-2 rounded-full font-medium">Eco-Friendly Methods</span>
            </div>
          </div>
        </div>
      </section>

      {/* Service Areas Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Find T47 Pest Control Near You
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We provide comprehensive pest control services across major Australian cities and regional areas. 
              Select your location to learn more about our local services.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {locations.map((location) => (
              <div key={location.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <div className="relative h-48">
                  <div className="w-full h-full bg-gradient-to-r from-green-light to-green-dark flex items-center justify-center">
                    <span className="text-white text-2xl font-bold">{location.name}</span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-primary mb-3">{location.name}</h3>
                  <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                    {location.areas}
                  </p>
                  <Link
                    href={`/service-locations/${location.slug}`}
                    className="inline-block bg-green-light text-black px-6 py-2 rounded-lg hover:bg-green-dark hover:text-white transition-colors font-medium text-sm"
                  >
                    Service Details
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Coverage Map Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
              Australia-Wide Coverage
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              From major metropolitan areas to regional centers, T47 Pest Control provides 
              professional pest management services across Australia.
            </p>
            
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="text-2xl font-bold text-primary mb-4">Service Coverage</h3>
                  <ul className="space-y-3 text-left">
                    <li className="flex items-start">
                      <span className="text-green-light mr-3">•</span>
                      <span className="text-gray-700">15+ Major Cities Covered</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-light mr-3">•</span>
                      <span className="text-gray-700">Regional and Rural Areas</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-light mr-3">•</span>
                      <span className="text-gray-700">Same-Day Emergency Service</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-light mr-3">•</span>
                      <span className="text-gray-700">Licensed Local Technicians</span>
                    </li>
                  </ul>
                </div>
                <div className="bg-gradient-to-r from-green-light to-green-dark p-6 rounded-lg text-white">
                  <h4 className="text-xl font-bold mb-3">Need Service Outside These Areas?</h4>
                  <p className="mb-4">
                    We're expanding our coverage regularly. Contact us to discuss service 
                    availability in your area.
                  </p>
                  <Link
                    href="/contact"
                    className="bg-white text-green-dark px-6 py-2 rounded-lg hover:bg-gray-100 transition-colors font-medium"
                  >
                    Contact Us
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready for Professional Pest Control?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Contact your local T47 Pest Control team today for same-day service 
            and comprehensive pest management solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-green-light text-black px-8 py-3 rounded-lg hover:bg-green-dark hover:text-white transition-colors font-bold text-lg"
            >
              Get Free Quote
            </Link>
            <Link
              href="tel:+61434300216"
              className="border-2 border-white text-white px-8 py-3 rounded-lg hover:bg-white hover:text-primary transition-colors font-bold text-lg"
            >
              Call Now: {COMPANY_INFO.phone}
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

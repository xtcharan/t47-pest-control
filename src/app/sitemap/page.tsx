import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Sitemap | T47 Pest Control",
  description: "Complete sitemap of T47 Pest Control website. Find all our pages including residential services, commercial services, termite solutions, and more.",
  robots: "index, follow",
};

export default function SitemapPage() {
  const siteStructure = {
    "Main Pages": [
      { name: "Home", href: "/" },
      { name: "About Us", href: "/about" },
      { name: "Contact", href: "/contact" },
      { name: "Blog", href: "/blog" },
      { name: "FAQ", href: "/faq" },
    ],
    "Residential Services": [
      { name: "Residential Pest Control", href: "/residential" },
      { name: "Ant Control", href: "/residential/ants" },
      { name: "Bed Bug Control", href: "/residential/bed-bugs" },
      { name: "Bee Control", href: "/residential/bees" },
      { name: "Bird Control", href: "/residential/bird-control" },
      { name: "Cockroach Control", href: "/residential/cockroaches" },
      { name: "Flea Control", href: "/residential/fleas" },
      { name: "Fly Control", href: "/residential/flies" },
      { name: "Mice Control", href: "/residential/mice" },
      { name: "Mosquito Control", href: "/residential/mosquitoes" },
      { name: "Moth Control", href: "/residential/moths" },
      { name: "Possum Control", href: "/residential/possums" },
      { name: "Rat Control", href: "/residential/rats" },
      { name: "Rodent Control", href: "/residential/rodents" },
      { name: "Silverfish Control", href: "/residential/silverfish" },
      { name: "Spider Control", href: "/residential/spiders" },
      { name: "Termite Control", href: "/residential/termites" },
      { name: "Wasp Control", href: "/residential/wasps" },
      { name: "Pest Inspections", href: "/residential/pest-inspections" },
      { name: "Termite Inspections", href: "/residential/termite-inspections" },
      { name: "Termite Prevention", href: "/residential/termite-prevention" },
      { name: "Termite Damage Repair", href: "/residential/termite-damage-repair" },
    ],
    "Commercial Services": [
      { name: "Commercial Pest Control", href: "/commercial" },
      { name: "Childcare Centers", href: "/commercial/childcare" },
      { name: "Construction Sites", href: "/commercial/construction-sites" },
      { name: "Elderly Care Facilities", href: "/commercial/elderly-care" },
      { name: "Food Processing", href: "/commercial/food-processing" },
      { name: "Gym & Fitness Centers", href: "/commercial/gym-fitness" },
      { name: "Hospitals", href: "/commercial/hospitals" },
      { name: "Hotels", href: "/commercial/hotels" },
      { name: "IT Centers", href: "/commercial/it-centers" },
      { name: "Offices", href: "/commercial/offices" },
      { name: "Restaurants", href: "/commercial/restaurants" },
      { name: "Retail Stores", href: "/commercial/retail" },
      { name: "Schools", href: "/commercial/schools" },
      { name: "Warehouses", href: "/commercial/warehouses" },
    ],
    "Termite Solutions": [
      { name: "Termite Solutions", href: "/termite-solutions" },
      { name: "Annual Termite Treatment", href: "/termite-solutions/annual" },
      { name: "Business Termite Control", href: "/termite-solutions/business" },
      { name: "Termite Damage Repair", href: "/termite-solutions/damage-repair" },
      { name: "Home Termite Protection", href: "/termite-solutions/homes" },
      { name: "Termite Inspection", href: "/termite-solutions/inspection" },
      { name: "Pre-Purchase Inspection", href: "/termite-solutions/pre-purchase" },
      { name: "Termite Prevention", href: "/termite-solutions/prevention" },
      { name: "Termite Treatment", href: "/termite-solutions/treatment" },
    ],
    "Service Locations": [
      { name: "Local Branches", href: "/local-branches" },
      { name: "Brisbane", href: "/local-branches/brisbane" },
      { name: "Melbourne", href: "/local-branches/melbourne" },
      { name: "Sydney", href: "/local-branches/sydney" },
      { name: "Service Locations", href: "/service-locations" },
    ],
    "Legal & Support": [
      { name: "Privacy Policy", href: "/privacy-policy" },
      { name: "Terms of Service", href: "/terms-of-service" },
    ],
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Sitemap</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Complete navigation guide to all pages on T47 Pest Control website. 
            Find the information you need quickly and easily.
          </p>
        </div>

        {/* Sitemap Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {Object.entries(siteStructure).map(([category, links]) => (
            <div key={category} className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-4 border-b border-gray-200 pb-2">
                {category}
              </h2>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-blue-600 hover:text-blue-800 hover:underline transition-colors duration-200"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Additional Information */}
        <div className="mt-12 bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Need Help?</h2>
          <p className="text-gray-600 mb-4">
            Can't find what you're looking for? Our team is here to help you with any questions 
            about our pest control services.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-6 py-3 bg-green-600 text-white font-medium rounded-lg hover:bg-green-700 transition-colors duration-200"
            >
              Contact Us
            </Link>
            <Link
              href="/faq"
              className="inline-flex items-center justify-center px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors duration-200"
            >
              View FAQ
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

"use client";

import Image from 'next/image';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { COMPANY_INFO } from '../lib/constants';

export default function Footer() {
  const [openSection, setOpenSection] = useState<string | null>(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Check if we're on the client side
    if (typeof window !== 'undefined') {
      // Set initial state
      setIsMobile(window.innerWidth < 768);

      // Add event listener for window resize
      const handleResize = () => {
        setIsMobile(window.innerWidth < 768);
      };

      window.addEventListener('resize', handleResize);

      // Clean up event listener
      return () => {
        window.removeEventListener('resize', handleResize);
      };
    }
  }, []);

  const toggleSection = (section: string) => {
    if (openSection === section) {
      setOpenSection(null);
    } else {
      setOpenSection(section);
    }
  };

  return (
    <footer className="bg-gray-900 text-white pt-10 pb-6">
      <div className="container mx-auto px-4">
        {/* Top section with logo, company name, and social media */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          {/* Logo and company name */}
          <div className="flex flex-col md:flex-row items-center mb-6 md:mb-0">
            <div className="mr-4">
              <Image
                src="/logo.png"
                alt="T47 Pest Control Logo"
                width={80}
                height={80}
                className="object-contain"
                style={{ width: '80px', height: '80px' }}
              />
            </div>
            <div className="text-center md:text-left">
              <h2 className="text-2xl font-bold t47-header-text !text-white">{COMPANY_INFO.name}</h2>
              <p className="text-sm text-gray-400">{COMPANY_INFO.tagline}</p>
            </div>
          </div>

          {/* Social media icons */}
          <div className="flex space-x-5">
            <a href={COMPANY_INFO.social.facebook} target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="text-gray-400 hover:text-white transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
              </svg>
            </a>
            <a href={COMPANY_INFO.social.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="text-gray-400 hover:text-white transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
              </svg>
            </a>
            <a href={COMPANY_INFO.social.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="text-gray-400 hover:text-white transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
            </a>
            <a href={COMPANY_INFO.social.twitter} target="_blank" rel="noopener noreferrer" aria-label="X" className="text-gray-400 hover:text-white transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
            </a>
            <a href={COMPANY_INFO.social.youtube} target="_blank" rel="noopener noreferrer" aria-label="YouTube" className="text-gray-400 hover:text-white transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 24 24" fill="currentColor">
                <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" />
              </svg>
            </a>
          </div>
        </div>

        {/* Main footer content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {/* Contact information */}
          <div>
            <h3 className="text-lg font-semibold mb-3">Contact Us</h3>
            <ul className="space-y-2">
              <li className="flex items-start">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 mt-0.5 text-red-600" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                </svg>
                <span>Victoria, Australia</span>
              </li>
              <li className="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-red-600" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
                <span>{COMPANY_INFO.phone}</span>
              </li>
              <li className="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-red-600" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </svg>
                <span>{COMPANY_INFO.email}</span>
              </li>
            </ul>
          </div>

          {/* Navigation Links */}
          <div>
            <div className="flex justify-between items-center mb-3 md:block">
              <h3 className="text-lg font-semibold">Quick Links</h3>
              <button
                type="button"
                className="md:hidden text-xl font-bold text-white w-6 h-6 flex items-center justify-center bg-red-500 rounded-full"
                onClick={() => toggleSection('quickLinks')}
                aria-label="Toggle Quick Links"
              >
                {openSection === 'quickLinks' ? '-' : '+'}
              </button>
            </div>
            <ul className={`space-y-2 ${openSection === 'quickLinks' || !isMobile ? 'block' : 'hidden md:block'}`}>
              <li><Link href="/" className="text-gray-400 hover:text-white transition-colors">Home</Link></li>
              <li><Link href="/residential" className="text-gray-400 hover:text-white transition-colors">Residential</Link></li>
              <li><Link href="/commercial" className="text-gray-400 hover:text-white transition-colors">Commercial</Link></li>
              <li><Link href="/termite-solutions" className="text-gray-400 hover:text-white transition-colors">Termite Solutions</Link></li>
              <li><Link href="/blog" className="text-gray-400 hover:text-white transition-colors">Blog</Link></li>
              <li><Link href="/about" className="text-gray-400 hover:text-white transition-colors">About Us</Link></li>
              <li><Link href="/areas" className="text-gray-400 hover:text-white transition-colors">Service Areas</Link></li>
            </ul>
          </div>

          {/* Service locations */}
          <div>
            <div className="flex justify-between items-center mb-3 md:block">
              <h3 className="text-lg font-semibold">Service Locations</h3>
              <button
                type="button"
                className="md:hidden text-xl font-bold text-white w-6 h-6 flex items-center justify-center bg-red-500 rounded-full"
                onClick={() => toggleSection('locations')}
                aria-label="Toggle Service Locations"
              >
                {openSection === 'locations' ? '-' : '+'}
              </button>
            </div>
            <div className={`grid grid-cols-2 gap-x-2 gap-y-1 ${openSection === 'locations' || !isMobile ? 'block' : 'hidden md:block'}`}>
              <Link href="/areas/melbourne" className="text-gray-400 hover:text-white transition-colors">Melbourne</Link>
              <Link href="/areas/geelong" className="text-gray-400 hover:text-white transition-colors">Sydney</Link>
              <Link href="/areas/ballarat" className="text-gray-400 hover:text-white transition-colors">Brisbane</Link>
              <Link href="/areas/bendigo" className="text-gray-400 hover:text-white transition-colors">Bendigo</Link>
              <Link href="/areas/shepparton" className="text-gray-400 hover:text-white transition-colors">Perth</Link>
              <Link href="/areas/mildura" className="text-gray-400 hover:text-white transition-colors">Adelaide</Link>
              <Link href="/areas/warrnambool" className="text-gray-400 hover:text-white transition-colors">Canberra</Link>
              <Link href="/areas/wodonga" className="text-gray-400 hover:text-white transition-colors">Wodonga</Link>
            </div>
          </div>

          {/* Services */}
          <div>
            <div className="flex justify-between items-center mb-3 md:block">
              <h3 className="text-lg font-semibold">Our Services</h3>
              <button
                type="button"
                className="md:hidden text-xl font-bold text-white w-6 h-6 flex items-center justify-center bg-red-500 rounded-full"
                onClick={() => toggleSection('services')}
                aria-label="Toggle Our Services"
              >
                {openSection === 'services' ? '-' : '+'}
              </button>
            </div>
            <ul className={`space-y-2 ${openSection === 'services' || !isMobile ? 'block' : 'hidden md:block'}`}>
              <li><Link href="/services/general-pest-control" className="text-gray-400 hover:text-white transition-colors">General Pest Control</Link></li>
              <li><Link href="/services/termite-control" className="text-gray-400 hover:text-white transition-colors">Termite Control</Link></li>
              <li><Link href="/services/cockroach-control" className="text-gray-400 hover:text-white transition-colors">Cockroach Control</Link></li>
              <li><Link href="/services/rodent-control" className="text-gray-400 hover:text-white transition-colors">Rodent Control</Link></li>
              <li><Link href="/services/spider-control" className="text-gray-400 hover:text-white transition-colors">Spider Control</Link></li>
              <li><Link href="/services/commercial" className="text-gray-400 hover:text-white transition-colors">Commercial Services</Link></li>
            </ul>
          </div>
        </div>

        {/* Red divider */}
        <div className="h-0.5 bg-red-600 mb-6"></div>

        {/* Bottom section with copyright and links */}
        <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
          <div className="mb-3 md:mb-0">
            <p>&copy; {new Date().getFullYear()} {COMPANY_INFO.name}. All rights reserved.</p>
          </div>
          <div className="flex flex-wrap justify-center gap-3 md:gap-5">
            <Link href="/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="/terms-of-service" className="hover:text-white transition-colors">Terms of Service</Link>
            <Link href="/sitemap" className="hover:text-white transition-colors">Sitemap</Link>
            <Link href="/contact" className="hover:text-white transition-colors">Contact Us</Link>
            <Link href="/careers" className="hover:text-white transition-colors">About Us</Link>
            <Link href="/faqs" className="hover:text-white transition-colors">FAQs</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

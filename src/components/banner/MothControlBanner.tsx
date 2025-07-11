"use client";

import { COMPANY_INFO } from '../lib/constants';

export default function MothControlBanner() {
  return (
    <section className="bg-gradient-to-r from-green-light to-green-dark py-6 relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('/pattern-light.svg')] opacity-10"></div>

      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="text-white text-center md:text-left mb-4 md:mb-0">
            <h2 className="text-2xl md:text-3xl font-bold">Professional Moth Control Services</h2>
            <p className="text-white/80 mt-1">Protect your clothing, food, and property from moth damage</p>
          </div>

          <div className="flex flex-col sm:flex-row gap-3">
            <a href={`tel:${COMPANY_INFO.phone}`} className="modern-button bg-white text-green-dark hover:bg-gray-100 transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
              </svg>
              Call Now
            </a>
            <a href="/contact" className="modern-button bg-transparent border-2 border-white text-white hover:bg-white/10 transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M18 5v8a2 2 0 01-2 2h-5l-5 4v-4H4a2 2 0 01-2-2V5a2 2 0 012-2h12a2 2 0 012 2zM7 8H5v2h2V8zm2 0h2v2H9V8zm6 0h-2v2h2V8z" clipRule="evenodd" />
              </svg>
              Get a Quote
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

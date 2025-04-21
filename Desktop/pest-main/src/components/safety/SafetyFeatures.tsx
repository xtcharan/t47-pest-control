"use client";
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';

export default function SafetyFeatures() {
  // Refs for scroll animations
  const section1Ref = useRef<HTMLDivElement>(null);
  const section2Ref = useRef<HTMLDivElement>(null);
  const section3Ref = useRef<HTMLDivElement>(null);

  // State for animation pausing on hover
  const [isPaused, setIsPaused] = useState({
    section1: false,
    section2: false,
    section3: false
  });

  // Handle scroll animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.remove('safety-section-hidden');
            entry.target.classList.add('safety-section-visible', 'animate-fade-in');

            // Add appropriate animation-play-state class based on hover state
            if (entry.target === section1Ref.current && isPaused.section1) {
              entry.target.classList.add('paused');
            } else if (entry.target === section2Ref.current && isPaused.section2) {
              entry.target.classList.add('paused');
            } else if (entry.target === section3Ref.current && isPaused.section3) {
              entry.target.classList.add('paused');
            } else {
              entry.target.classList.add('running');
            }
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -100px 0px' }
    );

    // Store current ref values to use in cleanup function
    const section1 = section1Ref.current;
    const section2 = section2Ref.current;
    const section3 = section3Ref.current;

    // Observe all section refs
    if (section1) observer.observe(section1);
    if (section2) observer.observe(section2);
    if (section3) observer.observe(section3);

    return () => {
      if (section1) observer.unobserve(section1);
      if (section2) observer.unobserve(section2);
      if (section3) observer.unobserve(section3);
    };
  }, [isPaused]);

  return (
    <section className="py-16 bg-white relative" id="safety-features">
      {/* Background pattern - using a subtle dot pattern */}
      <div className="absolute inset-0 opacity-5 bg-[url('/images/safety/dot-pattern.svg')] bg-[length:20px_20px]"></div>

      {/* Structured data for SEO */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Service",
          "name": "T47 Pest Control Services",
          "description": "Safe, eco-friendly pest control services for homes and businesses in Victoria",
          "provider": {
            "@type": "LocalBusiness",
            "name": "T47 Pest Control",
            "telephone": "08 8334 1000",
            "areaServed": "Victoria, Australia"
          },
          "serviceType": "Pest Control"
        })
      }} />

      <div className="container mx-auto px-4 max-w-7xl">
        {/* First Panel - Safe For Your Home & Business */}
        <div
          ref={section1Ref}
          className="flex flex-col md:flex-row items-center mb-16 bg-white rounded-lg overflow-hidden shadow-xl transition-all duration-500 ease-in-out hover:shadow-2xl safety-section-hidden"
          onMouseEnter={() => {
            setIsPaused({...isPaused, section1: true});
            if (section1Ref.current) {
              section1Ref.current.classList.add('paused');
              section1Ref.current.classList.remove('running');
            }
          }}
          onMouseLeave={() => {
            setIsPaused({...isPaused, section1: false});
            if (section1Ref.current) {
              section1Ref.current.classList.remove('paused');
              section1Ref.current.classList.add('running');
            }
          }}
        >
          <div className="w-full md:w-1/2 p-8">
            <h2 className="text-4xl font-bold text-red-600 mb-4 leading-tight tracking-tight">Safe For Your Home & Business</h2>
            <p className="text-gray-700 mb-6 leading-relaxed text-lg">
              We are committed to ensuring our treatments are <span className="font-semibold">safe for your home and business</span>;
              in fact, our slogan &ldquo;safe for your family and the environment&rdquo; is of paramount
              concern to us and our fully licensed technicians.
            </p>
            <p className="text-gray-700 leading-relaxed text-lg">
              For more information please refer to our
              <Link href="/safety-resources" className="text-red-600 hover:underline mx-1 font-medium">SDS/MSDS online resources</Link>
              or contact us on <a href="tel:0883341000" className="text-red-600 hover:underline font-medium">08 8334 1000</a>.
            </p>
          </div>
          <div className="w-full md:w-1/2 flex justify-center p-6">
            <div className="relative w-72 h-72 md:w-96 md:h-96">
              <div className="absolute inset-0 rounded-full overflow-hidden border-4 border-white shadow-xl transform transition-transform duration-500 hover:scale-105">
                <picture>
                  <source srcSet="/images/technology/optimized/safe-home-business.webp" type="image/webp" />
                  <Image
                    src="/images/technology/optimized/safe-home-business.jpg"
                    alt="Professional pest control technician wearing safety equipment while applying eco-friendly treatments"
                    fill
                    style={{ objectFit: 'cover' }}
                    className="transition-opacity duration-300"
                    priority
                  />
                </picture>
              </div>
            </div>
          </div>
        </div>

        {/* Second Panel - We Use the Latest */}
        <div
          ref={section2Ref}
          className="flex flex-col md:flex-row-reverse items-center mb-16 bg-white rounded-lg overflow-hidden shadow-xl transition-all duration-500 ease-in-out hover:shadow-2xl safety-section-hidden"
          onMouseEnter={() => {
            setIsPaused({...isPaused, section2: true});
            if (section2Ref.current) {
              section2Ref.current.classList.add('paused');
              section2Ref.current.classList.remove('running');
            }
          }}
          onMouseLeave={() => {
            setIsPaused({...isPaused, section2: false});
            if (section2Ref.current) {
              section2Ref.current.classList.remove('paused');
              section2Ref.current.classList.add('running');
            }
          }}
        >
          <div className="w-full md:w-1/2 p-8">
            <h2 className="text-4xl font-bold text-red-600 mb-4 leading-tight tracking-tight">We Use the Latest Technology</h2>
            <p className="text-gray-700 mb-6 leading-relaxed text-lg">
              All T47&apos;s Victoria pest services use only the <span className="font-semibold">latest, safest products and eco-friendly techniques</span> to
              protect homes & businesses from:
            </p>
            <ul className="list-disc pl-6 mb-6 text-gray-700 leading-relaxed text-lg">
              <li>Termites (white ants)</li>
              <li>Spiders, ants & cockroaches</li>
              <li>Rats & mice (rodents)</li>
              <li>Fleas, bird control & millipedes</li>
            </ul>
            <p className="text-gray-700 leading-relaxed text-lg">
              Our comprehensive techniques include baiting, liquid treatment, trapping, inspections, proofing,
              netting & thermal imaging, ensuring superior pest control throughout Victoria with 40 fully qualified technicians.
            </p>
          </div>
          <div className="w-full md:w-1/2 flex justify-center p-6">
            <div className="relative w-72 h-72 md:w-96 md:h-96">
              <div className="absolute inset-0 rounded-full overflow-hidden border-4 border-white shadow-xl transform transition-transform duration-500 hover:scale-105">
                <picture>
                  <source srcSet="/images/technology/optimized/latest-technology.webp" type="image/webp" />
                  <Image
                    src="/images/technology/optimized/latest-technology.jpg"
                    alt="Advanced pest control equipment and eco-friendly products used by T47 technicians"
                    fill
                    style={{ objectFit: 'cover' }}
                    className="transition-opacity duration-300"
                  />
                </picture>
              </div>
            </div>
          </div>
        </div>

        {/* Third Panel - Easily Find Us */}
        <div
          ref={section3Ref}
          className="flex flex-col md:flex-row items-center bg-white rounded-lg overflow-hidden shadow-xl transition-all duration-500 ease-in-out hover:shadow-2xl safety-section-hidden"
          onMouseEnter={() => {
            setIsPaused({...isPaused, section3: true});
            if (section3Ref.current) {
              section3Ref.current.classList.add('paused');
              section3Ref.current.classList.remove('running');
            }
          }}
          onMouseLeave={() => {
            setIsPaused({...isPaused, section3: false});
            if (section3Ref.current) {
              section3Ref.current.classList.remove('paused');
              section3Ref.current.classList.add('running');
            }
          }}
        >
          <div className="w-full md:w-1/2 p-8">
            <h2 className="text-4xl font-bold text-red-600 mb-4 leading-tight tracking-tight">Easily Find Us</h2>
            <p className="text-gray-700 mb-6 leading-relaxed text-lg">
              Check our <Link href="/locations" className="text-red-600 hover:underline font-medium">Locations</Link> page
              or simply enter your postcode to find your local T47 Pest Control Branch serving Victoria and surrounding areas.
            </p>
            <p className="text-gray-700 mb-6 leading-relaxed text-lg">
              On our individual pest pages, you&apos;ll find specific information about our various pest exterminator
              services in Victoria as well as helpful prevention tips to keep your property pest-free.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mt-6">
              <Link
                href="/contact"
                className="bg-red-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-red-700 transition-colors text-center"
              >
                Get a Free Quote
              </Link>
              <a
                href="tel:0883341000"
                className="border border-red-600 text-red-600 px-6 py-3 rounded-lg font-medium hover:bg-red-50 transition-colors text-center"
              >
                Call Us: 08 8334 1000
              </a>
            </div>
          </div>
          <div className="w-full md:w-1/2 flex justify-center p-6">
            <div className="relative w-72 h-72 md:w-96 md:h-96">
              <div className="absolute inset-0 rounded-full overflow-hidden border-4 border-white shadow-xl transform transition-transform duration-500 hover:scale-105">
                <picture>
                  <source srcSet="/images/technology/optimized/find-us.webp" type="image/webp" />
                  <Image
                    src="/images/technology/optimized/find-us.jpg"
                    alt="T47 Pest Control service van ready to serve customers across Victoria"
                    fill
                    style={{ objectFit: 'cover' }}
                    className="transition-opacity duration-300"
                  />
                </picture>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Animation classes are now in globals.css */}
    </section>
  );
}


"use client";

import OptimizedImage from '@/components/common/OptimizedImage';
import Link from 'next/link';

export default function SpiderPestControlServices() {
  return (
    <section className="py-16 bg-white relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-red-50/30 rounded-bl-[100px] z-0"></div>
        <div className="absolute bottom-0 left-0 w-1/4 h-1/4 bg-red-50/20 rounded-tr-[100px] z-0"></div>
        <div className="absolute top-1/3 left-10 w-6 h-6 bg-red-100/50 rounded-full z-0"></div>
        <div className="absolute bottom-1/4 right-20 w-4 h-4 bg-red-200/50 rounded-full z-0"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-10">
            <span className="inline-block px-3 py-1 bg-red-600 text-white text-sm font-semibold rounded-full mb-3">
              PROFESSIONAL SPIDER CONTROL SERVICES
            </span>
            <h2 className="text-4xl font-bold mb-4 text-gray-900">
              Effective <span className="text-red-600">Spider Control</span> Solutions
            </h2>
            <div className="w-24 h-1 bg-red-600 mx-auto mb-6"></div>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Protect your family and property from the health risks and damage caused by spiders with our professional spider control services.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="bg-white p-6 rounded-xl shadow-md order-2 md:order-1">
              <p className="text-gray-700 mb-4">
                Even the harmless spiders are unsettling, and they are a common sight across Australia. Whether you're facing a minor spider infestation issue or a larger one, spider pest control services can help make your space more comfortable.
              </p>
              <p className="text-gray-700 mb-4">
                If you have trouble with recurring spider problems, professional help is advised. Our team at T47 knows how important it is to keep your home safe and spider-free. So, we use effective methods to remove spiders and make your home or workplace a clean and hygienic place.
              </p>
              <div className="mt-6">
                <Link href="/contact" className="inline-block bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-8 rounded-full transition-colors">
                  GET A FREE QUOTE ONLINE
                </Link>
              </div>
            </div>

            <div className="relative rounded-xl overflow-hidden shadow-lg h-[300px] md:h-[400px] order-1 md:order-2">
              <OptimizedImage
                src="/spider-extermination.webp"
                fallbackSrc="/spider-extermination.jpg"
                alt="Spider Pest Control Services"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              <div className="absolute bottom-4 left-4 right-4 text-white">
                <h3 className="text-xl font-semibold mb-1">Professional Spider Control</h3>
                <p className="text-sm text-white/90">Safe and effective spider removal for your home or business</p>
              </div>

            </div>
          </div>

          <div className="mt-10 bg-gradient-to-r from-red-500 to-red-700 p-8 rounded-lg text-center text-white">
            <h3 className="text-2xl font-bold mb-4">Ready to Make Your Space Spider-Free?</h3>
            <p className="mb-6 max-w-2xl mx-auto">
              Don't let spiders compromise your comfort and safety. Our professional spider control services provide effective solutions tailored specifically for Australian homes and businesses.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/contact" className="bg-white text-red-700 hover:bg-gray-100 font-bold py-3 px-6 rounded-full transition-colors">
                Book a Treatment
              </Link>
              <Link href="tel:+61434300216" className="bg-transparent border-2 border-white hover:bg-white/10 text-white font-bold py-3 px-6 rounded-full transition-colors">
                Call Us Now
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

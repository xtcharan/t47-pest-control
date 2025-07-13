"use client";

import { useState, useEffect } from 'react';
import Image from 'next/image';
import NewQuoteForm from './NewQuoteForm';
import { COMPANY_INFO } from '../lib/constants';

export default function TermitePreventionHero() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % 3);
    }, 8000); // Slower transitions for better performance
    return () => clearInterval(interval);
  }, []);

  const slides = [
    {
      title: "Advanced Termite Prevention",
      subtitle: "Protect Your Investment Before It's Too Late",
      highlight: "99.9% Success Rate",
      image: "/termite-prevention-hero-1.jpg"
    },
    {
      title: "Smart Barrier Technology",
      subtitle: "Next-Generation Protection Systems",
      highlight: "25-Year Warranty",
      image: "/termite-prevention-hero-2.jpg"
    },
    {
      title: "Eco-Friendly Solutions",
      subtitle: "Safe for Family, Deadly for Termites",
      highlight: "Same-Day Service",
      image: "/termite-prevention-hero-3.jpg"
    }
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-gray-900 via-red-900 to-black">
      {/* Animated Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-gradient-to-r from-red-600/20 to-transparent animate-pulse"></div>
        <div className="absolute top-0 left-0 w-full h-full bg-[url('/dot-pattern.svg')] opacity-30 animate-float"></div>
      </div>

      {/* Dynamic Background Images */}
      <div className="absolute inset-0 z-0">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              currentSlide === index ? 'opacity-30' : 'opacity-0'
            }`}
          >
            <Image
              src={slide.image}
              alt={slide.title}
              fill
              className="object-cover"
              priority={index === 0}
              loading={index === 0 ? "eager" : "lazy"}
              sizes="100vw"
              quality={75}
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-red-900/60 to-black/80"></div>
          </div>
        ))}
      </div>

      {/* Floating Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-32 h-32 bg-red-500/10 rounded-full blur-xl animate-float"></div>
        <div className="absolute bottom-20 right-10 w-48 h-48 bg-red-600/10 rounded-full blur-xl animate-float animate-delay-2s"></div>
        <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-red-400/10 rounded-full blur-xl animate-float animate-delay-4s"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-screen py-20">
          {/* Content Side */}
          <div className={`text-white transform transition-all duration-1000 ${isVisible ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'}`}>
            {/* Premium Badge */}
            <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-red-600 to-red-700 rounded-full text-sm font-bold mb-6 shadow-lg">
              <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
              </svg>
              AUSTRALIA'S #1 TERMITE PREVENTION SPECIALISTS
            </div>

            {/* Dynamic Title */}
            <h1 className="text-5xl lg:text-7xl font-bold mb-6 leading-tight">
              <span className="block text-white">{slides[currentSlide].title}</span>
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-red-600 animate-pulse">
                {slides[currentSlide].subtitle}
              </span>
            </h1>

            {/* Highlight Stats */}
            <div className="flex flex-wrap gap-4 mb-8">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg px-4 py-2 border border-white/20">
                <div className="text-2xl font-bold text-red-400">{slides[currentSlide].highlight}</div>
                <div className="text-sm text-gray-300">Protection Guarantee</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg px-4 py-2 border border-white/20">
                <div className="text-2xl font-bold text-red-400">24/7</div>
                <div className="text-sm text-gray-300">Emergency Response</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg px-4 py-2 border border-white/20">
                <div className="text-2xl font-bold text-red-400">$0</div>
                <div className="text-sm text-gray-300">Upfront Costs</div>
              </div>
            </div>

            {/* Description */}
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Don't wait for termites to attack. Our revolutionary prevention systems create an impenetrable barrier around your property using cutting-edge technology and eco-friendly solutions that protect your investment for decades.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <button type="button" className="group relative px-8 py-4 bg-gradient-to-r from-red-600 to-red-700 rounded-full font-bold text-lg overflow-hidden transition-all duration-300 hover:shadow-2xl hover:scale-105">
                <span className="relative z-10">Get Free Prevention Quote</span>
                <div className="absolute inset-0 bg-gradient-to-r from-red-700 to-red-800 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
              </button>
              <a href={`tel:${COMPANY_INFO.phone}`} className="px-8 py-4 border-2 border-white/30 rounded-full font-bold text-lg backdrop-blur-sm hover:bg-white/10 transition-all duration-300 inline-block">
                <span className="flex items-center justify-center">
                  <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"/>
                  </svg>
                  Call {COMPANY_INFO.phone}
                </span>
              </a>
            </div>

            {/* Trust Indicators */}
            <div className="flex items-center gap-6 text-sm text-gray-400">
              <div className="flex items-center">
                <svg className="w-5 h-5 text-green-400 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                </svg>
                Licensed & Insured
              </div>
              <div className="flex items-center">
                <svg className="w-5 h-5 text-green-400 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                </svg>
                Eco-Friendly Solutions
              </div>
              <div className="flex items-center">
                <svg className="w-5 h-5 text-green-400 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                </svg>
                25-Year Warranty
              </div>
            </div>
          </div>

          {/* Quote Form Side */}
          <div className={`transform transition-all duration-1000 delay-300 ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'}`}>
            <div className="bg-white/95 backdrop-blur-lg rounded-2xl shadow-2xl p-8 border border-white/20">
              <div className="text-center mb-6">
              </div>
              <NewQuoteForm />
            </div>
          </div>
        </div>
      </div>

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2 z-20">
        {slides.map((_, index) => (
          <button
            key={index}
            type="button"
            onClick={() => setCurrentSlide(index)}
            aria-label={`Go to slide ${index + 1}`}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              currentSlide === index ? 'bg-red-500 scale-125' : 'bg-white/30 hover:bg-white/50'
            }`}
          />
        ))}
      </div>
    </section>
  );
}

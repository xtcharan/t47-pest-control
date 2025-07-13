"use client";

import { useState, useEffect } from 'react';
import Image from 'next/image';
import NewQuoteForm from './NewQuoteForm';
import { COMPANY_INFO } from '../lib/constants';

export default function TermiteDamageRepairHero() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [damageLevel, setDamageLevel] = useState(0);

  useEffect(() => {
    setIsVisible(true);
    const slideInterval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % 3);
    }, 8000); // Slower for better performance

    const damageInterval = setInterval(() => {
      setDamageLevel((prev) => (prev + 1) % 4);
    }, 6000); // Slower for better performance

    return () => {
      clearInterval(slideInterval);
      clearInterval(damageInterval);
    };
  }, []);

  const slides = [
    {
      title: "Expert Termite Damage Repair",
      subtitle: "Restore Your Property to Perfect Condition",
      highlight: "24/7 Emergency Response",
      image: "/termite-damage-repair-hero-1.jpg"
    },
    {
      title: "Structural Restoration Specialists",
      subtitle: "Complete Timber & Framework Repair",
      highlight: "Insurance Approved",
      image: "/termite-damage-repair-hero-2.jpg"
    },
    {
      title: "Professional Damage Assessment",
      subtitle: "Detailed Reports & Cost Estimates",
      highlight: "Free Assessment",
      image: "/termite-damage-repair-hero-3.jpg"
    }
  ];

  const damageTypes = [
    {
      type: "Surface Damage",
      severity: "Minor",
      color: "text-yellow-500",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
        </svg>
      )
    },
    {
      type: "Structural Damage",
      severity: "Moderate",
      color: "text-orange-500",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      )
    },
    {
      type: "Extensive Damage",
      severity: "Major",
      color: "text-red-500",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
        </svg>
      )
    },
    {
      type: "Critical Damage",
      severity: "Severe",
      color: "text-red-700",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.618 5.984A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016zM12 7v2m0 4v2" />
        </svg>
      )
    }
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-gray-900 via-orange-900 to-red-900">
      {/* Emergency Alert Banner */}
      <div className="absolute top-0 left-0 right-0 bg-red-600 text-white py-2 z-30">
        <div className="container mx-auto px-4 text-center">
          <div className="flex items-center justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2 animate-pulse" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
            </svg>
            <span className="font-semibold">EMERGENCY TERMITE DAMAGE? Call {COMPANY_INFO.phone} for immediate response!</span>
          </div>
        </div>
      </div>

      {/* Animated Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-gradient-to-r from-red-600/20 to-orange-600/20 animate-pulse"></div>
        <div className="absolute top-0 left-0 w-full h-full bg-[url('/dot-pattern.svg')] opacity-30 animate-float"></div>
      </div>

      {/* Dynamic Background Images */}
      <div className="absolute inset-0 z-0">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              currentSlide === index ? 'opacity-40' : 'opacity-0'
            }`}
          >
            <Image
              src={slide.image}
              alt={slide.title}
              fill
              className="object-cover"
              priority={index === 0}
              sizes="100vw"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-red-900/60 to-black/80"></div>
          </div>
        ))}
      </div>

      {/* Floating Damage Indicators */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-32 h-32 bg-red-500/10 rounded-full blur-xl animate-float"></div>
        <div className="absolute bottom-20 right-10 w-48 h-48 bg-orange-600/10 rounded-full blur-xl animate-float animate-delay-2s"></div>
        <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-red-400/10 rounded-full blur-xl animate-float animate-delay-4s"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10 pt-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-screen py-20">
          {/* Content Side */}
          <div className={`text-white transform transition-all duration-1000 ${isVisible ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'}`}>
            {/* Damage Level Indicator */}
            <div className="mb-6">
              <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-red-600 to-orange-600 rounded-full text-sm font-bold shadow-lg">
                <span className="mr-2 inline-flex">{damageTypes[damageLevel].icon}</span>
                {damageTypes[damageLevel].type} - {damageTypes[damageLevel].severity}
              </div>
            </div>

            {/* Dynamic Title */}
            <h1 className="text-5xl lg:text-7xl font-bold mb-6 leading-tight">
              <span className="block text-white">{slides[currentSlide].title}</span>
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-600 animate-pulse">
                {slides[currentSlide].subtitle}
              </span>
            </h1>

            {/* Urgency Stats */}
            <div className="flex flex-wrap gap-4 mb-8">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg px-4 py-2 border border-white/20">
                <div className="text-2xl font-bold text-orange-400">{slides[currentSlide].highlight}</div>
                <div className="text-sm text-gray-300">Available Now</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg px-4 py-2 border border-white/20">
                <div className="text-2xl font-bold text-orange-400">Free</div>
                <div className="text-sm text-gray-300">Damage Assessment</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg px-4 py-2 border border-white/20">
                <div className="text-2xl font-bold text-orange-400">Insurance</div>
                <div className="text-sm text-gray-300">Claims Support</div>
              </div>
            </div>

            {/* Description */}
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Don't let termite damage compromise your property's safety and value. Our certified repair specialists provide comprehensive restoration services using premium materials and proven techniques that exceed Australian building standards.
            </p>

            {/* Damage Assessment Checklist */}
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 mb-8 border border-white/20">
              <h3 className="text-lg font-semibold mb-4 text-orange-300">Immediate Assessment Includes:</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {[
                  "Structural integrity evaluation",
                  "Damage extent mapping",
                  "Safety risk assessment",
                  "Repair cost estimation",
                  "Insurance documentation",
                  "Timeline planning"
                ].map((item, index) => (
                  <div key={index} className="flex items-center text-sm text-gray-300">
                    <svg className="w-4 h-4 text-green-400 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                    </svg>
                    {item}
                  </div>
                ))}
              </div>
            </div>

            {/* Emergency CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <button type="button" className="group relative px-8 py-4 bg-gradient-to-r from-red-600 to-orange-600 rounded-full font-bold text-lg overflow-hidden transition-all duration-300 hover:shadow-2xl hover:scale-105">
                <span className="relative z-10">Emergency Assessment</span>
                <div className="absolute inset-0 bg-gradient-to-r from-red-700 to-orange-700 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
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
                Licensed Builders
              </div>
              <div className="flex items-center">
                <svg className="w-5 h-5 text-green-400 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                </svg>
                Insurance Approved
              </div>
              <div className="flex items-center">
                <svg className="w-5 h-5 text-green-400 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                </svg>
                10-Year Warranty
              </div>
            </div>
          </div>

          {/* Quote Form Side */}
          <div className={`transform transition-all duration-1000 delay-300 ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'}`}>
            <div className="bg-white/95 backdrop-blur-lg rounded-2xl shadow-2xl p-8 border border-white/20">
              <div className="text-center mb-6">
                <div className="inline-flex items-center px-3 py-1 bg-red-100 text-red-700 rounded-full text-sm font-semibold mb-3">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 mr-1 animate-pulse" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                  </svg>
                  EMERGENCY RESPONSE AVAILABLE
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Get Immediate Damage Assessment</h3>
                <p className="text-gray-600">Free evaluation and repair quote within 24 hours</p>
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
              currentSlide === index ? 'bg-orange-500 scale-125' : 'bg-white/30 hover:bg-white/50'
            }`}
          />
        ))}
      </div>
    </section>
  );
}

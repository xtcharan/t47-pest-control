"use client";

import { useState } from 'react';
import Link from 'next/link';

interface GoogleReviewPromptProps {
  googleReviewUrl: string;
  businessName?: string;
  location?: string;
}

export default function GoogleReviewPrompt({ 
  googleReviewUrl, 
  businessName = "T47 Pest Control",
  location = "Adelaide"
}: GoogleReviewPromptProps) {
  const [isHovered, setIsHovered] = useState(false);
  const [showThankYou, setShowThankYou] = useState(false);

  const handleReviewClick = () => {
    // Show thank you message briefly
    setShowThankYou(true);
    setTimeout(() => setShowThankYou(false), 3000);
  };

  return (
    <div className="relative">
      {/* Main Review Prompt Box */}
      <div 
        className={`bg-gradient-to-br from-blue-500 to-blue-700 rounded-2xl shadow-xl p-8 text-white transform transition-all duration-300 ${
          isHovered ? 'scale-105 shadow-2xl' : ''
        } ${showThankYou ? 'ring-4 ring-green-400 ring-opacity-50' : ''}`}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Header with Google logo colors */}
        <div className="text-center mb-6">
          <div className="flex items-center justify-center mb-4">
            <div className="text-4xl mr-3">⭐</div>
            <h3 className="text-2xl md:text-3xl font-bold">
              Love Our Service?
            </h3>
            <div className="text-4xl ml-3">⭐</div>
          </div>
          <p className="text-blue-100 text-lg">
            Help other {location} residents find us by sharing your experience!
          </p>
        </div>

        {/* Google Review Stars */}
        <div className="flex justify-center mb-6">
          <div className="flex space-x-1">
            {[1, 2, 3, 4, 5].map((star) => (
              <div
                key={star}
                className={`text-3xl transition-all duration-200 ${
                  isHovered ? 'animate-pulse' : ''
                }`}
                style={{ animationDelay: `${star * 100}ms` }}
              >
                ⭐
              </div>
            ))}
          </div>
        </div>

        {/* Review prompt text */}
        <div className="text-center mb-8">
          <p className="text-blue-50 text-lg mb-4 leading-relaxed">
            Your review helps us continue providing excellent pest control services to {location} families and businesses.
          </p>
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 mb-6">
            <p className="text-sm text-blue-100 font-medium">
              ✨ Takes less than 2 minutes<br/>
              🏆 Helps local families find trusted pest control<br/>
              💙 Supports our local {location} business
            </p>
          </div>
        </div>

        {/* Call to action button */}
        <div className="text-center">
          <Link
            href={googleReviewUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={handleReviewClick}
            className="inline-flex items-center bg-white text-blue-700 px-8 py-4 rounded-xl font-bold text-lg hover:bg-blue-50 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
          >
            <svg className="w-6 h-6 mr-3" viewBox="0 0 24 24" fill="currentColor">
              <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
              <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
              <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
              <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
            </svg>
            Write a Google Review
          </Link>
        </div>

        {/* Additional incentive */}
        <div className="text-center mt-6">
          <p className="text-blue-200 text-sm">
            🎁 Your feedback helps us improve our {location} pest control services
          </p>
        </div>

        {/* Decorative elements */}
        <div className="absolute -top-2 -right-2 w-8 h-8 bg-yellow-400 rounded-full opacity-20 animate-ping"></div>
        <div className="absolute -bottom-2 -left-2 w-6 h-6 bg-green-400 rounded-full opacity-30 animate-pulse"></div>
      </div>

      {/* Thank you overlay */}
      {showThankYou && (
        <div className="absolute inset-0 bg-green-500 rounded-2xl flex items-center justify-center text-white font-bold text-xl animate-fade-in">
          <div className="text-center">
            <div className="text-4xl mb-2">🙏</div>
            <p>Thank you for your support!</p>
          </div>
        </div>
      )}
    </div>
  );
}

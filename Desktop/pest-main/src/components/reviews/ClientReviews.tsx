"use client";

import { useRef, useState, useEffect } from 'react';
import Image from 'next/image';

// Google logo SVG component
const GoogleLogo = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="none">
    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
  </svg>
);

// Star rating component
const StarRating = ({ rating }: { rating: number }) => {
  return (
    <div className="flex items-center">
      {[...Array(5)].map((_, index) => (
        <svg
          key={index}
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill={index < rating ? "#FBBC05" : "none"}
          stroke={index < rating ? "none" : "#FBBC05"}
          strokeWidth="2"
          className="mr-0.5"
        >
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
        </svg>
      ))}
    </div>
  );
};

// Review card component
interface ReviewCardProps {
  name: string;
  text: string;
  profileColor: string;
  profileInitial: string;
  profileImage?: string;
}

const ReviewCard = ({ name, text, profileColor, profileInitial, profileImage }: ReviewCardProps) => {
  return (
    <div className="min-w-[300px] w-[300px] h-[280px] bg-white rounded-xl shadow-lg p-6 mx-4 flex flex-col review-card modern-card group hover:border-green-light/50 border border-transparent relative">
      {/* Quote icon for decoration */}
      <div className="absolute -top-4 -left-4 w-8 h-8 rounded-full bg-green-light flex items-center justify-center shadow-md">
        <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
        </svg>
      </div>

      <div className="flex items-center mb-4">
        {profileImage ? (
          <div className="w-12 h-12 rounded-full overflow-hidden mr-4 border-2 border-green-light/20 shadow-sm">
            <Image
              src={profileImage}
              alt={`${name}'s profile`}
              width={48}
              height={48}
              className="object-cover"
            />
          </div>
        ) : (
          <div
            className={`w-12 h-12 rounded-full flex items-center justify-center text-white mr-4 shadow-sm ${profileColor}`}
          >
            <span className="text-lg font-medium">{profileInitial}</span>
          </div>
        )}
        <div>
          <h3 className="font-semibold text-gray-800 text-lg group-hover:text-green-dark transition-colors">{name}</h3>
          <div className="flex items-center mt-1">
            <StarRating rating={5} />
            <span className="ml-2 text-xs text-gray-500">5.0</span>
          </div>
        </div>
      </div>

      {/* Decorative divider */}
      <div className="w-full h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent mb-4"></div>

      <p className="text-gray-700 text-sm leading-relaxed mb-4 flex-grow">"{text}"</p>

      <div className="mt-auto pt-2">
        <a
          href="#"
          className="inline-flex items-center bg-gray-50 hover:bg-gray-100 rounded-full px-3 py-1.5 transition-all group-hover:shadow-sm"
        >
          <div className="flex items-center">
            <GoogleLogo />
            <span className="text-xs text-gray-600 ml-1.5 font-medium">Google Review</span>
          </div>
          <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-600 ml-1.5 group-hover:translate-x-0.5 transition-transform">
            <line x1="7" y1="17" x2="17" y2="7"></line>
            <polyline points="7 7 17 7 17 17"></polyline>
          </svg>
        </a>
      </div>
    </div>
  );
};

export default function ClientReviews() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [trackPosition, setTrackPosition] = useState({ x: 0, y: 0 });
  const [autoScrollPaused, setAutoScrollPaused] = useState(false);

  // Add document-level event listeners for better drag handling
  useEffect(() => {
    const handleGlobalMouseUp = () => {
      if (isDragging) {
        setIsDragging(false);
        document.body.style.cursor = '';
        if (scrollContainerRef.current) {
          scrollContainerRef.current.style.cursor = 'grab';
          scrollContainerRef.current.classList.remove('grabbing');
        }
        setTimeout(() => {
          setAutoScrollPaused(false);
          setIsPaused(false);
        }, 1500);
      }
    };

    const handleGlobalMouseMove = (e: MouseEvent) => {
      if (!isDragging || !scrollContainerRef.current) return;

      // Calculate movement distance
      const deltaX = e.clientX - startX;
      const newX = trackPosition.x + deltaX;

      // Apply smooth movement with hardware acceleration
      scrollContainerRef.current.style.transform = `translate3d(${newX}px, 0, 0)`;
      scrollContainerRef.current.style.transition = 'none';
      scrollContainerRef.current.style.willChange = 'transform';

      // Prevent any text selection during drag
      if (window.getSelection) {
        window.getSelection()?.removeAllRanges();
      }
    };

    document.addEventListener('mouseup', handleGlobalMouseUp);
    document.addEventListener('mousemove', handleGlobalMouseMove);

    return () => {
      document.removeEventListener('mouseup', handleGlobalMouseUp);
      document.removeEventListener('mousemove', handleGlobalMouseMove);
    };
  }, [isDragging, startX, trackPosition]);

  // Reviews data
  const reviews = [
    {
      name: "John Smith",
      text: "T47 Pest Control did an amazing job eliminating the cockroach infestation in our home. Professional, thorough, and effective service!",
      profileColor: "profile-red",
      profileInitial: "J",
      profileImage: "/profile1.jpg"
    },
    {
      name: "Sarah Johnson",
      text: "We had a serious termite problem and T47 came to the rescue. Their team was knowledgeable and solved our issue quickly. Highly recommend!",
      profileColor: "profile-blue",
      profileInitial: "S",
      profileImage: "/profile2.jpg"
    },
    {
      name: "Michael Brown",
      text: "Excellent service from T47 Pest Control! They were prompt, professional, and completely eliminated our ant problem. Will definitely use again.",
      profileColor: "profile-green",
      profileInitial: "M",
      profileImage: "/profile3.jpg"
    },
    {
      name: "Emily Wilson",
      text: "I had wasps nesting near my front door and T47 took care of it immediately. Great service, fair pricing, and friendly staff. 5 stars!",
      profileColor: "profile-yellow",
      profileInitial: "E",
      profileImage: "/profile4.jpg"
    },
    {
      name: "David Thompson",
      text: "T47 provided excellent rodent control services for our property. They were thorough, effective, and gave helpful prevention tips. Very satisfied!",
      profileColor: "profile-indigo",
      profileInitial: "D",
      profileImage: "/profile5.jpg"
    },
    {
      name: "Jennifer Lee",
      text: "Had a spider infestation that was quickly resolved by T47 Pest Control. Their team was professional and the results were immediate. Great job!",
      profileColor: "profile-teal",
      profileInitial: "J",
      profileImage: "/profile6.jpg"
    },
    {
      name: "Robert Garcia",
      text: "T47 provided exceptional service for our commercial property. Their preventative pest control plan has kept our building pest-free for months!",
      profileColor: "profile-orange",
      profileInitial: "R",
      profileImage: "/profile7.jpg"
    },
    {
      name: "Lisa Martinez",
      text: "Fantastic service from T47! They eliminated our bed bug problem completely. Professional, thorough, and reasonably priced. Highly recommend!",
      profileColor: "profile-purple",
      profileInitial: "L",
      profileImage: "/profile8.jpg"
    }
  ];

  // Create two sets of reviews for continuous scrolling effect
  const duplicatedReviews = [...reviews, ...reviews];

  // Mouse interaction handlers
  const handleMouseEnter = () => {
    // Pause animation when mouse enters the container
    setIsPaused(true);
  };

  const handleMouseLeave = () => {
    // Resume animation when mouse leaves, but only if not dragging
    if (!isDragging) {
      // Add a small delay before resuming animation for a smoother experience
      setTimeout(() => setIsPaused(false), 500);
    }
  };

  // Improved touch event handlers for mobile devices
  const handleTouchStart = (e: React.TouchEvent) => {
    if (!scrollContainerRef.current) return;

    setIsDragging(true);
    setIsPaused(true);
    setAutoScrollPaused(true);
    setStartX(e.touches[0].clientX);

    // Store the current transform position
    const style = window.getComputedStyle(scrollContainerRef.current);
    const matrix = new WebKitCSSMatrix(style.transform);
    setTrackPosition({ x: matrix.m41, y: matrix.m42 });

    // Add grabbing class for visual feedback
    if (scrollContainerRef.current) {
      scrollContainerRef.current.classList.add('grabbing');
    }
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging || !scrollContainerRef.current) return;

    const deltaX = e.touches[0].clientX - startX;
    const newX = trackPosition.x + deltaX;

    // Apply the new transform directly
    scrollContainerRef.current.style.transform = `translate3d(${newX}px, 0, 0)`;
    scrollContainerRef.current.style.transition = 'none';
    scrollContainerRef.current.style.willChange = 'transform';
  };

  const handleTouchEnd = () => {
    setIsDragging(false);

    // Remove grabbing class
    if (scrollContainerRef.current) {
      scrollContainerRef.current.classList.remove('grabbing');
    }

    setTimeout(() => {
      setAutoScrollPaused(false);
      setIsPaused(false);
    }, 1500);
  };

  // Simplified mouse down handler for reliable dragging
  const handleMouseDown = (e: React.MouseEvent) => {
    if (!scrollContainerRef.current) return;

    // Set dragging state and capture starting position
    setIsDragging(true);
    setStartX(e.clientX);
    setAutoScrollPaused(true); // Ensure auto-scroll stays paused during interaction

    // Store the current scroll position
    let matrix;
    try {
      const transformValue = window.getComputedStyle(scrollContainerRef.current).transform;
      matrix = new WebKitCSSMatrix(transformValue);
    } catch (err) {
      // Fallback for browsers that don't support WebKitCSSMatrix
      matrix = { m41: 0, m42: 0 };
    }
    setTrackPosition({ x: matrix.m41, y: matrix.m42 });

    // Apply styles for dragging
    document.body.style.cursor = 'grabbing';
    if (scrollContainerRef.current) {
      scrollContainerRef.current.style.cursor = 'grabbing';
      scrollContainerRef.current.classList.add('grabbing');
    }

    // Prevent default behavior to avoid text selection during drag
    e.preventDefault();
  };

  // These handlers are now handled by document-level event listeners

  return (
    <section className="py-10 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-gray-100 to-transparent"></div>
      <div className="absolute -top-20 -right-20 w-64 h-64 bg-green-light/5 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-green-light/5 rounded-full blur-3xl"></div>

      {/* Quote marks decoration */}
      <div className="absolute top-20 left-10 text-8xl text-green-light/10 font-serif">"</div>
      <div className="absolute bottom-20 right-10 text-8xl text-green-light/10 font-serif">"</div>

      {/* Section header - not in a container to allow full width below */}
      <div className="text-center mb-8 px-4">
        <span className="inline-block px-3 py-1 bg-green-light/10 text-green-dark text-sm font-semibold rounded-full mb-3">
          TESTIMONIALS
        </span>
        <h2 className="text-4xl font-bold mb-4 text-gray-900">
          What Our <span className="text-green-dark">Clients</span> Say
        </h2>
        <div className="w-24 h-1 bg-green-light mx-auto mb-6"></div>

        <div className="flex items-center justify-center mb-4">
          <div className="bg-white px-4 py-2 rounded-full shadow-sm flex items-center">
            <StarRating rating={5} />
            <span className="ml-2 text-gray-700 font-medium">5.0 Rating on Google</span>
            <span className="mx-2 text-gray-300">|</span>
            <span className="text-green-dark font-medium">100+ Reviews</span>
          </div>
        </div>

        <p className="text-gray-600 max-w-2xl mx-auto">
          Our customers trust us to deliver exceptional pest control services. Here's what they have to say about their experiences with T47 Pest Control.
        </p>
      </div>

      {/* Full width review scroll section */}
      <div className="review-scroll-wrapper">
        {/* First row - scrolls left to right */}
        <div
          className={`review-scroll-track animate-left ${isPaused || autoScrollPaused ? 'paused' : ''} ${isDragging ? 'grabbing' : ''}`}
          ref={scrollContainerRef}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          onMouseDown={handleMouseDown}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          {duplicatedReviews.map((review, index) => (
            <ReviewCard
              key={index}
              name={review.name}
              text={review.text}
              profileColor={review.profileColor}
              profileInitial={review.profileInitial}
              profileImage={review.profileImage}
            />
          ))}
        </div>
      </div>

      {/* Call to action */}
      <div className="text-center mt-10">
        <a href="#" className="inline-flex items-center text-green-dark hover:text-green-light transition-colors font-medium">
          <span>Read more reviews</span>
          <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
        </a>
      </div>
    </section>
  );
}

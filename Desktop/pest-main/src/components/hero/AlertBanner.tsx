"use client";

import { useEffect, useState } from "react";

export default function AlertBanner() {
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const header = document.querySelector("header");
      const navBar = document.querySelector("nav");
      const navHeight = navBar?.offsetHeight || 48;
      const headerHeight = (header?.offsetHeight || 200) - navHeight;

      setIsSticky(window.scrollY > headerHeight);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`fixed left-0 right-0 z-[45] bg-gradient-to-r from-[#8BC34A] to-[#4CAF50] text-black py-2 transition-all duration-300 ease-in-out
        ${isSticky ? "top-0 shadow-lg" : "-top-full opacity-0"}
      `}
    >
      <div className="container mx-auto px-4 flex justify-center items-center">
        <div className="flex items-center space-x-4">
          <a href="tel:+61434300216" className="group relative flex items-center bg-gradient-to-r from-blue-500 to-blue-700 hover:from-blue-600 hover:to-blue-800 text-white font-bold py-2 px-4 rounded-full transition-all duration-300 overflow-hidden animate-pulse hover:animate-none">
            <div className="absolute inset-0 rounded-full border-2 border-white/30 animate-ping-slow opacity-75"></div>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white mr-2 animate-bounce-gentle" viewBox="0 0 20 20" fill="currentColor">
              <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
            </svg>
            <span className="relative z-10">+61434300216</span>
          </a>
          <button type="button" className="relative bg-gradient-to-r from-blue-500 to-blue-700 hover:from-blue-600 hover:to-blue-800 text-white py-2 px-4 rounded-full transition-all duration-300 text-sm font-medium group overflow-hidden">
            <div className="absolute inset-0 rounded-full border-2 border-white/30 group-hover:animate-ping-slow opacity-0 group-hover:opacity-75"></div>
            <span className="relative z-10">Request a Call Back</span>
          </button>
        </div>
      </div>
    </div>
  );
}
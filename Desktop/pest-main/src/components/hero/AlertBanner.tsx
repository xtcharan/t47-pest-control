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
      <div className="container mx-auto px-4 flex justify-between items-center">
        <p className="text-sm md:text-base font-medium text-white">
          Pest Alert - Termite Swarming Season. Dont Wait Until Its Too Late!
        </p>
        <div className="flex items-center space-x-4">
          <div className="flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white mr-2" viewBox="0 0 20 20" fill="currentColor">
              <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
            </svg>
            <span className="text-white font-bold">+61434300216</span>
          </div>
          <button type="button" className="bg-blue-600 hover:bg-blue-700 text-white py-1 px-3 rounded-md transition-colors text-sm font-medium">
            Request a Call Back
          </button>
        </div>
      </div>
    </div>
  );
}
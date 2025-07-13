"use client";

import { useEffect, useState, useMemo, useRef } from "react";
import Link from "next/link";
import { DROPDOWN_MENU_ITEMS, COMPANY_INFO } from "../lib/constants";
import NavigationBar from "../layout/header/NavigationBar";
import DropdownMenu from "../layout/header/DropdownMenu";
import { useHoverPosition } from "../hooks/useHoverPosition";
import styles from "../layout/header/MainHeader.module.css";

export default function AlertBanner() {
  const [isSticky, setIsSticky] = useState(false);
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  // Mobile-specific dropdown state for alert banner
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const navRef = useRef<HTMLElement>(null);
  const menuItemRefs = useRef<{ [key: string]: HTMLDivElement | null }>({});

  // Mobile-specific dropdown handlers
  const handleMouseEnter = (menu: string) => {
    setActiveDropdown(prevActive => prevActive === menu ? null : menu);
  };

  const handleMouseLeave = () => {
    // For mobile, we don't auto-close on mouse leave
  };

  // Dummy hover position for mobile (not used)
  const hoverPosition = { left: 0, width: 0 };

  // Helper function to set menu item refs
  const setMenuItemRef = (el: HTMLDivElement | null, key: string) => {
    if (el) menuItemRefs.current[key] = el;
  };

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

  // Function to scroll to service form
  const scrollToServiceForm = () => {
    const serviceForm = document.getElementById('service-form');
    if (serviceForm) {
      serviceForm.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Toggle mobile menu
  const toggleMobileMenu = () => {
    setShowMobileMenu(!showMobileMenu);
  };

  return (
    <div
      className={`fixed left-0 right-0 z-[45] transition-all duration-300 ease-in-out
        ${isSticky ? "top-0 shadow-lg" : "-top-full opacity-0"}
      `}
    >
      {/* Mobile Version - Lean three button banner */}
      <div className="md:hidden bg-blue-600 text-white py-1">
        <div className="container mx-auto px-2 flex justify-between items-center">
          {/* Left side - GET FREE QUOTE */}
          <button
            onClick={scrollToServiceForm}
            className="bg-green-500 hover:bg-green-600 text-white font-bold py-1.5 px-3 rounded text-xs transition-colors duration-300"
          >
            GET FREE QUOTE
          </button>

          {/* Center - CALL NOW with ringing animation */}
          <a href={`tel:${COMPANY_INFO.phone}`} className="bg-white hover:bg-gray-100 text-blue-600 font-bold py-1.5 px-3 rounded text-xs transition-colors duration-300 flex items-center space-x-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-3 w-3 animate-bounce"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
            </svg>
            <span>CALL NOW</span>
          </a>

          {/* Right side - MENU with hamburger icon */}
          <button
            type="button"
            onClick={toggleMobileMenu}
            className="bg-transparent hover:bg-blue-700 text-white font-bold py-1.5 px-3 rounded text-xs border border-white transition-colors duration-300 flex items-center space-x-1"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className={`h-3 w-3 transition-transform duration-300 ${showMobileMenu ? 'rotate-90' : ''}`}
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {showMobileMenu ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
            <span>MENU</span>
          </button>
        </div>

        {/* Mobile navigation - same structure as main header */}
        <div className={`w-full ${showMobileMenu ? 'block' : 'hidden'} ${styles.mobileMenu}`}>
          <div className={styles.mobileMenuContainer}>
            <NavigationBar
              activeDropdown={activeDropdown}
              hoverPosition={hoverPosition}
              navRef={navRef}
              handleMouseEnter={handleMouseEnter}
              handleMouseLeave={handleMouseLeave}
              setMenuItemRef={setMenuItemRef}
              isMobile={true}
              closeMobileMenu={() => setShowMobileMenu(false)}
            />
          </div>

          {/* Bottom navigation bar */}
          <div className="fixed bottom-0 left-0 right-0 bg-gray-50 border-t border-gray-200 grid grid-cols-5 py-2 z-50">
            {/* Locations */}
            <a href="/local-branches" className="flex flex-col items-center justify-center text-gray-600 hover:text-red-600">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                <circle cx="12" cy="10" r="3"></circle>
              </svg>
              <span className="text-xs mt-1">Locations</span>
            </a>

            {/* Search */}
            <button className="flex flex-col items-center justify-center text-gray-600 hover:text-red-600">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="11" cy="11" r="8"></circle>
                <path d="m21 21-4.35-4.35"></path>
              </svg>
              <span className="text-xs mt-1">Search</span>
            </button>

            {/* Call Us */}
            <a href={`tel:${COMPANY_INFO.phone}`} className="flex flex-col items-center justify-center text-gray-600 hover:text-red-600">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
              </svg>
              <span className="text-xs mt-1">Call Us</span>
            </a>

            {/* Contact */}
            <a href="/contact" className="flex flex-col items-center justify-center text-gray-600 hover:text-red-600">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                <polyline points="22,6 12,13 2,6"></polyline>
              </svg>
              <span className="text-xs mt-1">Contact</span>
            </a>

            {/* Login */}
            <a href="/login" className="flex flex-col items-center justify-center text-gray-600 hover:text-red-600">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4"></path>
                <polyline points="10 17 15 12 10 7"></polyline>
                <line x1="15" y1="12" x2="3" y2="12"></line>
              </svg>
              <span className="text-xs mt-1">Login</span>
            </a>
          </div>

          {/* Social media icons for mobile */}
          <div className="flex justify-center space-x-5 mt-2 pt-3 pb-16 border-t border-gray-200">
              {/* Facebook */}
              <a
                href={COMPANY_INFO.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="text-red-600 hover:text-red-800 transition-colors transform hover:scale-110 duration-200"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                </svg>
              </a>

              {/* Instagram */}
              <a
                href={COMPANY_INFO.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="text-red-600 hover:text-red-800 transition-colors transform hover:scale-110 duration-200"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                </svg>
              </a>

              {/* LinkedIn */}
              <a
                href={COMPANY_INFO.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="text-red-600 hover:text-red-800 transition-colors transform hover:scale-110 duration-200"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6z"></path>
                  <rect x="2" y="9" width="4" height="12"></rect>
                  <circle cx="4" cy="4" r="2"></circle>
                </svg>
              </a>

              {/* YouTube */}
              <a
                href={COMPANY_INFO.social.youtube}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="YouTube"
                className="text-red-600 hover:text-red-800 transition-colors transform hover:scale-110 duration-200"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" />
                </svg>
              </a>

              {/* Email */}
              <a
                href={`mailto:${COMPANY_INFO.email}`}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Email"
                className="text-red-600 hover:text-red-800 transition-colors transform hover:scale-110 duration-200"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                  <polyline points="22,6 12,13 2,6"></polyline>
                </svg>
              </a>
            </div>
        </div>
      </div>

      {/* Desktop Version - Navigation menu with dropdowns */}
      <div className="hidden md:block bg-white border-b border-gray-200 py-2 relative">
        <div className="container mx-auto px-4">
          <nav className="flex items-center justify-center space-x-8" ref={navRef}>
            <NavigationBar
              activeDropdown={activeDropdown}
              hoverPosition={hoverPosition}
              navRef={navRef}
              handleMouseEnter={handleMouseEnter}
              handleMouseLeave={handleMouseLeave}
              setMenuItemRef={setMenuItemRef}
              isMobile={false}
            />
          </nav>
        </div>

        {/* Dropdown Menus - positioned outside nav container like main header */}
        {activeDropdown && (
          <div className="absolute left-0 right-0 top-full z-50 -mt-1">
            <DropdownMenu
              activeDropdown={activeDropdown}
              onMouseEnter={() => {}}
              onMouseLeave={handleMouseLeave}
            />
          </div>
        )}
      </div>
    </div>
  );
}
"use client";
import Image from 'next/image';
import { COMPANY_INFO } from '../../lib/constants';
import { useHoverPosition } from '../../hooks/useHoverPosition';
import NavigationBar from './NavigationBar';
import DropdownMenu from './DropdownMenu';
import { useState } from 'react';
import styles from './MainHeader.module.css';

export default function MainHeader() {
  const {
    activeDropdown,
    hoverPosition,
    navRef,
    menuItemRefs,
    handleMouseEnter,
    handleMouseLeave,
    handleDropdownMouseEnter,
    handleDropdownMouseLeave,
    isMobile
  } = useHoverPosition();

  // Mobile menu state
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Helper function to set menu item refs
  const setMenuItemRef = (el: HTMLDivElement | null, key: string) => {
    if (el) menuItemRefs.current[key] = el;
  };

  return (
    <header className="w-full relative z-50 bg-green-light">
      {/* Search, Locations and Social media icons in top right */}
      <div className="hidden md:flex items-center justify-end space-x-2 py-0.5 px-4 bg-gradient-to-r from-green-500 to-green-700 shadow-md">
        {/* Search bar */}
        <div className="relative mr-4">
          <input
            type="text"
            placeholder="Search..."
            className="bg-white/10 text-white placeholder-white/70 text-xs rounded-full py-0.5 pl-6 pr-2 w-32 focus:w-40 focus:outline-none focus:ring-1 focus:ring-white/30 transition-all duration-300"
          />
          <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 text-white/70 absolute left-2 top-1/2 transform -translate-y-1/2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="11" cy="11" r="8"></circle>
            <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
          </svg>
        </div>
        {/* Divider */}
        <div className="h-4 w-[1px] bg-white/30 mr-3"></div>

        {/* Locations link */}
        <a
          href="/areas"
          className="text-white hover:text-white/80 transition-colors transform hover:scale-110 duration-200 font-medium mr-3 flex items-center text-xs"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 mr-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
            <circle cx="12" cy="10" r="3"></circle>
          </svg>
          Locations
        </a>
        {/* Divider */}
        <div className="h-4 w-[1px] bg-white/30 mr-3"></div>

        {/* Contact link */}
        <a
          href="/contact"
          className="text-white hover:text-white/80 transition-colors transform hover:scale-110 duration-200 font-medium mr-3 flex items-center text-xs"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 mr-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
          </svg>
          Contact
        </a>
        {/* Divider */}
        <div className="h-4 w-[1px] bg-white/30 mr-3"></div>
        {/* Facebook */}
        <a
          href={COMPANY_INFO.social.facebook}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Facebook"
          className="text-white hover:text-white/80 transition-colors transform hover:scale-110 duration-200 scale-90"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" viewBox="0 0 24 24" fill="currentColor">
            <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
          </svg>
        </a>

        {/* Instagram */}
        <a
          href={COMPANY_INFO.social.instagram}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Instagram"
          className="text-white hover:text-white/80 transition-colors transform hover:scale-110 duration-200"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
          </svg>
        </a>

        {/* LinkedIn */}
        <a
          href={COMPANY_INFO.social.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
          className="text-white hover:text-white/80 transition-colors transform hover:scale-110 duration-200"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" viewBox="0 0 24 24" fill="currentColor">
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
          className="text-white hover:text-white/80 transition-colors transform hover:scale-110 duration-200"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" viewBox="0 0 24 24" fill="currentColor">
            <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" />
          </svg>
        </a>

        {/* Email */}
        <a
          href={`mailto:${COMPANY_INFO.email}`}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Email"
          className="text-white hover:text-white/80 transition-colors transform hover:scale-110 duration-200"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
            <polyline points="22,6 12,13 2,6"></polyline>
          </svg>
        </a>
      </div>

      <div className="container mx-auto px-4 flex flex-wrap items-center">
        {/* Logo and company name */}
        <div className="flex items-center py-2 mr-6">
          <div className="mr-3">
            <Image
              src="/logo.png"
              alt="Company Logo"
              width={0}
              height={0}
              sizes="(max-width: 768px) 70px, 100px"
              className="object-contain"
              style={{ width: 'auto', height: isMobile ? '70px' : '100px' }}
              priority
            />
          </div>
          <div>
            <h1 className="text-xl md:text-3xl font-extrabold text-white whitespace-nowrap">
              T47 PEST CONTROL
            </h1>
            <p className="text-xs md:text-sm font-medium text-white/80 whitespace-nowrap">
              24/7 ROUND THE CLOCK
            </p>
          </div>
        </div>

        {/* Desktop navigation and contact buttons */}
        <div className="hidden md:flex items-center justify-between flex-1">
          <div className="flex items-center space-x-2">
            {/* Navigation items */}
            <nav className="flex items-center">
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

            {/* Vertical divider */}
            <div className="h-8 w-[1px] bg-white/30 mx-2"></div>

            {/* Contact buttons */}
            <div className="flex items-center space-x-2">
              <button
                type="button"
                className="bg-blue-600 text-white font-bold py-2 px-4 rounded-full flex items-center hover:bg-blue-700 transition-colors text-sm"
                onClick={() => window.location.href = `tel:${COMPANY_INFO.phone}`}
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                </svg>
                <span>{COMPANY_INFO.phone}</span>
              </button>
              <button
                type="button"
                className="bg-white text-blue-600 font-bold py-2 px-4 rounded-full flex items-center hover:bg-gray-100 transition-colors border-2 border-blue-600 text-sm"
                onClick={() => window.location.href = '/contact'}
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4"></path>
                  <polyline points="10 17 15 12 10 7"></polyline>
                  <line x1="15" y1="12" x2="3" y2="12"></line>
                </svg>
                <span>Request a Call Back</span>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu button - optimized for performance */}
        <div className="md:hidden ml-auto mr-2">
          <button
            type="button"
            onClick={() => {
              // Use requestAnimationFrame for smoother toggling
              requestAnimationFrame(() => {
                setMobileMenuOpen(!mobileMenuOpen);
              });
            }}
            className={`${styles.hamburgerButton} ${mobileMenuOpen ? 'bg-blue-50' : ''}`}
            aria-label="Toggle mobile menu"
          >
            <span className="font-bold text-blue-600">
              {mobileMenuOpen ? 'CLOSE' : 'MENU'}
            </span>
          </button>
        </div>
      </div>

      {/* Mobile navigation - optimized for performance */}
      <div className={`w-full md:hidden ${mobileMenuOpen ? 'block' : 'hidden'} ${styles.mobileMenu}`}>
        <div className={styles.mobileMenuContainer}>
          <NavigationBar
            activeDropdown={activeDropdown}
            hoverPosition={hoverPosition}
            navRef={navRef}
            handleMouseEnter={handleMouseEnter}
            handleMouseLeave={handleMouseLeave}
            setMenuItemRef={setMenuItemRef}
            isMobile={true}
          />
        </div>

        {/* Mobile dropdown menu - optimized for performance */}
        <div className={`${styles.mobileDropdown} ${activeDropdown && isMobile ? styles.mobileDropdownOpen : ''}`}>
          {activeDropdown && (
            <DropdownMenu
              activeDropdown={activeDropdown}
              onMouseEnter={handleDropdownMouseEnter}
              onMouseLeave={handleDropdownMouseLeave}
            />
          )}
        </div>

        {/* Call buttons */}
        <div className="flex flex-col space-y-2 p-4 border-t border-gray-200">
          <button
            type="button"
            className="bg-blue-600 text-white font-bold py-2 px-4 rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors text-sm"
            onClick={() => window.location.href = `tel:${COMPANY_INFO.phone}`}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
            </svg>
            <span>{COMPANY_INFO.phone}</span>
          </button>
          <button
            type="button"
            className="bg-white text-blue-600 font-bold py-2 px-4 rounded-full flex items-center justify-center hover:bg-gray-100 transition-colors border-2 border-blue-600 text-sm"
            onClick={() => window.location.href = '/contact'}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4"></path>
              <polyline points="10 17 15 12 10 7"></polyline>
              <line x1="15" y1="12" x2="3" y2="12"></line>
            </svg>
            <span>Request a Call Back</span>
          </button>
        </div>

        {/* Bottom navigation bar */}
        <div className="fixed bottom-0 left-0 right-0 bg-gray-50 border-t border-gray-200 grid grid-cols-4 py-2 z-50">
          {/* Locations */}
          <a href="/areas" className="flex flex-col items-center justify-center text-gray-600 hover:text-blue-600">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
              <circle cx="12" cy="10" r="3"></circle>
            </svg>
            <span className="text-xs mt-1">Locations</span>
          </a>

          {/* Search */}
          <button type="button" className="flex flex-col items-center justify-center text-gray-600 hover:text-blue-600">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="11" cy="11" r="8"></circle>
              <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
            </svg>
            <span className="text-xs mt-1">Search</span>
          </button>

          {/* Contact */}
          <a href="/contact" className="flex flex-col items-center justify-center text-gray-600 hover:text-blue-600">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
            </svg>
            <span className="text-xs mt-1">Contact</span>
          </a>

          {/* Login */}
          <a href="/login" className="flex flex-col items-center justify-center text-gray-600 hover:text-blue-600">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
              <circle cx="12" cy="7" r="4"></circle>
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
              className="text-blue-600 hover:text-blue-800 transition-colors transform hover:scale-110 duration-200"
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
              className="text-blue-600 hover:text-blue-800 transition-colors transform hover:scale-110 duration-200"
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
              className="text-blue-600 hover:text-blue-800 transition-colors transform hover:scale-110 duration-200"
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
              className="text-blue-600 hover:text-blue-800 transition-colors transform hover:scale-110 duration-200"
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
              className="text-blue-600 hover:text-blue-800 transition-colors transform hover:scale-110 duration-200"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                <polyline points="22,6 12,13 2,6"></polyline>
              </svg>
            </a>
          </div>
        </div>

      {/* Dropdown Menus - only shown on desktop */}
      {activeDropdown && !isMobile && (
        <div className="absolute left-0 right-0 top-[120px] z-50">
          <DropdownMenu
            activeDropdown={activeDropdown}
            onMouseEnter={handleDropdownMouseEnter}
            onMouseLeave={handleDropdownMouseLeave}
          />
        </div>
      )}
    </header>
  );
}

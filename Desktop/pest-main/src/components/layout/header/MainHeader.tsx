"use client";
import Image from 'next/image';
import Link from 'next/link';
import { COMPANY_INFO } from '../../lib/constants';
import { useHoverPosition } from '../../hooks/useHoverPosition';
import NavigationBar from './NavigationBar';
import DropdownMenu from './DropdownMenu';
import LocationsDropdown from './LocationsDropdown';
import { useState, useEffect, useRef } from 'react';
import styles from './MainHeader.module.css';
import SearchResults from '../../search/SearchResults';
import SearchModal from '../../search/SearchModal';
import { SearchItem } from '@/data/searchData';

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

  // Locations dropdown state
  const [showLocationsDropdown, setShowLocationsDropdown] = useState(false);

  // Search states
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState<SearchItem[]>([]);
  const [isSearching, setIsSearching] = useState(false);
  const [showSearchResults, setShowSearchResults] = useState(false);
  const [showMobileSearch, setShowMobileSearch] = useState(false);
  const searchInputRef = useRef<HTMLInputElement>(null);

  // Handle search input change
  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  // Handle search
  useEffect(() => {
    const delayDebounceFn = setTimeout(() => {
      if (searchQuery.trim().length > 1) {
        performSearch();
      } else {
        setSearchResults([]);
        setShowSearchResults(false);
      }
    }, 300);

    return () => clearTimeout(delayDebounceFn);
  }, [searchQuery]);

  // Search function
  const performSearch = async () => {
    if (searchQuery.trim().length < 2) return;

    setIsSearching(true);
    setShowSearchResults(true);

    try {
      const response = await fetch(`/api/search?q=${encodeURIComponent(searchQuery)}`);
      const data = await response.json();
      setSearchResults(data.results);
    } catch (error) {
      console.error('Search error:', error);
    } finally {
      setIsSearching(false);
    }
  };

  // Handle search form submission
  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim().length > 1) {
      window.location.href = `/search?q=${encodeURIComponent(searchQuery)}`;
    }
  };

  // Handle mobile search button click
  const handleMobileSearchClick = () => {
    setShowMobileSearch(true);
  };

  // Helper function to set menu item refs
  const setMenuItemRef = (el: HTMLDivElement | null, key: string) => {
    if (el) menuItemRefs.current[key] = el;
  };

  return (
    <header className="w-full relative z-50">
      {/* Top header with search, locations and social media icons */}
      <div className="hidden md:flex items-center justify-between py-1.5 px-5 bg-gradient-to-r from-red-500 to-red-700 shadow-sm text-xs text-white">
        {/* Left section with social media icons */}
        <div className="flex items-center space-x-3">
          {/* Facebook */}
          <a
            href={COMPANY_INFO.social.facebook}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
            className="text-white hover:text-white/80 transition-colors transform hover:scale-110 duration-200"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5" viewBox="0 0 24 24" fill="currentColor">
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
            <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5" viewBox="0 0 24 24" fill="currentColor">
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
            <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5" viewBox="0 0 24 24" fill="currentColor">
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
            <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5" viewBox="0 0 24 24" fill="currentColor">
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
            <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
              <polyline points="22,6 12,13 2,6"></polyline>
            </svg>
          </a>
        </div>

        {/* Center section with search bar */}
        <div className="relative mx-auto">
          <form onSubmit={handleSearchSubmit} className="flex items-center">
            <input
              ref={searchInputRef}
              type="text"
              placeholder="Search..."
              className="bg-white/10 text-white placeholder-white/70 text-xs rounded-full py-1 pl-8 pr-3 w-60 focus:w-72 focus:outline-none focus:ring-1 focus:ring-white/30 transition-all duration-300"
              value={searchQuery}
              onChange={handleSearchChange}
              onFocus={() => {
                if (searchQuery.trim().length > 1) {
                  setShowSearchResults(true);
                }
              }}
            />
            <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5 text-white/70 absolute left-2.5 top-1/2 transform -translate-y-1/2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="11" cy="11" r="8"></circle>
              <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
            </svg>
          </form>

          {/* Search Results Dropdown */}
          {showSearchResults && (
            <SearchResults
              results={searchResults}
              query={searchQuery}
              isLoading={isSearching}
              onClose={() => setShowSearchResults(false)}
              onResultClick={() => {
                setSearchQuery('');
                setShowSearchResults(false);
              }}
            />
          )}
        </div>

        {/* Right section with locations and contact */}
        <div className="flex items-center space-x-4">
          {/* Locations link with dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setShowLocationsDropdown(true)}
            onMouseLeave={() => setShowLocationsDropdown(false)}
          >
            <a
              href="/areas"
              className="text-white hover:text-white/80 transition-colors transform hover:scale-105 duration-200 font-medium flex items-center"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5 mr-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                <circle cx="12" cy="10" r="3"></circle>
              </svg>
              Locations
              <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 ml-1" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </a>
            <LocationsDropdown isVisible={showLocationsDropdown} />
          </div>

          {/* Contact link */}
          <a
            href="/contact"
            className="text-white hover:text-white/80 transition-colors transform hover:scale-105 duration-200 font-medium flex items-center"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5 mr-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
            </svg>
            Contact
          </a>
        </div>
      </div>

      <div className="container mx-auto px-2 md:px-3 flex items-center justify-between py-0.5 md:py-1 bg-white shadow-md">
        {/* Logo and company name - clickable to home page */}
        <Link
          href="/"
          className={`flex items-center group cursor-pointer transition-transform hover:scale-105 duration-200 ${styles.logoHover}`}
          aria-label="Go to homepage"
        >
          <div className="mr-2">
            <Image
              src="/logo.png"
              alt="Company Logo"
              width={0}
              height={0}
              sizes="(max-width: 768px) 60px, 100px"
              className="object-contain"
              style={{ width: 'auto', height: isMobile ? '50px' : '70px' }}
              priority
            />
          </div>
          <div className="leading-tight">
            <h1 className="text-base md:text-3xl whitespace-nowrap t47-header-font bg-gradient-to-r from-[#80D8FF] to-[#004D7F] bg-clip-text text-transparent mb-[-5px] font-extrabold">
              T47 PEST CONTROL
            </h1>
            <div className="flex justify-end">
              <p className="text-[8px] md:text-[10px] whitespace-nowrap font-extrabold bg-gradient-to-r from-red-500 to-green-500 bg-clip-text text-transparent">
                24/7 ROUND THE CLOCK
              </p>
            </div>
          </div>
        </Link>

        {/* Desktop navigation and contact buttons */}
        <div className="hidden md:flex items-center justify-between flex-1">
          <div className="flex items-center space-x-2 pl-2">
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
            <div className="h-8 w-[1px] bg-gray-300 mx-2"></div>

            {/* Contact buttons */}
            <div className="flex items-center space-x-2">
              <button
                type="button"
                className="bg-gradient-to-r from-red-600 to-red-800 text-white font-bold py-1.5 px-3.5 rounded-full flex items-center hover:from-red-700 hover:to-red-900 transition-colors text-sm"
                onClick={() => window.location.href = `tel:${COMPANY_INFO.phone}`}
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                </svg>
                <span>{COMPANY_INFO.phone}</span>
              </button>
              <button
                type="button"
                className="bg-white text-red-600 font-bold py-1.5 px-3.5 rounded-full flex items-center hover:bg-gray-100 transition-colors border border-red-600 text-sm"
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

        {/* Mobile navigation buttons - right side */}
        <div className="md:hidden flex items-center space-x-1.5">
          {/* Phone button with animation */}
          <button
            type="button"
            onClick={() => window.location.href = `tel:${COMPANY_INFO.phone}`}
            className={`p-2 rounded-full bg-gradient-to-r from-red-600 to-red-800 shadow-md focus:outline-none flex items-center justify-center ${styles.phoneButton}`}
            aria-label="Call us"
          >
            <div className={styles.phoneIcon}>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
            </div>
          </button>

          {/* Book Now button */}
          <button
            type="button"
            onClick={() => window.location.href = '/contact'}
            className="py-1.5 px-3.5 rounded-full bg-gradient-to-r from-red-600 to-red-800 text-white font-bold text-xs shadow-md focus:outline-none transition-transform hover:scale-105 active:scale-95"
            aria-label="Book Now"
          >
            BOOK NOW
          </button>

          {/* Mobile hamburger menu button - right side */}
          <button
            type="button"
            onClick={() => {
              requestAnimationFrame(() => {
                setMobileMenuOpen(!mobileMenuOpen);
              });
            }}
            className="p-2 focus:outline-none"
            aria-label="Toggle mobile menu"
          >
            {mobileMenuOpen ? (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
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
            closeMobileMenu={() => setMobileMenuOpen(false)}
          />
        </div>

        {/* Call buttons */}
        <div className="flex flex-col space-y-2 p-4 border-t border-gray-200">
          <button
            type="button"
            className="bg-gradient-to-r from-red-600 to-red-800 text-white font-bold py-2 px-4 rounded-full flex items-center justify-center hover:from-red-700 hover:to-red-900 transition-colors text-sm"
            onClick={() => window.location.href = `tel:${COMPANY_INFO.phone}`}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
            </svg>
            <span>{COMPANY_INFO.phone}</span>
          </button>
          <button
            type="button"
            className="bg-white text-red-600 font-bold py-2 px-4 rounded-full flex items-center justify-center hover:bg-gray-100 transition-colors border-2 border-red-600 text-sm"
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
        <div className="fixed bottom-0 left-0 right-0 bg-gray-50 border-t border-gray-200 grid grid-cols-5 py-2 z-50">
          {/* Locations */}
          <a href="/areas" className="flex flex-col items-center justify-center text-gray-600 hover:text-red-600">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
              <circle cx="12" cy="10" r="3"></circle>
            </svg>
            <span className="text-xs mt-1">Locations</span>
          </a>

          {/* Search */}
          <button
            type="button"
            className="flex flex-col items-center justify-center text-gray-600 hover:text-red-600"
            onClick={handleMobileSearchClick}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="11" cy="11" r="8"></circle>
              <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
            </svg>
            <span className="text-xs mt-1">Search</span>
          </button>

          {/* Phone - Call Us */}
          <a href={`tel:${COMPANY_INFO.phone}`} className="flex flex-col items-center justify-center text-red-600 hover:text-red-800">
            <div className={`${styles.phoneIcon} relative`}>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
              </svg>
            </div>
            <span className="text-xs mt-1">Call Us</span>
          </a>

          {/* Contact */}
          <a href="/contact" className="flex flex-col items-center justify-center text-gray-600 hover:text-red-600">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
            </svg>
            <span className="text-xs mt-1">Contact</span>
          </a>

          {/* Login */}
          <a href="/login" className="flex flex-col items-center justify-center text-gray-600 hover:text-red-600">
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

      {/* Dropdown Menus - only shown on desktop */}
      {activeDropdown && !isMobile && (
        <div className="absolute left-0 right-0 top-full z-50">
          <DropdownMenu
            activeDropdown={activeDropdown}
            onMouseEnter={handleDropdownMouseEnter}
            onMouseLeave={handleDropdownMouseLeave}
          />
        </div>
      )}

      {/* Mobile Search Modal */}
      <SearchModal
        isOpen={showMobileSearch}
        onClose={() => setShowMobileSearch(false)}
      />
    </header>
  );
}

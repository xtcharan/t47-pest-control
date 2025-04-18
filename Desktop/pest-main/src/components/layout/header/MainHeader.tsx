"use client";
import Image from 'next/image';
import { COMPANY_INFO } from '../../lib/constants';
import styles from '../Header.module.css';
import { useHoverPosition } from '../../hooks/useHoverPosition';
import NavigationBar from './NavigationBar';
import DropdownMenu from './DropdownMenu';

export default function MainHeader() {
  const {
    activeDropdown,
    hoverPosition,
    navRef,
    menuItemRefs,
    handleMouseEnter,
    handleMouseLeave,
    handleDropdownMouseEnter,
    handleDropdownMouseLeave
  } = useHoverPosition();

  // Helper function to set menu item refs
  const setMenuItemRef = (el: HTMLDivElement | null, key: string) => {
    if (el) menuItemRefs.current[key] = el;
  };

  return (
    <header className="w-full bg-gradient-to-r from-green-light to-green-dark relative z-50 shadow-lg">
      {/* Top bar with contact info and social media */}
      <div className="h-10 flex justify-between items-center px-8 bg-black/10 backdrop-blur-xs">
        {/* Contact info */}
        <div className="flex items-center space-x-4 text-white/90 text-sm">
          <a href={`tel:${COMPANY_INFO.phone}`} className="flex items-center hover:text-white transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" />
            </svg>
            {COMPANY_INFO.phone}
          </a>
          <a href={`mailto:${COMPANY_INFO.email}`} className="flex items-center hover:text-white transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
              <polyline points="22,6 12,13 2,6" />
            </svg>
            {COMPANY_INFO.email}
          </a>
        </div>

        {/* Social media icons */}
        <div className="flex space-x-4">
          {/* Facebook */}
          <a
            href={COMPANY_INFO.social.facebook}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
            className="text-white/80 hover:text-white transition-colors transform hover:scale-110 duration-200"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
              <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
            </svg>
          </a>

          {/* Instagram */}
          <a
            href={COMPANY_INFO.social.instagram}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="text-white/80 hover:text-white transition-colors transform hover:scale-110 duration-200"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
            </svg>
          </a>

          {/* LinkedIn */}
          <a
            href={COMPANY_INFO.social.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="text-white/80 hover:text-white transition-colors transform hover:scale-110 duration-200"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
              <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6z"></path>
              <rect x="2" y="9" width="4" height="12"></rect>
              <circle cx="4" cy="4" r="2"></circle>
            </svg>
          </a>

          {/* X (formerly Twitter) */}
          <a
            href={COMPANY_INFO.social.twitter}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="X"
            className="text-white/80 hover:text-white transition-colors transform hover:scale-110 duration-200"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
            </svg>
          </a>

          {/* YouTube */}
          <a
            href={COMPANY_INFO.social.youtube}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="YouTube"
            className="text-white/80 hover:text-white transition-colors transform hover:scale-110 duration-200"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
              <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" />
            </svg>
          </a>
        </div>
      </div>

      <div className="relative">
        {/* Navigation Bar */}
        <NavigationBar
          activeDropdown={activeDropdown}
          hoverPosition={hoverPosition}
          navRef={navRef}
          handleMouseEnter={handleMouseEnter}
          handleMouseLeave={handleMouseLeave}
          setMenuItemRef={setMenuItemRef}
        />

        {/* Dropdown Menus */}
        {activeDropdown && (
          <DropdownMenu
            activeDropdown={activeDropdown}
            onMouseEnter={handleDropdownMouseEnter}
            onMouseLeave={handleDropdownMouseLeave}
          />
        )}

        {/* Dropdown background overlay - appears when any dropdown is active */}
        {activeDropdown && (
          <div
            className={styles.dropdownOverlay}
            onClick={handleDropdownMouseLeave}
            onMouseLeave={handleDropdownMouseLeave}
          ></div>
        )}
      </div>

      {/* Logo and branding container */}
      <div className="flex items-center absolute left-0 top-[60%] -translate-y-1/2 z-[100] pl-8">
        {/* Logo with subtle animation */}
        <div className="mr-4 translate-y-3.5 translate-x-17 relative group">
          <div className="absolute -inset-1 bg-gradient-to-r from-green-light/20 to-green-dark/20 rounded-full blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          <Image
            src={'/images/logo.png'}
            alt="Company Logo"
            width={0}
            height={0}
            sizes="10vw"
            className="w-auto h-[120px] object-contain relative z-10 drop-shadow-md transition-transform duration-300 group-hover:scale-105"
            priority
          />
        </div>

        {/* Text branding with enhanced styling */}
        <div className="flex flex-col justify-center translate-x-20 translate-y-4">
          {/* Company name with gradient text */}
          <h1 className="text-5xl mb-1 font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-black to-gray-800 drop-shadow-sm">
            {COMPANY_INFO.name}
          </h1>


        </div>
      </div>
    </header>
  );
}













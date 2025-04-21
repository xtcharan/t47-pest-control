import Link from 'next/link';
import React, { RefObject, forwardRef } from 'react';
import NavigationItem from './NavigationItem';
import HoverIndicator from '../HoverIndicator';
import styles from './MainHeader.module.css';

interface NavigationBarProps {
  activeDropdown: string | null;
  hoverPosition: { left: number; width: number };
  navRef: RefObject<HTMLElement>;
  handleMouseEnter: (menu: string) => void;
  handleMouseLeave: () => void;
  setMenuItemRef: (el: HTMLDivElement | null, key: string) => void;
}

const NavigationBar = forwardRef<HTMLElement, NavigationBarProps>(function NavigationBar({
  activeDropdown,
  hoverPosition,
  navRef,
  handleMouseEnter,
  handleMouseLeave,
  setMenuItemRef
}, ref) {
  // Navigation items configuration
  const navItems = [
    { name: 'Residential', href: '/Residential', key: 'residential' },
    { name: 'Commercial', href: '/commercial', key: 'commercial' },
    { name: 'Termite Solutions', href: '/termite-solutions', key: 'termite' },
    { name: 'Blog', href: '/blog', key: 'blog', noDropdown: true },
    { name: 'About Us', href: '/about', key: 'about' },
    { name: 'Areas', href: '/areas', key: 'areas' },
  ];

  return (
    <nav ref={ref} className="h-16 bg-white flex justify-end items-center relative shadow-sm">
      {/* Main navigation items */}
      <div className="flex items-center justify-end gap-0 mr-8">
        {/* Line before Residential */}
        <div className="h-6 w-[1px] bg-gray-300 mx-1"></div>

        {navItems.map((item, index) => (
          <React.Fragment key={item.key}>
            {item.noDropdown ? (
              <div className="relative">
                <Link
                  href={item.href}
                  className="relative inline-block px-3 py-2 mx-1 rounded-md overflow-hidden group hover:bg-gray-50 hover:shadow-md hover:scale-105 transition-all duration-300"
                >
                  <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-red-light to-red-dark opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-md"></span>
                  <span className="relative z-10 font-medium transition-colors duration-300 text-gray-700 group-hover:text-white">
                    {item.name}
                  </span>
                </Link>
              </div>
            ) : (
              <NavigationItem
                name={item.name}
                href={item.href}
                menuKey={item.key}
                isActive={activeDropdown === item.key}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                setRef={setMenuItemRef}
              />
            )}
            {index < navItems.length - 1 && (
              <div className="h-6 w-[1px] bg-gray-300 mx-1"></div>
            )}
          </React.Fragment>
        ))}

        {/* Phone number with icon */}
        <div className="flex items-center">
          <div className="h-6 w-[1px] bg-gray-300 mx-1"></div>
          <a href="tel:+61434300216" className={`relative inline-block px-3 py-2 mx-1 rounded-md overflow-hidden group hover:bg-gray-50 hover:shadow-md hover:scale-105 transition-all duration-300 ${styles.callButton}`}>
            <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-green-light to-green-dark opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-md"></span>
            <span className="relative z-10 flex items-center font-medium transition-colors duration-300 text-gray-700 group-hover:text-white">
              <span className={styles.phoneIcon}>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                </svg>
              </span>
              +61434300216
            </span>
          </a>
        </div>
      </div>

      {/* Hover indicator - appears below the active menu item */}
      <HoverIndicator
        isVisible={!!activeDropdown}
        left={hoverPosition.left}
        width={hoverPosition.width}
      />
    </nav>
  );
});

export default NavigationBar;

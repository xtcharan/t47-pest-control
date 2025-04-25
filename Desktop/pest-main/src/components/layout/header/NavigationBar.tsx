import Link from 'next/link';
import React, { RefObject, forwardRef, useMemo } from 'react';
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
  isMobile?: boolean;
}

const NavigationBar = forwardRef<HTMLElement, NavigationBarProps>(function NavigationBar({
  activeDropdown,
  hoverPosition,
  navRef,
  handleMouseEnter,
  handleMouseLeave,
  setMenuItemRef,
  isMobile = false
}, ref) {
  // Navigation items configuration - memoized for performance
  const navItems = useMemo(() => [
    {
      name: 'Residential',
      href: '/Residential',
      key: 'residential',
      addDivider: true
    },
    {
      name: 'Commercial',
      href: '/commercial',
      key: 'commercial',
      addDivider: true
    },
    {
      name: 'Termite Solutions',
      href: '/termite-solutions',
      key: 'termite',
      addDivider: true
    },
    {
      name: 'Blog',
      href: '/blog',
      key: 'blog',
      noDropdown: true,
      addDivider: true
    },
    {
      name: 'About Us',
      href: '/about',
      key: 'about'
    },
  ], []);

  return (
    <nav ref={ref} className={`${isMobile ? 'flex-col w-full' : 'flex'} ${styles.navContainer}`}>
      {/* Main navigation items */}
      <div className={`flex ${isMobile ? 'flex-col w-full gap-2' : 'items-center gap-2 pl-4'}`}>
        {/* Line before first item - only on desktop */}
        {!isMobile && <div className="h-6 w-[1px] bg-gray-300 mx-1"></div>}

        {navItems.map((item, index) => (
          <React.Fragment key={item.key}>
            {item.noDropdown ? (
              <div className="relative w-full">
                {isMobile ? (
                  <div className={styles.mobileNavItem}>
                    <Link href={item.href} className="font-medium text-gray-800">
                      {item.name}
                    </Link>
                  </div>
                ) : (
                  <Link
                    href={item.href}
                    className={`relative inline-block px-4 py-2 rounded-md whitespace-nowrap text-gray-700 hover:bg-gray-50 hover:text-red-600 border border-transparent hover:border-red-200 transition-all duration-200`}
                    prefetch={false}
                  >
                    <span className="font-medium">
                      {item.name}
                    </span>
                  </Link>
                )}
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
                isMobile={isMobile}

              />
            )}

            {/* Add divider after specified items - only on desktop */}
            {!isMobile && item.addDivider && (
              <div className="h-6 w-[1px] bg-gray-300 mx-1"></div>
            )}

            {/* Add horizontal divider after specified items - only on mobile */}
            {isMobile && item.addDivider && (
              <div className="w-full h-[1px] bg-gray-200 my-1"></div>
            )}
          </React.Fragment>
        ))}
      </div>

      {/* Hover indicator - appears below the active menu item - only on desktop */}
      {!isMobile && (
        <HoverIndicator
          isVisible={!!activeDropdown}
          left={hoverPosition.left}
          width={hoverPosition.width}
        />
      )}
    </nav>
  );
});

export default NavigationBar;

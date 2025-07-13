import Link from 'next/link';
import styles from './MainHeader.module.css';
import { DROPDOWN_MENU_ITEMS } from '../../lib/constants';
import { useState } from 'react';

export interface NavigationItemProps {
  name: string;
  href: string;
  menuKey: string;
  isActive: boolean;
  onMouseEnter: (menu: string) => void;
  onMouseLeave: () => void;
  setRef: (el: HTMLDivElement | null, key: string) => void;
  isMobile?: boolean;
  closeMobileMenu?: () => void;
}

export default function NavigationItem({
  name,
  href,
  menuKey,
  isActive,
  onMouseEnter,
  onMouseLeave,
  setRef,
  isMobile = false,
  closeMobileMenu
}: NavigationItemProps) {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    if (isMobile) {
      setIsOpen(!isOpen);
      if (!isOpen) {
        onMouseEnter(menuKey);
      } else {
        onMouseLeave();
      }
    }
  };

  // Handle touch events to prevent double tap
  const handleTouchStart = (e: React.TouchEvent) => {
    e.preventDefault();
    handleToggle();
  };

  const hasDropdown = DROPDOWN_MENU_ITEMS[menuKey as keyof typeof DROPDOWN_MENU_ITEMS]?.length > 0;

  return (
    <div
      ref={(el) => setRef(el, menuKey)}
      className={`relative ${isMobile ? 'w-full' : ''}`}
      onMouseEnter={() => !isMobile && onMouseEnter(menuKey)}
      onMouseLeave={() => !isMobile && onMouseLeave()}
    >
      {isMobile ? (
        <div className="w-full">
          <div className={styles.mobileNavItem}>
            <Link href={href} className="font-medium text-gray-800" onClick={closeMobileMenu}>
              {name}
            </Link>
            {hasDropdown && (
              <button
                type="button"
                className={`p-2 rounded-md border touch-manipulation ${isActive ? 'bg-red-100 text-red-600 border-red-300' : 'text-gray-700 border-gray-300 hover:bg-gray-100'}`}
                onClick={handleToggle}
                onTouchStart={handleTouchStart}
                aria-label={`${isActive ? 'Collapse' : 'Expand'} ${name} menu`}
                style={{ touchAction: 'manipulation' }}
              >
                {isActive ? (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                  </svg>
                ) : (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="12" y1="5" x2="12" y2="19"></line>
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                  </svg>
                )}
              </button>
            )}
          </div>

          {/* Dropdown menu directly below the item */}
          {isMobile && isActive && hasDropdown && (
            <div className="w-full bg-white">
              <div className="py-2 px-3">
                <div className="flex flex-col w-full">
                  <div className="grid grid-cols-2 gap-2 w-full py-2">
                    {DROPDOWN_MENU_ITEMS[menuKey as keyof typeof DROPDOWN_MENU_ITEMS]?.map((item, index) => (
                      <Link
                        key={index}
                        href={item.href}
                        className="text-gray-700 hover:text-red-600 text-sm font-medium py-2 px-3 bg-gray-50 hover:bg-gray-100 rounded-md text-center relative"
                        prefetch={false}
                        onClick={closeMobileMenu}
                      >
                        <span className="block w-full">{item.name}</span>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      ) : (
        <Link
          href={href}
          className={`relative inline-block px-4 py-2 rounded-md whitespace-nowrap ${isActive ? 'bg-red-600 text-white' : 'text-gray-700 hover:bg-gray-50 hover:text-red-600'} border border-transparent hover:border-red-200 transition-all duration-200`}
          prefetch={false}
        >
          <span className="font-medium flex items-center">
            {name}
            {hasDropdown && (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            )}
          </span>
        </Link>
      )}
    </div>
  );
}

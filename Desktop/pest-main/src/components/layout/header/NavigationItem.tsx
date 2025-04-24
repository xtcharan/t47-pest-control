import Link from 'next/link';
import styles from './MainHeader.module.css';

interface NavigationItemProps {
  name: string;
  href: string;
  menuKey: string;
  isActive: boolean;
  onMouseEnter: (menu: string) => void;
  onMouseLeave: () => void;
  setRef: (el: HTMLDivElement | null, key: string) => void;
  isMobile?: boolean;
}

export default function NavigationItem({
  name,
  href,
  menuKey,
  isActive,
  onMouseEnter,
  onMouseLeave,
  setRef,
  isMobile = false
}: NavigationItemProps) {
  return (
    <div
      ref={(el) => setRef(el, menuKey)}
      className={`relative ${isMobile ? 'w-full' : ''}`}
      onMouseEnter={() => !isMobile && onMouseEnter(menuKey)}
      onMouseLeave={() => !isMobile && onMouseLeave()}
    >
      {isMobile ? (
        <div className={styles.mobileNavItem}>
          <Link href={href} className="font-medium text-gray-800">
            {name}
          </Link>
          <button
            type="button"
            className={`p-2 rounded-md ${isActive ? 'bg-red-100 text-red-600' : ''}`}
            onClick={() => onMouseEnter(menuKey)}
            aria-label={`${isActive ? 'Collapse' : 'Expand'} ${name} menu`}
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
        </div>
      ) : (
        <Link
          href={href}
          className={`relative inline-block px-4 py-2 rounded-md whitespace-nowrap ${isActive ? 'bg-red-600 text-white' : 'hover:bg-gray-50'}`}
          prefetch={false}
        >
          <span className="font-medium text-white flex items-center">
            {name}
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </span>
        </Link>
      )}
    </div>
  );
}

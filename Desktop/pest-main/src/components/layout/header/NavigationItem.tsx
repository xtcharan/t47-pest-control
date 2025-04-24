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
            className={`p-2 rounded-md ${isActive ? 'bg-blue-100 text-blue-600' : ''}`}
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
          className={`relative inline-block px-4 py-2 rounded-md whitespace-nowrap ${isActive ? 'bg-blue-600 text-white' : 'hover:bg-gray-50'}`}
          prefetch={false}
        >
          <span className={`font-medium ${isActive ? 'text-white' : 'text-gray-700'}`}>
            {name}
          </span>
        </Link>
      )}
    </div>
  );
}

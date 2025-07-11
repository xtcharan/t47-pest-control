import { DROPDOWN_MENU_ITEMS } from '../../lib/constants';
import Link from 'next/link';
import { useMemo } from 'react';
import styles from './MainHeader.module.css';

interface HorizontalDropdownMenuProps {
  activeDropdown: string;
  onMouseEnter: () => void;
  onMouseLeave: () => void;
  isMobile?: boolean;
  closeMobileMenu?: () => void;
}

export default function HorizontalDropdownMenu({
  activeDropdown,
  onMouseEnter,
  onMouseLeave,
  isMobile = false,
  closeMobileMenu
}: HorizontalDropdownMenuProps) {
  // Get menu items for the active dropdown
  const menuItems = useMemo(() => {
    return DROPDOWN_MENU_ITEMS[activeDropdown as keyof typeof DROPDOWN_MENU_ITEMS] || [];
  }, [activeDropdown]);

  // For mobile, we render a similar layout to the regular dropdown but with horizontal styling
  if (isMobile) {
    return (
      <div className="w-full bg-white">
        <div className="py-2 px-3">
          <div className="flex flex-col w-full">
            <div className="w-full">
              <div className="grid grid-cols-1 gap-2 w-full py-2">
                {menuItems.map((item, index) => (
                  <Link
                    key={index}
                    href={item.href}
                    className="text-gray-700 hover:text-red-600 text-sm font-medium py-2 px-3 bg-gray-50 hover:bg-gray-100 rounded-md text-center relative"
                    style={{ willChange: 'auto' }}
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
      </div>
    );
  }

  // Desktop horizontal layout
  return (
    <div
      className={`${styles.horizontalDropdown} border-t border-gray-200`}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <div className="container mx-auto py-2 px-2 flex justify-center">
        <div className="flex flex-row items-center justify-center space-x-4">
          {menuItems.map((item, index) => (
            <Link
              key={index}
              href={item.href}
              className="text-gray-700 hover:text-red-600 text-sm font-medium py-1.5 px-3 hover:bg-gray-50 rounded-md text-center relative whitespace-nowrap"
              prefetch={false}
            >
              <span className="whitespace-nowrap block">{item.name}</span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

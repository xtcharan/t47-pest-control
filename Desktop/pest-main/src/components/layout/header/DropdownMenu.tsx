import { DROPDOWN_MENU_ITEMS } from '../../lib/constants';
import Link from 'next/link';
import { useEffect, useState, useMemo } from 'react';
import styles from './MainHeader.module.css';

interface DropdownMenuProps {
  activeDropdown: string | null;
  onMouseEnter: () => void;
  onMouseLeave: () => void;
}

export default function DropdownMenu({
  activeDropdown,
  onMouseEnter,
  onMouseLeave
}: DropdownMenuProps) {
  const [isMobile, setIsMobile] = useState(false);

  // Check if the screen is mobile size
  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    // Initial check
    checkIfMobile();

    // Add event listener for window resize
    window.addEventListener('resize', checkIfMobile);

    // Cleanup
    return () => window.removeEventListener('resize', checkIfMobile);
  }, []);

  if (!activeDropdown) return null;

  // All dropdown menus use the same format from constants - memoize for performance
  const menuItems = useMemo(() => {
    return DROPDOWN_MENU_ITEMS[activeDropdown as keyof typeof DROPDOWN_MENU_ITEMS] || [];
  }, [activeDropdown]);

  // Group items into rows for better organization - memoize for performance
  const rows = useMemo(() => {
    // Using 4 items per row for desktop and 2 items per row for mobile
    const itemsPerRow = isMobile ? 2 : 4;
    const result = [];
    for (let i = 0; i < menuItems.length; i += itemsPerRow) {
      result.push(menuItems.slice(i, i + itemsPerRow));
    }
    return result;
  }, [menuItems, isMobile]);

  // For mobile, we render a performance-optimized layout
  if (isMobile) {
    return (
      <div className="w-full bg-white">
        <div className="py-2 px-3">
          <div className="flex flex-col w-full">
            {rows.map((row, rowIndex) => (
              <div key={rowIndex} className="w-full">
                <div className="grid grid-cols-2 gap-2 w-full py-2">
                  {row.map((item, index) => (
                    <Link
                      key={index}
                      href={item.href}
                      className="text-gray-700 hover:text-red-600 text-sm font-medium py-2 px-3 bg-gray-50 hover:bg-gray-100 rounded-md text-center relative"
                      style={{ willChange: 'auto' }}
                      prefetch={false}
                    >
                      <span className="block w-full">{item.name}</span>
                    </Link>
                  ))}
                </div>
                {rowIndex < rows.length - 1 && (
                  <div className="w-full h-[1px] bg-gray-200 my-1"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  // Desktop layout - optimized for performance
  return (
    <div
      className={`${styles.desktopDropdown} border-t border-gray-200`}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <div className="container mx-auto py-0 px-2 flex justify-center">
        <div className="flex flex-col w-full max-w-6xl pl-4">
          {rows.map((row, rowIndex) => (
            <div key={rowIndex} className="w-full">
              <div className="grid grid-cols-4 gap-x-1 justify-between items-center w-full py-0.5">
                {row.map((item, index) => (
                  <Link
                    key={index}
                    href={item.href}
                    className="text-gray-700 hover:text-red-600 text-sm font-medium py-0.5 px-2 hover:bg-gray-50 rounded-md text-center relative whitespace-nowrap overflow-hidden text-ellipsis"
                    prefetch={false}
                  >
                    <span className="whitespace-nowrap overflow-hidden text-ellipsis block w-full">{item.name}</span>
                  </Link>
                ))}
              </div>
              {rowIndex < rows.length - 1 && (
                <div className="w-full h-[1px] bg-gray-300 my-0.5"></div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}







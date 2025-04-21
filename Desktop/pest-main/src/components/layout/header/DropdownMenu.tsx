import { DROPDOWN_MENU_ITEMS } from '../../lib/constants';
import Link from 'next/link';

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
  if (!activeDropdown) return null;

  // All dropdown menus use the same format from constants
  const menuItems = DROPDOWN_MENU_ITEMS[activeDropdown as keyof typeof DROPDOWN_MENU_ITEMS] || [];

  // Group items into rows for better organization
  // Using 4 items per row for all dropdown menus for better readability and larger font size
  const itemsPerRow = 4; // Fixed 4 items per row for all dropdown menus
  const rows = [];
  for (let i = 0; i < menuItems.length; i += itemsPerRow) {
    rows.push(menuItems.slice(i, i + itemsPerRow));
  }

  return (
    <div
      className="absolute top-full left-0 w-full bg-white shadow-lg z-50 transition-all duration-300 ease-in-out overflow-hidden border-t border-gray-100"
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <div className="container mx-auto py-3 px-4 flex justify-center">
        <div className="flex flex-col w-full max-w-6xl">
          {rows.map((row, rowIndex) => (
            <div key={rowIndex} className="w-full">
              <div className="grid grid-cols-4 gap-x-1 justify-between items-center w-full py-2">
                {row.map((item, index) => (
                  <Link
                    key={index}
                    href={item.href}
                    className="text-gray-700 hover:text-red-dark transition-all duration-200 text-sm md:text-base font-medium py-1 px-2 hover:bg-gray-50 hover:shadow-md rounded-md text-center relative group whitespace-nowrap overflow-hidden text-ellipsis hover:scale-105"
                  >
                    <span className="relative z-10 whitespace-nowrap overflow-hidden text-ellipsis block w-full">{item.name}</span>
                    <span className="absolute inset-0 bg-gradient-to-r from-red-light/10 to-red-dark/10 rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-200"></span>
                  </Link>
                ))}
              </div>
              {rowIndex < rows.length - 1 && (
                <div className="w-full h-[1px] bg-gray-300 my-2"></div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}







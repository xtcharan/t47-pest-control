import { DROPDOWN_MENU_ITEMS } from '../../lib/constants';
import BoxedMenuItem from './BoxedMenuItem';

interface DropdownMenuProps {
  activeDropdown: string | null;
  onMouseEnter: () => void;
  onMouseLeave: () => void;
  boxSize?: 'small' | 'medium' | 'large';
}

export default function DropdownMenu({
  activeDropdown,
  onMouseEnter,
  onMouseLeave,
  boxSize = 'small'
}: DropdownMenuProps) {
  if (!activeDropdown) return null;

  // Map menu keys to icon paths
  const getIconPath = (menuKey: string, itemName?: string) => {
    // Default icons for each menu category
    const defaultIcons: Record<string, string> = {
      'residential': '/images/icons/home.svg',
      'commercial': '/images/icons/factory.svg',
      'termite': '/images/icons/bug.svg',
      'about': '/images/icons/info.svg',
      'areas': '/images/icons/map.svg',
    };

    // Specific icons for individual menu items
    const specificIcons: Record<string, string> = {
      // Residential items
      'Pest Inspections': '/images/icons/search.svg',
      'Termite Inspections': '/images/icons/bug.svg',
      'Wasps': '/images/icons/wasp.svg',
      'Rats': '/images/icons/rat.svg',
      'Bees': '/images/icons/bee.svg',
      'Bed Bugs': '/images/icons/bed.svg',
      'Cockroaches': '/images/icons/cockroach.svg',
      'Spiders': '/images/icons/spider.svg',
      'Ants': '/images/icons/ant.svg',
      'Mice': '/images/icons/mouse.svg',
      'Flies': '/images/icons/fly.svg',

      // Commercial items
      'All business sectors': '/images/icons/building.svg',
      'Food processing': '/images/icons/factory.svg',
      'Logistics & warehousing': '/images/icons/truck.svg',
      'Hotels': '/images/icons/hotel.svg',
      'Food retail': '/images/icons/shopping-cart.svg',
      'Pharmaceutical': '/images/icons/medicine.svg',
      'Offices': '/images/icons/office.svg',
      'Healthcare': '/images/icons/healthcare.svg',
    };

    // Return specific icon if available, otherwise use default for the menu category
    return itemName && specificIcons[itemName] ? specificIcons[itemName] : defaultIcons[menuKey] || '/images/icons/building.svg';
  };

  // Determine icon size based on box size
  const getIconSize = () => {
    switch (boxSize) {
      case 'small': return 24;
      case 'large': return 64;
      default: return 48;
    }
  };

  // All dropdown menus use the same format from constants
  const menuItems = DROPDOWN_MENU_ITEMS[activeDropdown as keyof typeof DROPDOWN_MENU_ITEMS] || [];

  return (
    <div
      className="absolute top-full left-0 w-full bg-white shadow-lg z-50 transition-all duration-300 ease-in-out overflow-hidden"
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <div className="container mx-auto py-1 px-4 flex justify-center">
        <div className="grid grid-cols-5 gap-0 justify-center items-start mx-auto max-w-4xl [&>*]:m-0">
          {menuItems.map((item, index) => (
            <BoxedMenuItem
              key={index}
              name={item.name}
              href={item.href}
              iconSrc={getIconPath(activeDropdown, item.name)}
              boxSize={boxSize}
              iconSize={getIconSize()}
            />
          ))}
        </div>
      </div>
    </div>
  );
}







import Link from 'next/link';

interface NavigationItemProps {
  name: string;
  href: string;
  menuKey: string;
  isActive: boolean;
  onMouseEnter: (menu: string) => void;
  onMouseLeave: () => void;
  setRef: (el: HTMLDivElement | null, key: string) => void;
}

export default function NavigationItem({
  name,
  href,
  menuKey,
  isActive,
  onMouseEnter,
  onMouseLeave,
  setRef
}: NavigationItemProps) {
  return (
    <div
      ref={(el) => setRef(el, menuKey)}
      className="relative"
      onMouseEnter={() => onMouseEnter(menuKey)}
      onMouseLeave={onMouseLeave}
    >
      <Link
        href={href}
        className={`relative inline-block px-3 py-2 mx-1 rounded-md overflow-hidden group transition-all duration-300 ${isActive ? 'bg-gradient-to-r from-red-light to-red-dark text-white shadow-md' : 'hover:bg-gray-50 hover:shadow-md hover:scale-105'}`}
      >
        <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-red-light to-red-dark opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-md"></span>
        <span className={`relative z-10 font-medium transition-colors duration-300 ${isActive ? 'text-white' : 'text-gray-700 group-hover:text-white'}`}>
          {name}
        </span>
      </Link>
    </div>
  );
}

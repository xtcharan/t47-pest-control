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
      className="relative py-2"
      onMouseEnter={() => onMouseEnter(menuKey)}
      onMouseLeave={onMouseLeave}
    >
      <Link
        href={href}
        className={`text-nav hover:text-accent transition-colors ${isActive ? 'text-accent' : ''}`}
      >
        {name}
      </Link>
    </div>
  );
}

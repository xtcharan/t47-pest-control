import Image from 'next/image';
import Link from 'next/link';

interface BoxedMenuItemProps {
  name: string;
  href: string;
  iconSrc: string;
  boxSize?: 'small' | 'medium' | 'large';
  iconSize?: number;
}

export default function BoxedMenuItem({
  name,
  href,
  iconSrc,
  boxSize = 'medium',
  iconSize = 48
}: BoxedMenuItemProps) {
  // Box size classes based on the boxSize prop
  const boxSizeClasses = {
    small: {
      box: 'p-1',
      container: 'w-8 h-8',
    },
    medium: {
      box: 'p-2',
      container: 'w-12 h-12',
    },
    large: {
      box: 'p-3',
      container: 'w-16 h-16',
    },
  };

  const { box, container } = boxSizeClasses[boxSize];

  return (
    <Link
      href={href}
      className={`flex flex-col items-center justify-center ${box} border border-gray-200 rounded-md hover:shadow-md transition-all hover:border-accent group text-center mx-0 my-0 h-full`}
    >
      <div className={`${container} flex items-center justify-center`}>
        <Image
          src={iconSrc}
          alt={name}
          width={iconSize}
          height={iconSize}
          className="group-hover:scale-110 transition-transform"
        />
      </div>
      <span className="text-gray-700 text-xs text-center w-full group-hover:text-accent transition-colors">
        {name}
      </span>
    </Link>
  );
}

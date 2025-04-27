import Link from 'next/link';

interface LocationsDropdownProps {
  isVisible: boolean;
}

const LocationsDropdown = ({ isVisible }: LocationsDropdownProps) => {
  // List of locations in alphabetical order
  const locations = [
    { name: 'Adelaide', path: '/areas/adelaide' },
    { name: 'Ballarat', path: '/areas/ballarat' },
    { name: 'Bendigo', path: '/areas/bendigo' },
    { name: 'Brisbane', path: '/areas/brisbane' },
    { name: 'Canberra', path: '/areas/canberra' },
    { name: 'Melbourne', path: '/areas/melbourne' },
    { name: 'Mildura', path: '/areas/mildura' },
    { name: 'Perth', path: '/areas/perth' },
    { name: 'Shepparton', path: '/areas/shepparton' },
    { name: 'Sydney', path: '/areas/sydney' },
    { name: 'Warrnambool', path: '/areas/warrnambool' },
    { name: 'Wodonga', path: '/areas/wodonga' }
  ];

  if (!isVisible) return null;

  return (
    <div className="absolute top-full right-0 mt-0 bg-white shadow-md rounded-b-lg overflow-hidden z-50 w-40 border border-gray-200">
      <div className="py-2 px-3">
        <h3 className="text-xs font-semibold text-gray-700 mb-1 border-b border-gray-100 pb-1">Service Locations</h3>
        <div className="grid grid-cols-1">
          {locations.map((location) => (
            <Link
              key={location.name}
              href={location.path}
              className="text-gray-600 hover:text-red-600 transition-colors text-xs py-1"
            >
              {location.name}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LocationsDropdown;

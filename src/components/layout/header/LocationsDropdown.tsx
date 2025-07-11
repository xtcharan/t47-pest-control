import Link from 'next/link';

interface LocationsDropdownProps {
  isVisible: boolean;
}

const LocationsDropdown = ({ isVisible }: LocationsDropdownProps) => {
  // List of locations in alphabetical order
  const locations = [
    { name: 'Adelaide', path: '/local-branches/adelaide' },
    { name: 'Albury', path: '/local-branches/albury' },
    { name: 'Ballarat', path: '/local-branches/ballarat' },
    { name: 'Bendigo', path: '/local-branches/bendigo' },
    { name: 'Brisbane', path: '/local-branches/brisbane' },
    { name: 'Cairns', path: '/local-branches/cairns' },
    { name: 'Canberra', path: '/local-branches/canberra' },
    { name: 'Darwin', path: '/local-branches/darwin' },
    { name: 'Geelong', path: '/local-branches/geelong' },
    { name: 'Hobart', path: '/local-branches/hobart' },
    { name: 'Melbourne', path: '/local-branches/melbourne' },
    { name: 'Mildura', path: '/local-branches/mildura' },
    { name: 'Newcastle', path: '/local-branches/newcastle' },
    { name: 'Perth', path: '/local-branches/perth' },
    { name: 'Shepparton', path: '/local-branches/shepparton' },
    { name: 'Sydney', path: '/local-branches/sydney' },
    { name: 'Townsville', path: '/local-branches/townsville' },
    { name: 'Victoria', path: '/local-branches/victoria' },
    { name: 'Warrnambool', path: '/local-branches/warrnambool' }
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

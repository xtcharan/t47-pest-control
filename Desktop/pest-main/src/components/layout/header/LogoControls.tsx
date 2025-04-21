"use client";
import { useState, useEffect } from 'react';

export default function LogoControls() {
  // State for each control
  const [logoWidth, setLogoWidth] = useState('auto');
  const [logoHeight, setLogoHeight] = useState('150px');
  const [companyNameSize, setCompanyNameSize] = useState('3rem');
  const [companyTaglineSize, setCompanyTaglineSize] = useState('1rem');
  const [showControls, setShowControls] = useState(false);

  // Update CSS variables when state changes
  useEffect(() => {
    document.documentElement.style.setProperty('--logo-width', logoWidth);
    document.documentElement.style.setProperty('--logo-height', logoHeight);
    document.documentElement.style.setProperty('--company-name-size', companyNameSize);
    document.documentElement.style.setProperty('--company-tagline-size', companyTaglineSize);
  }, [
    logoWidth,
    logoHeight,
    companyNameSize,
    companyTaglineSize
  ]);

  // Helper function to handle numeric inputs with px units
  const handlePxInput = (value: string, setter: (value: string) => void) => {
    // Remove 'px' if present, convert to number, then add 'px' back
    const numValue = parseInt(value.replace('px', ''));
    if (!isNaN(numValue)) {
      setter(`${numValue}px`);
    }
  };

  // Helper function to handle rem inputs
  const handleRemInput = (value: string, setter: (value: string) => void) => {
    // Remove 'rem' if present, convert to number, then add 'rem' back
    const numValue = parseFloat(value.replace('rem', ''));
    if (!isNaN(numValue)) {
      setter(`${numValue}rem`);
    }
  };

  if (!showControls) {
    return (
      <button
        type="button"
        onClick={() => setShowControls(true)}
        className="fixed bottom-4 right-4 bg-green-light text-white p-2 rounded-md shadow-md z-50"
      >
        Show Logo Controls
      </button>
    );
  }

  return (
    <div className="fixed bottom-4 right-4 bg-white p-4 rounded-md shadow-lg z-50 max-w-md">
      <div className="flex justify-between items-center mb-4">
        <h3 className="font-bold text-lg">Logo & Text Controls</h3>
        <button
          type="button"
          onClick={() => setShowControls(false)}
          className="text-gray-500 hover:text-gray-700"
        >
          ✕
        </button>
      </div>

      <div className="grid grid-cols-2 gap-4">
        {/* Logo Controls */}
        <div className="col-span-2">
          <h4 className="font-semibold mb-2">Logo Controls</h4>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Width</label>
          <input
            type="text"
            value={logoWidth}
            onChange={(e) => logoWidth === 'auto' ? setLogoWidth(e.target.value) : handlePxInput(e.target.value, setLogoWidth)}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm"
            placeholder="auto"
            title="Logo width in pixels or 'auto'"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Height</label>
          <input
            type="text"
            value={logoHeight}
            onChange={(e) => handlePxInput(e.target.value, setLogoHeight)}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm"
            placeholder="150px"
            title="Logo height in pixels"
          />
        </div>

        {/* Company Name Controls */}
        <div className="col-span-2 mt-4">
          <h4 className="font-semibold mb-2">Text Controls</h4>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Company Name Size</label>
          <input
            type="text"
            value={companyNameSize}
            onChange={(e) => handleRemInput(e.target.value, setCompanyNameSize)}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm"
            placeholder="3rem"
            title="Company name font size in rem units"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Tagline Size</label>
          <input
            type="text"
            value={companyTaglineSize}
            onChange={(e) => handleRemInput(e.target.value, setCompanyTaglineSize)}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm"
            placeholder="1rem"
            title="Company tagline font size in rem units"
          />
        </div>

        {/* Reset Button */}
        <button
          type="button"
          onClick={() => {
            setLogoWidth('auto');
            setLogoHeight('150px');
            setCompanyNameSize('3rem');
            setCompanyTaglineSize('1rem');
          }}
          className="col-span-2 mt-4 bg-gray-200 hover:bg-gray-300 text-gray-800 font-medium py-2 px-4 rounded-md transition-colors"
        >
          Reset to Defaults
        </button>
      </div>
    </div>
  );
}

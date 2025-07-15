"use client";

import dynamic from 'next/dynamic';
import { ComponentType } from 'react';

// Lazy load search components for better performance
export const LazySearchResults = dynamic(
  () => import('./SearchResults'),
  {
    loading: () => (
      <div className="absolute top-full left-0 right-0 bg-white border border-gray-200 rounded-md shadow-lg p-4 z-50">
        <div className="animate-pulse">
          <div className="h-4 bg-gray-200 rounded w-3/4 mb-2"></div>
          <div className="h-4 bg-gray-200 rounded w-1/2"></div>
        </div>
      </div>
    ),
    ssr: false
  }
);

export const LazySearchModal = dynamic(
  () => import('./SearchModal'),
  {
    loading: () => null,
    ssr: false
  }
);

// Lazy load dropdown components
export const LazyDropdownMenu = dynamic(
  () => import('../layout/header/DropdownMenu'),
  {
    loading: () => null,
    ssr: false
  }
);

export const LazyLocationsDropdown = dynamic(
  () => import('../layout/header/LocationsDropdown'),
  {
    loading: () => null,
    ssr: false
  }
);

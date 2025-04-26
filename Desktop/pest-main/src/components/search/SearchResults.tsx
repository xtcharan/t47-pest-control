"use client";

import { SearchItem } from '@/data/searchData';
import Link from 'next/link';
import { useEffect, useRef } from 'react';
import Image from 'next/image';

interface SearchResultsProps {
  results: SearchItem[];
  query: string;
  isLoading: boolean;
  onClose: () => void;
  onResultClick: () => void;
}

export default function SearchResults({ 
  results, 
  query, 
  isLoading, 
  onClose,
  onResultClick
}: SearchResultsProps) {
  const resultsRef = useRef<HTMLDivElement>(null);

  // Handle click outside to close results
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (resultsRef.current && !resultsRef.current.contains(event.target as Node)) {
        onClose();
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [onClose]);

  // Handle escape key to close results
  useEffect(() => {
    function handleEscKey(event: KeyboardEvent) {
      if (event.key === 'Escape') {
        onClose();
      }
    }

    document.addEventListener('keydown', handleEscKey);
    return () => {
      document.removeEventListener('keydown', handleEscKey);
    };
  }, [onClose]);

  if (!query) return null;

  return (
    <div 
      className="absolute top-full right-0 mt-1 w-80 max-h-[80vh] overflow-y-auto bg-white rounded-md shadow-lg z-50 border border-gray-200"
      ref={resultsRef}
    >
      <div className="p-3 border-b border-gray-200">
        <div className="flex justify-between items-center">
          <h3 className="text-sm font-semibold text-gray-700">
            {isLoading ? 'Searching...' : `Results for "${query}"`}
          </h3>
          <button 
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600"
            aria-label="Close search results"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </button>
        </div>
      </div>

      {isLoading ? (
        <div className="p-4 text-center">
          <div className="inline-block animate-spin rounded-full h-6 w-6 border-b-2 border-red-600"></div>
        </div>
      ) : results.length > 0 ? (
        <div>
          {results.map((result) => (
            <Link
              key={result.id}
              href={result.url}
              className="block p-3 hover:bg-gray-50 transition-colors border-b border-gray-100 last:border-b-0"
              onClick={() => {
                onResultClick();
                onClose();
              }}
            >
              <div className="flex items-center">
                {result.image && (
                  <div className="flex-shrink-0 mr-3">
                    <div className="w-10 h-10 bg-gray-50 rounded-full flex items-center justify-center overflow-hidden">
                      <Image
                        src={result.image}
                        alt={result.title}
                        width={24}
                        height={24}
                        className="object-contain"
                      />
                    </div>
                  </div>
                )}
                <div>
                  <h4 className="text-sm font-medium text-gray-800">{result.title}</h4>
                  <p className="text-xs text-gray-500 mt-0.5 line-clamp-1">{result.description}</p>
                  <div className="mt-1 flex flex-wrap gap-1">
                    <span className="inline-block px-2 py-0.5 text-[10px] bg-red-50 text-red-600 rounded-full">
                      {result.category}
                    </span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      ) : (
        <div className="p-4 text-center text-gray-500 text-sm">
          <p>No results found for "{query}"</p>
          <p className="mt-1 text-xs">Try different keywords or check spelling</p>
        </div>
      )}

      {results.length > 0 && (
        <div className="p-2 bg-gray-50 border-t border-gray-200 text-center">
          <Link
            href={`/search?q=${encodeURIComponent(query)}`}
            className="text-xs text-red-600 hover:text-red-800 font-medium"
            onClick={onClose}
          >
            View all results
          </Link>
        </div>
      )}
    </div>
  );
}

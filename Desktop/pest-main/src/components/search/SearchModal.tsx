"use client";

import { SearchItem } from '@/data/searchData';
import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function SearchModal({ isOpen, onClose }: SearchModalProps) {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<SearchItem[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const modalRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // Focus input when modal opens
  useEffect(() => {
    if (isOpen && inputRef.current) {
      setTimeout(() => {
        inputRef.current?.focus();
      }, 100);
    }
  }, [isOpen]);

  // Handle search
  useEffect(() => {
    const delayDebounceFn = setTimeout(() => {
      if (query.trim().length > 1) {
        handleSearch();
      } else {
        setResults([]);
      }
    }, 300);

    return () => clearTimeout(delayDebounceFn);
  }, [query]);

  // Handle search function
  const handleSearch = async () => {
    if (query.trim().length < 2) return;
    
    setIsLoading(true);
    try {
      const response = await fetch(`/api/search?q=${encodeURIComponent(query)}`);
      const data = await response.json();
      setResults(data.results);
    } catch (error) {
      console.error('Search error:', error);
    } finally {
      setIsLoading(false);
    }
  };

  // Handle escape key to close modal
  useEffect(() => {
    function handleEscKey(event: KeyboardEvent) {
      if (event.key === 'Escape') {
        onClose();
      }
    }

    if (isOpen) {
      document.addEventListener('keydown', handleEscKey);
    }
    
    return () => {
      document.removeEventListener('keydown', handleEscKey);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-start justify-center pt-16 px-4">
      <div 
        ref={modalRef}
        className="bg-white w-full max-w-md rounded-lg shadow-xl overflow-hidden max-h-[80vh] flex flex-col"
      >
        <div className="p-4 border-b border-gray-200">
          <div className="flex items-center">
            <div className="relative flex-1">
              <input
                ref={inputRef}
                type="text"
                placeholder="Search for pests, services..."
                className="w-full pl-10 pr-4 py-2 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
              />
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                className="h-5 w-5 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2" 
                viewBox="0 0 20 20" 
                fill="currentColor"
              >
                <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" />
              </svg>
              {query && (
                <button
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                  onClick={() => setQuery('')}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                  </svg>
                </button>
              )}
            </div>
            <button 
              className="ml-2 text-gray-500 hover:text-gray-700"
              onClick={onClose}
            >
              Cancel
            </button>
          </div>
        </div>

        <div className="overflow-y-auto flex-1">
          {isLoading ? (
            <div className="p-8 text-center">
              <div className="inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-red-600"></div>
              <p className="mt-2 text-gray-500">Searching...</p>
            </div>
          ) : results.length > 0 ? (
            <div>
              {results.map((result) => (
                <Link
                  key={result.id}
                  href={result.url}
                  className="block p-4 hover:bg-gray-50 transition-colors border-b border-gray-100"
                  onClick={onClose}
                >
                  <div className="flex items-center">
                    {result.image && (
                      <div className="flex-shrink-0 mr-4">
                        <div className="w-12 h-12 bg-gray-50 rounded-full flex items-center justify-center overflow-hidden">
                          <Image
                            src={result.image}
                            alt={result.title}
                            width={32}
                            height={32}
                            className="object-contain"
                          />
                        </div>
                      </div>
                    )}
                    <div>
                      <h4 className="text-base font-medium text-gray-800">{result.title}</h4>
                      <p className="text-sm text-gray-500 mt-1 line-clamp-2">{result.description}</p>
                      <div className="mt-2 flex flex-wrap gap-1">
                        <span className="inline-block px-2 py-0.5 text-xs bg-red-50 text-red-600 rounded-full">
                          {result.category}
                        </span>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          ) : query.length > 1 ? (
            <div className="p-8 text-center text-gray-500">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 mx-auto text-gray-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <p className="mt-4">No results found for "{query}"</p>
              <p className="mt-1 text-sm">Try different keywords or check spelling</p>
            </div>
          ) : (
            <div className="p-8 text-center text-gray-500">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 mx-auto text-gray-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16l2.879-2.879m0 0a3 3 0 104.243-4.242 3 3 0 00-4.243 4.242zM21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <p className="mt-4">Search for pest control services</p>
              <p className="mt-1 text-sm">Type at least 2 characters to search</p>
            </div>
          )}
        </div>

        {results.length > 0 && (
          <div className="p-3 bg-gray-50 border-t border-gray-200">
            <Link
              href={`/search?q=${encodeURIComponent(query)}`}
              className="block w-full py-2 text-center bg-red-600 text-white rounded-md hover:bg-red-700 transition-colors"
              onClick={onClose}
            >
              View all results
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}

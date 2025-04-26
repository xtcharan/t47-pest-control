"use client";

import { useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import { SearchItem } from '@/data/searchData';
import Link from 'next/link';
import Image from 'next/image';

export default function SearchPage() {
  const searchParams = useSearchParams();
  const query = searchParams.get('q') || '';
  const [results, setResults] = useState<SearchItem[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [categories, setCategories] = useState<Record<string, number>>({});
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  useEffect(() => {
    async function fetchResults() {
      if (!query) {
        setResults([]);
        setIsLoading(false);
        return;
      }

      setIsLoading(true);
      try {
        const response = await fetch(`/api/search?q=${encodeURIComponent(query)}`);
        const data = await response.json();
        setResults(data.results);
        
        // Count results by category
        const categoryCounts: Record<string, number> = {};
        data.results.forEach((item: SearchItem) => {
          categoryCounts[item.category] = (categoryCounts[item.category] || 0) + 1;
        });
        setCategories(categoryCounts);
      } catch (error) {
        console.error('Search error:', error);
      } finally {
        setIsLoading(false);
      }
    }

    fetchResults();
  }, [query]);

  // Filter results by active category
  const filteredResults = activeCategory 
    ? results.filter(item => item.category === activeCategory)
    : results;

  return (
    <main className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold text-gray-800 mb-2">Search Results</h1>
          <p className="text-gray-600 mb-8">
            {isLoading ? 'Searching...' : 
              results.length > 0 
                ? `Found ${results.length} results for "${query}"` 
                : `No results found for "${query}"`
            }
          </p>

          {/* Search form */}
          <div className="bg-white rounded-lg shadow-md p-4 mb-8">
            <form 
              className="flex items-center"
              onSubmit={(e) => {
                e.preventDefault();
                const formData = new FormData(e.currentTarget);
                const searchQuery = formData.get('q') as string;
                if (searchQuery.trim()) {
                  window.location.href = `/search?q=${encodeURIComponent(searchQuery.trim())}`;
                }
              }}
            >
              <div className="relative flex-1">
                <input
                  type="text"
                  name="q"
                  defaultValue={query}
                  placeholder="Search for pests, services..."
                  className="w-full pl-10 pr-4 py-3 rounded-l-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
                />
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  className="h-5 w-5 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2" 
                  viewBox="0 0 20 20" 
                  fill="currentColor"
                >
                  <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" />
                </svg>
              </div>
              <button
                type="submit"
                className="bg-red-600 hover:bg-red-700 text-white py-3 px-6 rounded-r-lg transition-colors"
              >
                Search
              </button>
            </form>
          </div>

          {isLoading ? (
            <div className="text-center py-12">
              <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-red-600"></div>
              <p className="mt-4 text-gray-600">Searching for results...</p>
            </div>
          ) : results.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              {/* Category filters */}
              <div className="md:col-span-1">
                <div className="bg-white rounded-lg shadow-md p-4 sticky top-4">
                  <h2 className="text-lg font-semibold text-gray-800 mb-3">Categories</h2>
                  <ul className="space-y-2">
                    <li>
                      <button
                        className={`w-full text-left px-3 py-2 rounded-md ${
                          activeCategory === null 
                            ? 'bg-red-50 text-red-700 font-medium' 
                            : 'text-gray-700 hover:bg-gray-50'
                        }`}
                        onClick={() => setActiveCategory(null)}
                      >
                        All Results ({results.length})
                      </button>
                    </li>
                    {Object.entries(categories).map(([category, count]) => (
                      <li key={category}>
                        <button
                          className={`w-full text-left px-3 py-2 rounded-md ${
                            activeCategory === category 
                              ? 'bg-red-50 text-red-700 font-medium' 
                              : 'text-gray-700 hover:bg-gray-50'
                          }`}
                          onClick={() => setActiveCategory(category)}
                        >
                          {category.charAt(0).toUpperCase() + category.slice(1)} ({count})
                        </button>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Results list */}
              <div className="md:col-span-3">
                <div className="bg-white rounded-lg shadow-md overflow-hidden">
                  {filteredResults.map((result, index) => (
                    <Link
                      key={result.id}
                      href={result.url}
                      className={`block p-6 hover:bg-gray-50 transition-colors ${
                        index < filteredResults.length - 1 ? 'border-b border-gray-100' : ''
                      }`}
                    >
                      <div className="flex items-start">
                        {result.image && (
                          <div className="flex-shrink-0 mr-4">
                            <div className="w-16 h-16 bg-gray-50 rounded-full flex items-center justify-center overflow-hidden">
                              <Image
                                src={result.image}
                                alt={result.title}
                                width={40}
                                height={40}
                                className="object-contain"
                              />
                            </div>
                          </div>
                        )}
                        <div>
                          <h3 className="text-lg font-semibold text-gray-800 mb-1">{result.title}</h3>
                          <p className="text-gray-600 mb-2">{result.description}</p>
                          <div className="flex flex-wrap gap-2">
                            <span className="inline-block px-2 py-1 text-xs bg-red-50 text-red-600 rounded-full">
                              {result.category}
                            </span>
                            {result.keywords.slice(0, 3).map((keyword, i) => (
                              <span key={i} className="inline-block px-2 py-1 text-xs bg-gray-100 text-gray-600 rounded-full">
                                {keyword}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          ) : (
            <div className="bg-white rounded-lg shadow-md p-8 text-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 mx-auto text-gray-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <h2 className="text-xl font-semibold text-gray-800 mt-4">No results found</h2>
              <p className="text-gray-600 mt-2">
                We couldn't find any results for "{query}". Please try different keywords or check spelling.
              </p>
              <div className="mt-6">
                <h3 className="text-lg font-medium text-gray-800 mb-3">Popular searches</h3>
                <div className="flex flex-wrap justify-center gap-2">
                  <Link href="/search?q=ants" className="px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-full text-gray-700 transition-colors">
                    Ants
                  </Link>
                  <Link href="/search?q=termites" className="px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-full text-gray-700 transition-colors">
                    Termites
                  </Link>
                  <Link href="/search?q=cockroaches" className="px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-full text-gray-700 transition-colors">
                    Cockroaches
                  </Link>
                  <Link href="/search?q=spiders" className="px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-full text-gray-700 transition-colors">
                    Spiders
                  </Link>
                  <Link href="/search?q=pest+control" className="px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-full text-gray-700 transition-colors">
                    Pest Control
                  </Link>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </main>
  );
}

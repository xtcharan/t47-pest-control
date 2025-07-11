"use client";

import Link from 'next/link';
import Image from 'next/image';
import { useState, useMemo } from 'react';
import { BlogPost } from '@/data/blogPosts';

interface BlogContentProps {
  allPosts: BlogPost[];
  blogCategories: string[];
}

export default function BlogContent({ allPosts, blogCategories }: BlogContentProps) {
  // State for filtering and search
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');

  // Filter posts based on category and search term
  const filteredPosts = useMemo(() => {
    let posts = allPosts;

    // Filter by category
    if (selectedCategory !== 'All') {
      posts = posts.filter(post => post.category === selectedCategory);
    }

    // Filter by search term
    if (searchTerm) {
      posts = posts.filter(post =>
        post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        post.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        post.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
      );
    }

    return posts;
  }, [allPosts, selectedCategory, searchTerm]);

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-primary">
          Latest Articles
        </h2>

        {/* Search and Filter Section */}
        <div className="max-w-4xl mx-auto mb-12">
          {/* Search Bar */}
          <div className="mb-8">
            <div className="relative">
              <input
                type="text"
                placeholder="Search articles by title, content, or tags..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full px-6 py-4 pl-12 rounded-xl border-2 border-gray-200 focus:border-green-light focus:outline-none text-lg"
              />
              <svg
                className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-4">
            {blogCategories.map((category) => (
              <button
                key={category}
                type="button"
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-3 rounded-full border-2 transition-colors font-medium ${
                  selectedCategory === category
                    ? 'bg-green-light text-black border-green-light'
                    : 'border-green-light text-green-light hover:bg-green-light hover:text-black'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Results Count */}
          <div className="text-center mt-6">
            <p className="text-gray-600">
              {searchTerm || selectedCategory !== 'All'
                ? `Showing ${filteredPosts.length} article${filteredPosts.length !== 1 ? 's' : ''}`
                : `${allPosts.length} total articles`
              }
              {searchTerm && ` for "${searchTerm}"`}
              {selectedCategory !== 'All' && ` in ${selectedCategory}`}
            </p>
          </div>
        </div>

        {/* Blog Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {filteredPosts.length > 0 ? (
            filteredPosts.map((post) => (
            <article key={post.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              {/* Blog Image */}
              <div className="relative h-48">
                <Image
                  src={post.image}
                  alt={`${post.title} - ${post.category} pest control`}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                {/* Overlay gradient for better text readability */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>

                {/* Category Badge Overlay */}
                <div className="absolute top-4 left-4">
                  <span className="bg-green-light text-black px-3 py-1 rounded-full text-sm font-medium shadow-sm">
                    {post.category}
                  </span>
                </div>
                {/* Read Time Badge */}
                <div className="absolute top-4 right-4">
                  <span className="bg-white/90 text-gray-700 px-2 py-1 rounded-full text-xs font-medium shadow-sm">
                    {post.readTime}
                  </span>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-lg md:text-xl font-bold mb-3 text-primary leading-tight">
                  <Link href={post.url} className="hover:text-green-light transition-colors">
                    {post.title}
                  </Link>
                </h3>
                <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                  {post.description.substring(0, 120)}...
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-gray-500 text-xs">
                    {new Date(post.publishDate).toLocaleDateString('en-AU')}
                  </span>
                  <Link
                    href={post.url}
                    className="text-green-light hover:text-green-dark transition-colors font-medium text-sm"
                  >
                    Read More →
                  </Link>
                </div>
              </div>
            </article>
            ))
          ) : (
            <div className="col-span-full text-center py-12">
              <div className="max-w-md mx-auto">
                <svg className="w-16 h-16 text-gray-400 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
                <h3 className="text-xl font-bold text-gray-800 mb-2">No Articles Found</h3>
                <p className="text-gray-600 mb-4">
                  {searchTerm
                    ? `No articles match "${searchTerm}". Try different keywords or browse all categories.`
                    : `No articles found in ${selectedCategory} category.`
                  }
                </p>
                <button
                  type="button"
                  onClick={() => {
                    setSearchTerm('');
                    setSelectedCategory('All');
                  }}
                  className="bg-green-light text-black px-6 py-2 rounded-lg hover:bg-green-dark hover:text-white transition-colors font-medium"
                >
                  Show All Articles
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

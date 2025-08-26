import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { getFeaturedBlogPosts, getAllBlogPosts, categories } from '@/data/blogPosts';
import ServiceForm from '@/components/forms/ServiceForm';
import BlogContent from '@/components/blog/BlogContent';

export const metadata: Metadata = {
  title: 'T47 Pest Control Blog - Expert Pest Control Tips & Guides | Australia',
  description: 'Expert pest control blog with comprehensive guides on Australian pests, identification tips, prevention strategies, and professional control methods. Stay informed with T47 Pest Control.',
  keywords: 'pest control blog, australian pests, pest identification, pest prevention, termite control, ant control, spider control, cockroach prevention, seasonal pest control',
  openGraph: {
    title: 'T47 Pest Control Blog - Expert Pest Control Tips & Guides',
    description: 'Expert pest control blog with comprehensive guides on Australian pests, identification tips, prevention strategies, and professional control methods.',
    type: 'website',
    url: 'https://www.t47pestcontrol.com/blog',
    images: [
      {
        url: 'https://www.t47pestcontrol.com/pest-control-hero.webp',
        width: 1200,
        height: 630,
        alt: 'T47 Pest Control Blog'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'T47 Pest Control Blog - Expert Pest Control Tips & Guides',
    description: 'Expert pest control blog with comprehensive guides on Australian pests, identification tips, prevention strategies, and professional control methods.',
    images: ['https://www.t47pestcontrol.com/pest-control-hero.webp']
  },
  alternates: {
    canonical: 'https://www.t47pestcontrol.com/blog'
  }
};

export default function BlogPage() {
  // Get static blog data
  const featuredPosts = getFeaturedBlogPosts(2);
  const allPosts = getAllBlogPosts(20);
  const blogCategories = categories;

  return (
    <main className="min-h-screen bg-white">


      {/* Featured Posts */}
      {featuredPosts.length > 0 && (
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-primary">
              Featured Articles
            </h2>
            <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
              {featuredPosts.map((post) => (
                <article key={post.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                  {/* Featured Blog Image */}
                  <div className="relative h-64">
                    <Image
                      src={post.image}
                      alt={`${post.title} - Featured ${post.category} pest control article`}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 50vw"
                      priority={true}
                    />
                    {/* Overlay gradient for better text readability */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>

                    {/* Featured Badge */}
                    <div className="absolute top-4 left-4">
                      <span className="bg-yellow-400 text-black px-3 py-1 rounded-full text-sm font-bold shadow-sm">
                        ⭐ Featured
                      </span>
                    </div>
                    {/* Category Badge */}
                    <div className="absolute top-4 right-4">
                      <span className="bg-green-light text-black px-3 py-1 rounded-full text-sm font-medium shadow-sm">
                        {post.category}
                      </span>
                    </div>
                    {/* Read Time Badge */}
                    <div className="absolute bottom-4 right-4">
                      <span className="bg-white/90 text-gray-700 px-2 py-1 rounded-full text-xs font-medium shadow-sm">
                        {post.readTime}
                      </span>
                    </div>
                  </div>

                  <div className="p-8">
                    <h3 className="text-xl md:text-2xl font-bold mb-4 text-primary leading-tight">
                      <Link href={post.url} className="hover:text-green-light transition-colors">
                        {post.title}
                      </Link>
                    </h3>
                    <p className="text-gray-600 mb-6 leading-relaxed">
                      {post.description}
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="text-gray-500 text-sm">
                        {new Date(post.publishDate).toLocaleDateString('en-AU', {
                          year: 'numeric',
                          month: 'long',
                          day: 'numeric'
                        })}
                      </span>
                      <Link
                        href={post.url}
                        className="bg-green-light text-black px-6 py-2 rounded-lg hover:bg-green-dark hover:text-white transition-colors font-medium"
                      >
                        Read More
                      </Link>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* All Posts */}
      <BlogContent allPosts={allPosts} blogCategories={blogCategories} />

      {/* Service Form Section */}
      <ServiceForm />

      {/* CTA Section */}
      <section className="bg-primary text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Need Professional Pest Control?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Don't let pests take over your home. Contact T47 Pest Control for expert,
            same-day service across Australia.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-green-light text-black px-8 py-3 rounded-lg hover:bg-green-dark hover:text-white transition-colors font-bold text-lg"
            >
              Get Free Quote
            </Link>
            <Link
              href="tel:+61434300216"
              className="border-2 border-white text-white px-8 py-3 rounded-lg hover:bg-white hover:text-primary transition-colors font-bold text-lg"
            >
              Call Now: +61 434 300 216
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

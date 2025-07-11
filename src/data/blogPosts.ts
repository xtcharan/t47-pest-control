// Static blog post data
export interface BlogPost {
  id: string;
  title: string;
  description: string;
  image: string;
  url: string;
  category: string;
  publishDate: string;
  readTime: string;
  featured: boolean;
  author: string;
  tags: string[];
}

export const blogPosts: BlogPost[] = [
  {
    id: '1',
    title: 'Australian Ant Species: Bull Ants, Black House Ants & Effective Control Methods',
    description: 'Australia hosts over 1,300 ant species, with many causing significant problems for homeowners. Learn to identify the most problematic species and discover professional control strategies that work.',
    image: '/ant-control-hero.webp',
    url: '/blog/australian-ant-species-control-guide',
    category: 'Ants',
    publishDate: '2024-12-19',
    readTime: '7 min read',
    featured: true,
    author: 'T47 Pest Control',
    tags: ['ants', 'identification', 'control', 'australia']
  },
  {
    id: '2',
    title: 'Australian Termite Species: Complete Identification & Control Guide',
    description: 'Comprehensive guide to identifying and controlling the most destructive termite species in Australia. Learn about subterranean, drywood, and dampwood termites.',
    image: '/termite-inspection-process.webp',
    url: '/blog/australian-termite-species-identification-guide',
    category: 'Termites',
    publishDate: '2024-12-18',
    readTime: '8 min read',
    featured: true,
    author: 'T47 Pest Control',
    tags: ['termites', 'identification', 'control', 'damage']
  },
  {
    id: '3',
    title: 'Australian Wasp Species: Identification & Professional Control Methods',
    description: 'Expert guide to identifying dangerous Australian wasps including European wasps, paper wasps, and mud daubers. Learn professional control strategies.',
    image: '/wasp-control-hero.webp',
    url: '/blog/australian-wasp-species-identification-control',
    category: 'Wasps',
    publishDate: '2024-12-17',
    readTime: '6 min read',
    featured: false,
    author: 'T47 Pest Control',
    tags: ['wasps', 'identification', 'safety', 'control']
  },
  {
    id: '4',
    title: 'Dangerous Australian Spiders: Identification & Control Guide',
    description: 'Complete guide to Australia\'s most dangerous spiders including redbacks, funnel-webs, and huntsman spiders. Professional identification and control methods.',
    image: '/spider-control-hero.webp',
    url: '/blog/dangerous-australian-spiders-identification-control',
    category: 'Spiders',
    publishDate: '2024-12-16',
    readTime: '9 min read',
    featured: false,
    author: 'T47 Pest Control',
    tags: ['spiders', 'venomous', 'identification', 'safety']
  },
  {
    id: '5',
    title: 'Cockroach Prevention Tips for Australian Homes',
    description: 'Essential cockroach prevention strategies for Australian homeowners. Learn about German, American, and Australian cockroach species and effective prevention methods.',
    image: '/cockroach-control-hero.webp',
    url: '/blog/cockroach-prevention-tips-australian-homes',
    category: 'Cockroaches',
    publishDate: '2024-12-15',
    readTime: '5 min read',
    featured: false,
    author: 'T47 Pest Control',
    tags: ['cockroaches', 'prevention', 'hygiene', 'control']
  },
  {
    id: '6',
    title: 'DIY vs Professional Pest Control: What Australian Homeowners Need to Know',
    description: 'Comprehensive comparison of DIY and professional pest control methods. Learn when to call professionals and when DIY methods might work.',
    image: '/extermination.webp',
    url: '/blog/diy-vs-professional-pest-control-australia',
    category: 'General',
    publishDate: '2024-12-14',
    readTime: '6 min read',
    featured: false,
    author: 'T47 Pest Control',
    tags: ['diy', 'professional', 'comparison', 'advice']
  },
  {
    id: '7',
    title: 'Seasonal Pest Control Guide for Australia',
    description: 'Year-round pest management strategies for Australian homes. Learn what pests are active in each season and how to prepare your home.',
    image: '/residential-pest-control.webp',
    url: '/blog/seasonal-pest-control-guide-australia',
    category: 'General',
    publishDate: '2024-12-13',
    readTime: '7 min read',
    featured: false,
    author: 'T47 Pest Control',
    tags: ['seasonal', 'prevention', 'planning', 'year-round']
  },
  {
    id: '8',
    title: 'Bed Bug Identification and Treatment Guide for Australian Homes',
    description: 'Complete guide to identifying, preventing, and treating bed bug infestations. Learn about bed bug lifecycle, signs of infestation, and professional treatment methods.',
    image: '/bed-bug-control-hero.webp',
    url: '/blog/bed-bug-identification-treatment-guide',
    category: 'Bed Bugs',
    publishDate: '2024-12-12',
    readTime: '8 min read',
    featured: false,
    author: 'T47 Pest Control',
    tags: ['bed bugs', 'identification', 'treatment', 'prevention']
  },
  {
    id: '9',
    title: 'Rodent Control: Effective Methods for Australian Properties',
    description: 'Professional rodent control strategies for rats and mice. Learn about identification, prevention, and safe elimination methods for Australian homes and businesses.',
    image: '/rodent-control-hero.webp',
    url: '/blog/rodent-control-methods-australia',
    category: 'Rodents',
    publishDate: '2024-12-11',
    readTime: '6 min read',
    featured: false,
    author: 'T47 Pest Control',
    tags: ['rodents', 'rats', 'mice', 'control', 'prevention']
  },
  {
    id: '10',
    title: 'Commercial Pest Control: Protecting Australian Businesses',
    description: 'Essential pest control strategies for Australian businesses. Learn about compliance requirements, prevention programs, and professional commercial pest management.',
    image: '/office-pest-control-hero.webp',
    url: '/blog/commercial-pest-control-australia',
    category: 'Commercial',
    publishDate: '2024-12-10',
    readTime: '7 min read',
    featured: false,
    author: 'T47 Pest Control',
    tags: ['commercial', 'business', 'compliance', 'prevention']
  }
];

export const categories = ['All', 'Ants', 'Termites', 'Wasps', 'Spiders', 'Cockroaches', 'Bed Bugs', 'Rodents', 'Commercial', 'General'];

export function getFeaturedBlogPosts(limit: number = 2): BlogPost[] {
  return blogPosts.filter(post => post.featured).slice(0, limit);
}

export function getAllBlogPosts(limit?: number): BlogPost[] {
  const posts = blogPosts.sort((a, b) => new Date(b.publishDate).getTime() - new Date(a.publishDate).getTime());
  return limit ? posts.slice(0, limit) : posts;
}

export function getBlogPostsByCategory(category: string): BlogPost[] {
  if (category === 'All') return getAllBlogPosts();
  return blogPosts.filter(post => post.category === category);
}

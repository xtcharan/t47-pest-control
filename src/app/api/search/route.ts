import { NextResponse } from 'next/server';
import { searchData, SearchItem } from '@/data/searchData';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const query = searchParams.get('q');
  
  if (!query) {
    return NextResponse.json({ results: [] });
  }

  // Convert query to lowercase for case-insensitive search
  const normalizedQuery = query.toLowerCase();
  
  // Search algorithm
  const results = searchData.filter(item => {
    // Check if query matches title
    if (item.title.toLowerCase().includes(normalizedQuery)) {
      return true;
    }
    
    // Check if query matches description
    if (item.description.toLowerCase().includes(normalizedQuery)) {
      return true;
    }
    
    // Check if query matches any keywords
    if (item.keywords.some(keyword => keyword.toLowerCase().includes(normalizedQuery))) {
      return true;
    }
    
    return false;
  });

  // Sort results by relevance
  // Items with matching title are prioritized, followed by keywords, then description
  const sortedResults = results.sort((a, b) => {
    const aTitle = a.title.toLowerCase().includes(normalizedQuery) ? 3 : 0;
    const bTitle = b.title.toLowerCase().includes(normalizedQuery) ? 3 : 0;
    
    const aKeyword = a.keywords.some(k => k.toLowerCase().includes(normalizedQuery)) ? 2 : 0;
    const bKeyword = b.keywords.some(k => k.toLowerCase().includes(normalizedQuery)) ? 2 : 0;
    
    const aDesc = a.description.toLowerCase().includes(normalizedQuery) ? 1 : 0;
    const bDesc = b.description.toLowerCase().includes(normalizedQuery) ? 1 : 0;
    
    return (bTitle + bKeyword + bDesc) - (aTitle + aKeyword + aDesc);
  });

  // Limit to top 10 results
  const limitedResults = sortedResults.slice(0, 10);
  
  return NextResponse.json({ 
    results: limitedResults,
    query: query,
    total: results.length
  });
}

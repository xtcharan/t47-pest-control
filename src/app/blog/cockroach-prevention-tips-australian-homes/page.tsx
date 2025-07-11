import { Metadata } from 'next';
import Link from 'next/link';
import OptimizedImage from '@/components/common/OptimizedImage';

export const metadata: Metadata = {
  title: 'Cockroach Prevention Tips for Australian Homes: Year-Round Protection | T47',
  description: 'Expert cockroach prevention strategies for Australian homes. Learn to prevent German, American, and Australian cockroaches with professional tips and eco-friendly methods.',
  keywords: 'cockroach prevention, german cockroach, american cockroach, australian cockroach, oriental cockroach, cockroach control, home pest prevention, cockroach infestation prevention',
  openGraph: {
    title: 'Cockroach Prevention Tips for Australian Homes: Year-Round Protection',
    description: 'Expert cockroach prevention strategies for Australian homes with professional tips and eco-friendly methods.',
    type: 'article',
    url: 'https://www.t47pestcontrol.com/blog/cockroach-prevention-tips-australian-homes',
    images: [
      {
        url: 'https://www.t47pestcontrol.com/cockroach-control-hero.webp',
        width: 1200,
        height: 630,
        alt: 'Cockroach Prevention Tips for Australian Homes'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Cockroach Prevention Tips for Australian Homes: Year-Round Protection',
    description: 'Expert cockroach prevention strategies for Australian homes.',
    images: ['https://www.t47pestcontrol.com/cockroach-control-hero.webp']
  },
  alternates: {
    canonical: 'https://www.t47pestcontrol.com/blog/cockroach-prevention-tips-australian-homes'
  }
};

export default function CockroachPreventionGuidePage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Breadcrumb */}
      <nav className="bg-gray-50 py-4">
        <div className="container mx-auto px-4">
          <div className="flex items-center space-x-2 text-sm">
            <Link href="/" className="text-[#ed8936] hover:underline">Home</Link>
            <span className="text-gray-500">/</span>
            <Link href="/blog" className="text-[#ed8936] hover:underline">Blog</Link>
            <span className="text-gray-500">/</span>
            <span className="text-gray-700">Cockroach Prevention Tips</span>
          </div>
        </div>
      </nav>

      {/* Article Header */}
      <article className="py-12">
        <div className="container mx-auto px-4 max-w-4xl">
          <header className="mb-12">
            <div className="flex items-center gap-4 mb-6">
              <span className="bg-[#ed8936] text-white px-4 py-2 rounded-full text-sm font-medium">
                Cockroaches
              </span>
              <span className="text-gray-500 text-sm">5 min read</span>
              <span className="text-gray-500 text-sm">Published: December 17, 2024</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-[#1a365d] mb-6 leading-tight">
              Cockroach Prevention: How to Keep Your Home Cockroach-Free Year-Round
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Prevent cockroach infestations before they start with these expert-proven strategies. 
              Learn about Australian cockroach species and implement effective prevention methods to protect your home.
            </p>
          </header>

          {/* Featured Image */}
          <div className="mb-12">
            <OptimizedImage
              src="/cockroach-control-hero.webp"
              alt="Cockroach prevention tips for Australian homes"
              width={800}
              height={400}
              className="w-full rounded-xl shadow-lg"
            />
          </div>

          {/* Key Statistics */}
          <div className="bg-[#ed8936] text-white p-8 rounded-xl mb-12">
            <h2 className="text-2xl font-bold mb-6 text-center">Cockroach Facts Every Australian Should Know</h2>
            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div>
                <div className="text-3xl font-bold mb-2">4,000+</div>
                <div className="text-sm">Cockroach species worldwide</div>
              </div>
              <div>
                <div className="text-3xl font-bold mb-2">450+</div>
                <div className="text-sm">Species found in Australia</div>
              </div>
              <div>
                <div className="text-3xl font-bold mb-2">5</div>
                <div className="text-sm">Major pest species in homes</div>
              </div>
            </div>
          </div>

          {/* Table of Contents */}
          <div className="bg-gray-50 p-6 rounded-xl mb-12">
            <h2 className="text-xl font-bold text-[#1a365d] mb-4">Table of Contents</h2>
            <ul className="space-y-2">
              <li><a href="#australian-species" className="text-[#ed8936] hover:underline">1. Australian Cockroach Species</a></li>
              <li><a href="#prevention-fundamentals" className="text-[#ed8936] hover:underline">2. Prevention Fundamentals</a></li>
              <li><a href="#sanitation-strategies" className="text-[#ed8936] hover:underline">3. Sanitation Strategies</a></li>
              <li><a href="#exclusion-methods" className="text-[#ed8936] hover:underline">4. Exclusion Methods</a></li>
              <li><a href="#environmental-control" className="text-[#ed8936] hover:underline">5. Environmental Control</a></li>
              <li><a href="#early-detection" className="text-[#ed8936] hover:underline">6. Early Detection Signs</a></li>
            </ul>
          </div>

          {/* Australian Species Section */}
          <section id="australian-species" className="mb-12">
            <h2 className="text-3xl font-bold text-[#1a365d] mb-6">Know Your Enemy: Australian Cockroach Species</h2>

            {/* German Cockroach Image */}
            <div className="mb-8">
              <OptimizedImage
                src="/german-cockroach.jpg"
                alt="German cockroach identification - most common household pest"
                width={700}
                height={350}
                className="w-full rounded-xl shadow-lg"
              />
              <p className="text-center text-gray-600 text-sm mt-2">German cockroaches are the most problematic species in Australian homes</p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div className="bg-red-50 border border-red-200 p-6 rounded-lg">
                <h3 className="text-xl font-bold text-[#ed8936] mb-4">German Cockroach</h3>
                <div className="space-y-2 text-gray-700">
                  <p><strong>Size:</strong> 12-15mm</p>
                  <p><strong>Color:</strong> Light brown with dark stripes</p>
                  <p><strong>Habitat:</strong> Kitchens, bathrooms, warm areas</p>
                  <p><strong>Reproduction:</strong> Fastest breeding species</p>
                  <p><strong>Risk Level:</strong> <span className="text-red-600 font-bold">VERY HIGH</span></p>
                  <p><strong>Prevention Focus:</strong> Eliminate food and water sources</p>
                </div>
              </div>

              <div className="bg-orange-50 border border-orange-200 p-6 rounded-lg">
                <h3 className="text-xl font-bold text-[#ed8936] mb-4">American Cockroach</h3>
                <div className="space-y-2 text-gray-700">
                  <p><strong>Size:</strong> 35-40mm (largest pest species)</p>
                  <p><strong>Color:</strong> Reddish-brown with yellow band</p>
                  <p><strong>Habitat:</strong> Sewers, basements, roof spaces</p>
                  <p><strong>Behavior:</strong> Strong fliers, attracted to light</p>
                  <p><strong>Risk Level:</strong> <span className="text-orange-600 font-bold">HIGH</span></p>
                  <p><strong>Prevention Focus:</strong> Seal entry points, reduce moisture</p>
                </div>
              </div>
            </div>

            {/* American Cockroach Image */}
            <div className="mb-8">
              <OptimizedImage
                src="/american-cockroach.jpg"
                alt="American cockroach identification - largest pest species"
                width={600}
                height={300}
                className="w-full rounded-xl shadow-lg"
              />
              <p className="text-center text-gray-600 text-sm mt-2">American cockroaches are the largest pest species found in Australian homes</p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div className="bg-yellow-50 border border-yellow-200 p-6 rounded-lg">
                <h3 className="text-xl font-bold text-[#ed8936] mb-4">Australian Cockroach</h3>
                <div className="space-y-2 text-gray-700">
                  <p><strong>Size:</strong> 23-35mm</p>
                  <p><strong>Color:</strong> Brown with yellow markings</p>
                  <p><strong>Habitat:</strong> Outdoor areas, under houses</p>
                  <p><strong>Diet:</strong> Plant matter, organic debris</p>
                  <p><strong>Risk Level:</strong> <span className="text-yellow-600 font-bold">MEDIUM</span></p>
                  <p><strong>Prevention Focus:</strong> Garden maintenance, perimeter control</p>
                </div>
              </div>

              <div className="bg-blue-50 border border-blue-200 p-6 rounded-lg">
                <h3 className="text-xl font-bold text-[#ed8936] mb-4">Oriental Cockroach</h3>
                <div className="space-y-2 text-gray-700">
                  <p><strong>Size:</strong> 20-25mm</p>
                  <p><strong>Color:</strong> Dark brown to black</p>
                  <p><strong>Habitat:</strong> Cool, damp areas</p>
                  <p><strong>Behavior:</strong> Poor climbers, ground-dwelling</p>
                  <p><strong>Risk Level:</strong> <span className="text-blue-600 font-bold">MEDIUM</span></p>
                  <p><strong>Prevention Focus:</strong> Moisture control, basement sealing</p>
                </div>
              </div>
            </div>

            {/* Australian and Oriental Cockroach Images */}
            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div>
                <OptimizedImage
                  src="/australian-cockroach.jpg"
                  alt="Australian cockroach identification"
                  width={400}
                  height={250}
                  className="w-full rounded-xl shadow-lg"
                />
                <p className="text-center text-gray-600 text-sm mt-2">Australian cockroach with distinctive yellow markings</p>
              </div>
              <div>
                <OptimizedImage
                  src="/oriental-cockroach.jpg"
                  alt="Oriental cockroach identification"
                  width={400}
                  height={250}
                  className="w-full rounded-xl shadow-lg"
                />
                <p className="text-center text-gray-600 text-sm mt-2">Oriental cockroach - dark colored ground-dwelling species</p>
              </div>
            </div>
          </section>

          {/* Prevention Fundamentals */}
          <section id="prevention-fundamentals" className="mb-12">
            <h2 className="text-3xl font-bold text-[#1a365d] mb-6">Prevention Fundamentals: The IPM Approach</h2>
            
            <div className="bg-green-50 border border-green-200 p-6 rounded-lg mb-8">
              <h3 className="text-xl font-bold text-green-800 mb-4">Integrated Pest Management (IPM) Principles</h3>
              <p className="text-green-700 mb-4">
                Effective cockroach prevention combines multiple strategies to create an environment 
                that's hostile to cockroaches while being safe for your family.
              </p>
              <div className="grid md:grid-cols-3 gap-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-green-800 mb-2">1</div>
                  <div className="text-green-700 font-semibold">Sanitation</div>
                  <div className="text-green-600 text-sm">Remove food & water</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-green-800 mb-2">2</div>
                  <div className="text-green-700 font-semibold">Exclusion</div>
                  <div className="text-green-600 text-sm">Block entry points</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-green-800 mb-2">3</div>
                  <div className="text-green-700 font-semibold">Monitoring</div>
                  <div className="text-green-600 text-sm">Early detection</div>
                </div>
              </div>
            </div>
          </section>

          {/* Sanitation Strategies */}
          <section id="sanitation-strategies" className="mb-12">
            <h2 className="text-3xl font-bold text-[#1a365d] mb-6">Sanitation Strategies: Eliminate Food & Water Sources</h2>
            
            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div>
                <h3 className="text-xl font-bold text-[#ed8936] mb-4">Kitchen Sanitation</h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-[#ed8936] mr-2 mt-1">✓</span>
                    <div>
                      <strong>Clean immediately after cooking:</strong> Wipe down surfaces, clean spills, wash dishes
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#ed8936] mr-2 mt-1">✓</span>
                    <div>
                      <strong>Store food properly:</strong> Airtight containers, sealed packages, elevated storage
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#ed8936] mr-2 mt-1">✓</span>
                    <div>
                      <strong>Regular deep cleaning:</strong> Behind appliances, inside cabinets, under sinks
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#ed8936] mr-2 mt-1">✓</span>
                    <div>
                      <strong>Garbage management:</strong> Sealed bins, regular emptying, clean containers
                    </div>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-bold text-[#ed8936] mb-4">Water Source Elimination</h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-[#ed8936] mr-2 mt-1">✓</span>
                    <div>
                      <strong>Fix leaks immediately:</strong> Pipes, taps, appliances, roof leaks
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#ed8936] mr-2 mt-1">✓</span>
                    <div>
                      <strong>Improve ventilation:</strong> Bathrooms, laundries, kitchens
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#ed8936] mr-2 mt-1">✓</span>
                    <div>
                      <strong>Eliminate standing water:</strong> Pet bowls, plant saucers, drains
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#ed8936] mr-2 mt-1">✓</span>
                    <div>
                      <strong>Dry wet areas:</strong> Wipe down showers, fix drainage issues
                    </div>
                  </li>
                </ul>
              </div>
            </div>

            <div className="bg-blue-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-[#1a365d] mb-4">Pet Food Management</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <ul className="space-y-2 text-gray-700">
                  <li>• Feed pets at scheduled times</li>
                  <li>• Remove uneaten food within 30 minutes</li>
                  <li>• Store pet food in sealed containers</li>
                  <li>• Clean feeding areas daily</li>
                </ul>
                <ul className="space-y-2 text-gray-700">
                  <li>• Wash food and water bowls regularly</li>
                  <li>• Keep feeding areas dry</li>
                  <li>• Store treats in airtight containers</li>
                  <li>• Check for spilled food around feeding areas</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Exclusion Methods */}
          <section id="exclusion-methods" className="mb-12">
            <h2 className="text-3xl font-bold text-[#1a365d] mb-6">Exclusion Methods: Block Entry Points</h2>
            
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="bg-white border border-gray-200 p-6 rounded-lg shadow-sm">
                <h3 className="text-lg font-bold text-[#ed8936] mb-3">Structural Sealing</h3>
                <ul className="space-y-2 text-gray-700 text-sm">
                  <li>• Seal cracks in walls and foundations</li>
                  <li>• Install door sweeps and weather stripping</li>
                  <li>• Repair damaged window screens</li>
                  <li>• Seal gaps around pipes and cables</li>
                  <li>• Use expanding foam for larger gaps</li>
                </ul>
              </div>
              <div className="bg-white border border-gray-200 p-6 rounded-lg shadow-sm">
                <h3 className="text-lg font-bold text-[#ed8936] mb-3">Appliance Areas</h3>
                <ul className="space-y-2 text-gray-700 text-sm">
                  <li>• Seal behind refrigerators and stoves</li>
                  <li>• Check dishwasher connections</li>
                  <li>• Inspect washing machine areas</li>
                  <li>• Seal electrical outlet gaps</li>
                  <li>• Install appliance gap fillers</li>
                </ul>
              </div>
              <div className="bg-white border border-gray-200 p-6 rounded-lg shadow-sm">
                <h3 className="text-lg font-bold text-[#ed8936] mb-3">Drainage Systems</h3>
                <ul className="space-y-2 text-gray-700 text-sm">
                  <li>• Install drain covers and traps</li>
                  <li>• Seal around pipe penetrations</li>
                  <li>• Check floor drain connections</li>
                  <li>• Repair damaged grout and caulking</li>
                  <li>• Maintain proper drainage slopes</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Environmental Control */}
          <section id="environmental-control" className="mb-12">
            <h2 className="text-3xl font-bold text-[#1a365d] mb-6">Environmental Control: Create Hostile Conditions</h2>
            
            <div className="bg-purple-50 border border-purple-200 p-6 rounded-lg mb-8">
              <h3 className="text-xl font-bold text-[#1a365d] mb-4">Temperature & Humidity Management</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-bold text-purple-700 mb-2">Optimal Conditions for Prevention</h4>
                  <ul className="space-y-1 text-purple-700 text-sm">
                    <li>• Humidity below 50% where possible</li>
                    <li>• Good air circulation</li>
                    <li>• Consistent temperatures</li>
                    <li>• Avoid warm, humid microclimates</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-bold text-purple-700 mb-2">Implementation Strategies</h4>
                  <ul className="space-y-1 text-purple-700 text-sm">
                    <li>• Use dehumidifiers in problem areas</li>
                    <li>• Improve ventilation systems</li>
                    <li>• Install exhaust fans</li>
                    <li>• Regular HVAC maintenance</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-bold text-[#ed8936] mb-4">Lighting Management</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Use yellow or sodium vapor outdoor lights</li>
                  <li>• Position lights away from entry points</li>
                  <li>• Install motion sensors to reduce attraction</li>
                  <li>• Keep indoor lights off when not needed</li>
                  <li>• Use curtains to block light spillage</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-bold text-[#ed8936] mb-4">Landscaping Considerations</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Maintain 30cm clearance from building</li>
                  <li>• Remove mulch and organic debris</li>
                  <li>• Trim vegetation regularly</li>
                  <li>• Eliminate water collection areas</li>
                  <li>• Use gravel or concrete borders</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Early Detection */}
          <section id="early-detection" className="mb-12">
            <h2 className="text-3xl font-bold text-[#1a365d] mb-6">Early Detection: Know the Warning Signs</h2>
            
            <div className="bg-yellow-50 border border-yellow-200 p-6 rounded-lg mb-8">
              <h3 className="text-xl font-bold text-yellow-800 mb-4">🔍 Monthly Inspection Checklist</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-bold text-yellow-700 mb-2">Visual Signs</h4>
                  <ul className="space-y-1 text-yellow-700 text-sm">
                    <li>• Live or dead cockroaches</li>
                    <li>• Egg cases (oothecae)</li>
                    <li>• Dark spots or stains</li>
                    <li>• Shed skins</li>
                    <li>• Smear marks on walls</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-bold text-yellow-700 mb-2">Other Indicators</h4>
                  <ul className="space-y-1 text-yellow-700 text-sm">
                    <li>• Musty, oily odors</li>
                    <li>• Damage to food packaging</li>
                    <li>• Grease marks near hiding spots</li>
                    <li>• Unusual pet behavior</li>
                    <li>• Allergic reactions in family</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-[#1a365d] mb-4">High-Risk Areas to Monitor</h3>
              <div className="grid md:grid-cols-3 gap-4">
                <div>
                  <h4 className="font-bold text-gray-700 mb-2">Kitchen Areas</h4>
                  <ul className="space-y-1 text-gray-600 text-sm">
                    <li>• Behind appliances</li>
                    <li>• Under sinks</li>
                    <li>• Inside cabinets</li>
                    <li>• Around garbage areas</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-bold text-gray-700 mb-2">Bathroom Areas</h4>
                  <ul className="space-y-1 text-gray-600 text-sm">
                    <li>• Around toilets</li>
                    <li>• Behind vanities</li>
                    <li>• In shower recesses</li>
                    <li>• Near hot water systems</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-bold text-gray-700 mb-2">Other Areas</h4>
                  <ul className="space-y-1 text-gray-600 text-sm">
                    <li>• Laundry rooms</li>
                    <li>• Basements/cellars</li>
                    <li>• Roof spaces</li>
                    <li>• Storage areas</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Professional Prevention */}
          <section className="bg-[#1a365d] text-white p-8 rounded-xl mb-12">
            <h2 className="text-2xl font-bold mb-4">When to Call Professionals</h2>
            <p className="text-lg text-gray-300 mb-6">
              While prevention is key, some situations require professional intervention for optimal results.
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-lg font-bold mb-3">Professional Prevention Services</h3>
                <ul className="space-y-2 text-gray-300">
                  <li>• Comprehensive property inspections</li>
                  <li>• Targeted barrier treatments</li>
                  <li>• Ongoing monitoring programs</li>
                  <li>• Customized prevention plans</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-bold mb-3">When to Act Immediately</h3>
                <ul className="space-y-2 text-gray-300">
                  <li>• First signs of cockroach activity</li>
                  <li>• Moving into a new property</li>
                  <li>• After renovation or construction</li>
                  <li>• Seasonal prevention treatments</li>
                </ul>
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="bg-[#ed8936] text-white p-8 rounded-xl text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              Prevent Cockroach Problems Before They Start
            </h2>
            <p className="text-lg mb-6">
              T47 Pest Control offers comprehensive cockroach prevention services with eco-friendly methods 
              and same-day service across Australia.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/residential/cockroaches"
                className="bg-white text-[#ed8936] px-6 py-3 rounded-lg hover:bg-gray-100 transition-colors font-bold"
              >
                Prevention Service
              </Link>
              <Link 
                href="tel:+61434300216"
                className="border-2 border-white text-white px-6 py-3 rounded-lg hover:bg-white hover:text-[#ed8936] transition-colors font-bold"
              >
                Call: +61 434 300 216
              </Link>
            </div>
          </section>
        </div>
      </article>

      {/* Related Articles */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-2xl font-bold text-[#1a365d] mb-8 text-center">Related Articles</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Link href="/blog/australian-ant-species-control-guide" className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <h3 className="font-bold text-[#1a365d] mb-2">Australian Ant Species</h3>
              <p className="text-gray-600 text-sm">Complete guide to ant identification and control.</p>
            </Link>
            <Link href="/blog/seasonal-pest-control-guide-australia" className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <h3 className="font-bold text-[#1a365d] mb-2">Seasonal Pest Control</h3>
              <p className="text-gray-600 text-sm">Year-round pest management strategies.</p>
            </Link>
            <Link href="/blog/diy-vs-professional-pest-control-australia" className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <h3 className="font-bold text-[#1a365d] mb-2">DIY vs Professional</h3>
              <p className="text-gray-600 text-sm">When to call pest control experts.</p>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

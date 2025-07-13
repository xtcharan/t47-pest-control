import { Metadata } from 'next';
import Link from 'next/link';
import OptimizedImage from '@/components/common/OptimizedImage';
import { COMPANY_INFO } from '@/components/lib/constants';

export const metadata: Metadata = {
  title: 'Dangerous Australian Spiders: Identification & Professional Control | T47',
  description: 'Expert guide to identifying dangerous Australian spiders including redback, funnel-web, huntsman, and wolf spiders with professional control solutions and safety tips.',
  keywords: 'australian spiders, redback spider, funnel web spider, huntsman spider, wolf spider, white tail spider, black widow spider, spider identification, spider control australia, venomous spiders',
  openGraph: {
    title: 'Dangerous Australian Spiders: Identification & Professional Control',
    description: 'Expert guide to identifying dangerous Australian spiders with professional control solutions and safety tips.',
    type: 'article',
    url: 'https://www.t47pestcontrol.com/blog/dangerous-australian-spiders-identification-control',
    images: [
      {
        url: 'https://www.t47pestcontrol.com/spider-control-hero.webp',
        width: 1200,
        height: 630,
        alt: 'Dangerous Australian Spiders Identification Guide'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Dangerous Australian Spiders: Identification & Professional Control',
    description: 'Expert guide to identifying dangerous Australian spiders with professional control solutions.',
    images: ['https://www.t47pestcontrol.com/spider-control-hero.webp']
  },
  alternates: {
    canonical: 'https://www.t47pestcontrol.com/blog/dangerous-australian-spiders-identification-control'
  }
};

export default function SpiderIdentificationGuidePage() {
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
            <span className="text-gray-700">Dangerous Australian Spiders Guide</span>
          </div>
        </div>
      </nav>

      {/* Article Header */}
      <article className="py-12">
        <div className="container mx-auto px-4 max-w-4xl">
          <header className="mb-12">
            <div className="flex items-center gap-4 mb-6">
              <span className="bg-[#ed8936] text-white px-4 py-2 rounded-full text-sm font-medium">
                Spiders
              </span>
              <span className="text-gray-500 text-sm">6 min read</span>
              <span className="text-gray-500 text-sm">Published: December 18, 2024</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-[#1a365d] mb-6 leading-tight">
              Dangerous Australian Spiders: Identification, Prevention & Professional Control
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Australia hosts some of the world's most venomous spiders. Learn to identify dangerous species, 
              understand their behavior, and discover professional control methods to keep your family safe.
            </p>
          </header>

          {/* Featured Image */}
          <div className="mb-12">
            <OptimizedImage
              src="/redback-spider.webp"
              alt="Dangerous Australian spiders identification and control guide featuring redback spider"
              width={800}
              height={400}
              className="w-full rounded-xl shadow-lg"
            />
          </div>

          {/* Emergency Warning */}
          <div className="bg-red-100 border-l-4 border-red-500 p-6 mb-12">
            <h2 className="text-xl font-bold text-red-800 mb-3">🚨 EMERGENCY SPIDER BITE PROTOCOL</h2>
            <div className="text-red-700 space-y-2">
              <p><strong>If bitten by a suspected venomous spider:</strong></p>
              <ul className="list-disc list-inside space-y-1">
                <li>Call 000 immediately for funnel-web bites</li>
                <li>Apply pressure bandage for funnel-web bites</li>
                <li>Collect the spider if safely possible</li>
                <li>Seek medical attention for all unknown spider bites</li>
                <li>Do NOT apply pressure bandage for redback bites</li>
              </ul>
            </div>
          </div>

          {/* Table of Contents */}
          <div className="bg-gray-50 p-6 rounded-xl mb-12">
            <h2 className="text-xl font-bold text-[#1a365d] mb-4">Table of Contents</h2>
            <ul className="space-y-2">
              <li><a href="#deadly-species" className="text-[#ed8936] hover:underline">1. Deadly Venomous Species</a></li>
              <li><a href="#medically-significant" className="text-[#ed8936] hover:underline">2. Medically Significant Spiders</a></li>
              <li><a href="#common-household" className="text-[#ed8936] hover:underline">3. Common Household Spiders</a></li>
              <li><a href="#identification-tips" className="text-[#ed8936] hover:underline">4. Quick Identification Guide</a></li>
              <li><a href="#professional-control" className="text-[#ed8936] hover:underline">5. Professional Control Methods</a></li>
              <li><a href="#prevention-strategies" className="text-[#ed8936] hover:underline">6. Prevention & Safety</a></li>
            </ul>
          </div>

          {/* Deadly Species Section */}
          <section id="deadly-species" className="mb-12">
            <h2 className="text-3xl font-bold text-[#1a365d] mb-6">Deadly Venomous Species</h2>
            
            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div className="bg-red-50 border border-red-200 p-6 rounded-lg">
                <h3 className="text-2xl font-bold text-red-800 mb-4">Sydney Funnel-Web Spider</h3>
                <div className="space-y-3 text-gray-700">
                  <p><strong>Scientific Name:</strong> Atrax robustus</p>
                  <p><strong>Size:</strong> Body 15-35mm, leg span up to 70mm</p>
                  <p><strong>Color:</strong> Dark brown to black, glossy appearance</p>
                  <p><strong>Habitat:</strong> Moist areas, under rocks, in gardens</p>
                  <p><strong>Distribution:</strong> Sydney region, Blue Mountains</p>
                  <p><strong>Danger Level:</strong> <span className="text-red-600 font-bold">EXTREMELY HIGH</span></p>
                </div>
                <div className="mt-4 p-4 bg-red-100 rounded-lg">
                  <p className="text-red-800 font-semibold">Key Identification:</p>
                  <ul className="text-red-700 text-sm space-y-1">
                    <li>• Large, prominent fangs</li>
                    <li>• Aggressive defensive posture</li>
                    <li>• Builds funnel-shaped webs</li>
                    <li>• Males more dangerous than females</li>
                  </ul>
                </div>
              </div>

              <div className="bg-red-50 border border-red-200 p-6 rounded-lg">
                <h3 className="text-2xl font-bold text-red-800 mb-4">Other Funnel-Web Species</h3>
                <div className="space-y-3 text-gray-700">
                  <p><strong>Blue Mountains Funnel-Web:</strong> Hadronyche versuta</p>
                  <p><strong>Northern Tree Funnel-Web:</strong> Hadronyche formidabilis</p>
                  <p><strong>Southern Tree Funnel-Web:</strong> Hadronyche cerberea</p>
                  <p><strong>Distribution:</strong> Eastern Australia</p>
                  <p><strong>Behavior:</strong> Males wander seeking mates (dangerous period)</p>
                </div>
                <div className="mt-4 p-4 bg-red-100 rounded-lg">
                  <p className="text-red-800 font-semibold">Seasonal Risk:</p>
                  <p className="text-red-700 text-sm">
                    Peak danger during summer months when males are actively searching for mates.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Medically Significant Section */}
          <section id="medically-significant" className="mb-12">
            <h2 className="text-3xl font-bold text-[#1a365d] mb-6">Medically Significant Spiders</h2>
            
            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div className="bg-orange-50 border border-orange-200 p-6 rounded-lg">
                <h3 className="text-2xl font-bold text-[#ed8936] mb-4">Redback Spider</h3>
                <div className="space-y-3 text-gray-700">
                  <p><strong>Scientific Name:</strong> Latrodectus hasselti</p>
                  <p><strong>Size:</strong> Female 10mm body, male 3-4mm</p>
                  <p><strong>Color:</strong> Black with distinctive red marking</p>
                  <p><strong>Habitat:</strong> Dry, sheltered locations</p>
                  <p><strong>Distribution:</strong> Throughout Australia</p>
                  <p><strong>Web:</strong> Messy, irregular web structure</p>
                </div>
                <div className="mt-4 p-4 bg-orange-100 rounded-lg">
                  <p className="text-orange-800 font-semibold">Bite Symptoms:</p>
                  <ul className="text-orange-700 text-sm space-y-1">
                    <li>• Intense pain at bite site</li>
                    <li>• Sweating and nausea</li>
                    <li>• Muscle weakness</li>
                    <li>• Antivenom available</li>
                  </ul>
                </div>
              </div>

              <div className="bg-yellow-50 border border-yellow-200 p-6 rounded-lg">
                <h3 className="text-2xl font-bold text-[#ed8936] mb-4">White-Tail Spider</h3>
                <div className="space-y-3 text-gray-700">
                  <p><strong>Scientific Name:</strong> Lampona cylindrata</p>
                  <p><strong>Size:</strong> 12-17mm body length</p>
                  <p><strong>Color:</strong> Dark grey with white spot on abdomen</p>
                  <p><strong>Habitat:</strong> Under bark, in houses</p>
                  <p><strong>Behavior:</strong> Nomadic hunter, no web</p>
                  <p><strong>Diet:</strong> Preys on other spiders</p>
                </div>
                <div className="mt-4 p-4 bg-yellow-100 rounded-lg">
                  <p className="text-yellow-800 font-semibold">Bite Effects:</p>
                  <p className="text-yellow-700 text-sm">
                    Painful bite with potential for skin necrosis. Seek medical attention if symptoms develop.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-purple-50 border border-purple-200 p-6 rounded-lg">
              <h3 className="text-2xl font-bold text-[#ed8936] mb-4">Mouse Spider</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-3 text-gray-700">
                  <p><strong>Scientific Name:</strong> Missulena species</p>
                  <p><strong>Size:</strong> 10-35mm body length</p>
                  <p><strong>Color:</strong> Black, brown, or blue-black</p>
                  <p><strong>Habitat:</strong> Burrows in soil</p>
                </div>
                <div className="space-y-3 text-gray-700">
                  <p><strong>Distribution:</strong> Throughout Australia</p>
                  <p><strong>Venom:</strong> Similar to funnel-web</p>
                  <p><strong>Behavior:</strong> Less aggressive than funnel-webs</p>
                  <p><strong>Treatment:</strong> Funnel-web antivenom effective</p>
                </div>
              </div>
            </div>
          </section>

          {/* Common Household Section */}
          <section id="common-household" className="mb-12">
            <h2 className="text-3xl font-bold text-[#1a365d] mb-6">Common Household Spiders</h2>
            
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="bg-green-50 p-6 rounded-lg">
                <h3 className="text-xl font-bold text-[#1a365d] mb-3">Huntsman Spider</h3>
                <div className="space-y-2 text-gray-700 text-sm">
                  <p><strong>Size:</strong> Leg span up to 160mm</p>
                  <p><strong>Color:</strong> Brown, grey, or mottled</p>
                  <p><strong>Behavior:</strong> Fast-moving, non-aggressive</p>
                  <p><strong>Danger:</strong> <span className="text-green-600">LOW</span> - Beneficial predator</p>
                  <p><strong>Bite:</strong> Painful but not dangerous</p>
                </div>
              </div>

              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-bold text-[#1a365d] mb-3">Wolf Spider</h3>
                <div className="space-y-2 text-gray-700 text-sm">
                  <p><strong>Size:</strong> 10-35mm body</p>
                  <p><strong>Color:</strong> Brown with patterns</p>
                  <p><strong>Behavior:</strong> Ground-dwelling hunter</p>
                  <p><strong>Danger:</strong> <span className="text-yellow-600">LOW-MEDIUM</span></p>
                  <p><strong>Identification:</strong> Carries egg sac</p>
                </div>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-bold text-[#1a365d] mb-3">Orb Weaver</h3>
                <div className="space-y-2 text-gray-700 text-sm">
                  <p><strong>Size:</strong> 5-25mm body</p>
                  <p><strong>Color:</strong> Highly variable</p>
                  <p><strong>Web:</strong> Classic circular web</p>
                  <p><strong>Danger:</strong> <span className="text-green-600">VERY LOW</span></p>
                  <p><strong>Benefit:</strong> Excellent pest control</p>
                </div>
              </div>
            </div>
          </section>

          {/* Quick Identification Guide */}
          <section id="identification-tips" className="mb-12">
            <h2 className="text-3xl font-bold text-[#1a365d] mb-6">Quick Identification Guide</h2>
            
            <div className="bg-white border border-gray-200 rounded-lg overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="bg-[#ed8936] text-white">
                      <th className="p-3 text-left">Spider</th>
                      <th className="p-3 text-left">Size</th>
                      <th className="p-3 text-left">Key Features</th>
                      <th className="p-3 text-left">Danger Level</th>
                      <th className="p-3 text-left">First Aid</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b">
                      <td className="p-3 font-semibold">Funnel-Web</td>
                      <td className="p-3">15-35mm</td>
                      <td className="p-3">Large fangs, aggressive</td>
                      <td className="p-3"><span className="text-red-600 font-bold">EXTREME</span></td>
                      <td className="p-3">Call 000, pressure bandage</td>
                    </tr>
                    <tr className="bg-gray-50 border-b">
                      <td className="p-3 font-semibold">Redback</td>
                      <td className="p-3">10mm (F)</td>
                      <td className="p-3">Red marking, messy web</td>
                      <td className="p-3"><span className="text-orange-600 font-bold">HIGH</span></td>
                      <td className="p-3">Ice pack, seek medical help</td>
                    </tr>
                    <tr className="border-b">
                      <td className="p-3 font-semibold">White-Tail</td>
                      <td className="p-3">12-17mm</td>
                      <td className="p-3">White spot, no web</td>
                      <td className="p-3"><span className="text-yellow-600 font-bold">MEDIUM</span></td>
                      <td className="p-3">Clean wound, monitor</td>
                    </tr>
                    <tr className="bg-gray-50 border-b">
                      <td className="p-3 font-semibold">Huntsman</td>
                      <td className="p-3">160mm span</td>
                      <td className="p-3">Large, fast-moving</td>
                      <td className="p-3"><span className="text-green-600 font-bold">LOW</span></td>
                      <td className="p-3">Basic wound care</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </section>

          {/* Professional Control Methods */}
          <section id="professional-control" className="mb-12">
            <h2 className="text-3xl font-bold text-[#1a365d] mb-6">Professional Control Methods</h2>
            
            <div className="bg-[#ed8936] text-white p-8 rounded-xl mb-8">
              <h3 className="text-2xl font-bold mb-4">Why Professional Spider Control?</h3>
              <p className="text-lg leading-relaxed">
                Spider control requires species identification, targeted treatments, and safety protocols. 
                Professional technicians have the expertise and equipment to safely eliminate dangerous spiders.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-bold text-[#1a365d] mb-4">Treatment Methods</h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-[#ed8936] mr-2">•</span>
                    <div>
                      <strong>Residual Sprays:</strong> Long-lasting barrier treatments around entry points and hiding spots
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#ed8936] mr-2">•</span>
                    <div>
                      <strong>Dust Applications:</strong> Targeted treatment for wall cavities and roof spaces
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#ed8936] mr-2">•</span>
                    <div>
                      <strong>Web Removal:</strong> Physical removal of webs and egg sacs
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#ed8936] mr-2">•</span>
                    <div>
                      <strong>Habitat Modification:</strong> Recommendations to reduce spider-friendly environments
                    </div>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-bold text-[#1a365d] mb-4">Safety Protocols</h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-[#ed8936] mr-2">•</span>
                    <div>
                      <strong>Species Identification:</strong> Proper identification before treatment selection
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#ed8936] mr-2">•</span>
                    <div>
                      <strong>Protective Equipment:</strong> Professional-grade safety gear for technicians
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#ed8936] mr-2">•</span>
                    <div>
                      <strong>Safe Chemical Handling:</strong> Licensed application of professional products
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#ed8936] mr-2">•</span>
                    <div>
                      <strong>Follow-up Inspections:</strong> Monitoring for treatment effectiveness
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* Prevention Strategies */}
          <section id="prevention-strategies" className="mb-12">
            <h2 className="text-3xl font-bold text-[#1a365d] mb-6">Prevention & Safety Strategies</h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-bold text-[#1a365d] mb-4">Indoor Prevention</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Regular vacuuming of corners and crevices</li>
                  <li>• Seal cracks and gaps around windows and doors</li>
                  <li>• Remove clutter and storage boxes from floors</li>
                  <li>• Check shoes and clothing before wearing</li>
                  <li>• Install door sweeps and window screens</li>
                  <li>• Reduce indoor lighting that attracts prey insects</li>
                </ul>
              </div>
              <div className="bg-green-50 p-6 rounded-lg">
                <h3 className="text-xl font-bold text-[#1a365d] mb-4">Outdoor Prevention</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Remove wood piles and debris near buildings</li>
                  <li>• Trim vegetation away from exterior walls</li>
                  <li>• Eliminate standing water sources</li>
                  <li>• Use outdoor lighting strategically</li>
                  <li>• Regular inspection of garden areas</li>
                  <li>• Professional perimeter treatments</li>
                </ul>
              </div>
            </div>

            <div className="bg-yellow-50 border border-yellow-200 p-6 rounded-lg mt-8">
              <h3 className="text-xl font-bold text-yellow-800 mb-4">Safety Tips for High-Risk Areas</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <ul className="space-y-2 text-yellow-700">
                  <li>• Wear gloves when gardening</li>
                  <li>• Use a torch when checking dark areas</li>
                  <li>• Shake out bedding and towels</li>
                  <li>• Check pool equipment before handling</li>
                </ul>
                <ul className="space-y-2 text-yellow-700">
                  <li>• Inspect outdoor furniture before use</li>
                  <li>• Be cautious around compost bins</li>
                  <li>• Check children's play equipment</li>
                  <li>• Never handle spiders with bare hands</li>
                </ul>
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="bg-[#1a365d] text-white p-8 rounded-xl text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              Spider Problem? Get Professional Help
            </h2>
            <p className="text-lg text-gray-300 mb-6">
              Don't risk dangerous spider encounters. T47 Pest Control provides safe, effective spider control 
              with same-day service across Australia.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/residential/spiders"
                className="bg-[#ed8936] text-white px-6 py-3 rounded-lg hover:bg-[#dd7324] transition-colors font-bold"
              >
                Spider Control Service
              </Link>
              <Link
                href={`tel:${COMPANY_INFO.phone}`}
                className="border-2 border-white text-white px-6 py-3 rounded-lg hover:bg-white hover:text-[#1a365d] transition-colors font-bold"
              >
                Emergency: {COMPANY_INFO.phone}
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
              <p className="text-gray-600 text-sm">Complete guide to ant identification and control methods.</p>
            </Link>
            <Link href="/blog/cockroach-prevention-tips-australian-homes" className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <h3 className="font-bold text-[#1a365d] mb-2">Cockroach Prevention</h3>
              <p className="text-gray-600 text-sm">Keep your home cockroach-free year-round.</p>
            </Link>
            <Link href="/blog/seasonal-pest-control-guide-australia" className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <h3 className="font-bold text-[#1a365d] mb-2">Seasonal Pest Control</h3>
              <p className="text-gray-600 text-sm">Year-round pest management strategies.</p>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

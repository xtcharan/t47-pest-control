import { Metadata } from 'next';
import Link from 'next/link';
import OptimizedImage from '@/components/common/OptimizedImage';

export const metadata: Metadata = {
  title: 'Australian Ant Species Guide: Bull Ants, Black House Ants & Control | T47',
  description: 'Expert guide to Australian ant species including bull ants, black house ants, pharaoh ants, carpenter ants, and professional control methods for effective ant management.',
  keywords: 'bull ant, black house ant, pharaoh ant, carpenter ant, branded sugar ant, red fire ant, green head ant, meat ant, jack jumper ant, ant control australia, ant species identification',
  openGraph: {
    title: 'Australian Ant Species Guide: Bull Ants, Black House Ants & Control',
    description: 'Expert guide to Australian ant species including bull ants, black house ants, pharaoh ants, carpenter ants, and professional control methods.',
    type: 'article',
    url: 'https://www.t47pestcontrol.com/blog/australian-ant-species-control-guide',
    images: [
      {
        url: 'https://www.t47pestcontrol.com/ant-extermination.jpg',
        width: 1200,
        height: 630,
        alt: 'Australian Ant Species Control Guide'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Australian Ant Species Guide: Bull Ants, Black House Ants & Control',
    description: 'Expert guide to Australian ant species and professional control methods.',
    images: ['https://www.t47pestcontrol.com/ant-extermination.jpg']
  },
  alternates: {
    canonical: 'https://www.t47pestcontrol.com/blog/australian-ant-species-control-guide'
  }
};

export default function AntSpeciesGuidePage() {
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
            <span className="text-gray-700">Australian Ant Species Control Guide</span>
          </div>
        </div>
      </nav>

      {/* Article Header */}
      <article className="py-12">
        <div className="container mx-auto px-4 max-w-4xl">
          <header className="mb-12">
            <div className="flex items-center gap-4 mb-6">
              <span className="bg-[#ed8936] text-white px-4 py-2 rounded-full text-sm font-medium">
                Ants
              </span>
              <span className="text-gray-500 text-sm">7 min read</span>
              <span className="text-gray-500 text-sm">Published: December 19, 2024</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-[#1a365d] mb-6 leading-tight">
              Australian Ant Species: Bull Ants, Black House Ants & Effective Control Methods
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Australia hosts over 1,300 ant species, with many causing significant problems for homeowners. 
              Learn to identify the most problematic species and discover professional control strategies that work.
            </p>
          </header>

          {/* Featured Image */}
          <div className="mb-12">
            <OptimizedImage
              src="/ant-control-hero.webp"
              alt="Australian ant species identification and control guide"
              width={800}
              height={400}
              className="w-full rounded-xl shadow-lg"
            />
          </div>

          {/* Table of Contents */}
          <div className="bg-gray-50 p-6 rounded-xl mb-12">
            <h2 className="text-xl font-bold text-[#1a365d] mb-4">Table of Contents</h2>
            <ul className="space-y-2">
              <li><a href="#aggressive-species" className="text-[#ed8936] hover:underline">1. Aggressive Ant Species</a></li>
              <li><a href="#household-invaders" className="text-[#ed8936] hover:underline">2. Common Household Invaders</a></li>
              <li><a href="#structural-damage" className="text-[#ed8936] hover:underline">3. Structure-Damaging Species</a></li>
              <li><a href="#identification-guide" className="text-[#ed8936] hover:underline">4. Quick Identification Guide</a></li>
              <li><a href="#control-methods" className="text-[#ed8936] hover:underline">5. Professional Control Methods</a></li>
              <li><a href="#prevention-tips" className="text-[#ed8936] hover:underline">6. Prevention Strategies</a></li>
            </ul>
          </div>

          {/* Aggressive Species Section */}
          <section id="aggressive-species" className="mb-12">
            <h2 className="text-3xl font-bold text-[#1a365d] mb-6">Aggressive Ant Species: Handle with Extreme Caution</h2>
            
            <div className="bg-red-50 border-l-4 border-red-500 p-6 mb-8">
              <h3 className="text-lg font-bold text-red-800 mb-2">⚠️ Dangerous Species Alert</h3>
              <p className="text-red-700">
                Several Australian ant species can deliver painful stings and may cause severe allergic reactions. 
                Professional treatment is strongly recommended.
              </p>
            </div>

            {/* Bull Ant Image */}
            <div className="mb-8">
              <OptimizedImage
                src="/bull-ants.webp"
                alt="Bull ant species identification - Australia's most dangerous ant"
                width={800}
                height={400}
                className="w-full rounded-xl shadow-lg"
              />
              <p className="text-center text-gray-600 text-sm mt-2">Bull ants are Australia's largest and most dangerous ant species</p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div className="bg-white border border-gray-200 p-6 rounded-lg shadow-sm">
                <h3 className="text-2xl font-bold text-[#ed8936] mb-4">Bull Ant (Myrmecia species)</h3>
                <div className="space-y-3 text-gray-700">
                  <p><strong>Size:</strong> 15-40mm (Australia's largest ants)</p>
                  <p><strong>Color:</strong> Black, red, or combination with distinctive large eyes</p>
                  <p><strong>Behavior:</strong> Extremely aggressive, excellent vision, powerful sting</p>
                  <p><strong>Habitat:</strong> Nests in soil, under rocks, in rotting wood</p>
                  <p><strong>Danger Level:</strong> <span className="text-red-600 font-bold">HIGH</span> - Can cause anaphylactic shock</p>
                  <p><strong>Distribution:</strong> Throughout Australia, especially southeastern regions</p>
                </div>
                <div className="mt-4 p-4 bg-red-50 rounded-lg">
                  <p className="text-red-800 font-semibold">Medical Warning:</p>
                  <p className="text-red-700 text-sm">Bull ant stings can be life-threatening. Seek immediate medical attention if stung.</p>
                </div>
              </div>

              <div className="bg-white border border-gray-200 p-6 rounded-lg shadow-sm">
                <h3 className="text-2xl font-bold text-[#ed8936] mb-4">Jack Jumper Ant (Myrmecia pilosula)</h3>
                <div className="space-y-3 text-gray-700">
                  <p><strong>Size:</strong> 10-15mm</p>
                  <p><strong>Color:</strong> Black with distinctive jumping behavior</p>
                  <p><strong>Behavior:</strong> Jumps when threatened, aggressive defender</p>
                  <p><strong>Habitat:</strong> Open woodlands, urban areas in Tasmania and southern Australia</p>
                  <p><strong>Danger Level:</strong> <span className="text-red-600 font-bold">VERY HIGH</span> - Leading cause of ant-related deaths</p>
                  <p><strong>Medical Significance:</strong> Responsible for 90% of ant sting allergic reactions in Australia</p>
                </div>
              </div>
            </div>

            {/* Jack Jumper Ant Image */}
            <div className="mb-8">
              <OptimizedImage
                src="/jack-jumper-ants.jpg"
                alt="Jack jumper ant identification - Tasmania's deadly ant species"
                width={600}
                height={300}
                className="w-full rounded-xl shadow-lg"
              />
              <p className="text-center text-gray-600 text-sm mt-2">Jack jumper ants are responsible for 90% of ant sting allergic reactions in Australia</p>
            </div>

            <div className="bg-white border border-gray-200 p-6 rounded-lg shadow-sm mb-8">
              <h3 className="text-2xl font-bold text-[#ed8936] mb-4">Red Fire Ant (Solenopsis invicta)</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-3 text-gray-700">
                  <p><strong>Size:</strong> Workers 2-6mm, distinctive size variation</p>
                  <p><strong>Color:</strong> Reddish-brown to dark brown</p>
                  <p><strong>Behavior:</strong> Highly aggressive, swarms when disturbed</p>
                  <p><strong>Habitat:</strong> Open sunny areas, builds distinctive dome-shaped mounds</p>
                </div>
                <div className="space-y-3 text-gray-700">
                  <p><strong>Status:</strong> <span className="text-red-600 font-bold">INVASIVE SPECIES</span></p>
                  <p><strong>Distribution:</strong> Southeast Queensland (under eradication program)</p>
                  <p><strong>Reporting:</strong> Must be reported to authorities immediately</p>
                  <p><strong>Sting:</strong> Causes painful pustules, potential allergic reactions</p>
                </div>
              </div>
            </div>

            {/* Fire Ant Image */}
            <div className="mb-8">
              <OptimizedImage
                src="/fire-ants.webp"
                alt="Red fire ant identification - invasive species in Australia"
                width={700}
                height={350}
                className="w-full rounded-xl shadow-lg"
              />
              <p className="text-center text-gray-600 text-sm mt-2">Red fire ants are an invasive species under active eradication in Queensland</p>
            </div>

            <div className="bg-white border border-gray-200 p-6 rounded-lg shadow-sm">
              <h3 className="text-2xl font-bold text-[#ed8936] mb-4">Green Head Ant (Rhytidoponera metallica)</h3>
              <div className="space-y-3 text-gray-700">
                <p><strong>Size:</strong> 5-7mm workers</p>
                <p><strong>Color:</strong> Metallic green head with dark body</p>
                <p><strong>Behavior:</strong> Aggressive when disturbed, painful sting</p>
                <p><strong>Habitat:</strong> Gardens, lawns, under pavers and rocks</p>
                <p><strong>Activity:</strong> Most active during warmer months</p>
                <p><strong>Control Difficulty:</strong> Moderate - responds well to professional baiting</p>
              </div>
            </div>
          </section>

          {/* Household Invaders Section */}
          <section id="household-invaders" className="mb-12">
            <h2 className="text-3xl font-bold text-[#1a365d] mb-6">Common Household Invaders</h2>

            {/* Black House Ant Image */}
            <div className="mb-8">
              <OptimizedImage
                src="/black-house-ants.webp"
                alt="Black house ant identification - common household pest"
                width={700}
                height={350}
                className="w-full rounded-xl shadow-lg"
              />
              <p className="text-center text-gray-600 text-sm mt-2">Black house ants are the most common household ant pest in Australia</p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-2xl font-bold text-[#1a365d] mb-4">Black House Ant (Ochetellus glaber)</h3>
                <div className="space-y-3 text-gray-700">
                  <p><strong>Size:</strong> 2.5-3mm workers</p>
                  <p><strong>Color:</strong> Shiny black</p>
                  <p><strong>Behavior:</strong> Forms long trails to food sources</p>
                  <p><strong>Diet:</strong> Sweet substances, proteins, pet food</p>
                  <p><strong>Nesting:</strong> Wall cavities, under floors, in gardens</p>
                  <p><strong>Peak Activity:</strong> Spring and summer</p>
                  <p><strong>Control:</strong> Responds well to gel baits and liquid treatments</p>
                </div>
              </div>

              <div className="bg-yellow-50 p-6 rounded-lg">
                <h3 className="text-2xl font-bold text-[#1a365d] mb-4">Pharaoh Ant (Monomorium pharaonis)</h3>
                <div className="space-y-3 text-gray-700">
                  <p><strong>Size:</strong> 1.5-2mm workers</p>
                  <p><strong>Color:</strong> Light yellow to reddish-brown</p>
                  <p><strong>Behavior:</strong> Multiple queens, budding colonies</p>
                  <p><strong>Habitat:</strong> Warm, humid areas - hospitals, aged care facilities</p>
                  <p><strong>Health Risk:</strong> Can spread bacteria and pathogens</p>
                  <p><strong>Control Difficulty:</strong> <span className="text-red-600 font-bold">VERY HIGH</span></p>
                  <p><strong>Treatment:</strong> Requires specialized professional baiting programs</p>
                </div>
              </div>
            </div>

            {/* Pharaoh Ant Image */}
            <div className="mb-8">
              <OptimizedImage
                src="/pharaoh-ants.webp"
                alt="Pharaoh ant identification - hospital and healthcare pest"
                width={600}
                height={300}
                className="w-full rounded-xl shadow-lg"
              />
              <p className="text-center text-gray-600 text-sm mt-2">Pharaoh ants are a serious health concern in hospitals and aged care facilities</p>
            </div>

            <div className="bg-green-50 p-6 rounded-lg mb-8">
              <h3 className="text-2xl font-bold text-[#1a365d] mb-4">Branded Sugar Ant (Camponotus consobrinus)</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-3 text-gray-700">
                  <p><strong>Size:</strong> Workers 6-12mm, distinctive size variation</p>
                  <p><strong>Color:</strong> Dark brown to black with lighter markings</p>
                  <p><strong>Behavior:</strong> Nocturnal foraging, attracted to sweet substances</p>
                  <p><strong>Nesting:</strong> Tree hollows, wall cavities, under concrete</p>
                </div>
                <div className="space-y-3 text-gray-700">
                  <p><strong>Diet:</strong> Honeydew from aphids, nectar, sweet foods</p>
                  <p><strong>Seasonal Pattern:</strong> Most active in warmer months</p>
                  <p><strong>Identification:</strong> Large workers with heart-shaped heads</p>
                  <p><strong>Control:</strong> Gel baits and perimeter treatments effective</p>
                </div>
              </div>
            </div>

            {/* Sugar Ant Image */}
            <div className="mb-8">
              <OptimizedImage
                src="/sugar-ants.webp"
                alt="Sugar ant identification - branded sugar ant species"
                width={600}
                height={300}
                className="w-full rounded-xl shadow-lg"
              />
              <p className="text-center text-gray-600 text-sm mt-2">Sugar ants are nocturnal foragers attracted to sweet substances</p>
            </div>
          </section>

          {/* Structural Damage Section */}
          <section id="structural-damage" className="mb-12">
            <h2 className="text-3xl font-bold text-[#1a365d] mb-6">Structure-Damaging Species</h2>

            {/* Carpenter Ant Image */}
            <div className="mb-8">
              <OptimizedImage
                src="/carpenter-ants.webp"
                alt="Carpenter ant identification - wood-damaging ant species"
                width={700}
                height={350}
                className="w-full rounded-xl shadow-lg"
              />
              <p className="text-center text-gray-600 text-sm mt-2">Carpenter ants excavate galleries in wood, causing structural damage</p>
            </div>

            <div className="bg-orange-50 border border-orange-200 p-6 rounded-lg mb-8">
              <h3 className="text-2xl font-bold text-[#1a365d] mb-4">Carpenter Ant (Camponotus species)</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-3 text-gray-700">
                  <p><strong>Size:</strong> 6-25mm (highly variable)</p>
                  <p><strong>Color:</strong> Black, brown, or reddish-brown</p>
                  <p><strong>Damage Type:</strong> Excavates galleries in wood</p>
                  <p><strong>Preferred Wood:</strong> Soft, moist, or decaying timber</p>
                </div>
                <div className="space-y-3 text-gray-700">
                  <p><strong>Signs:</strong> Fine sawdust piles, rustling sounds in walls</p>
                  <p><strong>Risk Areas:</strong> Bathrooms, kitchens, areas with water damage</p>
                  <p><strong>Treatment:</strong> Requires targeted injection and colony elimination</p>
                  <p><strong>Prevention:</strong> Fix moisture problems, remove decaying wood</p>
                </div>
              </div>
            </div>

            <div className="bg-red-50 p-6 rounded-lg mb-8">
              <h3 className="text-2xl font-bold text-[#1a365d] mb-4">Meat Ant (Iridomyrmex purpureus)</h3>
              <div className="space-y-3 text-gray-700">
                <p><strong>Size:</strong> 6-12mm workers</p>
                <p><strong>Color:</strong> Dark purple to black with metallic sheen</p>
                <p><strong>Behavior:</strong> Highly territorial, forms large colonies</p>
                <p><strong>Damage:</strong> Can undermine paving, damage plant roots</p>
                <p><strong>Nesting:</strong> Large underground nests with multiple entrances</p>
                <p><strong>Control:</strong> Requires professional colony treatment and monitoring</p>
              </div>
            </div>

            {/* Meat Ant Image */}
            <div className="mb-8">
              <OptimizedImage
                src="/meat-ants.webp"
                alt="Meat ant identification - territorial ground-dwelling species"
                width={600}
                height={300}
                className="w-full rounded-xl shadow-lg"
              />
              <p className="text-center text-gray-600 text-sm mt-2">Meat ants form large territorial colonies and can damage paving and landscaping</p>
            </div>
          </section>

          {/* Quick Identification Guide */}
          <section id="identification-guide" className="mb-12">
            <h2 className="text-3xl font-bold text-[#1a365d] mb-6">Quick Identification Guide</h2>
            
            <div className="overflow-x-auto">
              <table className="w-full border-collapse border border-gray-300 bg-white">
                <thead>
                  <tr className="bg-[#ed8936] text-white">
                    <th className="border border-gray-300 p-3 text-left">Species</th>
                    <th className="border border-gray-300 p-3 text-left">Size</th>
                    <th className="border border-gray-300 p-3 text-left">Color</th>
                    <th className="border border-gray-300 p-3 text-left">Key Features</th>
                    <th className="border border-gray-300 p-3 text-left">Risk Level</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-gray-300 p-3 font-semibold">Bull Ant</td>
                    <td className="border border-gray-300 p-3">15-40mm</td>
                    <td className="border border-gray-300 p-3">Black/Red</td>
                    <td className="border border-gray-300 p-3">Large eyes, aggressive</td>
                    <td className="border border-gray-300 p-3"><span className="text-red-600 font-bold">HIGH</span></td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-300 p-3 font-semibold">Jack Jumper</td>
                    <td className="border border-gray-300 p-3">10-15mm</td>
                    <td className="border border-gray-300 p-3">Black</td>
                    <td className="border border-gray-300 p-3">Jumping behavior</td>
                    <td className="border border-gray-300 p-3"><span className="text-red-600 font-bold">VERY HIGH</span></td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 p-3 font-semibold">Black House Ant</td>
                    <td className="border border-gray-300 p-3">2.5-3mm</td>
                    <td className="border border-gray-300 p-3">Shiny Black</td>
                    <td className="border border-gray-300 p-3">Forms trails</td>
                    <td className="border border-gray-300 p-3"><span className="text-yellow-600 font-bold">LOW</span></td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-300 p-3 font-semibold">Pharaoh Ant</td>
                    <td className="border border-gray-300 p-3">1.5-2mm</td>
                    <td className="border border-gray-300 p-3">Yellow-brown</td>
                    <td className="border border-gray-300 p-3">Very small, multiple queens</td>
                    <td className="border border-gray-300 p-3"><span className="text-orange-600 font-bold">MEDIUM</span></td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 p-3 font-semibold">Carpenter Ant</td>
                    <td className="border border-gray-300 p-3">6-25mm</td>
                    <td className="border border-gray-300 p-3">Black/Brown</td>
                    <td className="border border-gray-300 p-3">Size variation, wood damage</td>
                    <td className="border border-gray-300 p-3"><span className="text-orange-600 font-bold">MEDIUM</span></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* Professional Control Methods */}
          <section id="control-methods" className="mb-12">
            <h2 className="text-3xl font-bold text-[#1a365d] mb-6">Professional Control Methods</h2>
            
            <div className="bg-[#ed8936] text-white p-8 rounded-xl mb-8">
              <h3 className="text-2xl font-bold mb-4">Why Professional Treatment is Essential</h3>
              <p className="text-lg leading-relaxed">
                Ant control requires species-specific approaches, proper identification, and access to professional-grade 
                treatments. DIY methods often provide temporary relief but fail to eliminate colonies.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="bg-white border border-gray-200 p-6 rounded-lg shadow-sm">
                <h3 className="text-lg font-bold text-[#ed8936] mb-3">Gel Baiting</h3>
                <ul className="space-y-2 text-gray-700 text-sm">
                  <li>• Targeted species-specific formulations</li>
                  <li>• Slow-acting for colony elimination</li>
                  <li>• Minimal environmental impact</li>
                  <li>• Effective for most household species</li>
                  <li>• Professional placement strategies</li>
                </ul>
              </div>
              <div className="bg-white border border-gray-200 p-6 rounded-lg shadow-sm">
                <h3 className="text-lg font-bold text-[#ed8936] mb-3">Liquid Treatments</h3>
                <ul className="space-y-2 text-gray-700 text-sm">
                  <li>• Perimeter barrier treatments</li>
                  <li>• Nest injection for direct control</li>
                  <li>• Residual protection</li>
                  <li>• Effective for aggressive species</li>
                  <li>• Professional application equipment</li>
                </ul>
              </div>
              <div className="bg-white border border-gray-200 p-6 rounded-lg shadow-sm">
                <h3 className="text-lg font-bold text-[#ed8936] mb-3">Dust Formulations</h3>
                <ul className="space-y-2 text-gray-700 text-sm">
                  <li>• Wall cavity treatments</li>
                  <li>• Long-lasting residual action</li>
                  <li>• Ideal for structural infestations</li>
                  <li>• Carpenter ant specialists</li>
                  <li>• Professional injection techniques</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Prevention Tips */}
          <section id="prevention-tips" className="mb-12">
            <h2 className="text-3xl font-bold text-[#1a365d] mb-6">Prevention Strategies</h2>
            
            <div className="bg-green-50 border border-green-200 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-green-800 mb-4">Essential Prevention Measures</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-bold text-green-700 mb-2">Sanitation</h4>
                  <ul className="space-y-1 text-green-700 text-sm">
                    <li>• Clean up food spills immediately</li>
                    <li>• Store food in sealed containers</li>
                    <li>• Regular cleaning of pet food areas</li>
                    <li>• Remove garbage regularly</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-bold text-green-700 mb-2">Exclusion</h4>
                  <ul className="space-y-1 text-green-700 text-sm">
                    <li>• Seal cracks and entry points</li>
                    <li>• Trim vegetation away from buildings</li>
                    <li>• Fix moisture problems</li>
                    <li>• Regular professional inspections</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Professional Service Image */}
          <div className="mb-12">
            <OptimizedImage
              src="/ants-residential.jpg"
              alt="Professional ant control service for residential properties"
              width={800}
              height={400}
              className="w-full rounded-xl shadow-lg"
            />
            <p className="text-center text-gray-600 text-sm mt-2">T47 Pest Control provides professional ant control services for residential properties</p>
          </div>

          {/* CTA Section */}
          <section className="bg-[#1a365d] text-white p-8 rounded-xl text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              Ant Problem? Get Expert Help
            </h2>
            <p className="text-lg text-gray-300 mb-6">
              T47 Pest Control specializes in identifying and eliminating all Australian ant species. 
              Same-day service available across Australia.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/residential/ants"
                className="bg-[#ed8936] text-white px-6 py-3 rounded-lg hover:bg-[#dd7324] transition-colors font-bold"
              >
                Ant Control Service
              </Link>
              <Link 
                href="tel:+61434300216"
                className="border-2 border-white text-white px-6 py-3 rounded-lg hover:bg-white hover:text-[#1a365d] transition-colors font-bold"
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
            <Link href="/blog/australian-termite-species-identification-guide" className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <h3 className="font-bold text-[#1a365d] mb-2">Australian Termite Species</h3>
              <p className="text-gray-600 text-sm">Complete guide to termite identification and control.</p>
            </Link>
            <Link href="/blog/dangerous-australian-spiders-identification-control" className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <h3 className="font-bold text-[#1a365d] mb-2">Dangerous Australian Spiders</h3>
              <p className="text-gray-600 text-sm">Identify and control venomous spider species.</p>
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

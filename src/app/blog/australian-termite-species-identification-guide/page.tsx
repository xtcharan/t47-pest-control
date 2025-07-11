import { Metadata } from 'next';
import Link from 'next/link';
import OptimizedImage from '@/components/common/OptimizedImage';

export const metadata: Metadata = {
  title: 'Australian Termite Species Guide: Identification & Control | T47 Pest Control',
  description: 'Complete guide to Australian termite species including subterranean, drywood, and dampwood termites. Expert identification tips and professional control methods.',
  keywords: 'australian termites, termite species australia, subterranean termites, drywood termites, dampwood termites, termite identification, termite control australia, coptotermes, mastotermes, nasutitermes',
  openGraph: {
    title: 'Australian Termite Species Guide: Identification & Control',
    description: 'Complete guide to Australian termite species including subterranean, drywood, and dampwood termites. Expert identification tips and professional control methods.',
    type: 'article',
    url: 'https://www.t47pestcontrol.com/blog/australian-termite-species-identification-guide',
    images: [
      {
        url: 'https://www.t47pestcontrol.com/termite-control-hero.webp',
        width: 1200,
        height: 630,
        alt: 'Australian Termite Species Identification Guide'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Australian Termite Species Guide: Identification & Control',
    description: 'Complete guide to Australian termite species including subterranean, drywood, and dampwood termites.',
    images: ['https://www.t47pestcontrol.com/termite-control-hero.webp']
  },
  alternates: {
    canonical: 'https://www.t47pestcontrol.com/blog/australian-termite-species-identification-guide'
  }
};

export default function TermiteSpeciesGuidePage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Breadcrumb */}
      <nav className="bg-gray-50 py-4">
        <div className="container mx-auto px-4">
          <div className="flex items-center space-x-2 text-sm">
            <Link href="/" className="text-green-light hover:underline">Home</Link>
            <span className="text-gray-500">/</span>
            <Link href="/blog" className="text-green-light hover:underline">Blog</Link>
            <span className="text-gray-500">/</span>
            <span className="text-gray-700">Australian Termite Species Guide</span>
          </div>
        </div>
      </nav>

      {/* Article Header */}
      <article className="py-12">
        <div className="container mx-auto px-4 max-w-4xl">
          <header className="mb-12">
            <div className="flex items-center gap-4 mb-6">
              <span className="bg-green-light text-black px-4 py-2 rounded-full text-sm font-medium">
                Termites
              </span>
              <span className="text-gray-500 text-sm">8 min read</span>
              <span className="text-gray-500 text-sm">Published: December 20, 2024</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6 leading-tight">
              Complete Guide to Australian Termite Species: Identification and Control
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Australia is home to over 350 termite species, with several posing significant threats to homes and structures.
              This comprehensive guide helps you identify the most destructive termite species and understand professional control methods.
            </p>
          </header>

          {/* Featured Image */}
          <div className="mb-12">
            <OptimizedImage
              src="/termite-inspection-process.webp"
              alt="Australian termite species identification guide"
              width={800}
              height={400}
              className="w-full rounded-xl shadow-lg"
            />
          </div>

          {/* Table of Contents */}
          <div className="bg-gray-50 p-6 rounded-xl mb-12">
            <h2 className="text-xl font-bold text-primary mb-4">Table of Contents</h2>
            <ul className="space-y-2">
              <li><a href="#subterranean-termites" className="text-green-light hover:underline">1. Subterranean Termites</a></li>
              <li><a href="#drywood-termites" className="text-green-light hover:underline">2. Drywood Termites</a></li>
              <li><a href="#dampwood-termites" className="text-green-light hover:underline">3. Dampwood Termites</a></li>
              <li><a href="#identification-tips" className="text-green-light hover:underline">4. Identification Tips</a></li>
              <li><a href="#professional-control" className="text-green-light hover:underline">5. Professional Control Methods</a></li>
              <li><a href="#prevention-strategies" className="text-green-light hover:underline">6. Prevention Strategies</a></li>
            </ul>
          </div>

          {/* Content Sections */}
          <section id="subterranean-termites" className="mb-12">
            <h2 className="text-3xl font-bold text-primary mb-6">Subterranean Termites: Australia's Most Destructive</h2>

            <div className="bg-red-50 border-l-4 border-red-500 p-6 mb-8">
              <h3 className="text-lg font-bold text-red-800 mb-2">⚠️ High Risk Species</h3>
              <p className="text-red-700">
                Subterranean termites cause over 80% of termite damage in Australia, with annual costs exceeding $1.5 billion.
              </p>
            </div>

            <h3 className="text-2xl font-bold text-primary mb-4">Coptotermes Species</h3>
            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div>
                <h4 className="text-xl font-semibold mb-3 text-green-light">Coptotermes acinaciformis</h4>
                <ul className="space-y-2 text-gray-700">
                  <li><strong>Size:</strong> Workers 4-6mm, soldiers 6-8mm</li>
                  <li><strong>Color:</strong> Creamy white to pale yellow</li>
                  <li><strong>Distribution:</strong> Eastern and southern Australia</li>
                  <li><strong>Damage:</strong> Extremely destructive to timber structures</li>
                  <li><strong>Colonies:</strong> Can exceed 1 million individuals</li>
                </ul>
              </div>
              <div>
                <h4 className="text-xl font-semibold mb-3 text-green-light">Coptotermes frenchi</h4>
                <ul className="space-y-2 text-gray-700">
                  <li><strong>Size:</strong> Workers 3-5mm, soldiers 5-7mm</li>
                  <li><strong>Color:</strong> Pale cream to light brown</li>
                  <li><strong>Distribution:</strong> Widespread across Australia</li>
                  <li><strong>Damage:</strong> Attacks both hardwood and softwood</li>
                  <li><strong>Identification:</strong> Distinctive pear-shaped head in soldiers</li>
                </ul>
              </div>
            </div>

            <h3 className="text-2xl font-bold text-primary mb-4">Mastotermes darwiniensis</h3>
            <div className="bg-yellow-50 border border-yellow-200 p-6 rounded-lg mb-6">
              <p className="text-gray-700 leading-relaxed">
                <strong>Australia's Giant Termite:</strong> Found primarily in northern Australia, this species is considered
                the most primitive and destructive termite. They can attack virtually any cellulose material including
                leather, rubber, and even some plastics.
              </p>
            </div>

            <h3 className="text-2xl font-bold text-primary mb-4">Nasutitermes Species</h3>
            <p className="text-gray-700 mb-4 leading-relaxed">
              Nasutitermes termites are easily identified by their distinctive pointed snouts (nasutes) used for chemical defense.
              While less destructive than Coptotermes, they can still cause significant damage to timber structures.
            </p>
          </section>

          <section id="drywood-termites" className="mb-12">
            <h2 className="text-3xl font-bold text-primary mb-6">Drywood Termites: Silent Destroyers</h2>

            <p className="text-gray-700 mb-6 leading-relaxed">
              Drywood termites live entirely within the wood they consume, making them particularly difficult to detect.
              Unlike subterranean termites, they don't require soil contact and can infest furniture, flooring, and structural timber.
            </p>

            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-bold text-primary mb-4">Cryptotermes Species</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Small colonies (few hundred to few thousand)</li>
                  <li>• Produce distinctive hexagonal pellets</li>
                  <li>• Attack seasoned hardwood and softwood</li>
                  <li>• Common in coastal areas</li>
                  <li>• Difficult to detect until damage is extensive</li>
                </ul>
              </div>
              <div className="bg-green-50 p-6 rounded-lg">
                <h3 className="text-xl font-bold text-primary mb-4">West Indian Drywood Termite</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Introduced species in northern Australia</li>
                  <li>• Highly destructive to furniture and structures</li>
                  <li>• Produces coffee-ground-like pellets</li>
                  <li>• Requires immediate professional treatment</li>
                  <li>• Subject to quarantine regulations</li>
                </ul>
              </div>
            </div>
          </section>

          <section id="dampwood-termites" className="mb-12">
            <h2 className="text-3xl font-bold text-primary mb-6">Dampwood Termites: Moisture-Dependent Species</h2>

            <p className="text-gray-700 mb-6 leading-relaxed">
              Dampwood termites require high moisture content in wood and are typically found in areas with water damage,
              leaks, or poor ventilation. While less common in homes, they can cause significant damage when conditions are favorable.
            </p>

            <div className="bg-gray-50 p-6 rounded-lg mb-6">
              <h3 className="text-xl font-bold text-primary mb-4">Porotermes Species</h3>
              <p className="text-gray-700 leading-relaxed">
                Native Australian dampwood termites that typically attack dead wood in natural environments but can
                infest buildings with moisture problems. They're larger than most other termite species and produce
                distinctive rectangular pellets.
              </p>
            </div>
          </section>

          <section id="identification-tips" className="mb-12">
            <h2 className="text-3xl font-bold text-primary mb-6">Professional Identification Tips</h2>

            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="bg-white border border-gray-200 p-6 rounded-lg shadow-sm">
                <h3 className="text-lg font-bold text-green-light mb-3">Visual Signs</h3>
                <ul className="space-y-2 text-gray-700 text-sm">
                  <li>• Mud tubes on walls or foundations</li>
                  <li>• Discarded wings near windows</li>
                  <li>• Hollow-sounding timber</li>
                  <li>• Frass (termite droppings)</li>
                  <li>• Damaged wood with honeycomb patterns</li>
                </ul>
              </div>
              <div className="bg-white border border-gray-200 p-6 rounded-lg shadow-sm">
                <h3 className="text-lg font-bold text-green-light mb-3">Behavioral Indicators</h3>
                <ul className="space-y-2 text-gray-700 text-sm">
                  <li>• Swarming during warm, humid weather</li>
                  <li>• Head-banging sounds in walls</li>
                  <li>• Tight-fitting doors and windows</li>
                  <li>• Sagging floors or ceilings</li>
                  <li>• Paint bubbling or cracking</li>
                </ul>
              </div>
              <div className="bg-white border border-gray-200 p-6 rounded-lg shadow-sm">
                <h3 className="text-lg font-bold text-green-light mb-3">Professional Tools</h3>
                <ul className="space-y-2 text-gray-700 text-sm">
                  <li>• Moisture meters</li>
                  <li>• Acoustic detection devices</li>
                  <li>• Thermal imaging cameras</li>
                  <li>• Borescopes for internal inspection</li>
                  <li>• Termatrac radar detection</li>
                </ul>
              </div>
            </div>
          </section>

          <section id="professional-control" className="mb-12">
            <h2 className="text-3xl font-bold text-primary mb-6">Professional Control Methods</h2>

            <div className="bg-gradient-to-r from-red-light to-red-dark text-white p-8 rounded-xl mb-8">
              <h3 className="text-2xl font-bold mb-4">Why Choose Professional Treatment?</h3>
              <p className="text-lg leading-relaxed">
                Termite control requires specialized knowledge, equipment, and licensed chemicals. DIY treatments often
                fail and can make professional treatment more difficult and expensive.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-bold text-primary mb-4">Chemical Barriers</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Soil treatment around foundations</li>
                  <li>• Reticulation systems for ongoing protection</li>
                  <li>• Termiticide injection into affected timber</li>
                  <li>• 8-year warranty on most treatments</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-bold text-primary mb-4">Baiting Systems</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Colony elimination through targeted baiting</li>
                  <li>• Environmentally friendly approach</li>
                  <li>• Ongoing monitoring and maintenance</li>
                  <li>• Effective for established infestations</li>
                </ul>
              </div>
            </div>
          </section>

          <section id="prevention-strategies" className="mb-12">
            <h2 className="text-3xl font-bold text-primary mb-6">Prevention Strategies</h2>

            <div className="bg-green-50 border border-green-200 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-green-800 mb-4">Essential Prevention Tips</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <ul className="space-y-2 text-green-700">
                  <li>• Remove timber debris from around buildings</li>
                  <li>• Fix leaks and improve drainage</li>
                  <li>• Maintain adequate ventilation</li>
                  <li>• Regular professional inspections</li>
                </ul>
                <ul className="space-y-2 text-green-700">
                  <li>• Use termite-resistant materials in construction</li>
                  <li>• Install physical barriers during building</li>
                  <li>• Keep gardens away from building foundations</li>
                  <li>• Monitor for early warning signs</li>
                </ul>
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="bg-primary text-white p-8 rounded-xl text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              Suspect Termite Activity?
            </h2>
            <p className="text-lg text-gray-300 mb-6">
              Don't wait for extensive damage. T47 Pest Control offers comprehensive termite inspections
              and treatment solutions across Australia.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/termite-solutions/inspection"
                className="bg-green-light text-black px-6 py-3 rounded-lg hover:bg-green-dark hover:text-white transition-colors font-bold"
              >
                Book Inspection
              </Link>
              <Link
                href="tel:+61434300216"
                className="border-2 border-white text-white px-6 py-3 rounded-lg hover:bg-white hover:text-primary transition-colors font-bold"
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
          <h2 className="text-2xl font-bold text-primary mb-8 text-center">Related Articles</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Link href="/blog/australian-ant-species-control-guide" className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <h3 className="font-bold text-primary mb-2">Australian Ant Species Guide</h3>
              <p className="text-gray-600 text-sm">Learn about bull ants, black house ants, and effective control methods.</p>
            </Link>
            <Link href="/blog/seasonal-pest-control-guide-australia" className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <h3 className="font-bold text-primary mb-2">Seasonal Pest Control Guide</h3>
              <p className="text-gray-600 text-sm">What pests to expect throughout the year in Australia.</p>
            </Link>
            <Link href="/blog/diy-vs-professional-pest-control-australia" className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <h3 className="font-bold text-primary mb-2">DIY vs Professional Control</h3>
              <p className="text-gray-600 text-sm">When to call the experts for pest control services.</p>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

import { Metadata } from 'next';
import Link from 'next/link';
import OptimizedImage from '@/components/common/OptimizedImage';

export const metadata: Metadata = {
  title: 'Australian Wasp Species: European Wasps, Paper Wasps & Safe Removal | T47',
  description: 'Complete guide to Australian wasp species including European wasps, paper wasps, and mud daubers. Learn identification, risks, and professional removal methods.',
  keywords: 'european wasp, paper wasp, mud dauber, yellow jacket, hornet, wasp control australia, wasp nest removal, wasp identification, wasp sting treatment',
  openGraph: {
    title: 'Australian Wasp Species: European Wasps, Paper Wasps & Safe Removal',
    description: 'Complete guide to Australian wasp species and professional removal methods for safe wasp control.',
    type: 'article',
    url: 'https://www.t47pestcontrol.com/blog/australian-wasp-species-identification-control',
    images: [
      {
        url: 'https://www.t47pestcontrol.com/wasp-extermination.webp',
        width: 1200,
        height: 630,
        alt: 'Australian Wasp Species Identification and Control Guide'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Australian Wasp Species: European Wasps, Paper Wasps & Safe Removal',
    description: 'Complete guide to Australian wasp species and professional removal methods.',
    images: ['https://www.t47pestcontrol.com/wasp-extermination.webp']
  },
  alternates: {
    canonical: 'https://www.t47pestcontrol.com/blog/australian-wasp-species-identification-control'
  }
};

export default function AustralianWaspSpeciesPage() {
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
            <span className="text-gray-700">Australian Wasp Species Control Guide</span>
          </div>
        </div>
      </nav>

      {/* Article Header */}
      <article className="py-12">
        <div className="container mx-auto px-4 max-w-4xl">
          <header className="mb-12">
            <div className="flex items-center gap-4 mb-6">
              <span className="bg-[#ed8936] text-white px-4 py-2 rounded-full text-sm font-medium">
                Wasps
              </span>
              <span className="text-gray-500 text-sm">7 min read</span>
              <span className="text-gray-500 text-sm">Published: December 14, 2024</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-[#1a365d] mb-6 leading-tight">
              Australian Wasp Species: European Wasps, Paper Wasps & Safe Removal
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Australia hosts several wasp species that pose significant risks to humans. Learn to identify dangerous
              species, understand their behavior, and discover why professional removal is essential for safety.
            </p>
          </header>

          {/* Featured Image */}
          <div className="mb-12">
            <OptimizedImage
              src="/wasp-control-hero.webp"
              alt="Australian wasp species identification and professional control for residential properties"
              width={800}
              height={400}
              className="w-full rounded-xl shadow-lg"
            />
          </div>

          {/* Table of Contents */}
          <div className="bg-gray-50 p-6 rounded-xl mb-12">
            <h2 className="text-xl font-bold text-[#1a365d] mb-4">Table of Contents</h2>
            <ul className="space-y-2">
              <li><a href="#dangerous-species" className="text-[#ed8936] hover:underline">1. Dangerous Wasp Species</a></li>
              <li><a href="#beneficial-species" className="text-[#ed8936] hover:underline">2. Beneficial Wasp Species</a></li>
              <li><a href="#identification-guide" className="text-[#ed8936] hover:underline">3. Quick Identification Guide</a></li>
              <li><a href="#nest-locations" className="text-[#ed8936] hover:underline">4. Common Nest Locations</a></li>
              <li><a href="#safety-risks" className="text-[#ed8936] hover:underline">5. Safety Risks & First Aid</a></li>
              <li><a href="#professional-removal" className="text-[#ed8936] hover:underline">6. Professional Removal Methods</a></li>
              <li><a href="#prevention-tips" className="text-[#ed8936] hover:underline">7. Prevention Strategies</a></li>
            </ul>
          </div>

          {/* Safety Warning */}
          <div className="bg-red-50 border-l-4 border-red-500 p-6 mb-12">
            <h2 className="text-2xl font-bold text-red-800 mb-4">⚠️ Critical Safety Warning</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-lg font-bold text-red-700 mb-3">Never Attempt DIY Removal For:</h3>
                <ul className="space-y-2 text-red-700 text-sm">
                  <li>• European wasp nests (extremely aggressive)</li>
                  <li>• Large or established nests</li>
                  <li>• Nests in wall cavities or roof spaces</li>
                  <li>• If you have allergies to stings</li>
                  <li>• Multiple nests on property</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-bold text-red-700 mb-3">Emergency Situations:</h3>
                <ul className="space-y-2 text-red-700 text-sm">
                  <li>• Multiple stings or allergic reactions</li>
                  <li>• Difficulty breathing or swelling</li>
                  <li>• Nests near children's play areas</li>
                  <li>• Aggressive wasp behavior</li>
                  <li>• Multiple stings (&gt;10)</li>
                  <li>• Call 000 for medical emergencies</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Dangerous Species Section */}
          <section id="dangerous-species" className="mb-12">
            <h2 className="text-3xl font-bold text-[#1a365d] mb-6">🚨 Dangerous Wasp Species</h2>

            <div className="grid md:grid-cols-1 gap-8 mb-8">
              <div className="bg-red-50 border border-red-200 p-6 rounded-lg shadow-sm">
                <h3 className="text-2xl font-bold text-red-600 mb-4">European Wasp (Vespula germanica)</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-3 text-gray-700">
                    <p><strong>Size:</strong> 12-16mm workers, 20mm queens</p>
                    <p><strong>Color:</strong> Bright yellow and black stripes</p>
                    <p><strong>Behavior:</strong> Extremely aggressive, can sting multiple times</p>
                    <p><strong>Nest Size:</strong> Up to 100,000 individuals</p>
                    <p><strong>Peak Activity:</strong> Late summer to autumn</p>
                  </div>
                  <div className="space-y-3 text-gray-700">
                    <p><strong>Danger Level:</strong> <span className="text-red-600 font-bold">EXTREME</span></p>
                    <p><strong>Distribution:</strong> Victoria, Tasmania, South Australia, NSW</p>
                    <p><strong>Nest Location:</strong> Underground, wall cavities, roof spaces</p>
                    <p><strong>Identification:</strong> Hairless body, distinct waist, folded wings</p>
                    <p><strong>Status:</strong> <span className="text-red-600 font-bold">INVASIVE PEST</span></p>
                  </div>
                </div>
                <div className="mt-4 p-4 bg-red-100 rounded-lg">
                  <p className="text-red-800 font-semibold">Why They're Dangerous:</p>
                  <p className="text-red-700 text-sm">European wasps are highly aggressive, especially when defending nests. They can sting repeatedly, inject more venom than bees, and attack in swarms. Their stings are extremely painful and can cause severe allergic reactions.</p>
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div className="bg-orange-50 border border-orange-200 p-6 rounded-lg shadow-sm">
                <h3 className="text-2xl font-bold text-orange-600 mb-4">Yellow Jacket (Vespula species)</h3>
                <div className="space-y-3 text-gray-700">
                  <p><strong>Size:</strong> 10-16mm</p>
                  <p><strong>Color:</strong> Yellow and black, similar to European wasp</p>
                  <p><strong>Behavior:</strong> Aggressive when threatened</p>
                  <p><strong>Nest:</strong> Paper-like material, various locations</p>
                  <p><strong>Danger Level:</strong> <span className="text-orange-600 font-bold">HIGH</span></p>
                  <p><strong>Activity:</strong> Most active during warm weather</p>
                </div>
              </div>
              <div className="bg-orange-50 border border-orange-200 p-6 rounded-lg shadow-sm">
                <h3 className="text-2xl font-bold text-orange-600 mb-4">Hornet (Vespa species)</h3>
                <div className="space-y-3 text-gray-700">
                  <p><strong>Size:</strong> 25-35mm (largest wasps)</p>
                  <p><strong>Color:</strong> Brown and yellow markings</p>
                  <p><strong>Behavior:</strong> Less aggressive but powerful sting</p>
                  <p><strong>Nest:</strong> Large paper nests in trees</p>
                  <p><strong>Danger Level:</strong> <span className="text-orange-600 font-bold">HIGH</span></p>
                  <p><strong>Distribution:</strong> Limited in Australia</p>
                </div>
              </div>
            </div>
          </section>

          {/* Beneficial Species Section */}
          <section id="beneficial-species" className="mb-12">
            <h2 className="text-3xl font-bold text-[#1a365d] mb-6">✅ Beneficial Wasp Species</h2>

            <div className="bg-green-50 border-l-4 border-green-500 p-6 mb-8">
              <h3 className="text-lg font-bold text-green-800 mb-2">Important Ecosystem Role</h3>
              <p className="text-green-700">
                Not all wasps are dangerous. Many native Australian species are beneficial, controlling pest insects
                and pollinating plants. These species are generally less aggressive and rarely sting humans.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-2xl font-bold text-blue-800 mb-4">Paper Wasp (Polistes species)</h3>
                <div className="space-y-3 text-gray-700">
                  <p><strong>Size:</strong> 15-20mm</p>
                  <p><strong>Color:</strong> Brown, yellow, and black</p>
                  <p><strong>Behavior:</strong> Generally docile, only aggressive when threatened</p>
                  <p><strong>Nest:</strong> Small, open paper combs under eaves</p>
                  <p><strong>Benefit:</strong> Controls caterpillars and other garden pests</p>
                  <p><strong>Sting Risk:</strong> <span className="text-yellow-600 font-bold">LOW</span> (unless nest disturbed)</p>
                </div>
              </div>
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-2xl font-bold text-blue-800 mb-4">Mud Dauber (Sceliphron species)</h3>
                <div className="space-y-3 text-gray-700">
                  <p><strong>Size:</strong> 20-25mm</p>
                  <p><strong>Color:</strong> Black or metallic blue</p>
                  <p><strong>Behavior:</strong> Solitary, very rarely stings</p>
                  <p><strong>Nest:</strong> Mud tubes on walls and structures</p>
                  <p><strong>Benefit:</strong> Controls spiders and other insects</p>
                  <p><strong>Sting Risk:</strong> <span className="text-green-600 font-bold">VERY LOW</span></p>
                </div>
              </div>
            </div>
          </section>

          {/* Identification Guide Section */}
          <section id="identification-guide" className="mb-12">
            <h2 className="text-3xl font-bold text-[#1a365d] mb-6">🔍 Quick Identification Guide</h2>

            <div className="overflow-x-auto mb-8">
              <table className="w-full border-collapse border border-gray-300 bg-white">
                <thead>
                  <tr className="bg-[#ed8936] text-white">
                    <th className="border border-gray-300 p-3 text-left">Species</th>
                    <th className="border border-gray-300 p-3 text-left">Size</th>
                    <th className="border border-gray-300 p-3 text-left">Color</th>
                    <th className="border border-gray-300 p-3 text-left">Key Features</th>
                    <th className="border border-gray-300 p-3 text-left">Danger Level</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-gray-300 p-3 font-semibold">European Wasp</td>
                    <td className="border border-gray-300 p-3">12-16mm</td>
                    <td className="border border-gray-300 p-3">Bright yellow/black</td>
                    <td className="border border-gray-300 p-3">Hairless, distinct waist</td>
                    <td className="border border-gray-300 p-3"><span className="text-red-600 font-bold">EXTREME</span></td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-300 p-3 font-semibold">Yellow Jacket</td>
                    <td className="border border-gray-300 p-3">10-16mm</td>
                    <td className="border border-gray-300 p-3">Yellow/black stripes</td>
                    <td className="border border-gray-300 p-3">Similar to European</td>
                    <td className="border border-gray-300 p-3"><span className="text-orange-600 font-bold">HIGH</span></td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 p-3 font-semibold">Paper Wasp</td>
                    <td className="border border-gray-300 p-3">15-20mm</td>
                    <td className="border border-gray-300 p-3">Brown/yellow</td>
                    <td className="border border-gray-300 p-3">Long legs, narrow waist</td>
                    <td className="border border-gray-300 p-3"><span className="text-yellow-600 font-bold">LOW</span></td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-300 p-3 font-semibold">Mud Dauber</td>
                    <td className="border border-gray-300 p-3">20-25mm</td>
                    <td className="border border-gray-300 p-3">Black/metallic</td>
                    <td className="border border-gray-300 p-3">Thread-like waist</td>
                    <td className="border border-gray-300 p-3"><span className="text-green-600 font-bold">VERY LOW</span></td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 p-3 font-semibold">Hornet</td>
                    <td className="border border-gray-300 p-3">25-35mm</td>
                    <td className="border border-gray-300 p-3">Brown/yellow</td>
                    <td className="border border-gray-300 p-3">Large size, robust build</td>
                    <td className="border border-gray-300 p-3"><span className="text-orange-600 font-bold">HIGH</span></td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="bg-yellow-50 border border-yellow-200 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-yellow-800 mb-4">Wasp vs Bee Identification</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-bold text-yellow-700 mb-2">Wasps</h4>
                  <ul className="space-y-1 text-yellow-700 text-sm">
                    <li>• Smooth, hairless body</li>
                    <li>• Distinct narrow waist</li>
                    <li>• Bright yellow and black colors</li>
                    <li>• Legs dangle in flight</li>
                    <li>• Can sting multiple times</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-bold text-yellow-700 mb-2">Bees</h4>
                  <ul className="space-y-1 text-yellow-700 text-sm">
                    <li>• Fuzzy, hairy body</li>
                    <li>• Less defined waist</li>
                    <li>• Duller colors, often brown</li>
                    <li>• Legs tucked under in flight</li>
                    <li>• Usually sting once then die</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Nest Locations Section */}
          <section id="nest-locations" className="mb-12">
            <h2 className="text-3xl font-bold text-[#1a365d] mb-6">🏠 Common Nest Locations</h2>

            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="bg-white border border-gray-200 p-6 rounded-lg shadow-sm">
                <h3 className="text-lg font-bold text-[#ed8936] mb-3">Underground Nests</h3>
                <ul className="space-y-2 text-gray-700 text-sm">
                  <li>• European wasp colonies</li>
                  <li>• Old animal burrows</li>
                  <li>• Under garden sheds</li>
                  <li>• Compost heaps</li>
                  <li>• Tree root systems</li>
                  <li>• Bank embankments</li>
                </ul>
              </div>
              <div className="bg-white border border-gray-200 p-6 rounded-lg shadow-sm">
                <h3 className="text-lg font-bold text-[#ed8936] mb-3">Structural Nests</h3>
                <ul className="space-y-2 text-gray-700 text-sm">
                  <li>• Wall cavities</li>
                  <li>• Roof spaces and eaves</li>
                  <li>• Under decking</li>
                  <li>• Garage and shed walls</li>
                  <li>• Window frames</li>
                  <li>• Air conditioning units</li>
                </ul>
              </div>
              <div className="bg-white border border-gray-200 p-6 rounded-lg shadow-sm">
                <h3 className="text-lg font-bold text-[#ed8936] mb-3">Exposed Nests</h3>
                <ul className="space-y-2 text-gray-700 text-sm">
                  <li>• Tree branches</li>
                  <li>• Under eaves (paper wasps)</li>
                  <li>• Pergolas and gazebos</li>
                  <li>• Outdoor furniture</li>
                  <li>• Fence posts</li>
                  <li>• Garden structures</li>
                </ul>
              </div>
            </div>

            <div className="bg-orange-50 border border-orange-200 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-orange-800 mb-4">Signs of Wasp Activity</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-bold text-orange-700 mb-2">Visual Signs</h4>
                  <ul className="space-y-1 text-orange-700 text-sm">
                    <li>• Increased wasp numbers in area</li>
                    <li>• Wasps flying in/out of specific location</li>
                    <li>• Paper-like nest material visible</li>
                    <li>• Chewed wood particles (nest building)</li>
                    <li>• Dead wasps around property</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-bold text-orange-700 mb-2">Behavioral Signs</h4>
                  <ul className="space-y-1 text-orange-700 text-sm">
                    <li>• Aggressive wasp behavior</li>
                    <li>• Wasps attracted to food/drinks</li>
                    <li>• Buzzing sounds from walls/roof</li>
                    <li>• Wasps entering building gaps</li>
                    <li>• Territorial behavior around area</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Safety Risks Section */}
          <section id="safety-risks" className="mb-12">
            <h2 className="text-3xl font-bold text-[#1a365d] mb-6">⚠️ Safety Risks & First Aid</h2>

            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div className="bg-red-50 border border-red-200 p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-bold text-red-600 mb-4">Immediate Sting Risks</h3>
                <ul className="space-y-2 text-gray-700 text-sm">
                  <li>• <strong>Severe Pain:</strong> Intense burning sensation</li>
                  <li>• <strong>Swelling:</strong> Local inflammation and redness</li>
                  <li>• <strong>Multiple Stings:</strong> Wasps can sting repeatedly</li>
                  <li>• <strong>Infection Risk:</strong> Secondary bacterial infection</li>
                  <li>• <strong>Systemic Reaction:</strong> Whole-body response</li>
                </ul>
              </div>
              <div className="bg-red-50 border border-red-200 p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-bold text-red-600 mb-4">Allergic Reactions</h3>
                <ul className="space-y-2 text-gray-700 text-sm">
                  <li>• <strong>Anaphylaxis:</strong> Life-threatening reaction</li>
                  <li>• <strong>Breathing Difficulty:</strong> Airway swelling</li>
                  <li>• <strong>Rapid Pulse:</strong> Cardiovascular effects</li>
                  <li>• <strong>Widespread Swelling:</strong> Face, throat, tongue</li>
                  <li>• <strong>Loss of Consciousness:</strong> Medical emergency</li>
                </ul>
              </div>
            </div>

            <div className="bg-blue-50 border border-blue-200 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-blue-800 mb-4">First Aid for Wasp Stings</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-bold text-blue-700 mb-2">Immediate Treatment</h4>
                  <ol className="space-y-1 text-blue-700 text-sm list-decimal list-inside">
                    <li>Remove from danger area immediately</li>
                    <li>Do NOT squeeze or try to remove stinger</li>
                    <li>Clean area with soap and water</li>
                    <li>Apply cold compress for 10-15 minutes</li>
                    <li>Take antihistamine if available</li>
                    <li>Monitor for allergic reactions</li>
                  </ol>
                </div>
                <div>
                  <h4 className="font-bold text-blue-700 mb-2">Seek Emergency Help If:</h4>
                  <ul className="space-y-1 text-blue-700 text-sm">
                    <li>• Difficulty breathing or swallowing</li>
                    <li>• Rapid pulse or dizziness</li>
                    <li>• Widespread swelling</li>
                    <li>• Nausea or vomiting</li>
                    <li>• Loss of consciousness</li>
                    <li>• Multiple stings (&gt;10)</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Professional Removal Section */}
          <section id="professional-removal" className="mb-12">
            <h2 className="text-3xl font-bold text-[#1a365d] mb-6">🛡️ Professional Removal Methods</h2>

            <div className="bg-[#ed8936] text-white p-8 rounded-xl mb-8">
              <h3 className="text-2xl font-bold mb-4">Why Professional Removal is Essential</h3>
              <p className="text-lg leading-relaxed">
                Wasp nest removal requires specialized equipment, protective gear, and expert knowledge of wasp behavior.
                Professional technicians can safely eliminate nests while minimizing risk to people and property.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="bg-white border border-gray-200 p-6 rounded-lg shadow-sm">
                <h3 className="text-lg font-bold text-[#ed8936] mb-3">Targeted Treatments</h3>
                <ul className="space-y-2 text-gray-700 text-sm">
                  <li>• Species-specific insecticides</li>
                  <li>• Direct nest injection methods</li>
                  <li>• Residual barrier treatments</li>
                  <li>• Dust formulations for cavities</li>
                  <li>• Foam applications for hard-to-reach areas</li>
                </ul>
              </div>
              <div className="bg-white border border-gray-200 p-6 rounded-lg shadow-sm">
                <h3 className="text-lg font-bold text-[#ed8936] mb-3">Safety Equipment</h3>
                <ul className="space-y-2 text-gray-700 text-sm">
                  <li>• Full-body protective suits</li>
                  <li>• Professional-grade face protection</li>
                  <li>• Specialized application equipment</li>
                  <li>• Emergency medical supplies</li>
                  <li>• Safe removal and disposal tools</li>
                </ul>
              </div>
              <div className="bg-white border border-gray-200 p-6 rounded-lg shadow-sm">
                <h3 className="text-lg font-bold text-[#ed8936] mb-3">Complete Service</h3>
                <ul className="space-y-2 text-gray-700 text-sm">
                  <li>• Thorough property inspection</li>
                  <li>• Multiple nest identification</li>
                  <li>• Safe nest removal and disposal</li>
                  <li>• Prevention advice and monitoring</li>
                  <li>• Warranty on treatment effectiveness</li>
                </ul>
              </div>
            </div>

            <div className="bg-[#1a365d] text-white p-8 rounded-xl">
              <h3 className="text-2xl font-bold mb-4">T47 Professional Wasp Control</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="text-lg font-bold mb-3">Expert Service</h4>
                  <ul className="space-y-2 text-gray-300 text-sm">
                    <li>• Same-day emergency wasp removal</li>
                    <li>• 7-day availability including public holidays</li>
                    <li>• Eco-friendly treatment options</li>
                    <li>• Free follow-up inspections</li>
                    <li>• Comprehensive service warranties</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-lg font-bold mb-3">Safety First</h4>
                  <ul className="space-y-2 text-gray-300 text-sm">
                    <li>• Fully licensed and insured technicians</li>
                    <li>• Advanced safety protocols</li>
                    <li>• Minimal risk to family and pets</li>
                    <li>• Professional-grade protective equipment</li>
                    <li>• Emergency response capabilities</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Prevention Tips Section */}
          <section id="prevention-tips" className="mb-12">
            <h2 className="text-3xl font-bold text-[#1a365d] mb-6">🛡️ Prevention Strategies</h2>

            <div className="bg-green-50 border-l-4 border-green-500 p-6 mb-8">
              <h3 className="text-lg font-bold text-green-800 mb-2">Proactive Prevention</h3>
              <p className="text-green-700">
                The best wasp control strategy is prevention. Regular property maintenance and early intervention
                can prevent wasp colonies from establishing on your property.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div className="bg-white border border-gray-200 p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-bold text-[#ed8936] mb-4">Property Maintenance</h3>
                <ul className="space-y-2 text-gray-700 text-sm">
                  <li>• Seal gaps and cracks in buildings</li>
                  <li>• Remove food sources (fallen fruit, pet food)</li>
                  <li>• Cover garbage bins with tight-fitting lids</li>
                  <li>• Clean outdoor eating areas promptly</li>
                  <li>• Remove standing water sources</li>
                  <li>• Trim vegetation away from structures</li>
                </ul>
              </div>
              <div className="bg-white border border-gray-200 p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-bold text-[#ed8936] mb-4">Early Detection</h3>
                <ul className="space-y-2 text-gray-700 text-sm">
                  <li>• Regular property inspections in spring</li>
                  <li>• Monitor common nesting areas</li>
                  <li>• Watch for increased wasp activity</li>
                  <li>• Check eaves and overhangs monthly</li>
                  <li>• Inspect garden sheds and outbuildings</li>
                  <li>• Professional annual inspections</li>
                </ul>
              </div>
            </div>

            <div className="bg-yellow-50 border border-yellow-200 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-yellow-800 mb-4">Seasonal Prevention Calendar</h3>
              <div className="grid md:grid-cols-4 gap-4">
                <div>
                  <h4 className="font-bold text-yellow-700 mb-2">Spring (Sep-Nov)</h4>
                  <ul className="space-y-1 text-yellow-700 text-sm">
                    <li>• Queen wasps emerge</li>
                    <li>• Early nest detection</li>
                    <li>• Seal entry points</li>
                    <li>• Remove old nests</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-bold text-yellow-700 mb-2">Summer (Dec-Feb)</h4>
                  <ul className="space-y-1 text-yellow-700 text-sm">
                    <li>• Peak nest building</li>
                    <li>• Monitor activity</li>
                    <li>• Professional treatment</li>
                    <li>• Maintain cleanliness</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-bold text-yellow-700 mb-2">Autumn (Mar-May)</h4>
                  <ul className="space-y-1 text-yellow-700 text-sm">
                    <li>• Most aggressive period</li>
                    <li>• Avoid nest areas</li>
                    <li>• Professional removal</li>
                    <li>• Prepare for winter</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-bold text-yellow-700 mb-2">Winter (Jun-Aug)</h4>
                  <ul className="space-y-1 text-yellow-700 text-sm">
                    <li>• Colonies die off</li>
                    <li>• Remove old nests</li>
                    <li>• Seal potential sites</li>
                    <li>• Plan prevention</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="bg-[#1a365d] text-white p-8 rounded-xl text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              Wasp Problem? Get Professional Help Immediately
            </h2>
            <p className="text-lg text-gray-300 mb-6">
              Don't risk dangerous wasp stings. T47 Pest Control provides safe, effective wasp nest removal
              with same-day emergency service across Australia.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/residential/wasps"
                className="bg-[#ed8936] text-white px-6 py-3 rounded-lg hover:bg-[#dd7324] transition-colors font-bold"
              >
                Wasp Control Service
              </Link>
              <Link
                href="tel:+61434300216"
                className="border-2 border-white text-white px-6 py-3 rounded-lg hover:bg-white hover:text-[#1a365d] transition-colors font-bold"
              >
                Emergency: +61 434 300 216
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
            <Link href="/blog/dangerous-australian-spiders-identification-control" className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <h3 className="font-bold text-[#1a365d] mb-2">Dangerous Australian Spiders</h3>
              <p className="text-gray-600 text-sm">Identify and control venomous spider species safely.</p>
            </Link>
            <Link href="/blog/australian-ant-species-control-guide" className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <h3 className="font-bold text-[#1a365d] mb-2">Australian Ant Species</h3>
              <p className="text-gray-600 text-sm">Complete guide to ant identification and control.</p>
            </Link>
            <Link href="/blog/diy-vs-professional-pest-control-australia" className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <h3 className="font-bold text-[#1a365d] mb-2">DIY vs Professional Control</h3>
              <p className="text-gray-600 text-sm">When to call experts for pest control services.</p>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

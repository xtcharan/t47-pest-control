"use client";

import { useState } from 'react';
import Image from 'next/image';

interface ComparisonTabProps {
  title: string;
  isActive: boolean;
  onClick: () => void;
}

const ComparisonTab = ({ title, isActive, onClick }: ComparisonTabProps) => {
  return (
    <button
      className={`px-6 py-3 text-lg font-medium rounded-t-lg transition-all duration-300 ${
        isActive
          ? 'bg-green-600 text-white shadow-md'
          : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
      }`}
      onClick={onClick}
    >
      {title}
    </button>
  );
};

interface ComparisonItemProps {
  title: string;
  rats: string;
  mice: string;
}

const ComparisonItem = ({ title, rats, mice }: ComparisonItemProps) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 border-b border-gray-200 py-4">
      <div className="font-medium text-gray-800 md:border-r border-gray-200 p-3">{title}</div>
      <div className="p-3 md:border-r border-gray-200">{rats}</div>
      <div className="p-3">{mice}</div>
    </div>
  );
};

export default function RodentComparisonGuide() {
  const [activeTab, setActiveTab] = useState<'comparison' | 'signs'>('comparison');

  const comparisonData: ComparisonItemProps[] = [
    {
      title: "Size",
      rats: "Larger: 7-10 inches body length with 6-8 inch tail",
      mice: "Smaller: 2-4 inches body length with 3-4 inch tail"
    },
    {
      title: "Weight",
      rats: "Heavier: 8-12 ounces (up to 1 pound)",
      mice: "Lighter: 0.5-1 ounce"
    },
    {
      title: "Head & Body",
      rats: "Blunt snout, heavy-set body, small ears relative to body",
      mice: "Pointed snout, slender body, large ears relative to body"
    },
    {
      title: "Droppings",
      rats: "Larger: ½-¾ inch, capsule-shaped with pointed ends",
      mice: "Smaller: ⅛-¼ inch, rod-shaped with pointed ends"
    },
    {
      title: "Behavior",
      rats: "Cautious, neophobic (fear of new objects), excellent swimmers",
      mice: "Curious, exploratory, poor swimmers but excellent climbers"
    },
    {
      title: "Diet",
      rats: "Omnivorous with preference for meat, fish, and grains",
      mice: "Primarily granivorous (seed/grain eaters), nibble on many food sources"
    },
    {
      title: "Range",
      rats: "Larger territory: 100-150 foot radius from nest",
      mice: "Smaller territory: 10-30 foot radius from nest"
    },
    {
      title: "Entry Points",
      rats: "Need larger openings: ½ inch or greater",
      mice: "Can squeeze through tiny gaps: ¼ inch (size of a pencil)"
    }
  ];

  const signsData = [
    {
      title: "Rat Infestation Signs",
      points: [
        "Large droppings (½-¾ inch) found along walls or in concentrated areas",
        "Greasy rub marks along baseboards and walls from their oily fur",
        "Gnaw marks on wood, plastic, and hard materials with rough, large tooth marks",
        "Heavy scratching or scurrying sounds, particularly at night in attics or walls",
        "Burrows near foundations, under debris, or in dense vegetation",
        "Strong, musky odor in enclosed spaces with heavy infestations",
        "Tracks with four front toes and five back toes, often visible in dusty areas",
        "Nests made of shredded material in secluded areas like attics or basements"
      ]
    },
    {
      title: "Mouse Infestation Signs",
      points: [
        "Small droppings (⅛-¼ inch) scattered widely throughout activity areas",
        "Light grease marks along baseboards from their fur",
        "Small, clean-cut gnaw marks on food packaging and softer materials",
        "Light, quick scurrying sounds, often heard at night within walls or ceilings",
        "Small, pencil-sized holes in food packages and building materials",
        "Musty, ammonia-like odor in enclosed spaces with heavy infestations",
        "Tracks with four front toes and five back toes, but much smaller than rat tracks",
        "Nests made of shredded paper, fabric, or other soft materials in enclosed spaces"
      ]
    }
  ];

  return (
    <section className="py-16 bg-gray-50 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-1/3 h-1/3 bg-green-50/50 rounded-br-[100px] z-0"></div>
        <div className="absolute bottom-0 right-0 w-1/4 h-1/4 bg-green-50/30 rounded-tl-[100px] z-0"></div>
        <div className="absolute top-1/3 right-10 w-6 h-6 bg-green-100 rounded-full z-0"></div>
        <div className="absolute bottom-1/4 left-20 w-4 h-4 bg-green-200 rounded-full z-0"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <span className="inline-block px-3 py-1 bg-green-100 text-green-800 text-sm font-semibold rounded-full mb-3">
            KNOW YOUR ENEMY
          </span>
          <h2 className="text-4xl font-bold mb-4 text-gray-900">
            Rats vs. Mice: <span className="text-green-600">Identification Guide</span>
          </h2>
          <div className="w-24 h-1 bg-green-600 mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Understanding the differences between rats and mice is crucial for effective control. Learn how to identify which rodent species you're dealing with and the specific signs of infestation.
          </p>
        </div>

        <div className="bg-white rounded-xl shadow-md overflow-hidden mb-16">
          <div className="flex flex-wrap border-b border-gray-200">
            <ComparisonTab
              title="Rats vs. Mice Comparison"
              isActive={activeTab === 'comparison'}
              onClick={() => setActiveTab('comparison')}
            />
            <ComparisonTab
              title="Signs of Infestation"
              isActive={activeTab === 'signs'}
              onClick={() => setActiveTab('signs')}
            />
          </div>

          <div className="p-6">
            {activeTab === 'comparison' && (
              <div>
                <div className="grid grid-cols-1 md:grid-cols-3 bg-gray-50 py-3 font-bold text-gray-700">
                  <div className="p-3 md:border-r border-gray-200">Characteristic</div>
                  <div className="p-3 md:border-r border-gray-200">Rats</div>
                  <div className="p-3">Mice</div>
                </div>
                
                {comparisonData.map((item, index) => (
                  <ComparisonItem
                    key={index}
                    title={item.title}
                    rats={item.rats}
                    mice={item.mice}
                  />
                ))}

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                  <div className="relative h-[250px] rounded-lg overflow-hidden shadow-md">
                    <Image
                      src="/rat-identification.jpg"
                      alt="Rat Identification Guide"
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                    <div className="absolute bottom-0 left-0 p-4">
                      <h3 className="text-white font-bold text-xl mb-1">Rat Identification</h3>
                      <p className="text-white/80 text-sm">Norway rat (left) and Roof rat (right)</p>
                    </div>
                  </div>
                  <div className="relative h-[250px] rounded-lg overflow-hidden shadow-md">
                    <Image
                      src="/mouse-identification.jpg"
                      alt="Mouse Identification Guide"
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                    <div className="absolute bottom-0 left-0 p-4">
                      <h3 className="text-white font-bold text-xl mb-1">Mouse Identification</h3>
                      <p className="text-white/80 text-sm">House mouse with distinctive features</p>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'signs' && (
              <div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {signsData.map((data, index) => (
                    <div key={index} className="bg-gray-50 rounded-lg p-6">
                      <h3 className="text-xl font-bold text-gray-800 mb-4">{data.title}</h3>
                      <ul className="space-y-3">
                        {data.points.map((point, pointIndex) => (
                          <li key={pointIndex} className="flex items-start">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor">
                              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                            </svg>
                            <span className="text-gray-700">{point}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>

                <div className="mt-8 p-6 bg-green-50 rounded-lg">
                  <h3 className="text-xl font-bold text-gray-800 mb-4">Evidence Comparison: Droppings</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="relative h-[200px] rounded-lg overflow-hidden shadow-md">
                      <Image
                        src="/rat-droppings.jpg"
                        alt="Rat Droppings"
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, 50vw"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                      <div className="absolute bottom-0 left-0 p-4">
                        <h4 className="text-white font-bold text-lg mb-1">Rat Droppings</h4>
                        <p className="text-white/80 text-sm">½-¾ inch, capsule-shaped with pointed ends</p>
                      </div>
                    </div>
                    <div className="relative h-[200px] rounded-lg overflow-hidden shadow-md">
                      <Image
                        src="/mouse-droppings.jpg"
                        alt="Mouse Droppings"
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, 50vw"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                      <div className="absolute bottom-0 left-0 p-4">
                        <h4 className="text-white font-bold text-lg mb-1">Mouse Droppings</h4>
                        <p className="text-white/80 text-sm">⅛-¼ inch, rod-shaped with pointed ends</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        <div className="text-center">
          <div className="bg-white p-6 rounded-xl shadow-md max-w-2xl mx-auto border border-gray-200">
            <h3 className="text-xl font-semibold mb-3 text-gray-800">Not sure what type of rodent you're dealing with?</h3>
            <p className="text-gray-600 mb-4">Our rodent control specialists can identify the specific species and develop a targeted treatment plan for your unique situation.</p>
            <a href="/contact" className="inline-block bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white font-bold py-3 px-8 rounded-full transition-all duration-300 transform hover:scale-105 shadow-md">
              Schedule a Professional Inspection
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

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
  const [activeTab, setActiveTab] = useState<'comparison'>('comparison');

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
            Understanding the differences between rats and mice is crucial for effective control. Learn how to identify which rodent species you're dealing with through our comprehensive comparison guide.
          </p>
        </div>

        <div className="bg-white rounded-xl shadow-md overflow-hidden mb-16">

          <div className="p-6">
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
                  <div className="relative h-[300px] md:h-[320px] rounded-lg overflow-hidden shadow-md">
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
                  <div className="relative h-[300px] md:h-[320px] rounded-lg overflow-hidden shadow-md">
                    <Image
                      src="/mouse-identification.jpg"
                      alt="Mouse Identification Guide"
                      fill
                      className="object-contain scale-125"
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

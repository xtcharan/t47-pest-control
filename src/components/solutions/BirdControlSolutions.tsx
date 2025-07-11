"use client";

import { useState } from 'react';
import Image from 'next/image';

interface SolutionCardProps {
  title: string;
  description: string;
  image: string;
  benefits: string[];
  applications: string[];
}

const SolutionCard = ({ title, description, image, benefits, applications }: SolutionCardProps) => {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div 
      className="h-[450px] w-full perspective-1000 cursor-pointer group"
      onClick={() => setIsFlipped(!isFlipped)}
    >
      <div className={`relative w-full h-full transition-transform duration-700 transform-style-3d ${isFlipped ? 'rotate-y-180' : ''}`}>
        {/* Front of card */}
        <div className="absolute inset-0 backface-hidden rounded-xl overflow-hidden shadow-lg">
          <div className="relative h-full w-full">
            <Image
              src={image}
              alt={title}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/10"></div>
            <div className="absolute bottom-0 left-0 p-6 w-full">
              <h3 className="text-2xl font-bold text-white mb-2">{title}</h3>
              <p className="text-white/80 mb-4 line-clamp-2">{description}</p>
              <div className="text-blue-300 text-sm font-medium flex items-center group-hover:text-blue-200 transition-colors">
                <span>View Details</span>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1 group-hover:translate-x-1 transition-transform" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </div>
            </div>
          </div>
        </div>

        {/* Back of card */}
        <div className="absolute inset-0 backface-hidden rotate-y-180 bg-blue-600 rounded-xl p-6 text-white shadow-lg">
          <h3 className="text-xl font-bold mb-4 border-b border-blue-400 pb-2">{title}</h3>
          
          <div className="mb-4">
            <h4 className="text-lg font-semibold mb-2 text-blue-200">Key Benefits:</h4>
            <ul className="space-y-1 text-sm">
              {benefits.map((benefit, index) => (
                <li key={index} className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-blue-300 mr-2 mt-0.5 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>{benefit}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-2 text-blue-200">Ideal Applications:</h4>
            <ul className="space-y-1 text-sm">
              {applications.map((application, index) => (
                <li key={index} className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-blue-300 mr-2 mt-0.5 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                    <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd" />
                  </svg>
                  <span>{application}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="absolute bottom-4 right-4 text-sm text-blue-200 italic">
            Tap card to flip back
          </div>
        </div>
      </div>
    </div>
  );
};

export default function BirdControlSolutions() {
  const solutions: SolutionCardProps[] = [
    {
      title: "Bird Netting Systems",
      description: "Heavy-duty, virtually invisible netting that creates a physical barrier to prevent birds from accessing protected areas.",
      image: "/bird-netting-solution.jpg",
      benefits: [
        "Creates a 100% physical exclusion barrier",
        "Nearly invisible when properly installed",
        "Extremely durable and long-lasting (10+ years)",
        "Suitable for multiple bird species",
        "Weather and UV resistant"
      ],
      applications: [
        "Courtyards and open areas",
        "Warehouses and industrial buildings",
        "Loading docks and canopies",
        "Rooftops and HVAC equipment",
        "Agricultural settings"
      ]
    },
    {
      title: "Bird Spike Systems",
      description: "Stainless steel or polycarbonate spikes that create an uneven surface where birds cannot land or roost comfortably.",
      image: "/bird-spike-solution.jpg",
      benefits: [
        "Low-profile and discreet appearance",
        "Easy installation on various surfaces",
        "Maintenance-free operation",
        "Effective against larger birds (pigeons, seagulls)",
        "Weather-resistant and durable"
      ],
      applications: [
        "Ledges and window sills",
        "Roof peaks and edges",
        "Signs and architectural features",
        "Light fixtures and security cameras",
        "Parapet walls and railings"
      ]
    },
    {
      title: "Electric Track Systems",
      description: "Low-profile electrified tracks that deliver a mild electric shock when birds land, conditioning them to avoid the area.",
      image: "/bird-track-solution.jpg",
      benefits: [
        "Nearly invisible from ground level",
        "Humane deterrent (mild shock doesn't harm birds)",
        "Effective against all bird species",
        "Flexible installation on curved surfaces",
        "Low maintenance requirements"
      ],
      applications: [
        "Historic buildings and monuments",
        "High-end architectural features",
        "Retail storefronts and signage",
        "Ledges and parapets",
        "Statues and decorative elements"
      ]
    },
    {
      title: "Bird Wire Systems",
      description: "Tensioned stainless steel wires that create an unstable landing surface, preventing birds from perching comfortably.",
      image: "/bird-wire-solution.jpg",
      benefits: [
        "Extremely low visual profile",
        "Cost-effective for large areas",
        "Customizable tension for different bird species",
        "Minimal maintenance required",
        "Suitable for historic buildings"
      ],
      applications: [
        "Beams and support structures",
        "Ledges and parapets",
        "Rooflines and gutters",
        "Signage and architectural features",
        "Balconies and railings"
      ]
    },
    {
      title: "Visual Bird Deterrents",
      description: "Visual scare devices including reflective materials, predator decoys, and holographic products that deter birds through sight.",
      image: "/bird-visual-solution.jpg",
      benefits: [
        "Easy installation with minimal tools",
        "No permanent modifications to structures",
        "Cost-effective for temporary problems",
        "Environmentally friendly approach",
        "Can be combined with other methods"
      ],
      applications: [
        "Residential properties",
        "Gardens and outdoor dining areas",
        "Boats and marinas",
        "Small commercial properties",
        "Temporary bird problems"
      ]
    },
    {
      title: "Bird Slope Systems",
      description: "Angled PVC panels that create a slippery surface where birds cannot land or gain a foothold, preventing roosting.",
      image: "/bird-slope-solution.jpg",
      benefits: [
        "Blends with building architecture",
        "No maintenance once installed",
        "Effective against multiple bird species",
        "Weather and UV resistant",
        "No harm to birds or other wildlife"
      ],
      applications: [
        "Ledges and window sills",
        "Eaves and overhangs",
        "Lighting fixtures",
        "Signage and letter sets",
        "Architectural features"
      ]
    }
  ];

  return (
    <section className="py-16 bg-gray-50 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-1/3 h-1/3 bg-blue-50/50 rounded-br-[100px] z-0"></div>
        <div className="absolute bottom-0 right-0 w-1/4 h-1/4 bg-blue-50/30 rounded-tl-[100px] z-0"></div>
        <div className="absolute top-1/3 right-10 w-6 h-6 bg-blue-100 rounded-full z-0"></div>
        <div className="absolute bottom-1/4 left-20 w-4 h-4 bg-blue-200 rounded-full z-0"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <span className="inline-block px-3 py-1 bg-blue-100 text-blue-800 text-sm font-semibold rounded-full mb-3">
            EFFECTIVE & HUMANE SOLUTIONS
          </span>
          <h2 className="text-4xl font-bold mb-4 text-gray-900">
            Our Bird Control <span className="text-blue-600">Methods</span>
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-3xl mx-auto">
            We offer a comprehensive range of humane bird deterrent systems, each designed to address specific bird problems while respecting wildlife and complying with regulations.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {solutions.map((solution, index) => (
            <SolutionCard
              key={index}
              title={solution.title}
              description={solution.description}
              image={solution.image}
              benefits={solution.benefits}
              applications={solution.applications}
            />
          ))}
        </div>

        <div className="bg-white p-6 rounded-xl shadow-md max-w-4xl mx-auto">
          <div className="flex flex-col md:flex-row items-center gap-6">
            <div className="md:w-1/4 flex justify-center">
              <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
            </div>
            <div className="md:w-3/4">
              <h3 className="text-2xl font-bold text-blue-800 mb-3 text-center md:text-left">Customized Bird Management Plans</h3>
              <p className="text-gray-700 mb-4">
                Every bird problem is unique, which is why we develop customized management plans based on a thorough site assessment. Our specialists consider the bird species involved, building architecture, severity of the problem, and your specific concerns to recommend the most effective combination of deterrent methods. This integrated approach provides more reliable, long-lasting results than any single method alone. We also consider aesthetics, budget constraints, and maintenance requirements to ensure our solutions meet your specific needs.
              </p>
              <div className="text-center md:text-left">
                <a href="/contact" className="inline-block bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white font-bold py-3 px-8 rounded-full transition-all duration-300 transform hover:scale-105 shadow-md">
                  Request Your Custom Solution
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

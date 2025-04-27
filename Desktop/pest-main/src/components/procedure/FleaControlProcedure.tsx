"use client";

import { useState } from 'react';
import Image from 'next/image';

interface ProcedureStepProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  isOpen: boolean;
  toggleStep: () => void;
  stepNumber: number;
}

const ProcedureStep = ({ icon, title, description, isOpen, toggleStep, stepNumber }: ProcedureStepProps) => {
  return (
    <div className="border-b border-gray-100 last:border-b-0">
      <div
        className={`flex items-center justify-between p-4 cursor-pointer transition-all duration-300 ${isOpen ? 'bg-green-50/50' : 'bg-white'}`}
        onClick={toggleStep}
      >
        <div className="flex items-center gap-3 flex-1">
          <div className={`w-10 h-10 rounded-full flex items-center justify-center transition-colors duration-300 ${isOpen ? 'bg-green-600 text-white' : 'bg-green-100 text-green-600'}`}>
            {icon}
          </div>
          <h3 className={`font-semibold text-lg transition-colors duration-300 ${isOpen ? 'text-green-700' : 'text-gray-800'} flex-1`}>
            {title}
          </h3>
        </div>
        <div className={`w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ${isOpen ? 'bg-green-100 rotate-180' : 'bg-gray-100'}`}>
          <svg xmlns="http://www.w3.org/2000/svg" className={`h-5 w-5 transition-colors duration-300 ${isOpen ? 'text-green-600' : 'text-gray-500'}`} viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
          </svg>
        </div>
      </div>
      <div className={`overflow-hidden transition-all duration-500 ease-in-out ${isOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'}`}>
        <div className="p-4 bg-white">
          <p className="text-gray-700 leading-relaxed text-justify">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default function FleaControlProcedure() {
  const [openStep, setOpenStep] = useState<number | null>(0);

  const toggleStep = (index: number) => {
    setOpenStep(openStep === index ? null : index);
  };

  const procedureSteps = [
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
      ),
      title: "Comprehensive Inspection",
      description: "Our flea control process begins with a thorough inspection of your property. Our technicians identify flea hotspots by examining carpets, furniture, pet resting areas, and outdoor spaces. We use specialized tools to detect flea activity, including adults, larvae, and flea dirt. This assessment allows us to determine the extent of the infestation, identify contributing factors, and develop a customized treatment plan targeting all flea life stages."
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
        </svg>
      ),
      title: "Indoor Treatment",
      description: "Our indoor flea treatment combines multiple approaches for complete elimination. We apply professional-grade adulticides to quickly eliminate adult fleas, providing immediate relief. Simultaneously, we use insect growth regulators (IGRs) that prevent flea eggs and larvae from developing into adults, breaking the reproductive cycle. We treat carpets, furniture, baseboards, pet resting areas, and other flea harborage sites. Our treatments penetrate deep into carpet fibers and cracks where fleas hide, ensuring no survivors remain to repopulate."
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
        </svg>
      ),
      title: "Outdoor Treatment",
      description: "Fleas often originate outdoors, so we extend our treatment to your yard, focusing on shaded areas, pet resting spots, and under decks or porches where fleas thrive. We apply residual insecticides and growth regulators to eliminate existing fleas and prevent reinfestation. Our outdoor treatments are formulated to withstand environmental factors while remaining safe for your family, pets, and beneficial insects when used as directed. This comprehensive approach creates a protective barrier around your property."
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
        </svg>
      ),
      title: "Follow-Up & Prevention",
      description: "Our flea control includes follow-up treatments to ensure complete elimination. Since flea pupae can remain dormant for months, we schedule a second treatment 2-3 weeks after the initial application to target newly emerged adults before they reproduce. We also provide comprehensive prevention guidance, including pet treatment recommendations, cleaning practices, and environmental modifications to maintain a flea-free home. For severe infestations, we may recommend our ongoing protection program with quarterly treatments."
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-b from-white to-green-50/30 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute -top-20 -left-20 w-64 h-64 bg-green-100/30 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 right-0 w-72 h-72 bg-green-100/20 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-20 left-1/4 w-60 h-60 bg-green-100/20 rounded-full blur-3xl"></div>
        <div className="absolute top-40 right-40 w-8 h-8 bg-green-400/40 rounded-full animate-float"></div>
        <div className="absolute bottom-60 left-60 w-6 h-6 bg-green-400/40 rounded-full animate-bounce-gentle"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <span className="inline-block px-3 py-1 bg-green-100 text-green-700 text-sm font-semibold rounded-full mb-3">
            MULTI-STAGE APPROACH
          </span>
          <h2 className="text-4xl font-bold mb-4 text-gray-900">
            Our Flea <span className="text-green-600">Elimination</span> Process
          </h2>
          <div className="w-24 h-1 bg-green-600 mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Our comprehensive flea control process targets every stage of the flea lifecycle to provide complete elimination and long-lasting protection for your home and pets.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="relative rounded-xl overflow-hidden shadow-xl h-[400px] md:h-[500px] group">
            <div className="absolute inset-0 p-0.5 rounded-xl bg-green-500 z-10 opacity-70 group-hover:opacity-100 transition-opacity duration-300"></div>

            <div className="absolute inset-0.5 rounded-xl overflow-hidden z-20">
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent z-10"></div>
              <Image
                src="/flea-control-process.jpg"
                alt="Professional Flea Control Process"
                fill
                className="object-cover transform group-hover:scale-105 transition-transform duration-700"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>

            <div className="absolute bottom-4 left-4 z-30 bg-green-600/90 text-white px-4 py-2 rounded-lg text-sm font-medium shadow-lg transform group-hover:translate-y-[-4px] transition-transform duration-300">
              Complete Lifecycle Treatment
            </div>

            <div className="absolute top-2 left-2 w-8 h-8 border-t-2 border-l-2 border-green-400 rounded-tl-lg z-30"></div>
            <div className="absolute top-2 right-2 w-8 h-8 border-t-2 border-r-2 border-green-400 rounded-tr-lg z-30"></div>
            <div className="absolute bottom-2 left-2 w-8 h-8 border-b-2 border-l-2 border-green-400 rounded-bl-lg z-30"></div>
            <div className="absolute bottom-2 right-2 w-8 h-8 border-b-2 border-r-2 border-green-400 rounded-br-lg z-30"></div>
          </div>

          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            {procedureSteps.map((step, index) => (
              <ProcedureStep
                key={index}
                icon={step.icon}
                title={step.title}
                description={step.description}
                isOpen={openStep === index}
                toggleStep={() => toggleStep(index)}
                stepNumber={index + 1}
              />
            ))}
          </div>
        </div>

        <div className="mt-12 text-center">
          <div className="bg-green-600 text-white p-6 rounded-xl shadow-lg max-w-2xl mx-auto transform hover:scale-[1.02] transition-transform duration-300 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-40 h-40 bg-white/10 rounded-full blur-2xl -mr-20 -mt-20"></div>
            <div className="absolute bottom-0 left-0 w-40 h-40 bg-white/5 rounded-full blur-2xl -ml-20 -mb-20"></div>

            <div className="relative z-10">
              <h3 className="text-xl font-semibold mb-3">Ready to eliminate your flea problem?</h3>
              <p className="text-white/80 mb-4">Our flea control specialists are ready to help you reclaim your home from these persistent pests.</p>
              <a href="/contact" className="inline-block bg-white text-green-600 hover:text-green-700 font-bold py-3 px-8 rounded-full transition-all duration-300 border-2 border-white hover:border-opacity-80 hover:shadow-lg">
                Schedule Your Treatment
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

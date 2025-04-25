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
        className={`flex items-center justify-between p-4 cursor-pointer transition-all duration-300 ${isOpen ? 'bg-purple-50/50' : 'bg-white'}`}
        onClick={toggleStep}
      >
        <div className="flex items-center gap-3">
          <div className={`w-10 h-10 rounded-full flex items-center justify-center transition-colors duration-300 ${isOpen ? 'bg-purple-600 text-white' : 'bg-purple-100 text-purple-600'}`}>
            {icon}
          </div>
          <h3 className={`font-semibold text-lg transition-colors duration-300 ${isOpen ? 'text-purple-700' : 'text-gray-800'}`}>
            {title}
          </h3>
        </div>
        <div className={`w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ${isOpen ? 'bg-purple-100 rotate-180' : 'bg-gray-100'}`}>
          <svg xmlns="http://www.w3.org/2000/svg" className={`h-5 w-5 transition-colors duration-300 ${isOpen ? 'text-purple-600' : 'text-gray-500'}`} viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
          </svg>
        </div>
      </div>
      <div className={`overflow-hidden transition-all duration-500 ease-in-out ${isOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'}`}>
        <div className="p-4 bg-white">
          <p className="text-gray-700 leading-relaxed">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default function PossumControlProcedure() {
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
      description: "Our possum management process begins with a thorough inspection of your property. Our wildlife specialists identify possum activity by examining entry points, nesting areas, and signs of damage. We look for droppings, scratching sounds, damaged insulation, and other evidence to determine the extent of the infestation. We also assess potential entry points such as gaps in roofing, damaged vents, unsealed eaves, and other access routes. This detailed assessment allows us to develop a customized management plan that addresses your specific possum problem while complying with wildlife protection regulations."
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
        </svg>
      ),
      title: "Humane Trapping & Removal",
      description: "We use only humane, non-lethal trapping methods that comply with wildlife protection laws. Our specially designed possum traps are placed in strategic locations based on possum activity patterns. We use appropriate baits that attract possums without endangering other wildlife. Once captured, possums are carefully handled by our trained specialists to minimize stress. We conduct health assessments to ensure the animals are fit for relocation. In accordance with wildlife regulations, possums are relocated to suitable habitats within the permitted distance from the capture site, ensuring they have access to food, water, and shelter in their new environment."
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
        </svg>
      ),
      title: "Entry Point Sealing",
      description: "Preventing re-entry is crucial for long-term possum control. We identify and seal all potential entry points using durable materials that resist possum attempts to re-enter. Common entry points include gaps in roofing, damaged vents, unsealed eaves, and holes in exterior walls. We install heavy-gauge metal mesh over vents and openings that need airflow while preventing possum access. We seal gaps in roofing, soffits, and fascia boards with appropriate materials that match your home's appearance. For chimneys and other large openings, we install specially designed caps and covers that prevent possum entry while maintaining proper function. This comprehensive exclusion process ensures possums cannot return to your home."
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
        </svg>
      ),
      title: "Damage Repair & Cleanup",
      description: "After possums are removed, we address the damage they've caused to restore your property. We repair damaged insulation, wiring, and ductwork in attics and crawl spaces to restore energy efficiency and eliminate fire hazards. We clean and decontaminate areas affected by possum droppings and urine using specialized equipment and EPA-approved disinfectants. This process eliminates odors and potential health hazards. We remove nesting materials and debris left behind by possums. For extensive damage, we can coordinate with contractors for structural repairs. Our comprehensive cleanup ensures your home is restored to a safe, clean condition after possum removal."
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
      title: "Prevention & Habitat Modification",
      description: "We implement long-term prevention strategies to keep possums from returning to your property. We provide guidance on landscaping modifications that make your property less attractive to possums, such as trimming tree branches that provide roof access and managing fruit trees that may attract wildlife. We recommend secure garbage storage solutions to eliminate food sources that attract possums. We install possum deterrents such as motion-activated lights and sprinklers in strategic locations. For ongoing protection, we offer maintenance programs with regular inspections to identify and address new vulnerabilities before possums can exploit them. These preventative measures create a long-term solution to possum problems while maintaining a wildlife-friendly property."
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-b from-white to-purple-50/30 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute -top-20 -left-20 w-64 h-64 bg-purple-100/30 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 right-0 w-72 h-72 bg-purple-100/20 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-20 left-1/4 w-60 h-60 bg-purple-100/20 rounded-full blur-3xl"></div>
        <div className="absolute top-40 right-40 w-8 h-8 bg-purple-400/40 rounded-full animate-float"></div>
        <div className="absolute bottom-60 left-60 w-6 h-6 bg-purple-400/40 rounded-full animate-bounce-gentle"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <span className="inline-block px-3 py-1 bg-purple-100 text-purple-700 text-sm font-semibold rounded-full mb-3">
            HUMANE APPROACH
          </span>
          <h2 className="text-4xl font-bold mb-4 text-gray-900">
            Our Possum <span className="text-purple-600">Management</span> Process
          </h2>
          <div className="w-24 h-1 bg-purple-600 mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Our wildlife-friendly possum control process combines humane removal techniques with effective prevention strategies to provide long-term protection for your property.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="relative rounded-xl overflow-hidden shadow-xl h-[400px] md:h-[500px] group">
            <div className="absolute inset-0 p-0.5 rounded-xl bg-purple-500 z-10 opacity-70 group-hover:opacity-100 transition-opacity duration-300"></div>

            <div className="absolute inset-0.5 rounded-xl overflow-hidden z-20">
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent z-10"></div>
              <Image
                src="/possum-control-process.jpg"
                alt="Humane Possum Management Process"
                fill
                className="object-cover transform group-hover:scale-105 transition-transform duration-700"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>

            <div className="absolute bottom-4 left-4 z-30 bg-purple-600/90 text-white px-4 py-2 rounded-lg text-sm font-medium shadow-lg transform group-hover:translate-y-[-4px] transition-transform duration-300">
              Wildlife-Friendly Approach
            </div>

            <div className="absolute top-2 left-2 w-8 h-8 border-t-2 border-l-2 border-purple-400 rounded-tl-lg z-30"></div>
            <div className="absolute top-2 right-2 w-8 h-8 border-t-2 border-r-2 border-purple-400 rounded-tr-lg z-30"></div>
            <div className="absolute bottom-2 left-2 w-8 h-8 border-b-2 border-l-2 border-purple-400 rounded-bl-lg z-30"></div>
            <div className="absolute bottom-2 right-2 w-8 h-8 border-b-2 border-r-2 border-purple-400 rounded-br-lg z-30"></div>
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
          <div className="bg-purple-600 text-white p-6 rounded-xl shadow-lg max-w-2xl mx-auto transform hover:scale-[1.02] transition-transform duration-300 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-40 h-40 bg-white/10 rounded-full blur-2xl -mr-20 -mt-20"></div>
            <div className="absolute bottom-0 left-0 w-40 h-40 bg-white/5 rounded-full blur-2xl -ml-20 -mb-20"></div>

            <div className="relative z-10">
              <h3 className="text-xl font-semibold mb-3">Need help with a possum problem?</h3>
              <p className="text-white/80 mb-4">Our wildlife specialists are ready to provide humane, effective solutions that protect your property while respecting these important native animals.</p>
              <a href="/contact" className="inline-block bg-white text-purple-600 hover:text-purple-700 font-bold py-3 px-8 rounded-full transition-all duration-300 border-2 border-white hover:border-opacity-80 hover:shadow-lg">
                Schedule Your Inspection
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

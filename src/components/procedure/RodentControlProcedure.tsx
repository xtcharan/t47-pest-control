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

export default function RodentControlProcedure() {
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
      description: "Our rodent control process begins with a thorough inspection of your property. Our technicians identify rodent species (rats or mice), locate entry points, nesting areas, and travel routes by examining droppings, gnaw marks, grease marks, and other evidence. We assess the extent of the infestation and identify contributing factors such as food sources, water access, and harborage areas. This detailed assessment allows us to develop a customized treatment plan targeting the specific rodent species and addressing the unique characteristics of your property."
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
        </svg>
      ),
      title: "Exclusion & Sealing",
      description: "A critical component of effective rodent control is preventing their entry into your home. We identify and seal all potential entry points, including gaps around pipes, vents, utility lines, foundation cracks, and roof junctions. For rats, we seal openings larger than ½ inch, while for mice, we address even smaller gaps (¼ inch or larger). We use durable materials such as steel wool, metal flashing, hardware cloth, concrete, and specialized sealants that rodents cannot gnaw through. This exclusion process not only prevents new rodents from entering but also contains existing rodents for more effective elimination."
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
        </svg>
      ),
      title: "Strategic Trapping & Baiting",
      description: "Based on our inspection findings, we implement a customized trapping and/or baiting program. For trapping, we strategically place appropriate traps (snap traps, live traps, or multiple-catch traps) along identified rodent runways and near entry points. For baiting, we use tamper-resistant bait stations placed in secure locations inaccessible to children and pets. Our bait selection is tailored to the specific rodent species—rats prefer protein-based baits while mice prefer seeds and grains. We carefully monitor and adjust trap and bait station placement throughout the treatment process to maximize effectiveness while ensuring safety."
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
        </svg>
      ),
      title: "Sanitation & Habitat Modification",
      description: "Eliminating factors that attract rodents is essential for long-term control. We clean and sanitize areas contaminated by rodent droppings, urine, and nesting materials using specialized equipment and EPA-approved disinfectants. We provide recommendations for reducing food sources by improving storage practices, managing garbage properly, and addressing outdoor attractants like fallen fruits or bird feeders. We also suggest habitat modifications such as trimming vegetation away from buildings, removing debris piles, and managing compost properly. These environmental modifications make your property significantly less attractive to rodents and help prevent future infestations."
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
      title: "Monitoring & Prevention",
      description: "Our rodent control doesn't end with initial treatment. We implement a monitoring system using non-toxic monitoring blocks or stations to detect any new rodent activity. We schedule follow-up inspections to ensure complete elimination and to address any remaining issues. For ongoing protection, we offer maintenance programs with regular inspections and preventative treatments. We also provide education on rodent behavior and prevention strategies, empowering you to maintain a rodent-free environment. This comprehensive approach ensures long-term protection against both rats and mice, giving you peace of mind and a healthier living environment."
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
            COMPREHENSIVE APPROACH
          </span>
          <h2 className="text-4xl font-bold mb-4 text-gray-900">
            Our Rodent <span className="text-green-600">Control</span> Process
          </h2>
          <div className="w-24 h-1 bg-green-600 mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Our integrated rodent management approach combines inspection, exclusion, elimination, and prevention strategies to provide complete protection against both rats and mice.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="relative rounded-xl overflow-hidden shadow-xl h-[400px] md:h-[500px] group">
            <div className="absolute inset-0 p-0.5 rounded-xl bg-green-500 z-10 opacity-70 group-hover:opacity-100 transition-opacity duration-300"></div>

            <div className="absolute inset-0.5 rounded-xl overflow-hidden z-20">
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent z-10"></div>
              <Image
                src="/rodent-control-process.jpg"
                alt="Professional Rodent Control Process"
                fill
                className="object-cover transform group-hover:scale-105 transition-transform duration-700"
                sizes="(max-width: 768px) 100vw, 50vw"
                priority
              />
            </div>

            <div className="absolute bottom-4 left-4 z-30 bg-green-600/90 text-white px-4 py-2 rounded-lg text-sm font-medium shadow-lg transform group-hover:translate-y-[-4px] transition-transform duration-300">
              Comprehensive Rodent Management
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
              <h3 className="text-xl font-semibold mb-3">Ready to eliminate your rodent problem?</h3>
              <p className="text-white/80 mb-4">Our rodent control specialists are ready to protect your home from mice, rats, and the damage they cause.</p>
              <a href="/contact" className="inline-block bg-white text-green-600 hover:text-green-700 font-bold py-3 px-8 rounded-full transition-all duration-300 border-2 border-white hover:border-opacity-80 hover:shadow-lg">
                Schedule Your Inspection
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

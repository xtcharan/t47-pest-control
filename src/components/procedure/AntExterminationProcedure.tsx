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
        className={`flex items-center justify-between p-4 cursor-pointer transition-all duration-300 ${isOpen ? 'bg-blue-50/50' : 'bg-white'}`}
        onClick={toggleStep}
      >
        <div className="flex items-center gap-3 flex-1">
          <div className={`w-10 h-10 rounded-full flex items-center justify-center transition-colors duration-300 ${isOpen ? 'bg-blue-600 text-white' : 'bg-blue-100 text-blue-600'}`}>
            {icon}
          </div>
          <h3 className={`font-semibold text-lg transition-colors duration-300 ${isOpen ? 'text-blue-700' : 'text-gray-800'} flex-1`}>
            {title}
          </h3>
        </div>
        <div className={`w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ${isOpen ? 'bg-blue-100 rotate-180' : 'bg-gray-100'}`}>
          <svg xmlns="http://www.w3.org/2000/svg" className={`h-5 w-5 transition-colors duration-300 ${isOpen ? 'text-blue-600' : 'text-gray-500'}`} viewBox="0 0 20 20" fill="currentColor">
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

export default function AntExterminationProcedure() {
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
      title: "Ant Treatment Inspection",
      description: "Our professional ant exterminators begin by inspecting the infested property. We identify the ant species, entry points, nest locations, colony lifespan, and preventative traits. This comprehensive assessment ensures we can fully eradicate ants from your premises."
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
        </svg>
      ),
      title: "Treatment Plan",
      description: "Based on our inspection findings, we develop a customized treatment plan targeting the specific ant species and infestation severity. Our plans include appropriate treatment methods, targeted application areas, and timeline for complete elimination."
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
        </svg>
      ),
      title: "The Extermination",
      description: "We implement our treatment plan using professional-grade products and techniques. Our approach targets not just visible ants but the entire colony including the queen. We use a combination of baits, sprays, dusts, and other methods to ensure complete elimination."
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
        </svg>
      ),
      title: "Ongoing Prevention",
      description: "After successful elimination, we implement preventative measures to ensure ants don't return. This includes sealing entry points, recommending sanitation practices, and offering ongoing maintenance plans to keep your property ant-free."
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-b from-white to-blue-50/30 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute -top-20 -left-20 w-64 h-64 bg-blue-100/30 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 right-0 w-72 h-72 bg-blue-100/20 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-20 left-1/4 w-60 h-60 bg-blue-100/20 rounded-full blur-3xl"></div>

        {/* Small decorative elements */}
        <div className="absolute top-40 right-40 w-8 h-8 bg-blue-400/40 rounded-full animate-float"></div>
        <div className="absolute bottom-60 left-60 w-6 h-6 bg-blue-400/40 rounded-full animate-bounce-gentle"></div>

        {/* Ant silhouette */}
        <div className="absolute top-20 right-[20%] opacity-5">
          <svg xmlns="http://www.w3.org/2000/svg" width="120" height="120" viewBox="0 0 24 24" fill="currentColor" className="text-blue-900">
            <path d="M16 6c0-1.1.9-2 2-2s2 .9 2 2-.9 2-2 2-2-.9-2-2zm-4.7 3.7c.4-.4 1-.4 1.4 0 .4.4.4 1 0 1.4-.4.4-1 .4-1.4 0-.4-.4-.4-1 0-1.4zm-7.3-1.7c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2zm4.7 4.7c.4-.4 1-.4 1.4 0 .4.4.4 1 0 1.4-.4.4-1 .4-1.4 0-.4-.4-.4-1 0-1.4zm9.3-9.3c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm-4.7 4.7c-.4-.4-.4-1 0-1.4.4-.4 1-.4 1.4 0 .4.4.4 1 0 1.4-.4.4-1 .4-1.4 0zm-9.3-4.7c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm4.7 4.7c-.4-.4-.4-1 0-1.4.4-.4 1-.4 1.4 0 .4.4.4 1 0 1.4-.4.4-1 .4-1.4 0z" />
          </svg>
        </div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <span className="inline-block px-3 py-1 bg-blue-100 text-blue-700 text-sm font-semibold rounded-full mb-3">
            PROFESSIONAL APPROACH
          </span>
          <h2 className="text-4xl font-bold mb-4 text-gray-900">
            Our Ant <span className="text-blue-600">Extermination</span> Procedure
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Because ants are social insects that live in colonies, it's important to target
            the areas of their underground nesting. We have a four-pronged approach to ant management that ensures
            that the root cause is treated, and the entire colony is wiped out, not just the ants that have made their way
            into your kitchen or dining room.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Image side */}
          <div className="relative rounded-xl overflow-hidden shadow-xl h-[400px] md:h-[500px] group">
            {/* Decorative border */}
            <div className="absolute inset-0 p-0.5 rounded-xl bg-blue-500 z-10 opacity-70 group-hover:opacity-100 transition-opacity duration-300"></div>

            <div className="absolute inset-0.5 rounded-xl overflow-hidden z-20">
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent z-10"></div>
              <Image
                src="/ant-extermination.jpg"
                alt="Ant Extermination Procedure"
                fill
                className="object-cover transform group-hover:scale-105 transition-transform duration-700"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>

            <div className="absolute bottom-4 left-4 z-30 bg-blue-600/90 text-white px-4 py-2 rounded-lg text-sm font-medium shadow-lg transform group-hover:translate-y-[-4px] transition-transform duration-300">
              Professional Ant Control
            </div>

            {/* Corner accents */}
            <div className="absolute top-2 left-2 w-8 h-8 border-t-2 border-l-2 border-blue-400 rounded-tl-lg z-30"></div>
            <div className="absolute top-2 right-2 w-8 h-8 border-t-2 border-r-2 border-blue-400 rounded-tr-lg z-30"></div>
            <div className="absolute bottom-2 left-2 w-8 h-8 border-b-2 border-l-2 border-blue-400 rounded-bl-lg z-30"></div>
            <div className="absolute bottom-2 right-2 w-8 h-8 border-b-2 border-r-2 border-blue-400 rounded-br-lg z-30"></div>
          </div>

          {/* Procedure steps side */}
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

        {/* Call to action */}
        <div className="mt-12 text-center">
          <div className="bg-blue-600 text-white p-6 rounded-xl shadow-lg max-w-2xl mx-auto transform hover:scale-[1.02] transition-transform duration-300 relative overflow-hidden">
            {/* Decorative elements */}
            <div className="absolute top-0 right-0 w-40 h-40 bg-white/10 rounded-full blur-2xl -mr-20 -mt-20"></div>
            <div className="absolute bottom-0 left-0 w-40 h-40 bg-white/5 rounded-full blur-2xl -ml-20 -mb-20"></div>

            <div className="relative z-10">
              <h3 className="text-xl font-semibold mb-3">Ready to eliminate your ant problem?</h3>
              <p className="text-white/80 mb-4">Our professional ant control team is ready to help you get rid of ants for good.</p>
              <a href="/contact" className="inline-block bg-white text-blue-600 hover:text-blue-700 font-bold py-3 px-8 rounded-full transition-all duration-300 border-2 border-white hover:border-opacity-80 hover:shadow-lg">
                Schedule Your Treatment
              </a>
            </div>

            {/* Animated ant silhouettes */}
            <div className="absolute bottom-2 right-6 opacity-20 animate-float">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                <path d="M16 6c0-1.1.9-2 2-2s2 .9 2 2-.9 2-2 2-2-.9-2-2zm-4.7 3.7c.4-.4 1-.4 1.4 0 .4.4.4 1 0 1.4-.4.4-1 .4-1.4 0-.4-.4-.4-1 0-1.4zm-7.3-1.7c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2z" />
              </svg>
            </div>
            <div className="absolute top-4 left-8 opacity-20 animate-bounce-gentle">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M16 6c0-1.1.9-2 2-2s2 .9 2 2-.9 2-2 2-2-.9-2-2z" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

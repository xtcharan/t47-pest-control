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
        className={`flex items-center justify-between p-4 cursor-pointer transition-all duration-300 ${isOpen ? 'bg-yellow-50/50' : 'bg-white'}`}
        onClick={toggleStep}
      >
        <div className="flex items-center gap-3 flex-1">
          <div className={`w-10 h-10 rounded-full flex items-center justify-center transition-colors duration-300 ${isOpen ? 'bg-yellow-600 text-white' : 'bg-yellow-100 text-yellow-600'}`}>
            {icon}
          </div>
          <h3 className={`font-semibold text-lg transition-colors duration-300 ${isOpen ? 'text-yellow-700' : 'text-gray-800'} flex-1`}>
            {title}
          </h3>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-sm font-medium text-gray-500 w-16 text-right inline-block">Step {stepNumber}</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className={`h-5 w-5 text-gray-400 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </div>
      <div
        className={`overflow-hidden transition-all duration-500 ease-in-out ${
          isOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="p-4 bg-yellow-50/30">
          <p className="text-gray-700 leading-relaxed text-justify">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default function ConstructionSitePestControlProcedure() {
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
      title: "Construction-Specific Assessment",
      description: "Our construction site pest control process begins with a comprehensive assessment tailored specifically for building projects. We inspect the site, surrounding areas, material storage zones, and worker facilities to identify current and potential pest issues. We evaluate the construction phase, site conditions, and project timeline to develop a customized pest management approach that addresses the unique challenges of your specific construction project."
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
        </svg>
      ),
      title: "Pre-Construction Termite Treatment",
      description: "For new construction projects, we implement comprehensive pre-construction termite treatments that create a protective barrier in the soil and around foundation elements. This includes treating the soil before concrete slabs are poured, applying termiticides to critical areas, and establishing a continuous chemical barrier that prevents termite entry. We coordinate closely with your construction team to ensure treatments are applied at the optimal time in the building process, providing long-term protection against termite damage."
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
        </svg>
      ),
      title: "Material Protection Protocol",
      description: "We develop and implement specialized protocols to protect construction materials from pest damage. This includes treatments for lumber and other vulnerable materials, recommendations for proper storage practices, and regular inspections of material staging areas. We pay particular attention to wood products, insulation materials, and other components that are attractive to pests. Our approach helps prevent pest infestations in materials before they're incorporated into the structure, reducing the risk of introducing pests into the building."
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
        </svg>
      ),
      title: "Worker Safety Measures",
      description: "We implement targeted treatments to address pests that pose health and safety risks to construction workers. This includes controlling venomous spiders, stinging insects, and disease-carrying rodents that commonly inhabit construction sites. We use application methods and timing that minimize worker exposure to treatments while maximizing effectiveness against target pests. We also provide educational materials and recommendations for site management practices that reduce pest-related safety hazards."
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: "Phase-Specific Monitoring",
      description: "We establish a comprehensive monitoring system that evolves with your construction project. As the building progresses through different phases, we adjust our monitoring approach to address changing pest pressures and vulnerabilities. This includes regular site inspections, installation of monitoring devices in strategic locations, and ongoing assessment of pest activity. Our phase-specific monitoring ensures continuous protection throughout the construction process, from groundbreaking to project completion."
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      title: "Rapid Response Protocol",
      description: "We establish clear protocols for addressing pest issues that arise during construction. This includes dedicated response teams that can quickly address emerging pest problems before they impact worker safety or project timelines. We coordinate closely with site management to ensure minimal disruption to construction activities while effectively resolving pest issues. Our rapid response capability helps prevent minor pest problems from developing into major disruptions that could delay your project or compromise structural integrity."
    }
  ];

  return (
    <section className="py-16 bg-gray-50 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-yellow-50 rounded-bl-[100px] z-0"></div>
      <div className="absolute bottom-0 left-0 w-1/4 h-1/4 bg-yellow-50 rounded-tr-[100px] z-0"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <span className="inline-block px-3 py-1 bg-yellow-100 text-yellow-700 text-sm font-semibold rounded-full mb-3">
            CONSTRUCTION-GRADE PROCESS
          </span>
          <h2 className="text-4xl font-bold mb-4 text-gray-900">
            Our Construction Site <span className="text-yellow-600">Pest Control</span> Process
          </h2>
          <div className="w-24 h-1 bg-yellow-600 mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Our six-step approach to construction site pest management ensures comprehensive protection while safeguarding worker safety and project timelines.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="relative rounded-xl overflow-hidden shadow-xl h-[400px] md:h-[500px] group">
            <div className="absolute inset-0 p-0.5 rounded-xl bg-yellow-500 z-10 opacity-70 group-hover:opacity-100 transition-opacity duration-300"></div>

            <div className="absolute inset-0.5 rounded-xl overflow-hidden z-20">
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent z-10"></div>
              <Image
                src="/construction-site-pest-control.jpg"
                alt="Construction Site Pest Control Process"
                fill
                className="object-cover transform group-hover:scale-105 transition-transform duration-700"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>

            <div className="absolute bottom-0 left-0 p-6 z-30">
              <h3 className="text-white font-bold text-xl mb-2">Construction-Grade Pest Management</h3>
              <p className="text-white/80 max-w-xs">Our construction site pest control services protect worker safety and project timelines while effectively managing pest issues in building environments.</p>
            </div>
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
          <div className="bg-yellow-600 text-white p-6 rounded-xl shadow-lg max-w-2xl mx-auto transform hover:scale-[1.02] transition-transform duration-300 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-40 h-40 bg-white/10 rounded-full blur-2xl -mr-20 -mt-20"></div>
            <div className="absolute bottom-0 left-0 w-40 h-40 bg-white/5 rounded-full blur-2xl -ml-20 -mb-20"></div>

            <div className="relative z-10">
              <h3 className="text-xl font-semibold mb-3">Protect your construction project with professional pest control</h3>
              <p className="text-white/80 mb-4">Maintain worker safety and project timelines with our specialized construction site pest management services.</p>
              <a href="/contact" className="inline-block bg-white text-yellow-600 hover:text-yellow-700 font-bold py-3 px-8 rounded-full transition-all duration-300 border-2 border-white hover:border-opacity-80 hover:shadow-lg">
                Schedule Your Consultation
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

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
        <div className="flex items-center gap-3">
          <div className={`w-10 h-10 rounded-full flex items-center justify-center transition-colors duration-300 ${isOpen ? 'bg-green-600 text-white' : 'bg-green-100 text-green-600'}`}>
            {icon}
          </div>
          <h3 className={`font-semibold text-lg transition-colors duration-300 ${isOpen ? 'text-green-700' : 'text-gray-800'}`}>
            {title}
          </h3>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-sm font-medium text-gray-500">Step {stepNumber}</span>
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
        <div className="p-4 bg-green-50/30">
          <p className="text-gray-700 leading-relaxed">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default function FoodProcessingPestControlProcedure() {
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
      title: "Comprehensive Facility Assessment",
      description: "Our food processing pest control process begins with a thorough assessment of your entire facility. We inspect production areas, storage spaces, loading docks, waste management zones, and employee areas to identify current and potential pest issues. We evaluate your facility against HACCP requirements and food safety standards, identifying critical control points and developing a customized pest management strategy based on your specific operation."
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
        </svg>
      ),
      title: "Food-Safe Treatment Protocol",
      description: "Based on our assessment findings, we develop a tailored pest management protocol that meets the stringent requirements of food processing environments. This includes selecting food-grade, low-toxicity products approved for use in food facilities, determining appropriate application methods for different zones (production vs. non-production areas), and creating a treatment schedule that minimizes disruption to your operations while ensuring maximum effectiveness."
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
        </svg>
      ),
      title: "Strategic Implementation",
      description: "We implement our treatment protocol with minimal disruption to your production schedule. Our technicians work during planned downtime or in coordination with your production team to ensure food safety is never compromised. We use precise application methods that target pests while minimizing product exposure, and all treatments are documented for audit purposes. Our approach includes establishing multiple zones with different treatment protocols based on proximity to food products."
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
        </svg>
      ),
      title: "Comprehensive Exclusion Program",
      description: "We implement robust preventative measures to keep pests out of your food processing facility. This includes sealing entry points, installing door sweeps and air curtains, recommending proper waste management practices, and implementing structural modifications if necessary. We pay special attention to areas where utilities enter the building, loading dock doors, and other potential pest entry points, creating multiple barriers to prevent pest intrusion."
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: "Advanced Monitoring System",
      description: "We establish a comprehensive monitoring system throughout your facility to detect pest activity early. This includes installing and regularly checking monitoring devices, conducting scheduled inspections, and maintaining detailed records of findings. We use digital monitoring technology where appropriate to provide real-time alerts and data collection. Our monitoring program is designed to identify trends and potential issues before they become problems that could affect product safety or trigger audit findings."
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      ),
      title: "Audit-Ready Documentation",
      description: "We provide comprehensive documentation of all pest control services performed at your food processing facility, including detailed treatment records, monitoring reports, pest activity logs, trend analyses, and material safety data sheets. This documentation is organized in audit-ready binders or digital formats that meet the requirements of third-party auditors and regulatory inspectors. We also offer pre-audit preparation services and can provide on-site support during audits to help you demonstrate your robust pest management program."
    }
  ];

  return (
    <section className="py-16 bg-gray-50 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-green-50 rounded-bl-[100px] z-0"></div>
      <div className="absolute bottom-0 left-0 w-1/4 h-1/4 bg-green-50 rounded-tr-[100px] z-0"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <span className="inline-block px-3 py-1 bg-green-100 text-green-700 text-sm font-semibold rounded-full mb-3">
            FOOD-GRADE PROCESS
          </span>
          <h2 className="text-4xl font-bold mb-4 text-gray-900">
            Our Food Processing <span className="text-green-600">Pest Control</span> Process
          </h2>
          <div className="w-24 h-1 bg-green-600 mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Our six-step approach to food processing pest management ensures comprehensive protection while maintaining food safety standards and regulatory compliance.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="relative rounded-xl overflow-hidden shadow-xl h-[400px] md:h-[500px] group">
            <div className="absolute inset-0 p-0.5 rounded-xl bg-green-500 z-10 opacity-70 group-hover:opacity-100 transition-opacity duration-300"></div>

            <div className="absolute inset-0.5 rounded-xl overflow-hidden z-20">
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent z-10"></div>
              <Image
                src="/food-processing-pest-control.jpg"
                alt="Food Processing Pest Control Process"
                fill
                className="object-cover transform group-hover:scale-105 transition-transform duration-700"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>

            <div className="absolute bottom-0 left-0 p-6 z-30">
              <h3 className="text-white font-bold text-xl mb-2">Food-Grade Pest Management</h3>
              <p className="text-white/80 max-w-xs">Our food processing pest control services maintain the highest standards of safety and efficacy for food manufacturing environments.</p>
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
          <div className="bg-green-600 text-white p-6 rounded-xl shadow-lg max-w-2xl mx-auto transform hover:scale-[1.02] transition-transform duration-300 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-40 h-40 bg-white/10 rounded-full blur-2xl -mr-20 -mt-20"></div>
            <div className="absolute bottom-0 left-0 w-40 h-40 bg-white/5 rounded-full blur-2xl -ml-20 -mb-20"></div>

            <div className="relative z-10">
              <h3 className="text-xl font-semibold mb-3">Protect your food processing facility with professional pest control</h3>
              <p className="text-white/80 mb-4">Maintain regulatory compliance and ensure product safety with our specialized food processing pest management services.</p>
              <a href="/contact" className="inline-block bg-white text-green-600 hover:text-green-700 font-bold py-3 px-8 rounded-full transition-all duration-300 border-2 border-white hover:border-opacity-80 hover:shadow-lg">
                Schedule Your Consultation
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

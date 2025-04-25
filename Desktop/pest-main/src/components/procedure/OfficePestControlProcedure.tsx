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
        className={`flex items-center justify-between p-4 cursor-pointer transition-all duration-300 ${isOpen ? 'bg-indigo-50/50' : 'bg-white'}`}
        onClick={toggleStep}
      >
        <div className="flex items-center gap-3">
          <div className={`w-10 h-10 rounded-full flex items-center justify-center transition-colors duration-300 ${isOpen ? 'bg-indigo-600 text-white' : 'bg-indigo-100 text-indigo-600'}`}>
            {icon}
          </div>
          <h3 className={`font-semibold text-lg transition-colors duration-300 ${isOpen ? 'text-indigo-700' : 'text-gray-800'}`}>
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
        <div className="p-4 bg-indigo-50/30">
          <p className="text-gray-700 leading-relaxed">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default function OfficePestControlProcedure() {
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
      title: "Workplace-Specific Assessment",
      description: "Our office pest control process begins with a comprehensive assessment tailored specifically for workplace environments. We inspect workstations, break rooms, kitchenettes, storage areas, server rooms, and exterior perimeters to identify current and potential pest issues. We pay special attention to high-risk areas like food preparation zones, waste management areas, and entry points, evaluating risk factors unique to your specific office layout and operations."
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
        </svg>
      ),
      title: "Customized Treatment Plan",
      description: "Based on our assessment findings, we develop a tailored pest management plan that addresses your specific office needs. This includes selecting low-impact, low-odor products appropriate for workplace environments, determining discreet application methods for different areas of your office, and creating a treatment schedule that works around your business hours to ensure zero disruption to your operations. We develop different protocols for workspaces, common areas, and exterior zones."
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
        </svg>
      ),
      title: "After-Hours Implementation",
      description: "We implement our treatment plan with minimal visibility to your employees and clients. Our technicians work during evenings, weekends, or other off-hours to ensure treatments are performed when the office is unoccupied. We use unmarked vehicles when requested and our technicians dress in plain clothes or maintenance uniforms if preferred. All equipment and products are kept out of sight, and treatments are applied using methods that leave no visible residues or odors that could impact the workplace environment."
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
        </svg>
      ),
      title: "Strategic Exclusion",
      description: "We implement comprehensive preventative measures to keep pests out of your office building. This includes sealing entry points, installing door sweeps and air curtains, recommending proper waste management practices, and implementing structural modifications if necessary. We pay special attention to areas where utilities enter the building, creating protocols for maintenance of these potential pest entry points. Our exclusion strategies are designed to create multiple barriers that prevent pests from accessing your workplace."
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: "Ongoing Monitoring & Maintenance",
      description: "Our office pest control service includes regular monitoring visits to ensure continued protection. We install and maintain discreet monitoring devices throughout your workplace, conduct follow-up inspections during off-hours, and make treatment adjustments as needed. This proactive approach helps identify and address potential pest issues before they impact your employees or disrupt your business operations. We provide detailed reporting on all monitoring activities and findings to help you track program effectiveness."
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      ),
      title: "Staff Education & Communication",
      description: "We provide educational resources for your office staff on pest prevention practices. This includes guidance on proper food storage in break rooms, waste management, and early pest detection. We establish clear communication protocols for reporting pest sightings and maintain detailed documentation of all pest control activities. Our goal is to create a collaborative approach to pest management that involves your entire team in maintaining a pest-free workplace environment."
    }
  ];

  return (
    <section className="py-16 bg-gray-50 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-indigo-50 rounded-bl-[100px] z-0"></div>
      <div className="absolute bottom-0 left-0 w-1/4 h-1/4 bg-indigo-50 rounded-tr-[100px] z-0"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <span className="inline-block px-3 py-1 bg-indigo-100 text-indigo-700 text-sm font-semibold rounded-full mb-3">
            PROFESSIONAL PROCESS
          </span>
          <h2 className="text-4xl font-bold mb-4 text-gray-900">
            Our Office <span className="text-indigo-600">Pest Control</span> Process
          </h2>
          <div className="w-24 h-1 bg-indigo-600 mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Our six-step approach to office pest management ensures comprehensive protection while maintaining workplace productivity and employee health.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="relative rounded-xl overflow-hidden shadow-xl h-[400px] md:h-[500px] group">
            <div className="absolute inset-0 p-0.5 rounded-xl bg-indigo-500 z-10 opacity-70 group-hover:opacity-100 transition-opacity duration-300"></div>

            <div className="absolute inset-0.5 rounded-xl overflow-hidden z-20">
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent z-10"></div>
              <Image
                src="/office-pest-control.jpg"
                alt="Office Pest Control Process"
                fill
                className="object-cover transform group-hover:scale-105 transition-transform duration-700"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>

            <div className="absolute bottom-0 left-0 p-6 z-30">
              <h3 className="text-white font-bold text-xl mb-2">Professional Office Pest Management</h3>
              <p className="text-white/80 max-w-xs">Our office pest control services protect workplace productivity while effectively managing pest issues in business environments.</p>
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
          <div className="bg-indigo-600 text-white p-6 rounded-xl shadow-lg max-w-2xl mx-auto transform hover:scale-[1.02] transition-transform duration-300 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-40 h-40 bg-white/10 rounded-full blur-2xl -mr-20 -mt-20"></div>
            <div className="absolute bottom-0 left-0 w-40 h-40 bg-white/5 rounded-full blur-2xl -ml-20 -mb-20"></div>

            <div className="relative z-10">
              <h3 className="text-xl font-semibold mb-3">Protect your office with professional pest control</h3>
              <p className="text-white/80 mb-4">Maintain workplace productivity and employee health with our specialized office pest management services.</p>
              <a href="/contact" className="inline-block bg-white text-indigo-600 hover:text-indigo-700 font-bold py-3 px-8 rounded-full transition-all duration-300 border-2 border-white hover:border-opacity-80 hover:shadow-lg">
                Schedule Your Consultation
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

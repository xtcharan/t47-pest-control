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
        className={`flex items-center justify-between p-4 cursor-pointer transition-all duration-300 ${isOpen ? 'bg-amber-50/50' : 'bg-white'}`}
        onClick={toggleStep}
      >
        <div className="flex items-center gap-3">
          <div className={`w-10 h-10 rounded-full flex items-center justify-center transition-colors duration-300 ${isOpen ? 'bg-amber-600 text-white' : 'bg-amber-100 text-amber-600'}`}>
            {icon}
          </div>
          <h3 className={`font-semibold text-lg transition-colors duration-300 ${isOpen ? 'text-amber-700' : 'text-gray-800'}`}>
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
        <div className="p-4 bg-amber-50/30">
          <p className="text-gray-700 leading-relaxed">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default function HotelPestControlProcedure() {
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
      title: "Hospitality-Specific Assessment",
      description: "Our hotel pest control process begins with a comprehensive assessment tailored specifically for hospitality environments. We inspect guest rooms, dining areas, kitchens, storage spaces, laundry facilities, and exterior grounds to identify current and potential pest issues. We pay special attention to high-risk areas like food service zones, waste management areas, and entry points, evaluating risk factors unique to your specific hotel operation."
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
        </svg>
      ),
      title: "Customized Treatment Protocol",
      description: "Based on our assessment findings, we develop a tailored pest management protocol that addresses your specific hotel needs. This includes selecting low-impact, low-odor products appropriate for hospitality environments, determining discreet application methods for different areas of your property, and creating a treatment schedule that works around your occupancy patterns to ensure zero disruption to your guests. We develop different protocols for guest rooms, public spaces, food service areas, and exterior zones."
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
        </svg>
      ),
      title: "Discreet Implementation",
      description: "We implement our treatment plan with minimal visibility to your guests. Our technicians can work during low-occupancy periods or in coordination with housekeeping schedules to ensure treatments are performed when guests are not present. We use unmarked vehicles when requested and our technicians dress in plain clothes or hotel uniforms if preferred. All equipment and products are kept out of sight, and treatments are applied using methods that leave no visible residues or odors that could impact the guest experience."
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
        </svg>
      ),
      title: "Specialized Bed Bug Program",
      description: "We implement a comprehensive bed bug management program specifically designed for hotels. This includes proactive monitoring with specialized detection devices in guest rooms, staff training on early identification, and rapid response protocols for potential infestations. We use multiple treatment methods including heat treatments, targeted applications, and preventative measures to eliminate existing problems and prevent future occurrences. Our bed bug program is designed to minimize room downtime while ensuring complete elimination."
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: "Ongoing Monitoring & Maintenance",
      description: "Our hotel pest control service includes regular monitoring visits to ensure continued protection. We install and maintain discreet monitoring devices throughout your property, conduct follow-up inspections during low-occupancy periods, and make treatment adjustments as needed. This proactive approach helps identify and address potential pest issues before they impact guests or disrupt your operations. We provide detailed reporting on all monitoring activities and findings to help you track program effectiveness."
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      ),
      title: "Staff Training & Emergency Response",
      description: "We provide comprehensive training for your hotel staff on pest identification and prevention practices. This includes guidance for housekeeping on early detection, proper reporting procedures, and preventative measures. We establish clear communication protocols and provide 24/7 emergency response services to address any urgent pest issues that could impact guest experience. Our rapid response team can be on-site quickly to resolve problems before they affect your reputation or operations."
    }
  ];

  return (
    <section className="py-16 bg-gray-50 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-amber-50 rounded-bl-[100px] z-0"></div>
      <div className="absolute bottom-0 left-0 w-1/4 h-1/4 bg-amber-50 rounded-tr-[100px] z-0"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <span className="inline-block px-3 py-1 bg-amber-100 text-amber-700 text-sm font-semibold rounded-full mb-3">
            HOSPITALITY-GRADE PROCESS
          </span>
          <h2 className="text-4xl font-bold mb-4 text-gray-900">
            Our Hotel <span className="text-amber-600">Pest Control</span> Process
          </h2>
          <div className="w-24 h-1 bg-amber-600 mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Our six-step approach to hotel pest management ensures comprehensive protection while maintaining guest experience and your reputation.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="relative rounded-xl overflow-hidden shadow-xl h-[400px] md:h-[500px] group">
            <div className="absolute inset-0 p-0.5 rounded-xl bg-amber-500 z-10 opacity-70 group-hover:opacity-100 transition-opacity duration-300"></div>

            <div className="absolute inset-0.5 rounded-xl overflow-hidden z-20">
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent z-10"></div>
              <Image
                src="/hotel-pest-control.jpg"
                alt="Hotel Pest Control Process"
                fill
                className="object-cover transform group-hover:scale-105 transition-transform duration-700"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>

            <div className="absolute bottom-0 left-0 p-6 z-30">
              <h3 className="text-white font-bold text-xl mb-2">Hospitality-Grade Pest Management</h3>
              <p className="text-white/80 max-w-xs">Our hotel pest control services protect your reputation while effectively managing pest issues in hospitality environments.</p>
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
          <div className="bg-amber-600 text-white p-6 rounded-xl shadow-lg max-w-2xl mx-auto transform hover:scale-[1.02] transition-transform duration-300 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-40 h-40 bg-white/10 rounded-full blur-2xl -mr-20 -mt-20"></div>
            <div className="absolute bottom-0 left-0 w-40 h-40 bg-white/5 rounded-full blur-2xl -ml-20 -mb-20"></div>

            <div className="relative z-10">
              <h3 className="text-xl font-semibold mb-3">Protect your hotel with professional pest control</h3>
              <p className="text-white/80 mb-4">Maintain your reputation and enhance guest experience with our specialized hotel pest management services.</p>
              <a href="/contact" className="inline-block bg-white text-amber-600 hover:text-amber-700 font-bold py-3 px-8 rounded-full transition-all duration-300 border-2 border-white hover:border-opacity-80 hover:shadow-lg">
                Schedule Your Consultation
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

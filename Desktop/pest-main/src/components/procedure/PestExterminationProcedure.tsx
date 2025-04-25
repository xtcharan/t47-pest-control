"use client";

import { useEffect, useState } from 'react';

interface ProcedureStep {
  title: string;
  description: string;
  icon: React.ReactNode;
}

interface PestExterminationProcedureProps {
  pestType: string;
  steps: ProcedureStep[];
}

export default function PestExterminationProcedure({ pestType, steps }: PestExterminationProcedureProps) {
  const [activeStep, setActiveStep] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById('procedure-section');
    if (element) observer.observe(element);

    return () => {
      if (element) observer.unobserve(element);
    };
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    const interval = setInterval(() => {
      setActiveStep((prev) => (prev === steps.length - 1 ? 0 : prev + 1));
    }, 5000);

    return () => clearInterval(interval);
  }, [isVisible, steps.length]);

  return (
    <section id="procedure-section" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <span className="inline-block px-3 py-1 bg-green-light/10 text-green-dark text-sm font-semibold rounded-full mb-3">
            OUR PROCESS
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
            {pestType} Extermination <span className="text-green-dark">Procedure</span>
          </h2>
          <div className="w-24 h-1 bg-green-light mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Our professional {pestType.toLowerCase()} control process follows a systematic approach to ensure complete elimination and long-term protection.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div
              key={index}
              className={`bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 transform ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              } ${activeStep === index ? 'ring-2 ring-green-light scale-105' : ''}`}
              style={{ transitionDelay: `${index * 150}ms` }}
              onClick={() => setActiveStep(index)}
            >
              <div className="flex items-start mb-4">
                <div className="bg-green-light/20 p-3 rounded-full mr-4 text-green-dark">
                  {step.icon}
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    <span className="text-green-dark mr-2">{index + 1}.</span>
                    {step.title}
                  </h3>
                  <p className="text-gray-600">{step.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

"use client";

import Image from 'next/image';

export default function MosquitoExterminationProcedure() {
  const procedureSteps = [
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
      ),
      title: "Mosquito Site Inspection",
      description: "Our professional mosquito control technicians begin by thoroughly inspecting your property. We identify mosquito species, breeding sites, harborage areas, and environmental factors that contribute to mosquito activity. This comprehensive assessment ensures we can fully address your mosquito problem."
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
        </svg>
      ),
      title: "Treatment Plan",
      description: "Based on our inspection findings, we develop a customized treatment plan targeting the specific mosquito species and infestation severity. Our plans include appropriate treatment methods, breeding site elimination strategies, and a timeline for complete mosquito control."
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
        </svg>
      ),
      title: "The Extermination",
      description: "We implement our treatment plan using professional-grade products and techniques. Our approach targets both adult mosquitoes and larvae. We apply residual barrier treatments to vegetation and resting areas, and use larvicides in standing water that cannot be eliminated. This comprehensive approach ensures effective mosquito control."
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
        </svg>
      ),
      title: "Ongoing Prevention",
      description: "After successful elimination, we implement preventative measures to ensure mosquitoes don't return. This includes eliminating or treating breeding sites, recommending habitat modifications, and offering ongoing maintenance plans to keep your property mosquito-free throughout the season."
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-b from-white to-blue-50/30 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute -top-20 -left-20 w-64 h-64 bg-red-100/30 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 right-0 w-72 h-72 bg-red-100/20 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-20 left-1/4 w-60 h-60 bg-red-100/20 rounded-full blur-3xl"></div>

        {/* Small decorative elements */}
        <div className="absolute top-40 right-40 w-8 h-8 bg-red-400/40 rounded-full animate-float"></div>
        <div className="absolute bottom-60 left-60 w-6 h-6 bg-red-400/40 rounded-full animate-bounce-gentle"></div>

        {/* Mosquito silhouette */}
        <div className="absolute top-20 right-[20%] opacity-5">
          <svg xmlns="http://www.w3.org/2000/svg" width="120" height="120" viewBox="0 0 24 24" fill="currentColor" className="text-red-900">
            <path d="M5.5 9.511c0 .828-.56 1.5-1.25 1.5s-1.25-.672-1.25-1.5S3.56 8 4.25 8s1.25.672 1.25 1.511zM21 10.5c0 .829-.56 1.5-1.25 1.5s-1.25-.671-1.25-1.5.56-1.5 1.25-1.5 1.25.671 1.25 1.5zM16 6c0 1.105-.895 2-2 2s-2-.895-2-2 .895-2 2-2 2 .895 2 2zM8 6c0 1.105-.895 2-2 2s-2-.895-2-2 .895-2 2-2 2 .895 2 2z" />
          </svg>
        </div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <span className="inline-block px-3 py-1 bg-red-100 text-red-700 text-sm font-semibold rounded-full mb-3">
            PROFESSIONAL APPROACH
          </span>
          <h2 className="text-4xl font-bold mb-4 text-gray-900">
            Our Mosquito <span className="text-red-600">Extermination</span> Procedure
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-red-500 to-red-600 mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Mosquitoes are more than just a nuisance—they can transmit serious diseases. Our comprehensive
            mosquito control approach targets both adult mosquitoes and their breeding sites to ensure
            effective, long-lasting protection for your family and property.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Left side - Steps */}
          <div className="space-y-6">
            {procedureSteps.map((step, index) => (
              <div key={index} className="flex bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-all duration-300">
                <div className="mr-4 mt-1">
                  <div className="w-8 h-8 bg-gradient-to-r from-red-500 to-red-600 rounded-full flex items-center justify-center text-white">
                    {step.icon}
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Right side - Image */}
          <div className="relative rounded-xl overflow-hidden shadow-xl h-[400px] md:h-[500px] group">
            {/* Decorative border */}
            <div className="absolute inset-0 p-0.5 rounded-xl bg-red-500 z-10 opacity-70 group-hover:opacity-100 transition-opacity duration-300"></div>

            <div className="absolute inset-0.5 rounded-xl overflow-hidden z-20">
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent z-10"></div>
              <Image
                src="/mosquito-extermination.jpg"
                alt="Mosquito Extermination Procedure"
                fill
                className="object-cover transform group-hover:scale-105 transition-transform duration-700"
                sizes="(max-width: 768px) 100vw, 50vw"
              />

              <div className="absolute bottom-0 left-0 right-0 p-6 z-20">
                <div className="bg-black/70 backdrop-blur-sm p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-white mb-2">Why Professional Mosquito Control?</h3>
                  <p className="text-white/80 mb-4">
                    DIY mosquito control often provides only temporary relief. Our professional treatments target the entire mosquito lifecycle for complete elimination and long-term protection.
                  </p>
                </div>
              </div>
            </div>

            <div className="absolute bottom-4 right-4 z-30">
              <div className="bg-gradient-to-r from-red-500 to-red-600 p-4 rounded-full shadow-lg animate-pulse-slow">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Box */}
        <div className="mt-16 bg-gradient-to-r from-red-500 to-red-600 rounded-xl overflow-hidden shadow-xl">
          <div className="p-8 md:p-10 relative">
            <div className="absolute top-0 right-0 w-40 h-40 bg-white/10 rounded-full blur-2xl transform translate-x-10 -translate-y-10"></div>
            <div className="absolute bottom-0 left-0 w-40 h-40 bg-black/10 rounded-full blur-2xl transform -translate-x-10 translate-y-10"></div>

            <div className="relative z-10">
              <h3 className="text-xl font-semibold mb-3">Ready to eliminate your mosquito problem?</h3>
              <p className="text-white/80 mb-4">Our professional mosquito control team is ready to help you get rid of mosquitoes for good.</p>
              <a href="/contact" className="inline-block bg-white text-red-600 hover:text-red-700 font-bold py-3 px-8 rounded-full transition-all duration-300 border-2 border-white hover:border-opacity-80 hover:shadow-lg">
                Schedule Your Treatment
              </a>
            </div>

            {/* Animated mosquito silhouettes */}
            <div className="absolute bottom-2 right-6 opacity-20 animate-float">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                <path d="M5.5 9.511c0 .828-.56 1.5-1.25 1.5s-1.25-.672-1.25-1.5S3.56 8 4.25 8s1.25.672 1.25 1.511z" />
              </svg>
            </div>
            <div className="absolute top-4 left-8 opacity-20 animate-bounce-gentle">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M21 10.5c0 .829-.56 1.5-1.25 1.5s-1.25-.671-1.25-1.5.56-1.5 1.25-1.5 1.25.671 1.25 1.5z" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

"use client";

import Image from 'next/image';

export default function RatsMiceExterminationProcedure() {
  const procedureSteps = [
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
      ),
      title: "Comprehensive Inspection",
      description: "Our rodent control specialists begin with a thorough inspection of your property. We identify rodent species (rats, mice, or both), locate entry points, nesting areas, food and water sources, and assess the extent of the infestation. This detailed assessment allows us to develop a targeted treatment plan specific to your situation."
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
        </svg>
      ),
      title: "Customized Treatment Plan",
      description: "Based on our inspection findings, we develop a tailored treatment plan that addresses your specific rodent issues. This includes selecting appropriate trapping and baiting methods based on the rodent species, infestation severity, property characteristics, and the presence of children or pets. We discuss the plan with you to ensure it meets your needs and concerns."
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
        </svg>
      ),
      title: "Strategic Implementation",
      description: "We implement our treatment plan using a multi-faceted approach. For rats, we typically use larger snap traps or enclosed bait stations placed along travel routes. For mice, we use smaller traps and specialized bait stations placed in areas of activity. All traps and bait stations are strategically positioned to maximize effectiveness while ensuring safety for your family and pets."
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
        </svg>
      ),
      title: "Exclusion & Proofing",
      description: "A critical part of our process is sealing entry points to prevent rodents from re-entering your property. For rats, we seal openings larger than ½ inch, while for mice, we address gaps as small as ¼ inch. We use durable materials like steel wool, metal flashing, and specialized sealants to ensure long-lasting protection against future invasions."
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.121 14.121L19 19m-7-7l7-7m-7 7l-2.879 2.879M12 12L9.121 9.121m0 5.758a3 3 0 10-4.243 4.243 3 3 0 004.243-4.243zm0-5.758a3 3 0 10-4.243-4.243 3 3 0 004.243 4.243z" />
        </svg>
      ),
      title: "Sanitation & Damage Repair",
      description: "We clean and sanitize areas contaminated by rodent droppings, urine, and nesting materials using specialized products that neutralize pathogens. We also identify and repair damage caused by rodents, including gnawed wiring, damaged insulation, and compromised structural elements, to restore your property's safety and integrity."
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
      title: "Follow-up & Prevention",
      description: "We conduct follow-up visits to monitor trap and bait station activity, remove captured rodents, and adjust our approach as needed. Once the infestation is eliminated, we provide comprehensive prevention recommendations, including food storage practices, landscape modifications, and ongoing monitoring strategies to maintain a rodent-free environment."
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-b from-white to-gray-50/30 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute -top-20 -left-20 w-64 h-64 bg-red-100/30 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 right-0 w-72 h-72 bg-red-100/20 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-20 left-1/4 w-60 h-60 bg-red-100/20 rounded-full blur-3xl"></div>

        {/* Small decorative elements */}
        <div className="absolute top-40 right-40 w-8 h-8 bg-red-400/40 rounded-full animate-float"></div>
        <div className="absolute bottom-60 left-60 w-6 h-6 bg-red-400/40 rounded-full animate-bounce-gentle"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <span className="inline-block px-3 py-1 bg-red-100 text-red-700 text-sm font-semibold rounded-full mb-3">
            PROFESSIONAL APPROACH
          </span>
          <h2 className="text-4xl font-bold mb-4 text-gray-900">
            Our Rodent <span className="text-red-600">Extermination</span> Procedure
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-red-500 to-red-600 mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Our comprehensive 6-step rodent control process is designed to effectively eliminate both rats and mice
            while preventing future infestations. We tailor our approach based on the specific rodent species
            and unique characteristics of your property.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
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

          {/* Right side - Images and additional info */}
          <div className="space-y-8">
            {/* Main image */}
            <div className="relative rounded-xl overflow-hidden shadow-xl h-[400px] group">
              {/* Decorative border */}
              <div className="absolute inset-0 p-0.5 rounded-xl bg-red-500 z-10 opacity-70 group-hover:opacity-100 transition-opacity duration-300"></div>

              <div className="absolute inset-0.5 rounded-xl overflow-hidden z-20">
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent z-10"></div>
                <Image
                  src="/rodent-control-process.jpg"
                  alt="Professional Rodent Extermination Process"
                  fill
                  className="object-cover transform group-hover:scale-105 transition-transform duration-700"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  priority
                />

                <div className="absolute bottom-0 left-0 right-0 p-6 z-20">
                  <div className="bg-black/70 backdrop-blur-sm p-6 rounded-lg">
                    <h3 className="text-xl font-semibold text-white mb-2">Species-Specific Approach</h3>
                    <p className="text-white/80 mb-4">
                      Different rodent species require different control strategies. Our technicians are trained to identify whether you're dealing with rats, mice, or both, and implement the most effective methods for each species.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Comparison boxes */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-white p-5 rounded-lg shadow-md border border-gray-100">
                <div className="flex items-center mb-3">
                  <div className="w-10 h-10 bg-red-100 rounded-full flex items-center justify-center mr-3">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                    </svg>
                  </div>
                  <h4 className="text-lg font-semibold text-gray-800">Rat Control Methods</h4>
                </div>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-red-600 mr-2 mt-0.5 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-600">Larger snap traps and bait stations</span>
                  </li>
                  <li className="flex items-start">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-red-600 mr-2 mt-0.5 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-600">Sealing holes ½ inch or larger</span>
                  </li>
                  <li className="flex items-start">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-red-600 mr-2 mt-0.5 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-600">Focus on lower levels and exterior</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white p-5 rounded-lg shadow-md border border-gray-100">
                <div className="flex items-center mb-3">
                  <div className="w-10 h-10 bg-red-100 rounded-full flex items-center justify-center mr-3">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                    </svg>
                  </div>
                  <h4 className="text-lg font-semibold text-gray-800">Mouse Control Methods</h4>
                </div>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-red-600 mr-2 mt-0.5 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-600">Smaller traps in greater numbers</span>
                  </li>
                  <li className="flex items-start">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-red-600 mr-2 mt-0.5 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-600">Sealing gaps as small as ¼ inch</span>
                  </li>
                  <li className="flex items-start">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-red-600 mr-2 mt-0.5 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-600">Focus on interior and upper levels</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Box */}
        <div className="mt-16 bg-gradient-to-r from-red-500 to-red-600 rounded-xl overflow-hidden shadow-xl">
          <div className="p-8 md:p-10 relative">
            <div className="absolute top-0 right-0 w-40 h-40 bg-white/10 rounded-full blur-2xl transform translate-x-10 -translate-y-10"></div>
            <div className="absolute bottom-0 left-0 w-40 h-40 bg-black/10 rounded-full blur-2xl transform -translate-x-10 translate-y-10"></div>

            <div className="relative z-10 text-center">
              <h3 className="text-2xl font-semibold mb-3 text-white">Ready to eliminate your rodent problem?</h3>
              <p className="text-white/80 mb-6 max-w-2xl mx-auto">Our professional rodent control team is ready to help you get rid of rats and mice for good with our proven 6-step process.</p>
              <a href="/contact" className="inline-block bg-white text-red-600 hover:text-red-700 font-bold py-3 px-8 rounded-full transition-all duration-300 border-2 border-white hover:border-opacity-80 hover:shadow-lg">
                Schedule Your Treatment
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

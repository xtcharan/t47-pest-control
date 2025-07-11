"use client";

import OptimizedImage from '@/components/common/OptimizedImage';

export default function SpiderInfestationSigns() {
  return (
    <section className="py-16 bg-gray-50 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-red-50/30 rounded-bl-[100px] z-0"></div>
        <div className="absolute bottom-0 left-0 w-1/4 h-1/4 bg-red-50/20 rounded-tr-[100px] z-0"></div>
        <div className="absolute top-1/3 left-10 w-6 h-6 bg-red-100/50 rounded-full z-0"></div>
        <div className="absolute bottom-1/4 right-20 w-4 h-4 bg-red-200/50 rounded-full z-0"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-10">
            <span className="inline-block px-3 py-1 bg-red-100 text-red-700 text-sm font-semibold rounded-full mb-3">
              SPIDER DETECTION
            </span>
            <h2 className="text-4xl font-bold mb-4 text-gray-900">
              Signs of <span className="text-red-600">Spider Infestation</span>
            </h2>
            <div className="w-24 h-1 bg-red-600 mx-auto mb-6"></div>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Identifying a spider infestation early can help prevent it from becoming a more serious problem. Here are the key signs to watch for in your home or business.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="relative rounded-xl overflow-hidden shadow-lg h-[300px] md:h-[400px]">
              <OptimizedImage
                src="/spider-infestation-signs.webp"
                fallbackSrc="/spider-infestation-signs.jpg"
                alt="Signs of Spider Infestation"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              <div className="absolute bottom-4 left-4 right-4 text-white">
                <h3 className="text-xl font-semibold mb-1">Early Detection Matters</h3>
                <p className="text-sm text-white/90">Professional treatment is most effective when infestations are caught early</p>
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md">
              <h3 className="text-2xl font-semibold mb-4 text-gray-800">Common Infestation Indicators</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-red-600 mr-2 mt-0.5 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span><strong>Excessive Webs</strong> - Noticeable increase in spider webs in corners, ceilings, windows, and other undisturbed areas of your home.</span>
                </li>
                <li className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-red-600 mr-2 mt-0.5 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span><strong>Frequent Spider Sightings</strong> - Regularly seeing multiple spiders inside your home, especially of the same species, indicates a potential infestation.</span>
                </li>
                <li className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-red-600 mr-2 mt-0.5 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span><strong>Egg Sacs</strong> - Small silk-wrapped bundles in hidden locations like corners, under furniture, or in cluttered areas that can contain hundreds of spider eggs.</span>
                </li>
                <li className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-red-600 mr-2 mt-0.5 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span><strong>Spider Exoskeletons</strong> - Shed spider skins (exoskeletons) found around your home, indicating spiders are actively growing and molting in your environment.</span>
                </li>
                <li className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-red-600 mr-2 mt-0.5 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span><strong>Insect Remains</strong> - Small piles of dead insects near webs or in corners, showing evidence of spider feeding activity and indicating an established population.</span>
                </li>
                <li className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-red-600 mr-2 mt-0.5 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span><strong>Unexplained Bites</strong> - Waking up with unexplained bites or welts could indicate nocturnal spider activity, particularly if the bites appear in clusters or lines.</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-10 bg-white p-6 rounded-xl shadow-md text-center">
            <p className="text-gray-700 mb-4">
              If you've noticed any of these signs in your home, it's time to consider professional spider control services. Our experts can identify the species, locate nesting areas, and implement effective treatment strategies.
            </p>
            <a href="/contact" className="inline-block bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-8 rounded-full transition-colors">
              Get Expert Help Now
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

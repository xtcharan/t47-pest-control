import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Safety Resources | T47 Pest Control Safety Guidelines",
  description: "Important safety information and resources for pest control treatments. Learn about preparation, safety measures, and post-treatment guidelines from T47 Pest Control.",
  keywords: "pest control safety, treatment safety, T47 Pest Control safety, pest control preparation, safety guidelines",
  robots: "index, follow",
};

export default function SafetyResourcesPage() {
  const safetyTips = [
    {
      title: "Before Treatment",
      icon: "🏠",
      tips: [
        "Remove or cover food items and utensils",
        "Ensure pets are safely relocated during treatment",
        "Clear access areas for technician entry",
        "Inform technician of any allergies or health concerns",
        "Remove children's toys from treatment areas"
      ]
    },
    {
      title: "During Treatment",
      icon: "⚠️",
      tips: [
        "Stay away from treatment areas as directed",
        "Keep windows and doors closed as instructed",
        "Do not touch treated surfaces until dry",
        "Follow technician's specific instructions",
        "Ask questions if you're unsure about anything"
      ]
    },
    {
      title: "After Treatment",
      icon: "✅",
      tips: [
        "Wait recommended time before re-entering treated areas",
        "Ventilate areas as instructed by technician",
        "Clean surfaces that come into contact with food",
        "Monitor for any unusual reactions or symptoms",
        "Follow up with any additional instructions provided"
      ]
    }
  ];

  const emergencyInfo = [
    {
      title: "Poison Information Centre",
      phone: "13 11 26",
      description: "24/7 poison information and advice"
    },
    {
      title: "Emergency Services",
      phone: "000",
      description: "For life-threatening emergencies"
    },
    {
      title: "T47 Pest Control Emergency",
      phone: "+61 434300216",
      description: "24/7 emergency pest control support"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-red-600 to-orange-600 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Safety Resources</h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
            Your safety is our top priority. Learn about proper preparation, 
            safety measures, and post-treatment guidelines.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        {/* Safety Guidelines */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">Treatment Safety Guidelines</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {safetyTips.map((section, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md p-6">
                <div className="text-center mb-6">
                  <div className="text-4xl mb-2">{section.icon}</div>
                  <h3 className="text-xl font-semibold text-gray-900">{section.title}</h3>
                </div>
                <ul className="space-y-3">
                  {section.tips.map((tip, tipIndex) => (
                    <li key={tipIndex} className="flex items-start">
                      <svg className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-700">{tip}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Emergency Contacts */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">Emergency Contacts</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {emergencyInfo.map((contact, index) => (
              <div key={index} className="bg-red-50 border border-red-200 rounded-lg p-6 text-center">
                <h3 className="text-lg font-semibold text-red-800 mb-2">{contact.title}</h3>
                <div className="text-2xl font-bold text-red-600 mb-2">{contact.phone}</div>
                <p className="text-red-700 text-sm">{contact.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Safety Data Sheets */}
        <div className="mb-16">
          <div className="bg-white rounded-lg shadow-md p-8">
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">Safety Data Sheets (SDS)</h2>
            <div className="text-center mb-6">
              <p className="text-gray-600 mb-4">
                Safety Data Sheets for all products used in our treatments are available upon request. 
                These documents contain detailed information about product composition, hazards, and safety measures.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors duration-200"
              >
                Request Safety Data Sheets
              </Link>
            </div>
          </div>
        </div>

        {/* Additional Resources */}
        <div className="bg-white rounded-lg shadow-md p-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">Additional Safety Resources</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Pet Safety</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Remove pet food and water bowls during treatment</li>
                <li>• Keep pets away from treated areas until dry</li>
                <li>• Cover aquariums and turn off air pumps</li>
                <li>• Inform technician about any pets with health conditions</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Child Safety</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Keep children away during and after treatment as directed</li>
                <li>• Store all toys and items children put in their mouths</li>
                <li>• Clean high-touch surfaces before children return</li>
                <li>• Discuss any concerns with our technician</li>
              </ul>
            </div>
          </div>
          
          <div className="text-center mt-8">
            <p className="text-gray-600 mb-4">
              Have questions about safety procedures? Our trained professionals are here to help.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center px-6 py-3 bg-green-600 text-white font-medium rounded-lg hover:bg-green-700 transition-colors duration-200"
            >
              Contact Our Safety Team
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

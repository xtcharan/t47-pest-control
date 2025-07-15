import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Careers | Join T47 Pest Control Team",
  description: "Join the T47 Pest Control team! We're looking for dedicated professionals to help us provide excellent pest control services across Victoria. View current job openings.",
  keywords: "careers, jobs, pest control jobs, T47 Pest Control careers, Victoria jobs, pest technician jobs",
  robots: "index, follow",
};

export default function CareersPage() {
  const benefits = [
    "Competitive salary and performance bonuses",
    "Comprehensive training and certification programs",
    "Company vehicle and equipment provided",
    "Health insurance and benefits package",
    "Career advancement opportunities",
    "Flexible scheduling options",
    "Ongoing professional development",
    "Supportive team environment"
  ];

  const currentOpenings = [
    {
      title: "Pest Control Technician",
      location: "Melbourne, VIC",
      type: "Full-time",
      description: "Join our team as a certified pest control technician. Experience preferred but training provided for the right candidate."
    },
    {
      title: "Senior Pest Control Specialist",
      location: "Brisbane, QLD",
      type: "Full-time",
      description: "Lead technician role for experienced professional. Manage complex treatments and mentor junior staff."
    },
    {
      title: "Customer Service Representative",
      location: "Sydney, NSW",
      type: "Full-time",
      description: "Handle customer inquiries, schedule appointments, and provide excellent customer service support."
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-green-600 to-blue-600 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Join Our Team</h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
            Build a rewarding career in pest control with T47 Pest Control. 
            We're always looking for dedicated professionals to join our growing team.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        {/* Why Work With Us */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">Why Work With T47 Pest Control?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md p-6 text-center">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <p className="text-gray-700 font-medium">{benefit}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Current Openings */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">Current Job Openings</h2>
          <div className="space-y-6">
            {currentOpenings.map((job, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md p-6">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">{job.title}</h3>
                    <div className="flex flex-col sm:flex-row sm:items-center gap-2 text-gray-600">
                      <span className="flex items-center">
                        <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                        {job.location}
                      </span>
                      <span className="flex items-center">
                        <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        {job.type}
                      </span>
                    </div>
                  </div>
                  <Link
                    href="/contact"
                    className="mt-4 md:mt-0 inline-flex items-center px-6 py-2 bg-green-600 text-white font-medium rounded-lg hover:bg-green-700 transition-colors duration-200"
                  >
                    Apply Now
                  </Link>
                </div>
                <p className="text-gray-700">{job.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Application Process */}
        <div className="bg-white rounded-lg shadow-md p-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">How to Apply</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-blue-600">1</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Submit Application</h3>
              <p className="text-gray-600">Send us your resume and cover letter through our contact form or email.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-blue-600">2</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Interview Process</h3>
              <p className="text-gray-600">We'll review your application and schedule an interview if you're a good fit.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-blue-600">3</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Start Your Career</h3>
              <p className="text-gray-600">Begin your training and start making a difference in pest control.</p>
            </div>
          </div>
          
          <div className="text-center mt-8">
            <Link
              href="/contact"
              className="inline-flex items-center px-8 py-3 bg-green-600 text-white font-medium rounded-lg hover:bg-green-700 transition-colors duration-200"
            >
              Contact Us About Careers
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

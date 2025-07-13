import { Metadata } from 'next';
import Link from 'next/link';
import { COMPANY_INFO } from '@/components/lib/constants';

export const metadata: Metadata = {
  title: 'Terms of Service - T47 Pest Control | Australia',
  description: 'T47 Pest Control terms of service. Understand our service terms, conditions, liability, and user responsibilities for professional pest control services in Australia.',
  keywords: 'terms of service, service conditions, pest control terms, liability, user agreement, service agreement, Australian pest control',
  openGraph: {
    title: 'Terms of Service - T47 Pest Control',
    description: 'Our service terms and conditions for professional pest control services.',
    type: 'website',
    url: 'https://www.t47pestcontrol.com/terms-of-service',
  },
  twitter: {
    card: 'summary',
    title: 'Terms of Service - T47 Pest Control',
    description: 'Our service terms and conditions for professional pest control services.',
  },
  alternates: {
    canonical: 'https://www.t47pestcontrol.com/terms-of-service'
  },
  robots: {
    index: true,
    follow: true,
  }
};

export default function TermsOfServicePage() {
  const lastUpdated = "January 15, 2025";

  return (
    <main className="min-h-screen bg-white">
      {/* Breadcrumb */}
      <nav className="bg-gray-50 py-4">
        <div className="container mx-auto px-4">
          <div className="flex items-center space-x-2 text-sm">
            <Link href="/" className="text-green-light hover:underline">Home</Link>
            <span className="text-gray-500">/</span>
            <span className="text-gray-700">Terms of Service</span>
          </div>
        </div>
      </nav>

      {/* Header */}
      <section className="bg-gradient-to-br from-primary via-secondary to-nav-dark text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Terms of Service
            </h1>
            <p className="text-xl text-gray-300 mb-4">
              Please read these terms carefully before using our pest control services.
            </p>
            <p className="text-sm text-gray-400">
              Last updated: {lastUpdated}
            </p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto prose prose-lg">
            
            <div className="bg-green-50 border-l-4 border-green-500 p-6 mb-8">
              <h2 className="text-xl font-bold text-green-800 mb-2">Agreement Overview</h2>
              <p className="text-green-700">
                By using T47 Pest Control services, you agree to these terms and conditions. 
                These terms govern our professional pest control services throughout Australia.
              </p>
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Service Agreement</h2>
            
            <h3 className="text-xl font-semibold text-gray-800 mb-3">Service Provision</h3>
            <p className="text-gray-600 mb-4">T47 Pest Control provides professional pest management services including:</p>
            <ul className="list-disc pl-6 mb-6 text-gray-600">
              <li>Residential and commercial pest control treatments</li>
              <li>Termite inspection, treatment, and prevention services</li>
              <li>Emergency pest control services</li>
              <li>Ongoing pest management programs</li>
              <li>Consultation and advice services</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-800 mb-3">Service Standards</h3>
            <p className="text-gray-600 mb-6">
              We are committed to providing professional services in accordance with Australian 
              industry standards, using licensed technicians and approved pest control methods.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Booking and Scheduling</h2>
            <ul className="list-disc pl-6 mb-6 text-gray-600">
              <li>Service bookings can be made via phone, email, or our website</li>
              <li>We provide same-day service where possible, subject to availability</li>
              <li>Appointment times are estimates and may vary due to operational requirements</li>
              <li>24-hour notice is required for appointment cancellations</li>
              <li>Emergency services may incur additional charges</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Pricing and Payment</h2>
            
            <h3 className="text-xl font-semibold text-gray-800 mb-3">Service Fees</h3>
            <ul className="list-disc pl-6 mb-4 text-gray-600">
              <li>Prices are quoted based on property size, pest type, and treatment required</li>
              <li>All prices include GST where applicable</li>
              <li>Additional charges may apply for difficult access or extensive treatments</li>
              <li>Emergency and after-hours services incur premium rates</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-800 mb-3">Payment Terms</h3>
            <ul className="list-disc pl-6 mb-6 text-gray-600">
              <li>Payment is due upon completion of service unless otherwise arranged</li>
              <li>We accept cash, credit cards, and bank transfers</li>
              <li>Overdue accounts may incur interest charges and collection fees</li>
              <li>Disputed charges must be raised within 7 days of service</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Customer Responsibilities</h2>
            <p className="text-gray-600 mb-4">Customers must:</p>
            <ul className="list-disc pl-6 mb-6 text-gray-600">
              <li>Provide accurate information about pest problems and property access</li>
              <li>Ensure safe access to treatment areas</li>
              <li>Follow pre and post-treatment instructions</li>
              <li>Remove or cover food, utensils, and personal items as directed</li>
              <li>Ensure pets and people are safely away from treatment areas</li>
              <li>Report any adverse reactions or concerns immediately</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Service Guarantees</h2>
            
            <h3 className="text-xl font-semibold text-gray-800 mb-3">Treatment Warranty</h3>
            <p className="text-gray-600 mb-4">We provide service warranties subject to:</p>
            <ul className="list-disc pl-6 mb-4 text-gray-600">
              <li>Customer compliance with treatment instructions</li>
              <li>No structural changes affecting treatment areas</li>
              <li>Warranty periods vary by service type and pest species</li>
              <li>Warranty covers re-treatment only, not property damage</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-800 mb-3">Warranty Exclusions</h3>
            <p className="text-gray-600 mb-6">
              Warranties do not cover new infestations, different pest species, or issues 
              arising from customer non-compliance with treatment recommendations.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Liability and Insurance</h2>
            
            <h3 className="text-xl font-semibold text-gray-800 mb-3">Our Liability</h3>
            <p className="text-gray-600 mb-4">T47 Pest Control maintains comprehensive insurance and:</p>
            <ul className="list-disc pl-6 mb-4 text-gray-600">
              <li>Accepts liability for damage caused by our negligence</li>
              <li>Limits liability to the cost of re-performing the service</li>
              <li>Excludes liability for consequential or indirect damages</li>
              <li>Requires damage claims to be reported within 24 hours</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-800 mb-3">Customer Liability</h3>
            <p className="text-gray-600 mb-6">
              Customers are responsible for providing accurate information and ensuring 
              safe working conditions for our technicians.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Health and Safety</h2>
            <ul className="list-disc pl-6 mb-6 text-gray-600">
              <li>All treatments use approved pesticides and methods</li>
              <li>Safety data sheets are available upon request</li>
              <li>Customers must follow all safety instructions provided</li>
              <li>Pregnant women, children, and pets should avoid treated areas as directed</li>
              <li>Report any health concerns immediately</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Cancellation and Refunds</h2>
            <ul className="list-disc pl-6 mb-6 text-gray-600">
              <li>Services can be cancelled with 24-hour notice without penalty</li>
              <li>Late cancellations may incur a service call fee</li>
              <li>Refunds are provided for unsatisfactory service within warranty terms</li>
              <li>Partial refunds may apply for partially completed services</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">9. Privacy and Confidentiality</h2>
            <p className="text-gray-600 mb-6">
              We respect customer privacy and maintain confidentiality of all service 
              information. See our <Link href="/privacy-policy" className="text-green-dark hover:underline">Privacy Policy</Link> for 
              detailed information about data handling.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">10. Dispute Resolution</h2>
            <p className="text-gray-600 mb-4">In case of disputes:</p>
            <ul className="list-disc pl-6 mb-6 text-gray-600">
              <li>Contact us immediately to discuss concerns</li>
              <li>We aim to resolve issues promptly and fairly</li>
              <li>Unresolved disputes may be referred to mediation</li>
              <li>Australian Consumer Law rights are not affected</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">11. Governing Law</h2>
            <p className="text-gray-600 mb-6">
              These terms are governed by Australian law and the laws of the state or 
              territory where services are provided. Any disputes will be subject to 
              the jurisdiction of Australian courts.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">12. Changes to Terms</h2>
            <p className="text-gray-600 mb-6">
              We may update these terms periodically. Changes will be posted on our 
              website with an updated revision date. Continued use of our services 
              constitutes acceptance of updated terms.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">13. Contact Information</h2>
            <p className="text-gray-600 mb-4">
              For questions about these terms or our services, contact us:
            </p>
            
            <div className="bg-gray-50 p-6 rounded-lg mb-8">
              <h3 className="text-lg font-semibold text-gray-800 mb-3">{COMPANY_INFO.name}</h3>
              <div className="space-y-2 text-gray-600">
                <p><strong>Phone:</strong> <a href={`tel:${COMPANY_INFO.phone}`} className="text-green-dark hover:underline">{COMPANY_INFO.phone}</a></p>
                <p><strong>Email:</strong> <a href={`mailto:${COMPANY_INFO.email}`} className="text-green-dark hover:underline">{COMPANY_INFO.email}</a></p>
                <p><strong>Business Hours:</strong> 24/7 Emergency Service Available</p>
              </div>
            </div>

            <div className="bg-blue-50 border-l-4 border-blue-500 p-6">
              <h3 className="text-lg font-semibold text-blue-800 mb-2">Australian Consumer Law</h3>
              <p className="text-blue-700">
                These terms do not exclude, restrict, or modify any consumer rights under 
                Australian Consumer Law. For more information about your consumer rights, 
                visit the Australian Competition and Consumer Commission (ACCC) website.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-green-light to-green-dark text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-xl mb-8">Contact us today for professional pest control services you can trust.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-white text-green-dark px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors font-bold text-lg"
            >
              Get Free Quote
            </Link>
            <Link
              href={`tel:${COMPANY_INFO.phone}`}
              className="border-2 border-white text-white px-8 py-3 rounded-lg hover:bg-white hover:text-green-dark transition-colors font-bold text-lg"
            >
              Call Now: {COMPANY_INFO.phone}
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

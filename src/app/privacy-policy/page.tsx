import { Metadata } from 'next';
import Link from 'next/link';
import { COMPANY_INFO } from '@/components/lib/constants';

export const metadata: Metadata = {
  title: 'Privacy Policy - T47 Pest Control | Australia',
  description: 'T47 Pest Control privacy policy. Learn how we collect, use, and protect your personal information in compliance with Australian Privacy Act and GDPR requirements.',
  keywords: 'privacy policy, data protection, personal information, Australian Privacy Act, GDPR compliance, pest control privacy',
  openGraph: {
    title: 'Privacy Policy - T47 Pest Control',
    description: 'Learn how we protect your personal information and privacy.',
    type: 'website',
    url: 'https://www.t47pestcontrol.com/privacy-policy',
  },
  twitter: {
    card: 'summary',
    title: 'Privacy Policy - T47 Pest Control',
    description: 'Learn how we protect your personal information and privacy.',
  },
  alternates: {
    canonical: 'https://www.t47pestcontrol.com/privacy-policy'
  },
  robots: {
    index: true,
    follow: true,
  }
};

export default function PrivacyPolicyPage() {
  const lastUpdated = "January 15, 2025";

  return (
    <main className="min-h-screen bg-white">
      {/* Breadcrumb */}
      <nav className="bg-gray-50 py-4">
        <div className="container mx-auto px-4">
          <div className="flex items-center space-x-2 text-sm">
            <Link href="/" className="text-green-light hover:underline">Home</Link>
            <span className="text-gray-500">/</span>
            <span className="text-gray-700">Privacy Policy</span>
          </div>
        </div>
      </nav>

      {/* Header */}
      <section className="bg-gradient-to-br from-primary via-secondary to-nav-dark text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Privacy Policy
            </h1>
            <p className="text-xl text-gray-300 mb-4">
              Your privacy is important to us. This policy explains how we collect, use, and protect your personal information.
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
            
            <div className="bg-blue-50 border-l-4 border-blue-500 p-6 mb-8">
              <h2 className="text-xl font-bold text-blue-800 mb-2">Quick Summary</h2>
              <p className="text-blue-700">
                T47 Pest Control respects your privacy and is committed to protecting your personal information. 
                We only collect information necessary to provide our pest control services and comply with 
                Australian Privacy Act 1988 and GDPR requirements.
              </p>
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Information We Collect</h2>
            
            <h3 className="text-xl font-semibold text-gray-800 mb-3">Personal Information</h3>
            <p className="text-gray-600 mb-4">We may collect the following personal information:</p>
            <ul className="list-disc pl-6 mb-6 text-gray-600">
              <li>Name and contact details (phone, email, address)</li>
              <li>Property information and service requirements</li>
              <li>Payment and billing information</li>
              <li>Service history and preferences</li>
              <li>Communication records with our team</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-800 mb-3">Technical Information</h3>
            <p className="text-gray-600 mb-4">When you visit our website, we may collect:</p>
            <ul className="list-disc pl-6 mb-6 text-gray-600">
              <li>IP address and browser information</li>
              <li>Website usage data and analytics</li>
              <li>Cookies and similar technologies</li>
              <li>Device and location information (with consent)</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">2. How We Use Your Information</h2>
            <p className="text-gray-600 mb-4">We use your personal information to:</p>
            <ul className="list-disc pl-6 mb-6 text-gray-600">
              <li>Provide pest control services and customer support</li>
              <li>Process bookings, payments, and service requests</li>
              <li>Communicate about appointments and service updates</li>
              <li>Improve our services and website functionality</li>
              <li>Comply with legal and regulatory requirements</li>
              <li>Send marketing communications (with your consent)</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Information Sharing</h2>
            <p className="text-gray-600 mb-4">We do not sell your personal information. We may share information with:</p>
            <ul className="list-disc pl-6 mb-6 text-gray-600">
              <li>Service providers and contractors who assist in service delivery</li>
              <li>Payment processors for billing purposes</li>
              <li>Legal authorities when required by law</li>
              <li>Professional advisors (lawyers, accountants) when necessary</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Data Security</h2>
            <p className="text-gray-600 mb-6">
              We implement appropriate security measures to protect your personal information against 
              unauthorized access, alteration, disclosure, or destruction. This includes encryption, 
              secure servers, and regular security assessments.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Your Rights</h2>
            <p className="text-gray-600 mb-4">Under Australian Privacy Act and GDPR, you have the right to:</p>
            <ul className="list-disc pl-6 mb-6 text-gray-600">
              <li>Access your personal information</li>
              <li>Correct inaccurate or incomplete information</li>
              <li>Request deletion of your information</li>
              <li>Object to processing of your information</li>
              <li>Data portability (receive your data in a structured format)</li>
              <li>Withdraw consent for marketing communications</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Cookies and Tracking</h2>
            <p className="text-gray-600 mb-6">
              Our website uses cookies to improve user experience and analyze website performance. 
              You can control cookie settings through your browser preferences. Some features may 
              not function properly if cookies are disabled.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Data Retention</h2>
            <p className="text-gray-600 mb-6">
              We retain your personal information only as long as necessary to provide services, 
              comply with legal obligations, and resolve disputes. Service records are typically 
              retained for 7 years as required by Australian business regulations.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Third-Party Links</h2>
            <p className="text-gray-600 mb-6">
              Our website may contain links to third-party websites. We are not responsible for 
              the privacy practices of these external sites. Please review their privacy policies 
              before providing personal information.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">9. Changes to This Policy</h2>
            <p className="text-gray-600 mb-6">
              We may update this privacy policy periodically. Changes will be posted on this page 
              with an updated revision date. Continued use of our services constitutes acceptance 
              of the updated policy.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">10. Contact Us</h2>
            <p className="text-gray-600 mb-4">
              If you have questions about this privacy policy or wish to exercise your rights, contact us:
            </p>
            
            <div className="bg-gray-50 p-6 rounded-lg mb-8">
              <h3 className="text-lg font-semibold text-gray-800 mb-3">{COMPANY_INFO.name}</h3>
              <div className="space-y-2 text-gray-600">
                <p><strong>Phone:</strong> <a href={`tel:${COMPANY_INFO.phone}`} className="text-green-dark hover:underline">{COMPANY_INFO.phone}</a></p>
                <p><strong>Email:</strong> <a href={`mailto:${COMPANY_INFO.email}`} className="text-green-dark hover:underline">{COMPANY_INFO.email}</a></p>
                <p><strong>Privacy Officer:</strong> privacy@t47pestcontrol.com</p>
              </div>
            </div>

            <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6">
              <h3 className="text-lg font-semibold text-yellow-800 mb-2">Australian Privacy Act Compliance</h3>
              <p className="text-yellow-700">
                This privacy policy complies with the Australian Privacy Act 1988 and the Australian 
                Privacy Principles (APPs). For more information about privacy rights in Australia, 
                visit the Office of the Australian Information Commissioner (OAIC) website.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-green-light to-green-dark text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Need Pest Control Services?</h2>
          <p className="text-xl mb-8">Contact us today for professional, reliable pest control solutions.</p>
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

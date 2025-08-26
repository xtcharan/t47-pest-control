"use client";

import { useState, useEffect, useRef } from 'react';

export default function ServiceForm() {
  const [formData, setFormData] = useState({
    name: '',
    mobile: '',
    email: '',
    suburb: '',
    pestConcern: '',
    serviceTypes: [] as string[],
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    type: 'success' | 'error' | null;
    message: string;
  }>({ type: null, message: '' });

  // Track if form was accessed via offer redemption
  const [offerContext, setOfferContext] = useState<{
    isFromOffer: boolean;
    offerTitle?: string;
    offerPrice?: string;
  }>({ isFromOffer: false });

  const formRef = useRef<HTMLFormElement>(null);

  // Listen for offer redemption events
  useEffect(() => {
    const handleOfferRedemption = (event: CustomEvent) => {
      const { title, price } = event.detail;
      setOfferContext({
        isFromOffer: true,
        offerTitle: title,
        offerPrice: price
      });
    };

    // Add event listener for offer redemption
    window.addEventListener('offerRedeemed', handleOfferRedemption as EventListener);

    return () => {
      window.removeEventListener('offerRedeemed', handleOfferRedemption as EventListener);
    };
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;

    if (type === 'checkbox') {
      const checked = (e.target as HTMLInputElement).checked;
      setFormData(prev => ({
        ...prev,
        serviceTypes: checked
          ? [...prev.serviceTypes, value]
          : prev.serviceTypes.filter(service => service !== value)
      }));
    } else {
      setFormData(prev => ({
        ...prev,
        [name]: value
      }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus({ type: null, message: '' });

    try {
      // Include offer context in submission
      const submissionData = {
        ...formData,
        offerContext: offerContext.isFromOffer ? {
          offerTitle: offerContext.offerTitle,
          offerPrice: offerContext.offerPrice,
          redeemedAt: new Date().toISOString()
        } : null
      };

      const response = await fetch('/api/service', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(submissionData),
      });

      const result = await response.json();

      if (response.ok) {
        setSubmitStatus({
          type: 'success',
          message: '✅ Success! Your pest control service booking has been submitted. Our professional technicians will contact you within 24 hours to schedule your appointment and confirm service details.'
        });
        // Reset form
        setFormData({
          name: '',
          mobile: '',
          email: '',
          suburb: '',
          pestConcern: '',
          serviceTypes: [],
        });
      } else {
        setSubmitStatus({
          type: 'error',
          message: result.error || '❌ Unable to submit your pest control service booking. Please verify your information and try again, or call us directly for immediate assistance.'
        });
      }
    } catch (error) {
      console.error('Form submission error:', error);
      setSubmitStatus({
        type: 'error',
        message: '⚠️ Connection error occurred while submitting your service booking. Please check your internet connection and try again, or contact our pest control experts directly.'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="service-form" className="py-12 bg-gradient-to-r from-green-light to-green-dark w-full">
      <div className="w-full px-4">
        <div className="max-w-2xl mx-auto">
          {/* Offer Redemption Confirmation Badge */}
          {offerContext.isFromOffer && (
            <div className="mb-6">
              <div className="bg-white rounded-lg shadow-lg p-4 border-l-4 border-green-500">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                    <svg className="h-4 w-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-green-700">Offer Redeemed: {offerContext.offerTitle} (${offerContext.offerPrice})</h3>
                    <p className="text-xs text-gray-600">Complete the form below to get your quote</p>
                  </div>
                </div>
              </div>
            </div>
          )}

          <div className="text-center mb-6">
            <h2 className="text-3xl font-bold text-white mb-2">Book A Service Now</h2>
            <p className="text-white/90">Book us for an inspection today and safeguard your home!</p>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-6">
            <form onSubmit={handleSubmit} className="space-y-4">
            {/* First Row - Name and Email */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Name"
                  className="w-full p-3 rounded-md bg-gray-50 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-green-500 text-black"
                  required
                />
              </div>
              <div>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Email"
                  className="w-full p-3 rounded-md bg-gray-50 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-green-500 text-black"
                  required
                />
              </div>
            </div>

            {/* Second Row - Mobile and Suburb */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <input
                  type="tel"
                  name="mobile"
                  value={formData.mobile}
                  onChange={handleChange}
                  placeholder="Mobile"
                  className="w-full p-3 rounded-md bg-gray-50 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-green-500 text-black"
                  required
                />
              </div>
              <div>
                <input
                  type="text"
                  name="suburb"
                  value={formData.suburb}
                  onChange={handleChange}
                  placeholder="Suburb"
                  className="w-full p-3 rounded-md bg-gray-50 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-green-500 text-black"
                  required
                />
              </div>
            </div>

            {/* Third Row - Tell us about your home, office, workplace */}
            <div>
              <label className="block text-gray-700 text-sm font-medium mb-2">
                Tell us about your pest concerns
              </label>
              <textarea
                name="pestConcern"
                value={formData.pestConcern}
                onChange={handleChange}
                placeholder="Tell us about Your Home, Office, Workplace..."
                className="w-full p-3 rounded-md bg-gray-50 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-green-500 h-20 text-black resize-none"
              ></textarea>
            </div>

            {/* Service Type Checkboxes */}
            <div className="flex flex-wrap gap-4 items-center">
              <label className="flex items-center text-gray-700 cursor-pointer">
                <input
                  type="checkbox"
                  name="serviceTypes"
                  value="residential"
                  className="mr-2 w-4 h-4 text-green-500 bg-gray-50 border-gray-300 rounded focus:ring-green-500 focus:ring-2"
                />
                <span className="text-sm">Residential Pest</span>
              </label>

              <label className="flex items-center text-gray-700 cursor-pointer">
                <input
                  type="checkbox"
                  name="serviceTypes"
                  value="commercial"
                  className="mr-2 w-4 h-4 text-green-500 bg-gray-50 border-gray-300 rounded focus:ring-green-500 focus:ring-2"
                />
                <span className="text-sm">Commercial Pest</span>
              </label>

              <label className="flex items-center text-gray-700 cursor-pointer">
                <input
                  type="checkbox"
                  name="serviceTypes"
                  value="termite"
                  className="mr-2 w-4 h-4 text-green-500 bg-gray-50 border-gray-300 rounded focus:ring-green-500 focus:ring-2"
                />
                <span className="text-sm">Termite Solutions</span>
              </label>
            </div>

            {/* Status Message */}
            {submitStatus.type && (
              <div className={`p-4 rounded-lg text-sm font-medium ${
                submitStatus.type === 'success'
                  ? 'bg-green-100 text-green-800 border border-green-200'
                  : 'bg-red-100 text-red-800 border border-red-200'
              }`}>
                {submitStatus.message}
              </div>
            )}

            {/* Submit Button */}
            <div className="text-center">
              <button
                type="submit"
                disabled={isSubmitting}
                className={`font-bold py-3 px-8 rounded-lg transition-colors text-lg shadow-lg ${
                  isSubmitting
                    ? 'bg-gray-400 text-gray-600 cursor-not-allowed'
                    : 'bg-white text-green-800 hover:bg-gray-100 hover:text-green-900 border-2 border-white'
                }`}
              >
                {isSubmitting ? 'Submitting...' : 'Get Quote'}
              </button>
            </div>
          </form>
          </div>
        </div>
      </div>
    </section>
  );
}

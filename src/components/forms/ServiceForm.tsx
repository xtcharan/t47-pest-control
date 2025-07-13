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
          message: 'Service booking submitted successfully! We\'ll contact you soon.'
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
          message: result.error || 'Failed to submit service booking. Please try again.'
        });
      }
    } catch (error) {
      console.error('Form submission error:', error);
      setSubmitStatus({
        type: 'error',
        message: 'Network error. Please check your connection and try again.'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="service-form" className="py-16 bg-gradient-to-r from-green-light to-green-dark">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Offer Redemption Confirmation Badge */}
          {offerContext.isFromOffer && (
            <div className="mb-8">
              <div className="bg-white rounded-xl shadow-lg p-6 border-l-4 border-green-500 max-w-2xl mx-auto">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center">
                      <svg className="h-6 w-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center space-x-2 mb-2">
                      <h3 className="text-lg font-bold text-green-700">Offer Successfully Redeemed!</h3>
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                        ACTIVE
                      </span>
                    </div>
                    <div className="bg-gray-50 rounded-lg p-4 mb-3">
                      <div className="flex justify-between items-center">
                        <div>
                          <p className="font-semibold text-gray-900">{offerContext.offerTitle}</p>
                          <p className="text-sm text-gray-600">Starting from <span className="font-bold text-green-600">${offerContext.offerPrice}</span></p>
                        </div>
                        <div className="text-right">
                          <p className="text-xs text-gray-500">Offer ID</p>
                          <p className="text-sm font-mono text-gray-700">#{Date.now().toString().slice(-6)}</p>
                        </div>
                      </div>
                    </div>
                    <p className="text-sm text-gray-600">
                      <span className="font-medium">Great choice!</span> This offer has been applied to your quote request.
                      Please fill out the form below with your specific pest concerns and contact details.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}

          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              {offerContext.isFromOffer ? 'Complete Your Quote Request' : 'Book A Service Now'}
            </h2>
            <p className="text-white text-lg">
              {offerContext.isFromOffer
                ? 'Fill out your details below and describe your specific pest concerns'
                : 'Book us for an inspection today and safeguard your home!'
              }
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* First Row - Name and Email */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Name"
                  className="w-full p-3 rounded-md bg-white border-none focus:outline-none focus:ring-2 focus:ring-white text-black"
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
                  className="w-full p-3 rounded-md bg-white border-none focus:outline-none focus:ring-2 focus:ring-white text-black"
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
                  className="w-full p-3 rounded-md bg-white border-none focus:outline-none focus:ring-2 focus:ring-white text-black"
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
                  className="w-full p-3 rounded-md bg-white border-none focus:outline-none focus:ring-2 focus:ring-white text-black"
                  required
                />
              </div>
            </div>

            {/* Third Row - Tell us about your home, office, workplace */}
            <div>
              <label className="block text-white text-sm font-medium mb-2">
                Tell us about your pest concerns
                {offerContext.isFromOffer && (
                  <span className="ml-2 text-xs bg-white/20 px-2 py-1 rounded">
                    Offer: {offerContext.offerTitle} (${offerContext.offerPrice})
                  </span>
                )}
              </label>
              <textarea
                name="pestConcern"
                value={formData.pestConcern}
                onChange={handleChange}
                placeholder={offerContext.isFromOffer
                  ? `Describe your specific pest concerns for the ${offerContext.offerTitle} service...`
                  : "Tell us about Your Home, Office, Workplace..."
                }
                className="w-full p-3 rounded-md bg-white border-none focus:outline-none focus:ring-2 focus:ring-white h-20 text-black resize-none"
              ></textarea>
              {offerContext.isFromOffer && (
                <p className="text-xs text-white/70 mt-1">
                  💡 Your {offerContext.offerTitle} offer is already applied. Just describe your specific pest issues above.
                </p>
              )}
            </div>

            {/* Service Type Checkboxes */}
            <div className="flex flex-wrap gap-4 items-center">
              <label className="flex items-center text-white cursor-pointer">
                <input
                  type="checkbox"
                  name="serviceTypes"
                  value="residential"
                  className="mr-2 w-4 h-4 text-green-light bg-white border-white rounded focus:ring-green-light focus:ring-2"
                />
                <span className="text-sm md:text-base">Residential Pest</span>
              </label>

              <label className="flex items-center text-white cursor-pointer">
                <input
                  type="checkbox"
                  name="serviceTypes"
                  value="commercial"
                  className="mr-2 w-4 h-4 text-green-light bg-white border-white rounded focus:ring-green-light focus:ring-2"
                />
                <span className="text-sm md:text-base">Commercial Pest</span>
              </label>

              <label className="flex items-center text-white cursor-pointer">
                <input
                  type="checkbox"
                  name="serviceTypes"
                  value="termite"
                  className="mr-2 w-4 h-4 text-green-light bg-white border-white rounded focus:ring-green-light focus:ring-2"
                />
                <span className="text-sm md:text-base">Termite Solutions</span>
              </label>
            </div>

            {/* Submit Button */}
            {/* Status Message */}
            {submitStatus.type && (
              <div className={`p-4 rounded-lg text-sm mb-6 ${
                submitStatus.type === 'success'
                  ? 'bg-green-500/20 text-green-100 border border-green-500/30'
                  : 'bg-red-500/20 text-red-100 border border-red-500/30'
              }`}>
                {submitStatus.message}
              </div>
            )}

            <div className="text-left">
              <button
                type="submit"
                disabled={isSubmitting}
                className={`font-bold py-3 px-8 rounded-full transition-colors text-lg ${
                  isSubmitting
                    ? 'bg-gray-400 text-gray-600 cursor-not-allowed'
                    : 'bg-white text-green-dark hover:bg-gray-100'
                }`}
              >
                {isSubmitting ? 'Submitting...' : 'Get Quote'}
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

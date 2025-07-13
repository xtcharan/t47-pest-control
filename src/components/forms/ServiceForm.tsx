"use client";

import { useState } from 'react';

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
      const response = await fetch('/api/service', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
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
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Book A Service Now
            </h2>
            <p className="text-white text-lg">
              Book us for an inspection today and safeguard your home!
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
              <textarea
                name="pestConcern"
                value={formData.pestConcern}
                onChange={handleChange}
                placeholder="Tell us about Your Home, Office, Workplace..."
                className="w-full p-3 rounded-md bg-white border-none focus:outline-none focus:ring-2 focus:ring-white h-20 text-black resize-none"
              ></textarea>
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

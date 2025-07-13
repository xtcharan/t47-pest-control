"use client";

import { useState } from 'react';

export default function ContactQuoteForm() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    suburb: '',
    service: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    type: 'success' | 'error' | null;
    message: string;
  }>({ type: null, message: '' });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus({ type: null, message: '' });

    try {
      const response = await fetch('/api/contact-quote', {
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
          message: '✅ Success! Your pest control quote request has been submitted. Our certified technicians will contact you within 24 hours to schedule your property inspection and provide a competitive quote.'
        });
        // Reset form
        setFormData({
          name: '',
          phone: '',
          email: '',
          suburb: '',
          service: '',
          message: ''
        });
      } else {
        setSubmitStatus({
          type: 'error',
          message: result.error || '❌ Unable to submit your pest control quote request. Please verify your information and try again, or call us directly for immediate assistance.'
        });
      }
    } catch (error) {
      console.error('Form submission error:', error);
      setSubmitStatus({
        type: 'error',
        message: '⚠️ Connection error occurred while submitting your quote request. Please check your internet connection and try again, or contact our pest control experts directly.'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-white rounded-xl shadow-lg p-8">
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
              Full Name *
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-light focus:border-transparent"
              placeholder="Enter your full name"
            />
          </div>
          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
              Phone Number *
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-light focus:border-transparent"
              placeholder="Enter your phone number"
            />
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
              Email Address *
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-light focus:border-transparent"
              placeholder="Enter your email address"
            />
          </div>
          <div>
            <label htmlFor="suburb" className="block text-sm font-medium text-gray-700 mb-2">
              Suburb *
            </label>
            <input
              type="text"
              id="suburb"
              name="suburb"
              value={formData.suburb}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-light focus:border-transparent"
              placeholder="Enter your suburb"
            />
          </div>
        </div>

        <div>
          <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-2">
            Service Required *
          </label>
          <select
            id="service"
            name="service"
            value={formData.service}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-light focus:border-transparent"
          >
            <option value="">Select a service</option>
            <option value="residential-pest-control">Residential Pest Control</option>
            <option value="commercial-pest-control">Commercial Pest Control</option>
            <option value="termite-inspection">Termite Inspection</option>
            <option value="termite-treatment">Termite Treatment</option>
            <option value="spider-control">Spider Control</option>
            <option value="ant-control">Ant Control</option>
            <option value="cockroach-control">Cockroach Control</option>
            <option value="rodent-control">Rodent Control</option>
            <option value="emergency-service">Emergency Service</option>
            <option value="commercial-services">Commercial Services</option>
            <option value="other">Other</option>
          </select>
        </div>

        <div>
          <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
            Additional Details
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows={4}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-light focus:border-transparent"
            placeholder="Tell us more about your pest problem..."
          ></textarea>
        </div>

        {/* Status Message */}
        {submitStatus.type && (
          <div className={`p-4 rounded-lg text-sm font-medium shadow-lg ${
            submitStatus.type === 'success'
              ? 'bg-green-500/20 text-green-700 border border-green-500/40 shadow-green-500/20'
              : 'bg-red-500/20 text-red-700 border border-red-500/40 shadow-red-500/20'
          }`}>
            <div className="leading-relaxed">
              {submitStatus.message}
            </div>
          </div>
        )}

        <div className="text-center">
          <button
            type="submit"
            disabled={isSubmitting}
            className={`px-8 py-3 rounded-lg font-bold text-lg transition-all duration-300 ${
              isSubmitting
                ? 'bg-gray-400 text-gray-600 cursor-not-allowed'
                : 'bg-green-light text-black hover:bg-green-dark hover:text-white hover:shadow-lg hover:translate-y-[-2px]'
            }`}
          >
            {isSubmitting ? 'SUBMITTING...' : 'Get Free Quote'}
          </button>
        </div>
      </form>
    </div>
  );
}

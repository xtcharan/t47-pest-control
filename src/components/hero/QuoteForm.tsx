"use client";
import { useState, FormEvent } from 'react';

export default function QuoteForm() {
  const [formData, setFormData] = useState({
    name: '',
    mobile: '',
    email: '',
    suburb: '',
    interestedIn: '',
    houseSize: '',
    bedrooms: '',
    constructionType: '',
    pestConcern: ''
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

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus({ type: null, message: '' });

    try {
      const response = await fetch('/api/quote', {
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
          message: 'Quote request submitted successfully! We\'ll contact you soon.'
        });
        // Reset form
        setFormData({
          name: '',
          mobile: '',
          email: '',
          suburb: '',
          interestedIn: '',
          houseSize: '',
          bedrooms: '',
          constructionType: '',
          pestConcern: ''
        });
      } else {
        setSubmitStatus({
          type: 'error',
          message: result.error || 'Failed to submit quote request. Please try again.'
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
    <div className="bg-black p-6 rounded-xl shadow-xl max-w-md mx-auto border border-gray-800">
      <div className="mb-6 text-center">
        <h2 className="text-2xl font-bold text-white mb-2">GET A FAST QUOTE</h2>
        <div className="w-16 h-1 bg-green-light mx-auto"></div>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid grid-cols-2 gap-4">
          {/* Name */}
          <div className="col-span-2 sm:col-span-1">
            <div className="relative">
              <input
                type="text"
                name="name"
                id="name"
                value={formData.name}
                onChange={handleChange}
                placeholder=" "
                className="peer w-full p-3 pt-5 rounded-lg bg-gray-800 border border-gray-700 focus:border-green-light focus:outline-none focus:ring-0 text-white text-sm transition-colors"
                required
                autoComplete="name"
              />
              <label
                htmlFor="name"
                className="absolute text-xs text-gray-400 duration-150 transform -translate-y-3 scale-75 top-4 z-10 origin-[0] left-3 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:text-gray-400 peer-focus:scale-75 peer-focus:text-green-light peer-focus:-translate-y-3"
              >
                Name
              </label>
            </div>
          </div>

          {/* Mobile */}
          <div className="col-span-2 sm:col-span-1">
            <div className="relative">
              <input
                type="tel"
                name="mobile"
                id="mobile"
                value={formData.mobile}
                onChange={handleChange}
                placeholder=" "
                className="peer w-full p-3 pt-5 rounded-lg bg-gray-800 border border-gray-700 focus:border-green-light focus:outline-none focus:ring-0 text-white text-sm transition-colors"
                required
                autoComplete="tel"
              />
              <label
                htmlFor="mobile"
                className="absolute text-xs text-gray-400 duration-150 transform -translate-y-3 scale-75 top-4 z-10 origin-[0] left-3 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:text-gray-400 peer-focus:scale-75 peer-focus:text-green-light peer-focus:-translate-y-3"
              >
                Mobile
              </label>
            </div>
          </div>
        </div>

        {/* Email */}
        <div className="relative">
          <input
            type="email"
            name="email"
            id="email"
            value={formData.email}
            onChange={handleChange}
            placeholder=" "
            className="peer w-full p-3 pt-5 rounded-lg bg-gray-800 border border-gray-700 focus:border-green-light focus:outline-none focus:ring-0 text-white text-sm transition-colors"
            required
            autoComplete="email"
          />
          <label
            htmlFor="email"
            className="absolute text-xs text-gray-400 duration-150 transform -translate-y-3 scale-75 top-4 z-10 origin-[0] left-3 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:text-gray-400 peer-focus:scale-75 peer-focus:text-green-light peer-focus:-translate-y-3"
          >
            Email
          </label>
        </div>

        {/* Suburb */}
        <div className="relative">
          <input
            type="text"
            name="suburb"
            id="suburb"
            value={formData.suburb}
            onChange={handleChange}
            placeholder=" "
            className="peer w-full p-3 pt-5 rounded-lg bg-gray-800 border border-gray-700 focus:border-green-light focus:outline-none focus:ring-0 text-white text-sm transition-colors"
            required
            autoComplete="address-level2"
          />
          <label
            htmlFor="suburb"
            className="absolute text-xs text-gray-400 duration-150 transform -translate-y-3 scale-75 top-4 z-10 origin-[0] left-3 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:text-gray-400 peer-focus:scale-75 peer-focus:text-green-light peer-focus:-translate-y-3"
          >
            Suburb
          </label>
        </div>

        <div className="grid grid-cols-2 gap-4">
          {/* Interested In */}
          <div className="col-span-2 sm:col-span-1">
            <div className="relative">
              <select
                name="interestedIn"
                id="interestedIn"
                value={formData.interestedIn}
                onChange={handleChange}
                className="peer w-full p-3 pt-5 rounded-lg bg-white/10 border border-white/20 focus:border-green-light focus:outline-none focus:ring-0 text-white text-sm transition-colors appearance-none"
                required
                aria-label="Interested In"
                autoComplete="off"
              >
                <option value="" disabled></option>
                <option value="residential">Residential Pest Control</option>
                <option value="commercial">Commercial Pest Control</option>
                <option value="termite">Termite Solutions</option>
              </select>
              <label
                htmlFor="interestedIn"
                className="absolute text-xs text-gray-400 duration-150 transform -translate-y-3 scale-75 top-4 z-10 origin-[0] left-3 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:text-gray-400 peer-focus:scale-75 peer-focus:text-green-light peer-focus:-translate-y-3"
              >
                Interested In
              </label>
              <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
                <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                </svg>
              </div>
            </div>
          </div>

          {/* House Size */}
          <div className="col-span-2 sm:col-span-1">
            <div className="relative">
              <select
                name="houseSize"
                id="houseSize"
                value={formData.houseSize}
                onChange={handleChange}
                className="peer w-full p-3 pt-5 rounded-lg bg-white/10 border border-white/20 focus:border-green-light focus:outline-none focus:ring-0 text-white text-sm transition-colors appearance-none"
                required
                aria-label="Size of house"
                autoComplete="off"
              >
                <option value="" disabled></option>
                <option value="small">Small (up to 150m²)</option>
                <option value="medium">Medium (150-250m²)</option>
                <option value="large">Large (250-350m²)</option>
                <option value="xlarge">Extra Large (350m²+)</option>
              </select>
              <label
                htmlFor="houseSize"
                className="absolute text-xs text-gray-400 duration-150 transform -translate-y-3 scale-75 top-4 z-10 origin-[0] left-3 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:text-gray-400 peer-focus:scale-75 peer-focus:text-green-light peer-focus:-translate-y-3"
              >
                Size of house
              </label>
              <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
                <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                </svg>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          {/* Bedrooms */}
          <div className="col-span-2 sm:col-span-1">
            <div className="relative">
              <select
                name="bedrooms"
                id="bedrooms"
                value={formData.bedrooms}
                onChange={handleChange}
                className="peer w-full p-3 pt-5 rounded-lg bg-white/10 border border-white/20 focus:border-green-light focus:outline-none focus:ring-0 text-white text-sm transition-colors appearance-none"
                required
                aria-label="How many bedrooms"
              >
                <option value="" disabled></option>
                <option value="1">1 Bedroom</option>
                <option value="2">2 Bedrooms</option>
                <option value="3">3 Bedrooms</option>
                <option value="4">4 Bedrooms</option>
                <option value="5+">5+ Bedrooms</option>
              </select>
              <label
                htmlFor="bedrooms"
                className="absolute text-xs text-gray-400 duration-150 transform -translate-y-3 scale-75 top-4 z-10 origin-[0] left-3 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:text-gray-400 peer-focus:scale-75 peer-focus:text-green-light peer-focus:-translate-y-3"
              >
                Bedrooms
              </label>
              <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
                <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                </svg>
              </div>
            </div>
          </div>

          {/* Construction Type */}
          <div className="col-span-2 sm:col-span-1">
            <div className="relative">
              <select
                name="constructionType"
                id="constructionType"
                value={formData.constructionType}
                onChange={handleChange}
                className="peer w-full p-3 pt-5 rounded-lg bg-white/10 border border-white/20 focus:border-green-light focus:outline-none focus:ring-0 text-white text-sm transition-colors appearance-none"
                required
                aria-label="Construction Type"
              >
                <option value="" disabled></option>
                <option value="single_storey">Single Storey</option>
                <option value="double_storey">Double Storey</option>
                <option value="house">House</option>
                <option value="apartment">Apartment</option>
                <option value="commercial">Commercial</option>
              </select>
              <label
                htmlFor="constructionType"
                className="absolute text-xs text-gray-400 duration-150 transform -translate-y-3 scale-75 top-4 z-10 origin-[0] left-3 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:text-gray-400 peer-focus:scale-75 peer-focus:text-green-light peer-focus:-translate-y-3"
              >
                Construction Type
              </label>
              <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
                <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                </svg>
              </div>
            </div>
          </div>
        </div>

        {/* Pest Concern */}
        <div className="relative">
          <textarea
            name="pestConcern"
            id="pestConcern"
            value={formData.pestConcern}
            onChange={handleChange}
            placeholder=" "
            className="peer w-full p-3 pt-5 rounded-lg bg-white/10 border border-white/20 focus:border-green-light focus:outline-none focus:ring-0 text-white text-sm transition-colors h-20 resize-none"
          ></textarea>
          <label
            htmlFor="pestConcern"
            className="absolute text-xs text-gray-400 duration-150 transform -translate-y-3 scale-75 top-4 z-10 origin-[0] left-3 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:text-gray-400 peer-focus:scale-75 peer-focus:text-green-light peer-focus:-translate-y-3"
          >
            Main areas of Pest Concern
          </label>
        </div>

        {/* Status Message */}
        {submitStatus.type && (
          <div className={`p-3 rounded-lg text-sm ${
            submitStatus.type === 'success'
              ? 'bg-green-500/20 text-green-300 border border-green-500/30'
              : 'bg-red-500/20 text-red-300 border border-red-500/30'
          }`}>
            {submitStatus.message}
          </div>
        )}

        {/* Submit Button */}
        <div className="pt-2">
          <button
            type="submit"
            disabled={isSubmitting}
            className={`w-full font-bold py-3 px-4 rounded-lg transition-all duration-300 relative overflow-hidden ${
              isSubmitting
                ? 'bg-gray-600 text-gray-300 cursor-not-allowed'
                : 'bg-gradient-to-r from-green-light to-green-dark text-black hover:shadow-lg hover:translate-y-[-2px]'
            }`}
          >
            <span className="relative z-10">
              {isSubmitting ? 'SUBMITTING...' : 'GET YOUR QUOTE NOW'}
            </span>
          </button>
        </div>
      </form>
    </div>
  );
}



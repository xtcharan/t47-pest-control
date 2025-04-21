"use client";

import { useState } from 'react';

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
    pestConcern: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Reset form or show success message
  };

  return (
    <div className="bg-[#1a1a1a] p-4 rounded-lg max-w-xs mx-auto shadow-xl">
      <h2 className="text-xl font-bold text-white mb-4 text-center">GET A FAST QUOTE NOW</h2>

      <form onSubmit={handleSubmit} className="space-y-2">
        {/* Name */}
        <div>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Name"
            className="w-full p-2 rounded-md bg-white border-none focus:outline-none focus:ring-1 focus:ring-accent text-black"
            required
          />
        </div>

        {/* Mobile */}
        <div>
          <input
            type="tel"
            name="mobile"
            value={formData.mobile}
            onChange={handleChange}
            placeholder="Mobile"
            className="w-full p-2 rounded-md bg-white border-none focus:outline-none focus:ring-1 focus:ring-accent text-black"
            required
          />
        </div>

        {/* Email */}
        <div>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Email"
            className="w-full p-2 rounded-md bg-white border-none focus:outline-none focus:ring-1 focus:ring-accent text-black"
            required
          />
        </div>

        {/* Suburb */}
        <div>
          <input
            type="text"
            name="suburb"
            value={formData.suburb}
            onChange={handleChange}
            placeholder="Suburb"
            className="w-full p-2 rounded-md bg-white border-none focus:outline-none focus:ring-1 focus:ring-accent text-black"
            required
          />
        </div>

        {/* Interested In */}
        <div>
          <select
            name="interestedIn"
            value={formData.interestedIn}
            onChange={handleChange}
            className="w-full p-2 rounded-md bg-white border-none focus:outline-none focus:ring-1 focus:ring-accent appearance-none text-black"
            required
            aria-label="Interested In"
          >
            <option value="" disabled>Interested In</option>
            <option value="residential">Residential Pest Control</option>
            <option value="commercial">Commercial Pest Control</option>
            <option value="termite">Termite Solutions</option>
          </select>
        </div>

        {/* House Size */}
        <div>
          <select
            name="houseSize"
            value={formData.houseSize}
            onChange={handleChange}
            className="w-full p-2 rounded-md bg-white border-none focus:outline-none focus:ring-1 focus:ring-accent appearance-none text-black"
            required
            aria-label="Size of house"
          >
            <option value="" disabled>Size of house</option>
            <option value="small">Small (up to 150m²)</option>
            <option value="medium">Medium (150-250m²)</option>
            <option value="large">Large (250-350m²)</option>
            <option value="xlarge">Extra Large (350m²+)</option>
          </select>
        </div>

        {/* Bedrooms */}
        <div>
          <select
            name="bedrooms"
            value={formData.bedrooms}
            onChange={handleChange}
            className="w-full p-2 rounded-md bg-white border-none focus:outline-none focus:ring-1 focus:ring-accent appearance-none text-black"
            required
            aria-label="How many bedrooms"
          >
            <option value="" disabled>How many bedrooms</option>
            <option value="1">1 Bedroom</option>
            <option value="2">2 Bedrooms</option>
            <option value="3">3 Bedrooms</option>
            <option value="4">4 Bedrooms</option>
            <option value="5+">5+ Bedrooms</option>
          </select>
        </div>

        {/* Construction Type */}
        <div>
          <select
            name="constructionType"
            value={formData.constructionType}
            onChange={handleChange}
            className="w-full p-2 rounded-md bg-white border-none focus:outline-none focus:ring-1 focus:ring-accent appearance-none text-black"
            required
            aria-label="Construction Type"
          >
            <option value="" disabled>Construction Type</option>
            <option value="single_storey">Single Storey</option>
            <option value="double_storey">Double Storey</option>
            <option value="house">House</option>
            <option value="apartment">Apartment</option>
            <option value="commercial">Commercial</option>
          </select>
        </div>

        {/* Pest Concern */}
        <div>
          <textarea
            name="pestConcern"
            value={formData.pestConcern}
            onChange={handleChange}
            placeholder="Main areas of Pest Concern"
            className="w-full p-2 rounded-md bg-white border-none focus:outline-none focus:ring-1 focus:ring-accent h-14 text-black"
          ></textarea>
        </div>

        {/* Submit Button */}
        <div>
          <button
            type="submit"
            className="w-full bg-[#ff5722] hover:bg-[#e64a19] text-white font-bold py-2 px-4 rounded-md transition-colors"
          >
            SUBMIT
          </button>
        </div>
      </form>
    </div>
  );
}

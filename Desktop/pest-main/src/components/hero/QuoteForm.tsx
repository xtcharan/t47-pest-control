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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    // Handle form submission - would be connected to backend API
    console.log('Form submitted:', formData);
    // Reset form or show success message
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
                <option value="brick">Brick</option>
                <option value="weatherboard">Weatherboard</option>
                <option value="fibro">Fibro</option>
                <option value="rendered">Rendered</option>
                <option value="mixed">Mixed</option>
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

        {/* Submit Button */}
        <div className="pt-2">
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-green-light to-green-dark text-black font-bold py-3 px-4 rounded-lg transition-all duration-300 hover:shadow-lg hover:translate-y-[-2px] relative overflow-hidden"
          >
            <span className="relative z-10">GET YOUR QUOTE NOW</span>
          </button>
        </div>
      </form>
    </div>
  );
}



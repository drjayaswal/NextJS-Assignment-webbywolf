'use client';

import { useState } from 'react';

export default function Section7() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    timeFrame: '',
    size: '',
    quantity: '',
    description: ''
  });

  const [showSuccess, setShowSuccess] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const allFilled = Object.values(formData).every(val => val.trim() !== '');
    
    if (allFilled) {
      setShowSuccess(true);
    }
  };

  return (
    <section id='section7' className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 bg-white">
      <div className="max-w-2xl mx-auto">
        <h2 className="text-center text-xl sm:text-2xl font-light mb-8 sm:mb-10 md:mb-12 tracking-wide">
          REQUEST A QUOTE
        </h2>

        <form className="space-y-4 sm:space-y-6" onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
            <div>
              <label htmlFor="name" className="block text-xs sm:text-sm font-medium text-gray-700 mb-1.5 sm:mb-2">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-3 py-2 sm:px-4 sm:py-3 text-sm sm:text-base  border border-gray-200 rounded focus:outline-none focus:ring-2 focus:ring-[#1959AC]"
                placeholder="John Doe"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-xs sm:text-sm font-medium text-gray-700 mb-1.5 sm:mb-2">
                E-mail
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-3 py-2 sm:px-4 sm:py-3 text-sm sm:text-base  border border-gray-200 rounded focus:outline-none focus:ring-2 focus:ring-[#1959AC]"
                placeholder="example@email.com"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
            <div>
              <label htmlFor="phone" className="block text-xs sm:text-sm font-medium text-gray-700 mb-1.5 sm:mb-2">
                Phone Number
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full px-3 py-2 sm:px-4 sm:py-3 text-sm sm:text-base  border border-gray-200 rounded focus:outline-none focus:ring-2 focus:ring-[#1959AC]"
                placeholder="123-456-7890"
              />
            </div>
            <div>
              <label htmlFor="timeFrame" className="block text-xs sm:text-sm font-medium text-gray-700 mb-1.5 sm:mb-2">
                Time Frame <span className="text-red-500">*</span>
              </label>
              <select
                id="timeFrame"
                name="timeFrame"
                value={formData.timeFrame}
                onChange={handleChange}
                className="w-full px-3 py-2 sm:px-4 sm:py-3 text-sm sm:text-base  border border-gray-200 rounded focus:outline-none focus:ring-2 focus:ring-[#1959AC] appearance-none"
              >
                <option value="">Select...</option>
                <option value="1 Week">1 Week</option>
                <option value="2 Weeks">2 Weeks</option>
                <option value="1 Month">1 Month</option>
                <option value="3 Months">3 Months</option>
              </select>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
            <div>
              <label htmlFor="size" className="block text-xs sm:text-sm font-medium text-gray-700 mb-1.5 sm:mb-2">
                Size <span className="text-red-500">*</span>
              </label>
              <select
                id="size"
                name="size"
                value={formData.size}
                onChange={handleChange}
                className="w-full px-3 py-2 sm:px-4 sm:py-3 text-sm sm:text-base  border border-gray-200 rounded focus:outline-none focus:ring-2 focus:ring-[#1959AC] appearance-none"
              >
                <option value="">Select...</option>
                <option value="Small">Small</option>
                <option value="Medium">Medium</option>
                <option value="Large">Large</option>
                <option value="Extra Large">Extra Large</option>
              </select>
            </div>
            <div>
              <label htmlFor="quantity" className="block text-xs sm:text-sm font-medium text-gray-700 mb-1.5 sm:mb-2">
                Quantity <span className="text-red-500">*</span>
              </label>
              <select
                id="quantity"
                name="quantity"
                value={formData.quantity}
                onChange={handleChange}
                className="w-full px-3 py-2 sm:px-4 sm:py-3 text-sm sm:text-base  border border-gray-200 rounded focus:outline-none focus:ring-2 focus:ring-[#1959AC] appearance-none"
              >
                <option value="">Select...</option>
                <option value="1-10">1-10</option>
                <option value="10-50">10-50</option>
                <option value="50-100">50-100</option>
                <option value="100+">100+</option>
              </select>
            </div>
          </div>

          <div>
            <label htmlFor="description" className="block text-xs sm:text-sm font-medium text-gray-700 mb-1.5 sm:mb-2">
              Please Describe Your Project <span className="text-red-500">*</span>
            </label>
            <textarea
              id="description"
              name="description"
              value={formData.description}
              onChange={handleChange}
              rows={5}
              className="w-full px-3 py-2 sm:px-4 sm:py-3 text-sm sm:text-base  border border-gray-200 rounded focus:outline-none focus:ring-2 focus:ring-[#1959AC] resize-none"
              placeholder="Describe your project requirements..."
            />
          </div>

          <div className="text-center text-xs sm:text-sm text-gray-600 px-2">
            By submitting this form you agree to our{' '}
            <a href="#" className="text-[#1959AC] underline">
              Terms of Service
            </a>{' '}
            and{' '}
            <a href="#" className="text-[#1959AC] underline">
              Privacy Policy
            </a>
          </div>

          <div className="text-center">
            <button
              type="submit"
              className="px-6 py-2.5 sm:px-8 sm:py-3 text-sm sm:text-base bg-[#1959AC] text-white rounded hover:bg-[#144a8a] transition-colors inline-flex items-center gap-2"
            >
              Lorem Ipsum
              <span>→</span>
            </button>
          </div>

          {showSuccess && (
            <div className="text-center mt-4 sm:mt-6 p-3 sm:p-4 bg-green-50 rounded-lg border border-green-200">
              <p className="text-green-600 text-xs sm:text-sm font-medium flex items-center justify-center gap-2">
                Your request has been submitted successfully!
              </p>
            </div>
          )}
        </form>
      </div>
    </section>
  );
}

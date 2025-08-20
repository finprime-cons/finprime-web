import React, { useState } from 'react';

const countryOptions = [
  'United Arab Emirates', 'India', 'United States', 'United Kingdom',
  'Saudi Arabia', 'Qatar', 'Kuwait', 'Oman', 'Bahrain', 'Other',
];

const uaeLocations = [
  'Abu Dhabi', 'Dubai', 'Sharjah', 'Ajman',
  'Umm Al Quwain', 'Ras Al Khaimah', 'Fujairah', 'Other',
];

const ConsultationModal = ({ show, onClose }) => {
  const [form, setForm] = useState({
    name: '', email: '', country: '', phone: '',
    query: '', location: '', soon: '', activity: '',
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Form submitted! (API integration coming soon)');
    onClose();
  };

  if (!show) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center bg-black bg-opacity-50 p-4 sm:p-6 overflow-y-auto pt-24 sm:pt-32">
  <div className="bg-white rounded-lg p-4 sm:p-6 w-full max-w-md shadow-lg relative mt-0 font-inter">

        <button
          className="absolute top-2 right-4 text-gray-500 hover:text-red-500 text-2xl"
          onClick={onClose}
        >
          &times;
        </button>

        <h2 className="mt-4 text-lg sm:text-xl font-bold mb-1 text-center">
          Book Your Free Consultation Call
        </h2>
        <p className="text-center text-gray-600 mb-4 text-xs sm:text-sm">
          Resolve queries around business setup in UAE and the Middle East
        </p>

        <form className="flex flex-col gap-3" onSubmit={handleSubmit}>
          <input
            className="border rounded px-3 py-2 text-sm"
            placeholder="Name"
            name="name"
            value={form.name}
            onChange={handleChange}
            required
          />
          <input
            className="border rounded px-3 py-2 text-sm"
            placeholder="Email *"
            name="email"
            type="email"
            value={form.email}
            onChange={handleChange}
            required
          />
          <select
            className="border rounded px-3 py-2 text-sm"
            name="country"
            value={form.country}
            onChange={handleChange}
            required
          >
            <option value="" disabled>Choose country</option>
            {countryOptions.map((country) => (
              <option key={country} value={country}>{country}</option>
            ))}
          </select>
          <input
            className="border rounded px-3 py-2 text-sm"
            placeholder="Phone"
            name="phone"
            type="tel"
            value={form.phone}
            onChange={handleChange}
            required
          />
          <input
            className="border rounded px-3 py-2 text-sm"
            placeholder="What are you looking for?"
            name="query"
            value={form.query}
            onChange={handleChange}
          />
          <select
            className="border rounded px-3 py-2 text-sm"
            name="location"
            value={form.location}
            onChange={handleChange}
          >
            <option value="" disabled>Business locations</option>
            {uaeLocations.map((loc) => (
              <option key={loc} value={loc}>{loc}</option>
            ))}
          </select>
          <input
            className="border rounded px-3 py-2 text-sm"
            placeholder="Business activity"
            name="activity"
            value={form.activity}
            onChange={handleChange}
          />

          <button
            type="submit"
            className="mt-4 bg-gradient-to-r from-[#1A1F39] to-[#06B6D4] text-white font-semibold py-2 px-6 text-sm rounded shadow-md hover:opacity-90 transition-all duration-300 w-full"
          >
            Book Your Free Consultation
          </button>
        </form>
      </div>
    </div>
  );
};

export default ConsultationModal;

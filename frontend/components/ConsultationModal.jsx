import React, { useState } from 'react';
import emailjs from 'emailjs-com';

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
    whatAreYouLookingFor: '', businessLocations: '', businessActivity: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitMessage('');

    try {
      // First try to submit to the backend API
      const response = await fetch('https://finprimeconsulting.com/api/submit-consultation-form', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(form),
      });

      const data = await response.json();

      if (response.ok) {
        setSubmitMessage('Form submitted successfully! We will contact you soon.');
        
        // Send email notification using EmailJS
        const templateParams = {
          name: form.name,
          email: form.email,
          country: form.country,
          phone: form.phone,
          whatAreYouLookingFor: form.whatAreYouLookingFor,
          businessLocations: form.businessLocations,
          businessActivity: form.businessActivity,
        };

        emailjs
          .send('service_m92dk5v', 'template_nhk2mx3', templateParams, '_zGtLeC1_fmp56KY0')
          .then(
            (emailResponse) => {
              console.log('Consultation form email sent successfully!');
              // Send auto-reply email
              const autoReplyParams = {
                to_name: form.name,
                to_email: form.email,
              };
              emailjs.send('service_m92dk5v', 'template_x05occf', autoReplyParams, '_zGtLeC1_fmp56KY0')
                .then(() => console.log('Auto-reply sent successfully!'))
                .catch((error) => console.error('Auto-reply failed:', error));
            },
            (emailError) => {
              console.error('EmailJS failed:', emailError);
            }
          );

        // Reset form
        setForm({
          name: '', email: '', country: '', phone: '',
          whatAreYouLookingFor: '', businessLocations: '', businessActivity: '',
        });
        
        setTimeout(() => {
          onClose();
          setSubmitMessage('');
        }, 2000);
      } else {
        throw new Error(data.message || 'Failed to submit form');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      
      // Fallback: Send email directly using EmailJS if backend fails
      try {
        const templateParams = {
          name: form.name,
          email: form.email,
          country: form.country,
          phone: form.phone,
          whatAreYouLookingFor: form.whatAreYouLookingFor,
          businessLocations: form.businessLocations,
          businessActivity: form.businessActivity,
        };

        await emailjs.send('service_m92dk5v', 'template_nhk2mx3', templateParams, '_zGtLeC1_fmp56KY0');
        
        // Send auto-reply
        const autoReplyParams = {
          to_name: form.name,
          to_email: form.email,
        };
        emailjs.send('service_m92dk5v', 'template_x05occf', autoReplyParams, '_zGtLeC1_fmp56KY0')
          .catch((error) => console.error('Auto-reply failed:', error));

        setSubmitMessage('Form submitted successfully via email! We will contact you soon.');
        
        // Reset form
        setForm({
          name: '', email: '', country: '', phone: '',
          whatAreYouLookingFor: '', businessLocations: '', businessActivity: '',
        });
        
        setTimeout(() => {
          onClose();
          setSubmitMessage('');
        }, 2000);
      } catch (emailError) {
        console.error('EmailJS fallback failed:', emailError);
        setSubmitMessage('Failed to submit form. Please check your connection and try again.');
      }
    } finally {
      setIsSubmitting(false);
    }
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
            name="whatAreYouLookingFor"
            value={form.whatAreYouLookingFor}
            onChange={handleChange}
          />
          <select
            className="border rounded px-3 py-2 text-sm"
            name="businessLocations"
            value={form.businessLocations}
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
            name="businessActivity"
            value={form.businessActivity}
            onChange={handleChange}
          />

          {submitMessage && (
            <div className={`text-sm p-2 rounded ${
              submitMessage.includes('successfully') 
                ? 'bg-green-100 text-green-800' 
                : 'bg-red-100 text-red-800'
            }`}>
              {submitMessage}
            </div>
          )}

          <button
            type="submit"
            disabled={isSubmitting}
            className={`mt-4 bg-gradient-to-r from-[#1A1F39] to-[#06B6D4] text-white font-semibold py-2 px-6 text-sm rounded shadow-md transition-all duration-300 w-full ${
              isSubmitting ? 'opacity-50 cursor-not-allowed' : 'hover:opacity-90'
            }`}
          >
            {isSubmitting ? 'Submitting...' : 'Book Your Free Consultation'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default ConsultationModal;

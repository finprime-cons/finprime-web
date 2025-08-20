import React from 'react';

const FreeConsultationForm = () => {
  return (
    <div className="pt-0 pb-10 sm:pt-2 md:pt-5 lg:pt-12 lg:pb-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-4">Get a Free Consultation</h2>
          <p className="text-gray-600 mb-6 sm:mb-8">
            Fill out the form below and one of our expert consultants will get back to you shortly.
          </p>
          <form className="bg-white p-5 sm:p-8 rounded-lg shadow-lg">
            <div className="mb-4">
              <label htmlFor="name" className="block text-gray-700 font-semibold mb-2 text-left">Name</label>
              <input type="text" id="name" name="name" className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500" />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block text-gray-700 font-semibold mb-2 text-left">Email</label>
              <input type="email" id="email" name="email" className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500" />
            </div>
            <div className="mb-4">
              <label htmlFor="message" className="block text-gray-700 font-semibold mb-2 text-left">Message</label>
              <textarea id="message" name="message" rows="4" className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500"></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-cyan-500 hover:bg-cyan-600 text-white font-bold py-3 px-4 rounded-lg transition-colors"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default FreeConsultationForm;

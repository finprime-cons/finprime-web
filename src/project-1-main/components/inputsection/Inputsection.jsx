import React, { useState } from 'react';
import emailjs from "emailjs-com";

const InputSection = () => {
  const [formData, setFormData] = useState({ name: '', email: '' });
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email) {
      alert('All fields are required');
      return;
    }
    setLoading(true);
    fetch('http://localhost:5002/api/send2email', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData),
    })
      .then((response) => response.json())
      .then((data) => {
        alert(data.message || 'Form submitted successfully!');
        setMessage(data.message);
        setFormData({ name: '', email: '' });

        const templateParams = {
          firstName: formData.name,
          email: formData.email,
        };

        emailjs
          .send('service_m92dk5v', 'template_nhk2mx3', templateParams, '_zGtLeC1_fmp56KY0')
          .then(() => {}, () => {});
      })
      .catch(() => {
        alert('Failed to submit the form.');
      })
      .finally(() => setLoading(false));
  };

  return (
    <div className="w-full flex flex-col md:flex-row justify-between  items-center gap-14 px-4 sm:px-8 md:px-12 lg:px-20 xl:px-32 py-10 xl:py-32 sm:py-14 mt-12 ">
      {/* Left: Form Section */}
      {/* Left: Form Section */}
<div className="w-full md:w-1/2 flex flex-col justify-center px-6 sm:px-0">
  <form onSubmit={handleSubmit} className="w-full max-w-xl flex flex-col">
    <h5 className="text-base sm:text-lg font-inter font-semibold mb-4 text-left">
      Be the first to know about the latest drops
    </h5>
    <input
      type="text"
      name="name"
      value={formData.name}
      onChange={handleChange}
      placeholder="Enter your name"
      className="w-full h-12 px-4 border border-black/25 rounded-sm focus:outline-none text-sm font-inter mb-3"
    />
    <input
      type="email"
      name="email"
      value={formData.email}
      onChange={handleChange}
      placeholder="Enter your email"
      className="w-full h-12 px-4 border border-black/25 rounded-sm focus:outline-none text-sm font-inter mb-3"
    />
    <div className="flex items-center mt-2 w-full justify-start">
      <span className="text-sm font-inter mr-2 font-bold">All about experience</span>
      <button
        type="submit"
        className="bg-blue-950 text-white px-4 py-1 rounded-full text-xs font-inter hover:bg-gradient-to-r hover:from-[#1A1F39] hover:to-[#06B6D4] transition-all duration-300"
        style={{ minWidth: '60px' }}
      >
        {loading ? "Sending..." : "Send"}
      </button>
    </div>
    {message && (
      <div className="mt-4 text-xs font-semibold font-inter text-left w-full">
        <p>{message}</p>
      </div>
    )}
  </form>
</div>


      {/* Right: Heading & Button */}
<div className="w-full md:w-1/2 flex flex-col justify-center items-start px-6 sm:px-0  ">
  <h4 className="text-xl sm:text-2xl  md:text-3xl lg:text-4xl font-inter font-semibold xl:leading-normal xl:fontweight-200 text-left mb-8">
    We Lead the AI Trend – Key Features<br />Supporting Accounting & Finance
  </h4>
  <button
  className="bg-gradient-to-r from-[#1A1F39] to-[#06B6D4] text-white font-inter font-normal
             text-[12px] sm:text-[13px] md:text-[14px] lg:text-[15px] xl:text-[14px]
             px-5 py-3 sm:px-6 sm:py-2.5 md:px-7 md:py-3
             xl:px-6 xl:py-3
             rounded-full text-center whitespace-nowrap"
>
  Grow Innovative Be on Top
</button>




</div>

    </div>
  );
};

export default InputSection;

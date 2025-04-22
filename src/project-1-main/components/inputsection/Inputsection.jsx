import React, { useEffect, useRef, useState } from 'react';
import axios from 'axios'; // Don't forget to import axios for the API call
import emailjs from "emailjs-com";

const InputSection = () => {
  const [hasFadedIn, setHasFadedIn] = useState(false);
  const fadeElementRef = useRef(null);

  useEffect(() => {
    const fadeInObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasFadedIn) {
            setHasFadedIn(true);
          }
        });
      },
      { threshold: 0.1 }
    );

    const currentElement = fadeElementRef.current;
    if (currentElement) {
      fadeInObserver.observe(currentElement);
    }

    return () => {
      if (currentElement) {
        fadeInObserver.unobserve(currentElement);
      }
    };
  }, [hasFadedIn]);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
});
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
                .then(
                    (response) => {
                        alert('Your enquiry has been submitted successfully!');
                    },
                    (error) => {
                        alert('Failed to send the enquiry email.');
                    }
                );
        })
        .catch((error) => {
            alert('Failed to submit the form.');
        })
        .finally(() => setLoading(false));
      };

  return (
    <div
      ref={fadeElementRef}
      className={`w-full sm:w-[70%] lg:w-full lg:max-w-3xl sm:mx-auto pl-6 pr-4 sm:pl-0 sm:pr-0 text-center mt-16 md:mt-28 md:px-8 mb-10 sm:mb-32 ${hasFadedIn ? 'animate-fadeinbottom' : ''}`}
    >
      <div className="mb-6">
        <h4 className="text-xl font-khula text-left sm:text-3xl lg:text-3xl font-semibold">
          Be the first to know about the latest drops
        </h4>
      </div>

      <form onSubmit={handleSubmit} className="mb-4">
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Enter your name"
          className="border border-black border-opacity-25 rounded-sm placeholder:font-raleway px-4 py-2 w-full sm:h-[60px] mb-4 focus:outline-none placeholder:text-xs md:placeholder:text-lg"
        />
        <br />
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Enter your email"
          className="border border-black border-opacity-25 rounded-sm mt-2 px-4 py-2 w-full sm:h-[60px] focus:outline-none placeholder:text-xs md:placeholder:text-lg placeholder:font-raleway"
        />
        <br />
        <br />
        
        <div className="mt-6 text-left">
          <h4 className="text-[10px] md:text-lg font-khula lg:text-lg mb-2">
            All about experience
            <button
              type="submit"
              className="bg-blue-950 ml-2 text-[8px] md:text-[12px] text-white px-2 rounded-full md:px-4 py-1 md:py-1 tracking-[1px]  duration-300 ease-out hover:bg-gradient-to-r hover:from-brandBlue hover:to-cyan-500 font-raleway sm:ml-5"
            >
              {loading ? "Sending..." : "Send"}
            </button>
          </h4>
        </div>
      </form>

      {message && (
        <div className="mt-4 text-lg font-semibold">
          <p>{message}</p>
        </div>
      )}
    </div>
  );
};

export default InputSection;
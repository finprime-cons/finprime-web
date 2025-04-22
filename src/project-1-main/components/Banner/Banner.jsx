import imag2 from '../../images/Navbar/logo-dark.png';
import './banner.css';
import React, { useState, useEffect } from 'react';
import { IoIosClose } from 'react-icons/io';
import MyImage from './images/banner.jpg'; 
import emailjs from "emailjs-com";

const Banner = () => {


  const [isSpeakExpert, setIsSpeakExpert] = useState(false);

 
  useEffect(() => {
    if (isSpeakExpert) {
      document.body.style.overflow = 'hidden'; 
    } else {
      document.body.style.overflow = ''; 
    }

    return () => {
      document.body.style.overflow = ''; 
    };
  }, [isSpeakExpert]);

 
  const toggleSpeakExpert = () => {
    setIsSpeakExpert(!isSpeakExpert);
  };


  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    mobile: '',
});
const [loading, setLoading] = useState(false);
const [message, setMessage] = useState('');

const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
};

const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.name || !formData.company || !formData.email || !formData.mobile) {
        alert('All fields are required');
        return;
    }

    setLoading(true);
    fetch('https://finprimeconsulting.com/api/sendemail', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
    })
        .then((response) => response.json())
        .then((data) => {
            alert(data.message || 'Form submitted successfully!');
            setMessage(data.message);
            setFormData({ name: '', company: '', email: '', mobile: '' });

            const templateParams = {
                companyName: formData.company,
                firstName: formData.name,
                email: formData.email,
                phone: formData.mobile,
            };

            emailjs
                .send('service_m92dk5v', 'template_nhk2mx3', templateParams, '_zGtLeC1_fmp56KY0')
                .then(
                  (response) => {
                    alert('Your enquiry has been submitted successfully!');

                    // Send the auto-reply email
                    const autoReplyParams = {
                        to_name: formData.name,
                        to_email: formData.email,
                    };
        
                    emailjs
                        .send('service_m92dk5v', 'template_x05occf', autoReplyParams, '_zGtLeC1_fmp56KY0')
                        .then(
                            (autoReplyResponse) => {
                                console.log('Auto-reply email sent successfully!');
                            },
                            (autoReplyError) => {
                                console.error('Failed to send the auto-reply email:', autoReplyError);
                            }
                        );
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
    <div className="">
      
      <div className="row first-row bg-brandBlue h-[600px] md:h-[500px] lg:h-[700px] flex flex-col md:flex-row justify-between items-center">
      <div className=" pt-8 sm:pt-0 text-left xl:pl-8 sm:pr-6 px-5 sm:px-0 md:pl-4 lg:pl-6 lg:w-[70%]">
  <h4 className='text-[22px] md:text-4xl xl:text-7xl text-white font-medium lg:font-bold mb-8'>
    We run all kinds of company Services that make your success
  </h4>
  <p className='mb-8 font-raleway text-sm sm:text-[16px] tracking-[1px] text-white leading-6 font-medium'>
    With a good reputation in UAE and synergy benefits from our Bahrain and India offices, we set the path for our clients with cross-country operations.
    A vibrant cross-functional and multidisciplinary team headed by a dynamic leadership consistently 
    ensures efficient results while a broad reach and expertise make us the preferred choice of SMEs and MNCs.
  </p>
  <button 
    onClick={toggleSpeakExpert} 
    className='text-xs md:text-[16px] md:pr-1 lg:pr-3 xl:pr-6 tracking-[1px] md:pt-1 lg:pt-4 pb-5 sm:pb-1 hover:text-black '>
    <span className='border px-4 py-2 sm:px-5 sm:py-3 transition-all duration-300 text-white ease-out
     hover:bg-gradient-to-r hover:from-brandBlue hover:to-cyan-500 cursor-pointer hover:text-white'>
      Let's talk now
    </span>
  </button>
  
</div>
        {isSpeakExpert && (
        <div
        className="fixed inset-0 w-screen h-[100vh] bg-black
         bg-opacity-60 z-50 flex justify-center items-center"
        onClick={toggleSpeakExpert} 
    >
        <div
            className="relative bg-brandBlue w-[600px] h-[400px] shadow-md p-6"
            onClick={(e) => e.stopPropagation()} 
            
        >
            <button
                className="absolute top-2 right-2 text-white font-bold"
                onClick={toggleSpeakExpert}
            >
                <IoIosClose size={28} className='hover:text-brandBlue transition-colors duration-500' />
            </button>
               <form onSubmit={handleSubmit}  className="space-y-4 z-50">
                <div className="w-[90%] mx-auto">
                    <h5 className='text-white font-khula text-2xl sm:text-4xl font-semibold py-6'>Speak to an Expert </h5>
                    <div className="grid grid-cols-2 gap-6 pt-8">
                    <input
                           type="text"
                           name="name"
                           value={formData.name}
                           onChange={handleChange}
                           placeholder="Name"
                            className="w-full bg-transparent border-b-2
                             border-white font-raleway focus:outline-none
                              focus:border-brandBlue text-white
                              placeholder:text-gray-600 font-semibold
                              text-sm transition-colors placeholder:font-raleway
                              duration-300 ease-in-out"
                        />

                        <input
                            type="text"
                            name="company"
                            value={formData.company}
                            onChange={handleChange}
                            placeholder="Company"
                            className="w-full bg-transparent border-b-2
                             border-white focus:outline-none placeholder:font-raleway
                              text-white
                              placeholder:text-gray-600 font-semibold
                              text-sm focus:border-brandBlue transition-colors"
                        />
                    </div>
                    <div className="grid grid-cols-2 gap-6 pt-8">
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="e-mail"
                            className="w-full bg-transparent border-b-2
                             text-white placeholder:font-raleway
                              placeholder:text-gray-600 font-semibold
                              text-sm border-white focus:outline-none focus:border-brandBlue transition-colors"
                        />
                        <input
                             type="text"
                             name="mobile"
                             value={formData.mobile}
                             onChange={handleChange}
                             placeholder="Mobile"
                            className="w-full bg-transparent border-b-2
                             border-white focus:outline-none text-white
                              placeholder:text-gray-600 font-semibold
                              text-sm  placeholder:font-raleway
                              focus:border-brandBlue transition-colors"
                        />
                    <label htmlFor="privacy-policy" className="ml-1 block text-xs
                    text-gray-300 font-raleway">
                        I agree to the Privacy Policy <span className='text-red-900 font-raleway underline'>required</span>
                    </label>
                    </div>
                    <div className="mt-4">
                    <button
                        type="submit"
                        disabled={loading}
                        className="bg-transparent border border-white
                         text-white py-2 px-16 text-sm font-raleway
                          transition-colors duration-300 hover:bg-black
                           hover:text-white"
                    >
                      {loading ? "Sending..." : "Send"}
                    </button>
                    </div>
                    {message && <p className="mt-4 text-center text-white font-raleway">{message}</p>}
                </div>
            </form>
        </div>
    </div>
      )}
      </div>

  
      <div className="row second-row flex mb-36 lg:mb-0 h-[250px] md:h-[400px] flex-col lg:flex-row items-center justify-between  px-4 md:px-8  ">
        <div className="left-svg pb-6 sm:pb-40 lg:pb-20 lg:pl-5 xl:pl-28">
          <img src={imag2} alt="Finprime Business & Tax Consultancy" className='h-20 sm:h-36 lg:h-48' />
        </div>
        <div className="relative middle-section sm:bottom-20 px-5 sm:px-0 md:bottom-28 md:right-0 lg:right-5 xl:right-24 ">
          <img src={MyImage} alt="Finprime Business & Tax Consultancy Team" className="center-image h-[220px] md:h-[280px] lg:h-[350px] xl:h-[450px] md:w-[500px] lg:w-full object-cover
           " />
        </div>
      </div>
    </div>
  );
}

export default Banner;




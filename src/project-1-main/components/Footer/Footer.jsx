
import React, { useEffect, useState } from 'react';
import img from '../../images/Navbar/finprime-logo.svg';
import companyProfileImage from '../../images/company/company-profile.jpg'
import { HiOutlineArrowSmallLeft, HiOutlineArrowSmallRight } from "react-icons/hi2";
import axios from 'axios';

import { FaFacebookF, FaXTwitter, FaYoutube } from "react-icons/fa6";
import { RiLinkedinFill } from "react-icons/ri";
import { FaInstagramSquare } from "react-icons/fa";
import { Link } from 'react-router-dom';
import comapanyProfilePdf from '../../pdf/finprime comapny profile final.pdf'

const Footer = () => {









  const [currentTestimonialIndex, setCurrentTestimonialIndex] = useState(0);
  const handlePrev = () => {
    setCurrentTestimonialIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentTestimonialIndex((prevIndex) =>
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  const [testimonials, setTestimonials] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTestimonials = async () => {
      try {
        const response = await axios.get('https://finprimeconsulting.com/api/testimonials');
        const sortedTestimonials = response.data.sort((a, b) => new Date(b.created_at) - new Date(a.created_at));
        setTestimonials(sortedTestimonials);
      } catch (err) {
        setError('Error fetching testimonials. Please try again later.');
        console.error('Error fetching testimonials:', err);
      } finally {
        setLoading(false);
      }
    };
    fetchTestimonials();
  }, []);


  return (
    <div
      className='pt-10 pl-6 pr-4 text-white bg-black xl:pl-12 xl:pr-10 lg:pl-10 lg:pr-8 md:pl-8 md:pr-6 sm:pt-10 '>
      <div className={`  `} >














        {/* -------------------------------------------------------header---------------------------------------------------------*/}
        <div className="flex flex-col w-full pb-1 sm:flex-row sm:pb-5">
          <div className="w-full sm:w-1/2 sm:px-0 sm:p-4">
            <h4 className="pt-8 pb-8 text-3xl font-semibold text-center font-khula sm:text-left sm:text-4xl sm:pb-0">
              Finprime Consulting
            </h4>
          </div>
          <div className="flex justify-center w-full py-4 sm:w-1/2 sm:justify-end">
            <img src={img} alt="Fin Frame Logo" className='w-[250px] md:w-[300px]' />
          </div>
        </div>
        <hr className="border-t border-gray-900" />












        {/* -------------------------------------------------------client section---------------------------------------------------------*/}
        <div className="flex flex-col w-full pt-4 pb-4 lg:flex-row p-[20px] xl:p-[68px]">
          <div
            className="download_company_profile"
            style={{
              height: '300px',
              position: 'relative',
              backgroundColor: 'white',
            }}
          >
            <img
              src={companyProfileImage}
              alt="Company Profile"
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
              }}
            />

            <button
              className="pl-4 pr-4 rounded-sm shadow-md text-[16px] tracking-[1px] transition-all duration-300 ease-out bg-gradient-to-r from-brandBlue to-cyan-500 text-white"
              style={{
                position: 'absolute',
                bottom: '25px',
                left: '50%',
                transform: 'translateX(-50%)',
                width: '70%',
                height: '45px',
                border: '6px solid grey',
              }}

              onClick={() => {
                window.open(comapanyProfilePdf, '_blank');
              }}
            >
              Download Company profile
            </button>
          </div>

          <div className="flex items-center w-full py-4 lg:w-2/3 lg:ml-10 lg:p-4">
            {loading ? (
              <p className="text-center">Loading testimonials...</p>
            ) : error ? (
              <p className="text-center text-red-500">{error}</p>
            ) : testimonials.length === 0 ? (
              <p className="text-center">No testimonials available.</p>
            ) : (
              <div className="w-full">
                {/* Display only the current testimonial */}
                <div key={testimonials[currentTestimonialIndex].id} className="xl:pl-4 lg:pl-6">
                  <h4 className="font-semibold text-lg lg:text-[22px] pb-6 font-khula lg:pb-6">
                    Client Say
                  </h4>
                  <div className="lg:flex ">
                    <img
                      src={`https://finprimeconsulting.com/${testimonials[currentTestimonialIndex].image_path}`}
                      alt={testimonials[currentTestimonialIndex].author_name}
                      className="object-cover object-top w-20 h-20 mx-auto rounded-full lg:mx-0"
                    />
                    <p className="mt-3 font-raleway font-medium pl-5 pr-6 lg:pr-20 text-sm leading-[24px] lg:text-[16px]">
                      {testimonials[currentTestimonialIndex].content}
                    </p>
                  </div>
                  {/* User's bottom name and position */}
                  <div className="items-center mt-6 lg:flex lg:justify-between">
                    <div className="flex items-center space-x-2">
                      <p className="font-semibold w-1/2 text-[16px]">{testimonials[currentTestimonialIndex].author_name}</p>
                      <p className="text-[14px] text-gray-500">{testimonials[currentTestimonialIndex].topic}</p>
                    </div>
                    {/* Navigation icons */}
                    <div className="flex items-center justify-center mt-5 mr-5 space-x-4 lg:mt-0">
                      <button
                        className="p-2 text-white rounded-full bg-brandBlue hover:bg-cyan-500 hover:text-black"
                        onClick={handlePrev}
                      >
                        <HiOutlineArrowSmallLeft className="text-xl" />
                      </button>
                      <button
                        className="p-2 text-white rounded-full bg-brandBlue hover:bg-cyan-500 hover:text-black"
                        onClick={handleNext}
                      >
                        <HiOutlineArrowSmallRight className="text-xl" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
        <hr className="border-t border-gray-900" />
















        {/* -------------------------------------------------------links and address---------------------------------------------------------*/}
        <div className="flex flex-col w-full pt-4 pb-6 sm:flex-row">
          <div className="w-full py-4 sm:w-1/3">
            <h4 className='pb-5 text-lg font-semibold lg:text-xl font-khula sm:pb-4'>Quick Links</h4>
            <ul className='mt-2 space-y-2 text-sm lg:text-md font-raleway sm:space-y-4'>
              <li > <Link to='/' className='pb-2 text-white font-raleway hover:text-cyan-500 hover-underline-animation1'> Home</Link></li>
              <li > <Link to='/about' className='pb-2 text-white font-raleway hover:text-cyan-500 hover-underline-animation1'> About</Link></li>
              <li > <Link to='/#footerservices' className='pb-2 text-white font-raleway hover:text-cyan-500 hover-underline-animation1'> Services</Link></li>
              <li > <Link to='/blog' className='pb-2 text-white font-raleway hover:text-cyan-500 hover-underline-animation1'> Blogs</Link></li>
              <li > <Link to='/contactus' className='pb-2 text-white font-raleway hover:text-cyan-500 hover-underline-animation1'> Contact Us</Link></li>
            </ul>
          </div>
          <div className="w-full py-4 sm:w-1/3 sm:p-4">
            <h4 className='pb-5 text-lg font-semibold lg:text-xl font-khula sm:pb-4'>Services We Provide</h4>
            <ul className='mt-2 space-y-2 text-sm lg:text-md sm:space-y-4'>
              <li > <Link to='/#footerservices' className='pb-2 text-white font-raleway hover:text-cyan-500 hover-underline-animation1'> Accounting and Financial Reporting</Link></li>
              <li > <Link to='/#footerservices' className='pb-2 text-white font-raleway hover:text-cyan-500 hover-underline-animation1'> Audit and Assurance</Link></li>
              <li > <Link to='/#footerservices' className='pb-2 text-white font-raleway hover:text-cyan-500 hover-underline-animation1'> Business Advisory</Link></li>
              <li > <Link to='/#footerservices' className='pb-2 text-white font-raleway hover:text-cyan-500 hover-underline-animation1'> Taxation</Link></li>
              <li > <Link to='/#footerservices' className='pb-2 text-white font-raleway hover:text-cyan-500 hover-underline-animation1'> Transaction Advisory</Link></li>
              <li > <Link to='/#footerservices' className='pb-2 text-white font-raleway hover:text-cyan-500 hover-underline-animation1'> Receivable Management</Link></li>
            </ul>
          </div>
          <div className="w-full py-4 sm:w-1/3 sm:p-4">
            <h4 className='pb-5 text-lg font-semibold lg:text-xl font-khula sm:pb-4'>Company Address</h4>
            <ul className='mt-2 space-y-2 text-sm lg:text-md sm:space-y-4'>
              <li className='font-raleway'>Suite 1203, Floor 12A, DAMAC Executive Bay, Business Bay, Dubai, UAE</li>
              <li className='font-raleway'>Phone: +971 58 259 3543</li>
              <li className='font-raleway '>Email: info@finprimeconsulting.com</li>
              <li className='flex pt-5 mt-2 space-x-3'>
                <div className="flex space-x-1 lg:space-x-2 bg-white bg-opacity-55 rounded-[5px] border border-opacity-20 p-1 lg:p-3 mb-[24px] sm:mb-0 ">
                  <button className=" hidden xl:block  pl-4 pr-4 rounded-sm   shadow-black  text-[16px] tracking-[1px]
            transition-all duration-300 ease-out bg-gradient-to-r from-brandBlue to-cyan-500 text-white">Follow</button>
                  <a href="https://www.facebook.com/finprimeconsulting" aria-label="Facebook" className="p-2 text-black transition-all duration-300 ease-out bg-white rounded-full shadow-black hover:bg-gradient-to-r hover:border-opacity-10 hover:from-brandBlue hover:to-cyan-500 hover:text-white">
                    <FaFacebookF size={20} />
                  </a>
                  <a href="https://x.com/FinPrimeConsult" aria-label="Twitter" className="p-2 text-black transition-all duration-300 ease-out bg-white rounded-full shadow-black hover:bg-gradient-to-r hover:from-brandBlue hover:border-opacity-10 hover:to-cyan-500 hover:text-white ">
                    <FaXTwitter size={20} />
                  </a>
                  <a href="https://www.linkedin.com/company/finprimeconsulting/" aria-label="LinkedIn" className="p-2 text-black transition-all duration-300 ease-out bg-white rounded-full shadow-black hover:bg-gradient-to-r hover:from-brandBlue hover:to-cyan-500 hover:border-opacity-10 hover:text-white ">
                    <RiLinkedinFill size={20} />
                  </a>
                  <a href="https://www.instagram.com/finprimeconsulting/" aria-label="WhatsApp" className="p-2 text-black transition-all duration-300 ease-out bg-white rounded-full shadow-black hover:bg-gradient-to-r hover:from-brandBlue hover:to-cyan-500 hover:text-white hover:border-opacity-10">
                    <FaInstagramSquare size={20} />
                  </a>
                  <a href="https://www.youtube.com/@FinPrimeConsulting" aria-label="WhatsApp" className="p-2 text-black transition-all duration-300 ease-out bg-white rounded-full shadow-black hover:bg-gradient-to-r hover:from-brandBlue hover:to-cyan-500 hover:text-white hover:border-opacity-10">
                    <FaYoutube size={20} />

                  </a>

                </div >

              </li>
            </ul>
          </div>
        </div>
        <hr className="border-t border-gray-900" />
      </div>
    </div >
  );
}

export default Footer;
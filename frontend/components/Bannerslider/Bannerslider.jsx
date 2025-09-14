import React, { useState, useEffect } from 'react';
import { FaFacebookF, FaXTwitter, FaYoutube } from "react-icons/fa6";
import { RiLinkedinFill } from "react-icons/ri";
import { FaInstagramSquare } from "react-icons/fa";
// import { IoIosClose } from 'react-icons/io';
import { HiOutlineArrowSmallLeft } from "react-icons/hi2";
import { HiOutlineArrowSmallRight } from "react-icons/hi2";
import Audit_and_Assurance from '../../video/Audit_and_Assurancee.mp4';
import Company_formation_Business_Consultancy from '../../video/Company_formation_Business_Consultancy.mp4';
import HR_Consulting_Advisory from '../../video/HR_Consulting_Advisory.mp4';
import Regulatory_and_Compliance from '../../video/Regulatory_and_Compliance.mp4';
import Taxation from '../../video/Taxation.mp4';
import Accounting_Finance from '../../video/Accounting_Finance.mp4';
import auditAssuranceImage from '../../images/servicecard/audit and assurence.jpg';
import { Services } from '../Services';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import groupedLogo from '../../images/image 20.png';


const Bannerslider = () => {
  // Find the index of the 'taxation' service
  const taxationIndex = Services.findIndex(service => service.title === 'taxation');
  const [currentSlide, setCurrentSlide] = useState(taxationIndex !== -1 ? taxationIndex : 0);

  // Array of video sources
  const videos = [Audit_and_Assurance, Accounting_Finance, Taxation, Regulatory_and_Compliance, Company_formation_Business_Consultancy, HR_Consulting_Advisory];

  const CurrentTitle = Services[currentSlide];
  const CurrentSubtitles = CurrentTitle.subtitles || [];

  // Generate the read more URL
  const readMoreUrl = CurrentSubtitles[0]?.keyword 
    ? `/services/${CurrentTitle.title}/${CurrentSubtitles[0].keyword}`
    : `/services/${CurrentTitle.title}`;

  const handleReadMoreClick = () => {
    console.log('Read More clicked!');
    console.log('CurrentTitle:', CurrentTitle);
    console.log('CurrentSubtitles:', CurrentSubtitles);
    console.log('URL:', readMoreUrl);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide(prevSlide => (prevSlide + 1) % videos.length);
    }, 14000); // Change slide every 14 seconds

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, [videos.length]);

  const handlePrevSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide === 0 ? videos.length - 1 : prevSlide - 1));
  };

  const handleNextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % videos.length);
  };

  const handleSlideChange = (index) => {
    setCurrentSlide(index);
  };

  return (
    <div className='relative w-full h-screen hero-ban-fin '>
      {/* Decorative element, now hidden on smaller screens */}
      {/* <div className='hidden lg:block absolute w-[200px] h-[550px] left-0 top-1/2 -translate-y-1/2 bg-[#06b6d4] rounded-r-3xl'></div> */}

      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        className="relative w-full h-full overflow-hidden"
      >
        {videos.map((video, index) => (
          <SwiperSlide key={index}>
            <div className="relative w-full h-full">
              {/* Background Image Fallback */}
              <div 
                className="absolute top-0 left-0 w-full h-full object-cover pointer-events-none z-[-2]"
                style={{
                  backgroundImage: `url(${auditAssuranceImage})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  backgroundRepeat: 'no-repeat'
                }}
              ></div>
              
              {/* Background Video */}
              <video
                autoPlay
                loop
                muted
                playsInline
                className="absolute top-0 left-0 w-full h-full object-cover pointer-events-none z-[-1] "
              >
                <source src={video} type="video/mp4" />
              </video>
              {/* <div className='relative w-full h-screen hero-ban-fin bg-black'> */}


              {/* Banner Content */}
              <div className="absolute top-0 left-0 flex flex-col items-center justify-center w-full h-full p-4 text-white md:p-0">
                <div className="w-full md:absolute md:left-0 md:justify-center md:pl-6 md:mt-52 lg:pl-10 xl:pl-12 md:pl-8">
                  {/* Banner Text for International Taxation */}
                  {CurrentTitle.title === 'taxation' && CurrentSubtitles[0]?.subid === 2 ? (
                    <div className="mb-6 text-left">
                      <div
                        style={{
                          fontFamily: 'Inter, sans-serif',
                          fontWeight: 400,
                          color: '#fff',
                          fontSize: '28px',
                          marginBottom: '0.5rem',
                          lineHeight: 1.2
                        }}
                      >
                        {CurrentSubtitles[0]?.headsubtitle}
                      </div>
                      <div
                        style={{
                          fontFamily: 'Inter, sans-serif',
                          fontWeight: 400,
                          color: '#fff',
                          fontSize: '36px',
                          marginBottom: '1rem',
                          lineHeight: 1.2
                        }}
                      >
                        {CurrentSubtitles[0]?.subtitle}
                      </div>
                      <div
                        style={{
                          fontFamily: 'Inter, sans-serif',
                          fontWeight: 400,
                          color: '#fff',
                          fontSize: '18px',
                          lineHeight: 1.5
                        }}
                      >
                        {CurrentSubtitles[0]?.subcontent}
                      </div>
                    </div>
                  ) : (
                    <>
                      <h2
                     className="text-3xl md:text-4xl lg:text-5xl xl:text-3xl text-white font-normal m-0"
                   style={{ fontFamily: 'Inter, sans-serif' }}
                    >
                  {CurrentTitle.headtitle}
                   </h2>
                      <span
                        className="text-3xl md:text-4xl lg:text-5xl "
                        style={{ fontFamily: 'Inter, sans-serif', fontWeight: 400, color: '#FFFFFF', display: 'block', marginTop: '8px', marginLeft: 0 }}
                      >
                        {CurrentSubtitles[0]?.headsubtitle}
                      </span>
                    </>
                  )}
                  {/* Read more with vertical lines - its own row */}
                  <div className="flex items-center mt-6 mb-8 relative z-10">
                    <span style={{ height: '33px', width: '1px', background: '#008EAA', display: 'inline-block', marginRight: '16px' }}></span>
                    <Link
                      to={readMoreUrl}
                      onClick={handleReadMoreClick}
                      className="cursor-pointer hover:text-cyan-300 transition-colors duration-300 relative z-20"
                      style={{ 
                        fontFamily: 'Inter, sans-serif', 
                        fontWeight: 400, 
                        fontSize: '20px', 
                        lineHeight: '100%', 
                        color: '#FFFFFF', 
                        letterSpacing: '0', 
                        textDecoration: 'none',
                        position: 'relative',
                        zIndex: 20
                      }}
                    >
                      Read more
                    </Link>
                    <span style={{ height: '33px', width: '1px', background: '#008EAA', display: 'inline-block', marginLeft: '16px' }}></span>
                  </div>
                  {/* Controls Row: Arrows, Button, Logos - separate row below Read more */}
                  <div className='flex flex-wrap items-center gap-4'>
                    <button
                      onClick={handlePrevSlide}
                      className="px-2 py-2 text-4xl text-black transition-all duration-300 ease-in-out bg-white rounded-full hover:bg-gradient-to-r hover:from-brandBlue hover:to-cyan-500 hover:bg-opacity-40 hover:text-white"
                    >
                      <HiOutlineArrowSmallLeft className="text-lg" />
                    </button>
                    <button
                      onClick={handleNextSlide}
                      className="px-2 py-2 text-4xl text-black transition-all duration-300 ease-in-out bg-white rounded-full hover:bg-gradient-to-r hover:from-brandBlue hover:to-cyan-500 hover:bg-opacity-40 hover:text-white"
                    >
                      <HiOutlineArrowSmallRight className="text-lg" />
                    </button>
                    <Link
                      to={`/form2/$${CurrentTitle.id}/${CurrentSubtitles[0]?.subid}`}
                      className='text-center sm:text-left cursor-pointer text-[15px] bg-brandBlue sm:text-[16px] sm:tracking-[2px] tracking-[1px] text-white border border-cyan-700 rounded-[5px] transition-all duration-300 ease-out hover:bg-gradient-to-r hover:from-brandBlue hover:to-cyan-500 py-3 px-5 md:ml-2'>
                      <p>Make an Appointment</p>
                    </Link>
                    {/* Grouped Logo with Two Clickable Areas */}
                    <div className="relative inline-block">
                      <img
                        src={groupedLogo}
                        alt="Trustpilot and Google Reviews"
                        className="h-10 md:h-12 object-contain md:ml-26"
                      />
                      
                      {/* Trustpilot Clickable Area (Left half) */}
                      <a
                        href="https://www.trustpilot.com/review/www.finprimeconsulting.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="absolute top-0 left-0 w-1/2 h-full cursor-pointer"
                        title="Trustpilot Reviews"
                      ></a>
                      
                      {/* Google Reviews Clickable Area (Right half) */}
                      <a
                        href="https://g.page/r/CegLElJfYPR0EAI/review"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="absolute top-0 right-0 w-1/2 h-full cursor-pointer"
                        title="Google Reviews"
                      ></a>
                    </div>
                    <div className="hidden md:flex items-center h-14 bg-white bg-opacity-55 border border-opacity-20 px-4 space-x-2 ml-auto mr-4 rounded-md">
  <button className="px-3 py-1 rounded shadow text-[15px] tracking-[1px] bg-gradient-to-r from-brandBlue to-cyan-500 text-white">Follow</button>
  <div className="flex space-x-2">
    <a href="https://www.facebook.com/finprimeconsulting" aria-label="Facebook" className="p-2 text-black transition-all duration-300 ease-out bg-white rounded-full shadow-black hover:bg-gradient-to-r hover:border-opacity-10 hover:from-brandBlue hover:to-cyan-500 hover:text-white">
      <FaFacebookF size={20} />
    </a>
    <a href="https://x.com/FinPrimeConsult" aria-label="Twitter" className="p-2 text-black transition-all duration-300 ease-out bg-white rounded-full shadow-black hover:bg-gradient-to-r hover:from-brandBlue hover:border-opacity-10 hover:to-cyan-500 hover:text-white ">
      <FaXTwitter size={20} />
    </a>
    <a href="https://www.linkedin.com/company/finprimeconsulting/" aria-label="LinkedIn" className="p-2 text-black transition-all duration-300 ease-out bg-white rounded-full shadow-black hover:bg-gradient-to-r hover:from-brandBlue hover:border-opacity-10 hover:to-cyan-500 hover:text-white ">
      <RiLinkedinFill size={20} />
    </a>
    <a href="https://www.instagram.com/finprimeconsulting/" aria-label="Instagram" className="p-2 text-black transition-all duration-300 ease-out bg-white rounded-full shadow-black hover:bg-gradient-to-r hover:from-brandBlue hover:to-cyan-500 hover:text-white hover:border-opacity-10">
      <FaInstagramSquare size={20} />
    </a>
    <a href="https://www.youtube.com/@FinPrimeConsulting" aria-label="YouTube" className="p-2 text-black transition-all duration-300 ease-out bg-white rounded-full shadow-black hover:bg-gradient-to-r hover:from-brandBlue hover:to-cyan-500 hover:text-white hover:border-opacity-10">
      <FaYoutube size={20} />
    </a>
  </div>    
</div>

                  </div>
                </div>

                {/* Slider Controls */}
                <div className="flex justify-center gap-4 mt-4">
                  {videos.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => handleSlideChange(index)}
                      className={` ${currentSlide === index ? '' : ''} `}
                    />
                  ))}
                </div>

                {/* Paragraph at the bottom */}
<div className=" hidden sm:block absolute bottom-0 w-full text-center">
  <div className="flex flex-col md:flex-row text-white  text-[10px] sm:text-xs md:text-[16px] tracking-[1px] uppercase">
    <button className="flex-1 p-2 text-center bg-[#1A233A] transition-all duration-300 md:p-4 hover:bg-gradient-to-r from-[#06B6D4] to-[#1A233A]">
      Giving smartness to your business accounting 
    </button>
    <button className="flex-1 p-2 text-center bg-[#1A233A] transition-all duration-300 border-t md:border-t-0 md:border-l md:border-r border-gray-600 md:p-4 hover:bg-gradient-to-r from-[#06B6D4] to-[#1A233A]">
      Best Accounting Companies
    </button>
    <button className="flex-1 p-2 text-center bg-[#1A233A] transition-all duration-300 md:p-4 hover:bg-gradient-to-r from-[#06B6D4] to-[#1A233A]">
      Corporate Tax Services
    </button>
  </div>
</div>

              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Bannerslider;

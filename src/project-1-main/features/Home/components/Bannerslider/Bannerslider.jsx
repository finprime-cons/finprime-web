import React, { useState, useEffect } from "react";
import { FaFacebookF, FaXTwitter, FaYoutube } from "react-icons/fa6";
import { RiLinkedinFill } from "react-icons/ri";
import { FaInstagramSquare } from "react-icons/fa";
// import { IoIosClose } from 'react-icons/io';
import { HiOutlineArrowSmallLeft } from "react-icons/hi2";
import { HiOutlineArrowSmallRight } from "react-icons/hi2";
import Audit_and_Assurance from "../../../../assets/video/banner_slider/Audit_and_Assurance.mp4";
import Company_formation_Business_Consultancy from "../../../../assets/video/banner_slider/Company_formation_Business_Consultancy.mp4";
import HR_Consulting_Advisory from "../../../../assets/video/banner_slider/HR_Consulting_Advisory.mp4";
import Regulatory_and_Compliance from "../../../../assets/video/banner_slider/Regulatory_and_Compliance.mp4";
import Taxation from "../../../../assets/video/banner_slider/Taxation.mp4";
import Accounting_Finance from "../../../../assets/video/banner_slider/Accounting_Finance.mp4";
import { Services } from "../../../../constants/data/services/ServicesData";
import { Link } from "react-router-dom";

const Bannerslider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [currentSubtitleIndex, setCurrentSubtitleIndex] = useState(0);

  // Array of video sources
  const videos = [
    Audit_and_Assurance,
    Accounting_Finance,
    Taxation,
    Regulatory_and_Compliance,
    Company_formation_Business_Consultancy,
    HR_Consulting_Advisory,
  ];

  const CurrentTitle = Services[currentSlide];
  const CurrentSubtitles = CurrentTitle.subtitles || [];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % videos.length);
      setCurrentSubtitleIndex(0); // Auto-slide for 6 videos
    }, 14000); // Change slide every 10 seconds

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, [videos.length]);

  useEffect(() => {
    // Change subtitle every 10 seconds
    const subtitleInterval = setInterval(() => {
      if (currentSubtitleIndex < CurrentSubtitles.length - 1) {
        setCurrentSubtitleIndex((prevIndex) => prevIndex + 1); // Move to next subtitle
      }
    }, 2000);

    return () => clearInterval(subtitleInterval); // Cleanup subtitle interval
  }, [currentSubtitleIndex, CurrentSubtitles.length]);

  const handlePrevSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === 0 ? videos.length - 1 : prevSlide - 1
    ); // Go to previous slide
    setCurrentSubtitleIndex(0); // Reset subtitle index to 0 when changing slide
  };

  const handleNextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % videos.length); // Go to next slide
    setCurrentSubtitleIndex(0); // Reset subtitle index to 0 when changing slide
  };

  //   const [isSpeakExpert, setIsSpeakExpert] = useState(false);

  //   const toggleSpeakExpert = () => {
  //     setIsSpeakExpert(!isSpeakExpert);
  // };

  //   useEffect(() => {
  //     if (isSpeakExpert) {
  //         document.body.style.overflow = 'hidden';
  //     } else {
  //         document.body.style.overflow = '';
  //     }
  //     return () => {
  //         document.body.style.overflow = '';
  //     };
  // }, [isSpeakExpert]);

  // const [selectedService, setSelectedService] = useState("");  // State for selected service
  // const [selectedSubtitle, setSelectedSubtitle] = useState(""); // State for selected subtitle
  // const [selectedIndexOpen, setSelectedIndexOpen] = useState(null); // Index of the selected service

  // const handleServiceChange = (e) => {
  //   const serviceTitle = e.target.value;
  //   setSelectedService(serviceTitle);

  //   // Find the index of the selected service from the Services array
  //   const selectedServiceIndex = Services.findIndex(service => service.title === serviceTitle);
  //   setSelectedIndexOpen(selectedServiceIndex);
  //   setSelectedSubtitle("");  // Reset subtitle when service changes
  // };

  // const handleSubtitleChange = (e) => {
  //   setSelectedSubtitle(e.target.value);
  // };

  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Background Video */}
      <video
        key={currentSlide} // This will force React to reload the video each time the slide changes
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover pointer-events-none z-[-1] "
      >
        <source src={videos[currentSlide]} type="video/mp4" />
      </video>
      <div className="absolute top-0 left-0 w-full h-full bg-black opacity-40 " />

      {/* Banner Content */}
      <div className="absolute top-0 left-0 flex flex-col items-center justify-center w-full h-full text-white ">
        <div className="absolute left-0 justify-center pl-6 mt-52 lg:pl-10 xl:pl-12 md:pl-8">
          <h3
            className="sm:ml-20 w-50%  text-left text-[26px] leading-7 sm:leading-none font-khula lg:text-4xl  xl:text-5xl text-white 
              font-semibold mb-3 
              z-20 duration-100  pr-6 "
          >
            {CurrentTitle.headtitle}
          </h3>
          <div className="z-20 flex sm:ml-20">
            <Link
              state={{
                service_id: CurrentTitle.id,
                subtitles_id: CurrentSubtitles[currentSubtitleIndex]?.subid,
              }}
              to={`/services/${CurrentTitle.title.replace(
                /\s+/g,
                "-"
              )}/${CurrentSubtitles[currentSubtitleIndex]?.keyword.replace(
                /\s+/g,
                "-"
              )}`}
              className="font-raleway cursor-pointer leading-6 text-left font-medium  text-lg sm:text-lg lg:text-[24px] tracking-[2px] text-white"
            >
              <span className="relative inline-block pr-10">
                {/* Loader with the gradient line */}
                <span className="hidden sm:block absolute inset-0 w-full h-[1px] bg-gradient-to-r from-brandBlue to-cyan-500 top-1/2 -translate-y-1/2 "></span>

                {/* Text with higher z-index to be above the loader */}
                <span className="relative z-20 loader ">
                  {CurrentSubtitles[currentSubtitleIndex]?.headsubtitle}
                </span>
              </span>
            </Link>
          </div>
          <div>
            <div className="flex mt-36">
              <div>
                <button
                  onClick={handlePrevSlide}
                  className="px-2 py-2 mr-2 text-4xl text-black transition-all duration-300 ease-in-out bg-white rounded-full sm:px-3 sm:py-3 sm:mr-2 hover:bg-gradient-to-r hover:from-brandBlue hover:to-cyan-500 hover:bg-opacity-40 hover:text-white"
                >
                  <HiOutlineArrowSmallLeft className="text-lg" />
                </button>
                <button
                  onClick={handleNextSlide}
                  className="px-2 py-2 mr-2 text-4xl text-black transition-all duration-300 ease-in-out bg-white rounded-full sm:px-3 sm:py-3 sm:mr-2 hover:bg-gradient-to-r hover:from-brandBlue hover:to-cyan-500 hover:bg-opacity-40 hover:text-white"
                >
                  <HiOutlineArrowSmallRight className="text-lg" />
                </button>
              </div>
              <Link
                to={`/form2/$${CurrentTitle.id}/${CurrentSubtitles[currentSubtitleIndex]?.subid}`}
                // onClick={toggleSpeakExpert}
                className="text-center sm:text-left   cursor-pointer text-[15px] bg-brandBlue sm:text-[16px] sm:tracking-[2px] tracking-[1px] text-white border border-cyan-700 rounded-[5px]
             transition-all duration-300 ease-out hover:bg-gradient-to-r hover:from-brandBlue hover:to-cyan-500 
           mb-10 sm:mb-20 sm:py-3 px-3 py-2 sm:px-5 sm:ml-2"
              >
                <p>Make an Appointment</p>
              </Link>
              {/* {isSpeakExpert && (
                                    <div
                                        className="fixed inset-0 w-screen h-[100vh] bg-black
                                         bg-opacity-60 z-50 flex justify-center items-center"
                                        onClick={toggleSpeakExpert} 
                                    >
                                        <div
                                            className="relative bg-brandBlue mx-6 mt-8 sm:mt-16 md:mt-0 md:mx-0 w-[600px] h-[500px] md:h-[400px] shadow-md p-6"
                                            onClick={(e) => e.stopPropagation()} 
                                            
                                        >
                                            <button
                                                className="absolute font-bold text-white top-2 right-2"
                                                onClick={toggleSpeakExpert}
                                            >
                                                <IoIosClose size={28} className='transition-colors duration-500 hover:text-cyan-' />
                                            </button>
                                               <form action="" className="z-50 space-y-4">
                                                <div className="w-[90%] mx-auto">
                                                    <h4 className='py-2 text-xl font-semibold text-white font-khula sm:text-4xl sm:py-6'>Make an Appointment </h4>
                                                    <div className="grid gap-6 pt-8 md:grid-cols-2">
                                                    <input
                                                            type="text"
                                                            placeholder="Name"
                                                            className="w-full text-sm font-semibold text-white transition-colors duration-300 ease-in-out bg-transparent border-b-2 border-white font-raleway focus:outline-none focus:border-brandBlue placeholder:text-gray-600 placeholder:font-raleway"
                                                        />

                                                        <input
                                                            type="text"
                                                            placeholder="Company"
                                                            className="w-full text-sm font-semibold text-white transition-colors bg-transparent border-b-2 border-white focus:outline-none placeholder:font-raleway placeholder:text-gray-600 focus:border-brandBlue"
                                                        />
                                                    </div>
                                                    <div className="grid gap-6 pt-8 md:grid-cols-2">
                                                        <input
                                                            type="email"
                                                            placeholder="E-mail"
                                                            className="w-full text-sm font-semibold text-white transition-colors bg-transparent border-b-2 border-white placeholder:font-raleway placeholder:text-gray-600 focus:outline-none focus:border-brandBlue"
                                                        />
                                                        <input
                                                            type="text"
                                                            placeholder="Mobile"
                                                            className="w-full text-sm font-semibold text-white transition-colors bg-transparent border-b-2 border-white focus:outline-none placeholder:text-gray-600 placeholder:font-raleway focus:border-brandBlue"
                                                        />
                                                        <select
                                                              className="w-full text-sm font-semibold text-white transition-colors bg-transparent border-b-2 border-white focus:outline-none placeholder:text-gray-600 placeholder:font-raleway focus:border-brandBlue"
                                                              value={selectedService}
                                                              onChange={handleServiceChange}
                                                            >
                                                              <option 
                                                              className='text-gray-600' value="" disabled>
                                                                Services
                                                              </option>
                                                              {Services.map((service) => (
                                                                <option className='text-black' key={service.id} value={service.title}>
                                                                  {service.title}
                                                                </option>
                                                              ))}
                                                            </select>

                                                           
                                                            <select
                                                              className="w-full text-sm font-semibold text-white transition-colors bg-transparent border-b-2 border-white focus:outline-none placeholder:text-gray-600 placeholder:font-raleway focus:border-brandBlue"
                                                              value={selectedSubtitle}
                                                              onChange={handleSubtitleChange}
                                                              disabled={!selectedService} // Disable subtitle dropdown if no service is selected
                                                            >
                                                              <option className='text-gray-600' value="" disabled>
                                                                Sub-Services
                                                              </option>
                                                              {selectedIndexOpen !== null && Services[selectedIndexOpen].subtitles.map((sub) => (
                                                                <option className='text-black' key={sub.subid} value={sub.subtitle}>
                                                                  {sub.subtitle}
                                                                </option>
                                                              ))}
                                                            </select>
                                                    <div htmlFor="privacy-policy" className="block ml-1 text-xs text-gray-300 font-raleway">
                                                        I agree to the Privacy Policy <span className='text-red-900 underline font-raleway'>required</span>
                                                    </div>
                                                    </div>
                                                    <div className="mt-4">
                                                    <button
                                                        type="submit"
                                                        className="bg-transparent border text-[16px] border-white
                                                         text-white py-2 px-8 sm:px-16 text-sm font-raleway
                                                          transition-colors duration-300 hover:bg-black
                                                           hover:text-white"
                                                    >
                                                        Send
                                                    </button>

                                                    </div>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                )} */}
            </div>
          </div>
        </div>

        {/* Icons on the right */}
        <div className="absolute flex-col justify-center hidden gap-4 text-3xl md:block sm:right-8 bottom-52 sm:flex sm:mb-3 lg:mb-0 pb-72 sm:pb-0">
          <div className="flex space-x-2 bg-white bg-opacity-55 rounded-[5px] border border-opacity-20  p-1 xl:p-3 -mb-1 ">
            <button
              className="   pl-4 pr-4 rounded-sm   shadow-black  text-[16px] tracking-[1px]
            transition-all duration-300 ease-out bg-gradient-to-r from-brandBlue to-cyan-500 text-white"
            >
              Follow
            </button>
            <a
              href="https://www.facebook.com/finprimeconsulting"
              aria-label="Facebook"
              className="p-2 text-black transition-all duration-300 ease-out bg-white rounded-full shadow-black hover:bg-gradient-to-r hover:border-opacity-10 hover:from-brandBlue hover:to-cyan-500 hover:text-white"
            >
              <FaFacebookF size={20} />
            </a>
            <a
              href="https://x.com/FinPrimeConsult"
              aria-label="Twitter"
              className="p-2 text-black transition-all duration-300 ease-out bg-white rounded-full shadow-black hover:bg-gradient-to-r hover:from-brandBlue hover:border-opacity-10 hover:to-cyan-500 hover:text-white "
            >
              <FaXTwitter size={20} />
            </a>
            <a
              href="https://www.linkedin.com/company/finprimeconsulting/"
              aria-label="LinkedIn"
              className="p-2 text-black transition-all duration-300 ease-out bg-white rounded-full shadow-black hover:bg-gradient-to-r hover:from-brandBlue hover:to-cyan-500 hover:border-opacity-10 hover:text-white "
            >
              <RiLinkedinFill size={20} />
            </a>
            <a
              href="https://www.instagram.com/finprimeconsulting/"
              aria-label="WhatsApp"
              className="p-2 text-black transition-all duration-300 ease-out bg-white rounded-full shadow-black hover:bg-gradient-to-r hover:from-brandBlue hover:to-cyan-500 hover:text-white hover:border-opacity-10"
            >
              <FaInstagramSquare size={20} />
            </a>
            <a
              href="https://www.youtube.com/@FinPrimeConsulting"
              aria-label="WhatsApp"
              className="p-2 text-black transition-all duration-300 ease-out bg-white rounded-full shadow-black hover:bg-gradient-to-r hover:from-brandBlue hover:to-cyan-500 hover:text-white hover:border-opacity-10"
            >
              <FaYoutube size={20} />
            </a>
          </div>
        </div>

        {/* Slider Controls */}
        <div className="flex justify-center gap-4 mt-4">
          {videos.map((_, index) => (
            <button
              key={index}
              onClick={() => handleSlideChange(index)}
              className={` ${currentSlide === index ? "" : ""} `}
            />
          ))}
        </div>

        {/* Paragraph at the bottom */}
        <div className="absolute bottom-0 flex flex-col w-full text-center sm:pl-0 sm:pr-0 ">
          <div
            className={`flex flex-wrap justify-between font-raleway text-[10px] md:text-[14px] tracking-[2px]   `}
          >
            <button className="relative flex-1 px-3 py-2 overflow-hidden text-white uppercase transition-all duration-300 ease-out bg-black lg:py-6 group hover:bg-gradient-to-r hover:from-brandBlue hover:to-cyan-500">
              <span
                className="absolute right-0 w-10 h-32 -mt-12 transition-all duration-1000 
        transform translate-x-12  bg-white opacity-5 rotate-12 group-hover:-translate-x-[500px] ease "
              ></span>
              Giving smartness to your business accounting
            </button>
            <button className="relative flex-1 px-3 py-2 overflow-hidden text-white uppercase transition-all duration-300 ease-out bg-black border-l border-white lg:py-6 hover:border-l-0 group hover:bg-gradient-to-r hover:from-brandBlue hover:to-cyan-500 ">
              <span
                className="absolute right-0 w-10 h-32 -mt-12 transition-all duration-1000 
        transform translate-x-12 bg-white opacity-5 rotate-12 group-hover:-translate-x-[500px] ease"
              ></span>
              Best Accounting Companies
            </button>
            <button className="relative flex-1 px-3 py-2 overflow-hidden text-white uppercase transition-all duration-300 ease-out bg-black border-l border-white lg:py-6 hover:border-l-0 group hover:bg-gradient-to-r hover:from-brandBlue hover:to-cyan-500 ">
              <span
                className="absolute right-0 w-10 h-32 -mt-12 transition-all duration-1000 
        transform translate-x-12 bg-white opacity-5 rotate-12 group-hover:-translate-x-[500px] ease"
              ></span>
              Corporate Tax Services
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Bannerslider;

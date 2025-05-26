import { useState, useEffect, useRef } from "react";
import logodark from "../../assets/images/Navbar/finprime-logo-dark.svg";
import logo from "../../assets/images/Navbar/finprime-logo.svg";
import { Link, useLocation } from "react-router-dom";
import { IoIosClose } from "react-icons/io";
import { HiBars3CenterLeft } from "react-icons/hi2";
import { HiX } from "react-icons/hi";
import { Services } from "../../constants/data/services/ServicesData";
import { RiArrowLeftSLine } from "react-icons/ri";
import FullScreenMenu from "../Navbar/FullScreenMenu";
import MenuToggleButton from "../Navbar/MenuToggleButton";
import ServicesDropDown from "../Navbar/ServicesDropDown";
import SpeakToExpertForm from "../Navbar/SpeakToExpert";
import MobileMenu from "./MobileMenu";
const Navbar = () => {
  // Get current route

  const [isOpen, setIsOpen] = useState(false);
  const [activeServiceMenuIndex, setActiveServiceMenuIndex] = useState(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobileMenuFirstOpen, setIsMobileMenuFirstOpen] = useState(false);
  const [isSpeakExpert, setIsSpeakExpert] = useState(false);
  const [showNavbar, setShowNavbar] = useState(true);
  const [scrolling, setScrolling] = useState(false);
  const dropdownRef = useRef(null);
  const lastScrollY = useRef(0);

  const toggleDropdown = () => {
    setIsOpen((prev) => !prev);
  };

  const [isServiceOpen, setIsServiceOpen] = useState(false);

  const handleMouseEnter = () => {
    setIsServiceOpen(true);
  };

  const handleMouseLeave = () => {
    setIsServiceOpen(false);
  };

  useEffect(() => {
    const hasVisited = localStorage.getItem("hasVisited");

    if (!hasVisited) {
      setIsOpen(true);
      localStorage.setItem("hasVisited", "true");
    }
  }, []);

  const toggleSpeakExpert = () => {
    setIsSpeakExpert((prev) => !prev);
  };

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  }, [isMobileMenuOpen]);

  useEffect(() => {
    if (isSpeakExpert) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isSpeakExpert]);

  const toggleServiceMenuVisibility = (index) => {
    setActiveServiceMenuIndex((prevIndex) =>
      prevIndex === index ? null : index
    );
  };

  const toggleMobileMenuFirst = (index) => {
    setIsMobileMenuFirstOpen((prevIndex) =>
      prevIndex === index ? null : index
    );
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((prev) => !prev);
  };

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  const handleScroll = () => {
    if (typeof window !== "undefined") {
      const currentScrollY = window.scrollY;
      setShowNavbar(currentScrollY < lastScrollY.current);
      lastScrollY.current = currentScrollY;
      setScrolling(currentScrollY > 50);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
  useEffect(() => {
    if (isOpen) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }

    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  }, [isOpen]);

  const handleLinkClick = () => {
    setIsServiceOpen(false);
  };

  const location = useLocation();
  const currentPath = location.pathname;

  const logos =
    location.pathname === "/" ||
    location.pathname === "/blog" ||
    location.pathname === "/about"
      ? logo
      : logodark;

  const isNotHomePage =
    location.pathname !== "/" &&
    location.pathname !== "/blog" &&
    location.pathname !== "/about";

  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [isModalOpen]);

  const handleModalToggle = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <div
      className={`fixed xl:pr-10 xl:pl-8 lg:pr-8 lg:pl-6 md:pr-6 md:pl-4 pl-2 pr-4  top-0 right-0 w-full z-50  
             transition-transform duration-300 
            ${showNavbar ? "sm:translate-y-0 " : "sm:-translate-y-full"} 
            ${
              scrolling
                ? "bg-black bg-opacity-40 pt-4 sm:pt-10"
                : " pt-4 sm:pt-10"
            }`}
    >
      <div className="">
        <div className="flex items-center justify-between">
          <div className="flex">
            <Link to="/">
              <img src={logos} alt="Logo" className="h-16 sm:h-20 " />
            </Link>
          </div>
          <div className="flex gap-2 text-white">
            {/* -------------------------------------------------------service Menu---------------------------------------------------------*/}
            <ul className="items-center hidden py-2 lg:flex">
              <li
                className="py-6"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                <button
                  className={`font-raleway hover:text-cyan-500 font-medium pb-2 tracking-[1px] text-sm lg:text-[20px] xl:text-[16px]
                                     ${
                                       currentPath !== "/rightsolutions" &&
                                       currentPath !== "/freeconsultation" &&
                                       currentPath !== "/about" &&
                                       currentPath !== "/" &&
                                       currentPath !== "/blog" &&
                                       currentPath !== "/offer" &&
                                       currentPath !== "/contactus" &&
                                       !currentPath.startsWith("/blog")
                                         ? "link-115  font-bold"
                                         : null
                                     } ${
                    isNotHomePage ? "text-black" : "text-white"
                  }
                                     transition-colors duration-300`}
                  style={{
                    padding: "4px",
                    color: isNotHomePage ? "black" : "white",
                  }}
                >
                  Services
                </button>

                <div
                  className={`absolute left-0 w-full text-black bg-white mt-3 shadow-xl transition-opacity duration-300 ease-in-out transform ${
                    isServiceOpen
                      ? "animate-fadeinrightsmall visible"
                      : "opacity-0 -translate-y-4 invisible"
                  }`}
                >
                  <ServicesDropDown
                    Services={Services}
                    handleLinkClick={handleLinkClick}
                  />
                </div>
              </li>
              <li className="xl:pr-10 xl:pl-10">
                <Link
                  to="/rightsolutions"
                  className={`font-raleway hover:text-cyan-500 font-medium pb-2 tracking-[1px] text-sm lg:text-[20px] xl:text-[16px]
                                     ${
                                       currentPath === "/rightsolutions"
                                         ? "link-115  font-bold"
                                         : null
                                     } ${
                    isNotHomePage ? "text-black" : "text-white"
                  }
                                     transition-colors duration-300`}
                  style={{
                    padding: "4px",
                    color: isNotHomePage ? "black" : "white",
                  }}
                >
                  Right Solutions
                </Link>
              </li>

              <li>
                <Link
                  to="/freeconsultation"
                  className={`font-raleway hover:text-cyan-500 font-medium pb-2 tracking-[1px] text-sm lg:text-[20px] xl:text-[16px]
                                  ${
                                    currentPath === "/freeconsultation"
                                      ? "link-115  font-bold"
                                      : null
                                  } ${
                    isNotHomePage ? "text-black" : "text-white"
                  }
                                    transition-colors duration-300`}
                  style={{
                    padding: "4px",
                    color: isNotHomePage ? "black" : "white",
                  }}
                >
                  Free Consultation
                </Link>
              </li>

              <li className="xl:pr-10 xl:pl-10">
                <Link
                  to="/about"
                  className={`font-raleway hover:text-cyan-500 font-medium pb-2 tracking-[1px] text-sm lg:text-[20px] xl:text-[16px]
                                ${
                                  currentPath === "/about"
                                    ? "link-115  font-bold"
                                    : null
                                } ${isNotHomePage ? "text-black" : "text-white"}
                                   transition-colors duration-300`}
                  style={{
                    padding: "4px",
                    color: isNotHomePage ? "black" : "white",
                  }}
                >
                  Company
                </Link>
              </li>

              {/* -------------------------------------------------------speak to an expert--------------------------------------------------------*/}
              <li>
                <div onClick={toggleSpeakExpert} className="relative z-10">
                  <button
                    className="group relative overflow-hidden rounded-[5px] text-[15px] font-raleway xl:ml-36 bg-brandBlue px-4 xl:px-8 tracking-[2px]
                                    py-[10px] border border-cyan-700
                                     text-white transition-all duration-300 ease-out hover:bg-gradient-to-r
                                     hover:from-brandBlue hover:to-cyan-500 "
                  >
                    <span className="absolute right-0 w-8 h-32 -mt-12 transition-all duration-700 transform translate-x-12 bg-white ease rotate-12 opacity-10 group-hover:-translate-x-40"></span>
                    <span className="relative">Speak to an Expert</span>
                  </button>
                </div>

                {isSpeakExpert && (
                  <SpeakToExpertForm toggleSpeakExpert={toggleSpeakExpert} />
                )}
              </li>

              {/* -------------------------------------------------------bar menu---------------------------------------------------------*/}

              <li ref={dropdownRef} className="py-4 pl-2 font-khula">
                <div>
                  <MenuToggleButton
                    isOpen={isOpen}
                    toggleDropdown={toggleDropdown}
                    isNotHomePage={isNotHomePage}
                  />
                </div>
                {isOpen && (
                  <div>
                    <FullScreenMenu />
                  </div>
                )}
              </li>
            </ul>

            {/* -------------------------------------------------------Mobile Menu---------------------------------------------------------*/}

            <div className="z-50 pb-3 pl-2 lg:hidden">
              <button onClick={toggleMobileMenu}>
                {isMobileMenuOpen ? (
                  <HiX className="text-4xl text-black bg-white rounded-full" />
                ) : (
                  <HiBars3CenterLeft className="text-4xl text-black bg-white rounded-full" />
                )}
              </button>
            </div>
          </div>
        </div>
      </div>

      <div
        className={`lg:hidden fixed inset-0 z-20   ${
          isMobileMenuOpen ? "animate-fadeinrightsmall" : "translate-x-full"
        } w-[100%]  h-screen top-0 left-[0%] bg-gray-950  py-8 px-4 overflow-hidden`}
      >
        <MobileMenu
          toggleServiceMenuVisibility={toggleServiceMenuVisibility}
          activeServiceMenuIndex={activeServiceMenuIndex}
          isMobileMenuFirstOpen={isMobileMenuFirstOpen}
          toggleMobileMenuFirst={toggleMobileMenuFirst}
          Services={Services}
          isModalOpen={isModalOpen}
          handleModalToggle={handleModalToggle}
          setIsMobileMenuOpen={setIsMobileMenuOpen}
        />
      </div>
    </div>
  );
};

export default Navbar;

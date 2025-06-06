import React, { useState, useEffect, useRef } from 'react';
import logodark from '../../images/Navbar/finprime-logo-dark.svg';
import logo from '../../images/Navbar/finprime-logo.svg';
import { Link, useLocation } from 'react-router-dom';
import { IoIosClose } from "react-icons/io";
import { HiBars3CenterLeft } from 'react-icons/hi2';
import { HiX } from 'react-icons/hi';
import { FaArrowRight } from "react-icons/fa6";
import img1 from '../../images/menubar/contact.jpg';
import img2 from '../../images/menubar/blog.jpg';
import img3 from '../../images/menubar/home.jpg';
import img4 from '../../images/menubar/about.jpg';
import img5 from '../../images/menubar/offer.jpg';
import { IoMdHome } from "react-icons/io";
import { HiMiniUserGroup } from "react-icons/hi2";
import { FaMessage } from "react-icons/fa6";
import { BiSolidOffer } from "react-icons/bi";
import { IoIosContact } from "react-icons/io";
import { Services } from '../Services';
import { RiArrowLeftSLine } from "react-icons/ri";
import axios from "axios";
import emailjs from "emailjs-com";



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
    const [selectedItem, setSelectedItem] = useState(null); // Track selected item


    const handleClick = (item) => {
        setSelectedItem(item); // Mark clicked item as selected
    };
    const barmenu = [
        { MenuId: 1, title: "Home", links: "/", icon: <IoMdHome />, bgImage: img3 },
        { MenuId: 2, title: "About", links: "/about", icon: <HiMiniUserGroup />, bgImage: img4 },
        { MenuId: 3, title: "Blog", links: "/blog", icon: <FaMessage />, bgImage: img2 },
        { MenuId: 4, title: "Offer", links: "/offer", icon: <BiSolidOffer />, bgImage: img5 },
        { MenuId: 5, title: "Contact Us", links: "/contactus", icon: <IoIosContact />, bgImage: img1 },
    ];



    const toggleDropdown = () => {
        setIsOpen((prev) => !prev);
    };




    const [selectedIndexOpen, setSelectedIndexOpen] = useState(null);
    const [isAnswerVisible, setIsAnswerVisible] = useState(false);
    const [isServiceOpen, setIsServiceOpen] = useState(false);


    const handleMouseEnter = () => {
        setIsServiceOpen(true);
    };

    const handleMouseLeave = () => {
        setIsServiceOpen(false);
        handleCloseAnswer();
    };

    const handleQuestionClick = (index) => {
        if (selectedIndexOpen === index) {
            setIsAnswerVisible(false);
            setTimeout(() => setSelectedIndexOpen(null), 500);
        } else {
            setSelectedIndexOpen(index);
            setIsAnswerVisible(true);
        }
    };

    const handleCloseAnswer = () => {
        setIsAnswerVisible(false);
        setTimeout(() => setSelectedIndexOpen(null), 500);
    };





    useEffect(() => {

        const hasVisited = localStorage.getItem('hasVisited');

        if (!hasVisited) {

            setIsOpen(true);
            localStorage.setItem('hasVisited', 'true');
        }
    }, []);









    const toggleSpeakExpert = () => {
        setIsSpeakExpert(prev => !prev);
    };


    useEffect(() => {
        if (isMobileMenuOpen) {
            document.body.classList.add('overflow-hidden');
        } else {
            document.body.classList.remove('overflow-hidden');
        }
        return () => {
            document.body.classList.remove('overflow-hidden');
        };
    }, [isMobileMenuOpen]);

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

    const toggleServiceMenuVisibility = (index) => {
        setActiveServiceMenuIndex(prevIndex => (prevIndex === index ? null : index));
    };


    const toggleMobileMenuFirst = (index) => {
        setIsMobileMenuFirstOpen(prevIndex => (prevIndex === index ? null : index));
    };

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(prev => !prev);

    };

    const handleClickOutside = (event) => {
        if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
            setIsOpen(false);
        }
    };

    const handleScroll = () => {
        if (typeof window !== 'undefined') {
            const currentScrollY = window.scrollY;
            setShowNavbar(currentScrollY < lastScrollY.current);
            lastScrollY.current = currentScrollY;
            setScrolling(currentScrollY > 50);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);
    useEffect(() => {
        if (isOpen) {
            document.body.classList.add('overflow-hidden');
        } else {
            document.body.classList.remove('overflow-hidden');
        }

        return () => {
            document.body.classList.remove('overflow-hidden');
        };
    }, [isOpen]);

    const handleLinkClick = () => {
        setIsServiceOpen(false);

    };



    const location = useLocation();
    const currentPath = location.pathname;

    const logos = location.pathname === '/' || location.pathname === '/blog' || location.pathname === '/about' ? logo : logodark;

    const [isHovered, setIsHovered] = useState(false);
    const isNotHomePage = location.pathname !== '/' && location.pathname !== '/blog' && location.pathname !== '/about';


    const [isModalOpen, setIsModalOpen] = useState(false);

    useEffect(() => {
        if (isModalOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }

        return () => {
            document.body.style.overflow = '';
        };
    }, [isModalOpen]);

    const handleModalToggle = () => {
        setIsModalOpen(!isModalOpen);
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
        <div className={`fixed xl:pr-10 xl:pl-8 lg:pr-8 lg:pl-6 md:pr-6 md:pl-4 pl-2 pr-4  top-0 right-0 w-full z-50  
             transition-transform duration-300 
            ${showNavbar ? 'sm:translate-y-0 ' : 'sm:-translate-y-full'} 
            ${scrolling ? 'bg-black bg-opacity-40 pt-4 sm:pt-10' : ' pt-4 sm:pt-10'}`}>
            <div className=''>
                <div className='flex items-center justify-between'>
                    <div className='flex'>
                        <Link to="/">
                            <img src={logos} alt="Logo" className="h-16 sm:h-20 " />
                        </Link>
                    </div>
                    <div className='flex gap-2 text-white'>





























                        {/* -------------------------------------------------------service Menu---------------------------------------------------------*/}
                        <ul className='items-center hidden py-2 lg:flex'>
                            <li
                                className="py-6"
                                onMouseEnter={handleMouseEnter}
                                onMouseLeave={handleMouseLeave}
                            >
                                <button className={`font-raleway hover:text-cyan-500 font-medium pb-2 tracking-[1px] text-sm lg:text-[20px] xl:text-[16px]
                                     ${currentPath !== '/rightsolutions' &&
                                        currentPath !== '/freeconsultation' &&
                                        currentPath !== '/about' &&
                                        currentPath !== '/' &&
                                        currentPath !== '/blog' &&
                                        currentPath !== '/offer' &&
                                        currentPath !== '/contactus' &&
                                        !currentPath.startsWith('/blog') ? 'link-115  font-bold' : null} ${(isNotHomePage ? 'text-black' : 'text-white')}
                                     transition-colors duration-300`}
                                    style={{
                                        padding: "4px",
                                        color: isNotHomePage ? 'black' : 'white',
                                    }}>
                                    Services
                                </button>

                                <div
                                    className={`absolute left-0 w-full text-black bg-white mt-3 shadow-xl transition-opacity duration-300 ease-in-out transform ${isServiceOpen ? 'animate-fadeinrightsmall visible' : 'opacity-0 -translate-y-4 invisible'
                                        }`}
                                >

                                    <div className="flex flex-col w-full h-full md:flex-row">

                                        <div className='flex flex-col py-16 px-4 md:px-14 w-full  md:w-[20%]'>
                                            <h4 className="mb-2 text-2xl font-bold font-khula">Accounting Services</h4>
                                            <p className="text-sm text-left text-gray-600 font-raleway">
                                                Our accounting services ensure your business complies with regulations and maintains financial health.
                                            </p>
                                            <button className='border font-raleway border-black w-[70%] text-sm mt-4 py-1 px-2 transition-all duration-300 ease-out 
                                            hover:bg-gradient-to-r hover:from-brandBlue hover:to-cyan-500 hover:text-white text-black'>
                                                Explore More
                                            </button>
                                        </div>

                                        <div className='flex flex-col py-4 pl-4 w-full md:w-[40%]'>
                                            <ul>
                                                {Services.map((service, index) => (
                                                    <li key={index} className="group">
                                                        <button
                                                            onClick={() => handleQuestionClick(index)}
                                                            className={`text-black font-khula text-lg flex justify-between w-full pl-8 py-5 border-b ${selectedIndexOpen === index
                                                                ? 'bg-brandBlue text-white border-l-8 border-cyan-500'
                                                                : 'group-hover:bg-brandBlue group-hover:text-white group-hover:border-l-8 group-hover:border-cyan-500'
                                                                }`}
                                                        >
                                                            {service.headtitle}
                                                            <FaArrowRight className={`right-0 text-2xl mr-5 ${selectedIndexOpen === index ? 'hidden' : 'group-hover:animate-fadeinleftsmall'}`} />
                                                        </button>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>

                                        {/* Column 3: Answers */}
                                        <div className='flex flex-col w-full md:w-[40%] h-full relative'>
                                            {selectedIndexOpen !== null && isAnswerVisible ? (
                                                <div className={`inset-0 w-full h-[445px] transition-opacity duration-500 ease-in-out animate-fadeinleftsmall bg-brandBlue px-4 md:px-28 py-4`}>
                                                    <div className='flex items-center'>
                                                        <button
                                                            onClick={handleCloseAnswer}
                                                            className={`mt-6 -ml-5 mr-5 text-cyan-500 hover:text-cyan-700`}
                                                        >
                                                            <RiArrowLeftSLine className='text-2xl' />
                                                        </button>
                                                        <h4 className="pt-10 mb-3 text-2xl font-bold text-white font-khula">
                                                            {Services[selectedIndexOpen].headtitle}
                                                        </h4>
                                                    </div>
                                                    <ul>
                                                        {Services[selectedIndexOpen].subtitles.map((sub) => (
                                                            <li key={sub.subid}>
                                                                <Link
                                                                    to={`/services/${Services[selectedIndexOpen].title.replace(/\s+/g, '-')}/${sub.keyword.replace(/\s+/g, '-')}`}
                                                                    state={{ "service_id": Services[selectedIndexOpen].id, "subtitles_id": sub.subid }}
                                                                    className="mb-1 ml-8 text-lg text-white hover-underline-animation"
                                                                    onClick={handleLinkClick}

                                                                >{sub.headsubtitle}</Link>
                                                            </li>
                                                        ))}
                                                    </ul>

                                                </div>
                                            ) : (
                                                <ul className="px-4 py-4 text-black md:px-28 md:py-16">
                                                    <h4 className='font-semibold md:text-3xl font-khula'>Services</h4>
                                                    {Services.map((index) => (
                                                        <Link to={index.link} key={index.title} className='flex w-full py-2 cursor-pointer text-md font-raleway'>
                                                            <span className='hover-underline-animation'>{index.headtitle}</span>
                                                        </Link>
                                                    ))}
                                                </ul>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li className='xl:pr-10 xl:pl-10'>
                                <Link
                                    to="/rightsolutions"
                                    className={`font-raleway hover:text-cyan-500 font-medium pb-2 tracking-[1px] text-sm lg:text-[20px] xl:text-[16px]
                                     ${currentPath === '/rightsolutions' ? 'link-115  font-bold' : null} ${(isNotHomePage ? 'text-black' : 'text-white')}
                                     transition-colors duration-300`}
                                    style={{
                                        padding: "4px",
                                        color: isNotHomePage ? 'black' : 'white',
                                    }}
                                >
                                    Right Solutions
                                </Link>
                            </li>

                            <li>
                                <Link
                                    to="/freeconsultation"
                                    className={`font-raleway hover:text-cyan-500 font-medium pb-2 tracking-[1px] text-sm lg:text-[20px] xl:text-[16px]
                                  ${currentPath === '/freeconsultation' ? 'link-115  font-bold' : null} ${(isNotHomePage ? 'text-black' : 'text-white')}
                                    transition-colors duration-300`}
                                    style={{
                                        padding: "4px",
                                        color: isNotHomePage ? 'black' : 'white',
                                    }}

                                >
                                    Free Consultation
                                </Link>
                            </li>

                            <li className='xl:pr-10 xl:pl-10'>
                                <Link
                                    to="/about"
                                    className={`font-raleway hover:text-cyan-500 font-medium pb-2 tracking-[1px] text-sm lg:text-[20px] xl:text-[16px]
                                ${currentPath === '/about' ? 'link-115  font-bold' : null} ${(isNotHomePage ? 'text-black' : 'text-white')}
                                   transition-colors duration-300`}
                                    style={{
                                        padding: "4px",
                                        color: isNotHomePage ? 'black' : 'white',
                                    }}
                                >

                                    Company
                                </Link>
                            </li>











































                            {/* -------------------------------------------------------speak to an expert--------------------------------------------------------*/}
                            <li>
                                <div
                                    onClick={toggleSpeakExpert}
                                    className="relative z-10">
                                    <button className="group relative overflow-hidden rounded-[5px] text-[15px] font-raleway xl:ml-36 bg-brandBlue px-4 xl:px-8 tracking-[2px]
                                    py-[10px] border border-cyan-700
                                     text-white transition-all duration-300 ease-out hover:bg-gradient-to-r
                                     hover:from-brandBlue hover:to-cyan-500 ">
                                        <span className="absolute right-0 w-8 h-32 -mt-12 transition-all duration-700 transform translate-x-12 bg-white ease rotate-12 opacity-10 group-hover:-translate-x-40"></span>
                                        <span className="relative">Speak to an Expert</span>
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
                                                className="absolute font-bold text-white top-2 right-2"
                                                onClick={toggleSpeakExpert}
                                            >
                                                <IoIosClose size={28} className='transition-colors duration-500 hover:text-brandBlue' />
                                            </button>
                                            <form onSubmit={handleSubmit} className="z-50 space-y-4">
                                                <div className="w-[90%] mx-auto">
                                                    <h5 className='py-6 text-2xl font-semibold text-white font-khula sm:text-4xl'>Speak to an Expert </h5>
                                                    <div className="grid grid-cols-2 gap-6 pt-8">
                                                        <input
                                                            type="text"
                                                            name="name"
                                                            value={formData.name}
                                                            onChange={handleChange}
                                                            placeholder="Name"
                                                            className="w-full text-sm font-semibold text-white transition-colors duration-300 ease-in-out bg-transparent border-b-2 border-white font-raleway focus:outline-none focus:border-brandBlue placeholder:text-gray-600 placeholder:font-raleway"
                                                        />

                                                        <input
                                                            type="text"
                                                            name="company"
                                                            value={formData.company}
                                                            onChange={handleChange}
                                                            placeholder="Company"
                                                            className="w-full text-sm font-semibold text-white transition-colors bg-transparent border-b-2 border-white focus:outline-none placeholder:font-raleway placeholder:text-gray-600 focus:border-brandBlue"
                                                        />
                                                    </div>
                                                    <div className="grid grid-cols-2 gap-6 pt-8">
                                                        <input
                                                            type="email"
                                                            name="email"
                                                            value={formData.email}
                                                            onChange={handleChange}
                                                            placeholder="e-mail"
                                                            className="w-full text-sm font-semibold text-white transition-colors bg-transparent border-b-2 border-white placeholder:font-raleway placeholder:text-gray-600 focus:outline-none focus:border-brandBlue"
                                                        />
                                                        <input
                                                            type="text"
                                                            name="mobile"
                                                            value={formData.mobile}
                                                            onChange={handleChange}
                                                            placeholder="Mobile"
                                                            className="w-full text-sm font-semibold text-white transition-colors bg-transparent border-b-2 border-white focus:outline-none placeholder:text-gray-600 placeholder:font-raleway focus:border-brandBlue"
                                                        />
                                                        <label htmlFor="privacy-policy" className="block ml-1 text-xs text-gray-300 font-raleway">
                                                            I agree to the Privacy Policy <span className='text-red-900 underline font-raleway'>required</span>
                                                        </label>
                                                    </div>
                                                    <div className="mt-4">
                                                        <button
                                                            type="submit"
                                                            disabled={loading}
                                                            className="px-16 py-2 text-sm text-white transition-colors duration-300 bg-transparent border border-white font-raleway hover:bg-black hover:text-white"
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

                            </li>






























                            {/* -------------------------------------------------------bar menu---------------------------------------------------------*/}

                            <li ref={dropdownRef} className='py-4 pl-2 font-khula'>
                                <button
                                    className="relative pb-1 group"
                                    onClick={toggleDropdown}
                                >
                                    <div
                                        className="relative flex z-50 mt-1 rounded-full overflow-hidden items-center justify-center
                                                py-[15px] px-[11px] border-l border-dashed  transform transition-all bg-transparent duration-300 
                                                ease-out hover:bg-gradient-to-r hover:from-brandBlue hover:to-cyan-500 shadow-lg"
                                    >
                                        <span
                                            className="text-white  tracking-[1px] xl:font-raleway transition-all duration-300"
                                            style={{
                                                color: isHovered ? '' : isNotHomePage ? 'black' : 'white',
                                            }}
                                            onMouseEnter={() => setIsHovered(false)}
                                            onMouseLeave={() => setIsHovered(false)}
                                        >
                                            {isOpen ? 'Close' : 'Menu'}
                                        </span>
                                    </div>
                                </button>
                                {isOpen && (
                                    <div className="absolute top-0 right-0 z-40 w-full h-screen bg-center bg-cover bg-brandBlue">
                                        <div className="flex items-center justify-center h-full">
                                            <ul className="grid w-full grid-cols-5 text-center">
                                                {barmenu.map(item => (
                                                    <Link
                                                        to={item.links}
                                                        key={item.MenuId}
                                                        className="relative transition duration-200 bg-center bg-cover shadow-md group hover:shadow-lg"
                                                        style={{ backgroundImage: `url(${item.bgImage})`, height: '100vh' }}
                                                    >

                                                        <div className="absolute top-0 left-0 z-10 w-full h-full transition-all duration-300 bg-black bg-opacity-60 group-hover:bg-opacity-0"></div>

                                                        <span

                                                            className="z-20 flex flex-col items-center justify-center h-full p-4 pb-10 text-white"
                                                            aria-label={item.title}
                                                        >
                                                            <span
                                                                className="z-10 text-4xl font-bold text-white "
                                                            >
                                                                {item.title}
                                                            </span>
                                                            <span className="invisible text-5xl text-white transition duration-500 group-hover:visible">{item.icon}</span>
                                                        </span>
                                                    </Link>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>

                                )}

                            </li>
                        </ul>

















                        {/* -------------------------------------------------------Mobile Menu---------------------------------------------------------*/}


                        <div className='z-50 pb-3 pl-2 lg:hidden'>
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
                className={`lg:hidden fixed inset-0 z-20   ${isMobileMenuOpen ? 'animate-fadeinrightsmall' : 'translate-x-full'
                    } w-[100%]  h-screen top-0 left-[0%] bg-gray-950  py-8 px-4 overflow-hidden`}
            >
                <ul className='flex flex-col gap-5 pt-24 text-left text-white md:gap-7'>
                    <li className='mx-10 '>
                        <Link to="/rightsolutions" className='mb-2 text-xl font-medium uppercase transition-all duration-500 hover:text-cyan-500 hover-underline-animation hover:scale-110 md:text-2xl font-khula lg:text-lg'>
                            Right Solutions
                        </Link>
                    </li>
                    <li className='mx-10 '>
                        <Link to="/freeconsultation" className='mb-2 text-xl font-medium uppercase transition-all duration-500 hover:text-cyan-500 hover-underline-animation md:text-2xl font-khula lg:text-lg'>
                            Free Consultation
                        </Link>
                    </li>
                    <li className="mx-10">
                        <button
                            onClick={() => toggleServiceMenuVisibility(0)}
                            className="mb-2 text-xl font-medium uppercase transition-all duration-500 hover:text-cyan-500 hover-underline-animation md:text-2xl font-khula lg:text-lg"
                        >
                            Services
                        </button>

                        {activeServiceMenuIndex === 0 && (
                            <div
                                className={`lg:hidden fixed inset-0 z-40 transition-transform duration-300 ease-in-out ${activeServiceMenuIndex === 0 ? 'animate-fadeinrightsmall' : 'translate-x-full'
                                    } w-full h-screen top-0 left-0 bg-gray-950 py-8 px-4 overflow-hidden`}
                            >
                                <button
                                    onClick={() => toggleServiceMenuVisibility(-1)}
                                    className="absolute top-[22px] md:top-[53px] right-[60px] md:right-[68px] text-black text-4xl bg-white  border rounded-full "
                                >
                                    <RiArrowLeftSLine />
                                </button>

                                {/* Service List */}
                                <ul className="flex flex-col py-2 space-y-8 text-left mt-28">
                                    {Services.map((service, index) => (
                                        <li
                                            key={index}
                                            className="mx-10"
                                        >
                                            <button
                                                onClick={() => toggleMobileMenuFirst(index)}
                                                className="mb-2 text-xl text-left text-white uppercase transition-all duration-500 hover:text-cyan-500 hover-underline-animation font-khula"
                                            >
                                                {service.title}
                                            </button>

                                            {/* Sub-Service Dropdown */}
                                            {isMobileMenuFirstOpen === index && (
                                                <div
                                                    className={`lg:hidden fixed inset-0 z-30 transition-transform duration-300 ease-in-out ${isMobileMenuFirstOpen === index ? 'animate-fadeinrightsmall' : 'translate-x-full'
                                                        } w-full h-screen top-0 left-0 bg-gray-950 py-8 px-4 overflow-hidden`}
                                                >
                                                    {/* Close Button for Sub-Service Menu */}
                                                    <button
                                                        onClick={() => toggleMobileMenuFirst(-1)}
                                                        className="absolute top-[22px] md:top-[53px] right-[60px] md:right-[68px] text-black text-4xl bg-white  border rounded-full"
                                                    >
                                                        <RiArrowLeftSLine />
                                                    </button>

                                                    {/* Sub-Service List */}
                                                    <ul className="px-10 ml-4 space-y-6 mt-28">
                                                        {service.subtitles?.map((subservice, subIndex) => (
                                                            <li
                                                                key={subIndex}
                                                                className=""
                                                            >
                                                                <Link
                                                                    to={`/services/${service.title.replace(/\s+/g, '-')}/${subservice.keyword.replace(/\s+/g, '-')}`}
                                                                    state={{ "service_id": service.id, "subtitles_id": subservice.subid }}
                                                                    className="mb-2 text-lg font-medium text-left text-white uppercase transition-all duration-500 hover:text-cyan-500 hover-underline-animation font-khula lg:text-lg"
                                                                    onClick={() => {

                                                                        window.scrollTo({ top: 0, behavior: 'smooth' });
                                                                        toggleMobileMenuFirst(-1);
                                                                        console.log("wdwebfigg===")
                                                                        toggleServiceMenuVisibility(-1);
                                                                        setIsMobileMenuOpen(false)

                                                                    }}
                                                                >
                                                                    {subservice.subtitle}
                                                                </Link>
                                                            </li>
                                                        ))}
                                                    </ul>
                                                </div>
                                            )}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        )}
                    </li>


                    <li className='mx-10 '>
                        <Link to="/" className='mb-2 text-xl font-medium uppercase transition-all duration-500 hover:text-cyan-500 hover-underline-animation md:text-2xl font-khula lg:text-lg'>
                            Home
                        </Link>
                    </li>
                    <li className='mx-10 '>
                        <Link to="/about" className='mb-2 text-xl font-medium uppercase transition-all duration-500 hover:text-cyan-500 hover-underline-animation md:text-2xl font-khula lg:text-lg'>
                            About
                        </Link>
                    </li >
                    <li className='mx-10 '>
                        <Link to="/blog" className='mb-2 text-xl font-medium uppercase transition-all duration-500 hover:text-cyan-500 hover-underline-animation md:text-2xl font-khula lg:text-lg'>
                            Blog
                        </Link>
                    </li>
                    <li className='mx-10'>
                        <Link to="/offer" className='mb-2 text-xl font-medium uppercase transition-all duration-500 hover:text-cyan-500 hover-underline-animation md:text-2xl font-khula lg:text-lg'>
                            Offer
                        </Link>
                    </li>
                    <li className='mx-10 '>
                        <Link to="/contactus" className='mb-2 text-xl font-medium uppercase transition-all duration-500 hover:text-cyan-500 hover-underline-animation md:text-2xl font-khula lg:text-lg'>
                            Contact Us
                        </Link>
                    </li>
                    <li className='mx-10'>
                        <button
                            onClick={handleModalToggle}
                            className="mb-2 text-xl font-medium text-left uppercase transition-all duration-500 hover:text-cyan-500 hover-underline-animation md:text-2xl font-khula lg:text-lg">

                            Speak To An Expert
                        </button>
                        {isModalOpen && (
                            <div
                                className="fixed inset-0 w-screen h-[100vh] bg-black bg-opacity-60 z-50 flex justify-center items-center"
                                onClick={handleModalToggle}
                            >
                                <div
                                    className="relative bg-brandBlue mx-6 mt-16 md:mt-0 md:mx-0 w-[600px] h-[500px] md:h-[400px] shadow-md p-6"
                                    onClick={(e) => e.stopPropagation()}
                                >

                                    <button
                                        className="absolute font-bold text-white top-2 right-2"
                                        onClick={handleModalToggle}
                                    >
                                        <IoIosClose size={28} className='transition-colors duration-500 hover:text-brandBlue' />
                                    </button>


                                    <form action="" className="z-50 space-y-4">
                                        <div className="w-[90%] mx-auto">
                                            <h1 className='py-6 text-4xl font-semibold text-white font-khula'>Speak to an Expert</h1>

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
                                                <label htmlFor="privacy-policy" className="block ml-1 text-xs text-gray-300 font-raleway">
                                                    I agree to the Privacy Policy <span className='text-red-900 underline font-raleway'>required</span>
                                                </label>
                                            </div>

                                            <div className="mt-4">
                                                <button
                                                    type="submit"
                                                    className="px-16 py-2 text-sm text-white transition-colors duration-300 bg-transparent border border-white font-raleway hover:bg-black hover:text-white"
                                                >
                                                    Send
                                                </button>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        )}
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Navbar;



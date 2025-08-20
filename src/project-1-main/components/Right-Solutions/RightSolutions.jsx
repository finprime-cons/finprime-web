import React from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import Rhero from './Rhero/Rhero';
import DropDown from './DropDown/DropDown';
import Footer from '../Footer/Footer';
import Navbar from '../Navbar/Navbar';
import WhatsAppIcon from '../WhatsAppIcon/WhatsAppIcon';
import CookieBanner from '../Cookies/CookieBanner';
import { FiArrowRight } from 'react-icons/fi';
import Oursection from '../Oursection/Oursection';
import newSectionImage from '../../images/image.png';
import Blogsection from '../Blogsection/Blogsection';
import Faq from '../Faq/Faq';
import Inputsection from '../inputsection/Inputsection';
import { Link } from 'react-router-dom';

const RightSolutions = () => {
  return (
    <HelmetProvider>
      <div>
        <Helmet>
          <title>Why Choose FinPrime Consulting | Tailored Business Solutions</title>
          <meta
            name="description"
            content="Discover why businesses trust FinPrime Consulting. We craft tailored financial and compliance solutions by deeply understanding your unique goals and challenges."
            />
              <meta
              property="og:url"
            content="https://www.finprimeconsulting.com/rightsolutions"
          />
        </Helmet>
        <Navbar />
        <Rhero />
        <DropDown />
        <Inputsection />
        <Oursection />
        <div className="flex justify-center w-full my-16 px-4">
          <p className="text-center text-lg sm:text-xl md:text-2xl font-inter font-bold leading-snug max-w-3xl">
            We always try to step outside comfort zone. That's part of the reason we got{' '}
            <Link
              to="/technology/software-development"
              className="underline text-black hover:text-blue-600 transition-colors duration-200"
            >
              here
            </Link>.
          </p>
        </div>
        <Blogsection />
        <Faq />
        <Footer />
        <WhatsAppIcon />
        <CookieBanner />
      </div>
    </HelmetProvider>
  );
};

export default RightSolutions;

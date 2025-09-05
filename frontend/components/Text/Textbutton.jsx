import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';

const Textbutton = () => {
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

  return (
    <div
      ref={fadeElementRef}
      className={`mt-0 pt-14 pb-6 mb-12 pl-8 pr-4 sm:pl-12 sm:pr-8 md:px-16 lg:px-24 xl:px-28 flex flex-wrap gap-4 px-8 ${
        hasFadedIn ? 'animate-fadeinbottom' : ''
      }`}
    >
      <Link
        to="/about#Discover-More"
        className="text-xs sm:text-sm md:text-base font-inter py-3 px-6 rounded-[5px] bg-brandBlue tracking-[2px] text-white 
        hover:bg-cyan-500 transition-all duration-300 ease-out hover:bg-gradient-to-r hover:from-brandBlue hover:to-cyan-500"
      >
        Discover More
      </Link>
      <Link
        to="/about"
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="text-xs sm:text-sm md:text-base font-inter py-3 px-6 rounded-[5px] bg-brandBlue tracking-[2px] text-white font-medium 
        hover:bg-cyan-500 transition-all duration-300 ease-out hover:bg-gradient-to-r hover:from-brandBlue hover:to-cyan-500"
      >
        About
      </Link>
    </div>
  );
};

export default Textbutton;

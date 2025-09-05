import React, { useEffect, useRef, useState } from 'react';
import Certificates from '../cerificates/certifcate';

const Text1 = () => {
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
    <div className="px-6 sm:px-8 md:px-16 lg:px-24 xl:px-28 mt-10 sm:mt-20 lg:mt-36">
      <div
        ref={fadeElementRef}
        className={`py-4 sm:py-10 font-inter ${hasFadedIn ? 'animate-fadeinbottom' : ''}`}
      >
        <h4 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-center sm:text-left leading-snug text-black">
          Committed to your business growth
        </h4>

        <h4 className="mt-3 sm:mt-5 text-sm sm:text-lg lg:text-2xl text-center sm:text-left font-light text-black">
          We Provide Truly Prominent Accounting Services
        </h4>

        <hr className="my-6 sm:my-10 border-t-2 border-gray-300 w-full" />

        <div className="my-6 sm:my-10">
          <Certificates />
        </div>
      </div>
    </div>
  );
};

export default Text1;

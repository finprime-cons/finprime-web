import React, { useEffect, useRef, useState } from 'react';

const Atext1 = () => {


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
    <div>
        <div 
        ref={fadeElementRef}
        className={`flex flex-col w-full lg:pr-8 lg:pl-10 md:pl-8 md:pr-6 pl-6 pr-4 xl:pr-10 xl:pl-12 ${hasFadedIn ? 'animate-fadeinbottom' : ''}`}>
        <div className="flex flex-wrap justify-between text-xs sm:text-sm md:text-[16px] tracking-[1px]">
        <button className="flex-1 p-3 overflow-hidden 
          group bg-brandBlue   relative 
          transition-all duration-300 ease-out hover:bg-gradient-to-r hover:from-brandBlue uppercase hover:to-cyan-500  text-white">
            <span className="absolute right-0 w-10 h-32 -mt-12 transition-all duration-1000 
        transform translate-x-12 bg-white opacity-5 rotate-12 group-hover:-translate-x-[500px] ease">
            </span>
            Giving smartness to your business accounting firm in Dubai
          </button>
          <button className="flex-1 p-3 overflow-hidden 
          group bg-brandBlue  relative 
           transition-all duration-300  hover:bg-gradient-to-r hover:from-brandBlue uppercase hover:to-cyan-500 text-white 
            ease-out ">
            <span className="absolute right-0 w-10 h-32 -mt-12 transition-all duration-1000 
        transform translate-x-12 bg-white opacity-5 rotate-12 group-hover:-translate-x-[500px] ease">
            </span>
            Best Accounting Companies
          </button>
          <button className="flex-1 p-3 overflow-hidden 
          group bg-brandBlue  relative transition-all duration-300 ease-out hover:bg-gradient-to-r uppercase hover:from-brandBlue hover:to-cyan-500
          text-white ">
            <span className="absolute right-0 w-10 h-32 -mt-12 transition-all duration-1000 
        transform translate-x-12 bg-white opacity-5 rotate-12 group-hover:-translate-x-[500px] ease">
            </span>
            Corporate Tax Services
          </button>
          
        </div>
      </div>
    </div>
  )
}

export default Atext1
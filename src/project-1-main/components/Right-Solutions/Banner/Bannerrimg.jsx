import React, { useEffect, useRef, useState } from 'react';
import img from '../../../images/Banner/banner2.jpg'; 

const Bannerrimg = () => {

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



  const toRoman = (num) => {
    const romanNumerals = [
      { value: 1000, numeral: 'M' },
      { value: 900, numeral: 'CM' },
      { value: 500, numeral: 'D' },
      { value: 400, numeral: 'CD' },
      { value: 100, numeral: 'C' },
      { value: 90, numeral: 'XC' },
      { value: 50, numeral: 'L' },
      { value: 40, numeral: 'XL' },
      { value: 10, numeral: 'X' },
      { value: 9, numeral: 'IX' },
      { value: 5, numeral: 'V' },
      { value: 4, numeral: 'IV' },
      { value: 1, numeral: 'I' },
    ];

    let result = '';
    for (let i = 0; i < romanNumerals.length; i++) {
      while (num >= romanNumerals[i].value) {
        result += romanNumerals[i].numeral;
        num -= romanNumerals[i].value;
      }
    }
    return result;
  };

  const cardData = [
    { title: 'Bridging Loans', description: 'This is the description for Card 1This is the description for Card 1.' },
    { title: 'Development Finance', description: 'This is the description for CardThis is the description for Card 1.' },
    { title: 'Intermediaries', description: 'This is the description for Card This is the description for Card 1' },
  ];


const [hoveredIndex, setHoveredIndex] = useState(null);


  return (
    <div
      style={{
        backgroundImage: `url(${img})`,
      }}
      className="bg-cover bg-center min-h-[700px] sm:min-h-[1000px] w-full mx-auto
        flex flex-col justify-between"




    >
        <div className=" w-full text-white text-center pt-36 pb-28">









        
        <div
        ref={fadeElementRef}
        className={`  text-center ${hasFadedIn ? 'animate-fadeinbottom' : ''}`}> 
          <h3 className="text-2xl  sm:text-4xl md:text-6xl lg:text-7xl  xl:text-8xl font-light">YOUR <span className='font-bold'>PROJECT</span></h3>
          <h3 className="text-2xl sm:text-4xl md:text-6xl lg:text-7xl  xl:text-8xl font-light">FINANCE <span className='font-bold'>TO</span> PROGRESS</h3>
          <h3 className="text-2xl sm:text-4xl md:text-6xl lg:text-7xl  xl:text-8xl font-light">SIMPLE <span className='font-bold'>SHORT</span> TERM</h3>
        </div>
      </div>












      <div 
      ref={fadeElementRef}
      className='w-[68%] md:w-[70%] lg:w-[70%] xl:w-[60%]  h-auto sm:h-[650px]
       mx-auto grid grid-cols-1
       sm:grid-cols-3  '>
        {cardData.map((card, index) => (
          <div key={index}
            onMouseEnter={() => setHoveredIndex(index)} 
            onMouseLeave={() => setHoveredIndex(null)}
            className={`  text-white
             p-6 py-10 md:py-28 shadow-lg text-center
         ${hoveredIndex === index ? 'bg-black  bg-opacity-60 backdrop-blur-md transition-all duration-500 ' : 'bg-transparent'}`}>
            <div className="relative mx-auto py-2 my-4 w-[50%] sm:w-[50%] md:w-[90%]  lg:w-[80%]">
              





              {/* Top Border */}
                <div className={`absolute top-0 left-40 right-0 border-t-4 
                 border-white ${hoveredIndex === index ?'opacity-0':''}  transition-opacity 
               duration-300`}></div>
                <div className={`absolute top-0 left-0 right-40 border-t-4 
                 border-white ${hoveredIndex === index ?'opacity-0':''} transition-opacity 
               duration-300 `}></div>
  





                {/* Bottom Border */}
                <div className={`absolute bottom-0 left-40 right-0 border-b-4
                 border-white ${hoveredIndex === index ?'opacity-0':''} transition-opacity 
               duration-300`}></div>
                <div className={`absolute bottom-0 left-0 right-40 border-b-4
                 border-white ${hoveredIndex === index ?'opacity-0':''} transition-opacity 
               duration-300`}></div>




                {/* Left Border */}
                <div className={`absolute inset-y-0 left-0 border-l-4 border-white
                ${hoveredIndex === index ?'opacity-0':''} transition-opacity 
               duration-300`}></div>






                    {/* Right Border */}
                <div className={`absolute inset-y-0 right-0 border-r-4 border-white
                ${hoveredIndex === index ?'opacity-0':''} transition-opacity 
               duration-300`}></div>
                <h3 className="text-4xl md:text-6xl lg:text-9xl font-bold mb-2 text-center">M</h3>
            </div>
            <h4 className='text-xs sm:text-xs md:text-[15px] lg:text-xl xl:text-3xl font-semibold pt-7'>{card.title} 
                <span className='text-[8px] lg:text-xs font-light pl-2'>{`${toRoman(index + 1)}`}.</span></h4>
            <p className="text-white mb-6 pt-5 text-[10px] sm:text-xs md:text-sm">
              {card.description}
            </p>
            <button className={` border-2  px-4 py-2 text-[10px] md:text-md
             ${hoveredIndex === index ?'bg-white text-black':'bg-transparent text-white'} transition `}>
              find out more
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Bannerrimg;

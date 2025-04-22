import React, { useEffect, useRef, useState } from 'react';



const DropDown = () => {
  
  const [activeIndex, setActiveIndex] = useState(null);


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






  const Rquestion = [
    {
      question: "Fast Decision",
      answer: "React is a JavaScript library for building user interfaces.",
    },
    {
      question: "Rollover Loan",
      answer: "State is a built-in object that stores property values that belong to a component.",
    },
    {
      question: "No Credit Checks",
      answer: "Props are arguments passed into React components, allowing for dynamic data rendering.",
    },
    {
      question: "Simple Process",
      answer: "The virtual DOM is a lightweight copy of the actual DOM, allowing React to optimize rendering.",
    },
    {
      question: "No Hidden Costs",
      answer: "You can manage forms in React using controlled components or by using hooks.",
    },
  ];


  const toggleQuestion = (index) => {
    if (activeIndex === index) {
      setActiveIndex(null); 
    } else {
      setActiveIndex(index); 
    }
  };












  
  //  number to Roman numeral
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
      { value: 1, numeral: 'I' }
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

  return (
    <div
    ref={fadeElementRef}
    className=" flex  items-center justify-center bg-gray-200 pb-24">
      <div className={`space-y-4 w-[60%] ${hasFadedIn ? 'animate-fadeinbottom' : ''}`} >
        {Rquestion.map((item, index) => (
          <div key={index} className=" pb-2 mb-2">
            <div className="flex items-center">
              <div className="text-xs md:text-sm cursor-pointer mt-7 text-black mr-2"
               onClick={() => toggleQuestion(index)}>
                {`${toRoman(index + 1)}`}
              </div>
              <div className="text-sm  sm:text-[32px] font-semibold sm:ml-6 -mb-4 mt-5 text-left
              hover:animate-fadeInRightsmall
                text-black"
               onClick={() => toggleQuestion(index)}>
                {item.question}
              </div>
            
            </div>
            <hr className="border-black my-2" />
            {activeIndex === index && (
              <p className="mt-9 ml-9 text-[16px] tracking-[1px]  font-raleway md:text-base text-gray-700">{item.answer}</p>
            )}
          </div>
        ))}
      </div>
    </div>

  );
};

export default DropDown;


import React, { useEffect, useRef, useState } from 'react';
import { HiOutlineArrowSmallRight } from "react-icons/hi2";

const Faq = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleOpen = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqs = [
    {
      id: 1,
      question: "What services does your accounting firm offer?",
      answer: "We offer a range of services including tax preparation, bookkeeping, and financial consulting."
    },
    {
      id: 2,
      question: "How can I schedule a consultation?",
      answer: "You can schedule a consultation by visiting our website or calling our office directly."
    },
    {
      id: 3,
      question: "What are your fees?",
      answer: "Our fees vary depending on the services required. Please contact us for a detailed quote."
    },
    {
      id: 4,
      question: "Do you provide services to individuals as well as businesses?",
      answer: "Yes, we cater to both individual clients and businesses of all sizes."
    },
  ];


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
      className={` flex items-center justify-center   md:ml-8 md:mr-6 xl:ml-12 xl:mr-10 lg:mr-8 lg:ml-10 ml-6 mr-4 mb-[28px] mt-[28px] sm:mt-28 sm:mb-28  ${hasFadedIn ? 'animate-fadeinbottom' : ''}`}>
      <div className='px-5 w-full md:w-[90%] lg:w-[80%] 2xl:w-[70%] sm:px-10 pt-5 pb-5 bg-gray-100 sm:p-14'>
        <h1 className='text-xl sm:text-4xl pt-10 sm:pt-0 font-raleway font-semibold mb-8'>Frequently Asked Questions</h1>
        <div className='space-y-5 pt-4'>
          {faqs.map((faq, index) => (
            <div key={faq.id}>
              <div className="flex group justify-between w-full items-center my-2 p-1 transition duration-200 " onClick={() => toggleOpen(index)}>
                <h4 className="font-semibold w-[60%] tracking-[1px] leading-5 sm:leading-7 sm:w body group-hover:text-brandBlue  text-[16px] sm:text-[22px] font-raleway cursor-pointer" >
                  {faq.question}
                </h4>
                <HiOutlineArrowSmallRight

                  className={`text-4xl md:text-5xl group-hover:bg-black group-hover:text-white sm:w rounded-full border border-black p-2 transition-transform transform ${openIndex === index ? 'rotate-90' : ''}`}
                />
              </div>
              {openIndex === index && (
                <p className="pl-4 text-[16px] tracking-[1px] px-10 mb-5 font-raleway md:text-lg text-gray-600">{faq.answer}</p>
              )}
              <hr className='my-4 border-gray-400' />
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}

export default Faq;


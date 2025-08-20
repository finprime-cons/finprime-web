import React, { useState } from 'react';
import { HiOutlineArrowSmallDown } from "react-icons/hi2";

const Dropdown = () => {
  const [openIndexes, setOpenIndexes] = useState([0, 1]);

  const toggleOpen = (index) => {
    if (openIndexes.includes(index)) {
      setOpenIndexes(openIndexes.filter((i) => i !== index));
    } else {
      setOpenIndexes([...openIndexes, index]);
    }
  };

  const faqs = [
    {
      id: 1,
      question: "What we do",
      answer: "Quality and timeliness' are our core values which our team always ensures is never broken in any circumstances"
    },
    {
      id: 2,
      question: "What we Believe",
      answer: "We believe that bold steps taken by businesses must be rewarded in the best way. We seek out our clients to capture their greatest opportunities and guide them to do the right thing at the right time."
    },
  ];

  return (
    <div className='px-4 sm:px-8 md:px-16 lg:px-24 xl:px-28 mt-24 mb-24'>
      <div className=''> 
        <div className='space-y-5'>
          {faqs.map((faq, index) => (
            <div key={faq.id} className="border-b">
              <div 
                className={`flex group justify-between items-center my-2 p-4 md:p-8 transition duration-200 cursor-pointer`} 
                onClick={() => toggleOpen(index)}>
                <h3 className={`font-semibold font-inter text-2xl group-hover:text-brandBlue md:text-4xl`}>
                  {faq.question}
                </h3>
                <div className="bg-[#1B1B3A] rounded-full p-2">
                  <HiOutlineArrowSmallDown className={`text-2xl sm:text-2xl lg:text-3xl text-white`} />
                </div>
              </div>
              {openIndexes.includes(index) && (
                <p className="md:px-20 lg:px-28 px-10 font-inter mb-10 text-black text-md leading-7 tracking-[1px] md:text-[16px]">
                  {faq.answer}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Dropdown;

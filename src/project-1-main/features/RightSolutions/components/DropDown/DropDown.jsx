import React, { useEffect, useRef, useState } from "react";

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
      question: "Client-Centric, Insight-Driven",
      answer:
        "From your very first interaction with FinPrime, our focus is on you. We listen carefully—not just to what you say, but also to what your business numbers reveal. Whether you’re a startup seeking efficient bookkeeping or a growing enterprise navigating complex tax structures, we take the time to understand both the minute details and major pain points. Your concerns become our mission.",
    },
    {
      question: "Deep Dive Diagnostics",
      answer:
        "Before we propose solutions, we conduct a thorough diagnostic of your existing financial processes, tax structure, internal controls, and compliance status. This deep-dive analysis helps us pinpoint inefficiencies, potential risks, and opportunities for optimization—ensuring that no aspect is overlooked.",
    },
    {
      question: "Solutions with Clarity",
      answer:
        "Based on our findings, we build bespoke solutions that align with your business objectives and regulatory requirements. Whether it’s implementing a streamlined accounting system, offering proactive tax advisory, or supporting with AML compliance, we design every service around your exact needs—not just what’s standard in the market.",
    },
    {
      question: "Working with you, not just for you",
      answer:
        "Our team of experienced professionals maintains open lines of communication throughout the engagement, ensuring clarity, accountability, and smooth implementation. We explain the why behind every decision so that you’re always informed and confident in the way forward",
    },
    {
      question: "Beyond Compliance—Towards Growth",
      answer:
        "Our goal is not just to keep your business compliant but to help it grow. By transforming financial data into actionable insights, we empower you to make smarter decisions. Monthly MIS reports, cash flow forecasts, and performance dashboards are some of the tools we provide to keep you in control and ahead of the curve.",
    },
    {
      question: "Your Strategic CFO Partner",
      answer:
        "At FinPrime, we don’t view ourselves as just your consultants—we strive to be your long-term partners. As your business evolves, so do our services. We remain adaptive, proactive, and committed to supporting your journey every step of the way.",
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
      { value: 1000, numeral: "M" },
      { value: 900, numeral: "CM" },
      { value: 500, numeral: "D" },
      { value: 400, numeral: "CD" },
      { value: 100, numeral: "C" },
      { value: 90, numeral: "XC" },
      { value: 50, numeral: "L" },
      { value: 40, numeral: "XL" },
      { value: 10, numeral: "X" },
      { value: 9, numeral: "IX" },
      { value: 5, numeral: "V" },
      { value: 4, numeral: "IV" },
      { value: 1, numeral: "I" },
    ];

    let result = "";
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
      className=" flex  items-center justify-center bg-gray-200 pb-24"
    >
      <div
        className={`space-y-4 w-[60%] ${
          hasFadedIn ? "animate-fadeinbottom" : ""
        }`}
      >
        {Rquestion.map((item, index) => (
          <div key={index} className=" pb-2 mb-2">
            <div className="flex items-center">
              <div
                className="text-xs md:text-sm cursor-pointer mt-7 text-black mr-2"
                onClick={() => toggleQuestion(index)}
              >
                {`${toRoman(index + 1)}`}
              </div>
              <div
                className="text-sm  sm:text-[32px] font-semibold sm:ml-6 -mb-4 mt-5 text-left
              hover:animate-fadeInRightsmall
                text-black"
                onClick={() => toggleQuestion(index)}
              >
                {item.question}
              </div>
            </div>
            <hr className="border-black my-2" />
            {activeIndex === index && (
              <p className="mt-9 ml-9 text-[16px] tracking-[1px]  font-raleway md:text-base text-gray-700">
                {item.answer}
              </p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default DropDown;

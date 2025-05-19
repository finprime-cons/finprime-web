import React, { useEffect, useRef, useState } from "react";

const BottomDropDown = () => {
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
      question: " Discovery & Onboarding",
      answer1: "• Initial consultation to understand your business",
      answer2: "• Collect relevant documents & past records",
      answer3: "• Define scope of services and timelines",
    },
    {
      question: "System Setup & Transition",
      answer1:
        "• Design the Plan of Action- Scheduling responsibilities for both sides",
      answer2:
        "• Finalize the Software or migration to the best software solution",
      answer3: "",
    },
    {
      question: " Monthly Data Sharing",
      answer1:
        "• Sharing details and documents to us as per our unique checklist",
      answer2: "• Secure & organized data collection",
      answer3: "",
    },
    {
      question: "Accounting, Bookkeeping & Tax",
      answer1: "• Record and reconcile all financial transactions",
      answer2: "• Prepare and file relevant tax returns on time",
      answer3:
        "• Sending periodic reminders about due dates and relevant deadlines",
    },
    {
      question: " Monthly Review Meeting",
      answer1: "• Discuss financial performance & MIS highlights",
      answer2: "• Raise red flags or action items",
      answer3: "• Address your questions and offer strategic advice",
    },
    {
      question: " Monthly MIS Report Submission",
      answer1: "• MIS reports as agreed in Initial meeting",
      answer2: "• Financial Reports with insights and comparisons",
      answer3: "• Any other specific details relating to Accounts and tax",
    },
    {
      question: "Ongoing Support & Advisory",
      answer1: "• Business insights and forecasting",
      answer2: "• Regulatory guidance & audit support",
      answer3: "• Scalability as your business grows",
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
      className=" flex  items-center justify-center bg-gray-200 pb-24 "
    >
      <div
        className={`space-y-4 w-[60%] ${
          hasFadedIn ? "animate-fadeinbottom" : ""
        }`}
      >
        {Rquestion.map((item, index) => (
          <div key={index} className=" pb-2 mb-2 mt-20">
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
              <>
                <p className="mt-9 ml-9 text-[16px] tracking-[1px] font-raleway md:text-base text-gray-700">
                  {item.answer1}
                </p>
                <p className="mt-9 ml-9 text-[16px] tracking-[1px] font-raleway md:text-base text-gray-700">
                  {item.answer2}
                </p>
                <p className="mt-9 ml-9 text-[16px] tracking-[1px] font-raleway md:text-base text-gray-700">
                  {item.answer3}
                </p>
              </>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default BottomDropDown;

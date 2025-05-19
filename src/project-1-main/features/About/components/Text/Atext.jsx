import React, { useEffect, useRef, useState } from "react";
import { useLocation } from "react-router-dom";

const Atext = () => {
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

  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const element = document.getElementById(location.hash.substring(1));
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location]);

  return (
    <div id="Discover-More" ref={fadeElementRef} className="py-8">
      <div
        className="flex flex-col pb-6 pt-10  
      justify-center text-center space-y-3 w-full md:w-4/5 sm:mx-auto sm:px-4"
      >
        <h4
          className={`text-4xl md:text-4xl font-medium text-center md:text-left
             ${hasFadedIn ? "animate-fadeinbottom" : ""}`}
        >
          We’re Unique
        </h4>

        <div
          className={` xl:pr-40 md:pl-5 lg:pl-10 pl-6 sm:pl-0 pr-4 sm:pr-0  xl:pl-40 pt-5 md:pt-20 space-y-6 
          text-left text-black md:text-left ${
            hasFadedIn ? "animate-fadeinbottom" : ""
          }`}
        >
          <h4 className="font-semibold leading-loose text-xl font-raleway tracking-[1px]  md:text-[22px]">
            Finprime is a global consulting firm with its office in the heart of
            Dubai, Business Bay
          </h4>
          <p className="leading-loose text-lg sm:text-[16px] font-raleway">
            We understand the true spirit of each entrepreneur and help resolve
            their challenges and partner with them to achieve their biggest
            dreams.
          </p>
          <p className="leading-loose text-lg sm:text-[16px] font-raleway">
            Our success depends on the deep bond we have with our customers, and
            a divergent and resilient team that ensures the expectation of
            clients are always exceeded.
          </p>

          <p className="leading-loose text-lg sm:text-[16px] font-raleway">
            ‘Quality and timeliness are our core values which our team always
            ensures are never broken in any circumstances
          </p>
          <p className="leading-loose text-lg sm:text-[16px] font-raleway">
            From Audit & Assurance to Taxation and Accounting and Business
            Support, Business Advisory and Corporate Strategy to M&A, Fin Prime
            is synonymous with reliability and international best practices as
            it provides handholding in a complex jurisdiction. We have built
            trusted and enduring partnerships by providing integrated solutions
            for setting up the business and managing your regulatory
            compliances.
          </p>
          <p className="leading-loose text-lg sm:text-[16px] font-raleway">
            With a good reputation in UAE and synergy benefits from our Bahrain
            and India offices, we set the path for our clients with
            cross-country operations.
          </p>
          <p className="leading-loose text-lg sm:text-[16px] font-raleway">
            A vibrant cross-functional and multidisciplinary team headed by a
            dynamic leadership consistently ensures efficient results while a
            broad reach and expertise make us the preferred choice of SMEs and
            MNCs.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Atext;

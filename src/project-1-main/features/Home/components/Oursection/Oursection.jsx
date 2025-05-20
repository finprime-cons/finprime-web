import React, { useEffect, useRef, useState } from "react";
import img1 from "../../../../assets/images/oursection/section1.jpg";
import img2 from "../../../../assets/images/team/Ashker.jpg";
import img3 from "../../../../assets/images/oursection/unique_brand_experince.jpg";
import { Link, useLocation } from "react-router-dom";

const Card = ({ title, image, alt }) => {
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
      className={`relative overflow-hidden transition-transform duration-200 
      ${hasFadedIn ? "animate-fadeinbottom" : ""}`}
    >
      <img
        src={image}
        alt={alt}
        className="w-full h-[400px] lg:h-[500px] object-cover object-top hover:scale-110 duration-500 "
      />
      <div className="absolute left-0 right-0 flex justify-center p-4 bottom-16">
        <h4 className="font-bold text-white text-md sm:text-lg font-raleway lg:text-xl">
          {title}
        </h4>
      </div>
    </div>
  );
};

const OurSection = () => {
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

  const cardData = [
    {
      title: "Power of Finprime",
      image: img1,
      link: "/about#our-team",
      alt: "Finprime Business & Tax Consultancy Team",
    },
    {
      title: "Lets Meet CEO",
      image: img2,
      link: "/CEO",
      alt: "Finprime Business & Tax Consultancy Team",
    },
    {
      title: "Unique Brand Experience",
      image: img3,
      link: "/CEO",
      alt: "Business Consultancy Services in UAE",
    },
  ];

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
    <div
      id="ceo"
      ref={fadeElementRef}
      className={`mt-5 lg:mt-16 sm:mx-6 md:ml-8 md:mr-6 lg:mr-8 lg:ml-10 xl:mr-10 xl:ml-12 ml-6 mr-4  ${
        hasFadedIn ? "animate-fadeinbottom" : ""
      }`}
    >
      <div className="px-2 pt-8 pb-4 bg-pink-50 lg:pb-8 sm:mx-0 sm:px-8 md:px-6 lg:px-10">
        <div className="flex flex-col justify-between mx-2 mb-1 text-center sm:flex-row">
          <h4 className="mb-0 text-xl font-semibold text-center body sm:text-2xl font-khula sm:text-left sm:mb-0">
            Relax. We've got you.
          </h4>
          <h5 className="mt-2 text-center text-md body sm:text-2xl font-khula sm:text-right">
            The best results
          </h5>
        </div>
        <div className="flex flex-wrap justify-center gap-0">
          {cardData.map((card, index) => (
            <Link
              to={card.link}
              className="w-full p-2 cursor-pointer sm:w-1/2 md:w-1/3"
              key={index}
            >
              <Card title={card.title} image={card.image} alt={card.alt} />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OurSection;

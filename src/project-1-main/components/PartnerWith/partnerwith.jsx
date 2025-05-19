import React, { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";
import "./partnerwith.css";

// Import images
import ajmanFreeZone from "../../assets/images/partner/ajman-free-zone.jpg";
import ajmanMediaFreeZone from "../../assets/images/partner/ajman-media-free-zone.jpg";
import dubaiHealthcareCity from "../../assets/images/partner/dubai-healthcare-city.jpg";
import difc from "../../assets/images/partner/dubai-international-financial-centre.jpg";
import dubaiMediaCity from "../../assets/images/partner/dubai-media-city.jpg";
import dmcc from "../../assets/images/partner/dubai-multi-commodities-centre.jpg";
import ifza from "../../assets/images/partner/dubai-silicon-oasis-ifza.jpg";
import dwtc from "../../assets/images/partner/dubai-world-trade-centre.jpg";
import jafza from "../../assets/images/partner/jebel-ali-free-zone.jpg";
import meydanFreeZone from "../../assets/images/partner/meydan-free-zone.jpg";
import rakFreeZone from "../../assets/images/partner/rak-free-zone.jpg";
import sharjahAirportFreeZone from "../../assets/images/partner/sharjah-airport-free-zone.jpg";
import sharjahMediaCity from "../../assets/images/partner/sharjah-media-city.jpg";
import sharjahPublishingCity from "../../assets/images/partner/sharjah-publishing-city-free-zone.jpg";
import uaqFreeZone from "../../assets/images/partner/uaq-free-trade-zone.jpg";

const PartnerWithItem = () => {
  const imageList = [
    ajmanMediaFreeZone,
    dubaiHealthcareCity,
    difc,
    dubaiMediaCity,
    dmcc,
    ifza,
    dwtc,
    jafza,
    meydanFreeZone,
    rakFreeZone,
    sharjahAirportFreeZone,
    sharjahMediaCity,
    sharjahPublishingCity,
    uaqFreeZone,
    ajmanFreeZone,
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
    if (currentElement) fadeInObserver.observe(currentElement);

    return () => {
      if (currentElement) fadeInObserver.unobserve(currentElement);
    };
  }, [hasFadedIn]);

  return (
    <div
      ref={fadeElementRef}
      className={`mb-[35px] sm:mt-44 sm:mb-44 lg:mt-54 lg:mb-64 font-khula xl:px-12 lg:px-10 md:px-8 px-6 pt-4 md:space-y-3 ${
        hasFadedIn ? "animate-fadeinbottom" : ""
      }`}
    >
      <p className="mb-[35px] sm:mb-20 lg:mb-30 text-[34px] md:text-6xl leading-9  lg:text-6xl xl:text-8xl font-bold text-left leading-tight">
        We are authorized Partners with,
      </p>

      <div className="overflow-hidden bg-white ">
        <Swiper
          modules={[Autoplay]}
          spaceBetween={0}
          slidesPerView={5}
          loop={true}
          autoplay={{
            delay: 0,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          speed={5000}
          grabCursor={true}
          breakpoints={{
            320: { slidesPerView: 2 },
            640: { slidesPerView: 3 },
            768: { slidesPerView: 4 },
            1024: { slidesPerView: 6 },
          }}
        >
          {imageList.map((img, idx) => (
            <SwiperSlide key={idx}>
              <div
                className="partners-img"
                style={{
                  backgroundImage: `url(${img})`,
                  width: "160px",
                  height: "160px",
                  backgroundSize: "contain",
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "center",
                }}
              ></div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default PartnerWithItem;

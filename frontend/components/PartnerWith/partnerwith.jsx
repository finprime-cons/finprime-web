import React, { useEffect, useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/autoplay';
import './partnerwith.css';

import ajmanFreeZone from '../../images/partner/ajman-free-zone.jpg';
import ajmanMediaFreeZone from '../../images/partner/ajman-media-free-zone.jpg';
import dubaiHealthcareCity from '../../images/partner/dubai-healthcare-city.jpg';
import difc from '../../images/partner/dubai-international-financial-centre.jpg';
import dubaiMediaCity from '../../images/partner/dubai-media-city.jpg';
import dmcc from '../../images/partner/dubai-multi-commodities-centre.jpg';
import ifza from '../../images/partner/dubai-silicon-oasis-ifza.jpg';
import dwtc from '../../images/partner/dubai-world-trade-centre.jpg';
import jafza from '../../images/partner/jebel-ali-free-zone.jpg';
import meydanFreeZone from '../../images/partner/meydan-free-zone.jpg';
import rakFreeZone from '../../images/partner/rak-free-zone.jpg';
import sharjahAirportFreeZone from '../../images/partner/sharjah-airport-free-zone.jpg';
import sharjahMediaCity from '../../images/partner/sharjah-media-city.jpg';
import sharjahPublishingCity from '../../images/partner/sharjah-publishing-city-free-zone.jpg';
import uaqFreeZone from '../../images/partner/uaq-free-trade-zone.jpg';

const PartnerWithItem = () => {
  const partners = [
    { img: ajmanMediaFreeZone, link: 'https://ajmanmediacity.amcfz.ae/' },
    { img: dubaiHealthcareCity, link: 'https://www.dhcc.ae/' },
    { img: difc, link: 'https://landing.difc.ae/' },
    { img: dubaiMediaCity, link: 'https://dmc.ae/' },
    { img: dmcc, link: 'https://dmcc.ae/' },
    { img: ifza, link: 'https://ifza.com/en/' },
    { img: dwtc, link: 'https://www.dwtc.com/en/' },
    { img: jafza, link: 'https://www.commitbiz.com/' },
    { img: meydanFreeZone, link: 'https://www.meydanfz.ae/' },
    { img: rakFreeZone, link: 'https://www.rakez.com' },
    { img: sharjahAirportFreeZone, link: 'https://www.saif-zone.com/en' },
    { img: sharjahMediaCity, link: 'https://startwith.shams.ae/' },
    { img: sharjahPublishingCity, link: 'https://spcfz.ae/' },
    { img: uaqFreeZone, link: 'https://uaqftz.gov.ae/' },
    { img: ajmanFreeZone, link: 'https://ajmanfreezone.afz.gov.ae/' },
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
      className={`w-full px-6 sm:px-8 md:px-16 lg:px-24 xl:px-28 mb-16 ${
        hasFadedIn ? 'animate-fadeinbottom' : ''
      }`}
    >
      <p
        className="mb-8 sm:mb-12 lg:mb-16 text-center sm:text-left text-2xl sm:text-4xl md:text-5xl font-medium text-black"
        style={{ fontFamily: 'Inter, sans-serif' }}
      >
        Your valued channel partners
      </p>

      <div className="overflow-hidden bg-white w-full flex justify-center items-center">
        <Swiper
          modules={[Autoplay]}
          spaceBetween={0}
          loop={true}
          grabCursor={true}
          autoplay={{
            delay: 0,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          speed={5000}
          breakpoints={{
            320: { slidesPerView: 2 },
            640: { slidesPerView: 3 },
            768: { slidesPerView: 4 },
            1024: { slidesPerView: 6 },
          }}
          className="w-full max-w-none px-0"

        >
          {partners.map((partner, idx) => (
            <SwiperSlide key={idx} className="flex justify-center items-center xl:pl-0 ">
              <a
                href={partner.link}
                target="_blank"
                rel="noopener noreferrer"
                className="block"
              >
                <div
                  className="partners-img"
                  style={{
                    backgroundImage: `url(${partner.img})`,
                    width: '160px',
                    height: '160px',
                    backgroundSize: 'contain',
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'center',
                  }}
                ></div>
              </a>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default PartnerWithItem;

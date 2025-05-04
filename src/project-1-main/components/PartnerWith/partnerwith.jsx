import React, { useEffect, useRef, useState } from 'react';
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
import "./partnerwith.css";

const partnerWithItem = () => {
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
        if (currentElement) {
            fadeInObserver.observe(currentElement);
        }

        return () => {
            if (currentElement) {
                fadeInObserver.unobserve(currentElement);
            }
        };
    }, [hasFadedIn]);
    const duplicateCount = 200;
    const carouselImages = Array(duplicateCount).fill([...imageList]).flat();
    return (
        <div
            ref={fadeElementRef}
            className={` mb-[35px] sm:mt-44 sm:mb-44 lg:mt-54 lg:mb-64 font-khula xl:px-12 lg:px-10 md:px-8 px-6 pt-4 md:space-y-3 ${hasFadedIn ? 'animate-fadeinbottom' : ''}`}>
            <h1 className='mb-[35px] sm:mb-20 lg:mb-30 text-[34px] sm:text-[50px] md:text-[72px] lg:text-[90px] xl:text-[120px] font-bold text-left leading-tight'>
                We are authorized Partners with,
            </h1>

            <div className="overflow-hidden bg-white">
                <section className="partners">
                    <div className="partners-img-container">
                        {carouselImages.map((image, index) => (
                            <div
                                key={index}
                                className="partners-img"
                                style={{
                                    backgroundImage: `url(${image})`,
                                }}
                            ></div>
                        ))}
                    </div>
                </section>
            </div>
        </div>
    );
};

export default partnerWithItem;

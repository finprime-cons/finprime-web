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

    return (
        <div
            ref={fadeElementRef}
            className={`my-[35px] sm:my-20 font-khula xl:px-12 lg:px-10 md:px-8 px-6 pt-4 md:space-y-3 ${hasFadedIn ? 'animate-fadeinbottom' : ''}`}>
            <h1 className='text-[34px] md:text-6xl leading-9 lg:text-6xl xl:text-9xl font-bold text-left'>
                We are authorized Partners with,
            </h1>

            <div
                className="w-full mt-[50px] md:mt-[100px] mx-auto overflow-hidden"
                style={{ animation: 'slideIn 1s ease-out' }}
            >
                <div className="flex gap-10 p-4 bg-white animate-scrollImages">
                    {[...imageList, ...imageList].map((imageSrc, index) => (
                        <img
                            key={index}
                            src={imageSrc}
                            alt={`Partner logo ${index + 1}`}
                            className="h-[100px] md:h-[200px] w-[100px] md:w-[200px] object-cover rounded shrink-0"
                        />
                    ))}
                </div>

            </div>
        </div>
    );
};

export default partnerWithItem;

import React, { useEffect, useRef, useState } from 'react';

const BelowFooter = () => {



  return (
    <footer
      className='bg-black text-gray-200 sm:p-8 -z-10 xl:pr-10 xl:pl-12 lg:pl-10 lg:pr-8 md:pl-8 md:pr-6 pl-6 pr-4'>
      <div className={`flex flex-col md:flex-row  justify-between items-start 
       md:items-center space-y-4 md:space-y-0 `}>
        <div className="inline-block text-md lg:text-xl ">
          <h3 className="font-khula text-[18px] font-medium mt-[24px] sm:mt-0">All Rights Reserved © Finprime
            <br /><span className='font-khula font-light text-[16px] '>Design Developed by <a href="https://zorro.ae/" target="_blank"
              rel="noopener noreferrer" className='hover:text-white text-yellow-500 font-bold'>Zorro Arab Emirates</a> </span>
          </h3>
        </div>
        <div>
          <ul className="flex body space-x-4 text-sm lg:text-[15px] mt-[24px] sm:mt-0 mb-[24px] sm:mb-0">
            {/* <li><a href="" className="font-raleway text-white hover:text-cyan-500 hover-underline-animation pb-2">Privacy Policy</a></li>
            <li><a href="#" className="font-raleway text-white hover:text-cyan-500 hover-underline-animation pb-2">Cookie Policy</a></li>
            <li><a href="#" className="font-raleway text-white hover:text-cyan-500 hover-underline-animation pb-2">Terms of Use</a></li>
            <li><a href="#" className="font-raleway text-white hover:text-cyan-500 hover-underline-animation pb-2">Press Contact</a></li> */}
          </ul>
        </div>
      </div>
      {/* <div 
      className={`  font-raleway  mt-8 space-y-4 text-[10px] md:text-xs lg:text-[14PX]  ${hasFadedIn ? 'animate-fadeinbottom' : ''}`}>
        <p className='font-raleway leading-[24px]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus 
            perspiciatis sunt ad, vero, alias sint cupiditate eveniet qui commodi facilis est
            quibusdam minus ducimus neque vel! Adipisci maxime provident voluptatum.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus 
            perspiciatis sunt ad, vero, alias sint cupiditate eveniet qui commodi facilis est
            quibusdam minus ducimus neque vel! Adipisci maxime provident voluptatum.
        </p>
        <p className='font-raleway leading-[24px]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus 
            perspiciatis sunt ad, vero, alias sint cupiditate eveniet qui commodi facilis est
            quibusdam minus ducimus neque vel! Adipisci maxime provident voluptatum.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus 
            perspiciatis sunt ad, vero, alias sint cupiditate eveniet qui commodi facilis est
            quibusdam minus ducimus neque vel! Adipisci maxime provident voluptatum.
        </p>
        <h4 className="font-semibold font-khula pt-4 text-md lg:text-[15px] body">Complaints</h4>
        <p className='font-raleway leading-[24px]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus 
            perspiciatis sunt ad, vero, alias sint cupiditate eveniet qui commodi facilis est
            quibusdam minus ducimus neque vel! Adipisci maxime provident voluptatum.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus 
            perspiciatis sunt ad, vero, alias sint cupiditate eveniet qui commodi facilis est
            quibusdam minus ducimus neque vel! Adipisci maxime provident voluptatum.
        </p>
        <h1 className="font-semibold font-khula pt-4 body text-md lg:text-[15px]">Belong Fees</h1>
        <p className='font-raleway leading-[24px]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus 
            perspiciatis sunt ad, vero, alias sint cupiditate eveniet qui commodi facilis est
            quibusdam minus ducimus neque vel! Adipisci maxime provident voluptatum.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus 
            perspiciatis sunt ad, vero, alias sint cupiditate eveniet qui commodi facilis est
            quibusdam minus ducimus neque vel! Adipisci maxime provident voluptatum.
        </p>
      </div> */}
    </footer>
  );
}

export default BelowFooter;

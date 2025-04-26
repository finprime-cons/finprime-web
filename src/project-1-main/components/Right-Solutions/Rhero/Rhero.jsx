import React from 'react';
import { useState, useEffect } from "react";




const Rhero = () => {


  const [isPanelOpen, setIsPanelOpen] = useState(false);

  const togglePanel = () => {
    setIsPanelOpen((prev) => !prev);
  };



  useEffect(() => {
    if (isPanelOpen) {

      document.body.style.overflow = 'hidden';
    } else {

      document.body.style.overflow = 'auto';
    }


    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isPanelOpen]);


  return (
    <div className="flex  pt-20 bg-gray-200">
      <div className=" animate-fadeinbottom  sm:ml-20 sm:mr-20 bg-gray-200 p-10
        flex w-full justify-center">
        <div className='text-center'>
          <h4 className="animate-fadeinleft text-4xl sm:text-5xl md:text-8xl mt-16 mb-1">WHY WORK WITH</h4>
          <h4 className="animate-fadeinleft text-4xl sm:text-5xl md:text-8xl md:mt-6 mb-4">FINPRIME CONSULTING?</h4>
        </div>
      </div>
    </div>
  );
};

export default Rhero;

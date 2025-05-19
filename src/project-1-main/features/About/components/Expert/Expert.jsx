import React, { useState, useEffect } from "react";
import Murshina_A from "../../../../assets/images/team/Murshina_A.jpg";
import Hiba_Farook from "../../../../assets/images/team/Hiba_Farook.jpg";
import Ashker_Cv from "../../../../assets/images/team/Ashker_Cv.jpg";
import Abood_Wadi from "../../../../assets/images/team/Abood_Wadi.jpg";
import Zain_Rabab from "../../../../assets/images/team/Zain_Rabab.jpg";
import Ishmail_martin_Muga from "../../../../assets/images/team/Ishmail_martin_Muga.jpg";
import Siljo_Devassy from "../../../../assets/images/team/Siljo_Devassy.jpg";
import Mohammed_Fayyaz_Majeed from "../../../../assets/images/team/Mohammed_Fayyaz_Majeed.jpg";
import Althaf from "../../../../assets/images/team/althaf.png";

const cardsData = [
  {
    image: Ashker_Cv,
    alt: "C.A Ashker Kareem",
    name: "C.A Ashker Kareem",
    position: <>CEO & Founder</>,
    number: 1,
  },

  {
    image: Abood_Wadi,
    alt: "Abdul Rahman AA Wadi",
    name: "Abdul Rahman AA Wadi",
    position: "Business Development Manager",
    number: 2,
  },
  {
    image: Althaf,
    alt: "Mohamed Althaf",
    name: "Mohamed Althaf",
    position: "Head of Business Development & Operations Excellence",
    number: 3,
  },
  {
    image: Zain_Rabab,
    alt: "C.A Zain Rabab",
    name: "C.A Zain Rabab",
    position: "Audit Manager - Audit and Assurance",
    number: 4,
  },
  {
    image: Ishmail_martin_Muga,
    alt: "Ishmail Martin Muga",
    name: "Ishmail Martin Muga",
    position: "Accounting Manager - Taxation",
    number: 5,
  },
  {
    image: Siljo_Devassy,
    alt: "Siljo Devassy",
    name: "Siljo Devassy",
    position: "Manager - Finance and Tax",
    number: 6,
  },

  {
    image: Hiba_Farook,
    alt: "Hiba Farook",
    name: "Hiba Farook",
    position: "HR and Recruitment Manager",
    number: 7,
  },
  {
    image: Murshina_A,
    alt: "Murshina A",
    name: "Murshina A",
    position: "Account Manager - Accounting Service",
    number: 8,
  },
  {
    image: Mohammed_Fayyaz_Majeed,
    alt: "Mohammed Fayyaz Majeed",
    name: "Mohammed Fayyaz Majeed",
    position: "Digital Marketing Manager",
    number: 9,
  },
];

const Expert = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedCard, setSelectedCard] = useState(null);

  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [isModalOpen]);

  const handleEnquiryClick = (card) => {
    setSelectedCard(card);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedCard(null);
  };

  return (
    <div className="xl:ml-12 xl:mr-10 lg:ml-10 lg:mr-8 md:ml-8 md:mr-6 ml-6 mr-4 max-w-screen  md:mb-20">
      <div
        id="our-team"
        className={`flex flex-col md:flex-row mb-20 justify-between items-center bg-gray-100 mt-16 pt-8 pb-8 md:px-8`}
      >
        <h5 className="text-4xl md:text-4xl font-semibold mb-4 md:mb-0 text-center md:text-left">
          Our Team
        </h5>
        <button
          className="bg-gray-950 text-white px-5 py-3 rounded-[5px] transition-all font-raleway font-medium tracking-[1px] duration-300 text-xs md:text-[16px] 
        ease-out hover:bg-gradient-to-r hover:from-brandBlue hover:to-cyan-500 mt-4 md:mt-0"
        >
          All Access Articles
        </button>
      </div>

      <div className="flex flex-wrap justify-center gap-6">
        {cardsData.map((card, index) => (
          <div
            key={card.number}
            className="w-full sm:w-2/5 xl:w-1/4  bg-white overflow-hidden mb-5 md:mb-12"
          >
            <div className="relative">
              <img
                src={card.image}
                alt={card.alt}
                className="w-full h-[350px] md:h-[400px] lg:h-[400px] object-top object-cover rounded-6xl"
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black via-black/50 to-transparent text-white p-4 rounded-b-6xl">
                <p className="text-center text-lg lg:text-2xl uppercase font-semibold">
                  {card.name}
                </p>
                <p className="text-center text-sm font-light">
                  {card.position}
                </p>
                <button
                  onClick={() => handleEnquiryClick(card)}
                  className="relative mt-4 text-xs lg:text-[16px] font-raleway font-medium tracking-[1px] px-6 py-3 rounded-[5px] bg-gray-950 text-white hover:bg-gradient-to-r hover:from-brandBlue hover:to-cyan-500 transition-all duration-300 ease-out block mx-auto"
                >
                  <span className="absolute inset-0 w-10 h-32 transition-all duration-1000 transform translate-x-12 bg-white opacity-5 rotate-12 group-hover:-translate-x-[500px] ease"></span>
                  Enquiry
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {isModalOpen && selectedCard && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 px-5 md:mx-0">
          <div className="bg-brandBlue w-full max-w-2xl p-6 rounded-lg relative">
            <button
              onClick={handleCloseModal}
              className="absolute top-2 right-4 text-white hover:text-cyan-500 text-[16px]"
            >
              Close
            </button>

            <div className="w-full p-4 flex flex-col lg:flex-row justify-between items-center">
              {/* Image at the top for mobile screens */}
              <div className="flex justify-center mb-4 lg:mb-0">
                <img
                  src={selectedCard.image}
                  alt={selectedCard.name}
                  className="h-[250px] w-[280px] object-cover object-top rounded-lg"
                />
              </div>

              {/* Text content below the image for mobile screens */}
              <div className="flex flex-col text-white justify-start text-center lg:pl-4 lg:text-left">
                <h3 className="text-[20px] sm:text-2xl font-semibold text-white uppercase mb-2">
                  {selectedCard.name}
                </h3>
                <p className="text-[16px] sm:text-[16px] tracking-[1px] text-white mb-10">
                  {selectedCard.position}
                </p>
                <p className="text-[14px] sm:text-[16px] tracking-[1px] text-white mb-1">
                  info@finprimeconsulting.com
                </p>
                <p className="text-white text-[14px] sm:text-[16px] tracking-[1px] mb-3">
                  +971 58 259 3543
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Expert;

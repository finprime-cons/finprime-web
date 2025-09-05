import React, { useState, useEffect } from "react";
import Murshina_A from "@/images/team/Murshina_A.jpg";
import Hiba_Farook from "@/images/team/Hiba_Farook.jpg";
import Ashker_Cv from "@/images/team/Ashker.jpg";
import Abood_Wadi from "@/images/team/Abood_Wadi.jpg";
import Zain_Rabab from "@/images/team/Zain_Rabab.jpg";
import Siljo_Devassy from "@/images/team/Siljo_Devassy.jpg";
import Mohammed_Fayyaz_Majeed from "@/images/team/Mohammed_Fayyaz_Majeed.jpg";
import Althaf from "@/images/team/althaf.png";
import Mohamed_Oun from "@/images/mohm.jpg";
import { Link } from 'react-router-dom';

const cardsData = [
  { image: Ashker_Cv, alt: "C.A Ashker Kareem", name: "C.A Ashker Kareem", position: "Founder & CEO", number: 1, ceo: true },
  { image: Mohamed_Oun, alt: "Mohamed Oun", name: "Mohamed Oun", position: "Business consultant", number: 2 },
  { image: Althaf, alt: "Mohamed Althaf", name: "Mohamed Althaf", position: "G M - Operations & Business Development", number: 4 },
  { image: Zain_Rabab, alt: "C.A Zain Rabab", name: "C.A Zain Rabab", position: "Manager - Audit & Assurance", number: 5 },
  { image: Abood_Wadi, alt: "Abdul Rahman", name: "Abdul Rahman", position: "Legal Consultant", number: 3 },
  { image: Siljo_Devassy, alt: "Siljo Devassy", name: "Siljo Devassy", position: "Manager - Finance and Tax", number: 6 },
  { image: Hiba_Farook, alt: "Hiba Farook", name: "Hiba Farook", position: "HR and Recruitment Manager", number: 7 },
  { image: Mohammed_Fayyaz_Majeed, alt: "Mhd Fayaz Majeed", name: "Mhd Fayaz Majeed", position: "Digital Marketing Manager", number: 8 },
  { image: Murshina_A, alt: "Murshina A", name: "Murshina A", position: "Account Manager - Service", number: 9 }
];

const Expert = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedCard, setSelectedCard] = useState(null);

  useEffect(() => {
    document.body.style.overflow = isModalOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [isModalOpen]);

  const handleEnquiryClick = (card) => {
    setSelectedCard(card);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedCard(null);
  };

  const ceoCard = cardsData.find(card => card.ceo);
  const teamCards = cardsData.filter(card => !card.ceo);

  return (
    <div className="xl:ml-12 xl:mr-10 lg:ml-10 lg:mr-8 md:ml-8 md:mr-6 sm:ml-4 sm:mr-4 ml-2 mr-2 max-w-screen md:my-20 my-10 xl:px-56  ">
      <div className="flex flex-col lg:flex-row gap-12 items-right">
        {/* Left column: Get Acquaintance + CEO Image */}
        <div className="flex flex-col items-center lg:w-1/4 xl:ml-1">
  <div className="w-[300px] flex flex-col items-center">
    {/* Get Acquaintance Button */}
    <button className="w-full text-gray-700 font-semibold hover:bg-cyan-50 transition-colors h-16 rounded-md border border-[#0B8FAC] text-xl font-kulim">
      Get Acquaintance
    </button>

    {/* CEO Image */}
    <div className="relative w-full h-[390px] mt-8">
      <img
        src={ceoCard.image}
        alt={ceoCard.alt}
        className="w-full h-full object-contain md:object-cover "
      />
    </div>

    {/* CEO Name + Button */}
    <div className="flex flex-col items-center mt-8 w-full">
      <h3 className="text-gray-800 text-center font-kulim font-semibold text-lg">
        {ceoCard.name}
      </h3>
      <p className="mt-1 text-center text-sm text-[#323232] font-kulim">
        {ceoCard.position}
      </p>
      <button
        onClick={() => handleEnquiryClick(ceoCard)}
        className="mt-6 w-[163px] h-[43px] rounded-full bg-gradient-to-r from-[#1A1F39] to-[#06B6D4] text-white text-sm font-kulim flex items-center justify-center px-4"
      >
        <Link to="/CEO" className="text-white px-3 py-1 block w-full text-center">
          Message CEO
        </Link>
      </button>
    </div>
  </div>
</div>


        {/* Right column: Team in two rows aligned to left */}
        <div className="flex flex-col gap-12 lg:w-3/4 items-start xl:mr-0 mt-6 ">
          <div className="flex flex-wrap justify-start gap-x-8 sm:gap-x-14 gap-y-6 ">
            {teamCards.slice(0, 4).map(card => (
              <div key={card.number} className="flex flex-col items-center text-center flex-shrink-0 w-full sm:w-[180px]">
                <div className="relative w-full h-[220px]">
                  <img src={card.image} alt={card.alt} className="w-full h-full md:object-cover object-contain shadow-lg" style={{ objectPosition: 'center 20%' }} />
                  <button onClick={() => handleEnquiryClick(card)} className="absolute left-1/2 -translate-x-1/2 bottom-6 w-[120px] h-[34px] rounded-full bg-gradient-to-r from-[#191F3A] to-[#00BFFF] text-white border border-white/30 text-xs font-kulim flex items-center justify-center">
                    Reply or action
                  </button>
                </div>
                <div className="mt-4">
                  <h4 className="font-semibold text-gray-800 text-base font-kulim">{card.name}</h4>
                  <p className="text-gray-600 text-sm font-kulim">{card.position}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="flex flex-wrap justify-start gap-x-8 sm:gap-x-14 gap-y-6">
            {teamCards.slice(4).map(card => (
              <div key={card.number} className="flex flex-col items-center text-center flex-shrink-0 w-full sm:w-[180px]">
                <div className="relative w-full h-[220px]">
                  <img src={card.image} alt={card.alt} className="w-full h-full md:object-cover object-contain shadow-lg" style={{ objectPosition: 'center 20%' }} />
                  <button onClick={() => handleEnquiryClick(card)} className="absolute left-1/2 -translate-x-1/2 bottom-6 w-[120px] h-[34px] rounded-full bg-gradient-to-r from-[#191F3A] to-[#00BFFF] text-white border border-white/30 text-xs font-kulim flex items-center justify-center">
                    Reply or action
                  </button>
                </div>
                <div className="mt-4">
                  <h4 className="font-semibold text-gray-800 text-base font-kulim">{card.name}</h4>
                  <p className="text-gray-600 text-sm font-kulim">{card.position}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && selectedCard && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 px-5">
          <div className="bg-white w-full max-w-xl p-6 rounded-lg relative">
            <button onClick={handleCloseModal} className="absolute top-2 right-4 text-gray-800 hover:text-cyan-500 text-[16px]">Close</button>
            <div className="w-full p-4 flex flex-col lg:flex-row items-center justify-center">
              <div className="flex justify-center mb-4 lg:mb-0">
                <img src={selectedCard.image} alt={selectedCard.name} className="w-48 h-48 object-cover rounded-lg" style={{ objectPosition: 'top' }} />
              </div>
              <div className="lg:ml-0 lg:pl-10 text-gray-800 text-center lg:text-left flex flex-col justify-center items-center lg:items-start">
                <h3 className="text-2xl font-bold mb-2">{selectedCard.name}</h3>
                <p className="mb-4 text-sm">{selectedCard.position}</p>
                <form className="flex flex-col items-center lg:items-start">
                  <button type="submit" className="bg-cyan-500 hover:bg-cyan-600 text-white font-bold py-2 px-4 rounded-md text-sm">Send Message</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Expert;

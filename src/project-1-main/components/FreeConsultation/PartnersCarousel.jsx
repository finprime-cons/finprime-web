import React from "react";
import "./PartnersCarousel.css";
import impex from "../../images/partners/impex.png";
import lims_group from "../../images/partners/lims_group.png";
import pinklineinteriors from "../../images/partners/pinklineinteriors.png";
import SS_LOOTH from "../../images/partners/SS_LOOTH.png";
import Careem from "../../images/partners/Careem.png";
import DARKEN_SWEETS from "../../images/partners/DARKEN_SWEETS.png";
import GARNER from "../../images/partners/GARNER.png";

const PartnersCarousel = () => {
  const images = [
    impex,
    lims_group,
    pinklineinteriors,
    SS_LOOTH,
    Careem,
    DARKEN_SWEETS,
    GARNER,
  ];

  // Duplicate the images multiple times for infinite scroll
  const duplicateCount = 200; // Number of times to duplicate images
  const carouselImages = Array(duplicateCount).fill([...images]).flat();

  return (
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
  );
};

export default PartnersCarousel;

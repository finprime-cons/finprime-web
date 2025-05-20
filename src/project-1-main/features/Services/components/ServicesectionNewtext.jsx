import React from "react";
import { useParams } from "react-router-dom";
import { Services } from "../../../constants/data/services/ServicesData";
import { useEffect } from "react";
const ServicesectionNewText = () => {
  const { servicetitle, subServicetitle } = useParams();
  const service = Services.find(
    (s) => s.title.replace(/\s+/g, "-") === servicetitle
  );
  const subService = service?.subtitles.find(
    (sub) => sub.keyword.replace(/\s+/g, "-") === subServicetitle
  );
  // If service or sub-service not found, return error message
  if (!service || !subService) {
    return (
      <div className="mt-10 text-xl font-bold text-center text-red-500">
        Sub-service not found
      </div>
    );
  }

  useEffect(() => {
    if (location.hash) {
      const elementId = location.hash.substring(1);
      const element = document.getElementById(elementId);

      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: "smooth" });
        });
      }
    }
  }, [location]);

  return (
    <div className="flex flex-col">
      <div className="w-full font-raleway px-6 sm:px-6 md:px-10 lg:px-12 text-md md:text-lg leading-7 tracking-[1px] lg:text-xl text-black">
        <div
          className="mb-12"
          dangerouslySetInnerHTML={{ __html: subService.subcontentbottom }}
        ></div>
      </div>
    </div>
  );
};

export default ServicesectionNewText;

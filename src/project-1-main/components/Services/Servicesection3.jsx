import React from 'react';
import { Services } from '../Services';
import { useParams, useLocation } from 'react-router-dom';


const Servicesection3 = () => {



  const { servicetitle, subServicetitle } = useParams();
  const service = Services.find((s) =>
    s.title.replace(/\s+/g, '-') === servicetitle);
  const subService = service?.subtitles.find((sub) => sub.keyword.replace(/\s+/g, '-') === subServicetitle);


  // const location = useLocation();
  // const { service_id, subtitles_id } = location.state ?? {};
  // const service = Services.find((s) => s.id === service_id);
  // console.log(service);
  // const subService = service?.subtitles.find((sub) => sub.subid === subtitles_id);
  // If service or sub-service not found, return error message
  if (!service || !subService) {
    return <div className="mt-10 text-xl font-bold text-center text-red-500">Sub-service not found</div>;
  }


  return (
    <div className="relative mb-24">
      <img
        src={subService.subimg}
        alt={subService.subalt}
        className="w-full h-[700px] object-cover"
      />

      <div className="absolute inset-0 bg-black bg-opacity-50 "></div>

      <div className="absolute pl-6 text-right text-white bottom-10 md:pl-8 right-4 md:right-6 lg:right-8 xl:right-10 xl:pl-12 lg:pl-10">

        <h4 className="text-4xl font-bold text-transparent md:text-4xl xl:text-9xl font-khula bg-clip-text bg-gradient-to-r from-brandBlue via-cyan-400 to-cyan-500">
          {subService.headsubtitle}
        </h4>


      </div>
    </div>
  );
};

export default Servicesection3;

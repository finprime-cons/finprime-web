import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { Services } from '../Services';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const Servicesection2 = () => {

  const { servicetitle, subServicetitle } = useParams();
  const service = Services.find((s) =>
    s.title.replace(/\s+/g, '-') === servicetitle);
  const subService = service?.subtitles.find((sub) => sub.keyword.replace(/\s+/g, '-') === subServicetitle);



  // // const { servicetitle, subServicetitle, subServiceHeadTitle } = useParams();
  // const location = useLocation();
  // const { service_id, subtitles_id } = location.state ?? {};
  // const service = Services.find((s) => s.id === service_id);
  // console.log(service);
  // const subService = service?.subtitles.find((sub) => sub.subid === subtitles_id);

  // If service or sub-service not found, return error message
  if (!service || !subService) {
    return <div className="mt-10 text-xl font-bold text-center text-red-500">Sub-service not found</div>;
  }




  useEffect(() => {
    if (location.hash) {
      const elementId = location.hash.substring(1);
      const element = document.getElementById(elementId);

      if (element) {

        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        },);
      }
    }
  }, [location]);





  return (
    <div className='bg-white mt-[300px] sm:mt-[400px] mb-[150px]  xl:pl-12 xl:pr-10 lg:pl-10 lg:pr-8 md:pl-8 md:pr-6 pr-4 pl-6'>
      <div id='service-two' >
        <div className='flex pb-10 text-3xl font-semibold text-black sm:text-5xl font-khula'><div className='text-6xl sm:text-8xl font-extralight '>|</div> <div className='pb-5'>{subService.headsubtitle}</div></div>
      </div>
      <div className="flex flex-col ">


        <div className='w-full  font-raleway sm:px-2 text-md md:text-lg leading-7 tracking-[1px] lg:text-xl text-black'>
          <div className='mb-12 ' dangerouslySetInnerHTML={{ __html: subService.subcontent }}>

          </div>
          <Link
            to={`/form2/${service.id}/${subService.subid}`}
            className=" bg-black text-white py-4 px-12 text-sm rounded-[5px] hover:border hover:border-black hover:bg-white hover:text-black"
          >
            Enquiry
          </Link>
        </div>
        <div className="flex flex-wrap mt-28 ">
          {service.subtitles.map((sub) => (
            <Link
              to={`/services/${service.title.replace(/\s+/g, '-')}/${sub.keyword.replace(/\s+/g, '-')}`}
              state={{ "service_id": service.id, "subtitles_id": sub.subid }}
              key={sub.subid}
              className="border  border-gray-300 py-3 sm:py-4 px-4 text-xs sm:text-[16px] sm:px-8 mb-5 mr-1 sm:mr-4 rounded-[5px] tracking-[1px] hover:bg-gray-100 transition-all"
              onClick={() => {
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
            >
              <span

                className="text-center "
              >
                {sub.headsubtitle}
              </span>
            </Link>
          ))}
        </div>

      </div>


    </div>
  );
};

export default Servicesection2;

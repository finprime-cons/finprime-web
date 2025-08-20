import React, { useEffect } from 'react';
import { Link, useParams, useLocation } from 'react-router-dom';
import { Services } from '../Services';
import audit from '../../images/audit.png';
import internalAuditImg from '../../images/servicecard/subservices/INTERNA_AUDIT.jpg';
import forensicAuditImg from '../../images/servicecard/subservices/FORENSIC_AUDIT.jpg';
import icvImg from '../../images/servicecard/subservices/IN_COUNTRY_VALUE_PROGRAM.jpg';
import ServicesectionNewText from './ServicesectionNewtext';

const Servicesection2 = () => {
  const { servicetitle, subServicetitle } = useParams();
  const location = useLocation();

  const service = Services.find((s) =>
    s.title.replace(/\s+/g, '-') === servicetitle
  );
  const subService = service?.subtitles.find((sub) =>
    sub.keyword.replace(/\s+/g, '-') === subServicetitle
  );

  useEffect(() => {
    if (location.hash) {
      const elementId = location.hash.substring(1);
      const element = document.getElementById(elementId);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    }
  }, [location]);

  if (!service || !subService) {
    return (
      <div className="mt-10 text-xl font-bold text-center text-red-500">
        Sub-service not found
      </div>
    );
  }

  const isExternalAudit = subService.headsubtitle === 'External Audit';
  const isInternalAudit = subService.headsubtitle === 'Internal Audit';
  const isForensicAudit = subService.headsubtitle === 'Forensic Audit';
  const isICV = subService.headsubtitle === 'In Country Value Program (ICV)';
  const isDefault = !isExternalAudit && !isInternalAudit && !isForensicAudit && !isICV;

  return (
    <div className="bg-white mt-[100px] sm:mt-[150px] mb-16 sm:mb-[150px] xl:pl-12 xl:pr-10 lg:pl-10 lg:pr-8 md:pl-8 md:pr-6 pr-4 pl-6 xl:mt-[18%]">
      {(isExternalAudit || isInternalAudit) && (
        <div>
          <div className="flex items-start">
            <div className="text-6xl sm:text-7xl font-extralight leading-none text-black">|</div>
            <div className="pl-2 -mt-1">
              <h1 className='text-3xl sm:text-4xl md:text-5xl font-light font-["Kulim_Park"]'>
                {subService.headsubtitle}
              </h1>
            </div>
          </div>


          <div className='w-full font-["Inter"] px-2 text-[16px] leading-7 tracking-[0.5px] text-gray-700 mt-8'>
            <div className='mb-6' dangerouslySetInnerHTML={{ __html: subService.subcontent }}></div>
          </div>
          <div className='w-full font-["Inter"] px-2 text-[16px] leading-7 tracking-[0.5px] text-gray-700 mt-8'>
            <Link
              to={`/form2/${service.id}/${subService.subid}`}
              className="inline-flex items-center justify-center bg-gradient-to-r from-[#1A1F39] to-[#06B6D4] text-white py-3 px-8 text-sm font-semibold rounded-full hover:opacity-90 transition-all duration-300"
            >
              Make an appointment
            </Link>
          </div>

          <div className="flex flex-wrap mt-12 sm:mt-28">
            {service.subtitles.map((sub) => (
              <Link
                to={`/services/${service.title.replace(/\s+/g, '-')}/${sub.keyword.replace(/\s+/g, '-')}`}
                state={{ service_id: service.id, subtitles_id: sub.subid }}
                key={sub.subid}
                className={`border border-cyan-500 py-3 sm:py-4 px-4 text-xs sm:text-[16px] sm:px-8 mb-5 mr-1 sm:mr-4 rounded-[5px] tracking-[1px] hover:bg-gray-100 transition-all ${
                  sub.keyword.replace(/\s+/g, '-') === subServicetitle ? 'text-cyan-500' : 'text-black'
                }`}
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              >
                <span className="text-center">{sub.headsubtitle}</span>
              </Link>
            ))}
          </div>

          <div className="my-8">
      <div className="relative h-[500px]">
        <img src={isExternalAudit ? audit : internalAuditImg} alt="Internal Audit" className="w-full h-full object-cover rounded-lg" />
        <div className="absolute top-6 left-6 text-white">
          
        </div>
      </div>
    </div>
          <ServicesectionNewText/>
        </div>
      )}

      {isForensicAudit && (
        <>
          <div className="flex items-start">
            <div className="text-6xl sm:text-7xl font-extralight leading-none text-[#06B6D4]">|</div>
            <div className="pl-2 -mt-1">
              <div className='text-3xl sm:text-4xl md:text-5xl font-bold font-["Kulim_Park"]'>
                {subService.headsubtitle}
              </div>
            </div>
          </div>

          <div className='w-full font-["Inter"] px-2 text-[16px] leading-7 tracking-[0.5px] text-gray-700 mt-8'>
            <div className='mb-6' dangerouslySetInnerHTML={{ __html: subService.subcontent }}></div>
          </div>
          <div className='w-full font-["Inter"] px-2 text-[16px] leading-7 tracking-[0.5px] text-gray-700 mt-8'>
            <Link
              to={`/form2/${service.id}/${subService.subid}`}
              className="inline-flex items-center justify-center bg-gradient-to-r from-[#1A1F39] to-[#06B6D4] text-white py-3 px-8 text-sm font-semibold rounded-full hover:opacity-90 transition-all duration-300"
            >
              Make an appointment
            </Link>
          </div>

          <div className="flex flex-wrap mt-12 sm:mt-28">
            {service.subtitles.map((sub) => (
              <Link
                to={`/services/${service.title.replace(/\s+/g, '-')}/${sub.keyword.replace(/\s+/g, '-')}`}
                state={{ service_id: service.id, subtitles_id: sub.subid }}
                key={sub.subid}
                className={`border border-cyan-500 py-3 sm:py-4 px-4 text-xs sm:text-[16px] sm:px-8 mb-5 mr-1 sm:mr-4 rounded-[5px] tracking-[1px] hover:bg-gray-100 transition-all ${
                  sub.keyword.replace(/\s+/g, '-') === subServicetitle ? 'text-cyan-500' : 'text-black'
                }`}
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              >
                <span className="text-center">{sub.headsubtitle}</span>
              </Link>
            ))}
          </div>

          <div className="w-full mt-8">
            <div className="relative h-[500px]">
              <img src={forensicAuditImg} alt="Forensic Audit" className="w-full h-full object-cover rounded-lg" />
              <div className="absolute top-6 left-6 text-white">
              
              </div>
            </div>
          </div>
          <ServicesectionNewText/>

          
        </>
      )}

{isICV && (
  <>
    {/* Heading */}
    <div className="flex items-start">
      <div className="text-6xl sm:text-7xl font-extralight leading-none text-[#06B6D4]">|</div>
      <div className="pl-2 -mt-1">
        <div className='text-3xl sm:text-4xl md:text-5xl font-bold font-["Kulim_Park"]'>
          {subService.headsubtitle}
        </div>
      </div>
    </div>

    {/* Content Paragraph */}
    <div className='w-full font-["Inter"] px-2 text-[16px] leading-7 tracking-[0.5px] text-gray-700 mt-8'>
      <div className='mb-6' dangerouslySetInnerHTML={{ __html: subService.subcontent }}></div>
    </div>

    {/* 4 Buttons */}
    <div className="flex flex-wrap mt-12 sm:mt-28">
      {service.subtitles.map((sub) => (
        <Link
          to={`/services/${service.title.replace(/\s+/g, '-')}/${sub.keyword.replace(/\s+/g, '-')}`}
          state={{ service_id: service.id, subtitles_id: sub.subid }}
          key={sub.subid}
          className={`border border-cyan-500 py-3 sm:py-4 px-4 text-xs sm:text-[16px] sm:px-8 mb-5 mr-1 sm:mr-4 rounded-[5px] tracking-[1px] hover:bg-gray-100 transition-all ${
            sub.keyword.replace(/\s+/g, '-') === subServicetitle ? 'text-cyan-500' : 'text-black'
          }`}
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
          <span className="text-center">{sub.headsubtitle}</span>
        </Link>
      ))}
    </div>
    <div className='w-full font-["Inter"] px-2 text-[16px] leading-7 tracking-[0.5px] text-gray-700 mt-8'>
      <Link
        to={`/form2/${service.id}/${subService.subid}`}
        className="inline-flex items-center justify-center bg-gradient-to-r from-[#1A1F39] to-[#06B6D4] text-white py-3 px-8 text-sm font-semibold rounded-full hover:opacity-90 transition-all duration-300"
      >
        Make an appointment
      </Link>
    </div>

      {/* ICV Image */}
      <div className="my-8">
        <div className="relative h-[500px]">
          <img
            src={icvImg}
            alt="ICV Program"
            className="w-full h-full object-cover rounded-lg"
          />
          <div className="absolute top-6 left-6 text-white">
            
      
          </div>
        </div>
      </div>

    <ServicesectionNewText/>
  </>
)}

      {isDefault && (
        <>
          <div className="flex items-start">
            <div className="text-6xl sm:text-7xl font-extralight leading-none text-black">|</div>
            <div className="pl-2 -mt-1">
              <div className='text-3xl sm:text-4xl md:text-5xl font-light font-["Kulim_Park"]'>
                {subService.headsubtitle}
              </div>
            </div>
          </div>

          <div className='w-full font-["Inter"] px-2 text-[16px] leading-7 tracking-[0.5px] text-gray-700 mt-8'>
            <div className='mb-6' dangerouslySetInnerHTML={{ __html: subService.subcontent }}></div>
          </div>

          <div className="flex flex-wrap mt-12 sm:mt-28">
            {service.subtitles.map((sub) => (
              <Link
                to={`/services/${service.title.replace(/\s+/g, '-')}/${sub.keyword.replace(/\s+/g, '-')}`}
                state={{ service_id: service.id, subtitles_id: sub.subid }}
                key={sub.subid}
                className={`border border-cyan-500 py-3 sm:py-4 px-4 text-xs sm:text-[16px] sm:px-8 mb-5 mr-1 sm:mr-4 rounded-[5px] tracking-[1px] hover:bg-gray-100 transition-all ${
                  sub.keyword.replace(/\s+/g, '-') === subServicetitle ? 'text-cyan-500' : 'text-black'
                }`}
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              >
                <span className="text-center">{sub.headsubtitle}</span>
              </Link>
            ))}
          </div>

      <div className="my-8">
        <img
          src={subService.subimg}
          alt={subService.subalt}
          className="w-full h-auto object-cover rounded-lg"
        />
      </div>
      <ServicesectionNewText />
    </>
  )}

    </div>
  );
};

export default Servicesection2;

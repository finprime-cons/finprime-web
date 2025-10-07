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

  // Render long HTML content as multiple paragraphs. We split on double <br> or blank lines
  const renderAsParagraphs = (html) => {
    if (!html || typeof html !== 'string') return null;
    const parts = html
      .split(/<br\s*\/?>\s*<br\s*\/?>|\n{2,}/i)
      .map((p) => p.trim())
      .filter((p) => p.length > 0);
    if (parts.length === 0) return null;
    return parts.map((p, idx) => (
      <p key={idx} className='mb-6' dangerouslySetInnerHTML={{ __html: p }} />
    ));
  };

  // Split at a specific phrase into two paragraphs; otherwise fallback to default
  const renderSplitAtPhrase = (html, phraseRegex) => {
    if (!html || typeof html !== 'string') return null;
    const match = html.match(phraseRegex);
    if (match && match.index != null) {
      const idx = match.index;
      const first = html.slice(0, idx).trim();
      const second = html.slice(idx).trim();
      return (
        <>
          {first && <p className='mb-6' dangerouslySetInnerHTML={{ __html: first }} />}
          {second && <p className='mb-6' dangerouslySetInnerHTML={{ __html: second }} />}
        </>
      );
    }
    return renderAsParagraphs(html);
  };

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
            {subService.headsubtitle === 'HR Consulting and Advisory'
              ? renderSplitAtPhrase(subService.subcontent, /\bTo keep your operations\b/i)
              : renderAsParagraphs(subService.subcontent)}
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
          {isExternalAudit && (
            <div className='w-full font-["Inter"] px-2 text-[16px] leading-7 tracking-[0.5px] text-gray-700 mt-8'>
              <p className='mb-6'>
                Our primary audit procedures will include the entity's annual financial statements, cash flow and other transactions under the financial disclosures, laws and reporting conventions under UAE Corporate regulations, the UAE Tax Laws and all International and National accounting standards.
              </p>
              <p className='mb-6'>
                Of course, there’s more than compliance measures involved when we can offer this content and support to the client's business to make better informed financial management decisions and enhance overall operational performance. The recommendations that we provide through business best practice and management design must be specific to the client's business and how it operates. Therefore, with the appropriate context and data our customers can make informed managerial decisions and support their firm in sustainability during decision making. A professionally conducted external audit also offers the necessary assurances for any interested stakeholder(s) in the company directed by an external party.
              </p>
            </div>
          )}
          {isInternalAudit && (
            <div className='w-full font-["Inter"] px-2 text-[16px] leading-7 tracking-[0.5px] text-gray-700 mt-8'>
              <p className='mb-6'>
                We take the common fully enveloped approach to your internal audit service by not only verifying the accuracy of your financial records but also identifying inefficiencies in operations, potential savings opportunities, and controlling weaknesses. Our auditors will test the effectiveness of your internal control systems, which are the hurdles or safeguards protecting your business' assets, preventing fraud, and improving operational efficiency. By addressing internal controls through an internal audit, it contributes to improved financial governance and reduces the number of weaknesses that will impair the performance of your company. FinPrime’s internal audit services are provided to meet your company’s needs.
              </p>
            </div>
          )}
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
            {renderAsParagraphs(subService.subcontent)}
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
          <div className='w-full font-["Inter"] px-2 text-[16px] leading-7 tracking-[0.5px] text-gray-700 mt-8'>
            <p className='mb-6'>
              In our hyper-regulated digital economy, protecting your organization from fraud and other financial misconduct is possibly the most important step you can take. FinPrime forensic audit services are tailored to examine your organization's financial records, cash flow statements, and other financial documents to identify fraud, white collar crime (wage manipulation, deception) or mishandling of financial regulations NAV Canada or other financer business' regulations. A forensic audit is very unique from a typical audit - forensic auditors employ a much broader toolkit and proportionately greater understanding of advanced investigation techniques - as well as methods to gather information on uncommon transactions, analyzing relevant data that are flagged in patterns, and electronic documents to identify unusual activity.
            </p>
            <p className='mb-6'>
              As we mentioned in previous web pages or presentations, forensic audit audits as a whole are less about the audit process and more about identifying indicators of financial misrepresentation (e.g. embezzlement, wrongful sales, or changes to your organizations FINANCIAL STATEMENTS). Your company's finances and reputation are in jeopardy if your predecessor manipulated the books. Experienced forensic auditors understand which tools can assist them in your investigation and address the indiscretion from the company's history to the present. Our forensic auditors have a wide breadth of experience and industry tools to recognize inconsistencies between the timelines. We will prepare our findings so that they are credible, one way is to provide you with legally defensible documentation to help with required investigations, potential internal investigations, legal proceedings, or from a regulatory standpoint. early detection of financial acts meant companies can minimize or limit the amount of financial damage and/or financial misconduct.
            </p>
            <p className='mb-6'>
              We understand forensic audits may carry sensitive and confidential information, so we ensure confidentiality is upheld at all times. There are various case studies and IRS reports within major companies that are concerning when they go public - whether from an internal issue to reporting a multi-level debt fraud. Let us help you line up potential issues to address!
            </p>
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
      {renderAsParagraphs(subService.subcontent)}
    </div>

    {/* Make an appointment - just below main content */}
    <div className='w-full font-["Inter"] px-2 text-[16px] leading-7 tracking-[0.5px] text-gray-700 mt-8'>
      <Link
        to={`/form2/${service.id}/${subService.subid}`}
        className="inline-flex items-center justify-center bg-gradient-to-r from-[#1A1F39] to-[#06B6D4] text-white py-3 px-8 text-sm font-semibold rounded-full hover:opacity-90 transition-all duration-300"
      >
        Make an appointment
      </Link>
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

    <div className='w-full font-["Inter"] px-2 text-[16px] leading-7 tracking-[0.5px] text-gray-700 mt-8'>
      <p className='mb-6'>
        Navigating the ICV certification process can be complex, involving documentation, financial disclosures, and strict regulatory requirements. Our team streamlines this journey by providing end-to-end assistance—from collecting required data and ensuring compliance to submitting applications in the correct format. We reduce the administrative burden so that you can stay focused on your core operations, while we ensuring your business meets the ICV standards efficiently and accurately.
      </p>
      <p className='mb-6'>
        A high ICV score boosts not only contract eligibility but also corporate reputation. At FinPrime, we go beyond compliance—helping businesses position themselves strategically for long-term success. By aligning with the UAE’s economic goals, your business can support national growth, build stronger partnerships, and enhance market credibility. Let FinPrime be your trusted partner in turning ICV compliance into a competitive advantage.
      </p>
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
            {subService.headsubtitle === 'HR Consulting and Advisory'
              ? renderSplitAtPhrase(subService.subcontent, /\bTo keep your operations\b/i)
              : renderAsParagraphs(subService.subcontent)}
          </div>

          {/* Make an appointment - just below main content */}
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
        <img
          src={subService.subimg}
          alt={subService.subalt}
          className="w-full h-auto object-cover rounded-lg"
        />
      </div>
      
      {subService.subcontentbottom && (
        <div className='w-full font-["Inter"] px-2 text-[16px] leading-7 tracking-[0.5px] text-gray-700 mt-8'>
          {subService.headsubtitle === 'HR Consulting and Advisory'
            ? renderSplitAtPhrase(subService.subcontentbottom, /\bAt\s+Fin\s*Prime\b/i)
            : renderAsParagraphs(subService.subcontentbottom)}
        </div>
      )}
      
      <ServicesectionNewText />
    </>
  )}

    </div>
  );
};

export default Servicesection2;

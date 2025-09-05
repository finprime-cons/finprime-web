import React from 'react'
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { useParams } from 'react-router-dom';
import { Industries } from '../../Industries';
import Navbar from '../../Navbar/Navbar'
import Footer from '../../Footer/Footer'
import Industriessection2 from './Industriessection2'
import Industriessection3 from './Industriessection3'
import Industriessection4 from './Industriessection4'
import Industriessection5 from './Industriessection5'
import Industriessection6 from './Industriessection6'
import WhatsAppIcon from '../../WhatsAppIcon/WhatsAppIcon';
import CookieBanner from '../../Cookies/CookieBanner';

const IndustriesPage = () => {
  const { industriestitle, subindustrytitle } = useParams();
  
  // Find the industry and sub-industry data
  const industry = Industries.find((s) => s.title === industriestitle);
  const subIndustry = industry?.subindustries.find((sub) => sub.title === subindustrytitle);

  // Generate meta tags based on the page content
  const pageTitle = subIndustry ? `${subIndustry.headtitle} Services in Dubai, UAE | FinPrime Consulting` : 'Industry Services in Dubai, UAE | FinPrime Consulting';
  const pageDescription = subIndustry ? `${subIndustry.headtitle} services in Dubai, UAE. Expert ${industry?.headtitle} consulting and solutions by FinPrime. Get professional ${subIndustry.headtitle.toLowerCase()} services tailored for your business needs.` : 'Professional industry services in Dubai, UAE. Expert consulting and solutions by FinPrime Consulting for all your business needs.';
  const pageKeywords = subIndustry ? `${subIndustry.headtitle.toLowerCase()}, ${industry?.headtitle.toLowerCase()}, services dubai, uae, finprime consulting, business solutions, ${industry?.headtitle.toLowerCase()} consulting, dubai ${subIndustry.headtitle.toLowerCase()} services` : 'industry services, dubai, uae, finprime consulting, business solutions, professional consulting';

  return (
    <HelmetProvider>
    <div>
               <Helmet>
                  <title>{pageTitle}</title>
                  <meta name="description" content={pageDescription} />
                  <meta name="keywords" content={pageKeywords} />
                  <meta name="author" content="FinPrime Consulting" />
                  <meta property="og:title" content={pageTitle} />
                  <meta property="og:description" content={pageDescription} />
                  <meta property="og:type" content="website" />
                  <meta property="og:url" content={`https://finprimeconsulting.com/${industriestitle}/${subindustrytitle}`} />
                  <meta name="twitter:card" content="summary_large_image" />
                  <meta name="twitter:title" content={pageTitle} />
                  <meta name="twitter:description" content={pageDescription} />
              </Helmet>
        <Navbar/>
        <Industriessection2/>
        <Industriessection3/>
        <Industriessection4/>
        <Industriessection5/>
        <Industriessection6/>
        <Footer/>
        <WhatsAppIcon/>
        <CookieBanner/>
    </div>
    </HelmetProvider>
  )
}

export default IndustriesPage
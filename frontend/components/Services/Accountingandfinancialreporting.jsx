import React from 'react'
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { useParams } from 'react-router-dom';
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'
import Servicesection2 from './Servicesection2'
import Servicesection3 from './Servicesection3'
import WhatsAppIcon from '../WhatsAppIcon/WhatsAppIcon'
import CookieBanner from '../Cookies/CookieBanner'
import Servicesectionnew from './ServicesectionNewtext'
import { metaDetails } from '../Services.jsx';


const Accountingandfinancialreporting = () => {
  const { servicetitle, subServicetitle } = useParams();

  const currentMeta = metaDetails[subServicetitle] || {
    title: 'Finprime Business and Tax Consultancy',
    description: 'Professional business and tax consultancy services in Dubai by FinPrime. Explore our solutions.',
    keywords: 'business consultancy, tax consultancy, Dubai services'
  };

  console.log(currentMeta)
  return (
    <HelmetProvider>
      <div className='relative overflow-hidden'>
        <Helmet>
          <title>{currentMeta.title}</title>
          <meta name="title" content={currentMeta.title} />
          <meta name="description" content={currentMeta.description} />
          <meta name="keywords" content={currentMeta.keywords} />
          <meta name="author" content="FinPrime Consulting" />
          <meta property="og:title" content={currentMeta.title} />
          <meta property="og:description" content={currentMeta.description} />
          <meta property="og:type" content="website" />
          <meta property="og:url" content={currentMeta.url || `https://www.finprimeconsulting.com/services/${servicetitle}/${subServicetitle}`} />
          <link rel="canonical" href={currentMeta.url || `https://www.finprimeconsulting.com/services/${servicetitle}/${subServicetitle}`} />
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:title" content={currentMeta.title} />
          <meta name="twitter:description" content={currentMeta.description} />
        </Helmet>
        <Navbar />
        <Servicesection2 />
        
        <Servicesection3 />
      
        <Footer />
        <CookieBanner />
        <WhatsAppIcon />
      </div>
    </HelmetProvider>
  )
}

export default Accountingandfinancialreporting

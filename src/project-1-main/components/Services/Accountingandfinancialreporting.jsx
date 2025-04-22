import React from 'react'
import { Helmet, HelmetProvider } from 'react-helmet-async';
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'
import Servicesection2 from './Servicesection2'
import Servicesection3 from './Servicesection3'
import Servicesection4 from './Servicesection4'
import Servicesection5 from './Servicesection5'
import Servicesection6 from './Servicesection6'
import Servicesection7 from './Servicesection7'
import Servicesection8 from './Servicesection8'
import Servicesection9 from './Servicesection9'
import WhatsAppIcon from '../WhatsAppIcon/WhatsAppIcon'
import BelowFooter from '../Footer/BelowFooter'

const Accountingandfinancialreporting = () => {
  return (
    <HelmetProvider>
      <div className='relative overflow-hidden'>
        <Helmet>
          <title>Finprime Business and Tax Consultancy</title>
          <meta name="description" content="Get in touch with EpicEventz for all your corporate event planning needs. Contact us today!" />
          <meta name="keywords" content="contact, event planning, corporate events" />
          <meta name="author" content="EpicEventz" />
          <meta property="og:title" content="Contact Us - EpicEventz" />
          <meta property="og:description" content="Reach out to us for expert corporate event solutions, including annual and family day celebrations." />
          <meta property="og:image" content="https://yourwebsite.com/images/about-page-image.jpg" />
          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://yourwebsite.com/about" />
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:title" content="Contact Us - EpicEventz" />
          <meta name="twitter:description" content="Reach out to us for expert corporate event solutions, including annual and family day celebrations." />
          <meta name="twitter:image" content="https://yourwebsite.com/images/about-page-image.jpg" />
        </Helmet>
        <Navbar />
        <Servicesection2 />
        <Servicesection3 />
        <Servicesection4 />
        <Servicesection5 />
        <Servicesection6 />
        {/* <Servicesection7/> */}
        <Servicesection8 />
        <Servicesection9 />
        <Footer />
        <BelowFooter />
        <WhatsAppIcon />
      </div>
    </HelmetProvider>
  )
}

export default Accountingandfinancialreporting
import React from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { useParams } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import Servicesection2 from "./components/Servicesection2";
import Servicesection3 from "./components/Servicesection3";
import Servicesection4 from "./components/Servicesection4";
import Servicesection5 from "./components/Servicesection5";
import Servicesection6 from "./components/Servicesection6";
import Servicesection7 from "./components/Servicesection7";
import Servicesection8 from "./components/Servicesection8";
import Servicesection9 from "./components/Servicesection9";
import WhatsAppIcon from "../../components/WhatsAppIcon/WhatsAppIcon";
import BelowFooter from "../../components/Footer/BelowFooter";
import Servicesectionnew from "./components/ServicesectionNewtext";
import { metaDetails } from "../../data/services/Services";

const AppServices = () => {
  const { servicetitle, subServicetitle } = useParams();

  const currentMeta = metaDetails[subServicetitle] || {
    title: "Finprime Business and Tax Consultancy",
    description:
      "Professional business and tax consultancy services in Dubai by FinPrime. Explore our solutions.",
    keywords: "business consultancy, tax consultancy, Dubai services",
  };

  console.log(currentMeta);
  return (
    <HelmetProvider>
      <div className="relative overflow-hidden">
        <Helmet>
          <title>{currentMeta.title}</title>
          <meta name="title" content={currentMeta.title} />
          <meta name="description" content={currentMeta.description} />
          <meta name="keywords" content={currentMeta.keywords} />
          <meta name="author" content="EpicEventz" />
          <meta property="og:title" content="Contact Us - EpicEventz" />
          <meta
            property="og:description"
            content="Reach out to us for expert corporate event solutions, including annual and family day celebrations."
          />
          <meta
            property="og:image"
            content="https://yourwebsite.com/images/about-page-image.jpg"
          />
          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://yourwebsite.com/about" />
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:title" content="Contact Us - EpicEventz" />
          <meta
            name="twitter:description"
            content="Reach out to us for expert corporate event solutions, including annual and family day celebrations."
          />
          <meta
            name="twitter:image"
            content="https://yourwebsite.com/images/about-page-image.jpg"
          />
        </Helmet>
        <Navbar />
        <Servicesection2 />
        <Servicesection3 />
        <Servicesectionnew />
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
  );
};

export default AppServices;

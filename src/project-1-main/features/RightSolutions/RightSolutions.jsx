import React from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";
import Rhero from "./components/Rhero/Rhero";
import DropDown from "./components/DropDown/DropDown";
import Bannerrimg from "./components/Banner/Bannerrimg";
import Rinput from "./components/Rinput/Rinput";
import Rtext from "./components/Rhero/Rtext";
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";
import WhatsAppIcon from "../../components/WhatsAppIcon/WhatsAppIcon";
import BelowFooter from "../../components/Footer/BelowFooter";
import BottomDropDown from "./components/BottomDropDown/BottomDropDown";

const RightSolutions = () => {
  return (
    <HelmetProvider>
      <div className="relative overflow-hidden ">
        <Helmet>
          <title>Finframe Business and Tax Consultancy</title>
          <meta
            name="description"
            content="Get in touch with EpicEventz for all your corporate event planning needs. Contact us today!"
          />
          <meta
            name="keywords"
            content="contact, event planning, corporate events"
          />
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
        <Rhero />
        <Rtext />
        <DropDown />
        <Bannerrimg />
        <BottomDropDown />
        <div className="bg-black">
          <Rinput />
          <Footer />
          <BelowFooter />
          <WhatsAppIcon />
        </div>
      </div>
    </HelmetProvider>
  );
};

export default RightSolutions;

import React from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";
import bgvideo from "../../assets/video/banner_slider/hero1.mp4";
import Ahero from "./Ahero/Ahero";
import Footer from "../Footer/Footer";
import Atext from "./Text/Atext";
import Expert from "./Expert/Expert";
import Choose from "./Choose/Choose";
import Accounts from "./Accounts/Accounts";
import Atext1 from "./Text/Atext1";
import Navbar from "../Navbar/Navbar";
import WhatsAppIcon from "../WhatsAppIcon/WhatsAppIcon";
import Dropdown from "../dropdown/Dropdown";
import Text3 from "../Text/Text3";
import BelowFooter from "../Footer/BelowFooter";

const About = () => {
  return (
    <HelmetProvider>
      <div className="relative overflow-hidden">
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

        <div className="h-[700px] xl:h-[520px] relative overflow-hidden">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="absolute right-0 top-0 h-[680px] xl:h-[500px] w-full object-cover pointer-events-none z-[-1]"
          >
            <source src={bgvideo} type="video/mp4" />
          </video>
          <Navbar />
          <Ahero />
        </div>
        <Atext1 />
        <Atext />
        <Text3 />
        <Dropdown />
        <Expert />
        <Text3 />
        <Choose />
        {/* <Accounts/> */}
        <Footer />
        <BelowFooter />
        <WhatsAppIcon />
      </div>
    </HelmetProvider>
  );
};

export default About;

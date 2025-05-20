import React from "react";
import Text1 from "../../../components/Text/Text1";
import Servicecard from "../../../components/Servicecard/Servicecard";
import Banner from "../components/Banner/Banner";
import Dropdown from "../../../components/dropdown/Dropdown";
import Text2 from "../../../components/Text/Text2";
import Servingsection from "../components/Servingsection/Servingsection";
import Text4 from "../../../components/Text/Text4";
import Inputsection from "../../../components/inputsection/Inputsection";
import Oursection from "../../../components/Oursection/Oursection";
import Blogsection from "../components/Blogsection/Blogsection";
import Faq from "../../../components/Faq/Faq";
import Footer from "../../../components/Footer/Footer";
import BelowFooter from "../../../components/Footer/BelowFooter";
import WhatsAppIcon from "../../../components/WhatsAppIcon/WhatsAppIcon";
import CookieBanner from "../../../components/Cookies/CookieBanner";
import Bannerslider from "../components/Bannerslider/Bannerslider";
import Text3 from "../../../components/Text/Text3";
import Navbar from "../../../components/Navbar/Navbar";
import PartnerWithItem from "../components/PartnerWith/partnerwith";

const Home = () => {
  return (
    <>
      <Navbar />
      <Bannerslider />
      <Text1 />
      <PartnerWithItem />
      <Text3 />
      <Servicecard />
      <Banner />
      <Dropdown />
      <Text2 />
      <Text3 />
      <Servingsection />
      <Text4 />
      <Inputsection />
      <Oursection />
      <Blogsection />
      <Faq />
      <Text3 />
      <Footer />
      <BelowFooter />
      <WhatsAppIcon />
      <CookieBanner />
    </>
  );
};

export default Home;

import React, { useEffect, useRef, useState } from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";
import CountUp from "react-countup";
import SelectPartners from "./components/SelectPartners";
import { useInView } from "react-intersection-observer";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import backgroundImage from "../../assets/images/success/success.jpg";
import Servicecard from "../../components/Servicecard/Servicecard";
import WhatsAppIcon from "../../components/WhatsAppIcon/WhatsAppIcon";
import BelowFooter from "../../components/Footer/BelowFooter";

const FreeConsultation = () => {
  const [hasFadedIn, setHasFadedIn] = useState(false);
  const fadeElementRef = useRef(null);

  useEffect(() => {
    const fadeInObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasFadedIn) {
            setHasFadedIn(true);
          }
        });
      },
      { threshold: 0.1 }
    );

    const currentElement = fadeElementRef.current;
    if (currentElement) {
      fadeInObserver.observe(currentElement);
    }

    return () => {
      if (currentElement) {
        fadeInObserver.unobserve(currentElement);
      }
    };
  }, [hasFadedIn]);

  const { ref: customerRef, inView: customerVisible } = useInView({
    triggerOnce: true,
  });
  const { ref: successRef, inView: successVisible } = useInView({
    triggerOnce: true,
  });
  const { ref: trustRef, inView: trustVisible } = useInView({
    triggerOnce: true,
  });

  return (
    <HelmetProvider>
      <div ref={fadeElementRef} className="">
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

        <div className="">
          <div className="pl-6 pr-4 mt-48 mb-8 py-28 xl:pl-12 xl:pr-10 lg:pl-10 lg:pr-8 md:pl-8 md:pr-6 animate-fadeinright">
            <h4 className="mb-8 text-sm font-light md:text-md lg:text-xl">
              Get Your Free Consultation
            </h4>
            <h3 className="mb-1 text-3xl font-bold md:text-4xl lg:pr-40 lg:text-5xl xl:text-8xl">
              Start Growing Your Business with Us Growing Your Business with
            </h3>
            <h3 className="mb-8 text-3xl font-bold md:text-4xl lg:text-5xl xl:text-6xl">
              {" "}
            </h3>
            <h4 className="mb-20 text-sm font-light md:text-md lg:text-xl">
              Let us help you with tailored solutions.
            </h4>
          </div>

          <Servicecard />

          <div
            className="flex flex-col md:flex-row h-[700px] justify-between items-center relative"
            style={{
              backgroundImage: `url(${backgroundImage})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }}
          >
            <div
              className={`flex-1  lg:pl-10 xl:pl-12 md:pl-8 pl-6 pr-4 sm:pr-0 mb-8 ${
                hasFadedIn ? "animate-fadeinbottom" : ""
              } text-left z-10`}
            >
              <h3 className="pt-10 mb-4 text-3xl font-bold text-white uppercase md:text-4xl lg:text-9xl sm:pt-28">
                Why Choose Us
              </h3>
              <h1 className="mb-5 text-lg font-medium text-white md:text-xl lg:text-xl sm:mb-20">
                Our Success is Built on Your Success
              </h1>
            </div>

            <div className="z-10 flex flex-col items-center justify-center flex-1 pb-10 space-y-8 sm:pl-36 sm:pb-0">
              <div className="p-6 text-center " ref={customerRef}>
                <h1 className="text-4xl font-bold text-white duration-500 md:text-5xl lg:text-6xl">
                  {customerVisible && (
                    <CountUp start={0} end={1500} duration={3} suffix="+" />
                  )}
                </h1>
                <h4 className="text-lg font-bold text-white md:text-xl lg:text-2xl">
                  Happy Clients
                </h4>
              </div>

              <div className="p-6 text-center " ref={successRef}>
                <h1 className="text-4xl font-bold text-white duration-500 md:text-5xl lg:text-6xl">
                  {successVisible && (
                    <CountUp start={0} end={1280} duration={3} suffix="+" />
                  )}
                </h1>
                <h4 className="text-lg font-bold text-white md:text-xl lg:text-2xl">
                  TRN Numbers Delivered
                </h4>
              </div>

              {/* Employees */}
              <div className="p-6 text-center " ref={trustRef}>
                <h1 className="text-4xl font-bold text-white duration-500 md:text-5xl lg:text-6xl">
                  {trustVisible && (
                    <CountUp start={0} end={15} duration={3} suffix="+" />
                  )}
                </h1>
                <h4 className="text-lg font-bold text-white md:text-xl lg:text-2xl">
                  Employees
                </h4>
              </div>
            </div>
          </div>
        </div>
        <SelectPartners />
        <BelowFooter />
        <WhatsAppIcon />
        <Footer />
      </div>
    </HelmetProvider>
  );
};

export default FreeConsultation;

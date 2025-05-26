import { Link } from "react-router-dom";
import { RiArrowLeftSLine } from "react-icons/ri";
import MobileSpeakToExpert from "./MobileSpeakToExpert";

const MobileMenu = ({
  toggleServiceMenuVisibility,
  activeServiceMenuIndex,
  isMobileMenuFirstOpen,
  toggleMobileMenuFirst,
  Services,
  isModalOpen,
  handleModalToggle,
  setIsMobileMenuOpen,
}) => {
  return (
    <ul className="flex flex-col gap-5 pt-24 text-left text-white md:gap-7">
      <li className="mx-10">
        <Link
          to="/rightsolutions"
          className="mb-2 text-xl font-medium uppercase transition-all duration-500 hover:text-cyan-500 hover-underline-animation hover:scale-110 md:text-2xl font-khula lg:text-lg"
        >
          Right Solutions
        </Link>
      </li>

      <li className="mx-10">
        <Link
          to="/freeconsultation"
          className="mb-2 text-xl font-medium uppercase transition-all duration-500 hover:text-cyan-500 hover-underline-animation md:text-2xl font-khula lg:text-lg"
        >
          Free Consultation
        </Link>
      </li>

      {/* Services menu */}
      <li className="mx-10">
        <button
          onClick={() => toggleServiceMenuVisibility(0)}
          className="mb-2 text-xl font-medium uppercase transition-all duration-500 hover:text-cyan-500 hover-underline-animation md:text-2xl font-khula lg:text-lg"
        >
          Services
        </button>

        {activeServiceMenuIndex === 0 && (
          <div className="lg:hidden fixed inset-0 z-40 animate-fadeinrightsmall w-full h-screen bg-gray-950 py-8 px-4 overflow-hidden">
            <button
              onClick={() => toggleServiceMenuVisibility(-1)}
              className="absolute top-[22px] md:top-[53px] right-[60px] md:right-[68px] text-black text-4xl bg-white border rounded-full"
            >
              <RiArrowLeftSLine />
            </button>

            <ul className="flex flex-col py-2 space-y-8 text-left mt-28">
              {Services.map((service, index) => (
                <li key={index} className="mx-10">
                  <button
                    onClick={() => toggleMobileMenuFirst(index)}
                    className="mb-2 text-xl text-left text-white uppercase transition-all duration-500 hover:text-cyan-500 hover-underline-animation font-khula"
                  >
                    {service.title}
                  </button>

                  {isMobileMenuFirstOpen === index && (
                    <div className="lg:hidden fixed inset-0 z-30 animate-fadeinrightsmall w-full h-screen bg-gray-950 py-8 px-4 overflow-hidden">
                      <button
                        onClick={() => toggleMobileMenuFirst(-1)}
                        className="absolute top-[22px] md:top-[53px] right-[60px] md:right-[68px] text-black text-4xl bg-white border rounded-full"
                      >
                        <RiArrowLeftSLine />
                      </button>

                      <ul className="px-10 ml-4 space-y-6 mt-28">
                        {service.subtitles?.map((subservice, subIndex) => (
                          <li key={subIndex}>
                            <Link
                              to={`/services/${service.title.replace(
                                /\s+/g,
                                "-"
                              )}/${subservice.keyword.replace(/\s+/g, "-")}`}
                              state={{
                                service_id: service.id,
                                subtitles_id: subservice.subid,
                              }}
                              className="mb-2 text-lg font-medium text-left text-white uppercase transition-all duration-500 hover:text-cyan-500 hover-underline-animation font-khula lg:text-lg"
                              onClick={() => {
                                window.scrollTo({ top: 0, behavior: "smooth" });
                                toggleMobileMenuFirst(-1);
                                toggleServiceMenuVisibility(-1);
                                setIsMobileMenuOpen(false);
                              }}
                            >
                              {subservice.subtitle}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </li>
              ))}
            </ul>
          </div>
        )}
      </li>

      {/* Other navigation links */}
      {[
        { to: "/", label: "Home" },
        { to: "/about", label: "About" },
        { to: "/blog", label: "Blog" },
        { to: "/offer", label: "Offer" },
        { to: "/contactus", label: "Contact Us" },
      ].map((item, i) => (
        <li key={i} className="mx-10">
          <Link
            to={item.to}
            className="mb-2 text-xl font-medium uppercase transition-all duration-500 hover:text-cyan-500 hover-underline-animation md:text-2xl font-khula lg:text-lg"
          >
            {item.label}
          </Link>
        </li>
      ))}

      {/* Speak to an Expert Modal */}
      <li className="mx-10">
        <button
          onClick={handleModalToggle}
          className="mb-2 text-xl font-medium text-left uppercase transition-all duration-500 hover:text-cyan-500 hover-underline-animation md:text-2xl font-khula lg:text-lg"
        >
          Speak To An Expert
        </button>

        {isModalOpen && (
          <MobileSpeakToExpert handleModalToggle={handleModalToggle} />
        )}
      </li>
    </ul>
  );
};

export default MobileMenu;

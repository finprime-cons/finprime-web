import { RiArrowLeftSLine } from "react-icons/ri";
import { Link } from "react-router-dom";

const MobileServiceMenu = ({
  Services,
  toggleServiceMenuVisibility,
  toggleMobileMenuFirst,
  isMobileMenuFirstOpen,
  setIsMobileMenuOpen,
}) => {
  return (
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
  );
};

export default MobileServiceMenu;

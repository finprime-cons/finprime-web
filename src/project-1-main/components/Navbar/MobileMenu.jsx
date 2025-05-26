import { Link } from "react-router-dom";
import MobileSpeakToExpert from "./MobileSpeakToExpert";
import MobileServiceMenu from "./MobileServiceMenu";

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
          <MobileServiceMenu
            Services={Services}
            isMobileMenuFirstOpen={isMobileMenuFirstOpen}
            toggleMobileMenuFirst={toggleMobileMenuFirst}
            toggleServiceMenuVisibility={toggleServiceMenuVisibility}
            setIsMobileMenuOpen={setIsMobileMenuOpen}
          />
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

import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";
import { RiArrowLeftSLine } from "react-icons/ri";

const ServicesDropDown = ({
  title,
  description,
  buttonText,
  Services,
  selectedIndexOpen,
  isAnswerVisible,
  handleQuestionClick,
  handleCloseAnswer,
  handleLinkClick,
}) => {
  return (
    <div className="flex flex-col w-full h-full md:flex-row">
      {/* Column 1: Overview */}
      <div className="flex flex-col py-16 px-4 md:px-14 w-full md:w-[20%]">
        <h4 className="mb-2 text-2xl font-bold font-khula">{title}</h4>
        <p className="text-sm text-left text-gray-600 font-raleway">
          {description}
        </p>
        <button
          className="border font-raleway border-black w-[70%] text-sm mt-4 py-1 px-2 transition-all duration-300 ease-out 
          hover:bg-gradient-to-r hover:from-brandBlue hover:to-cyan-500 hover:text-white text-black"
        >
          {buttonText}
        </button>
      </div>

      {/* Column 2: List */}
      <div className="flex flex-col py-4 pl-4 w-full md:w-[40%]">
        <ul>
          {Services.map((service, index) => (
            <li key={index} className="group">
              <button
                onClick={() => handleQuestionClick(index)}
                className={`text-black font-khula text-lg flex justify-between w-full pl-8 py-5 border-b ${
                  selectedIndexOpen === index
                    ? "bg-brandBlue text-white border-l-8 border-cyan-500"
                    : "group-hover:bg-brandBlue group-hover:text-white group-hover:border-l-8 group-hover:border-cyan-500"
                }`}
              >
                {service.headtitle}
                <FaArrowRight
                  className={`right-0 text-2xl mr-5 ${
                    selectedIndexOpen === index
                      ? "hidden"
                      : "group-hover:animate-fadeinleftsmall"
                  }`}
                />
              </button>
            </li>
          ))}
        </ul>
      </div>

      {/* Column 3: Answer Panel */}
      <div className="flex flex-col w-full md:w-[40%] h-full relative">
        {selectedIndexOpen !== null && isAnswerVisible ? (
          <div className="inset-0 w-full h-[445px] transition-opacity duration-500 ease-in-out animate-fadeinleftsmall bg-brandBlue px-4 md:px-28 py-4">
            <div className="flex items-center">
              <button
                onClick={handleCloseAnswer}
                className="mt-6 -ml-5 mr-5 text-cyan-500 hover:text-cyan-700"
              >
                <RiArrowLeftSLine className="text-2xl" />
              </button>
              <h4 className="pt-10 mb-3 text-2xl font-bold text-white font-khula">
                {Services[selectedIndexOpen].headtitle}
              </h4>
            </div>
            <ul>
              {Services[selectedIndexOpen].subtitles.map((sub) => (
                <li key={sub.subid}>
                  <Link
                    to={`/services/${Services[selectedIndexOpen].title.replace(
                      /\s+/g,
                      "-"
                    )}/${sub.keyword.replace(/\s+/g, "-")}`}
                    state={{
                      service_id: Services[selectedIndexOpen].id,
                      subtitles_id: sub.subid,
                    }}
                    className="mb-1 ml-8 text-lg text-white hover-underline-animation"
                    onClick={handleLinkClick}
                  >
                    {sub.headsubtitle}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ) : (
          <ul className="px-4 py-4 text-black md:px-28 md:py-16">
            <h4 className="font-semibold md:text-3xl font-khula">Services</h4>
            {Services.map((service) => (
              <p
                key={service.title}
                className="flex w-full py-2 cursor-pointer text-md font-raleway"
              >
                <span className="hover-underline-animation">
                  {service.headtitle}
                </span>
              </p>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default ServicesDropDown;

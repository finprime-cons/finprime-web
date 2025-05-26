import { IoIosClose } from "react-icons/io";

const MobileSpeakToExpert = ({ handleModalToggle }) => {
  return (
    <div
      className="fixed inset-0 w-screen h-[100vh] bg-black bg-opacity-60 z-50 flex justify-center items-center"
      onClick={handleModalToggle}
    >
      <div
        className="relative bg-brandBlue mx-6 mt-16 md:mt-0 md:mx-0 w-[600px] h-[500px] md:h-[400px] shadow-md p-6"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          className="absolute font-bold text-white top-2 right-2"
          onClick={handleModalToggle}
        >
          <IoIosClose
            size={28}
            className="transition-colors duration-500 hover:text-brandBlue"
          />
        </button>

        <form className="z-50 space-y-4">
          <div className="w-[90%] mx-auto">
            <h1 className="py-6 text-4xl font-semibold text-white font-khula">
              Speak to an Expert
            </h1>

            <div className="grid gap-6 pt-8 md:grid-cols-2">
              <input
                type="text"
                placeholder="Name"
                className="w-full text-sm font-semibold text-white bg-transparent border-b-2 border-white font-raleway focus:outline-none focus:border-brandBlue placeholder:text-gray-600"
              />
              <input
                type="text"
                placeholder="Company"
                className="w-full text-sm font-semibold text-white bg-transparent border-b-2 border-white font-raleway focus:outline-none focus:border-brandBlue placeholder:text-gray-600"
              />
            </div>

            <div className="grid gap-6 pt-8 md:grid-cols-2">
              <input
                type="email"
                placeholder="E-mail"
                className="w-full text-sm font-semibold text-white bg-transparent border-b-2 border-white font-raleway focus:outline-none focus:border-brandBlue placeholder:text-gray-600"
              />
              <input
                type="text"
                placeholder="Mobile"
                className="w-full text-sm font-semibold text-white bg-transparent border-b-2 border-white font-raleway focus:outline-none focus:border-brandBlue placeholder:text-gray-600"
              />
              <label className="block ml-1 text-xs text-gray-300 font-raleway">
                I agree to the Privacy Policy{" "}
                <span className="text-red-900 underline">required</span>
              </label>
            </div>

            <div className="mt-4">
              <button
                type="submit"
                className="px-16 py-2 text-sm text-white border border-white font-raleway hover:bg-black transition-colors duration-300"
              >
                Send
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default MobileSpeakToExpert;

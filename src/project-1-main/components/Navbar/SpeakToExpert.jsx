import { useState } from "react";
import { IoIosClose } from "react-icons/io";

const SpeakToExpertForm = ({ toggleSpeakExpert }) => {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    mobile: "",
  });
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      !formData.name ||
      !formData.company ||
      !formData.email ||
      !formData.mobile
    ) {
      alert("All fields are required");
      return;
    }

    setLoading(true);
    fetch("https://finprimeconsulting.com/api/sendemail", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    })
      .then((response) => response.json())
      .then((data) => {
        alert(data.message || "Form submitted successfully!");
        setMessage(data.message);
        setFormData({ name: "", company: "", email: "", mobile: "" });

        const templateParams = {
          companyName: formData.company,
          firstName: formData.name,
          email: formData.email,
          phone: formData.mobile,
        };

        emailjs
          .send(
            "service_m92dk5v",
            "template_nhk2mx3",
            templateParams,
            "_zGtLeC1_fmp56KY0"
          )
          .then(
            (response) => {
              alert("Your enquiry has been submitted successfully!");

              // Send the auto-reply email
              const autoReplyParams = {
                to_name: formData.name,
                to_email: formData.email,
              };

              emailjs
                .send(
                  "service_m92dk5v",
                  "template_x05occf",
                  autoReplyParams,
                  "_zGtLeC1_fmp56KY0"
                )
                .then(
                  (autoReplyResponse) => {
                    console.log("Auto-reply email sent successfully!");
                  },
                  (autoReplyError) => {
                    console.error(
                      "Failed to send the auto-reply email:",
                      autoReplyError
                    );
                  }
                );
            },
            (error) => {
              alert("Failed to send the enquiry email.");
            }
          );
      })
      .catch((error) => {
        alert("Failed to submit the form.");
      })
      .finally(() => setLoading(false));
  };

  return (
    <div
      className="fixed inset-0 w-screen h-[100vh] bg-black bg-opacity-60 z-50 flex justify-center items-center"
      onClick={toggleSpeakExpert}
    >
      <div
        className="relative bg-brandBlue w-[600px] h-[400px] shadow-md p-6"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          className="absolute font-bold text-white top-2 right-2"
          onClick={toggleSpeakExpert}
          aria-label="Close Speak to Expert Modal"
        >
          <IoIosClose
            size={28}
            className="transition-colors duration-500 hover:text-brandBlue"
          />
        </button>
        <form onSubmit={handleSubmit} className="z-50 space-y-4">
          <div className="w-[90%] mx-auto">
            <h5 className="py-6 text-2xl font-semibold text-white font-khula sm:text-4xl">
              Speak to an Expert
            </h5>
            <div className="grid grid-cols-2 gap-6 pt-8">
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Name"
                className="w-full text-sm font-semibold text-white transition-colors duration-300 ease-in-out bg-transparent border-b-2 border-white font-raleway focus:outline-none focus:border-brandBlue placeholder:text-gray-600 placeholder:font-raleway"
              />
              <input
                type="text"
                name="company"
                value={formData.company}
                onChange={handleChange}
                placeholder="Company"
                className="w-full text-sm font-semibold text-white transition-colors bg-transparent border-b-2 border-white focus:outline-none placeholder:font-raleway placeholder:text-gray-600 focus:border-brandBlue"
              />
            </div>
            <div className="grid grid-cols-2 gap-6 pt-8">
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="e-mail"
                className="w-full text-sm font-semibold text-white transition-colors bg-transparent border-b-2 border-white placeholder:font-raleway placeholder:text-gray-600 focus:outline-none focus:border-brandBlue"
              />
              <input
                type="text"
                name="mobile"
                value={formData.mobile}
                onChange={handleChange}
                placeholder="Mobile"
                className="w-full text-sm font-semibold text-white transition-colors bg-transparent border-b-2 border-white focus:outline-none placeholder:text-gray-600 placeholder:font-raleway focus:border-brandBlue"
              />
              <label
                htmlFor="privacy-policy"
                className="block ml-1 text-xs text-gray-300 font-raleway col-span-2"
              >
                I agree to the Privacy Policy{" "}
                <span className="text-red-900 underline font-raleway">
                  required
                </span>
              </label>
            </div>
            <div className="mt-4">
              <button
                type="submit"
                disabled={loading}
                className="px-16 py-2 text-sm text-white transition-colors duration-300 bg-transparent border border-white font-raleway hover:bg-black hover:text-white"
              >
                {loading ? "Sending..." : "Send"}
              </button>
            </div>
            {message && (
              <p className="mt-4 text-center text-white font-raleway">
                {message}
              </p>
            )}
          </div>
        </form>
      </div>
    </div>
  );
};
export default SpeakToExpertForm;

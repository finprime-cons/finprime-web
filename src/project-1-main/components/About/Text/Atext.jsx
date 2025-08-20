import React from 'react';

const Atext = () => {
  return (
    <div id="Discover-More" className="py-8 px-4 sm:px-6 lg:px-8 px-8">
      <div className="flex flex-col w-full md:w-4/5 mx-auto">
        {/* The Story badge */}
        <div className="flex justify-start">
          <span className="bg-gradient-to-r from-[#181C2A] to-[#13B6D8] text-white text-sm sm:text-base font-bold px-4 sm:px-5 py-2 rounded-full mb-4 shadow-lg mt-16">
            The Story
          </span>
        </div>

        {/* Heading with vertical line */}
        <div className="flex items-start gap-3 sm:gap-4 flex-col sm:flex-row mt-4">
          <div className="w-1 h-10 sm:h-[3.5rem] bg-[#191F3A] rounded" />
          <h4 className="text-xl sm:text-2xl md:text-4xl font-light text-black font-inter leading-tight ">
            We're Unique: The Turning Point
          </h4>
        </div>

        {/* Paragraphs */}
        <div className="pt-6 space-y-4 text-[#191F3A] font-inter text-sm sm:text-base md:text-lg leading-relaxed text-justify">
          <p>
            We understand the true spirit of each entrepreneur and help resolve their challenges and partner with them to achieve their biggest dreams.
          </p>
          <p>
            Our success depends on the deep bond we have with our customers, and a divergent and resilient team that ensures the expectation of clients are always exceeded.
          </p>
          <p>
            'Quality and timeliness are our core values which our team always ensures are never broken in any circumstances
          </p>
          <p>
            From Audit & Assurance to Taxation and Accounting and Business Support, Business Advisory and Corporate Strategy to M&A, Fin Prime is synonymous with reliability and international best practices as it provides handholding in a complex jurisdiction. We have built trusted and enduring partnerships by providing integrated solutions for setting up the business and managing your regulatory compliances.
          </p>
          <p>
            With a good reputation in UAE and synergy benefits from our Bahrain and India offices, we set the path for our clients with cross-country operations.
          </p>
          <p>
            A vibrant cross-functional and multidisciplinary team headed by a dynamic leadership consistently ensures efficient results while a broad reach and expertise make us the preferred choice of SMEs and MNCs.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Atext;

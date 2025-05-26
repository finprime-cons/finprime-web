import React from "react";
import { Link } from "react-router-dom";

const FullScreenMenu = ({ barmenu = [] }) => {
  return (
    <div className="absolute top-0 right-0 z-40 w-full h-screen bg-center bg-cover bg-brandBlue">
      <div className="flex items-center justify-center h-full">
        <ul className="grid w-full grid-cols-5 text-center">
          {barmenu.map((item) => (
            <Link
              to={item.links}
              key={item.MenuId}
              className="relative transition duration-200 bg-center bg-cover shadow-md group hover:shadow-lg"
              style={{
                backgroundImage: `url(${item.bgImage})`,
                height: "100vh",
              }}
            >
              <div className="absolute top-0 left-0 z-10 w-full h-full transition-all duration-300 bg-black bg-opacity-60 group-hover:bg-opacity-0" />

              <span
                className="z-20 flex flex-col items-center justify-center h-full p-4 pb-10 text-white"
                aria-label={item.title}
              >
                <span className="z-10 text-4xl font-bold text-white">
                  {item.title}
                </span>
                <span className="invisible text-5xl text-white transition duration-500 group-hover:visible">
                  {item.icon}
                </span>
              </span>
            </Link>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default FullScreenMenu;

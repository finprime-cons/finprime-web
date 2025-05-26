import React, { useState } from "react";

const MenuToggleButton = ({ isOpen, toggleDropdown, isNotHomePage }) => {
  return (
    <button className="relative pb-1 group" onClick={toggleDropdown}>
      <div
        className="relative flex z-50 mt-1 rounded-full overflow-hidden items-center justify-center
        py-[15px] px-[11px] border-l border-dashed transform transition-all bg-transparent duration-300 
        ease-out hover:bg-gradient-to-r hover:from-brandBlue hover:to-cyan-500 shadow-lg"
      >
        <span
          className="text-white tracking-[1px] xl:font-raleway transition-all duration-300"
          style={{
            color: isNotHomePage ? "black" : "white",
          }}
        >
          {isOpen ? "Close" : "Menu"}
        </span>
      </div>
    </button>
  );
};

export default MenuToggleButton;

import React, { useState } from "react";
import Logo from "../assets/logo.png";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);

  return (
    <div
      className="
    fixed w-full h-20 flex 
    justify-between items-center
    px-2
    bg-purple-900 text-white"
    >
      <div>
        <img className="w-32 pt-10" src={Logo} alt="Logo" />
      </div>
      <ul className="hidden md:flex">
        <li>Home</li>
        <li>About</li>
        <li>Portfolio</li>
        <li>Contact</li>
      </ul>

      {/* Hamburger */}
      <div onClick={handleClick} className="md:hidden z-10">
        {!nav ? <FaBars /> : <FaTimes className="text-white" />}
      </div>
      {/* For mobile */}
      <ul
        className={
          !nav
            ? "hidden"
            : "absolute top-0 left-0 w-full h-screen bg-purple-900 text-gray-200 font-thin flex flex-col justify-center items-center"
        }
      >
        <li className="py-6 text-4xl">Home</li>
        <li className="py-6 text-4xl">About</li>
        <li className="py-6 text-4xl">Portfolio</li>
        <li className="py-6 text-4xl">Contact</li>
      </ul>
    </div>
  );
};

export default Navbar;

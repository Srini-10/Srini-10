import React, { useState, useEffect } from "react";
import Sun from "../assets/Navbar/Sun.svg";
import Github from "../assets/Navbar/Github.svg";
import LinkedIn from "../assets/Navbar/LinkedIn.svg";
import X from "../assets/Navbar/X.svg";
import Logo from "../assets/Face2.png";
import DownArrow from "../assets/DownArrow.svg";
import { Link, useLocation } from "react-router-dom";

function Navbar() {
  const location = useLocation();
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const isActive = (path) => {
    return location.pathname === path;
  };

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const closeDropdown = () => {
    setDropdownOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (!event.target.closest(".dropdown-menu")) {
        closeDropdown();
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <>
      <div className="gradient-background blur-[60px] mt-[-230px] absolute mx-[16%] w-[68%] flex justify-center px-auto">
        <div className="Blue-Gradient"></div>
        <div className="Red-Gradient"></div>
        <div className="Yellow-Gradient"></div>
      </div>
      <div className="bg-neutral-800 bg-opacity-[19%] backdrop-blur-[80px] w-[68%] h-[60px] rounded-lg mx-auto mt-10 items-center px-6 flex justify-between">
        <div className="flex justify-between">
          <Link to="/" className={`nav-icon ${isActive("/") ? "active" : ""}`}>
            <img src={Logo} alt="" className="rounded-lg w-[40px] h-[40px]" />
          </Link>
          <ul className="Nav_Links flex text-[16px] ml-10 text-neutral-400 font-medium items-center justify-between gap-9">
            <Link
              to="/About"
              className={`nav-link ${isActive("/About") ? "active" : ""}`}
              onClick={closeDropdown}
            >
              <li>About</li>
            </Link>
            <Link
              to="/Work"
              className={`nav-link ${isActive("/Work") ? "active" : ""}`}
              onClick={closeDropdown}
            >
              <li>Work</li>
            </Link>
            <Link
              to="/TechStack"
              className={`nav-link ${isActive("/TechStack") ? "active" : ""}`}
              onClick={closeDropdown}
            >
              <li>Tech Stack</li>
            </Link>
            <Link
              to="/Contact"
              className={`nav-link ${isActive("/Contact") ? "active" : ""}`}
              onClick={closeDropdown}
            >
              <li>Contact</li>
            </Link>
            {/* <li className="relative dropdown-menu">
              <button
                onClick={toggleDropdown}
                className="flex gap-0.5 items-center"
              >
                More <img src={DownArrow} alt="" className="w-[20px]" />
              </button>
              <ul
                className={`absolute mt-[18.22px] w-48 rounded-br-2xl bg-neutral-800 bg-opacity-[19%] backdrop-blur-[80px] text-neutral-400 rounded-bl-2xl shadow-2xl z-10 transition-all duration-300 ease-in-out transform ${
                  dropdownOpen
                    ? "opacity-100 h-[120px] scale-100"
                    : "opacity-0 h-[100px]"
                }`}
              >
                <li className="px-4 py-2 hover:text-white">
                  <Link to="/Notebook" onClick={closeDropdown}>
                    Notebook
                  </Link>
                </li>
                <li className="px-4 py-2 hover:text-white">
                  <Link to="/Bookshelf" onClick={closeDropdown}>
                    Bookshelf
                  </Link>
                </li>
                <li className="px-4 py-2 hover:text-white">
                  <Link to="/UIKit" onClick={closeDropdown}>
                    This UI Kit
                  </Link>
                </li>
              </ul>
            </li> */}
          </ul>
        </div>
        <div className="Nav_Links flex gap-6">
          <Link
            target="_blank"
            to="https://www.linkedin.com/in/srinivasan-p-32583127a/"
          >
            <img
              src={LinkedIn}
              alt=""
              className="rounded-lg w-[28px] h-[28px]"
            />
          </Link>
          <Link target="_blank" to="https://x.com/SrinivasanP1018">
            <img src={X} alt="" className="rounded-lg w-[28px] h-[28px]" />
          </Link>
          <Link target="_blank" to="https://github.com/Srini-10">
            <img src={Github} alt="" className="rounded-lg w-[28px] h-[28px]" />
          </Link>
          <div className="w-[1px] h-[auto] bg-neutral-400"></div>
          <button>
            <img src={Sun} alt="" className="rounded-lg w-[28px] h-[28px]" />
          </button>
        </div>
      </div>
    </>
  );
}

export default Navbar;

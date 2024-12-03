import React from "react";
import Sun from "../assets/Navbar/Sun.svg";
import Github from "../assets/Navbar/Github.svg";
import LinkedIn from "../assets/Navbar/LinkedIn.svg";
import X from "../assets/Navbar/X.svg";
import Logo from "../assets/Face2.png";
import { Link, useLocation } from "react-router-dom";
import Home from "../assets/Responsive/Home - Outline.svg";
import HomeActive from "../assets/Responsive/Home - Fill.svg";
import Profile from "../assets/Responsive/User - Outline.svg";
import ProfileActive from "../assets/Responsive/User - Fill.svg";
import Work from "../assets/Responsive/Bag - Outline.svg";
import WorkActive from "../assets/Responsive/Bag - Fill.svg";
import TechStack from "../assets/Responsive/Pen - Outline.svg";
import TechStackActive from "../assets/Responsive/Pen - Fill.svg";
import Contact from "../assets/Responsive/Message - Outline.svg";
import ContactActive from "../assets/Responsive/Message - Fill.svg";

function Navbar() {
  const location = useLocation();

  const isActive = (path) => {
    return location.pathname === path;
  };

  return (
    <>
      <div className="Responsive-Navbar gradient-background blur-[60px] mt-[-200px] absolute mx-[16%] w-[68%] flex justify-center px-auto">
        <div className="Blue-Gradient"></div>
        <div className="Red-Gradient"></div>
        <div className="Yellow-Gradient"></div>
      </div>
      <div className="p-10">
        <div className="Nav-Top bg-neutral-800 bg-opacity-[19%] backdrop-blur-[80px] w-[68%] h-[60px] rounded-lg mx-auto items-center px-6 flex justify-between">
          <div className="flex justify-between">
            <Link
              to="/"
              className={`nav-icon ${isActive("/") ? "active" : ""}`}
            >
              <img src={Logo} alt="" className="rounded-lg w-[40px] h-[40px]" />
            </Link>
            <ul className="Nav_Links flex text-[16px] ml-10 text-neutral-400 font-medium items-center justify-between gap-9">
              <Link
                to="/About"
                className={`nav-link ${isActive("/About") ? "active" : ""}`}
              >
                <li>About</li>
              </Link>
              <Link
                to="/Work"
                className={`nav-link ${isActive("/Work") ? "active" : ""}`}
              >
                <li>Work</li>
              </Link>
              <Link
                to="/TechStack"
                className={`nav-link ${isActive("/TechStack") ? "active" : ""}`}
              >
                <li>Tech Stack</li>
              </Link>
              <Link
                to="/Contact"
                className={`nav-link ${isActive("/Contact") ? "active" : ""}`}
              >
                <li>Contact</li>
              </Link>
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
              <img
                src={Github}
                alt=""
                className="rounded-lg w-[28px] h-[28px]"
              />
            </Link>
            <div className="w-[1px] h-[auto] bg-neutral-400"></div>
            <button>
              <img src={Sun} alt="" className="rounded-lg w-[28px] h-[28px]" />
            </button>
          </div>
        </div>
      </div>
      <div className="Nav-Bottom hidden z-[99999999] w-[358px] rounded-[12px] h-[60px] p-[12px] mx-auto top-[86vh] bg-[#19191a] border-[1px] border-[#212128] fixed justify-between">
        <Link
          to="/"
          className={`nav-bottom-link ${isActive("/") ? "active" : ""}`}
        >
          <img src={isActive("/") ? HomeActive : Home} alt="" />
        </Link>
        <Link
          to="/About"
          className={`nav-bottom-link ${isActive("/About") ? "active" : ""}`}
        >
          <img src={isActive("/About") ? ProfileActive : Profile} alt="" />
        </Link>
        <Link
          to="/Work"
          className={`nav-bottom-link ${isActive("/Work") ? "active" : ""}`}
        >
          <img src={isActive("/Work") ? WorkActive : Work} alt="" />
        </Link>
        <Link
          to="/TechStack"
          className={`nav-bottom-link ${
            isActive("/TechStack") ? "active" : ""
          }`}
        >
          <img
            src={isActive("/TechStack") ? TechStackActive : TechStack}
            alt=""
          />
        </Link>
        <Link
          to="/Contact"
          className={`nav-bottom-link ${isActive("/Contact") ? "active" : ""}`}
        >
          <img src={isActive("/Contact") ? ContactActive : Contact} alt="" />
        </Link>
      </div>
    </>
  );
}

export default Navbar;

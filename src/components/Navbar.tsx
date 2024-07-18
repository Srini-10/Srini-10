import React from "react";
import Sun from "../assets/Navbar/Sun.svg";
import Github from "../assets/Navbar/Github.svg";
import LinkedIn from "../assets/Navbar/LinkedIn.svg";
import X from "../assets/Navbar/X.svg";
import Logo from "../assets/Face2.png";
import DownArrow from "../assets/DownArrow.svg";

function Navbar() {
  return (
    <>
      {" "}
      <div className="gradient-background blur-[60px] mt-[-230px] absolute mx-[16%] w-[68%] flex justify-center px-auto">
        <div className="Blue-Gradient"></div>
        <div className="Red-Gradient"></div>
        <div className="Yellow-Gradient"></div>
      </div>
      <div className="bg-neutral-800 bg-opacity-[19%] backdrop-blur-[80px] w-[68%] h-[60px] rounded-lg mx-auto mt-10 items-center px-6 flex justify-between">
        <div className="flex justify-between">
          <img src={Logo} alt="" className="rounded-lg w-[40px] h-[40px]" />
          <ul className="Nav_Links flex text-[16px] ml-10 text-neutral-400 font-medium items-center justify-between gap-9">
            <li>About</li>
            <li>Work</li>
            <li>Notebook</li>
            <li>Contact</li>
            <li className="flex gap-0.5 items-center">
              More <img src={DownArrow} alt="" className="w-[20px]" />
            </li>
          </ul>
        </div>
        <div className="Nav_Links flex gap-6">
          <a href="https://www.linkedin.com/in/srinivasan-p-32583127a/">
            <img
              src={LinkedIn}
              alt=""
              className="rounded-lg w-[28px] h-[28px]"
            />
          </a>
          <a href="https://x.com/SrinivasanP1018">
            <img src={X} alt="" className="rounded-lg w-[28px] h-[28px]" />
          </a>
          <a href="https://github.com/Srini-10">
            <img src={Github} alt="" className="rounded-lg w-[28px] h-[28px]" />
          </a>
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

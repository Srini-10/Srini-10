import React from "react";
import Sun from "../assets/Navbar/Sun.svg";
import Github from "../assets/Navbar/Github.svg";
import LinkedIn from "../assets/Navbar/LinkedIn.svg";
import X from "../assets/Navbar/X.svg";
import Circle_Portrait from "../assets/Circle_Portrait.png";
import Logo from "../assets/Face2.png";
import DownArrow from "../assets/DownArrow.svg";
import "./Style.css";

function AboutMe() {
  return (
    <>
      <div className="min-h-[94.9vh] max-h-[100vh]">
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
              <img
                src={Github}
                alt=""
                className="rounded-lg w-[28px] h-[28px]"
              />
            </a>
            <div className="w-[1px] h-[auto] bg-neutral-400"></div>
            <button>
              <img src={Sun} alt="" className="rounded-lg w-[28px] h-[28px]" />
            </button>
          </div>
        </div>
        <div className="mx-auto w-[68%] mt-[15vh]">
          <img
            src={Circle_Portrait}
            alt=""
            className="absolute right-[100px] mt-[-50px] opacity-75 w-[540px] h-[540px] -z-50"
          />
          <p className="inter-font-style-1 text-white items-center flex gap-[15px] text-[80px]">
            <p className="text-neutral-400">I'm</p> Srinivasan
          </p>
          <p className="inter-font-style-2 w-[739px] font-medium text-[21px] leading-9 mt-6">
            A MERN stack developer helping startups turn their visions into a
            digital reality. I specialize in designing and building modern
            mobile and web-based AboutMelications using MongoDB, Express, React,
            and Node.js.
          </p>
          <div className="flex gap-4 mt-10">
            <button className="shadow-inner text-[18px] bg-neutral-900 shadow-neutral-700 rounded-lg font-medium text-white py-4 px-7">
              See my resume
            </button>
            <button className="shadow-inner text-[18px] bg-neutral-900 rounded-lg font-medium text-neutral-500 py-4 px-7">
              Get in touch
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default AboutMe;

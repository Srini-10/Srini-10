import React from "react";
import Circle_Portrait from "../assets/Circle_Portrait.png";
import "./Style.css";

function AboutMe() {
  return (
    <>
      <div className="min-h-[94.9vh] snap-start max-h-[100vh]">
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

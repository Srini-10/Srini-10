import React from "react";
import Logo from "../assets/Face2.png";
import "./Style.css";

function Footer() {
  return (
    <>
      <div className="h-[0.1px] w-full relative bg-neutral-600"></div>
      <div className="overflow-hidden h-[290px] snap-end">
        <div className="flex justify-between z-50 w-[68%] mt-12 mx-auto">
          <div>
            <img src={Logo} alt="" className="rounded-lg w-[70px] h-[70px]" />
            <p className="text-[14px] text-neutral-400 mt-1">
              Thanks for stopping by ッ
            </p>
            <p className="text-[14px] text-neutral-400 mt-[90px]">
              © 2024 Srinivasan. All Rights Reserved.
            </p>
          </div>
          <div className="Footer_Links text-neutral-400 text-[16px] leading-8 flex gap-[90px]">
            <ul className="Footer_Links">
              <h1 className="text-white text-[18px] mb-2 font-bold">Links</h1>
              <li>About</li>
              <li>Work</li>
              <li>Tech Stack</li>
              <li>Contact</li>
            </ul>
            <ul className="Footer_Links">
              <h1 className="text-white text-[18px] mb-2 font-bold">
                Elsewhere
              </h1>
              <li>Email</li>
              <li>LinkedIn</li>
              <li>GitHub</li>
              <li>Twitter</li>
            </ul>
          </div>
        </div>
        <div className="gradient-background blur-[60px] -z-50 mt-[-190px] mx-[16%] w-[68%] flex justify-center px-auto">
          <div className="Blue-Gradient2"></div>
          <div className="Red-Gradient2 mt-[-60px]"></div>
          <div className="Yellow-Gradient2"></div>
        </div>
      </div>
    </>
  );
}

export default Footer;

import React from "react";
import Logo from "../assets/Face2.png";
import "./Style.css";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <>
      <div className="h-[0.1px] w-full z-50 relative bg-neutral-600"></div>
      <div className="overflow-hidden z-50 h-[290px] snap-end">
        <div className="flex justify-between z-50 w-[68%] mt-12 mx-auto">
          <div className="z-50">
            <img src={Logo} alt="" className="rounded-lg w-[70px] h-[70px]" />
            <p className="text-[14px] z-[999] text-neutral-400 mt-1">
              Thanks for stopping by ッ
            </p>
            <p className="text-[14px] text-neutral-400 mt-[90px]">
              © 2024 Srinivasan. All Rights Reserved.
            </p>
          </div>
          <div className="Footer_Links z-50 text-neutral-400 text-[16px] leading-8 flex gap-[90px]">
            <ul className="Footer_Links">
              <h1 className="text-white text-[18px] mb-2 font-bold">Links</h1>
              <Link to="/About">
                <li className="cursor-pointer">About</li>
              </Link>
              <Link to="/Work">
                <li className="cursor-pointer">Work</li>
              </Link>
              <Link to="/TechStack">
                <li className="cursor-pointer">Tech Stack</li>
              </Link>
              <Link to="/Contact">
                <li className="cursor-pointer">Contact</li>
              </Link>
            </ul>
            <ul className="Footer_Links">
              <h1 className="text-white text-[18px] mb-2 font-bold">
                Elsewhere
              </h1>
              <Link
                target="_blank"
                to="https://mail.google.com/mail/u/0/#inbox?compose=CllgCJqVNNXjRVQcSgJwJZbBWwchqwHsxQGjgLGPbtxrRcNXZjXgXqJsHLHdcBvdSlplzJGlWKg"
              >
                <li className="cursor-pointer">Email</li>
              </Link>
              <Link
                target="_blank"
                to="https://www.linkedin.com/in/srinivasan-p-32583127a/"
              >
                <li className="cursor-pointer">LinkedIn</li>
              </Link>
              <Link target="_blank" to="https://github.com/Srini-10">
                <li className="cursor-pointer">GitHub</li>
              </Link>
              <Link target="_blank" to="https://x.com/SrinivasanP1018">
                <li className="cursor-pointer">Twitter</li>
              </Link>
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

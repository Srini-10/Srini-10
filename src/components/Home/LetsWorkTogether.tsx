import React from "react";
import Vector from "../../assets/Vector.svg";
import "../Style.css";
import { Link } from "react-router-dom";

function LetsWorkTogether() {
  return (
    <>
      <div className="Responsive-WT mx-auto w-[68%] flex snap-center justify-between mb-20 mt-[15vh]">
        <div>
          <p className="Responsive-WT-Title inter-font-style-1 text-white items-center flex gap-[15px] text-[50px]">
            Let’s work together
          </p>
          <p className="Responsive-WT-Para text-neutral-500 w-[539px] font-normal text-[20px] mt-1">
            Want to discuss an opportunity to create something great? I’m ready
            when you are.
          </p>
        </div>
        <div className="Responsive-WT-ButtonMain flex gap-4 mt-10 justify-center items-center">
          <Link to="/Contact">
            <button className="Responsive-WT-Button shadow-inner flex gap-2.5 items-center text-[16px] bg-neutral-900 shadow-neutral-700 rounded-lg font-medium text-white py-4 px-7">
              <img src={Vector} alt="" className="w-[20px]" /> Get in touch
            </button>
          </Link>
        </div>
      </div>
    </>
  );
}

export default LetsWorkTogether;

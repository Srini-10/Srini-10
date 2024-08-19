import React from "react";
import Bookshelf from "../../assets/GetToKnowMe/Bookshelf.png";
import Group from "../../assets/GetToKnowMe/Group.png";
import SriniAnimation from "../../assets/Face2.png";
import Notebook from "../../assets/GetToKnowMe/Notebook.png";
import "../Style.css";

function GetToKnowMe() {
  return (
    <>
      <div className="Responsive-KM text-white w-[68%] mx-auto min-h-[100vh] pt-10 mb-10">
        <p className="Responsive-KM-Title inter-font-style-1 text-white font-bold text-[50px]">
          Get To Know Me
        </p>
        <div className="Responsive-KM-Container mt-4 grid grid-cols-2 gap-3">
          <div className="Responsive-KM-Div w-full min-w-[480px] snap-center h-[60vh] max-h-[480px] rounded-3xl justify-center overflow-hidden text-center pt-14 bg-neutral-900 border-[1px] border-neutral-700">
            <h1 className="font-bold text-[32px]">About me</h1>
            <p className="text-neutral-400 text-[16px]">
              Who I am and what I do
            </p>
            <img
              src={SriniAnimation}
              alt=""
              className="Responsive-KM-Img1 mx-auto w-[290px] mt-10"
            />
          </div>
          <div className="Responsive-KM-Div w-full min-w-[480px] h-[60vh] max-h-[480px] rounded-3xl justify-center overflow-hidden text-center pt-14 bg-neutral-900 border-[1px] border-neutral-700">
            <h1 className="font-bold text-[32px]">Notebook</h1>
            <p className="text-neutral-400 text-[16px]">
              My thoughts, insights, and reflections
            </p>
            <img
              src={Notebook}
              alt=""
              className="Responsive-KM-Img2 mx-auto mt-[15px]"
            />
          </div>
          <div className="Responsive-KM-Div w-full min-w-[480px] h-[60vh] snap-center max-h-[480px] rounded-3xl justify-center overflow-hidden text-center pt-14 bg-neutral-900 border-[1px] border-neutral-700">
            <h1 className="font-bold text-[32px]">Bookshelf</h1>
            <p className="text-neutral-400 text-[16px]">
              Books and pieces of wisdom I’ve enjoyed reading
            </p>
            <img
              src={Bookshelf}
              alt=""
              className="Responsive-KM-Img3 mx-auto"
            />
          </div>
          <div className="Responsive-KM-Div w-full min-w-[480px] h-[60vh] max-h-[480px] rounded-3xl justify-center overflow-hidden text-center pt-14 bg-neutral-900 border-[1px] border-neutral-700">
            <h1 className="font-bold text-[32px]">Tech Stacks</h1>
            <p className="text-neutral-400 text-[16px]">
              The dev tools, apps, devices, and games I use and play.
            </p>
            <img
              src={Group}
              alt=""
              className="Responsive-KM-Img4 mx-auto mt-9"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default GetToKnowMe;

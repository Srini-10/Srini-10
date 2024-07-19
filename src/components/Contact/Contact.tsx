import React from "react";
import Buttons from "../../assets/Button_Controls.svg";
import Vector from "../../assets/Vector.svg";

function Contact() {
  return (
    <>
      <div className="mb-[80px] relative scroll-smooth focus:scroll-auto">
        <div className="mx-auto w-[68%] mt-[15vh]">
          <p className="inter-font-style-1 text-white items-center flex gap-[15px] text-[80px]">
            Get in touch
          </p>
          <p className="text-neutral-600 w-[739px] font-medium text-[21px] leading-9 -mt-[10px]">
            Let’s build something awesome.
          </p>
        </div>
        <div className="h-[0.5px] w-full mt-14 bg-neutral-600"></div>
        <div className="mx-auto pt-[60px] w-[68%]">
          <div className="w-full bg-neutral-900 rounded-2xl h-[650px]">
            <div className="flex items-center justify-between">
              <img src={Buttons} alt="" className="p-4" />
              <p className="text-white font-medium text-[13px]">New message</p>
              <img
                src={Buttons}
                alt=""
                className="p-4 opacity-0 -z-50 select-none"
              />
            </div>
            <div className="w-full h-[0.5px] -mt-1 bg-neutral-800"></div>
            <div className="px-9 py-4">
              <div className="my-1">
                <label className="text-white font-medium text-[15px]">
                  Email:
                </label>
                <input
                  type="text"
                  className="bg-transparent text-neutral-400 text-[15px] w-[89%] ml-2 border-0 focus:ring-0 focus:outline-none"
                  placeholder="Enter your email address"
                />
                <div className="w-full h-[1px] mt-3 bg-neutral-700"></div>
              </div>
              <div className="my-4">
                <label className="text-white font-medium text-[15px]">
                  Name:
                </label>
                <input
                  type="text"
                  className="bg-transparent text-neutral-400 text-[15px] w-[89%] ml-2 border-0 focus:ring-0 focus:outline-none"
                  placeholder="Enter your name"
                />
                <div className="w-full h-[1px] mt-3 bg-neutral-700"></div>
              </div>
              <div className="my-4">
                <label className="text-white font-medium text-[15px]">
                  Subject:
                </label>
                <input
                  type="text"
                  className="bg-transparent text-neutral-400 text-[15px] w-[89%] ml-2 border-0 focus:ring-0 focus:outline-none"
                  placeholder="Enter subject"
                />
                <div className="w-full h-[1px] mt-3 bg-neutral-700"></div>
              </div>
              <div>
                <textarea
                  placeholder="Write your message here"
                  className="textarea text-neutral-400 p-4 w-full h-[300px] bg-neutral-950 mt-4 rounded-xl border-0 focus:ring-0 focus:outline-none"
                />
              </div>
              <div className="flex gap-4 mt-5 justify-end mr-5 items-center">
                <button className="shadow-inner flex gap-2.5 items-center text-[16px] bg-neutral-900 shadow-neutral-700 rounded-lg font-medium text-white py-4 px-7">
                  <img src={Vector} alt="" className="w-[20px]" /> Get in touch
                </button>
              </div>
            </div>
          </div>
          <div></div>
        </div>
      </div>
    </>
  );
}

export default Contact;

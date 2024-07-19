import React from "react";
import Logo1 from "../../assets/TuneUp_Logo.jpg";
import Logo2 from "../../assets/KMM_Logo.png";
import Logo3 from "../../assets/Gemini_Logo.png";
import Logo4 from "../../assets/Pexels_Logo.png";
import Gemini from "../../assets/Gemini.png";
import Pexels from "../../assets/Pexels.png";
import TuneUp from "../../assets/TuneUp.png";
import KMM from "../../assets/KMM.png";
import "../Style.css";

function SelectedWork() {
  return (
    <>
      <div className="text-white w-[68%] mx-auto min-h-[100vh] pt-10 mb-10">
        <p className="inter-font-style-1 text-white items-center flex gap-[15px] text-[50px]">
          Selected Work
        </p>
        <div className="mt-4">
          <div className="w-full snap-center min-h-[68vh] flex max-h-[560px] overflow-hidden pl-14 pt-14 bg-neutral-900 rounded-[40px] border-[1px] border-neutral-700 mb-7">
            <div>
              <img
                src={Logo1}
                alt=""
                className="w-[70px] rounded-lg shadow-neutral-700 shadow-inner"
              />
              <p className="inter-font-style-1 text-white items-center mt-2 w-[520px] leading-[55px] flex gap-[15px] text-[40px]">
                TuneUp Technologies - Educational Website
              </p>
              <p className="text-neutral-500 w-[520px]">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rerum
                animi, eaque quae, laudantium accusamus ullam facilis, facere
                nihil nam minima delectus alias in architecto recusandae
                reprehenderit qui error amet! Provident.
              </p>
              <a href="https://tuneuptech.in" target="_blank" rel="noreferrer">
                <p className="Button mt-[130px] w-[120px] rounded-lg text-[17px] font-medium cursor-pointer">
                  Visit my Site <b className="Arrow">&#10509;</b>
                </p>
              </a>
            </div>
            <div>
              <img
                src={TuneUp}
                alt=""
                className="min-w-[650px] mt-[-10px] ml-[20px]"
              />
            </div>
          </div>
          <div className="w-full snap-center min-h-[68vh] flex max-h-[560px] overflow-hidden pl-14 pt-14 bg-neutral-900 rounded-[40px] border-[1px] border-neutral-700 mb-7">
            <div>
              <img
                src={Logo2}
                alt=""
                className="w-[70px] rounded-lg shadow-neutral-700 shadow-inner"
              />
              <p className="inter-font-style-1 text-white items-center mt-2 w-[520px] leading-[55px] flex gap-[15px] text-[40px]">
                Kasthuri Medical Mission - Institution Website
              </p>
              <p className="text-neutral-500 w-[520px]">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rerum
                animi, eaque quae, laudantium accusamus ullam facilis, facere
                nihil nam minima delectus alias in architecto recusandae
                reprehenderit qui error amet! Provident.
              </p>
              <a
                href="https://kasthurimedicalmission.in/"
                target="_blank"
                rel="noreferrer"
              >
                <p className="Button mt-[140px] w-[120px] rounded-lg text-[17px] font-medium cursor-pointer">
                  Visit my Site <b className="Arrow">&#10509;</b>
                </p>
              </a>
            </div>
            <div>
              <img
                src={KMM}
                alt=""
                className="min-w-[780px] mt-[-60px] ml-[-10px]"
              />
            </div>
          </div>
          <div className="w-full snap-center min-h-[68vh] flex max-h-[560px] overflow-hidden pl-14 pt-14 bg-neutral-900 rounded-[40px] border-[1px] border-neutral-700 mb-7">
            <div>
              <img
                src={Logo3}
                alt=""
                className="w-[70px] rounded-lg shadow-neutral-700 shadow-inner"
              />
              <p className="inter-font-style-1 text-white items-center mt-2 w-[520px] leading-[55px] flex gap-[15px] text-[40px]">
                Gemini AI - Clone Website
              </p>
              <p className="text-neutral-500 w-[520px]">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rerum
                animi, eaque quae, laudantium accusamus ullam facilis, facere
                nihil nam minima delectus alias in architecto recusandae
                reprehenderit qui error amet! Provident.
              </p>
              <a
                href="https://gemini-ai-clone-amber.vercel.app/"
                target="_blank"
                rel="noreferrer"
              >
                <p className="Button mt-[178px] w-[120px] rounded-lg text-[17px] font-medium cursor-pointer">
                  Visit my Site <b className="Arrow">&#10509;</b>
                </p>
              </a>
            </div>
            <div>
              <img
                src={Gemini}
                alt=""
                className="min-w-[650px] mt-[-10px] ml-[20px]"
              />
            </div>
          </div>
          <div className="w-full snap-center min-h-[68vh] flex max-h-[560px] overflow-hidden pl-14 pt-14 bg-neutral-900 rounded-[40px] border-[1px] border-neutral-700 mb-7">
            <div>
              <img
                src={Logo4}
                alt=""
                className="w-[70px] rounded-lg shadow-neutral-700 shadow-inner"
              />
              <p className="inter-font-style-1 text-white items-center mt-2 w-[520px] leading-[55px] flex gap-[15px] text-[40px]">
                Pexels - High Quality Image Gallery Website
              </p>
              <p className="text-neutral-500 w-[520px]">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rerum
                animi, eaque quae, laudantium accusamus ullam facilis, facere
                nihil nam minima delectus alias in architecto recusandae
                reprehenderit qui error amet! Provident.
              </p>
              <a
                href="https://pexel-clone-six.vercel.app/"
                target="_blank"
                rel="noreferrer"
              >
                <p className="Button mt-[130px] w-[120px] rounded-lg text-[17px] font-medium cursor-pointer">
                  Visit my Site <b className="Arrow">&#10509;</b>
                </p>
              </a>
            </div>
            <div>
              <img
                src={Pexels}
                alt=""
                className="min-w-[650px] mt-[-20px] ml-[20px] -rotate-3"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SelectedWork;

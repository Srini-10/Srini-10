import React from "react";

// Design & Dev List
import Figma from "../../assets/Tech_Card/Tools/Figma.svg";
import Framer from "../../assets/Tech_Card/Tools/Framer.svg";
import Github from "../../assets/Tech_Card/Tools/Github.svg";
import HooksForm from "../../assets/Tech_Card/Tools/React_Hook_Form.svg";
import Tailwind from "../../assets/Tech_Card/Tools/TailwindCSS.svg";
import Typescript from "../../assets/Tech_Card/Tools/TypeScript.svg";
import Vercel from "../../assets/Tech_Card/Tools/Vercel.svg";
import Vscode from "../../assets/Tech_Card/Tools/VSCode.svg";
import Wrap from "../../assets/Tech_Card/Tools/Warp.svg";
import NextUI from "../../assets/Tech_Card/Tools/NextUI.png";
import Mantine from "../../assets/Tech_Card/Tools/Mantine.png";
import Relume from "../../assets/Tech_Card/Tools/Relume.png";

// Apps List
import ChatGPT from "../../assets/Tech_Card/Apps/ChatGPT.svg";
import Brave from "../../assets/Tech_Card/Apps/Brave.svg";
import Chrome from "../../assets/Tech_Card/Apps/Chrome.svg";
import Discord from "../../assets/Tech_Card/Apps/Discord.svg";
import Duolingo from "../../assets/Tech_Card/Apps/Duolingo.svg";
import Slack from "../../assets/Tech_Card/Apps/Slack.svg";
import Spotify from "../../assets/Tech_Card/Apps/Spotify.svg";
import MongoDB from "../../assets/Tech_Card/Apps/MongoDB.png";
import PostMan from "../../assets/Tech_Card/Apps/Postman.png";

// Hardwares List
import Laptop from "../../assets/Tech_Card/Hardware/Laptop.svg";
import Pixel from "../../assets/Tech_Card/Hardware/Pixel.png";
import Earpods from "../../assets/Tech_Card/Hardware/Earpods.png";

// Games List
import BGMI from "../../assets/Tech_Card/Game/BGMI.png";
import COC from "../../assets/Tech_Card/Game/COC.png";

function TechStack() {
  return (
    <>
      <div className="h-[100vh] mb-[2900px]">
        <div className="mx-auto w-[68%] mt-[15vh]">
          <p className="inter-font-style-1 text-white items-center flex gap-[15px] text-[80px]">
            Tech Stack
          </p>
          <p className="text-neutral-600 w-[739px] font-medium text-[21px] leading-9 -mt-[10px]">
            The dev tools, apps, devices, and games I use and play.
          </p>
        </div>
        <div className="h-[0.5px] w-full mt-14 bg-neutral-600"></div>

        {/* Dev & Design List */}
        <div className="mx-auto w-[68%] mt-10">
          <p className="inter-font-style-1 text-neutral-500 items-center flex gap-[15px] text-[48px]">
            Dev & Design
          </p>
          <div className="mt-4 grid grid-cols-3 gap-3">
            <div className="w-full snap-center h-[40vh] max-h-[480px] rounded-3xl justify-center overflow-hidden text-center pt-11 bg-neutral-900">
              <img
                src={Figma}
                alt=""
                className="mx-auto w-full px-[28%] mb-14 mt-3"
              />
              <div className="flex items-center justify-between mt-4 px-[7%]">
                <h1 className="font-bold text-white text-[25px]">GitHub</h1>
                <button className="text-neutral-400 border-[1px] rounded-full border-neutral-700 px-4 py-1.5 text-[12px]">
                  Vision Control
                </button>
              </div>
            </div>
            <div className="w-full snap-center h-[40vh] max-h-[480px] rounded-3xl justify-center overflow-hidden text-center pt-11 bg-neutral-900">
              <img
                src={Framer}
                alt=""
                className="mx-auto w-full px-[28%] mb-14 mt-3"
              />
              <div className="flex items-center justify-between mt-4 px-[7%]">
                <h1 className="font-bold text-white text-[25px]">GitHub</h1>
                <button className="text-neutral-400 border-[1px] rounded-full border-neutral-700 px-4 py-1.5 text-[12px]">
                  Vision Control
                </button>
              </div>
            </div>
            <div className="w-full snap-center h-[40vh] max-h-[480px] rounded-3xl justify-center overflow-hidden text-center pt-11 bg-neutral-900">
              <img
                src={Github}
                alt=""
                className="mx-auto w-full px-[28%] mb-14 mt-3"
              />
              <div className="flex items-center justify-between mt-4 px-[7%]">
                <h1 className="font-bold text-white text-[25px]">GitHub</h1>
                <button className="text-neutral-400 border-[1px] rounded-full border-neutral-700 px-4 py-1.5 text-[12px]">
                  Vision Control
                </button>
              </div>
            </div>
            <div className="w-full snap-center h-[40vh] max-h-[480px] rounded-3xl justify-center overflow-hidden text-center pt-11 bg-neutral-900">
              <img
                src={HooksForm}
                alt=""
                className="mx-auto w-full px-[28%] mb-14 mt-3"
              />
              <div className="flex items-center justify-between mt-4 px-[7%]">
                <h1 className="font-bold text-white text-[25px]">GitHub</h1>
                <button className="text-neutral-400 border-[1px] rounded-full border-neutral-700 px-4 py-1.5 text-[12px]">
                  Vision Control
                </button>
              </div>
            </div>
            <div className="w-full snap-center h-[40vh] max-h-[480px] rounded-3xl justify-center overflow-hidden text-center pt-11 bg-neutral-900">
              <img
                src={Tailwind}
                alt=""
                className="mx-auto w-full px-[28%] mb-14 mt-3"
              />
              <div className="flex items-center justify-between mt-4 px-[7%]">
                <h1 className="font-bold text-white text-[25px]">GitHub</h1>
                <button className="text-neutral-400 border-[1px] rounded-full border-neutral-700 px-4 py-1.5 text-[12px]">
                  Vision Control
                </button>
              </div>
            </div>
            <div className="w-full snap-center h-[40vh] max-h-[480px] rounded-3xl justify-center overflow-hidden text-center pt-11 bg-neutral-900">
              <img
                src={Typescript}
                alt=""
                className="mx-auto w-full px-[28%] mb-14 mt-3"
              />
              <div className="flex items-center justify-between mt-4 px-[7%]">
                <h1 className="font-bold text-white text-[25px]">GitHub</h1>
                <button className="text-neutral-400 border-[1px] rounded-full border-neutral-700 px-4 py-1.5 text-[12px]">
                  Vision Control
                </button>
              </div>
            </div>
            <div className="w-full snap-center h-[40vh] max-h-[480px] rounded-3xl justify-center overflow-hidden text-center pt-11 bg-neutral-900">
              <img
                src={Vercel}
                alt=""
                className="mx-auto w-full px-[28%] mb-14 mt-3"
              />
              <div className="flex items-center justify-between mt-4 px-[7%]">
                <h1 className="font-bold text-white text-[25px]">GitHub</h1>
                <button className="text-neutral-400 border-[1px] rounded-full border-neutral-700 px-4 py-1.5 text-[12px]">
                  Vision Control
                </button>
              </div>
            </div>
            <div className="w-full snap-center h-[40vh] max-h-[480px] rounded-3xl justify-center overflow-hidden text-center pt-11 bg-neutral-900">
              <img
                src={Vscode}
                alt=""
                className="mx-auto w-full px-[28%] mb-14 mt-3"
              />
              <div className="flex items-center justify-between mt-4 px-[7%]">
                <h1 className="font-bold text-white text-[25px]">GitHub</h1>
                <button className="text-neutral-400 border-[1px] rounded-full border-neutral-700 px-4 py-1.5 text-[12px]">
                  Vision Control
                </button>
              </div>
            </div>
            <div className="w-full snap-center h-[40vh] max-h-[480px] rounded-3xl justify-center overflow-hidden text-center pt-11 bg-neutral-900">
              <img
                src={Wrap}
                alt=""
                className="mx-auto w-full px-[28%] mb-14 mt-3"
              />
              <div className="flex items-center justify-between mt-4 px-[7%]">
                <h1 className="font-bold text-white text-[25px]">GitHub</h1>
                <button className="text-neutral-400 border-[1px] rounded-full border-neutral-700 px-4 py-1.5 text-[12px]">
                  Vision Control
                </button>
              </div>
            </div>
            <div className="w-full snap-center h-[40vh] max-h-[480px] rounded-3xl justify-center overflow-hidden text-center pt-11 bg-neutral-900">
              <img
                src={NextUI}
                alt=""
                className="mx-auto w-full px-[28%] mb-14 mt-3"
              />
              <div className="flex items-center justify-between mt-4 px-[7%]">
                <h1 className="font-bold text-white text-[25px]">GitHub</h1>
                <button className="text-neutral-400 border-[1px] rounded-full border-neutral-700 px-4 py-1.5 text-[12px]">
                  Vision Control
                </button>
              </div>
            </div>
            <div className="w-full snap-center h-[40vh] max-h-[480px] rounded-3xl justify-center overflow-hidden text-center pt-11 bg-neutral-900">
              <img
                src={Mantine}
                alt=""
                className="mx-auto w-full px-[28%] mb-14 mt-3"
              />
              <div className="flex items-center justify-between mt-4 px-[7%]">
                <h1 className="font-bold text-white text-[25px]">GitHub</h1>
                <button className="text-neutral-400 border-[1px] rounded-full border-neutral-700 px-4 py-1.5 text-[12px]">
                  Vision Control
                </button>
              </div>
            </div>
            <div className="w-full snap-center h-[40vh] max-h-[480px] rounded-3xl justify-center overflow-hidden text-center pt-11 bg-neutral-900">
              <img
                src={Relume}
                alt=""
                className="mx-auto w-full px-[28%] mb-14 mt-3"
              />
              <div className="flex items-center justify-between mt-4 px-[7%]">
                <h1 className="font-bold text-white text-[25px]">GitHub</h1>
                <button className="text-neutral-400 border-[1px] rounded-full border-neutral-700 px-4 py-1.5 text-[12px]">
                  Vision Control
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Apps List */}
        <div className="mx-auto w-[68%] mt-10">
          <p className="inter-font-style-1 text-neutral-500 items-center flex gap-[15px] text-[48px]">
            Apps
          </p>
          <div className="mt-4 grid grid-cols-3 gap-3">
            <div className="w-full snap-center h-[40vh] max-h-[480px] rounded-3xl justify-center overflow-hidden text-center pt-11 bg-neutral-900">
              <img
                src={ChatGPT}
                alt=""
                className="mx-auto w-full px-[28%] mb-14 mt-3"
              />
              <div className="flex items-center justify-between mt-4 px-[7%]">
                <h1 className="font-bold text-white text-[25px]">GitHub</h1>
                <button className="text-neutral-400 border-[1px] rounded-full border-neutral-700 px-4 py-1.5 text-[12px]">
                  Vision Control
                </button>
              </div>
            </div>
            <div className="w-full snap-center h-[40vh] max-h-[480px] rounded-3xl justify-center overflow-hidden text-center pt-11 bg-neutral-900">
              <img
                src={Brave}
                alt=""
                className="mx-auto w-full px-[28%] mb-14 mt-3"
              />
              <div className="flex items-center justify-between mt-4 px-[7%]">
                <h1 className="font-bold text-white text-[25px]">GitHub</h1>
                <button className="text-neutral-400 border-[1px] rounded-full border-neutral-700 px-4 py-1.5 text-[12px]">
                  Vision Control
                </button>
              </div>
            </div>
            <div className="w-full snap-center h-[40vh] max-h-[480px] rounded-3xl justify-center overflow-hidden text-center pt-11 bg-neutral-900">
              <img
                src={Chrome}
                alt=""
                className="mx-auto w-full px-[28%] mb-14 mt-3"
              />
              <div className="flex items-center justify-between mt-4 px-[7%]">
                <h1 className="font-bold text-white text-[25px]">GitHub</h1>
                <button className="text-neutral-400 border-[1px] rounded-full border-neutral-700 px-4 py-1.5 text-[12px]">
                  Vision Control
                </button>
              </div>
            </div>
            <div className="w-full snap-center h-[40vh] max-h-[480px] rounded-3xl justify-center overflow-hidden text-center pt-11 bg-neutral-900">
              <img
                src={Discord}
                alt=""
                className="mx-auto w-full px-[28%] mb-14 mt-3"
              />
              <div className="flex items-center justify-between mt-4 px-[7%]">
                <h1 className="font-bold text-white text-[25px]">GitHub</h1>
                <button className="text-neutral-400 border-[1px] rounded-full border-neutral-700 px-4 py-1.5 text-[12px]">
                  Vision Control
                </button>
              </div>
            </div>
            <div className="w-full snap-center h-[40vh] max-h-[480px] rounded-3xl justify-center overflow-hidden text-center pt-11 bg-neutral-900">
              <img
                src={Duolingo}
                alt=""
                className="mx-auto w-full px-[28%] mb-14 mt-3"
              />
              <div className="flex items-center justify-between mt-4 px-[7%]">
                <h1 className="font-bold text-white text-[25px]">GitHub</h1>
                <button className="text-neutral-400 border-[1px] rounded-full border-neutral-700 px-4 py-1.5 text-[12px]">
                  Vision Control
                </button>
              </div>
            </div>
            <div className="w-full snap-center h-[40vh] max-h-[480px] rounded-3xl justify-center overflow-hidden text-center pt-11 bg-neutral-900">
              <img
                src={Slack}
                alt=""
                className="mx-auto w-full px-[28%] mb-14 mt-3"
              />
              <div className="flex items-center justify-between mt-4 px-[7%]">
                <h1 className="font-bold text-white text-[25px]">GitHub</h1>
                <button className="text-neutral-400 border-[1px] rounded-full border-neutral-700 px-4 py-1.5 text-[12px]">
                  Vision Control
                </button>
              </div>
            </div>
            <div className="w-full snap-center h-[40vh] max-h-[480px] rounded-3xl justify-center overflow-hidden text-center pt-11 bg-neutral-900">
              <img
                src={MongoDB}
                alt=""
                className="mx-auto w-full px-[28%] mb-14 mt-3"
              />
              <div className="flex items-center justify-between mt-4 px-[7%]">
                <h1 className="font-bold text-white text-[25px]">GitHub</h1>
                <button className="text-neutral-400 border-[1px] rounded-full border-neutral-700 px-4 py-1.5 text-[12px]">
                  Vision Control
                </button>
              </div>
            </div>
            <div className="w-full snap-center h-[40vh] max-h-[480px] rounded-3xl justify-center overflow-hidden text-center pt-11 bg-neutral-900">
              <img
                src={PostMan}
                alt=""
                className="mx-auto w-full px-[28%] mb-14 mt-3"
              />
              <div className="flex items-center justify-between mt-4 px-[7%]">
                <h1 className="font-bold text-white text-[25px]">GitHub</h1>
                <button className="text-neutral-400 border-[1px] rounded-full border-neutral-700 px-4 py-1.5 text-[12px]">
                  Vision Control
                </button>
              </div>
            </div>
            <div className="w-full snap-center h-[40vh] max-h-[480px] rounded-3xl justify-center overflow-hidden text-center pt-11 bg-neutral-900">
              <img
                src={Spotify}
                alt=""
                className="mx-auto w-full px-[28%] mb-14 mt-3"
              />
              <div className="flex items-center justify-between mt-4 px-[7%]">
                <h1 className="font-bold text-white text-[25px]">GitHub</h1>
                <button className="text-neutral-400 border-[1px] rounded-full border-neutral-700 px-4 py-1.5 text-[12px]">
                  Vision Control
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Hardware List */}
        <div className="mx-auto w-[68%] mt-10">
          <p className="inter-font-style-1 text-neutral-500 items-center flex gap-[15px] text-[48px]">
            Hardware
          </p>
          <div className="mt-4 grid grid-cols-3 gap-3">
            <div className="w-full snap-center h-[40vh] max-h-[480px] rounded-3xl justify-center overflow-hidden text-center pt-11 bg-neutral-900">
              <img
                src={Laptop}
                alt=""
                className="mx-auto w-full px-[28%] mb-14 mt-3"
              />
              <div className="flex items-center justify-between mt-4 px-[7%]">
                <h1 className="font-bold text-white text-[25px]">GitHub</h1>
                <button className="text-neutral-400 border-[1px] rounded-full border-neutral-700 px-4 py-1.5 text-[12px]">
                  Vision Control
                </button>
              </div>
            </div>
            <div className="w-full snap-center h-[40vh] max-h-[480px] rounded-3xl justify-center overflow-hidden text-center pt-11 bg-neutral-900">
              <img
                src={Pixel}
                alt=""
                className="mx-auto w-full px-[28%] mb-14 mt-3"
              />
              <div className="flex items-center justify-between mt-4 px-[7%]">
                <h1 className="font-bold text-white text-[25px]">GitHub</h1>
                <button className="text-neutral-400 border-[1px] rounded-full border-neutral-700 px-4 py-1.5 text-[12px]">
                  Vision Control
                </button>
              </div>
            </div>
            <div className="w-full snap-center h-[40vh] max-h-[480px] rounded-3xl justify-center overflow-hidden text-center pt-11 bg-neutral-900">
              <img
                src={Earpods}
                alt=""
                className="mx-auto w-full px-[28%] mb-14 mt-3"
              />
              <div className="flex items-center justify-between mt-4 px-[7%]">
                <h1 className="font-bold text-white text-[25px]">GitHub</h1>
                <button className="text-neutral-400 border-[1px] rounded-full border-neutral-700 px-4 py-1.5 text-[12px]">
                  Vision Control
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Game List */}
        <div className="mx-auto w-[68%] mt-10">
          <p className="inter-font-style-1 text-neutral-500 items-center flex gap-[15px] text-[48px]">
            Games
          </p>
          <div className="mt-4 grid grid-cols-3 gap-3">
            <div className="w-full snap-center h-[40vh] max-h-[480px] rounded-3xl justify-center overflow-hidden text-center pt-11 bg-neutral-900">
              <img
                src={BGMI}
                alt=""
                className="mx-auto w-full px-[28%] mb-14 mt-3"
              />
              <div className="flex items-center justify-between mt-4 px-[7%]">
                <h1 className="font-bold text-white text-[25px]">GitHub</h1>
                <button className="text-neutral-400 border-[1px] rounded-full border-neutral-700 px-4 py-1.5 text-[12px]">
                  Vision Control
                </button>
              </div>
            </div>
            <div className="w-full snap-center h-[40vh] max-h-[480px] rounded-3xl justify-center overflow-hidden text-center pt-11 bg-neutral-900">
              <img
                src={COC}
                alt=""
                className="mx-auto w-full px-[28%] mb-14 mt-3"
              />
              <div className="flex items-center justify-between mt-4 px-[7%]">
                <h1 className="font-bold text-white text-[25px]">GitHub</h1>
                <button className="text-neutral-400 border-[1px] rounded-full border-neutral-700 px-4 py-1.5 text-[12px]">
                  Vision Control
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default TechStack;

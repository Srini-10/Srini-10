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
import ChatGPT from "../../assets/Tech_Card/Apps/ChatGPT.png";
import Brave from "../../assets/Tech_Card/Apps/Brave.png";
import Chrome from "../../assets/Tech_Card/Apps/Chrome.svg";
import Discord from "../../assets/Tech_Card/Apps/Discord.svg";
import Duolingo from "../../assets/Tech_Card/Apps/Duolingo.svg";
import Slack from "../../assets/Tech_Card/Apps/Slack.svg";
import Spotify from "../../assets/Tech_Card/Apps/Spotify.svg";
import MongoDB from "../../assets/Tech_Card/Apps/MongoDB.png";
import PostMan from "../../assets/Tech_Card/Apps/Postman.png";

// Office Tools
import Excel from "../../assets/Tech_Card/Apps/Excel.png";
import Word from "../../assets/Tech_Card/Apps/Word.png";
import PowerPoint from "../../assets/Tech_Card/Apps/PowerPoint.png";

// Editing Tools
import FCP from "../../assets/Tech_Card/Apps/FCP.png";
import AM from "../../assets/Tech_Card/Apps/AM.png";
import AE from "../../assets/Tech_Card/Apps/AE.png";
import PP from "../../assets/Tech_Card/Apps/PP.png";
import PS from "../../assets/Tech_Card/Apps/PS.png";
import Blender from "../../assets/Tech_Card/Apps/Blender.png";

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
      <div className="mb-[80px] scroll-smooth focus:scroll-auto">
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
          <p className="inter-font-style-1 mb-1 mt-3 text-neutral-500 items-center flex gap-[15px] text-[48px]">
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
                <h1 className="font-bold text-white text-[21px]">Figma</h1>
                <button className="text-neutral-400 border-[1px] rounded-full border-neutral-700 px-4 py-1.5 text-[12px]">
                  Design
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
                <h1 className="font-bold text-white text-[21px]">
                  Framer Motion
                </h1>
                <button className="text-neutral-400 border-[1px] rounded-full border-neutral-700 px-4 py-1.5 text-[12px]">
                  Animation
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
                <h1 className="font-bold text-white text-[21px]">GitHub</h1>
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
                <h1 className="font-bold text-white text-[21px]">
                  React Hooks Form
                </h1>
                <button className="text-neutral-400 border-[1px] rounded-full border-neutral-700 px-4 py-1.5 text-[12px]">
                  Library
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
                <h1 className="font-bold text-white text-[21px]">
                  Tailwind CSS
                </h1>
                <button className="text-neutral-400 border-[1px] rounded-full border-neutral-700 px-4 py-1.5 text-[12px]">
                  CSS
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
                <h1 className="font-bold text-white text-[21px]">TypeScript</h1>
                <button className="text-neutral-400 border-[1px] rounded-full border-neutral-700 px-4 py-1.5 text-[12px]">
                  Language
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
                <h1 className="font-bold text-white text-[21px]">Vercel</h1>
                <button className="text-neutral-400 border-[1px] rounded-full border-neutral-700 px-4 py-1.5 text-[12px]">
                  Deployment
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
                <h1 className="font-bold text-white text-[21px]">VS Code</h1>
                <button className="text-neutral-400 border-[1px] rounded-full border-neutral-700 px-4 py-1.5 text-[12px]">
                  Editor
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
                <h1 className="font-bold text-white text-[21px]">Wrap</h1>
                <button className="text-neutral-400 border-[1px] rounded-full border-neutral-700 px-4 py-1.5 text-[12px]">
                  Terminal
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
                <h1 className="font-bold text-white text-[21px]">Next UI</h1>
                <button className="text-neutral-400 border-[1px] rounded-full border-neutral-700 px-4 py-1.5 text-[12px]">
                  UI Library
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
                <h1 className="font-bold text-white text-[21px]">Mantine UI</h1>
                <button className="text-neutral-400 border-[1px] rounded-full border-neutral-700 px-4 py-1.5 text-[12px]">
                  UI Library
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
                <h1 className="font-bold text-white text-[21px]">Relume AI</h1>
                <button className="text-neutral-400 border-[1px] rounded-full border-neutral-700 px-4 py-1.5 text-[12px]">
                  Wireframe Design
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Apps List */}
        <div className="mx-auto w-[68%] mt-10">
          <p className="inter-font-style-1  mb-1 mt-3 text-neutral-500 items-center flex gap-[15px] text-[48px]">
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
                <h1 className="font-bold text-white text-[21px]">ChatGPT</h1>
                <button className="text-neutral-400 border-[1px] rounded-full border-neutral-700 px-4 py-1.5 text-[12px]">
                  Productivity
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
                <h1 className="font-bold text-white text-[21px]">Brave</h1>
                <button className="text-neutral-400 border-[1px] rounded-full border-neutral-700 px-4 py-1.5 text-[12px]">
                  browser
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
                <h1 className="font-bold text-white text-[21px]">Chrome</h1>
                <button className="text-neutral-400 border-[1px] rounded-full border-neutral-700 px-4 py-1.5 text-[12px]">
                  Browser
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
                <h1 className="font-bold text-white text-[21px]">Discord</h1>
                <button className="text-neutral-400 border-[1px] rounded-full border-neutral-700 px-4 py-1.5 text-[12px]">
                  Communication
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
                <h1 className="font-bold text-white text-[21px]">Duolingo</h1>
                <button className="text-neutral-400 border-[1px] rounded-full border-neutral-700 px-4 py-1.5 text-[12px]">
                  Education
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
                <h1 className="font-bold text-white text-[21px]">Slack</h1>
                <button className="text-neutral-400 border-[1px] rounded-full border-neutral-700 px-4 py-1.5 text-[12px]">
                  Communication
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
                <h1 className="font-bold text-white text-[21px]">MongoDB</h1>
                <button className="text-neutral-400 border-[1px] rounded-full border-neutral-700 px-4 py-1.5 text-[12px]">
                  Database
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
                <h1 className="font-bold text-white text-[21px]">Postman</h1>
                <button className="text-neutral-400 border-[1px] rounded-full border-neutral-700 px-4 py-1.5 text-[12px]">
                  API Fetch
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
                <h1 className="font-bold text-white text-[21px]">Spotify</h1>
                <button className="text-neutral-400 border-[1px] rounded-full border-neutral-700 px-4 py-1.5 text-[12px]">
                  Music
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Office Tools List */}
        <div className="mx-auto w-[68%] mt-10">
          <p className="inter-font-style-1 mb-1 mt-3 text-neutral-500 items-center flex gap-[15px] text-[48px]">
            Office Tools
          </p>
          <div className="mt-4 grid grid-cols-3 gap-3">
            <div className="w-full snap-center h-[40vh] max-h-[480px] rounded-3xl justify-center overflow-hidden text-center pt-11 bg-neutral-900">
              <img
                src={Excel}
                alt=""
                className="mx-auto w-full px-[28%] mb-14 mt-3"
              />
              <div className="flex items-center justify-between mt-4 px-[7%]">
                <h1 className="font-bold text-white text-[21px]">Excel</h1>
                <button className="text-neutral-400 border-[1px] rounded-full border-neutral-700 px-4 py-1.5 text-[12px]">
                  Data Entry
                </button>
              </div>
            </div>
            <div className="w-full snap-center h-[40vh] max-h-[480px] rounded-3xl justify-center overflow-hidden text-center pt-11 bg-neutral-900">
              <img
                src={Word}
                alt=""
                className="mx-auto w-full px-[28%] mb-14 mt-3"
              />
              <div className="flex items-center justify-between mt-4 px-[7%]">
                <h1 className="font-bold text-white text-[21px]">Word</h1>
                <button className="text-neutral-400 border-[1px] rounded-full border-neutral-700 px-4 py-1.5 text-[12px]">
                  Documentation
                </button>
              </div>
            </div>
            <div className="w-full snap-center h-[40vh] max-h-[480px] rounded-3xl justify-center overflow-hidden text-center pt-11 bg-neutral-900">
              <img
                src={PowerPoint}
                alt=""
                className="mx-auto w-full px-[28%] mb-14 mt-3"
              />
              <div className="flex items-center justify-between mt-4 px-[7%]">
                <h1 className="font-bold text-white text-[21px]">PowerPoint</h1>
                <button className="text-neutral-400 border-[1px] rounded-full border-neutral-700 px-4 py-1.5 text-[12px]">
                  Presentation
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Editing Tools List */}
        <div className="mx-auto w-[68%] mt-10">
          <p className="inter-font-style-1 mb-1 mt-3 text-neutral-500 items-center flex gap-[15px] text-[48px]">
            Editing Tools
          </p>
          <div className="mt-4 grid grid-cols-3 gap-3">
            <div className="w-full snap-center h-[40vh] max-h-[480px] rounded-3xl justify-center overflow-hidden text-center pt-11 bg-neutral-900">
              <img
                src={FCP}
                alt=""
                className="mx-auto w-full px-[28%] mb-14 mt-3"
              />
              <div className="flex items-center justify-between mt-4 px-[7%]">
                <h1 className="font-bold text-white text-[21px]">
                  Final Cut Pro
                </h1>
                <button className="text-neutral-400 border-[1px] rounded-full border-neutral-700 px-4 py-1.5 text-[12px]">
                  Video Editing
                </button>
              </div>
            </div>
            <div className="w-full snap-center h-[40vh] max-h-[480px] rounded-3xl justify-center overflow-hidden text-center pt-11 bg-neutral-900">
              <img
                src={AM}
                alt=""
                className="mx-auto w-full px-[28%] mb-14 mt-3"
              />
              <div className="flex items-center justify-between mt-4 px-[7%]">
                <h1 className="font-bold text-white text-[21px]">
                  Alight Motion
                </h1>
                <button className="text-neutral-400 border-[1px] rounded-full border-neutral-700 px-4 py-1.5 text-[12px]">
                  Mobile Editing
                </button>
              </div>
            </div>
            <div className="w-full snap-center h-[40vh] max-h-[480px] rounded-3xl justify-center overflow-hidden text-center pt-11 bg-neutral-900">
              <img
                src={AE}
                alt=""
                className="mx-auto w-full px-[28%] mb-14 mt-3"
              />
              <div className="flex items-center justify-between mt-4 px-[7%]">
                <h1 className="font-bold text-white text-[21px]">
                  After Effects
                </h1>
                <button className="text-neutral-400 border-[1px] rounded-full border-neutral-700 px-4 py-1.5 text-[12px]">
                  Video & 3D Render
                </button>
              </div>
            </div>
            <div className="w-full snap-center h-[40vh] max-h-[480px] rounded-3xl justify-center overflow-hidden text-center pt-11 bg-neutral-900">
              <img
                src={PP}
                alt=""
                className="mx-auto w-full px-[28%] mb-14 mt-3"
              />
              <div className="flex items-center justify-between mt-4 px-[7%]">
                <h1 className="font-bold text-white text-[21px]">
                  Premier Pro
                </h1>
                <button className="text-neutral-400 border-[1px] rounded-full border-neutral-700 px-4 py-1.5 text-[12px]">
                  Video Editing
                </button>
              </div>
            </div>
            <div className="w-full snap-center h-[40vh] max-h-[480px] rounded-3xl justify-center overflow-hidden text-center pt-11 bg-neutral-900">
              <img
                src={Blender}
                alt=""
                className="mx-auto w-full px-[28%] mb-14 mt-3"
              />
              <div className="flex items-center justify-between mt-4 px-[7%]">
                <h1 className="font-bold text-white text-[21px]">Blender</h1>
                <button className="text-neutral-400 border-[1px] rounded-full border-neutral-700 px-4 py-1.5 text-[12px]">
                  3D and VFX
                </button>
              </div>
            </div>
            <div className="w-full snap-center h-[40vh] max-h-[480px] rounded-3xl justify-center overflow-hidden text-center pt-11 bg-neutral-900">
              <img
                src={PS}
                alt=""
                className="mx-auto w-full px-[28%] mb-14 mt-3"
              />
              <div className="flex items-center justify-between mt-4 px-[7%]">
                <h1 className="font-bold text-white text-[21px]">Photo Shop</h1>
                <button className="text-neutral-400 border-[1px] rounded-full border-neutral-700 px-4 py-1.5 text-[12px]">
                  Photo Editing
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Game List */}
        <div className="mx-auto w-[68%] mt-10">
          <p className="inter-font-style-1 mb-1 mt-3 text-neutral-500 items-center flex gap-[15px] text-[48px]">
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
                <h1 className="font-bold text-white text-[21px]">BGMI</h1>
                <button className="text-neutral-400 border-[1px] rounded-full border-neutral-700 px-4 py-1.5 text-[12px]">
                  Battleground Game
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
                <h1 className="font-bold text-white text-[21px]">
                  Clash of Clans
                </h1>
                <button className="text-neutral-400 border-[1px] rounded-full border-neutral-700 px-4 py-1.5 text-[12px]">
                  MMORTS Game
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Hardware List */}
        <div className="mx-auto w-[68%] mt-10">
          <p className="inter-font-style-1 mb-1 mt-3 text-neutral-500 items-center flex gap-[15px] text-[48px]">
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
                <h1 className="font-bold text-white text-[21px]">Laptop</h1>
                <button className="text-neutral-400 border-[1px] rounded-full border-neutral-700 px-4 py-1.5 text-[12px]">
                  Macbook Air M1
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
                <h1 className="font-bold text-white text-[21px]">Mobile</h1>
                <button className="text-neutral-400 border-[1px] rounded-full border-neutral-700 px-4 py-1.5 text-[12px]">
                  Pixel 8
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
                <h1 className="font-bold text-white text-[21px]">EarPods</h1>
                <button className="text-neutral-400 border-[1px] rounded-full border-neutral-700 px-4 py-1.5 text-[12px]">
                  Apple EarPods
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

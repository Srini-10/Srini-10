import React from "react";
import Geist from "../../assets/About/Geist.png";
import Vector from "../../assets/Vector.svg";
import Signature from "../../assets/About/Signature.png";
import { Link } from "react-router-dom";

function About() {
  return (
    <>
      <div className="mb-[80px] relative scroll-smooth focus:scroll-auto">
        <div className="mx-auto w-[68%] mt-[15vh]">
          <p className="inter-font-style-1 text-white items-center flex gap-[15px] text-[80px]">
            A little bit about me
          </p>
          <p className="text-neutral-600 w-[739px] font-medium text-[21px] leading-9 -mt-[10px]">
            Who I am and what I do
          </p>
        </div>
        <div className="h-[0.5px] w-full mt-14 bg-neutral-600"></div>
        <div className="text-neutral-400 flex gap-10 font-normal text-[17px] w-[68%] mt-[50px] mx-auto">
          <div>
            <h1 className="text-neutral-600 font-semibold mb-1 mt-6 text-[16px]">
              WHO AM I
            </h1>
            <p>
              I'm <b className="text-white font-medium">Srinivasan</b>{" "}
              (pronounced “Srini”), a multi-disciplinary MERN Stack Developer
              and Chief Technical Officer at TuneUp Technologies, based in Tamil
              Nadu, India 🇮🇳.
            </p>
            <h1 className="text-neutral-600 font-semibold mb-1 mt-6 text-[16px]">
              WHAT I DO
            </h1>
            <p>
              With two years of invaluable experience at TuneUp Technologies, a
              tech company based in Tamil Nadu, India, I have honed my skills in
              HTML, CSS, JavaScript, React.js, Node.js, Tailwind CSS, and
              TypeScript, allowing me to craft seamless and interactive user
              experiences. During my time at TuneUp Technologies, I had the
              privilege of collaborating on projects for esteemed clients such
              as the Ministry of Health, Ministry of Education, and Ministry of
              Justice. It was an incredibly rewarding experience to develop
              applications that directly impact the lives of Indian citizens.
            </p>
            <h1 className="text-neutral-600 font-semibold mb-1 mt-6 text-[16px]">
              WHAT I DID
            </h1>
            <p>
              Before delving into the realm of front end engineering, I spent
              five years as a graphic designer. This background has equipped me
              with a keen eye for aesthetics and a deep understanding of
              user-centered design principles. It enables me to seamlessly blend
              functionality and visual appeal in every project I undertake.
            </p>
            <p className="About-Page-Connections my-14">
              Feel free to reach out via <b>E-mail</b>, or follow me on{" "}
              <b>Twitter</b>. Want to see where I’ve worked? Check out my{" "}
              <b>Resume</b>, or Connect with me on <b>LinkedIn</b>.
            </p>
            <p>Let's build something grate,</p>
            <img
              src={Signature}
              alt=""
              className="mt-1 w-[450px] -rotate-[8deg]"
            />
          </div>
          <div>
            <div className="min-w-[300px] h-[390px] rounded-xl border-[1.5px] mt-[25px] justify-center items-center flex p-9 border-neutral-800">
              <img src={Geist} alt="" />
            </div>
            <div className="flex gap-4 mt-20 justify-center items-center">
              <Link to="/Contact">
                <button className="shadow-inner flex gap-2.5 items-center text-[16px] bg-neutral-900 shadow-neutral-700 rounded-lg font-medium text-white py-4 px-7">
                  <img src={Vector} alt="" className="w-[20px]" /> Get in touch
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;

import React, { useState, useEffect } from "react";
import Geist from "../../assets/About/Geist.png";
import Vector from "../../assets/Vector.svg";
import Signature from "../../assets/About/Signature.png";
import SignatureWhite from "../../assets/About/SignatureWhite.png";
import { Link } from "react-router-dom";
import { Worker, Viewer } from "@react-pdf-viewer/core";
import Logo from "../../assets/Face2.png";
import ResumePDF from "../../assets/Resume.pdf"; // Make sure you have the correct path for your PDF

function About() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const handleClickOutside = (e) => {
    if (e.target.className.includes("modal-overlay")) {
      closeModal();
    }
  };

  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isModalOpen]);

  return (
    <>
      <div className="mb-[80px] relative scroll-smooth focus:scroll-auto">
        <img className="Responsive-Image-Logo hidden" src={Logo} alt="Logo" />
        <div className="Responsive-About mx-auto w-[68%] mt-[15vh]">
          <p className="Responsive-About-Title inter-font-style-1 text-white items-center flex gap-[15px] text-[80px]">
            A little bit about me
          </p>
          <p className="Responsive-About-SubTitle text-neutral-600 w-[739px] font-medium text-[21px] leading-9 -mt-[10px]">
            Who I am and what I do
          </p>
        </div>
        <div className="h-[0.5px] w-full mt-14 bg-neutral-600"></div>
        <div className="Responsive-About-Contents text-neutral-400 flex gap-10 font-normal text-[17px] w-[68%] mt-[50px] mx-auto">
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
              Feel free to reach out via{" "}
              <b>
                <Link
                  target="_blank"
                  to="https://mail.google.com/mail/u/0/#inbox?compose=CllgCJqVNNXjRVQcSgJwJZbBWwchqwHsxQGjgLGPbtxrRcNXZjXgXqJsHLHdcBvdSlplzJGlWKg"
                >
                  E-mail
                </Link>
              </b>
              , or follow me on{" "}
              <b>
                <Link target="_blank" to="https://x.com/SrinivasanP1018">
                  Twitter
                </Link>
              </b>
              . Want to see where I’ve worked? Check out my{" "}
              <b onClick={openModal} className="cursor-pointer">
                Resume
              </b>
              , or Connect with me on{" "}
              <b>
                <Link
                  target="_blank"
                  to="https://www.linkedin.com/in/srinivasan-p-32583127a/"
                >
                  LinkedIn
                </Link>
              </b>
              .
            </p>
            <p>Let's build something great,</p>
            <img
              src={Signature}
              alt="Signature"
              className="Responsive-About-Sign mt-1 w-[450px] -rotate-[8deg]"
            />
            <img
              src={SignatureWhite}
              alt="Signature White"
              className="Responsive-About-SignWhite hidden mt-1 w-[450px] -rotate-[8deg]"
            />
          </div>
          <div>
            <div className="Responsive-About-Img min-w-[300px] h-[390px] rounded-xl border-[1.5px] mt-[25px] justify-center items-center flex p-9 border-neutral-800">
              <img src={Geist} alt="Geist" />
            </div>
            <div className="Responsive-About-ButtonMain flex gap-4 mt-20 justify-center items-center">
              <Link to="/Contact">
                <button className="Responsive-About-Button shadow-inner flex gap-2.5 items-center text-[16px] bg-neutral-900 shadow-neutral-700 rounded-lg font-medium text-white py-4 px-7">
                  <img src={Vector} alt="Vector" className="w-[20px]" /> Get in
                  touch
                </button>
              </Link>
            </div>
          </div>
        </div>{" "}
        {isModalOpen && (
          <div
            className="Responsive-Modal scroll-container fixed inset-0 bg-black bg-opacity-50 overflow-hidden flex items-center justify-center z-50 modal-overlay"
            onClick={handleClickOutside}
          >
            <div className="Responsive-Modal-Contents bg-white px-auto rounded-lg shadow-lg relative max-w-[520px] justify-center overflow-hidden min-w-[520px] max-h-[84vh] overflow-y-auto">
              <button
                onClick={closeModal}
                className="Responsive-Modal-Close fixed top-3 text-[20px] right-4 text-gray-500 hover:text-gray-600"
              >
                &times;
              </button>
              <div className="overflow-hidden">
                <Worker
                  workerUrl={`https://unpkg.com/pdfjs-dist@2.16.105/build/pdf.worker.min.js`}
                >
                  <div className="Responsive-Modal-Content scale-[1.30] mt-[85px] ml-3 mb-[85px] mx-auto">
                    <Viewer fileUrl={ResumePDF} />
                  </div>
                </Worker>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default About;

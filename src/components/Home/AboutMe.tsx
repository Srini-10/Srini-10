import React, { useState, useEffect } from "react";
import Circle_Portrait from "../../assets/Circle_Portrait.png";
import "../Style.css";
import { Link } from "react-router-dom";
import { Worker, Viewer } from "@react-pdf-viewer/core";
import "@react-pdf-viewer/core/lib/styles/index.css";
import ResumePDF from "../../assets/Resume.pdf";

function AboutMe() {
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
      <div className="min-h-[94.9vh] snap-start max-h-[100vh]">
        <div className="mx-auto w-[68%] mt-[15vh]">
          <img
            src={Circle_Portrait}
            alt=""
            className="absolute right-[100px] mt-[-50px] opacity-75 w-[540px] h-[540px] -z-50"
          />
          <p className="inter-font-style-1 text-white items-center flex gap-[15px] text-[80px]">
            <span className="text-neutral-400">I'm</span> Srinivasan
          </p>
          <p className="inter-font-style-2 w-[739px] font-medium text-[21px] leading-9 mt-6">
            A MERN stack developer helping startups turn their visions into a
            digital reality. I specialize in designing and building modern
            mobile and web-based applications using MongoDB, Express, React, and
            Node.js.
          </p>
          <div className="flex gap-4 mt-10">
            <button
              onClick={openModal}
              className="shadow-inner text-[18px] bg-neutral-900 shadow-neutral-700 rounded-lg font-medium text-white py-4 px-7"
            >
              See my resume
            </button>
            <Link to="/Contact">
              <button className="shadow-inner text-[18px] bg-neutral-900 rounded-lg font-medium text-neutral-500 py-4 px-7">
                Get in touch
              </button>
            </Link>
          </div>
        </div>
      </div>

      {isModalOpen && (
        <div
          className="scroll-container fixed inset-0 bg-black bg-opacity-50 overflow-hidden flex items-center justify-center z-50 modal-overlay"
          onClick={handleClickOutside}
        >
          <div className="bg-white px-auto rounded-lg shadow-lg relative max-w-[550px] justify-center overflow-hidden min-w-[550px] max-h-[84vh] overflow-y-auto">
            <button
              onClick={closeModal}
              className="fixed top-3 text-[20px] right-4 text-gray-500 hover:text-gray-600"
            >
              &times;
            </button>
            <div className="overflow-hidden">
              <Worker
                workerUrl={`https://unpkg.com/pdfjs-dist@2.16.105/build/pdf.worker.min.js`}
              >
                <div className="scale-[1.15] mt-[72px] mb-[45px] mx-auto">
                  <Viewer fileUrl={ResumePDF} />
                </div>
              </Worker>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default AboutMe;

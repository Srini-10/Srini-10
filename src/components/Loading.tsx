import React from "react";
import "./Style.css";

const Loading = () => {
  return (
    <>
      <div className="loading-container">
        <div className="outer-circle">
          <div className="inner-circle flex align-middle items-center justify-center">
            <p className="m-auto justify-center text-center align-middle mt-[38px] text-[10px] ml-[13px] flex gap-2">
              Loading
            </p>
            <div className="col-3 ml-[45px] absolute">
              <div className="snippet" data-title="dot-pulse">
                <div className="stage">
                  <div className="dot-pulse"></div>
                </div>
              </div>
            </div>
          </div>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </>
  );
};

export default Loading;

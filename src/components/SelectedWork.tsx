import React from "react";

function SelectedWork() {
  return (
    <>
      <div className="text-white w-[68%] mx-auto min-h-[100vh] pt-10 mb-10">
        <p className="inter-font-style-1 text-white items-center flex gap-[15px] text-[50px]">
          Selected Work
        </p>
        <div className="mt-4">
          <div className="w-full h-[65vh] bg-neutral-900 rounded-[40px] border-[1px] border-neutral-700 mb-7"></div>
          <div className="w-full h-[65vh] bg-neutral-900 rounded-[40px] border-[1px] border-neutral-700 mb-7"></div>
          <div className="w-full h-[65vh] bg-neutral-900 rounded-[40px] border-[1px] border-neutral-700 mb-7"></div>
          <div className="w-full h-[65vh] bg-neutral-900 rounded-[40px] border-[1px] border-neutral-700 mb-7"></div>
        </div>
      </div>
    </>
  );
}

export default SelectedWork;

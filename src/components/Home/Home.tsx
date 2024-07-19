import React from "react";
import AboutMe from "./AboutMe.tsx";
import GetToKnowMe from "./GetToKnowMe.tsx";
import LetsWorkTogether from "./LetsWorkTogether.tsx";
import SelectedWork from "./SelectedWork.tsx";

function Home() {
  return (
    <>
      <div className="scroll-smooth focus:scroll-auto">
        <AboutMe />
        <SelectedWork />
        <GetToKnowMe />
        <LetsWorkTogether />
      </div>
    </>
  );
}

export default Home;

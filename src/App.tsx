import "./App.css";
import React from "react";
import AboutMe from "./components/AboutMe.tsx";
import GetToKnowMe from "./components/GetToKnowMe.tsx";
import LetsWorkTogether from "./components/LetsWorkTogether.tsx";
import Footer from "./components/Footer.tsx";
import SelectedWork from "./components/SelectedWork.tsx";
import Navbar from "./components/Navbar.tsx";

function App() {
  return (
    <>
      <Navbar />
      <AboutMe />
      <SelectedWork />
      <GetToKnowMe />
      <LetsWorkTogether />
      <Footer />
    </>
  );
}

export default App;

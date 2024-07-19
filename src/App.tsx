import "./App.css";
import React from "react";
import About from "./components/About/About.tsx";
import Home from "./components/Home/Home.tsx";
import Work from "./components/Work/Work.tsx";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar.tsx";
import Footer from "./components/Footer.tsx";
import TechStack from "./components/TechStack/TechStack.tsx";
import Contact from "./components/Contact/Contact.tsx";

function App() {
  return (
    <>
      <BrowserRouter>
        <div className="scroll-smooth focus:scroll-auto">
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/About" element={<About />} />
            <Route path="/Work" element={<Work />} />
            <Route path="/TechStack" element={<TechStack />} />
            <Route path="/Contact" element={<Contact />} />
          </Routes>
        </div>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;

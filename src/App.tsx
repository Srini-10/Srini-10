import React, { useState, useEffect } from "react";
import "./App.css";
import About from "./components/About/About.tsx";
import Home from "./components/Home/Home.tsx";
import Work from "./components/Work/Work.tsx";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar.tsx";
import Footer from "./components/Footer.tsx";
import TechStack from "./components/TechStack/TechStack.tsx";
import Contact from "./components/Contact/Contact.tsx";
import Loading from "./components/Loading.tsx"; // Import the Loading component

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate a loading process (e.g., fetching data)
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000); // Adjust the duration as needed

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <Loading />;
  }

  return (
    <>
      <div className="Tab-View hidden w-full h-screen py-[20%] justify-center items-center bg-black">
        <div className="text-center min-h-[20%] max-h-[20%]">
          <h1 className="text-[150px] font-bold text-white">Oops!</h1>
          <p className="text-[25px] text-neutral-600">
            Your device is not compatible with this website.
          </p>
        </div>
      </div>

      <div className="Normal-View">
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
      </div>
    </>
  );
}

export default App;

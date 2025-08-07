import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import herobg2 from "./assets/herobg2.jpg";

import About from "./components/About";
import Experience from "./components/Experience";
import Tech from "./components/Tech";
import Works from "./components/Works";
import Contact from "./components/Contact";
import { StarsCanvas } from "./components/canvas";

const App = () => {
  return (
    <div className="relative z-0">
      <div id="home">
        <Navbar />
      </div>

      <div
        style={{ backgroundImage: `url(${herobg2})` }}
        className="bg-cover bg-no-repeat bg-center"
      >
        <Hero />
        <div id="about">
          <About />
        </div>

        <Experience />
        <Tech />
        <div id="work">
          <Works />
        </div>

        <div className="relative z-0">
          <div id="contact">
            <Contact />
          </div>

          <StarsCanvas />
        </div>
      </div>
    </div>
  );
};

export default App;

import React from "react";
import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";

const Hero = () => {
  return (
    <div className="relative w-full h-screen mx-auto">
      <div
        className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5`}
      >
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#915eff]"></div>
          <div className="w-1 sm:h-80 h-40 violet-gradient"></div>
        </div>

        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi, I'm <span className="text-[#915eff]">Roshan</span>
          </h1>
          <p className={`${styles.heroSubText} mt-3 text-white-100`}>
            I build dynamic and scalable web <br className="sm:block hidden" />
            applications using the MERN stack,
            <br className="sm:block hidden" />
            combining React, Node.js, Express,{" "}
            <br className="sm:block hidden" />
            and MongoDB to create seamless <br className="sm:block hidden" />
            user experiences.
          </p>
        </div>
      </div>
      <ComputersCanvas />
    </div>
  );
};

export default Hero;

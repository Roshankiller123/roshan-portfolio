import React from "react";

import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";

const Tech = () => {
  return (
    <div className="flex flex-row  flex-wrap justify-center gap-10">
      {technologies.map((technology) => (
        <div
          className="w-[200px] h-[150px] max-sm:w-[100px] max-sm:h-[120px]"
          key={technology.name}
        >
          <BallCanvas icon={technology.icon} />
        </div>
      ))}
    </div>
  );
};

export default SectionWrapper(Tech);

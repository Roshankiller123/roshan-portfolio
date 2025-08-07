import React from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const ServiceCard = ({ index, title, icon }) => {
  return (
    <Tilt className="sm:w-[250px] w-[250px]">
      <motion.div
        className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
        variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
      >
        <div
          options={{
            max: 45,
            scale: 1,
            speed: 450,
          }}
          className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
        >
          {" "}
          <img
            src={icon}
            alt="web-development"
            className="w-16 h-16 object-contain"
          />
          <h3 className="text-center font-bold text-[20px] text-white">
            {title}
          </h3>
        </div>
      </motion.div>
    </Tilt>
  );
};

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText}`}>Introduction</p>
        <p className={`${styles.sectionHeadText}`}>Overview.</p>
      </motion.div>

      <motion.div
        className="leading-[30px] mt-3 text-[17px] max-w-3xl"
        variants={fadeIn("", "", 0.1, 1)}
      >
        I'm Roshanlal Parihar, a passionate MERN Stack Developer eager to build
        dynamic and scalable web applications. As a fresher, I specialize in
        developing full-stack solutions using React.js, Node.js, Express.js, and
        MongoDB. I love turning ideas into reality through clean and efficient
        code, ensuring seamless user experiences. Constantly learning and
        evolving, I aim to contribute innovative solutions to the tech industry.
      </motion.div>

      <div className="max-sm:mt-8 mt-20 flex flex-wrap gap-10">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About);

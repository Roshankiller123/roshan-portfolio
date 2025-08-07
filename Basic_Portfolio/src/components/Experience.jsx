import React from "react";
import { SectionWrapper } from "../hoc";
import { styles } from "../styles";
import { motion } from "framer-motion";
import { textVariant } from "../utils/motion";

import { experiences } from "../constants";

import "react-vertical-timeline-component/style.min.css";
const Experience = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} `}>What I have done so far</p>
        <h2 className={`${styles.sectionHeadText}`}>Work Experience.</h2>
      </motion.div>

      <motion.div className="my-6">
        {experiences.map((exp, index) => (
          <div key={index} className="relative pl-8 sm:pl-32 py-6 group mt-9 ">
            <div className="font-caveat font-bold text-2xl text-indigo-500 mb-1 sm:mb-0">
              {exp.title}
            </div>

            <div className="flex flex-col sm:flex-row items-start mb-1 group-last:before:hidden before:absolute before:left-2 sm:before:left-0 before:h-full before:px-px before:bg-slate-300 sm:before:ml-[6.5rem] before:self-start before:-translate-x-1/2 before:translate-y-3 after:absolute after:left-2 sm:after:left-0 after:w-2 after:h-2 after:bg-indigo-600 after:border-4 after:box-content after:border-slate-50 after:rounded-full sm:after:ml-[6.5rem] after:-translate-x-1/2 after:translate-y-1.5">
              <time className="sm:absolute max-sm:mt-1 left-[-70px] translate-y-0.5 inline-flex items-center justify-center text-xs font-semibold uppercase w-30 p-2 h-10 mb-3 sm:mb-0 text-emerald-600 bg-emerald-100 rounded-full">
                {exp.date}
              </time>
              <div className="text-sm mt-1 font-medium text-white-900 max-sm:ml-1 ">
                {exp.company_name}
              </div>
            </div>
            <div className="text-slate-300">
              <ul className="mt-5 ml-5 space-y-3">
                {exp.points.map((points, index) => (
                  <li key={index} className="tracking-wider">
                    {points}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </motion.div>
    </>
  );
};

export default SectionWrapper(Experience);

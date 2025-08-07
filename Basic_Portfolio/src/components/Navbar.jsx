import React, { useState } from "react";
import logo from "../assets/logo.webp";
import menu from "../assets/menu.svg";
import close from "../assets/close.svg";
import { styles } from "../styles";
import { Link } from "react-scroll";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <nav
      className={`${styles.paddingX} w-full bg-slate-950/70 flex items-center py-3 fixed top-0 z-50`}
    >
      <div className="flex flex-1 items-center cursor-pointer">
        <Link
          className="flex items-center"
          to="home"
          smooth={true}
          duration={500}
        >
          {" "}
          <img
            src={logo}
            alt="logo"
            className="w-[4rem] h-[3.75rem] mr-3 rounded-[50%] max-sm:w-[3rem] max-sm:h-11"
          />
          <p className="font-bold text-white max-lg:text-[15px] max-sm:text-[12px]">
            Roshanlal Parihar | <span>MERN Stack Devloper</span>
          </p>
        </Link>
      </div>
      <div className=" flex flex-1 w-full justify-end items-center max-sm:hidden">
        <ul className="flex gap-6 text-gray-400">
          <li className="cursor-pointer hover:text-white duration-300 ease-in-out">
            <Link to="about" smooth={true} duration={200}>
              About
            </Link>
          </li>
          <li className="cursor-pointer hover:text-white duration-300 ease-in-out">
            <Link to="work" smooth={true} duration={200}>
              Work
            </Link>
          </li>
          <li className="cursor-pointer hover:text-white duration-300 ease-in-out">
            <Link to="contact" smooth={true} duration={200}>
              Contact
            </Link>
          </li>
        </ul>
      </div>

      <div className="sm:hidden flex items-center relative">
        <div className="">
          <img
            src={!toggle ? menu : close}
            className="cursor-pointer"
            onClick={() => setToggle(!toggle)}
          />
        </div>

        {toggle && (
          <div className="black-gradient p-6 max-w-[160px] rounded-lg absolute top-9 right-7">
            <ul className="flex flex-col gap-6 text-gray-400">
              <li className="cursor-pointer hover:text-white duration-300 ease-in-out">
                About
              </li>
              <li className="cursor-pointer hover:text-white duration-300 ease-in-out">
                Work
              </li>
              <li className="cursor-pointer hover:text-white duration-300 ease-in-out">
                contact
              </li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;

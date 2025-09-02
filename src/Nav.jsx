import React from "react";
import { IoReorderThree } from "react-icons/io5";

import { Link } from "react-scroll";

import { useState } from "react";
import { RxCross2 } from "react-icons/rx";
function Nav() {
  const [isOpen, setIsopen] = useState(null);

  return (
    <>
      <nav className="w-[100%] h-[60px] bg-[#2a2c39] flex justify-between items-center px-25 max-[360px]:px-[20px] fixed top-0 z-100">
        <img
          className="w-[120px] max-[360px]:w-[80px] h-auto"
          src="Images/logo.png"
          alt=""
        />

        <div
          id="navBar"
          className="gap-6 flex text-white text-[18px] max-[360px]:hidden"
        >
          <a className="hover:font-semibold " href="">
            Home
          </a>

          <Link
            to="service"
            smooth={true}
            duration={500}
            className="cursor-pointer hover:font-semibold"
          >
            Service
          </Link>

          <Link
            to="skills"
            className="hover:font-semibold cursor-pointer"
            smooth={true}
            duration={500}
          >
            Skills
          </Link>
          <Link
            to="projects"
            className="hover:font-semibold cursor-pointer"
            smooth={true}
            duration={500}
          >
            Projects
          </Link>
          <Link
            to="contact"
            smooth={true}
            duration={500}
            className="hover:font-semibold cursor-pointer"
          >
            Contact
          </Link>
        </div>

        <button
          className=" hidden max-[360px]:block"
          onClick={() => setIsopen(!isOpen)}
        >
          <IoReorderThree className="text-[30px] text-white" />
        </button>
      </nav>

      {/* NAVBAR FOR MOBILE SCREEN  */}

      {/* {isOpen && ( */}
      <div
        className={`   ${isOpen ? "translate-x-0" : "translate-x-full"}
      
          
        transform transition-transform duration-700 ease-in-out 
           fixed w-[100%] h-[100vh] bg-[#2a2c39] mt-[60px] right-0 z-[70]   
         max-[360px]:block hidden`}
      >
        <div className="gap-6 flex flex-col text-white text-[18px] p-[20px] ">
          <div
            onClick={() => setIsopen(!isOpen)}
            className=" flex items-center justify-center border-2 border-white text-white bg-transparent cursor-pointer hover:text-black duration-700 ease-in p-3 w-[50px] h-[50px] rounded-full "
          >
            <RxCross2 size={40} />
          </div>

          <a className="hover:font-semibold " href="">
            Home
          </a>

          <Link
            to="service"
            smooth={true}
            duration={500}
            onClick={() => setIsopen(!isOpen)}
            className="hover:font-semibold"
          >
            Service
          </Link>

          <Link
            to="skills"
            smooth={true}
            duration={500}
            onClick={() => setIsopen(!isOpen)}
            className="hover:font-semibold"
            href=""
          >
            Skills
          </Link>

          <Link
            to="projects"
            smooth={true}
            duration={500}
            onClick={() => setIsopen(!isOpen)}
            className="hover:font-semibold"
            href=""
          >
            Projects
          </Link>
          <Link
            to="contact"
            smooth={true}
            duration={500}
            onClick={() => setIsopen(!isOpen)}
            className="hover:font-semibold"
            href=""
          >
            Contact
          </Link>
        </div>
      </div>
      {/* )} */}
      {/* <div className="w-[200px] h-[200px] rounded-[50%] bg-amber-800 border-2 border-amber-500 position:absolute top-0"></div> */}
    </>
  );
}
export default Nav;

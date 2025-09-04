// import React from "react";
// import { IoReorderThree } from "react-icons/io5";

// import { Link } from "react-scroll";

// import { useState } from "react";
// import { RxCross2 } from "react-icons/rx";
// function Nav() {
//   const [isOpen, setIsopen] = useState(null);

//   return (
//     <>
//       <nav className="w-full h-[60px] bg-[#2a2c39] flex justify-between items-center px-25 max-[360px]:px-[20px] fixed top-0 z-100">
//         <img
//           className="w-[120px] max-[360px]:w-[80px] h-auto"
//           src="Images/logo.png"
//           alt=""
//         />

//         <div
//           id="navBar"
//           className="gap-6 flex text-white text-[18px] max-[360px]:hidden"
//         >
//           <a className="hover:font-semibold " href="">
//             Home
//           </a>

//           <Link
//             to="service"
//             smooth={true}
//             duration={500}
//             className="cursor-pointer hover:font-semibold"
//           >
//             Service
//           </Link>

//           <Link
//             to="skills"
//             className="hover:font-semibold cursor-pointer"
//             smooth={true}
//             duration={500}
//           >
//             Skills
//           </Link>
//           <Link
//             to="projects"
//             className="hover:font-semibold cursor-pointer"
//             smooth={true}
//             duration={500}
//           >
//             Projects
//           </Link>
//           <Link
//             to="contact"
//             smooth={true}
//             duration={500}
//             className="hover:font-semibold cursor-pointer"
//           >
//             Contact
//           </Link>
//         </div>

//         <button
//           className=" hidden max-[360px]:block"
//           onClick={() => setIsopen(!isOpen)}
//         >
//           <IoReorderThree className="text-[30px] text-white" />
//         </button>
//       </nav>

//       {/* NAVBAR FOR MOBILE SCREEN  */}

//       {/* {isOpen && ( */}
//       <div
//         className={`   ${isOpen ? "translate-x-0" : "translate-x-full"}
      
          
//         transform transition-transform duration-700 ease-in-out 
//            fixed w-[100%] h-[100vh] bg-[#2a2c39] mt-[60px] right-0 z-[70]   
//          max-[360px]:block hidden`}
//       >
//         <div className="gap-6 flex flex-col text-white text-[18px] p-[20px] ">
//           <div
//             onClick={() => setIsopen(!isOpen)}
//             className=" flex items-center justify-center border-2 border-white text-white bg-transparent cursor-pointer hover:text-black duration-700 ease-in p-3 w-[50px] h-[50px] rounded-full "
//           >
//             <RxCross2 size={40} />
//           </div>

//           <a className="hover:font-semibold " href="">
//             Home
//           </a>

//           <Link
//             to="service"
//             smooth={true}
//             duration={500}
//             onClick={() => setIsopen(!isOpen)}
//             className="hover:font-semibold"
//           >
//             Service
//           </Link>

//           <Link
//             to="skills"
//             smooth={true}
//             duration={500}
//             onClick={() => setIsopen(!isOpen)}
//             className="hover:font-semibold"
//             href=""
//           >
//             Skills
//           </Link>

//           <Link
//             to="projects"
//             smooth={true}
//             duration={500}
//             onClick={() => setIsopen(!isOpen)}
//             className="hover:font-semibold"
//             href=""
//           >
//             Projects
//           </Link>
//           <Link
//             to="contact"
//             smooth={true}
//             duration={500}
//             onClick={() => setIsopen(!isOpen)}
//             className="hover:font-semibold"
//             href=""
//           >
//             Contact
//           </Link>
//         </div>
//       </div>
//       {/* )} */}
//       {/* <div className="w-[200px] h-[200px] rounded-[50%] bg-amber-800 border-2 border-amber-500 position:absolute top-0"></div> */}
//     </>
//   );
// }
// export default Nav;
import React, { useState } from "react";
import { IoReorderThree } from "react-icons/io5";
import { RxCross2 } from "react-icons/rx";
import { Link } from "react-scroll";

function Nav() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* NAVBAR DESKTOP + MOBILE */}
      {/* <nav className="w-full h-[60px] bg-[#2a2c39] flex justify-between items-center px-[200px] max-[720px]:px-[100px] max-[450px]:px-[20px] fixed top-0 z-10"> */}
      <nav className="w-full h-[60px] bg-[#2a2c39] flex justify-between items-center 
  px-8 sm:px-12 md:px-20 lg:px-32 xl:px-48 fixed top-0 z-50">
        {/* Logo */}
        <img
          className="w-[120px] sm:w-[100px] h-auto"
          src="Images/logo.png"
          alt="logo"
        />

        {/* Desktop Links */}
        <div className="hidden md:flex gap-6 text-white text-[18px]">
          <a className="hover:font-semibold cursor-pointer">Home</a>

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
            smooth={true}
            duration={500}
            className="cursor-pointer hover:font-semibold"
          >
            Skills
          </Link>

          <Link
            to="projects"
            smooth={true}
            duration={500}
            className="cursor-pointer hover:font-semibold"
          >
            Projects
          </Link>

          <Link
            to="contact"
            smooth={true}
            duration={500}
            className="cursor-pointer hover:font-semibold"
          >
            Contact
          </Link>
        </div>

        {/* Hamburger Icon (Mobile Only) */}
        <button
          className="block md:hidden"
          onClick={() => setIsOpen(!isOpen)}
        >
          <IoReorderThree className="text-[32px] text-white" />
        </button>
      </nav>

      {/* MOBILE SIDEBAR */}
      <div
        className={`${
          isOpen ? "translate-x-0" : "translate-x-full"
        } transform transition-transform duration-500 ease-in-out 
        fixed top-0 right-0 w-[80%] sm:w-[60%] h-screen bg-[#2a2c39] z-100 p-6 md:hidden`}
      >
        {/* Close button */}
        <div
          onClick={() => setIsOpen(false)}
          className="flex justify-end mb-8"
        >
          <RxCross2 className="text-white text-[35px] cursor-pointer" />
        </div>

        {/* Mobile Nav Links */}
        <div className="flex flex-col gap-6 text-white text-[20px]">
          <a
            className="hover:font-semibold cursor-pointer"
            onClick={() => setIsOpen(false)}
          >
            Home
          </a>

          <Link
            to="service"
            smooth={true}
            duration={500}
            className="hover:font-semibold cursor-pointer"
            onClick={() => setIsOpen(false)}
          >
            Service
          </Link>

          <Link
            to="skills"
            smooth={true}
            duration={500}
            className="hover:font-semibold cursor-pointer"
            onClick={() => setIsOpen(false)}
          >
            Skills
          </Link>

          <Link
            to="projects"
            smooth={true}
            duration={500}
            className="hover:font-semibold cursor-pointer"
            onClick={() => setIsOpen(false)}
          >
            Projects
          </Link>

          <Link
            to="contact"
            smooth={true}
            duration={500}
            className="hover:font-semibold cursor-pointer"
            onClick={() => setIsOpen(false)}
          >
            Contact
          </Link>
        </div>
      </div>
    </>
  );
}

export default Nav;

import React from "react";
import { TypeAnimation } from "react-type-animation";
import { FaDownload } from "react-icons/fa";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { TbBrandFiverr } from "react-icons/tb";
import { SiLeetcode } from "react-icons/si";

function Header() {
  return (
    <>
      <div className=" bg-[#252734] w-full h-auto pt-[60px] ">
        <div className="  flex justify-between items-center w-full px-[200px] max-[500px]:flex-col-reverse max-[500px]:px-[25px] max-[500px]:gap-6 max-[500px]:items-center">
          <div className=" flex flex-col justify-center items-start z-10">
            <h1 className="text-[50px] text-white font-semibold max-[500px]:text-[30px] ">
              I am MUBASHIR
            </h1>
            <TypeAnimation
              className="inline-block  text-white text-[20px]  whitespace-pre-line leading-tight max-[360px]:text-[20px] py-[7px] font-semibold"
              sequence={[
                "Tech Explorer ",
                2000,
                "Frontend Developer ",
                2000,
                "UI/UX DESIGNER ",
                2000,
              ]}
              speed={50}
              repeat={Infinity}
            />

            <p className="w-[350px] max-[500px]:w-[280px] text-white pt-[20px]">
              I craft modern, user-focused digital experiences that combine
              creativity with clean code. Always curious and driven, I thrive on
              solving challenges and turning ideas into reality.
            </p>
            <div className="py-[80px] max-[500px]:py-[30px]">
              <a
                className="flex items-center w-[140px] h-[50px] max-[360px]:w-[140px] max-[360px]:h-[40px] border-2 border-white rounded-[7px] justify-between p-2  hover:bg-[#858792] transition duration-300 cursor-pointer z-50   "
                href="./Resume.pdf"
                download="My_Resume.pdf"
              >
                <p className="text-white font-bold max-[360px]:font-medium">Get Resume</p>
                <FaDownload className="text-white" />
              </a>
            </div>
          </div>

          <div className="max-[500px]:w-[250px]  max-[500px]:px-[0px] max-[500px]:flex  max-[500px]:justify-start  ">
            <img
              className="w-[500px]  relative z-10  max-[500px]:w-[200px]"
              src="Images/my Img.png"
              alt="Portfolio Img"
            />

            <svg
              id="lines"
              className="absolute z-1 top-[-7px] right-[0px] max-[500px]:w-[700px] max-[500px]:h-[700px] max-[500px]:top-[-15px] max-[500px]:right-[0px] "
              viewBox="0 0 550 550"
            >
              <path
                d="M420,180 m-0,-90 a90,90 0 1,1 -63.64,63.64"
                fill="none"
                stroke="#3f3f46"
                strokeWidth="1"
                className="max-[500px]:hidden"
              />
              <path
                d="M420,180 m-0,-70 a70,70 0 1,1 -42.43,42.43 "
                fill="none"
                stroke="#000000"
                strokeWidth="1"
              />
              <path
                d="M420,180 m-0,-53 a53,53 0 1,1 -30.28,28.28"
                fill="none"
                stroke="#3f3f46"
                strokeWidth="1"
                className="max-[500px]:hidden"
              />
            </svg>
          </div>

          <div className="absolute top-[270px] right-[220px] bg-[#1c2c29] border-2 border-white text-white hover:bg-white cursor-pointer hover:text-black duration-700 ease-in p-3 rounded-full z-50 max-[500px]:top-[108px] max-[500px]:right-[100px] max-[500px]:w-[25px] max-[500px]:h-[25px] max-[500px]:text-[12px] max-[500px]:p-1">
            <a
              href="https://www.linkedin.com/in/qazi-mubashir-hussain-ba864a286/"
              target="_blank"
            >
              <FaLinkedinIn />
            </a>
          </div>
          <div className="absolute top-[360px] right-[108px] bg-[#1c2c29] border-2 border-white text-white hover:bg-white cursor-pointer hover:text-black duration-700 ease-in p-3 rounded-full z-50 max-[500px]:top-[150px] max-[500px]:right-[47px] max-[500px]:w-[25px] max-[500px]:h-[25px] max-[500px]:text-[12px] max-[500px]:p-1">
            <a
              href="https://www.fiverr.com/sellers/qazimubashir623/edit"
              target="_blank"
            >
              <TbBrandFiverr />
            </a>
          </div>
          <div
            className="absolute top-[468px] right-[80px] bg-[#1c2c29] border-2 border-white text-white hover:bg-white cursor-pointer hover:text-black duration-700 ease-in 
       p-3 rounded-full z-50 max-[500px]:top-[210px] max-[500px]:right-[36px] max-[500px]:w-[25px] max-[500px]:h-[25px] max-[500px]:text-[12px] max-[500px]:p-1"
          >
            <a href="https://github.com/Mubashir2134" target="_blank">
              <FaGithub />
            </a>
          </div>
          <div
            className="absolute top-[590px] right-[130px] bg-[#1c2c29] border-2 border-white  p-3 hover:bg-white cursor-pointer hover:text-black duration-700 ease-in text-white rounded-full z-50
           max-[500px]:top-[265px] max-[500px]:right-[65px] max-[500px]:w-[25px] max-[500px]:h-[25px] max-[500px]:text-[12px] max-[500px]:p-1"
          >
            {/* <a
              href="https://www.linkedin.com/in/qazi-mubashir-hussain-ba864a286/"
              target="_blank"
            > */}
            <a href="https://leetcode.com/u/QaziBashi/" target="_blank">
              <SiLeetcode />
            </a>
            {/* </a> */}
          </div>
        </div>
      </div>
    </>
  );
}
export default Header;

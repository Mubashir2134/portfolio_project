import React from "react";
import { ProjectCard } from "./ProjectCard";
const ProjectSec = () => {
  return (
    <div className="w-[100%] h-[100vh] bg-[#2a2c39]">
      <div className=" flex flex-col gap-[60px] max-[360px]:gap-[30px] py-[100px] items-center px-[200px] max-[360px]:px-[25px] max-[360px]:py-[20px]">
        <h2 className="text-[50px] font-semibold text-white max-[360px]:text-[20px]">
          My Complete Projects
        </h2>
        <div className="flex px-[200px] max-[360px]:px-[20px] gap-10 max-[360px]:flex-col items-center">
          {ProjectCard.map((cardData) => (
            <div
              key={cardData.id}
              className="relative w-[330px] h-[350px] overflow-hidden group text-center max-[360px]:w-[200px] max-[360px]:h-[150px]"
            >
              <img
                className="w-full h-full object-cover"
                src={cardData.imgUrl}
                alt="Eduford_Pic"
              />
              ;
              <div className="absolute inset-0 bg-transparent transition duration-500 group-hover:bg-[#252734]/80 flex items-center justify-center">
                <div className="flex flex-col items-center justify-center gap-3">
                  <h3 className="text-3xl font-semibold text-white opacity-0 transition duration-500 translate-y-10 group-hover:opacity-100 group-hover:translate-y-0 ">
                    {cardData.ProjectName}
                  </h3>

                  <a
                    className="w-[70px] h-[35px] radious-6 rounded-[5px] flex items-center justify-center font-semibold bg-amber-950 opacity-0 transistion duration-500 translate-y-10 group-hover:opacity-100 text-white"
                    target="_blank"
                    href="https://eduford-un.netlify.app"
                  >
                    Visit
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectSec;

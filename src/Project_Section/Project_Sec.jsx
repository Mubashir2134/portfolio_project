// import React from "react";
// import { ProjectCard } from "./ProjectCard";
// const ProjectSec = () => {
//   return (
//     <div className="w-[100%] h-[100vh] bg-[#2a2c39]">
//       <div className=" flex flex-col gap-[60px] max-[360px]:gap-[30px] py-[100px] items-center px-[200px] max-[360px]:px-[25px] max-[360px]:py-[20px]">
//         <h2 className="text-[50px] font-semibold text-white max-[360px]:text-[20px]">
//           My Complete Projects
//         </h2>
//         <div className="flex px-[200px] max-[360px]:px-[20px] gap-10 max-[360px]:flex-col items-center">
//           {ProjectCard.map((cardData) => (
//             <div
//               key={cardData.id}
//               className="relative w-[330px] h-[350px] overflow-hidden group text-center max-[360px]:w-[200px] max-[360px]:h-[150px]"
//             >
//               <img
//                 className="w-full h-full object-cover"
//                 src={cardData.imgUrl}
//                 alt="Eduford_Pic"
//               />
//               ;
//               <div className="absolute inset-0 bg-transparent transition duration-500 group-hover:bg-[#252734]/80 flex items-center justify-center">
//                 <div className="flex flex-col items-center justify-center gap-3">
//                   <h3 className="text-3xl font-semibold text-white opacity-0 transition duration-500 translate-y-10 group-hover:opacity-100 group-hover:translate-y-0 ">
//                     {cardData.ProjectName}
//                   </h3>

//                   <a
//                     className="w-[70px] h-[35px] radious-6 rounded-[5px] flex items-center justify-center font-semibold bg-amber-950 opacity-0 transistion duration-500 translate-y-10 group-hover:opacity-100 text-white"
//                     target="_blank"
//                     href="https://eduford-un.netlify.app"
//                   >
//                     Visit
//                   </a>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ProjectSec;

import React from "react";
import { ProjectCard } from "../Project_Data/ProjectCard";

const ProjectSec = () => {
  return (
    <div className="w-full min-h-screen bg-[#2a2c39]">
      <div className="flex flex-col gap-8 md:gap-12 lg:gap-[60px] py-10 md:py-20 lg:py-[100px] items-center px-4 sm:px-8 md:px-16 lg:px-[200px]">
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[50px] font-semibold text-white text-center">
          My Complete Projects
        </h2>

        <div className="flex flex-col sm:flex-row flex-wrap justify-center items-center gap-6 md:gap-8 lg:gap-10 w-full">
          {ProjectCard.map((cardData) => (
            <div
              key={cardData.id}
              className="relative w-full max-w-xs sm:w-64 md:w-72 lg:w-[330px] h-48 sm:h-56 md:h-64 lg:h-[350px] overflow-hidden group text-center rounded-lg shadow-lg"
            >
              <img
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                src={cardData.imgUrl}
                alt={cardData.ProjectName}
              />

              <div className="absolute inset-0 bg-transparent transition-all duration-500 group-hover:bg-[#252734]/90 flex items-center justify-center">
                <div className="flex flex-col items-center justify-center gap-3 md:gap-4 px-4">
                  <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold text-white opacity-0 transition-all duration-500 translate-y-10 group-hover:opacity-100 group-hover:translate-y-0">
                    {cardData.ProjectName}
                  </h3>

                  <a
                    className="px-4 py-2 md:px-6 md:py-3 lg:w-[70px] lg:h-[35px] rounded-md flex items-center justify-center font-semibold bg-amber-950 hover:bg-amber-900 opacity-0 transition-all duration-500 translate-y-10 group-hover:opacity-100 group-hover:translate-y-0 text-white text-sm md:text-base"
                    target="_blank"
                    rel="noopener noreferrer"
                    href={cardData.url}
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

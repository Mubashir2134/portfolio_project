import React from "react";
import { useState, useEffect } from "react";

const SpecialSkills = () => {
  //   const [progress, setProgress] = useState(0);

  const [skills, setSkills] = useState([
    { name: "Communication Skills", target: 80, valu: 0 },
    { name: "Team Collaboration", target: 70, valu: 0 },
    { name: "Fast Learner", target: 75, valu: 0 },
    { name: "Time management", target: 85, valu: 0 },
  ]);

  useEffect(() => {
    const timer = setInterval(() => {
      setSkills((prevSkills) =>
        prevSkills.map((skill) => {
        return  skill.valu < skill.target
            ? { ...skill, valu: Math.min(skill.valu + 10, skill.target) }
            : skill;
        })
      );
    }, 500);
    return () => clearInterval(timer);
  }, []);

  return (

    
    <div className=" flex max-[360px]:flex-col justify-between max-[360px]:justify-center items-center w-[100%] h-[100vh] max-[360px]:px-[20px] px-[200px] bg-[#252734] gap-[30px]">
      <div className=" max-[360px]:w-[300px] w-[100%] text-[50px] max-[360px]:text-[20px] max-[360px]:text-center text-white font-semibold">
        My Special Skills Field Here.
      </div>

      <div className="flex flex-col justify-center items-center max-[360px]:w-[300px] max-[360px]:h-[450px] w-[700px] h-[600px] gap-[30px]">

        {skills.map((skill, index) => (
          <div
            key={index}
            className=" flex flex-col gap-[15px] justify-center items-center max-[360px]:w-[300px] w-[360px]:h-[90px] bg-[#2a2c39] w-[520px] h-[110px]"
          >
            <div className="flex items-center justify-between max-[360px]:w-[270px] w-[420px] text-[#858792]">
              <div>{skill.name}</div>
              <div>{skill.valu}%</div>
            </div>
            <div className="max-[360px]:w-[270px] w-[420px] h-[8px] bg-[#40424d]">
              <div
                style={{ width: `${skill.valu}%` }}
                className=" h-[7px] bg-white transition-[width] duration-500 ease-in-out"
              ></div>
            </div>
          </div>
        ))}
        
      </div>
    </div>
  );
};

export default SpecialSkills;

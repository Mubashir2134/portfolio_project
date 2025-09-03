import React, { useState, useEffect, useRef } from "react";
import { skillsData } from "../../data/skillsData";
import { useScrollAnimation } from "../../hooks/useScrollAnimation";
import Section from "../ui/Section";

const SkillBar = ({ skill, index, isVisible }) => {
  const { value, startAnimation } = useScrollAnimation(0, skill.target, 2000, index * 200);
  
  useEffect(() => {
    if (isVisible) {
      startAnimation();
    }
  }, [isVisible, startAnimation]);

  return (
    <div 
      className="group p-6 bg-slate-800/50 backdrop-blur-sm rounded-xl border border-white/10 hover:border-white/20 transition-all duration-300"
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-lg font-medium text-white group-hover:text-blue-300 transition-colors duration-300">
          {skill.name}
        </h3>
        <span className="text-2xl font-bold text-white">
          {value}%
        </span>
      </div>
      
      <div className="w-full bg-gray-700/50 rounded-full h-3 overflow-hidden">
        <div
          className="h-full bg-gradient-to-r from-blue-500 to-purple-500 rounded-full transition-all duration-1000 ease-out relative"
          style={{ width: `${value}%` }}
        >
          <div className="absolute inset-0 bg-white/20 rounded-full animate-pulse"></div>
        </div>
      </div>
      
      <p className="text-sm text-gray-400 mt-3 group-hover:text-gray-300 transition-colors duration-300">
        {skill.description}
      </p>
    </div>
  );
};

const Skills = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <Section id="skills" background="primary" className="relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/4 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-purple-500/5 rounded-full blur-3xl"></div>
      </div>

      <div ref={sectionRef} className="relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            My <span className="text-gradient">Special Skills</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Core competencies that drive my professional growth and project success
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {skillsData.map((skill, index) => (
            <SkillBar
              key={skill.id}
              skill={skill}
              index={index}
              isVisible={isVisible}
            />
          ))}
        </div>

        {/* Stats section */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div className="space-y-2">
            <div className="text-3xl font-bold text-white">50+</div>
            <div className="text-gray-300">Projects Completed</div>
          </div>
          <div className="space-y-2">
            <div className="text-3xl font-bold text-white">2+</div>
            <div className="text-gray-300">Years Experience</div>
          </div>
          <div className="space-y-2">
            <div className="text-3xl font-bold text-white">15+</div>
            <div className="text-gray-300">Happy Clients</div>
          </div>
          <div className="space-y-2">
            <div className="text-3xl font-bold text-white">100%</div>
            <div className="text-gray-300">Satisfaction Rate</div>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Skills;
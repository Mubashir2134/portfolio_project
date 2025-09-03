import React from "react";
import { TypeAnimation } from "react-type-animation";
import { FaDownload, FaGithub, FaLinkedinIn } from "react-icons/fa";
import { TbBrandFiverr } from "react-icons/tb";
import { SiLeetcode } from "react-icons/si";
import Button from "../ui/Button";
import Section from "../ui/Section";

const Header = () => {
  const socialLinks = [
    {
      icon: <FaLinkedinIn />,
      url: "https://www.linkedin.com/in/qazi-mubashir-hussain-ba864a286/",
      label: "LinkedIn"
    },
    {
      icon: <TbBrandFiverr />,
      url: "https://www.fiverr.com/sellers/qazimubashir623/edit",
      label: "Fiverr"
    },
    {
      icon: <FaGithub />,
      url: "https://github.com/Mubashir2134",
      label: "GitHub"
    },
    {
      icon: <SiLeetcode />,
      url: "https://leetcode.com/u/QaziBashi/",
      label: "LeetCode"
    }
  ];

  return (
    <Section 
      id="home" 
      fullHeight={true} 
      background="primary"
      className="flex items-center relative overflow-hidden pt-16"
    >
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 opacity-5">
          <svg viewBox="0 0 400 400" className="w-full h-full">
            <circle cx="200" cy="200" r="80" fill="none" stroke="currentColor" strokeWidth="2" className="text-white" />
            <circle cx="200" cy="200" r="120" fill="none" stroke="currentColor" strokeWidth="1" className="text-white/50" />
            <circle cx="200" cy="200" r="160" fill="none" stroke="currentColor" strokeWidth="1" className="text-white/30" />
          </svg>
        </div>
      </div>

      <div className="grid lg:grid-cols-2 gap-12 items-center w-full relative z-10">
        {/* Content Section */}
        <div className="text-center lg:text-left space-y-8">
          <div className="space-y-4">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
              I am <span className="text-gradient">MUBASHIR</span>
            </h1>
            
            <div className="h-8 flex items-center justify-center lg:justify-start">
              <TypeAnimation
                sequence={[
                  "Tech Explorer",
                  2000,
                  "Frontend Developer",
                  2000,
                  "UI/UX Designer",
                  2000,
                ]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
                className="text-xl md:text-2xl font-semibold text-white/90"
              />
            </div>
          </div>

          <p className="text-lg text-gray-300 max-w-lg mx-auto lg:mx-0 leading-relaxed">
            I craft modern, user-focused digital experiences that combine
            creativity with clean code. Always curious and driven, I thrive on
            solving challenges and turning ideas into reality.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 items-center justify-center lg:justify-start">
            <Button
              variant="primary"
              size="lg"
              onClick={() => window.open('./Resume.pdf', '_blank')}
              className="w-full sm:w-auto"
            >
              <FaDownload />
              Download Resume
            </Button>
            
            <Button
              variant="secondary"
              size="lg"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="w-full sm:w-auto"
            >
              Get In Touch
            </Button>
          </div>
        </div>

        {/* Image and Social Links Section */}
        <div className="relative flex items-center justify-center lg:justify-end">
          <div className="relative">
            <img
              src="Images/my Img.png"
              alt="Mubashir - Portfolio"
              className="w-80 md:w-96 lg:w-full max-w-md relative z-20 rounded-2xl shadow-2xl"
            />
            
            {/* Decorative background */}
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-2xl transform rotate-3 scale-105 z-10"></div>
          </div>

          {/* Floating Social Links */}
          <div className="absolute -right-4 top-1/2 transform -translate-y-1/2 space-y-4 z-30">
            {socialLinks.map((link, index) => (
              <a
                key={index}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="block p-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-white hover:bg-white hover:text-gray-900 transition-all duration-300 hover:scale-110 group"
                aria-label={link.label}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-5 h-5 flex items-center justify-center">
                  {link.icon}
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Header;
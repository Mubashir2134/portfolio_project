import React from "react";
import { FaHeart, FaGithub, FaLinkedinIn, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const socialLinks = [
    {
      icon: <FaGithub />,
      url: "https://github.com/Mubashir2134",
      label: "GitHub"
    },
    {
      icon: <FaLinkedinIn />,
      url: "https://www.linkedin.com/in/qazi-mubashir-hussain-ba864a286/",
      label: "LinkedIn"
    },
    {
      icon: <FaEnvelope />,
      url: "mailto:qazimubashir623@gmail.com",
      label: "Email"
    }
  ];

  return (
    <footer className="bg-slate-900 border-t border-white/10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo and Copyright */}
          <div className="flex items-center gap-4">
            <img
              src="Images/logo.png"
              alt="QM Logo"
              className="h-12 w-auto"
            />
            <div className="text-center md:text-left">
              <p className="text-gray-300 text-sm">
                &copy; {currentYear} <span className="text-white font-semibold">QM</span> • 
                Made with <FaHeart className="inline mx-1 text-red-400" size={12} /> by
                <span className="text-white font-semibold ml-1">Qazi Mubashir</span>
              </p>
              <p className="text-gray-400 text-xs mt-1">
                Frontend Developer & UI/UX Designer
              </p>
            </div>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-slate-800 hover:bg-slate-700 text-gray-400 hover:text-white rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
                aria-label={social.label}
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>

        {/* Bottom text */}
        <div className="mt-6 pt-6 border-t border-white/5 text-center">
          <p className="text-gray-400 text-xs">
            Crafted with modern technologies • React • Tailwind CSS • Vite
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
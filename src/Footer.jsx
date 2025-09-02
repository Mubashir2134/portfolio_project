import React from "react";
const Footer = () => {
  return (
    <div className="w-[100%] h-[100px] bg-[#2a2c39] border-t-[3px] border-[#858792] px-[200px] flex items-center justify-between max-[360px]:flex-col-reverse max-[360px]:h-[150px] max-[360px]:px-[20px] max-[360px]:justify-center">
      <div className="text-[#858792] max-[360px]:w-[320px] text-center">
        &copy; 2025 <span className="text-white font-semibold">QM</span> is made
        with <span className="text-white font-semibold">&hearts;</span> by
        <span className="text-white font-semibold"> Qazi Mubashir</span>
      </div>
      <img
        className="w-[95px] h-auto max-[360px]:w-[80px] max-[360px]:h-[80px]"
        src="Images/logo.png"
        alt="My Logo"
      />
    </div>
  );
};

export default Footer;

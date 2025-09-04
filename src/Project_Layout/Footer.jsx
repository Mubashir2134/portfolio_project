// import React from "react";
// const Footer = () => {
//   return (
//     <div className="w-[100%] h-[100px] bg-[#2a2c39] border-t-[3px] border-[#858792] px-[200px] flex items-center justify-between max-[360px]:flex-col-reverse max-[360px]:h-[150px] max-[360px]:px-[20px] max-[360px]:justify-center">
//       <div className="text-[#858792] max-[360px]:w-[320px] text-center">
//         &copy; 2025 <span className="text-white font-semibold">QM</span> is made
//         with <span className="text-white font-semibold">&hearts;</span> by
//         <span className="text-white font-semibold"> Qazi Mubashir</span>
//       </div>
//       <img
//         className="w-[95px] h-auto max-[360px]:w-[80px] max-[360px]:h-[80px]"
//         src="Images/logo.png"
//         alt="My Logo"
//       />
//     </div>
//   );
// };

// export default Footer;
import React from "react";

const Footer = () => {
  return (
    <div className="w-full min-h-[100px] bg-[#2a2c39] border-t-[3px] border-[#858792] px-4 sm:px-8 md:px-16 lg:px-[200px] flex flex-col-reverse sm:flex-row items-center justify-between py-4 sm:py-0 gap-4 sm:gap-0">
      <div className="text-[#858792] text-center sm:text-left text-sm md:text-base max-w-md sm:max-w-none">
        &copy; 2025 <span className="text-white font-semibold">QM</span> is made
        with <span className="text-white font-semibold">&hearts;</span> by
        <span className="text-white font-semibold"> Qazi Mubashir</span>
      </div>
      
      <img
        className="w-20 h-16 sm:w-20 sm:h-20 md:w-[85px] md:h-auto lg:w-[95px] object-contain flex-shrink-0"
        src="Images/logo.png"
        alt="My Logo"
      />
    </div>
  );
};

export default Footer;
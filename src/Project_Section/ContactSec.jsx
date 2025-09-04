// import React from "react";
// import emailjs from "@emailjs/browser";
// import { useRef } from "react";
// const ContactSec = () => {
//   const form = useRef();
//   const sendEmail = (e) => {
//     e.preventDefault();
//     emailjs
//       .sendForm(
//         "service_0tekf3i",
//         "template_516knmb",
//         form.current,
//         "ZIc_xbFV58dqniieF"
//       )
//       .then(
//         () => {
//           alert("Message Successfully Sent!");
//           form.current.reset();
//         },
//         (error) => {
//           alert("Failed to send Message, Please try again", error);
//         }
//       );
//   };
//   return (
//     <div className="w-[100%] h-[100vh] bg-[#252734]">
//       <div className="w-[100%] px-[200px] py-[60px] max-[360px]:px-[20px] max-[360px]:py-[30px] flex flex-col justify-center items-center gap-[60px] max-[360px]:gap-[30px]">
//         <h3 className="text-[50px] font-semibold text-white max-[360px]:text-[20px]">
//           Contact Me
//         </h3>
//         <div className="w-[100%] flex justify-between items-center max-[360px]:flex-col max-[360px]:gap-[30px] ">
//           <div className="w-[500px] h-[450px] max-[360px]:w-[300px] max-[360px]:h-[250px]">
//             <img
//               className=" w-auto h-[450px] max-[360px]:h-[300px] max-[360px]:w-[300px]"
//               src="Images/ContacteMe-Img.jpg"
//               alt="Contact Image"
//             />
//           </div>
//           <form
//             ref={form}
//             onSubmit={sendEmail}
//             className="w-[500px] bg-[#2a2c39] h-[450px] p-[50px] flex flex-col gap-[50px] max-[360px]:gap-[20px] max-[360px]:w-[300px] max-[360px]:h-[250px] max-[360px]:p-[20px]"
//           >
//             <input
//               type="text"
//               name="user_name"
//               required
//               placeholder="Enter Your Name"
//               className="text-[#858792] outline-none border-b-2 w-[100%] bg-none"
//             />
//             <input
//               type="email"
//               name="user_email"
//               required
//               placeholder="Enter Your Email"
//               className="text-[#858792] outline-none border-b-2 w-[100%] bg-none"
//             />
//             <textarea
//               type="text"
//               name="message"
//               placeholder="Enter Your Message"
//               className="text-[#858792] outline-none border-2 p-2 w-[100%] h-[120px] rounded-[7px]"
//             />
//             <button
//               className="w-[70px] h-[40px] rounded-[5px] font-semibold border-2 border-[#858792] text-white cursor-pointer hover:bg-[#858792] transition duration-300 "
//               // type="submit"
//             >
//               Send
//             </button>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ContactSec;














// import React from "react";
// import emailjs from "@emailjs/browser";
// import { useRef } from "react";

// const ContactSec = () => {
//   const form = useRef();
  
//   const sendEmail = (e) => {
//     e.preventDefault();
//     emailjs
//       .sendForm(
//         "service_0tekf3i",
//         "template_516knmb",
//         form.current,
//         "ZIc_xbFV58dqniieF"
//       )
//       .then(
//         () => {
//           alert("Message Successfully Sent!");
//           form.current.reset();
//         },
//         (error) => {
//           alert("Failed to send Message, Please try again", error);
//         }
//       );
//   };

//   return (
//     <div className="w-full min-h-screen bg-[#252734]">
//       <div className="w-full px-4 sm:px-8 md:px-16 lg:px-[200px] py-10 md:py-16 lg:py-[60px] flex flex-col justify-center items-center gap-8 md:gap-12 lg:gap-[60px]">
//         <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-[50px] font-semibold text-white text-center">
//           Contact Me
//         </h3>
        
//         <div className="w-full flex flex-col lg:flex-row justify-between items-center lg:items-start gap-8 lg:gap-12">
//           {/* Image Section */}
//           <div className="w-full max-w-sm md:max-w-md lg:max-w-lg xl:w-[500px] flex justify-center">
//             <img
//               className="w-full h-auto max-h-64 sm:max-h-80 md:max-h-96 lg:h-[450px] object-cover rounded-lg shadow-lg"
//               src="Images/ContacteMe-Img.jpg"
//               alt="Contact Image"
//             />
//           </div>
          
//           {/* Form Section */}
//           <form
//             ref={form}
//             onSubmit={sendEmail}
//             className="w-full max-w-sm md:max-w-md lg:max-w-lg xl:w-[500px] bg-[#2a2c39] p-6 md:p-8 lg:p-[50px] flex flex-col gap-6 lg:gap-[50px] rounded-lg shadow-lg"
//           >
//             <input
//               type="text"
//               name="user_name"
//               required
//               placeholder="Enter Your Name"
//               className="text-white bg-transparent outline-none border-b-2 border-[#858792] w-full py-3 px-2 focus:border-white transition-colors duration-300 placeholder:text-[#858792]"
//             />
            
//             <input
//               type="email"
//               name="user_email"
//               required
//               placeholder="Enter Your Email"
//               className="text-white bg-transparent outline-none border-b-2 border-[#858792] w-full py-3 px-2 focus:border-white transition-colors duration-300 placeholder:text-[#858792]"
//             />
            
//             <textarea
//               name="message"
//               required
//               placeholder="Enter Your Message"
//               className="text-white bg-transparent outline-none border-2 border-[#858792] p-4 w-full h-24 md:h-32 lg:h-[120px] rounded-lg resize-none focus:border-white transition-colors duration-300 placeholder:text-[#858792]"
//             />
            
//             <button
//               type="submit"
//               className="px-6 py-3 lg:w-[70px] lg:h-[40px] lg:px-0 lg:py-0 rounded-md font-semibold border-2 border-[#858792] text-white cursor-pointer hover:bg-[#858792] hover:scale-105 transition-all duration-300 self-start"
//             >
//               Send
//             </button>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ContactSec;
















import React from "react";
import emailjs from "@emailjs/browser";
import { useRef } from "react";

const ContactSec = () => {
  const form = useRef();
  
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_0tekf3i",
        "template_516knmb",
        form.current,
        "ZIc_xbFV58dqniieF"
      )
      .then(
        () => {
          alert("Message Successfully Sent!");
          form.current.reset();
        },
        (error) => {
          alert("Failed to send Message, Please try again", error);
        }
      );
  };

  return (
    <div className="w-full min-h-screen bg-[#252734]">
      <div className="w-full px-4 sm:px-8 md:px-16 lg:px-[200px] py-10 md:py-16 lg:py-[60px] flex flex-col justify-center items-center gap-8 md:gap-12 lg:gap-[60px]">
        <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-[50px] font-semibold text-white text-center">
          Contact Me
        </h3>
        
        <div className="w-full flex flex-col lg:flex-row justify-between items-start gap-8 lg:gap-12">
          {/* Contact Information Section */}
          <div className="w-full lg:w-[45%] flex flex-col gap-6 lg:gap-8">
            <div className="bg-[#2a2c39] p-6 md:p-8 rounded-lg shadow-lg">
              <h4 className="text-xl md:text-2xl font-semibold text-white mb-6">Get in Touch</h4>
              
              <div className="flex flex-col gap-12">
                {/* Location */}
                <div className="flex items-start gap-4">
                  <div className="w-6 h-6 mt-1 flex-shrink-0">
                    <svg className="w-full h-full text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                    </svg>
                  </div>
                  <div>
                    <h5 className="text-white font-semibold mb-1">Location</h5>
                    <p className="text-[#858792] text-sm md:text-base">Islamabad, Punjab, Pakistan</p>
                  </div>
                </div>
                
                {/* Phone */}
                <div className="flex items-start gap-4">
                  <div className="w-6 h-6 mt-1 flex-shrink-0">
                    <svg className="w-full h-full text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
                    </svg>
                  </div>
                  <div>
                    <h5 className="text-white font-semibold mb-1">Phone</h5>
                    <p className="text-[#858792] text-sm md:text-base">+92 322 8530477</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-6 h-6 mt-1 flex-shrink-0">
                    <svg className="w-full h-full text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                    </svg>
                  </div>
                  <div>
                    <h5 className="text-white font-semibold mb-1">Email</h5>
                    <p className="text-[#858792] text-sm md:text-base">qazimubashirhussain77@gmail.com</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-6 h-6 mt-1 flex-shrink-0">
                    <svg className="w-full h-full text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M16.2,16.2L11,13V7H12.5V12.2L17,14.9L16.2,16.2Z"/>
                    </svg>
                  </div>
                  <div>
                    <h5 className="text-white font-semibold mb-1">Working Hours</h5>
                    <p className="text-[#858792] text-sm md:text-base">Mon - Fri: 9:00 AM - 6:00 PM</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <form
            ref={form}
            onSubmit={sendEmail}
            className="w-full lg:w-[50%] bg-[#2a2c39] p-6 md:p-8 lg:p-[50px] flex flex-col gap-6 lg:gap-[38px] rounded-lg shadow-lg"
          >
            <input
              type="text"
              name="user_name"
              required
              placeholder="Enter Your Name"
              className="text-white bg-transparent  outline-none border-b-2 border-[#858792] w-full py-3 px-2 focus:border-white transition-colors duration-300 placeholder:text-[#858792]"
            />
            
            <input
              type="email"
              name="user_email"
              required
              placeholder="Enter Your Email"
              className="text-white bg-transparent outline-none border-b-2 border-[#858792] w-full py-3 px-2 focus:border-white transition-colors duration-300 placeholder:text-[#858792]"
            />
            
            <textarea
              name="message"
              required
              placeholder="Enter Your Message"
              className="text-white bg-transparent outline-none border-2 border-[#858792] p-4 w-full h-24 md:h-32 lg:h-[120px] rounded-lg resize-none focus:border-white transition-colors duration-300 placeholder:text-[#858792]"
            />
            
            <button
              type="submit"
              className="px-6 py-3 lg:w-[70px] lg:h-[40px] lg:px-0 lg:py-0 rounded-md font-semibold border-2 border-[#858792] text-white cursor-pointer hover:bg-[#858792] hover:scale-105 transition-all duration-300 self-start"
            >
              Send
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};
export default ContactSec;
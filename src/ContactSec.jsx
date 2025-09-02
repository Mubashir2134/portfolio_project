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
    <div className="w-[100%] h-[100vh] bg-[#252734]">
      <div className="w-[100%] px-[200px] py-[60px] max-[360px]:px-[20px] max-[360px]:py-[30px] flex flex-col justify-center items-center gap-[60px] max-[360px]:gap-[30px]">
        <h3 className="text-[50px] font-semibold text-white max-[360px]:text-[20px]">
          Contact Me
        </h3>
        <div className="w-[100%] flex justify-between items-center max-[360px]:flex-col max-[360px]:gap-[30px] ">
          <div className="w-[500px] h-[450px] max-[360px]:w-[300px] max-[360px]:h-[250px]">
            <img
              className=" w-auto h-[450px] max-[360px]:h-[300px] max-[360px]:w-[300px]"
              src="Images/ContacteMe-Img.jpg"
              alt="Contact Image"
            />
          </div>
          <form
            ref={form}
            onSubmit={sendEmail}
            className="w-[500px] bg-[#2a2c39] h-[450px] p-[50px] flex flex-col gap-[50px] max-[360px]:gap-[20px] max-[360px]:w-[300px] max-[360px]:h-[250px] max-[360px]:p-[20px]"
          >
            <input
              type="text"
              name="user_name"
              required
              placeholder="Enter Your Name"
              className="text-[#858792] outline-none border-b-2 w-[100%] bg-none"
            />
            <input
              type="email"
              name="user_email"
              required
              placeholder="Enter Your Email"
              className="text-[#858792] outline-none border-b-2 w-[100%] bg-none"
            />
            <textarea
              type="text"
              name="message"
              placeholder="Enter Your Message"
              className="text-[#858792] outline-none border-2 p-2 w-[100%] h-[120px] rounded-[7px]"
            />
            <button
              className="w-[70px] h-[40px] rounded-[5px] font-semibold border-2 border-[#858792] text-white cursor-pointer hover:bg-[#858792] transition duration-300 "
              // type="submit"
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

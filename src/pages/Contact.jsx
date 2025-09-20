import axios from "axios";
import React, { useState } from "react";
import { MdAccountCircle, MdMessage, MdAlternateEmail } from "react-icons/md";
import { useInView } from "react-intersection-observer";
import { fetchApiData } from "../api";

function Contact() {
  const [data, setData] = useState({ name: "", email: "", message: "" });
  const { ref: contactRef, inView: contactInView } = useInView({
    triggerOnce: true,
  });
  const { ref: formRef, inView: formInView } = useInView({ triggerOnce: true });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!data.name || !data.email || !data.message) {
      alert("All fields are required.");
      return;
    }
    try {
      await fetchApiData("post", "api/admin/contactinfo", data);
      setData({ name: "", email: "", message: "" });
    } catch (error) {
      alert("An error occurred while sending your message. Please try again.");
    }
  };

  return (
    <div className="text-white w-full relative">
      <div className="img h-full"></div>
      <div className="opacity-overlay h-[95vh]"></div>
      <div
        ref={contactRef}
        className={`text-white text-[1.2rem] font-semibold mt-[1rem] mx-8 z-10 relative ${
          contactInView ? "animate-fade-in" : "opacity-0"
        }`}
      >
        <h1 className="cursor-text">Contact Information</h1>
        <div className="lg:flex w-full my-[1.7rem] text-[1rem] gap-[6vw]">
          <div className="bg-[#2C2C39] p-8 w-full lg:w-[17.5rem] text-[14px] mb-[46px] font-bold leading-4">
            <p className="flex justify-between">
              <span>Country:</span>
              <span>India</span>
            </p>
            <br />
            <p className="flex justify-between">
              <span>State:</span>
              <span>Delhi</span>
            </p>
            <br />
            <p className="flex justify-between">
              <span>City:</span>
              <span>New Delhi</span>
            </p>
            <br />
            <p className="flex justify-between">
              <span>Address:</span>
              <span className="w-[110px] text-end">
                E-51, Jain Colony Barwala
              </span>
            </p>
            <br />
          </div>
          <div className="bg-[#2C2C39] p-8 flex flex-col justify-center w-full lg:w-[19rem] text-[14px] mb-[46px] font-bold leading-4">
            <p className="flex justify-between">
              <span>Email:</span>
              <span className="text-end">mauryagourav82@gmail.com</span>
            </p>
            <br />
            <p className="flex justify-between">
              <span>Phone no. :</span>
              <span>+91 9354291197</span>
            </p>
          </div>
        </div>
      </div>
      <div
        ref={formRef}
        className={`z-10 relative mx-8 font-semibold pb-[8rem] md:pr-10 md:w-full lg:w-full lg:pr-[10vw] ${
          formInView ? "animate-fade-in" : "opacity-0"
        }`}
      >
        <h2>Get In Touch</h2>
        <div className="bg-[#2D2D3A] mt-10 p-8 flex flex-col items-center justify-center w-full md:w-[80%] lg:w-[60%] mx-auto">
          <form className="w-full" onSubmit={handleSubmit}>
            <div className="flex items-center w-full mb-6">
              <span className="bg-black flex justify-center items-center w-10 h-10 text-xl text-[#8C8C8E]">
                <MdAccountCircle />
              </span>
              <input
                type="text"
                name="name"
                onChange={handleChange}
                className="bg-[#242431] w-full pl-4 p-2"
                placeholder="Name"
                value={data.name}
              />
            </div>
            <div className="flex items-center w-full mb-6">
              <span className="bg-black flex justify-center items-center w-10 h-10 text-xl text-[#8C8C8E]">
                <MdAlternateEmail />
              </span>
              <input
                type="text"
                name="email"
                onChange={handleChange}
                className="bg-[#242431] w-full pl-4 p-2"
                placeholder="Email"
                value={data.email}
              />
            </div>
            <div className="flex items-start w-full mb-6">
              <span className="bg-black flex justify-center items-center w-10 h-10 text-xl text-[#8C8C8E]">
                <MdMessage />
              </span>
              <textarea
                onChange={handleChange}
                className="bg-[#242431] w-full pl-4 p-2"
                name="message"
                placeholder="Message"
                value={data.message}
              ></textarea>
            </div>
            <div className="flex justify-center">
              <button
                type="submit"
                className="bg-[#FFC107] text-black text-[11px] tracking-[0.2em] px-9 py-3 font-bold"
              >
                SEND MESSAGE
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;

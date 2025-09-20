import React, { useState } from "react";
import { IoMdDownload } from "react-icons/io";
import { FaCheck, FaGithub, FaLinkedin, FaFacebook } from "react-icons/fa";
import { BsInstagram } from "react-icons/bs";
import { BiLogoGmail } from "react-icons/bi";
import { MdArrowForwardIos } from "react-icons/md";
import Zoom from 'react-medium-image-zoom';
import 'react-medium-image-zoom/dist/styles.css';
import { useSwipeable } from "react-swipeable";

function Profile() {
  const [isOpen, setIsOpen] = useState(false);

  const handlers = useSwipeable({
    onSwipedLeft: () => setIsOpen(true),
    onSwipedRight: () => setIsOpen(false),
    preventDefaultTouchmoveEvent: true,
    trackMouse: true,
  });

  const toggleProfile = () => setIsOpen(!isOpen);

  return (
    <div>
      {/* Profile component for small and medium screens with swipe functionality */}
      <div {...handlers} className="lg:hidden overflow-hidden relative z-20">
        <div
          id="profile-container"
          className={`transform ${isOpen ? 'translate-x-0' : '-translate-x-[95%] md:-translate-x-[98%]'} transition-transform duration-500 ease-in-out fixed inset-y-0 left-0 bg-[#242431] w-[85%] flex flex-col overflow-hidden `}
        >
          <div className="absolute z-10 left-1/2 transform -translate-x-1/2 w-full bg-[#24242F] pb-8">
            <Zoom>
              <img
                src="gouravv.webp"
                alt="Profile Photo"
                className="w-[6rem] h-[6rem] rounded-full mx-auto mt-10"
              />
            </Zoom>
            <p className="text-white text-center text-2xl my-3">Gourav Maurya</p>
            <p className="text-[#707074] text-center">MERN Web Developer</p>
          </div>
          <div className="bg-[#20202A] px-7 flex flex-col gap-5 example mt-[37vh]">
            <div className="text-white">
              <p className="flex justify-between">
                <span>Residence:</span>
                <span>Delhi</span>
              </p>
              <p className="flex justify-between">
                <span>City:</span>
                <span>New Delhi</span>
              </p>
              <p className="flex justify-between">
                <span>Age:</span>
                <span>21</span>
              </p>
            </div>
            <hr />
            <div>
              <SkillBar skill="HTML" percentage="90%" />
              <SkillBar skill="CSS" percentage="80%" />
              <SkillBar skill="JS" percentage="70%" />
            </div>
            <hr />
            <div>
              {["React js, Nodejs, Express js", "Mongodb, SQL", "Tailwind CSS, Bootstrap", "Git, Github", "Java", "Material UI, Swiper, Auth0", "Vercel, Netlify, Render"].map((text, index) => (
                <p key={index} className="text-[#707074] flex items-center gap-2">
                  <span className="text-[12px] text-[#FFC107]">
                    <FaCheck />
                  </span>
                  {text}
                </p>
              ))}
            </div>
            <hr />
            <div>
              <p>
                <a
                  href="GouravResumeUpdated.pdf"
                  download="Gourav Maurya CV"
                  className="text-[#707074] flex items-center gap-1 hover:text-white transition-all text-[13px]"
                >
                  DOWNLOAD CV
                  <span>
                    <IoMdDownload />
                  </span>
                </a>
              </p>
            </div>
          </div>
          <div className="bg-[#252531] absolute text-[18px] gap-7 justify-center flex bottom-0 text-[#707074] py-6 w-full">
            <span><a href="https://www.linkedin.com/in/gourav-maurya-1b516a303/"><FaLinkedin /></a></span>
            <span><a href="https://github.com/Gourav12321"><FaGithub /></a></span>
            <span><a href="https://www.instagram.com/gourav_maurya426/"><BsInstagram /></a></span>
            <span><a href="https://www.facebook.com/gourav.maurya.14"><FaFacebook /></a></span>
            <span><a href="mailto:mauryagourav82@gmail.com"><BiLogoGmail /></a></span>
          </div>
        </div>
        <div
          className={`fixed sm:top-[62%] top-[40%] left-4 transform -translate-y-1/2 text-white text-2xl cursor-pointer ${isOpen ?  "sm:translate-x-[79vw] animate-pulse translate-x-[70vw] md:translate-x-[80vw] border-[2px] border-[#FFC107] bg-[#FFC107]": "animate-bounce translate-x-0 border-[2px] border-[#FFC107] bg-[#FFC107] " }
          `} onClick={toggleProfile}
        >
          {isOpen ?  <MdArrowForwardIos   className=" rotate-180"/> : <MdArrowForwardIos/>}
        </div>
      </div>

      {/* Profile component for large screens without swipe functionality */}
      <div className="hidden lg:flex lg:flex-col bg-[#242431] lg:w-[17rem] h-[95vh] relative overflow-hidden sm:ml-6 mt-4 mb-4 sm:mr-2 ">
        <div className="absolute z-10 left-1/2 transform -translate-x-1/2 w-full bg-[#24242F] pb-8">
          <Zoom>
            <img
              src="gourav.jpeg"
              alt="Profile Photo"
              className="w-[6rem] h-[6rem] rounded-full mx-auto mt-10"
            />
          </Zoom>
          <p className="text-white text-center text-2xl my-3">Gourav Maurya</p>
          <p className="text-[#707074] text-center">MERN Web Developer</p>
        </div>
        <div className="bg-[#20202A] px-7 flex flex-col gap-5 mt-[37vh] example">
          <div className="text-white">
            <p className="flex justify-between">
              <span>Residence:</span>
              <span>Delhi</span>
            </p>
            <p className="flex justify-between">
              <span>City:</span>
              <span>New Delhi</span>
            </p>
            <p className="flex justify-between">
              <span>Age:</span>
              <span>21</span>
            </p>
          </div>
          <hr />
          <div>
            <SkillBar skill="HTML" percentage="90%" />
            <SkillBar skill="CSS" percentage="80%" />
            <SkillBar skill="JS" percentage="70%" />
          </div>
          <hr />
          <div>
            {["React js, Nodejs, Express js", "Mongodb, SQL", "Tailwind CSS, Bootstrap", "Git, Github", "Java", "Material UI, Swiper, Auth0", "Vercel, Netlify, Render"].map((text, index) => (
              <p key={index} className="text-[#707074] flex items-center gap-2">
                <span className="text-[12px] text-[#FFC107]">
                  <FaCheck />
                </span>
                {text}
              </p>
            ))}
          </div>
          <hr />
          <div>
            <p>
              <a
                href="GouravResumeUpdated.pdf"
                download="Gourav Maurya CV"
                className="text-[#707074] flex items-center gap-1 hover:text-white transition-all text-[13px]"
              >
                DOWNLOAD CV
                <span>
                  <IoMdDownload />
                </span>
              </a>
            </p>
          </div>
        </div>
        <div className="bg-[#252531] absolute text-[18px] gap-7 justify-center flex bottom-0 text-[#707074] py-6 w-full ">
          <span className="hover:text-white transition-all hover:scale-110"><a href="https://www.linkedin.com/in/gourav-maurya-1b516a303/" target="new"><FaLinkedin /></a></span>
          <span className="hover:text-white transition-all hover:scale-110"><a href="https://github.com/Gourav12321" target="new"><FaGithub /></a></span>
          <span className="hover:text-white transition-all hover:scale-110"><a href="https://www.instagram.com/gourav_maurya426/" target="new"><BsInstagram /></a></span>
          <span className="hover:text-white transition-all hover:scale-110"><a href="https://www.facebook.com/gourav.maurya.14" target="new"><FaFacebook /></a></span>
          <span className="hover:text-white transition-all hover:scale-110"><a href="mailto:mauryagourav82@gmail.com" target="new"><BiLogoGmail /></a></span>
        </div>
      </div>
    </div>
  );
}

function SkillBar({ skill, percentage }) {
  return (
    <div className="mb-4">
      <p className="flex justify-between text-white">
        <span>{skill}</span>
        <span>{percentage}</span>
      </p>
      <div className="w-full rounded-full h-2 bg-black mt-2 flex items-center">
        <div
          className="h-[6px] rounded-full bg-[#FFC107] relative"
          style={{ width: percentage }}
        ></div>
      </div>
    </div>
  );
}

export default Profile;

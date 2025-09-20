import React, { useEffect, useState } from "react";
import Typewriter from "typewriter-effect";
import axios from "axios";
import { Link } from "react-router-dom";
import { useInView } from "react-intersection-observer";
import { fetchApiData } from "../api";

function Home() {
  const [data, setData] = useState([]);
  const { ref: aboutMeRef, inView: aboutMeInView } = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });
  const { ref: skillRef, inView: skillInView } = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });
  const { ref: introRef, inView: introInView } = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetchApiData("get", "api/admin/getdata");
        if (Array.isArray(response.data)) {
          setData(response.data);
        } else {
          console.error("Response data is not an array:", response.data);
          setData([]);
        }
        setData(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="text-white w-full relative bg-[#16161d]">
      <div className="img"></div>
      <div className="opacity-overlay h-[95vh]"></div>
      <div className="text-[#FAFAFC] md:flex justify-center w-full pr-6 lg:pr-0 lg:mr-0 pt-5 lg:mb-[2rem] md:mb-[5rem] mb-[2rem] relative z-10">
        <img
          src="https://miller.bslthemes.com/arter-demo/img/bg.jpg"
          alt="background"
          className=" opacity-70 z-10 md:pr-[3.5rem] md:pl-[2rem] position absolute w-full lg:h-[20rem] md:h-[25rem] h-[23rem]"
        />
        <div
          ref={introRef}
          className={`flex flex-col w-full relative md:static ml-6 md:ml-0 md:${
            introInView ? "animate-in" : "animate-out"
          } relative z-10`}
        >
          <div className="z-20 md:text-[40px] text-[30px] flex flex-col font-extrabold md:leading-[3rem] leading-10 md:ml-[6rem] ml-[1rem] md:mt-6 mt-10">
            <span>Hi, I am</span>
            <span>Gourav Maurya</span>
          </div>
          <div className=" flex md:hidden ml-6 z-20">
            <img
              src="gouravv.webp"
              alt="profile"
              className="object-cover rounded-xl h-[9rem] w-[9rem]"
            />
          </div>
          <div className="z-20 md:ml-[6rem] ml-[1rem] md:mt-[1.5rem] mt-[1rem]">
            <p className="flex md:gap-2 gap-1 md:text-[17px] text-[13px]">
              <pre className="text-[#FFC107] font-semibold">&lt;code&gt;</pre>
              I am a
              <Typewriter
                options={{ loop: true }}
                onInit={(typewriter) => {
                  typewriter
                    .typeString("MERN Full Stack Developer")
                    .pauseFor(2500)
                    .deleteAll()
                    .typeString("Frontend Developer")
                    .pauseFor(2500)
                    .deleteAll()
                    .typeString("Backend Developer")
                    .pauseFor(2500)
                    .deleteAll()
                    .typeString("Programmer")
                    .pauseFor(2500)
                    .deleteAll()
                    .typeString("UI/UX Designer")
                    .pauseFor(2500)
                    .start();
                }}
              />
              <pre className="text-[#FFC107] font-semibold">&lt;/code&gt;</pre>
            </p>
            <div>
              <button className="bg-[#FFC107] text-black font-semibold mt-4 text-[12px] px-7 py-3 hover:-translate-y-1 hover:transition-all hover:ease-in-out">
                <a href="GouravResumeUpdated.pdf" download="Gourav Maurya CV">
                  {" "}
                  Download CV
                </a>
              </button>
            </div>
          </div>
        </div>
        <div
          ref={introRef}
          className={`w-1/2 h-full md:flex hidden  z-20 mr-[3rem] mt-[1.7rem] ${
            introInView ? "animate-in" : "animate-out"
          }`}
        >
          <img
            src="gouravv.webp"
            alt="profile"
            className="object-cover w-[18rem] h-[17.8rem]"
          />
        </div>
      </div>
      <div
        ref={aboutMeRef}
        className={`relative z-10 px-12 md:px-[15vw] lg:px-8 lg:mt-[5vh] mt-[10vh] md:mt-[15vh] ${
          aboutMeInView ? "animate-in" : "animate-out"
        }`}
      >
        <p className="text-xl font-semibold"> About Me</p>
        <div className="pt-[2rem] pb-[3rem] pr-8 lg:pr-12 flex flex-col gap-4 text-slate-300">
          <p>
            Hello! I'm Gourav Maurya, a MERN Web Developer lived in New Delhi,
            India. I build dynamic and responsive web applications using
            MongoDB, Express.js, React, and Node.js.
          </p>
          <p>
            I'm passionate about learning and always eager to take on new
            challenges. My skill set includes HTML, CSS, JavaScript, Tailwind
            CSS, Bootstrap, and Material UI. I use Git and GitHub for version
            control and have deployed projects on platforms like Vercel,
            Netlify, and Render.
          </p>
          <p>
            With a positive attitude and a growth mindset, I'm dedicated to
            delivering high-quality results and making meaningful contributions.
          </p>
        </div>
      </div>
      <div className="z-10 flex flex-col relative">
        <div className="text-3xl my-7 ml-8 font-semibold text-[22px]">
          My Skills
        </div>
        <div
          ref={skillRef}
          className={`flex flex-wrap ml-2 mr-6 ${
            skillInView ? "animate-in" : "animate-out"
          }`}
        >
          {Array.isArray(data) && data.length > 0 ? (
            data.map((service, index) => (
              <div key={index} className="ag-courses_item">
                <Link to="/contact" className="ag-courses-item_link">
                  <div className="ag-courses-item_bg"></div>
                  <div className="ag-courses-item_title">{service.heading}</div>
                  <div className="ag-courses-item_date-box relative mb-10">
                    <p>{service.detail}</p>
                  </div>
                  <div className=" absolute bottom-3 left-4 z-20">
                    <button className="bg-[#FFC107] px-5 py-2 rounded-xl text-black font-semibold text-[15px]">
                      <Link to="/contact">Hire Now</Link>
                    </button>
                  </div>
                </Link>
              </div>
            ))
          ) : (
            <div>
              <p>Loading...</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Home;

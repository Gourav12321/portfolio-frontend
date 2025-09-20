import axios from "axios";
import React, { useEffect, useState, useRef } from "react";
import { fetchApiData } from "../api";

function Education() {
  const [data, setData] = useState([]);
  const [showCertificate, setShowCertificate] = useState(null);
  const refs = useRef([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetchApiData("get", "api/admin/showeducation");
        setData(response?.data);
      } catch (error) {
        console.error("Error fetching education data:", error);
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          } else {
            entry.target.classList.remove("visible");
          }
        });
      },
      { threshold: 0.1 }
    );

    refs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => {
      refs.current.forEach((ref) => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, [data]);

  const handleShowCertificate = (index) => {
    setShowCertificate(showCertificate === index ? null : index);
  };

  return (
    <div className="text-white w-full">
      <div className="img h-full"></div>
      <div className="opacity-overlay h-[95vh]"></div>
      <div className="text-white z-10 relative flex flex-col justify-center items-center">
        <h1 className="text-3xl font-semibold my-7">Education</h1>
        <div className="flex flex-col justify-center md:w-2/3 w-[80%] relative mb-4 mt-2">
          {data.map((education, index) => (
            <div
              key={education._id}
              ref={(el) => (refs.current[index] = el)}
              className="flex my-3 relative group animate-fade-zoom"
            >
              <div className="w-full mx-5 mb-5 p-4 rounded-2xl border-[2px] border-[#FFC107] shadow-md shadow-indigo-300 transform transition-transform duration-300 group-hover:scale-105 group-hover:shadow-lg group-hover:shadow-indigo-500">
                <h2 className="text-2xl font-semibold">{education.name}</h2>
                <p className="text-[1rem] font-medium my-3">
                  {education.degree}
                </p>
                <p className="my-2">
                  <span className="font-bold mr-2">Grade:</span>{" "}
                  {education.grade}
                </p>
                <p className="md:absolute right-9 top-4 bg-[#191923] text-slate-400 w-[11.3rem] px-4 py-2 rounded-full my-3 text-center">
                  {education.startDate} - {education.endDate}
                </p>
                <p>{education.message}</p>
                {index !== 0 && (
                  <div>
                    <button
                      className="mt-4 bg-[#FFC107] text-[#191923] px-4 py-2 rounded hover:bg-[#FFD700] animate-bounce"
                      onClick={() => handleShowCertificate(index)}
                    >
                      Certificate
                    </button>
                    {showCertificate === index && (
                      <div className="mt-4 w-[5rem]">
                        <a
                          href={`${education.achievements}`}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <img
                            src={`${education.achievements}`}
                            alt={`Achievement ${index}`}
                            className="w-full mb-2 hover:scale-110 cursor-pointer"
                          />
                        </a>
                      </div>
                    )}
                  </div>
                )}
              </div>
              <div className="relative bg-[#191923] rounded-full ml-2 transform transition-transform duration-300 group-hover:scale-110">
                <div className="absolute w-4 h-4 bg-[#FFC107] transform left-1/2 top-0 -translate-x-1/2 rounded-full"></div>
                <hr className="rotate-90 w-[0.2rem] mt-2" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Education;

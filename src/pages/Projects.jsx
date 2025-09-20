import React, { useEffect, useState, useRef } from "react";
import axios from "axios";
import { fetchApiData } from "../api";

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("all");
  const refs = useRef([]);
  const observer = useRef(null);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await fetchApiData("get", "api/admin/projects");
        if (Array.isArray(response.data)) {
          setProjects(response.data);
        } else {
          console.error("Expected an array but received:", response.data);
        }
      } catch (error) {
        console.error("Error fetching projects:", error);
      }
    };
    fetchProjects();
  }, []);

  useEffect(() => {
    observer.current = new IntersectionObserver(
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

    return () => {
      if (observer.current) {
        observer.current.disconnect();
      }
    };
  }, []);

  const filteredProjects = projects.filter(
    (project) =>
      selectedCategory === "all" || project.category === selectedCategory
  );

  useEffect(() => {
    // Observe the filtered project elements
    refs.current.forEach((ref) => {
      if (ref) observer.current.observe(ref);
    });

    // Clean up observers on component unmount or before re-observing
    return () => {
      refs.current.forEach((ref) => {
        if (ref) observer.current.unobserve(ref);
      });
    };
  }, [filteredProjects]);

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
    // Clear the refs and the visible class for re-observing
    refs.current.forEach((ref) => {
      if (ref) ref.classList.remove("visible");
    });
    refs.current = [];
  };

  return (
    <div className="text-white w-[96%]">
      <div className="img h-full"></div>
      <div className="opacity-overlay h-[95vh]"></div>
      <div className="text-white z-10 relative md:pl-0 pl-5">
        <h1 className="text-3xl font-semibold my-7 text-center">Projects</h1>
        <div className="flex justify-center space-x-4">
          <button
            onClick={() => handleCategoryChange("all")}
            className="category-button"
          >
            All
          </button>
          <button
            onClick={() => handleCategoryChange("Full Stack Web App")}
            className="category-button"
          >
            Full Stack Web Apps
          </button>
          <button
            onClick={() => handleCategoryChange("React App")}
            className="category-button"
          >
            React Apps
          </button>
        </div>
        <div className="flex flex-wrap justify-evenly mt-8 w-full">
          {filteredProjects.map((project, index) => (
            <div
              key={project._id}
              ref={(el) => (refs.current[index] = el)}
              className="project-card m-7 lg:w-1/2 animate-fade-zoom"
            >
              <img
                src={project.imageUrl}
                alt={project.title}
                className="project-image w-[100%] h-[14rem]"
              />
              <div className="project-info">
                <h2 className="project-title">{project.title}</h2>
                <p className="project-description">{project.description}</p>
                <div className="project-technologies">
                  {project.technologies &&
                    project.technologies.map((tech, index) => (
                      <span key={index} className="technology-tag">
                        {tech}
                      </span>
                    ))}
                </div>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-link"
                >
                  View Project
                </a>
                <p className="project-date">{project.date}</p>
                <div className="project-achievements">
                  {project.achievements &&
                    project.achievements.map((achievement, index) => (
                      <a
                        key={index}
                        href={achievement.link}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <img
                          src={achievement.imageUrl}
                          alt={`Achievement ${index + 1}`}
                          className="achievement-image"
                        />
                      </a>
                    ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;

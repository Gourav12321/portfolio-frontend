import React, { useState } from "react";
import AdminNavbar from "./AdminNavbar";
import axios from "axios";
import { fetchApiData } from "../../../api";

function AdminProject() {
  const [project, setProject] = useState({
    title: "",
    description: "",
    category: "All", // Default category
    technologies: "",
    imageUrl: "",
    link: "",
    date: "",
  });

  const handleChange = (e) => {
    setProject({ ...project, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetchApiData("post", "api/admin/projects", {
        ...project,
        technologies: project.technologies
          .split(",")
          .map((tech) => tech.trim()),
      });
      console.log("Project added:", response.data);
      setProject({
        title: "",
        description: "",
        category: "All",
        technologies: "",
        imageUrl: "",
        link: "",
        date: "",
      });
    } catch (error) {
      console.error("Error adding project:", error);
    }
  };

  return (
    <div className="flex w-full h-[100vh] gap-10">
      <span className="img absolute w-full h-full m-0 -z-0"></span>
      <AdminNavbar />
      <div className="text-black w-full flex flex-col items-center p-4 relative">
        <h1 className="text-3xl font-semibold my-7">Admin Panel</h1>
        <div className="w-full md:w-1/2">
          <form onSubmit={handleSubmit} className="admin-form">
            <input
              type="text"
              name="title"
              value={project.title}
              onChange={handleChange}
              placeholder="Title"
            />
            <input
              type="text"
              name="description"
              value={project.description}
              onChange={handleChange}
              placeholder="Description"
            />
            <select
              name="category"
              value={project.category}
              onChange={handleChange}
            >
              <option value="All">All</option>
              <option value="Full Stack Web App">Full Stack Web App</option>
              <option value="React App">React App</option>
            </select>
            <input
              type="text"
              name="technologies"
              value={project.technologies}
              onChange={handleChange}
              placeholder="Technologies (comma separated)"
            />
            <input
              type="text"
              name="imageUrl"
              value={project.imageUrl}
              onChange={handleChange}
              placeholder="Image URL"
            />
            <input
              type="text"
              name="link"
              value={project.link}
              onChange={handleChange}
              placeholder="Project Link"
            />
            <input
              type="text"
              name="date"
              value={project.date}
              onChange={handleChange}
              placeholder="Date"
            />
            <button type="submit">Add Project</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default AdminProject;

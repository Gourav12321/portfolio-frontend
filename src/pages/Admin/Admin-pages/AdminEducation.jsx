import React, { useState } from "react";
import AdminNavbar from "./AdminNavbar";
import axios from "axios";
import { Input, Textarea } from "@mui/joy";
import { fetchApiData } from "../../../api";

function AdminEducation() {
  const [change, setChange] = useState({
    name: "",
    degree: "",
    grade: "",
    startDate: "",
    endDate: "",
    message: "",
    achievements: [],
  });

  const onChange = (e) => {
    const { name, value } = e.target;

    setChange({ ...change, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (
      !change.name ||
      !change.degree ||
      !change.grade ||
      !change.startDate ||
      !change.endDate ||
      !change.message
    ) {
      alert("All fields are required");
      return;
    }
    try {
      await fetchApiData("post", "api/admin/education", change);

      setChange({
        name: "",
        degree: "",
        grade: "",
        startDate: "",
        endDate: "",
        message: "",
        achievements: "",
      });
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="flex w-full h-[100vh] gap-10 text-white">
      <span className="img absolute w-full h-full m-0 -z-0"></span>
      <AdminNavbar />
      <div className="flex flex-col justify-center items-center w-full relative z-10">
        <h1 className="text-2xl font-semibold my-6">Education</h1>
        <div className="w-1/2">
          <form className="w-full flex flex-col gap-3" onSubmit={handleSubmit}>
            <Input
              placeholder="Enter School/University Name"
              id="name"
              name="name"
              value={change.name}
              onChange={onChange}
              sx={{
                "--Input-focusedInset": "var(--any, )",
                "--Input-focusedThickness": "0.25rem",
                "--Input-focusedHighlight": "rgba(13,110,253,.25)",
                "&::before": {
                  transition: "box-shadow .15s ease-in-out",
                },
                "&:focus-within": {
                  borderColor: "#86b7fe",
                },
              }}
            />
            <Input
              placeholder="Enter Degree"
              id="degree"
              name="degree"
              value={change.degree}
              onChange={onChange}
              sx={{
                "--Input-focusedInset": "var(--any, )",
                "--Input-focusedThickness": "0.25rem",
                "--Input-focusedHighlight": "rgba(13,110,253,.25)",
                "&::before": {
                  transition: "box-shadow .15s ease-in-out",
                },
                "&:focus-within": {
                  borderColor: "#86b7fe",
                },
              }}
            />
            <Input
              placeholder="Enter Grade"
              id="grade"
              name="grade"
              value={change.grade}
              onChange={onChange}
              sx={{
                "--Input-focusedInset": "var(--any, )",
                "--Input-focusedThickness": "0.25rem",
                "--Input-focusedHighlight": "rgba(13,110,253,.25)",
                "&::before": {
                  transition: "box-shadow .15s ease-in-out",
                },
                "&:focus-within": {
                  borderColor: "#86b7fe",
                },
              }}
            />
            <div className="flex gap-4">
              <label htmlFor="startDate">Starting Date:</label>
              <input
                type="text"
                name="startDate"
                id="startDate"
                value={change.startDate}
                onChange={onChange}
                className="text-slate-500"
              />
              <label htmlFor="endDate">Ending Date:</label>
              <input
                type="text"
                name="endDate"
                id="endDate"
                value={change.endDate}
                onChange={onChange}
                className="text-slate-500"
              />
            </div>
            <Textarea
              placeholder="Enter Summary"
              id="message"
              name="message"
              value={change.message}
              onChange={onChange}
              minRows={2}
              sx={{
                "--Textarea-focusedInset": "var(--any, )",
                "--Textarea-focusedThickness": "0.25rem",
                "--Textarea-focusedHighlight": "rgba(13,110,253,.25)",
                "&::before": {
                  transition: "box-shadow .15s ease-in-out",
                },
                "&:focus-within": {
                  borderColor: "#86b7fe",
                },
              }}
            />
            Enter Your Achievements:
            <input
              type="text"
              name="achievements"
              id="achievements"
              onChange={onChange}
              value={change.achievements}
              className="text-black"
            />
            <button type="submit" className="z-10 button-29">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default AdminEducation;

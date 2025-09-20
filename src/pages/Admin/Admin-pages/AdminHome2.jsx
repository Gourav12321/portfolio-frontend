import React, { useState } from "react";
import axios from "axios";
import { Input, Textarea } from "@mui/joy";
import AdminNavbar from "./AdminNavbar";
import { fetchApiData } from "../../../api";

function AdminHome2() {
  const [change, setChange] = useState({ heading: "", detail: "" });
  // const [name, setName] = useState("");

  const onChange = (e) => {
    const { name, value } = e.target;
    setChange((prevChange) => ({
      ...prevChange,
      [name]: value,
    }));
  };

  // const handleNameChange = (e) => {
  //   setName(e.target.value);
  // };

  // const handleSubmitName = async (e) => {
  //   e.preventDefault();
  //   if (!name) {
  //     alert("Please enter a name");
  //     return;
  //   }
  //   try {
  //     await fetchApiData("post", "api/admin/getname", { name });
  //     setName("");
  //   } catch (error) {
  //     console.error("Error submitting name:", error);
  //   }
  // };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!change.heading || !change.detail) {
      alert("Please fill out both fields");
      return;
    }

    try {
      await fetchApiData("post", "api/admin/home", change);
      setChange({ heading: "", detail: "" });
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  return (
    <div className="flex w-full h-[100vh] gap-10 text-white">
      <AdminNavbar />
      <span className="img absolute w-full h-full m-0 -z-0"></span>
      <div className="flex flex-col justify-center items-center w-full">
        <h1 className="text-center text-3xl my-10 ml-10">My Services</h1>
        <form className="flex flex-col gap-5 w-[40vw]" onSubmit={handleSubmit}>
          <label htmlFor="heading" className="text-xl">
            Heading
          </label>
          <Input
            placeholder="Enter Card Heading"
            id="heading"
            name="heading"
            value={change.heading}
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
          <label htmlFor="detail" className="text-xl">
            Detail
          </label>
          <Textarea
            placeholder="Enter Card Detail"
            id="detail"
            name="detail"
            value={change.detail}
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
          <button type="submit" className="z-10 button-29">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default AdminHome2;

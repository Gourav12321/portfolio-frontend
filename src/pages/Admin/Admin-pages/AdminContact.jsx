import React, { useEffect, useState } from "react";
import AdminNavbar from "./AdminNavbar";
import axios from "axios";
import { MdDelete } from "react-icons/md";
import { fetchApiData } from "../../../api";

function AdminContact() {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [hoveredIndex, setHoveredIndex] = useState(null);

  useEffect(() => {
    const loadData = async () => {
      try {
        const response = await fetchApiData("get", "api/admin/showcontact");
        setData(response.data);
      } catch (error) {
        console.error(error);
        setError("An error occurred while fetching data");
      }
    };
    loadData();
  }, []);

  const handleDelete = async (id) => {
    try {
      await fetchApiData("delete", `api/admin/deletecontact/${id}`);
      setData((prevData) => prevData.filter((item) => item._id !== id));
    } catch (error) {
      console.error("Error deleting contact:", error);
      setError("An error occurred while deleting the contact");
    }
  };

  return (
    <div className="flex w-full h-[100vh] gap-10 example2 text-white ">
      <span className="img absolute w-full h-full m-0 -z-0"></span>
      <AdminNavbar />
      <div className="flex w-full my-[10rem] mx-6 relative flex-wrap gap-5 overflow-hidden h-full">
        {data.length > 0 ? (
          data.map((item, index) => (
            <div
              key={index}
              className="bg-[#000000] p-[10vh] w-[30vw] flex flex-col flex-wrap relative gap-7"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <p>Name: {item.name}</p>
              <p>Email: {item.email}</p>
              <p className="break-words">Message: {item.message}</p>
              <button
                className={`absolute p-2 right-5 top-5 ${
                  hoveredIndex === index ? "flex" : "hidden"
                }`}
                onClick={() => handleDelete(item._id)}
              >
                <MdDelete />
              </button>
            </div>
          ))
        ) : (
          <div>{error ? <p>{error}</p> : <p>Loading...</p>}</div>
        )}
      </div>
    </div>
  );
}

export default AdminContact;

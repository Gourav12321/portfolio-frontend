import axios from "axios";

const apiBaseUrl = import.meta.env.VITE_BACKEND_URL || "http://localhost:3000";

export const fetchApiData = async (methods, endpoint, data) => {
  if (methods === "post" || methods === "put") {
    const response = await axios[methods](`${apiBaseUrl}/${endpoint}`, data);
    return response;
  } else {
    const response = await axios[methods](`${apiBaseUrl}/${endpoint}`);
    return response;
  }
};

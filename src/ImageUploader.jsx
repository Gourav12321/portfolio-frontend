import React, { useEffect, useState } from "react";
import AdminNavbar from "./pages/Admin/Admin-pages/AdminNavbar";

const ImageUploader = () => {
  const [scriptLoaded, setScriptLoaded] = useState(false);

  const cloudName = import.meta.env.VITE_CLOUDINARY_CLOUD_NAME;
  const uploadPreset = import.meta.env.VITE_CLOUDINARY_PRESET;

  useEffect(() => {
    // Dynamically load the Cloudinary script
    const script = document.createElement("script");
    script.src = "https://widget.cloudinary.com/v2.0/global/all.js";
    script.onload = () => setScriptLoaded(true);
    script.onerror = () => console.error("Failed to load Cloudinary script");
    document.body.appendChild(script);

    // Cleanup script when component unmounts
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  const handleUpload = (result) => {
    if (result.event === "success") {
      console.log("Upload result:", result.info);
    }
  };

  const uploadImage = () => {
    if (window.cloudinary && scriptLoaded) {
      window.cloudinary.openUploadWidget(
        {
          cloud_name: cloudName,
          upload_preset: uploadPreset,
          tags: ["your-tag"], // Optional tags
        },
        (error, result) => {
          if (result && result.event === "success") {
            handleUpload(result);
          } else if (error) {
            console.error("Upload error:", error);
          }
        }
      );
    } else {
      console.error("Cloudinary script not loaded or Cloudinary not defined");
    }
  };

  return (
    <div className="flex w-full h-[100vh] gap-10">
      <AdminNavbar />
      <span className="img absolute w-full h-full m-0 -z-0"></span>
      <div className="text-black w-full flex justify-center items-center p-4 relative">
        <div className="image-uploader z-10">
          <button onClick={uploadImage}>Upload Image</button>
        </div>
      </div>
    </div>
  );
};

export default ImageUploader;

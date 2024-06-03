import React, { useEffect, useState } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import { useNavigate } from "react-router-dom";
import "./fileupload.css";

function FileUpload() {
  const [title, setTitle] = useState("");
  const [file, setFile] = useState(null);
  const [allImage, setAllImage] = useState(null);
  const navigate = useNavigate();
  useEffect(() => {
    getPdf();
  }, []);

  const getPdf = async () => {
    try {
      const result = await axios.get("http://localhost:5000/get-files");
      setAllImage(result.data.data);
    } catch (error) {
      console.error("Error fetching files:", error);
    }
  };

  const submitImage = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("title", title);
    formData.append("file", file);

    try {
      const result = await axios.post(
        "http://localhost:5000/upload-files",
        formData,
        {
          headers: { "Content-Type": "multipart/form-data" },
        }
      );
      if (result.data.status === "ok") {
        alert("Uploaded Successfully!!!");
        getPdf();
      }
      setFile(null);
      setTitle("");
      e.target.reset();
      navigate("/table")
    } catch (error) {
      console.error("Error uploading file:", error);
    }
  };

  return (
    <div className="App container mt-5">
      <div className="d-flex justify-content-center mt-5">
        <form className="formStyle" onSubmit={submitImage}>
          <h1 id="header_1" className="form-header mb-3 text-center">
            Upload PDF in React
          </h1>
          <div className="row justify-content-center">
            <div className="form-group">
              <label htmlFor="">Title</label>
              <input
                type="text"
                className="form-control w-100"
                placeholder="Title"
                required
                onChange={(e) => setTitle(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label className="" htmlFor="">Browse</label>
              <input
                type="file"
                className="form-control"
                accept="application/pdf"
                required
                onChange={(e) => setFile(e.target.files[0])}
              />
            </div>
            <div className="text-center">
              <button className="btn submitbutton btn-primary" type="submit">
                Submit
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default FileUpload;

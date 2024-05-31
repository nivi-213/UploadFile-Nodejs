import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import axios from "axios";
function App() {
  const [file, setFile] = useState(null);
  const [title, setTitle] = useState("");

  const submitImage = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("title", title);
    formData.append("file", file);

    console.log(title, file);
    const result = await axios.post(
      "http://localhost:5000/upload-files",
      formData,
      {
        headers: { "Content-Type": "multipart/form-data" },
      }
    );
    console.log(result);
    // Reset form
    setFile(null);
    setTitle("");
    e.target.reset();
  };

  return (
    <div className="App">
      <div className="form-container">
        <form onSubmit={submitImage}>
          <h4>Upload PDF in React</h4>

          <div className="form-group">
            <input
              type="text"
              placeholder="Title"
              value={title}
              required
              className="form-control"
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>

          <div className="form-group">
            <input
              type="file"
              placeholder="Upload PDF"
              required
              className="form-control"
              accept="application/pdf"
              onChange={(e) => setFile(e.target.files[0])}
            />
          </div>

          <button className="btn btn-primary">Submit</button>
        </form>
      </div>
    </div>
  );
}

export default App;

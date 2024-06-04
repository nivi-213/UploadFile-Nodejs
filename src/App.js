// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import 'bootstrap/dist/css/bootstrap.min.css';

// function App() {
//   const [title, setTitle] = useState("");
//   const [file, setFile] = useState(null);
//   const [allImage, setAllImage] = useState(null);

//   useEffect(() => {
//     getPdf();
//   }, []);

//   const getPdf = async () => {
//     try {
//       const result = await axios.get("http://localhost:5000/get-files");
//       setAllImage(result.data.data);
//     } catch (error) {
//       console.error("Error fetching files:", error);
//     }
//   };

//   const submitImage = async (e) => {
//     e.preventDefault();
//     const formData = new FormData();
//     formData.append("title", title);
//     formData.append("file", file);

//     try {
//       const result = await axios.post(
//         "http://localhost:5000/upload-files",
//         formData,
//         {
//           headers: { "Content-Type": "multipart/form-data" },
//         }
//       );
//       if (result.data.status === "ok") {
//         alert("Uploaded Successfully!!!");
//         getPdf();
//       }
//       setFile(null);
//       setTitle("");
//       e.target.reset();
//     } catch (error) {
//       console.error("Error uploading file:", error);
//     }
//   };

//   const showPdf = (pdf) => {
//     window.open(`http://localhost:5000/files/${pdf}`, "_blank", "noreferrer");
//   };

//   const deletePdf = async (id) => {
//     try {
//       const result = await axios.delete(`http://localhost:5000/delete-file/${id}`);
//       if (result.data.status === "ok") {
//         alert("Deleted Successfully!!!");
//         getPdf();
//       }
//     } catch (error) {
//       console.error("Error deleting file:", error);
//     }
//   };

//   return (
//     <div className="App container mt-5">
//       <form className="formStyle" onSubmit={submitImage}>
//       <h1 id="header_1" className="form-header mb-3">Upload PDF in React</h1>
//       <div className="row">
//                 <div className="col-md-6">
//         <div className="form-group">
//           <input
//             type="text"
//             className="form-control"
//             placeholder="Title"
//             required
//             onChange={(e) => setTitle(e.target.value)}
//           />
//         </div>
//         <div className="form-group">
//           <input
//             type="file"
//             className="form-control"
//             accept="application/pdf"
//             required
//             onChange={(e) => setFile(e.target.files[0])}
//           />
//         </div>
//         <button className="btn btn-primary" type="submit">
//           Submit
//           </button>
//           </div>
//     </div>
//       </form>
//       <div className="uploaded mt-5">
//         <h4>Uploaded PDFs:</h4>
//         <div className="table-responsive">
//           <table className="table table-bordered">
//             <thead className="thead-light">
//               <tr>
//                 <th>Title</th>
//                 <th>Actions</th>
//               </tr>
//             </thead>
//             <tbody>
//               {allImage == null
//                 ? (
//                   <tr>
//                     <td colSpan="2" className="text-center">No PDFs uploaded yet.</td>
//                   </tr>
//                 )
//                 : allImage.map((data) => (
//                   <tr key={data._id}>
//                     <td>{data.title}</td>
//                     <td>
//                       <button
//                         className="btn btn-primary mr-2"
//                         onClick={() => showPdf(data.pdf)}
//                       >
//                         Show PDF
//                       </button>
//                       <button
//                         className="btn btn-danger ms-3"
//                         onClick={() => deletePdf(data._id)}
//                       >
//                         Delete PDF
//                       </button>
//                     </td>
//                   </tr>
//                 ))}
//             </tbody>
//           </table>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default App;

import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import FileUpload from "./components/FileUpload";
import Table from "./components/Table";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div>
      <Navbar/>
    <Router>
      <Routes>
        <Route path="/table" element={<Table />} />
        <Route path="/upload" element={<FileUpload />} />
          <Route path="/edit" element={<FileUpload />} />
   
      </Routes>
      </Router>
      </div>
  );
}

export default App;

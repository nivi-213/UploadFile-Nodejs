
import React, { useEffect, useState } from "react";
import axios from "axios";
import "./table.css"
function Table() {
    const [allImage, setAllImage] = useState(null);
    
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
    const showPdf = (pdf) => {
        window.open(`http://localhost:5000/files/${pdf}`, "_blank", "noreferrer");
      };
    
      const deletePdf = async (id) => {
        try {
          const result = await axios.delete(
            `http://localhost:5000/delete-file/${id}`
          );
          if (result.data.status === "ok") {
            alert("Deleted Successfully!!!");
            getPdf();
          }
        } catch (error) {
          console.error("Error deleting file:", error);
        }
      };
  return (
    <div className="container mt-3">
      <div className="uploaded mt-5">
        <h4 className="text-center uploadpdfs">Uploaded PDFs:</h4>
        <div className="table-responsive">
          <table className="table  text-center table-striped ">
            <thead className="thead-light">
              <tr>
                <th>Title</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {allImage == null ? (
                <tr>
                  <td colSpan="2" className="text-center">
                    No PDFs uploaded yet.
                  </td>
                </tr>
              ) : (
                allImage.map((data) => (
                  <tr key={data._id}>
                    <td>{data.title}</td>
                    <td>
                      <button
                        className="btn btn-primary mr-2"
                        onClick={() => showPdf(data.pdf)}
                      >
                        Show PDF
                      </button>
                      <button
                        className="btn btn-danger ms-3"
                        onClick={() => deletePdf(data._id)}
                      >
                        Delete PDF
                      </button>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Table;

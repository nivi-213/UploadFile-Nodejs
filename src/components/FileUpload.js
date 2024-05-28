import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { uploadFile } from '../components/Action';

const FileUpload = () => {
  const [file, setFile] = useState(null);
  const dispatch = useDispatch();
  const fileState = useSelector((state) => state.file);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleUpload = () => {
    if (file) {
      dispatch(uploadFile(file));
    }
  };

  return (
    <div>
      <input type="file" onChange={handleFileChange} />
      <button onClick={handleUpload}>Upload</button>
      {fileState.loading && <p>Loading...</p>}
      {fileState.error && <p>Error: {fileState.error}</p>}
      {fileState.data && <p>Success: {JSON.stringify(fileState.data)}</p>}
    </div>
  );
};

export default FileUpload;


import { BrowserRouter ,  Routes,Route } from "react-router-dom";
import FileUpload from "./components/FileUpload";
import Table from "./components/Table";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div>
       <Navbar/>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<FileUpload/>} />
          <Route path="/table" element={<Table />} />
          
        </Routes>
      </BrowserRouter>
     
    </div>
  );
}

export default App;

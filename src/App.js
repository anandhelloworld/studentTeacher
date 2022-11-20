import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import { Button } from "reactstrap";
import Sidebar from "./components/Sidebar/Sidebar";
import Homepage from "./pages/Homepage";
import Student from "./pages/Student";
import Mentor from "./pages/Mentor";
function App() {
  return (
    <BrowserRouter>
      <div className="home-container">
        <div className="sidebar">
          <Sidebar />
        </div>

        <div className="content">
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/students" element={<Student />} />
            <Route path="/mentors" element={<Mentor />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;

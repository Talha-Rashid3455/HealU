import React from "react";
import { Route,Routes } from "react-router-dom";
import Home from "./pages/Home";
import Nurses from "./pages/Nurses";
import Doctors from "./pages/Doctors";


export default function App() {
  return (
      <div className="h-screen flex items-center justify-center">
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/Home" element={<Home/>} />
            {/* <Route path="/Doctors" element={<Doctors/>} /> */}
            <Route path="/Nurses" element={<Nurses/>} />
            {/* <Route path="/Indoor Patients" element={<IndoorPatients/>} />
            <Route path="/Doctors" element={<Doctors/>} />
            {/* <Route path="/Nurses" element={<Nurses/>} />
            <Route path="/Indoor Patients" element={<IndoorPatients/>} />
            <Route path="/Outdoor Patients" element={<OutdoorPatients/>} /> */}
          </Routes>
      </div>
  );
}

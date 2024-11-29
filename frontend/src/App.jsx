import React from "react";
import { Route,Routes } from "react-router-dom";
import Home from "./pages/Home";
import Nurses from "./pages/Nurses";
import Doctors from "./pages/Doctors";
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";
import ForgetPage from "./pages/ForgetPage";
import IndoorPatient from "./pages/IndoorPatient";

export default function App() {
  return (
      <div className="h-screen flex items-center justify-center">
          <Routes>
            <Route path="/" element={<LoginPage/>} />
            <Route path="/Home" element={<Home/>} />
            <Route path="/Doctors" element={<Doctors/>} />
            <Route path="/Nurses" element={<Nurses/>} />
            <Route path="/login" element={<LoginPage/>} />
            <Route path="/signup" element={<SignupPage/>} />
            <Route path="/forget-password" element={<ForgetPage/>} />
            <Route path="/indoor-patients" element={<IndoorPatient/>} />
            

            
          </Routes>
      </div>
  );
}

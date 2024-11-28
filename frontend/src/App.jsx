import React from "react";
import { Routes, Route } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";
import ForgetPage from "./pages/ForgetPage";
import Home from "./pages/Home";
import Nurses from "./pages/Nurses";
import Doctors from "./pages/Doctors";


function App() {
  return (
      <div className="h-screen flex items-center justify-center">
          <Routes>
            <Route path="/" element={<Home/>} />                
            <Route path="/login" element={<LoginPage />} />
            <Route path="/signup" element={<SignupPage />} />
            <Route path="/forget-password" element={<ForgetPage />} />
            <Route path="/Home" element={<Home/>} />
            <Route path="/Doctors" element={<Doctors/>} />
            <Route path="/Nurses" element={<Nurses/>} />
            
          </Routes>
      </div>
  );

}

export default App;

import React from "react";
import { Routes, Route } from "react-router-dom";
import SignupPage from "./pages/SignupPage";
import ForgetPage from "./pages/ForgetPage";
import Home from "./pages/Home";
import Nurses from "./pages/Nurses";
import Doctors from "./pages/Doctors";
import LoginPage from "./pages/LoginPage";
import IndoorPatient from "./pages/IndoorPatient";
import AddDoctor from "./pages/AddDoctor"
import AddNurse from "./pages/AddNurse";
import Newpage from "./pages/new_page";
import Chatbot from "./pages/Chatbot";
import OutdoorPatient from "./pages/OutdoorPatient";

function App() {
  return (
      <div className="h-screen  flex items-center justify-center">
          <Routes>
            <Route path="/" element={<LoginPage/>} />                
            <Route path="/login" element={<LoginPage />} />
            <Route path="/signup" element={<SignupPage />} />
            <Route path="/forget-password" element={<ForgetPage />} />
            <Route path="/Home" element={<Home/>} />
            <Route path="/Doctors" element={<Doctors/>} />
            <Route path="/Add-Doctor" element={<AddDoctor />} />
            <Route path="/Nurses" element={<Nurses/>} />
            <Route path="/Add-Nurse" element={<AddNurse />} />
            <Route path="/forget-password" element={<ForgetPage/>} />
            <Route path="/indoor-patients" element={<IndoorPatient/>} />
            <Route path="/outdoor-patients" element={<OutdoorPatient/>} />
            <Route path="/newpage" element={<Newpage/>} />
            <Route path="/newpage/chatbot" element={<Chatbot/>} />
          </Routes>
      </div>
  );

}

export default App;

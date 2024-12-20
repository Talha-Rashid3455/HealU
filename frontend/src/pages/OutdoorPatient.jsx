import React from "react";
import SideBar from "../components/SideBar";
import NavBar from "../components/NavBar";
import IndoorPatientsComp from "../components/IndoorPatientsComp";
import logo5 from "../assets/logo5.png";
import DoctorPic from "../assets/DoctorPic.png"; // Assuming you're using DoctorPic as the profile image
import { useState,useEffect } from "react";
import axios from "axios";

const OutdoorPatient = () => {
  const [data,setData] = useState([]);
  useEffect(() => {
    // Call the FastAPI endpoint
    axios
      .get("http://localhost:8000/get_data") // Replace with your FastAPI URL
      .then((response) => {
        setData(response.data); // Access the "message" field
        console.log(response.data)
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);



  return (
    <div className="flex-1 relative bg-gradient-to-r from-[#0098B9] to-[#003844] h-screen">
      {/* Sidebar */}
      <div className="absolute top-4 h-full w-64 text-white">
        <SideBar />
      </div>

      {/* Main Content */}
      <div className="flex-1 relative left-60 h-screen w-[calc(100%-15rem)]">
        {/* Navbar */}
        <div className="flex-1 absolute h-16 w-full">
          <NavBar />
        </div>

        {/* Content Grid */}
        <div className="relative w-[calc(100%-6rem)] top-32 left-10 h-[calc(100%-10rem)] p-6 bg-white border-2 border-gray-300 rounded-lg">
          {/* Logo */}
          <div className="absolute w-20 h-20 top-4 -left-12 bg-white rounded-l-full">
            <img className="absolute top-4 left-4 h-12 w-12 flex items-center" src={logo5} alt="logo5" />
          </div>

          {/* Total Patients Count */}
          <div className="text-xl font-semibold text-gray-800 ml-10 ">
            <p>Available Outdoor Patients: {data.filter(patient => patient.designation === "outdoor patient").length}</p>
          </div>

          {/* Patient Visits List */}
          <div className="left-40 ml-10 grid grid-cols-3 overflow-y-scroll h-96 auto-rows-auto  gab-x-4 gap-y-6">
            {data.map((patient) => ( patient.designation==="outdoor patient" &&
              <IndoorPatientsComp
                key={patient.id}
                Name={patient.name}
                City={patient.city}
                Age={patient.age}
                Gender={patient.gender}
                Contact={patient.contact}
                Email={patient.email}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default OutdoorPatient;

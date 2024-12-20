import React from "react";
import SideBar from "../components/SideBar";
import NavBar from "../components/NavBar";
import DashboardComp from "../components/DashboardComp";
import logo5 from  "../assets/logo5.png"
import DoctorsComp from "../components/DoctorsComp";
import DoctorPic from "../assets/DoctorPic.png"
import AddDoctor from "./AddDoctor";
import { useNavigate } from "react-router-dom";
import { useState,useEffect } from "react";
import axios from "axios";

const Doctors = () => {
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
      const navigate = useNavigate()
    return (
        <div className="flex-1 relative  bg-gradient-to-r from-[#0098B9] to-[#003844]  h-full">
  {/* Sidebar */}
  <div className="absolute top-4 h-full w-64  text-white">
    <SideBar />
  </div>

  {/* Main Content */}
  <div className="flex-1 relative  left-60  h-full w-[calc(100%-15rem)] ">
    {/* Navbar */}
    <div className=" flex-1 absolute  h-16  w-full  ">
      <NavBar />
    </div>

    {/* Content Grid */}
    <div className="relative w-[calc(100%-6rem)]  top-32 left-10  h-[calc(100%-10rem)] p-6 bg-white border-2 border-gray-300 rounded-lg">
    <div className="text-xl font-semibold text-gray-800  ml-10">
      <p>Available Nurses: {data.filter(patient => patient.designation === "nurse").length}</p>
      </div>
      <div className="absolute w-20 h-20  top-4 -left-12 bg-white  rounded-l-full">
        <img className='absolute top-4 left-4  h-12 w-12 flex items-center' src={logo5} alt='logo5' />
      </div>
      <div className=" left-40 ml-10 grid grid-cols-3 overflow-y-scroll h-96 auto-rows-auto  gab-x-4 gap-y-6 ">
         {data && data.map((doc) => (doc.designation==='doctor' &&<DoctorsComp  key={doc.id}
      ProfilePicture={doc.profilepicture}
      Rating={doc.rating}
      Name={doc.name}
      Specialization={doc.specialization}
      Qualifications={doc.qualifications}
      AvailabilityTime={doc.availabilitytime}
      AvailabilityDays={doc.availabilitydays} 
      />))}
      </div>
    </div>
  </div> 
</div>

    )

}

export default Doctors;
import React from "react";
import SideBar from "../components/SideBar";
import NavBar from "../components/NavBar";
import IndoorPatientsComp from "../components/IndoorPatientsComp";
import logo5 from "../assets/logo5.png";
import DoctorPic from "../assets/DoctorPic.png"; // Assuming you're using DoctorPic as the profile image

const IndoorPatient = () => {
  // Sample data for patient visits with visited count and new patient flag
  const patientVisit = {
    ProfilePicture: DoctorPic,
    Name: "John Doe",
    AppointmentTime: "10:00 AM - 11:00 AM",
    VisitReason: "Routine Checkup",
    VisitedCount: 5, // Number of visits
    IsNewPatient: false, // Boolean to show if the patient is new
  };

  // Sample data for multiple patient visits
  const patientList = [];
  for (let i = 0; i <= 20; i++) {
    // Dynamically changing visited count and new patient flag for the demo
    const isNewPatient = i % 2 === 0;
    const visitedCount = isNewPatient ? 1 : Math.floor(Math.random() * 10);

    patientList.push({
      ...patientVisit,
      id: i,
      IsNewPatient: isNewPatient,
      VisitedCount: visitedCount,
    });
  }

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
            <p>Available Indoor Patients: {patientList.length}</p>
          </div>

          {/* Patient Visits List */}
          <div className="left-40 ml-10 grid grid-cols-3 overflow-y-scroll h-96 auto-rows-auto  gab-x-4 gap-y-6">
            {patientList.map((patient) => (
              <IndoorPatientsComp
                key={patient.id}
                ProfilePicture={patient.ProfilePicture}
                Name={patient.Name}
                AppointmentTime={patient.AppointmentTime}
                VisitReason={patient.VisitReason}
                VisitedCount={patient.VisitedCount}
                IsNewPatient={patient.IsNewPatient}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default IndoorPatient;

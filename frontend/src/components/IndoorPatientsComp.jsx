import React from "react";
import DoctorPic from "../assets/DoctorPic.png"

const IndoorPatientsComp = ({
  Name,
  City,
  Age,
  Gender,
  Contact,
  Email,
}) => {

  return (
    <div className="bg-white p-4 rounded-lg shadow-lg border border-gray-200 w-72">
      <div className="flex flex-col items-center">
        {/* Profile Picture */}
        <img
          className="h-24 w-24 rounded-full object-cover mb-4 border-4 border-teal-500"
          src={DoctorPic}
          alt="Patient Profile"
        />

        {/* Patient Information */}
        <h3 className="text-lg font-semibold text-center">{Name}</h3>

        {/* Appointment Time */}
        <p className="text-sm text-gray-500 text-center">
          <strong>City:</strong> {City}
        </p>

        {/* Reason for Visit */}
        <p className="mt-2 text-sm text-gray-600 text-center">
          <strong>Age:</strong> {Age}
        </p>

        {/* Visited Count */}
        <p className="mt-2 text-sm text-gray-600 text-center">
          <strong>Gender: </strong> {Gender} 
        </p>

        {/* New Patient Badge */}
        {Email && (
          <div className="mt-2 bg-teal-500 text-white text-xs py-1 px-3 rounded-full">
            {Email}
          </div>
        )}
      </div>
    </div>
  );
};

export default IndoorPatientsComp;

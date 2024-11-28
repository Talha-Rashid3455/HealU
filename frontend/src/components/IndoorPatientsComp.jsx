import React from "react";

const IndoorPatientsComp = ({
  ProfilePicture,
  Name,
  AppointmentTime,
  VisitReason,
  VisitedCount,
  IsNewPatient,
}) => {
  return (
    <div className="bg-white p-4 rounded-lg shadow-lg border border-gray-200 w-72">
      <div className="flex flex-col items-center">
        {/* Profile Picture */}
        <img
          className="h-24 w-24 rounded-full object-cover mb-4 border-4 border-teal-500"
          src={ProfilePicture}
          alt="Patient Profile"
        />

        {/* Patient Information */}
        <h3 className="text-lg font-semibold text-center">{Name}</h3>

        {/* Appointment Time */}
        <p className="text-sm text-gray-500 text-center">
          <strong>Appointment Time:</strong> {AppointmentTime}
        </p>

        {/* Reason for Visit */}
        <p className="mt-2 text-sm text-gray-600 text-center">
          <strong>Reason for Visit:</strong> {VisitReason}
        </p>

        {/* Visited Count */}
        <p className="mt-2 text-sm text-gray-600 text-center">
          <strong>Visited: </strong> {VisitedCount} times
        </p>

        {/* New Patient Badge */}
        {IsNewPatient && (
          <div className="mt-2 bg-teal-500 text-white text-xs py-1 px-3 rounded-full">
            New Patient
          </div>
        )}
      </div>
    </div>
  );
};

export default IndoorPatientsComp;

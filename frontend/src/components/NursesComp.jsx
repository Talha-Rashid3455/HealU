import React from "react";

const NurseComp = (props) => {
  return (
    <div className="relative  w-52 h-44 shadow-lg rounded-lg bg-white border-2">
      <div className="flex flex-col">
      <div className="flex flex-row">
        {/* Profile Picture */}
        <img
          className="w-32 h-24 p-2 border-r-2 border-y-2 rounded-br-[50px] bg-white border-yellow-400 rounded-lg"
          src={props.ProfilePicture}
          alt="Profile"
        />
        <h1 className="text-yellow-400 text-sl font-bold ml-16">{props.Rating}★</h1>
        </div>  
        {/* Content */}
        <div className="flex flex-row">
          <div className="flex flex-col">
            <h1 className="text-blue-600 text-xl font-serif">{props.Name}</h1>
            <h1 className="text-yellow-400 text-sl font-bold">
              {props.Specialization}
            </h1>
            <h1 className="text-yellow-400 text-sm">
            {props.Qualifications}
            </h1>
          </div>
          <div className="flex flex-col absolute left-32 top-28">
          <h1 className="text-blue-600 text-sm">{props.AvailabilityDays}</h1>
            <h1 className="text-blue-600 text-sm">{props.AvailabilityTime}</h1>
            
          </div>
          </div>
        
      </div>
    </div>
  );
};

export default NurseComp;

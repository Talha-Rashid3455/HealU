import React from "react";
import Header2 from "../components/Header2";
import DocImage from "../assets/Docimage.jpg";
import AppointmentsDisplay from "../components/AppointmentsDisplay";
import Icon1 from "../assets/icon_1.png"
import Icon2 from "../assets/icon_2.png"
import Icon4 from "../assets/icon_4.png"
import Icon5 from "../assets/images.png"
import IconWithData from "../components/IconWithData";
import LineChart from "../components/LineChart";



function Newpage() {
  const appointments = [
    { date: "10", name: "Talha", city: "New York", rating: 5 },
    { date: "12", name: "Ali", city: "Chicago", rating: 4 },
    { date: "20", name: "Sara", city: "Los Angeles", rating: 5 },
  ];

  return (
    <div className=" justify-start">
      <Header2  />
      <div className="h-52">
      <div className="absolute w-2/5 h-52 rounded-lg shadow-lg left-20 m-4 top-24 flex flex-row border-2 border-gray-200">
        <img className="m-6 w-64 h-40 rounded-lg" src={DocImage} alt="" />
        <div className="flex flex-col mt-10 ml-2">
          <h1 className="ml-5 mt-10">You need a Doctor?</h1>
          <button className="text-sm rounded-full border-2 bg-custompurple w-48 h-12">
            Find Doctor Now
          </button>
        </div>
      </div>
      <div className="absolute w-2/5 h-52 rounded-lg shadow-lg right-20 m-4 top-24 flex flex-col border-2 border-gray-200">
        <div className="flex flex-row mt-6 ml-2">
          <h1 className="ml-5">Your Appointment Schedule</h1>
          <button className="ml-20 text-sm rounded-full border-2 bg-custompurple w-48 h-12">
            New Appointment
          </button>
        </div>
        <div className="border-t-2 border-gray-500 my-3 mx-8 flex  flex-row space-x-20">
          {appointments.map((appointment, key) => (
            <AppointmentsDisplay key={key} {...appointment} />
          ))}
        </div>
      </div>
      </div>
      <div className="w-screen h-64 ml-40 mt-20 flex flex-row">
      <div >

            <h1 className="font-bold text-sm font-serif">Find Specialist</h1>
            <h1 className="text-sm font-serif">Find specialist around you</h1>
            <IconWithData icon={Icon1} text1='Dentist' text2='97 Available' />
            <IconWithData icon={Icon2} text1='Dentist' text2='97 Available' />
            <IconWithData icon={Icon4} text1='Dentist' text2='97 Available' />
      </div>
      <div className=" border-2 border-gray-200 shadow-lg  rounded-3xl ml-10 w-72 h-64 flex items-center flex-col space-y-* ">
        <img className='w-40 h-32 mt-4 pb-2 border-b-2 border-gray-600 ' src={Icon5} alt=''/>
        <h1 className="text-xl font-semibold font-serif">Health Insurance</h1>
        <h1 className="text-sm">Stay Healthy</h1>
        <button className="border-2 bg-custompurple w-40 h-10 rounded-3xl text-white">Apply Now</button>
      </div >
        <LineChart className=' ' />
      </div>
    </div>
  );
}

export default Newpage;

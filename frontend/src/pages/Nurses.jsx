import React from "react";
import SideBar from "../components/SideBar";
import NavBar from "../components/NavBar";
import DashboardComp from "../components/DashboardComp";
import logo5 from  "../assets/logo5.png"
import NurseComp from "../components/NursesComp";
// import NursePic from "../assets/DoctorPic.png"

const Nurses = () => {
    const nurse={
      ProfilePicture:logo5,
      Rating:4.5,
      Name:'Talha Rashid',
      Specialization:'Anesthesiology',
      Qualifications:['MBBS','FCPS','FIPS'],
      AvailabilityTime:'10:00am    -    05:00pm',
      AvailabilityDays:'Sun - Fri' };
      const nurseList=[];
      for (let i=0; i<=30;i++){  
        nurseList.push({ ...nurse, id: i })
      }
      console.log(nurseList)
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
      <div className="flex flex-row">
      <h1 className="text-blue-600 ml-10 mt-5 text-xl mb-5">Available Nurses </h1>
      <h1 className="text-blue-600 ml-3 mt-5 text-3xl mb-5 font-bold"> 22</h1>
      </div>
      <div className="absolute w-20 h-20  top-4 -left-12 bg-white  rounded-l-full">
        <img className='absolute top-4 left-4  h-12 w-12 flex items-center' src={logo5} alt='logo5' />
      </div>
      <div className=" left-40 ml-10 grid grid-cols-3 overflow-y-scroll h-96 auto-rows-auto  gab-x-4 gap-y-6 ">
         {nurseList.map((nurs) => (<NurseComp  key={nurs.id}
      ProfilePicture={nurs.ProfilePicture}
      Rating={nurs.Rating}
      Name={nurs.Name}
      Specialization={nurs.Specialization}
      Qualifications={nurs.Qualifications}
      AvailabilityTime={nurs.AvailabilityTime}
      AvailabilityDays={nurs.AvailabilityDays} />))}
      </div>
    </div>
  </div> 
</div>

    )

}

export default Nurses;
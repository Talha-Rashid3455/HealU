import React from "react";
import SideBar from "../components/SideBar";
import NavBar from "../components/NavBar";
import DashboardComp from "../components/DashboardComp";
import logo3 from  "../assets/logo3.png"
import logo4 from  "../assets/logo4.png"
import logo5 from  "../assets/logo5.png"
import logo6 from  "../assets/logo6.png"


const Home = () => {
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
    <div className="absolute w-[calc(100%-6rem)]  top-32 left-10  h-[calc(100%-10rem)] p-6 bg-white border-2 border-gray-300 rounded-lg">
      <div className="absolute w-20 h-20  top-4 -left-12 bg-white  rounded-l-full">
        <img className='absolute top-4 left-4  h-12 w-12 flex items-center' src={logo6} alt='logo6' />
      </div>
      <div className="absolute left-32 grid grid-cols-3 grid-rows-3 gap-8 gap-y-6 ">
      <DashboardComp title="Available Doctors" logo={logo5} no={332} />
      <DashboardComp title="Available Nurses" logo={logo4} no={332} />
      <DashboardComp title="Indoor Patients" logo={logo3} no={332} />
      <DashboardComp title="Outdoor Patients" logo={logo3} no={332} />
      </div>
    </div>
  </div> 
</div>

    )

}

export default Home;
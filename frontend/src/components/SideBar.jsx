import React from 'react';
import { Link } from 'react-router-dom';
import logo from "../assets/logo.png";

const Sidebar = () => {
  return (
    <div className='absolute top-6'>
      <img  className=' w-32 mx-10 mb-20'  src={logo} alt='Logo'/>

      {/* Menu Links */}
      <Link
        to="/"
        className="bg-white border-2 hover:text-yellow-500 hover:border-yellow-500 text-[#0098B9] text-sm px-4 py-2 rounded-r-full mb-4 w-full flex items-center"
      >
        Home
      </Link>
      <Link
        to="/doctors"
        className="bg-white border-2 hover:text-yellow-500 hover:border-yellow-500 text-[#0098B9] text-sm px-4 py-2 rounded-r-full mb-4 w-full flex items-center"
      >
        Doctors
      </Link>
      <Link
        to="/nurses"
        className="bg-white border-2 hover:text-yellow-500 hover:border-yellow-500 text-[#0098B9] text-sm px-4 py-2 rounded-r-full mb-4 w-full flex items-center"
      >
        Nurses
      </Link>
      <Link
        to="/indoor-patients"
        className="bg-white border-2 hover:text-yellow-500 hover:border-yellow-500 text-[#0098B9] text-sm px-4 py-2 rounded-r-full mb-4 w-full flex items-center"
      >
        Indoor Patients
      </Link>
      <Link
        to="/outdoor-patients"
        className="bg-white border-2 hover:text-yellow-500 hover:border-yellow-500 text-[#0098B9] text-sm px-4 py-2 rounded-r-full mb-4 w-full flex items-center"
      >
        Outdoor Patients
      </Link>
    </div>
  );
};

export default Sidebar;

import React from "react";
import logo2 from '../assets/logo2.png'


const NavBar = () => {
    return (
        <nav className="flex justify-end items-center w-full h-full bg-transparent">
        <img className=" h-8 mt-6 mr-6 " src={logo2} alt="Logo2" />
      </nav>
    )
};

export default NavBar;
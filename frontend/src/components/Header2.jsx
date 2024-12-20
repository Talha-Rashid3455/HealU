import UpdatedButton from "../components/UpdatedButton";
import { FaHome } from "react-icons/fa";
import { MdOutlineSchedule } from "react-icons/md";
import { FaRegStar } from "react-icons/fa";
import { IoMdSettings } from "react-icons/io";
import Pic from "../assets/DoctorPic.png";

const Header2 = () => {
    return (
        <div className="fixed bg-custompurple w-screen h-20 top-0 left-0 border-2 rounded-3xl flex items-center justify-between px-8">
        {/* Left Section */}
        <h1 className="text-white text-lg font-bold">Doctor Appointment</h1>

        {/* Middle Section - Buttons */}
        <div className="flex space-x-8">
          <UpdatedButton text="Home" image={<FaHome />} />
          <UpdatedButton text="Schedule" image={<MdOutlineSchedule />} />
          <UpdatedButton text="Favorite" image={<FaRegStar />} />
          <UpdatedButton text="Settings" image={<IoMdSettings />} />
        </div>

        {/* Right Section - Profile Image */}
        <img
          className="w-12 h-12 rounded-full border-2 border-white"
          src={Pic}
          alt="Doctor"
        />
      </div>
    )
}



export default Header2;
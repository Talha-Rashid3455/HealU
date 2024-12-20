import React, { useState } from "react";
import Doctorimage from '../assets/doc.png'

const AddDoctor = () => {
    const [formData, setFormData] = useState({
        ProfilePicture: '',
        Rating: '',
        Name: '',
        Specialization: '',
        Qualifications: '',
        AvailabilityTime: '',
        AvailabilityDays: '',
    });
    const [image, setImage] = useState();

    const handleSubmit = (e) => {
        e.preventDefault();
    };

    const handleChange = (e) => {
        setFormData({
            ...formData, [e.target.id]: e.target.value
        });
    };

    const handlePicChange = (e) => {
        const file = e.target.files[0];
        setFormData({
            ...formData, [e.target.id]: file
        });
        // const reader = new FileReader()
        // reader.onloadend = () => {
        //     setImage(reader.result)
        // }
        // reader.readAsDataURL(file);
    };

    return (
        <div  >
        <div className="flex flex-row  w-screen h-screen  mb-24  h-full overflow-y-auto">
           
            <form className=" mt-24 w-96 mb-24 flex flex-col justify-start">
                <label htmlFor="ProfilePicture" className="block text-white text-3xl font-semibold">
                    ProfilePicture
                </label>
                <input
                    id="ProfilePicture"
                    type="file"
                    accept="image/*"
                    placeholder="ProfilePicture"
                    onChange={handlePicChange}
                    required
                    className="w-full px-5 py-4 text-sm border-2 border-white rounded-md bg-transparent text-white focus:outline-none focus:ring-2 focus:ring-teal-400"
                />
                <label htmlFor="Rating" className="block text-white text-3xl font-semibold ">
                    Rating
                </label>
                <input
                    id="Rating"
                    type="Number"
                    placeholder="Rating"
                    value={formData.Rating}
                    onChange={handleChange}
                    required
                    className="w-full px-5 py-4 text-sm border-2 border-white rounded-md bg-transparent text-white focus:outline-none focus:ring-2 focus:ring-teal-400"
                />
                {/* <label htmlFor="Name" className="block text-white text-3xl font-semibold">
                    Name
                </label>
                <input
                    id="Name"
                    type="text"
                    placeholder="Name"
                    value={formData.Name}
                    onChange={handleChange}
                    required
                    className="w-full px-5 py-4 text-sm border-2 border-white rounded-md bg-transparent text-white focus:outline-none focus:ring-2 focus:ring-teal-400"
                /> */}
                <label htmlFor="Specialization" className="block text-white text-3xl font-semibold">
                    Specialization
                </label>
                <input
                    id="Specialization"
                    type="text"
                    placeholder="Specialization"
                    value={formData.Specialization}
                    onChange={handleChange}
                    required
                    className="w-full px-5 py-4 text-sm border-2 border-white rounded-md bg-transparent text-white focus:outline-none focus:ring-2 focus:ring-teal-400"
                />
                <label htmlFor="Qualifications" className="block text-white text-3xl font-semibold">
                    Qualifications
                </label>
                <input
                    id="Qualifications"
                    type="text"
                    placeholder="Qualifications"
                    value={formData.Qualifications}
                    onChange={handleChange}
                    required
                    className="w-full px-5 py-4 text-sm border-2 border-white rounded-md bg-transparent text-white focus:outline-none focus:ring-2 focus:ring-teal-400"
                />
                <label htmlFor="AvailabilityTime" className="block text-white text-3xl font-semibold">
                    AvailabilityTime
                </label>
                <input
                    id="AvailabilityTime"
                    type="text"
                    placeholder="AvailabilityTime"
                    value={formData.AvailabilityTime}
                    onChange={handleChange}
                    required
                    className="w-full px-5 py-4 text-sm border-2 border-white rounded-md bg-transparent text-white focus:outline-none focus:ring-2 focus:ring-teal-400"
                />
                <label htmlFor="AvailabilityDays" className="block text-white text-3xl font-semibold">
                    AvailabilityDays
                </label>
                <input
                    id="AvailabilityDays"
                    type="text"
                    placeholder="AvailabilityDays"
                    value={formData.AvailabilityDays}
                    onChange={handleChange}
                    required
                    className="w-full px-5 py-4 text-sm border-2 border-white rounded-md bg-transparent text-white focus:outline-none focus:ring-2 focus:ring-teal-400"
                />
                {/* <button type="submit" className="block text-grey-600 text-3xl font-semibold mt-4 border-2 border-black w-48 ml-24 rounded-lg">
                    Submit
                </button> */}
            </form>
            <img src={Doctorimage} className="size-96 ml-24 mt-48 mb-10 " />
        </div>
        </div>
    );
};

export default AddDoctor;

import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; 
import HeartLogo from "../components/HeartLogo"; 
import DoctorsImage from "../components/DoctorsImage"; 
import AddDoctor from "./AddDoctor";

const SignupPage = () => {
    const navigate = useNavigate(); 
    const [formData, setFormData] = useState({
        name: "",
        city: "",
        age: "",
        gender: "",
        contact: "",
        email: "",
        password: "",
        confirmPassword: "",
        designation: "", 
    });

    // Handle input change
    const handleInputChange = (e) => {
        const { id, value } = e.target;
        setFormData({ ...formData, [id]: value });
    };

    // Handle form submission
    const handleSubmit =  async (e) => {
        e.preventDefault();

        console.log("Form submitted:", formData);
        const Data = new FormData();
        Data.append("name", formData.name);
        Data.append("city", formData.city);
        Data.append("age", formData.age);
        Data.append("gender", formData.gender);
        Data.append("contact", formData.contact);
        Data.append("designation", formData.designation);
        Data.append("email", formData.email);
        Data.append("password", formData.confirmPassword);
        
        const response = await fetch("http://localhost:8000/register", {
            method: "POST",
            body: Data,
        });

        if (response.ok) {
            const result = await response.json();
            console.log("Registration successful:", result);
            navigate("/login");
        } else {
            const errorData = await response.json();
            alert(`Registration failed: ${errorData.detail}`);
        }
        
    };

    return (
        <div className="h-full w-full flex bg-gradient-to-r from-teal-500 to-white overflow-y-auto relative">
            {/* Heart Logo - Top Left */}
        
            <HeartLogo /> {/* Using the HeartLogo component */}
        

            {/* Left Section - Signup Form */}
            <div className="w-full lg:w-1/2 flex flex-col justify-start pt-24 px-8 py-4">
                <form
                    onSubmit={handleSubmit}
                    className="w-full max-w-md mx-auto bg-transparent space-y-6"
                >
                    <h1 className="text-white text-3xl font-bold text-center mb-6">
                        Register
                    </h1>

                    {/* Name Input */}
                    <div className="space-y-2">
                        <label htmlFor="name" className="block text-white text-sm font-semibold">
                            Full Name
                        </label>
                        <input
                            id="name"
                            type="text"
                            placeholder="Full Name"
                            value={formData.name}
                            onChange={handleInputChange}
                            required
                            className="w-full px-4 py-2 text-sm border-2 border-white rounded-md bg-transparent text-white focus:outline-none focus:ring-2 focus:ring-teal-400"
                        />
                    </div>

                    {/* City Input */}
                    <div className="space-y-2">
                        <label htmlFor="city" className="block text-white text-sm font-semibold">
                            City
                        </label>
                        <input
                            id="city"
                            type="text"
                            placeholder="City"
                            value={formData.city}
                            onChange={handleInputChange}
                            required
                            className="w-full px-4 py-2 text-sm border-2 border-white rounded-md bg-transparent text-white focus:outline-none focus:ring-2 focus:ring-teal-400"
                        />
                    </div>

                    {/* Age Input */}
                    <div className="space-y-2">
                        <label htmlFor="age" className="block text-white text-sm font-semibold">
                            Age
                        </label>
                        <input
                            id="age"
                            type="number"
                            placeholder="Age"
                            value={formData.age}
                            onChange={handleInputChange}
                            required
                            className="w-full px-4 py-2 text-sm border-2 border-white rounded-md bg-transparent text-white focus:outline-none focus:ring-2 focus:ring-teal-400"
                        />
                    </div>

                    {/* Gender Select */}
                    <div className="space-y-2">
                        <label htmlFor="gender" className="block text-white text-sm font-semibold">
                            Gender
                        </label>
                        <select
                            id="gender"
                            value={formData.gender}
                            onChange={handleInputChange}
                            required
                            className="w-full px-4 py-2 text-sm border-2 border-teal-500 rounded-md bg-teal-500 text-white focus:outline-none focus:ring-2 focus:ring-teal-400"
                        >
                            <option value="">Select Gender</option>
                            <option value="Male">Male</option>
                            <option value="Female">Female</option>
                            <option value="Other">Other</option>
                        </select>
                    </div>

                    {/* Contact Input */}
                    <div className="space-y-2">
                        <label htmlFor="contact" className="block text-white text-sm font-semibold">
                            Contact Number
                        </label>
                        <input
                            id="contact"
                            type="text"
                            placeholder="Contact Number"
                            value={formData.contact}
                            onChange={handleInputChange}
                            required
                            className="w-full px-4 py-2 text-sm border-2 border-white rounded-md bg-transparent text-white focus:outline-none focus:ring-2 focus:ring-teal-400"
                        />
                    </div>

                    {/* Email Input */}
                    <div className="space-y-2">
                        <label htmlFor="email" className="block text-white text-sm font-semibold">
                            Email Address
                        </label>
                        <input
                            id="email"
                            type="email"
                            placeholder="Email Address"
                            value={formData.email}
                            onChange={handleInputChange}
                            required
                            className="w-full px-4 py-2 text-sm border-2 border-white rounded-md bg-transparent text-white focus:outline-none focus:ring-2 focus:ring-teal-400"
                        />
                    </div>

                    {/* Password Input */}
                    <div className="space-y-2">
                        <label htmlFor="password" className="block text-white text-sm font-semibold">
                            Password
                        </label>
                        <input
                            id="password"
                            type="password"
                            placeholder="Password"
                            value={formData.password}
                            onChange={handleInputChange}
                            required
                            className="w-full px-4 py-2 text-sm border-2 border-white rounded-md bg-transparent text-white focus:outline-none focus:ring-2 focus:ring-teal-400"
                        />
                    </div>

                    {/* Confirm Password Input */}
                    <div className="space-y-2">
                        <label htmlFor="confirmPassword" className="block text-white text-sm font-semibold">
                            Confirm Password
                        </label>
                        <input
                            id="confirmPassword"
                            type="password"
                            placeholder="Confirm Password"
                            value={formData.confirmPassword}
                            onChange={handleInputChange}
                            required
                            className="w-full px-4 py-2 text-sm border-2 border-white rounded-md bg-transparent text-white focus:outline-none focus:ring-2 focus:ring-teal-400"
                        />
                    </div>

                    {/* Designation Select */}
                    <div className="space-y-2">
                        <label htmlFor="designation" className="block text-white text-sm font-semibold">
                            Designation
                        </label>
                        <select
                            id="designation"
                            value={formData.designation}
                            onChange={handleInputChange}
                            required
                            className="w-full px-4 py-2 text-sm border-2 border-teal-500 rounded-md bg-teal-500 text-white focus:outline-none focus:ring-2 focus:ring-teal-400"
                        >
                            <option value="">Select Designation</option>
                            <option value="Doctor">Doctor</option>
                            <option value="Nurse">Nurse</option>
                            <option value="Indoor Patient">Indoor Patient</option>
                            <option value="Outdoor Patient">Outdoor Patient</option>
                        </select>
                    </div>
                    {formData.designation==="Doctor" &&  <AddDoctor /> }
                    {formData.designation==="Nurse" &&  <AddDoctor /> }
                    {/* Register Button */}
                    <div className="mt-6">
                        <button
                            type="submit"
                            onClick={handleSubmit} 
                            className="w-full px-4 py-2 text-sm font-semibold text-white bg-teal-500 rounded-md hover:bg-teal-600 focus:outline-none focus:ring-2 focus:ring-teal-400"
                        >
                            Register
                        </button>
                    </div>

                    {/* Link to Login Page */}
                    <div className="mt-4 text-center text-white text-sm">
                        <span>Already have an account? </span>
                        <a
                            href="/login"
                            className="text-red-400 hover:text-red-500 font-semibold"
                        >
                            Login here
                        </a>
                    </div>
                </form>
            </div>

            {/* Right Section - Doctors Illustration */}
            <div className="w-full lg:w-1/2 flex justify-center items-center py-8">
                <DoctorsImage /> {/* Using the DoctorsImage component */}
            </div>
        </div>
    );
};

export default SignupPage;

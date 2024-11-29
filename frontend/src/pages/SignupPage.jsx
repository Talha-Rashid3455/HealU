import React from "react";
import heartLogo from "../assets/heart.png"; // Heart logo
import doctorsImage from "../assets/doc.png"; // Doctors illustration

const SignupPage = () => {
    return (
        <div
            style={{
                height: "100vh",
                width: "100vw",
                display: "flex",
                background: "linear-gradient(to right, #009B9B, #FFFFFF)",
                overflow: "hidden",
                position: "relative",
            }}
        >
            {/* Heart Logo - Top Left */}
            <div
                style={{
                    position: "absolute",
                    top: "24px",
                    left: "24px",
                }}
            >
                <img
                    src={heartLogo}
                    alt="Heart Logo"
                    style={{
                        width: "150px",
                    }}
                />
            </div>

            {/* Left Section - Signup Form */}
            <div
                style={{
                    width: "50%",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    paddingLeft: "64px",
                }}
            >
                <form
                    style={{
                        width: "100%",
                        maxWidth: "400px",
                    }}
                >
                    <h1
                        style={{
                            color: "white",
                            fontSize: "36px",
                            fontWeight: "bold",
                            marginBottom: "40px",
                        }}
                    >
                        Sign Up
                    </h1>
                    {/* User Name Input */}
                    <div style={{ marginBottom: "30px" }}>
                        <label
                            htmlFor="username"
                            style={{
                                display: "block",
                                color: "white",
                                fontSize: "18px",
                                fontWeight: "600",
                                marginBottom: "8px",
                            }}
                        >
                            User Name
                        </label>
                        <input
                            id="username"
                            type="text"
                            placeholder="User Name"
                            style={{
                                width: "100%",
                                border: "none",
                                borderBottom: "2px solid white",
                                background: "transparent",
                                padding: "8px 0",
                                color: "white",
                                fontSize: "16px",
                                outline: "none",
                            }}
                        />
                    </div>
                    {/* Password Input */}
                    <div style={{ marginBottom: "30px" }}>
                        <label
                            htmlFor="password"
                            style={{
                                display: "block",
                                color: "white",
                                fontSize: "18px",
                                fontWeight: "600",
                                marginBottom: "8px",
                            }}
                        >
import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate for redirection
import HeartLogo from "../components/HeartLogo"; // Import HeartLogo component
import DoctorsImage from "../components/DoctorsImage"; // Import DoctorsImage component

const SignupPage = () => {
    const navigate = useNavigate(); // Initialize the useNavigate hook
    const [formData, setFormData] = useState({
        name: "",
        city: "",
        age: "",
        gender: "",
        contact: "",
        email: "",
        password: "",
        confirmPassword: "",
        designation: "", // New field for designation
    });

    // Handle input change
    const handleInputChange = (e) => {
        const { id, value } = e.target;
        setFormData({ ...formData, [id]: value });
    };

    // Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        // Here you can handle form submission (e.g., API call)
        // For now, just log the form data
        console.log("Form submitted:", formData);

        // Redirect to the login page after successful registration
        navigate("/login");
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
                            style={{
                                width: "100%",
                                border: "none",
                                borderBottom: "2px solid white",
                                background: "transparent",
                                padding: "8px 0",
                                color: "white",
                                fontSize: "16px",
                                outline: "none",
                            }}
                        />
                    </div>
                    {/* Confirm Password Input */}
                    <div style={{ marginBottom: "30px" }}>
                        <label
                            htmlFor="confirmPassword"
                            style={{
                                display: "block",
                                color: "white",
                                fontSize: "18px",
                                fontWeight: "600",
                                marginBottom: "8px",
                            }}
                        >
=======
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
                            style={{
                                width: "100%",
                                border: "none",
                                borderBottom: "2px solid white",
                                background: "transparent",
                                padding: "8px 0",
                                color: "white",
                                fontSize: "16px",
                                outline: "none",
                            }}
                        />
                    </div>
                    {/* Submit Button */}
                    <button
                        type="submit"
                        style={{
                            width: "120px",
                            backgroundColor: "#009B9B",
                            color: "white",
                            padding: "10px 0",
                            borderRadius: "8px",
                            border: "none",
                            fontWeight: "600",
                            fontSize: "16px",
                            cursor: "pointer",
                            boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
                            transition: "transform 0.2s ease, box-shadow 0.2s ease",
                        }}
                        onMouseOver={(e) =>
                            (e.target.style.transform = "scale(1.05)")
                        }
                        onMouseOut={(e) =>
                            (e.target.style.transform = "scale(1)")
                        }
                    >
                        Sign Up
                    </button>
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

                    {/* Register Button */}
                    <div className="mt-6">
                        <button
                            type="submit"
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
            <div
                style={{
                    width: "50%",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                }}
            >
                <img
                    src={doctorsImage}
                    alt="Doctors Illustration"
                    style={{
                        width: "350%",
                        maxWidth: "400px",
                        marginTop: "20px",
                    }}
                />
            <div className="w-full lg:w-1/2 flex justify-center items-center py-8">
                <DoctorsImage /> {/* Using the DoctorsImage component */}
            </div>
        </div>
    );
};

export default SignupPage;

import React from "react";
import heartLogo from "../assets/heart.png"; // Heart logo
import doctorsImage from "../assets/doc.png"; // Doctors illustration

const LoginPage = () => {
    return (
        <div className="h-screen w-screen flex bg-gradient-to-r from-[#009B9B] to-[#FFFFFF] relative overflow-hidden">
            {/* Heart Logo - Top Left */}
            <div className="absolute top-6 left-6">
                <img src={heartLogo} alt="Heart Logo" className="w-36" />
            </div>

            {/* Left Section - Login Form */}
            <div className="flex flex-col justify-center w-1/2 px-16">
                <form className="w-full max-w-md">
                    <h1 className="text-white text-4xl font-bold mb-10">Login</h1>
                    {/* User Name Input */}
                    <div className="mb-10">
                        <label
                            htmlFor="username"
                            className="block text-white text-lg font-semibold mb-2"
                        >
                            User Name
                        </label>
                        <input
                            id="username"
                            type="text"
                            placeholder="User Name"
                            className="w-full border-b-2 border-white bg-transparent py-2 text-white placeholder-white focus:outline-none focus:border-blue-300"
                        />
                    </div>
                    {/* Password Input */}
                    <div className="mb-10">
                        <label
                            htmlFor="password"
                            className="block text-white text-lg font-semibold mb-2"
=======
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import HeartLogo from "../components/HeartLogo"; // Import HeartLogo
import DoctorsImage from "../components/DoctorsImage"; // Import DoctorsImage
import Background from "../components/Background"; // Import Background

const LoginPage = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        // For now, just redirect to the dashboard or another page
        navigate("/dashboard"); // Update the route to wherever you want to redirect after login
    };

    return (
        <Background>
            <HeartLogo />
            <div className="flex flex-col justify-center items-center w-full p-8">
                <form
                    className="w-full max-w-sm space-y-6"
                    onSubmit={handleSubmit}
                >
                    <h1 className="text-4xl text-center text-white font-bold mb-8">
                        Login
                    </h1>
                    {/* Email Input */}
                    <div className="mb-4">
                        <label
                            htmlFor="email"
                            className="block text-white text-sm font-semibold"
                        >
                            Email
                        </label>
                        <input
                            id="email"
                            type="email"
                            placeholder="Enter your email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                            className="w-full p-2 mt-1 bg-transparent border-b-2 border-white text-white placeholder-white outline-none"
                        />
                    </div>

                    {/* Password Input */}
                    <div className="mb-6">
                        <label
                            htmlFor="password"
                            className="block text-white text-sm font-semibold"
                        >
                            Password
                        </label>
                        <input
                            id="password"
                            type="password"
                            placeholder="Password"
                            className="w-full border-b-2 border-white bg-transparent py-2 text-white placeholder-white focus:outline-none focus:border-blue-300"
                        />
                    </div>
                    {/* Submit Button */}
                    <button
                        type="submit"
                        className="w-32 bg-[#009B9B] text-white py-2 rounded-lg font-semibold text-lg shadow-lg hover:shadow-xl hover:scale-105 transition-transform"
                    >
                        Login
                    </button>
                    {/* Additional Links */}
                    <div className="flex justify-between mt-4">
                        <a
                            href="/signup"
                            className="text-white text-sm font-medium hover:text-yellow-400 transition-colors"
                        >
                            Create Account
                        </a>
                        <a
                            href="/forget-password"
                            className="text-white text-sm font-medium hover:text-yellow-400 transition-colors"
                        >
                            Forgot Password?
                        </a>
                    </div>
                </form>
            </div>

            {/* Right Section - Doctors Illustration */}
            <div className="flex justify-center items-center w-1/2">
                <img
                    src={doctorsImage}
                    alt="Doctors Illustration"
                    className="w-2/3 max-w-md mt-4"
                />
            </div>
        </div>
=======
                            placeholder="Enter your password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                            className="w-full p-2 mt-1 bg-transparent border-b-2 border-white text-white placeholder-white outline-none"
                        />
                    </div>

                    {/* Login Button */}
                    <button
                        type="submit"
                        className="w-full p-2 bg-teal-500 text-white rounded-lg shadow-lg hover:bg-teal-600 transition"
                    >
                        Login
                    </button>
                </form>

                {/* New Register Button */}
                <div className="mt-4 text-center">
                    <button
                        onClick={() => navigate("/signup")}
                        className="text-white-400 hover:text-teal-500 font-semibold"
                    >
                        New Register
                    </button>
                </div>

                {/* Forget Password Link */}
                <div className="mt-4 text-center">
                    <span className="text-white text-sm">Forgot your password? </span>
                    <button
                        onClick={() => navigate("/forget-password")}
                        className="text-white-400 hover:text-teal-500 font-semibold"
                    >
                        Reset it here
                    </button>
                </div>
            </div>
            <DoctorsImage />
        </Background>
    );
};

export default LoginPage;

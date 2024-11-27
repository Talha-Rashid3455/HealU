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
    );
};

export default LoginPage;

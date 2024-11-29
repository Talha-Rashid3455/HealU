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
        navigate("/home"); 
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
                        className="text-white-400 hover:underline font-semibold"
                    >
                        New Register
                    </button>
                </div>

                {/* Forget Password Link */}
                <div className="mt-4 text-center">
                    <span className="text-white text-sm">Forgot your password? </span>
                    <button
                        onClick={() => navigate("/forget-password")}
                        className="text-white-400 hover:underline font-semibold"
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

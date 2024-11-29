import React from "react";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";  // Import useNavigate for programmatic navigation
import heartLogo from "../assets/heart.png"; // Heart logo
import doctorsImage from "../assets/doc.png"; // Doctors illustration

const ForgetPage = () => {
    const [email, setEmail] = useState("");  // State to manage email input
    const navigate = useNavigate();  // Hook to navigate to Login page on submit

    const handleSubmit = (e) => {
        e.preventDefault();  // Prevent the default form submission
        // Handle form logic here (e.g., validating email, making API calls, etc.)
        // After successful handling, navigate to the login page
        navigate("/login");
    };

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

            {/* Left Section - Forget Password Form */}
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

                    onSubmit={handleSubmit}  // Handle form submission
                >
                    <h1
                        style={{
                            color: "white",
                            fontSize: "36px",
                            fontWeight: "bold",
                            marginBottom: "40px",
                        }}
                    >
                        Forget Password
                    </h1>
                    {/* Email/Username Input */}
                    <div style={{ marginBottom: "30px" }}>
                        <label
                            htmlFor="email"
                            style={{
                                display: "block",
                                color: "white",
                                fontSize: "18px",
                                fontWeight: "600",
                                marginBottom: "8px",
                            }}
                        >
                            Email
                        </label>
                        <input
                            id="email"
                            type="text"
                            type="email"  // Change to email type for better validation
                            placeholder="Enter your email"
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
                            value={email}  // Bind value to state
                            onChange={(e) => setEmail(e.target.value)}  // Update state on change
                            required  // Make the input field mandatory
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
                        Submit
                    </button>
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
                        width: "65%",
                        maxWidth: "400px",
                        marginTop: "20px",
                    }}
                />
            </div>
        </div>
    );
};

export default ForgetPage;

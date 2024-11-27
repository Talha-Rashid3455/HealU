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
            </div>
        </div>
    );
};

export default SignupPage;

import React from 'react';
import heartLogo from "../assets/heart.png"; // Heart logo

const HeartLogo = () => {
    return (
        <div style={{ position: "absolute", top: "24px", left: "24px" }}>
            <img
                src={heartLogo}
                alt="Heart Logo"
                style={{ width: "150px" }}
            />
        </div>
    );
};

export default HeartLogo;

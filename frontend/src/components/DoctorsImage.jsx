import React from 'react';
import doctorsImage from "../assets/doc.png"; // Doctors illustration

const DoctorsImage = () => {
    return (
        <div
            style={{
                width: "150%",
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
    );
};

export default DoctorsImage;

import React from 'react';

const Background = ({ children }) => {
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
            {children}
        </div>
    );
};

export default Background;

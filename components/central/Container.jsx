import React from "react";

const Container = ({ 
    children, 
    full 
}) => {
    const maxWidthClass = full ? "px-0" : "";

    return (
        <div className={`
            mx-auto 
            max-w-screen
            
            ${maxWidthClass}
        `}>
            {children}
        </div>
    );
};

export default Container;

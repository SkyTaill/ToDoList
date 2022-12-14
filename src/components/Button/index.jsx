
import React from 'react';
import "./index.css"

//(props)
const Button = ({ name, onClick, customClass }) => {
    return (
        <button

            className={`btn ${customClass ? customClass : ''}`}
            onClick={onClick}
        >
            {name}
        </button >

    );
};
//btn ${customClass ? customClass: ""}
export default Button;

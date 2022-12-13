
import React from 'react';
import "./index.css"

//(props)
const Button = ({ name, onClick }) => {
    return (
        <button
            type="button"
            className='btn'
            onClick={onClick}
        >
            {name}
        </button>

    )
}

export default Button;


import React from 'react';
import "./index.css"

//(props)
const ListItem = ({ todoName }) => {
    return (
        <div className='item'>
            {todoName}
        </div>

    )
}

export default ListItem;


import React from 'react';
import "./index.css"
import Button from '../Button';
//(props)

const ListItem = ({ todoName, remove }) => {
    return (
        <div className='forms' >
            <div className='items'>
                {todoName}
            </div>
            <Button
                name="remove"
                onClick={() => remove(todoName)}

                //тут мы как параметр задаем стиль для кнопки можем использовать наш или базовый если ничего не задать
                customClass="item_btn"
            />

        </div>

    )
}

export default ListItem;

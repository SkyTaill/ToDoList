
import React from 'react';
import './index.css';
import Input from '../Input';
import Button from "../Button";


class Form extends React.Component {



    render() {
        var { value, onChangee, name, onClick } = this.props;
        return (
            <div className='form'>
                <Input
                    value={value}
                    onChangee={onChangee}
                />
                <Button
                    name={name}
                    onClick={onClick}
                />
            </div>
        );
    }
}

export default Form;

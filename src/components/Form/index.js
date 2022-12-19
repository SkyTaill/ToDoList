
import React from 'react';
import './index.css';
import Input from '../Input';
import Button from "../Button";


class Form extends React.Component {

    constructor() {
        super();
        this.handleOpenFormClick = this.handleOpenFormClick.bind(this);
        this.handleCloseFormClick = this.handleCloseFormClick.bind(this);
        this.state = {
            hidden: true,

        }
    }

    handleOpenFormClick() {
        this.setState({
            hidden: true,
        });
    }

    handleCloseFormClick() {
        this.setState({
            hidden: false,
        });
    }

    render() {

        var { hidden } = this.state;

        let button;
        if (hidden) {
            button = <Button name="+" onClick={this.handleCloseFormClick} />;

        } else {
            button = <Button name="-" onClick={this.handleOpenFormClick} />;

        }


        return (
            <div>
                {button}
                <CheckForm
                    hidden={hidden}
                    value={this.props.value}
                    onChangee={this.props.onChangee}
                    name={this.props.name}
                    onClick={this.props.onClick}
                />
            </div>

        );
    }

}

function UserGreeting(props) {
    return null;
}

function GuestGreeting(props) {
    //return <h1>Welcome bwwwwack!</h1>;

    return (< div className='form' > <Input value={props.value} onChangee={props.onChangee} /> <Button name={props.name} onClick={props.onClick} /> </div >);

}
function CheckForm(props) {
    const hidden = props.hidden;

    if (hidden) {

        return <UserGreeting />;
    }
    return <GuestGreeting
        hidden={props.hidden}
        value={props.value}
        onChangee={props.onChangee}
        name={props.name}
        onClick={props.onClick}
    />;
}


export default Form;

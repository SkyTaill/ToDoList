
import React from 'react';
import './index.css';
import ListItem from '../ListItem';
import Form from '../Form';

class Main extends React.Component {
    constructor() {
        super();
        this.state = {
            // text: "hello",
            inputValue: "in",
            todoList: [],

        }
    }

    //при вызове данного метода в кнопке - происходит перерендеринг всего этого компонента
    // так как у нас меняется состояние и это тригерит компонент
    onClickBtn = () => {
        const { inputValue, todoList } = this.state;
        //console.log("dd", inputValue);
        this.setState({
            todoList: [inputValue, ...todoList],
            inputValue: "",
        })

    }

    //при вызове данного метода в кнопке - происходит перерендеринг всего этого компонента
    // так как у нас меняется состояние
    onChangesInput = (Event) => {
        // console.log("TCL ", Event.target.value);
        this.setState({
            inputValue: Event.target.value,
        });
    }

    onRemoveTodo = (todoName) => {
        const { todoList } = this.state;
        //получаем индекс по имени
        const todoIndex = todoList.findIndex((str) => str === todoName);
        console.log(todoIndex);
        const newTodoList = [...todoList.slice(0, todoIndex), ...todoList.slice(todoIndex + 1)]
        this.setState({
            todoList: newTodoList,

        })
    }

    render() {
        // const { text, inputValue } = this.state;
        var { inputValue, todoList } = this.state;
        return (
            <main>


                <Form
                    value={inputValue}
                    onChangee={this.onChangesInput}
                    name="add TODO"
                    onClick={this.onClickBtn}
                />

                <div className='table'>
                    {todoList.map((todoStr, id) => {
                        // console.log(id, todoStr)
                        return (
                            <ListItem

                                todoName={todoStr}
                                remove={this.onRemoveTodo}
                                //key не будет являться пропсом , он устанавливается на каждый элемент
                                key={id}
                            />)
                    })}

                </div>
            </main>

        );
    }
}

export default Main;

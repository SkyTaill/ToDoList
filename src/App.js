
import React from 'react';
import './App.css';
import Input from './components/Input';
import Button from "./components/Button";
import ListItem from './components/ListItem';
class App extends React.Component {
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



  render() {
    // const { text, inputValue } = this.state;
    var { inputValue, todoList } = this.state;
    return (
      <div>
        <h1>TODO list</h1>

        <div className='form'>
          <Input
            value={inputValue}
            onChangee={this.onChangesInput}
          />
          <Button
            name="add TODO"
            onClick={this.onClickBtn}
          />
        </div>

        <div className='table'>
          {todoList.map((todoStr) => {
            return (
              <ListItem
                todoName={todoStr}
              />)
          })}

        </div>
      </div>

    );
  }
}

export default App;

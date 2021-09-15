import React, { Component } from "react";
import ToDoItem from "./ToDoItem";

class App extends Component {
  constructor() {
    super();
    this.state = {
      todoInputs: [],
    };

    this.handleInput = this.handleInput.bind(this);
    this.handleCheckBox = this.handleCheckBox.bind(this);

  }
  handleInput(e) {
    if (e.keyCode === 13) {
      this.setState((prevState) => {
        return {
          todoInputs: [
            ...prevState.todoInputs,
            {id:prevState.todoInputs.length.toString(), task: e.target.value, isComplete: false},
          ],
        };
      });
    }
  }

  handleCheckBox(id){
    this.setState((prevState) => {
        const updatedToDos = prevState.todoInputs.map(todo => {
          if(todo.id === id){
            todo.isComplete = !todo.isComplete
          }else{
            return todo
          }
        })
        console.log("updatedToDos:", updatedToDos)
        return {
          todoInputs: updatedToDos
        }
    })

    
  }

  render() {
    console.log(this.state)
    const toDoList = this.state.todoInputs.map(todo =>
      <ToDoItem
        task={todo.task}
        id={todo.id}
        isComplete={todo.isComplete}
        handleCheckBox ={this.handleCheckBox}
      />
    );

    return (
      <div>
        <label htmlFor="todo">To do:</label>
        <input type="text" onKeyDown={this.handleInput} />
        {toDoList}
      </div>
    );
  }
}

export default App;

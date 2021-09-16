import React, { Component } from "react";
import ToDoItem from "./ToDoItem";

class App extends Component {
  constructor() {
    super();
    this.state = {
      todoInputs: [],
    };

    this.handleInput = this.handleInput.bind(this);
    this.handleChange = this.handleChange.bind(this);

  }
  handleInput(e) {
    if (e.keyCode === 13) {
      this.setState((prevState) => {
        return {
          todoInputs: [
            ...prevState.todoInputs,
            {id:prevState.todoInputs.length, task: e.target.value, isComplete: false},
          ],
        };
      });
    }
  }

  handleChange = id => {
    const updatedTodos = this.state.todoInputs.map(todo => { 
      if (todo.id === id) {
        todo.isComplete = !todo.isComplete;
      }
      return todo;
    });
    this.setState({todos:updatedTodos})
};

    

  render() {
    const toDoList = this.state.todoInputs.map((todo) =>
      <ToDoItem
        task={todo.task}
        key={todo.id}
        id={todo.id}
        isComplete={todo.isComplete}
        handleChange ={this.handleChange}
      />
    );

    return (
      <div>
        <label htmlFor="todo">To do:</label>
        <input type="text" name="todoInputs" onKeyDown={this.handleInput} />
        {toDoList}
      </div>
    );
  }
}

export default App;

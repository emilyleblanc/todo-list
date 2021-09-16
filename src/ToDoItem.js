import React, { Component } from "react";

class ToDoItem extends Component {
  render() {
    const completedStyles = {
      textDecoration: "line-through",
      fontStyle: "italic",
    };
    return (
      <div key={this.props.id}>
        <input
          type="checkbox"
          checked={this.props.isComplete}
          onChange={() => this.props.handleChange(this.props.id)}
        />
        <p style={this.props.isComplete ? completedStyles : null}>{this.props.task}</p>
      </div>
    );
  }
}

export default ToDoItem;

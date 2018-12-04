import React, { Component } from "react";
import List from "./List";
import TodoForm from "./TodoForm";

class Todolist extends Component {
  constructor(props) {
    super(props);
    this.state = {
      term: "",
      items: []
    };
  }
  render() {
    return (
      <div className="todo-body">
        <h1>Todo App</h1>
        <TodoForm
          onSubmit={this._onSubmit}
          onChange={this._onChange}
          value={this.state.term}
        />
        <List items={this.state.items} />
      </div>
    );
  }

  _onChange = event => {
    this.setState({
      term: event.target.value
    });
  };

  _onSubmit = event => {
    event.preventDefault();
    this.setState({
      items: [...this.state.items, this.state.term],
      term: ""
    });
  };
}

export default Todolist;

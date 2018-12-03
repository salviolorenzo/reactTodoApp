import React, { Component } from "react";
import List from "./List";

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
        <form onSubmit={this._onSubmit}>
          <input
            onChange={this._onChange}
            value={this.state.term}
            placeholder="Enter a new Task"
          />
          <input type="submit" value="Add" />
        </form>
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

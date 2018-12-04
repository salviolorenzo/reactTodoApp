import React, { Component } from "react";

function TodoForm(props) {
  return (
    <form onSubmit={props.onSubmit}>
      <input
        onChange={props.onChange}
        value={props.term}
        placeholder="Enter a new Task"
      />
      <input type="submit" value="Add" />
    </form>
  );
}

export default TodoForm;

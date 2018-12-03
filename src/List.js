import React from "react";

function List(props) {
  return (
    <ul className="list">
      {props.items.map((item, index) => {
        return (
          <li key={index} className="todo-item">
            {item}
          </li>
        );
      })}
    </ul>
  );
}

export default List;

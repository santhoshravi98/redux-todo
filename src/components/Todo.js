import React from "react";
import { connect } from "react-redux";
import cx from "classnames";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheckSquare,faWindowClose } from '@fortawesome/free-solid-svg-icons'
import { toggleTodo } from "../redux/actions";

const Todo = ({ todo, toggleTodo }) => (
  <li className="todo-item" onClick={() => toggleTodo(todo.id)}>
    {todo && todo.completed ? <FontAwesomeIcon icon={faWindowClose}/> : <FontAwesomeIcon icon={faCheckSquare} />}{" "}
    <span
      className={cx(
        "todo-item__text",
        todo && todo.completed && "todo-item__text--completed"
      )}
    >
      {todo.content}
    </span>
  </li>
);

// export default Todo;
export default connect(
  null,
  { toggleTodo }
)(Todo);

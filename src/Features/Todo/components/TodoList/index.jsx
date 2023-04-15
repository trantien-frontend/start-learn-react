import * as React from "react";
import PropTypes from "prop-types";
import "./style.scss";
import classNames from "classnames";

TodoList.propTypes = {
  todoList: PropTypes.array,
  onTodoClick: PropTypes.func,
};

function TodoList({ todoList = [], onTodoClick }) {
  const handelTodoClick = (todoItem, index) => {
    if (!onTodoClick) return;

    onTodoClick(todoItem, index);
  };
  return (
    <div>
      <ul className="todolist">
        {todoList.map((todoItem, index) => (
          <li
            onClick={() => handelTodoClick(todoItem, index)}
            key={todoItem.id}
          >
            {todoItem.title}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;

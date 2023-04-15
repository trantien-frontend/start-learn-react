import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import './style.scss';

TodoListRoute.propTypes = {
  todolist: PropTypes.array.isRequired,
  onChangeStatus: PropTypes.func,
};

function TodoListRoute({ todolist, onChangeStatus = null }) {
  const handleChangeStatus = (todoChange) => {
    if (!onChangeStatus) return;
    onChangeStatus(todoChange);
  };

  return (
    <>
      <ul className='todolist-Route'>
        {todolist.map((todo) => (
          <li
            onClick={() => handleChangeStatus(todo)}
            key={todo.id}
            className={classNames({
              completed: todo.status === 'completed',
              'todo-item': true,
            })}
          >
            {todo.title}
          </li>
        ))}
      </ul>
    </>
  );
}

export default TodoListRoute;

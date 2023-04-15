import React, { useEffect, useMemo, useState } from 'react';
import PropTypes from 'prop-types';
import {
  Route,
  useHistory,
  useLocation,
  useRouteMatch,
  Switch,
} from 'react-router-dom/cjs/react-router-dom';
import queryString from 'query-string';
import TodoListRoute from '../../components/TodoListRouter';
import TodoFormRoute from '../../components/TodoFormRouter';

ListRoutePage.propTypes = {};

const initTodoList = [
  {
    id: 1,
    title: 'Code',
    status: 'new',
  },
  {
    id: 2,
    title: 'Sleep',
    status: 'completed',
  },
  {
    id: 3,
    title: 'Eat',
    status: 'new',
  },
];

function ListRoutePage() {
  const location = useLocation();
  const history = useHistory();
  const match = useRouteMatch();

  const [todolist, setTodoList] = useState(initTodoList);
  const [filtered, setFiltered] = useState(() => {
    const params = queryString.parse(location.search);
    return params.status || 'all';
  });

  useEffect(() => {
    const params = queryString.parse(location.search);
    setFiltered(params.status || 'all');
  }, [location.search]);

  const handleStatus = (todoChange) => {
    todoChange.status = todoChange.status === 'new' ? 'completed' : 'new';
    const newTodoList = [...todolist];

    setTodoList(newTodoList);
  };

  const handleShowAll = () => {
    const queryParams = { status: 'all' };
    history.push({
      pathName: match.path,
      search: queryString.stringify(queryParams),
    });
  };

  const handleShowNew = () => {
    const queryParams = { status: 'new' };
    history.push({
      pathName: match.path,
      search: queryString.stringify(queryParams),
    });
  };

  const handleShowCompleted = () => {
    const queryParams = { status: 'completed' };
    history.push({
      pathName: match.path,
      search: queryString.stringify(queryParams),
    });
  };

  const todolistFiltered = useMemo(() => {
    return todolist.filter((todo) => {
      console.log('run');
      return filtered === 'all' || filtered === todo.status;
    });
  }, [todolist, filtered]);

  const handleSubmitForm = (value) => {
    console.log(value);
  };

  return (
    <div>
      <h3>TodoRouteForm</h3>
      <TodoFormRoute onSubmitForm={handleSubmitForm} />
      <h3>ToDoRouteList</h3>
      <TodoListRoute
        todolist={todolistFiltered}
        onChangeStatus={handleStatus}
      />

      <button onClick={handleShowAll}>Show All</button>
      <button onClick={handleShowNew}>Show New</button>
      <button onClick={handleShowCompleted}>Show Completed</button>
    </div>
  );
}

export default ListRoutePage;

import { useEffect, useState } from 'react';
import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';
import Pagination from './components/Pagination';
import queryString from 'query-string';
import PostFilterForm from './components/PostFilterForm';

import ListPage from './Pages/ListPage';
import DetailPage from './Pages/DetailPage';

import {
  Route,
  Link,
  NavLink,
  Switch,
  useRouteMatch,
} from 'react-router-dom/cjs/react-router-dom';
import NotFound from '../../Components/NotFound';
import { useLocation } from 'react-router-dom/cjs/react-router-dom.min';

function TodoFeature() {
  // const [postList, setPostList] = useState([]);
  // const [pagination, setPagination] = useState({
  //   _page: 1,
  //   _limit: 9,
  //   _totalRows: 1,
  // });

  // const [filtered, setFiltered] = useState({
  //   _page: 1,
  //   _limit: 9,
  //   title_like: '',
  // });

  // useEffect(() => {
  //   const getPostList = async () => {
  //     const params = queryString.stringify(filtered);
  //     const requestUrl = `https://js-post-api.herokuapp.com/api/posts?${params}`;

  //     const respon = await fetch(requestUrl);
  //     const responData = await respon.json();
  //     const { data, pagination } = responData;

  //     setPostList(data);
  //     setPagination(pagination);
  //   };

  //   getPostList();
  // }, [filtered]);

  // const handelTodoClick = (todoItem, index) => {
  //   const list = [...postList];

  //   const newPostList = list.filter((postItem) => postItem.id !== todoItem.id);

  //   setPostList(newPostList);
  // };

  // const handleSubmitChange = (value) => {
  //   const randomNumber = Math.ceil(Math.random() * 1000);

  //   const newPostItem = {
  //     id: randomNumber,
  //     ...value,
  //   };

  //   const newPostList = [...postList, newPostItem];
  //   setPostList(newPostList);
  // };

  const handlePageChange = (newPage) => {
    setFiltered({
      ...filtered,
      _page: newPage,
    });
  };

  const handleSeachPost = (searchValue) => {
    setFiltered({
      ...filtered,
      _page: 1,
      title_like: searchValue.searchTitlePost,
    });
  };

  const routerMatch = useRouteMatch();
  const location = useLocation();
  console.log(location);
  return (
    <div>
      <h3>TodoList</h3>
      {/* <TodoForm onSubmitForm={handleSubmitChange} /> */}
      {/* <PostFilterForm onChangeSearchPost={handleSeachPost} />
      <TodoList todoList={postList} onTodoClick={handelTodoClick} />
      <Pagination pagination={pagination} onPageChange={handlePageChange} /> */}

      <Switch>
        <Route path={routerMatch.path} component={ListPage} />
        <Route
          path={`${routerMatch.path}/:todoId`}
          exact
          component={DetailPage}
        />
        <Route component={NotFound} />
      </Switch>
    </div>
  );
}

export default TodoFeature;

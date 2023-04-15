import React, { useState } from 'react';
import {
  Route,
  Switch,
  useRouteMatch,
} from 'react-router-dom/cjs/react-router-dom';

import ListRoutePage from './pages/ListPage';
import RouterDetaiPage from './pages/DetailPage';

TodoRoute.propTypes = {};

function TodoRoute() {
  const routeMatch = useRouteMatch();
  return (
    <div>
      <Switch>
        <Route exact path={routeMatch.path} component={ListRoutePage} />
        <Route
          exact
          path={`${routeMatch.path}/:todoId`}
          component={RouterDetaiPage}
        />
      </Switch>
    </div>
  );
}

export default TodoRoute;

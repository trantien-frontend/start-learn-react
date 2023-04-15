import { NavLink, Route, Switch } from 'react-router-dom/cjs/react-router-dom';
import AlbumFeature from './Features/Ablum';
import CounterFeature from './Features/Counter';
import TodoRoute from './Features/TodoWithRouter';
import Header from './Components/Header';

function App() {
  return (
    <div>
      <Header />

      <Switch>
        <Route path='/todos' component={TodoRoute} />
        <Route path='/albums' component={AlbumFeature} />
        <Route path='/' component={CounterFeature} />
      </Switch>
    </div>
  );
}

export default App;

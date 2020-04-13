import React from 'react';
import { HashRouter, Switch, Route } from 'react-router-dom';
import Home from './components/Home';
import MovieDetail from './components/MovieDetail';

const App = () => (
  <HashRouter>
      <Switch>
        <Route exact path='/' render={props => (
            <Home {...props} />
          )} />
        <Route path='/details/:id' render={props => (
            <MovieDetail {...props} />)} />
      </Switch>
  </HashRouter>
);

export default App;
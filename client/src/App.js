import React, { Fragment} from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import NoMatch from './components/NoMatch';
import NavBar from './components/NavBar';
import Board from './components/Board';
import Boards from './components/Boards';
import Card from  './components/Card';

const App = () => (
  <Fragment>
    <NavBar />
    <Switch>
      <Route exact path='/' component={Home} />
      <Route exact path='/about' component={About} />
      <Route exact path='/lists/:list_id/cards' component={Card} />
      <Route exact path='/boards' component={Boards} />
      <Route exact path='/boards/:id' component={Board} />
      <Route component={NoMatch} />
    </Switch>
  </Fragment>
)

export default App;
import React from 'react';
import '../styles/App.scss';
import Server from './Server'
import Login from './Login'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/server" exact component={Server} />
        <Route path="/" exact component={Server} />
        <Route path="/login" exact component={Login} />
      </Switch>
    </Router>
  );
}

export default App;

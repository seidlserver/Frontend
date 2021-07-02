import React from 'react';
import '../styles/App.scss';
import Server from './Server'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/server" exact component={Server} />
        <Route path="/" exact component={Server} />
      </Switch>
    </Router>
  );
}

export default App;

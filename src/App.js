import React from 'react';
import {BrowserRouter as Router ,Route, Switch} from 'react-router-dom';
import PokeRouter from './Pokemon/Router';

function App() {
  return (
    <Router>
        <Switch>
          <Route path='/' component={PokeRouter}/>
        </Switch>
    </Router>
  );
}

export default App;

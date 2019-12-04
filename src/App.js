import React from 'react';
import {BrowserRouter as Router ,Route, Switch} from 'react-router-dom';
import './App.css';
import List from './components/List';
import PokemonDetail from './components/PokemonDetail';

function App() {
  return (
    <Router>
      <Switch>
        <div className="App">
          <h1>PokeDex</h1>
          <Route exact path='/' component={List}/>
          <Route exact path='/:name/' component={PokemonDetail}/>
        </div>
      </Switch>
    </Router>
  );
}

export default App;
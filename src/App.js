import React from 'react';
import {BrowserRouter as Router ,Route, Switch} from 'react-router-dom';
import './App.css';
import List from './components/List';
import PokemonDetail from './components/PokemonDetail';
import Header from './components/Header';

function App() {
  return (
    <Router>
      <Switch>
        <div className="App">
          <Header/>
          <Route exact path='/' component={List}/>
          <Route exact path='/:name/' component={PokemonDetail}/>
        </div>
      </Switch>
    </Router>
  );
}

export default App;
import React from 'react';
import {BrowserRouter as Router ,Route, Switch} from 'react-router-dom';
import './App.css';
import List from './components/List';
import PokemonDetail from './components/PokemonDetail';
import Header from './components/Header';

function App() {
  return (
    <Router>
      <div className='App '>
        <Header/>
        <Switch>
          <Route exact path='/' component={List}/>
          <Route path='/:name/' component={PokemonDetail}/>
        </Switch>
      </div>
    </Router>
  );
}

export default App;

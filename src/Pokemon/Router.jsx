import React from 'react';
import { Route, Switch } from 'react-router-dom';
//import HomeViewFactory from '../views/HomeViewFactory';
import ListViewFactory from '../views/ListViewFactory';
import PokeService from '../services/PokeService';
import DetailViewFactory from '../views/DetailViewFactory';

const pokeService = PokeService();
const ListView = ListViewFactory(pokeService);
//const HomeView = HomeViewFactory(pokeService);
const DetailView = DetailViewFactory(pokeService)

const PokeRouter = () => {
  return (
    <div className='App '>
      <Switch>
        <Route exact path='/' component={ListView}/>
        <Route path='/:name' component={DetailView}/>
      </Switch>
    </div>
  );
};

export default PokeRouter;

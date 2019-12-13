import React from 'react';
import Header from '../shared/atoms/Header';
import ListViewFactory from '../views/ListViewFactory';
import PokeService from '../services/PokeService';

const pokeService = PokeService();
const ListView = ListViewFactory(pokeService);

const HomeViewFactory = () => {
  const HomeView = () => {
    return (
      <div>
        <Header/>
        <ListView/>
      </div>
    )
  };
  return HomeView;
}

export default HomeViewFactory;

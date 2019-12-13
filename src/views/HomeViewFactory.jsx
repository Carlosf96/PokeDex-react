import React from 'react';
import Header from '../shared/atoms/Header';
import ListViewFactory from '../views/ListViewFactory';


const HomeViewFactory = (pokeService) => {
  const ListView = ListViewFactory(pokeService);

  const HomeView = () => {
    return (
      <>
        <Header/>
        <ListView/>
      </>
    )
  };

  return HomeView;
}

export default HomeViewFactory;

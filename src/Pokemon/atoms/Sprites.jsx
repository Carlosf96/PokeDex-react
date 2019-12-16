import React from 'react';
// import * as url from './pokeBall.jpg';

const Sprites = ({sprite, styl}) => {
  return sprite ? (
    <img src={sprite} className={styl} alt="pokemon_sprite" />
  ) : (
    <h1>Loading...</h1>
  );
};

export default Sprites;

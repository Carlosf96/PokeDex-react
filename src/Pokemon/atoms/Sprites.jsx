import React from 'react';
// import * as url from './pokeBall.jpg';

const Sprites = ({sprite}) => {
  return sprite ? (
    <img src={sprite} alt="pokemon_sprite" />
  ) : (
    <h1>Loading...</h1>
  );
};

export default Sprites;

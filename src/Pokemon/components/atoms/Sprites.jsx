import React from 'react';
// import * as url from './pokeBall.jpg';

const Sprites = ({sprites}) => {
  return sprites ? (
    <img src={sprites["front_default"]} alt="pokemon_sprite" />
  ) : (
    <h1>Loading...</h1>
  );
};

export default Sprites;

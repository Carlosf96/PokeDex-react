import React from 'react';

const Sprites = ({sprites}) => {
  return sprites ? (
    <img src={sprites["front_default"]} alt="pokemon_sprite" />
  ) : (
    <p>No Image</p>
  );
};

export default Sprites;